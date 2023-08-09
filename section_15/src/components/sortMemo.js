const data = [5, 10, 4, 3];

data.sort();
//10, 3, 4, 5
//converts elements to strings, then sorts them

data.sort((a, b) => {
    return a - b;
});
//3, 4, 5, 10
//if it returns a negative number, they swap elements

const dataString = [ 't',  'A', 'a', 'B', 'b' ];

dataString.sort();
//A, B, a, b, t

dataString.sort((a, b) => {
    return a.localeCompare(b);
})
//a, A, b, B, t


//how to sort the array of objects

const dataVegi = [
    { name: 'Tomato', cost: 10, weight: 5 },
    { name: 'Carrot', cost: 15, weight: 2 },
    { name: 'Onion', cost: 5, weight: 7 },
];

//[Step 1]sorting based on costs (numbers)
function getSortValue(vegetable) {
    return vegetable.cost;
}

//[Step 1*]another valiation
// function getSortValue(vegetable) {
//     return vegetable.cost / vegetable.weight
// }

//[Step 2]
dataVegi.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB)
    } else {
        return valueA - valueB
    }
})

//[Step 2*]dscending order (return negative )
dataVegi.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB)
    } else {
        return valueA - valueB * -1
    }
})

//OR [Step 2*]
const sortOrder = 'asc'; // 'desc'

dataVegi.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    //if the sort order variable is equal to ASC, give me back 1. Otherwise give me back -1
    const reverseOrder = sortOrder === 'asc' ? 1 : -1;

    if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder
    } else {
        return (valueA - valueB) * reverseOrder
    }
})





