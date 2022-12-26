const user = { userName: 'Santi', userAge: 34 };

const user2 = {
  santi: {
    age: 34,
    email: 'santi@santi.com'
  }
};

// ================================ //

const { userName, userAge } = user;

console.log(userName);

// ================================ //

const { userName: myVariableUserName, userAge: myVariableUserAge } = user;

console.log(myVariableUserName)

// ================================ //

const { santi: { age, email } } = user2

const { santi: { age: user2Age, email: user2Email } } = user2

console.log(user2Age);

// ================================ //

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [x, y, , , z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z); // 1, 2, 5

// ================================ //
// swap
let s = 8, n = 6;
[s, n] = [n, s]

// ================================ //
// Delete propertie from an object

const { ['propertieToDeleteFromTheObject']: propertieToDeleteFromTheObject, ...objectToReturn } = objectToBeDestructured;
