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
require('../../node_modules/mini-antui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/tabs/index?hash=b998354db5b64281090d8969355b2b3db41cda49');
require('../../node_modules/mini-antui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/vtabs/index?hash=b998354db5b64281090d8969355b2b3db41cda49');
require('../../node_modules/mini-antui/es/vtabs/vtab-content/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../node_modules/mini-antui/es/grid/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/card/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/steps/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/input-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/page-result/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/extra/view/footer/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/flex/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/pagination/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/collapse/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/tabs/index?hash=7cb28d5abb7820bd9a14f885c9305652e919b6f6');
require('../../pages/extra/view/list/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/grid/index?hash=b449417de28a88425372e8a40318501ce3757174');
require('../../pages/extra/view/card/index?hash=881d5863354839860ca51a86452c7ed695b70632');
require('../../pages/extra/view/steps/index?hash=064a1400ed166b5e02670dfb160456d8b5d027e9');
require('../../pages/project/plife/index?hash=4ebd76d5932655db30c27bd67ebeb700d746609f');
require('../../pages/project/plife/result/index?hash=10432093b8c21c939cca480ff51a1af30f7e1ec0');
require('../../pages/index/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/chart/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/chart/line/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
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