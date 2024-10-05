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



// First factory function, basically lets the user pick the player they wish to be.
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

    return {selectPlayer};
}();


// Another factory function but this is for the game itself

const game = function Gameboard ()
{
    const rows = 3;
    const columns = 3;
    const board = [];
    const winningCombos = [
        [[0, 0], [0, 1], [0, 2]], // Row 1
        [[1, 0], [1, 1], [1, 2]], // Row 2
        [[2, 0], [2, 1], [2, 2]], // Row 3
        [[0, 0], [1, 0], [2, 0]], // Column 1
        [[0, 1], [1, 1], [2, 1]], // Column 2
        [[0, 2], [1, 2], [2, 2]], // Column 3
        [[0, 0], [1, 1], [2, 2]], // Diagonal 1
        [[0, 2], [1, 1], [2, 0]], // Diagonal 2
    ];
    
    
    // Points counter for both players
    let playerOneWins = 0;
    let playerTwoWins = 0;


    // For error testing
    const seeboard = () => 
        {
            return board;
        }

    // Reseting board for user
    const resetBoard = () => 
    {
        for (let i = 0; i < rows; i++) 
        {
         board[i] = ['', '', '']; // Initialize with empty strings
        }
        return board;
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


            const playGame = (currentPlayer) =>
            {
             
                    const rowColumn = () =>
                    { 
                        const row = prompt("Enter row:");
                    
                        const col = prompt("Enter column:");
                    
                        if (row === "0" || row === "1" || row === "2") 
                        {
                        if (col === "0" || col === "1" || col === "2") 
                            {
                            // Update the board at board[row][col] with player's mark
                            board[row][col] = currentPlayer; // Assuming player is 'X' or 'O'
                            console.log(board);  // Display updated board
                            checkWin(currentPlayer)
                            currentPlayer = switchPlayer(currentPlayer);
                            console.log(`It is the other player's turn! Place ${currentPlayer} now`);
                            setTimeout(rowColumn, 3000);
                            } 
                        else 
                            {
                            alert("Invalid column! Please enter 0, 1, or 2.");
                            rowColumn();
                            }
                        }   
                        else 
                            {
                            alert("Invalid row! Please enter 0, 1, or 2.");
                            rowColumn();
                            }
                
                    }     
                    rowColumn();
            }

            const switchPlayer = (currentPlayer) =>
            {
                if (currentPlayer ==='X')
                {
                    currentPlayer = 'O';
                }
                else if (currentPlayer === 'O')
                 {
                    currentPlayer = 'X';
                 }   
                 return currentPlayer;

            }



            const checkWin = (player) => 
            {
                // Check each winning combination
                for (let combo of winningCombos) 
                {
                    // Destructure the winning combo to get row and column indexes
                    const [pairOne, pairTwo, pairThree] = combo.map(([row, col]) => board[row][col]);
                    
                    // Check if all three positions are the same and equal to the player
                    if (pairOne === player && pairTwo === player && pairThree === player) 
                    {
                        // Increment score based on player
                        if (player === 'X') 
                        {
                            console.log(`PlayerOne WINS! PlayerOne's score: ${++playerOneWins}`);
                            return resetBoard();
                          
                        } 
                        else 
                        {
                            console.log(`PlayerTwo WINS! PlayerTwo's score: ${++playerTwoWins}`);
                            return resetBoard();
                        }
                    }
                }
                
            };
            
            const checkTie = () =>
            {

            }

    // Return object to the calling function
    return {resetBoard, setBoard, playGame, checkWin, checkTie, seeboard};    
}();



// Set up the game
const board = console.log(game.setBoard());  // Initialize the game board
console.log("Let's get started with the game!");
const player = players.selectPlayer(); // Get the selected player


// Start the game loop
game.playGame(player); // Pass the selected player to start the game




