webpackJsonp([32,141],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},16:function(n,a,s){"use strict";s(20)},20:function(n,a){},21:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(7),e=t(p),o=s(2),c=t(o),l=s(3),u=t(l),i=s(5),k=t(i),r=s(4),d=t(r),f=s(1),m=t(f),g=s(8),y=t(g),v=function(n){function a(){return(0,c["default"])(this,a),(0,k["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,d["default"])(a,n),(0,u["default"])(a,[{key:"render",value:function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,o=a.style,c=a.onClick,l=(0,y["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return m["default"].createElement("div",{className:l,style:o,onClick:c})}}]),a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},22:function(n,a,s){"use strict";s(9),s(26)},26:function(n,a){},31:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(7),e=t(p),o=s(2),c=t(o),l=s(3),u=t(l),i=s(5),k=t(i),r=s(4),d=t(r),f=s(1),m=t(f),g=s(8),y=t(g),v=function(n){function a(){return(0,c["default"])(this,a),(0,k["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,d["default"])(a,n),(0,u["default"])(a,[{key:"render",value:function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,o=a.children,c=a.style,l=(0,y["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return m["default"].createElement("div",{className:l,style:c},o)}}]),a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},32:function(n,a,s){"use strict";s(9),s(43)},34:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){return"string"==typeof n}function e(n){return p(n.type)&&j(n.props.children)?h["default"].cloneElement(n,{},n.props.children.split("").join(" ")):p(n)?(j(n)&&(n=n.split("").join(" ")),h["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(6),c=t(o),l=s(7),u=t(l),i=s(2),k=t(i),r=s(3),d=t(r),f=s(5),m=t(f),g=s(4),y=t(g),v=s(1),h=t(v),b=s(8),x=t(b),N=s(25),E=t(N),w=s(41),O=t(w),_=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var p=0,t=Object.getOwnPropertySymbols(n);p<t.length;p++)a.indexOf(t[p])<0&&(s[t[p]]=n[t[p]]);return s},C=/^[\u4e00-\u9fa5]{2}$/,j=C.test.bind(C),P=function(n){function a(){return(0,k["default"])(this,a),(0,m["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,y["default"])(a,n),(0,d["default"])(a,[{key:"render",value:function(){var n,a=this.props,s=a.children,t=a.className,p=a.prefixCls,o=a.type,l=a.size,i=a.inline,k=a.across,r=a.disabled,d=a.icon,f=a.loading,m=a.activeStyle,g=a.activeClassName,y=a.onClick,v=a.delayPressIn,b=a.delayPressOut,N=_(a,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","activeClassName","onClick","delayPressIn","delayPressOut"]),w=(n={},(0,u["default"])(n,t,t),(0,u["default"])(n,p,!0),(0,u["default"])(n,p+"-primary","primary"===o),(0,u["default"])(n,p+"-ghost","ghost"===o),(0,u["default"])(n,p+"-warning","warning"===o),(0,u["default"])(n,p+"-small","small"===l),(0,u["default"])(n,p+"-inline",i),(0,u["default"])(n,p+"-across",k),(0,u["default"])(n,p+"-disabled",r),(0,u["default"])(n,p+"-loading",f),n),C=f?"loading":d,j=h["default"].Children.map(s,e);C&&(w[p+"-icon"]=!0);var P={};return v&&(P.delayPressIn=v),b&&(P.delayPressOut=b),h["default"].createElement(O["default"],(0,c["default"])({activeClassName:g||(m?p+"-active":void 0),disabled:r,activeStyle:m},P),h["default"].createElement("a",(0,c["default"])({role:"button",className:(0,x["default"])(w)},N,{onClick:r?void 0:y,"aria-disabled":r}),C?h["default"].createElement(E["default"],{"aria-hidden":"true",type:C,size:"small"===l?"xxs":"md"}):null,j))}}]),a}(h["default"].Component);P.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},a["default"]=P,n.exports=a["default"]},35:function(n,a,s){"use strict";s(9),s(16),s(45)},43:function(n,a){},45:function(n,a){},336:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(7),e=t(p),o=s(2),c=t(o),l=s(3),u=t(l),i=s(5),k=t(i),r=s(4),d=t(r),f=s(1),m=t(f),g=s(8),y=t(g),v=function(n){function a(){return(0,c["default"])(this,a),(0,k["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,d["default"])(a,n),(0,u["default"])(a,[{key:"render",value:function(){var n,a,s=this.props,t=s.prefixCls,p=s.className,o=s.animating,c=s.toast,l=s.size,u=s.text,i=(0,y["default"])((n={},(0,e["default"])(n,""+t,!0),(0,e["default"])(n,t+"-lg","large"===l),(0,e["default"])(n,t+"-sm","small"===l),(0,e["default"])(n,p,!!p),(0,e["default"])(n,t+"-toast",!!c),n)),k=(0,y["default"])((a={},(0,e["default"])(a,t+"-spinner",!0),(0,e["default"])(a,t+"-spinner-lg",!!c||"large"===l),a));return o?c?m["default"].createElement("div",{className:i},u?m["default"].createElement("div",{className:t+"-content"},m["default"].createElement("span",{className:k,"aria-hidden":"true"}),m["default"].createElement("span",{className:t+"-toast"},u)):m["default"].createElement("div",{className:t+"-content"},m["default"].createElement("span",{className:k,"aria-label":"Loading"}))):u?m["default"].createElement("div",{className:i},m["default"].createElement("span",{className:k,"aria-hidden":"true"}),m["default"].createElement("span",{className:t+"-tip"},u)):m["default"].createElement("div",{className:i},m["default"].createElement("span",{className:k,"aria-label":"loading"})):null}}]),a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-activity-indicator",animating:!0,size:"small",panelColor:"rgba(34,34,34,0.6)",toast:!1},n.exports=a["default"]},337:function(n,a,s){"use strict";s(9),s(380)},380:function(n,a){},644:function(n,a,s){n.exports={content:[["p","\u57fa\u672c\u7684\u6d3b\u52a8\u6307\u793a\u5668\u3002"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/activity-indicator/demo/basic.md",id:"components-activity-indicator-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ActivityIndicator<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      animating<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>closeTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showToast <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> animating<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>animating <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>closeTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> animating<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>animating <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>icon\u65e0\u6587\u6848<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">animating</span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>icon\u5e26\u6587\u6848<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u52a0\u8f7d\u4e2d...<span class="token punctuation">"</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u5927\u53f7icon\uff0c\u81ea\u5b9a\u4e49\u6587\u6848\u6837\u5f0f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u52a0\u8f7d\u4e2d<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toast-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u70b9\u51fb\u663e\u793a Toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toast-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name">toast</span>\n                <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6b63\u5728\u52a0\u8f7d<span class="token punctuation">"</span></span>\n                <span class="token attr-name">animating</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>animating<span class="token punctuation">}</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function e(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var o=s(1),c=(s(10),s(32),s(31)),l=n(c),u=(s(35),s(34)),i=n(u),k=(s(22),s(21)),r=n(k),d=(s(337),s(336)),f=n(d),m=function(n){function a(s){t(this,a);var e=p(this,n.call(this,s));return e.showToast=function(){e.setState({animating:!e.state.animating}),e.closeTimer=setTimeout(function(){e.setState({animating:!e.state.animating})},1e3)},e.state={animating:!1},e}return e(a,n),a.prototype.componentWillUnmount=function(){clearTimeout(this.closeTimer)},a.prototype.render=function(){return o.createElement("div",null,o.createElement(l["default"],null,o.createElement("div",{className:"loading-container"},o.createElement("p",{className:"sub-title"},"icon\u65e0\u6587\u6848"),o.createElement("div",{className:"loading-example"},o.createElement(f["default"],{animating:!0})),o.createElement(r["default"],{size:"xl"}),o.createElement("p",{className:"sub-title"},"icon\u5e26\u6587\u6848"),o.createElement("div",{className:"loading-example"},o.createElement(f["default"],{text:"\u52a0\u8f7d\u4e2d..."})),o.createElement(r["default"],{size:"xl"}),o.createElement("p",{className:"sub-title"},"\u5927\u53f7icon\uff0c\u81ea\u5b9a\u4e49\u6587\u6848\u6837\u5f0f"),o.createElement("div",{className:"loading-example"},o.createElement("div",{className:"align"},o.createElement(f["default"],{size:"large"}),o.createElement("span",{style:{marginTop:8}},"\u52a0\u8f7d\u4e2d...")))),o.createElement("div",{className:"toast-container"},o.createElement(r["default"],{size:"xl"}),o.createElement(i["default"],{onClick:this.showToast},"\u70b9\u51fb\u663e\u793a Toast"),o.createElement("div",{className:"toast-example"},o.createElement(f["default"],{toast:!0,text:"\u6b63\u5728\u52a0\u8f7d",animating:this.state.animating})))))},a}(o.Component);return o.createElement(m,null)},style:".loading-example {\n  display: flex;\n  justify-content: flex-start;\n}\n.align {\n  display: flex;\n  flex-direction: column;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.loading-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.align</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},804:function(n,a,s){n.exports={basic:s(644)}}});