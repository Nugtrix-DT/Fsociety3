//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://cataas.com/cat')
     let img = await res.buffer()
     let caption = `
ð¹ð: ð¦¦âNáá©á¢á¡áX-á´°áµâð¦¦
`.trim()
    conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['cat']
handler.tags = ['random']
handler.command = /^cat|gato|gata|Cat|Gato|Gata$/i

handler.fail = null

module.exports = handler
