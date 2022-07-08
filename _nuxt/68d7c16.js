(window.webpackJsonp=window.webpackJsonp||[]).push([[10,14],{250:function(e,r,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(130).default)("294629c0",content,!0,{sourceMap:!1})},251:function(e,r,n){"use strict";n(250)},252:function(e,r,n){var o=n(129)(!1);o.push([e.i,".social-link{border-radius:10px;padding:.5em .8em;margin:.1em}.social-link:hover{cursor:pointer;transition:.2s}.purple-social-link{background-color:#fff;color:var(--purple)}.purple-social-link:hover{background-color:var(--lightBlue);color:#fff}.pink-social-link{background-color:#fff;color:var(--pink)}.pink-social-link:hover{background-color:var(--lightBlue);color:#fff}.darkBlue-social-link{background-color:#fff;color:var(--darkBlue)}.darkBlue-inverse-social-link{background-color:var(--darkBlue);color:#fff}.darkBlue-inverse-social-link:hover{background-color:#fff;color:var(--darkBlue)}.darkBlue-social-link:hover,.pink-background-social-link{background-color:var(--pink);color:#fff}.pink-background-social-link:hover{background-color:#fff;color:var(--pink)}",""]),e.exports=o},253:function(e,r,n){"use strict";n.r(r);var o={name:"SocialButton",props:{socialLink:String,fontAwesome:String}},t=(n(251),n(45)),component=Object(t.a)(o,(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("a",{staticClass:"social-link",attrs:{href:e.socialLink,id:"social-link",target:"_blank"}},[n("i",{class:e.fontAwesome})])}),[],!1,null,null,null);r.default=component.exports},257:function(e,r,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(130).default)("54eac300",content,!0,{sourceMap:!1})},277:function(e,r,n){"use strict";n(257)},278:function(e,r,n){var o=n(129)(!1);o.push([e.i,".member-card{max-width:33em;min-height:16vh;border-radius:15px;padding:1em;background-color:var(--pink);display:flex;justify-content:space-between;margin:1em .5em}.member-image{border-radius:15px;margin-top:.5em;align-self:center}@media screen and (min-width:2200px){.member-card{width:40vw;flex-direction:row}.member-image{width:10vw;margin-right:1em}}@media screen and (max-width:2200px){.member-card{width:40vw;flex-direction:row}.member-image{width:15vw;margin-right:1em}}@media screen and (max-width:1000px){.member-card{width:40vw;flex-direction:column;align-items:center}.member-image{width:25vw;align-self:center}}@media screen and (max-width:500px){.member-card{width:60vw;flex-direction:column;align-items:center}.member-image{width:35vw}}.pink-member-card{background:var(--pink)}.purple-member-card{background:var(--purple)}.darkBlue-member-card{background:var(--darkBlue)}.member-info{height:100%;width:100%;min-height:16vh;display:flex;flex-direction:column;justify-content:space-around;word-wrap:break-word}.member-city,.member-community-role,.member-job,.member-name{color:#fff}.member-social-links{display:flex;flex-direction:row;justify-content:space-around;flex-wrap:wrap}",""]),e.exports=o},287:function(e,r,n){"use strict";n.r(r);var o={name:"MemberCard",props:{memberName:String,memberJob:String,memberCity:String,memberCommunityRole:String,memberColor:String,memberImage:String,imageAlt:String,githubLink:String,twitchLink:String,devtoLink:String,twitterLink:String,linkedinLink:String}},t=(n(277),n(45)),component=Object(t.a)(o,(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{class:e.memberColor+"-member-card member-card"},[n("div",[n("img",{staticClass:"member-image",attrs:{src:e.memberImage,alt:"imageAlt"}})]),e._v(" "),n("div",{staticClass:"member-info"},[n("h2",{staticClass:"member-name"},[e._v("\n      "+e._s(e.memberName)+"\n    ")]),e._v(" "),n("h3",{staticClass:"member-job"},[e._v("\n      "+e._s(e.memberJob)+"\n    ")]),e._v(" "),n("p",{staticClass:"member-city"},[e._v("\n      "+e._s(e.memberCity)+"\n    ")]),e._v(" "),n("p",{staticClass:"member-community-role"},[e._v("\n      "+e._s(e.memberCommunityRole)+"\n    ")]),e._v(" "),n("div",{staticClass:"member-social-links"},[e.githubLink?n("SocialButton",{class:e.memberColor+"-social-link",attrs:{socialLink:e.githubLink,fontAwesome:"fab fa-github"}}):e._e(),e._v(" "),e.twitchLink?n("SocialButton",{class:e.memberColor+"-social-link",attrs:{socialLink:e.twitchLink,fontAwesome:"fab fa-twitch"}}):e._e(),e._v(" "),e.devtoLink?n("SocialButton",{class:e.memberColor+"-social-link",attrs:{socialLink:e.devtoLink,fontAwesome:"fab fa-dev"}}):e._e(),e._v(" "),e.twitterLink?n("SocialButton",{class:e.memberColor+"-social-link",attrs:{socialLink:e.twitterLink,fontAwesome:"fab fa-twitter"}}):e._e(),e._v(" "),e.linkedinLink?n("SocialButton",{class:e.memberColor+"-social-link",attrs:{socialLink:e.linkedinLink,fontAwesome:"fab fa-linkedin-in"}}):e._e()],1)])])}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{SocialButton:n(253).default})}}]);