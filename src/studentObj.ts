import { Student } from "./student";

const Kavi = new Student("Kavi", 102, 90, 80, 85);
const Jalani = new Student("Jalani", 103, 95, 85, 90);
const Shahith = new Student("Shahith", 104, 80, 70, 75);
const Gajaram = new Student("Gajaram", 105, 85, 75, 80);
const vinoth = new Student("Vinoth", 106, 88, 78, 82);
const Banu = new Student("Banu", 107, 92, 82, 87);
const Vino = new Student("Vino", 108, 89, 79, 84);
const Titus = new Student("Titus", 109, 91, 81, 86);
const Pooja = new Student("Pooja", 110, 94, 84, 89);


console.log("Name of the kavi is: " + Kavi.getName());
console.log("Id of the kavi is: " + Kavi.getId());
console.log("html marks of the kavi is: " + Kavi.gethtmlMarks());
console.log("js marks of the kavi is: " + Kavi.getjsMarks());
console.log("css marks of the kavi is: " + Kavi.getcssMarks());
console.log("Average marks of the kavi is: " + Kavi.getAvgMarks());


export{}



