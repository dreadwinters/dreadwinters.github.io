// Code by ItzCrazyScout and 'HOST'

function emojify(txt){
    return txt.replace(/:(bonzi|evil|pink|earth|globe|sad|doggis|program|swag|flip):/g,"<img src=\"/img/emoji/$1.png\">")
}

function markup(text){
    if(text.startsWith("++")){
        return text.slice(2)
    }
    text = text.replace(/%%%%/g,"<br>")
    text = text.replace(/\*\*(.*?)\*\*/g,"<b>$1</b>")
    text = text.replace(/\*(.*?)\*/g,"<i>$1</i>")
    text = text.replace(/\~\~(.*?)\~\~/g,"<s>$1</s>")
    text = text.replace(/`(.*?)`/g,"<code>$1</code>")
    text = text.replace(/(<br>|^)>(.*?)(<br>|$)/g,"$1<div data-style=\"quote\">$2</div>")
    return text
}

var settingsSantize = {
    allowedTags: [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
    'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'iframe','marquee','button','input'
    ,'details','summary','progress','meter','font','h1','h2','span','select','option','abbr',
    'acronym','adress','article','aside','bdi','bdo','big','center','site',
    'data','datalist','dl','del','dfn','dialog','dir','dl','dt','fieldset',
    'figure','figcaption','header','ins','kbd','legend','mark','nav',
    'optgroup','form','q','rp','rt','ruby','s','sample','section','small',
    'sub','sup','template','textarea','tt','u'],
  allowedAttributes: {
    a: [ 'href', 'name', 'target' ],
    p:['align'],
    table:['align','border','bgcolor','cellpadding','cellspadding','frame','rules','width'],
    tbody:['align','valign'],
    tfoot:['align','valign'],
    td:['align','colspan','headers','nowrap'],
    th:['align','colspan','headers','nowrap'],
    textarea:['cols','dirname','disabled','placeholder','maxlength','readonly','required','rows','wrap'],
    pre:['width'],
    ol:['compact','reversed','start','type'],
    option:['disabled'],
    optgroup:['disabled','label','selected'],
    legend: ['align'],
    li:['type','value'],
    hr:['align','noshade','size','width'],
    fieldset:['disabled'],
    dialog:['open'],
    dir:['compact'],
    bdo:['dir'],
    div:['class'],
    marquee:['behavior','bgcolor','direction','width','height','loop'],
    button: ['disabled'],
    input:['value','type','disabled','maxlength','max','min','placeholder','readonly','required'],
    details:['open'],
    div:['align'],
    progress:['value','max'],
    meter:['value','max','min','optimum','low','high'],
    font:['size','family','color'],
    select:['disabled','multiple','require'],
    ul:['type','compact'],  
    "*":['hidden','spellcheck','title','contenteditable','data-style']
  },
  selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' , 'wbr'],
  allowedSchemes: [ 'http', 'https', 'ftp', 'mailto', 'data' ],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
  allowProtocolRelative: true
} 
  
var stickers = {
    sad:"so sad",
    bonzi:"BonziBUDDY",
    host:"host is a bathbomb",
    spook:"ew! i'm spooky",
    forehead:"you have a big forehead",
    ban:"i will ban you so hard right now",
    flatearth:"this is true, and you cant change my opinion loser",
    swag:"look at my swag",
    sans:"fuck you",
    flip:"fuck you",
    topjej:"toppest jej",
    high:"i'm so high as fuck woaaaaahh",
    sex:"bonzi rule 34",
    cyan:"cyan is yellow? no",
    no:"fuck no",
    bye:"bye! i'm fucking leaving",
    kiddie:"kiddie",
    brazzers:"trans bonzi",
}
const Discord = require('discord.js')
const log = require("./log.js").log;
const Ban = require("./ban.js");
const Utils = require("./utils.js");
const io = require('./index.js').io;
var clientio = require("socket.io-client")
var clientsocket = clientio("http://localhost:8080")
var erikclientsocket = clientio("http://bonzi.erik.red:3000/")
const settings = require("./settings.json");
const sanitize = require('sanitize-html');
const { encode } = require('punycode')
var onCooldown = false;
var onloginCooldown = false;
let roomsPublic = [];
let rooms = {};
let usersAll = [];
let sockets = [];
var ips = [];
const cheerio = require('cheerio');
const GoogleImages = require("google-images");

const googleImages = new GoogleImages("002289087215869957033:oyktdwpc3yq", "AIzaSyByc7mPm0dbQ4ogJMSWoNa9CGbD2mNiT6s");


var noflood = [];
let mutes = Ban.mutes;
exports.beat = function() {
    io.on('connection', function(socket) {
        new User(socket);
    });
};

const fs = require('fs');

if (!fs.existsSync('./config.json')) {
	throw new Error('I could not find config.json, are you sure you have it?');
}
const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');
const { token, prefix, ownerID } = require('./config.json');

class bwrbotClient extends AkairoClient {
    constructor() {
		super({
			ownerID: ownerID,
			presence: {
				status: 'online',
				activity: {
					type: 'PLAYING',
					name: 'Loading simulator...',
				} 
			}
		}, {
			partials: ['MESSAGE'],
			disableEveryone: true
		});

		this.commandHandler = new CommandHandler(this, {
			directory: './commands/',
			prefix: prefix,
			argumentDefaults: {
				prompt: {
					timeout: 'Time ran out, command has been cancelled.',
					ended: 'Too many retries, command has been cancelled.',
					retry: 'Could not find your argument, please try again!',
					cancel: 'Command has been cancelled.',
					retries: 4,
					time: 30000
				}
			},
			commandUtil: true,
			commandUtilLifetime: 60000,
			allowMention: true,
			handleEdits: true,
			ignorePermissions: ownerID,
			ignoreCooldown: ownerID,
		}); 
		this.inhibitorHandler = new InhibitorHandler(this, {
			directory: './event/inhibitors/',
			emitters: {
				process
			},
		});

		this.listenerHandler = new ListenerHandler(this, {
			directory: './event/listeners/'
		});

		this.listenerHandler.setEmitters({
			commandHandler: this.commandHandler,
			inhibitorHandler: this.inhibitorHandler,
			listenerHandler: this.listenerHandler,
			process: process
		});

		this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
		this.commandHandler.useListenerHandler(this.listenerHandler);
		
		this.listenerHandler.loadAll();
		this.inhibitorHandler.loadAll();
		this.commandHandler.loadAll();
	}
};

const bot = new Discord.Client();
const client = new bwrbotClient();

bot.login(token);
client.login(token);
var request = require('request');

function image(message){
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "loskythecopydog77",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
 
 
 
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
 
 
 
 
 
 
 
 
}
const say = require('say');

function tts_david(voiceChannel, text) {
    if (!fs.existsSync('./temp')){
        fs.mkdirSync('./temp');
    }
    const timestamp = new Date().getTime();
    const soundPath = `./temp/${timestamp}.wav`;
    say.export(text, 'Cepstral David', 'Cepstral David', soundPath, (err) => {
        if (err) {
            console.error(err);
            return;
        }else{
            client.channels.get("743862953593405440").join().then((connection) => {
                connection.playFile(soundPath).on('end', () => {
                    connection.disconnect();
                    fs.unlinkSync(soundPath);
                }).on('error', (err) => {
                    console.error(err);
                    connection.disconnect();
                    fs.unlinkSync(soundPath);
                });
            }).catch((err) => {
                console.error(err);
            });
        }
    });
}


function image2(message, args){
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + args.join(" "),
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
 
 
 
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
 
 
 
 
 
 
 
 
}

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

bot.on('message', (message) => {
    const args = message.content.split(" ").slice(1);
   
    if (message.content.startsWith("+eval")) {
      if(message.author.id !== "696842277175164988" && message.author.id !== "607648915088474121" ) {
          message.channel.send("**ERROR**: You cannot use that command."); 
          return;
      }
      try {
        const code = args.join(" ");
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
    if (message.content.startsWith("+sticker")) {
        message.channel.send(stickers[args], {
            file: "../build/www/img/stickers/"+ args + ".png"
        });
    }
    if (message.content.startsWith("+asshole")) {
        message.channel.send("Hey, " + args.join(" ") + "!")
        message.channel.send("You're a fucking asshole!")
    }
    if (message.content.startsWith("+help")) {
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTitle('Commands')
        .setFooter('Bot made by ICS', 'https://cdn.discordapp.com/emojis/723803845242650635.png?v=1')
        .setDescription("Want help? Heres the list of commands.")
        .addField('+ytp', 'Generate a YTP.')
        .addField('+asshole', 'Call someone an asshole. Don\'t ask me why i added this.', true)
        .addField('+losky', 'Searches an image of Loskythecopydog77', true)
        .addField('+img', 'Search a image you want to see', true)
        .addField('+wtf', 'Make the bot embarrass himself. WARNING: It\'s outdated!', true)
        .addField('+joke', 'Tell a horribly written joke. WARNING: It\'s outdated!', true)
        .setFooter('COPYRIGHT LOLOLOL', 'https://cdn.discordapp.com/emojis/719665252379263136.png?v=1');
    
        message.channel.send(exampleEmbed);
    }
    if (message.content.startsWith("+losky")) {
        image(message)
    }
    if (message.content.startsWith("+img")) {
        image2(message, args)
    }
    if (message.content.startsWith("+wtf")) {
        
        var wtf = 
        ['i cut a hole in my computer so i can fuck it',
        'i hate minorities',
        'i said /godmode password and it didnt work',
        'i like to imagine i have sex with my little pony characters',
        'ok yall are grounded grounded grounded grounded grounded grounded grounded grounded grounded for 64390863098630985 years go to ur room',
        'i like to eat dog crap off the ground',
        'i can use inspect element to change your name so i can bully you',
        'i can ban you, my dad is seamus',
        'i got raped by a man, happy pride month!',
        'why do woman reject me, i know i masturbate in public and dont shower but still',
        'put your dick in my nose and lets have nasal sex',
        'my cock is 6 ft so ladies please suck it',
		"i said \'HOST\' giving perms to seamus for his assets is fake news and then i got hate",
		"please make pope free",
        "whats that color",
        "please kiss my ass",
        "kiss my dick",
        "*EATS {NAME}*",
        "Baldi's",
        "behh beiuh behh beiuh behh beiuh behh beiuh behh beiuh",
        "Onute Saulute Kantapapa",
        "i support le billy",
        "i support soundcard",
        "i watch bfdi unironically",
        "please donate me your blood >:)",
        "أنا أفضل أن أكون جافًا",
        "SFOIKJHDCSOIFJHEcqsaoijhxc soibvhsuoiehdsa0p9oi cfdshcvoiuscgh fdauoifgvdusic8ovsq8ahyetrqguikwe2qwg3udi1qwkhg23q1ruio8y0ew98r ogt4y509t74509ovfds wyer3u5y4h90po0",
        "[[dlksjfhdoishoiwdchdoiwhcwkoichwoiuchwdsoifhuoiehgfcdsclkdjcfoiwedhcsalkcfjwdfocieuwhgdfoijhdxcwsoifhiuofdhqwjweiode2jhcoi0ewp9fjhewoifjewiojbwnzjbwbwbbwbwbbbbswndkw3djsfwkingSjt]] AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "I AM NOT A DOGGIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! STOP CALLING ME A DOGGIS OR I WILL INFLATE YOU WITH MY FEET!",
        "[[bwnzjkwnzjbwnzjkwnzjbwnzjkwnzjbwnzjkwnzjlwksjjsfwkjngSjt]] BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI DIE BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI STOP IT BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI GRRRRRRRR STOP IT SO MUCH FUCKING RANDOM EMOJIS BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI BURGER EMOJI GRRRRRRRRRRRRRRRR",
        "i impersonate other bonziworld users like ics on collabvm to make them think that he is a 9 year old",
		"i hosted uranohoshi.in and i pirate shit",
		"i listen to baby from justin bieber",
		"i watch numberblocks",
		"i watch doodland and now people are calling me a doodfag",
		"i watch bfdi and now people are calling me a objectfag",
		"i post klasky csupo effects and now people are calling me a logofag",
		"i am onute saulute and i copied bonziworld revived",
		"i listen to kpop and now i got hate",
		"i inflate people, and body inflation is my fetish.",
		"i installed BonziBUDDY on my pc and now i have a virus",
		"Hey guys it's Adela, i know i'm an egirl, that i made coronavirus on my backyard and i hate copyright because i live in China, but why do people hate me? I'm the most trustworthy person alive! I totally don't sell your IPs to weeb hacker wannabes!",
		"i deleted system32",
		"i flood servers, and that makes me cool.",
		"i still use the wii u&trade;",
		"i used homebrew on my nintendo switch and i got banned",
		"i bricked my wii",
		"muda muda muda muda!",
		"i am going to post inflation videos because, remember: \"I inflate people and inflation is my fetish.\"",
		"i copy other people's usernames",
		"i use collaborative virtual machine to install malware",
		"i use microsoft agent scripting helper for fighting videos against innocent people that did nothing wrong by just friendly commenting",
		"i use microsoft agent scripting helper for gofag videos",
		"i use hotswap for my xbox 360",
		"i boycotted left 4 dead 2",
        "CAN U PLZ UNBAN ME PLZ PLZ PLZ PLZ PLZ PLZ PLZ PLZ",
        "said the one who was into object shows himself until he has done enough bad things to be hated in there",
		"I like Unbojih",
		"i play left 4 dead games 24/7",
		"i am so cool. i shit on people, add reactions  that make fun of users on discord, and abuse my admin powers. i am really so cool.",
		"This product will not operate when connected to a device which makes unauthorized copies. Please refer to your instruction booklet for more information.",
		"hey medic i like doodland",
		"i installed windows xp on my real computer",
		"i am whistler and i like to say no u all the time",
		"i like to give my viewers anxiety",
		"how to make a bonziworld server?",
		"shock, blood loss, infection; oh ho ho ho ho, i love stabbing. i feel tres bon!",
		"prego.",
		"oh you're approaching me!",
        "MUTED! HEY EVERYONE LOOK AT ME I SAY MUTED IN ALL CAPS WHEN I MUTE SOMEONE LMAO",
        "HEY EVERYONE LOOK AT ME I HATE ICS EVEN WHEN HE MADE PEACE WITH LOSKY LMAO",
        "HEY EVERYONE LOOK AT ME I BLOCK BWR USERS ON MEDIAWIKIS EVEN WHEN THEY ARE FRIENDLY LMAO",
        "ok you went into retard mode again",
        "bonziworld reacts to klasky csupo blablablablabla fuck it",
        "baldi's basics plus",
        "i fap to baldi",
        "*kisses {NAME}*",
        "chara",
        "hey medic i hate ics",
        "i have doodland fetish",
        "i love masturbating at Pike from Pike's lagoon",
        "hi im tyler castro and i love to fucking harass dafni now im gonna harass more girls online to get so called girlfriends and to get alisa mad at me for cheating now im gonna harass allison next lololololol",        "I DON'T CARE! NOW SHUT UP, GAY!",
        "i wanna fuck DJ 3lectrical in the balls",
        "i fuck on olaf",
        "hey medic, i hate itzcrazyscout.",
        "BonziWORLD Reacts To BonziWORLD Activity It's retarded",
        "MOO MOO MOO MOO! MOOOOOOOOOOOOOOOOOOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH",
        "GUYS, AND FRONTIER AND BAD USERS, STOP CALLING ME A DOGGIS, YOU, KNOW, I'M, NOT, DOGGIS! NOW STOP IT, STOOOOP!",
        "<p hidden>[[</p><marquee direction=down scrollamount=16><p hidden><h1><big>]]</p>HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA",
        "Dioga x Geri",
		"can you boost my server? no? you're mean! >:(",
        "no u",		
        "numberblocks is my fetish",
		"i post random gummibar videos on bonziworld",
		"i support meatballmars",
		"PLEASE GIVE THIS VIDEO LIKES!!!!! I CANNOT TAKE IT ANYMORE!",
        "I WILL MAKE A BAD VIDEO OUT OF YOU! GRRRRRRRRRRRR!",
        "Muted",
        "FUCK YOU ITZCRAZYKIKO!!!!!!111!!1 What the fuck is a kiko?",
        "You were the one who started the drama most of the time- WORK AT FURFAG CO YOU FUCKING GREEN MAN DICKRIDER.",
		"i keep watching doodland like forever now",
		"i mined diamonds with a wooden pickaxe",
        "i kept asking for admin and now i got muted",
        'I FAP TO FEMMEPYRO NO JOKE',
        'i am not kid',
        'i go against ics even after he made peace with <p hidden>[[lwsky]] -z </p> losky',
        "ACHOO! What was that? Uh-oh looks like you just got coronavirus! Don't you know that the coronavirus is CUMMING to America? The world HOE Organisation is calling HOE-VID19 a POSSIBLE PANTIE-DEMIC! No more touching daddy until you wash your nasty little fingers for secounds with sHOEp and water otherwise it doesn't count! Time to stop spreading your germs and start spreading: your legs! SISSIE ALERT!",
        'i am a gamer girl yes not man no im not man i am gamer girl so give me money and ill giv you my adress <3']
        message.channel.send(wtf[Math.floor(Math.random()*wtf.length)])
    }
    if (message.content.startsWith("+joke")) {
        
        var joke1 = 
        [   'Yeah, of course ' + message.author.username + ' wants me to tell a joke. Hah hah! Look at the stupid purple monkey telling jokes! Fuck you. It isn\'t funny. But I\'ll do it anyway. Because you want me to. I hope you\'re happy.',
            message.author.username + ' used +joke. Whoop-dee-fucking doo.',
            'HEY YOU IDIOTS ITS TIME FOR A JOKE'
        ]
        var joke2 = [
            'Why do they call HTML HyperText? AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA! Sorry. I just had an epiphany of my own sad, sad existence.',
            'Two sausages are in a pan. One looks at the other and says "Boy it\'s hot in here!" and the other sausage says "Unbelievable! It\'s a talking sausage!" What were you expecting, an dick joke? You\'re a sick fuck.',
            'What is in the middle of Paris? A giant inflatable buttplug.',
            'What goes in pink and comes out blue? Sonic\'s asshole.',
            'What type of water won\'t freeze? Your mother\'s.',
            'Who earns a living by driving his customers away? Nintendo!',
            'What did the digital clock say to the grandfather clock? Suck my clock.',
            'What do you call a man who shaves 10 times a day? A woman.',
            'How do you get water in watermelons? Cum in them.',
            'Why do we call money bread? Because we KNEAD it. Haha please send money to my PayPal at nigerianprince99@bonzi.com',
            'What is a cow that eats grass? ASS. I am a comedic genius, i know.',
        ]

        var joke3 = [
            "You know "+ message.author.username +", a good friend laughs at your jokes even when they\'re not so funny. And you fucking suck. Thanks.",
            'Where do I come up with these? My ass?',
            'Do I amuse you, ' + message.author.username + '? Am I funny? Do I make you laugh? pls respond',
            'Maybe I\'ll keep my day job, ' + message.author.username + '. Patreon didn\'t accept me.',
            'Laughter is the best medicine! Apart from meth.',
            'Don\'t judge me on my sense of humor alone. Help! I\'m being oppressed!'
        ]
        message.channel.send(joke1[Math.floor(Math.random()*joke1.length)])
        message.channel.send(joke2[Math.floor(Math.random()*joke2.length)])
        message.channel.send(joke3[Math.floor(Math.random()*joke3.length)])
    }
    if (message.content.startsWith("+tts")) {
		tts_david(client.channels.get("743862953593405440"),args.join(" "));
	}
})

var onCooldown = false;

bot.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    if (receivedMessage.guild.id != "676497375409471518") {
        return
    }
})


bot.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    console.log("BonziWORLD Bot online!")
    bot.user.setActivity("bonziworldrevived.tk and bonzi.erik.red", {type: "WATCHING"})

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})
 
bot.login("NzM4NDYwMDM1MzczNTk2Njgz.XyMOgA.RT6zoukFS2yFcda_WhbC1sGEw5w");