(this["webpackJsonpgame-ranking"]=this["webpackJsonpgame-ranking"]||[]).push([[0],{196:function(e,a,t){},314:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),i=t.n(r),s=(t(196),t(49)),o=t(118),l=t.n(o),j=t(152),d=t(21),u=t(356),b=t(396),O=t(359),h=t(361),x=t(72),p=t(25),m=t.n(p),g=t(2),f=Object(u.a)((function(e){return Object(b.a)({root:{flexGrow:1,marginBottom:e.spacing(4)},AppBar:{background:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 110%)"},EmojiEvents:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function y(){var e=f();return Object(g.jsx)("div",{className:e.root,children:Object(g.jsx)(O.a,{className:e.AppBar,position:"static",children:Object(g.jsxs)(h.a,{children:[Object(g.jsx)(m.a,{className:e.EmojiEvents}),Object(g.jsx)(x.a,{variant:"h6",className:e.title,children:"Game Ranking"})]})})})}var v=t(362),w=t(363),C=t(160),N=t.n(C),P=t(161),k=t.n(P),S=t(157),D=t.n(S),I=t(158),F=t.n(I),G=t(159),R=t.n(G),A=t(162),B=t.n(A),L=t(163),z=t.n(L),E=Object(u.a)((function(e){return Object(b.a)({root:{flexGrow:1,backgroundColor:e.palette.secondary.main,width:"100%",position:"fixed",bottom:0}})}));function J(e){var a=E(),t=e.currentPage;return Object(g.jsxs)(v.a,{value:t,onChange:e.handleChangeCurrentPage,className:a.root,children:[Object(g.jsx)(w.a,{label:"Summary",value:"summary",icon:"summary"===t?Object(g.jsx)(D.a,{}):Object(g.jsx)(F.a,{})}),Object(g.jsx)(w.a,{label:"Games",value:"games",icon:"games"===t?Object(g.jsx)(m.a,{}):Object(g.jsx)(R.a,{})}),Object(g.jsx)(w.a,{label:"Players",value:"players",icon:"players"===t?Object(g.jsx)(N.a,{}):Object(g.jsx)(k.a,{})}),Object(g.jsx)(w.a,{label:"Settings",value:"settings",icon:"settings"===t?Object(g.jsx)(B.a,{}):Object(g.jsx)(z.a,{})})]})}var M=t(364),W=t(365),H=t(121),Z=t(366),T=Object(u.a)((function(e){return Object(b.a)({badge:{padding:e.spacing(1)},first:{padding:e.spacing(2),border:"1px solid #FFD700",background:"linear-gradient(to top, #FFD700, #FCF6BA)"},second:{padding:e.spacing(2),border:"1px solid #C0C0C0",background:"linear-gradient(to top, #B0B0B0, #DFDFDF)"},third:{padding:e.spacing(2),border:"1px solid #cd7f32",background:"linear-gradient(to top, #ad5f12, #dd9f52)"}})}));function _(e){var a=T();return Object(g.jsx)(M.a,{children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"stretch",children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(H.a,{className:a.second,children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"baseline",children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(x.a,{children:"Silver player"})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(Z.a,{children:Object(g.jsx)(m.a,{})})})]})})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(H.a,{className:a.first,children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"baseline",children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(x.a,{children:"Gold player"})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(Z.a,{children:Object(g.jsx)(m.a,{})})})]})})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(H.a,{className:a.third,children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"baseline",children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(x.a,{children:"Bronze player"})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(Z.a,{children:Object(g.jsx)(m.a,{})})})]})})})]})})}var U=t(367),V=t(316),q=t(164),K=t.n(q),Q=t(91),X=Object(u.a)((function(e){return Object(b.a)({root:{padding:e.spacing(1)}})}));function Y(e){var a=X();return Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(U.a,{children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"baseline",spacing:2,className:a.root,children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsxs)(x.a,{children:[e.players.length," player(s)"]})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(V.a,{variant:"contained",color:"primary",startIcon:Object(g.jsx)(K.a,{}),onClick:function(){return function(){var a=t(206)(),n={uuid:Object(Q.uuid)(),username:"New Player",color:a};e.setPlayers(e.players.concat(n))}()},children:"Add a new player"})})]})})})}var $=t(368),ee=t(369),ae=t(178),te=t(169),ne=t.n(te),ce=t(171),re=Object(u.a)((function(e){return Object(b.a)({Padding:{padding:e.spacing(2)},first:{color:"#FFD700"},second:{color:"#C0C0C0"},third:{color:"#cd7f32"},ColorPicker:{position:"absolute",zIndex:2},Name:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),borderRadius:e.spacing(1),margin:"0px",border:"1px solid rgba(0,0,0,0.1)",width:e.spacing(17)}})}));function ie(e){var a=re(),t=c.a.useState(!1),n=Object(d.a)(t,2),r=n[0],i=n[1],s=c.a.useState(e.player.username),o=Object(d.a)(s,2),l=o[0],j=o[1];return Object(g.jsx)(W.a,{item:!0,spacing:1,children:Object(g.jsxs)(U.a,{className:a.Padding,onClick:function(){return e.addNotification("click on user","info")},children:[Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",spacing:1,children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)($.a,{size:"small",onClick:function(){i(!0)},children:Object(g.jsx)(ne.a,{style:{color:e.player.color}})})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(ee.a,{onClickAway:function(){return function(){var a=Object.assign({},e.player);a.username=l,e.changePlayerData(a,e.player.uuid)}()},children:Object(g.jsx)(ae.a,{className:a.Name,onChange:function(e){return j(e.target.value)},defaultValue:e.player.username})})})]})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",spacing:1,children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(Z.a,{badgeContent:4,showZero:!0,className:a.first,color:"primary",children:Object(g.jsx)(m.a,{})})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(Z.a,{badgeContent:14,showZero:!0,className:a.second,color:"primary",children:Object(g.jsx)(m.a,{})})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(Z.a,{badgeContent:0,showZero:!0,className:a.third,color:"primary",children:Object(g.jsx)(m.a,{})})})]})})]}),r&&Object(g.jsx)(ee.a,{onClickAway:function(){return i(!1)},children:Object(g.jsx)(ce.a,{className:a.ColorPicker,color:e.player.color,onChangeComplete:function(a){var t=Object.assign({},e.player);t.color=a.hex,e.changePlayerData(t,e.player.uuid)},disableAlpha:!0})})]})})}var se=Object(u.a)((function(e){return Object(b.a)({})}));function oe(e){se();var a,t=function(a,t){var n=e.players;n.map((function(e){return e.uuid===t?Object.assign(e,a):e})),e.setPlayers(n)};return Object(g.jsx)(M.a,{children:Object(g.jsxs)(W.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:1,children:[Object(g.jsx)(Y,{players:e.players,setPlayers:e.setPlayers}),(a=e.players,a.map((function(a){return Object(g.jsx)(ie,{player:a,changePlayerData:t,addNotification:e.addNotification})})))]})})}var le=Object(u.a)((function(e){return Object(b.a)({padding:{padding:e.spacing(1)},subSection:{paddingLeft:e.spacing(1),marginLeft:e.spacing(2),borderLeft:"3px solid rgba(0,0,0,.2)"}})}));function je(e){var a=le();return Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(U.a,{children:Object(g.jsxs)(W.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:4,className:a.padding,children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(x.a,{variant:"h4",color:"primary",children:"About..."})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsxs)(M.a,{className:a.subSection,children:[Object(g.jsx)(x.a,{variant:"h5",color:"textSecondary",children:"the author"}),Object(g.jsx)(x.a,{children:"Made with love by @stephane_branly."})]})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsxs)(M.a,{className:a.subSection,children:[Object(g.jsx)(x.a,{variant:"h5",color:"textSecondary",children:"the project"}),Object(g.jsx)(x.a,{children:"Project made for personal use first. But feel free to use it."})]})})]})})})}var de=t(370),ue=t(371),be=Object(u.a)((function(e){return Object(b.a)({padding:{padding:e.spacing(1)}})}));function Oe(e){var a=be();return Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(U.a,{children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"baseline",spacing:1,className:a.padding,children:[Object(g.jsxs)(W.a,{item:!0,children:[Object(g.jsx)("input",{style:{display:"none"},accept:".json",id:"contained-button-import",type:"file",onChange:e.handlerLoadData}),Object(g.jsx)("label",{htmlFor:"contained-button-import",children:Object(g.jsx)(V.a,{variant:"contained",color:"primary",component:"span",startIcon:Object(g.jsx)(de.a,{}),children:"Load data"})})]}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(V.a,{variant:"contained",color:"primary",startIcon:Object(g.jsx)(ue.a,{}),onClick:e.handlerSaveData,children:"Save data"})})]})})})}var he=Object(u.a)((function(e){return Object(b.a)({padding:{padding:e.spacing(1)}})}));function xe(e){he();var a={handlerSaveData:e.handlerSaveData,handlerLoadData:e.handlerLoadData};return Object(g.jsx)(M.a,{children:Object(g.jsxs)(W.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:1,children:[Object(g.jsx)(Oe,Object(s.a)({},a)),Object(g.jsx)(je,{})]})})}var pe=t(170),me=t.n(pe),ge=Object(u.a)((function(e){return Object(b.a)({root:{padding:e.spacing(1)}})}));function fe(e){var a=ge();return Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(U.a,{children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"baseline",spacing:2,className:a.root,children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsxs)(x.a,{children:[e.games.length," game(s)"]})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(V.a,{variant:"contained",color:"primary",startIcon:Object(g.jsx)(me.a,{}),onClick:function(){return function(){var a={uuid:Object(Q.uuid)(),gamename:"New game"};e.setGames(e.games.concat(a))}()},children:"Add a new game"})})]})})})}var ye=Object(u.a)((function(e){return Object(b.a)({Padding:{padding:e.spacing(2)},first:{color:"#FFD700"},second:{color:"#C0C0C0"},third:{color:"#cd7f32"},ColorPicker:{position:"absolute",zIndex:2},Name:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),borderRadius:e.spacing(1),margin:"0px",border:"1px solid rgba(0,0,0,0.1)",width:e.spacing(17)}})}));function ve(e){var a=ye();return Object(g.jsx)(W.a,{item:!0,spacing:1,children:Object(g.jsx)(U.a,{className:a.Padding,onClick:function(){return e.setCurrentGame(e.game)},children:Object(g.jsx)(W.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",children:Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(W.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",spacing:1,children:Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(x.a,{children:e.game.gamename})})})})})})})}var we=t(321),Ce=t(386),Ne=t(385),Pe=t(382),ke=t(383),Se=t(387),De=t(388),Ie=t(389),Fe=t(395),Ge=t(381),Re=t(379),Ae=t(384),Be=t(174),Le=t(317),ze=t(372),Ee=t(394),Je=t(373),Me=t(374),We=t(375),He=Object(u.a)((function(e){return Object(b.a)({})}));function Ze(e){He();var a,t=function(a){return 0!==e.selectedPlayers.filter((function(e){return e.uuid===a})).length},n=function(a){t(a)?e.setSelectedPlayers(e.selectedPlayers.filter((function(e){return e.uuid!==a}))):e.setSelectedPlayers([].concat(Object(Be.a)(e.selectedPlayers),[{uuid:a,rank:1}]))};return Object(g.jsxs)(Me.a,{dividers:!0,children:[Object(g.jsx)(x.a,{children:"Who was playing?"}),Object(g.jsx)(We.a,{children:(a=e.players,a.map((function(e){return Object(g.jsxs)(Le.a,{dense:!0,button:!0,onClick:function(){return n(e.uuid)},children:[Object(g.jsx)(ze.a,{children:Object(g.jsx)(Ee.a,{edge:"end",tabIndex:-1,disableRipple:!0,checked:t(e.uuid),onClick:function(){return n(e.uuid)},style:{color:e.color}})}),Object(g.jsx)(Je.a,{id:e.uuid,primary:e.username})]},e.uuid)})))})]})}var Te=t(172),_e=t(19),Ue=t(391),Ve=Object(u.a)((function(e){return Object(b.a)({})}));function qe(e){Ve();return Object(g.jsxs)(Me.a,{dividers:!0,children:[Object(g.jsx)(x.a,{children:"When?"}),Object(g.jsx)(_e.a,{utils:Te.a,children:Object(g.jsx)(Ue.a,{value:e.selectedDate,onChange:function(a){e.setSelectedDate(a)},showTodayButton:!0,format:"dd/MM/yyyy HH:mm"})})]})}var Ke=t(380),Qe=t(392),Xe=function(e,a){return e.filter((function(e){return e.uuid===a}))[0]},Ye=function(e){return e.username[0].toUpperCase()+e.username[1]},$e=Object(u.a)((function(e){return Object(b.a)({})}));function ea(e){$e();for(var a=[],t=1;t<e.selectedPlayers.length+1;t++)a.push(Object(g.jsx)(Ke.a,{value:t,children:t}));return Object(g.jsxs)(Me.a,{dividers:!0,children:[Object(g.jsx)(x.a,{children:"Results"}),Object(g.jsx)(We.a,{children:e.selectedPlayers.map((function(t){return Object(g.jsx)(Le.a,{dense:!0,button:!0,children:Object(g.jsxs)(W.a,{container:!0,direction:"row",alignItems:"baseline",justify:"space-between",spacing:1,children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(we.a,{alt:t.uuid,style:{backgroundColor:Xe(e.players,t.uuid).color},children:Ye(Xe(e.players,t.uuid))})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(x.a,{children:Xe(e.players,t.uuid).username})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(Qe.a,{value:t.rank,onChange:function(a){return function(a,t){var n=e.selectedPlayers;n.map((function(e){return e.uuid===t?e.rank=a.target.value:e})),e.setSelectedPlayers(n)}(a,t.uuid)},children:a})})]})},t.uuid)}))})]})}var aa=Object(u.a)((function(e){return Object(b.a)({})}));function ta(e){aa();var a=c.a.useState("who"),t=Object(d.a)(a,2),n=t[0],r=t[1],i=c.a.useState(new Date),s=Object(d.a)(i,2),o=s[0],l=s[1],j=c.a.useState([]),u=Object(d.a)(j,2),b=u[0],O=u[1];return Object(g.jsxs)(Fe.a,{fullWidth:!0,maxWidth:"sm",open:e.addResultOpen,children:[Object(g.jsx)(Ge.a,{children:"New result"}),"who"===n?Object(g.jsx)(Ze,{players:e.players,setSelectedPlayers:O,selectedPlayers:b}):"when"===n?Object(g.jsx)(qe,{setSelectedDate:l,selectedDate:o}):"results"===n?Object(g.jsx)(ea,{players:e.players,setSelectedPlayers:O,selectedPlayers:b}):Object(g.jsx)(x.a,{children:"ERROR"}),Object(g.jsxs)(Re.a,{children:[Object(g.jsx)(V.a,{onClick:function(){return e.setAddResultOpen(!1)},color:"primary",variant:"outlined",children:"Cancel"}),Object(g.jsx)(V.a,{autoFocus:!0,disabled:"who"===n,onClick:function(){"when"===n?r("who"):"results"===n&&r("when")},color:"primary",variant:"outlined",startIcon:Object(g.jsx)(Pe.a,{}),children:"Back"}),"results"===n?Object(g.jsx)(V.a,{autoFocus:!0,onClick:function(){return e.setAddResultOpen(!1)},color:"primary",variant:"outlined",endIcon:Object(g.jsx)(ke.a,{}),children:"Send"}):Object(g.jsx)(V.a,{autoFocus:!0,onClick:function(){return function(){if("who"===n)if(b.length<2)e.addNotification("Please select a least 2 players","error");else{r("when");var a=b.sort((function(a,t){return Xe(e.players,a.uuid).username>Xe(e.players,t.uuid).username?1:-1}));O(a)}else"when"===n&&r("results")}()},color:"primary",variant:"outlined",endIcon:Object(g.jsx)(Ae.a,{}),children:"Next"})]})]})}var na=Object(u.a)((function(e){return Object(b.a)({Padding:{padding:e.spacing(2)},first:{color:"#FFD700"},second:{color:"#C0C0C0"},third:{color:"#cd7f32"},ColorPicker:{position:"absolute",zIndex:2},Name:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),borderRadius:e.spacing(1),margin:"0px",border:"1px solid rgba(0,0,0,0.1)",width:e.spacing(17)}})}));function ca(e){var a=na(),t=c.a.useState(e.game.gamename),n=Object(d.a)(t,2),r=(n[0],n[1],c.a.useState(!1)),i=Object(d.a)(r,2),s=i[0],o=i[1];return Object(g.jsxs)(U.a,{className:a.Padding,children:[Object(g.jsxs)(W.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:1,children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsxs)(W.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",children:[Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)($.a,{size:"medium",onClick:function(){return e.setCurrentGame(void 0)},children:Object(g.jsx)(Pe.a,{})})})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsxs)(Ce.a,{disableElevation:!0,variant:"contained",color:"primary",children:[Object(g.jsx)(V.a,{endIcon:Object(g.jsx)(ke.a,{}),onClick:function(){return o(!0)},children:"New result"}),Object(g.jsx)(V.a,{children:Object(g.jsx)(Se.a,{})}),Object(g.jsx)(V.a,{children:Object(g.jsx)(De.a,{})})]})})]})}),Object(g.jsx)(W.a,{item:!0,children:Object(g.jsx)(x.a,{color:"primary",variant:"h3",align:"center",children:e.game.gamename})}),Object(g.jsxs)(W.a,{item:!0,children:[Object(g.jsx)(x.a,{children:"Players:"}),Object(g.jsx)(Ie.a,{max:15,children:e.players.map((function(e){return Object(g.jsx)(Z.a,{overlap:"circle",style:{borderColor:"rgba(0,0,0,0)"},anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:Object(g.jsx)(Ne.a,{className:a.first}),children:Object(g.jsx)(we.a,{alt:e.username,style:{backgroundColor:e.color},children:Ye(e)})})}))})]})]}),s?Object(g.jsx)(ta,{game:e.game,players:e.players,addResultOpen:s,setAddResultOpen:o,changeGameData:e.changeGameData,addNotification:e.addNotification}):Object(g.jsx)(g.Fragment,{})]})}var ra=Object(u.a)((function(e){return Object(b.a)({padding:{padding:e.spacing(1)}})}));function ia(e){ra();var a,t=Object(n.useState)(void 0),c=Object(d.a)(t,2),r=c[0],i=c[1],s=function(a,t){var n=e.games;n.map((function(e){return e.uuid===t?Object.assign(e,a):e})),e.setGames(n)};return Object(g.jsx)(M.a,{children:r?Object(g.jsx)(ca,{game:r,changeGameData:s,setCurrentGame:i,players:e.players,addNotification:e.addNotification}):Object(g.jsxs)(W.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:1,children:[Object(g.jsx)(fe,{games:e.games,setGames:e.setGames}),(a=e.games,a.map((function(e){return Object(g.jsx)(ve,{game:e,changeGameData:s,setCurrentGame:i})})))]})})}var sa=Object(u.a)((function(e){return Object(b.a)({root:{}})}));function oa(e){sa();return function(e){switch(e.currentPage){case"summary":return Object(g.jsx)(_,{});case"players":return Object(g.jsx)(oe,{players:e.players,setPlayers:e.setPlayers,addNotification:e.addNotification});case"settings":return Object(g.jsx)(xe,{handlerSaveData:e.handlerSaveData,handlerLoadData:e.handlerLoadData});case"games":return Object(g.jsx)(ia,{games:e.games,setGames:e.setGames,players:e.players,addNotification:e.addNotification});default:return Object(g.jsx)(g.Fragment,{})}}(e)}var la=t(173),ja=t(390),da=t(398),ua=t(393);function ba(e){return Object(g.jsx)(ua.a,Object(s.a)({elevation:6,variant:"filled"},e))}function Oa(e){var a=function(a,t){"clickaway"!==t&&e.setNotification({open:!1})};return e.notification.open?Object(g.jsx)(da.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:e.notification.open,autoHideDuration:6e3,onClose:a,children:Object(g.jsx)(ba,{severity:e.notification.severity?e.notification.severity:"info",onClose:a,children:e.notification.text})}):Object(g.jsx)(g.Fragment,{})}var ha=Object(la.a)({palette:{primary:{main:"#3f5efb"},secondary:{main:"#d2d2d2"}}}),xa=Object(u.a)((function(e){return Object(b.a)({App:{paddingBottom:e.spacing(15)}})}));var pa=function(){var e=c.a.useState("summary"),a=Object(d.a)(e,2),n=a[0],r=a[1],i=c.a.useState([]),o=Object(d.a)(i,2),u=o[0],b=o[1],O=c.a.useState([]),h=Object(d.a)(O,2),x=h[0],p=h[1],m=c.a.useState({open:!1}),f=Object(d.a)(m,2),v=f[0],w=f[1],C=xa(),N=function(e,a){w({open:!0,text:e,severity:a||void 0})},P={currentPage:n,games:x,setGames:p,players:u,setPlayers:b,handlerSaveData:function(){var e={players:u,games:x},a=t(313),n=JSON.stringify(e),c=new Blob([n],{type:"application/json"});a.saveAs(c,"save_game-ranking.json")},handlerLoadData:function(e){try{var a;e.preventDefault();var t=new FileReader;t.onload=function(){var e=Object(j.a)(l.a.mark((function e(a){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===(t=a.target)||void 0===t?void 0:t.result)&&(n=JSON.parse(a.target.result),b(n.players),p(n.games),N("Data correctly loaded","success"),r("summary"));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),(null===(a=e.target)||void 0===a?void 0:a.files)&&t.readAsText(e.target.files[0])}catch(n){N("Error when loading data","error")}},addNotification:N},k={handleChangeCurrentPage:function(e,a){r(a)},currentPage:n},S={notification:v,setNotification:w};return Object(g.jsxs)(ja.a,{theme:ha,children:[Object(g.jsxs)("div",{className:C.App,children:[Object(g.jsx)(y,{}),Object(g.jsx)(oa,Object(s.a)({},P)),Object(g.jsx)(J,Object(s.a)({},k))]}),Object(g.jsx)(Oa,Object(s.a)({},S))]})};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(pa,{})}),document.getElementById("root"))}},[[314,1,2]]]);
//# sourceMappingURL=main.37c005e8.chunk.js.map