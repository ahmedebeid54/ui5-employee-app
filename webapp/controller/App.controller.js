sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/m/MessageBox"],
    function(Controller, MessageToast, MessageBox){
        "use strict";
return Controller.extend("exercise.controller.App",{
    onSubmitPress: function(){
        var oComboBox = this.getView().byId("comboBox");
        var sSelectedKey = oComboBox.getSelectedKey();
        MessageToast.show("Welcome....Selected Key is: " + sSelectedKey);
        MessageBox.information("Welcome....Selected Key is: " + sSelectedKey);
    }

})
    })