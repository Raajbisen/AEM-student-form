"use strict";
var SF = SF || {};
SF.API = function () {
    //API Endpoints
    var URLs = {
        "submitUrl": "/content/hdfc_bl_forms/api/CustomerIdent.json"
          }


    //Request Json for Customer Identification and OTP Gen API
    var submitForm = function () {
        var jsonobj = {};
        jsonobj.requestString = {};
        jsonobj.requestString.firstName = SF.currentFormContext.firstName;
        jsonobj.requestString.lastName = SF.currentFormContext.lastName;
        jsonobj.requestString.gender = SF.currentFormContext.Gender;
        jsonobj.requestString.courseType = SF.currentFormContext.courseType;
        jsonobj.requestString.mobileNo = SF.currentFormContext.mobileNumber;
        jsonobj.requestString.email = SF.currentFormContext.email;
        return jsonobj;
    }
     return {
        URLs: URLs,
        submitForm: submitForm
     }
    
}();
