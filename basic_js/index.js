//types and conditions
// some function is written dedicated to use a medium for compiling
// for example alert() is use for the browser to compile Javascript

// alert("this is not a number")
// back tick quotes are also use for template literal
//

const msg = "is such a bitch";
const name = `Alissa`;

console.log(msg);

const w = `Who is ${name}`;
console.log(w);

//conditionals in Javascript

const condition = 2 < 1;

if (condition) {
  console.log(`condition is ${condition}`);  
} else {
  console.log(`condition is ${condition}`);
};

// multiple condition with else if (condition)

const weather = 'rainy';

if (weather == 'sunny') {
  console.log(`it is a ${weather} day`);
} else if (weather == 'snowy'){
  console.log(`it is a ${weather} day`);
} else if (weather == 'rainy') {
  console.log(`it is a ${weather} day`);
} else{ console.log('speak English bitch');
};

//equivalent the the above code, we use switch case 

switch (weather) {
  case 'sunny':
    console.log(`it is a ${weather} day`);
    break;
  case 'snowy':
    console.log(`it is a chilly ${weather} day`);
    break;
  case 'rainy':
    console.log(`it is a wet ${weather} day`);
    break;
  default:
    console.log('speak English bitch');
}
