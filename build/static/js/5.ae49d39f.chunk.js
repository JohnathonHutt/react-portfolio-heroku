(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[5],{51:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var s=a(12),d=a(13),r=a(16),n=a(15),o=a(14),c=a(17),l=a(0),p=a.n(l),i=(a(51),[{display:"Dog",letter:"Q",type:"audio/wav",src:"assets/bark.wav"},{display:"F Minor",letter:"W",type:"audio/wav",src:"https://www.pacdv.com/sounds/fart-sounds/fart-2.wav"},{display:"F Major",letter:"E",type:"audio/mp3",src:"https://www.pacdv.com/sounds/fart-sounds/fart-7.mp3"},{display:"Clap",letter:"A",type:"audio/mp3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{display:"Heater 1",letter:"S",type:"audio/mp3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{display:"Heater 2",letter:"D",type:"audio/mp3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{display:"Chord 1",letter:"Z",type:"audio/mp3",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{display:"Chord 2",letter:"X",type:"audio/mp3",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{display:"Chord 3",letter:"C",type:"audio/mp3",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}]),m=["Q","W","E","A","S","D","Z","X","C"],u=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(n.a)(t).call(this,e))).state={displayText:"Click or type to get started"},a.handleKeyDown=a.handleKeyDown.bind(Object(o.a)(a)),a.handleClick=a.handleClick.bind(Object(o.a)(a)),a}return Object(c.a)(t,e),Object(d.a)(t,[{key:"handleKeyDown",value:function(e){var t=e.key.toUpperCase();m.includes(t)&&(document.getElementById(t).play(),this.updateDisplay(t),this.pressedHelper(t))}},{key:"handleClick",value:function(e){console.log(e),document.getElementById(e).play(),this.updateDisplay(e),this.pressedHelper(e)}},{key:"pressedHelper",value:function(e){document.getElementById("drum-pad-"+e).classList.add("d-pressed"),setTimeout((function(){document.getElementById("drum-pad-"+e).classList.remove("d-pressed")}),200)}},{key:"updateDisplay",value:function(e){var t=this;i.forEach((function(a){e===a.letter&&t.setState({displayText:a.display})}))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return p.a.createElement("div",{className:"d-body"},p.a.createElement("div",{id:"drum-machine"},p.a.createElement("h2",{id:"display",className:"d-display"},this.state.displayText),p.a.createElement(y,{handleClick:this.handleClick})))}}]),t}(p.a.Component);function y(e){return p.a.createElement("div",{className:"d-wrapper"},i.map((function(t){return p.a.createElement("div",{id:"drum-pad-"+t.letter,key:t.letter,className:"d-drum-pad",onClick:function(){return e.handleClick(t.letter)}},t.letter,p.a.createElement("audio",{id:t.letter,className:"d-clip"},p.a.createElement("source",{src:t.src,type:t.type})))})))}t.default=u}}]);
//# sourceMappingURL=5.ae49d39f.chunk.js.map