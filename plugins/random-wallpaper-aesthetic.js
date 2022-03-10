let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/wallhp?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '✨ *Aquí está tú fondo aesthetic!!*', '𝔹𝕐: 🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦', '🔄 SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(wpaesthetic|fondoaesthetic|wallpaperaesthetic|aestheticfondo|aestheticwallpaper)$/i
module.exports = handler
