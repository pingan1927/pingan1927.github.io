webpackJsonp([34,141],{9:function(n,s,a){"use strict";a(14),a(13)},13:function(n,s){},14:function(n,s){},16:function(n,s,a){"use strict";a(20)},17:function(n,s){"use strict";s.__esModule=!0,s["default"]=function(n,s){var a={};for(var t in n)s.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a}},18:function(n,s,a){"use strict";a(9),a(27)},20:function(n,s){},27:function(n,s){},359:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0});var e=a(6),o=t(e),p=a(7),u=t(p),i=a(2),c=t(i),l=a(3),r=t(l),d=a(5),k=t(d),f=a(4),m=t(f),h=a(1),g=t(h),v=a(8),b=t(v),y=a(404),w=t(y),I=a(25),C=t(I),M=function(n,s){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&s.indexOf(t)<0&&(a[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)s.indexOf(t[e])<0&&(a[t[e]]=n[t[e]]);return a},N=function(n){function s(){return(0,c["default"])(this,s),(0,k["default"])(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return(0,m["default"])(s,n),(0,r["default"])(s,[{key:"render",value:function(){var n,s=this.props,t=s.className,e=s.showNumber,p=M(s,["className","showNumber"]),i=(0,b["default"])((n={},(0,u["default"])(n,t,!!t),(0,u["default"])(n,"showNumber",!!e),n));return g["default"].createElement(w["default"],(0,o["default"])({upHandler:g["default"].createElement(C["default"],{type:a(453),size:"xxs"}),downHandler:g["default"].createElement(C["default"],{type:a(452),size:"xxs"})},p,{ref:"inputNumber",className:i}))}}]),s}(g["default"].Component);s["default"]=N,N.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!1,showNumber:!1,focusOnUpDown:!1,useTouch:!0},n.exports=s["default"]},360:function(n,s,a){"use strict";a(9),a(16),a(389)},389:function(n,s){},403:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0});var e=a(17),o=t(e),p=a(2),u=t(p),i=a(3),c=t(i),l=a(5),r=t(l),d=a(4),k=t(d),f=a(1),m=t(f),h=a(12),g=t(h),v=a(41),b=t(v),y=function(n){function s(){return(0,u["default"])(this,s),(0,r["default"])(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return(0,k["default"])(s,n),(0,c["default"])(s,[{key:"render",value:function(){var n=this.props,s=n.prefixCls,a=n.disabled,t=(0,o["default"])(n,["prefixCls","disabled"]);return m["default"].createElement(b["default"],{disabled:a,activeClassName:s+"-handler-active"},m["default"].createElement("span",t))}}]),s}(f.Component);y.propTypes={prefixCls:g["default"].string,disabled:g["default"].bool},s["default"]=y,n.exports=s["default"]},404:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}function o(n){n.preventDefault()}Object.defineProperty(s,"__esModule",{value:!0});var p=a(7),u=t(p),i=a(6),c=t(i),l=a(1),r=t(l),d=a(12),k=t(d),f=a(19),m=t(f),h=a(8),g=t(h),v=a(405),b=t(v),y=a(403),w=t(y),I=(0,m["default"])({displayName:"InputNumber",propTypes:{focusOnUpDown:k["default"].bool,onChange:k["default"].func,onKeyDown:k["default"].func,onKeyUp:k["default"].func,prefixCls:k["default"].string,disabled:k["default"].bool,onFocus:k["default"].func,onBlur:k["default"].func,readOnly:k["default"].bool,max:k["default"].number,min:k["default"].number,step:k["default"].oneOfType([k["default"].number,k["default"].string]),upHandler:k["default"].node,downHandler:k["default"].node,useTouch:k["default"].bool,formatter:k["default"].func,parser:k["default"].func,onMouseEnter:k["default"].func,onMouseLeave:k["default"].func,onMouseOver:k["default"].func,onMouseOut:k["default"].func,precision:k["default"].number},mixins:[b["default"]],getDefaultProps:function(){return{focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number"}},componentDidMount:function(){this.componentDidUpdate()},componentWillUpdate:function(){try{this.start=this.refs.input.selectionStart,this.end=this.refs.input.selectionEnd}catch(n){}},componentDidUpdate:function(){if(this.props.focusOnUpDown&&this.state.focused){var n=this.refs.input.setSelectionRange;n&&"function"==typeof n&&void 0!==this.start&&void 0!==this.end&&this.start!==this.end?this.refs.input.setSelectionRange(this.start,this.end):this.focus()}},onKeyDown:function C(n){if(38===n.keyCode){var s=this.getRatio(n);this.up(n,s),this.stop()}else if(40===n.keyCode){var a=this.getRatio(n);this.down(n,a),this.stop()}var C=this.props.onKeyDown;if(C){for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];C.apply(void 0,[n].concat(e))}},onKeyUp:function M(n){this.stop();var M=this.props.onKeyUp;if(M){for(var s=arguments.length,a=Array(s>1?s-1:0),t=1;t<s;t++)a[t-1]=arguments[t];M.apply(void 0,[n].concat(a))}},getRatio:function(n){var s=1;return n.metaKey||n.ctrlKey?s=.1:n.shiftKey&&(s=10),s},getValueFromEvent:function(n){return n.target.value},focus:function(){this.refs.input.focus()},formatWrapper:function(n){return this.props.formatter?this.props.formatter(n):n},render:function(){var n,s=(0,c["default"])({},this.props),a=s.prefixCls,t=s.disabled,p=s.readOnly,i=s.useTouch,l=(0,g["default"])((n={},(0,u["default"])(n,a,!0),(0,u["default"])(n,s.className,!!s.className),(0,u["default"])(n,a+"-disabled",t),(0,u["default"])(n,a+"-focused",this.state.focused),n)),d="",k="",f=this.state.value;if(f)if(isNaN(f))d=a+"-handler-up-disabled",k=a+"-handler-down-disabled";else{var m=Number(f);m>=s.max&&(d=a+"-handler-up-disabled"),m<=s.min&&(k=a+"-handler-down-disabled")}var h=!s.readOnly&&!s.disabled,v=void 0;v=this.state.focused?this.state.inputValue:this.toPrecisionAsStep(this.state.value),void 0!==v&&null!==v||(v="");var b=void 0,y=void 0;i?(b={onTouchStart:h&&!d?this.up:e,onTouchEnd:this.stop},y={onTouchStart:h&&!k?this.down:e,onTouchEnd:this.stop}):(b={onMouseDown:h&&!d?this.up:e,onMouseUp:this.stop,onMouseLeave:this.stop},y={onMouseDown:h&&!k?this.down:e,onMouseUp:this.stop,onMouseLeave:this.stop});var I=this.formatWrapper(v),C=!!d||t||p,M=!!k||t||p;return r["default"].createElement("div",{className:l,style:s.style,onMouseEnter:s.onMouseEnter,onMouseLeave:s.onMouseLeave,onMouseOver:s.onMouseOver,onMouseOut:s.onMouseOut},r["default"].createElement("div",{className:a+"-handler-wrap"},r["default"].createElement(w["default"],(0,c["default"])({ref:"up",disabled:C,prefixCls:a,unselectable:"unselectable"},b,{role:"button","aria-label":"Increase Value","aria-disabled":!!C,className:a+"-handler "+a+"-handler-up "+d}),this.props.upHandler||r["default"].createElement("span",{unselectable:"unselectable",className:a+"-handler-up-inner",onClick:o})),r["default"].createElement(w["default"],(0,c["default"])({ref:"down",disabled:M,prefixCls:a,unselectable:"unselectable"},y,{role:"button","aria-label":"Decrease Value","aria-disabled":!!M,className:a+"-handler "+a+"-handler-down "+k}),this.props.downHandler||r["default"].createElement("span",{unselectable:"unselectable",className:a+"-handler-down-inner",onClick:o}))),r["default"].createElement("div",{className:a+"-input-wrap",role:"spinbutton","aria-valuemin":s.min,"aria-valuemax":s.max,"aria-valuenow":f},r["default"].createElement("input",{type:s.type,placeholder:s.placeholder,onClick:s.onClick,className:a+"-input",autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:h?this.onKeyDown:e,onKeyUp:h?this.onKeyUp:e,autoFocus:s.autoFocus,maxLength:s.maxLength,readOnly:s.readOnly,disabled:s.disabled,max:s.max,min:s.min,name:s.name,id:s.id,onChange:this.onChange,ref:"input",value:I})))}});s["default"]=I,n.exports=s["default"]},405:function(n,s){"use strict";function a(){}function t(n){return n.replace(/[^\w\.-]+/g,"")}Object.defineProperty(s,"__esModule",{value:!0});var e=200,o=600,p=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1;s["default"]={getDefaultProps:function(){return{max:p,min:-p,step:1,style:{},onChange:a,onKeyDown:a,onFocus:a,onBlur:a,parser:t}},getInitialState:function(){var n=void 0,s=this.props;return n="value"in s?s.value:s.defaultValue,n=this.toNumber(n),{inputValue:this.toPrecisionAsStep(n),value:n,focused:s.autoFocus}},componentWillReceiveProps:function(n){"value"in n&&this.setState({inputValue:n.value,value:n.value})},componentWillUnmount:function(){this.stop()},onChange:function(n){var s=this.props.parser(this.getValueFromEvent(n).trim());this.setState({inputValue:s}),this.props.onChange(this.toNumberWhenUserInput(s))},onFocus:function(){var n;this.setState({focused:!0}),(n=this.props).onFocus.apply(n,arguments)},onBlur:function(n){for(var s=this,a=arguments.length,t=Array(a>1?a-1:0),e=1;e<a;e++)t[e-1]=arguments[e];this.setState({focused:!1});var o=this.getCurrentValidValue(this.state.inputValue);n.persist(),this.setValue(o,function(){var a;(a=s.props).onBlur.apply(a,[n].concat(t))})},getCurrentValidValue:function(n){var s=n,a=this.props;return""===s?s="":this.isNotCompleteNumber(s)?s=this.state.value:(s=Number(s),s<a.min&&(s=a.min),s>a.max&&(s=a.max)),this.toNumber(s)},setValue:function(n,s){var a=this.isNotCompleteNumber(parseFloat(n,10))?void 0:parseFloat(n,10),t=a!==this.state.value;"value"in this.props?this.setState({inputValue:this.toPrecisionAsStep(this.state.value)},s):this.setState({value:a,inputValue:this.toPrecisionAsStep(n)},s),t&&this.props.onChange(a)},getPrecision:function(n){if("precision"in this.props)return this.props.precision;var s=n.toString();if(s.indexOf("e-")>=0)return parseInt(s.slice(s.indexOf("e-")+2),10);var a=0;return s.indexOf(".")>=0&&(a=s.length-s.indexOf(".")-1),a},getMaxPrecision:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("precision"in this.props)return this.props.precision;var a=this.props.step,t=this.getPrecision(s),e=this.getPrecision(a),o=this.getPrecision(n);return n?Math.max(o,t+e):t+e},getPrecisionFactor:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.getMaxPrecision(n,s);return Math.pow(10,a)},toPrecisionAsStep:function(n){if(this.isNotCompleteNumber(n)||""===n)return n;var s=Math.abs(this.getMaxPrecision(n));return s?Number(n).toFixed(s):n.toString()},isNotCompleteNumber:function(n){return isNaN(n)||""===n||null===n||n&&n.toString().indexOf(".")===n.toString().length-1},toNumber:function(n){return this.isNotCompleteNumber(n)?n:"precision"in this.props?Number(Number(n).toFixed(this.props.precision)):Number(n)},toNumberWhenUserInput:function(n){return(/\.\d*0$/.test(n)||n.length>16)&&this.state.focused?n:this.toNumber(n)},upStep:function(n,s){var a=this.props,t=a.step,e=a.min,o=this.getPrecisionFactor(n,s),p=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((o*n+o*t*s)/o).toFixed(p):e===-(1/0)?t:e,this.toNumber(u)},downStep:function(n,s){var a=this.props,t=a.step,e=a.min,o=this.getPrecisionFactor(n,s),p=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((o*n-o*t*s)/o).toFixed(p):e===-(1/0)?-t:e,this.toNumber(u)},step:function(n,s){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;s&&s.preventDefault();var t=this.props;if(!t.disabled){var e=this.getCurrentValidValue(this.state.inputValue)||0;if(!this.isNotCompleteNumber(e)){var o=this[n+"Step"](e,a);o>t.max?o=t.max:o<t.min&&(o=t.min),this.setValue(o),this.setState({focused:!0})}}},stop:function(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)},down:function(n,s,a){var t=this;n.persist&&n.persist(),this.stop(),this.step("down",n,s),this.autoStepTimer=setTimeout(function(){t.down(n,s,!0)},a?e:o)},up:function(n,s,a){var t=this;n.persist&&n.persist(),this.stop(),this.step("up",n,s),this.autoStepTimer=setTimeout(function(){t.up(n,s,!0)},a?e:o)}},n.exports=s["default"]},452:function(n,s){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIycHgiIHZpZXdCb3g9IjAgMCAzMCAyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MiAoMzY3ODEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlJlY3RhbmdsZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiMwMDAwMDAiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyIj48L3JlY3Q+CiAgICA8L2c+Cjwvc3ZnPg=="},453:function(n,s){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Q29tYmluZWQgU2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTQsMTQgTDAsMTQgTDAsMTYgTDE0LDE2IEwxNCwzMCBMMTYsMzAgTDE2LDE2IEwzMCwxNiBMMzAsMTQgTDE2LDE0IEwxNiwtMS43NzYzNTY4NGUtMTUgTDE0LC0yLjE0Mzc1MDg4ZS0xNSBMMTQsMTQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="},761:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/stepper/demo/basic.md",id:"components-stepper-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      val1<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange1 <span class="token operator">=</span> <span class="token punctuation">(</span>val1<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Demos\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          wrap\n        <span class="token operator">></span>\n        Show number <span class="token function">value</span><span class="token punctuation">(</span>Use TouchEvent <span class="token keyword">for</span> mobile by <span class="token keyword">default</span><span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val1<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange1<span class="token punctuation">}</span></span>\n            <span class="token attr-name">useTouch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          wrap\n        <span class="token operator">></span>\n        Show number <span class="token function">value</span><span class="token punctuation">(</span>Use MouseEvent <span class="token keyword">for</span> PC<span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        Disabled\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var e=a[t],o=Object.getOwnPropertyDescriptor(s,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function e(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function o(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):s(n,a))}var p=a(1),u=(a(10),a(18),a(30)),i=n(u),c=(a(360),a(359)),l=n(c),r=function(n){function s(a){t(this,s);var o=e(this,n.call(this,a));return o.onChange=function(n){o.setState({val:n})},o.onChange1=function(n){o.setState({val1:n})},o.state={val:3,val1:2},o}return o(s,n),s.prototype.render=function(){return p.createElement(i["default"],{renderHeader:function(){return"Demos"}},p.createElement(i["default"].Item,{extra:p.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,value:this.state.val,onChange:this.onChange}),wrap:!0},"Show number value(Use TouchEvent for mobile by default)"),p.createElement(i["default"].Item,{extra:p.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,value:this.state.val1,onChange:this.onChange1,useTouch:!1}),wrap:!0},"Show number value(Use MouseEvent for PC)"),p.createElement(i["default"].Item,{extra:p.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,defaultValue:3,disabled:!0})},"Disabled"))},s}(p.Component);return p.createElement(r,null)}}},837:function(n,s,a){n.exports={basic:a(761)}}});