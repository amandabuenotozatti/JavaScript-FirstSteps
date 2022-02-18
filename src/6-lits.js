console.log(`Working with Lists`);

const destinationList = new Array(
    `New York`,
    `Toronto`,
    `São Paulo`
);

//adding an item 
destinationList.push(`Curitiba`); 
console.log(destinationList);

//removing an item 
destinationList.splice(1, 1);
console.log(destinationList);
console.log(destinationList[1]);
