"use strict";
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
     
    let playerOneWins = 0;
    let playerTwoWins = 0;
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

    const resetBoard = () => 
    {
        for (let i = 0; i < rows; i++) 
        {
         board[i] = ['', '', '']; 
        }
        return board;
    }

    const setBoard = () =>
    {
    for(let i = 0; i < rows; i++)
        {
        board[i] = [];
        for(let j = 0; j < columns; j++)
            {
                board[i][j] = '';
            }
        
        }
    return board;
    } 


            const playGame = (currentPlayer) =>
            {
                const spotTaken = (row, col) =>
                    {
                        if (board[row][col] === 'X' || board [row][col] === 'O')
                            {
                                alert("That spot is taken. Please try again")
                                rowColumn();
                            }
                    }
                    const rowColumn = () =>
                    { 
                        const row = prompt("Enter row:");
                    
                        const col = prompt("Enter column:");
                    
                        if (row === "0" || row === "1" || row === "2") 
                        {
                        if (col === "0" || col === "1" || col === "2") 
                            {
                            spotTaken(row, col);
                            board[row][col] = currentPlayer; // Assuming player is 'X' or 'O'
                            console.log(board);  // Display updated board
                            checkWin(currentPlayer);
                            currentPlayer = switchPlayer(currentPlayer);
                            console.log(`It is the other player's turn! Place ${currentPlayer} now`);
                            setTimeout(rowColumn, 300);
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
                            resetBoard();
                            return;
                          
                        } 
                        else if (player === 'O')
                        {
                            console.log(`PlayerTwo WINS! PlayerTwo's score: ${++playerTwoWins}`);
                            resetBoard();
                            return;
                        }
                     
                    }
                    else
                    {
                     checkTie();
                    }
                }
                
            };
           
            const checkTie = () =>
            {
                for(let i = 0; i < rows; i++)
                {
                    for(let j = 0; j < columns; j++)
                    {
                    if (board[i][j] === '')
                    return;
                    }
                }
                console.log("It's a tie!");
                resetBoard();
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




