sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {

        onInit: function () {

        },

        onButtonLinkPress: function (oEvent) {
            var oArchiveObject = oEvent.getSource().getBindingContext("ArchiveObjects").getObject();
            window.open(oArchiveObject.ArchiveUrl);
        }
    };
});