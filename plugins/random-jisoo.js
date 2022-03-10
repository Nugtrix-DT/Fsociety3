let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/jiso?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '☘ *Si la vida continua tal como quieres que sea, debe ser un sueño*', '𝔹𝕐: 🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦', '🔄 SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(jiso|jisso|jisoo|kimjisoo|)$/i
module.exports = handler
