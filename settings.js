const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "NENO-XMD~XXQyRbqK#75kyihzjIKbqN3e30ebU35fLMVNc1I27HMi9iXYbAnY",
    // add your Session Id make sure it starts with NENO~

    PREFIX: process.env.PREFIX || ".",
    // add your prefix for bot

    BOT_NAME: process.env.BOT_NAME || "DyMen-BoT",
    // add bot name here for menu

    MODE: process.env.MODE || "private",
    // make bot public-private-inbox-group 

    LINK_WHITELIST: "youtube.com,github.com,instagram.com,tiktok.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    // make true or false status auto seen

    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    // make true if you want auto reply on status 

    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    // make true if you want auto reply on status 

    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*STATUS BY DyMen-BoT 💖😍*",
    // set the auto reply message on status reply  

    WELCOME: process.env.WELCOME || "true",
    // true if want welcome and goodbye msg in groups 

    AUTO_VOICE: process.env.AUTO_VOICE || "true",

    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
    // make true to know who dismiss or promoted a member in group

    ANTI_LINK: process.env.ANTI_LINK || "true",
    // make anti link true,false for groups 

    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    // make true if want auto voice reply if someone mention you 

    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
    // add custom menu and mention reply image url

    ALIVE_IMG: process.env.ALIVE_IMG || "",
    // add img for alive msg

    LIVE_MSG: process.env.LIVE_MSG || `> ʙᴏᴛ ɪs ᴀᴄᴛɪᴠᴇ`,
    // add alive msg here 

    STICKER_NAME: process.env.STICKER_NAME || "DyMen",
    // type sticker pack name 

    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    // make this true for custom emoji react  

    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,💛,💚,💙,💜,🤎,🖤,🤍",
    // choose custom react emojis by yourself 

    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    // automatic delete links without removing member 

    // OWNER_NUMBER: process.env.OWNER_NUMBER || "94721584279",
    // add your bot owner number

    OWNER_NAME: process.env.OWNER_NAME || "DyMen",
    // add bot owner name

    DESCRIPTION: process.env.DESCRIPTION || "*© Powered by DyMen*",
    // add bot owner description  

    READ_MESSAGE: process.env.READ_MESSAGE || "true",
    // Turn true or false for automatic read msgs

    AUTO_REACT: process.env.AUTO_REACT || "false",
    // make this true or false for auto react on all msgs

    ANTI_BAD: process.env.ANTI_BAD || "false",
    // false or true for anti bad words  

    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    // make anti link true,false for groups 

    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    // make true for automatic stickers 

    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    // make true or false automatic text reply 

    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    // make true for always online 

    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    // make false if want private mode

    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    // true for automatic show typing  

    READ_CMD: process.env.READ_CMD || "true",
    // true if want mark commands as read  

    DEV: process.env.DEV || "‪393514714807‬",
    // replace with your whatsapp number  

    ANTI_VV: process.env.ANTI_VV || "true",
    // true for anti once view 

    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    // change it to 'inbox' or 'same' if you want to resend deleted message in same chat 

    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    // make it true for auto recording 

    version: process.env.version || "0.0.5",

    START_MSG: process.env.START_MSG || 
`*> ʙᴏᴛ ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻*`,
OWNER_DISPLAY: process.env.OWNER_DISPLAY || "DyMen",
    
DOWNLOAD_DIR: process.env.DOWNLOAD_DIR || "./downloaded_status",

  // Timezone
TIMEZONE: process.env.TIMEZONE || "Asia/Colombo"
};
