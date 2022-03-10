// NO MODIFICAR ABSOLUTAMENTE NADA DE AQUI
let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
❰ ❗️ ❱ *La información que se proporcionará no excluye a Propietario/a del Bot, Sub Bot, o usuario del Bot de las posibles sanciones.* 

❰ ❗️ ❱ *NO nos hacemos responsables del desconocimiento que pueda tener de estos temas del Bot.*

❰ ⚠️ ❱ *_Términos de Privacidad_*

_- La información que reciba por parte del Bot NO es compartida con nadie._

_- Las imágenes, vídeos, stickers, audios, logos, etc.. NO son compartidas con nadie._

_-  El Bot es posible que no esté activado las 24 horas, no excluye que él/la Propietario/a pueda hacerlo._

_- NO nos hacemos responsables del posible mal uso de un Sub Bot, es recomendable que use número virtual._

- _Los Sub Bots son públicos al depender del comando #bots para saber la lista de Sub Bots._

- _El chat anónimo del comando #start, valga la redundancia no mostrará ningún dato de los Usuarios por parte de GataBot. Eso no implica que las personas que hagan uso de esta función puedan dar a conocer sus datos._

_- Los Audios, notas de voz, imágenes, vídeos u otro archivo multimedia de Propiedad del Bot, son exclusivamente para este Bot de haber otros Bots con dicha multimedia, sé investigará._

💬 *_Mensajes del Bot_*

_- En caso que el Bot envíe mensajes sin haber solicitado con un comando, es posible que el mensaje sea de una persona o propietario/a del Bot. De ser así mantener el respeto._

❰ ⚠️ ❱ *_Estándares de Seguridad/Privacidad/Uso_* 


_- Al hacer uso de una solicitud para ingreso de grupo, es recomendable que el grupo no cuente con temas de Odio, virus, contenido indebido, temas de discriminación u campañas sin fundamentos._

_- Todo la información que proporcione a FsocietyBot en privado y grupos son confidenciales por lo tanto no se comparte dicha información a ningún medio._

_- Al hacer uso de ciertos comandos que tengan como objetivo socavar la incomodidad, intranquilidad, molestia u otro termino tajante, se tomarán las respectivas sanciones o llamados de alerta para prevalecer la integridad de los Usuarios y funcionamiento de FsocietyBot._

❰ ❔ ❱ *_Aún tienes dudas_*

_De tener dudas, observaciones, reclamos respecto a temas de FsocietyBot puedes escribir me a este número:_

❰ ❗️ ❱ Solo escribe me si es de un tema de suma importancia y seriedad.

📲 Wa.me/593978963202

*_Recuerda mantener el respeto. Gracias_*

                             ℱʂơƈıɛɬყ ცơɬ
`.trim(), m)
    let mentionedJid = [m.sender]
}
    
handler.customPrefix = /términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i
handler.command = new RegExp

module.exports = handler 
