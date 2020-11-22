(this["webpackJsonploan-app"]=this["webpackJsonploan-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),s=n(5),l=n.n(s),r=(n(11),n(2)),d=n(3),j=(n(12),n(13),function(e){return Object(a.jsxs)("table",{className:"Table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Month"}),Object(a.jsx)("td",{children:"Initial capital balance"}),Object(a.jsx)("td",{children:"Payment of interest"}),Object(a.jsx)("td",{children:"Credit repayment"}),Object(a.jsx)("td",{children:"Full installment"}),Object(a.jsx)("td",{children:"Remaining outstanding"})]})}),Object(a.jsx)("tbody",{children:e.data.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.month}),Object(a.jsx)("td",{children:e.initialCapitalBalance.toFixed(2)}),Object(a.jsx)("td",{children:e.paymentOfInterest.toFixed(2)}),Object(a.jsx)("td",{children:e.creditRepayment.toFixed(2)}),Object(a.jsx)("td",{children:e.fullInstallment.toFixed(2)}),Object(a.jsx)("td",{children:e.remainingOutstanding.toFixed(2)})]},e.month)}))})]})}),b=function(e){var t=1+e.interest/100/12,n=12*e.time,a=e.amount*Math.pow(t,n)*(t-1)/(Math.pow(t,n)-1);return a.toFixed(2)},o=function(e,t){var n=[],a={month:0,initialCapitalBalance:e.amount,paymentOfInterest:0,creditRepayment:0,fullInstallment:0,remainingOutstanding:0};if("fixed"===t)for(var i=0,c=0;c<12*e.time;c++){var s=e.amount-i,l=s*(e.interest/100)*(365/12)/365,r=s*(e.interest/100/12);i+=Number(b(e))-r,a={month:c+1,initialCapitalBalance:s,paymentOfInterest:l,creditRepayment:Number(b(e))-r,fullInstallment:Number(b(e))-r+l,remainingOutstanding:e.amount-i},n.push(a)}else for(var d=e.amount,j=0;j<12*e.time;j++){var o=(e.amount-j*m(e))*(e.interest/100)/12,u=d;d-=m(e),a={month:j+1,initialCapitalBalance:u,paymentOfInterest:o,creditRepayment:m(e),fullInstallment:m(e)+o,remainingOutstanding:d},n.push(a)}return n},m=function(e){return e.amount/(12*e.time)},u=function(e){for(var t=0,n=0;n<12*e.time;n++)t+=(e.amount-n*m(e))*(e.interest/100)/12;return t},p=function(e){var t=o(e,"declining"),n=t.shift(),a=t.pop();return{min:a?a.fullInstallment:0,max:n?n.fullInstallment:0}},h=function(){var e=Object(i.useState)({amount:0,time:0,interest:3.5}),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)("housing"),l=Object(d.a)(s,2),m=l[0],h=l[1],O=Object(i.useState)(!1),x=Object(d.a)(O,2),f=x[0],g=x[1],_=Object(i.useState)(""),v=Object(d.a)(_,2),N=v[0],y=v[1],A=Object(i.useState)("fixed"),F=Object(d.a)(A,2),C=F[0],I=F[1];Object(i.useEffect)((function(){c("housing"===m?Object(r.a)(Object(r.a)({},n),{},{interest:3.5}):Object(r.a)(Object(r.a)({},n),{},{interest:5}))}),[m]);var k=function(e){var t=e.target;h(t.name)},w=function(e){var t=e.target;I(t.name)},S=12*n.time*Number(N),B=S-n.amount,R=n.amount<=0||n.time<=0;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App__header",children:Object(a.jsx)("h1",{children:"simple loan calculator"})}),Object(a.jsxs)("main",{className:"App__main",children:[Object(a.jsxs)("form",{className:"App__form",children:[Object(a.jsxs)("div",{className:"App__radio-wrapper",children:[Object(a.jsxs)("label",{className:"App__radio",children:["Housing loan",Object(a.jsx)("input",{type:"checkbox",checked:"housing"===m,onChange:k,name:"housing",disabled:f})]}),Object(a.jsxs)("label",{className:"App__radio",children:["Car loan",Object(a.jsx)("input",{type:"checkbox",checked:"car"===m,onChange:k,name:"car",disabled:f})]})]}),Object(a.jsxs)("div",{className:"App__input-wrapper",children:[Object(a.jsxs)("label",{className:"App__input",children:["Desired amount:",Object(a.jsx)("input",{type:"number",value:n.amount,onChange:function(e){var t=e.target;c(Object(r.a)(Object(r.a)({},n),{},{amount:Number(t.value)}))},className:"App__input-box",disabled:f})]}),Object(a.jsxs)("label",{className:"App__input",children:["Payback time (in years):",Object(a.jsx)("input",{type:"number",value:n.time,onChange:function(e){var t=e.target;c(Object(r.a)(Object(r.a)({},n),{},{time:Number(t.value)}))},className:"App__input-box",disabled:f})]})]}),Object(a.jsxs)("div",{className:"App__radio-wrapper",children:[Object(a.jsxs)("label",{className:"App__radio",children:["Declining instalments",Object(a.jsx)("input",{type:"checkbox",checked:"declining"===C,onChange:w,name:"declining",disabled:f})]}),Object(a.jsxs)("label",{className:"App__radio",children:["Fixed instalments",Object(a.jsx)("input",{type:"checkbox",checked:"fixed"===C,onChange:w,name:"fixed",disabled:f})]})]}),Object(a.jsx)("button",{type:"submit",onClick:function(e){if(e.preventDefault(),"fixed"===C){var t=b(n);y(t)}g(!0)},disabled:R,className:"App__btn",children:"calculate"}),f&&Object(a.jsx)("button",{type:"button",onClick:function(){c({amount:0,time:0,interest:3.5}),g(!1)},className:"App__btn",children:"reset"})]}),f&&Object(a.jsxs)(a.Fragment,{children:["fixed"===C?Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Total monthly rate: \xa0",Object(a.jsx)("span",{children:N})]}),Object(a.jsxs)("p",{children:["Full cost of credit: \xa0",Object(a.jsx)("span",{children:S.toFixed(2)})]}),Object(a.jsxs)("p",{children:["Amount of interest: \xa0",Object(a.jsx)("span",{children:B.toFixed(2)})]})]}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Amount of the first instalment: \xa0",Object(a.jsx)("span",{children:p(n).max.toFixed(2)})]}),Object(a.jsxs)("p",{children:["Amount of the last instalment: \xa0",Object(a.jsx)("span",{children:p(n).min.toFixed(2)})]}),Object(a.jsxs)("p",{children:["Interest sum: \xa0",Object(a.jsx)("span",{children:u(n).toFixed(2)})]})]}),Object(a.jsx)(j,{data:o(n,C)})]})]}),Object(a.jsx)("footer",{className:"App__footer",children:Object(a.jsx)("p",{children:"made by EDR"})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),O()}],[[14,1,2]]]);
//# sourceMappingURL=main.f50c0160.chunk.js.map