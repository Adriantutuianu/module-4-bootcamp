// WRITE YOUR CODE HERE

var studentName = ["student1", "student2", "student3", "student4", "student5"];
console.log("Total numbers of elements in the array is: " + studentName.length);

// I used for loop to display each name in console log
for (let i = 0; i < studentName.length; i++) {
  // Log the welcome message for each student
  console.log("Welcome to the class " + studentName[i]);
}

// Store the original name at a specific index
var indexToReplace = 0;
var originalName = studentName[indexToReplace];

// replaced one student with another
studentName[0] = "Student43";
console.log("student1 is replaced with " + studentName[0]);

// Check if the element has been replaced
if (originalName !== studentName[indexToReplace]) {
  console.log(studentName[indexToReplace] + " is in the class");
}
