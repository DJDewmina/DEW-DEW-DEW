const { cmd, commands } = require('../command');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../lib/functions');
const {readEnv} = require('../lib/database')
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { getRandom } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

//--------------------------------------------
// BLACKBOX COMMANDS
//--------------------------------------------
cmd({
    pattern: "blackbox",
    desc: "AI chat using Blackbox AI",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            return reply("Please provide a query for Blackbox AI.");
        }

        // Fetch the response from the Blackbox AI API
        let data = await fetchJson(`https://apis.davidcyriltech.my.id/blackbox?q=${encodeURIComponent(q)}`);
        
        // Reply with the AI's response
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e); // Log any error for debugging
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// GEMINI COMMANDS
//--------------------------------------------
cmd({
    pattern: "gemini",
    desc: "AI chat from Gemini AI",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            return reply("Hello! How can I assist you with Gemini AI today?");
        }

        let data = await fetchJson(`https://api.giftedtech.web.id/api/ai/geminiai?apikey=_0x5aff35,_0x1876stqr&q=${encodeURIComponent(q)}`);
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// GPT COMMANDS
//--------------------------------------------
cmd({
    pattern: "gpt",
    desc: "ai chat from chat gpt",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            
            return reply("Hello! How can I assist you today?");
        }

        
        let data = await fetchJson(`https://apis.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(q)}`);
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// GPT-4 COMMANDS
//--------------------------------------------
cmd({
    pattern: "gpt-4",
    desc: "ai chat from chat gpt-4",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            
            return reply("Hello! How can I assist you today?");
        }

        
        let data = await fetchJson(`https://api.giftedtech.web.id/api/ai/gpt4?apikey=_0x5aff35,_0x1876stqr&q=${encodeURIComponent(q)}`);
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// LET-ME-GPT COMMANDS
//--------------------------------------------
cmd({
    pattern: "deepseek",
    desc: "AI chat using deepseek",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            return reply("Please provide a query for deepseek.");
        }

        // Fetch the response from the deepseek API
        let data = await fetchJson(`https://apis.davidcyriltech.my.id/ai/deepseek-v3?text=${encodeURIComponent(q)}`);
        
        // Reply with the AI's response
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e); // Log any error for debugging
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// LIAMA COMMANDS
//--------------------------------------------
cmd({
    pattern: "liama",
    desc: "AI chat using Llama AI",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            return reply("Please provide a query for Llama AI.");
        }

        // Fetch the response from the Llama AI API
        let data = await fetchJson(`https://apis.davidcyriltech.my.id/ai/llama3?text=${encodeURIComponent(q)}`);
        
        console.log(data); // Log the entire response to inspect its structure
        
        // Check if the response has the expected structure
        if (data && data.result) {
            return reply(`${data.result}`);
        } else {
            return reply("Sorry, I couldn't get a response from Llama AI.");
        }
    } catch (e) {
        console.log(e); // Log any error for debugging
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// IMAGINE COMMANDS
//--------------------------------------------
cmd({
  pattern: "imagine",
  react: '🎉',
  desc: "Generate an image using AI API.",
  category: "ai",
  filename: __filename
}, async (client, message, chat, { q: prompt, reply }) => {
  try {
    if (!prompt) {
      return reply("Please provide a prompt for the image.");
    }
    await reply("Generating Imagine...");
    const response = await fetchJson(`https://api.giftedtech.web.id/api/ai/fluximg?apikey=_0x5aff35,_0x1876stqr&prompt=${prompt}`);
    const imageUrl = response.result;
    await client.sendMessage(chat.chat, { image: { url: imageUrl } });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
//--------------------------------------------
// FLUX-AI COMMANDS
//--------------------------------------------
cmd({
  pattern: "fluxai",
  alias: ["flux"],
  react: '🚀',
  desc: "Generate an image using AI.",
  category: "ai",
  filename: __filename
}, async (client, message, chat, { q: prompt, reply }) => {
  try {
    if (!prompt) {
      return reply("Please provide a prompt for the image.");
    }
    await reply("𝙴𝙼𝙿𝙸𝚁𝙴-𝙼𝙳 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙴𝚖𝚙𝚒𝚛𝚎 𝚃𝚎𝚌𝚑");
    const response = await fetchJson(`https://api.giftedtech.web.id/api/ai/fluximg?apikey=_0x5aff35,_0x1876stqr&prompt=${prompt}`);
    const imageUrl = response.result;
    await client.sendMessage(chat.chat, { image: { url: imageUrl } });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
/////////////

cmd({
    pattern: "dalle",
    desc: "Generate an AI image",
    category: "main",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, {
    args,
    q,
    reply
}) => {
    try {
        const config = await readEnv();
        // Ensure there is a prompt
        let prompt = args.join(" ");
        if (!prompt) {
            return reply("Please provide a prompt for the AI image.");
        }

        // Fetch image from the API
        let imageUrl = `https://apis.davidcyriltech.my.id/diffusion?prompt=${encodeURIComponent(prompt)}`;

        // Send the image
        return conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: `"${prompt}"\n*${config.COPYRIGHT}*` }, { quoted: mek });

    } catch (e) {
        console.error(e);
        return reply(`Error: ${e.message || e}`);
    }
});
///////////////
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd(
    {
        pattern: "ai",
        alias: ["gpt", "bot"],
        react: "📑",
        desc: "AI chat using GPT.",
        category: "main",
        filename: __filename,
    },
    async (
        conn,
        mek,
        m,
        {
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
            reply,
        }
    ) => {
        try {
            // Input Validation
            if (!q || q.trim().length === 0) {
                return reply("❌ Please provide a valid query for the AI chat.");
            }

            // Fetching API Response
            let data;
            try {
                data = await fetchJson(
                    `https://apis.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(q)}`
                );
            } catch (fetchError) {
                console.error("API Fetch Error:", fetchError);
                return reply("❌ Unable to connect to the API. Please try again later.");
            }

            // Validate API Response Structure
            if (!data || !data.result) {
                console.error("Invalid API Response:", data);
                return reply("❌ API returned an invalid response. Please contact the administrator.");
            }

            // Sending AI Response
            return reply(`${data.result}`);
        } catch (error) {
            console.error("Unexpected Error:", error);

            // Handle Unexpected Errors
            return reply("❌ An unexpected error occurred. Please try again.");
        }
    }
);
/////////
cmd({
    pattern: "anticallon",
    alias: ["blockcall"],
    desc: "Reject incoming WhatsApp calls automatically.",
    category: "settings",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {
        conn.ev.on('call', async (callUpdate) => {
            try {
                // Check for incoming call
                if (callUpdate.type === 'offer') {
                    const callerId = callUpdate.from; // Get caller's number
                    
                    // Reject the call
                    await conn.rejectIncomingCall(callUpdate.id); // Main call rejection

                    // Block the caller (optional)
                    await conn.updateBlockStatus(callerId, "block");

                    // Notify the caller (optional)
                    await conn.sendMessage(callerId, {
                        text: "I don't accept WhatsApp calls. Please send a message instead.",
                    });

                    console.log(`Call from ${callerId} has been rejected and blocked.`);
                }
            } catch (err) {
                console.error('Error rejecting call:', err);
            }
        });

        reply("Anti-call feature has been activated.");
    } catch (e) {
        console.error('Error setting up anti-call feature:', e);
        reply(`${e}`);
    }
});


cmd({
    pattern: "tourl",
    alias: ["imgurl","img2url"],
    react: '♻',
    desc: "Download anime maid images.",
    category: "anime",
    use: '.maid',
    filename: __filename
},
async(conn, mek, m, {from, mnu, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
 
try{
  const config = await readEnv();
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw `_\`Reply A Image To Url\`_`;
 // if (!args[0]) throw ` \`\`\`[ 🌺 ] Ingresa un texto para guardar la imagen. Ejemplo:\n${usedPrefix + command} Sylph\`\`\``

  let media = await q.download();
  let tempFilePath = path.join(os.tmpdir(), 'my_data');
  fs.writeFileSync(tempFilePath, media);

  let form = new FormData();
  form.append('image', fs.createReadStream(tempFilePath));

    let response = await axios.post('https://api.imgbb.com/1/upload?key=02b01525bdac411947ab8d1e2cd90a68', form, {
      headers: {
        ...form.getHeaders()
      }
    });

    if (!response.data || !response.data.data || !response.data.data.url) throw '❌ Error al subir el archivo';
    
    let link = response.data.data.url;
    fs.unlinkSync(tempFilePath);

    m.reply(`🪀 *\`File Size\`* ${media.length} Byte(s)\n🪀 *\`File Url\`* ${link}\n\n*${config.COPYRIGHT}*`);
    
} catch (e) {
reply(`${e}`)
console.log(e)
}
})


var imgmsg = '';
if (config.LANG === 'SI') imgmsg = 'ඡායාරූපයකට mention දෙන්න!';
else imgmsg = 'ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ ғᴏʀ sᴛɪᴄᴋᴇʀ!';

var descg = '';
if (config.LANG === 'SI') descg = 'එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි.';
else descg = 'ɪᴛ ᴄᴏɴᴠᴇʀᴛs ʏᴏᴜʀ ʀᴇᴘʟɪᴇᴅ ᴘʜᴏᴛᴏ ᴛᴏ sᴛɪᴄᴋᴇʀ.';

cmd({
    pattern: 'sticker',
    react: '🤹‍♀️',
    alias: ['s', 'stic'],
    desc: descg,
    category: 'convert',
    use: '.sticker <Reply to image>',
    filename: __filename
}, async (conn, mek, m, { from, reply, isCmd, command, args, q, isGroup, pushname }) => {
    try {
        const isQuotedImage = m.quoted && (m.quoted.type === 'imageMessage' || (m.quoted.type === 'viewOnceMessage' && m.quoted.msg.type === 'imageMessage'));
        const isQuotedSticker = m.quoted && m.quoted.type === 'stickerMessage';

        if ((m.type === 'imageMessage') || isQuotedImage) {
            const nameJpg = getRandom('.jpg');
            const imageBuffer = isQuotedImage ? await m.quoted.download() : await m.download();
            await require('fs').promises.writeFile(nameJpg, imageBuffer);

            let sticker = new Sticker(nameJpg, {
                pack: pushname, // The pack name
                author: '', // The author name
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 75, // The quality of the output file
                background: 'transparent', // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else if (isQuotedSticker) {
            const nameWebp = getRandom('.webp');
            const stickerBuffer = await m.quoted.download();
            await require('fs').promises.writeFile(nameWebp, stickerBuffer);

            let sticker = new Sticker(nameWebp, {
                pack: pushname, // The pack name
                author: '', // The author name
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 75, // The quality of the output file
                background: 'transparent', // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else {
            return await reply(imgmsg);
        }
    } catch (e) {
        reply('Error !!');
        console.error(e);
    }
});
///////


// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://www.dark-yasiya-api.site`)
    baseUrl = baseUrlGet.api
})();


const yourName = "*© DEW-MD BY HANSA DEWMINA*";

//twitter dl (x)
cmd({
    pattern: "twitter",
    alias: ["twdl"],
    desc: "download tw videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me twitter url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`)
        reply("*Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `- SD \n\n ${yourName}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//gdrive(google drive) dl
cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me gdrive url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//mediafire dl
cmd({
    pattern: "mediafire",
    alias: ["mfire"],
    desc: "download mfire files",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me mediafire url")
        //fetch data from api  
        const res = await fetch(`https://www.dark-yasiya-api.site/download/mfire?url=${q}`);
        const data = await res.json();
        let downloadUrl = data.result.dl_link;
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: downloadUrl }, fileName: data.title, mimetype: data.fileType, caption: `${data.name}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
