let handler = async m => m.reply(`
⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡

💥 𝓜𝓾𝔂 𝓟𝓸𝓷𝓽𝓸
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
