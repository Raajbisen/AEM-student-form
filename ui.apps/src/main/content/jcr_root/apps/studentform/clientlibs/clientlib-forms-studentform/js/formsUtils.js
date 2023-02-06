"use strict";
var SF = SF || {};

SF.currentFormContext = {

    "firstName": "",
    "lastName": "",
    "Gender": "",
    "courseType": "",
    "mobileNumber": "",
    "email": "",
};


SF.UTILS = function () {

    // to show error popupon form if any field is not valid
    var showErrorPopup = function (param) {
        var result = guideBridge.validate([], param.studentMainPanel.somExpression, true);
        if (result) {
            SF.currentFormContext.firstName = param.firstName.value;
			SF.currentFormContext.lastName = param.lastName.value;
            SF.currentFormContext.Gender = param.genderRadio.value;
            SF.currentFormContext.courseType = param.courseropdown.value;
            SF.currentFormContext.mobileNumber = param.mobNumber.value;
            SF.currentFormContext.email = param.email.value;
            alert("Student Application is submitted");
        } else {
            param.errorPopupFragment.visible = true;
        }
    }

        /**
       Makes REST API call
       **/
    var makeRestAPICall = function (restURI, method, data, inputType, outputType, headers){
            $.ajax({
                type: method,
                url: restURI,
                headers: (headers && typeof headers !== "undefined") ? headers : {},
                cache: false,
                data: JSON.stringify(data),
                contentType: inputType,
                dataType: outputType
            });
    }
    return {
        showErrorPopup: showErrorPopup,
        makeRestAPICall: makeRestAPICall
    }
}();