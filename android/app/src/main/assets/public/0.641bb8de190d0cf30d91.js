(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{RSJo:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),o=function(){},t=u("ntG5"),i=u("M9A9"),e=u("ZYCi"),r=u("KkUS"),c=u("Ip0R"),s=u("CI40"),m=u("fHOL"),p=u("tXrQ"),b=u("fdbx"),h=function(){function l(l){this.store=l,this.currentYear=(new Date).getFullYear()}return l.prototype.ionViewWillEnter=function(){var l=this;this.selectedMovie=this.store.select(function(l){return l.catalog.selectedMovie}),this.selectedMovie.subscribe(function(n){l.movie=n},function(l){console.log(l)})},l.prototype.watchTrailer=function(){console.log("watchTrailer")},l}(),d=a.Ja({encapsulation:2,styles:[[".action-button{padding-right:10px}.github-button{width:49px;height:20px;padding-right:5px;display:inline}@media (min-width:1200px){ion-card img{width:calc(100% - 250px);margin:auto}}"]],data:{}});function f(l){return a.bb(0,[(l()(),a.La(0,0,null,null,0,"img",[["height","300px"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){var u=n.component;l(n,0,0,null==u.movie?null:u.movie.poster)})}function k(l){return a.bb(0,[(l()(),a.La(0,0,null,null,0,"img",[["height","300px"],["src","https://in.bmscdn.com/iedb/movies/images/website/poster/large/ela-cheppanu-et00016781-24-03-2017-18-31-40.jpg"]],null,null,null,null,null))],null,null)}function g(l){return a.bb(0,[(l()(),a.La(0,0,null,null,52,"ion-card",[],null,null,null,null,null)),a.Ka(1,16384,null,0,t.g,[a.k],null,null),(l()(),a.La(2,0,null,null,12,"ion-item",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==a.Ta(l,4).onClick(u)&&o),o},null,null)),a.Ka(3,16384,null,0,t.B,[a.k],null,null),a.Ka(4,16384,null,0,i.a,[[2,e.l],a.k],null,null),(l()(),a.La(5,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),a.La(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a.Za(7,null,["",""])),(l()(),a.La(8,0,null,null,6,"ion-chip",[["color","secondary"],["slot","end"]],null,null,null,null,null)),a.Ka(9,16384,null,0,t.m,[a.k],{color:[0,"color"]},null),(l()(),a.La(10,0,null,null,1,"ion-icon",[["color","secondary"],["name","pricetag"]],null,null,null,null,null)),a.Ka(11,16384,null,0,r.a,[a.k],{color:[0,"color"],name:[1,"name"]},null),(l()(),a.La(12,0,null,null,2,"ion-label",[],null,null,null,null,null)),a.Ka(13,16384,null,0,t.H,[a.k],null,null),(l()(),a.Za(14,null,["",""])),(l()(),a.Ca(16777216,null,null,1,null,f)),a.Ka(16,16384,null,0,c.j,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Ca(16777216,null,null,1,null,k)),a.Ka(18,16384,null,0,c.j,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.La(19,0,null,null,11,"ion-card-content",[],null,null,null,null,null)),a.Ka(20,16384,null,0,t.h,[a.k],null,null),(l()(),a.La(21,0,null,null,9,"ion-item",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==a.Ta(l,23).onClick(u)&&o),o},null,null)),a.Ka(22,16384,null,0,t.B,[a.k],null,null),a.Ka(23,16384,null,0,i.a,[[2,e.l],a.k],null,null),(l()(),a.La(24,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Za(25,null,["",""])),(l()(),a.La(26,0,null,null,4,"ion-badge",[["slot","end"]],null,[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.watchTrailer()&&a),a},null,null)),a.Ka(27,16384,null,0,t.d,[a.k],null,null),(l()(),a.La(28,0,null,null,1,"ion-icon",[["name","eye"]],null,null,null,null,null)),a.Ka(29,16384,null,0,r.a,[a.k],{name:[0,"name"]},null),(l()(),a.Za(-1,null,[" Watch Trailer"])),(l()(),a.La(31,0,null,null,21,"ion-row",[],null,null,null,null,null)),a.Ka(32,16384,null,0,t.Aa,[],null,null),(l()(),a.La(33,0,null,null,19,"ion-item",[["style","width: 100%"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==a.Ta(l,35).onClick(u)&&o),o},null,null)),a.Ka(34,16384,null,0,t.B,[a.k],null,null),a.Ka(35,16384,null,0,i.a,[[2,e.l],a.k],null,null),(l()(),a.La(36,0,null,null,6,"ion-button",[["class","action-button"],["clear",""],["icon-left",""],["small",""]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==a.Ta(l,38).onClick(u)&&o),o},null,null)),a.Ka(37,16384,null,0,t.e,[a.k],null,null),a.Ka(38,16384,null,0,i.a,[[2,e.l],a.k],null,null),(l()(),a.La(39,0,null,null,1,"ion-icon",[["name","thumbs-up"]],null,null,null,null,null)),a.Ka(40,16384,null,0,r.a,[a.k],{name:[0,"name"]},null),(l()(),a.La(41,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),a.Za(-1,null,["12 Likes"])),(l()(),a.La(43,0,null,null,6,"ion-button",[["clear",""],["icon-left",""],["small",""]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==a.Ta(l,45).onClick(u)&&o),o},null,null)),a.Ka(44,16384,null,0,t.e,[a.k],null,null),a.Ka(45,16384,null,0,i.a,[[2,e.l],a.k],null,null),(l()(),a.La(46,0,null,null,1,"ion-icon",[["name","text"]],null,null,null,null,null)),a.Ka(47,16384,null,0,r.a,[a.k],{name:[0,"name"]},null),(l()(),a.La(48,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),a.Za(-1,null,["4 Comments"])),(l()(),a.La(50,0,null,null,2,"ion-note",[["slot","end"]],null,null,null,null,null)),a.Ka(51,16384,null,0,t.R,[a.k],null,null),(l()(),a.Za(52,null,[" "," "]))],function(l,n){var u=n.component;l(n,9,0,"secondary"),l(n,11,0,"secondary","pricetag"),l(n,16,0,u.movie.poster),l(n,18,0,!u.movie.poster),l(n,29,0,"eye"),l(n,40,0,"thumbs-up"),l(n,47,0,"text")},function(l,n){var u=n.component;l(n,7,0,null==u.movie?null:u.movie.title),l(n,14,0,null==u.movie?null:u.movie.genre),l(n,25,0,null==u.movie?null:u.movie.notes),l(n,52,0,null==u.movie?null:u.movie.year)})}function L(l){return a.bb(0,[(l()(),a.La(0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,null,null)),a.Ka(1,16384,null,0,t.w,[a.k],null,null),(l()(),a.La(2,0,null,null,9,"ion-toolbar",[["color","primary"]],null,null,null,null,null)),a.Ka(3,16384,null,0,t.Ua,[a.k],{color:[0,"color"]},null),(l()(),a.La(4,0,null,null,4,"ion-buttons",[["slot","start"]],null,null,null,null,null)),a.Ka(5,16384,null,0,t.f,[],null,null),(l()(),a.La(6,0,null,null,2,"ion-back-button",[["text","home"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==a.Ta(l,8).onClick(u)&&o),o},null,null)),a.Ka(7,16384,null,0,t.c,[a.k],{text:[0,"text"]},null),a.Ka(8,16384,null,0,s.a,[[2,e.l],[2,m.a],p.a,a.k],null,null),(l()(),a.La(9,0,null,null,2,"ion-title",[],null,null,null,null,null)),a.Ka(10,16384,null,0,t.Va,[],null,null),(l()(),a.Za(-1,null,["Movie Detail"])),(l()(),a.La(12,0,null,null,9,"ion-content",[["no-bounce",""]],null,null,null,null,null)),a.Ka(13,16384,null,0,t.p,[a.k],null,null),(l()(),a.La(14,0,null,null,7,"ion-grid",[],null,null,null,null,null)),a.Ka(15,16384,null,0,t.v,[],null,null),(l()(),a.La(16,0,null,null,5,"ion-row",[],null,null,null,null,null)),a.Ka(17,16384,null,0,t.Aa,[],null,null),(l()(),a.La(18,0,null,null,3,"ion-col",[["col-lg-6",""],["col-md-6",""],["col-sm-8",""],["offset-lg-3",""],["offset-md-3",""],["offset-sm-2",""]],null,null,null,null,null)),a.Ka(19,16384,null,0,t.o,[],null,null),(l()(),a.Ca(16777216,null,null,1,null,g)),a.Ka(21,16384,null,0,c.j,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.La(22,0,null,null,12,"ion-footer",[],null,null,null,null,null)),a.Ka(23,16384,null,0,t.u,[a.k],null,null),(l()(),a.La(24,0,null,null,10,"ion-toolbar",[["color","primary"]],null,null,null,null,null)),a.Ka(25,16384,null,0,t.Ua,[a.k],{color:[0,"color"]},null),(l()(),a.La(26,0,null,null,2,"ion-title",[],null,null,null,null,null)),a.Ka(27,16384,null,0,t.Va,[],null,null),(l()(),a.Za(28,null,["\xa9 "," Adri\xe1n Brito Pacheco"])),(l()(),a.La(29,0,null,null,5,"ion-buttons",[["slot","end"]],null,null,null,null,null)),a.Ka(30,16384,null,0,t.f,[],null,null),(l()(),a.La(31,0,null,null,1,"div",[["class","github-button"]],null,null,null,null,null)),(l()(),a.La(32,0,null,null,0,"iframe",[["allowtransparency","true"],["frameborder","0"],["scrolling","no"],["src","https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabritopach%2Fangular-ionic-master-detail&title=&aria-label=Star%20abritopach%2Fangular-ionic-master-detail%20on%20GitHub&data-icon=octicon-star&data-text=Star"],["style","width: 50px; height: 20px; border: none;"]],null,null,null,null,null)),(l()(),a.La(33,0,null,null,1,"div",[["class","github-button"]],null,null,null,null,null)),(l()(),a.La(34,0,null,null,0,"iframe",[["allowtransparency","true"],["frameborder","0"],["scrolling","no"],["src","https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabritopach&title=&aria-label=Follow%20%40abritopach%20on%20GitHub&data-text=GitHub"],["style","width: 67px; height: 20px; border: none;"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"home"),l(n,21,0,u.movie),l(n,25,0,"primary")},function(l,n){l(n,28,0,n.component.currentYear)})}var v=a.Ha("app-page-detail",h,function(l){return a.bb(0,[(l()(),a.La(0,0,null,null,1,"app-page-detail",[],null,null,null,L,d)),a.Ka(1,49152,null,0,h,[b.h],null,null)],null,null)},{},{},[]),K=u("95zI"),w=u("9opb"),x=u("apKv"),y=u("9hPu"),S=function(){};u.d(n,"DetailModuleNgFactory",function(){return C});var C=a.Ia(o,[],function(l){return a.Ra([a.Sa(512,a.j,a.X,[[8,[v]],[3,a.j],a.v]),a.Sa(4608,c.l,c.k,[a.s,[2,c.p]]),a.Sa(4608,K.a,K.a,[a.x,a.g]),a.Sa(4608,w.a,w.a,[K.a,a.j,a.p]),a.Sa(4608,x.a,x.a,[K.a,a.j,a.p]),a.Sa(1073742336,c.c,c.c,[]),a.Sa(1073742336,y.b,y.b,[]),a.Sa(1073742336,e.m,e.m,[[2,e.q],[2,e.l]]),a.Sa(1073742336,S,S,[]),a.Sa(1073742336,o,o,[]),a.Sa(1024,e.j,function(){return[[{path:"",component:h}]]},[])])})}}]);