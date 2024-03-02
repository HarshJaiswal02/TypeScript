// function has dual nature :Object - Function
function User(username, id) {
  this._username = username;
  this._id = id;

  Object.defineProperty(this, "username", {
    set: function (value) {
      this._username = value;
    },
    get: function () {
      return this._username.toUpperCase();
    },
  });

  Object.defineProperty(this, "id", {
    // set: function (value) {
    //   this._id = value;
    // },  //✅🙈still works fantastic
    get: function () {
      return this._id.toUpperCase();
    },
  });
}

const user = new User("Harsh", "2021kuec2023");
console.log(user.username);
console.log(user.id);
