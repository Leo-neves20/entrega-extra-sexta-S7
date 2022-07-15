


const result = []
let body = document.querySelector('body')

function getAnagramsOf(input){
    
    result.push(input)

}

const button = document.getElementById("findButton");
button.addEventListener("click", function () {

   const word = []

   let typedText = document.getElementById("input").value;
   word.push(typedText)
     
    for(let i = 0; i < palavras.length; i++){

        
        let palavrasFormatada = alphabetize(palavras[i])
        let wordFormatada     = alphabetize(word[0])

        if(palavrasFormatada == wordFormatada){

            getAnagramsOf(palavras[i])

        }

    }

    let arrayStrnig = result.toString().replace(/,/g," ")

    let textContent = document.createElement("p")
    textContent.innerText = arrayStrnig 
    return body.appendChild(textContent)

});

function alphabetize(a){

    return a.toLowerCase().split("").sort().join("").trim()

}





