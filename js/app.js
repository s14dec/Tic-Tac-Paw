
// 1-9 Tiles

const t1 = document.querySelector('#1')

const t2 = document.querySelector('#2')

const t3 = document.querySelector('#3')

const t4 = document.querySelector('#4')

const t5 = document.querySelector('#5')

const t6 = document.querySelector('#6')

const t7 = document.querySelector('#7')

const t8 = document.querySelector('#8')

const t9 = document.querySelector('#9')


// Scores

const p1Score = document.querySelector('#p1-score')

const p2Score = document.querySelector('#p2-score')


class game {

// Keep track of player turns

player1Turn = true

changeTurns() {
    this.player1Turn = !player1Turn
}


// Player images

player1Image(id){
img1 = document.createElement('img')
img1.src = '/Users/Pro/Desktop/Tic-Tac-Paw/pictures/gray cat.png'
document.getElementById(id).appendChild(img1)
}


// Function for clicking on tiles
    // Use a click event listener to add an image to the tile

// Check if someone won and display message

}