(this["webpackJsonpnoticias-react"]=this["webpackJsonpnoticias-react"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=(a(14),a(1)),i=a.n(l),s=a(2),m=a(3),u=a(5),d=a(4),h=a(6),p=function(){return c.a.createElement("h1",{className:"text-center header-title"},"Portal De Noticias")},E=function(e){var t=e.handleClick;return c.a.createElement("select",{className:"mdb-select md-form",onChange:t},c.a.createElement("option",{value:"",disabled:!0},"Elige una categor\xeda"),c.a.createElement("option",{value:"general defaultValue"},"General"),c.a.createElement("option",{value:"science"},"Ciencia"),c.a.createElement("option",{value:"sports"},"Deportes"),c.a.createElement("option",{value:"entertainment"},"Entretenimiento"),c.a.createElement("option",{value:"business"},"Negocios"),c.a.createElement("option",{value:"health"},"Salud"),c.a.createElement("option",{value:"technology"},"Tecnolog\xeda"))},v=function(e){var t=e.noticia;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top img-noticia",src:t.urlToImage,alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t.title),c.a.createElement("p",{className:"card-text"},t.description,"}")),c.a.createElement("div",{className:"card-footer text-center"},c.a.createElement("a",{href:t.url,target:"_blank"},c.a.createElement("button",{className:"btn btn-success"},"VER NOTICIA COMPLETA"))))},f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"text-center body-title"},c.a.createElement("b",null,"ENCUENTRA NOTICIAS POR CATEGOR\xcdA")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8 offset-sm-2 col-md-6 offset-md-3"},c.a.createElement(E,{handleClick:this.props.handleClick}))),c.a.createElement("div",{className:"row"},this.props.noticias.map((function(e){return c.a.createElement("div",{className:"col-md-4"},c.a.createElement(v,{noticia:e}))})))))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={noticias:[]},a.consultarNoticias=function(){var e,t,n,c,r=arguments;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"general",t="https://newsapi.org/v2/"+"top-headlines?country=mx&category="+e+"&apiKey=800e54c9633148db8d5da7156454bc4d",o.next=5,i.a.awrap(fetch(t));case 5:return n=o.sent,o.next=8,i.a.awrap(n.json());case 8:c=o.sent,console.log(t),a.setState({noticias:c.articles});case 11:case"end":return o.stop()}}))},a.handleClick=function(e){a.setState({categoria:e.target.value}),a.consultarNoticias(e.target.value)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.consultarNoticias();case 1:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(p,null),c.a.createElement("div",{className:"container"},c.a.createElement(f,{handleClick:this.handleClick,noticias:this.state.noticias})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.568c1096.chunk.js.map