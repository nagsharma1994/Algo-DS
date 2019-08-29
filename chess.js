function chess(n){
    let line1 = ' '+ '#'+' '+ '#'+' '+ '#'+' '+ '#';
    let line2 = '#'+ ' '+'#'+ ' '+'#'+ ' '+'#'+ ' ';  
    for (let i=0;i<n;i++){
        if(i%2 ===0){
            console.log(line1);
        } 
		else{
			console.log(line2);
		}
    }
}

chess(4);