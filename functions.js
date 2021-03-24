const reponse = require('./reponse');

function initialization(port) {
  console.log(`The server is ready : http://localhost:${port}/`)
  reponse.open()
}

function bonjour(req, res) {
  res.send("Bonjour !")
}

function bonjour_x(req, res) {
  let name = req.query.nom;
  if (name) {
      res.send(`Bonjour, ${name} !`)
  }else{
      res.send('Quel est votre nom ?')
  }
}

function chat(req, res) {
  reponse.open()
  let msg = req.body.msg
  if (msg && msg.search("=")===-1) {
    let result = reponse.read(msg.trim())
    if (result) {
        res.send(`${result.key}:${result.response}`)
    }else {
        res.send(`Je ne connais pas ${msg} !`)
    }
  }else{
      if (msg && msg.trim()!=="=") {
        let tab = msg.trim().split("=")
        reponse.create(tab[0].trim(), tab[1].trim())
        res.send("Merci pour cette information !")
      }else{
        res.send("Je n'ai rien reçu :(")
      }
  }
}

function shutdown() {
  console.log( "Closed out remaining connections.")
  reponse.close()
  process.exit()
}
module.exports = {
  initialization,
  shutdown,
  bonjour_x,
  bonjour,
  chat
}