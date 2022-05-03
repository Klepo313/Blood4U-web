var pg = require('pg');
//var connectionString = "postgres://qulaynxc:zwIMATnDC4p_yujWhgC1ccg1x6XpgRab@abul.db.elephantsql.com/qulaynxc";
var connectionString = "postgres://ejrdmfdk:axOzhBbUpcr7pgoboEnj7qVI7TZQQzL5@kandula.db.elephantsql.com/ejrdmfdk"
var pool = new pg.Client(connectionString);

pool.connect()

const loginUser = (request, response) => {
    var email = request.params.email;
    var passwd = request.params.password; 
    
    if(email && passwd){
        console.log("Pridani parametri: ")
        console.log("EMAIL: " + email + "\tPASSWORD: " + passwd)
    
        pool.query(`select k.kor_id, k.kor_ime, k.kor_prezime, k.kor_krvnagrupa , k.kor_spol, k.kor_email from korisnici k , korisnicki_podaci kp 
                    where kp.kpd_id = k.kor_id 
                    and kp.kpd_email = '${email}'
                    and kp.kpd_password = '${passwd}' `, (err, results) => {

            if(err) throw err; //U slučaju greške

            else if(typeof(results.rows[0])!=="undefined"){

                var kor_id = results.rows[0].kor_id
                var kor_ime_prezime = results.rows[0].kor_ime + ' ' + results.rows[0].kor_prezime
                var kor_kg = results.rows[0].kor_krvnagrupa
                var kor_email = results.rows[0].kor_email

                //response.status(200).json(results.rows);
                response.status(200).json({
                    "status": "successful", 
                    "kor_id": kor_id, 
                    "kor_ime": kor_ime_prezime, 
                    "kor_kg": kor_kg, 
                    "kor_email": kor_email
                })

            } else{
                console.log("Greška 2")
                response.status(200).json({"status":"unsuccessful"}); 
            }

                }
            )
    
    } else{
        console.log("Greška 1")
        response.status(200).json({"status":"unsuccessful"}); 
    }

}

const setReservation = (request, response) => {

    var kor_id = parseInt(request.params.kor_id);
    var ustanova = request.params.ustanova;     

    // console.log(data)

    // obj = {
    //     "kor_id": data.kor_id,
    //     "ustanova": data.ustanova
    // }

    // pool.query(`insert into rezervacija (rez_ustanova, rez_osa_id)
    //             values (${obj.ustanova}, ${obj.kor_id})`, (err, results) => {
    //     if(err) throw err;
    //     else{
    //         response.json();
    //     }
    // })

    pool.query(`insert into rezervacija (rez_ustanova, rez_osa_id)
                values ('${ustanova}', ${kor_id})`, (err, results) => {
        if(err) throw err;
        else{
            response.json();
        }
    })
}


module.exports = {
    pool,
    loginUser,
    setReservation
} 