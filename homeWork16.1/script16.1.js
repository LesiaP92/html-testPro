class Student {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Заповнено!");
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Заповнено!");
        }
    }

    getAttendanceRate() {
        const attendedClasses = this.attendance.filter((day) => day === true).length;
        const totalClasses = this.attendance.filter((day) => day !== null).length;
        return totalClasses ? attendedClasses / totalClasses : 0;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceRate = this.getAttendanceRate();

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Добре!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Задовільно";
        } else {
            return "Погано!";
        }
    }
}

const student1 = new Student("Вовченко", "Сергій", 1991);
const student2 = new Student("Іванова", "Ольга", 1993);

student1.grades.push(90, 85, 94);
student2.grades.push(88, 93, 96);

student1.present();
student1.present();
student1.absent();
student2.present();
student2.absent();
student2.present();

console.log(`${student1.name} ${student1.surname}`);
console.log("Вік:", student1.getAge());
console.log("Середній бал:", student1.getAverageGrade());
console.log("Відвідуваність:", student1.getAttendanceRate());
console.log("Підсумок:", student1.summary());

console.log(`${student2.name} ${student2.surname}`);
console.log("Вік:", student2.getAge());
console.log("Середній бал:", student2.getAverageGrade());
console.log("Відвідуваність:", student2.getAttendanceRate());
console.log("Підсумок:", student2.summary());