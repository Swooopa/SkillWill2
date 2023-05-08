// 1.1

function getSmallestAgeWithName(users, name) {
    let smallestAge = Infinity; // set initial value to infinity so any age will be smaller
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === name && users[i].age < smallestAge) {
        smallestAge = users[i].age;
      }
    }
    return smallestAge;
  }

  const users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
  ];
  
  const name = 'Lasha';
  
  const smallestAge = getSmallestAgeWithName(users, name);
  
  console.log(`The smallest age of ${name} is ${smallestAge}`);
  
// 1.2

function copyUser(user) {
    return Object.assign({}, user);
  }
  
  const user = {name: 'John', age: 30};

const copiedUser = copyUser(user);

console.log(copiedUser); // Output: {name: 'John', age: 30}


// 1.3


function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // random number between 1 and 6
  }
  
  let aTries = 0;
  let bTries = 0;
  
  while (true) {
    const aRoll = rollDice();
    const bRoll = rollDice();
    aTries++;
    bTries++;
    console.log(`A rolled ${aRoll}, B rolled ${bRoll}`);
  
    if (aRoll === 3) {
      console.log(`A wins in ${aTries} tries!`);
      break;
    }
  
    if (bRoll === 3) {
      console.log(`B wins in ${bTries} tries!`);
      break;
    }
  }
  