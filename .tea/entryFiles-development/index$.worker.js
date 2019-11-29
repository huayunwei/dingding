if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/pie/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/column/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/area/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/line/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/f2/pie/index?hash=80185eeb6ba22ee3d32ed92cbdecb50186fc8abf');
require('../../pages/f2/ring/index?hash=80185eeb6ba22ee3d32ed92cbdecb50186fc8abf');
require('../../pages/f2/column/index?hash=7495c8e0cdf7b404f98dc1510a0929bc3ede472a');
require('../../pages/f2/area/index?hash=dc8bd2e180a1da150af60c192bbc5a486058ce2e');
require('../../pages/f2/line/index?hash=b3d353fc8958a26656f8245eb2bf4ce5fa50ab81');
require('../../pages/f2/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/api/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/api/demo/people/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/api/demo/location/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/api/demo/share/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/api/demo/systemInfo/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/api/demo/interaction/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/api/demo/auth/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/api/demo/image/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/api/demo/record/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/native/scroll/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/native/swiper/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/native/view/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/native/form/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/native/h5/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/native/icon/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/native/image/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/native/progress/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/native/text/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/native/navigator/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/native/navigator?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}