
function computerPlay(){
    let colors = ["rock","paper","scissor"];
return colors[Math.floor(Math.random() * colors.length)];
}

  
  const playerSelection = prompt().toLowerCase()
  const computerSelection = computerPlay();

   let gami = function game(){
      if(playerSelection=="rock" && computerSelection=="scissor" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissor" && computerSelection=="paper"){
          console.log('win')
      }else if(playerSelection=="scissor" && computerSelection=="rock" || playerSelection=="rock" && computerSelection=="paper" || playerSelection=="paper" && computerSelection=="scissor"){
          console.log('lose')
      }else{
          console.log('tie')
      }}
