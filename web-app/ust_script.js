var ustanova = sessionStorage.getItem("element")
var h1 = document.getElementsByTagName("h1")[0]
var h2 = document.getElementsByTagName("h2")[0]
var telefon = document.getElementsByClassName("tel")[0]
var email = document.getElementsByClassName("email")[0]
var potrebna_krv = document.getElementsByClassName("krv")

if(ustanova === "Firule"){
    h1.innerHTML = "KBC Firule, Split"
    h2.innerHTML = "Put Firula, 21000 - Split"
    telefon.innerHTML = "021 556 111"
    email.innerHTML = "Ectm@kbsplit.hr"
    potrebna_krv[0].innerHTML = "A,"
    potrebna_krv[1].innerHTML = "B,"
    potrebna_krv[2].innerHTML = "0-"
} else{
    h1.innerHTML = "KBC Križine, Split"
    h2.innerHTML = "Šoltanska 1, 21000 - Split"
    telefon.innerHTML = "021 557 111"
    email.innerHTML = "Ectm@kbsplit.hr"
    potrebna_krv[0].innerHTML = "A,"
    potrebna_krv[1].innerHTML = "AB+,"
    potrebna_krv[2].innerHTML = "0"
}