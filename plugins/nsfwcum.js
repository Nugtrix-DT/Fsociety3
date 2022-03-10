let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/cum?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*𝔹𝕐: 🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦*', 'ℱʂơƈıɛɬყ ცơɬ', 'SIGUIENTE 🔄', `${usedPrefix + command}`, m, false)
}
handler.command = /^(cum|nsfwcum)$/i 

module.exports = handler
