//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    let res = await fetch('https://random.dog/woof.json')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
𝔹𝕐: 🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦
`.trim()
    conn.sendFile(m.chat, json.url, 'dog.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['dog']
handler.tags = ['random']
handler.command = /^dog|perro|perra|Dog|Perro|Perra$/i

handler.fail = null

module.exports = handler
