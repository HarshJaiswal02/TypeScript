// https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses

// Why interface? implement in class?

interface TakePhoto {
  cameraMode: string;
  blur: number;
  burst: string;
}
interface SayCheese {
  takePhoto(): void;
}

class Instagram implements TakePhoto, SayCheese {
  //   cameraMode: string;
  //   blur: number;
  //   burst: string;

  //🐞 used interface to return void but i can override it to string!!
  takePhoto() {
    // console.log("sayCheese");
    return `String`;
  }
  constructor(
    public cameraMode: string,
    public blur: number,
    public burst: string,
    public operatingSys: string
  ) {}
}

let user = new Instagram("Front", 40, "Sharp", "Android");

console.log(Object.keys(user));
// console.log(Object.entries(user)); //🔩 complier shows error tsconfig-lib must have es2017 or above
console.log(user.operatingSys);
console.log(typeof user.takePhoto());
export {};


// Todo "Abstract classes"