const express = require('express')
const {initialization, shutdown, bonjour, bonjour_x, chat} = require('./functions')


const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get("/", bonjour)
// TODO: ajouter le point d'entrée `GET /hello?nom=XXX` comme spécifié dans l'énoncé

app.get("/hello", bonjour_x)

// TODO: ajouter le point d'entrée `POST /chat` comme spécifié dans l'énoncé
app.post("/chat", chat)

app.listen(PORT, () => initialization(PORT))

process.stdin.resume()
process.on('SIGINT', () => shutdown())
process.on('SIGTERM', () => shutdown())
process.on('SIGUSR1', () => shutdown());
process.on('SIGUSR2', () => shutdown());
process.on('uncaughtException', () => shutdown());