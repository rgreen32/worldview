(this.webpackJsonpreactclient=this.webpackJsonpreactclient||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),c=n(14),i=n.n(c),r=n(5),s=n.n(r),l=n(33),u=n(3),d=n(134),m=n(135),p=n(131),f=n(34),w=n.n(f),b=n(35),g=n(64),h=n(0),O=n(25),j=n(59),y=n(60),E=n(11);function v(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(),r=Object(u.a)(i,2),s=r[0],l=r[1],d=Object(a.useState)(),m=Object(u.a)(d,2),p=m[0],f=m[1],w=Object(a.useState)(),v=Object(u.a)(w,2),k=(v[0],v[1],Object(a.useState)(!1)),x=Object(u.a)(k,2),M=x[0],S=x[1],z=Object(a.useState)(),F=Object(u.a)(z,2),C=F[0],I=F[1],_=Object(a.useState)(null),T=Object(u.a)(_,2),N=T[0],H=T[1],R=Object(a.useState)(null),P=Object(u.a)(R,2),W=P[0],B=P[1],L=Object(a.useState)(),D=Object(u.a)(L,2),Q=D[0],G=D[1],U=Object(a.useState)(!1),V=Object(u.a)(U,2),A=V[0],J=V[1],q=Object(a.useState)(null),K=Object(u.a)(q,2),Z=K[0],$=K[1],X=Object(a.useState)(null),Y=Object(u.a)(X,2),ee=(Y[0],Y[1]);return Object(a.useEffect)((function(){var t=new h.fb;t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio);var n=document.getElementById("globeContainer");n.innerHTML="",n.appendChild(t.domElement);var a=new h.O,o=new h.K,i=Object(b.a)(Object(b.a)({},O.b),{},{backside:!1,coefficient:.75,color:"gold",size:1,power:.5}),r=new j.a(o,t.domElement);r.autoRotate=!0;new y.a(t,a,o);var s={},u=[],d=0,m=(new g.a).globeImageUrl("map.jpg").bumpImageUrl("bumpmap.jpg").customLayerData(e.markers).customThreeObject((function(e){var t=new h.E(new h.T(e.radius),new h.G({color:e.color})),n=Object(O.a)(t.geometry,i);return t.add(n),t})).customThreeObjectUpdate((function(t,n){var a=m.getCoords(n.lat,n.lng,n.alt),o=Object.assign({},a);n.lat>=0?o.y=o.y+300:o.y=o.y-300;var c=new E.Tween(o).to({x:a.x,y:a.y,z:a.z},120).easing(E.Easing.Quadratic.Out).on("update",(function(){Object.assign(t.position,o)})).on("complete",(function(){d<u.length?(u[d].start(),d++):(d=0,u=[])}));u.push(c),0==d&&(c.start(),d++),s[n.id]=t,t.cursor="pointer",t.on("click",(function(t){e.setFocusedMarker(t.data.target.__data.id),r.autoRotate=!1,r.dampingFactor=0,1!=A&&S(!0)})),t.on("mouseover",(function(e){e.target.scale.set(1.5,1.5,1.5)})),t.on("mouseout",(function(e){e.data.target.scale.set(1,1,1)}))})).onReady((function(){e.setLoadingGlobe(!1)}));c(m),G(s);var p=new h.T(101,75,75),w=new h.G({transparent:!0,map:h.t.loadTexture("clouds.png")});w.opacity=.3;var v=new h.E(p,w);ee(v),a.add(m),a.add(v);var k=new h.k(16777215,.5);k.position.set(0,1,0),a.add(k);var x=new h.k(16777215,.75);x.position.set(0,-1,0),a.add(x);var M=new h.k(16777215,.5);M.position.set(-10,0,0),a.add(M);var z=new h.k(16777215,.5);z.position.set(10,0,0),a.add(z);var F=new h.k(16777215,.75);F.position.set(0,10,-10),a.add(F);var C=new h.k(16777215,.75);C.position.set(0,10,10),a.add(C),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),o.position.set(-415.2971330601325,157.35740158480883,-14.427464555977274),f(o),r.autoRotateSpeed=1,r.enableDamping=!0,r.enablePan=!1,r.maxDistance=800,r.zoomSpeed=.8,r.rotateSpeed=1.5,r.minZoom=300,r.saveState(),I(r),window.addEventListener("resize",(function(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}),!1),function e(n){requestAnimationFrame(e),Object(E.update)(n),["x","y","z"].forEach((function(e){v.rotation[e]+=Math.random()/1e3})),r.update(),t.render(a,o)}(),l(a)}),[]),Object(a.useEffect)((function(){M&&$({x:p.position.x,y:p.position.y,z:p.position.z})}),[M]),Object(a.useEffect)((function(){null!=e.hoverFocusedMarker?(Q[e.hoverFocusedMarker].scale.set(1.5,1.5,1.5),H(Q[e.hoverFocusedMarker])):null==e.hoverFocusedMarker&&null!=N&&(N.scale.set(1,1,1),H(null))}),[e.hoverFocusedMarker]),Object(a.useEffect)((function(){if(null!=e.focusedMarker){Q[e.focusedMarker]!=W&&null!=W&&W.scale.set(1,1,1);var t=Q[e.focusedMarker];t.scale.set(1.5,1.5,1.5);var n=o.getCoords(t.__data.lat,t.__data.lng,1.1),a={x:p.position.x,y:p.position.y,z:p.position.z};1!=A&&(J(!0),$({x:a.x,y:a.y,z:a.z}));new E.Tween(a).to({x:n.x,y:n.y,z:n.z},1600).easing(E.Easing.Quadratic.Out).on("update",(function(){p.position.set(a.x,a.y,a.z)})).on("complete",(function(){e.setVisible(!0),e.setImage(t.__data.image),e.setImageCaption(t.__data.unsplash_profile)})).start();C.dampingFactor=0,B(t)}else if(null==e.focusedMarker&&null!=W){W.scale.set(1,1,1),C.autoRotate=!0,J(!1);var c={x:p.position.x,y:p.position.y,z:p.position.z};new E.Tween(c).to({x:Z.x,y:Z.y,z:Z.z},1e3).easing(E.Easing.Quadratic.Out).on("update",(function(){p.position.set(c.x,c.y,c.z)})).start();C.dampingFactor=.05}}),[e.focusedMarker]),null!=e.focusedMarker&&Q[e.focusedMarker].scale.set(1.5,1.5,1.5),Object(a.useEffect)((function(){o&&o.customLayerData(e.markers)}),[e.markers]),Object(a.useEffect)((function(){if(1==e.enhanced){var t=new h.S(600,15,15),n=new h.F({side:h.b,map:h.t.loadTexture("background.png")}),a=new h.E(t,n);s.add(a)}}),[e.enhanced]),null}var k=n(132),x=n(133),M=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=(n[0],n[1],Object(a.useState)(!1)),i=Object(u.a)(c,2),r=(i[0],i[1]),s=Object(a.useState)([]),l=Object(u.a)(s,2),d=l[0],m=l[1],f=Object(a.useState)([]),w=Object(u.a)(f,2),b=w[0],g=w[1],h=Object(a.useState)(0),O=Object(u.a)(h,2),j=O[0],y=O[1],v=document.getElementById("refresh"),M={x:0},S=new E.Tween(M).to({x:360},1e3).easing(E.Easing.Quadratic.Out).on("update",(function(){v.style.setProperty("transform","rotate(".concat(M.x,"deg)"))})),z=new E.Tween(M).to({x:720},1e3).easing(E.Easing.Quadratic.Out).on("update",(function(){v.style.setProperty("transform","rotate(".concat(M.x,"deg)"))}));return Object(a.useEffect)((function(){for(var t=e.images.slice(),n=Math.floor(t.length/5),a=[],o=0;o<n;o++)a.push(t.splice(0,5));t>0&&a.push(t),m(a),r(!0),g(a[0]),y(0)}),[e.images]),Object(a.useEffect)((function(){null!=e.focusedMarker&&d.forEach((function(t,n){t.forEach((function(t,a){e.focusedMarker==t.id&&(g(d[n]),y(n))}))}))}),[e.focusedMarker]),o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{style:{margin:0,position:"absolute",minWidth:"200px",height:"100%"},xs:3,className:"text-center"},o.a.createElement("div",{className:"mt-3"},o.a.createElement("img",{id:"refresh",className:"mr-3",style:{cursor:"pointer"},onMouseEnter:function(){S.start()},onClick:function(){e.setFetchingData(!0),z.start()},src:"refresh.png"}),d.map((function(e,t){return o.a.createElement(k.a,{key:t,color:"light",outline:t!=j,style:{borderRadius:0},onClick:function(){g(d[t]),y(t)}},t+1)}))),b.map((function(t,n){return o.a.createElement(x.a,{key:n,style:{padding:0,backgroundColor:"black"},className:"mt-3",body:!0},o.a.createElement(k.a,{color:"light",outline:t.id!=e.focusedMarker,style:{padding:0,width:"100%",minHeight:"100px",height:"100%",textAlign:"right",borderRadius:0,borderWidth:"2px"},onClick:function(){t.id!=e.focusedMarker?e.setFocusedMarker(t.id):(e.setFocusedMarker(null),e.setVisible(!1))},onMouseEnter:function(){e.setHoverFocusedMarker(t.id)},onMouseOut:function(){e.setHoverFocusedMarker(null)}},o.a.createElement("h5",{className:"mt-2 mr-2",style:{}},t.location),o.a.createElement("h6",{className:"my-2 mr-2",style:{}},"By ",t.userName)))}))))},S=n(61),z=n.n(S),F=n(62),C=n.n(F),I=n(63),_=n(37);n(122);var T=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!0),r=Object(u.a)(i,2),f=r[0],b=r[1],g=Object(a.useState)(null),h=Object(u.a)(g,2),O=h[0],j=h[1],y=Object(a.useState)(null),k=Object(u.a)(y,2),x=k[0],S=k[1],F=Object(a.useState)(!1),T=Object(u.a)(F,2),N=T[0],H=T[1],R=Object(a.useState)(null),P=Object(u.a)(R,2),W=P[0],B=P[1],L=Object(a.useState)(null),D=Object(u.a)(L,2),Q=D[0],G=D[1],U=Object(a.useState)(!0),V=Object(u.a)(U,2),A=V[0],J=V[1],q=Object(a.useState)(!1),K=Object(u.a)(q,2),Z=K[0],$=K[1],X=Object(a.useState)(!1),Y=Object(u.a)(X,2),ee=Y[0],te=Y[1],ne=Object(a.useState)(!1),ae=Object(u.a)(ne,2),oe=ae[0],ce=ae[1];return _.a.configure(),Object(a.useEffect)((function(){A&&(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://bloosky.duckdns.org:5000/images?count=15").then((function(e){var t=e.data;t.forEach((function(e,t){e.id=t,e.size=.04,e.color="#ffe34c",e.alt=.02,e.radius=1.7})),c(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),_.a.error("Couldn't get image list. :(");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()(),J(!1))}),[A]),o.a.createElement(o.a.Fragment,null,o.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            #logo {\n              transition: transform 0.2s;\n            }\n      \n            #logo:hover {\n              transform: scale(\n                1.5\n              ); \n            }\n            #icon{\n              position: relative;\n            }\n            #icon:hover {\n              cursor: pointer;\n    "}}),o.a.createElement("a",{href:"https://raygreen.dev",style:{pointerEvents:"all",zIndex:50,position:"fixed",top:"25px",left:"30px"},className:"navbar-brand"},o.a.createElement("img",{id:"logo",height:"40px",width:"40px",src:"logo.png"})),null!=O&&o.a.createElement(z.a,{imgs:[{src:W,caption:o.a.createElement("a",{href:Q,style:{color:"white"},target:"_blank"},Q)}],isOpen:N,showCloseBtn:!1,backdropCloseable:!0,onRenderComplete:function(){var e=document.getElementById("icon");if(e){var t={y:0};new E.Tween(t).to({y:30},1200).easing(E.Easing.Quadratic.In).repeat(3).yoyo(!0).on("update",(function(){e.style.setProperty("top","".concat(t.y,"px"))})).start()}},showImgCount:!1,actionElement:oe?o.a.createElement(d.a,{color:"secondary"}):o.a.createElement("i",{id:"icon",className:"icon fa fa-arrow-down fa-2x",onClick:Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{w.a.post("".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"/download"),{image_id:n[O].image_id}),ce(!0),Object(I.saveAs)(n[O].full_image,n[O].location+".jpg",(function(){ce(!1)}))}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))}),onClickImg:function(){H(!1),j(null),B(null)},onClose:function(){H(!1),j(null),B(null)}}),o.a.createElement(v,{markers:n,setFocusedMarker:j,focusedMarker:O,hoverFocusedMarker:x,setVisible:H,setImage:B,setImageCaption:G,setLoadingGlobe:b,enhanced:ee}),o.a.createElement(m.a,{style:{margin:0,pointerEvents:"all"},className:"justify-content-end"},0==n.length||f?A?o.a.createElement(p.a,{style:{margin:0,position:"absolute",minWidth:"200px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},sm:3,className:"text-center"},o.a.createElement(d.a,{color:"secondary"})):o.a.createElement(o.a.Fragment,null):o.a.createElement(M,{images:n,setFocusedMarker:j,focusedMarker:O,setHoverFocusedMarker:S,setVisible:H,setImage:B,setFetchingData:J})),o.a.createElement(m.a,{style:{position:"absolute",height:"100%",width:"100%",pointerEvents:"none"},className:"justify-content-center align-items-center"},o.a.createElement(p.a,{className:"text-center"},f&&o.a.createElement(d.a,{color:"secondary"}))),o.a.createElement("div",{style:{color:"white",position:"absolute",left:40,bottom:40,pointerEvents:"all",cursor:"pointer"},onMouseEnter:function(){$(!0)},onMouseOut:function(){$(!1)},onClick:function(){te(!0)}},o.a.createElement("h1",null,"Enhance"),Z&&!f&&o.a.createElement(C.a,null)),o.a.createElement("h6",{style:{color:"white",position:"absolute",left:30,top:100}},"Powered by Unsplash.com"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(123);i.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,n){e.exports=n(124)}},[[71,1,2]]]);
//# sourceMappingURL=main.f2c504d7.chunk.js.map