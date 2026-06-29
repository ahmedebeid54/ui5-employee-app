sap.ui.define(["sap/ui/core/mvc/XMLView"],

    function (XMLView) {

        "use strict";
        XMLView.create({
            id: "exercise.view.app",
            "viewName": "exercise.view.app"

        }).then(function (oView) {
            oView.placeAt("content");
        });
        // var oText = new Text({
        //     text: "Hello World !!"

        // })
        // oText.placeAt("content");
    }


)