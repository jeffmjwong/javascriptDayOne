// const doggo = {
//   name: 'Edison',
//   breed: 'Groodle',
//   hobbies: ['walks', 'tennis balls', 'bamboozling']
// };

const me = {};
me.age = 28;
me['current location'] = 'Brisbane';
me.hobbies = ['read', 'write', 'code'];
delete me.age;
me.hobbies.forEach((hobby) => {
  console.log(hobby);
});
me.hobbies.push('swim');
me.hobbies.shift();
me.mother = {};
me.mother.name = 'Judy';
me.mother['current location'] = 'Melbourne';
me.mother.age = 40;
const doggo = {
  name: 'Lucky',
  breed: 'Golden Retriever',
  age: 5,
  printName: function() {
    console.log(`Doggo's name is ${this.name} and his age is ${this.age}.`);
  }
}
me.print_details = function() {
  return `My mother's name is ${this.mother.name}`;
};
console.log(me.hobbies);
console.log(me);
console.log(me.print_details());

const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };
delete brisbane_campus.street;
const message = `Brisbane campus street address is ${coder_academy.brisbane.street}`;
console.log(brisbane_campus);
console.log(message);
