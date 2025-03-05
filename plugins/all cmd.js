const {readEnv} = require('../lib/database')
const { cmd } = require('../command')
const os = require("os")
const { runtime } = require('../lib/functions')
let fs = require('fs')
const moment = require("moment");
const axios = require('axios');
const config = require('../config');

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "Displays the bot menu",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, pushname, reply }) => {
    try {
        const config = await readEnv();
        let desc = `
🤩 *HELLOW* ${pushname}
> 🪀 WELLCOME TO DEW-MD 🪀

╭──────────────────━┈⊷
│◦ ✗🤖BOT NAME : DEW-MD™
│◦ ✗👤OWNER NAME : HANSA
│◦ ✗☎ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ :
│◦ ✗ 94701515609
│◦ ✗⏰ᴜᴘᴛɪᴍᴇ : ${runtime(process.uptime())}
│◦ ✗💾ʀᴀᴍ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◦ ✗💫ᴘʀᴇғɪx : ${config.PREFIX}
╰──────────────────━┈⊷

> 🔢 ʀᴇᴘʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʙᴇʟᴏᴡ🗿

1 │❯❯◦ OWNER MENU
2 │❯❯◦ CONVERT MENU MOVIE MENU
3 │❯❯◦ AI MENU
4 │❯❯◦ SEARCH MENU
5 │❯❯◦ DOWNLOAD MENU
6 │❯❯◦ MAIN MENU
7 │❯❯◦ GROUP MENU
8 │❯❯◦ FUN MENU
9 │❯❯◦ TOOLS MENU
10 │❯❯◦ OTHER MENU


*${config.COPYRIGHT}*`;

        // Send the menu with an image
        const menuMessage = await conn.sendMessage(from, { 
            image: { url: config.ALIVE_IMG }, 
            caption: desc 
        }, { quoted: mek });

        // Listen for the reply
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;
            
            const selectedOption = msg.message.extendedTextMessage.text.trim();

            // Check if the reply is in response to the menu message
            if (msg.message.extendedTextMessage.contextInfo?.stanzaId === menuMessage.key.id) {

                switch (selectedOption) {
                    case '1':
                        const config = await readEnv();
                        let response = `*◈ OWNER COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *restart*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.OWNER_IMG }, 
                            caption: response 
                        }, { quoted: mek });
                        break;
                    case '2':
                        let response2 = `*◈ CONVERT COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *convert*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.CONVERT_IMG }, 
                            caption: response2 
                        }, { quoted: mek });
                        break;
                    case '3':
                        let response3 = `*◈ AI COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *ai*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.AI_IMG }, 
                            caption: response3 
                        }, { quoted: mek });
                        break;
                    case '4':
                        let response4 = `*◈ SEARCH COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *yts*
│ • *srepo*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.SEARCH_IMG }, 
                            caption: response4 
                        }, { quoted: mek });
                        break;
                    case '5':
                        response5 = `*◈ DOWNLOAD COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *apk*
│ • *twitter*
│ • *gdrive*
│ • *mediafire*
│ • *fb*
│ • *ig*
│ • *movie*
│ • *song*
│ • *video*
│ • *play/yt*
│ • *song2*
│ • *video2*
│ • *tiktok*
│ • *img*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.DOWNLOAD_IMG }, 
                            caption: response5 
                        }, { quoted: mek });
                        break;
                    case '6':
                        response6 = `*◈ MAIN COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *alive*
│ • *about*
│ • *menu*
│ • *allmenu*
│ • *support*
│ • *system*
│ • *ping*
│ • *runtime*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.MAIN_IMG }, 
                            caption: response6 
                        }, { quoted: mek });
                        break;
                    case '7':
                        response7 = `*◈ GROUP COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *promote*
│ • *demote*
│ • *kick*
│ • *add*
│ • *admins*
│ • *tagall*
│ • *getpic*
│ • *setwelcome*
│ • *setgoodbye*
│ • *gname*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.GROUP_IMG }, 
                            caption: response7 
                        }, { quoted: mek });
                        break;
                    case '8':
                        response8 = `*◈ FUN COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *dog*
│ • *fact*
│ • *hack*
│ • *quote*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.FUN_IMG }, 
                            caption: response8 
                        }, { quoted: mek });
                        break;
                    case '9':
                        response9 = `*◈ TOOLS COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *sticker*
│ • *toimg*
│ • *tomp3*
│ • *qrcode*
│ • *shortlink*
│ • *calc*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.TOOLS_IMG }, 
                            caption: response9 
                        }, { quoted: mek });
                        break;
                    case '10':
                        response10 = `*◈ OTHER COMMAND LIST ◈*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│◈ *RUN TIME* - ${runtime(process.uptime())}
╰──────────●●►
╭────────●●►
│ • *githubstalk*
│ • *trt*
│ • *weather*
╰────────────────────●●►
➠ *Total Commands: 1*
*${config.COPYRIGHT}*`;
                        await conn.sendMessage(from, { 
                            image: { url: config.OTHER_IMG }, 
                            caption: response10 
                        }, { quoted: mek });
                        break;
                    default:
                }
            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('⚠️ *An error occurred while processing your request.*');
    }
});

cmd(
    {
      pattern: "alive",
      alias: ["status"],
      desc: "Check if the bot is alive",
      category: "main",
      react: "👨‍💻",
      filename: __filename,
    },
    async (
      conn,
      mek,
      m,
      { from, pushname, reply }
    ) => {
      try {
        const config = await readEnv();
        // Get current hour
        let currentHour = new Date().getHours();
        let greeting;
  
        // Set greeting based on correct time periods
        if (currentHour >= 5 && currentHour < 12) {
          greeting = "🌅 *Good Morning!*";
        } else if (currentHour >= 12 && currentHour < 17) {
          greeting = "🌞 *Good Afternoon!*";
        } else if (currentHour >= 17 && currentHour < 20) {
          greeting = "🌆 *Good Evening!*";
        } else {
          greeting = "🌙 *Good Night!*";
        }
  
        let aliveText = `${greeting}
  > 👋 Hi ${pushname} I'm alive now
  
  ╭━━┉━━┉━━┉━━┉━━┉━⦁⦂⦁
  ┃ Runtime* :: ${runtime(process.uptime())}
  ┃ Ram* :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
  ┃ Prefix* :: ${config.PREFIX}
  ╰━━┉━━┉━━┉━━┉━━┉━⦁⦂⦁*⦁ 
    
  ╭━━┉━━┉━━┉━━┉━━┉━⦁⦂⦁
  > Hello , I am alive now!!
  ╰━━┉━━┉━━┉━━┉━━┉━⦁⦂⦁*⦁    
  
  > Github Repo ${config.REPO_LINK}
  
  *${config.COPYRIGHT}*`;
  
        // Send the alive message
        await conn.sendMessage(
          from,
          {
            text: aliveText,
            contextInfo: {
              externalAdReply: {
                title: "DEW-MD",
                body: "© Powered by Hansa Dewmina",
                thumbnailUrl: "https://i.ibb.co/hgf2p9M/repository-open-graph-templatefdf.png",
                sourceUrl: "https://whatsapp.com/channel/0029Vb2bFCq0LKZGEl4xEe2G",
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          { quoted: m }
        );
  
        console.log(`✅ Alive command used in: ${from}`);
      } catch (e) {
        console.error("Alive Command Error:", e);
        reply(`❌ Error: ${e.message}`);
      }
    }
  );

  cmd({
    pattern: "speed",
    react: "🤖",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping2',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_DEW-Coders..._*'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '*🔥Pong*\n *' + (final - inital) + ' ms* '  }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "ping",
    react: "♻️",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*_🪄Pinging..._*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*♻️ Speed... : ${ping}ms*`}, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
cmd({
    pattern: 'qrcode',
    alias: ['qr'],
    react: '🔄',
    desc: 'Generate a QR code.',
    category: 'main',
    filename: __filename
  }, async (conn, mek, m, {
    from,
    quoted,
    body,
    isCmd,
    command,
    args,
    q,
    isGroup,
    sender,
    senderNumber,
    botNumber2,
    botNumber,
    pushname,
    isMe,
    isOwner,
    groupMetadata,
    groupName,
    participants,
    groupAdmins,
    isBotAdmins,
    isAdmins,
    reply
  }) => {
    try {
      if (!q) return reply('Please provide text to generate QR code.');
      await reply('> *DEW-MD Generating QR code...🔄*');
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(q)}&size=200x200`;
      const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data, 'binary');
      
      await conn.sendMessage(m.chat, { image: buffer }, { quoted: m, caption: 'QR Code By DEW-MD' });
    } catch (error) {
      console.error(error);
      reply(`An error occurred: ${error.message}`);
    }
  });
