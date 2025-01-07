let chances=5;
document.getElementById("chance").innerHTML = chances
let wcount = 0;

let game_board = document.querySelector('.gameboard');
let flipped_card_array = [] 


let cards_array = [
                    {name:"instagram",icon:"<i class='fa-brands fa-instagram'></i>"},
                    {name:"facebook",icon:"<i class='fa-brands fa-facebook'></i>"},
                    {name:"twitter",icon:"<i class='fa-brands fa-twitter'></i>"},
                    {name:"linkedin",icon:"<i class='fa-brands fa-linkedin'></i>"},
                    {name:"telegram",icon:"<i class='fa-brands fa-telegram'></i>"},
                    {name:"youtube",icon:"<i class='fa-brands fa-youtube'></i>"},
                    {name:"instagram",icon:"<i class='fa-brands fa-instagram'></i>"},
                    {name:"facebook",icon:"<i class='fa-brands fa-facebook'></i>"},
                    {name:"twitter",icon:"<i class='fa-brands fa-twitter'></i>"},
                    {name:"linkedin",icon:"<i class='fa-brands fa-linkedin'></i>"},
                    {name:"telegram",icon:"<i class='fa-brands fa-telegram'></i>"},
                    {name:"youtube",icon:"<i class='fa-brands fa-youtube'></i>"}
                  ];


display_card()

shuffle();

console.log(cards_array);

function shuffle(){
    for(i=cards_array.length-1;i>=0;i--){
        let random_index =  Math.floor(Math.random()*(i));
        [cards_array[i],cards_array[random_index]]=[cards_array[random_index],cards_array[i]];
    }
}




function display_card(){
    cards_array.forEach((obj,index)=>{
        let col = document.createElement('div')
        let card = document.createElement('div')
        col.setAttribute('class','col-3')
        card.setAttribute("class",'card-back active container display-3 h-75 l1   d-flex align-items-center justify-content-center ')
        col.append(card)
        card.setAttribute('id',index)
        game_board.append(col)

        card.addEventListener('click',flipcard)
    
        
    })
}


function flipcard(){
    if(flipped_card_array.length<2 && this.classList.contains('active')){

        let id = this.getAttribute("id")
        this.classList.remove("card-back")
        this.classList.remove("active")
        this.classList.add('flip')
        this.innerHTML = cards_array[id].icon
        flipped_card_array.push(this)
        console.log(flipped_card_array);
         
        if(flipped_card_array.length==2){
            setTimeout(checkmatch,500)
            
            
        }   
    }
}

function checkmatch(){
    let c1 = flipped_card_array[0].getAttribute('id');
    let c2 = flipped_card_array[1].getAttribute('id');

    if(cards_array[c1].name == cards_array[c2].name){
        
        flipped_card_array[0].innerHTML = ""
        flipped_card_array[1].innerHTML = ""
        flipped_card_array[1].style.border = "1px solid transparent"
        flipped_card_array[0].style.border = "1px solid transparent"
        document.getElementById("result").innerHTML = "Matched"
        
        wcount++;
        if(wcount==6)
            {
                setTimeout(()=>{
                    alert(`Game Over You Won by Chances : ${chances-4}/5`)
                    resetgame()
                    document.getElementById("result").innerHTML = ""
                },500)
            }
          
    }
    else{
         flipped_card_array[0].innerHTML = ""
        flipped_card_array[1].innerHTML = ""
         flipped_card_array[0].classList.add("card-back")
        flipped_card_array[1].classList.add("card-back")
        flipped_card_array[0].classList.add("active")
        flipped_card_array[1].classList.add("active")
        flipped_card_array[1].classList.remove('flip')
        flipped_card_array[0].classList.remove('flip')
        chances--;
        document.getElementById("chance").innerHTML = chances
        if(chances<=0)
            {
                alert("Game over you lost")
                resetgame()
            }
    }
    
    flipped_card_array = []

}

function resetgame()
{
    game_board.innerHTML = ''   
    shuffle()
    display_card()
    chances = 5;
    document.getElementById("chance").innerHTML = chances
    wcount = 0

}