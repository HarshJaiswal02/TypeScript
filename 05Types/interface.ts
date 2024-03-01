interface User {
  readonly _id: string;
  name: string;
  gender: string;
  googleId?: number;
  //   doSomething: ( arg0: number )  => string;
  doSomething(): string;

  getCoupon(couponName: string, couponId: number): string;
}

// This is called = reopening of interface ....which was not a case in "type"
interface User {
  adding: string | number;
}

let user: User = {
  _id: "iuhw89c89euih",
  name: "Harsh",
  gender: "male",
  doSomething() {
    return `${this.name}`;
  },
  getCoupon(cName, number) {
    return `CouponName: ${cName}, Number=${number}`;
  },
  adding: 0,
};

console.log(user.getCoupon("Tex", 696));

// loosely coupled like like inheritance
interface AnotherUser extends User {
  // & in "type"
  role: "admin" | "guest";
}

export {};
