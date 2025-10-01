const { bot, getRandom, jidToNum } = require('../lib/');

bot(
  {
    pattern: 'ship ?(.*)',
    onlyGroup: true,
    fromMe: true,
    desc: 'Find your partner in a group',
    type: 'fun',
  },
  async (message, match) => {
    let a = message.reply_message.jid || message.mention?.[0]; 
    const b = message.participant; 
    const p = await message.groupMetadata(message.jid) 
    
    if (!a || a === b) {
      a = getRandom(p).id;
    }

    if (!a || a === b) {
      return await message.send("_💔 Seems like you're destined to be alone_");
    }

    const caption = `💞 *Match Found:*\n@${jidToNum(b)} ❤ @${jidToNum(a)}`;

    return await message.send(caption, { contextInfo: { mentionedJid: [b, a] } });
  }
);
