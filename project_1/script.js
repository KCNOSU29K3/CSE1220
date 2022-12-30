document.onload = function() {
    
    // getting buttons and elements
    var paraBold = document.getElementById("boldingParagraph")
    var paraBoldButton = document.getElementById("boldParaButton")

    var paraChange = document.getElementById("paraChangeContent")
    var paraChangeButton = document.getElementById("paraChangeContentButton")

    var changeImage = document.getElementById("changeImage")
    var changeImageButton = document.getElementById("changeImageButton")
    
    // setting clicked vars
    var paraBoldClicked = false
    var paraChangeClicked = false
    var changeImageClicked = false

    // setting event listeners

    paraBoldButton.addEventListener("click", () => {
        if (paraBoldClicked) {
            paraBold.style = "font:700;color:white"
            paraBoldClicked=false
        }
        else {
            paraBold.style = "color:white"
            paraBoldClicked=true
        }
    })

    paraChangeButton.addEventListener("click", () => {
        if (paraChangeClicked) {
            paraChange.textContent = "This is a paragraph. It will change content when the button below is clicked."
            paraChangeClicked = false
        }
        else {
            paraChange.textContent = "See, it changed. Click to change back."
            paraChangeClicked = true
        }
    })

    changeImageButton.addEventListener("click", () => {
        if (changeImageClicked) {
            changeImage.src = "./images/image_1.jpg"
            changeImageClicked = false
        }
        else {
            changeImage.src = "./images/image_2.jpg"
            changeImageClicked = true
        }
    })

}