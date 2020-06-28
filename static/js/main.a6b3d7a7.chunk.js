(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{23:function(e,t,r){e.exports=r(24)},24:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(17),c=r.n(a),o=r(0),u=r.n(o),i=r(4),l=r(1),m=r(18);Object(i.b)({OrbitControls:m.a});var s=function(e){var t=Object(i.d)(),r=t.gl,n=t.camera,a=Object(o.useRef)();return Object(i.c)((function(){return a.current.update()})),u.a.createElement("orbitControls",Object.assign({ref:a,args:[n,r.domElement]},e))};function f(e){var t=Object(o.useRef)(),r=Object(o.useState)(!1),a=Object(n.a)(r,2),c=a[0],l=a[1];return Object(i.c)((function(){return t.current.rotation.y+=.01})),u.a.createElement("mesh",Object.assign({},e,{ref:t,castShadow:!0,onPointerOver:function(e){return l(!0)},onPointerOut:function(e){return l(!1)},scale:c?[1.25,1.25,1.25]:[1,1,1]}),u.a.createElement("sphereGeometry",{attach:"geometry",args:[e.radius,100,100]}),u.a.createElement("meshStandardMaterial",{map:e.material,attach:"material",color:e.color,transparent:!0,roughness:.1,metalness:.1}))}function d(e){var t=Object(o.useRef)(),r=Object(o.useState)(!1),a=Object(n.a)(r,2),c=a[0],l=a[1];return setTimeout((function(){t.current.rotation.x=90}),1e3),Object(i.c)((function(){return t.current.rotation.y+=.01})),u.a.createElement("mesh",Object.assign({},e,{ref:t,onPointerOver:function(e){return l(!0)},onPointerOut:function(e){return l(!1)},scale:c?[1.25,1.25,1.25]:[1,1,1]}),u.a.createElement("torusGeometry",{attach:"geometry",args:[3,e.width,3.5,64]}),u.a.createElement("meshStandardMaterial",{map:e.material,attach:"material",color:e.color,doubleSided:!0}))}function p(){var e=Object(o.useMemo)((function(){return(new l.TextureLoader).load("sun.jpg")}),[]);return u.a.createElement(f,{postion:[0,0,0],radius:3,material:e})}function b(){var e=Object(o.useMemo)((function(){return(new l.TextureLoader).load("mercury.jpeg")}),[]),t=Object(o.useRef)();return Object(i.c)((function(e){var r=e.clock;return t.current.rotation.y=.3*r.getElapsedTime()})),u.a.createElement("group",{ref:t},u.a.createElement(f,{position:[5,.5,0],material:e,radius:1}))}function j(){var e=Object(o.useMemo)((function(){return(new l.TextureLoader).load("venus.jpg")}),[]),t=Object(o.useRef)();return Object(i.c)((function(e){var r=e.clock;return t.current.rotation.y=.2*r.getElapsedTime()})),u.a.createElement("group",{ref:t},u.a.createElement(f,{position:[10,.5,0],material:e,radius:1}))}function E(){var e=Object(o.useMemo)((function(){return(new l.TextureLoader).load("earth.png")}),[]),t=Object(o.useRef)();return Object(i.c)((function(e){var r=e.clock;return t.current.rotation.y=.3*r.getElapsedTime()})),u.a.createElement("group",{ref:t},u.a.createElement(f,{position:[15,.5,0],material:e,radius:1}))}function O(){var e=Object(o.useMemo)((function(){return(new l.TextureLoader).load("mars.jpeg")}),[]),t=Object(o.useRef)();return Object(i.c)((function(e){var r=e.clock;return t.current.rotation.y=.4*r.getElapsedTime()})),u.a.createElement("group",{ref:t},u.a.createElement(f,{position:[20,.5,0],material:e,radius:1}))}function g(){var e=Object(o.useMemo)((function(){return(new l.TextureLoader).load("jupiter.jpg")}),[]),t=Object(o.useRef)();return Object(i.c)((function(e){var r=e.clock;return t.current.rotation.y=.1*r.getElapsedTime()})),u.a.createElement("group",{ref:t},u.a.createElement(f,{position:[25,.5,0],material:e,radius:2}),u.a.createElement(d,{position:[25,.5,0],material:e,width:.2}))}function v(){var e=Object(o.useMemo)((function(){return(new l.TextureLoader).load("saturn.jpg")}),[]),t=Object(o.useRef)();return Object(i.c)((function(e){var r=e.clock;return t.current.rotation.y=.15*r.getElapsedTime()})),u.a.createElement("group",{ref:t},u.a.createElement(f,{position:[30,.5,0],material:e,radius:2.5}),u.a.createElement(d,{position:[30,.5,0],material:e,width:.45}))}function h(){var e=Object(o.useMemo)((function(){return(new l.TextureLoader).load("uranus.jpg")}),[]),t=Object(o.useRef)();return Object(i.c)((function(e){var r=e.clock;return t.current.rotation.y=.3*r.getElapsedTime()})),u.a.createElement("group",{ref:t},u.a.createElement(f,{position:[35,.5,0],material:e,radius:1.75}))}function T(){var e=Object(o.useMemo)((function(){return(new l.TextureLoader).load("neptune.jpg")}),[]),t=Object(o.useRef)();return Object(i.c)((function(e){var r=e.clock;return t.current.rotation.y=.35*r.getElapsedTime()})),u.a.createElement("group",{ref:t},u.a.createElement(f,{position:[40,.5,0],material:e,radius:2.1}))}c.a.render(u.a.createElement(i.a,{camera:{position:[0,0,35]}},u.a.createElement(s,{enablePan:!0,enableZoom:!0,enableDamping:!0,dampingFactor:.5,rotateSpeed:1}),u.a.createElement("ambientLight",null),u.a.createElement("pointLight",{position:[0,0,0]}),u.a.createElement(p,null),u.a.createElement(b,null),u.a.createElement(j,null),u.a.createElement(E,null),u.a.createElement(O,null),u.a.createElement(g,null),u.a.createElement(v,null),u.a.createElement(h,null),u.a.createElement(T,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a6b3d7a7.chunk.js.map