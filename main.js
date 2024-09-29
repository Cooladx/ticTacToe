"use strict";


/* # TO DO 

Create a Board array inside function Game object
    board, rows, and columns are private types.
    Reset board
    Set up 3 rows and 3 columns for tic tac toe for the board

    
    
Create function displayController 
Players will be stored as objects so it will return players as needed for game to operate
Set player 1 with controller 'X' character and player 2 with controller 'O' character
prompt user to select which player they want
    If player 1 selected, X is assigned 
    else if 
        player 2 selected, O is assigned



Create function playGame
allow user that has taken in selected player to start game
Set gameEnd to false
display message to enter a row column for the gameBoard
while gameEnd is true, 
    prompt user to enter row, column
    get the board to input those values in by index






*/




const game = function Gameboard ()
{
    const rows = 3;
    const columns = 3;
    const board = [];

    // For error testing
    const seeboard = () => 
        {
            return board;
        }

    // Reseting board for user
    const resetBoard = () => 
    {
        return board.length = 0;
    }

    // Setter function to get private board array
    const setBoard = () =>
    {
    for(let i = 0; i < rows; i++)
        {
        board[i] = [];
        for(let j = 0; j < columns; j++)
            {
                board[i][j] = [];
            }
        
        }
    return board;
    } 

   

    // Return object to the calling function
    return {resetBoard, setBoard, seeboard};
    
}();




const players = function displayController ()
{
    const player1 = 'X';
    const player2 = 'O';
    
    
    const selectPlayer = () =>
    {
    const choice = prompt("Please select player 1 or player 2 with following options: 1, 2");
    
    if (choice === "1")
    {
        console.log(`You have chosen player 1: ${player1}`);
        return player1;
    }   

    else if (choice === "2")
    {
        console.log(`You have chosen player 2: ${player2}`);
        return player2;
    }


    else
        {
        // If user won't enter correct selections, a message populates and function reruns again!
        alert("Please try again");
        return selectPlayer();
        }
    }

    return {player1, player2, selectPlayer};
}();




function playGame (player)
{
    let gameEnd = false;
    
    while (!gameEnd)
    {
        const selectRow = () =>
        {
            prompt("Enter row:")        
        }
        
      
        const columnMove = prompt("Enter column:")
        console.log(board);


        gameEnd = true;
    }

}






// Start console program

const board = (game.setBoard());
console.log("Let's get started with the game!");
const player = players.selectPlayer();
playGame(player);


