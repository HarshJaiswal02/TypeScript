const User = {
  // this.username : username;
  // this.id:id
  _name: "Harsh",
  _id: 2023,
  get username() {
    return `Appending fullName: ${this._name.concat(" Jaiswal")}`;
  },
  set username(value) {
    this._name = value;
  },
};

console.log(User.username);
