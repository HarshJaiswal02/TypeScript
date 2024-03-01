// UNION( | )

let option: string | number = "something";

option = 50;
option = "redirecting";

console.log(option);

type User = {
  name: string;
  id: number;
};

// type + Union

type Admin = {
  adminName: string;
  adminId: number;
  isAdmin: true; //always true Literal type of assignment {👀 at last example of plane seat booking}
};

let user: User | Admin = {
  name: "Guest",
  id: 0o1,
};

let user2: User | Admin = {
  adminId: 0o2,
  isAdmin: true,
  adminName: "Harsh",
};

console.log(user);
console.log(user2);

// ! Narrowing down the union

function getId(id: number | string) {
  // id.toUpperCase() // ❌

  if (typeof id === "string") {
    return id.toUpperCase(); //string methods valid
  }

  return id; //numberMethod valid
}

console.log(getId(34));
console.log(getId("34"));

let seatAllotment: "aisle" | "window" | "middle";

seatAllotment = "middle";
// seatAllotment ="crew" ❌


export {};
