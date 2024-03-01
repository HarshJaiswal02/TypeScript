"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    _id: "iuhw89c89euih",
    name: "Harsh",
    gender: "male",
    doSomething: function () {
        return "".concat(this.name);
    },
    getCoupon: function (cName, number) {
        return "CouponName: ".concat(cName, ", Number=").concat(number);
    },
};
console.log(user.getCoupon("Tex", 696));
