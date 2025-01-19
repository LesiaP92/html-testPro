class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }
    displayInfo (){
        return`Coach: ${this.name} Specialization: ${this.specialization}, Rating: ${this.rating}`;
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);
const coachInfoDiv = document.getElementById('coach-info');
function addCoachInfo (coach){
    const paragraph = document.createElement('p');
    paragraph.textContent = coach.displayInfo();
    coachInfoDiv.appendChild(paragraph);
}
addCoachInfo(coach1);
addCoachInfo(coach2);