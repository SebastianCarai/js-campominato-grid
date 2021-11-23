// ---------
// FUNCTIONS
// ---------
function generateBoxes (){
    gridContainer.innerHTML = '';
    const value = document.getElementById('difficulty_select').value;
    console.log(value); 

    for (i=1; i<=value; i++){
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.innerHTML = `${i}`;
        newBox.style.width = `calc(100% / ${Math.sqrt(value)})`;
        newBox.style.height = `calc(100% / ${Math.sqrt(value)})`;
        gridContainer.append(newBox);

        newBox.addEventListener('click', activatingBox);
    } 

}

function activatingBox(){
    this.classList.add('active');
}



// ---------
// MAIN
// ---------
const playBtn = document.getElementById('play_btn');
const gridContainer = document.querySelector('.grid_container');

playBtn.addEventListener('click', generateBoxes);
