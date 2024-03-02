"use strict";
// https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses
Object.defineProperty(exports, "__esModule", { value: true });
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, blur, burst, operatingSys) {
        this.cameraMode = cameraMode;
        this.blur = blur;
        this.burst = burst;
        this.operatingSys = operatingSys;
    }
    //   cameraMode: string;
    //   blur: number;
    //   burst: string;
    Instagram.prototype.takePhoto = function () {
        // console.log("sayCheese");
        return "String";
    };
    return Instagram;
}());
var user = new Instagram("Front", 40, "Sharp", "Android");
console.log(Object.keys(user));
// console.log(Object.entries(user)); //🔩 complier shows error tsconfig-lib must have es2017 or above
console.log(user.operatingSys);
console.log(typeof user.takePhoto());
