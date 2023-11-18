const container = document.querySelector('.container');
const btn = document.querySelector('.btn-change-grid');

btn.addEventListener('click', () => {
    let newGrid = window.prompt('how many?');
    if (newGrid <= 0 || newGrid > 100) {
        alert('must be more the 0 and less then 101 ')
    } else {
        // to delete the grid before creating a new one
        container.innerHTML = '';
        createGrid(newGrid);
    }
})
createGrid(16)// default grid

function createGrid(num) {
    let i = 1;
    let j = 1;
    while (i <= num) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row')
        container.appendChild(row)
        while (j <= num) {
            let column = document.createElement('div')
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = 'black'
            })
            column.setAttribute('class', 'column')
            row.appendChild(column)
            j++
        }
        j = 1;
        i++;
    }
}