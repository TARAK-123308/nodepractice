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
        return `${this.FullName()}\n${this.age}\n${this.gender}`;
    }
}


const p1 = new Person("Tarak","Sri Cahndrahas",21,"Male");
console.log(p1.Details());

