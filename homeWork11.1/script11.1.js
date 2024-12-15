// Знаходимо місце для таблиці
const container = document.getElementById('table-container');
const table = document.createElement('table');

for (let row = 0; row <= 10; row++) {
    const tr = document.createElement('tr');

    for (let col = 0; col <= 10; col++) {
        let cell;
        if (row === 0 || col === 0) {
            cell = document.createElement('th');
            cell.textContent = row === 0 && col === 0 ? '' : row || col;
        } else {
            cell = document.createElement('td');
            cell.textContent = row * col;
        }

        tr.appendChild(cell);
    }
    table.appendChild(tr);
}

container.appendChild(table);

