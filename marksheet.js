const userName = prompt("Enter the Username:");

const subject1 = prompt("Enter the name of the first subject:");
const subject2 = prompt("Enter the name of the second subject:");
const subject3 = prompt("Enter the name of the third subject:");

const totalMarksPerSubject = 100;
const totalSubjects = 3;

const obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));
const obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
const obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));

const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
const totalMarks = totalMarksPerSubject * totalSubjects;
const percentage = (totalObtainedMarks / totalMarks) * 100;

document.getElementById("username").innerHTML= userName;

document.getElementById("sub1").innerHTML= subject1+ " " + obtainedMarks1 + " marks";
document.getElementById("sub2").innerHTML= subject2+ " " + obtainedMarks2 + " marks";
document.getElementById("sub3").innerHTML= subject3+ " " + obtainedMarks3 + " marks";
document.getElementById("total").innerHTML= "Obtained marks " +totalObtainedMarks + " marks";
document.getElementById("percentage").innerHTML= "Obtained Percentage " + percentage.toFixed(2) + " %";



// document.write(`<p><strong>${subject1}:</strong> ${obtainedMarks1} marks</p>`);
// document.write(`<p><strong>${subject2}:</strong> ${obtainedMarks2} marks</p>`);
// document.write(`<p><strong>${subject3}:</strong> ${obtainedMarks3} marks</p>`);
// document.write(`<h3>Total Obtained Marks: ${totalObtainedMarks}</h3>`);
// document.write(`<h3>Total Marks: ${totalMarks}</h3>`);
// document.write(`<h3>Percentage: ${percentage.toFixed(2)}%</h3>`);


