(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){t.exports=n(43)},22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),r=n(14),c=n.n(r),i=(n(22),n(2)),s=n(3),o=n(5),u=n(4),h=n(6),d=(n(23),n(15)),m=n.n(d),p=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({prod:this.props.data})}},{key:"render",value:function(){var t,e,n,a,r,c,i,s,o=this,u=[];if(this.state.prod){this.state.prod.images.map(function(t){u.push(t.url_source)});var h=u.map(function(t){return l.a.createElement("img",{className:"product",src:t,alt:o.state.name})});t=l.a.createElement("h1",null,this.state.prod.name),e=l.a.createElement("h2",null,"Price: ",this.state.prod.price),n=l.a.createElement("h2",null,"Brand: ",this.state.prod.brand),a=l.a.createElement("h2",null,"Condition: ",this.state.prod.condition),r=l.a.createElement("h2",null,"Stock: ",this.state.prod.stock),s=l.a.createElement("div",null,l.a.createElement("h2",null,"Shipping info:"),l.a.createElement("h3",null,"Length: ",this.state.prod.shipping_depth," ",this.state.prod.dimensions_unit,", Width: ",this.state.prod.shipping_width," ",this.state.prod.dimensions_unit,", Height: ",this.state.prod.shipping_height," ",this.state.prod.dimensions_unit,l.a.createElement("br",null),"Weight: ",this.state.prod.weight," ",this.state.prod.weight_unit)),i=l.a.createElement("table",{className:"full center"},l.a.createElement("thead",null,l.a.createElement("td",null,h))),c=l.a.createElement("button",{onClick:this.props.check,id:this.state.prod.id,type:"button"},"Close")}return l.a.createElement("div",{className:"center"},t,n,i,e,a,r,s,c)}}]),e}(a.Component),f=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).handleClick=function(t){t.preventDefault();var e=t.target.id;n.updateState(e)},n.closeButtonCheck=function(t){t.preventDefault(),n.setState({id:!1})},n.state={},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){console.log("table mounted"),this.apiCheck()}},{key:"apiCheck",value:function(){var t=this;return m.a.get("https://api.software.madkting.com/shops/76/products/?page_size=100",{headers:{Accept:"application/json",Authorization:"Token cb0763f1c60a3583dd23f629e3a8bf9c2eebc8a0"}}).then(function(e){t.setState({results:e.data})}).catch(function(t){console.log(t)})}},{key:"updateState",value:function(t){this.setState({id:t})}},{key:"render",value:function(){var t,e,n=this;if(console.log("state of state for render",this.state),this.state.id){var a=this.state.id,r=this.state.results[a];return l.a.createElement(p,{data:r,check:this.closeButtonCheck})}return this.state.results?(e=this.state.results.map(function(t,e){var a=t.images[0].url_source,r=l.a.createElement("img",{className:"pic",src:a,alt:t.name}),c=l.a.createElement("button",{onClick:n.handleClick,id:e,type:"button"},"Product details");return l.a.createElement("tr",null,l.a.createElement("td",null,e+1),l.a.createElement("td",null,t.name),l.a.createElement("td",null,r),l.a.createElement("td",null,t.price),l.a.createElement("td",null,t.stock),l.a.createElement("td",null,c))}),t=l.a.createElement("table",{className:"full center"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Stock"),l.a.createElement("th",null))),l.a.createElement("tbody",null,e))):(console.log("state is not ready"),t=l.a.createElement("h1",{className:"center"},"LOADING...")),t}}]),e}(a.Component),E=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return l.a.createElement(f,null)}}]),e}(a.Component),b=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return l.a.createElement(E,null)}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.50ad9f02.chunk.js.map