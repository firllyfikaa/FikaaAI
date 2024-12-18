process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const yts = require("yt-search");
const mark = `0@s.whatsapp.net`
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("@distube/ytdl-core")
const { youtube } = require("btch-downloader")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const fg = require('api-dylux')
const listens = JSON.parse(fs.readFileSync("./lib/listening.json"))
const listen = listens[Math.floor(Math.random() * listens.length)]
const thum = fs.readFileSync ('./basefirly/image/thum.jpeg')
const moment = require('moment-timezone')
const times = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const { smsg, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { chatGpt, tiktokDl, facebookDl, instaDl, instaDownload, instaStory, ytMp4, ytMp3, allDl, quotedLyo, Ytdl, cekKhodam, simi, mediafireDl, YtDl } = require('./lib/screaper');
const { pinterest, pinterest2, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, jadwalsholat, styletext } = require('./lib/scraper');
const { pickRandom, getAllHTML } = require('./lib/function');
const { tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, formatp } = require('./function.js')
const { LoadDataBase } = require('./src/message');
//const { GhostlyID } = require('./test.js');
//const { bigconv } = require('./lib/bigconv');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
//==================================================//
module.exports = firly = async (firly, m, chatUpdate, store) => {
 try {
 //await LoadDataBase(firly, m);
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By Rulzz, Titenono lek ko hapus le😹
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//
// Database Game
let tictactoe = db.tictactoe = []
//=================================================//

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "Channel"
const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment().tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
//=================================================//
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const fromm = mek.key.remoteJid
const botNumber = await firly.decodeJid(firly.user.id)
const isGroup = fromm.endsWith('@g.us')
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await firly.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const content = JSON.stringify(m.message)
//convert
const { exec, spawn, execSync } = require('child_process');
const qmsg = (quoted.msg || quoted)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"

const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''


//Const
const cap = '${botname}'
//=================================================//
// FUNCTION

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = (teks) => {
return firly.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `ꜰɪᴋᴀᴀ ᴀɪ`,"body": `${time} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://files.catbox.moe/cyuy9w.jpeg',"thumbnail": thum,"sourceUrl": `"https://github.com/firllyfikaa`}}}, { quoted:m})}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await firly.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: fcall })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (url) => {
let look = await yts(text);
let convert = look.videos[0];       
const pl = await youtube(convert.url)
await firly.sendMessage(m.chat,{
    audio: { url: pl.mp3  },
    fileName: convert.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:convert.title,
            body: botname,
            thumbnailUrl: convert.image,
            sourceUrl: pl.mp3,
            mediaType:1,
            mediaUrl:convert.url,
        }

    },
},{quoted:m})
reply('SORYY BRE KLO MB LAGUNYA GEDE SOALNYA BIAR JERNIH MUSIKNYA')
}
//=====================================
//text in console
if (!firly.public) {
if (!m.key.fromMe) return
}

if (m.message) {
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
console.log(
chalk.green.bold(
`   ⌬ Tanggal: ${tanggal} ${jam} \n` +
`   ⌬ Pesan: ${m.body || m.mtype} \n` +
`   ⌬ Pengirim: ${pushname} \n` +
`   ⌬ JID: ${m.sender.split('@')[0]}`
)
);
if (m.isGroup) {
console.log(
chalk.green.bold(
`   ⌬ Grup: \n` +
`   ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: firly.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, firly.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
firly.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//==================================================//

//==================================================//
function pickMoji(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function falseR () {
firly.sendReact(m.chat, '❌', m.key)
}

async function loading () {
var kayy = [
`${pickMoji(['🙄','🤯','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','♻️','〽️','⚠️'])}`,
`${pickMoji(['😨','😅','😂','😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','💣','😔','👀','👎','🥶','💯','💤','💨','🔥','👍','❓️','⏳️','💥','🤙'])}`,
]
let { key } = await firly.sendReact(m.chat, `${pickMoji(['😨','😅','😂','😳','😎','🤙','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`, m.key)//Pengalih isu

for (let i = 0; i < kayy.length; i++) {
await sleep(500)
await firly.sendReact(m.chat, kayy[i], m.key)
//PESAN LEPAS
}
}
//BATAS
//==================================================//
switch(command) {
case 'lagu1':
case 'lagu2':
case 'lagu3':
case 'lagu4':
case 'lagu5':
case 'lagu6':
case 'lagu7':
case 'lagu8':
case 'lagu9':
case 'lagu10':
case 'lagu11':
case 'lagu12':
case 'lagu13':
case 'lagu14':
case 'lagu15':
case 'lagu16':
case 'lagu17':
case 'lagu18':
case 'lagu19':
case 'lagu20':
case 'lagu21':
case 'lagu22':
case 'lagu23':
case 'lagu24': {
//await loading()
 fikaa = await getBuffer(`https://github.com/firllyfikaa/FavLagu/raw/master/${command}.mp3`)
await firly.sendMessage(m.chat, { audio: fikaa, mimetype: 'audio/mpeg'}, { quoted : fcall })

}
break
case 'okeyy‎': {
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];

firly.sendPresenceUpdate(jd, from)
    await sleep(15000)
firly.sendPresenceUpdate(jd, from)
    await sleep(12000)
firly.sendPresenceUpdate(jd, from)
    await sleep(11000)
firly.sendPresenceUpdate(jd, from)
    await sleep(10000)
firly.sendMessage(from, { audio: fs.readFileSync('./vn/lagu.mp3'), mimetype: 'audio/ogg; codecs=opus', ptt: true, fileLength: 88738})

}
break
case 'test‎': {
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];

firly.sendPresenceUpdate(jd, from)
    await sleep(15000)
firly.sendPresenceUpdate(jd, from)
    await sleep(10000)
firly.sendMessage(from, { audio: fs.readFileSync('./vn/bluee.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'aaaa‎': {
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];

firly.sendPresenceUpdate(jd, from)
    await sleep(3000)
await sleep(500)
firly.sendMessage(from, { audio: fs.readFileSync('./vn/capee.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
			case 'deletesampah': case 'delsampah': case 'delsam': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./lib/tmp', async function (err, files) {
					if (err) {
						console.log('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => item.endsWith('gif') || item.endsWith('png') || item.endsWith('mp3')  || item.endsWith('mp4') || item.endsWith('jpg') ||item.endsWith('webp') ||item.endsWith('webm') || item.endsWith('opus') || item.endsWith('jpeg'));
					let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Sampah File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./lib/tmp/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}

break        
case 'runtime': case 'ping': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await firly.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: rin,    
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}

 break
 case 'ram':
 case 'ramspecs':{  
let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
  let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
  let cpuModel = os.cpus()[0].model
  let cpuSpeed = os.cpus()[0].speed / 1000
  let cpuCount = os.cpus().length
  let message = `

*Your Bot Specifications*:

• *Total Storage*: ${totalStorage}
• *Free Storage*: ${freeStorage}
• *CPU Model*: ${cpuModel}
• *CPU Speed*: ${cpuSpeed} GHz
• *Number of CPU Cores*: ${cpuCount}`

await reply(message)
}

//convert media
//================================================//
			break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await firly.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Convert By firly Bot.mp3`}, { quoted : m })
			}
		
break
case 'tomp4': case 'tovideo': {
if (!quoted) reply `Balas sticker video Dengan Caption ${prefix + command}`
if (/video/.test(mime)) {
let { TelegraPh } = require('./lib/uploaderr')
let media = await firly.downloadAndSaveMediaMessage(quoted)
let ehe = await TelegraPh(media)
await firly.sendMessage(from, { video: { url: util.format(ehe), caption: 'Convert Webp To Video' } }, {quoted: fcall})
await fs.unlinkSync(media)
}
}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toPTT(media, 'mp4')
				await firly.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
			}
			break
			case 'togif': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await firly.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					firly.sendMessage(m.chat, { video: buffer, gifPlayback: true }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toimage': case 'toimg': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await firly.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					firly.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await (m.quoted ? m.quoted.download() : m.download())
					const msg = await generateWAMessageContent({ video: anu }, { upload: firly.waUploadToServer })
					await firly.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
			}
			break
			case 'tourl': {
				try {
					let { fileIO, TelegraPh } = require('./lib/uploader')
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await (m.quoted ? m.quoted.download() : m.download())
						let anu = await TelegraPh(media)
						m.reply('Url : ' + anu)
					} else if (/webp|video|sticker|audio/.test(mime)) {
						m.reply(mess.wait)
						let media = await (m.quoted ? m.quoted.download() : m.download())
						let anu = await UguuSe(media)
						m.reply('Url : ' + anu.url)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Uploader sedang offline!')
				}
			}
//=================SEARCH MENU =====================
break
case  'pin': {
  if (!text) return reply(`Example: .pin Nakano Ninoo`);
  await reply(mess.wait)

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: firly.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});
  await firly.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}

break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} Mati-matian speed up`
let yts = require("yt-search");
let search = await yts(text)
let teks = '*YouTube Search*\n\nResult From : '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
}
firly.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'ʏᴏᴜᴛᴜʙᴇ ѕᴇᴀʀᴄʜ',
body: 'Firlly-Ai',
thumbnailUrl: search.all[0].thumbnail,
sourceUrl: search.all[0].url,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}

break
case "ai": case "openai": {
if (!text) return m.reply(example("cara mendapatkan hati Suci"))
const V = await fetchJson(`https://cai.neekoi.me/cai?char=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM&message=${text}`).then((e) => {
if (!e.status) return reply(JSON.stringify(e.reply, null, 2))
var teks = `*© AI: *\n\n${V.result}`
reply(teks)
})
}

break
case 'osaragi': {
const g = "https://cih-cai-jir.koi.pics/newchat?id=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM";
let y = await fetchJson(g);
firly.sendMessage(m.chat, {text: y.status}, {quoted:fcall})
}
//========================================================
//          TOOLS MENUUUU
break
// ===================================== //
case 'play':  case 'song': {
if (!text) return reply(`Example : ${prefix + command} anime whatsapp status`)
await m.reply(mess.wait);
let yts = require("yt-search");
        const res = await yts.search(text);
	    const hasil = pickRandom(res.all);
	    console.log(hasil)
const pl = await youtube(hasil.url)
console.log(pl)
await firly.sendMessage(m.chat, {
	audio: { url: pl.mp3 },
	mimetype: 'audio/mpeg',
	contextInfo: {
	    mentionedJid: [m.sender],
			externalAdReply: {
				title: hasil.title,
				body: hasil.channel,
				//previewType: 'PHOTO',
				thumbnailUrl: hasil.thumb,
				mediaType: 1,
				renderLargerThumbnail: true,
				sourceUrl: hasil.url
		}
	}
}, { quoted: m });
reply('SORYY BRE KLO MB LAGUNYA GEDE SOALNYA BIAR JERNIH MUSIKNYA')
}
break 
case 'playy': {
	if (!text) return m.reply(`Example: ${prefix + command} masing-masing`)
	m.reply(mess.wait)
	try {
	let yts = require("yt-search");
	const res = await yts.search(text);
	const hasill = pickRandom(res.all)
	const teksnya = `*📍Title:* ${hasill.title || 'Tidak tersedia'}\n*✏Description:* ${hasill.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasill.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasill.seconds || 'Tidak tersedia'} second (${hasill.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasill.url || 'Tidak tersedia'}`;
				await firly.sendMessage(m.chat, {
                    text: teksnya,
                    contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'ʏᴏᴜᴛᴜʙᴇ',
                        body: 'Firlly-Ai',
                        thumbnailUrl: hasill.thumbnail,
                        sourceUrl: hasill.url,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }}}, { quoted: m})
                    const dow = downloadMp3(hasill.url)
                    console.log(dow)
                    //downloadMp3(hasill.url)
                    } catch (e) {
                        let yts = require("yt-search");
	                    const res = await yts.search(text);
                       	const hasill = pickRandom(res.all)
						const dow = downloadMp3(hasill.url)
                        console.log(dow)
					}
}
break
case 'play2': case 'ytplay2': {
	if (!text) return m.reply(`Example: ${prefix + command} masing-masing`)
	m.reply(mess.wait)
	try {
	let yts = require("yt-search");
	const res = await yts.search(text);
	const hasill = pickRandom(res.all)
	const teksnya = `*📍Title:* ${hasill.title || 'Tidak tersedia'}\n*✏Description:* ${hasill.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasill.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasill.seconds || 'Tidak tersedia'} second (${hasill.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasill.url || 'Tidak tersedia'}`;
				await firly.sendMessage(m.chat, {
                    text: teksnya,
                    contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'ʏᴏᴜᴛᴜʙᴇ',
                        body: 'Firlly-Ai',
                        thumbnailUrl: hasill.thumbnail,
                        sourceUrl: hasill.url,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }}}, { quoted: m})
					const hasil = await ytMp3(hasill.url);
					await firly.sendMessage(m.chat, {
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
						    mentionedJid: [m.sender],
    							externalAdReply: {
    								title: hasil.title,
    								body: hasil.channel,
    								//previewType: 'PHOTO',
    								thumbnailUrl: hasil.thumb,
    								mediaType: 1,
    								renderLargerThumbnail: true,
    								sourceUrl: hasil.url
							}
						}
					}, { quoted: m });
				} catch (e) {
					try {
                        let yts = require("yt-search");
	                    const res = await yts.search(text);
                       	const hasill = pickRandom(res.all)
						const anu = new YtDl()
						const hasil = await anu.play(hasill.url);
						const hasil_url = Object.values(hasil.audio).find(v => v.size === '128kbps')?.url || Object.values(hasil.audio)[0]?.url
						await firly.sendMessage(m.chat, { audio: { url: hasil_url }, mimetype: 'audio/mpeg' }, { quoted: m });
					} catch (e) {
						try {
                            let yts = require("yt-search");
	                        const res = await yts.search(text);
                        	const hasill = pickRandom(res.all)
							const hasil = await allDl(hasill.url, { isAudioOnly: true })
							await firly.sendMessage(m.chat, { audio: { url: hasil.url }, mimetype: 'audio/mpeg' }, { quoted: m });
						} catch (e) {
							m.reply('Gagal Mendownload Audio!')
						}
					}
				}
			}

break			
			// Downloader Menu
			case 'ytmp3': case 'youtubemp3': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
reply(mess.wait)
const dow = downloadMp3(text)
console.log(dow)
}
break
case 'ytmp4': case 'youtubemp4': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
reply(mess.wait)
const dow = downloadMp4(text)
console.log(dow)
}
break
case 'ytmp3-2': case 'ytaudio2': {
	if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
	if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
	m.reply(mess.wait)
	try {
					const hasil = await ytMp3(text);
					await firly.sendMessage(m.chat, {
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
						    mentionedJid: [m.sender],
    							externalAdReply: {
    								title: hasil.title,
    								body: hasil.channel,
    								//previewType: 'PHOTO',
    								thumbnailUrl: hasil.thumb,
    								mediaType: 1,
    								renderLargerThumbnail: true,
    								sourceUrl: hasil.url
							}
						}
					}, { quoted: m });
				} catch (e) {
					try {
						const anu = new Ytdl()
						const hasil = await anu.play(text);
						const hasil_url = Object.values(hasil.audio).find(v => v.size === '128kbps')?.url || Object.values(hasil.audio)[0]?.url
						await firly.sendMessage(m.chat, { audio: { url: hasil_url }, mimetype: 'audio/mpeg' }, { quoted: m });
					} catch (e) {
						try {
							const hasil = await allDl(text, { isAudioOnly: true })
							await firly.sendMessage(m.chat, { audio: { url: hasil.url }, mimetype: 'audio/mpeg' }, { quoted: m });
						} catch (e) {
							m.reply('Gagal Mendownload Audio!')
						}
					}
				}
			}
			
			break
			case 'ytmp4-2': case 'ytvideo2': case 'ytplayvideo2': {
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp4(text);
					await firly.sendMessage(m.chat, { video: { url: hasil.result }, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
				} catch (e) {
					try {
						const anu = new Ytdl()
						const hasil = await anu.play(text);
						const hasil_url = Object.values(hasil.video).find(v => v.size === 'auto')?.url || Object.values(hasil.video)[0]?.url
						await firly.sendMessage(m.chat, { video: { url: hasil_url }}, { quoted: m });
					} catch (e) {
						try {
							const hasil = await allDl(text)
							await firly.sendMessage(m.chat, { video: { url: hasil.url }}, { quoted: m });
						} catch (e) {
							m.reply('Gagal Mendownload Video!')
						}
					}
				}
			}
			break
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				try {
					const hasil = await instaDownload(text);
					if(hasil.length < 1) return m.reply('Postingan Tidak Tersedia atau Privat!')
					m.reply(mess.wait)
					for (let i = 0; i < hasil.length; i++) {
						await firly.sendFileUrl(m.chat, hasil[i].download, 'Done', m)
					}
				} catch (e) {
					m.reply('Postingan Tidak Tersedia atau Privat!')
				}
			}
			break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await firly.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
			break
		    case 'tiktok':
		    case 'tt':
            case 'tiktokmp4': {
            m.reply(mess.wait)
              if (!q) return replynano( `Example : ${prefix + command} link`)
              if (!q.includes('tiktok')) return replynano(`Link Invalid!!`)
              require('./lib/tiktok').Tiktok(q).then( data => {
                firly.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
            })
            }
            
			break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await firly.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
	
			break
			case 'mediafire': 
			case 'mf': {
				if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`)
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('Url Invalid!')
				try {
					const anu = await mediafireDl(text)
					await firly.sendMessage(m.chat, { document: { url: anu[0].link }, caption: `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu[0].name}\n*${setv} Size* : ${anu[0].size}\n*${setv} Type* : ${anu[0].type}\n*${setv} Link* : ${anu[0].link}`, fileName: anu[0].name, mimetype: anu[0].type }, { quoted: m })
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
			break
			case 'tohd': case 'remini': case 'hd': {
				if (/image/.test(mime)) {
					const { remini } = require('./lib/remini')
					let media = await (m.quoted ? m.quoted.download() : m.download())
					remini(media, 'enhance').then(a => {
						firly.sendMessage(m.chat, { image: a, caption: 'Done' }, { quoted: m });
					});
				} else {
					m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
				}
			}
			
			break
			case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': {
			    m.reply(mess.wait)
				if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
				let media = await firly.downloadAndSaveMediaMessage(quoted)
				//let media = await quoted.download()
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					if (text == 'meta') {
						await firly.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author, isAvatar: 1 })
					} else {
						await firly.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author })
					}
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await firly.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author })
				} else {
					m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				}
			}
			
//==========================RANDOM MENU================================
			break
			case 'ssweb': {
				if (!text) return m.reply(`Example: ${prefix + command} https://github.com/firlydev/firly-md`)
				m.reply(mess.wait)
				try {
					if (!text.startsWith('http')) {
						let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
						await firly.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
					} else {
						let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
						await firly.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
					}
				} catch (e) {
					m.reply('Server SS web Sedang Offline!')
				}
			}
//================STALK MENUU===============//


//================MENUUU BOT================//
break
case 'menu':
case 'allmenu': {
await loading()
let menunya = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${ucapanWaktu}
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${owner}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  [ ${prefix} ]
│𝗠𝗼𝗱𝗲 : ${firly.public ? 'Public' : 'Self'}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${ownername}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : +${m.sender.split('@')[0]}
│𝗟𝗶𝗺𝗶𝘁 : *Infinity*
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${jam}
│𝗗𝗮𝘁𝗲 : ${hari}
└┬───────────────── ⳹
   │✑  Please type The *MENU*
   │✑  Given *BELOW*
┌└─────────────┈ ⳹
▧『 *ᴛᴏᴏʟѕᴍᴇɴᴜ* 』
┣⌬ ➳ ${prefix}ai
┣⌬ ➳ ${prefix}tovn
┣⌬ ➳ ${prefix}tomp3
┣⌬ ➳ ${prefix}tovidio
┣⌬ ➳ ${prefix}toimg
┣⌬ ➳ ${prefix}togit
┣⌬ ➳ ${prefix}tourl
┣⌬ ➳ ${prefix}toptv
┣⌬ ➳ ${prefix}pintesert
┣⌬ ➳ ${prefix}hd
┣⌬ ➳ ${prefix}play
┣⌬ ➳ ${prefix}ytsearch
┣⌬ ➳ ${prefix}sticker
┣⌬ ➳ ${prefix}ssweb
┣⌬ ➳ ${prefix}tiktok
┣⌬ ➳ ${prefix}ig
┣⌬ ➳ ${prefix}igstory
┣⌬ ➳ ${prefix}fb
║
▧ 『 *ʟɪꜱᴛᴍᴜꜱɪᴋ* 』
┣⌬ ➳ ${prefix}lagu1
┣⌬ ➳ ${prefix}lagu2
┣⌬ ➳ ${prefix}lagu3
┣⌬ ➳ ${prefix}lagu4
┣⌬ ➳ ${prefix}lagu5
┣⌬ ➳ ${prefix}lagu6
┣⌬ ➳ ${prefix}lagu7
┣⌬ ➳ ${prefix}lagu8
┣⌬ ➳ ${prefix}lagu9
┣⌬ ➳ ${prefix}lagu10
┣⌬ ➳ ${prefix}lagu11
┣⌬ ➳ ${prefix}lagu12
┣⌬ ➳ ${prefix}lagu13
┣⌬ ➳ ${prefix}lagu14
┣⌬ ➳ ${prefix}lagu15
┣⌬ ➳ ${prefix}lagu16
┣⌬ ➳ ${prefix}lagu17
┣⌬ ➳ ${prefix}lagu18
┣⌬ ➳ ${prefix}lagu19
┣⌬ ➳ ${prefix}lagu20
┣⌬ ➳ ${prefix}lagu21
┣⌬ ➳ ${prefix}lagu22
╰┈➤



© ✘ ᴛɪᴋᴛᴏᴋ: _@ꜰɪʀʟʏꜰɪᴋᴀᴀ_

> ʙᴏᴛ ɪɴɪ ᴍᴀѕɪʜ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇɴɢᴇᴍʙᴀɴɢᴀɴ, ᴊᴀᴅɪ ᴍᴏʜᴏɴ ᴍᴀᴀꜰ ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴇʀʀᴏʀ ᴅɪ ѕᴇᴛɪᴀᴘ ꜰɪᴛᴜʀ 😅

*❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕*
*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*`

let vidmenuuu = fs.readFileSync('./basefirly/video/menu.mp4')

firly.sendMessage(from, { video: vidmenuuu, gifPlayback: true, caption: menunya, contextInfo:{ externalAdReply: {
title: 'ꜰɪʀʟʏ - ᴀɪ',
body: `ᴛɪᴋᴛᴏᴋ: @ꜰɪʀʟʏꜰɪᴋᴀᴀ`,
thumbnail: thum,
thumbnailUrl: my.gh,
sourceUrl: my.gh,
mediaType: 1,
renderLargerThumbnail: false 
}}}, { quoted: fcall })
firly.sendMessage(from, { audio: fs.readFileSync('./vn/menu.mp3'), mimetype: 'audio/mpeg', ptt: true, fileLength: 88738}, { quoted: fcall })
}

break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
 m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
firly.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
