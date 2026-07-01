sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
],
    function (UIComponent,Device) {
        "use strict";

        return UIComponent.extend("exercise.Component", {
            metadata: {
              
                    manifest :"json"


            },
getConentDenistyClass:function(){
    if(!this._sContentDensityClass){

    if(Device.support.touch){
        this._sContentDensityClass = "sapUiSizeCozy";
    }
    else{
        this._sContentDensityClass = "sapUiSizeCompact";
    }
    return this._sContentDensityClass;
}
}
,
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);


            }
            





        });
    }
);