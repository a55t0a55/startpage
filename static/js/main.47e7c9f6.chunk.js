(this.webpackJsonpstartpage=this.webpackJsonpstartpage||[]).push([[0],{164:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(53),r=c.n(n),i=(c(60),c(61),c(0)),j=function(){return Object(i.jsxs)("section",{className:"linkBlock1",children:[Object(i.jsx)("h3",{children:"Work"}),Object(i.jsxs)("ul",{className:"linkList",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://swedbank.lt",children:"Swedbank"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://gmail.com",children:"Gmail"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://vmi.lt",children:"Vmi"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://sodra.lt",children:"Sodra"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://web.trafi.com/lt/vilnius",children:"Trafi"})})]})]})},l=function(){return Object(i.jsxs)("section",{className:"linkBlock2",children:[Object(i.jsx)("h3",{children:"Entertainment"}),Object(i.jsxs)("ul",{className:"linkList",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.youtube.com",children:"Youtube"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.4chan.org",children:"4chan"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.420chan.org",children:"420chan"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.370chan.lt",children:"370chan"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.reddit.com",children:"Reddit"})})]})]})},o=function(){return Object(i.jsx)("section",{className:"searchSection",children:Object(i.jsx)("form",{className:"searchForm",action:"https://www.google.com/search",method:"get",name:"searchform",target:"_blank",children:Object(i.jsx)("input",{autocomplete:"on",name:"q",placeholder:"Search",required:"required",type:"text"})})})},h=function(){return Object(i.jsx)("section",{className:"top5Section",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.reddit.com",children:"Reddit"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://news.ycombinator.com",children:"HackerNews"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.youtube.com",children:"Youtube"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.twitter.com",children:"Twitter"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.gmail.com",children:"Gmail"})})]})})},b=c(11),d=function(){var e=new Date,t=e.getDate(),c=e.getHours(),a=e.getDay(),n=e.getMonth(),r=e.getYear(),j=Object(s.useState)(),l=Object(b.a)(j,2),o=l[0],h=l[1],d="",O="";switch(setInterval((function(){var e=(new Date).getMinutes();h(e)}),1e3),a){case 0:d="Sunday";break;case 1:d="Monday";break;case 2:d="Tuesday";break;case 3:d="Wednesday";break;case 4:d="Thursday";break;case 5:d="Friday";break;case 6:d="Saturday"}switch(n){case 0:O="January";break;case 1:O="February";break;case 2:O="March";break;case 3:O="April";break;case 4:O="May";break;case 5:O="June";break;case 6:O="Jully";break;case 7:O="August";break;case 8:O="September";break;case 9:O="October";break;case 10:O="November";break;case 11:O="December"}return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"timeContainer",children:[Object(i.jsxs)("div",{className:"currentTime",children:[c<10?Object(i.jsx)("h1",{children:"0"+c+":"}):Object(i.jsx)("h1",{children:c+":"}),o<10?Object(i.jsx)("h1",{children:"0"+o}):Object(i.jsx)("h1",{children:o})]}),Object(i.jsxs)("div",{className:"dateOutputs",children:[Object(i.jsx)("p",{children:d}),Object(i.jsx)("p",{children:t+"th"}),Object(i.jsx)("p",{children:O}),Object(i.jsx)("p",{children:r+1900})]})]})})},O=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(b.a)(n,2),j=r[0],l=r[1];return Object(s.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=54.687157&lon=25.279652&exclude={part}&appid=0ea4f961aae42bfa56f75ca058577e1e&units=metric").then((function(e){return e.json()})).then((function(e){a(Math.round(e.current.temp)+"\xb0"),l(e.current.weather[0].description)}),(function(e){console.log("Not working"+e)}))}),[]),Object(i.jsxs)("section",{className:"temperature",children:[Object(i.jsx)("h1",{children:c}),Object(i.jsx)("h1",{children:j})]})},x=function(){return Object(i.jsxs)("section",{className:"timeAndWeather",children:[Object(i.jsx)(d,{}),Object(i.jsx)(O,{})]})},u=c(16),m=function(){return Object(i.jsxs)("section",{className:"buttons",children:[Object(i.jsx)(u.b,{to:"/",children:"HomePage"}),Object(i.jsx)(u.b,{to:"/stocks",children:"Stocks"})]})},p=c(55),f=function(e){console.log(e.apiData);var t={labels:["1","2","3","4","5","6","7"],datasets:[{label:"Stock price @ close",data:e.apiData,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(i.jsx)("div",{className:"chart",children:Object(i.jsx)(p.Line,{data:t,options:{responsive:!0,scaleLabel:{display:!0,labelString:"Moola",fontSize:50},scales:{yAxes:[{ticks:{beginAtZero:!0}}]},layout:{}}})})},k=function(){var e=Object(s.useState)([1,10,1,10,1,10,1]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){a([e.data[0].close,e.data[1].close,e.data[2].close,e.data[3].close,e.data[4].close,e.data[5].close,e.data[6].close])}),(function(e){console.log("Not working"+e)}))};return Object(i.jsxs)("section",{className:"top5Stocks",children:[Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){n("http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=TSLA")},children:"TESLA"})}),Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){n("http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=GME")},children:"GME"})}),Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){n("http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=AMD")},children:"AMD"})}),Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){n("http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=INTC")},children:"INTEL"})}),Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){n("http://api.marketstack.com/v1/eod?access_key=11702c2bc92a345dad02d2f032829945&symbols=AAPL")},children:"APPLE"})})]}),Object(i.jsx)(f,{className:"chart",apiData:c})]})},w=c(2);var g=function(){return Object(i.jsxs)(u.a,{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h4",{className:"name",children:"Dominykas"}),Object(i.jsx)(m,{})]}),Object(i.jsx)(x,{}),Object(i.jsx)(w.a,{exact:!0,path:"/startpage",component:h}),Object(i.jsx)(w.a,{exact:!0,path:"/",component:h}),Object(i.jsx)(o,{}),Object(i.jsx)(w.a,{path:"/stocks",component:k}),Object(i.jsxs)("section",{className:"blockSection",children:[Object(i.jsx)(w.a,{exact:!0,path:"/",component:j}),Object(i.jsx)(w.a,{exact:!0,path:"/",component:l}),Object(i.jsx)(w.a,{exact:!0,path:"/startpage",component:j}),Object(i.jsx)(w.a,{exact:!0,path:"/startpage",component:l})]})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,165)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),y()},60:function(e,t,c){},61:function(e,t,c){}},[[164,1,2]]]);
//# sourceMappingURL=main.47e7c9f6.chunk.js.map