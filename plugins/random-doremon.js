let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/doraemon?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '🌷 *Más de una vez habrás visto Doraemon* 🌷', '𝔹𝕐: 🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦', 'SIGUIENTE 🔄', `${usedPrefix + command}`, m, false)
}
handler.command = /^(doraemon|Doraemon)$/i

module.exports = handler
