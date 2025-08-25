class Person {
    constructor(FirstName,LastName,age,gender) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.age = age;
        this.gender = gender;
    }
    FullName() {
        return `${this.FirstName} ${this.LastName}`;
    }

    Details() {
        return `${this.FullName()} \n ${this.age} \n ${this.gender}`;
    }
}

class Student extends Person{
    constructor(FirstName,LastName,age,gender,email,marks){
        super(FirstName,LastName,age,gender);
        this.email = email;
        this.marks = marks;
    }
    getStudentDetails(){
        return `${this.Details()} \n ${this.email} \n ${this.marks}`
    }
}

const s1 = new Student("Tarak","Sri Chandrahas",20,"Male","luckychandrahas@gmail.com",90);
console.log(s1.getStudentDetails());