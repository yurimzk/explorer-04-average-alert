const minimumAverage = 7;

const students = [
    {
        name: "John",
        firstTest: 8,
        secondTest: 6.9,
    },

    {
        name: "Peter",
        firstTest: 5,
        secondTest: 8.2,
    },

    {
        name: "Elen",
        firstTest: 7.9,
        secondTest: 7.0,
    },

    {
        name: "Charlotte",
        firstTest: 6.5,
        secondTest: 7,
    }
];

function getStudentAverage(student) {
    let studentAverage = (student.firstTest + student.secondTest) / 2
    if (studentAverage >= minimumAverage) {
        return `Congratulations ${student.name}, You're approved! \n Your average is ${studentAverage}`
    } else {
        return `Unfortunately your average of ${studentAverage} is not enough to pass ${student.name}!`
    };
};


for (let student of students) {
    let messageAlert = getStudentAverage(student)
    alert(messageAlert);
};