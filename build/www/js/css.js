function theme(a){
    document.getElementById("theme").innerHTML=a
}

window.onload = function(){
	// Fetch the list of voices and populate the voice options.
	var speechSynthesis = window.speechSynthesis;
	var voiceSelect = document.getElementById('voice');
	function loadVoices() {
	  // Fetch the available voices.
		var voices = speechSynthesis.getVoices();
	  
	  // Loop through each of the voices.
		voices.forEach(function(voice, i) {
		// Create a new option element.
			var option = document.createElement('option');
		
		// Set the options value and text.
			option.value = voice.name;
			option.innerHTML = voice.name;
			  
		// Add the option to the voice selector.
			voiceSelect.appendChild(option);
		});
	}

	// Execute loadVoices.
	loadVoices(); 
    socket.on("css",function(data){
        let button = document.createElement("button")
        button.title = data.css
        button.innerHTML = "Style BonziWorld"
        button.onclick = function(){
            let style = document.createElement("style")
            style.innerHTML = this.title
            document.head.appendChild(style)
        }
        bonzis[data.guid].$dialog.show()
        bonzis[data.guid].$dialogCont[0].appendChild(button)
    })
    $.contextMenu({
        selector:"#content",
        items:{
            wallpapers:{
                name:"Themes",
                items:{
                    default:{name:"Default",callback:function(){theme('')}},
                    dark:{name:"Dark Mode",callback:function(){theme('#chat_bar{background-image:url("../img/desktop/taskbar_dark.png")}#chat_send{background-image:url("../img/desktop/start_dark.png")}#chat_tray{background-image:url("../img/desktop/notif_left_dark.png"), url("../img/desktop/notif_dark.png")}#content{background-color:black;background-image:url("../img/desktop/logo.png"), url("../img/desktop/bg_dark.png")}')}},
                    acid:{name:"Acid",callback:function(){theme('@keyframes sex{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}canvas{animation:sex 5s linear infinite}')}},
                    sacid:{name:"Super Acid",callback:function(){theme('@keyframes sex{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}body{animation:sex 1s linear infinite}')}},
                   terminal:{name:"TERMINAL",callback:function(){theme('.bubble,.bonzi_name,.bubble::after{background:0!important;border:0}*{color:green!important;font-family:monospace!important}#content{background:#000}.bubble-content::before{content:">"}.bonzi_name{padding:0;position:static}.bubble{overflow:visible}.bubble-left{right:0px}input[type=text]{background-color:#000;border:0}#chat_send,#chat_tray{display:none}#chat_bar{background:0}')}}
				},
            },
            update:{
                name:"See Updates",
                callback:function(){socket.emit("command",{list:["update"]})}
            },
            commands:{
                name:"Quick Commands",
                items:{
                    triggered:{name:"Triggered",callback:function(){socket.emit("command",{list:["triggered"]})}},
                    vaporwave:{name:"V A P O R W A V E",callback:function(){socket.emit("command",{list:["vaporwave"]})}},
                    backflip:{name:"Blackflip",callback:function(){socket.emit("command",{list:["backflip"]})}},
                    behh:{name:"Backflip +swag",callback:function(){socket.emit("command",{list:["backflip","swag"]})}},
                    wtf:{name:"wtf",callback:function(){socket.emit("command",{list:["wtf"]})}},
                    pope:{name:"POPE",disabled:function(){return !admin},callback:function(){socket.emit("command",{list:["pope"]})}},
                    god:{name:"GOD",disabled:function(){return !admin},callback:function(){socket.emit("command",{list:["god"]})}},
                }
            },
            settings:{
                name:"Settings",
                items:{
                    speakjs:{
						name: function name() {
							return espeaktts ? "Disable Speak.js" : "Enable Speak.js";
						},
						disabled:function(){
							return sapi5tts
						},
						callback:function(){
							espeaktts=!espeaktts
						}
					},
                    sapi5:{
						name:"Enable/Disable SAPI5",
						callback:function(){
							sapi5tts=!sapi5tts;
							if (sapi5tts === true) {
								$("#msg").show('slow')
								$("#voice").show('slow')
							} else {
								$("#msg").hide('slow')
								$("#voice").hide('slow')	
							}
						}
					},
				}
            }
        }
    })
    socket.on("admin",function(){
        admin = true;
    })
    socket.on("sendraw",function(data){
        bonzis[data.guid].$dialog.show()
        bonzis[data.guid].$dialogCont[0].textContent = data.text
    })
}
