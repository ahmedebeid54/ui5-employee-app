sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/m/MessageBox"],
    function(Controller, MessageToast, MessageBox){
        "use strict";
return Controller.extend("exercise.controller.App",{
    onSubmitCustomer: function(){
         MessageToast.show("Customer submitted successfully");
  

    }
,       onInit: function(){
            var sClass = this.getOwnerComponent().getConentDenistyClass();
           this.getView().addStyleClass(sClass);
        }
})
    })