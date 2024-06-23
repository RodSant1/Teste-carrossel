var Left = window.document.getElementById("left")
var Coment1 = window.document.getElementById("coment-1")
var Coment2 = window.document.getElementById("coment-2")
var Coment3 = window.document.getElementById("coment-3")
var Right = window.document.getElementById("right")

function RightRoll () {
    Coment1.style = "display:none;"
    Coment3.style = "display:flex;"
    Right.style = "display:none;"
    Left.style = "display:flex; margin-top:105px;"
};

function LeftRoll () {
    Coment1.style = "display:flex"
    Coment3.style = "display:none"
    Right.style = "display:flex"
    Left.style = "display:none"
}