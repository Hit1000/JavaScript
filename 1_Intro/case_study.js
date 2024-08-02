class code{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDetail(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class student extends code{
    constructor(name, age, studentId, major){
        super(name, age);
        this.studentId = studentId;
        this.major = major;
    }
    getStudentDetails(){
        return `${this.getDetail()}, Student ID: ${this.studentId}, Major: ${this.major}`;
    }
}

class Professor extends code{
    constructor(name, age, employeeId, department){
        super(name, age);
        this.employeeId = employeeId;
        this.department = department;
    }
    getStudentDetails(){
        return `${this.getDetail()}, Employee ID: ${this.employeeId}, Department: ${this.department}`;
    }
}

class course{
    constructor(courseName, courseCode){
        this.courseName = courseName;
        this.courseCode = courseCode;
    }
}