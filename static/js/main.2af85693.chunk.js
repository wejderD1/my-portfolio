(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);a(1);var n=a(12),o=a.n(n),c=a(3),r=a(0),i=function(e){var t=e.url,a=e.caption,n=e.link,o=e.imgClass,c=e.code;return Object(r.jsx)("div",{className:"col my-work-items",children:Object(r.jsxs)("a",{href:n,target:"_blank",rel:"noreferrer",children:[Object(r.jsx)("img",{className:o,src:t,alt:"project-img"}),Object(r.jsxs)("p",{children:[a," / ",Object(r.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:" kody \u017ar\xf3d\u0142owe"})]})]})})},s=function(e){var t=e.url;return Object(r.jsxs)("div",{className:"avatar",children:[Object(r.jsx)("img",{className:"avatar-photo",src:t,alt:"avatar"}),Object(r.jsxs)("div",{className:"name-desc-wrap",children:[Object(r.jsx)("h2",{className:"avatar-name",children:"Yurii Hnatiuk"}),Object(r.jsx)("p",{className:"avatar-desc",children:"Web developer"})]})]})},l=a(7),j=a(19),d=a(20),b=function(){function e(t){Object(j.a)(this,e),this.data=t}return Object(d.a)(e,[{key:"getData",value:function(e){return this.data[e]}}]),e}(),m=(a(30),Object(l.b)((function(e){return{langValue:e.lang,data:e.data,projects:e.projects}}))((function(e){var t=e.langValue,a=e.data,n=e.projects,o=new b(a),c="".concat("","/img/"),l=o.getData(t).homePage;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s,{url:c+"avatar.jpg"}),Object(r.jsxs)("div",{className:"container-fluid row",children:[Object(r.jsxs)("div",{className:"col-12 col-md-6",children:[Object(r.jsx)("h2",{className:"title home-title",children:"JavaScript, Bootstrap & React"}),Object(r.jsx)("p",{className:"content home-content",children:l.comment1}),Object(r.jsx)("p",{className:"content home-content",children:l.comment2})]}),Object(r.jsxs)("div",{className:"col-12 col-md-6",children:[Object(r.jsx)("h2",{className:"title home-title",children:"My last projects"}),Object(r.jsx)("div",{className:"row",children:n.map((function(e,t){var a=e.url,n=e.caption,o=e.href,s=e.code;return Object(r.jsx)(i,{url:c+a,caption:n,link:o,code:s,imgClass:"project-img"},t)}))})]})]})]})}))),u=(a(31),Object(l.b)((function(e){return{langValue:e.lang,data:e.data}}))((function(e){var t=e.langValue,a=e.data,n=new b(a).getData(t).aboutPage.aboutMe,o=[],c=[];for(var i in n)if(Object.hasOwnProperty.call(n,i)){var l=n[i];o.push(l.title),c.push(l.content)}var j="".concat("","/img/");return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(s,{url:j+"avatar.jpg"}),Object(r.jsx)("div",{className:"about-me",children:o.map((function(e,t){return Object(r.jsxs)("div",{className:"about-me__item",children:[Object(r.jsx)("h2",{className:"about-me__title",children:e}),c[t].map((function(e,t){return Object(r.jsx)("p",{children:e},t)}))]},t)}))}),Object(r.jsxs)("div",{className:"contact-container jumbotron",children:[Object(r.jsx)("h1",{children:"Contacts:"}),Object(r.jsx)("p",{children:"97-500 Radomsko"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"tel: "}),"798-613-331"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"email: "}),"wejderd1@gmail.com"]}),Object(r.jsx)("a",{href:"https://www.facebook.com/yuriy.gnatuyk",className:"btn btn-social-icon btn-facebook",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{className:"fa fa-facebook"})}),Object(r.jsx)("a",{href:"https://wejderd1.github.io/CV/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("h3",{children:"My CV"})})]})]})}))),h=(a(32),Object(l.b)((function(e){return{projects:e.projects}}))((function(e){var t=e.projects,a="".concat("","/img/");return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"row justify-content-space-beetwen portfolio-container",children:t.map((function(e,t){var n=e.url,o=e.caption,c=e.href,s=e.code;return Object(r.jsx)(i,{url:a+n,caption:o,link:c,code:s,imgClass:"project-img_lg",columCount:4},t)}))})})}))),p=function(e){var t=e.pageName,a=e.status,n=e.bgUri,o=e.innerElement,c="".concat("","/img/");return Object(r.jsxs)("section",{className:"".concat(t,"Page"),children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row align-items-center",children:Object(r.jsx)("div",{className:"col status",children:a})})}),Object(r.jsx)("img",{className:"home-bg",src:c+n,alt:"background-img"}),Object(r.jsx)("div",{className:"container-md",children:o})]})},g=(a(33),Object(l.b)((function(e){return{langValue:e.lang,content:e.data}}))((function(e){var t=e.langValue,a=e.content,n=Object(r.jsx)(m,{}),o=Object(r.jsx)(h,{}),i=Object(r.jsx)(u,{}),s=new b(a).getData(t);return Object(r.jsx)("main",{className:"main",children:Object(r.jsxs)(c.c,{children:[Object(r.jsx)(c.a,{exact:!0,path:"/",children:Object(r.jsx)(p,{pageName:"homePage",bgUri:"bg.jpg",status:s.homePage.status,innerElement:n})}),Object(r.jsx)(c.a,{path:"/portfolio",children:Object(r.jsx)(p,{pageName:"portfolioPage",bgUri:"portfolio-bg.jpg",status:s.portfolioPage.status,innerElement:o})}),Object(r.jsx)(c.a,{path:"/contact",children:Object(r.jsx)(p,{pageName:"contactPage",bgUri:"contact-bg.jpg",status:s.aboutPage.status,innerElement:i})})]})})}))),f=(a(36),function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("p",{children:"\xa9 Yurii Hnatiuk 2021"})})})}),O=a(9),x=(a(37),a(38),function(){return Object(r.jsxs)("div",{className:"container burger-menu",children:[Object(r.jsx)("input",{id:"toggle",type:"checkbox"}),Object(r.jsx)("label",{className:"toggle-container",htmlFor:"toggle",children:Object(r.jsx)("span",{className:"button button-toggle"})}),Object(r.jsxs)("nav",{className:"burger-wrap",children:[Object(r.jsx)(O.b,{to:"/",className:"nav-link","aria-current":"page",children:"home"}),Object(r.jsx)(O.b,{to:"/portfolio",className:"nav-link","aria-current":"page",children:"portfolio"}),Object(r.jsx)(O.b,{to:"/contact",className:"nav-link","aria-current":"page",children:"contact"})]})]})}),w=function(e){var t=e.title,a=e.link;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(O.b,{to:a,className:"nav-link","aria-current":"page",children:t})}),Object(r.jsx)("i",{className:"bi bi-dash-lg"})]})},y={langTroggle:function(e){return{type:"LANG_TROGGLE",payload:e}}},k=Object(l.b)((function(e){return{langValue:e.lang,content:e.data}}),y)((function(e){var t=e.langValue,a=e.langTroggle,n=e.content,o=new b(n).getData(t).header.menu,c=["/","/portfolio","/contact"],i=o.map((function(e,t){return Object(r.jsx)(w,{link:c[t],title:e},t)})),s=function(e){a(e)},l=Object(r.jsx)(x,{});return Object(r.jsx)("header",{className:"header",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"align-items-center d-flex justify-content-between main-menu",children:Object(r.jsx)("ul",{className:"nav header-nav",children:i})}),Object(r.jsx)("div",{className:"social-block",children:Object(r.jsx)("a",{href:"https://www.facebook.com/yuriy.gnatuyk",className:"btn btn-social-icon btn-facebook",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{className:"fa fa-facebook"})})}),l,Object(r.jsx)("div",{className:"lang-btn-container",children:Object(r.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic radio toggle button group",children:[Object(r.jsx)("input",{checked:"eng"===t,onChange:function(e){return s(e.target.value)},type:"radio",className:"btn-check",name:"btn1",id:"btn-radio1",autoComplete:"off",value:"eng"}),Object(r.jsx)("label",{className:"btn btn-sm btn-outline-light lang-btn",htmlFor:"btn-radio1",children:"eng"}),Object(r.jsx)("input",{checked:"pol"===t,type:"radio",onChange:function(e){return s(e.target.value)},className:"btn-check",name:"btn1",id:"btn-radio2",autoComplete:"off",value:"pol"}),Object(r.jsx)("label",{className:"btn btn-sm btn-outline-light lang-btn",htmlFor:"btn-radio2",children:"pl"})]})})]})})})),v=(a(39),function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(k,{}),Object(r.jsx)(g,{}),Object(r.jsx)(f,{})]})}),N=a(21),z=a(18),P={data:{eng:{header:{menu:["home","portfolio","about me & contact"]},homePage:{status:"HI THERE, I AM A WEB DEVELOPER",comment1:"I am looking for a job in the field of creating web pages. In my projects I can use native JS or use tools for developing web pages - Bootstrap, React.",comment2:"No work experience, but I am not applying for a job director of development department. What I don't know, I will find a solution and bring the task to completion."},portfolioPage:{status:"THERE ARE MY PROJECTS"},aboutPage:{status:"ABOUT ME & CONTACT",aboutMe:{part1:{title:"About Me",content:["- I was born in Ukraine in 1986 year. Now I am 34 years old","- I live with my familly in Poland","- I read and write Polish, english at the level A2/B1","- Driver of category B, C","- Focus on results, active life, I am sociable, I work responsibly","- I don't smoke, I spend time in the gym, I like to travel"]},part2:{title:"Education",content:["- Medical college: 3 years of medical college. 12 years of experience in various hospitals in the city of Kherson. Work in private laboratories for the study of infections by PCR","- University: faculty of Ecology and Nature Conservation. I did not work in this specialty. "]},part3:{title:"My skill",content:["- HTML: using semantic tags, BEM technologies","- CSS/SASS: Application of sass, css animations, grid, flex, and much more","- JS: Block scope variables, template literals, destructuring assignment, classes and objects, promises, arrow functions, operation Spread and not only ...","- React: Native react, redux, class and functional components, work with simple servers, bootstrap components, Material-UI","- NodeJS: Informed with express, body-parser, lodash and et\u0441..","- Bootstrap: I am use Bootstrap technology in building the structure of Internet pages","- Other: Photoshop, Figma, Avocode"]}}}},pol:{header:{menu:["home","moje proekty","o mnie & kontakty"]},homePage:{status:"Cze\u015b\u0107, yestem tw\xf3rc\u0105 stron internetowych",comment1:"Szukam pracy w zakresie tworzenia stron internetowych. W swoich projektach mog\u0119 korzysta\u0107 z natywnego JS lub korzysta\u0107 z narz\u0119dzi do tworzenia stron internetowych - Bootstrap, Reactu. ",comment2:"Brak do\u015bwiadczenia zawodowego, ale i nie posiadam na stanowisko dyrektora. Czego nie wiem, znajd\u0119 rozwi\u0105zanie i doprowadz\u0119 zadanie do ko\u0144ca."},portfolioPage:{status:"Tu s\u0105 moje projecty"},aboutPage:{status:"O mnie & kontakty",aboutMe:{part1:{title:"O mnie",content:["- Urodzi\u0142em si\u0119 na Ukrainie w 1986 roku. Teraz mam 34 lata","- Mieszkam z rodzin\u0105 w Polsce","- Czytam i pisz\u0119 po polsku, angielsku na poziomie A2/B1","- Kierowca kategorii B, C","- Koncentracja na wynikach, aktywne \u017cycie, jestem towarzyski, pracuj\u0119 odpowiedzialnie","- Nie pal\u0119, sp\u0119dzam czas na si\u0142owni, lubi\u0119 podr\xf3\u017cowa\u0107"]},part2:{title:"Edukacja",content:["- Szko\u0142a medyczna: 3 lata studi\xf3w medycznych. 12 lat do\u015bwiadczenia w r\xf3\u017cnych szpitalach w mie\u015bcie Chersoniu. Praca w prywatnych laboratoriach w celu badania zaka\u017ce\u0144 metod\u0105 PCR ","- Uniwersytet: wydzia\u0142 Ekologii i Ochrony Przyrody. Nie pracowa\u0142em w tej specjalno\u015bci."]},part3:{title:"Moje umiej\u0119tno\u015b\u0107i",content:["- HTML: u\u017cywam znacznik\xf3w semantycznych, technologie BEM","- CSS / SASS: zastosowanie sass, animacje css, grid, flex i wiele wi\u0119cej ","- JS: zmienne zakresu blokowego, litera\u0142y szablon\xf3w, destrukcyjne przypisanie, klasy i obiekty, Prommisy, funkcje strza\u0142kowe, operacja Spread i nie tylko ... ","- React: natywnyj React, Redux, komponenty funkcjonalne i klasy, praca z prostymi serwerami, komponenty Bootstrap, Material-UI","- NodeJS: poinformowany w express, body-parser, lodash itp.","- Bootstrap: u\u017cywam technologii Bootstrap do budowania struktury stron internetowych","- Inne: Photoshop, Figma, Avocode"]}}}}},lang:"eng",projects:[{url:"bigTheatre.png",caption:"bigTheatre",href:"https://wejderd1.github.io/bigTeatre/dist/index.html",code:"https://github.com/wejderD1/bigTeatre"},{url:"food.jpg",caption:"Food",href:"https://wejderd1.github.io/Food/index.html",code:"https://github.com/wejderD1/Food"},{url:"Mogo.jpg",caption:"Mogo",href:"https://wejderd1.github.io/Mogo/index.html",code:"https://github.com/wejderD1/Mogo"},{url:"online-zoo.jpg",caption:"Online-zoo",href:"https://wejderD1.github.io/online-zoo/pages/first.html",code:"https://github.com/wejderD1/online-zoo"},{url:"portfolio1.jpg",caption:"AboutMe",href:"https://wejderd1.github.io/portfolio1/index.html",code:"https://github.com/wejderD1/portfolio1"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LANG_TROGGLE":return Object(z.a)(Object(z.a)({},e),{},{lang:t.payload});default:return e}},I=Object(N.a)(C);a(40);o.a.render(Object(r.jsx)(l.a,{store:I,children:Object(r.jsx)(O.a,{children:Object(r.jsx)(v,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2af85693.chunk.js.map