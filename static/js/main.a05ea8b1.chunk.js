(this.webpackJsonpchart=this.webpackJsonpchart||[]).push([[0],{180:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(15),i=a.n(r),n=(a(72),a(4)),o=c.a.createContext(),l=a(185),d=a(2),u=a(27),h=a.n(u),b=a(29),j=a(0),p=function(e){var t=e.chartdata,a=Object(s.useContext)(o),c=Object(n.a)(a,5),r=c[0],i=c[1],l=c[2],u=c[3],p=c[4],x=function(e,t){var a=[];return e.map((function(e){return a.push(e[t])})),a},f=x(t,"stage"),O=x(t,"value"),m=x(t,"average");console.log(u);var v={id:"chartAreaCols",beforeDraw:function(e,t,a){var s=e.ctx,c=e.chartArea,r=c.left,i=c.top,n=c.width,o=c.height;s.save();for(var l=0;l<7;l++){s.beginPath();var d=r+n/7*l,u=i,h=n/7,b=o;s.rect(d,u,h,b),l%2||(s.fillStyle="#E7EBEF",s.fillStyle="rgba(231, 235, 239, 0.5)",s.fill())}s.restore()}};b.b.register({chartAreaCols:v});var _={id:"htmlLegend",afterUpdate:function(e,t,a){for(var s=function(e,t){var a=document.getElementById(t),s=a.querySelector("ul");return s||((s=document.createElement("ul")).style.display="flex",s.style.flexDirection="row",s.style.margin=0,s.style.padding=0,a.appendChild(s)),s}(0,a.containerID);s.firstChild;)s.firstChild.remove();e.options.plugins.legend.labels.generateLabels(e).forEach((function(t){var a=document.createElement("li");a.style.alignItems="center",a.style.cursor="pointer",a.style.display="flex",a.style.flexDirection="row",a.style.marginLeft="30px",a.onclick=function(){var a=e.config.type;"pie"===a||"doughnut"===a?e.toggleDataVisibility(t.index):e.setDatasetVisibility(t.datasetIndex,!e.isDatasetVisible(t.datasetIndex)),e.update()};var c=document.createElement("span");c.style.background=t.fillStyle,c.style.borderColor=t.strokeStyle,c.style.borderWidth=t.lineWidth+"px",c.style.display="inline-block",c.style.height="20px",c.style.marginRight="10px",c.style.width="20px",c.style.borderRadius="50%";var r=document.createElement("p");r.style.color=t.fontColor,r.style.margin=0,r.style.padding=0,r.style.textDecoration=t.hidden?"line-through":"";var i=document.createTextNode(t.text);r.appendChild(i),a.appendChild(c),a.appendChild(r),s.appendChild(a)}))}};b.b.register({htmlLegendPlugin:_});var g={radius:6,pointHoverRadius:6,responsive:!0,plugins:{chartAreaCols:{id:"chartAreaCols"},htmlLegend:{containerID:"legend-container"},legend:{display:!1},title:{display:!1}},scales:{y:{type:"linear",min:0,max:8,ticks:{color:"#959A9E",size:14,padding:10},grid:{color:"#E7EBEF",borderColor:"#FFFFFF"}},x:{grid:{display:!1,borderColor:"#E7EBEF"},ticks:{tickColor:"red",align:"center",padding:0,color:"#959A9E"}}}},D=Object(s.useRef)();return Object(j.jsxs)("div",{className:h.a.chart,children:[Object(j.jsxs)("div",{className:h.a.chart__top,children:[Object(j.jsx)("h2",{className:h.a.chart__h2,children:"Red Flags Dynamics"}),Object(j.jsx)("div",{id:"legend-container"})]}),Object(j.jsx)(b.a,{ref:D,data:function(e){return{labels:f,options:{options:g},plugins:[_,v],datasets:[{label:"my first dataset",backgroundColor:"#36B5EB",borderColor:"#36B5EB",data:O,borderWidth:1,type:"line"},{label:"average in the system",data:m,backgroundColor:"#9a3c86",borderColor:"#9a3c86",borderWidth:1,type:"line"}]}},options:g,getElementsAtEvent:function(e){if(e.length){var t=e[0].index,a=D.current.config._config.data.labels[t],s=D.current.config._config.data.datasets[0].data[t],c=D.current.config._config.data.datasets[1].data[t];console.log(a,s,c);var n=function(e){var t=[];return e.map((function(e,a){return t.push({id:a,label:e})})),t}(f);p({labels:n,labelActive:t}),r([{code:"RI-PS-001",description:"Short or inadequate notice to bidders to submit expressions of interest or bids",cases:2},{code:"RI-PS-003",description:"Splitting purchases to avoid procurement thresholds",cases:1},{code:"RI-PS-005",description:"Direct awards in contravention to the provisions of the procurement plan",cases:7}]),l(Object(d.a)(Object(d.a)({},i),{},{chart:!1,indicators:!0}))}}})]})},x=a(8),f=a.n(x),O=function(e){var t=e.labelsIndicators,a=t.labelActive,s=t.labels,c=s.filter((function(e){return e.id===a})),r=s.filter((function(e){return e.id!==a}));return Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsxs)("a",{href:"/",onClick:function(e){e.preventDefault()},className:f.a.indicators__link,children:[c[0].label," stage"]}),Object(j.jsx)("ul",{children:r.map((function(t,a){return Object(j.jsx)("li",{onClick:function(t){!function(t,a){console.log(a),t.preventDefault(),e.setIndicatorsData([{code:"RI-PS-004",description:"Short or inadequate notice to bidders to submit expressions of interest or bids",cases:2},{code:"RI-PS-001",description:"Splitting purchases to avoid procurement thresholds",cases:1}]),e.setLabelIndicators(Object(d.a)(Object(d.a)({},e.labelsIndicators),{},{labelActive:a}))}(t,a)},children:t.label},a)}))})]})},m=function(e){var t=e.indicatorsData,a=function(e,t){var a=[];return e.map((function(e){return a.push(e[t])})),a}(t,"code");return t.map((function(t,s){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.code}),Object(j.jsx)("td",{children:t.description}),Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"/",onClick:function(t){return function(t,s){t.preventDefault();var c=function(e){var t=[];return e.map((function(e,a){return t.push({id:a,code:e})})),t}(a);e.setCodeIndicators({codes:c,codeActive:s}),e.setPurchaseData([{ocid:"OCDS-B3WDP1-MD-1571837868539",procurementMethodDetail:"Framework execution",classification:"15000000-8",estematedValue:71555247,status:"active"},{ocid:"OCDS-B3WDP1-MD-1571837868540",procurementMethodDetail:"Restricted tender",classification:"15000000-9",estematedValue:1555247,status:"active"},{ocid:"OCDS-B3WDP1-MD-1571837868539",procurementMethodDetail:"Request for quotation",classification:"15000000-8",estematedValue:1555247,status:"evaluation"}]),e.setStatusVisible(Object(d.a)(Object(d.a)({},e.setStatusVisible),{},{indicators:!1,purchases:!0}))}(t,s)},children:t.cases})})]},t.code)}))},v=function(){var e=Object(s.useContext)(o),t=Object(n.a)(e,10),a=t[0],c=t[1],r=t[2],i=t[3],l=t[4],u=t[5],h=t[6],b=t[7],p=t[8],x=t[9];return Object(j.jsxs)("div",{className:f.a.indicators,children:[Object(j.jsxs)("h2",{className:f.a.indicators__h2,children:[Object(j.jsx)("span",{children:"Risk indicators appearing during"}),Object(j.jsx)(O,{setIndicatorsData:c,labelsIndicators:h,setLabelIndicators:b})]}),Object(j.jsx)("div",{className:f.a.breadcrumbs,children:Object(j.jsxs)("div",{className:f.a.breadcrumbs__link,children:[Object(j.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),u(Object(d.a)(Object(d.a)({},l),{},{chart:!0,indicators:!1}))},children:"Dynamics"}),Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",children:[Object(j.jsx)("line",{x1:"0.646447",y1:"11.6464",x2:"5.64645",y2:"6.64645",stroke:"#9B3C86"}),Object(j.jsx)("line",{x1:"0.353553",y1:"0.646447",x2:"6.35355",y2:"6.64645",stroke:"#9B3C86"})]})]})}),Object(j.jsxs)("table",{className:f.a.table,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Code"}),Object(j.jsx)("td",{children:"Name"}),Object(j.jsx)("td",{children:"Cases"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsx)(m,{indicatorsData:a,codesIndicators:p,setCodeIndicators:x,purchaseData:r,setPurchaseData:i,statusVisible:l,setStatusVisible:u})})]})]})},_=function(e){return e.purchaseData.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"/",children:e.ocid})}),Object(j.jsx)("td",{children:e.procurementMethodDetail}),Object(j.jsx)("td",{children:e.classification}),Object(j.jsx)("td",{children:e.estematedValue}),Object(j.jsx)("td",{children:e.status})]},t)}))},g=a(9),D=a.n(g),C=function(e){var t=e.codesIndicators,a=t.codeActive,s=t.codes,c=s.filter((function(e){return e.id===a})),r=s.filter((function(e){return e.id!==a}));console.log("filterCode 1",c[0].id,c[0].code),console.log(r);return Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsx)("a",{href:"/",onClick:function(e){e.preventDefault()},className:D.a.splitPurchases__link,children:c[0].code}),Object(j.jsx)("ul",{children:r.map((function(t,a){return Object(j.jsx)("li",{onClick:function(s){!function(t,a,s){console.log("==================="),console.log("indexPurchase",a),console.log("filterCode 2","id = ",c[0].id,c[0].code),console.log(r),console.log("==================="),t.preventDefault(),e.setPurchaseData([{ocid:"OCDS-B3WDP1-MD-1571837868539",procurementMethodDetail:"Framework execution",classification:"15000000-5",estematedValue:71555247,status:"active"},{ocid:"OCDS-B3WDP1-MD-1571837868540",procurementMethodDetail:"Restricted tender",classification:"15000000-6",estematedValue:1555247,status:"active"},{ocid:"OCDS-B3WDP1-MD-1571837868539",procurementMethodDetail:"Request for quotation",classification:"15000000-7",estematedValue:1555247,status:"evaluation"}]),e.setCodeIndicators(Object(d.a)(Object(d.a)({},e.codesIndicators),{},{codeActive:s}))}(s,a,t.id)},children:t.code},t.id)}))})]})},y=function(){var e=Object(s.useContext)(o),t=Object(n.a)(e,6),a=t[0],c=t[1],r=t[2],i=t[3],l=t[4],u=t[5];return Object(j.jsxs)("div",{className:D.a.splitPurchases,children:[Object(j.jsxs)("h2",{className:D.a.splitPurchases__h2,children:[Object(j.jsx)("span",{children:"Splitting purchases to avoid procurement thresholds"}),Object(j.jsx)(C,{purchaseData:a,setPurchaseData:c,codesIndicators:l,setCodeIndicators:u})]}),Object(j.jsx)("div",{className:D.a.breadcrumbs,children:Object(j.jsxs)("div",{className:D.a.breadcrumbs__link,children:[Object(j.jsx)("a",{href:"/indicators",onClick:function(e){e.preventDefault(),i(Object(d.a)(Object(d.a)({},r),{},{indicators:!0,purchases:!1}))},children:"Indicators"}),Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",children:[Object(j.jsx)("line",{x1:"0.646447",y1:"11.6464",x2:"5.64645",y2:"6.64645",stroke:"#9B3C86"}),Object(j.jsx)("line",{x1:"0.353553",y1:"0.646447",x2:"6.35355",y2:"6.64645",stroke:"#9B3C86"})]})]})}),Object(j.jsxs)("table",{className:D.a.table,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"OCID"}),Object(j.jsx)("td",{children:"Method"}),Object(j.jsx)("td",{children:"CPV Class"}),Object(j.jsx)("td",{children:"Expected value"}),Object(j.jsx)("td",{children:"Current status"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsx)(_,{purchaseData:a})})]})]})},k=(a(180),function(){var e=c.a.useRef(),t=c.a.useRef(),a=c.a.useRef(),r=Object(s.useState)({chart:!0,indicators:!1,purchases:!1}),i=Object(n.a)(r,2),d=i[0],u=i[1],h=Object(s.useState)(null),b=Object(n.a)(h,2),x=b[0],f=b[1],O=Object(s.useState)(null),m=Object(n.a)(O,2),_=m[0],g=m[1],D=Object(s.useState)({labels:[{id:"",label:""}],labelActive:""}),C=Object(n.a)(D,2),k=C[0],P=C[1],I=Object(s.useState)({codes:[{id:"",code:""}],codeActive:""}),S=Object(n.a)(I,2),E=S[0],N=S[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l.a,{in:d.chart,timeout:1e3,classNames:"app__block",nodeRef:e,unmountOnExit:!0,children:Object(j.jsx)(o.Provider,{value:[f,d,u,k,P],children:Object(j.jsx)("div",{ref:e,children:d.chart&&Object(j.jsx)(p,{chartdata:[{stage:"Announcement",value:3,average:2},{stage:"Clarification",value:3,average:4},{stage:"Qualification",value:3,average:5},{stage:"Tendering",value:3,average:7},{stage:"Evaluation",value:3,average:2},{stage:"Awarding",value:3,average:5},{stage:"Contracting",value:3,average:6}]})})})}),Object(j.jsx)(l.a,{in:d.indicators,timeout:1e3,classNames:"app__block",nodeRef:t,unmountOnExit:!0,children:Object(j.jsx)(o.Provider,{value:[x,f,_,g,d,u,k,P,E,N],children:Object(j.jsx)("div",{ref:t,children:d.indicators&&Object(j.jsx)(v,{})})})}),Object(j.jsx)(l.a,{in:d.purchases,timeout:1e3,classNames:"app__block",nodeRef:a,unmountOnExit:!0,children:Object(j.jsx)(o.Provider,{value:[_,g,d,u,E,N],children:Object(j.jsx)("div",{ref:a,children:d.purchases&&Object(j.jsx)(y,{})})})})]})});i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},27:function(e,t,a){e.exports={chart:"BarChart_chart__NgD6N",chart__h2:"BarChart_chart__h2__1L0nG",chart__top:"BarChart_chart__top__P0maK"}},72:function(e,t,a){},8:function(e,t,a){e.exports={indicators:"Indicators_indicators__YP13z",indicators__h2:"Indicators_indicators__h2__tN_OW",indicators__link:"Indicators_indicators__link__248Le",table:"Indicators_table__RYk5m",breadcrumbs:"Indicators_breadcrumbs__1j-hq",breadcrumbs__link:"Indicators_breadcrumbs__link__3UpX_"}},9:function(e,t,a){e.exports={splitPurchases:"Purchases_splitPurchases___O548",splitPurchases__h2:"Purchases_splitPurchases__h2__IlfRL",splitPurchases__link:"Purchases_splitPurchases__link__3-qOS",table:"Purchases_table__1PmEy",breadcrumbs:"Purchases_breadcrumbs__2HDjQ",breadcrumbs__link:"Purchases_breadcrumbs__link__KL0J7"}}},[[183,1,2]]]);
//# sourceMappingURL=main.a05ea8b1.chunk.js.map