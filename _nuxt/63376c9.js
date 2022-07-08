(window.webpackJsonp=window.webpackJsonp||[]).push([[5,14,16],{250:function(t,e,l){var content=l(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(130).default)("294629c0",content,!0,{sourceMap:!1})},251:function(t,e,l){"use strict";l(250)},252:function(t,e,l){var n=l(129)(!1);n.push([t.i,".social-link{border-radius:10px;padding:.5em .8em;margin:.1em}.social-link:hover{cursor:pointer;transition:.2s}.purple-social-link{background-color:#fff;color:var(--purple)}.purple-social-link:hover{background-color:var(--lightBlue);color:#fff}.pink-social-link{background-color:#fff;color:var(--pink)}.pink-social-link:hover{background-color:var(--lightBlue);color:#fff}.darkBlue-social-link{background-color:#fff;color:var(--darkBlue)}.darkBlue-inverse-social-link{background-color:var(--darkBlue);color:#fff}.darkBlue-inverse-social-link:hover{background-color:#fff;color:var(--darkBlue)}.darkBlue-social-link:hover,.pink-background-social-link{background-color:var(--pink);color:#fff}.pink-background-social-link:hover{background-color:#fff;color:var(--pink)}",""]),t.exports=n},253:function(t,e,l){"use strict";l.r(e);var n={name:"SocialButton",props:{socialLink:String,fontAwesome:String}},o=(l(251),l(45)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a",{staticClass:"social-link",attrs:{href:t.socialLink,id:"social-link",target:"_blank"}},[l("i",{class:t.fontAwesome})])}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,l){var content=l(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(130).default)("169e6500",content,!0,{sourceMap:!1})},267:function(t,e,l){var content=l(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(130).default)("0343f986",content,!0,{sourceMap:!1})},268:function(t,e,l){"use strict";l(255)},269:function(t,e,l){var n=l(129)(!1);n.push([t.i,".talk{margin-top:1em;padding:.5em;border-radius:10px;width:75%;display:flex;flex-direction:column;justify-content:space-around}@media screen and (max-width:500px){.talk{width:100%}}.talk-host,.talk-time,.talk-title{color:#000;text-align:justify}.host{margin-top:1em;margin-bottom:2em}.host-social-links{display:flex;flex-direction:row;flex-wrap:wrap}.talk-title{font-size:4.5ch}.line{display:block;background-color:var(--darkBlue);width:100%;height:7px}",""]),t.exports=n},284:function(t,e,l){"use strict";l.r(e);var n={name:"TalkCard",props:{talkTitle:String,talkTime:String,talkLink:String,talkHosts:Array}},o=(l(268),l(45)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"talk"},[l("div",{staticClass:"talk-info"},[t.talkTitle?l("h1",{staticClass:"talk-title"},[t._v(t._s(t.talkTitle))]):t._e(),t._v(" "),t.talkTime?l("h3",{staticClass:"talk-time"},[t._v(t._s(t.talkTime))]):t._e(),t._v(" "),l("h3",[t.talkLink?l("a",{attrs:{href:t.talkLink}},[t._v("Vídeo")]):t._e()]),t._v(" "),t.talkHosts?l("div",{staticClass:"hosts"},t._l(t.talkHosts,(function(e){return l("div",{key:e,staticClass:"host"},[l("h2",{staticClass:"talk-host"},[t._v(t._s(e.name))]),t._v(" "),l("div",{staticClass:"host-social-links"},[e.github?l("SocialButton",{staticClass:"social-link darkBlue-inverse-social-link",attrs:{socialLink:e.github,fontAwesome:"fab fa-github"}}):t._e(),t._v(" "),e.twitch?l("SocialButton",{staticClass:"social-link darkBlue-inverse-social-link",attrs:{socialLink:e.twitch,fontAwesome:"fab fa-twitch"}}):t._e(),t._v(" "),e.devto?l("SocialButton",{staticClass:"social-link darkBlue-inverse-social-link",attrs:{socialLink:e.devto,fontAwesome:"fab fa-dev"}}):t._e(),t._v(" "),e.twitter?l("SocialButton",{staticClass:"social-link darkBlue-inverse-social-link",attrs:{socialLink:e.twitter,fontAwesome:"fab fa-twitter"}}):t._e(),t._v(" "),e.linkedin?l("SocialButton",{staticClass:"social-link darkBlue-inverse-social-link",attrs:{socialLink:e.linkedin,fontAwesome:"fab fa-linkedin-in"}}):t._e(),t._v(" "),e.instagram?l("SocialButton",{staticClass:"social-link darkBlue-inverse-social-link",attrs:{socialLink:e.instagram,fontAwesome:"fab fa-instagram"}}):t._e()],1),t._v(" "),l("div")])})),0):t._e(),t._v(" "),l("span",{staticClass:"line"})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialButton:l(253).default})},290:function(t,e,l){"use strict";l(267)},291:function(t,e,l){var n=l(129)(!1);n.push([t.i,".event-detailed{width:70%;margin-left:auto;margin-right:auto;margin-top:2vh}@media screen and (max-width:500px){.event-detailed{width:90%}}.event-detailed-info{background-color:var(--lightBlue);padding:.4em;border-radius:10px}.event-detailed-date,.event-detailed-description,.event-detailed-name{color:#000}.event-detailed-name{font-size:5ch;background-color:var(--lightBlue)}.event-detailed-description{color:#000}.event-detailed-link{font-size:2.5ch;color:var(--darkBlue)}.talks{display:flex;flex-direction:column;justify-content:space-around}",""]),t.exports=n},311:function(t,e,l){"use strict";l.r(e);var n={name:"eventDetailed",props:{event:Object}},o=(l(290),l(45)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"event-detailed"},[l("div",{staticClass:"event-detailed-info"},[l("h1",{staticClass:"event-detailed-name"},[t._v(t._s(t.event.name))]),t._v(" "),l("h2",{staticClass:"event-detailed-description"},[t._v(t._s(t.event.description))]),t._v(" "),l("h3",{staticClass:"event-detailed-date"},[t._v(t._s(t.event.date))]),t._v(" "),l("span",[t.event.link?l("a",{staticClass:"event-detailed-link",attrs:{href:t.event.link}},[t._v("Acessar evento")]):t._e()])]),t._v(" "),t.event.talks?l("div",{staticClass:"talks"},t._l(t.event.talks,(function(t){return l("div",{key:t},[l("Talk",{attrs:{talkTitle:t.title,talkTime:t.time,talkLink:t.link,talkHosts:t.hosts}})],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Talk:l(284).default})}}]);