(this.webpackJsonpwallet=this.webpackJsonpwallet||[]).push([[0],{38:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=a(21),i=(a(38),a(7)),u=a(2),s=a(3),d=a(15),m=a(9),p=a(10),h=a(11),b=a(12),E=a(17),v=a(25),f="userForm",y="userWallet",j="deleteButton",g="editButton",O="saveWallet",w="saveNewWallet";var x=function(e,t){return{type:O,payload:Object(s.a)(Object(s.a)({},t),{},{exchangeRates:e})}};var C=function(e){return{type:j,payload:e}},k=function(e){return{type:g,payload:e}},D=(a(43),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(){return Object(d.a)({},n,r)}))},e.handleSubmit=function(){var t=e.props,a=t.userDispatch,n=t.history;a(Object(s.a)({},e.state)),n.push("/carteira")},e.state={email:"",password:""},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-container-title"},"Wallet"),r.a.createElement("form",{className:"login-container-form"},r.a.createElement("label",{htmlFor:"email"},"Login",r.a.createElement("input",{"data-testid":"email-input",id:"email",type:"email",name:"email",placeholder:"Escreva seu email aqui",value:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"password"},"Senha",r.a.createElement("input",{"data-testid":"password-input",id:"password",type:"password",name:"password",placeholder:"Escreva sua senha aqui",value:a,onChange:this.handleChange})),r.a.createElement("button",{type:"button",onClick:this.handleSubmit,disabled:!/\S+@\S+\.\S+/.test(t)||a.length<6},"Entrar")))}}]),a}(r.a.Component)),S=Object(i.b)(null,(function(e){return{userDispatch:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))(D),N=a(22),T=(a(44),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.userEmail,a=e.userCoin;return r.a.createElement("header",{className:"header-container-form"},r.a.createElement("p",{"data-testid":"email-field"},"Email: ".concat(t)),r.a.createElement("div",{className:"header-container-form-field"},r.a.createElement("p",null,"Despesa Total:"),r.a.createElement("p",{"data-testid":"total-field"},a.reduce((function(e,t){return e+Number(t.value)*Number(t.exchangeRates[t.currency].ask)}),0).toFixed(2)),r.a.createElement("p",{"data-testid":"header-currency-field"},"BRL")))}}]),a}(n.Component)),F=Object(i.b)((function(e){return{userEmail:e.user.email,userCoin:e.wallet.expenses}}))(T),B=(a(45),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(function(){var e=Object(v.a)(Object(E.a)().mark((function e(t){var a,n,r;return Object(E.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return a=e.sent,e.next=5,a.json();case 5:delete(n=e.sent).USDT,r=Object.keys(n),t({type:y,payload:r});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props,t=e.currencies,a=e.expenses,n=e.editor,l=e.value,c=e.description,o=e.method,i=e.tag,u=e.currency,s=e.getInfos,d=e.saveButton,m=e.editButton;return r.a.createElement("form",{className:"walletForm-container-form"},r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{"data-testid":"value-input",type:"number",id:"value",name:"value",value:l,onChange:s})),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{type:"select",name:"currency",id:"currency","data-testid":"currency-input",value:u,onChange:s},t.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("label",{htmlFor:"method"},"Tipo de Pagamento:",r.a.createElement("select",{type:"select",name:"method",id:"method","data-testid":"method-input",value:o,onChange:s},r.a.createElement("option",null,"Dinheiro"),r.a.createElement("option",null,"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",null,"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag"},"Categoria:",r.a.createElement("select",{type:"tag",name:"tag",id:"tag","data-testid":"tag-input",value:i,onChange:s},r.a.createElement("option",null,"Alimenta\xe7\xe3o"),r.a.createElement("option",null,"Lazer"),r.a.createElement("option",null,"Trabalho"),r.a.createElement("option",null,"Transporte"),r.a.createElement("option",null,"Sa\xfade"))),r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",r.a.createElement("input",{"data-testid":"description-input",type:"text",id:"description",name:"description",value:c,onChange:s})),r.a.createElement("button",{type:"button","data-testid":"save-expense-button",disabled:!l||!c,onClick:function(){n?m():d(a)}},n?"Editar despesa":"Adicionar despesa"))}}]),a}(n.Component)),W=Object(i.b)((function(e){return{currencies:e.wallet.currencies,expenses:e.wallet.expenses,editor:e.wallet.editor}}))(B),R=(a(46),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleDelete=function(t){(0,e.props.dispatch)(C(t))},e.handleEdit=function(t){var a=e.props,n=a.dispatch,r=a.editButton;n(k(t)),r(t)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.userCoin;return r.a.createElement("div",{className:"table-container"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.tag),r.a.createElement("td",null,t.method),r.a.createElement("td",null,Number(t.value).toFixed(2)),r.a.createElement("td",null,t.exchangeRates[t.currency].name),r.a.createElement("td",null,Number(t.exchangeRates[t.currency].ask).toFixed(2)),r.a.createElement("td",null,(t.exchangeRates[t.currency].ask*Number(t.value)).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"edit-btn",onClick:function(){e.handleEdit(t.id)}},"Editar"),r.a.createElement("button",{type:"button","data-testid":"delete-btn",onClick:function(){e.handleDelete(t.id)}},"Excluir")))})))))}}]),a}(n.Component)),M=Object(i.b)((function(e){return{userCoin:e.wallet.expenses}}))(R),A=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(){return Object(d.a)({},n,r)}))},e.clean=function(){e.setState({value:"",description:"",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",currency:"USD"})},e.saveExpense=function(t){var a,n=e.props.dispatch,r={id:t.length};Object.assign(r,e.state),n((a=r,function(){var e=Object(v.a)(Object(E.a)().mark((function e(t){var n,r;return Object(E.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,delete a.USDT,e.abrupt("return",t(x(r,a)));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e.clean()},e.editExpense=function(t){var a=e.props.expenses.find((function(e){return e.id===t})),n=a.value,r=a.description,l=a.method,c=a.tag,o=a.currency;e.setState({value:n,description:r,method:l,tag:c,currency:o})},e.newWallet=function(){var t=e.props,a=t.dispatch,n=t.idToEdit,r=t.expenses,l=e.state,c=l.value,o=l.description,i=l.method,u=l.tag,s=l.currency,d=r.findIndex((function(e){return e.id===n})),m=Object(N.a)(r);m[d].value=c,m[d].description=o,m[d].method=i,m[d].tag=u,m[d].currency=s,a({type:w,payload:m}),e.clean()},e.state={value:"",description:"",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",currency:"USD"},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.description,n=e.method,l=e.tag,c=e.currency;return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(W,{value:t,description:a,method:n,tag:l,currency:c,getInfos:this.handleChange,saveButton:this.saveExpense,editButton:this.newWallet}),r.a.createElement(M,{editButton:this.editExpense}))}}]),a}(r.a.Component),I=Object(i.b)((function(e){return{idToEdit:e.wallet.idToEdit,expenses:e.wallet.expenses}}))(A);var U=function(){return r.a.createElement(o.b,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:S}),r.a.createElement(u.a,{path:"/carteira",component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(13),V=a(32),q=a(33),z={email:""};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;return t.type===f?t.payload:e},P={currencies:[],expenses:[],editor:!1,idToEdit:0};var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(s.a)(Object(s.a)({},e),{},{currencies:t.payload});case O:return Object(s.a)(Object(s.a)({},e),{},{expenses:[].concat(Object(N.a)(e.expenses),[t.payload]),editor:!1,idToEdit:0});case j:return Object(s.a)(Object(s.a)({},e),{},{expenses:e.expenses.filter((function(e){return Number(e.id)!==Number(t.payload)}))});case g:return Object(s.a)(Object(s.a)({},e),{},{editor:!0,idToEdit:t.payload});case w:return Object(s.a)(Object(s.a)({},e),{},{expenses:t.payload,editor:!1,idToEdit:0});default:return e}},G=Object(L.combineReducers)({user:J,wallet:$}),H=Object(L.createStore)(G,Object(V.composeWithDevTools)(Object(L.applyMiddleware)(q.a)));window.Cypress&&(window.store=H);var K=H;c.a.render(r.a.createElement(o.a,null,r.a.createElement(i.a,{store:K},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.91303411.chunk.js.map