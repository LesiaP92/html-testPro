let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};
function calculateSalary(group) {
    let totalSum = 0;
    if (Array.isArray(group)) {
        for (let worker of group) {
            totalSum += worker.salary;
        }
    } else {
        for (subGroup of Object.values(group)) {
            totalSum += calculateSalary(subGroup);
        }
    }
    return totalSum;
}
let total = calculateSalary(company);
console.log('Загальна сума зарплат:', total);