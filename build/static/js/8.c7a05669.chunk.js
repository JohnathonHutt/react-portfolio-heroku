(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[8],{50:function(t,e,a){},56:function(t,e,a){"use strict";a.r(e);var n=a(12),o=a(13),u=a(16),c=a(15),r=a(14),i=a(17),s=a(0),l=a.n(s),h=(a(50),function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(u.a)(this,Object(c.a)(e).call(this,t))).state={quote:"",name:""},a.updateQuote=a.updateQuote.bind(Object(r.a)(a)),a}return Object(i.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jhuttreactportfolio.herokuapp.com/futurama-quotes").then((function(t){return t.json()})).then((function(e){t.setState({name:e.name,quote:e.quote})}))}},{key:"updateQuote",value:function(){var t=this;fetch("https://jhuttreactportfolio.herokuapp.com/futurama-quotes").then((function(t){return t.json()})).then((function(e){t.setState({name:e.name,quote:e.quote})}))}},{key:"render",value:function(){var t="https://twitter.com/intent/tweet?text="+encodeURI(this.state.quote)+" -"+encodeURI(this.state.name);return l.a.createElement("div",{className:"q-body"},l.a.createElement("div",{id:"quote-box"},l.a.createElement("h1",null,"Quotes"),l.a.createElement("br",null),l.a.createElement("div",{className:"q-quote-and-author"},l.a.createElement("p",{id:"text"},this.state.quote),l.a.createElement("br",null),l.a.createElement("p",{id:"author"}," - ",this.state.name)),l.a.createElement("button",{id:"new-quote",className:"q-btn q-quote-button",onClick:this.updateQuote},"Quote"),l.a.createElement("a",{className:"q-btn q-tweet",href:t,"data-size":"large"},"Tweet")))}}]),e}(l.a.Component));e.default=h}}]);
//# sourceMappingURL=8.c7a05669.chunk.js.map