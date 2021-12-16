(this.webpackJsonpchart=this.webpackJsonpchart||[]).push([[0],{10:function(e,t,a){e.exports={splitPurchases:"Purchases_splitPurchases___O548",splitPurchases__h2:"Purchases_splitPurchases__h2__IlfRL",splitPurchases__link:"Purchases_splitPurchases__link__3-qOS",table:"Purchases_table__1PmEy",breadcrumbs:"Purchases_breadcrumbs__2HDjQ",breadcrumbs__link:"Purchases_breadcrumbs__link__KL0J7"}},182:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(16),i=a.n(n),s=(a(74),a(4)),l=c.a.createContext(),o=a(187),d=a(2),u=a(29),h=a.n(u),b=a(6),j=a(0),p=function(e){var t=Object(r.useRef)();console.log(b.b);var a=e.chartdata,c=Object(r.useContext)(l),n=Object(s.a)(c,5),i=n[0],o=n[1],u=n[2],p=n[3],v=n[4],x=function(e,t){var a=[];return e.map((function(e){return a.push(e[t])})),a},m=x(a,"stage"),f=x(a,"value"),g=x(a,"average"),O={id:"chartAreaCols",beforeDraw:function(e,t,a){var r=e.ctx,c=e.chartArea,n=c.left,i=c.top,s=c.width,l=c.height;r.save();for(var o=0;o<7;o++){r.beginPath();var d=n+s/7*o,u=i,h=s/7,b=l;r.rect(d,u,h,b),o%2||(r.fillStyle="#E7EBEF",r.fillStyle="rgba(231, 235, 239, 0.5)",r.fill())}r.restore()}};b.b.register({chartAreaCols:O});var _={id:"htmlLegend",afterUpdate:function(e,t,a){for(var r=function(e,t){var a,r=document.getElementById(t);return r&&(a=r.querySelector("ul")),a||((a=document.createElement("ul")).style.display="flex",a.style.flexDirection="row",a.style.margin=0,a.style.padding=0,r&&r.appendChild(a)),a}(0,a.containerID);r.firstChild;)r.firstChild.remove();e.options.plugins.legend.labels.generateLabels(e).forEach((function(t){var a=document.createElement("li");a.style.alignItems="center",a.style.cursor="pointer",a.style.display="flex",a.style.flexDirection="row",a.style.marginLeft="30px",a.onclick=function(){var a=e.config.type;"pie"===a||"doughnut"===a?e.toggleDataVisibility(t.index):e.setDatasetVisibility(t.datasetIndex,!e.isDatasetVisible(t.datasetIndex)),e.update()};var c=document.createElement("span");c.style.background=t.fillStyle,c.style.borderColor=t.strokeStyle,c.style.borderWidth=t.lineWidth+"px",c.style.display="inline-block",c.style.height="20px",c.style.marginRight="10px",c.style.width="20px",c.style.borderRadius="50%";var n=document.createElement("p");n.style.color=t.fontColor,n.style.margin=0,n.style.padding=0,n.style.textDecoration=t.hidden?"line-through":"";var i=document.createTextNode(t.text);n.appendChild(i),a.appendChild(c),a.appendChild(n),r.appendChild(a)}))}};b.b.register({htmlLegendPlugin:_});var y={radius:6,pointHoverRadius:6,responsive:!0,plugins:{chartAreaCols:{id:"chartAreaCols"},htmlLegend:{containerID:"legend-container"},legend:{display:!1},title:{display:!1}},scales:{y:{type:"linear",min:0,max:8,ticks:{color:"#959A9E",size:14,padding:10},grid:{color:"#E7EBEF",borderColor:"#FFFFFF"}},x:{grid:{display:!1,borderColor:"#E7EBEF"},ticks:{tickColor:"red",align:"center",padding:0,color:"#959A9E"}}}};return Object(j.jsxs)("div",{className:h.a.chart,children:[Object(j.jsxs)("div",{className:h.a.chart__top,children:[Object(j.jsx)("h2",{className:h.a.chart__h2,children:"Red Flags Dynamics"}),Object(j.jsx)("div",{id:"legend-container"})]}),Object(j.jsx)(b.a,{ref:t,data:function(){return{labels:m,options:{options:y},plugins:[_,O],datasets:[{label:"my first dataset",backgroundColor:"#36B5EB",borderColor:"#36B5EB",data:f,borderWidth:1,type:"line"},{label:"average in the system",data:g,backgroundColor:"#9a3c86",borderColor:"#9a3c86",borderWidth:1,type:"line"}]}},options:y,getElementsAtEvent:function(e){if(e.length){var a=e[0].index,r=t.current.config._config.data.labels[a],c=t.current.config._config.data.datasets[0].data[a],n=t.current.config._config.data.datasets[1].data[a];console.log(r,c,n);var s=function(e){var t=[];return e.map((function(e,a){return t.push({id:a,label:e})})),t}(m);v(Object(d.a)(Object(d.a)({},p),{},{labels:s,labelActive:a})),i([{code:"RI-PS-001",description:"Short or inadequate notice to bidders to submit expressions of interest or bids",cases:2},{code:"RI-PS-003",description:"Splitting purchases to avoid procurement thresholds",cases:1},{code:"RI-PS-005",description:"Direct awards in contravention to the provisions of the procurement plan",cases:7}]),u(Object(d.a)(Object(d.a)({},o),{},{chart:!1,indicators:!0}))}}})]})},v=a(9),x=a.n(v),m=function(e){var t=e.labelsIndicators,a=t.labelActive,r=t.labels,c=r.filter((function(e){return e.id===a})),n=r.filter((function(e){return e.id!==a}));return Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsxs)("a",{href:"/",onClick:function(e){e.preventDefault()},className:x.a.indicators__link,children:[c[0].label," stage"]}),Object(j.jsx)("ul",{children:n.map((function(t,a){return Object(j.jsx)("li",{onClick:function(a){!function(t,a,r){t.preventDefault(),e.setIndicatorsData([{code:"RI-PS-004",description:"Short or inadequate notice to bidders to submit expressions of interest or bids",cases:2},{code:"RI-PS-001",description:"Splitting purchases to avoid procurement thresholds",cases:1}]),e.setLabelIndicators(Object(d.a)(Object(d.a)({},e.labelsIndicators),{},{labelActive:r}))}(a,0,t.id)},children:t.label},t.id)}))})]})},f=function(e){var t=e.indicatorsData,a=function(e,t){var a=[];return e.map((function(e){return a.push(e[t])})),a}(t,"code");return t.map((function(t,r){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.code}),Object(j.jsx)("td",{children:t.description}),Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"/",onClick:function(t){return function(t,r){t.preventDefault();var c=function(e){var t=[];return e.map((function(e,a){return t.push({id:a,code:e})})),t}(a);e.setCodeIndicators({codes:c,codeActive:r}),e.setPurchaseData([{ocid:"OCDS-B3WDP1-MD-1571837868539",procurementMethodDetail:"Framework execution",classification:"15000000-8",estematedValue:71555247,status:"active"},{ocid:"OCDS-B3WDP1-MD-1571837868540",procurementMethodDetail:"Restricted tender",classification:"15000000-9",estematedValue:1555247,status:"active"},{ocid:"OCDS-B3WDP1-MD-1571837868539",procurementMethodDetail:"Request for quotation",classification:"15000000-8",estematedValue:1555247,status:"evaluation"}]),e.setStatusVisible(Object(d.a)(Object(d.a)({},e.setStatusVisible),{},{indicators:!1,purchases:!0}))}(t,r)},children:t.cases})})]},t.code)}))},g=function(){var e=Object(r.useContext)(l),t=Object(s.a)(e,10),a=t[0],c=t[1],n=t[2],i=t[3],o=t[4],u=t[5],h=t[6],b=t[7],p=t[8],v=t[9];return Object(j.jsxs)("div",{className:x.a.indicators,children:[Object(j.jsxs)("h2",{className:x.a.indicators__h2,children:[Object(j.jsx)("span",{children:"Risk indicators appearing during"}),Object(j.jsx)(m,{setIndicatorsData:c,labelsIndicators:h,setLabelIndicators:b})]}),Object(j.jsx)("div",{className:x.a.breadcrumbs,children:Object(j.jsxs)("div",{className:x.a.breadcrumbs__link,children:[Object(j.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),u(Object(d.a)(Object(d.a)({},o),{},{chart:!0,indicators:!1}))},children:"Dynamics"}),Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",children:[Object(j.jsx)("line",{x1:"0.646447",y1:"11.6464",x2:"5.64645",y2:"6.64645",stroke:"#9B3C86"}),Object(j.jsx)("line",{x1:"0.353553",y1:"0.646447",x2:"6.35355",y2:"6.64645",stroke:"#9B3C86"})]})]})}),Object(j.jsxs)("table",{className:x.a.table,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Code"}),Object(j.jsx)("td",{children:"Name"}),Object(j.jsx)("td",{children:"Cases"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsx)(f,{indicatorsData:a,codesIndicators:p,setCodeIndicators:v,purchaseData:n,setPurchaseData:i,statusVisible:o,setStatusVisible:u})})]})]})},O=function(e){return e.purchaseData.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"/",children:e.ocid})}),Object(j.jsx)("td",{children:e.procurementMethodDetail}),Object(j.jsx)("td",{children:e.classification}),Object(j.jsx)("td",{children:e.estematedValue}),Object(j.jsx)("td",{children:e.status})]},t)}))},_=a(10),y=a.n(_),C=function(e){var t=e.codesIndicators,a=t.codeActive,r=t.codes,c=r.filter((function(e){return e.id===a})),n=r.filter((function(e){return e.id!==a}));return Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsx)("a",{href:"/",onClick:function(e){e.preventDefault()},className:y.a.splitPurchases__link,children:c[0].code}),Object(j.jsx)("ul",{children:n.map((function(t,a){return Object(j.jsx)("li",{onClick:function(a){!function(t,a,r){t.preventDefault(),e.setPurchaseData([{ocid:"OCDS-B3WDP1-MD-1571837868539",procurementMethodDetail:"Framework execution",classification:"15000000-5",estematedValue:71555247,status:"active"},{ocid:"OCDS-B3WDP1-MD-1571837868540",procurementMethodDetail:"Restricted tender",classification:"15000000-6",estematedValue:1555247,status:"active"},{ocid:"OCDS-B3WDP1-MD-1571837868539",procurementMethodDetail:"Request for quotation",classification:"15000000-7",estematedValue:1555247,status:"evaluation"}]),e.setCodeIndicators(Object(d.a)(Object(d.a)({},e.codesIndicators),{},{codeActive:r}))}(a,0,t.id)},children:t.code},t.id)}))})]})},D=function(){var e=Object(r.useContext)(l),t=Object(s.a)(e,6),a=t[0],c=t[1],n=t[2],i=t[3],o=t[4],u=t[5];return Object(j.jsxs)("div",{className:y.a.splitPurchases,children:[Object(j.jsxs)("h2",{className:y.a.splitPurchases__h2,children:[Object(j.jsx)("span",{children:"Splitting purchases to avoid procurement thresholds"}),Object(j.jsx)(C,{purchaseData:a,setPurchaseData:c,codesIndicators:o,setCodeIndicators:u})]}),Object(j.jsx)("div",{className:y.a.breadcrumbs,children:Object(j.jsxs)("div",{className:y.a.breadcrumbs__link,children:[Object(j.jsx)("a",{href:"/indicators",onClick:function(e){e.preventDefault(),i(Object(d.a)(Object(d.a)({},n),{},{indicators:!0,purchases:!1}))},children:"Indicators"}),Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",children:[Object(j.jsx)("line",{x1:"0.646447",y1:"11.6464",x2:"5.64645",y2:"6.64645",stroke:"#9B3C86"}),Object(j.jsx)("line",{x1:"0.353553",y1:"0.646447",x2:"6.35355",y2:"6.64645",stroke:"#9B3C86"})]})]})}),Object(j.jsxs)("table",{className:y.a.table,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"OCID"}),Object(j.jsx)("td",{children:"Method"}),Object(j.jsx)("td",{children:"CPV Class"}),Object(j.jsx)("td",{children:"Expected value"}),Object(j.jsx)("td",{children:"Current status"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsx)(O,{purchaseData:a})})]})]})},k=a(68),P=a.n(k),B=function(){var e=Object(r.useRef)(),t=[{month:"AUG",value01:"58",value02:"82"},{month:"SEP",value01:"48",value02:"58"},{month:"OCT",value01:"94",value02:"48"},{month:"NOV",value01:"10",value02:"28"},{month:"DEC",value01:"60",value02:"48"}],a=function(e,t){var a=[];return e.map((function(e){return a.push(e[t])})),a},c={labels:a(t,"month"),datasets:[{label:"Value 01",data:a(t,"value01"),backgroundColor:"#db316f",borderColor:"#db316f",pointBorderWidth:0,categoryPercentage:"0.5",barPercentage:"0.6",pointHoverBackgroundColor:"#db316f"},{label:"Value 02",data:a(t,"value02"),backgroundColor:"#642ca7",borderColor:"#642ca7",categoryPercentage:"0.5",barPercentage:"0.6",pointHoverBackgroundColor:"#642ca7"}]};return Object(j.jsx)("div",{className:P.a.chart,children:Object(j.jsx)(b.a,{ref:e,data:c,options:{plugins:{chartAreaCols:!1,legend:{display:!1},title:{display:!1}},scales:{y:{max:100,min:0,ticks:{stepSize:20,beginAtZero:!0,drawTicks:!1,display:!1,padding:0},grid:{borderColor:"transparent",tickColor:!1,color:"#e5e5e5"}},x:{stacked:!1,grid:{display:!1,borderColor:"#e5e5e5"}}}}})})},E=a(19),I=a.n(E),S=function(){var e=Object(r.useRef)(),t=[{month:"Jan",value01:"98",value02:"53"},{month:"Feb",value01:"98",value02:"53"},{month:"Mar",value01:"98",value02:"53"},{month:"Apr",value01:"98",value02:"53"},{month:"Mar",value01:"98",value02:"53"},{month:"Jun",value01:"98",value02:"53"},{month:"Jul",value01:"98",value02:"53"},{month:"Aug",value01:"98",value02:"53"},{month:"Sep",value01:"98",value02:"53"},{month:"Oct",value01:"98",value02:"53"},{month:"Nov",value01:"98",value02:"53"},{month:"Dec",value01:"98",value02:"53"}],a=function(e,t){var a=[];return e.map((function(e){return a.push(e[t])})),a},c=a(t,"month"),n=a(t,"value01"),i=a(t,"value02"),s={id:"htmlLegend2",afterUpdate:function(e,t,a){for(var r=function(e,t){var a,r=document.getElementById(t);return r&&(a=r.querySelector("ul")),a||((a=document.createElement("ul")).style.display="flex",a.style.flexDirection="row",a.style.margin=0,a.style.padding=0,r&&r.appendChild(a)),a}(0,a.containerID);r.firstChild;)r.firstChild.remove();e.options.plugins.legend.labels.generateLabels(e).forEach((function(t){var a=document.createElement("li");a.style.alignItems="center",a.style.cursor="pointer",a.style.display="flex",a.style.flexDirection="row",a.style.marginLeft="60px",a.onclick=function(){var a=e.config.type;"pie"===a||"doughnut"===a?e.toggleDataVisibility(t.index):e.setDatasetVisibility(t.datasetIndex,!e.isDatasetVisible(t.datasetIndex)),e.update()};var c=document.createElement("span");c.style.background=t.fillStyle,c.style.borderColor=t.strokeStyle,c.style.borderWidth=t.lineWidth+"px",c.style.display="inline-block",c.style.height="18px",c.style.marginRight="10px",c.style.width="18px",c.style.borderRadius="50%";var n=document.createElement("p");n.style.color="white",n.style.margin=0,n.style.padding=0,n.style.fontSize="14px",n.style.fontWeight="300",n.style.textDecoration=t.hidden?"line-through":"";var i=document.createTextNode(t.text);n.appendChild(i),a.appendChild(c),a.appendChild(n),r.appendChild(a)}))}};b.b.register({htmlLegendPlugin2:s});var l={labels:c,datasets:[{label:"Total procedures",data:n,backgroundColor:"#37B5EB",borderColor:"#37B5EB",pointBorderWidth:0,categoryPercentage:"0.6",barPercentage:"0.7",pointHoverBackgroundColor:"RGBA(55, 181, 235, 1)"},{label:"Risky procedures",data:i,backgroundColor:"#E08BD0",borderColor:"#E08BD0",categoryPercentage:"0.6",barPercentage:"0.7",pointHoverBackgroundColor:"#E08BD0"}]};return Object(j.jsx)("div",{className:I.a.wrap,children:Object(j.jsxs)("div",{className:I.a.chart,children:[Object(j.jsxs)("div",{className:I.a.chart__top,children:[Object(j.jsx)("h2",{className:I.a.chart__h2,children:"Average allocation of the red-flags"}),Object(j.jsx)("div",{id:"legend-container2"})]}),Object(j.jsx)(b.a,{ref:e,data:l,options:{plugins:{chartAreaCols:!1,htmlLegend:!1,htmlLegend2:{containerID:"legend-container2"},legend:{display:!1},title:{display:!1}},scales:{y:{max:105,min:0,ticks:{stepSize:15,beginAtZero:!0,drawTicks:!1,display:!1,padding:0},grid:{borderColor:"transparent",tickColor:!1,color:"RGBA(231, 235, 239, 0.25)"}},x:{stacked:!1,ticks:{color:"#E7EBEF"},grid:{display:!1,borderColor:"RGBA(231, 235, 239, 0.25)",color:"red"}}}}})]})})},N=(a(182),function(){var e=c.a.useRef(),t=c.a.useRef(),a=c.a.useRef(),n=c.a.useRef(),i=c.a.useRef(),d=Object(r.useState)({chart:!0,indicators:!1,purchases:!1}),u=Object(s.a)(d,2),h=u[0],b=u[1],v=Object(r.useState)(null),x=Object(s.a)(v,2),m=x[0],f=x[1],O=Object(r.useState)(null),_=Object(s.a)(O,2),y=_[0],C=_[1],k=Object(r.useState)({labels:[{id:"",label:""}],labelActive:""}),P=Object(s.a)(k,2),E=P[0],I=P[1],N=Object(r.useState)({codes:[{id:"",code:""}],codeActive:""}),R=Object(s.a)(N,2),w=R[0],A=R[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o.a,{in:h.chart,timeout:1e3,classNames:"app__block",nodeRef:e,unmountOnExit:!0,children:Object(j.jsx)(l.Provider,{value:[f,h,b,E,I],children:Object(j.jsx)("div",{ref:e,children:h.chart&&Object(j.jsx)(p,{chartdata:[{stage:"Announcement",value:3,average:2},{stage:"Clarification",value:3,average:4},{stage:"Qualification",value:3,average:5},{stage:"Tendering",value:3,average:7},{stage:"Evaluation",value:3,average:2},{stage:"Awarding",value:3,average:5},{stage:"Contracting",value:3,average:6}]})})})}),Object(j.jsx)(o.a,{in:h.indicators,timeout:1e3,classNames:"app__block",nodeRef:t,unmountOnExit:!0,children:Object(j.jsx)(l.Provider,{value:[m,f,y,C,h,b,E,I,w,A],children:Object(j.jsx)("div",{ref:t,children:h.indicators&&Object(j.jsx)(g,{})})})}),Object(j.jsx)(o.a,{in:h.purchases,timeout:1e3,classNames:"app__block",nodeRef:a,unmountOnExit:!0,children:Object(j.jsx)(l.Provider,{value:[y,C,h,b,w,A],children:Object(j.jsx)("div",{ref:a,children:h.purchases&&Object(j.jsx)(D,{})})})}),Object(j.jsx)(o.a,{in:h.chart,timeout:1e3,classNames:"app__block",nodeRef:n,unmountOnExit:!0,children:Object(j.jsx)(l.Provider,{value:[f,h,b,E,I],children:Object(j.jsx)("div",{ref:n,children:h.chart&&Object(j.jsx)(B,{})})})}),Object(j.jsx)(o.a,{in:h.chart,timeout:1e3,classNames:"app__block",nodeRef:i,unmountOnExit:!0,children:Object(j.jsx)(l.Provider,{value:[f,h,b,E,I],children:Object(j.jsx)("div",{ref:i,children:h.chart&&Object(j.jsx)(S,{})})})})]})});i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},19:function(e,t,a){e.exports={wrap:"BarChartMonitoring_wrap__2SgQ8",chart:"BarChartMonitoring_chart__2WO10",chart__h2:"BarChartMonitoring_chart__h2__2eSMj",chart__top:"BarChartMonitoring_chart__top__2vSxv","legend-container2":"BarChartMonitoring_legend-container2__3V6hF"}},29:function(e,t,a){e.exports={chart:"BarChart_chart__NgD6N",chart__h2:"BarChart_chart__h2__1L0nG",chart__top:"BarChart_chart__top__P0maK"}},68:function(e,t,a){e.exports={chart:"BarChartVidget_chart__1Y3t4"}},74:function(e,t,a){},9:function(e,t,a){e.exports={indicators:"Indicators_indicators__YP13z",indicators__h2:"Indicators_indicators__h2__tN_OW",indicators__link:"Indicators_indicators__link__248Le",table:"Indicators_table__RYk5m",breadcrumbs:"Indicators_breadcrumbs__1j-hq",breadcrumbs__link:"Indicators_breadcrumbs__link__3UpX_"}}},[[185,1,2]]]);
//# sourceMappingURL=main.d1335209.chunk.js.map