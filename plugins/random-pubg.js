let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/pubg?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*🔫 Un juego increíble!!*', '𝔹𝕐: 🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦', '🔄 SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(pubg|Pubg|pugb)$/i
module.exports = handler
