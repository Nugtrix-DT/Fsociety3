let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/jeni?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '๐ซ *Como las estrellas sobre las nubes*', '๐น๐: ๐ฆฆโNแแฉแขแกแX-แดฐแตโ๐ฆฆ', '๐ SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(jeni|jenni|jennie|Jeni|Jenni)$/i
module.exports = handler
