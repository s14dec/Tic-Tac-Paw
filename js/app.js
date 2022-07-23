
// 1-9 Tiles

const t1 = document.querySelector('#one')

const t2 = document.querySelector('#two')

const t3 = document.querySelector('#three')

const t4 = document.querySelector('#four')

const t5 = document.querySelector('#five')

const t6 = document.querySelector('#six')

const t7 = document.querySelector('#seven')

const t8 = document.querySelector('#eight')

const t9 = document.querySelector('#nine')

const tiles = document.querySelectorAll(".tile")


// Scores

const p1Score = document.querySelector('#p1-score')

const p2Score = document.querySelector('#p2-score')

const playAgain = document.querySelector('.play-again')

// Victory Screen

const victory = document.querySelector('.victory')


class game {

// Array for Tiles
tileArray = Array.from(tiles)

// Scores

p1Num = 0

p2Num = 0

// Player swapper

player1Turn = true

changeTurns () {
    this.player1Turn = !this.player1Turn
}

// Draw Checker
drawNum = 0

draw (){
    if(this.drawNum == 9){
        victory.innerHTML ='Draw!'
        document.body.classList.add('finished')
    }
}

// Check  to see if a player won

winCheck (whichPlayer) {
    const win = (pos1, pos2, pos3) => {
         
        if(tiles[pos1].classList.contains(whichPlayer)
        & tiles[pos2].classList.contains(whichPlayer)
        & tiles[pos3].classList.contains(whichPlayer)){

            return true
        }
        else{
            return false
        }
        }

        if (win(0, 3, 6)){
            return true
        }
        else if (win(1, 4, 7,)){
            return true
        }
        else if (win(2, 5, 8,)){
            return true
        }
        else if (win(0, 1, 2,)){
            return true
        }
        else if (win(3, 4, 5,)){
            return true
        }
        else if (win(6, 7, 8,)){
            return true
        }
        else if (win(0, 4, 8,)){
            return true
        }
        else if (win(2, 4, 6,)){
            return true
        }
    }



// Adding images using click event listener

click (){
      tiles.forEach(square => {
        square.addEventListener('click', (select)=> {
            
            const index = this.tileArray.indexOf(select.target)

            if(tiles[index].classList.contains('player1') ||
            tiles[index].classList.contains('player2')){
                return;
            }

            if(this.player1Turn == true){
                tiles[index].classList.add('player1')
                this.drawNum += 1
                this.draw()
                if(this.winCheck('player1')){
                    this.p1Num+= 1
                    
                    p1Score.innerHTML = this.p1Num
                    victory.innerHTML = 'Player 1 Wins!'
                    document.body.classList.add('finished')
                }
                this.changeTurns()
            }

            

            else{
                tiles[index].classList.add('player2')
                this.drawNum += 1
                this.draw()
                if(this.winCheck('player2')){
                    this.p2Num += 1
                    
                    p2Score.innerHTML = this.p2Num
                    victory.innerHTML = 'Player 2 Wins!'
                    document.body.classList.add('finished')
                }
                this.changeTurns()
                }

           
            })
        })
    }

    rematch(){
        playAgain.addEventListener('click', () => {

            localStorage.setItem('p1retain', this.p1Num)
            localStorage.setItem('p2retain', this.p2Num)
        location.reload()


        })
    }

}






window.onload = function() {
    p1 = localStorage.getItem('p1retain')
    p2 = localStorage.getItem('p2retain')
    p1Score.innerHTML = p1
    p2Score.innerHTML = p2
const tic= new game()

tic.click()
tic.rematch()


    
}




