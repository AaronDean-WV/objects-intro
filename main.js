const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

wardrobe.material = "Cedar";

console.log(wardrobe);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
// Use dot notation to output all of the dimensions of the Empire State Building to the terminal.

// Use square bracket notation to output the remaining 5 properties to the terminal. Create 5 variables first with the keys as their values. Use those variables to look up the values.

console.log(`The Empire State Building is ${empireStateBuilding.height} high and ${empireStateBuilding.squareFeet} square feet.`);

const constructionDate = empireStateBuilding["constructionDate"];
const cost = empireStateBuilding["cost"];
const owner = empireStateBuilding["owner"];
const architect = empireStateBuilding["architect"];
const address = empireStateBuilding["address"];

console.log(`Originally contructed in ${constructionDate} at a cost of ${cost} dollars. ${owner} and constructed by ${architect}`);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
// Output the names of the part-time instructors followed by the names of the full-time instructors in the terminal.
// Output only Andy and Zoe in the terminal.


const fullTimeEmp = nashvilleSoftwareSchool.instructors.fullTime;
const partTimeEmp = nashvilleSoftwareSchool.instructors.partTime;

for (let i = 0; i < fullTimeEmp.length; i++) {
    console.log(fullTimeEmp[i]) }; 
    for (let i = 0; i < partTimeEmp.length; i++) {
        console.log(partTimeEmp[i]) }; 


console.log(`The part time instructors are: 
${partTimeEmp}, and the full time instructors are ${fullTimeEmp}`
);