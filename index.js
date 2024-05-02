const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!!';
const adminId = '114425881957734818';
const { MessageEmbed } = require('discord.js');
const { channel } = require('diagnostics_channel');
const port = process.env.PORT || 10000;
client.on('ready', () => {
    client.user.setActivity('Sự kiện hunt thú I')
    client.user.setPresence({
        status: 'dnd',
        game: {
          name: 'VanHong', 
          type: 'LISTENING'
        }
      });
    app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
});
client.once('ready', () => {
    console.log('Bot đã sẵn sàng!');
});
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const userId = message.author.id;
    if (command === 'show') {
        try {
            if (!args.length) {
                const nomsg = new Discord.MessageEmbed()
                .setColor('#FF00EC')
                .setDescription(`:x: Bạn cần nhập văn bản để hiển thị`);
                message.reply(nomsg);
            } else {
                const msg = new Discord.MessageEmbed()
                .setColor('#FF00EC') 
                .setImage('https://media.discordapp.net/attachments/1234354049177092137/1234366836427198484/hunt.png?ex=66307933&is=662f27b3&hm=4a4ab1491b079cc74434bb072802300c5139fa7aa25f71640ed6b47ff64a7c3a&=&format=webp&quality=lossless&width=366&height=206')
                .setDescription(`${args.join(' ')}`);
                message.channel.send(msg)
                    .then(() => {
                        message.delete();
                    })
                    .catch(err => {
                        console.error('Lỗi khi xóa tin nhắn:', err);
                    });
            }
        } catch (error) {
            console.error('Lỗi khi xử lý lệnh show message:', error);
            message.reply('Đã xảy ra lỗi khi xử lý lệnh show message.');
        }
    }
});
client.login('MTIyNzU5Njg0NDgyMjAzNjU2MQ.G4FsJO.mt5Y2ELB3E6mu_UxMFT76eIkS34MGBuW6nUv74')
