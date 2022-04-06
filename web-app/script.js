


//  Logika ovog svega ti je da usporedis vrijednosti iz
//  inputa sa onima u bazi i kad to napravis, ako je prijava
//  uspješna, spremiš ih u sessionStorage i kada nešto tribaš povuć iz baze 
//  povlačih iz sessionStoragea. 
//  SessionStorage ti brše sve iz memorije kada zatvoris browser

function user_login() {
    const inpEmail = document.getElementsByTagName("EMAIL_INPUT");
    const inpPassword = document.getElementsByTagName("PASSWORD_INPUT");
    let url = "http://localhost:3000/login/" + inpEmail.value + "/" + inpPassword.value;
    
    fetch(url)
   .then(response => {
        response.json().then(parsedJson => {
        //const myJSONtxt = JSON.stringify(parsedJson); 
            let login_status = parsedJson.status
            
            console.log(parsedJson)
            if(login_status == "successful"){

                console.log("Uspješna prijava!")

                let kor_id = parsedJson.kor_id
                let kor_ime_prezime = parsedJson.kor_ime_prezime
                let kor_kg = parsedJson.kor_kg
                let kor_email = parsedJson.kor_email

                sessionStorage.setItem('id_osobe', kor_id);
                sessionStorage.setItem('ime_prezime', kor_ime_prezime)
                sessionStorage.setItem('email', kor_email);  
                sessionStorage.setItem('krvna_grupa', kor_kg);
                
                //Redirect to the next page
                window.location.href = 'page1.html'
            } else{
                console.log("Neuspješna prijava!")
                inpEmail.style.border = "3px solid red"
                inpPassword.style.border = "3px solid red"
            }
        })
    })
    .catch(error => console.log(error))
}

user_login();

//Testiraj da vidiš jel radi
sessionStorage.getItem('id_osobe')
sessionStorage.getItem('ime_prezime')
sessionStorage.getItem('email')
sessionStorage.getItem('krvna_grupa')