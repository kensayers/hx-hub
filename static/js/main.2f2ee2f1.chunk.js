(this["webpackJsonphx-hub"]=this["webpackJsonphx-hub"]||[]).push([[0],{228:function(e,a,t){e.exports=t(414)},233:function(e,a,t){},234:function(e,a,t){},238:function(e,a){},240:function(e,a){},282:function(e,a){},283:function(e,a){},414:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t.n(l),o=t(145),c=t.n(o),r=(t(233),t(160));t(234);var s=function(e){function a(e){console.log(e);var a={};for(var t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}console.log("Input Patch"),console.log(e);var t={};return t.name=e.data.meta.name,t.blocks=[],"block0"in e.data.tone.dsp0&&t.blocks.push(a(e.data.tone.dsp0.block0)),"block1"in e.data.tone.dsp0&&t.blocks.push(a(e.data.tone.dsp0.block1)),"block2"in e.data.tone.dsp0&&t.blocks.push(a(e.data.tone.dsp0.block2)),"block3"in e.data.tone.dsp0&&t.blocks.push(a(e.data.tone.dsp0.block3)),"block4"in e.data.tone.dsp0&&t.blocks.push(a(e.data.tone.dsp0.block4)),"block5"in e.data.tone.dsp0&&t.blocks.push(a(e.data.tone.dsp0.block5)),"block6"in e.data.tone.dsp0&&t.blocks.push(a(e.data.tone.dsp0.block6)),"block7"in e.data.tone.dsp0&&t.blocks.push(a(e.data.tone.dsp0.block7)),"block0"in e.data.tone.dsp1&&t.blocks.push(a(e.data.tone.dsp1.block0)),"block1"in e.data.tone.dsp1&&t.blocks.push(a(e.data.tone.dsp1.block1)),"block2"in e.data.tone.dsp1&&t.blocks.push(a(e.data.tone.dsp1.block2)),"block3"in e.data.tone.dsp1&&t.blocks.push(a(e.data.tone.dsp1.block3)),"block4"in e.data.tone.dsp1&&t.blocks.push(a(e.data.tone.dsp1.block4)),"block5"in e.data.tone.dsp1&&t.blocks.push(a(e.data.tone.dsp1.block5)),"block6"in e.data.tone.dsp1&&t.blocks.push(a(e.data.tone.dsp1.block6)),"block7"in e.data.tone.dsp1&&t.blocks.push(a(e.data.tone.dsp1.block7)),console.log(t),t},d=t(68);function p(e){var a=[];for(var t in e)!t.startsWith("@")&&e.hasOwnProperty(t)&&a.push(n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t),n.a.createElement("td",null,e[t])));return n.a.createElement("div",{class:"col mb-4"},n.a.createElement(d.a,null,n.a.createElement(d.a.Body,null,n.a.createElement(d.a.Header,null,e["@model"]),n.a.createElement("table",{class:"table table-dark"},n.a.createElement("tbody",null,a)))))}function i(e){var a=[];for(var t in e)!t.startsWith("@")&&e.hasOwnProperty(t)&&a.push(n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t),n.a.createElement("td",null,e[t])));return n.a.createElement("div",{class:"col mb-1"},n.a.createElement(d.a,null,n.a.createElement(d.a.Body,null,n.a.createElement(d.a.Header,null,e["@model"]),n.a.createElement("table",{class:"table"},n.a.createElement("tbody",null,a)))))}function m(e){var a=[];if("name"in e.patch){console.log(e.patch.blocks.length);for(var t=0;t<e.patch.blocks.length;t++)a.push(p(e.patch.blocks[t]));return console.log(a),n.a.createElement("div",null,n.a.createElement("h2",null,e.patch.name),n.a.createElement("div",{class:"row row-cols-1 row-cols-md-3"},a))}return n.a.createElement("h2",null,"No Patch Selected")}function u(e){var a=[];if("name"in e.patch){console.log(e.patch.blocks.length);for(var t=0;t<e.patch.blocks.length;t++)a.push(i(e.patch.blocks[t]));return console.log(a),n.a.createElement("div",null,n.a.createElement("h2",null,e.patch.name),n.a.createElement("div",{class:"row row-cols-1 row-cols-md-1"},a))}return n.a.createElement("h2",null,"No Patch Selected")}var b=function(e){function a(a){e.onUploadCompleted(JSON.parse(JSON.stringify(a.target.result)))}return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("form",{method:"post",action:"#",id:"#"},n.a.createElement("div",{className:"form-group files"},n.a.createElement("label",null,"Upload Your File "),n.a.createElement("input",{type:"file",className:"form-control",multiple:"",onChange:function(e){var t=e.target.files[0],l=new FileReader;l.onload=a,l.readAsText(t)}}))))))};t(47);var h=t(91),k=t(58);var E=function(){var e=Object(l.useState)({}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)({}),d=Object(r.a)(c,2);return d[0],d[1],n.a.createElement(h.a,null,n.a.createElement("div",null,n.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{class:"navbar-nav mr-auto"},n.a.createElement("li",{class:"nav-item active"},n.a.createElement(h.b,{class:"nav-link",to:"/"},"Home")),n.a.createElement("li",{class:"nav-item"},n.a.createElement(h.b,{class:"nav-link",to:"/loadFile"},"Load File")),n.a.createElement("li",{class:"nav-item dropdown"},n.a.createElement(h.b,{class:"nav-link",to:"/report"},"Report"))))),n.a.createElement(k.c,null,n.a.createElement(k.a,{exact:!0,path:"/"},n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("p",null,"HX Hub")),n.a.createElement("body",null,n.a.createElement(m,{patch:t})))),n.a.createElement(k.a,{path:"/loadFile"},n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("p",null,"HX Hub")),n.a.createElement("body",null,n.a.createElement(b,{onUploadCompleted:function(e){var a=JSON.parse(e);o(s(a))}})))),n.a.createElement(k.a,{path:"/report"},n.a.createElement(u,{patch:t})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(413);c.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[228,1,2]]]);
//# sourceMappingURL=main.2f2ee2f1.chunk.js.map