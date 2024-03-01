// UNION( | )
var option = "something";
option = 50;
option = "redirecting";
console.log(option);
var user = {
    name: "Guest",
    id: 1,
};
var user2 = {
    adminId: 2,
    isAdmin: true,
    adminName: "Harsh",
};
console.log(user);
console.log(user2);
// ! Narrowing down the union
function getId(id) {
    // id.toUpperCase() // ❌
    if (typeof id === "string") {
        return id.toUpperCase(); //string methods valid
    }
    return id; //numberMethod valid
}
console.log(getId(34));
console.log(getId("34"));
