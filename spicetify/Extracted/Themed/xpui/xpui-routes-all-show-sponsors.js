"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[923],{18693:(e,t,o)=>{o.d(t,{F:()=>c,m:()=>a});var n=o(67294),s=o(64005),r=o(31604);const c=420;function a({episodeBase62Id:e,getEpisodeSponsors:t,fetchedEpisodeSponsorsData:a=[],version:i}){const[u,l]=(0,n.useState)(a),f=(0,n.useCallback)((async()=>{try{if(!e)throw new Error("episodeBase62Id is required to fetch episode sponsors");const n=null!=t?t:(await Promise.resolve().then(o.bind(o,11401))).getEpisodeSponsors;l(await n(e,{version:i}))}catch(e){l([])}}),[e,t,i]),d=(0,s.y)(f,c);return(0,n.useEffect)((function(){a.length||d()}),[d,a.length]),(0,r.H)(d),{fetchedEpisodeSponsorsData:u}}},39111:(e,t,o)=>{o.r(t),o.d(t,{AllShowSponsors:()=>d,default:()=>p});var n=o(67294),s=o.n(n),r=o(16528),c=o(69518),a=o.n(c),i=o(28975),u=o(77186),l=o(51976);const f=(0,n.lazy)((()=>Promise.all([o.e(814),o.e(818)]).then(o.bind(o,39818))));function d(){const{showId:e}=(0,r.UO)(),t=(0,n.useMemo)((()=>a().showURI(e).toURI()),[e]),{location:{state:{showSponsorsData:o}={}}}=(0,u.P)(),{showSponsorsData:c}=(0,l.O)({showId:e,showSponsorsData:o});return null!=c&&c.length?s().createElement(f,{uri:t,showId:e,showSponsorsData:c}):s().createElement(r.l_,{to:(0,i.mH)(e)})}const p=d},51976:(e,t,o)=>{o.d(t,{O:()=>a});var n=o(67294),s=o(64005),r=o(18693),c=o(31604);function a({showId:e,showSponsorsData:t=[],getShowSponsors:a}){const[i,u]=(0,n.useState)(t),l=(0,n.useCallback)((async()=>{try{if(!e)throw new Error("showId is required to fetch show sponsors");const t=null!=a?a:(await Promise.resolve().then(o.bind(o,1709))).getShowSponsors,n=await t(e);u(n)}catch(e){u([])}}),[e,a]),f=(0,s.y)(l,r.F);return(0,n.useEffect)((function(){t.length||f()}),[f,t.length]),(0,c.H)(f),{showSponsorsData:i}}},31604:(e,t,o)=>{o.d(t,{H:()=>u});var n=o(67294),s=o(44794),r=o(44503),c=o(40080),a=o(8341),i=o(99995);function u(e){const t=(0,s.W6)(r.oF),o=(0,a.Y)((e=>{var t,o;const n=null!==(t=null==e?void 0:e.item)&&void 0!==t?t:void 0;return(0,i.k6)(n)&&n.isPodcastAd&&null!==(o=n.id)&&void 0!==o?o:void 0})),u=(0,c.D)(o);(0,n.useEffect)((function(){o!==u&&Boolean(o)&&setTimeout(e,t)}),[e,o,u,t])}},77186:(e,t,o)=>{o.d(t,{P:()=>u});var n=o(59713),s=o.n(n),r=o(67294),c=o(16528);function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){s()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(){const e=(0,c.k6)(),{listen:t,location:o}=e;return(0,r.useEffect)((function(){return t(((e,t)=>{"POP"===t&&(e.state=i(i(i({},void 0),o.state),e.state))}))})),e}},40080:(e,t,o)=>{o.d(t,{D:()=>s});var n=o(67294);function s(e){const t=(0,n.useRef)();return(0,n.useEffect)((()=>{t.current=e}),[e]),t.current}}}]);
//# sourceMappingURL=xpui-routes-all-show-sponsors.js.map