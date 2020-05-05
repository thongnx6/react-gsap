(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{YxfR:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return b})),n.d(e,"default",(function(){return m}));n("4cIV"),n("NZyX"),n("c0Gx"),n("QNbk"),n("+ytS"),n("WY76");var o=n("V0Ug"),r=n("sN0p"),a=n("r0ML"),i=n("EeHy"),p=n("3yzF"),s=n("Vdl2"),l=n("lRMv");n("xH0s");function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/SplitWords.mdx"}});var c={_frontmatter:b},y=r.a;function m(t){var e,n,m=t.components,u=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(o.b)(y,d({},c,u,{components:m,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"splitwords"},"SplitWords"),Object(o.b)("p",null,"The SplitWords component is a small helper that splits a text by words and returns one component per word."),Object(o.b)("pre",null,Object(o.b)("code",d({parentName:"pre"},{}),"import { Controls, PlayState, Timeline, Tween, SplitWords } from 'react-gsap';\n")),Object(o.b)("h2",{id:"usage-with-tween"},"Usage with Tween"),Object(o.b)(i.c,{__position:0,__code:"<Controls playState={PlayState.stop}>\n  <Tween from={{ x: '200px' }} stagger={0.5} ease=\"elastic.out(0.1, 0.1)\">\n    <SplitWords\n      wrapper={<div style={{ display: 'inline-block', fontSize: '40px' }} />}\n    >\n      This text gets splitted by words.\n    </SplitWords>\n  </Tween>\n</Controls>",__scope:(e={props:u,DefaultLayout:r.a,Fragment:a.Fragment,Playground:i.c,Props:i.d,Controls:p.a,PlayState:p.b,SplitWords:p.d,Tween:s.b,Timeline:l.a},e.DefaultLayout=r.a,e._frontmatter=b,e),mdxType:"Playground"},Object(o.b)(p.a,{playState:p.b.stop,mdxType:"Controls"},Object(o.b)(s.b,{from:{x:"200px"},stagger:.5,ease:"elastic.out(0.1, 0.1)",mdxType:"Tween"},Object(o.b)(p.d,{wrapper:Object(o.b)("div",{style:{display:"inline-block",fontSize:"40px"}}),mdxType:"SplitWords"},"This text gets splitted by words.")))),Object(o.b)("h2",{id:"usage-with-timeline"},"Usage with Timeline"),Object(o.b)(i.c,{__position:1,__code:"<Controls playState={PlayState.stop}>\n  <Timeline\n    target={\n      <Fragment>\n        <SplitWords\n          wrapper={\n            <div style={{ display: 'inline-block', fontSize: '40px' }} />\n          }\n        >\n          This text gets splitted by words.\n        </SplitWords>\n      </Fragment>\n    }\n  >\n    <Tween to={{ y: '-20px' }} position={0.5} duration={0.1} target={1} />\n    <Tween to={{ y: '-20px' }} position=\"+=0.5\" duration={0.1} target={3} />\n    <Tween to={{ y: '-20px' }} position=\"+=0.5\" duration={0.1} target={5} />\n  </Timeline>\n</Controls>",__scope:(n={props:u,DefaultLayout:r.a,Fragment:a.Fragment,Playground:i.c,Props:i.d,Controls:p.a,PlayState:p.b,SplitWords:p.d,Tween:s.b,Timeline:l.a},n.DefaultLayout=r.a,n._frontmatter=b,n),mdxType:"Playground"},Object(o.b)(p.a,{playState:p.b.stop,mdxType:"Controls"},Object(o.b)(l.a,{target:Object(o.b)(a.Fragment,{mdxType:"Fragment"},Object(o.b)(p.d,{wrapper:Object(o.b)("div",{style:{display:"inline-block",fontSize:"40px"}}),mdxType:"SplitWords"},"This text gets splitted by words.")),mdxType:"Timeline"},Object(o.b)(s.b,{to:{y:"-20px"},position:.5,duration:.1,target:1,mdxType:"Tween"}),Object(o.b)(s.b,{to:{y:"-20px"},position:"+=0.5",duration:.1,target:3,mdxType:"Tween"}),Object(o.b)(s.b,{to:{y:"-20px"},position:"+=0.5",duration:.1,target:5,mdxType:"Tween"})))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/SplitWords.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-split-words-mdx-6a215c8d0b62bdebdf4d.js.map