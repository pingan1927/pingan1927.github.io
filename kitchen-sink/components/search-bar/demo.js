webpackJsonp([28,141],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},16:function(n,a,s){"use strict";s(20)},20:function(n,a){},21:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(2),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),f=t(k),d=s(1),h=t(d),g=s(8),m=t(g),v=function(n){function a(){return(0,c["default"])(this,a),(0,r["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,f["default"])(a,n),(0,u["default"])(a,[{key:"render",value:function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.style,c=a.onClick,l=(0,m["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return h["default"].createElement("div",{className:l,style:o,onClick:c})}}]),a}(h["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},22:function(n,a,s){"use strict";s(9),s(26)},26:function(n,a){},31:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(2),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),f=t(k),d=s(1),h=t(d),g=s(8),m=t(g),v=function(n){function a(){return(0,c["default"])(this,a),(0,r["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,f["default"])(a,n),(0,u["default"])(a,[{key:"render",value:function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.children,c=a.style,l=(0,m["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return h["default"].createElement("div",{className:l,style:c},o)}}]),a}(h["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},32:function(n,a,s){"use strict";s(9),s(43)},34:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&_(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(_(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(6),c=t(o),l=s(7),u=t(l),i=s(2),r=t(i),k=s(3),f=t(k),d=s(5),h=t(d),g=s(4),m=t(g),v=s(1),y=t(v),b=s(8),C=t(b),w=s(25),S=t(w),B=s(41),E=t(B),x=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},O=/^[\u4e00-\u9fa5]{2}$/,_=O.test.bind(O),P=function(n){function a(){return(0,r["default"])(this,a),(0,h["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m["default"])(a,n),(0,f["default"])(a,[{key:"render",value:function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.type,l=a.size,i=a.inline,r=a.across,k=a.disabled,f=a.icon,d=a.loading,h=a.activeStyle,g=a.activeClassName,m=a.onClick,v=a.delayPressIn,b=a.delayPressOut,w=x(a,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","activeClassName","onClick","delayPressIn","delayPressOut"]),B=(n={},(0,u["default"])(n,t,t),(0,u["default"])(n,e,!0),(0,u["default"])(n,e+"-primary","primary"===o),(0,u["default"])(n,e+"-ghost","ghost"===o),(0,u["default"])(n,e+"-warning","warning"===o),(0,u["default"])(n,e+"-small","small"===l),(0,u["default"])(n,e+"-inline",i),(0,u["default"])(n,e+"-across",r),(0,u["default"])(n,e+"-disabled",k),(0,u["default"])(n,e+"-loading",d),n),O=d?"loading":f,_=y["default"].Children.map(s,p);O&&(B[e+"-icon"]=!0);var P={};return v&&(P.delayPressIn=v),b&&(P.delayPressOut=b),y["default"].createElement(E["default"],(0,c["default"])({activeClassName:g||(h?e+"-active":void 0),disabled:k,activeStyle:h},P),y["default"].createElement("a",(0,c["default"])({role:"button",className:(0,C["default"])(B)},w,{onClick:k?void 0:m,"aria-disabled":k}),O?y["default"].createElement(S["default"],{"aria-hidden":"true",type:O,size:"small"===l?"xxs":"md"}):null,_))}}]),a}(y["default"].Component);P.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},a["default"]=P,n.exports=a["default"]},35:function(n,a,s){"use strict";s(9),s(16),s(45)},43:function(n,a){},45:function(n,a){},354:function(n,a){"use strict";function s(){}Object.defineProperty(a,"__esModule",{value:!0});a.defaultProps={prefixCls:"am-search",placeholder:"",onSubmit:s,onChange:s,onFocus:s,onBlur:s,onClear:s,showCancelButton:!1,cancelText:"\u53d6\u6d88",disabled:!1}},355:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(2),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),f=t(k),d=s(1),h=t(d),g=s(8),m=t(g),v=s(354),y=function(n){function a(n){(0,c["default"])(this,a);var s=(0,r["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));s.onSubmit=function(n){n.preventDefault(),s.props.onSubmit&&s.props.onSubmit(s.state.value),s.refs.searchInput.blur()},s.onChange=function(n){s.state.focus||s.setState({focus:!0});var a=n.target.value;"value"in s.props||s.setState({value:a}),s.props.onChange&&s.props.onChange(a)},s.onFocus=function(){s.setState({focus:!0}),s.firstFocus=!0,"focused"in s.props||s.setState({focused:!0}),s.props.onFocus&&s.props.onFocus(),"input"===document.activeElement.tagName.toLowerCase()&&(s.scrollIntoViewTimeout=setTimeout(function(){try{document.activeElement.scrollIntoViewIfNeeded()}catch(n){}},100))},s.onBlur=function(){setTimeout(function(){s.setState({focus:!1})},0),"focused"in s.props||s.setState({focused:!1}),s.props.onBlur&&s.props.onBlur()},s.onClear=function(){"value"in s.props||s.setState({value:""}),s.props.onClear&&s.props.onClear(""),s.props.onChange&&s.props.onChange(""),setTimeout(function(){s.refs.searchInput.focus()},0)},s.onCancel=function(){s.props.onCancel?s.props.onCancel(s.state.value):s.onClear(),s.refs.searchInput.blur()};var t=void 0;return t="value"in n?n.value||"":"defaultValue"in n?n.defaultValue:"",s.state={value:t,focus:!1,focused:n.focused||!1},s}return(0,f["default"])(a,n),(0,u["default"])(a,[{key:"componentDidMount",value:function(){var n=window.getComputedStyle(this.refs.rightBtn);this.rightBtnInitMarginleft=n["margin-left"],(this.props.autoFocus||this.state.focused)&&navigator.userAgent.indexOf("AlipayClient")>0&&this.refs.searchInput.focus(),this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var n=this.refs.syntheticPhContainer.getBoundingClientRect().width;this.refs.searchInputContainer.className.indexOf(this.props.prefixCls+"-start")>-1?(this.refs.syntheticPh.style.width=Math.ceil(n)+"px",this.props.showCancelButton||(this.refs.rightBtn.style.marginRight=0)):(this.refs.syntheticPh.style.width="100%",this.props.showCancelButton||(this.refs.rightBtn.style.marginRight="-"+(this.refs.rightBtn.offsetWidth+parseInt(this.rightBtnInitMarginleft,10))+"px")),this.state.focused&&this.refs.searchInput.focus()}},{key:"componentWillReceiveProps",value:function(n){"value"in n&&this.setState({value:n.value}),"focused"in n&&this.setState({focused:n.focused})}},{key:"componentWillUnmount",value:function(){this.scrollIntoViewTimeout&&(clearTimeout(this.scrollIntoViewTimeout),this.scrollIntoViewTimeout=null)}},{key:"render",value:function(){var n,a,s,t=this.props,e=t.prefixCls,o=t.showCancelButton,c=t.disabled,l=t.placeholder,u=t.cancelText,i=t.className,r=t.style,k=this.state,f=k.value,d=k.focus,g=(0,m["default"])((n={},(0,p["default"])(n,""+e,!0),(0,p["default"])(n,e+"-start",d||f&&f.length>0),(0,p["default"])(n,i,i),n)),v=(0,m["default"])((a={},(0,p["default"])(a,e+"-clear",!0),(0,p["default"])(a,e+"-clear-show",d&&f&&f.length>0),a)),y=(0,m["default"])((s={},(0,p["default"])(s,e+"-cancel",!0),(0,p["default"])(s,e+"-cancel-show",o||d||f&&f.length>0),(0,p["default"])(s,e+"-cancel-anim",this.firstFocus),s));return h["default"].createElement("form",{onSubmit:this.onSubmit,className:g,style:r,ref:"searchInputContainer",action:"#"},h["default"].createElement("div",{className:e+"-input"},h["default"].createElement("div",{className:e+"-synthetic-ph",ref:"syntheticPh"},h["default"].createElement("span",{className:e+"-synthetic-ph-container",ref:"syntheticPhContainer"},h["default"].createElement("i",{className:e+"-synthetic-ph-icon"}),h["default"].createElement("span",{className:e+"-synthetic-ph-placeholder",style:{visibility:l&&!f?"visible":"hidden"}},l))),h["default"].createElement("input",{type:"search",className:e+"-value",value:f,disabled:c,placeholder:l,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:"searchInput"}),h["default"].createElement("a",{onClick:this.onClear,className:v})),h["default"].createElement("div",{className:y,onClick:this.onCancel,ref:"rightBtn"},u))}}]),a}(h["default"].Component);a["default"]=y,y.defaultProps=v.defaultProps,n.exports=a["default"]},356:function(n,a,s){"use strict";s(9),s(388)},388:function(n,a){},750:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/search-bar/demo/basic.md",id:"components-search-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchBar<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SearchBarExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n    focused<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange<span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(value, \'onChange\');</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  clear <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u666e\u901a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u641c\u7d22<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u81ea\u52a8\u83b7\u53d6\u5149\u6807\uff0c\u652f\u4ed8\u5b9d\u5ba2\u6237\u7aef\u6709\u6548<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u83b7\u53d6\u5149\u6807\uff0c\u652f\u4ed8\u5b9d\u5ba2\u6237\u7aef\u6709\u6548<span class="token punctuation">"</span></span> <span class="token attr-name">autoFocus</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span>\n        <span class="token attr-name">focused</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>focused<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            focused<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              focused<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\u70b9\u51fb\u83b7\u53d6\u5149\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u663e\u793a\u53d6\u6d88\u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u641c\u7d22<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onSubmit\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onClear\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onFocus\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onBlur\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onCancel\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showCancelButton</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var o=s(1),c=(s(10),s(35),s(34)),l=n(c),u=(s(22),s(21)),i=n(u),r=(s(356),s(355)),k=n(r),f=(s(32),s(31)),d=n(f),h=function(n){function a(){var s,p,o;t(this,a);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return s=p=e(this,n.call.apply(n,[this].concat(l))),p.state={value:"\u7f8e\u98df",focused:!1},p.onChange=function(n){p.setState({value:n})},p.clear=function(){p.setState({value:""})},o=s,e(p,o)}return p(a,n),a.prototype.render=function(){var n=this;return o.createElement("div",null,o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"\u666e\u901a")),o.createElement(k["default"],{placeholder:"\u641c\u7d22"}),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"\u81ea\u52a8\u83b7\u53d6\u5149\u6807\uff0c\u652f\u4ed8\u5b9d\u5ba2\u6237\u7aef\u6709\u6548")),o.createElement(k["default"],{placeholder:"\u81ea\u52a8\u83b7\u53d6\u5149\u6807\uff0c\u652f\u4ed8\u5b9d\u5ba2\u6237\u7aef\u6709\u6548",autoFocus:!0}),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807")),o.createElement(k["default"],{placeholder:"\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807",focused:this.state.focused,onFocus:function(){n.setState({focused:!1})}}),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement(l["default"],{onClick:function(){n.setState({focused:!0})},type:"primary"},"\u70b9\u51fb\u83b7\u53d6\u5149\u6807")),o.createElement(i["default"],null),o.createElement(d["default"],null,o.createElement("div",{className:"sub-title"},"\u663e\u793a\u53d6\u6d88\u6309\u94ae")),o.createElement(k["default"],{value:this.state.value,placeholder:"\u641c\u7d22",onSubmit:function(n){return console.log(n,"onSubmit")},onClear:function(n){return console.log(n,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return console.log("onCancel")},showCancelButton:!0,onChange:this.onChange}))},a}(o.Component);return o.createElement(h,null)},style:".am-search {\n  border-bottom: 1px solid #ddd;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.am-search</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#ddd</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},834:function(n,a,s){n.exports={basic:s(750)}}});