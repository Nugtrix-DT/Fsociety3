let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/jiso?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'â *Si la vida continua tal como quieres que sea, debe ser un sueÃ±o*', 'ð¹ð: ð¦¦âNáá©á¢á¡áX-á´°áµâð¦¦', 'ð SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(jiso|jisso|jisoo|kimjisoo|)$/i
module.exports = handler
