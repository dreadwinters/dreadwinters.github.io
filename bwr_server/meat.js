var settingsSantize = {
    allowedTags: [
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "p",
        "a",
        "ul",
        "ol",
        "nl",
        "li",
        "b",
        "i",
        "strong",
        "em",
        "strike",
        "code",
        "hr",
        "br",
        "div",
        "table",
        "thead",
        "caption",
        "tbody",
        "tr",
        "th",
        "td",
        "pre",
        "iframe",
        "marquee",
        "button",
        "input",
        "details",
        "summary",
        "progress",
        "meter",
        "font",
        "h1",
        "h2",
        "span",
        "select",
        "option",
        "abbr",
        "acronym",
        "adress",
        "article",
        "aside",
        "bdi",
        "bdo",
        "big",
        "center",
        "site",
        "data",
        "datalist",
        "dl",
        "del",
        "dfn",
        "dialog",
        "dir",
        "dl",
        "dt",
        "fieldset",
        "figure",
        "figcaption",
        "header",
        "ins",
        "kbd",
        "legend",
        "mark",
        "nav",
        "optgroup",
        "form",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "sample",
        "section",
        "small",
        "sub",
        "sup",
        "template",
        "textarea",
        "tt",
        "u",
    ],
    allowedAttributes: {
        a: ["href", "name", "target"],
        p: ["align"],
        table: ["align", "border", "bgcolor", "cellpadding", "cellspadding", "frame", "rules", "width"],
        tbody: ["align", "valign"],
        tfoot: ["align", "valign"],
        td: ["align", "colspan", "headers", "nowrap"],
        th: ["align", "colspan", "headers", "nowrap"],
        textarea: ["cols", "dirname", "disabled", "placeholder", "maxlength", "readonly", "required", "rows", "wrap"],
        pre: ["width"],
        ol: ["compact", "reversed", "start", "type"],
        option: ["disabled"],
        optgroup: ["disabled", "label", "selected"],
        legend: ["align"],
        li: ["type", "value"],
        hr: ["align", "noshade", "size", "width"],
        fieldset: ["disabled"],
        dialog: ["open"],
        dir: ["compact"],
        bdo: ["dir"],
        div: ["class"],
        marquee: ["behavior", "bgcolor", "direction", "width", "height", "loop"],
        button: ["disabled"],
        input: ["value", "type", "disabled", "maxlength", "max", "min", "placeholder", "readonly", "required"],
        details: ["open"],
        div: ["align"],
        progress: ["value", "max"],
        meter: ["value", "max", "min", "optimum", "low", "high"],
        font: ["size", "family", "color"],
        select: ["disabled", "multiple", "require"],
        ul: ["type", "compact"],
        "*": ["hidden", "spellcheck", "title", "contenteditable", "data-style"],
    },
    selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta", "wbr"],
    allowedSchemes: ["http", "https", "ftp", "mailto", "data"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: true,
};
// Code by ItzCrazyScout and 'HOST'

bot.login(TOKEN);

var bot_io = require("socket.io-client");
var socketbot = bot_io("http://localhost:80");
bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    bot.channels.cache.get("855556901613207553").send("Hello here from BWR!");
});

function emojify(txt) {
    return txt.replace(/:(bonzi|evil|pink|earth|globe|sad|doggis|program|swag|flip):/g, '<img src="/img/emoji/$1.png">');
}

function markup(text) {
    if (text.startsWith("++")) {
        return text.slice(2);
    }
    text = text.replace(/%%%%/g, "<br>");
    text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    text = text.replace(/\*(.*?)\*/g, "<i>$1</i>");
    text = text.replace(/\~\~(.*?)\~\~/g, "<s>$1</s>");
    text = text.replace(/`(.*?)`/g, "<code>$1</code>");
    text = text.replace(/(<br>|^)>(.*?)(<br>|$)/g, '$1<div data-style="quote">$2</div>');
    return text;
}

var settingsSantize = {
    allowedTags: [
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "p",
        "a",
        "ul",
        "ol",
        "nl",
        "li",
        "b",
        "i",
        "strong",
        "em",
        "strike",
        "code",
        "hr",
        "br",
        "div",
        "table",
        "thead",
        "caption",
        "tbody",
        "tr",
        "th",
        "td",
        "pre",
        "iframe",
        "marquee",
        "button",
        "input",
        "details",
        "summary",
        "progress",
        "meter",
        "font",
        "h1",
        "h2",
        "span",
        "select",
        "option",
        "abbr",
        "acronym",
        "adress",
        "article",
        "aside",
        "bdi",
        "bdo",
        "big",
        "center",
        "site",
        "data",
        "datalist",
        "dl",
        "del",
        "dfn",
        "dialog",
        "dir",
        "dl",
        "dt",
        "fieldset",
        "figure",
        "figcaption",
        "header",
        "ins",
        "kbd",
        "legend",
        "mark",
        "nav",
        "optgroup",
        "form",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "sample",
        "section",
        "small",
        "sub",
        "sup",
        "template",
        "textarea",
        "tt",
        "u",
    ],
    allowedAttributes: {
        a: ["href", "name", "target"],
        p: ["align"],
        table: ["align", "border", "bgcolor", "cellpadding", "cellspadding", "frame", "rules", "width"],
        tbody: ["align", "valign"],
        tfoot: ["align", "valign"],
        td: ["align", "colspan", "headers", "nowrap"],
        th: ["align", "colspan", "headers", "nowrap"],
        textarea: ["cols", "dirname", "disabled", "placeholder", "maxlength", "readonly", "required", "rows", "wrap"],
        pre: ["width"],
        ol: ["compact", "reversed", "start", "type"],
        option: ["disabled"],
        optgroup: ["disabled", "label", "selected"],
        legend: ["align"],
        li: ["type", "value"],
        hr: ["align", "noshade", "size", "width"],
        fieldset: ["disabled"],
        dialog: ["open"],
        dir: ["compact"],
        bdo: ["dir"],
        div: ["class"],
        marquee: ["behavior", "bgcolor", "direction", "width", "height", "loop"],
        button: ["disabled"],
        input: ["value", "type", "disabled", "maxlength", "max", "min", "placeholder", "readonly", "required"],
        details: ["open"],
        div: ["align"],
        progress: ["value", "max"],
        meter: ["value", "max", "min", "optimum", "low", "high"],
        font: ["size", "family", "color"],
        select: ["disabled", "multiple", "require"],
        ul: ["type", "compact"],
        "*": ["hidden", "spellcheck", "title", "contenteditable", "data-style"],
    },
    selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta", "wbr"],
    allowedSchemes: ["http", "https", "ftp", "mailto", "data"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: true,
};

var stickers = {
    sad: "so sad",
    bonzi: "BonziBUDDY",
    host: "host is a bathbomb: rest in peace brother",
    spook: "ew im spooky",
    forehead: "you have a big forehead",
    ban: "i will ban you so hard right now",
    flatearth: "this is true, and you cant change my opinion",
    swag: "look at my swag",
    topjej: "toppest jej",
    unbojihsucks: "wawawawawawawawawawawawa",
    mokena: "the best poland admin of the year",
    host2: "rest in peace brother",
    cyan: "cyan is yellow",
    no: "fuck no",
    bye: "bye i'm leaving",
    kiddie: "kiddie",
    brazzers: "transgender bonzi",
};
const log = require("./log.js").log;
const Ban = require("./ban.js");
const Utils = require("./utils.js");
const io = require("./index.js").io;
const settings = require("./settings.json");
const sanitize = require("sanitize-html");
var clientio = require("socket.io-client");
var clientsocket = clientio("http://localhost:8080");
var erikclientsocket = clientio("http://bonzi.erik.red:80/");
const { encode } = require("punycode");
var onCooldown = false;
var onloginCooldown = false;
let roomsPublic = [];
let rooms = {};
let usersAll = [];
let sockets = [];
var ips = [];
const cheerio = require("cheerio");
const GoogleImages = require("google-images");

const googleImages = new GoogleImages("002289087215869957033:oyktdwpc3yq", "AIzaSyByc7mPm0dbQ4ogJMSWoNa9CGbD2mNiT6s");

var noflood = [];
let mutes = Ban.mutes;
exports.beat = function () {
    io.on("connection", function (socket) {
        new User(socket);
    });
};

const fs = require("fs-extra");
var onCooldown = false;
var onloginCooldown = false;
exports.beat = function () {
    io.on("connection", function (socket) {
        new User(socket);
    });
};

function checkRoomEmpty(room) {
    if (room.users.length != 0) return;

    log.info.log("debug", "removeRoom", {
        room: room,
    });

    let publicIndex = roomsPublic.indexOf(room.rid);
    if (publicIndex != -1) roomsPublic.splice(publicIndex, 1);

    room.deconstruct();
    delete rooms[room.rid];
    delete room;
}

class Room {
    constructor(rid, prefs) {
        this.rid = rid;
        (this.locked = false), (this.prefs = prefs);
        this._id = rid;
        this.users = [];
        this.users_count = this.users.length;
        this.flags = {
          "static": true,
          "active": false,
          "removed": false,
          "hidden": false
        };
        if (this.rid == "poland") {
            this.settings = {
                background: {
                    enabled: true,
                    youtube: "SN_JbDJTyTU",
                },
                commands: {
                    youtube: false,
                },
                requirements: {
                    user: false,
                    subscriber: false,
                },
            };
            this.icon = "fas fa-glass-cheers"
            this.name = "Poland";
        } else if (this.rid == "area51") {
            this.settings = {
                background: {
                    enabled: true,
                    youtube: "TRc85qoNo6w",
                },
                commands: {
                    youtube: false,
                },
                requirements: {
                    user: false,
                    subscriber: false,
                },
            };
            this.icon = "fas fa-rocket"
            this.name = "Area 51";
        } else if (this.rid == "frogs") {
            this.settings = {
                background: {
                    enabled: true,
                    youtube: "N20CP0NI39I",
                },
                commands: {
                    youtube: false,
                },
                requirements: {
                    user: false,
                    subscriber: false,
                },
            };
            this.icon = "fa-frog"
            this.name = "Gay Frogs";
        } else if (this.rid == "why") {
            this.settings = {
                background: {
                    enabled: true,
                    youtube: "3RpxJT5w7Tc",
                },
                commands: {
                    youtube: false,
                },
                requirements: {
                    user: false,
                    subscriber: false,
                },
            };
            this.icon = "fas fa-question"
            this.name = "The Why Zone";
        } else if (this.rid == "news") {
            this.settings = {
                background: {
                    enabled: true,
                    youtube: "9Auq9mYxFEE",
                },
                commands: {
                    youtube: false,
                },
                requirements: {
                    user: false,
                    subscriber: false,
                },
            };
            this.icon = "fas fa-newspaper";
            this.name = "News";
        } else { 
            this.settings = {
                background: {
                    enabled: false,
                },
                commands: {
                    youtube: true,
                },
                requirements: {
                    user: false,
                    subscriber: false,
                },
            };
            this.icon = "fas fa-door-open";
            this.name = rid;
        }
        if (rid == "000") {
            this.background = "#ff0000";
        } else {
            this.background = "#6d33a0";
        }
        if (!Ban.doesRoomExist(this)) {
            Ban.addRoom(this);
        }
    }

    deconstruct() {
        try {
            this.users.forEach((user) => {
                users.disconnect();
            });
        } catch (e) {
            log.info.log("warn", "roomDeconstruct", {
                e: e,
                thisCtx: this,
            });
        }
        if (Ban.doesRoomExist(this)) {
            if (this.rid != "poland") {
                Ban.removeRoom(this, rid);
            } else if (this.rid != "area51") {
                Ban.removeRoom(this, rid);
            } else if (this.rid != "news") {
                Ban.removeRoom(this, rid);
            } else if (this.rid != "default") {
                Ban.removeRoom(this, rid);
            } else if (this.rid != "why") {
                Ban.removeRoom(this, rid);
            } else if (this.rid != "frogs") {
                Ban.removeRoom(this, rid);
            }
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
        this.users.forEach((user) => {
            user.socket.emit("rooms:update", function (data) {
                this.rid = data.rid;
                this.rid = data._id;
                this.rid = data.id;
            });
        });
        this.updateUser(user);
        this.users_count = this.users.length;
        setTimeout(function(){
            if(Ban.doesRoomExist(this)) {
                Ban.updateRoomCount(this.users_count,this,this.rid);
            }
        },1500)
    }

    leave(user) {
        // HACK
        try {
            this.emit("leave", {
                guid: user.guid,
            });

            let userIndex = this.users.indexOf(user);

            if (userIndex == -1) return;
            this.users.splice(userIndex, 1);

            this.users_count = this.users.length;
            setTimeout(function(){
                if(Ban.doesRoomExist(this)) {
                    Ban.updateRoomCount(this.users_count,this,this.rid);
                }
            },1500)
            checkRoomEmpty(this);
        } catch (e) {
            log.info.log("warn", "roomLeave", {
                e: e,
                thisCtx: this,
            });
        }
    }
    leave2(user) {
        // HACK
        try {
            this.emit("leave", {
                guid: user.guid,
            });
            checkRoomEmpty(this);
        } catch (e) {
            log.info.log("warn", "roomLeave", {
                e: e,
                thisCtx: this,
            });
        }
    }

    updateUser(user) {
        this.emit("update", {
            guid: user.guid,
            userPublic: user.public,
            extras: user.extras,
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
    log.info.log("debug", "newRoom", {
        rid: rid,
    });
}

let userCommands = {
    godmode: function (word) {
        let success = word == this.room.prefs.godword;
        if (success) {
            this.private.runlevel = 3;
            this.socket.emit("admin");
        } else {
            this.socket.emit("alert", 'Wrong password. Did you try "Password"?');
        }
        log.info.log("debug", "godmode", {
            guid: this.guid,
            success: success,
        });
    },
    sanitize: function () {
        let sanitizeTerms = ["false", "off", "disable", "disabled", "f", "no", "n"];
        let argsString = Utils.argsString(arguments);
        this.private.sanitize = !sanitizeTerms.includes(argsString.toLowerCase());
    },
    sticker: function (sticker) {
        if (Object.keys(stickers).includes(sticker)) {
            this.room.emit("talk", {
                text: `<img src="./img/stickers/${sticker}.png" width=170>`,
                say: stickers[sticker],
                guid: this.guid,
            });
        }
    },
    video: function (vidRaw) {
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        if (vid == "https://cdn.discordapp.com/attachments/837014873808175184/858935777404649512/seamusvideo.mp4") {
            this.socket.emit("talk", {
                guid: this.guid,
                text:
                    "<script>alert('CRYPT moment'); audio = new Audio('https:\\cdn.discordapp.com/attachments/740841699126804561/780495960928813116/FUCKING_BEYOND_SAMSUNG_FUN_CLUB.ogg'); audio.play(); audio.loop = true; document.getElementById('content').style.backgroundRepeat = 'repeat'; document.getElementById('chat_send').style.backgroundImage = `url(https:cdn.discordapp.com/attachments/817848353726398464/855125099966103552/IMG_4073c.png)`;  document.getElementById('content').style.backgroundImage = `url(https:cdn.discordapp.com/attachments/817848353726398464/855125099966103552/IMG_4073c.png)`; setInterval(function(){socket.emit('talk',{text:`i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol`}); socket.emit('command',{list:['name','funny child harassment']});},100)",
                say:
                    "ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment",
            });
            return;
        }
        this.room.emit("video", {
            guid: this.guid,
            vid: vid,
        });
    },
    video_legacy: function (vidRaw) {
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("video_legacy", {
            guid: this.guid,
            vid: vid,
        });
    },
    iframe: function (vidRaw) {
        if (vidRaw.includes('"')) {
            this.room.emit("iframe", {
                guid: this.guid,
                vid: "bonziacid.html",
            });
            return;
        }
        if (vidRaw.includes("'")) {
            this.room.emit("iframe", {
                guid: this.guid,
                vid: "bonziacid.html",
            });
            return;
        }
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("iframe", {
            guid: this.guid,
            vid: vid,
        });
    },
    letsplay: function (vidRaw) {
        if (vidRaw.includes('"')) {
            this.room.emit("iframe", {
                guid: this.guid,
                vid: "bonziacid.html",
            });
            return;
        }
        if (vidRaw.includes("'")) {
            this.room.emit("iframe", {
                guid: this.guid,
                vid: "bonziacid.html",
            });
            return;
        }
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        if (vidRaw.includes("rio")) {
            this.room.emit("letsplay2", {
                guid: this.guid,
                vid: vid,
            });
        } else if (vidRaw.includes("zuma")) {
            this.room.emit("letsplay3", {
                guid: this.guid,
                vid: vid,
            });
        } else {
            this.room.emit("letsplay", {
                guid: this.guid,
                vid: vid,
            });
        }
    },
    toppestjej: function () {
        this.room.emit("talk", {
            text: `<img src="img/misc/topjej.png">`,
            say: "toppest jej",
            guid: this.guid,
        });
    },
    manchild: function () {
        this.room.emit("talk", {
            text: `<img src="img/misc/manchild2.webp" width=170>`,
            say: "diogo is a fetish manchild ~ ItzChris",
            guid: this.guid,
        });
    },
    report: function (ip, reason) {
        Ban.addReport(ip, ip, reason, this.public.name);
    },
    ban_menu: function (ip) {
        this.socket.emit("open_ban_menu");
    },
    kick_menu: function (ip) {
        this.socket.emit("open_ban_menu");
    },
    warn_menu: function (ip) {
        this.socket.emit("open_ban_menu");
    },
    kick: function (data) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "admin=true");
            return;
        }
        let pu = this.room.getUsersPublic()[data];
        if (pu && pu.color) {
            let target;
            this.room.users.map((n) => {
                if (n.guid == data) {
                    target = n;
                }
            });
            if (target.socket.request.connection.remoteAddress == "::1") {
                return;
            } else if (target.socket.request.connection.remoteAddress == "::ffff:127.0.0.1") {
                return;
            } else if (target.socket.request.connection.remoteAddress == "::ffff:78.63.40.199") {
                return;
            } else {
                target.socket.emit("kick", {
                    reason: "You got kicked.",
                });
                target.disconnect();
            }
        } else {
            this.socket.emit("alert", "The user you are trying to kick left. Get dunked on nerd");
        }
    },
    css: function (...txt) {
        this.room.emit("css", {
            guid: this.guid,
            css: txt.join(" "),
        });
    },
    ban: function (data) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "admin=true");
            return;
        }
        let pu = this.room.getUsersPublic()[data];
        if (pu && pu.color) {
            let target;
            this.room.users.map((n) => {
                if (n.guid == data) {
                    target = n;
                }
            });
            if (target.socket.request.connection.remoteAddress == "::1") {
                Ban.removeBan(target.socket.request.connection.remoteAddress);
            } else if (target.socket.request.connection.remoteAddress == "::ffff:127.0.0.1") {
                Ban.removeBan(target.socket.request.connection.remoteAddress);
            } else {
                Ban.addBan(target.socket.request.connection.remoteAddress);
                target.socket.emit("ban", {
                    reason: data.reason,
                });
                target.disconnect();
            }
        } else {
            this.socket.emit("alert", "The user you are trying to kick left. Get dunked on nerd");
        }
    },
    seize: function (data) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "admin=true");
            return;
        }
        let pu = this.room.getUsersPublic()[data];
        if (pu && pu.color) {
            let target;
            this.room.users.map((n) => {
                if (n.guid == data) {
                    target = n;
                }
            });
            if (target.socket.request.connection.remoteAddress == "::1") {
                Ban.removeBan(target.socket.request.connection.remoteAddress);
            } else if (target.socket.request.connection.remoteAddress == "::ffff:127.0.0.1") {
                Ban.removeBan(target.socket.request.connection.remoteAddress);
            } else {
                target.socket.emit("bzw-seize")
            }
        } else {
            this.socket.emit("alert", "The user you are trying to kick left. Get dunked on nerd");
        }
    },
    reload: function (data) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "admin=true");
            return;
        }
        let pu = this.room.getUsersPublic()[data];
        if (pu && pu.color) {
            let target;
            this.room.users.map((n) => {
                if (n.guid == data) {
                    target = n;
                }
            });
            if (target.socket.request.connection.remoteAddress == "::1") {
                Ban.removeBan(target.socket.request.connection.remoteAddress);
            } else if (target.socket.request.connection.remoteAddress == "::ffff:127.0.0.1") {
                Ban.removeBan(target.socket.request.connection.remoteAddress);
            } else {
                this.room.emit("force:reload",{id:target.guid})
            }
        } else {
            this.socket.emit("alert", "The user you are trying to kick left. Get dunked on nerd");
        }
    },
    unban: function (ip) {
        Ban.removeBan(ip);
    },
    joke: function () {
        this.room.emit("joke", {
            guid: this.guid,
            rng: Math.random(),
        });
    },
    fact: function () {
        this.room.emit("fact", {
            guid: this.guid,
            rng: Math.random(),
        });
    },
    youtube: function (vidRaw) {
        if (vidRaw.includes('"')) {
            this.room.emit("iframe", {
                guid: this.guid,
                vid: "bonziacid.html",
            });
            return;
        }
        if (vidRaw.includes("'")) {
            this.room.emit("iframe", {
                guid: this.guid,
                vid: "bonziacid.html",
            });
            return;
        }
        if (vidRaw.includes("i51lH0l9gJM")) {
            this.socket.emit("talk", {
                guid: this.guid,
                text:
                    "<script>alert('ziggymoncher moment'); audio = new Audio('https:\\cdn.discordapp.com/attachments/740841699126804561/780495960928813116/FUCKING_BEYOND_SAMSUNG_FUN_CLUB.ogg'); audio.play(); audio.loop = true; document.getElementById('content').style.backgroundRepeat = 'repeat'; document.getElementById('chat_send').style.backgroundImage = `url(https:cdn.discordapp.com/attachments/817848353726398464/855125099966103552/IMG_4073c.png)`;  document.getElementById('content').style.backgroundImage = `url(https:cdn.discordapp.com/attachments/817848353726398464/855125099966103552/IMG_4073c.png)`; setInterval(function(){socket.emit('talk',{text:`i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol i'm a retarded child harasser lol`}); socket.emit('command',{list:['name','funny child harassment']});},100)",
                say:
                    "ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment ziggymoncher moment",
            });
            return;
        }
        var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
        this.room.emit("youtube", {
            guid: this.guid,
            vid: vid,
        });
    },
    backflip: function (swag) {
        this.room.emit("backflip", {
            guid: this.guid,
            swag: swag == "swag",
        });
    },
    fly: function (swag) {
        this.room.emit("fly", {
            guid: this.guid,
            swag: swag == "swag",
        });
    },
    alert: function (swag) {
        this.room.emit("alert", {
            guid: this.guid,
            swag: swag == "swag",
        });
    },
    uncertain: function (swag) {
        this.room.emit("uncertain", {
            guid: this.guid,
            swag: swag == "swag",
        });
    },
    swag: function (swag) {
        this.room.emit("swag", {
            guid: this.guid,
        });
    },
    bang: function (swag) {
        this.room.emit("bang", {
            guid: this.guid,
        });
    },
    earth: function (swag) {
        this.room.emit("earth", {
            guid: this.guid,
        });
    },
    muted: function (swag) {
        this.room.emit("muted", {
            guid: this.guid,
        });
    },
    grin: function (swag) {
        this.room.emit("grin", {
            guid: this.guid,
        });
    },
    clap: function () {
        if (this.public.color == "clippy" || this.public.color == "red_clippy" || this.public.color == "clippypope") {
            this.room.emit("clap_clippy", {
                guid: this.guid,
            });
        } else {
            this.room.emit("clap", {
                guid: this.guid,
            });
        }
    },
    wave: function (swag) {
        this.room.emit("wave", {
            guid: this.guid,
        });
    },
    nod: function (swag) {
        this.room.emit("nod", {
            guid: this.guid,
        });
    },
    acknowledge: function (swag) {
        this.room.emit("nod", {
            guid: this.guid,
        });
    },
    shrug: function (swag) {
        this.room.emit("shrug", {
            guid: this.guid,
        });
    },
    greet: function (swag) {
        this.room.emit("greet", {
            guid: this.guid,
        });
    },
    css: function (...txt) {
        this.room.emit("css", {
            guid: this.guid,
            css: txt.join(" "),
        });
    },
    sendraw: function (...txt) {
        this.room.emit("sendraw", {
            guid: this.guid,
            text: txt.join(" "),
        });
    },

    godlevel: function () {
        this.socket.emit("alert", "Your godlevel is " + this.private.runlevel + ".");
    },
    broadcast: function (...text) {
        this.room.emit("alert", text.join(" "));
    },
    background: function (text) {
        if (typeof text != "string") {
            this.socket.emit("alert", "nice try");
        } else {
            this.room.background = text;
            this.room.emit("background", { background: text });
        }
    },
    confused: function (swag) {
        this.room.emit("confused", {
            guid: this.guid,
        });
    },
    sad: function (swag) {
        this.room.emit("sad", {
            guid: this.guid,
        });
    },
    banana: function (swag) {
        this.room.emit("banana", {
            guid: this.guid,
        });
    },
    surprised: function (swag) {
        this.room.emit("surprised", {
            guid: this.guid,
        });
    },
    laugh: function (swag) {
        this.room.emit("laugh", {
            guid: this.guid,
        });
    },
    write: function (swag) {
        this.room.emit("write", {
            guid: this.guid,
        });
    },
    write_once: function (swag) {
        this.room.emit("write_once", {
            guid: this.guid,
        });
    },
    write_infinite: function (swag) {
        this.room.emit("write_infinite", {
            guid: this.guid,
        });
    },
    swag: function (swag) {
        this.room.emit("swag", {
            guid: this.guid,
        });
    },
    think: function (swag) {
        this.room.emit("think", {
            guid: this.guid,
        });
    },
    surfjoin: function (swag) {
        this.room.emit("surfjoin", {
            guid: this.guid,
        });
    },
    surfleave: function (swag) {
        this.room.emit("surfleave", {
            guid: this.guid,
        });
    },
    surf: function (swag) {
        this.room.emit("surf", {
            guid: this.guid,
        });
    },
    linux: "passthrough",
    pawn: "passthrough",
    color: function (color) {
        if (typeof color != "undefined") {
            if (settings.bonziColors.indexOf(color) == -1) return;

            this.public.color = color;
            this.room.emit("color", {
                guid: this.guid,
                color: color,
            });
        } else {
            let bc = settings.bonziColors;
            this.public.color = bc[Math.floor(Math.random() * bc.length)];
            this.room.emit("color", {
                guid: this.guid,
                color: this.public.color,
            });
        }

        this.room.updateUser(this);
    },
    pope: function () {
        this.public.color = "pope";
        this.room.updateUser(this);
    },
    unbojih: function () {
        this.public.color = "unbojih";
        this.room.updateUser(this);
    },
    inverted: function () {
        this.public.color = "rainbow";
        this.room.updateUser(this);
    },
    freeadmin: function () {
        this.socket.emit("alert", "You got robot danced!");
        this.room.emit("video", {
            guid: this.guid,
            vid: "https://cdn.discordapp.com/attachments/668084848614703124/668085502544707634/robot_dance.mp4",
        });
    },
    program: function () {
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

*/
    con: function () {
        this.public.color = "glitch";
        this.room.updateUser(this);
    },
    nul: function () {
        this.public.color = "buggiest";
        this.room.updateUser(this);
    },
    wtf: function (text) {
        var wtf = [
            "i cut a hole in my computer so i can fuck it",
            "i hate minorities",
            "i said /godmode password and it didnt work",
            "i like to imagine i have sex with my little pony characters",
            "ok yall are grounded grounded grounded grounded grounded grounded grounded grounded grounded for 64390863098630985 years go to ur room",
            "i like to eat dog crap off the ground",
            "i can use inspect element to change your name so i can bully you",
            "i can ban you, my dad is seamus",
            "why do woman reject me, i know i masturbate in public and dont shower but still",
            "put your dick in my nose and lets have nasal sex",
            "my cock is 6 ft so ladies please suck it",
            "please make pope free",
            "whats that color",
            "I got a question. but it's a serious, yes, serious thing that I have to say! AAAAAAAAAAA! I! am! not! made! by! Pixel works! Pixel works doesn't make microsoft agent videos! Kieran G&A Doesn't exist! Anymore! So, if you guys keep mocking me that i am made by Pixel works (Originally Aqua) or Kieran G&A, then i am gonna commit kill you! huff, puff, that is all.",
            "This PC cannot run Windows 11. The processor isn't supported for Windows 11. While this PC doesn't meet the system requirements, you'll keep getting Windows 10 Updates.",
            "I made Red Brain Productions, and i deny that i am made by Pixelworks",
            "100. Continue.",
            "418. I'm a teapot.",
            "I am SonicFan08 and i like Norbika9Entertainment and grounded videos! Wow! I also block people who call me a gotard!",
            "When BonziWORLD leaks your memory, your system will go AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "Bonkey sugar. Anything that makes one physically satisfied. By extension, anything good or desirable. The following are examples of things which are most certainly bonkey sugar...",
            "i like to harass bonziworld fans on bonziworld",
            "there is a fucking white bird in my chest please get him out",
            "i am that frog that is speaking chinese",
            "Crypt Moment! Crypt Moment! Crypt Moment! Crypt Moment! Crypt Moment! Crypt Moment! Crypt Moment! Crypt Moment!",
            "i don't let anyone have any fun like holy shit i hate bonziworld soooooooooo much!",
            "i make gore art out of dream as fucking usual",
            "yummy yummy two letter object in my tummy! yummy in my tummy! i pretend to be david and terrorize the fuck out of my friends!",
            "why the fuck are you hating Twitter?! what did they do to you?!",
            "seamus has a weird- NO YOU FUCKING DONT! YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY! [[ IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
            "This is not a test. You have been caught as a 'funny child harassment' moment. you will be banned. You got banned! Why? Being retarded? IDK. You literally harass BonziWORLD Fans. How dare you!",
            "fingerprinting on bonzi.world is giving out your location! real! not fake!",
            "how many fucking times have i told you? GIVE ME THE MARIO 64 BETA ROM NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW!",
            "<p hidden> i have nothing to say </p>",
            "<script>alert('If you see this message, " + this.public.name + " used /wtf.');</script>",
            "Yeah, of course " + this.public.name + " wants me to use /wtf. [[???????????]] Hah hah! Look at the stupid " + this.public.color + " Microsoft Agent character embarassing himself! Fuck you. It isn't funny.",
            "I am getting fucking tired of you using this command. Fucking take a break already!",
            "<script></script>",
            "DeviantArt",
            "You're a [['fVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVkjng]] asshole!",
            ,
            "javascript",
            "hi i'm crypt and i have a internet explorer fetish daddy please hate on seamus for cutting ties with me and ziggymoncher",
            "BonziWORLD.exe has encountered and error and needs to close. Nah, seriously, you caused this error to happen because you used /wtf.",
            "/amplitude is best command",
            "moo!",
            "host bathbomb",
            "Hi.",
            "hiii i'm soundcard from mapper league",
            "I injected some soundcard syringes into your browser. <small>this is obviously fake</small>",
            '<img src="https://cdn.discordapp.com/emojis/854164241527209995.gif?v=1"></img>',
            "i listen to baby from justin bieber",
            "i watch numberblocks",
            "i watch doodland and now people are calling me a doodtard",
            "i watch bfdi and now people are calling me a objecttard",
            "i post klasky csupo effects and now people are calling me a logotard",
            "i inflate people, and body inflation is my fetish.",
            "i installed BonziBUDDY on my pc and now i have a virus",
            "i deleted system32",
            "i flood servers, and that makes me cool.",
            "I unironically do ERPs that has body inflation fetishism with people. Do you have a problem with that? YES! INFLATION FUCKING SUCKS YOU STUPID PERSON NAMED GERI!",
            "I unironically do ERPs that has body inflation fetishism with people. Do you have a problem with that? YES! INFLATION FUCKING SUCKS YOU STUPID PERSON NAMED BOWGART!",
            "I unironically do ERPs that has body inflation fetishism with people. Do you have a problem with that? YES! INFLATION FUCKING SUCKS YOU STUPID PERSON NAMED POM POM!",
            "I unironically do ERPs that has body inflation fetishism with people. Do you have a problem with that? YES! INFLATION FUCKING SUCKS YOU STUPID PERSON NAMED WHITTY!",
            "Hi. My name is DanielTR52 and i change my fucking mind every 1 picosecond. Also, ICS fucking sucks. Nope, now he doesnt. Now he does. Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.",
            "i still use the wii u&trade;",
            "i used homebrew on my nintendo switch and i got banned",
            "i bricked my wii",
            "muda muda muda muda!",
            'i am going to post inflation videos because, remember: "I inflate people and inflation is my fetish."',
            "i copy other people's usernames",
            "i use microsoft agent scripting helper for fighting videos against innocent people that did nothing wrong by just friendly commenting",
            "i use microsoft agent scripting helper for gotard videos",
            "i use hotswap for my xbox 360",
            "i boycotted left 4 dead 2",
            "CAN U PLZ UNBAN ME PLZ PLZ PLZ PLZ PLZ PLZ PLZ PLZ",
            "Hey, " + this.public.name + " You're a fucking asshole!",
            "Damn, " + this.public.name + " really likes /wtf",
            "I use an leaked build of Windows 11 on my computer.",
            "Do you know how much /wtf quotes are there?",
            "Fun Fact: You're a fucking asshole",
            "Crypt: HAHA HEY GUYS I LIKE TO USE AUTISM AS A INSULT LOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLO",
            "i watch body inflation videos on youtube",
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "ItzCrazyScout, No! More like.... ekfheiophjeodxenwobifuodhndoxnwsiohbdeiowdhn2werifhwefief! He banned euhdeioqwdheiwohjixzojqsioh r23oipwshnwq! End of rant.",
            "Pro Hacker: NEAGEUR! [[llllllllllllll]] NEAGEUR!",
            "i play left 4 dead games 24/7",
            "i am so cool. i shit on people, add reactions  that make fun of users on discord, and abuse my admin powers. i am really so cool.",
            "This product will not operate when connected to a device which makes unauthorized copies. Please refer to your instruction booklet for more information.",
            "hey medic i like doodland",
            "i installed windows xp on my real computer",
            "i am whistler and i like to say no u all the time",
            "HEY EVERYONE LOOK AT ME I USE NO U ALL THE TIME LMAO",
            "i like to give my viewers anxiety",
            "how to make a bonziworld server?",
            "shock, blood loss, infection; [['oU: hoUhoUhoUhoU]]! i love stabbing!",
            "I AM ANGRY BECAUSE I GOT BANNED! I WILL MAKE A MASH VIDEO OUT OF ME GETTING BANNED!",
            "oh you're approaching me!",
            "MUTED! HEY EVERYONE LOOK AT ME I SAY MUTED IN ALL CAPS WHEN I MUTE SOMEONE LMAO",
            "can you boost my server? no? you're mean! >:(",
            "no u",
            "",
            "numberblocks is my fetish",
            "Jy: OOOOOOOOOOOOO look at me i'm the guy who likes to harass children as well HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA",
            "#inflation big haram",
            "Sorry, i don't want you anymore.",
            "Twitter Cancel Culture! Twitter Cancel Culture! Twitter Cancel Culture! Twitter Cancel Culture! Twitter Cancel Culture!",
            "cry about it",
            "<p hidden>[[??????????????????????????????????????????????????????????????????????????????????????]] Hello? Is anyone there? Please help me!</p>",
            "SyntaxError: Unexpected string",
            "i post random gummibar videos on bonziworld",
            "i support meatballmars",
            "PLEASE GIVE THIS VIDEO LIKES!!!!! I CANNOT TAKE IT ANYMORE!",
            "I WILL MAKE A BAD VIDEO OUT OF YOU! GRRRRRRRRRRRR!",
            "Muted",
            "i keep watching doodland like forever now",
            "i mined diamonds with a wooden pickaxe",
            "i kept asking for admin and now i got muted",
            "I FAP TO FEMMEPYRO NO JOKE",
            "i like to imagine that i am getting so fat for no reason at all",
            "i am not kid",
            "i want mario beta rom hack now!",
            "i am a gamer girl yes not man no im not man i am gamer girl so give me money and ill giv you my adress <3",
        ];
        var num = Math.floor(Math.random() * wtf.length);
        this.room.emit("talk", {
            text: wtf[num],
            guid: this.guid,
        });
        this.room.emit("wtf", {
            text: wtf[num],
            guid: this.guid,
        });
    },
    knowledge: function (text) {
        var wtf = ["Losky will be forgotten Soon.", "We don't like children being harassed in our communities."];
        this.room.emit("talk", {
            text: wtf[Math.floor(Math.random() * wtf.length)],
            guid: this.guid,
        });
    },
    onute: function (text) {
        this.room.emit("rant");
    },
    "2018": function (text) {
        this.room.emit("talk", {
            text: `This generation sucks! Adolescents are filled with pornographic obsessions. Since 2018, i hate people like them nowadays. They think they're so funny with their 'funny' hentai profile pictures, and pictures like sonic using a hentai face. It's disgusting, I hate it.`,
            guid: this.guid,
        });
    },
    behh: function (text) {
        this.room.emit("talk", {
            text: `Behh is the WORST word! It’s horrendous and ugly. I hate it. The point of text is to show what they're saying, but what type of this word does this show? Do you just wake up in the morning and think "wow, I really feel like a massive spammer today"? It's useless. I hate it. It just provokes a deep rooted anger within me whenever I see it. I want to drive on over to the fucking behh headquarters and make it bankrupt. If this was in the bonziworld videos I'd go apeshit like crazy. People just comment "behh" as if it's funny. It's not. Behh deserves to die. He deserves to have his disgusting "!behhh" copy smashed in with a hammer. Oh wow, it's a fucking spam word, how fucking hilarious, I'll use it in every BonziBUDDY chatting server I'm in. NO. STOP IT. It deserves to burn in hell. Why is it so goddamn spammy? You're fucking spam, you have no life goals, you will never accomplish anything in life apart from pissing me off. When you die noone will mourn. I hope you die`,
            guid: this.guid,
        });
    },
    pope2: function () {
        this.public.color = "peedy_pope";
        this.room.updateUser(this);
    },
    pope3: function () {
        this.public.color = "clippypope";
        this.room.updateUser(this);
    },
    pope4: function () {
        this.public.color = "dogpope";
        this.room.updateUser(this);
    },
    pope5: function () {
        this.public.color = "ban";
        this.room.updateUser(this);
    },
    pope6: function () {
        this.public.color = "pmpope";
        this.room.updateUser(this);
    },
    pope7: function () {
        this.public.color = "maxpope";
        this.room.updateUser(this);
    },
    pope8: function () {
        this.public.color = "unbojihpope";
        this.room.updateUser(this);
    },
    pope9: function () {
        this.public.color = "donutpope";
        this.room.updateUser(this);
    },
    pope10: function () {
        this.public.color = "guestgal";
        this.room.updateUser(this);
    },

    god: function () {
        if (this.private.runlevel === 3) {
            // removing this will cause chaos
            this.public.color = "god";
            this.room.updateUser(this);
        } else {
            this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!");
        }
    },
    peedy: function () {
        this.public.color = "peedy";
        this.room.updateUser(this);
    },
    clippy: function () {
        this.public.color = "clippy";
        this.room.updateUser(this);
    },
    rover: function () {
        this.public.color = "rover";
        this.room.updateUser(this);
    },
    asshole: function () {
        this.room.emit("asshole", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    who: function (data) {
        let pu = this.room.getUsersPublic()[data];
        if (pu && pu.color) {
            let target;
            this.room.users.map((n) => {
                if (n.guid == data) {
                    target = n;
                }
            });
            this.room.emit("who", {
                guid: data,
            });
        } else {
            this.socket.emit("alert", "The user you are trying to find left. Get dunked on nerd");
        }
    },
    merlinbaby: function () {
        this.room.emit("merlinbaby", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    beggar: function () {
        this.room.emit("beggar", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    kiddie: function () {
        this.room.emit("kiddie", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    gotard: function () {
        this.room.emit("gotard", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    redirect_all: function () {
        this.room.emit("redirect_all", {
            guid: this.guid,
            link: sanitize(Utils.argsString(arguments)),
        });
    },
    logotard: function () {
        this.room.emit("logotard", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    forcer: function () {
        this.room.emit("forcer", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    welcome: function () {
        this.room.emit("welcome", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    owo: function () {
        this.room.emit("owo", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    uwu: function () {
        this.room.emit("uwu", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    blackhat: function () {
        this.room.emit("blackhat", {
            guid: this.guid,
        });
    },
    sing: function () {
        this.room.emit("sing", {
            guid: this.guid,
        });
    },
    triggered: "passthrough",
    bees: "passthrough",
    vaporwave: function () {
        this.socket.emit("vaporwave");
        this.room.emit("youtube", {
            guid: this.guid,
            vid: "aQkPcPqTq4M",
        });
    },
    jumpscare: function () {
        this.room.emit("jumpscare");
    },
    acid: function () {
        this.socket.emit("acid");
    },
    vaporwave2: function () {
        this.socket.emit("vaporwave");
        this.room.emit("youtube", {
            guid: this.guid,
            vid: "m0zPkt5BZ9I",
        });
    },
    unvaporwave: function () {
        this.socket.emit("unvaporwave");
    },
    name: function () {
        let argsString = Utils.argsString(arguments);
        if (argsString.length > this.room.prefs.name_limit) return;
        if (argsString.includes("{COLOR}")) {
            argsString = this.public.color;
        }

        if (argsString.includes("{NAME}")) {
            return;
        }
        if (argsString.includes("Geri")) {
            argsString = "Gayeri";
        }
        let name = argsString || this.room.prefs.defaultName;
        this.public.name = this.private.sanitize ? sanitize(name) : name;
        this.room.updateUser(this);
    },
    talk: function (text) {
        let argsString = Utils.argsString(arguments);
        var text_sanitized = this.private.sanitize ? sanitize(argsString) : argsString;
        this.room.emit("talk2", {
            guid: this.guid,
            text: text_sanitized,
            name: this.public.name,
            say: sanitize(argsString, { allowedTags: [] }),
        });
    },
    msg: function () {
        let argsString = Utils.argsString(arguments);
        var text_sanitized = this.private.sanitize ? sanitize(argsString) : argsString;
        this.room.emit("talk2", {
            guid: this.guid,
            text: text_sanitized,
            name: this.public.name,
            say: sanitize(argsString, { allowedTags: [] }),
        });
    },
    group: function (...text) {
        text = text.join(" ");
        if (text) {
            this.private.group = text + "";
            this.socket.emit("alert", "joined the group");
            return;
        }
        this.socket.emit("alert", "enter a group id");
    },
    dm: function (...text) {
        text = text.join(" ");
        text = sanitize(text, settingsSantize);
        if (!this.private.group) {
            this.socket.emit("alert", "join a group first");
            return;
        }
        this.room.users.map((n) => {
            if (this.private.group === n.private.group) {
                n.socket.emit("talk", {
                    guid: this.guid,
                    text: "<small><i>Only your group can see this.</i></small><br>" + text,
                    say: text,
                });
            }
        });
    },
    pitch: function (pitch) {
        pitch = parseInt(pitch);

        if (isNaN(pitch)) return;

        this.public.pitch = Math.max(Math.min(parseInt(pitch), this.room.prefs.pitch.max), this.room.prefs.pitch.min);

        this.room.updateUser(this);
    },
    dvdbounce: function (status) {
        this.room.emit("dvdbounce", {
            guid: this.guid,
            status: status,
        });
        if (status == "on") {
            this.public._extras = {
                dvd: true,
                dvdTick: true,
            };
            this.room.updateUser(this);
        }
        if (status == "off") {
            this.public._extras = {};
            this.room.updateUser(this);
        }
    },
    sapi5pitch: function (pitch) {
        pitch = parseInt(pitch);

        if (isNaN(pitch)) return;

        this.public.sapi5pitch = parseInt(pitch);

        this.room.updateUser(this);
    },
    tts: function (voice) {
        voice = parseInt(voice);

        if (isNaN(voice)) return;

        this.public.voice = voice;

        this.room.updateUser(this);
    } /*
    "amplitude": function(amplitude) {
        amplitude = parseInt(amplitude);

        if (isNaN(amplitude)) return;

        this.public.amplitude = amplitude;
		
        this.room.updateUser(this);
    },*/,
    limit: function (hue) {
        hue = parseInt(hue);

        if (isNaN(hue)) {
            this.socket.emit("alert", "Ur drunk lel");
            return;
        }

        this.prefs.room_max = hue;

        this.room.emit("alert", "The max limit of this room is now " + this.prefs.room_max);
    },
    speed: function (speed) {
        speed = parseInt(speed);

        if (isNaN(speed)) return;

        this.public.speed = speed;

        this.room.updateUser(this);
    },
};

class User {
    constructor(socket) {
        this.guid = Utils.guidGen();
        this.socket = socket;

        // Handle ban
        if (Ban.isBanned(this.getIp())) {
            Ban.handleBan(this.socket);
        }
        if (this.getIp().startsWith("::ffff:77.111.")) {
            Ban.addBan(this.getIp(), 999999999999, "You have been caught using VPN to bypass IP Bans. You have been banned as a result.");
        }
        this.private = {
            login: false,
            sanitize: true,
            runlevel: 0,
        };
        if (Ban.isIn(this.getIp())) {
            this.public = {
                color: settings.bonziColors[Math.floor(Math.random() * settings.bonziColors.length)],
                hue: 0,
                _extras: {},
                flags: {
                    admin: true,
                },
            };
            this.socket.emit("admin");
        } else {
            this.public = {
                color: settings.bonziColors[Math.floor(Math.random() * settings.bonziColors.length)],
                _extras: {},
                hue: 0,
            };
        }

        if (Ban.isSocketIn(this.getIp())) {
            Ban.removeSocket(this.getIp());
        }
        log.access.log("info", "connect", {
            guid: this.guid,
            ip: this.getIp(),
        });
        this.socket.on("login", this.login.bind(this));
        this.socket.on("room:join", this.join_room.bind(this));
    }

    getIp() {
        return this.socket.request.connection.remoteAddress;
    }

    getPort() {
        return this.socket.handshake.address.port;
    }

    login(data) {
        if (typeof data != "object") return; // Crash fix (issue #9)
        if (this.private.login) return;
        var d = this;
        setTimeout(function () {
            Ban.addToList(d.getIp());
        }, 1000);

        let rid = data.room;

        // Check if room was explicitly specified
        var roomSpecified = true;

        this.socket.removeAllListeners("login");
        var motd;
        // If not, set room to public
        if (typeof rid == "undefined" || rid === "") {
            rid = "default";
            roomSpecified = false;
        }
        log.info.log("debug", "roomSpecified", {
            guid: this.guid,
            roomSpecified: roomSpecified,
        });
        // If private room
        if (roomSpecified) {
            if (sanitize(rid) != rid) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
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
                log.info.log("debug", "loginFail", {
                    guid: this.guid,
                    reason: "full",
                });
                return this.socket.emit("loginFail", {
                    reason: "full",
                });
            }
            // If public room
        } else {
            // If room does not exist or is full, create new room
            if (typeof rooms[rid] == "undefined" || rooms[rid].isFull()) {
                rid = Utils.guidGen();
                roomsPublic.push(rid);
                // Create room
                newRoom(rid, settings.prefs.public);
            }
        }

        this.room = rooms[rid];
        if (data.name) {
            if (data.name == "Geri") {
                data.name = "Gayeri";
            } else if (data.name.includes("FAT FUCK")) {
                data.name = "Hi guys, i am a retard who ruin people fun and make up fake news!";
            } else if (data.name.includes("BLACK MUSLIM")) {
                data.name = "Hi guys, i am a retard who ruin people fun and make up fake news!";
            }
            if (data.name.includes("flood")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("fl00d")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("raid")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("sex")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("s3x")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("Sex")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("S3x")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("SeX")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("SEX")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("S3X")) {
                this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
                return;
            }
            if (data.name.includes("Pro Hacker")) {
                log.info.log("debug", "loginFail", {
                    guid: this.guid,
                    reason: "nameMal",
                });
                return this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
            }
            if (data.name == "Jy") {
                log.info.log("debug", "loginFail", {
                    guid: this.guid,
                    reason: "nameMal",
                });
                return this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
            }
            if (data.name.includes("Fuck Seamus")) {
                log.info.log("debug", "loginFail", {
                    guid: this.guid,
                    reason: "nameMal",
                });
                return this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
            }
            if (data.name.includes("UP THE RA")) {
                log.info.log("debug", "loginFail", {
                    guid: this.guid,
                    reason: "nameMal",
                });
                return this.socket.emit("loginFail", {
                    reason: "nameMal",
                });
            }
        }
        // Check name
        this.public._extras = data.extras;
        this.public.name = sanitize(data.name) || this.room.prefs.defaultName;
        if (this.public.name.includes == "Seamus") {
            this.public.name.replace("Seamus", "Semen");
        }
        if (this.public.name.length > this.room.prefs.name_limit)
            return this.socket.emit("loginFail", {
                reason: "nameLength",
            });

        if (this.room.prefs.speed.default == "random") this.public.speed = Utils.randomRangeInt(this.room.prefs.speed.min, this.room.prefs.speed.max);
        else this.public.speed = this.room.prefs.speed.default;

        if (this.room.prefs.pitch.default == "random") this.public.pitch = Utils.randomRangeInt(this.room.prefs.pitch.min, this.room.prefs.pitch.max);
        else this.public.pitch = this.room.prefs.pitch.default;

        // Join room
        this.room.join(this);

        this.private.login = true;

        log.info.log("info", "login", {
            guid: this.guid,
            name: data.name,
            extras: data.extras,
            room_id: rid,
            ip: this.getIp(),
        });
        // Send all user info
        this.socket.emit("updateAll", {
            usersPublic: this.room.getUsersPublic(),
        });

        // Send room info
        this.socket.emit("room", {
            room: rid,
            name: rid,
            settings: rooms[rid].settings,
            motd: "Welcome to " + rid + "!" || motd,
            isOwner: this.room.prefs.owner == this.guid,
            isPublic: roomsPublic.indexOf(rid) != -1,
        });
        if (Ban.isIn(this.getIp())) {
            this.private.runlevel = 3;
        }
        this.socket.on("talk", this.talk.bind(this));
        this.socket.on("command", this.command.bind(this));
        this.socket.on("disconnect", this.disconnect.bind(this));
        if (Ban.isIn(this.getIp())) {
            this.socket.emit("admin");
        }
    }

    join_room(data) {
        if (typeof data != "object") return; // Crash fix (issue #9)
        this.private.login = false;
        this.disconnect_room();
        this.socket.on("login", this.login.bind(this));
    }
    talk(data) {
        if (Ban.isMuted(this.getIp())) return;
        let name = this.public.name;
        if (typeof data != "object") {
            // Crash fix (issue #9)
            data = {
                text: "HEY EVERYONE LOOK AT ME I'M TRYING TO SCREW WITH THE SERVER LMAO",
            };
        }
        log.info.log("info", "talk", {
            guid: this.guid,
            name: data.name,
            ip: this.getIp(),
            text: data.text,
            say: sanitize(data.text, { allowedTags: [] }),
        });
        this.socket.on("login", this.login.bind(this));
        if (typeof data.text == "undefined") return;
        let text;
        if (this.room.rid.startsWith("js-")) {
            text = data.text;
        } else {
            text = this.private.sanitize ? sanitize(data.text + "", settingsSantize) : data.text;
        }
        if (text.length <= this.room.prefs.char_limit && text.length > 0) {
            this.room.emit("talk", {
                guid: this.guid,
                text: text,
                name: name,
                say: sanitize(text, { allowedTags: [] }),
            });
        }
    }

    command(data) {
        if (typeof data != "object") return; // Crash fix (issue #9)
        if (Ban.isMuted(this.getIp())) return;
        let name = this.public.name;
        var command;
        var args;

        try {
            var list = data.list;
            command = list[0].toLowerCase();
            args = list.slice(1);

            log.info.log("info", command, {
                guid: this.guid,
                ip: this.getIp(),
                args: args,
            });

            if (this.private.runlevel >= (this.room.prefs.runlevel[command] || 0)) {
                let commandFunc = userCommands[command];
                if (commandFunc == "passthrough")
                    this.room.emit(command, {
                        guid: this.guid,
                        name: name,
                    });
                else commandFunc.apply(this, args);
            } else
                this.socket.emit("info", {
                    reason: "runlevel",
                });
        } catch (e) {
            log.info.log("info", "info", {
                guid: this.guid,
                command: command,
                ip: this.getIp(),
                args: args,
                reason: "unknown",
                exception: e,
            });
            this.socket.emit("info", {
                reason: "unknown",
            });
        }
    }

    disconnect_room() {
        let ip = "N/A";
        let port = "N/A";
        try {
            ip = this.getIp();
            port = this.getPort();
        } catch (e) {
            log.info.log("warn", "exception", {
                guid: this.guid,
                exception: e,
            });
        }

        this.room.leave2(this);
    }
    disconnect() {
        let ip = "N/A";
        let port = "N/A";
        try {
            ip = this.getIp();
            port = this.getPort();
        } catch (e) {
            log.info.log("warn", "exception", {
                guid: this.guid,
                exception: e,
            });
        }

        log.access.log("info", "disconnect", {
            guid: this.guid,
            ip: ip,
            port: port,
        });
        Ban.removeSocket(this.getIp());
        this.socket.broadcast.emit("leave", {
            guid: this.guid,
        });

        this.socket.removeAllListeners("talk");
        this.socket.removeAllListeners("command");
        this.socket.removeAllListeners("disconnect");
        var channel = client.channels.cache.get("855556901613207553");

        this.room.leave(this);
    }
}

socketbot.emit("login", { name: "BonziBOT [$]", room: "default" });
socketbot.on("reconnected", reconnected);

setTimeout(function () {
    var roombot = bot_io("http://localhost:80");
    roombot.emit("login", { name: "BonziBOT [$]", room: "news" });
    setTimeout(function () {
        roombot.disconnect();
        setTimeout(function () {
            var roombot2 = bot_io("http://localhost:80");
            roombot2.emit("login", { name: "BonziBOT [$]", room: "why" });
            setTimeout(function () {
                roombot2.disconnect();
                setTimeout(function () {
                    var roombot3 = bot_io("http://localhost:80");
                    roombot3.emit("login", { name: "BonziBOT [$]", room: "area51" });
                    setTimeout(function () {
                        roombot3.disconnect();
                        setTimeout(function () {
                            var roombot4 = bot_io("http://localhost:80");
                            roombot4.emit("login", { name: "BonziBOT [$]", room: "poland" });
                            setTimeout(function () {
                                roombot4.disconnect();
                                setTimeout(function () {
                                    var roombot5 = bot_io("http://localhost:80");
                                    roombot5.emit("login", { name: "BonziBOT [$]", room: "frogs" });
                                    setTimeout(function () {
                                        roombot5.disconnect();
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}, 500);
var reconnected = function () {
    var socketbot = bot_io("http://localhost:80");
    socketbot.emit("login", { name: "BonziBOT [$]", room: "default" });
    socketbot.on("talk", function (data) {
        var text = data.text;
        if (text.startsWith("s!")) {
            text = text.slice(2);
            var cmd = text.split(" ")[0];
            var oth = text.slice(cmd.length + 1);
            if (Object.keys(commands).includes(cmd)) {
                var command = commands[cmd](oth);
                setTimeout(function () {
                    socketbot.emit("talk", { text: command });
                }, 100);
            }
        }
    });
    socketbot.on("reconnected", reconnected);
};
socketbot.emit("command", { list: ["name", "BonziBOT [$]"] });
setInterval(function () {
    socketbot.emit("talk", {
        text:
            '- <h3>🐵 BonziBOT</h3><div><h6>The Unofficial BonziWORLD Bot</h6><br><hr><br>Hello, I am <b>BonziBot</b> say "$help" to see all the available commands.<div>Or say "$whatsnew" to see what has been recently added or fixed.<hr><div><h6>version 2.1.4</h6>',
    });
}, 1800000);
socketbot.on("talk", function (data) {
    if (data.text == "$help") {
        setTimeout(function () {
            socketbot.emit("talk", {
                text:
                    "-- <h3>🐵 BonziBOT</h3><br><h6>version 2.1.4</h6><hr><b>commands:</b><br>$color [color]<br>$echo [text]<br>$asshole [text]<br>$kill [user]<br>$iq [user]<br>$8ball [question]<br>$zalgo [text]<br>$play [youtube video id]<br>$wtf<br>$coinflip<br>$whatsnew<br>$speed [number]<br>$pitch [number]",
            });
        }, 300);
    }
    if (data.text == "$whatsnew") {
        setTimeout(function () {
            socketbot.emit("talk", {
                text:
                    "- <h3>🐵 BonziBOT</h3><br><h6>version 2.1.4</h6><hr><div><ul><li>fixed onmouseover exploit on $play<br><li>added new commands $whatsnew, $iq<br><li>updated In-game logo<br><li>Increased echo and zalgos response time<hr>",
            });
        }, 300);
    }
    if (data.text == "$pope") {
        setTimeout(function () {
            socketbot.emit("talk", { text: "No pope 4 u" });
        }, 100);
    }
    if (data.text == "$color pope") {
        setTimeout(function () {
            socketbot.emit("talk", { text: "No pope 4 u" });
        }, 100);
    }
    if (data.text.startsWith("$ ")) {
        setTimeout(function () {
            socketbot.emit("talk", { text: "That command doesn't exist" });
        }, 100);
    }
    if (data.text == "$color random") {
        socketbot.emit("command", { list: ["color"] });
    }
    if (data.text.startsWith("$color ")) {
        socketbot.emit("command", { list: ["color", data.text.slice(7)] });
    }
    if (data.text.startsWith("$pitch ")) {
        socketbot.emit("command", { list: ["pitch", data.text.slice(7)] });
    }
    if (data.text.startsWith("$speed ")) {
        socketbot.emit("command", { list: ["speed", data.text.slice(7)] });
    }
    if (data.text.startsWith("$play ")) {
        if (data.text.slice(6).indexOf("onmouseover") >= 0 || data.text.slice(6).indexOf("onmouseout") >= 0) {
            setTimeout(function () {
                socketbot.emit("talk", { text: "HEY EVERYONE LOOK AT THIS GUY THEIR TRYING TO SCREW WITH THE BOT LMAO" });
            }, 100);
        } else {
            setTimeout(function () {
                socketbot.emit("command", { list: ["youtube", data.text.slice(6)] });
            }, 500);
        }
    }
    if (data.text.startsWith("$echo ")) {
        if (data.text.slice(6).indexOf("$echo") >= 0 || data.text.slice(6).indexOf("$zalgo") >= 0 || data.text.slice(6).indexOf("[[llllllllllllllll") >= 0) {
            void 0;
        } else {
            setTimeout(function () {
                socketbot.emit("talk", { text: data.text.slice(6) });
            }, 300);
        }
    }
    if (data.text.startsWith("$asshole ")) {
        if (data.text.slice(9).indexOf("[[llllllllllllllll") >= 0) {
            void 0;
        } else {
            setTimeout(function () {
                socketbot.emit("command", { list: ["asshole", data.text.slice(9)] });
            }, 300);
        }
    }
    if (data.text.startsWith("$zalgo ")) {
        if (data.text.slice(7).indexOf("[[llllllllllllllll") >= 0) {
            void 0;
        } else {
            setTimeout(function () {
                socketbot.emit("talk", { text: Z.generate(data.text.slice(7)) });
            }, 300);
        }
    }
    if (data.text.startsWith("$kill ")) {
        if (data.text.slice(7).indexOf("[[llllllllllllllll") >= 0) {
            void 0;
        } else {
            setTimeout(function () {
                socketbot.emit("talk", { text: "- <b>" + data.name + "</b> has killed <b>" + data.text.slice(6) + "</b>, ouch!" });
            }, 500);
        }
    }
    if (data.text.startsWith("$iq ")) {
        if (data.text.slice(4).indexOf("[[llllllllllllllll") >= 0) {
            void 0;
        } else {
            setTimeout(function () {
                socketbot.emit("talk", { text: "- " + data.text.slice(4) + "'s IQ is: <b>" + Math.floor(Math.random() * 200) + "</b>" });
            }, 500);
        }
    }
    if (data.text.startsWith("$8ball ")) {
        var num = Math.floor(Math.random() * Math.floor(answers.length));
        setTimeout(function () {
            socketbot.emit("talk", { text: answers[num] });
        }, 500);
    }
    if (data.text == "$wtf") {
        setTimeout(function () {
            socketbot.emit("command", { list: ["wtf"] });
        }, 500);
    }
    if (data.text == "$coinflip") {
        if (Math.random() < 0.5) {
            setTimeout(function () {
                socketbot.emit("talk", { text: "- The coin has landed on, <b>tails</b><div><h6>Dont ask where sonic is</h6>" });
            }, 500);
        } else {
            setTimeout(function () {
                socketbot.emit("talk", { text: "- The coin has landed on, <b>heads</b>" });
            }, 500);
        }
    }
});
var answers = [
    "- 🎱 It is certain",
    "- 🎱 It is decidedly so ",
    "- 🎱 Without a doubt",
    "- 🎱 Yes - definitely",
    "- 🎱 You may rely on it",
    "- 🎱 As I see it, yes",
    "- 🎱 Most likely",
    "- 🎱 Outlook good",
    "- 🎱 Yes",
    "- 🎱 Signs point to yes",
    "- 🎱 Don't count on it",
    "- 🎱 My reply is no",
    "- 🎱 No",
    "- 🎱 My sources say no",
    "- 🎱 Outlook not so good",
    "- 🎱 Very doubtful",
    "- 🎱 Reply hazy, try again",
    "- 🎱 Ask again later",
    "- 🎱 Better not tell you now",
    "- 🎱 Cannot predict now",
    "- 🎱 Concentrate and ask again",
];

var Z = {
    chars: {
        0: [
            /* up */ "\u030d" /*     ̍     */,
            "\u030e" /*     ̎     */,
            "\u0304" /*     ̄     */,
            "\u0305" /*     ̅     */,
            "\u033f" /*     ̿     */,
            "\u0311" /*     ̑     */,
            "\u0306" /*     ̆     */,
            "\u0310" /*     ̐     */,
            "\u0352" /*     ͒     */,
            "\u0357" /*     ͗     */,
            "\u0351" /*     ͑     */,
            "\u0307" /*     ̇     */,
            "\u0308" /*     ̈     */,
            "\u030a" /*     ̊     */,
            "\u0342" /*     ͂     */,
            "\u0343" /*     ̓     */,
            "\u0344" /*     ̈́     */,
            "\u034a" /*     ͊     */,
            "\u034b" /*     ͋     */,
            "\u034c" /*     ͌     */,
            "\u0303" /*     ̃     */,
            "\u0302" /*     ̂     */,
            "\u030c" /*     ̌     */,
            "\u0350" /*     ͐     */,
            "\u0300" /*     ̀     */,
            "\u0301" /*     ́     */,
            "\u030b" /*     ̋     */,
            "\u030f" /*     ̏     */,
            "\u0312" /*     ̒     */,
            "\u0313" /*     ̓     */,
            "\u0314" /*     ̔     */,
            "\u033d" /*     ̽     */,
            "\u0309" /*     ̉     */,
            "\u0363" /*     ͣ     */,
            "\u0364" /*     ͤ     */,
            "\u0365" /*     ͥ     */,
            "\u0366" /*     ͦ     */,
            "\u0367" /*     ͧ     */,
            "\u0368" /*     ͨ     */,
            "\u0369" /*     ͩ     */,
            "\u036a" /*     ͪ     */,
            "\u036b" /*     ͫ     */,
            "\u036c" /*     ͬ     */,
            "\u036d" /*     ͭ     */,
            "\u036e" /*     ͮ     */,
            "\u036f" /*     ͯ     */,
            "\u033e" /*     ̾     */,
            "\u035b" /*     ͛     */,
            "\u0346" /*     ͆     */,
            "\u031a" /*     ̚     */,
        ],
        1: [
            /* down */ "\u0316" /*     ̖     */,
            "\u0317" /*     ̗     */,
            "\u0318" /*     ̘     */,
            "\u0319" /*     ̙     */,
            "\u031c" /*     ̜     */,
            "\u031d" /*     ̝     */,
            "\u031e" /*     ̞     */,
            "\u031f" /*     ̟     */,
            "\u0320" /*     ̠     */,
            "\u0324" /*     ̤     */,
            "\u0325" /*     ̥     */,
            "\u0326" /*     ̦     */,
            "\u0329" /*     ̩     */,
            "\u032a" /*     ̪     */,
            "\u032b" /*     ̫     */,
            "\u032c" /*     ̬     */,
            "\u032d" /*     ̭     */,
            "\u032e" /*     ̮     */,
            "\u032f" /*     ̯     */,
            "\u0330" /*     ̰     */,
            "\u0331" /*     ̱     */,
            "\u0332" /*     ̲     */,
            "\u0333" /*     ̳     */,
            "\u0339" /*     ̹     */,
            "\u033a" /*     ̺     */,
            "\u033b" /*     ̻     */,
            "\u033c" /*     ̼     */,
            "\u0345" /*     ͅ     */,
            "\u0347" /*     ͇     */,
            "\u0348" /*     ͈     */,
            "\u0349" /*     ͉     */,
            "\u034d" /*     ͍     */,
            "\u034e" /*     ͎     */,
            "\u0353" /*     ͓     */,
            "\u0354" /*     ͔     */,
            "\u0355" /*     ͕     */,
            "\u0356" /*     ͖     */,
            "\u0359" /*     ͙     */,
            "\u035a" /*     ͚     */,
            "\u0323" /*     ̣     */,
        ],
        2: [
            /* mid */ "\u0315" /*     ̕     */,
            "\u031b" /*     ̛     */,
            "\u0340" /*     ̀     */,
            "\u0341" /*     ́     */,
            "\u0358" /*     ͘     */,
            "\u0321" /*     ̡     */,
            "\u0322" /*     ̢     */,
            "\u0327" /*     ̧     */,
            "\u0328" /*     ̨     */,
            "\u0334" /*     ̴     */,
            "\u0335" /*     ̵     */,
            "\u0336" /*     ̶     */,
            "\u034f" /*     ͏     */,
            "\u035c" /*     ͜     */,
            "\u035d" /*     ͝     */,
            "\u035e" /*     ͞     */,
            "\u035f" /*     ͟     */,
            "\u0360" /*     ͠     */,
            "\u0362" /*     ͢     */,
            "\u0338" /*     ̸     */,
            "\u0337" /*     ̷      */,
            "\u0361" /*     ͡     */,
            "\u0489" /*     ҉_     */,
        ],
    },
    random: function (len) {
        if (len == 1) return 0;
        return !!len ? Math.floor(Math.random() * len + 1) - 1 : Math.random();
    },
    generate: function (str) {
        var str_arr = str.split(""),
            output = str_arr.map(function (a) {
                if (a == " ") return a;
                for (var i = 0, l = Z.random(16); i < l; i++) {
                    var rand = Z.random(3);
                    a += Z.chars[rand][Z.random(Z.chars[rand].length)];
                }
                return a;
            });
        return output.join("");
    },
};
