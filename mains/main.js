const quote = document.querySelector(".quote");
const adviceNumber = document.querySelector("h3");
const adviceButton = document.querySelector(".btn");
const loader = document.querySelector(".loader");
let counter = 0;

getAdvice();

adviceButton.addEventListener("click",()=>{
    getAdvice();
});





function isLoading(loading){
    if(loading){
        loader.classList.remove("hideLoader");
        quote.classList.add("hideQuote");
        return;
    }

    loader.classList.add("hideLoader");
    quote.classList.remove("hideQuote");
}

async function getAdvice(){
    isLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const {slip: {advice}} = await response.json();
    isLoading(false);
    
    counter += 1;
    adviceNumber.textContent = `ADVICE #${counter < 10 ? "0" + counter : counter}`;
    
    quote.textContent = advice;

}






