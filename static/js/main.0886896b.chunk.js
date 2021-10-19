(this["webpackJsonpgame-ranking"]=this["webpackJsonpgame-ranking"]||[]).push([[0],{313:function(e,t,a){},481:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),s=(a(313),a(44)),o=a(113),l=a.n(o),d=a(248),u=a(17),j=a(284),b=a(522),h=a(575),O=a(567),p=a(525),m=a(526),f=a(99),x=a(81),g=a.n(x),y=a(1),v=Object(b.a)((function(e){return Object(h.a)({root:{flexGrow:1,marginBottom:e.spacing(4)},AppBar:{background:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 110%)"},EmojiEvents:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function k(){var e=v();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsx)(p.a,{className:e.AppBar,position:"static",children:Object(y.jsxs)(m.a,{children:[Object(y.jsx)(g.a,{className:e.EmojiEvents}),Object(y.jsx)(f.a,{variant:"h6",className:e.title,children:"Game Ranking"})]})})})}var C=a(527),w=a(528),R=a(254),S=a.n(R),D=a(255),N=a.n(D),P=a(253),F=a.n(P),E=a(256),I=a.n(E),G=a(257),_=a.n(G),M=Object(b.a)((function(e){return Object(h.a)({root:{flexGrow:1,backgroundColor:e.palette.secondary.main,width:"100%",position:"fixed",bottom:0,zIndex:100}})}));function A(e){var t=M(),a=e.currentPage;return Object(y.jsxs)(C.a,{value:a,onChange:e.handleChangeCurrentPage,className:t.root,children:[Object(y.jsx)(w.a,{label:"Games",value:"games",icon:"games"===a?Object(y.jsx)(g.a,{}):Object(y.jsx)(F.a,{})}),Object(y.jsx)(w.a,{label:"Players",value:"players",icon:"players"===a?Object(y.jsx)(S.a,{}):Object(y.jsx)(N.a,{})}),Object(y.jsx)(w.a,{label:"Settings",value:"settings",icon:"settings"===a?Object(y.jsx)(I.a,{}):Object(y.jsx)(_.a,{})})]})}var B=a(542),z=a(529),L=a(530),U=a(484),H=a(258),K=a.n(H),T=a(108),J=Object(b.a)((function(e){return Object(h.a)({root:{padding:e.spacing(1)}})}));function W(e){var t=J();return Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(L.a,{children:Object(y.jsxs)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",spacing:2,className:t.root,children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsxs)(f.a,{children:[e.players.length," player(s)"]})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(U.a,{variant:"contained",color:"primary",startIcon:Object(y.jsx)(K.a,{}),onClick:function(){return function(){var t=a(322)(),n={uuid:Object(T.uuid)(),username:"New Player",color:t};e.setPlayers(e.players.concat(n)),e.setCurrentPlayer({player:n,edit:!0})}()},children:"Add a new player"})})]})})})}var Z=a(531),Y=a(532),q=a(259),Q=a.n(q),V=function(e,t){return e.filter((function(e){return e.uuid===t}))[0]},X=function(e,t){return e.filter((function(e){return e.uuid===t}))[0]},$=function(e){return e.username.length>1?e.username[0].toUpperCase()+e.username[1]:e.username[0].toUpperCase()},ee=function(e){if(!e.results)return[];var t=[];t.push({resultUuid:"",playersRank:[]}),t[0].playersRank=e.players.map((function(e){return{playerUuid:e.uuid,score:1200,deltaScore:0}}));var a=t[0];return e.results.sort((function(e,t){return e.date>=t.date?1:-1})).forEach((function(e){var n=te(e,a);t.push(n),a=n})),t},te=function(e,t){var a={resultUuid:e.uuid,playersRank:[]};t.playersRank.forEach((function(e){a.playersRank.push({playerUuid:e.playerUuid,score:e.score,deltaScore:e.deltaScore})}));for(var n={},r=function(t){n[t+1]=e.ranks.filter((function(e){return t+1===e.rank})).length},c=0;c<e.ranks.length;c++)r(c);return e.ranks.forEach((function(n){var r=e.ranks.filter((function(e){return n.rank!==e.rank})),c=ae(n.uuid,a),i=t.playersRank[ae(n.uuid,t)].score,s=0;r.forEach((function(e){var a,r,c=t.playersRank[ae(e.uuid,t)].score,o=n.rank<e.rank?1:0,l=(a=i,r=c,1/(1+Math.pow(10,(r-a)/400))),d=function(e,t,a){return e+20*(a-t)/(arguments.length>3&&void 0!==arguments[3]?arguments[3]:1)}(i,l,o);s+=d-i})),a.playersRank[c].score=i+s,a.playersRank[c].deltaScore=s})),a},ae=function(e,t){return t.playersRank.findIndex((function(t){return t.playerUuid===e}))},ne=function(e){var t=[];return e.forEach((function(e){return t.push(re(e))})),t},re=function(e){var t={};return t.resultUuid=e.resultUuid,e.playersRank.forEach((function(e){return t[e.playerUuid]=Math.round(e.score)})),t},ce=function(e){var t={gamename:e.gamename,uuid:e.uuid,players:[],results:[],rankHistory:[]};if(e.results.forEach((function(e){var a=e;a.date=new Date(a.date),t.results.push(a),a.ranks.forEach((function(e){var a;t.players?t.players.some((function(t){return t.uuid===e.uuid}))||null===(a=t.players)||void 0===a||a.push({uuid:e.uuid,rank:0}):t.players=[{uuid:e.uuid,rank:0}]}))})),t.rankHistory=ee(t),t.players){var a=t.players.sort((function(e,t){return e.rank>t.rank?1:-1}));t.players=a}return t},ie=function(e){var t=[];return e.results.forEach((function(e){e.ranks.forEach((function(e){t.some((function(t){return t.uuid===e.uuid}))||t.push({uuid:e.uuid,rank:0})}))})),t},se=function(e,t,a){var n=0;return e.forEach((function(e){e.results.forEach((function(e){var r=e.ranks.filter((function(e){return e.uuid===t}));r.length&&r[0].rank===a&&(n+=1)}))})),n},oe=Object(b.a)((function(e){return Object(h.a)({Padding:{padding:e.spacing(2)},first:{color:"#FFD700"},second:{color:"#C0C0C0"},third:{color:"#cd7f32"},ColorPicker:{position:"absolute",zIndex:2},Name:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),borderRadius:e.spacing(1),margin:"0px",border:"1px solid rgba(0,0,0,0.1)",width:e.spacing(17)}})}));function le(e){var t=oe();return Object(y.jsx)(z.a,{item:!0,spacing:1,onClick:function(){return e.setCurrentPlayer({player:e.player,edit:!1})},children:Object(y.jsx)(L.a,{className:t.Padding,children:Object(y.jsxs)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsxs)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",spacing:1,children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(Z.a,{size:"small",children:Object(y.jsx)(Q.a,{style:{color:e.player.color}})})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(f.a,{children:e.player.username})})]})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsxs)(z.a,{container:!0,item:!0,direction:"row",justify:"space-between",alignItems:"baseline",spacing:1,children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(Y.a,{badgeContent:se(e.games,e.player.uuid,1),showZero:!0,className:t.first,color:"primary",children:Object(y.jsx)(g.a,{})})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(Y.a,{badgeContent:se(e.games,e.player.uuid,2),showZero:!0,className:t.second,color:"primary",children:Object(y.jsx)(g.a,{})})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(Y.a,{badgeContent:se(e.games,e.player.uuid,3),showZero:!0,className:t.third,color:"primary",children:Object(y.jsx)(g.a,{})})})]})})]})})})}var de=a(540),ue=a(539),je=a(541),be=a(573),he=a(534),Oe=a(535),pe=a(536),me=a(537),fe=a(538),xe=a(282);function ge(e){var t=r.a.useState(e.player),a=Object(u.a)(t,2),n=a[0],c=a[1];return Object(y.jsxs)(be.a,{open:!0,onClose:function(t,a){"clickaway"!==a&&e.setEditMode(!1)},children:[Object(y.jsx)(he.a,{children:"Edit player"}),Object(y.jsxs)(Oe.a,{children:[Object(y.jsx)(pe.a,{children:Object(y.jsx)(me.a,{value:n.username,onChange:function(e){return c(Object(s.a)(Object(s.a)({},n),{},{username:e.target.value}))}})}),Object(y.jsx)(pe.a,{children:Object(y.jsx)(xe.a,{color:n.color,onChangeComplete:function(e){return c(Object(s.a)(Object(s.a)({},n),{},{color:e.hex}))},disableAlpha:!0})})]}),Object(y.jsxs)(fe.a,{children:[Object(y.jsx)(U.a,{onClick:function(){return e.setEditMode(!1)},autoFocus:!0,children:"Cancel"}),Object(y.jsx)(U.a,{onClick:function(){e.handleChangePlayer(n),e.setEditMode(!1)},variant:"outlined",children:"Update"})]})]})}var ye=Object(b.a)((function(e){return Object(h.a)({Main:{padding:e.spacing(2),marginBottom:e.spacing(1)},ColorPicker:{position:"absolute",zIndex:2},Name:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),borderRadius:e.spacing(1),margin:"0px",border:"1px solid rgba(0,0,0,0.1)",width:e.spacing(17)}})}));function ve(e){var t=ye(),a=r.a.useState(e.edit),n=Object(u.a)(a,2),c=n[0],i=n[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(L.a,{className:t.Main,children:Object(y.jsxs)(z.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:1,children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsxs)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(Z.a,{size:"medium",onClick:function(){return e.setCurrentPlayer({player:void 0,edit:!1})},children:Object(y.jsx)(ue.a,{})})})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(de.a,{disableElevation:!0,variant:"contained",color:"primary",children:Object(y.jsx)(U.a,{onClick:function(){return i(!0)},children:Object(y.jsx)(je.a,{})})})})]})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(f.a,{style:{color:e.player.color},variant:"h3",align:"center",children:e.player.username})})]})}),c&&Object(y.jsx)(ge,{setEditMode:i,handleChangePlayer:function(t){e.changePlayerData(t,t.uuid)},player:e.player})]})}function ke(e){var t,a=Object(n.useState)({player:void 0,edit:!1}),r=Object(u.a)(a,2),c=r[0],i=r[1],s=function(t,a){var n=e.players;n.map((function(e){return e.uuid===a?Object.assign(e,t):e})),e.setPlayers(n)};return Object(y.jsx)(B.a,{children:c.player?Object(y.jsx)(ve,{player:c.player,edit:c.edit,changePlayerData:s,addNotification:e.addNotification,setCurrentPlayer:i}):Object(y.jsxs)(z.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:1,children:[Object(y.jsx)(W,{players:e.players,setPlayers:e.setPlayers,setCurrentPlayer:i}),(t=e.players,t.map((function(t){return Object(y.jsx)(le,{player:t,games:e.games,changePlayerData:s,setCurrentPlayer:i})})))]})})}var Ce=a(543),we=a(544),Re=a(98),Se=a.n(Re),De=Object(b.a)((function(e){return Object(h.a)({padding:{padding:e.spacing(1)},subSection:{paddingLeft:e.spacing(1),marginLeft:e.spacing(2),borderLeft:"3px solid rgba(0,0,0,.2)"}})}));function Ne(e){var t=De(),a=Object(Ce.a)("(min-width:600px)");return Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(L.a,{children:Object(y.jsxs)(z.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:4,className:t.padding,children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(f.a,{variant:"h4",color:"primary",children:"About..."})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsxs)(B.a,{className:t.subSection,children:[Object(y.jsx)(f.a,{variant:"h5",color:"textSecondary",children:"the author"}),Object(y.jsxs)(f.a,{children:["Made with love by ",Object(y.jsx)(we.a,{href:"https://github.com/StephaneBranly",target:"_blank",children:"@stephane_branly"}),"."]})]})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsxs)(B.a,{className:t.subSection,children:[Object(y.jsx)(f.a,{variant:"h5",color:"textSecondary",children:"the project"}),Object(y.jsxs)(f.a,{children:["Project made for personal use first. But feel free to use it and to give feedback (positive or negative). You can add ",Object(y.jsx)(we.a,{href:"https://github.com/StephaneBranly/game-ranking/issues",target:"_blank",children:"issues"})," if you want."]})]})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(B.a,{className:t.subSection,children:Object(y.jsxs)(Se.a.Provider,{children:[Object(y.jsx)(f.a,{variant:"h5",color:"textSecondary",children:"the algorithm"}),Object(y.jsxs)(f.a,{children:["Currently, the ",Object(y.jsx)(we.a,{href:"https://en.wikipedia.org/wiki/Elo_rating_system",target:"_blank",children:"ELO"})," algorithm is used."]}),a&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Se.a.Node,{formula:"E_{A} = \\frac{1}{1+10^{(R_{B} - R_{A}) / 400}}, E_{B} = \\frac{1}{1+10^{(R_{A} - R_{B}) / 400}}"}),Object(y.jsx)(Se.a.Node,{formula:"R'_{A} = R_{A} + K(S_{A} - E_{A}), R'_{B} = R_{B} + K(S_{B} - E_{B})"}),Object(y.jsx)(Se.a.Node,{formula:"E (expected), R (rank), K (factor = 32), S (score : 1=win, 0=loss)"})]}),Object(y.jsx)(f.a,{children:"It is adapted to work with more than 2 players and more than 2 teams."}),a&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Se.a.Node,{formula:"E_{P,o} = \\frac{1}{1+10^{(R_{o} - R_{P}) / 400}}"}),Object(y.jsx)(Se.a.Node,{formula:"R'_{P} = R_{P} + \\sum_{i}{K(S_{A} - E_{P,i})},\\ i \\in opponents(P)"})]}),Object(y.jsx)(f.a,{children:"If the project grows, new algorithms can be added and parameterized on the interface."})]})})})]})})})}var Pe=a(288),Fe=a(547),Ee=a(548),Ie=a(550),Ge=a(552),_e=a(549),Me=a(551),Ae=a(553),Be=a(554),ze=a(555),Le=a(556),Ue=Object(b.a)((function(e){return Object(h.a)({padding:{padding:e.spacing(1)}})}));function He(e){var t=Ue(),a=r.a.useState(null),n=Object(u.a)(a,2),c=n[0],i=n[1];return Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(L.a,{children:Object(y.jsx)(z.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"baseline",spacing:1,className:t.padding,children:Object(y.jsxs)(z.a,{item:!0,children:[Object(y.jsxs)(Pe.a,{onClose:function(e,t){i(null)},open:null!==c,anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(y.jsx)("input",{style:{display:"none"},accept:".json",id:"contained-button-import",type:"file",onChange:e.handlerLoadData}),Object(y.jsx)("label",{htmlFor:"contained-button-import",children:Object(y.jsxs)(Fe.a,{children:[Object(y.jsx)(Ee.a,{children:Object(y.jsx)(_e.a,{fontSize:"small"})}),Object(y.jsx)(Ie.a,{children:"Load from file"})]})}),Object(y.jsxs)(Fe.a,{onClick:function(){return e.handlerLoadData(null)},children:[Object(y.jsx)(Ee.a,{children:Object(y.jsx)(Me.a,{fontSize:"small"})}),Object(y.jsx)(Ie.a,{children:"Load from cookies"})]}),Object(y.jsx)(Ge.a,{}),Object(y.jsxs)(Fe.a,{onClick:function(){return e.handlerSaveData(!1)},children:[Object(y.jsx)(Ee.a,{children:Object(y.jsx)(Ae.a,{fontSize:"small"})}),Object(y.jsx)(Ie.a,{children:"Save as file"})]}),Object(y.jsxs)(Fe.a,{onClick:function(){return e.handlerSaveData(!0)},children:[Object(y.jsx)(Ee.a,{children:Object(y.jsx)(Me.a,{fontSize:"small"})}),Object(y.jsx)(Ie.a,{children:"Save as cookies"})]}),Object(y.jsx)(Ge.a,{}),Object(y.jsxs)(Fe.a,{onClick:function(){return e.handlerResetData(!1)},children:[Object(y.jsx)(Ee.a,{children:Object(y.jsx)(Be.a,{fontSize:"small"})}),Object(y.jsx)(Ie.a,{children:"Delete current session"})]}),Object(y.jsxs)(Fe.a,{onClick:function(){return e.handlerResetData(!0)},children:[Object(y.jsx)(Ee.a,{children:Object(y.jsx)(Be.a,{fontSize:"small"})}),Object(y.jsx)(Ie.a,{children:"Delete cookies"})]})]}),Object(y.jsxs)(de.a,{variant:"contained",color:"primary",children:[Object(y.jsx)(U.a,{endIcon:Object(y.jsx)(ze.a,{}),onClick:function(){return window.open("https://www.paypal.com/paypalme/StephaneBranly","_blank")},children:"Sponsor"}),Object(y.jsx)(U.a,{endIcon:Object(y.jsx)(Le.a,{}),onClick:function(){return window.open("https://github.com/StephaneBranly/game-ranking","_blank")},children:"GitHub"}),Object(y.jsx)(U.a,{startIcon:Object(y.jsx)(Me.a,{}),onClick:function(e){return i(e.currentTarget)},children:"Data"})]})]})})})})}function Ke(e){return Object(y.jsx)(B.a,{children:Object(y.jsxs)(z.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:1,children:[Object(y.jsx)(He,Object(s.a)({},e)),Object(y.jsx)(Ne,{})]})})}var Te=a(264),Je=a.n(Te),We=Object(b.a)((function(e){return Object(h.a)({root:{padding:e.spacing(1)}})}));function Ze(e){var t=We();return Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(L.a,{children:Object(y.jsxs)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",spacing:2,className:t.root,children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsxs)(f.a,{children:[e.games.length," game(s)"]})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(U.a,{variant:"contained",color:"primary",startIcon:Object(y.jsx)(Je.a,{}),onClick:function(){return function(){var t={uuid:Object(T.uuid)(),gamename:"New game",results:[],players:[],rankHistory:[]};e.setGames(e.games.concat(t)),e.setCurrentGame({game:t,edit:!0})}()},children:"Add a new game"})})]})})})}var Ye=Object(b.a)((function(e){return Object(h.a)({Padding:{padding:e.spacing(2)},first:{color:"#FFD700"},second:{color:"#C0C0C0"},third:{color:"#cd7f32"},ColorPicker:{position:"absolute",zIndex:2},Name:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),borderRadius:e.spacing(1),margin:"0px",border:"1px solid rgba(0,0,0,0.1)",width:e.spacing(17)}})}));function qe(e){var t=Ye();return Object(y.jsx)(z.a,{item:!0,spacing:1,children:Object(y.jsx)(L.a,{className:t.Padding,onClick:function(){return e.setCurrentGame({game:e.game,edit:!1})},children:Object(y.jsx)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",children:Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",spacing:1,children:Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(f.a,{children:e.game.gamename})})})})})})})}var Qe=a(558),Ve=a(559),Xe=a(286),$e=a(486),et=a(571),tt=a(546);function at(e){var t,a=function(t){return 0!==e.selectedPlayers.filter((function(e){return e.uuid===t})).length},n=function(t){a(t)?e.setSelectedPlayers(e.selectedPlayers.filter((function(e){return e.uuid!==t}))):e.setSelectedPlayers([].concat(Object(Xe.a)(e.selectedPlayers),[{uuid:t,rank:1}]))};return Object(y.jsxs)(Oe.a,{dividers:!0,children:[Object(y.jsx)(f.a,{children:"Who was playing?"}),Object(y.jsx)(tt.a,{children:(t=e.players,t.map((function(e){return Object(y.jsxs)($e.a,{dense:!0,button:!0,onClick:function(){return n(e.uuid)},children:[Object(y.jsx)(Ee.a,{children:Object(y.jsx)(et.a,{edge:"end",tabIndex:-1,disableRipple:!0,checked:a(e.uuid),onClick:function(){return n(e.uuid)},style:{color:e.color}})}),Object(y.jsx)(Ie.a,{id:e.uuid,primary:e.username})]},e.uuid)})))})]})}var nt=a(283),rt=a(37),ct=a(568);function it(e){return Object(y.jsxs)(Oe.a,{dividers:!0,children:[Object(y.jsx)(f.a,{children:"When?"}),Object(y.jsx)(rt.a,{utils:nt.a,children:Object(y.jsx)(ct.a,{value:e.selectedDate,onChange:function(t){e.setSelectedDate(t)},showTodayButton:!0,format:"dd/MM/yyyy HH:mm"})})]})}var st=a(577),ot=a(572);function lt(e){var t,a=function(){for(var t=[],a=1;a<e.selectedPlayers.length+1;a++)t.push(Object(y.jsx)(Fe.a,{value:a,children:a},a));return t};return Object(y.jsxs)(Oe.a,{dividers:!0,children:[Object(y.jsx)(f.a,{children:"Ranks"}),Object(y.jsx)(tt.a,{children:(t=e.selectedPlayers,t.map((function(t){return Object(y.jsx)($e.a,{dense:!0,button:!0,children:Object(y.jsxs)(z.a,{container:!0,direction:"row",alignItems:"baseline",justify:"space-between",spacing:1,children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(st.a,{alt:t.uuid,style:{backgroundColor:V(e.players,t.uuid).color},children:$(V(e.players,t.uuid))})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(f.a,{children:V(e.players,t.uuid).username})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(ot.a,{id:t.uuid,value:t.rank,onChange:function(a){return function(t,a){var n=e.selectedPlayers;n.map((function(e){return e.uuid===a?e.rank=t.target.value:e})),console.log("value changed"),e.setSelectedPlayers(n)}(a,t.uuid)},children:a()})})]})},t.uuid)})))})]})}function dt(e){return Object(y.jsxs)(be.a,{open:!0,onClose:function(t,a){"clickaway"!==a&&e.setDeleteResultOpen(!1)},children:[Object(y.jsx)(he.a,{children:"Delete this Result?"}),Object(y.jsx)(Oe.a,{children:Object(y.jsx)(pe.a,{children:"This will delete this Result and all associated results."})}),Object(y.jsxs)(fe.a,{children:[Object(y.jsx)(U.a,{onClick:function(){return e.setDeleteResultOpen(!1)},autoFocus:!0,children:"Cancel"}),Object(y.jsx)(U.a,{onClick:function(){return e.deleteResult()},variant:"outlined",style:{color:"#DD0505",borderColor:"#DD0505"},children:"Delete"})]})]})}function ut(e){var t=r.a.useState("who"),a=Object(u.a)(t,2),n=a[0],c=a[1],i=r.a.useState(e.addResultOpen.id?e.game.results.filter((function(t){return t.uuid===e.addResultOpen.id}))[0].date:new Date),s=Object(u.a)(i,2),o=s[0],l=s[1],d=r.a.useState(e.addResultOpen.id?e.game.results.filter((function(t){return t.uuid===e.addResultOpen.id}))[0].ranks:[]),j=Object(u.a)(d,2),b=j[0],h=j[1],O=r.a.useState(!1),p=Object(u.a)(O,2),m=p[0],x=p[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(be.a,{fullWidth:!0,maxWidth:"sm",open:e.addResultOpen.open,children:[e.addResultOpen.id?Object(y.jsx)(he.a,{children:"Edit result"}):Object(y.jsx)(he.a,{children:"New result"}),"who"===n?Object(y.jsx)(at,{players:e.players,setSelectedPlayers:h,selectedPlayers:b}):"when"===n?Object(y.jsx)(it,{setSelectedDate:l,selectedDate:o}):"ranks"===n?Object(y.jsx)(lt,{players:e.players,setSelectedPlayers:h,selectedPlayers:b}):Object(y.jsx)(f.a,{children:"ERROR"}),Object(y.jsx)(fe.a,{children:Object(y.jsxs)(de.a,{disableElevation:!0,variant:"contained",color:"primary",children:[Object(y.jsx)(U.a,{onClick:function(){return e.setAddResultOpen({id:void 0,open:!1})},children:"Cancel"}),e.addResultOpen.id&&Object(y.jsx)(U.a,{onClick:function(){return x(!0)},children:Object(y.jsx)(Be.a,{})}),Object(y.jsx)(U.a,{autoFocus:!0,disabled:"who"===n,onClick:function(){"when"===n?c("who"):"ranks"===n&&c("when")},children:Object(y.jsx)(ue.a,{})}),"ranks"===n?Object(y.jsx)(U.a,{autoFocus:!0,onClick:function(){return function(){var t=0,a=!1;if(b.forEach((function(e){0===t&&(t=e.rank),t!==e.rank&&(a=!0)})),a){var n=b.sort((function(e,t){return e.rank>t.rank?1:-1}));h(n);var r={date:o,ranks:b,uuid:Object(T.uuid)()};e.addResultOpen.id?e.addNotification("Result correctly edited","success"):e.addNotification("New result correctly added","success"),e.setAddResultOpen({id:void 0,open:!1}),e.addResult(r,e.addResultOpen.id)}else e.addNotification("Results need at least two different rank","error")}()},endIcon:Object(y.jsx)(Qe.a,{}),children:"Send"}):Object(y.jsx)(U.a,{autoFocus:!0,onClick:function(){return function(){if("who"===n)if(b.length<2)e.addNotification("Please select a least 2 players","error");else{c("when");var t=b.sort((function(t,a){return V(e.players,t.uuid).username>V(e.players,a.uuid).username?1:-1}));h(t)}else"when"===n&&c("ranks")}()},children:Object(y.jsx)(Ve.a,{})})]})})]}),m&&Object(y.jsx)(dt,{setDeleteResultOpen:x,deleteResult:function(){x(!1),e.setAddResultOpen({id:void 0,open:!1}),e.deleteResult(e.addResultOpen.id)}})]})}var jt=a(579),bt=a(578),ht=a(560),Ot=Object(b.a)((function(e){return Object(h.a)({root:{backgroundColor:"rgba(0,0,0,0.9)",marginLeft:e.spacing(3),marginBottom:e.spacing(1),border:"2px solid #FFFFFF",zIndex:0},first:{color:"#FFD700"},second:{color:"#C0C0C0"},third:{color:"#cd7f32"}})}));function pt(e){var t,a=Ot(),n="".concat(Math.round(e.score)),r="#FDFDFD";return e.deltaScore&&(n=e.score<0?"".concat(Math.round(e.score)):"+".concat(Math.round(e.score)),r=e.score<0?"#FF2020":"#10FFB0"),Object(y.jsx)(bt.a,{className:a.root,icon:(t=e.rank,1===t?Object(y.jsx)(ht.a,{className:a.first}):2===t?Object(y.jsx)(ht.a,{className:a.second}):3===t?Object(y.jsx)(ht.a,{className:a.third}):Object(y.jsx)(y.Fragment,{})),label:n,size:"small",variant:"outlined",style:{color:r}})}var mt=Object(b.a)((function(e){return Object(h.a)({Padding:{padding:e.spacing(2)},first:{color:"#FFD700"},second:{color:"#C0C0C0"},third:{color:"#cd7f32"},ColorPicker:{position:"absolute",zIndex:2}})}));function ft(e){var t=mt();return Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(L.a,{className:t.Padding,onClick:function(){return e.setAddResultOpen({id:e.result.uuid,open:!0})},children:Object(y.jsxs)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"stretch",spacing:1,children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"stretch",spacing:4,children:e.result.ranks.map((function(t){var a=e.playersRank.filter((function(e){return e.playerUuid===t.uuid}))[0],n="".concat(V(e.players,t.uuid).username," - New score: ").concat(Math.round(a.score));return Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(jt.a,{title:n,children:Object(y.jsx)(Y.a,{overlap:"circle",style:{borderColor:"rgba(0,0,0,0)"},anchorOrigin:{vertical:"top",horizontal:"right"},badgeContent:Object(y.jsx)(pt,{rank:t.rank,score:a.deltaScore,deltaScore:!0}),children:Object(y.jsx)(st.a,{alt:V(e.players,t.uuid).username,style:{backgroundColor:V(e.players,t.uuid).color},children:$(V(e.players,t.uuid))})})})})}))})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(f.a,{children:e.result.date.toLocaleString()})})]})})})}function xt(e){return Object(y.jsxs)(be.a,{open:!0,onClose:function(t,a){"clickaway"!==a&&e.setDeleteGameOpen(!1)},children:[Object(y.jsx)(he.a,{children:"Delete this game?"}),Object(y.jsx)(Oe.a,{children:Object(y.jsx)(pe.a,{children:"This will delete this game and all associated results."})}),Object(y.jsxs)(fe.a,{children:[Object(y.jsx)(U.a,{onClick:function(){return e.setDeleteGameOpen(!1)},autoFocus:!0,children:"Cancel"}),Object(y.jsx)(U.a,{onClick:function(){return e.deleteGame()},variant:"outlined",style:{color:"#DD0505",borderColor:"#DD0505"},children:"Delete"})]})]})}function gt(e){var t=r.a.useState(e.currentGamename),a=Object(u.a)(t,2),n=a[0],c=a[1];return Object(y.jsxs)(be.a,{open:!0,onClose:function(t,a){"clickaway"!==a&&e.setEditMode(!1)},children:[Object(y.jsx)(he.a,{children:"Change the gamename"}),Object(y.jsx)(Oe.a,{children:Object(y.jsx)(pe.a,{children:Object(y.jsx)(me.a,{value:n,onChange:function(e){return c(e.target.value)}})})}),Object(y.jsxs)(fe.a,{children:[Object(y.jsx)(U.a,{onClick:function(){return e.setEditMode(!1)},autoFocus:!0,children:"Cancel"}),Object(y.jsx)(U.a,{onClick:function(){e.handleChangeGamename(n),e.setEditMode(!1)},variant:"outlined",children:"Update"})]})]})}var yt=a(202),vt=a(287),kt=a(564),Ct=a(565),wt=a(280),Rt=a(281),St=a(133),Dt=a(129),Nt=a(566);function Pt(e){var t,a=function(e,t){var a={},n={};return e.forEach((function(e){t&&e.uuid===t?(a[e.uuid]=1,n[e.uuid]=4):t?(a[e.uuid]=.7,n[e.uuid]=2):(a[e.uuid]=1,n[e.uuid]=2)})),{opacity:a,width:n}},r=Object(n.useState)(a(e.game.players,"")),c=Object(u.a)(r,2),i=c[0],s=c[1],o=function(t,a,n){var r=t.playersRank.filter((function(e){return e.playerUuid===a}))[0],c=V(e.players,a);if(n){var i=r.deltaScore<0?"#FF2020":"#10FFB0",s=r.deltaScore<0?"".concat(Math.round(r.deltaScore)):"+".concat(Math.round(r.deltaScore));return Object(y.jsxs)(z.a,{container:!0,item:!0,direction:"row",justify:"space-between",alignContent:"center",alignItems:"baseline",children:[Object(y.jsx)(z.a,{item:!0,xs:5,children:Object(y.jsx)(bt.a,{label:c.username,style:{backgroundColor:c.color,color:"#FFFFFF"}})}),Object(y.jsx)(z.a,{item:!0,xs:3,children:Math.round(r.score)}),Object(y.jsxs)(z.a,{item:!0,xs:1,style:{color:i},children:["(",s,")"]})]},c.uuid)}return Object(y.jsxs)(z.a,{container:!0,item:!0,direction:"row",justify:"space-between",alignContent:"center",alignItems:"baseline",children:[Object(y.jsx)(z.a,{item:!0,xs:5,children:Object(y.jsx)(bt.a,{label:c.username,variant:"outlined",style:{borderColor:c.color}})}),Object(y.jsx)(z.a,{item:!0,xs:3,children:Math.round(r.score)}),Object(y.jsx)(z.a,{item:!0,xs:1})]},c.uuid)},l=function(t,a){var n=e.game.rankHistory.filter((function(e){return e.resultUuid===t.uuid}))[0],r=[],c=[];return t.ranks.forEach((function(e){return r.push(e.uuid)})),e.game.players.filter((function(e){return r.indexOf(e.uuid)<=-1})).forEach((function(e){return c.push(e.uuid)})),[r.map((function(e){return o(n,e,!0)})),c.map((function(e){return o(n,e,!1)}))]};return e.game.rankHistory.length&&e.game.players.length?Object(y.jsx)("div",{style:{width:"100%"},children:Object(y.jsx)(kt.a,{width:"100%",height:400,children:Object(y.jsxs)(Ct.a,{height:400,data:ne(e.game.rankHistory),margin:{top:20,right:20,left:20,bottom:20},children:[Object(y.jsx)(wt.a,{dataKey:"resultUuid",tick:!1}),Object(y.jsx)(Rt.a,{yAxisId:1,domain:["dataMin - 50","dataMax + 50"]}),Object(y.jsx)(St.a,{content:function(t){var a=t.active,n=t.payload,r=t.label;return a&&n&&n.length&&r?Object(y.jsxs)(yt.a,{variant:"outlined",style:{paddingTop:zt.spacing(2),paddingBottom:zt.spacing(2),paddingLeft:zt.spacing(2),paddingRight:zt.spacing(4)},children:[Object(y.jsx)(f.a,{children:r?X(e.game.results,r).date.toLocaleString():"Start"}),Object(y.jsx)(z.a,{container:!0,direction:"column",spacing:1,children:l(X(e.game.results,r))})]}):null}}),Object(y.jsx)(Dt.a,{verticalAlign:"top",content:function(){return Object(y.jsx)(z.a,{container:!0,direction:"row",justify:"flex-start",spacing:5,style:{paddingBottom:zt.spacing(2)},children:e.game.rankHistory[e.game.rankHistory.length-1].playersRank.sort((function(e,t){return e.score<t.score?1:-1})).map((function(t,n){var r=V(e.players,t.playerUuid);return Object(y.jsx)(z.a,{item:!0,onMouseEnter:function(){return n=t.playerUuid,void s(a(e.game.players,n));var n},onMouseLeave:function(){s(a(e.game.players,""))},children:Object(y.jsx)(jt.a,{title:r.username,children:Object(y.jsx)(Y.a,{overlap:"circle",style:{borderColor:"rgba(0,0,0,0)"},anchorOrigin:{vertical:"top",horizontal:"right"},badgeContent:Object(y.jsx)(pt,{rank:n+1,score:t.score,deltaScore:!1}),children:Object(y.jsx)(st.a,{alt:r.username,style:{backgroundColor:r.color},children:$(r)})})})},n)}))})}}),Object(y.jsx)(Nt.a,{stroke:"#f5f5f5",strokeDasharray:"3 3"}),(t=e.game.players,t.map((function(t){return Object(y.jsx)(vt.a,{type:"natural",strokeWidth:i.width[t.uuid],strokeOpacity:i.opacity[t.uuid],dataKey:t.uuid,stroke:V(e.players,t.uuid).color,yAxisId:1},t.uuid)}))).flat()]})})}):Object(y.jsx)(y.Fragment,{})}var Ft=Object(b.a)((function(e){return Object(h.a)({Main:{padding:e.spacing(2),marginBottom:e.spacing(1)},Name:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),borderRadius:e.spacing(1),margin:"0px",border:"1px solid rgba(0,0,0,0.1)",width:e.spacing(17)}})}));function Et(e){var t=Ft(),a=r.a.useState({id:void 0,open:!1}),n=Object(u.a)(a,2),c=n[0],i=n[1],s=r.a.useState(e.edit),o=Object(u.a)(s,2),l=o[0],d=o[1],j=r.a.useState(!1),b=Object(u.a)(j,2),h=b[0],O=b[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(L.a,{className:t.Main,children:[Object(y.jsxs)(z.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:1,children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsxs)(z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"baseline",children:[Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(Z.a,{size:"medium",onClick:function(){return e.setCurrentGame({game:void 0,edit:!1})},children:Object(y.jsx)(ue.a,{})})})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsxs)(de.a,{disableElevation:!0,variant:"contained",color:"primary",children:[Object(y.jsx)(U.a,{endIcon:Object(y.jsx)(Qe.a,{}),onClick:function(){e.players.length<2?e.addNotification("You must add at least 2 players before","error"):i({id:void 0,open:!0})},children:"New result"}),Object(y.jsx)(U.a,{onClick:function(){return d(!0)},children:Object(y.jsx)(je.a,{})}),Object(y.jsx)(U.a,{onClick:function(){return O(!0)},children:Object(y.jsx)(Be.a,{})})]})})]})}),Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(f.a,{color:"primary",variant:"h3",align:"center",children:e.game.gamename})}),e.game.players&&Object(y.jsx)(z.a,{item:!0,children:Object(y.jsx)(Pt,{players:e.players,game:e.game})})]}),c.open?Object(y.jsx)(ut,{game:e.game,players:e.players,addResultOpen:c,setAddResultOpen:i,addNotification:e.addNotification,addResult:function(t,a){var n=Object.assign({},e.game);if(n.results?a&&(n.results=n.results.filter((function(e){return e.uuid!==a}))):n.results=[],n.results.push(t),n.players=ie(n),n.rankHistory=ee(n),n.players){var r=n.players.sort((function(e,t){return e.rank>t.rank?1:-1}));n.players=r}e.changeGameData(n,e.game.uuid)},deleteResult:function(t){var a=Object.assign({},e.game);a.results=a.results.filter((function(e){return e.uuid!==t})),a.players=ie(a),a.rankHistory=ee(a),e.addNotification("Result correctly deleted","success"),e.changeGameData(a,e.game.uuid)}}):Object(y.jsx)(y.Fragment,{})]}),Object(y.jsx)(z.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:1,children:function(){if(e.game.results)return e.game.results.sort((function(e,t){return e.date<t.date?1:-1})).map((function(t){var a=e.game.rankHistory.filter((function(e){return e.resultUuid===t.uuid}))[0].playersRank;return Object(y.jsx)(ft,{result:t,players:e.players,setAddResultOpen:i,playersRank:a})}))}()}),h&&Object(y.jsx)(xt,{setDeleteGameOpen:O,deleteGame:function(){e.addNotification("Game correctly deleted","success"),O(!1),e.deleteGame(e.game.uuid)}}),l&&Object(y.jsx)(gt,{setEditMode:d,handleChangeGamename:function(t){var a=Object.assign({},e.game);a.gamename=t,e.changeGameData(a,e.game.uuid)},currentGamename:e.game.gamename})]})}function It(e){var t,a=Object(n.useState)({game:void 0,edit:!1}),r=Object(u.a)(a,2),c=r[0],i=r[1],s=function(t,a){var n=e.games;n.map((function(e){return e.uuid===a?Object.assign(e,t):e})),e.setGames(n)};return Object(y.jsx)(B.a,{children:c.game?Object(y.jsx)(Et,{game:c.game,edit:c.edit,changeGameData:s,setCurrentGame:i,players:e.players,addNotification:e.addNotification,deleteGame:function(t){var a=e.games.filter((function(e){return e.uuid!==t}));i({game:void 0,edit:!1}),e.setGames(a),e.addNotification("Game correctly deleted","success")}}):Object(y.jsxs)(z.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:1,children:[Object(y.jsx)(Ze,{games:e.games,setGames:e.setGames,setCurrentGame:i}),(t=e.games,t.map((function(e){return Object(y.jsx)(qe,{game:e,changeGameData:s,setCurrentGame:i})})))]})})}function Gt(e){return function(e){switch(e.currentPage){case"players":return Object(y.jsx)(ke,{players:e.players,games:e.games,setPlayers:e.setPlayers,addNotification:e.addNotification});case"settings":return Object(y.jsx)(Ke,{handlerSaveData:e.handlerSaveData,handlerLoadData:e.handlerLoadData,handlerResetData:e.handlerResetData});case"games":return Object(y.jsx)(It,{games:e.games,setGames:e.setGames,players:e.players,addNotification:e.addNotification});default:return Object(y.jsx)(y.Fragment,{})}}(e)}var _t=a(574),Mt=a(570);function At(e){return Object(y.jsx)(Mt.a,Object(s.a)({elevation:6,variant:"filled"},e))}function Bt(e){var t=function(t,a){"clickaway"!==a&&e.setNotification({open:!1})};return e.notification.open?Object(y.jsx)(_t.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:e.notification.open,autoHideDuration:6e3,onClose:t,children:Object(y.jsx)(At,{severity:e.notification.severity?e.notification.severity:"info",onClose:t,children:e.notification.text})}):Object(y.jsx)(y.Fragment,{})}var zt=Object(j.a)({palette:{error:{main:"#DD0505"},primary:{main:"#3f5efb"},secondary:{main:"#d2d2d2"}}}),Lt=Object(b.a)((function(e){return Object(h.a)({App:{paddingBottom:e.spacing(15)}})}));var Ut=function(){var e=r.a.useState("games"),t=Object(u.a)(e,2),n=t[0],c=t[1],i=r.a.useState([]),o=Object(u.a)(i,2),j=o[0],b=o[1],h=r.a.useState([]),p=Object(u.a)(h,2),m=p[0],f=p[1],x=r.a.useState({open:!1}),g=Object(u.a)(x,2),v=g[0],C=g[1],w=Lt(),R=function(e,t){C({open:!0,text:e,severity:t||void 0})},S={currentPage:n,games:m,setGames:f,players:j,setPlayers:b,handlerSaveData:function(e){var t=JSON.stringify({players:j,games:m.map((function(e){return{uuid:e.uuid,gamename:e.gamename,results:e.results}}))});if(e)try{localStorage.setItem("data",t),R("Data saved as cookies","success")}catch(c){R("Error when saving as cookies","error")}else{var n=a(480),r=new Blob([t],{type:"application/json"});n.saveAs(r,"save_game-ranking.json")}},handlerLoadData:function(e){if(e)try{var t;e.preventDefault();var a=new FileReader;a.onload=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===(a=t.target)||void 0===a?void 0:a.result)&&(n=JSON.parse(t.target.result),b(n.players),r=n.games.map((function(e){return ce(e)})),f(r),R("Data correctly loaded","success"),c("games"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(null===(t=e.target)||void 0===t?void 0:t.files)&&a.readAsText(e.target.files[0])}catch(i){R("Error when loading data","error")}else if(localStorage.getItem("data")){var n=JSON.parse(localStorage.getItem("data"));b(n.players);var r=n.games.map((function(e){return ce(e)}));f(r),R("Data correctly loaded","success"),c("games")}else R("Data not found in cookies","warning")},handlerResetData:function(e){e?(localStorage.removeItem("data"),R("Cookie correctly removed","success")):(b([]),f([]),R("Current session correctly reinitiliazed","success"))},addNotification:R},D={handleChangeCurrentPage:function(e,t){c(t)},currentPage:n},N={notification:v,setNotification:C};return Object(y.jsxs)(O.a,{theme:zt,children:[Object(y.jsxs)("div",{className:w.App,children:[Object(y.jsx)(k,{}),Object(y.jsx)(Gt,Object(s.a)({},S)),Object(y.jsx)(A,Object(s.a)({},D))]}),Object(y.jsx)(Bt,Object(s.a)({},N))]})};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(Ut,{})}),document.getElementById("root"))}},[[481,1,2]]]);
//# sourceMappingURL=main.0886896b.chunk.js.map