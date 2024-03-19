let firstcard=10
let secondcard=4
let sum=firstcard + secondcard
let cards=[firstcard,secondcard]
let hasblackjack=false
let isalive= true
let message
let messageEL=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardsEL=document.getElementById("cards-el")
function getrandomcard()
{
    let randomno= Math.floor(Math.random()*6)
    return randomno
}
console.log(getrandomcard())
function startgame()
{
    
    sumEL.textContent="Sum:" + sum
    cardsEL.textContent="Cards:"
    for(let i=0;i<cards.length;i++)
    {
        cardsEL.textContent+=cards[i] + " "
    }
if(sum<=20)
{
    message="Do you want to draw a new card?"

}
else if(sum%21===0)
{
    message="You've got a BLACKJACK!!!"
    hasblackjack=true
}
else{
    message="No luck! Try Again"
    hasblackjack=false
}
messageEL.textContent=message

}

function newcard()
{
    let newcrd=getrandomcard()
    sum+=newcrd
    cards.push(newcrd)
    startgame()
}