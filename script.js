// 1 — Looping Through an Array

// for loop:

// const numbers = [10, 20, 30, 40];

// for (let i = 0; i < numbers.length; i++) 

//     {
//     console.log(numbers[i]);
//     }


// forEach loop:

// const numbers = [10, 20, 30, 40];

// numbers.forEach((num) => 
//     {
//     console.log(num);
//     });



// for...of loop:

//  const numbers = [10, 20, 30, 40];

// for (let num of numbers) 
//     {
//     console.log(num);
//     }


// for...in loop:

// const numbers = [10, 20, 30, 40];

// for (let index in numbers) 
//     {
//     console.log(numbers[index]);
//     }



// 2 — Loop Through an Object

const student = 
{
    Name: "Bala",
    Age: 21,
    Grade: "A"
};

for (let key in student) 
{
    console.log(key,":", student[key]);
}



// 3 — Using map()

const marks = [50, 60, 70, 80];

const newMarks = marks.map((mark) => {
    return mark - 10;
});

console.log(newMarks);



// 4 — Using filter()

const numbers = [5, 12, 8, 25, 3, 15];

const output = numbers.filter((value) => 
    {
    return value > 10;
    });

console.log(output);



// 5 — Using reduce()

const values = [5, 10, 15, 20];

const total = values.reduce((sum, num) => sum + num, 0);

console.log(total);