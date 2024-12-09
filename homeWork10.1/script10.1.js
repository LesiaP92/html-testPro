const user = {
    name: "Olena",
    userName: "Kolos",
    age: 32,
    location: "Odesa. Ukraina.",

    getInfo() {
        return `Ім'я: ${this.name}\nПрізвище: ${this.userName}\nВік: ${this.age}\nМісце проживання: ${this.location}`
    }
};
console.log(user.getInfo());