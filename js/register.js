console.log("hello");

const salon = {
  name: "The Lazy Fashion Pet",
  phone: "911",
  address: {
    street: "2nd st.",
    number: "420",
  },
  hours: {
    open: "9:00am",
    close: "9:30am",
  },
  pets: [],
};

console.log(salon.pets);

var {
  name,
  phone,
  address: { street, number },
  hours: { open, close },
} = salon;
console.log(open,close);
// function displayInfo() {
//   document.getElementById(
//     "information"
//   ).innerHTML = `<p>${name}, ${street},${number} </p><p> is open from ${open} to ${close}</p>`;
// }

class Pet {
  constructor(name, age, breed, gender, service, owner, contactPhone, weight) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.owner = owner;
    this.contactPhone = contactPhone;
    this.weight = weight;
  }
}
// var scooby = new Pet(
//   "Scooby",
//   50,
//   "Dane",
//   "Male",
//   "Hair Cut",
//   "Shaggy",
//   "555-555-5555",
//   "40lb"
// );
// var speedy = new Pet(
//   "Speedy",
//   30,
//   "Mixed",
//   "Male",
//   "Full Service",
//   "Bugs",
//   "556-556-5556",
//   "40lb"
// );

// var vega = new Pet(
//   "vega",
//   12,
//   "Mixed",
//   "Female",
//   "Full Service",
//   "Bugs",
//   "556-556-5556",
//   "40lb"
// );

// console.log(scooby);
// console.log(speedy);
// console.log(vega);

var txtName = document.getElementById("petName");
var txtAge = document.getElementById("petAge");
var txtBreed = document.getElementById("petBreed");
var txtGender = document.getElementById("petGender");
var txtService = document.getElementById("petService");
var txtOwner = document.getElementById("ownerName");
var txtPhone = document.getElementById("contactPhone");

var numberOfRegisteredPets = 0;
function register() {
  
  var thePet = new Pet(
    txtName.value,
    txtAge.value,
    txtBreed.value,
    txtGender.value,
    txtPhone.value,
    txtService.value,
    txtOwner.value
    );
    salon.pets.push(thePet);
    registerTally();
    displayCards();
    clearInputs();
  // get info from input
  // create generic object and pass info as params
  // push the generic obj into the array
  // display  object on html
}
// function displayNames(){
//   document.getElementById("pets").innerHTML = "";
//   for (var i = 0; i <  numberOfRegisteredPets; i++) {
//     document.getElementById("display-names").innerHTML += `<h2>Name:${salon.pets.name}</h2>`;
//   }
// }
function registerTally() {
  numberOfRegisteredPets += 1;
  document.getElementById("registered-pets-amount").innerHTML = `we have ${numberOfRegisteredPets} pet(s) being seen..`;
};

// function displayCards() {
//   document.getElementById("pets").innerHTML = "";
//   for (var i  = 0; i < salon.pets.length; i++) {
//     document.getElementById("pets").innerHTML += `
//       <div>
//       <h3> Name: ${salon.pets[i].name}</h3>
//       <p>Gender: ${salon.pets[i].gender}</p>
//       <p>Age: ${salon.pets[i].age}</p>
//       <p>Breed: ${salon.pets[i].breed}</p>
//       <p>Service: ${salon.pets[i].service}</p>
//       <p>Owner: ${salon.pets[i].owner}</p>
//       <p>Contact Phone: ${salon.pets[i].contactPhone}</p>
//       </div>`;
//   }
// }
// displayCards();
function displayCards() {
  document.getElementById("pets").innerHTML = "";
  for (var i = 0; i < salon.pets.length; i++) {
    document.getElementById("pets").innerHTML += `
      <div>
      <h3> ${salon.pets[i].name}</h3>
      </div>`;
  }
}
displayCards();
// display number of pets in salon
// display each pets name in a for loop

function clearInputs() {
  txtName.value = "";
  txtOwner.value = "";
  txtAge.value = "";
  txtBreed.value = "";
  txtService.value = "";
  txtPhone.value = "";
  txtGender.value = "";
}
