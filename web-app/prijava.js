var email = document.getElementById('inpEmail');
var password = document.getElementById('inpPass');

var form = document.getElementsByTagName("form")[0]
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function login() {
    if(email.value!=null && password.value!=null){
        fetch("http://localhost:3000/login/" + email.value + "/" + password.value)
        .then( response => {
            response.json().then(parsedJson => {
                console.log(parsedJson)

                console.log(parsedJson.kor_id)
                sessionStorage.setItem('kor_id', parsedJson.kor_id)

                if(parsedJson.status === "unsuccessful"){
                    email.style.border = "3px solid #D22F27"
                    password.style.border = "3px solid #D22F27"
                } else{
                    location.href = "map.html";
                }

            })
        })
    } else {
        alert("Unesi podatke u tražena polja")
    }

}

