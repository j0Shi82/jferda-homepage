(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{74:function(e,t,n){"use strict";function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function i(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function o(e){var t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof i(e).Element||e instanceof Element}function s(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function c(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return(a(e)?e.ownerDocument:e.document).documentElement}function p(e){return r(u(e)).left+o(e).scrollLeft}function f(e){return i(e).getComputedStyle(e)}function d(e){var t=f(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function l(e,t,n){void 0===n&&(n=!1);var a,f,l=u(t),m=r(e),v=s(t),h={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(v||!v&&!n)&&(("body"!==c(t)||d(l))&&(h=(a=t)!==i(a)&&s(a)?{scrollLeft:(f=a).scrollLeft,scrollTop:f.scrollTop}:o(a)),s(t)?((g=r(t)).x+=t.clientLeft,g.y+=t.clientTop):l&&(g.x=p(l))),{x:m.left+h.scrollLeft-g.x,y:m.top+h.scrollTop-g.y,width:m.width,height:m.height}}function m(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function v(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||e.host||u(e)}function h(e,t){void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(c(t))>=0?t.ownerDocument.body:s(t)&&d(t)?t:e(v(t))}(e),r="body"===c(n),o=i(n),a=r?[o].concat(o.visualViewport||[],d(n)?n:[]):n,u=t.concat(a);return r?u:u.concat(h(v(a)))}function g(e){return["table","td","th"].indexOf(c(e))>=0}function b(e){return s(e)&&"fixed"!==f(e).position?e.offsetParent:null}function y(e){for(var t=i(e),n=b(e);n&&g(n)&&"static"===f(n).position;)n=b(n);return n&&"body"===c(n)&&"static"===f(n).position?t:n||function(e){for(var t=v(e);s(t)&&["html","body"].indexOf(c(t))<0;){var n=f(t);if("none"!==n.transform||"none"!==n.perspective||"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}var w="top",x="bottom",O="right",E="left",j=[w,x,O,E],T=j.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),A=[].concat(j,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),D=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function L(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(i){n.add(i.name),[].concat(i.requires||[],i.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var i=t.get(r);i&&e(i)}})),r.push(i)}(e)})),r}var M={placement:"bottom",modifiers:[],strategy:"absolute"};function k(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function C(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?M:i;return function(e,t,n){void 0===n&&(n=o);var i,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},M),o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],p=!1,f={state:c,setOptions:function(n){d(),c.options=Object.assign(Object.assign(Object.assign({},o),c.options),n),c.scrollParents={reference:a(e)?h(e):e.contextElement?h(e.contextElement):[],popper:h(t)};var i=function(e){var t=L(e);return D.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,c.options.modifiers)));return c.orderedModifiers=i.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var o=i({state:c,name:t,instance:f,options:r});u.push(o||function(){})}})),f.update()},forceUpdate:function(){if(!p){var e=c.elements,t=e.reference,n=e.popper;if(k(t,n)){c.rects={reference:l(t,y(n),"fixed"===c.options.strategy),popper:m(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var i=c.orderedModifiers[r],o=i.fn,a=i.options,s=void 0===a?{}:a,u=i.name;"function"==typeof o&&(c=o({state:c,options:s,name:u,instance:f})||c)}else c.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){f.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){d(),p=!0}};if(!k(e,t))return f;function d(){u.forEach((function(e){return e()})),u=[]}return f.setOptions(n).then((function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var S={passive:!0};function V(e){return e.split("-")[0]}function B(e){return e.split("-")[1]}function P(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function H(e){var t,n=e.reference,r=e.element,i=e.placement,o=i?V(i):null,a=i?B(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(o){case w:t={x:s,y:n.y-r.height};break;case x:t={x:s,y:n.y+n.height};break;case O:t={x:n.x+n.width,y:c};break;case E:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=o?P(o):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case"start":t[u]=Math.floor(t[u])-Math.floor(n[p]/2-r[p]/2);break;case"end":t[u]=Math.floor(t[u])+Math.ceil(n[p]/2-r[p]/2)}}return t}var W={top:"auto",right:"auto",bottom:"auto",left:"auto"};function I(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.offsets,s=e.position,c=e.gpuAcceleration,p=e.adaptive,f=function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(a),d=f.x,l=f.y,m=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),h=E,g=w,b=window;if(p){var j=y(n);j===i(n)&&(j=u(n)),o===w&&(g=x,l-=j.clientHeight-r.height,l*=c?1:-1),o===E&&(h=O,d-=j.clientWidth-r.width,d*=c?1:-1)}var T,A=Object.assign({position:s},p&&W);return c?Object.assign(Object.assign({},A),{},((T={})[g]=v?"0":"",T[h]=m?"0":"",T.transform=(b.devicePixelRatio||1)<2?"translate("+d+"px, "+l+"px)":"translate3d("+d+"px, "+l+"px, 0)",T)):Object.assign(Object.assign({},A),{},((t={})[g]=v?l+"px":"",t[h]=m?d+"px":"",t.transform="",t))}var R={left:"right",right:"left",bottom:"top",top:"bottom"};function N(e){return e.replace(/left|right|bottom|top/g,(function(e){return R[e]}))}var q={start:"end",end:"start"};function U(e){return e.replace(/start|end/g,(function(e){return q[e]}))}function _(e,t){var n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function F(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function z(e,t){return"viewport"===t?F(function(e){var t=i(e),n=u(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,c=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,c=r.offsetTop)),{width:o,height:a,x:s+p(e),y:c}}(e)):s(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):F(function(e){var t=u(e),n=o(e),r=e.ownerDocument.body,i=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+p(e),c=-n.scrollTop;return"rtl"===f(r||t).direction&&(s+=Math.max(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(u(e)))}function $(e,t,n){var r="clippingParents"===t?function(e){var t=h(e),n=["absolute","fixed"].indexOf(f(e).position)>=0&&s(e)?y(e):e;return a(n)?t.filter((function(e){return a(e)&&_(e,n)})):[]}(e):[].concat(t),i=[].concat(r,[n]),o=i[0],c=i.reduce((function(t,n){var r=z(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),z(e,o));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function J(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function X(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Y(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=void 0===i?e.placement:i,s=n.boundary,c=void 0===s?"clippingParents":s,p=n.rootBoundary,f=void 0===p?"viewport":p,d=n.elementContext,l=void 0===d?"popper":d,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,g=void 0===h?0:h,b=J("number"!=typeof g?g:X(g,j)),y="popper"===l?"reference":"popper",E=e.elements.reference,T=e.rects.popper,A=e.elements[v?y:l],D=$(a(A)?A:A.contextElement||u(e.elements.popper),c,f),L=r(E),M=H({reference:L,element:T,strategy:"absolute",placement:o}),k=F(Object.assign(Object.assign({},T),M)),C="popper"===l?k:L,S={top:D.top-C.top+b.top,bottom:C.bottom-D.bottom+b.bottom,left:D.left-C.left+b.left,right:C.right-D.right+b.right},V=e.modifiersData.offset;if("popper"===l&&V){var B=V[o];Object.keys(S).forEach((function(e){var t=[O,x].indexOf(e)>=0?1:-1,n=[w,x].indexOf(e)>=0?"y":"x";S[e]+=B[n]*t}))}return S}function G(e,t,n){return Math.max(e,Math.min(t,n))}function K(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Q(e){return[w,O,x,E].some((function(t){return e[t]>=0}))}var Z=C({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,s=r.resize,c=void 0===s||s,u=i(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,S)})),c&&u.addEventListener("resize",n.update,S),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,S)})),c&&u.removeEventListener("resize",n.update,S)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=H({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,s={placement:V(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),I(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),I(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];s(i)&&c(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&c(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,a=A.reduce((function(e,n){return e[n]=function(e,t,n){var r=V(e),i=[E,w].indexOf(r)>=0?-1:1,o="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=o[0],s=o[1];return a=a||0,s=(s||0)*i,[E,O].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,o),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=void 0===i||i,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,g=V(h),b=c||(g===h||!m?[N(h)]:function(e){if("auto"===V(e))return[];var t=N(e);return[U(e),t,U(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat("auto"===V(n)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?A:c,p=B(r),f=(p?s?T:T.filter((function(e){return B(e)===p})):j).filter((function(e){return u.indexOf(e)>=0})).reduce((function(t,n){return t[n]=Y(e,{placement:n,boundary:i,rootBoundary:o,padding:a})[V(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),D=t.rects.reference,L=t.rects.popper,M=new Map,k=!0,C=y[0],S=0;S<y.length;S++){var P=y[S],H=V(P),W="start"===B(P),I=[w,x].indexOf(H)>=0,R=I?"width":"height",q=Y(t,{placement:P,boundary:p,rootBoundary:f,altBoundary:d,padding:u}),_=I?W?O:E:W?x:w;D[R]>L[R]&&(_=N(_));var F=N(_),z=[];if(o&&z.push(q[H]<=0),s&&z.push(q[_]<=0,q[F]<=0),z.every((function(e){return e}))){C=P,k=!1;break}M.set(P,z)}if(k)for(var $=function(e){var t=y.find((function(t){var n=M.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},J=m?3:1;J>0;J--){if("break"===$(J))break}t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,o=void 0===i||i,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,d=n.tether,l=void 0===d||d,v=n.tetherOffset,h=void 0===v?0:v,g=Y(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:p}),b=V(t.placement),j=B(t.placement),T=!j,A=P(b),D="x"===A?"y":"x",L=t.modifiersData.popperOffsets,M=t.rects.reference,k=t.rects.popper,C="function"==typeof h?h(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):h,S={x:0,y:0};if(L){if(o){var H="y"===A?w:E,W="y"===A?x:O,I="y"===A?"height":"width",R=L[A],N=L[A]+g[H],q=L[A]-g[W],U=l?-k[I]/2:0,_="start"===j?M[I]:k[I],F="start"===j?-k[I]:-M[I],z=t.elements.arrow,$=l&&z?m(z):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},X=J[H],K=J[W],Q=G(0,M[I],$[I]),Z=T?M[I]/2-U-Q-X-C:_-Q-X-C,ee=T?-M[I]/2+U+Q+K+C:F+Q+K+C,te=t.elements.arrow&&y(t.elements.arrow),ne=te?"y"===A?te.clientTop||0:te.clientLeft||0:0,re=t.modifiersData.offset?t.modifiersData.offset[t.placement][A]:0,ie=L[A]+Z-re-ne,oe=L[A]+ee-re,ae=G(l?Math.min(N,ie):N,R,l?Math.max(q,oe):q);L[A]=ae,S[A]=ae-R}if(s){var se="x"===A?w:E,ce="x"===A?x:O,ue=L[D],pe=G(ue+g[se],ue,ue-g[ce]);L[D]=pe,S[D]=pe-ue}t.modifiersData[r]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=V(n.placement),s=P(a),c=[E,O].indexOf(a)>=0?"height":"width";if(i&&o){var u=n.modifiersData[r+"#persistent"].padding,p=m(i),f="y"===s?w:E,d="y"===s?x:O,l=n.rects.reference[c]+n.rects.reference[s]-o[s]-n.rects.popper[c],v=o[s]-n.rects.reference[s],h=y(i),g=h?"y"===s?h.clientHeight||0:h.clientWidth||0:0,b=l/2-v/2,j=u[f],T=g-p[c]-u[d],A=g/2-p[c]/2+b,D=G(j,A,T),L=s;n.modifiersData[r]=((t={})[L]=D,t.centerOffset=D-A,t)}},effect:function(e){var t=e.state,n=e.options,r=e.name,i=n.element,o=void 0===i?"[data-popper-arrow]":i,a=n.padding,s=void 0===a?0:a;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&_(t.elements.popper,o)&&(t.elements.arrow=o,t.modifiersData[r+"#persistent"]={padding:J("number"!=typeof s?s:X(s,j))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=Y(t,{elementContext:"reference"}),s=Y(t,{altBoundary:!0}),c=K(a,r),u=K(s,i,o),p=Q(c),f=Q(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":p,"data-popper-escaped":f})}}]}),ee={passive:!0,capture:!0};function te(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function ne(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function re(e,t){return"function"==typeof e?e.apply(void 0,t):e}function ie(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function oe(e){return[].concat(e)}function ae(e,t){-1===e.indexOf(t)&&e.push(t)}function se(e){return e.split("-")[0]}function ce(e){return[].slice.call(e)}function ue(){return document.createElement("div")}function pe(e){return["Element","Fragment"].some((function(t){return ne(e,t)}))}function fe(e){return ne(e,"MouseEvent")}function de(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function le(e){return pe(e)?[e]:function(e){return ne(e,"NodeList")}(e)?ce(e):Array.isArray(e)?e:ce(document.querySelectorAll(e))}function me(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function ve(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function he(e){var t=oe(e)[0];return t&&t.ownerDocument||document}function ge(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var be={isTouch:!1},ye=0;function we(){be.isTouch||(be.isTouch=!0,window.performance&&document.addEventListener("mousemove",xe))}function xe(){var e=performance.now();e-ye<20&&(be.isTouch=!1,document.removeEventListener("mousemove",xe)),ye=e}function Oe(){var e=document.activeElement;if(de(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var Ee="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",je=/MSIE |Trident\//.test(Ee);var Te={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ae=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Te,{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),De=Object.keys(Ae);function Le(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,i=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:i),t}),{});return Object.assign({},e,{},t)}function Me(e,t){var n=Object.assign({},t,{content:re(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Le(Object.assign({},Ae,{plugins:t}))):De).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},Ae.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function ke(e,t){e.innerHTML=t}function Ce(e){var t=ue();return!0===e?t.className="tippy-arrow":(t.className="tippy-svg-arrow",pe(e)?t.appendChild(e):ke(t,e)),t}function Se(e,t){pe(t.content)?(ke(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?ke(e,t.content):e.textContent=t.content)}function Ve(e){var t=e.firstElementChild,n=ce(t.children);return{box:t,content:n.find((function(e){return e.classList.contains("tippy-content")})),arrow:n.find((function(e){return e.classList.contains("tippy-arrow")||e.classList.contains("tippy-svg-arrow")})),backdrop:n.find((function(e){return e.classList.contains("tippy-backdrop")}))}}function Be(e){var t=ue(),n=ue();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=ue();function i(n,r){var i=Ve(t),o=i.box,a=i.content,s=i.arrow;r.theme?o.setAttribute("data-theme",r.theme):o.removeAttribute("data-theme"),"string"==typeof r.animation?o.setAttribute("data-animation",r.animation):o.removeAttribute("data-animation"),r.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?o.setAttribute("role",r.role):o.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Se(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(o.removeChild(s),o.appendChild(Ce(r.arrow))):o.appendChild(Ce(r.arrow)):s&&o.removeChild(s)}return r.className="tippy-content",r.setAttribute("data-state","hidden"),Se(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props),{popper:t,onUpdate:i}}Be.$$tippy=!0;var Pe=1,He=[],We=[];function Ie(e,t){var n,r,i,o,a,s,c,u,p=Me(e,Object.assign({},Ae,{},Le(t))),f=!1,d=!1,l=!1,m=!1,v=[],h=ie(J,p.interactiveDebounce),g=he(p.triggerTarget||e),b=Pe++,y=(u=p.plugins).filter((function(e,t){return u.indexOf(e)===t})),w={id:b,reference:e,popper:ue(),popperInstance:null,props:p,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(i)},setProps:function(t){0;if(w.state.isDestroyed)return;V("onBeforeUpdate",[w,t]),z();var n=w.props,r=Me(e,Object.assign({},w.props,{},t,{ignoreAttributes:!0}));w.props=r,F(),n.interactiveDebounce!==r.interactiveDebounce&&(H(),h=ie(J,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?oe(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");P(),S(),E&&E(n,r);w.popperInstance&&(K(),ne().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));V("onAfterUpdate",[w,t])},setContent:function(e){w.setProps({content:e})},show:function(){0;var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=be.isTouch&&!w.props.touch,i=te(w.props.duration,0,Ae.duration);if(e||t||n||r)return;if(M().hasAttribute("disabled"))return;if(V("onShow",[w],!1),!1===w.props.onShow(w))return;w.state.isVisible=!0,L()&&(O.style.visibility="visible");S(),N(),w.state.isMounted||(O.style.transition="none");if(L()){var o=k(),a=o.box,c=o.content;me([a,c],0)}s=function(){if(w.state.isVisible&&!m){if(m=!0,O.offsetHeight,O.style.transition=w.props.moveTransition,L()&&w.props.animation){var e=k(),t=e.box,n=e.content;me([t,n],i),ve([t,n],"visible")}B(),P(),ae(We,w),w.state.isMounted=!0,V("onMount",[w]),w.props.animation&&L()&&function(e,t){U(e,t)}(i,(function(){w.state.isShown=!0,V("onShown",[w])}))}},function(){var e,t=w.props.appendTo,n=M();e=w.props.interactive&&t===Ae.appendTo||"parent"===t?n.parentNode:re(t,[n]);e.contains(O)||e.appendChild(O);K(),!1}()},hide:function(){0;var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=te(w.props.duration,1,Ae.duration);if(e||t||n)return;if(V("onHide",[w],!1),!1===w.props.onHide(w))return;w.state.isVisible=!1,w.state.isShown=!1,m=!1,L()&&(O.style.visibility="hidden");if(H(),q(),S(),L()){var i=k(),o=i.box,a=i.content;w.props.animation&&(me([o,a],r),ve([o,a],"hidden"))}B(),P(),w.props.animation?L()&&function(e,t){U(e,(function(){!w.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}(r,w.unmount):w.unmount()},hideWithInteractivity:function(e){0;g.body.addEventListener("mouseleave",de),g.addEventListener("mousemove",h),ae(He,h),h(e)},enable:function(){w.state.isEnabled=!0},disable:function(){w.hide(),w.state.isEnabled=!1},unmount:function(){0;w.state.isVisible&&w.hide();if(!w.state.isMounted)return;Q(),ne().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O);We=We.filter((function(e){return e!==w})),w.state.isMounted=!1,V("onHidden",[w])},destroy:function(){0;if(w.state.isDestroyed)return;w.clearDelayTimeouts(),w.unmount(),z(),delete e._tippy,w.state.isDestroyed=!0,V("onDestroy",[w])}};if(!p.render)return w;var x=p.render(w),O=x.popper,E=x.onUpdate;O.setAttribute("data-tippy-root",""),O.id="tippy-"+w.id,w.popper=O,e._tippy=w,O._tippy=w;var j=y.map((function(e){return e.fn(w)})),T=e.hasAttribute("aria-expanded");return F(),P(),S(),V("onCreate",[w]),p.showOnCreate&&pe(),O.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(e){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(g.addEventListener("mousemove",h),h(e))})),w;function A(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function D(){return"hold"===A()[0]}function L(){var e;return!!(null==(e=w.props.render)?void 0:e.$$tippy)}function M(){return c||e}function k(){return Ve(O)}function C(e){return w.state.isMounted&&!w.state.isVisible||be.isTouch||o&&"focus"===o.type?0:te(w.props.delay,e?0:1,Ae.delay)}function S(){O.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",O.style.zIndex=""+w.props.zIndex}function V(e,t,n){var r;(void 0===n&&(n=!0),j.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=w.props)[e].apply(r,t)}function B(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=O.id;oe(w.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var i=t&&t.replace(r,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}}))}}function P(){!T&&w.props.aria.expanded&&oe(w.props.triggerTarget||e).forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===M()?"true":"false"):e.removeAttribute("aria-expanded")}))}function H(){g.body.removeEventListener("mouseleave",de),g.removeEventListener("mousemove",h),He=He.filter((function(e){return e!==h}))}function W(e){if(!(be.isTouch&&(l||"mousedown"===e.type)||w.props.interactive&&O.contains(e.target))){if(M().contains(e.target)){if(be.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else V("onClickOutside",[w,e]);!0===w.props.hideOnClick&&(f=!1,w.clearDelayTimeouts(),w.hide(),d=!0,setTimeout((function(){d=!1})),w.state.isMounted||q())}}function I(){l=!0}function R(){l=!1}function N(){g.addEventListener("mousedown",W,!0),g.addEventListener("touchend",W,ee),g.addEventListener("touchstart",R,ee),g.addEventListener("touchmove",I,ee)}function q(){g.removeEventListener("mousedown",W,!0),g.removeEventListener("touchend",W,ee),g.removeEventListener("touchstart",R,ee),g.removeEventListener("touchmove",I,ee)}function U(e,t){var n=k().box;function r(e){e.target===n&&(ge(n,"remove",r),t())}if(0===e)return t();ge(n,"remove",a),ge(n,"add",r),a=r}function _(t,n,r){void 0===r&&(r=!1),oe(w.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),v.push({node:e,eventType:t,handler:n,options:r})}))}function F(){var e;D()&&(_("touchstart",$,{passive:!0}),_("touchend",X,{passive:!0})),(e=w.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(_(e,$),e){case"mouseenter":_("mouseleave",X);break;case"focus":_(je?"focusout":"blur",Y);break;case"focusin":_("focusout",Y)}}))}function z(){v.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)})),v=[]}function $(e){var t,n=!1;if(w.state.isEnabled&&!G(e)&&!d){var r="focus"===(null==(t=o)?void 0:t.type);o=e,c=e.currentTarget,P(),!w.state.isVisible&&fe(e)&&He.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||f)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:pe(e),"click"===e.type&&(f=!n),n&&!r&&de(e)}}function J(t){var n=t.target,r=e.contains(n)||O.contains(n);"mousemove"===t.type&&r||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,o=e.props.interactiveBorder,a=se(i.placement),s=i.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,p="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=t.top-r+c>o,l=r-t.bottom-u>o,m=t.left-n+p>o,v=n-t.right-f>o;return d||l||m||v}))}(ne().concat(O).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:p}:null})).filter(Boolean),t)&&(H(),de(t))}function X(e){G(e)||w.props.trigger.indexOf("click")>=0&&f||(w.props.interactive?w.hideWithInteractivity(e):de(e))}function Y(e){w.props.trigger.indexOf("focusin")<0&&e.target!==M()||w.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||de(e)}function G(e){return!!be.isTouch&&D()!==e.type.indexOf("touch")>=0}function K(){Q();var t=w.props,n=t.popperOptions,r=t.placement,i=t.offset,o=t.getReferenceClientRect,a=t.moveTransition,c=L()?Ve(O).arrow:null,u=o?{getBoundingClientRect:o,contextElement:o.contextElement||M()}:e,p=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(L()){var n=k().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];L()&&c&&p.push({name:"arrow",options:{element:c,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),w.popperInstance=Z(u,O,Object.assign({},n,{placement:r,onFirstUpdate:s,modifiers:p}))}function Q(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ne(){return ce(O.querySelectorAll("[data-tippy-root]"))}function pe(e){w.clearDelayTimeouts(),e&&V("onTrigger",[w,e]),N();var t=C(!0),r=A(),i=r[0],o=r[1];be.isTouch&&"hold"===i&&o&&(t=o),t?n=setTimeout((function(){w.show()}),t):w.show()}function de(e){if(w.clearDelayTimeouts(),V("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&f)){var t=C(!1);t?r=setTimeout((function(){w.state.isVisible&&w.hide()}),t):i=requestAnimationFrame((function(){w.hide()}))}}else q()}}function Re(e,t){void 0===t&&(t={});var n=Ae.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",we,ee),window.addEventListener("blur",Oe);var r=Object.assign({},t,{plugins:n}),i=le(e).reduce((function(e,t){var n=t&&Ie(t,r);return n&&e.push(n),e}),[]);return pe(e)?i[0]:i}Re.defaultProps=Ae,Re.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Ae[t]=e[t]}))},Re.currentInput=be;Re.setDefaultProps({render:Be});t.a=Re}}]);