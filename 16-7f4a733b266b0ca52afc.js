(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Dhhg:function(t,e,n){"use strict";n.r(e),n.d(e,"Cursor",(function(){return i}));var r=n("z/o8"),o=n("dlLX"),u={x:0,y:0};function i(t){var e={el:t};e.el.style.opacity=0;var n=e.el.getBoundingClientRect(),i={tx:{previous:0,current:0,amt:.2},ty:{previous:0,current:0,amt:.2}};window.addEventListener("mousemove",(function t(){i.tx.previous=i.tx.current=u.x-n.width/2,i.ty.previous=i.ty.previous=u.y-n.height/2,r.a.to(e.el,{duration:.9,ease:"Power3.easeOut",opacity:1}),requestAnimationFrame((function(){return function t(){for(var r in i.tx.current=u.x-n.width/2,i.ty.current=u.y-n.height/2,i)i[r].previous=Object(o.c)(i[r].previous,i[r].current,i[r].amt);e.el.style.transform="translateX("+i.tx.previous+"px) translateY("+i.ty.previous+"px)",requestAnimationFrame((function(){return t()}))}()})),window.removeEventListener("mousemove",t)}))}window.addEventListener("mousemove",(function(t){return u=Object(o.b)(t)}))},dlLX:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return i}));var r=function(t,e,n,r,o){return(t-e)*(o-r)/(n-e)+r},o=function(t,e,n){return(1-n)*t+n*e},u=function(t,e,n){return t<=e?e:t>=n?n:t},i=function(t){var e=0,n=0;return t||(t=window.event),t.pageX||t.pageY?(e=t.pageX,n=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:e,y:n}}}}]);
//# sourceMappingURL=16-7f4a733b266b0ca52afc.js.map