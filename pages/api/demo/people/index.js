Page({
  data:{
    // 
    person:[],
    phone:[],
    dingType:0
  },
  choosePeople(){
    dd.complexChoose({
      title:"测试通讯录",
      multiple:true,
      success:(res)=>{
        this.setData({
          person:res.users
        })
      },
      fail:(err)=>{
        console.log("报错:",JSON.stringify(err));
      }
    })
  },
  ding(){
    dd.complexChoose({
      title:"测试通讯录",
      success:(res)=>{
        const chooseUser = res.users;
        let users = [];
        for(let i=0;i<chooseUser.length;i++){
          users.push(chooseUser[i].userId)
        }
        dd.createDing({
          users:users,
          bizType:this.data.dingType
        })
      }
    })
  },
  dingType(ev){
    const value = ev.detail.value;
    this.setData({
      dingType:value
    })
  },
  getPhone(){
    dd.choosePhonebook({
      success:(res)=>{
        this.setData({
          phone:res
        })
      }
    })
  },
  dingCall(){
    dd.complexChoose({
      title:"测试通讯录",
      maxUsers:1,
      success:(res)=>{
        let temp = [res.users[0].userId]
        dd.callUsers({
          users:temp,
          success:(res)=>{
            console.log("成功",JSON.stringify(res))
          },
          fail:(err)=>{
            console.log("报错:",JSON.stringify(err))
          }
        })
      }
    })
  },
  phoneCall(){
    dd.choosePhonebook({
      success:(res)=>{
        const phone = res[0].mobile;
        dd.showCallMenu({
          phoneNumber:phone,
          code:"+86",
          success:(res)=>{
            console.log(JSON.stringify(res));
          },
          fail:(err)=>{
            console.log("报错:",JSON.stringify(err));
          }
        })
      }
    })
  }
})