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
require('../../node_modules/mini-antui/es/popover/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popover/popover-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/filter/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/filter/filter-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/modal/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/collapse/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../node_modules/mini-antui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/collapse/collapse-item/index?hash=6704cef48625941ef2213d2fa68c0801760358b9');
require('../../node_modules/mini-antui/es/pagination/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/footer/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
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
require('../../node_modules/mini-antui/es/flex/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/flex/flex-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/extra/float/popover/index?hash=19e097880d99b667bb1fa901eb0e15f9d3a5ddb1');
require('../../pages/extra/float/filter/index?hash=6c28ef62e82812bc17c59748bb05ad700983c605');
require('../../pages/extra/float/modal/index?hash=dc097e95bee5cd7c6aad4989963d6d8251d4abfd');
require('../../pages/extra/float/popup/index?hash=01525438685c87440e7641caaa629d71119f5949');
require('../../pages/extra/float/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/collapse/index?hash=c9b3d9112b9f8d421a771c88be29b7cd6c4ec109');
require('../../pages/extra/view/pagination/index?hash=2a83eace0e1e86fb01d4ccab07f3b7c0fc8e47a8');
require('../../pages/extra/view/footer/index?hash=fd8a10d006fe66375ca6a6122898a84862c32f5d');
require('../../pages/extra/view/flex/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/tabs/index?hash=7cb28d5abb7820bd9a14f885c9305652e919b6f6');
require('../../pages/extra/view/list/index?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/extra/view/grid/index?hash=b449417de28a88425372e8a40318501ce3757174');
require('../../pages/extra/view/card/index?hash=881d5863354839860ca51a86452c7ed695b70632');
require('../../pages/extra/view/steps/index?hash=064a1400ed166b5e02670dfb160456d8b5d027e9');
require('../../pages/project/plife/index?hash=a529bcf8300873fd4ad2e872578852dad0e97dba');
require('../../pages/project/plife/result/index?hash=3fd29663bbee9c2a5fd8e5ca0b39fdb8f4ed9eff');
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