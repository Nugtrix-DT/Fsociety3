let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
â­ââã ð¦¦ð¸ð¦¦ð¸ð¦¦ð¸ð¦¦ð¸ ãâââ®    
âª *_ãð Â¡Hola! ${username} ðå½¡_*
âªâ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
âª *MENU DE AUDIOS*
âªâ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
âª â¢ Solo escriba la palabra/frase. sin prefijo âª (/ . # etc...) 
âªâ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
âªâ«ð _Noche de paz_
âªâ«ð _Buenos dias_
âªâ«ð _Audio hentai_
âªâ«ð _Fiesta del admin_
âªâ«ð _Fiesta del admin 2_
âªâ«ð _Viernes_
âªâ«ð _Me olvidÃ©_
âªâ«ð _Baneado_
âªâ«ð _Feliz navidad_
âªâ«ð _A nadie le importa_
âªâ«ð _Sexo_
âªâ«ð _Vete a la vrg_
âªâ«ð _Ara ara_
âªâ«ð _Hola_
âªâ«ð _Un pato_
âªâ«ð _Nyanpasu_
âªâ«ð _Te amo_
âªâ«ð _Yamete_
âªâ«ð _Te diagnostico con gay_
âªâ«ð _Quien es tu sempai botsito 7w7_
âªâ«ð _BaÃ±ate_
âªâ«ð _Vivan los novios_
âªâ«ð _Marica quien_
âªâ«ð _Es puto_
âªâ«ð _La biblia_
âªâ«ð _Onichan_
âªâ«ð _Bot puto_
âªâ«ð _Feliz cumpleaÃ±os_
âªâ«ð _Shadow Bot_
âªâ«ð _Pasa pack Bot_
âªâ«ð _Atencion grupo_
âªâ«ð _Oh me vengo_
âªâ«ð _Murio el grupo_
âªâ«ð _Siuuu_
âªâ«ð _Rawr_
âªâ«ð _UwU_
âªâ«ð _:c_
âªâ«ð _a_
âªâ«ð _Jai_
âªâ«ð _Enojado_
âªâ«ð _Enojada_
âªâ«ð _Chao_
âªâ«ð _Hentai_
âªâ«ð _Triste_
âªâ«ð _Estoy triste_
âªâ«ð _Me pican los cocos_
âªâ«ð _Contexto_
âªâ«ð _Me voy_
âªâ«ð _Tengo los calzones del admin_
âªâ«ð _Entrada Ã©pica_ 
âªâ«ð _Ingresa Ã©picamente_
âªâ«ð _Bv_
âªâ«ð _Yoshi_
âªâ«ð _No digas eso papu_
âªâ«ð _Ma ma masivo_
âªâ«ð _Masivo_
âªâ«ð _Basado_
âªâ«ð _Basada_
â°ââã ð¦¦ð¸ð¦¦ð¸ð¦¦ð¸ð¦¦ð¸ ãâââ¯

â­âââââ¢ à³â¢â§à¹â¡à¹â§â¢à³ â¢âââââ®
                      ð¦¦âNáá©á¢á¡áX-á´°áµâð¦¦
         0:40 ââââââââââ -8:39
         â»     â²  â¡  â³     âº
         VOLUMEN: âââââââ 100%
â°âââââ¢ à³â¢â§à¹â¡à¹â§â¢à³ â¢âââââ¯`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu2']
handler.tags = ['General']
handler.command = /^(menu2|audios|menÃº2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
