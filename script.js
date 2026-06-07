
setTimeout(()=>{const l=document.getElementById('loader'); if(l) l.style.display='none';},1800);
const c=document.getElementById('bg'),x=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight}r();onresize=r;
let p=[...Array(120)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,v:1+Math.random()*2}));
(function a(){x.clearRect(0,0,c.width,c.height);p.forEach(o=>{o.y+=o.v;if(o.y>c.height)o.y=0;x.fillStyle='#00D4FF';x.fillRect(o.x,o.y,2,2)});requestAnimationFrame(a)})();