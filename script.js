let seacrhInput = document.querySelector(".Search-home")
let seacrhButton = document.querySelector(".magnifier-home")

let blockOne = document.getElementById("BlockOne").outerHTML
let blockTwo = document.getElementById("BlockTwo").outerHTML
let blockThree = document.getElementById("BlockThree").outerHTML
let blockFour = document.getElementById("BlockFour").outerHTML
let blockFive = document.getElementById("BlockFive").outerHTML


let blockOneTxT = "Informatie"
let blockTwoTxT = "Cards"
let blockThreeTxT = "Home"

let searchArray = [blockOneTxT, blockTwoTxT, blockThreeTxT]


function searchAndRedirect() {
    let seacrhInputValue = seacrhInput.value
    for(let word of searchArray){
        if(word === seacrhInputValue){
            switch(seacrhInputValue){
                case "Informatie":
                    sessionStorage.setItem("Result", blockOne)
                    break;
                case "Cards":
                    sessionStorage.setItem("Result", blockTwo)
                    break;
                case "Home":
                    sessionStorage.setItem("Result", blockThree)
                    break;
            }
            window.location.href = "./search.html"
            return
        }
    }
    alert("Please enter correct data!")
}

seacrhButton.addEventListener("click", searchAndRedirect);

let modalInput = document.querySelector(".modal")
/* seacrhInput.addEventListener("click", function(){
    modalInput.classList.add("new")
    if(seacrhInput.value.className === "Search-home"){
        modalInput.classList.remove("new")
    }
}) */

seacrhInput.addEventListener("input", function(){
    if(seacrhInput.value.length > 0){
        modalInput.classList.add("new")
    }
    else{
        modalInput.classList.remove("new")
    }
    window.addEventListener("scroll", function(){
        let scrollValue = window.scrollY
        if(scrollValue > 10){
            modalInput.classList.remove("new")
        }
    })
    document.addEventListener("click", function(){
        modalInput.classList.remove("new")
    })
})

seacrhInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchAndRedirect();
    }
});
