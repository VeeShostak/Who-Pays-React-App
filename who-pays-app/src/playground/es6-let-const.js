var nameVar = 'John';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
// error cannot redefine
//let nameLet = 'Mike';
nameLet = 'Julie'
console.log('nameLet', nameLet)


const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName() {
  var petName = 'Hal';
  return petName;
}
