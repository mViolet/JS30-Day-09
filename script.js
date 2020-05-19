const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello! I am %i %s string!", 1, "tiny");

//ES6 backticks
console.log(`My dog's names are ${dogs[0].name} & ${dogs[1].name}`);

// Interpolated
console.log("%c Here is some colorful text", 
    "font-size: 2em; color: white; border: 4px solid white; background: linear-gradient(90deg, rgba(170,58,180,1) 0%, rgba(253,132,29,1) 50%, rgba(178,252,69,1) 100%);");
// Styled

// warning!
console.warn(`Caution: ${dogs[0].name} the dog is a cuddle monster.`);

// Error :|
console.error("This dog appears to be broken");

// Info
console.info("A pumpkin is technically a berry.");

// Testing
console.assert(2 + 2 === 5, "Two plus two does not equal five!");

const p = document.querySelector('p');
console.assert(p.classList.contains("test"), "Does not contain the class 'test'"); //will not show up b/c 1st p has class .test

// clearing
// console.clear(); 

// Viewing DOM Elements
console.log(p); //shows you the element
console.dir(p); //shows you all the methods you can run on that element

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);    //specify start - can also use console.groupCollapsed();
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.groupEnd(`${dog.name}`);  //specify end of group
});

// counting
console.groupCollapsed("orange");

console.count("orange");
console.count("apple");
console.count("orange");
console.count("apple");
console.count("orange");

console.groupEnd("orange");

// timing
console.time("fetching data");   //start
fetch("https://api.github.com/users/mViolet")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fetching data");  //end
        // console.log(data);
    });

//console.table

console.table(dogs);