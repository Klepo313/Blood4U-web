var ustanova = sessionStorage.getItem("element")
var kor_id = sessionStorage.getItem('kor_id')
var h1 = document.getElementsByTagName("h1")[0]
var h2 = document.getElementsByTagName("h2")[0]
var telefon = document.getElementsByClassName("tel")[0]
var email = document.getElementsByClassName("email")[0]
var potrebna_krv = document.getElementsByClassName("krv")
var slika = document.getElementsByClassName("image-img")[0];

if(ustanova === "Firule"){
    slika.src="assets/img/firule.jpg"
    h1.innerHTML = "KBC Firule, Split"
    h2.innerHTML = "Put Firula, 21000 - Split"
    telefon.innerHTML = "021 556 111"
    email.innerHTML = "Ectm@kbsplit.hr"
    potrebna_krv[0].innerHTML = "A,"
    potrebna_krv[1].innerHTML = "B,"
    potrebna_krv[2].innerHTML = "0-"
} else{
    slika.src="assets/img/o_15558554_1024.webp"
    h1.innerHTML = "KBC Križine, Split"
    h2.innerHTML = "Šoltanska 1, 21000 - Split"
    telefon.innerHTML = "021 557 111"
    email.innerHTML = "Ectm@kbsplit.hr"
    potrebna_krv[0].innerHTML = "A,"
    potrebna_krv[1].innerHTML = "AB+,"
    potrebna_krv[2].innerHTML = "0"
}

function logout(){
    sessionStorage.clear()
    location.href = 'index.html';
}

var pop_up = document.getElementsByClassName("pop-up")[0]
var btnDaruj = document.getElementById("btnDaruj")

data = {
    "kor_id": kor_id,
    "ustanova": ustanova 
}

console.log(data)

function openPop_up(){
    pop_up.style.display = "flex"
}
function closePop_up(){
    pop_up.style.display = "none"
}

var form = document.getElementsByTagName("form")[0];
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

btnDaruj.addEventListener("click", () => {
    // fetch("http://localhost:3000/reservation", {
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => {
    //     response.json().then(parsedJson => {
    //        console.log(parsedJson);
            
           
    //         alert("Uspješno ste prijavljeni!")
           

    //     }) 
    // })


    fetch("http://localhost:3000/reservation/" + kor_id + "/" + ustanova, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        response.json().then(parsedJson => {
           console.log(parsedJson);
        }) 
    })
})




