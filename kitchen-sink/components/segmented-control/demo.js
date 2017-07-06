webpackJsonp([42,141],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},31:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(2),c=t(o),l=s(3),u=t(l),i=s(5),k=t(i),r=s(4),d=t(r),g=s(1),f=t(g),m=s(8),v=t(m),h=function(n){function a(){return(0,c["default"])(this,a),(0,k["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,d["default"])(a,n),(0,u["default"])(a,[{key:"render",value:function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.children,c=a.style,l=(0,v["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return f["default"].createElement("div",{className:l,style:c},o)}}]),a}(f["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},32:function(n,a,s){"use strict";s(9),s(43)},43:function(n,a){},592:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(2),c=t(o),l=s(3),u=t(l),i=s(5),k=t(i),r=s(4),d=t(r),g=s(1),f=t(g),m=s(8),v=t(m),h=s(41),b=t(h),C=function(n){function a(n){(0,c["default"])(this,a);var s=(0,k["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.state={selectedIndex:n.selectedIndex},s}return(0,d["default"])(a,n),(0,u["default"])(a,[{key:"componentWillReceiveProps",value:function(n){n.selectedIndex!==this.state.selectedIndex&&this.setState({selectedIndex:n.selectedIndex})}},{key:"onClick",value:function(n,a,s){var t=this.props,e=t.disabled,p=t.onChange,o=t.onValueChange;e||this.state.selectedIndex===a||(n.nativeEvent=n.nativeEvent?n.nativeEvent:{},n.nativeEvent.selectedSegmentIndex=a,n.nativeEvent.value=s,p&&p(n),o&&o(s),this.setState({selectedIndex:a}))}},{key:"renderSegmentItem",value:function(n,a,s){var t,e=this,o=this.props,c=o.prefixCls,l=o.disabled,u=o.tintColor,i=(0,v["default"])((t={},(0,p["default"])(t,c+"-item",!0),(0,p["default"])(t,c+"-item-selected",s),t)),k={color:s?"#fff":u,backgroundColor:s?u:"#fff",borderColor:u};return f["default"].createElement(b["default"],{key:n,disabled:l,activeClassName:c+"-item-active"},f["default"].createElement("div",{className:i,style:k,role:"tab","aria-selected":s&&!l,"aria-disabled":l,onClick:l?void 0:function(s){return e.onClick(s,n,a)}},f["default"].createElement("div",{className:c+"-item-inner"}),a))}},{key:"render",value:function(){var n,a=this,s=this.props,t=s.className,e=s.prefixCls,o=s.style,c=s.disabled,l=s.values,u=void 0===l?[]:l,i=(0,v["default"])((n={},(0,p["default"])(n,t,!!t),(0,p["default"])(n,""+e,!0),(0,p["default"])(n,e+"-disabled",c),n));return f["default"].createElement("div",{className:i,style:o,role:"tablist"},u.map(function(n,s){return a.renderSegmentItem(s,n,s===a.state.selectedIndex)}))}}]),a}(f["default"].Component);a["default"]=C,C.defaultProps={prefixCls:"am-segment",selectedIndex:0,disabled:!1,values:[],onChange:function(){},onValueChange:function(){},style:{},tintColor:""},n.exports=a["default"]},593:function(n,a,s){"use strict";s(9),s(913)},753:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/segmented-control/demo/basic.md",id:"components-segmented-control-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SegmentedControl<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SegmentedControlExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`selectedIndex:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>selectedSegmentIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onValueChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sc-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Simplest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>SelectedIndex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">selectedIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e09\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>TintColor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e09\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">tintColor</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'#ff0000\'</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'0.8rem\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'5rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>onChange<span class="token operator">/</span>onValueChange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e09\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onValueChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onValueChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControlExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var o=s(1),c=(s(10),s(32),s(31)),l=n(c),u=(s(593),s(592)),i=n(u),k=function(n){function a(){var s,p,o;t(this,a);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return s=p=e(this,n.call.apply(n,[this].concat(l))),p.onChange=function(n){console.log("selectedIndex:"+n.nativeEvent.selectedSegmentIndex)},p.onValueChange=function(n){console.log(n)},o=s,e(p,o)}return p(a,n),a.prototype.render=function(){return o.createElement(l["default"],{size:"lg",className:"sc-example"},o.createElement("p",{className:"sub-title"},"Simplest"),o.createElement(i["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c"]}),o.createElement("p",{className:"sub-title"},"Disabled"),o.createElement(i["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c"],disabled:!0}),o.createElement("p",{className:"sub-title"},"SelectedIndex"),o.createElement(i["default"],{selectedIndex:1,values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"]}),o.createElement("p",{className:"sub-title"},"TintColor"),o.createElement(i["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"],tintColor:"#ff0000",style:{height:"0.8rem",width:"5rem"}}),o.createElement("p",{className:"sub-title"},"onChange/onValueChange"),o.createElement(i["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"],onChange:this.onChange,onValueChange:this.onValueChange}))},a}(o.Component);return o.createElement(k,null)},style:".sc-example {\n  padding-bottom: 0.26rem;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.sc-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token number">0.26</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},835:function(n,a,s){n.exports={basic:s(753)}},913:function(n,a){}});