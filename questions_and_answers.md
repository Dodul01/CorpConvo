<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: The output will be (A:{}) an empty object {}.Because greetign and greeting are not the same variable greetign was not declared before but assigned an empty object. Javascript will assign greetign as a new variable in the global scope and set the value as an empty object {}.The greeting was declared but has no value if we console log it will be undefined.
</b></summary>
<p>
  
#### Answer: ? 
<i></i>
</p>

</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: The output of this code will be (C: "12") 12 and its type will be string. Because when we are calling the function we pass 1 as number and 2 as string. Sum function Concatinate a and b as number + string which is 12 and its data type also change to string.</b></summary>
<p>

#### Answer: ?

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: In this code output will be (A:['🍕', '🍫', '🥑', '🍔']) the food array [ '🍕', '🍫', '🥑', '🍔' ]. we declare a variable called info and assign an object with property called favoriteFood assign a value from food array on other line we change the property value and we console log the food array.</b></summary>
<p>

#### Answer: ?


</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: The output of this code will be (B) Hi there, undefined. In sayHi function take a parameter called name but when we are calling the function we didn't pass any value so javascript set the name value as undefined. The output of this code will be Hi there, undefined.</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer:The output of this code willbe (C: 3). In this code we assign count value as 0 and nums with an array. we are looping on the nums useing forEach and checking the nums array each item is truty if it is truthy then we are incresing the count value by 1. count value will be 3 here because it will not increse the value on first itaration as we know 0 is a falsy value.</b></summary>
<p>

#### Answer: ?

</p>
</details>
