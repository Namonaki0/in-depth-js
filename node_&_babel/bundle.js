(()=>{"use strict";var e,n=document.querySelector("body"),o=[{name:"Mike",premium:!0},{name:"Maria",premium:!0},{name:"Ross",premium:!1},{name:"Dario",premium:!1},{name:"Josh",premium:!0}],m=function(e){return e.filter((function(e){return e.premium}))}(o);console.log(m,o),n.style.background="orange",(e=document.createElement("h1")).textContent="Hello",n.appendChild(e),console.log((5,Math.ceil(1e4*Math.random(5)))),console.log("Mike")})();