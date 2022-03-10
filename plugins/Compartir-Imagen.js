let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
let res = await fetch('https://caliphapi.com/api/ppcouple?apikey=BNeGhnOu')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButtonImg(m.chat, json.result.female,  'Chica 🙆‍♀️', 'ℱʂơƈıɛɬყ ცơɬ', 'Siguiente 🔄', '.compartirfoto', m)
conn.sendButtonImg(m.chat, json.result.male, 'Chico 🙆‍♂️', 'ℱʂơƈıɛɬყ ცơɬ', 'Siguiente 🔄', '.compartirfoto', m)}
handler.command = /^compartirfoto$/i
module.exports = handler
