function playgame(playname){
    if(playname='Scissor'){ 
           console.log (pickcomputervalue());

                    
                console.log(computerMove);

                if (computerMove=='rock'){
                    result='you lose';
                }else if(computerMove=='paper'){
                    result='you win';
                }else if(computerMove=='scissors'){
                result='you tie';
                }


                alert(`You Piked scissors. computerpiked ${computerMove}. ${result}`);


    }else if(playname='rock'){
                                pickcomputervalue();
                console.log(computerMove);

                if (computerMove =='rock'){
                    result='you tie';
                }else if(computerMove=='paper'){
                    result='you Win';
                }else if(computerMove=='scissors'){
                result='you loss';
                }
    
    
                alert(`You Piked Rock. computerpiked ${computerMove}. ${result}`);
    




    }else if(playname=paper){
                 pickcomputervalue();
                
                console.log(computerMove);

                if (computerMove =='rock'){
                    result='you loss ';
                }else if(computerMove=='paper'){
                    result='you Tie';
                }else if(computerMove=='scissors'){
                result='you win';
                }
                
                
                alert(`You Piked paper. computerpiked ${computerMove}. ${result}`);
    }

}



function pickcomputervalue(){
            const randomNumber= Math.random();
    console.log(randomNumber);

    if (randomNumber >=0 && randomNumber<1/3){
        computerMove='rock';
    }else if (randomNumber>1/3 && randomNumber <2/3){
        computerMove='paper';
    }else{
        computerMove='scissors';
    };
return 6;
}