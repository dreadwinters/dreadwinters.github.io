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
const settings = require("./settings.json");
const sanitize = require('sanitize-html');
var clientio = require("socket.io-client")
var clientsocket = clientio("http://localhost:8080")
var erikclientsocket = clientio("http://bonzi.erik.red:3000/")
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

const fs = require('fs-extra');

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
        .addField('+wtf', 'Make the bot embarrass himself.', true)
        .addField('+joke', 'Tell a horribly written joke.', true)
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
 
bot.login("NzM4NDYwMDM1MzczNTk2Njgz.XyMOgA.RT6zoukFS2yFcda_WhbC1sGEw5w") 

var stickers = {
    sad:"so sad",
    bonzi:"BonziBUDDY",
    host:"host is a bathbomb",
    spook:"ew i'm spooky",
    forehead:"you have a big forehead",
    ban:"i will ban you so hard right now",
    flatearth:"this is true, and you cant change my opinion",
    swag:"look at my swag!",
    topjej:"toppest jej",
    cyan:"cyan is yellow? no!",
    flip:"toppest jej",
    sans:"cyan is yellow? no!",
    no:"nope!",
    bye:"bye i'm leaving",
    kiddie:"kiddie",
}
var onCooldown = false;
var onloginCooldown = false;
exports.beat = function() {
    io.on('connection', function(socket) {
		new User(socket);
    });
};

function checkRoomEmpty(room) {
    if (room.users.length != 0) return;

    log.info.log('debug', 'removeRoom', {
        room: room
    });

    let publicIndex = roomsPublic.indexOf(room.rid);
    if (publicIndex != -1)
        roomsPublic.splice(publicIndex, 1);
    
    room.deconstruct();
    delete rooms[room.rid];
    delete room;
}

class Room {
    constructor(rid, prefs) {
        this.rid = rid;
        this.prefs = prefs;
        this.users = [];
        this.background = '#6d33a0'
    }

    deconstruct() {
        try {
            this.users.forEach((user) => {
                user.disconnect();
            });
        } catch (e) {
            log.info.log('warn', 'roomDeconstruct', {
                e: e,
                thisCtx: this
            });
        }
        //delete this.rid;
        //delete this.prefs;
        //delete this.users;
    }

    isFull() {
        return this.users.length >= this.prefs.room_max;
    }

    join(user) {
		noflood.push(user.socket);
		user.socket.join(this.rid);
		this.users.push(user);

		this.updateUser(user);
    }
    join_room(user,rid) {
		noflood.push(user.socket);
		user.socket.join(rid);
		this.users.push(user);

		this.updateUser(user);
    }

    leave(user) {
        // HACK
        try {
            this.emit('leave', {
                 guid: user.guid
            });
     
            let userIndex = this.users.indexOf(user);
     
            if (userIndex == -1) return;
            this.users.splice(userIndex, 1);
     
            checkRoomEmpty(this);
        } catch(e) {
            log.info.log('warn', 'roomLeave', {
                e: e,
                thisCtx: this
            });
        }
    }

    updateUser(user) {
		this.emit('update', {
			guid: user.guid,
			userPublic: user.public
        });
    }

    getUsersPublic() {
        let usersPublic = {};
        this.users.forEach((user) => {
            usersPublic[user.guid] = user.public;
        });
        return usersPublic;
    }

    emit(cmd, data) {
		io.to(this.rid).emit(cmd, data);
    }
}

function newRoom(rid, prefs) {
    rooms[rid] = new Room(rid, prefs);
    log.info.log('debug', 'newRoom', {
        rid: rid
    }); 
    
                
}



let userCommands = {
    "godmode": function(word) {
        let success = word == this.room.prefs.godword;
        if (success){
            this.private.runlevel = 3;
            this.socket.emit('admin')
        }else{
            this.socket.emit('alert','Wrong password. Did you try "Password"?')
        }
        log.info.log('debug', 'godmode', {
            guid: this.guid,
            success: success
        });
    },
    "sanitize": function() {
        let sanitizeTerms = ["false", "off", "disable", "disabled", "f", "no", "n"];
        let argsString = Utils.argsString(arguments);
        this.private.sanitize = !sanitizeTerms.includes(argsString.toLowerCase());
    },
	"sticker": function(sticker){
        if(Object.keys(stickers).includes(sticker)){
            this.room.emit('talk',{
                text:`<img src="./img/stickers/${sticker}.png" width=170 height=170>`,
                say:stickers[sticker],
                guid:this.guid
            })
		} 
    },
	"video": function(vidRaw){
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("video", {
            guid: this.guid,
            vid: vid
        });
    },
	"video_legacy": function(vidRaw){
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("video_legacy", {
            guid: this.guid,
            vid: vid
        });
    },
	"img": function(vidRaw){

			if(vidRaw.includes("\"")){
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
			if(vidRaw.includes("'")){ 
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("img", {
            guid: this.guid,
            vid: vid
        });
    },
	"iframe": function(vidRaw){

			if(vidRaw.includes("\"")){
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
			if(vidRaw.includes("'")){ 
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("iframe", {
            guid: this.guid,
            vid: vid
        });
    },
	"letsplay": function(vidRaw){

			if(vidRaw.includes("\"")){
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
			if(vidRaw.includes("'")){ 
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
		if (vidRaw.includes("rio")){
			this.room.emit("letsplay2", {
				guid: this.guid,
				vid: vid
			});
		} else if(vidRaw.includes("zuma")){
			this.room.emit("letsplay3", {
				guid: this.guid,
				vid: vid
			});
		} else {
			this.room.emit("letsplay", {
				guid: this.guid,
				vid: vid
			});			
		}
    },
	"toppestjej": function(){
        this.room.emit('talk',{
            text:`<img src="img/misc/topjej.png">`,
            say:"toppest jej",
            guid:this.guid
        })
    },
	"manchild": function(){
        this.room.emit('talk',{
            text:`<img src="img/misc/manchild2.webp" width=170>`,
            say:"diogo is a fetish manchild ~ ItzChris",
            guid:this.guid
        })
    },
    "report": function(ip, reason) {
		Ban.addReport(ip, ip, reason, this.public.name)
    },
    "ban_menu": function(ip) {
        this.socket.emit("open_ban_menu");
    },
    "kick_menu": function(ip) {
        this.socket.emit("open_ban_menu");
    },
    "warn_menu": function(ip) {
        this.socket.emit("open_ban_menu");
    },
    kick:function(data){
        if(this.private.runlevel<3){
            this.socket.emit('alert','admin=true')
            return;
        }
        let pu = this.room.getUsersPublic()[data]
        if(pu&&pu.color){
            let target;
            this.room.users.map(n=>{
                if(n.guid==data){
                    target = n;
                }
            })
            if (target.socket.request.connection.remoteAddress == "::1"){
                return
            } else if (target.socket.request.connection.remoteAddress == "::ffff:127.0.0.1"){
                return
            } else if (target.socket.request.connection.remoteAddress == "::ffff:78.63.40.199"){
                return
            } else {
                target.socket.emit("kick",{
                    reason:"You got kicked."
                })
                target.disconnect()
            }
        }else{
            this.socket.emit('alert','The user you are trying to kick left. Get dunked on nerd')
        }
    },
    css:function(...txt){
        this.room.emit('css',{
            guid:this.guid,
            css:txt.join(' ')
        })
    },
    ban:function(data){
        if(this.private.runlevel<3){
            this.socket.emit('alert','admin=true')
            return;
        }
        let pu = this.room.getUsersPublic()[data]
        if(pu&&pu.color){
            let target;
            this.room.users.map(n=>{
                if(n.guid==data){
                    target = n;
                }
            })
            if (target.socket.request.connection.remoteAddress == "::1"){
                Ban.removeBan(target.socket.request.connection.remoteAddress)
            } else if (target.socket.request.connection.remoteAddress == "::ffff:127.0.0.1"){
                Ban.removeBan(target.socket.request.connection.remoteAddress)
            } else {

                target.socket.emit("ban",{
                    reason:"hoigfvetdoifhewjuoifehwufoiewhfiou"
                })
				target.disconnect();
            }
        }else{
            this.socket.emit('alert','The user you are trying to kick left. Get dunked on nerd')
        }
    },
    "unban": function(ip) {
		Ban.removeBan(ip)
    },
    "joke": function() {
        this.room.emit("joke", {
            guid: this.guid,
            rng: Math.random()
        });
    },
    "fact": function() {
        this.room.emit("fact", {
            guid: this.guid,
            rng: Math.random()
        });
    },    
	"youtube": function(vidRaw) {

			if(vidRaw.includes("\"")){
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
			if(vidRaw.includes("'")){ 
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("youtube", {
            guid: this.guid,
            vid: vid
        });        this.room.emit("youtube", {
            guid: this.guid,
            vid: vid
        });
    },
	"bitview": function(vidRaw) {

			if(vidRaw.includes("\"")){
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
			if(vidRaw.includes("'")){ 
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("bitview", {
            guid: this.guid,
            vid: vid
        });
    },
	"vlare": function(vidRaw) {
			if(vidRaw.includes("\"")){
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
				return;
			}
			if(vidRaw.includes("'")){ 
				this.room.emit("iframe", {
					guid: this.guid,
					vid: "bonziacid.html"
				}); 
			}
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("vlare", {
            guid: this.guid,
            vid: vid
        });
    },
    "backflip": function(swag) {
        this.room.emit("backflip", {
            guid: this.guid,
            swag: swag == "swag"
        });
    },
    "swag": function(swag) {
        this.room.emit("swag", {
            guid: this.guid
        });
    },
    "bang": function(swag) {
        this.room.emit("bang", {
            guid: this.guid
        });
    },
    "earth": function(swag) {
        this.room.emit("earth", {
            guid: this.guid
        });
    },
    "grin": function(swag) {
        this.room.emit("grin", {
            guid: this.guid
        });
    },
	"clap":function(){
	  if(this.public.color == "clippy" || this.public.color == "red_clippy" || this.public.color == "clippypope" ){
		this.room.emit("clap_clippy", {
		  guid: this.guid,
		}); 
	  }else{
		this.room.emit("clap", {
		  guid: this.guid,
		});
	  }        
	},
    "wave": function(swag) {
        this.room.emit("wave", {
            guid: this.guid,
        });
    },
    "nod": function(swag) {
        this.room.emit("nod", {
            guid: this.guid,
        });
    },
    "acknowledge": function(swag) {
        this.room.emit("nod", {
            guid: this.guid,
        });
    },
    "shrug": function(swag) {
        this.room.emit("shrug", {
            guid: this.guid,
        });
    },
    "greet": function(swag) {
        this.room.emit("greet", {
            guid: this.guid,
        });
    },
    css:function(...txt){
        this.room.emit('css',{
            guid:this.guid,
            css:txt.join(' ')
        })
    },
    sendraw:function(...txt){
        this.room.emit('sendraw',{
            guid:this.guid,
            text:txt.join(' ')
        })
    },
    
    "godlevel":function(){
        this.socket.emit("alert","Your godlevel is " + this.private.runlevel + ".")
    },
    "broadcast":function(...text){
        this.room.emit("alert",text.join(' '))
    },
    "background":function(text){
        if(typeof text != 'string'){
            this.socket.emit("alert","nice try")
        }else{
            this.room.background = text
            this.room.emit('background',{background:text})
        }
    },
    "confused": function(swag) {
        this.room.emit("confused", {
            guid: this.guid,
        });
    },
    "sad": function(swag) {
        this.room.emit("sad", {
            guid: this.guid,
        });
    },
    "banana": function(swag) {
        this.room.emit("banana", {
            guid: this.guid,
        });
    },
    "surprised": function(swag) {
        this.room.emit("surprised", {
            guid: this.guid,
        });
    },
    "laugh": function(swag) {
        this.room.emit("laugh", {
            guid: this.guid,
        });
    },
    "write": function(swag) {
        this.room.emit("write", {
            guid: this.guid,
        });
    },
    "write_once": function(swag) {
        this.room.emit("write_once", {
            guid: this.guid,
        });
    },
    "write_infinite": function(swag) {
        this.room.emit("write_infinite", {
            guid: this.guid,
        });
    },
    "swag": function(swag) {
        this.room.emit("swag", {
            guid: this.guid,
        });
    },
    "think": function(swag) {
        this.room.emit("think", {
            guid: this.guid,
        });
    },
    "surfjoin": function(swag) {
        this.room.emit("surfjoin", {
            guid: this.guid,
        });
    },
    "surfleave": function(swag) {
        this.room.emit("surfleave", {
            guid: this.guid,
        });
    }, 
    "surf": function(swag) {
        this.room.emit("surf", {
            guid: this.guid,
        });
    },
    "linux": "passthrough",
    "pawn": "passthrough", 
    "color": function(color) {
        if (typeof color != "undefined") {
            this.public.color = color;
        } else {
            let bc = settings.bonziColors;
            this.public.color = bc[
                Math.floor(Math.random() * bc.length)
            ];
        }

        this.room.updateUser(this);
    },
	"pope": function() {
		if (this.private.runlevel === 3) { // removing this will cause chaos
			this.public.color = "pope";
			this.room.updateUser(this);
		} else {
			this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!")
		}
    },
	"inverted": function() {
		this.public.color = "rainbow";
		this.room.updateUser(this);
    },
	"freeadmin": function() {
			this.socket.emit("alert", "You got robot danced!");
			this.room.emit("video", {
				guid: this.guid,
				vid: "https://cdn.discordapp.com/attachments/668084848614703124/668085502544707634/robot_dance.mp4"
			});
    },
	"program": function() {
		this.public.color = "program";
		this.room.updateUser(this);
    },
	/*"pope": function() {
        this.room.emit('talk',{
            text:`<img src="img/bonzi/gay_ass_pope.png" width=170>`,
            say:"pope sucks",
            guid:this.guid
        })
    },
	"pope2": function() {
        this.room.emit('talk',{
            text:`<img src="img/bonzi/gay_ass_pope.png" width=170>`,
            say:"pope is fucking stupid",
            guid:this.guid
        })
    },

	"pope3": function() {
        this.room.emit('talk',{
            text:`<img src="img/bonzi/gay_ass_pope.png" width=170>`,
            say:"fuck you pope beggars. and fuck pope too",
            guid:this.guid 
        })
    },
    "con": function() {
        this.public.color = "glitch";
        this.room.updateUser(this);
    },
    "aux": function() {
        this.public.color = "glitchy";
        this.room.updateUser(this);
    },
    "nul": function() {
        this.public.color = "buggiest";
        this.room.updateUser(this);
    },

*/
    "wtf":function(text){
        var wtf = 
        ['i cut a hole in my computer so i can fuck it',
        'i hate minorities',
        'i said /godmode password and it didnt work',
        'i like to imagine i have sex with my little pony characters',
        'ok yall are grounded grounded grounded grounded grounded grounded grounded grounded grounded for 64390863098630985 years go to ur room',
        'i like to eat dog crap off the ground',
        'i can use inspect element to change your name so i can bully you',
        'i can ban you, my dad is seamus',
        'why do woman reject me, i know i masturbate in public and dont shower but still',
        'put your dick in my nose and lets have nasal sex',
        'my cock is 6 ft so ladies please suck it',
	'I just paid 1000 dollars for damn fucking stand cause I love Apple products so much',
        'I am Andrej Akan from Collab VM, I am a forkie who loves to destroy Windows with regedit and claim that I live in Pakistan although I actulally live in Croatia.',
        'Hi I am vacbedlover want to show my sexual fetish by making VM to show stupid BSDM shit, catgirl shit, vacbed and install North Korean shits on VM. I juse keep evading ban on Collab VM to act like a forkie.',
	"please make pope free",
	"whats that color",
	"i listen to baby from justin bieber",
	"i watch numberblocks",
	"i watch doodland and now people are calling me a doodfag",
	"i watch bfdi and now people are calling me a objectfag",
	"i post klasky csupo effects and now people are calling me a logofag",
	"i inflate people, and body inflation is my fetish.",
	"i installed BonziBUDDY on my pc and now i have a virus",
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
	"I made The Rebellion of SeamusMario55&trade;",
	"I like Unbojih",
	"ItzCrazyScout, No! More like.... ekfheiophjeodxenwobifuodhndoxnwsiohbdeiowdhn2werifhwefief! He banned euhdeioqwdheiwohjixzojqsioh r23oipwshnwq! End of rant.",
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
	"i like loliest huhytre",
	"can you boost my server? no? you're mean! >:(",
	"no u",
	"OH OH OH OH OH OH! JOESPH JUDGE! HOW DARE YOU SHUT DOWN BONZIWORLD?! THATS It! YOU'RE GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED FOR 239805479837389274328943729832749382743298 YEARS!",
	"numberblocks is my fetish",
	"i post random gummibar videos on bonziworld",
	"i support meatballmars",
	"PLEASE GIVE THIS VIDEO LIKES!!!!! I CANNOT TAKE IT ANYMORE!",
        "I WILL MAKE A BAD VIDEO OUT OF YOU! GRRRRRRRRRRRR!",
        "Muted",
        "You were the one who started the drama most of the time-",
	"i keep watching doodland like forever now",
	"i mined diamonds with a wooden pickaxe",
        "i kept asking for admin and now i got muted",
        'I FAP TO FEMMEPYRO NO JOKE',
        'i am not kid',
        'i am a gamer girl yes not man no im not man i am gamer girl so give me money and ill giv you my adress <3']
        this.room.emit('talk',{
            text:wtf[Math.floor(Math.random()*wtf.length)],
            guid:this.guid
        })
    },
    "knowledge":function(text){
        var wtf = ['Losky will be forgotten Soon.',
        "We don't like children invading our communities.",
        "Kiddies are type of users who use Grounded threats, say \"Muted\" after muting someone, raging in all caps, use the word \"Kiko\" but we don't know what it means, and post cringy videos. We ban them for a good reason. They also break rules because, as they say, it \"ruins\" the bonziworld site itself."]
        this.room.emit('talk',{
            text:wtf[Math.floor(Math.random()*wtf.length)],
            guid:this.guid
        })
    },
    "onute":function(text){
        this.room.emit('rant')
    },
    "2018":function(text){
        this.room.emit('talk',{
            text:`This generation sucks! Adolescents are filled with pornographic obsessions. Since 2018, i hate people like them nowadays. They think they're so funny with their 'funny' hentai profile pictures, and pictures like sonic using a hentai face. It's disgusting, I hate it.`,
            guid:this.guid
        })
    },
    "behh":function(text){
        this.room.emit('talk',{
            text:`Behh is the WORST word! It’s horrendous and ugly. I hate it. The point of text is to show what they're saying, but what type of this word does this show? Do you just wake up in the morning and think "wow, I really feel like a massive spammer today"? It's useless. I hate it. It just provokes a deep rooted anger within me whenever I see it. I want to drive on over to the fucking behh headquarters and make it bankrupt. If this was in the bonziworld videos I'd go apeshit like crazy. People just comment "behh" as if it's funny. It's not. Behh deserves to die. He deserves to have his disgusting "!behhh" copy smashed in with a hammer. Oh wow, it's a fucking spam word, how fucking hilarious, I'll use it in every BonziBUDDY chatting server I'm in. NO. STOP IT. It deserves to burn in hell. Why is it so goddamn spammy? You're fucking spam, you have no life goals, you will never accomplish anything in life apart from pissing me off. When you die noone will mourn. I hope you die`,
            guid:this.guid
        })
    },
	"pope2": function() {
		if (this.private.runlevel === 3) { // removing this will cause chaos
			this.public.color = "peedy_pope";
			this.room.updateUser(this);
		} else {
			this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!")
		}
    },
    "pope3": function() {
		if (this.private.runlevel === 3) { // removing this will cause chaos
			this.public.color = "clippypope";
			this.room.updateUser(this);
		} else {
			this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!")
		}
    },
    "pope4": function() {
		if (this.private.runlevel === 3) { // removing this will cause chaos
			this.public.color = "dogpope";
			this.room.updateUser(this);
		} else {
			this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!")
		}
    },
	
	"god": function() {
		if (this.private.runlevel === 3) // removing this will cause chaos
		{
			this.public.color = "god";
			this.room.updateUser(this);
		}
		else
		{
			this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!")
		}
    },
    "peedy": function() {
        this.public.color = "peedy";
        this.room.updateUser(this);
    },
    "clippy": function() {
        this.public.color = "clippy";
        this.room.updateUser(this);
    },
    "rover": function() {
        this.public.color = "rover";
        this.room.updateUser(this);
    },
    "asshole": function() {
        this.room.emit("asshole", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "beggar": function() {
        this.room.emit("beggar", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "kiddie": function() {
        this.room.emit("kiddie", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "gofag": function() {
        this.room.emit("gofag", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "logofag": function() {
        this.room.emit("logofag", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "forcer": function() {
        this.room.emit("forcer", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "welcome": function() {
        this.room.emit("welcome", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "owo": function() {
        this.room.emit("owo", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "uwu": function() {
        this.room.emit("uwu", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "blackhat": function() {
        this.room.emit("blackhat", {
            guid: this.guid
        });
    },
    "sing": function() {
        this.room.emit("sing", {
            guid: this.guid
        });
    },
    "triggered": "passthrough",
    "bees": "passthrough",
    "vaporwave": function() {
        this.socket.emit("vaporwave");
        this.room.emit("youtube", {
            guid: this.guid,
            vid: "aQkPcPqTq4M"
        });
    },
    "jumpscare": function() {
        this.room.emit("jumpscare");
    },
    "acid": function() {
        this.socket.emit("acid");
    },
    "vaporwave2": function() {
        this.socket.emit("vaporwave");
        this.room.emit("youtube", {
            guid: this.guid,
            vid: "m0zPkt5BZ9I"
        });
    },
    "unvaporwave": function() {
        this.socket.emit("unvaporwave");
    },
    "name": function() {
        let argsString = Utils.argsString(arguments);
        if (argsString.length > this.room.prefs.name_limit)
            return;
		if (argsString.includes("{COLOR}")) {
			argsString = this.public.color;
		}
		
		if (argsString.includes("{NAME}")) {
			return;
		}
        if (argsString.includes("Geri")) {
            argsString = "Gayeri";
        }
		if (!Ban.isIn(this.getIp())) {
			if (argsString.includes("Seamus")) {
				argsString = "impersonator";
			}
			if (argsString.includes("PB123Gaming")) {
				argsString = "impersonator";
			}
			if (argsString.includes("PB123G")) {
				argsString = "impersonator";
			}
			if (argsString.includes("Norbika9Entertainment")) {
				argsString = "gofag";
			}
			if (argsString.includes("Norbika9Studios")) {
				argsString = "gofag";
			}
			if (argsString.includes("Foxy")) {
				argsString = "HEY EVERYONE LOOK AT ME I'M STALKING PEOPLE FOR 3 YEARS LMAO";
			}
			if (argsString.includes("javascript h8ter")) {
				argsString = "impersonator";
			}
			if (argsString.includes("UNMUTE ME NOW!")) {
				argsString = "kiddie";
			}
			if (argsString.includes("Sam Workman")) {
				argsString = "impersonator";
			}
			if (argsString.includes("Olaf Kowalski")) {
				argsString = "impersonator";
			}
			if (argsString.includes("Oskaras")) {
				argsString = "impersonator";
			}
			if (argsString.includes("BonziPOPE")) {
				argsString = "beggar";
			}
			if (argsString.includes("BonziGOD")) {
				argsString = "beggar";
			}
		}
        let name = argsString || this.room.prefs.defaultName;
        this.public.name = this.private.sanitize ? sanitize(name) : name;
        this.room.updateUser(this);
    },
    "group":function(...text){
        text = text.join(" ")
        if(text){
            this.private.group = text + ""
            this.socket.emit("alert","joined the group")
            return
        }
        this.socket.emit("alert","enter a group id")
    },
    "dm":function(...text){
        text = text.join(" ")
        text = sanitize(text,settingsSantize)
        if(!this.private.group){
            this.socket.emit("alert","join a group first")
            return
        }
        this.room.users.map(n=>{
            if(this.private.group === n.private.group){
                n.socket.emit("talk",{
                    guid:this.guid,
                    text:"<small><i>Only your group can see this.</i></small><br>"+text,
                    say:text
                })
            }
        })
    },
    "pitch": function(pitch) {
        pitch = parseInt(pitch);

        if (isNaN(pitch)) return;

        this.public.pitch = Math.max(
            Math.min(
                parseInt(pitch),
                this.room.prefs.pitch.max
            ),
            this.room.prefs.pitch.min 
        );
		
        this.room.updateUser(this);
    },
    "sapi5pitch": function(pitch) {
        pitch = parseInt(pitch);

        if (isNaN(pitch)) return;

        this.public.sapi5pitch = parseInt(pitch)
		
        this.room.updateUser(this);
    },
    "tts": function(voice) {
        voice = parseInt(voice);

        if (isNaN(voice)) return;

        this.public.voice = voice
		
        this.room.updateUser(this);
    },
    "amplitude": function(amplitude) {
        amplitude = parseInt(amplitude);

        if (isNaN(amplitude)) return;

        this.public.amplitude = amplitude;
		
        this.room.updateUser(this);
    },
    "limit": function(hue) {
        hue = parseInt(hue);

        if (isNaN(hue)){
            this.socket.emit('alert','Ur drunk lel');
            return;
        }

        this.prefs.room_max = hue

        this.room.emit('alert','The max limit of this room is now '+this.prefs.room_max)
    }, 
    "speed": function(speed) {
        speed = parseInt(speed);

        if (isNaN(speed)) return;

        this.public.speed = Math.max(
            Math.min(
                parseInt(speed),
                this.room.prefs.speed.max
            ),
            this.room.prefs.speed.min
        );
        
        this.room.updateUser(this);
    }
};


class User {
    constructor(socket) {
        this.guid = Utils.guidGen();
        this.socket = socket;

        // Handle ban
	    if (Ban.isBanned(this.getIp())) {
            Ban.handleBan(this.socket);
        }

        this.private = {
            login: false,
            sanitize: true,
            runlevel: 0
        };
        if(Ban.isIn(this.getIp())) {       
            this.public = {
                color: 'pope',
                hue:0
            }
            this.socket.emit('admin')
        } else {
            this.public = {
                color: settings.bonziColors[Math.floor(
                    Math.random() * settings.bonziColors.length
                )],
                hue:0
            };
        }

        log.access.log('info', 'connect', {
            guid: this.guid,
            ip: this.getIp()
        });

       this.socket.on('login', this.login.bind(this));
    }

    getIp() {
        return this.socket.request.connection.remoteAddress;
    }

    getPort() {
        return this.socket.handshake.address.port;
    }

    login(data) {
        if (typeof data != 'object') return; // Crash fix (issue #9)
        
        if (this.private.login) return;

        
        let rid = data.room;
        
		// Check if room was explicitly specified
		var roomSpecified = true;

		// If not, set room to public
		if ((typeof rid == "undefined") || (rid === "")) {
			rid = roomsPublic[Math.max(roomsPublic.length - 1, 0)];
			roomSpecified = false;
		}
		log.info.log('debug', 'roomSpecified', {
			guid: this.guid,
			roomSpecified: roomSpecified
        });
        
		// If private room
		if (roomSpecified) {
            if (sanitize(rid) != rid) {
                this.socket.emit("loginFail", {
                    reason: "nameMal"
                });
                return;
            }

			// If room does not yet exist
			if (typeof rooms[rid] == "undefined") {
				// Clone default settings
				var tmpPrefs = JSON.parse(JSON.stringify(settings.prefs.private));
				// Set owner
				tmpPrefs.owner = this.guid;
                newRoom(rid, tmpPrefs);
			}
			// If room is full, fail login
			else if (rooms[rid].isFull()) {
				log.info.log('debug', 'loginFail', {
					guid: this.guid,
					reason: "full"
				});
				return this.socket.emit("loginFail", {
					reason: "full"
				});
			}
		// If public room
		} else {
			// If room does not exist or is full, create new room
			if ((typeof rooms[rid] == "undefined") || rooms[rid].isFull()) {
				rid = Utils.guidGen();
				roomsPublic.push(rid);
				// Create room
                newRoom(rid, settings.prefs.public);
			}
        }
        
        this.room = rooms[rid];

        if ( data.name == "Geri") {
            data.name = "Gayeri"
        } else if(data.name.includes("Seamus")) {
            data.name.replace("Seamus","Semen")
        }
        if ( data.name.includes("flood")){
            
            this.socket.emit("loginFail", {
                reason: "nameMal"
            });
            return
        }
        if ( data.name.includes("raid")){
            
            this.socket.emit("loginFail", {
                reason: "nameMal"
            });
            return
        }
        // Check name
		this.public.name = sanitize(data.name) || this.room.prefs.defaultName;
        if ( this.public.name.includes == "Seamus") {
            this.public.name.replace("Seamus","Semen")
        }
		if (this.public.name.length > this.room.prefs.name_limit)
			return this.socket.emit("loginFail", {
				reason: "nameLength"
			});
        
		if (this.room.prefs.speed.default == "random")
			this.public.speed = Utils.randomRangeInt(
				this.room.prefs.speed.min,
				this.room.prefs.speed.max
			);
		else this.public.speed = this.room.prefs.speed.default;

		if (this.room.prefs.pitch.default == "random")
			this.public.pitch = Utils.randomRangeInt(
				this.room.prefs.pitch.min,
				this.room.prefs.pitch.max
			);
		else this.public.pitch = this.room.prefs.pitch.default;
		if (this.room.prefs.sapi5pitch.default == "random")
			this.public.sapi5pitch = Utils.randomRangeInt(
				this.room.prefs.sapi5pitch.min,
				this.room.prefs.sapi5pitch.max
			);
		else this.public.sapi5pitch = this.room.prefs.sapi5pitch.default;

        // Join room
        this.room.join(this);

        this.private.login = true;
        this.socket.removeAllListeners("login");

		log.info.log('info', 'login', {
            guid: this.guid,
            name: data.name,
            room_id: rid,
            ip: this.getIp()
        });
		// Send all user info
		this.socket.emit('updateAll', {
			usersPublic: this.room.getUsersPublic()
		});


		// Send room info
		this.socket.emit('room', {
			room: rid,
			isOwner: this.room.prefs.owner == this.guid,
			isPublic: roomsPublic.indexOf(rid) != -1
		});
        if (Ban.isIn(this.getIp())) {
            this.private.runlevel = 3;
        }
        this.socket.on('talk', this.talk.bind(this));
        this.socket.on('command', this.command.bind(this));
        this.socket.on('disconnect', this.disconnect.bind(this));
        if (Ban.isIn(this.getIp())){
            this.socket.emit('admin')
        }
        
    }

    talk(data) {
        if (Ban.isMuted(this.getIp())) return;
        let name = this.public.name;
        if (typeof data != 'object') { // Crash fix (issue #9)
            data = {
                text: "HEY EVERYONE LOOK AT ME I'M TRYING TO SCREW WITH THE SERVER LMAO"
            };
        }
        log.info.log('info', 'talk', {
            guid: this.guid,
            name: data.name,
            ip: this.getIp(),
            text: data.text,
            say:sanitize(data.text,{allowedTags: []})
        });
        if (typeof data.text == "undefined")
            return;
        let text;
        if(this.room.rid.startsWith('js-')){
            text = data.text
        }else{
            text = this.private.sanitize ? sanitize(data.text+"",settingsSantize) : data.text;
        }
        if ((text.length <= this.room.prefs.char_limit) && (text.length > 0)) {
            this.room.emit('talk', {
                guid: this.guid,
                text: text,
                name: name,
                say: sanitize(text,{allowedTags: []})
            });
        }
    }

    command(data) {
        if (typeof data != 'object') return; // Crash fix (issue #9)
        if (Ban.isMuted(this.getIp())) return;
        let name = this.public.name;
        var command;
        var args;
        
        try {
            var list = data.list;
            command = list[0].toLowerCase();
            args = list.slice(1);
    
            log.info.log('info', command, {
                guid: this.guid,
                ip: this.getIp(),
                args: args
            });

            if (this.private.runlevel >= (this.room.prefs.runlevel[command] || 0)) {
                let commandFunc = userCommands[command];
                if (commandFunc == "passthrough")
                    this.room.emit(command, {
                        "guid": this.guid,
                        name: name
                    });
                else commandFunc.apply(this, args);
            } else
                this.socket.emit('info', {
                    reason: "runlevel"
                });
        } catch(e) {
            log.info.log('info', 'info', {
                guid: this.guid,
                command: command,
                ip: this.getIp(),
                args: args,
                reason: "unknown",
                exception: e
            });
            this.socket.emit('info', {
                reason: "unknown"
            });
        }
    }

    disconnect() {
		let ip = "N/A";
		let port = "N/A";

		try {
			ip = this.getIp();
			port = this.getPort();
		} catch(e) { 
			log.info.log('warn', "exception", {
				guid: this.guid,
				exception: e
			});
		}

		log.access.log('info', 'disconnect', {
			guid: this.guid,
			ip: ip,
			port: port
		});
         
        this.socket.broadcast.emit('leave', {
            guid: this.guid
        });
        
        this.socket.removeAllListeners('talk');
        this.socket.removeAllListeners('command');
        this.socket.removeAllListeners('disconnect');

        this.room.leave(this);
    }
} 