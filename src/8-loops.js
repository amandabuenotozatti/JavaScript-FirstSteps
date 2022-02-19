console.log(`Working with Lists`);

const destinationList = new Array(
    `New York`,
    `Toronto`,
    `São Paulo`
);

const destination = "Toronto";
let counter = 0;

while(counter < 3) {
    if(destinationList[counter] == destination) {
        console.log("Destination found.");
        break;
    } else {
        console.log("Destination does not exist.");
    }
    counter++;
}

//Using for 
for (let count = 0; count < 3; count ++) {
    if(destinationList[count] == destination) {
        console.log("Destination found.");
        break;
    } 
}


