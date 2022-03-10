let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*_➡️ GRUPO(S) EN DONDE ESTÁ EL BOT:_*
No por ahora..
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
