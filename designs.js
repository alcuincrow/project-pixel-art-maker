
// Your code goes here!

function makeGrid() {
    const getGridHeight = document.querySelector('#inputHeight').value;
    const getGridWidth = document.querySelector('#inputWidth').value;
    const populateGrid = document.querySelector('#pixelCanvas');
    populateGrid.innerHTML = "";
    for (let hight = 0; hight < getGridHeight; hight++) {
        const row = populateGrid.insertRow(-1);
        for (let width = 0; width < getGridWidth; width++) {
            const cell = row.insertCell(-1);
            cell.addEventListener('mousedown', function () {
                const color = document.getElementById('colorPicker').value; // Select color input
                this.style.backgroundColor = color;
            })


        }
    }
}
//Binds the submit button to the makeGrid function, and prevents the page from reloading
const sizePicker = document.querySelector('#sizePicker');// Select size input
sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();// When size is submitted by the user, call makeGrid()

});





