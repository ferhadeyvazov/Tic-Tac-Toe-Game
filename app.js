const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById('player');
const errorText = document.getElementById('error');
let player ="X";
let gameOver = false;
let winner;
function startGame(){
    playerText.textContent = `${player}'s Turn`;
    blocks.forEach(block=>block.addEventListener('click',
    ()=>chooseArea(block)
    ))
}
function chooseArea(block){
    if (block.textContent==="") {
        block.textContent = player;
        if(player === "X"){
            block.style.color= "#D53F8C"
        }else{
            block.style.color='#6B46C1';
        }
        turnPlayer();
    } else {
        errorText.textContent="Hey Buddy it's not empty";
        block.style.border = "4px solid red";
        setTimeout(()=>{
            errorText.textContent="";
            block.style.border = "2px solid black";
        },2000)
    }
    
    checkWin();
    checkTie();
    if(gameOver){
        playerText.textContent=`"Game is Over", ${winner} Won`;
        blocks.forEach(block=>block.style.pointerEvents = 'none');
    }
}

function turnPlayer(){
    if(player === 'X'){
        player = 'O';
        playerText.textContent = `${player}'s Turn`;
        return;
    }
    else if(player === 'O'){
        player = 'X';
        playerText.textContent = `${player}'s Turn`;
        
    }
}
function checkWin(){
    // win
    checkRows();
    checkColumns();
    checkDiagonals();
}
function checkTie(){
    // Beraberlik
    const values = [];
    blocks.forEach(block=>values.push(block.textContent));
    console.log(values);
    if(!values.includes('')){
        playerText.textContent="Tie(Bərabər Qaldınız) !";
        blocks.forEach(block=>block.style.pointerEvents='none');
    }

}

function checkRows(){
    let row1 = blocks[0].textContent===blocks[1].textContent
    &&blocks[0].textContent===blocks[2].textContent&&blocks[0].textContent!=="";
    let row2 = blocks[3].textContent===blocks[4].textContent
    &&blocks[3].textContent===blocks[5].textContent&&blocks[3].textContent!=="";
    let row3 = blocks[6].textContent===blocks[7].textContent
    &&blocks[6].textContent===blocks[8].textContent&&blocks[6].textContent!=="";
    
    if(row1||row2||row3){
        gameOver=true;
    }
    if(row1) return winner = blocks[0].textContent
    if(row2) return winner = blocks[3].textContent
    if(row3) return winner = blocks[6].textContent
}
function checkColumns(){
    let column1 = blocks[0].textContent===blocks[3].textContent
    &&blocks[0].textContent===blocks[6].textContent&&blocks[0].textContent!=="";
    let column2 = blocks[1].textContent===blocks[4].textContent
    &&blocks[1].textContent===blocks[7].textContent&&blocks[1].textContent!=="";
    let column3 = blocks[2].textContent===blocks[5].textContent
    &&blocks[2].textContent===blocks[8].textContent&&blocks[2].textContent!=="";
    
    if(column1||column2||column3){
        gameOver=true;
    }
    if(column1) return winner = blocks[0].textContent
    if(column2) return winner = blocks[1].textContent
    if(column3) return winner = blocks[2].textContent

}
function checkDiagonals(){
    let dioganal1 = blocks[0].textContent===blocks[4].textContent
    &&blocks[0].textContent===blocks[8].textContent&&blocks[0].textContent!=="";
    let dioganal2 = blocks[2].textContent===blocks[4].textContent
    &&blocks[2].textContent===blocks[6].textContent&&blocks[2].textContent!=="";
    
    if(dioganal1||dioganal2){
        gameOver=true;
    }
    if(dioganal1) return winner = blocks[0].textContent
    if(dioganal2) return winner = blocks[2].textContent

}



startGame();