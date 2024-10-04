sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ndc/BarcodeScanner"
], function (Controller, MessageBox, MessageToast, BarcodeScanner) {
    "use strict";

    return Controller.extend("qrscanner.controller.View1", {
        onInit: function () {
            // Initialization code can go here
        },

        onScan: function () {
            var that = this;
            BarcodeScanner.scan(
                function (mResult) {
                  
                        MessageBox.show("We got a QR code\n" +
                            "Result: " + mResult.text + "\n" +
                            "Format: " + mResult.format + "\n");
                    })
                },
                function (error) {
                    MessageBox.error("Scanning failed: " + error);
                }
   }   );
        }
   );

