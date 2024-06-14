//percentage
//this calculate percentage for 5 subjects
//subjects
//maths
//physics
//chemistry
//english
//biology
//student details
let student_id = "765QUYT";
let mathScore = 86;
let physicScore = 86;
let chemistryScore = 78;
let engishScore = 70;
let biologyScore = 77;
//totalmarks
let totalMarks = 500;
let finalResult = ((mathScore + physicScore + chemistryScore + biologyScore + engishScore) / totalMarks) * 100;
let resultSheet = "student" + student_id + "obtained this percentage" + finalResult + "%";
console.log(resultSheet);
let myPercentage = 79;
if (myPercentage >= 80 && myPercentage <= 100) {
    console.log("your grade is A+");
}
else if (myPercentage >= 70 && myPercentage <= 80)
    console.log("your grade is A");
else if (myPercentage >= 60 && myPercentage <= 70)
    console.log("your grade is B");
else
    console.log("failed");
export {};
