// ---------
// FUNCTIONS
// ---------

// Resetting the box everytime you click "play". Then it takes the value of the select and uses it to create the right number of boxes and to give them the right
// height and width.
function generateBoxes (){
    gridContainer.innerHTML = '';
    const value = parseInt(document.getElementById('difficulty_select').value);
    console.log(value); 

    for (i=1; i<=value; i++){
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.innerHTML = `${i}`;
        newBox.style.width = `calc(100% / ${Math.sqrt(value)})`;
        newBox.style.height = `calc(100% / ${Math.sqrt(value)})`;
        gridContainer.append(newBox);

        // Calling the activating function
        newBox.addEventListener('click', activatingBox);
    } 

}

// Activating the clicked box
function activatingBox(){
    this.classList.add('active');
}



// ---------
// MAIN
// ---------
const playBtn = document.getElementById('play_btn');
const gridContainer = document.querySelector('.grid_container');

playBtn.addEventListener('click', generateBoxes);
