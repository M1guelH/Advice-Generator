
const url = new Request('https://api.adviceslip.com/advice');

randomAdvice();

function randomAdvice(){
    fetch(url)

    .then(response => response.json() )

    .then(data => {

        getData(data);
            
    })

    .catch(err => console.log(err))    

}






function getData (adviceData){

       let adviceText =document.getElementById("AdviceText")
       adviceText.innerHTML =`${adviceData.slip.advice}`

       let adviceId = document.getElementById("AdviceId")
        adviceId.innerHTML =`Advice #${adviceData.slip.id}`

        console.log(adviceData.slip)
    
}









   



