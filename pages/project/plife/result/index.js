let DOMParser = require("/lib/dom-parser.js").DOMParser;

Page({
  data:{
    checkType:"",
    flag:-1,
    msg:"",
    rData:{}
  },
  onLoad(query){
    // {type: "scan"}
    this.setData({
      checkType:query.type,
    })
    // const proId = 
    const secure = "1b9ce0ec58da820e5b9e83d72fc8c5896d87b63f299d8f5e4e2314dc5b143c80";
    const url = "http://rew.cftig.com:80/index.php/api/codeinfo"
    const body = `
      <soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:rew.cftig.com">
      <soapenv:Header/>
      <soapenv:Body>
          <urn:codeinfo soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <secret xsi:type="xsd:string">${secure}</secret>
            <code xsi:type="xsd:string">${query.proId}</code>
            <ip xsi:type="xsd:string">ip_ding</ip>
          </urn:codeinfo>
      </soapenv:Body>
    </soapenv:Envelope>
    `
    const _this = this;
    dd.httpRequest({
      url:url,
      method:"POST",
      headers:{
        "Content-Type": "application/soap+xml"
      },
      dataType:'xml',
      data:body,
      success(res){
        const parser = new DOMParser();
        const doc = parser.parseFromString(res.data);
        const docText = JSON.parse(doc.getElementsByTagName("codeinfo")[0].firstChild.data);
        _this.setData({
          flag:docText.flag,
          msg:docText.msg,
          rData:docText.data
        })
        console.log(JSON.stringify(docText))
      },
      fail(err){
        dd.alert({
          content:JSON.stringify(err)
        })
        console.log(JSON.stringify(err));
      }
    })
  },
  onUnload(){
    if(this.data.checkType === 'scan'){
      dd.scan({
        success(res){
          dd.navigateTo({
            url:"/pages/project/plife/result/index?type=scan&proId="+res.code
          })
        },
        fail(err){
          console.log(err)
        }
      })
    }
  }
})