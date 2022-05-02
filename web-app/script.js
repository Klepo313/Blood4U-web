


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

let map;
const firule = { lat: -25.363, lng: 131.044 };


/**
 * The CenterControl adds a control to the map that recenters the map on
 * Chicago.
 * This constructor takes the control DIV as an argument.
 * @constructor
 */
function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Pritisnite za odlazak na Firule";
  controlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement("div");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "KBC Split-Firule";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Split.
  controlUI.addEventListener("click", () => {
    map.setCenter(firule);
  });
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: firule,
  });
  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  const centerControlDiv = document.createElement("div");
  CenterControl(centerControlDiv, map);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
}
