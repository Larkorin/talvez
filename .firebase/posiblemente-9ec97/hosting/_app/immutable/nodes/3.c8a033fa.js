import{d as G}from"../chunks/environment.c65a56ab.js";import{s as Q,d as s,n as R}from"../chunks/scheduler.4b94184d.js";import{S as U,i as W,d as F,v as X,j as l,s as y,o as E,E as Z,k as i,g,c as C,l as D,B as w,p as k,m as b,C as e,a as V}from"../chunks/index.53cef206.js";const tt=G,et=!0,lt=Object.freeze(Object.defineProperty({__proto__:null,csr:tt,prerender:et},Symbol.toStringTag,{value:"Module"})),r="src/routes/about/+page.svelte";function H($){let n,_,t,o,h="About this app",A,d,j,c,Y="SvelteKit",O,q,m,z="npm create svelte@latest",B,v,I=`The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.`,J,p,K,u,L="Sverdle",M;const N={c:function(){n=l("meta"),_=y(),t=l("div"),o=l("h1"),o.textContent=h,A=y(),d=l("p"),j=E("This is a "),c=l("a"),c.textContent=Y,O=E(` app. You can make your own by typing the
		following into your command line and following the prompts:`),q=y(),m=l("pre"),m.textContent=z,B=y(),v=l("p"),v.textContent=I,J=y(),p=l("p"),K=E("The "),u=l("a"),u.textContent=L,M=E(` page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!`),this.h()},l:function(f){const x=Z("svelte-1ds1qyu",document.head);n=i(x,"META",{name:!0,content:!0}),x.forEach(g),_=C(f),t=i(f,"DIV",{class:!0});var a=D(t);o=i(a,"H1",{["data-svelte-h"]:!0}),w(o)!=="svelte-4vqpjo"&&(o.textContent=h),A=C(a),d=i(a,"P",{});var T=D(d);j=k(T,"This is a "),c=i(T,"A",{href:!0,["data-svelte-h"]:!0}),w(c)!=="svelte-3dmc7m"&&(c.textContent=Y),O=k(T,` app. You can make your own by typing the
		following into your command line and following the prompts:`),T.forEach(g),q=C(a),m=i(a,"PRE",{["data-svelte-h"]:!0}),w(m)!=="svelte-rl9ig3"&&(m.textContent=z),B=C(a),v=i(a,"P",{["data-svelte-h"]:!0}),w(v)!=="svelte-1c6umo1"&&(v.textContent=I),J=C(a),p=i(a,"P",{});var P=D(p);K=k(P,"The "),u=i(P,"A",{href:!0,["data-svelte-h"]:!0}),w(u)!=="svelte-1mtf8rh"&&(u.textContent=L),M=k(P,` page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!`),P.forEach(g),a.forEach(g),this.h()},h:function(){document.title="About",b(n,"name","description"),b(n,"content","About this app"),s(n,r,2,1,37),s(o,r,6,1,133),b(c,"href","https://kit.svelte.dev"),s(c,r,9,12,175),s(d,r,8,1,159),s(m,r,13,1,333),s(v,r,15,1,371),b(u,"href","/sverdle"),s(u,r,22,6,630),s(p,r,21,1,620),b(t,"class","text-column"),s(t,r,5,0,106)},m:function(f,x){e(document.head,n),V(f,_,x),V(f,t,x),e(t,o),e(t,A),e(t,d),e(d,j),e(d,c),e(d,O),e(t,q),e(t,m),e(t,B),e(t,v),e(t,J),e(t,p),e(p,K),e(p,u),e(p,M)},p:R,i:R,o:R,d:function(f){f&&(g(_),g(t)),g(n)}};return F("SvelteRegisterBlock",{block:N,id:H.name,type:"component",source:"",ctx:$}),N}function nt($,n){let{$$slots:_={},$$scope:t}=n;X("Page",_,[]);const o=[];return Object.keys(n).forEach(h=>{!~o.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<Page> was created with unknown prop '${h}'`)}),[]}class it extends U{constructor(n){super(n),W(this,n,nt,H,Q,{}),F("SvelteRegisterComponent",{component:this,tagName:"Page",options:n,id:H.name})}}export{it as component,lt as universal};