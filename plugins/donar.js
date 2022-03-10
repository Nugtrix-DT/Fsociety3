// NO QUITES NI CAMBIES NADA DE AQUI POR FAVOR
// AGREGA TUS DATOS SI QIERES, PERO NO QUITES LOS MIOS
let handler = async m => m.reply(`
*┏ ┅ ━━━━━━━━━━━━━━━━ ┅ ━*
*┇                         「 DONAR 」*  
*┣ ┅ ━━━━━━━━━━━━━━━━ ┅ ━*
*┇❖ Colaborador en el desarrollo*
*┇ de ℱʂơƈıɛɬყ ცơɬ por 🦦℘NᏌᏩᎢᎡᏆX-ᴰᵀ℘🦦* 🦦
*┣ ┅ ━━━━━━━━━━━━━━━━ ┅ ━*
*┃❖ Hola persona hermosa 💙*
*┃👉 Aquí tienes algunos datos*
*┃ para que puedas apoyar <3*
*┃*
*┃ https://www.instagram.com/nugtrix_dt/
*┣ ┅ ━━━━━━━━━━━━━━━━ ┅ ━*
`.trim()) 
//PUEDES AGREGAR TUS DATOS, PERO NO QUITES LOS QUE YA ESTÁN PUESTOS
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^(dona|donar|apoyar|dardinero|apoyo)$/i

module.exports = handler
