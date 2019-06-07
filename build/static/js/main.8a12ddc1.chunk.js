(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(7),s=a.n(i),o=(a(15),a(8)),r=a(1),l=a(2),m=a(4),d=a(3),u=a(5),p=(a(16),function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.icon,t=e.id,a=e.name,c=e.src;return n.a.createElement("img",{className:"ml-3",alt:a,src:c,key:t,"data-id":t,onClick:this.props.changeClickedStatus.bind(this,t)})}}]),t}(c.Component)),h=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.icons.map(function(t){return n.a.createElement("div",null,n.a.createElement(p,{key:t.id,icon:t,changeClickedStatus:e.props.changeClickedStatus}))})}}]),t}(c.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.score,a=e.topScore,c=e.message;return n.a.createElement("div",{className:"header"},n.a.createElement("h1",{id:"memory-game-title"},"Style Icon Memory Game"),n.a.createElement("ul",{className:"nav justify-content-center"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("p",{id:"score-container"},"Score: ",t)),n.a.createElement("li",{className:"nav-item"},n.a.createElement("p",{id:"topscore-container"},"Top Score: ",a)),n.a.createElement("li",{className:"nav-item"},n.a.createElement("button",{className:"start-over-btn btn btn-dark",onClick:this.props.start},"START OVER"))),n.a.createElement("h4",{id:"message-container"},c))}}]),t}(c.Component),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,topScore:5,message:"Click a style icon to get points. When you hit the Top Score you win, but if you click an image more than once you lose.",icons:[{id:1,name:"kate moss",src:"https://vg-images.condecdn.net/image/q75qx29bYMM/crop/1620/f/003-kate-moss-vogue-int-credit-mario-sorrenti-phaidon.jpg",clicked:!1},{id:12,name:"alfie allen",src:"https://pmcdeadline2.files.wordpress.com/2018/06/alfie-allen.jpg?w=681&h=383&crop=1",clicked:!1},{id:9,name:"freja beha",src:"https://cdn.pursuitist.com/wp-content/uploads/2011/09/51856-800w.jpg",clicked:!1},{id:2,name:"alexa chung",src:"https://media.timeout.com/images/100660977/630/472/image.jpg",clicked:!1},{id:3,name:"jean michel basquiat",src:"https://cdn.theatlantic.com/assets/media/img/2018/06/04/BOB_Metcalf_Basquiat_lead/1920.jpg?1528416882",clicked:!1},{id:4,name:"david bowie",src:"https://media.pitchfork.com/photos/5cc32f2ffa43fd0cac066e3e/2:1/w_790/David-Bowie.jpg",clicked:!1},{id:5,name:"kurt cobain",src:"https://anotherimg-dazedgroup.netdna-ssl.com/933/azure/another-prod/290/8/298193.jpg",clicked:!1},{id:6,name:"dylan rieder",src:"http://www.thrashermagazine.com/imagesV2/Features/2014/SOTY_Contenders_WEB/DylanRieder.jpg",clicked:!1},{id:7,name:"camille rowe",src:"https://i.dailymail.co.uk/i/pix/2012/07/13/article-2173298-140D6818000005DC-274_634x501.jpg",clicked:!1},{id:8,name:"clemence poesy",src:"https://www.theplace2.ru/cache/archive/clemence_poesy/img/37-4-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",clicked:!1},{id:10,name:"geraldine chaplin",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7lfYFPyA_g0Z4J2mkb5NpGcFfELPtETvwKK12lEMgA_OG8IvRw",clicked:!1},{id:11,name:"caroline de maigret",src:"https://i.ytimg.com/vi/WvCEYkNu1_I/maxresdefault.jpg",clicked:!1}]},a.start=function(e){window.location.reload()},a.changeClickedStatus=function(e){console.log(e);var t=a.state.score;if(t<5){var c=a.state.icons.map(function(c){if(c.id===e&&!1===c.clicked)c.clicked=!0,a.setState({score:a.state.score+1}),a.setState({message:" "});else if(c.id===e&&!0===c.clicked){a.setState({message:"You lost. You clicked "+c.name.toUpperCase()+" twice"}),a.setState({score:0});a.state.icons.map(function(e){e.clicked=!1});console.log(t)}return c});a.setState({icons:c},function(){return a.shuffle()})}else if(5===t){a.setState({message:"You won"}),a.setState({score:0});a.state.icons.map(function(e){e.clicked=!1})}},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=[e[a],e[t]];e[t]=c[0],e[a]=c[1]}return e},a.shuffle=function(){var e=a.state.icons,t=a.shuffleArray(Object(o.a)(e));console.log("SHUFFLE: ",t),a.setState({icons:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state.icons),n.a.createElement("div",{className:"app"},n.a.createElement(g,{score:this.state.score,topScore:this.state.topScore,message:this.state.message,start:this.start}),n.a.createElement("div",{className:"container main-container"},n.a.createElement("div",{className:"row justify-content-around"},n.a.createElement(h,{icons:this.state.icons,changeClickedStatus:this.changeClickedStatus}))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.8a12ddc1.chunk.js.map