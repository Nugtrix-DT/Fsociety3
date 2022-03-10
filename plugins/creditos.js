let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• ೋ•✧๑♡๑✧•ೋ •═════╮ 

*ℱʂơƈıɛɬყ ცơɬ por 🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦*
 
╰═════• ೋ•✧๑♡๑✧•ೋ •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦', 'status@broadcast')
}
handler.command = /^(tmnxdsex)$/i

module.exports = handler
