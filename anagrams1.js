



let body = document.querySelector('body')
let textContent = document.createElement("p")

function getAnagramsOf(input){

const result = []

    for(let i = 0; i < palavras.length; i++){

        
        let palavrasFormatada = alphabetize(input)
        let wordFormatada     = alphabetize(palavras[i])

        if(palavrasFormatada == wordFormatada){

            result.push(palavras[i])

        }

    }

    textContent.innerText = result
    return result
    
}

const button = document.getElementById("findButton");
button.addEventListener("click", function () {
  
   let typedText = document.getElementById("input").value;
   getAnagramsOf(typedText)
     
});

function alphabetize(a){

    return a.toLowerCase().split("").sort().join("").trim()

}

body.appendChild(textContent)





