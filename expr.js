module.exports={evalExpr:s=>{let t=s.match(/[\d.]+|[+*/()-]/g),i=0,a,e,m,f
e=_=>{a=m();while('+-'.includes(t[i]))a+=t[i++]=='+'?m():-m();return a}
m=_=>{a=f();while('*/'.includes(t[i]))a*=t[i++]=='*'?f():1/f();return a}
f=_=>t[i]=='-'?(i++,-f()):t[i]=='('?(i++,a=e(),i++,a):+t[i++]
return e()}}
