"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[696],{38696:(t,e,o)=>{o.r(e),o.d(e,{EpisodeSponsorNowPlayingBarHatIfPodcastAdIsPlaying:()=>f,default:()=>b});var n=o(67294),d=o.n(n),s=o(23716),a=o(8341),i=o(99995),c=o(53226);const l=["podcast-preroll","podcast-midroll-1","podcast-midroll-2","podcast-midroll-3","podcast-midroll-4","podcast-midroll-5","podcast-postroll"];function r({eventTypesToSubscribeTo:t,onPodcastAdEvent:e,onError:o}){const n=t.flatMap((t=>l.map((n=>(0,c.oc)(t,e,o,{slot:n})))));return()=>n.forEach((({cancel:t})=>t()))}const u=["started","resumed","ended"];function v({subscribeToPodcastAdEvents:t=r}={}){const[e,o]=(0,n.useState)(),{hidingHat:d,setHidingHat:s}=function(){const[t,e]=(0,n.useState)();return{hidingHat:t,setHidingHat:e}}();return(0,n.useEffect)((()=>{let n=!1;const d=t({eventTypesToSubscribeTo:u,async onPodcastAdEvent(t){const d="started"===(a=t.event_type)||"resumed"===a?a:void 0;var a;const i=Boolean(d&&"cta_card_sai"===t.ad.metadata.product_name),c=Boolean(e&&i&&e.ad.id===t.ad.id)?void 0:new Promise((t=>setTimeout((()=>{n||(o(void 0),s(void 0)),t()}),250)));c&&s(c),i&&(await c,o(t))}});return()=>{n=!0,d()}}),[e,s,t]),{activeAdEvent:e,hidingHat:d}}const p=(0,n.lazy)((()=>o.e(375).then(o.bind(o,10375))));function f({subscribeToPodcastAdEvents:t,clickEventPosterForEpisodeSponsorNowPlayingBarHat:e}){const o=(0,s.g)(),c=(0,a.Y)((t=>{var e;const o=null!==(e=null==t?void 0:t.item)&&void 0!==e?e:void 0;return(0,i.k6)(o)&&o.isPodcastAd?o:null}),((t,e)=>(null==t?void 0:t.uri)===(null==e?void 0:e.uri))),{activeAdEvent:l,hidingHat:r}=v({subscribeToPodcastAdEvents:t});return(c||r)&&l?d().createElement(n.Suspense,{fallback:!0},d().createElement(p,{adEvent:l,ad:c,hidingHat:r,postClickEvent:null==e?void 0:e(l.ad.id,o)})):null}const b=f}}]);
//# sourceMappingURL=696.js.map