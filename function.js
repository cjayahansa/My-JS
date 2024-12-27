

const score={
    wins:0,
    losses:0,
    ties:0
};



function playgame(playname){



    if(playname==='Scissor'){ 
           console.log (pickcomputervalue());

                    
                console.log(computerMove);

                if (computerMove=='rock'){
                    result='you loss';
                }else if(computerMove=='paper'){
                    result='you win';
                }else if(computerMove=='scissors'){
                result='you tie';
                }


           


    }else if(playname==='rock'){
                                pickcomputervalue();
                console.log(computerMove);

                if (computerMove =='rock'){
                    result='you tie';
                }else if(computerMove=='paper'){
                    result='you win';
                }else if(computerMove=='scissors'){
                result='you loss';
                }
    
    
                
    




    }else if(playname==='paper'){
                 pickcomputervalue();
                
                console.log(computerMove);

                if (computerMove =='rock'){
                    result='you loss';
                }else if(computerMove=='paper'){
                    result='you tie';
                }else if(computerMove=='scissors'){
                result='you win';
                }
                
                
                
    }

    if(result==='you win'){
        score.wins +=1;
    }else if(result ==='you loss'){
        score.losses +=1;
    }else if(result ==='you tie'){
        score.ties +=1;
    };



    alert(`You Piked ${playname}. computerpiked ${computerMove}. ${result}
        wins ${score.wins}. loss ${score.losses}. tie ${score.ties}.`);

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