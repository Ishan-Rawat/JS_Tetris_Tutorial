/*
*The fist DOMlistner is used to make sure that the code in this file is read after all the code has been read after all the code in HTML  
 file has been read.
*Another way of achieving this is to put the script tag at the end of the HTML file.
*We need to make sure that all our java script code is in between the parentheses, This is done to make sure that the code is picked up by 
 the script tag in the HTML file 
*/
//Reminder: need to study OOP concepts for JS. Don't really get how the .dot notation is being used below.
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid'); //dont really know the return type and all the details, but what this function does is 
    //that it allows us to manipulate div elements with the class="grid" using the grid variable
    
    let squares = Array.from(document.querySelectorAll('.grid div'));
    //Again, not too knowledgeable abt this func but it allows us to refer to squares in the grid using array indexes.
    
    const ScoreDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');

    const width = 10; //stores width of the grid

    //Written about forEach() in the someNotes.txt file

    /* in the following lines we are storing the cells that make up each of the shapes.The arrays are 2D and each row stores the various 
       rotations of the shapes*/
    
    //The Tetrominoes
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ]

    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]

    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    let currentPosition = 4; //the position from where our tetromino starts getting drawn
    let current = theTetrominoes[0][0] //Notice the way we access the first element of lTetromino array

    /* Now we will create a function that will color the corresponding squares in the grid for the shape stored in the current array.
    * Each of these squares is basically a div that is inside an element(another div) that has the class name grid
    */
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino'); //We use .classList.add() to access the CSS stylesheet to add the style to the tetromino
        })
    }
})