string="";

let userScore =0,compScore =0;
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let compNum=0;
        let userNum =e.target.value;      
        if(userNum<4){
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            compNum =getRandomInt(3);
            switch(compNum){
                case 0:
                string2="paper";
                break;

                case 1:
                string2="scissor";
                break;

                case 2:
                string2="stone";
                break;

            }
            string =string + "Computer selected " + string2 ;
            document.querySelector('input').value=string;
        }
        
        if(compNum==userNum){
            var img =document.createElement("img");
            img.src="draw2.webp";
            var div =document.getElementById("x");
            div.appendChild(img);
            
        }
        else if(compNum==1 &&userNum==2 ||compNum==2 &&userNum==0||compNum==0 &&userNum==1){
            var img =document.createElement("img");
            img.src="win2.webp";
            userScore= userScore +1;
            var div =document.getElementById("x");
            div.appendChild(img);
        }
        else if(compNum==1 &&userNum==0 ||compNum==2 &&userNum==1||compNum==0 &&userNum==2){
            var img =document.createElement("img");
            img.src="loose2.webp";
            compScore= compScore+ 1;
            var div =document.getElementById("x");
            div.appendChild(img);
            
        }
        
        let header = document.querySelector("score");
        header.innerText =  `Computer-Score = ${compScore} \n Your-Score = ${userScore}`;
        div.prepend(img);
        string="";
    })
})


