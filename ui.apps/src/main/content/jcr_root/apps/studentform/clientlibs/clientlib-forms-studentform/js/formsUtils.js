"use strict";
var SF = SF || {};

SF.UTILS = function () {

    // to show error popupon form if any field is not valid
    var showErrorPopup = function (param) {
        var result = guideBridge.validate([], param.studentMainPanel.somExpression, true);
        if (result) {
            alert("Student Application is submitted");
        } else {
            param.errorPopupFragment.visible = true;
        }
    }
    return {
        showErrorPopup: showErrorPopup,
    }
}();