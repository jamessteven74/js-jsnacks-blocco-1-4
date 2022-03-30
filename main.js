/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*/

//creazione di un array con nome invitati.
//chiedere all'utente il nome.
//chiedere se può partecipare (si oppure no) alla festa

const party = ["john", "alex", "matteo" ];
console.log(party)








const richiedi_nome = prompt("fornisci nome")
console.log(richiedi_nome)

const invitato = prompt("disponibile alla festa?")
console.log(invitato)

let nome_inviato_spciale = "john"

const partecipazione_ok = "si posso"
const Partecipazione_ko = "no non posso"

if(nome_inviato_spciale === party){
    console.log(partecipazione_ok)
}else if(nome_inviato_spciale != party){
    console.log(Partecipazione_ko)
}



