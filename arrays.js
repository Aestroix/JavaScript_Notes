var values = ['name', 'karmanya', 82, 1]
console.log(values);
values.pop()
console.log(values);
values.push('something')
console.log(values);

values.unshift('hello')
console.log(values);
values.shift()
console.log(values);

console.log(values.indexOf(82)); // return -1 if the value is not present there

console.log(Array.from(values[0]));
