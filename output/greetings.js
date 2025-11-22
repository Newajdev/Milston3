const args = process.argv;

const name = args[2] || "guest"
const time = new Date().getHours()

let greeting;

if (time < 12) {
    greeting = "Good Moring"

} else if (time < 18) {
    greeting = "Good Afternon"
} else {
    greeting = "Good eveing"
}


console.log(`${greeting} ${name}`);
