(this["webpackJsonpweb-push-sender"]=this["webpackJsonpweb-push-sender"]||[]).push([[0],{52:function(e,t,n){e.exports=n(74)},57:function(e,t,n){},58:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),s=n.n(o),r=(n(57),n(17)),c=n(14),l=n(26),u=n(27),m=n(16),h=n(28),d=(n(58),n(99)),b=n(103),f=n(104),g=n(59);n(69);g.initializeApp({apiKey:"AIzaSyBorif13n91ElwK4iDewJcTFmrgqDnmu_c",authDomain:"web-push-sender-backend.firebaseapp.com",databaseURL:"https://web-push-sender-backend.firebaseio.com",projectId:"web-push-sender-backend"});var p=g.functions(),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={message:""},n.setMessage=n.setMessage.bind(Object(m.a)(n)),n.sendNotification=n.sendNotification.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"setMessage",value:function(e){this.setState({message:e.target.value})}},{key:"sendNotification",value:function(e){var t=this,n=localStorage.getItem("token"),a=JSON.parse(n),i={userAuth:a.userAuth,publicKey:a.userPublicKey,endpoint:a.endpoint,message:this.state.message};p.httpsCallable("sendNotification")(i).then((function(e){console.log("Notification sent successfully...")})).catch((function(e){var t=e.code,n=e.message,a=e.details;console.log("Error sending notification: ",t,n,a)})).finally((function(){t.setState({message:""})}))}},{key:"render",value:function(){return i.a.createElement(d.a,{fixed:!0},i.a.createElement("div",null,i.a.createElement(b.a,{id:"outlined-basic",label:"Your message here",variant:"outlined",value:this.state.message,onChange:this.setMessage})),i.a.createElement("br",null),i.a.createElement(f.a,{variant:"extended",color:"primary",onClick:this.sendNotification},"Send Notification"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h4",null,"If you fail to receive notification, the token might have expired. Delete the token from ",i.a.createElement("b",null,"localStorage")," and reset the permissions for Notification."))}}]),t}(i.a.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"Header"},"Easy Web Push Notfications Demo"))}}]),t}(i.a.Component),E=n(46),y=function(e){function t(){var e;Object(r.a)(this,t),e=Object(l.a)(this,Object(u.a)(t).call(this));var n=!!localStorage.getItem("token");return e.state={isRegistered:n},e.register=e.register.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"register",value:function(){var e=this;E.a.requestPermissionAndGetToken("BNqEgHEqLOmF_B5rAkjwbFiTr6k5HzthWYul3UmorHOKXeXubI1D0oRw-nMN30ju6KTle2b_q9vNY1LAFtCz9B8").then((function(t){console.log("Token is : \n"+JSON.stringify(t)),localStorage.setItem("token",JSON.stringify(t)),e.setState({isRegistered:!0})})).catch((function(e){console.log("Registration Failed"+e)}))}},{key:"render",value:function(){var e;return e=this.state.isRegistered?i.a.createElement(v,null):i.a.createElement("div",null,i.a.createElement("h3",null,"Seems like you don't have the permission yet, please click the button below and allow Notification Permissions!"),i.a.createElement(f.a,{variant:"extended",color:"primary",onClick:this.register},"Register")),i.a.createElement(d.a,{className:"App"},i.a.createElement(k,null),e)}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.d3e03264.chunk.js.map