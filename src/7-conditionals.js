console.log(`Working with Lists`);

const destinationList = new Array(
    `New York`,
    `Toronto`,
    `São Paulo`
);

const customerAge1 = 15;
const customerAge2 = 25;
const underAgeWithParents = true;

if (customerAge1 >= 18) {
    console.log("Allowed age.");
    destinationList.splice(1, 1);
} else if (underAgeWithParents) {
    console.log("Authorized purchase");
} else {
    console.log("Not allowed age to buy the ticket.");
}




