sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"purchaseorderapp/test/integration/pages/PurchaseOrderSrvList",
	"purchaseorderapp/test/integration/pages/PurchaseOrderSrvObjectPage",
	"purchaseorderapp/test/integration/pages/PurhcaseItemSrvObjectPage"
], function (JourneyRunner, PurchaseOrderSrvList, PurchaseOrderSrvObjectPage, PurhcaseItemSrvObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('purchaseorderapp') + '/test/flp.html#app-preview',
        pages: {
			onThePurchaseOrderSrvList: PurchaseOrderSrvList,
			onThePurchaseOrderSrvObjectPage: PurchaseOrderSrvObjectPage,
			onThePurhcaseItemSrvObjectPage: PurhcaseItemSrvObjectPage
        },
        async: true
    });

    return runner;
});

