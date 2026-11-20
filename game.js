(()=>{var Sf="160";var tv=0,gp=1,nv=2;var l0=1,Yc=2,ps=3,Xi=0,Pn=1,Ii=2;var qt=0,bo=1,_s=2,xp=3,vp=4,bf=5,li=100,iv=101,sv=102,_p=103,yp=104,Bo=200,rv=201,ov=202,av=203,Iu=204,Du=205,Zc=206,lv=207,Kc=208,cv=209,hv=210,uv=211,fv=212,dv=213,pv=214,mv=0,gv=1,xv=2,cc=3,vv=4,_v=5,yv=6,Mv=7,Ef=0,Sv=1,bv=2,js=0,Tf=1,wf=2,Af=3,zo=4,Ev=5,Rf=6,Mp="attached",Tv="detached",c0=300,wo=301,Ao=302,Da=303,Uu=304,jc=306,pn=1e3,Fn=1001,Ua=1002,bt=1003,hc=1004;var Ta=1005;var Nt=1006,Cf=1007;var ys=1008;var Kn=1009,wv=1010,Av=1011,Pf=1012,h0=1013,Zs=1014,Zn=1015,Ft=1016,u0=1017,f0=1018,vs=1020,Rv=1021,zn=1023,Cv=1024,Pv=1025,Tr=1026,Js=1027,Lv=1028,d0=1029,Iv=1030,p0=1031,m0=1033,jh=33776,Jh=33777,$h=33778,Qh=33779,Sp=35840,bp=35841,Ep=35842,Tp=35843,g0=36196,wp=37492,Ap=37496,Rp=37808,Cp=37809,Pp=37810,Lp=37811,Ip=37812,Dp=37813,Up=37814,Np=37815,Op=37816,Fp=37817,kp=37818,Bp=37819,zp=37820,Hp=37821,eu=36492,Vp=36494,Gp=36495,Dv=36283,Wp=36284,Xp=36285,qp=36286;var Ro=2300,Ar=2301,tu=2302,Yp=2400,Zp=2401,Kp=2402,Uv=2500;var x0=0,Jc=1,Ja=2,v0=3e3,wr=3001,Nv=3200,Lf=3201,$c=0,Ov=1,ci="",ft="srgb",Yt="srgb-linear",If="display-p3",Qc="display-p3-linear",uc="linear",St="srgb",fc="rec709",dc="p3";var to=7680;var jp=519,Fv=512,kv=513,Bv=514,_0=515,zv=516,Hv=517,Vv=518,Gv=519,Nu=35044,eh=35048;var Jp="300 es",Ou=1035,xs=2e3,pc=2001,$s=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$p=1234567,wa=Math.PI/180,Co=180/Math.PI;function ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function Df(n,e){return(n%e+e)%e}function Wv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Xv(n,e,t){return n!==e?(t-n)/(e-n):0}function Aa(n,e,t){return(1-t)*n+t*e}function qv(n,e,t,i){return Aa(n,e,1-Math.exp(-t*i))}function Yv(n,e=1){return e-Math.abs(Df(n,e*2)-e)}function Zv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Kv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Jv(n,e){return n+Math.random()*(e-n)}function $v(n){return n*(.5-Math.random())}function Qv(n){n!==void 0&&($p=n);let e=$p+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e_(n){return n*wa}function t_(n){return n*Co}function Fu(n){return(n&n-1)===0&&n!==0}function n_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var $a={DEG2RAD:wa,RAD2DEG:Co,generateUUID:ui,clamp:$t,euclideanModulo:Df,mapLinear:Wv,inverseLerp:Xv,lerp:Aa,damp:qv,pingpong:Yv,smoothstep:Zv,smootherstep:Kv,randInt:jv,randFloat:Jv,randFloatSpread:$v,seededRandom:Qv,degToRad:e_,radToDeg:t_,isPowerOfTwo:Fu,ceilPowerOfTwo:n_,floorPowerOfTwo:mc,setQuaternionFromProperEuler:i_,normalize:_t,denormalize:Wi},ee=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],v=s[4],M=s[7],b=s[2],T=s[5],w=s[8];return r[0]=o*x+a*_+l*b,r[3]=o*m+a*v+l*T,r[6]=o*p+a*M+l*w,r[1]=c*x+h*_+f*b,r[4]=c*m+h*v+f*T,r[7]=c*p+h*M+f*w,r[2]=u*x+d*_+g*b,r[5]=u*m+d*v+g*T,r[8]=u*p+d*M+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=t*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nu.makeScale(e,t)),this}rotate(e){return this.premultiply(nu.makeRotation(-e)),this}translate(e,t){return this.premultiply(nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nu=new st;function y0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function s_(){let n=Na("canvas");return n.style.display="block",n}var Qp={};function Ra(n){n in Qp||(Qp[n]=!0,console.warn(n))}var em=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tm=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Il={[Yt]:{transfer:uc,primaries:fc,toReference:n=>n,fromReference:n=>n},[ft]:{transfer:St,primaries:fc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qc]:{transfer:uc,primaries:dc,toReference:n=>n.applyMatrix3(tm),fromReference:n=>n.applyMatrix3(em)},[If]:{transfer:St,primaries:dc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(tm),fromReference:n=>n.applyMatrix3(em).convertLinearToSRGB()}},r_=new Set([Yt,Qc]),ht={enabled:!0,_workingColorSpace:Yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!r_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Il[e].toReference,s=Il[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Il[n].primaries},getTransfer:function(n){return n===ci?uc:Il[n].transfer}};function Eo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function iu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var no,gc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{no===void 0&&(no=Na("canvas")),no.width=e.width,no.height=e.height;let i=no.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=no}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Na("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Eo(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Eo(t[i]/255)*255):t[i]=Eo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},o_=0,xc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(su(s[o].image)):r.push(su(s[o]))}else r=su(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function su(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var a_=0,mn=class n extends $s{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fn,s=Fn,r=Nt,o=ys,a=zn,l=Kn,c=n.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=ui(),this.name="",this.source=new xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===wr?ft:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pn:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pn:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?wr:v0}set encoding(e){Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wr?ft:ci}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=c0;mn.DEFAULT_ANISOTROPY=1;var mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(d+1)/2,b=(p+1)/2,T=(h+u)/4,w=(f+x)/4,P=(g+m)/4;return v>M&&v>b?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=w/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=P/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=w/r,s=P/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ku=class extends $s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ra("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wr?ft:ci),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new xc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends ku{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vc=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bu=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==u||c!==d||h!==g){let m=1-a,p=l*u+c*d+h*g+f*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let b=Math.sqrt(v),T=Math.atan2(b,p*_);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}let M=a*_;if(l=l*m+u*M,c=c*m+d*M,h=h*m+g*M,f=f*m+x*M,m===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-a*d,e[t+2]=c*g+h*d+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ru=new C,nm=new dt,fi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ci):Ci.fromBufferAttribute(r,o),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Ul.subVectors(this.max,va),io.subVectors(e.a,va),so.subVectors(e.b,va),ro.subVectors(e.c,va),Gs.subVectors(so,io),Ws.subVectors(ro,so),_r.subVectors(io,ro);let t=[0,-Gs.z,Gs.y,0,-Ws.z,Ws.y,0,-_r.z,_r.y,Gs.z,0,-Gs.x,Ws.z,0,-Ws.x,_r.z,0,-_r.x,-Gs.y,Gs.x,0,-Ws.y,Ws.x,0,-_r.y,_r.x,0];return!ou(t,io,so,ro,Ul)||(t=[1,0,0,0,1,0,0,0,1],!ou(t,io,so,ro,Ul))?!1:(Nl.crossVectors(Gs,Ws),t=[Nl.x,Nl.y,Nl.z],ou(t,io,so,ro,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ls=[new C,new C,new C,new C,new C,new C,new C,new C],Ci=new C,Dl=new fi,io=new C,so=new C,ro=new C,Gs=new C,Ws=new C,_r=new C,va=new C,Ul=new C,Nl=new C,yr=new C;function ou(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){yr.fromArray(n,r);let a=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),l=e.dot(yr),c=t.dot(yr),h=i.dot(yr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var l_=new fi,_a=new C,au=new C,jn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):l_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_a,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(au)),this.expandByPoint(_a.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},cs=new C,lu=new C,Ol=new C,Xs=new C,cu=new C,Fl=new C,hu=new C,Rr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){lu.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),Xs.copy(this.origin).sub(lu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ol),a=Xs.dot(this.direction),l=-Xs.dot(Ol),c=Xs.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(lu).addScaledVector(Ol,u),d}intersectSphere(e,t){cs.subVectors(e.center,this.origin);let i=cs.dot(this.direction),s=cs.dot(cs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,i,s,r){cu.subVectors(t,e),Fl.subVectors(i,e),hu.crossVectors(cu,Fl);let o=this.direction.dot(hu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xs.subVectors(this.origin,e);let l=a*this.direction.dot(Fl.crossVectors(Xs,Fl));if(l<0)return null;let c=a*this.direction.dot(cu.cross(Xs));if(c<0||l+c>o)return null;let h=-a*Xs.dot(hu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class n{constructor(e,t,i,s,r,o,a,l,c,h,f,u,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,d,g,x,m)}set(e,t,i,s,r,o,a,l,c,h,f,u,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/oo.setFromMatrixColumn(e,0).length(),r=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,g=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,g=c*h,x=c*f;t[0]=u+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,g=c*h,x=c*f;t[0]=u-x*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,g=a*h,x=a*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-u*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-x*f}else if(e.order==="XZY"){let u=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,h_)}lookAt(e,t,i){let s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),qs.crossVectors(i,qn),qs.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),qs.crossVectors(i,qn)),qs.normalize(),kl.crossVectors(qn,qs),s[0]=qs.x,s[4]=kl.x,s[8]=qn.x,s[1]=qs.y,s[5]=kl.y,s[9]=qn.y,s[2]=qs.z,s[6]=kl.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],v=i[7],M=i[11],b=i[15],T=s[0],w=s[4],P=s[8],y=s[12],E=s[1],D=s[5],B=s[9],K=s[13],L=s[2],O=s[6],k=s[10],j=s[14],J=s[3],W=s[7],F=s[11],Z=s[15];return r[0]=o*T+a*E+l*L+c*J,r[4]=o*w+a*D+l*O+c*W,r[8]=o*P+a*B+l*k+c*F,r[12]=o*y+a*K+l*j+c*Z,r[1]=h*T+f*E+u*L+d*J,r[5]=h*w+f*D+u*O+d*W,r[9]=h*P+f*B+u*k+d*F,r[13]=h*y+f*K+u*j+d*Z,r[2]=g*T+x*E+m*L+p*J,r[6]=g*w+x*D+m*O+p*W,r[10]=g*P+x*B+m*k+p*F,r[14]=g*y+x*K+m*j+p*Z,r[3]=_*T+v*E+M*L+b*J,r[7]=_*w+v*D+M*O+b*W,r[11]=_*P+v*B+M*k+b*F,r[15]=_*y+v*K+M*j+b*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*d-i*l*d)+x*(+t*l*d-t*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+m*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-t*l*f+t*a*u+s*o*f-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=f*m*c-x*u*c+x*l*d-a*m*d-f*l*p+a*u*p,v=g*u*c-h*m*c-g*l*d+o*m*d+h*l*p-o*u*p,M=h*x*c-g*f*c+g*a*d-o*x*d-h*a*p+o*f*p,b=g*f*l-h*x*l-g*a*u+o*x*u+h*a*m-o*f*m,T=t*_+i*v+s*M+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=_*w,e[1]=(x*u*r-f*m*r-x*s*d+i*m*d+f*s*p-i*u*p)*w,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*w,e[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*d-i*l*d)*w,e[4]=v*w,e[5]=(h*m*r-g*u*r+g*s*d-t*m*d-h*s*p+t*u*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*d+t*l*d)*w,e[8]=M*w,e[9]=(g*f*r-h*x*r-g*i*d+t*x*d+h*i*p-t*f*p)*w,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*w,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*d-t*a*d)*w,e[12]=b*w,e[13]=(h*x*s-g*f*s+g*i*u-t*x*u-h*i*m+t*f*m)*w,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*w,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*u+t*a*u)*w,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,x=o*h,m=o*f,p=a*f,_=l*c,v=l*h,M=l*f,b=i.x,T=i.y,w=i.z;return s[0]=(1-(x+p))*b,s[1]=(d+M)*b,s[2]=(g-v)*b,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(u+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+v)*w,s[9]=(m-_)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=oo.set(s[0],s[1],s[2]).length(),o=oo.set(s[4],s[5],s[6]).length(),a=oo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pi.copy(this);let c=1/r,h=1/o,f=1/a;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=h,Pi.elements[5]*=h,Pi.elements[6]*=h,Pi.elements[8]*=f,Pi.elements[9]*=f,Pi.elements[10]*=f,t.setFromRotationMatrix(Pi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=xs){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s),d,g;if(a===xs)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pc)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=xs){let l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),u=(t+e)*c,d=(i+s)*h,g,x;if(a===xs)g=(o+r)*f,x=-2*f;else if(a===pc)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},oo=new C,Pi=new Be,c_=new C(0,0,0),h_=new C(1,1,1),qs=new C,kl=new C,qn=new C,im=new Be,sm=new dt,Ms=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ms.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u_=0,rm=new C,ao=new dt,hs=new Be,Bl=new C,ya=new C,f_=new C,d_=new dt,om=new C(1,0,0),am=new C(0,1,0),lm=new C(0,0,1),p_={type:"added"},m_={type:"removed"},kt=class n extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new Ms,i=new dt,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new st}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,t){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bl.copy(e):Bl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(ya,Bl,this.up):hs.lookAt(Bl,ya,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),ao.setFromRotationMatrix(hs),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(p_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m_)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hs.multiply(e.parent.matrixWorld)),e.applyMatrix4(hs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,d_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};kt.DEFAULT_UP=new C(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=new C,us=new C,uu=new C,fs=new C,lo=new C,co=new C,cm=new C,fu=new C,du=new C,pu=new C,zl=!1,_o=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Li.subVectors(e,t),s.cross(Li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Li.subVectors(s,t),us.subVectors(i,t),uu.subVectors(e,t);let o=Li.dot(Li),a=Li.dot(us),l=Li.dot(uu),c=us.dot(us),h=us.dot(uu),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getUV(e,t,i,s,r,o,a,l){return zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zl=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fs.x),l.addScaledVector(o,fs.y),l.addScaledVector(a,fs.z),l)}static isFrontFacing(e,t,i,s){return Li.subVectors(i,t),us.subVectors(e,t),Li.cross(us).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),us.subVectors(this.a,this.b),Li.cross(us).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;lo.subVectors(s,i),co.subVectors(r,i),fu.subVectors(e,i);let l=lo.dot(fu),c=co.dot(fu);if(l<=0&&c<=0)return t.copy(i);du.subVectors(e,s);let h=lo.dot(du),f=co.dot(du);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(lo,o);pu.subVectors(e,r);let d=lo.dot(pu),g=co.dot(pu);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(co,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return cm.subVectors(r,s),a=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(cm,a);let p=1/(m+x+u);return o=x*p,a=u*p,t.copy(i).addScaledVector(lo,o).addScaledVector(co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function mu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=Df(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=mu(o,r,e+1/3),this.g=mu(o,r,e),this.b=mu(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let i=M0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}copyLinearToSRGB(e){return this.r=iu(e.r),this.g=iu(e.g),this.b=iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return ht.fromWorkingColorSpace(Cn.copy(this),e),Math.round($t(Cn.r*255,0,255))*65536+Math.round($t(Cn.g*255,0,255))*256+Math.round($t(Cn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Cn.copy(this),t);let i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ft){ht.fromWorkingColorSpace(Cn.copy(this),e);let t=Cn.r,i=Cn.g,s=Cn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ys),this.setHSL(Ys.h+e,Ys.s+t,Ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ys),e.getHSL(Hl);let i=Aa(Ys.h,Hl.h,t),s=Aa(Ys.s,Hl.s,t),r=Aa(Ys.l,Hl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new pe;pe.NAMES=M0;var g_=0,kn=class extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=bo,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Du,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Iu&&(i.blendSrc=this.blendSrc),this.blendDst!==Du&&(i.blendDst=this.blendDst),this.blendEquation!==li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(i.stencilFail=this.stencilFail),this.stencilZFail!==to&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gn=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gs=x_();function x_(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function v_(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=$t(n,-65504,65504),gs.floatView[0]=n;let e=gs.uint32View[0],t=e>>23&511;return gs.baseTable[t]+((e&8388607)>>gs.shiftTable[t])}function __(n){let e=n>>10;return gs.uint32View[0]=gs.mantissaTable[gs.offsetTable[e]+(n&1023)]+gs.exponentTable[e],gs.floatView[0]}var Dr={toHalfFloat:v_,fromHalfFloat:__},Jt=new C,Vl=new ee,Gt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nu&&(e.usage=this.usage),e}};var _c=class extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var yc=class extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pt=class extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var y_=0,ai=new Be,gu=new kt,ho=new C,Yn=new fi,Ma=new fi,dn=new C,Bt=class n extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?yc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ma.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Yn.min,Ma.min),Yn.expandByPoint(dn),dn.addVectors(Yn.max,Ma.max),Yn.expandByPoint(dn)):(Yn.expandByPoint(Ma.min),Yn.expandByPoint(Ma.max))}Yn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(e,c),dn.add(ho)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new C,h[E]=new C;let f=new C,u=new C,d=new C,g=new ee,x=new ee,m=new ee,p=new C,_=new C;function v(E,D,B){f.fromArray(s,E*3),u.fromArray(s,D*3),d.fromArray(s,B*3),g.fromArray(o,E*2),x.fromArray(o,D*2),m.fromArray(o,B*2),u.sub(f),d.sub(f),x.sub(g),m.sub(g);let K=1/(x.x*m.y-m.x*x.y);isFinite(K)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(K),_.copy(d).multiplyScalar(x.x).addScaledVector(u,-m.x).multiplyScalar(K),c[E].add(p),c[D].add(p),c[B].add(p),h[E].add(_),h[D].add(_),h[B].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let E=0,D=M.length;E<D;++E){let B=M[E],K=B.start,L=B.count;for(let O=K,k=K+L;O<k;O+=3)v(i[O+0],i[O+1],i[O+2])}let b=new C,T=new C,w=new C,P=new C;function y(E){w.fromArray(r,E*3),P.copy(w);let D=c[E];b.copy(D),b.sub(w.multiplyScalar(w.dot(D))).normalize(),T.crossVectors(P,D);let K=T.dot(h[E])<0?-1:1;l[E*4]=b.x,l[E*4+1]=b.y,l[E*4+2]=b.z,l[E*4+3]=K}for(let E=0,D=M.length;E<D;++E){let B=M[E],K=B.start,L=B.count;for(let O=K,k=K+L;O<k;O+=3)y(i[O+0]),y(i[O+1]),y(i[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,f=new C;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Gt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hm=new Be,Mr=new Rr,Gl=new jn,um=new C,uo=new C,fo=new C,po=new C,xu=new C,Wl=new C,Xl=new ee,ql=new ee,Yl=new ee,fm=new C,dm=new C,pm=new C,Zl=new C,Kl=new C,gt=class extends kt{constructor(e=new Bt,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(xu.fromBufferAttribute(f,e),o?Wl.addScaledVector(xu,h):Wl.addScaledVector(xu.sub(t),h))}t.add(Wl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(r),Mr.copy(e.ray).recast(e.near),!(Gl.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Gl,um)===null||Mr.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(hm.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,b=v;M<b;M+=3){let T=a.getX(M),w=a.getX(M+1),P=a.getX(M+2);s=jl(this,p,e,i,c,h,f,T,w,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=jl(this,o,e,i,c,h,f,_,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,b=v;M<b;M+=3){let T=M,w=M+1,P=M+2;s=jl(this,p,e,i,c,h,f,T,w,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,v=m+1,M=m+2;s=jl(this,o,e,i,c,h,f,_,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function M_(n,e,t,i,s,r,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Xi,a),l===null)return null;Kl.copy(a),Kl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Kl);return c<t.near||c>t.far?null:{distance:c,point:Kl.clone(),object:n}}function jl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,uo),n.getVertexPosition(l,fo),n.getVertexPosition(c,po);let h=M_(n,e,t,i,uo,fo,po,Zl);if(h){s&&(Xl.fromBufferAttribute(s,a),ql.fromBufferAttribute(s,l),Yl.fromBufferAttribute(s,c),h.uv=_o.getInterpolation(Zl,uo,fo,po,Xl,ql,Yl,new ee)),r&&(Xl.fromBufferAttribute(r,a),ql.fromBufferAttribute(r,l),Yl.fromBufferAttribute(r,c),h.uv1=_o.getInterpolation(Zl,uo,fo,po,Xl,ql,Yl,new ee),h.uv2=h.uv1),o&&(fm.fromBufferAttribute(o,a),dm.fromBufferAttribute(o,l),pm.fromBufferAttribute(o,c),h.normal=_o.getInterpolation(Zl,uo,fo,po,fm,dm,pm,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};_o.getNormal(uo,fo,po,f.normal),h.face=f}return h}var Jn=class n extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(f,2));function g(x,m,p,_,v,M,b,T,w,P,y){let E=M/w,D=b/P,B=M/2,K=b/2,L=T/2,O=w+1,k=P+1,j=0,J=0,W=new C;for(let F=0;F<k;F++){let Z=F*D-K;for(let re=0;re<O;re++){let V=re*E-B;W[x]=V*_,W[m]=Z*v,W[p]=L,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),f.push(re/w),f.push(1-F/P),j+=1}}for(let F=0;F<P;F++)for(let Z=0;Z<w;Z++){let re=u+Z+O*F,V=u+Z+O*(F+1),te=u+(Z+1)+O*(F+1),me=u+(Z+1)+O*F;l.push(re,V,me),l.push(V,te,me),J+=6}a.addGroup(d,J,y),d+=J,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Po(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function On(n){let e={};for(let t=0;t<n.length;t++){let i=Po(n[t]);for(let s in i)e[s]=i[s]}return e}function S_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function S0(n){return n.getRenderTarget()===null?n.outputColorSpace:ht.workingColorSpace}var xn={clone:Po,merge:On},b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=S_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Mc=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=xs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tn=class extends Mc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mo=-90,go=1,zu=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(mo,go,e,t);s.layers=this.layers,this.add(s);let r=new tn(mo,go,e,t);r.layers=this.layers,this.add(r);let o=new tn(mo,go,e,t);o.layers=this.layers,this.add(o);let a=new tn(mo,go,e,t);a.layers=this.layers,this.add(a);let l=new tn(mo,go,e,t);l.layers=this.layers,this.add(l);let c=new tn(mo,go,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Sc=class extends mn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:wo,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hu=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ra("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wr?ft:ci),this.texture=new Sc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Jn(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:qt});r.uniforms.tEquirect.value=t;let o=new gt(s,r),a=t.minFilter;return t.minFilter===ys&&(t.minFilter=Nt),new zu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},vu=new C,T_=new C,w_=new st,ms=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=vu.subVectors(i,t).cross(T_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(vu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||w_.getNormalMatrix(e),s=this.coplanarPoint(vu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sr=new jn,Jl=new C,Fa=class{constructor(e=new ms,t=new ms,i=new ms,s=new ms,r=new ms,o=new ms){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xs){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,u-c,m-d,M-p).normalize(),i[1].setComponents(l+r,u+c,m+d,M+p).normalize(),i[2].setComponents(l+o,u+h,m+g,M+_).normalize(),i[3].setComponents(l-o,u-h,m-g,M-_).normalize(),i[4].setComponents(l-a,u-f,m-x,M-v).normalize(),t===xs)i[5].setComponents(l+a,u+f,m+x,M+v).normalize();else if(t===pc)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Jl.x=s.normal.x>0?e.max.x:e.min.x,Jl.y=s.normal.y>0?e.max.y:e.min.y,Jl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function b0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function A_(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let f=c.array,u=c.usage,d=f.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,f,u),c.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,f){let u=h.array,d=h._updateRange,g=h.updateRanges;if(n.bindBuffer(f,c),d.count===-1&&g.length===0&&n.bufferSubData(f,0,u),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?n.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):n.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):n.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);if(f===void 0)i.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}var Ss=class n extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*u-o;for(let v=0;v<c;v++){let M=v*f-r;g.push(M,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let v=_+c*p,M=_+c*(p+1),b=_+1+c*(p+1),T=_+1+c*p;d.push(v,M,T),d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},R_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,D_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,k_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,J_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s1="gl_FragColor = linearToOutputTexel( gl_FragColor );",r1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,x1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,N1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,G1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,W1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,My=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ry=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ny=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ky=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$y=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:R_,alphahash_pars_fragment:C_,alphamap_fragment:P_,alphamap_pars_fragment:L_,alphatest_fragment:I_,alphatest_pars_fragment:D_,aomap_fragment:U_,aomap_pars_fragment:N_,batching_pars_vertex:O_,batching_vertex:F_,begin_vertex:k_,beginnormal_vertex:B_,bsdfs:z_,iridescence_fragment:H_,bumpmap_pars_fragment:V_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:q_,color_fragment:Y_,color_pars_fragment:Z_,color_pars_vertex:K_,color_vertex:j_,common:J_,cube_uv_reflection_fragment:$_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:e1,displacementmap_vertex:t1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:s1,colorspace_pars_fragment:r1,envmap_fragment:o1,envmap_common_pars_fragment:a1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:M1,envmap_vertex:h1,fog_vertex:u1,fog_pars_vertex:f1,fog_fragment:d1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_fragment:g1,lightmap_pars_fragment:x1,lights_lambert_fragment:v1,lights_lambert_pars_fragment:_1,lights_pars_begin:y1,lights_toon_fragment:S1,lights_toon_pars_fragment:b1,lights_phong_fragment:E1,lights_phong_pars_fragment:T1,lights_physical_fragment:w1,lights_physical_pars_fragment:A1,lights_fragment_begin:R1,lights_fragment_maps:C1,lights_fragment_end:P1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:D1,logdepthbuf_vertex:U1,map_fragment:N1,map_pars_fragment:O1,map_particle_fragment:F1,map_particle_pars_fragment:k1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:z1,morphcolor_vertex:H1,morphnormal_vertex:V1,morphtarget_pars_vertex:G1,morphtarget_vertex:W1,normal_fragment_begin:X1,normal_fragment_maps:q1,normal_pars_fragment:Y1,normal_pars_vertex:Z1,normal_vertex:K1,normalmap_pars_fragment:j1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:Q1,iridescence_pars_fragment:ey,opaque_fragment:ty,packing:ny,premultiplied_alpha_fragment:iy,project_vertex:sy,dithering_fragment:ry,dithering_pars_fragment:oy,roughnessmap_fragment:ay,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:hy,shadowmap_vertex:uy,shadowmask_pars_fragment:fy,skinbase_vertex:dy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:xy,specularmap_pars_fragment:vy,tonemapping_fragment:_y,tonemapping_pars_fragment:yy,transmission_fragment:My,transmission_pars_fragment:Sy,uv_pars_fragment:by,uv_pars_vertex:Ey,uv_vertex:Ty,worldpos_vertex:wy,background_vert:Ay,background_frag:Ry,backgroundCube_vert:Cy,backgroundCube_frag:Py,cube_vert:Ly,cube_frag:Iy,depth_vert:Dy,depth_frag:Uy,distanceRGBA_vert:Ny,distanceRGBA_frag:Oy,equirect_vert:Fy,equirect_frag:ky,linedashed_vert:By,linedashed_frag:zy,meshbasic_vert:Hy,meshbasic_frag:Vy,meshlambert_vert:Gy,meshlambert_frag:Wy,meshmatcap_vert:Xy,meshmatcap_frag:qy,meshnormal_vert:Yy,meshnormal_frag:Zy,meshphong_vert:Ky,meshphong_frag:jy,meshphysical_vert:Jy,meshphysical_frag:$y,meshtoon_vert:Qy,meshtoon_frag:eM,points_vert:tM,points_frag:nM,shadow_vert:iM,shadow_frag:sM,sprite_vert:rM,sprite_frag:oM},fe={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Gi={basic:{uniforms:On([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:On([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:On([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:On([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:On([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new pe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:On([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:On([fe.points,fe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:On([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:On([fe.common,fe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:On([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:On([fe.sprite,fe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:On([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:On([fe.lights,fe.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Gi.physical={uniforms:On([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var $l={r:0,b:0,g:0};function aM(n,e,t,i,s,r,o){let a=new pe(0),l=r===!0?0:1,c,h,f=null,u=0,d=null;function g(m,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),_=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===jc)?(h===void 0&&(h=new gt(new Jn(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Po(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ht.getTransfer(v.colorSpace)!==St,(f!==v||u!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new gt(new Ss(2,2),new yt({name:"BackgroundMaterial",uniforms:Po(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB($l,S0(n)),i.buffers.color.setClear($l.r,$l.g,$l.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function lM(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function f(L,O,k,j,J){let W=!1;if(o){let F=x(j,k,O);c!==F&&(c=F,d(c.object)),W=p(L,j,k,J),W&&_(L,j,k,J)}else{let F=O.wireframe===!0;(c.geometry!==j.id||c.program!==k.id||c.wireframe!==F)&&(c.geometry=j.id,c.program=k.id,c.wireframe=F,W=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,P(L,O,k,j),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function u(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,O,k){let j=k.wireframe===!0,J=a[L.id];J===void 0&&(J={},a[L.id]=J);let W=J[O.id];W===void 0&&(W={},J[O.id]=W);let F=W[j];return F===void 0&&(F=m(u()),W[j]=F),F}function m(L){let O=[],k=[],j=[];for(let J=0;J<s;J++)O[J]=0,k[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:j,object:L,attributes:{},index:null}}function p(L,O,k,j){let J=c.attributes,W=O.attributes,F=0,Z=k.getAttributes();for(let re in Z)if(Z[re].location>=0){let te=J[re],me=W[re];if(me===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),te===void 0||te.attribute!==me||me&&te.data!==me.data)return!0;F++}return c.attributesNum!==F||c.index!==j}function _(L,O,k,j){let J={},W=O.attributes,F=0,Z=k.getAttributes();for(let re in Z)if(Z[re].location>=0){let te=W[re];te===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));let me={};me.attribute=te,te&&te.data&&(me.data=te.data),J[re]=me,F++}c.attributes=J,c.attributesNum=F,c.index=j}function v(){let L=c.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function M(L){b(L,0)}function b(L,O){let k=c.newAttributes,j=c.enabledAttributes,J=c.attributeDivisors;k[L]=1,j[L]===0&&(n.enableVertexAttribArray(L),j[L]=1),J[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),J[L]=O)}function T(){let L=c.newAttributes,O=c.enabledAttributes;for(let k=0,j=O.length;k<j;k++)O[k]!==L[k]&&(n.disableVertexAttribArray(k),O[k]=0)}function w(L,O,k,j,J,W,F){F===!0?n.vertexAttribIPointer(L,O,k,J,W):n.vertexAttribPointer(L,O,k,j,J,W)}function P(L,O,k,j){if(i.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let J=j.attributes,W=k.getAttributes(),F=O.defaultAttributeValues;for(let Z in W){let re=W[Z];if(re.location>=0){let V=J[Z];if(V===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let te=V.normalized,me=V.itemSize,Pe=t.get(V);if(Pe===void 0)continue;let xe=Pe.buffer,Ne=Pe.type,ze=Pe.bytesPerElement,Ae=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||V.gpuType===h0);if(V.isInterleavedBufferAttribute){let We=V.data,I=We.stride,ue=V.offset;if(We.isInstancedInterleavedBuffer){for(let Q=0;Q<re.locationSize;Q++)b(re.location+Q,We.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Q=0;Q<re.locationSize;Q++)M(re.location+Q);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Q=0;Q<re.locationSize;Q++)w(re.location+Q,me/re.locationSize,Ne,te,I*ze,(ue+me/re.locationSize*Q)*ze,Ae)}else{if(V.isInstancedBufferAttribute){for(let We=0;We<re.locationSize;We++)b(re.location+We,V.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let We=0;We<re.locationSize;We++)M(re.location+We);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let We=0;We<re.locationSize;We++)w(re.location+We,me/re.locationSize,Ne,te,me*ze,me/re.locationSize*We*ze,Ae)}}else if(F!==void 0){let te=F[Z];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(re.location,te);break;case 3:n.vertexAttrib3fv(re.location,te);break;case 4:n.vertexAttrib4fv(re.location,te);break;default:n.vertexAttrib1fv(re.location,te)}}}}T()}function y(){B();for(let L in a){let O=a[L];for(let k in O){let j=O[k];for(let J in j)g(j[J].object),delete j[J];delete O[k]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let k in O){let j=O[k];for(let J in j)g(j[J].object),delete j[J];delete O[k]}delete a[L.id]}function D(L){for(let O in a){let k=a[O];if(k[L.id]===void 0)continue;let j=k[L.id];for(let J in j)g(j[J].object),delete j[J];delete k[L.id]}}function B(){K(),h=!0,c!==l&&(c=l,d(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:K,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function cM(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,f){n.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,u){if(u===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,f,u),t.update(f,r,u)}function c(h,f,u){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u;g++)this.render(h[g],f[g]);else{d.multiDrawArraysWEBGL(r,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=f[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function hM(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,M=o||e.has("OES_texture_float"),b=v&&M,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:T}}function uM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ms,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,v=_*4,M=p.clippingState||null;l.value=M,M=h(g,u,v,d);for(let b=0;b!==v;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==x;++v,M+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function fM(n){let e=new WeakMap;function t(o,a){return a===Da?o.mapping=wo:a===Uu&&(o.mapping=Ao),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Da||a===Uu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Hu(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Qs=class extends Mc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yo=4,mm=[.125,.215,.35,.446,.526,.582],Er=20,_u=new Qs,gm=new pe,yu=null,Mu=0,Su=0,br=(1+Math.sqrt(5))/2,xo=1/br,xm=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,br,xo),new C(0,br,-xo),new C(xo,0,br),new C(-xo,0,br),new C(br,xo,0),new C(-br,xo,0)],Lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Mu,Su),e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Ft,format:zn,colorSpace:Yt,depthBuffer:!1},s=vm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dM(r)),this._blurMaterial=pM(r,e,t)}return s}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,_u)}_sceneToCubeUV(e,t,i,s){let a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(gm),h.toneMapping=js,h.autoClear=!1;let d=new gn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new gt(new Jn,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(gm),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Ql(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===wo||e.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ql(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,_u)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xm[(s-1)%xm.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new gt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Er-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Er;m>Er&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);let p=[],_=0;for(let w=0;w<Er;++w){let P=w/x,y=Math.exp(-P*P/2);p.push(y),w===0?_+=y:w<m&&(_+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let M=this._sizeLods[s],b=3*M*(s>v-yo?s-v+yo:0),T=4*(this._cubeSize-M);Ql(t,b,T,3*M,2*M),l.setRenderTarget(t),l.render(f,_u)}};function dM(n){let e=[],t=[],i=[],s=n,r=n-yo+1+mm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-yo?l=mm[o-n+yo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),v=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){let w=T%3*2/3-1,P=T>2?0:-1,y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(y,x*g*T),v.set(u,m*g*T);let E=[T,T,T,T,T,T];M.set(E,p*g*T)}let b=new Bt;b.setAttribute("position",new Gt(_,x)),b.setAttribute("uv",new Gt(v,m)),b.setAttribute("faceIndex",new Gt(M,p)),e.push(b),s>yo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vm(n,e,t){let i=new Qt(n,e,t);return i.texture.mapping=jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ql(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function pM(n,e,t){let i=new Float32Array(Er),s=new C(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function _m(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function ym(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Da||l===Uu,h=l===wo||l===Ao;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Lo(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Lo(n));let u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function xM(n,e,t,i){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,M=_.length;v<M;v+=3){let b=_[v+0],T=_[v+1],w=_[v+2];u.push(b,T,T,w,w,b)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,M=_.length/3-1;v<M;v+=3){let b=v+0,T=v+1,w=v+2;u.push(b,T,T,w,w,b)}}else return;let m=new(y0(u)?yc:_c)(u,1);m.version=x;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function vM(n,e,t,i){let s=i.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){n.drawElements(r,g,a,d*l),t.update(g,r,1)}function f(d,g,x){if(x===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,x),t.update(g,r,x)}function u(d,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,x);let p=0;for(let _=0;_<x;_++)p+=g[_];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=u}function _M(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yM(n,e){return n[0]-e[0]}function MM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function SM(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],P=0;_===!0&&(P=1),v===!0&&(P=2),M===!0&&(P=3);let y=h.attributes.position.count*P,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let D=new Float32Array(y*E*4*g),B=new vc(D,y,E,g);B.type=Zn,B.needsUpdate=!0;let K=P*4;for(let O=0;O<g;O++){let k=b[O],j=T[O],J=w[O],W=y*E*4*O;for(let F=0;F<k.count;F++){let Z=F*K;_===!0&&(o.fromBufferAttribute(k,F),D[W+Z+0]=o.x,D[W+Z+1]=o.y,D[W+Z+2]=o.z,D[W+Z+3]=0),v===!0&&(o.fromBufferAttribute(j,F),D[W+Z+4]=o.x,D[W+Z+5]=o.y,D[W+Z+6]=o.z,D[W+Z+7]=0),M===!0&&(o.fromBufferAttribute(J,F),D[W+Z+8]=o.x,D[W+Z+9]=o.y,D[W+Z+10]=o.z,D[W+Z+11]=J.itemSize===4?o.w:1)}}x={count:g,texture:B,size:new ee(y,E)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let _=0;_<u.length;_++)m+=u[_];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",p),f.getUniforms().setValue(n,"morphTargetInfluences",u),f.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let d=u===void 0?0:u.length,g=i[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<d;v++){let M=g[v];M[0]=v,M[1]=u[v]}g.sort(MM);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(yM);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let M=a[v],b=M[0],T=M[1];b!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+v)!==x[b]&&h.setAttribute("morphTarget"+v,x[b]),m&&h.getAttribute("morphNormal"+v)!==m[b]&&h.setAttribute("morphNormal"+v,m[b]),s[v]=T,p+=T):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let _=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function bM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Io=class extends mn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Tr,h!==Tr&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Tr&&(i=Zs),i===void 0&&h===Js&&(i=vs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},E0=new mn,T0=new Io(1,1);T0.compareFunction=_0;var w0=new vc,A0=new Bu,R0=new Sc,Mm=[],Sm=[],bm=new Float32Array(16),Em=new Float32Array(9),Tm=new Float32Array(4);function Ho(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Mm[s];if(r===void 0&&(r=new Float32Array(s),Mm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function th(n,e){let t=Sm[e];t===void 0&&(t=new Int32Array(e),Sm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function EM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function AM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function RM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Tm.set(i),n.uniformMatrix2fv(this.addr,!1,Tm),sn(t,i)}}function CM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Em.set(i),n.uniformMatrix3fv(this.addr,!1,Em),sn(t,i)}}function PM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;bm.set(i),n.uniformMatrix4fv(this.addr,!1,bm),sn(t,i)}}function LM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function IM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function DM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function UM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function NM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function OM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function FM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function kM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function BM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?T0:E0;t.setTexture2D(e||r,s)}function zM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||A0,s)}function HM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||R0,s)}function VM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||w0,s)}function GM(n){switch(n){case 5126:return EM;case 35664:return TM;case 35665:return wM;case 35666:return AM;case 35674:return RM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return IM;case 35668:case 35672:return DM;case 35669:case 35673:return UM;case 5125:return NM;case 36294:return OM;case 36295:return FM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return VM}}function WM(n,e){n.uniform1fv(this.addr,e)}function XM(n,e){let t=Ho(e,this.size,2);n.uniform2fv(this.addr,t)}function qM(n,e){let t=Ho(e,this.size,3);n.uniform3fv(this.addr,t)}function YM(n,e){let t=Ho(e,this.size,4);n.uniform4fv(this.addr,t)}function ZM(n,e){let t=Ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KM(n,e){let t=Ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jM(n,e){let t=Ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function JM(n,e){n.uniform1iv(this.addr,e)}function $M(n,e){n.uniform2iv(this.addr,e)}function QM(n,e){n.uniform3iv(this.addr,e)}function eS(n,e){n.uniform4iv(this.addr,e)}function tS(n,e){n.uniform1uiv(this.addr,e)}function nS(n,e){n.uniform2uiv(this.addr,e)}function iS(n,e){n.uniform3uiv(this.addr,e)}function sS(n,e){n.uniform4uiv(this.addr,e)}function rS(n,e,t){let i=this.cache,s=e.length,r=th(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||E0,r[o])}function oS(n,e,t){let i=this.cache,s=e.length,r=th(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||A0,r[o])}function aS(n,e,t){let i=this.cache,s=e.length,r=th(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||R0,r[o])}function lS(n,e,t){let i=this.cache,s=e.length,r=th(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||w0,r[o])}function cS(n){switch(n){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return ZM;case 35675:return KM;case 35676:return jM;case 5124:case 35670:return JM;case 35667:case 35671:return $M;case 35668:case 35672:return QM;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return sS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return oS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return lS}}var Vu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=GM(t.type)}},Gu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cS(t.type)}},Wu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},bu=/(\w+)(\])?(\[|\.)?/g;function wm(n,e){n.seq.push(e),n.map[e.id]=e}function hS(n,e,t){let i=n.name,s=i.length;for(bu.lastIndex=0;;){let r=bu.exec(i),o=bu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wm(t,c===void 0?new Vu(a,n,e):new Gu(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Wu(a),wm(t,f)),t=f}}}var To=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Am(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var uS=37297,fS=0;function dS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function pS(n){let e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(n),i;switch(e===t?i="":e===dc&&t===fc?i="LinearDisplayP3ToLinearSRGB":e===fc&&t===dc&&(i="LinearSRGBToLinearDisplayP3"),n){case Yt:case Qc:return[i,"LinearTransferOETF"];case ft:case If:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+dS(n.getShaderSource(e),o)}else return s}function mS(n,e){let t=pS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gS(n,e){let t;switch(e){case Tf:t="Linear";break;case wf:t="Reinhard";break;case Af:t="OptimizedCineon";break;case zo:t="ACESFilmic";break;case Rf:t="AgX";break;case Ev:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mo).join(`
`)}function vS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Mo).join(`
`)}function _S(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mo(n){return n!==""}function Cm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(n){return n.replace(MS,bS)}var SS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bS(n,e){let t=Qe[e];if(t===void 0){let i=SS.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xu(t)}var ES=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(n){return n.replace(ES,TS)}function TS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Im(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ps&&(e="SHADOWMAP_TYPE_VSM"),e}function AS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case Ao:e="ENVMAP_TYPE_CUBE";break;case jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function CS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ef:e="ENVMAP_BLENDING_MULTIPLY";break;case Sv:e="ENVMAP_BLENDING_MIX";break;case bv:e="ENVMAP_BLENDING_ADD";break}return e}function PS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function LS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=wS(t),c=AS(t),h=RS(t),f=CS(t),u=PS(t),d=t.isWebGL2?"":xS(t),g=vS(t),x=_S(r),m=s.createProgram(),p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mo).join(`
`),p.length>0&&(p+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mo).join(`
`),_.length>0&&(_+=`
`)):(p=[Im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),_=[d,Im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==js?"#define TONE_MAPPING":"",t.toneMapping!==js?Qe.tonemapping_pars_fragment:"",t.toneMapping!==js?gS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,mS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),o=Xu(o),o=Cm(o,t),o=Pm(o,t),a=Xu(a),a=Cm(a,t),a=Pm(a,t),o=Lm(o),a=Lm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=v+p+o,b=v+_+a,T=Am(s,s.VERTEX_SHADER,M),w=Am(s,s.FRAGMENT_SHADER,b);s.attachShader(m,T),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function P(B){if(n.debug.checkShaderErrors){let K=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(T).trim(),O=s.getShaderInfoLog(w).trim(),k=!0,j=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,T,w);else{let J=Rm(s,T,"vertex"),W=Rm(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+J+`
`+W)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||O==="")&&(j=!1);j&&(B.diagnostics={runnable:k,programLog:K,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:_}})}s.deleteShader(T),s.deleteShader(w),y=new To(s,m),E=yS(s,m)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,uS)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}var IS=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Yu(e),t.set(e,i)),i}},Yu=class{constructor(e){this.id=IS++,this.code=e,this.usedTimes=0}};function DS(n,e,t,i,s,r,o){let a=new Oa,l=new qu,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,E,D,B,K){let L=B.fog,O=K.geometry,k=y.isMeshStandardMaterial?B.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),J=j&&j.mapping===jc?j.image.height:null,W=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let F=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=F!==void 0?F.length:0,re=0;O.morphAttributes.position!==void 0&&(re=1),O.morphAttributes.normal!==void 0&&(re=2),O.morphAttributes.color!==void 0&&(re=3);let V,te,me,Pe;if(W){let Dn=Gi[W];V=Dn.vertexShader,te=Dn.fragmentShader}else V=y.vertexShader,te=y.fragmentShader,l.update(y),me=l.getVertexShaderID(y),Pe=l.getFragmentShaderID(y);let xe=n.getRenderTarget(),Ne=K.isInstancedMesh===!0,ze=K.isBatchedMesh===!0,Ae=!!y.map,We=!!y.matcap,I=!!j,ue=!!y.aoMap,Q=!!y.lightMap,ce=!!y.bumpMap,$=!!y.normalMap,Ie=!!y.displacementMap,ve=!!y.emissiveMap,A=!!y.metalnessMap,S=!!y.roughnessMap,z=y.anisotropy>0,ae=y.clearcoat>0,oe=y.iridescence>0,ne=y.sheen>0,Ce=y.transmission>0,de=z&&!!y.anisotropyMap,Te=ae&&!!y.clearcoatMap,Oe=ae&&!!y.clearcoatNormalMap,Ge=ae&&!!y.clearcoatRoughnessMap,ie=oe&&!!y.iridescenceMap,rt=oe&&!!y.iridescenceThicknessMap,et=ne&&!!y.sheenColorMap,qe=ne&&!!y.sheenRoughnessMap,ke=!!y.specularMap,Re=!!y.specularColorMap,Ke=!!y.specularIntensityMap,lt=Ce&&!!y.transmissionMap,vt=Ce&&!!y.thicknessMap,Ze=!!y.gradientMap,he=!!y.alphaMap,N=y.alphaTest>0,_e=!!y.alphaHash,ye=!!y.extensions,Xe=!!O.attributes.uv1,He=!!O.attributes.uv2,wt=!!O.attributes.uv3,At=js;return y.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(At=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:te,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:Pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ze,instancing:Ne,instancingColor:Ne&&K.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Yt,map:Ae,matcap:We,envMap:I,envMapMode:I&&j.mapping,envMapCubeUVHeight:J,aoMap:ue,lightMap:Q,bumpMap:ce,normalMap:$,displacementMap:u&&Ie,emissiveMap:ve,normalMapObjectSpace:$&&y.normalMapType===Ov,normalMapTangentSpace:$&&y.normalMapType===$c,metalnessMap:A,roughnessMap:S,anisotropy:z,anisotropyMap:de,clearcoat:ae,clearcoatMap:Te,clearcoatNormalMap:Oe,clearcoatRoughnessMap:Ge,iridescence:oe,iridescenceMap:ie,iridescenceThicknessMap:rt,sheen:ne,sheenColorMap:et,sheenRoughnessMap:qe,specularMap:ke,specularColorMap:Re,specularIntensityMap:Ke,transmission:Ce,transmissionMap:lt,thicknessMap:vt,gradientMap:Ze,opaque:y.transparent===!1&&y.blending===bo,alphaMap:he,alphaTest:N,alphaHash:_e,combine:y.combine,mapUv:Ae&&x(y.map.channel),aoMapUv:ue&&x(y.aoMap.channel),lightMapUv:Q&&x(y.lightMap.channel),bumpMapUv:ce&&x(y.bumpMap.channel),normalMapUv:$&&x(y.normalMap.channel),displacementMapUv:Ie&&x(y.displacementMap.channel),emissiveMapUv:ve&&x(y.emissiveMap.channel),metalnessMapUv:A&&x(y.metalnessMap.channel),roughnessMapUv:S&&x(y.roughnessMap.channel),anisotropyMapUv:de&&x(y.anisotropyMap.channel),clearcoatMapUv:Te&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:et&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&x(y.sheenRoughnessMap.channel),specularMapUv:ke&&x(y.specularMap.channel),specularColorMapUv:Re&&x(y.specularColorMap.channel),specularIntensityMapUv:Ke&&x(y.specularIntensityMap.channel),transmissionMapUv:lt&&x(y.transmissionMap.channel),thicknessMapUv:vt&&x(y.thicknessMap.channel),alphaMapUv:he&&x(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&($||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Xe,vertexUv2s:He,vertexUv3s:wt,pointsUvs:K.isPoints===!0&&!!O.attributes.uv&&(Ae||he),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&ht.getTransfer(y.map.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ii,flipSided:y.side===Pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ye&&y.extensions.derivatives===!0,extensionFragDepth:ye&&y.extensions.fragDepth===!0,extensionDrawBuffers:ye&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)E.push(D),E.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(_(E,y),v(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){let E=g[y.type],D;if(E){let B=Gi[E];D=xn.clone(B.uniforms)}else D=y.uniforms;return D}function b(y,E){let D;for(let B=0,K=c.length;B<K;B++){let L=c[B];if(L.cacheKey===E){D=L,++D.usedTimes;break}}return D===void 0&&(D=new LS(n,E,y,r),c.push(D)),D}function T(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:P}}function US(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function NS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Um(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,u,d,g,x,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,u,d,g,x,m){let p=o(f,u,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,g,x,m){let p=o(f,u,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||NS),i.length>1&&i.sort(u||Dm),s.length>1&&s.sort(u||Dm)}function h(){for(let f=e,u=n.length;f<u;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function OS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Um,n.set(i,[o])):s>=r.length?(o=new Um,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function FS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new pe};break;case"SpotLight":t={position:new C,direction:new C,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function kS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var BS=0;function zS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function HS(n,e){let t=new FS,i=kS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new Be,a=new Be;function l(h,f){let u=0,d=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let x=0,m=0,p=0,_=0,v=0,M=0,b=0,T=0,w=0,P=0,y=0;h.sort(zS);let E=f===!0?Math.PI:1;for(let B=0,K=h.length;B<K;B++){let L=h[B],O=L.color,k=L.intensity,j=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*k*E,d+=O.g*k*E,g+=O.b*k*E;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],k);y++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let F=L.shadow,Z=i.get(L);Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,s.directionalShadow[x]=Z,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=L.shadow.matrix,M++}s.directional[x]=W,x++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(k*E),W.distance=j,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[p]=W;let F=L.shadow;if(L.map&&(s.spotLightMap[w]=L.map,w++,F.updateMatrices(L),L.castShadow&&P++),s.spotLightMatrix[p]=F.matrix,L.castShadow){let Z=i.get(L);Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,s.spotShadow[p]=Z,s.spotShadowMap[p]=J,T++}p++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(O).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[_]=W,_++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),W.distance=L.distance,W.decay=L.decay,L.castShadow){let F=L.shadow,Z=i.get(L);Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,Z.shadowCameraNear=F.camera.near,Z.shadowCameraFar=F.camera.far,s.pointShadow[m]=Z,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,b++}s.point[m]=W,m++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(k*E),W.groundColor.copy(L.groundColor).multiplyScalar(k*E),s.hemi[v]=W,v++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=d,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==x||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==_||D.hemiLength!==v||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==w||D.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=T+w-P,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=y,D.directionalLength=x,D.pointLength=m,D.spotLength=p,D.rectAreaLength=_,D.hemiLength=v,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=w,D.numLightProbes=y,s.version=BS++)}function c(h,f){let u=0,d=0,g=0,x=0,m=0,p=f.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let M=h[_];if(M.isDirectionalLight){let b=s.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),u++}else if(M.isSpotLight){let b=s.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=s.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let b=s.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let b=s.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Nm(n,e){let t=new HS(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function VS(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Nm(n,e),t.set(r,[l])):o>=a.length?(l=new Nm(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var ka=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zu=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},GS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XS(n,e,t){let i=new Fa,s=new ee,r=new ee,o=new mt,a=new ka({depthPacking:Lf}),l=new Zu,c={},h=t.maxTextureSize,f={[Xi]:Pn,[Pn]:Xi,[Ii]:Ii},u=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:GS,fragmentShader:WS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new gt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0;let p=this.type;this.render=function(T,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(qt),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let K=p!==ps&&this.type===ps,L=p===ps&&this.type!==ps;for(let O=0,k=T.length;O<k;O++){let j=T[O],J=j.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let W=J.getFrameExtents();if(s.multiply(W),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,J.mapSize.y=r.y)),J.map===null||K===!0||L===!0){let Z=this.type!==ps?{minFilter:bt,magFilter:bt}:{};J.map!==null&&J.map.dispose(),J.map=new Qt(s.x,s.y,Z),J.map.texture.name=j.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let F=J.getViewportCount();for(let Z=0;Z<F;Z++){let re=J.getViewport(Z);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),B.viewport(o),J.updateMatrices(j,Z),i=J.getFrustum(),M(w,P,J.camera,j,this.type)}J.isPointLightShadow!==!0&&this.type===ps&&_(J,P),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,E,D)};function _(T,w){let P=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qt(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,P,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,P,d,x,null)}function v(T,w,P,y){let E=null,D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)E=D;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let B=E.uuid,K=w.uuid,L=c[B];L===void 0&&(L={},c[B]=L);let O=L[K];O===void 0&&(O=E.clone(),L[K]=O,w.addEventListener("dispose",b)),E=O}if(E.visible=w.visible,E.wireframe=w.wireframe,y===ps?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let B=n.properties.get(E);B.light=P}return E}function M(T,w,P,y,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===ps)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let K=e.update(T),L=T.material;if(Array.isArray(L)){let O=K.groups;for(let k=0,j=O.length;k<j;k++){let J=O[k],W=L[J.materialIndex];if(W&&W.visible){let F=v(T,W,y,E);T.onBeforeShadow(n,T,w,P,K,F,J),n.renderBufferDirect(P,null,K,F,T,J),T.onAfterShadow(n,T,w,P,K,F,J)}}}else if(L.visible){let O=v(T,L,y,E);T.onBeforeShadow(n,T,w,P,K,O,null),n.renderBufferDirect(P,null,K,O,T,null),T.onAfterShadow(n,T,w,P,K,O,null)}}let B=T.children;for(let K=0,L=B.length;K<L;K++)M(B[K],w,P,y,E)}function b(T){T.target.removeEventListener("dispose",b);for(let P in c){let y=c[P],E=T.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function qS(n,e,t){let i=t.isWebGL2;function s(){let N=!1,_e=new mt,ye=null,Xe=new mt(0,0,0,0);return{setMask:function(He){ye!==He&&!N&&(n.colorMask(He,He,He,He),ye=He)},setLocked:function(He){N=He},setClear:function(He,wt,At,un,Dn){Dn===!0&&(He*=un,wt*=un,At*=un),_e.set(He,wt,At,un),Xe.equals(_e)===!1&&(n.clearColor(He,wt,At,un),Xe.copy(_e))},reset:function(){N=!1,ye=null,Xe.set(-1,0,0,0)}}}function r(){let N=!1,_e=null,ye=null,Xe=null;return{setTest:function(He){He?ze(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(He){_e!==He&&!N&&(n.depthMask(He),_e=He)},setFunc:function(He){if(ye!==He){switch(He){case mv:n.depthFunc(n.NEVER);break;case gv:n.depthFunc(n.ALWAYS);break;case xv:n.depthFunc(n.LESS);break;case cc:n.depthFunc(n.LEQUAL);break;case vv:n.depthFunc(n.EQUAL);break;case _v:n.depthFunc(n.GEQUAL);break;case yv:n.depthFunc(n.GREATER);break;case Mv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=He}},setLocked:function(He){N=He},setClear:function(He){Xe!==He&&(n.clearDepth(He),Xe=He)},reset:function(){N=!1,_e=null,ye=null,Xe=null}}}function o(){let N=!1,_e=null,ye=null,Xe=null,He=null,wt=null,At=null,un=null,Dn=null;return{setTest:function(Rt){N||(Rt?ze(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(Rt){_e!==Rt&&!N&&(n.stencilMask(Rt),_e=Rt)},setFunc:function(Rt,Un,Vi){(ye!==Rt||Xe!==Un||He!==Vi)&&(n.stencilFunc(Rt,Un,Vi),ye=Rt,Xe=Un,He=Vi)},setOp:function(Rt,Un,Vi){(wt!==Rt||At!==Un||un!==Vi)&&(n.stencilOp(Rt,Un,Vi),wt=Rt,At=Un,un=Vi)},setLocked:function(Rt){N=Rt},setClear:function(Rt){Dn!==Rt&&(n.clearStencil(Rt),Dn=Rt)},reset:function(){N=!1,_e=null,ye=null,Xe=null,He=null,wt=null,At=null,un=null,Dn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap,u={},d={},g=new WeakMap,x=[],m=null,p=!1,_=null,v=null,M=null,b=null,T=null,w=null,P=null,y=new pe(0,0,0),E=0,D=!1,B=null,K=null,L=null,O=null,k=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,W=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),J=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),J=W>=2);let Z=null,re={},V=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),me=new mt().fromArray(V),Pe=new mt().fromArray(te);function xe(N,_e,ye,Xe){let He=new Uint8Array(4),wt=n.createTexture();n.bindTexture(N,wt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<ye;At++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,Xe,0,n.RGBA,n.UNSIGNED_BYTE,He):n.texImage2D(_e+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,He);return wt}let Ne={};Ne[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ze(n.DEPTH_TEST),l.setFunc(cc),ve(!1),A(gp),ze(n.CULL_FACE),$(qt);function ze(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ae(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function We(N,_e){return d[N]!==_e?(n.bindFramebuffer(N,_e),d[N]=_e,i&&(N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_e),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function I(N,_e){let ye=x,Xe=!1;if(N)if(ye=g.get(_e),ye===void 0&&(ye=[],g.set(_e,ye)),N.isWebGLMultipleRenderTargets){let He=N.texture;if(ye.length!==He.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,At=He.length;wt<At;wt++)ye[wt]=n.COLOR_ATTACHMENT0+wt;ye.length=He.length,Xe=!0}}else ye[0]!==n.COLOR_ATTACHMENT0&&(ye[0]=n.COLOR_ATTACHMENT0,Xe=!0);else ye[0]!==n.BACK&&(ye[0]=n.BACK,Xe=!0);Xe&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function ue(N){return m!==N?(n.useProgram(N),m=N,!0):!1}let Q={[li]:n.FUNC_ADD,[iv]:n.FUNC_SUBTRACT,[sv]:n.FUNC_REVERSE_SUBTRACT};if(i)Q[_p]=n.MIN,Q[yp]=n.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(Q[_p]=N.MIN_EXT,Q[yp]=N.MAX_EXT)}let ce={[Bo]:n.ZERO,[rv]:n.ONE,[ov]:n.SRC_COLOR,[Iu]:n.SRC_ALPHA,[hv]:n.SRC_ALPHA_SATURATE,[Kc]:n.DST_COLOR,[Zc]:n.DST_ALPHA,[av]:n.ONE_MINUS_SRC_COLOR,[Du]:n.ONE_MINUS_SRC_ALPHA,[cv]:n.ONE_MINUS_DST_COLOR,[lv]:n.ONE_MINUS_DST_ALPHA,[uv]:n.CONSTANT_COLOR,[fv]:n.ONE_MINUS_CONSTANT_COLOR,[dv]:n.CONSTANT_ALPHA,[pv]:n.ONE_MINUS_CONSTANT_ALPHA};function $(N,_e,ye,Xe,He,wt,At,un,Dn,Rt){if(N===qt){p===!0&&(Ae(n.BLEND),p=!1);return}if(p===!1&&(ze(n.BLEND),p=!0),N!==bf){if(N!==_||Rt!==D){if((v!==li||T!==li)&&(n.blendEquation(n.FUNC_ADD),v=li,T=li),Rt)switch(N){case bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _s:n.blendFunc(n.ONE,n.ONE);break;case xp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _s:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,w=null,P=null,y.set(0,0,0),E=0,_=N,D=Rt}return}He=He||_e,wt=wt||ye,At=At||Xe,(_e!==v||He!==T)&&(n.blendEquationSeparate(Q[_e],Q[He]),v=_e,T=He),(ye!==M||Xe!==b||wt!==w||At!==P)&&(n.blendFuncSeparate(ce[ye],ce[Xe],ce[wt],ce[At]),M=ye,b=Xe,w=wt,P=At),(un.equals(y)===!1||Dn!==E)&&(n.blendColor(un.r,un.g,un.b,Dn),y.copy(un),E=Dn),_=N,D=!1}function Ie(N,_e){N.side===Ii?Ae(n.CULL_FACE):ze(n.CULL_FACE);let ye=N.side===Pn;_e&&(ye=!ye),ve(ye),N.blending===bo&&N.transparent===!1?$(qt):$(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);let Xe=N.stencilWrite;c.setTest(Xe),Xe&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),z(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ze(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ve(N){B!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),B=N)}function A(N){N!==tv?(ze(n.CULL_FACE),N!==K&&(N===gp?n.cullFace(n.BACK):N===nv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),K=N}function S(N){N!==L&&(J&&n.lineWidth(N),L=N)}function z(N,_e,ye){N?(ze(n.POLYGON_OFFSET_FILL),(O!==_e||k!==ye)&&(n.polygonOffset(_e,ye),O=_e,k=ye)):Ae(n.POLYGON_OFFSET_FILL)}function ae(N){N?ze(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function oe(N){N===void 0&&(N=n.TEXTURE0+j-1),Z!==N&&(n.activeTexture(N),Z=N)}function ne(N,_e,ye){ye===void 0&&(Z===null?ye=n.TEXTURE0+j-1:ye=Z);let Xe=re[ye];Xe===void 0&&(Xe={type:void 0,texture:void 0},re[ye]=Xe),(Xe.type!==N||Xe.texture!==_e)&&(Z!==ye&&(n.activeTexture(ye),Z=ye),n.bindTexture(N,_e||Ne[N]),Xe.type=N,Xe.texture=_e)}function Ce(){let N=re[Z];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function de(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(N){me.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),me.copy(N))}function lt(N){Pe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Pe.copy(N))}function vt(N,_e){let ye=f.get(_e);ye===void 0&&(ye=new WeakMap,f.set(_e,ye));let Xe=ye.get(N);Xe===void 0&&(Xe=n.getUniformBlockIndex(_e,N.name),ye.set(N,Xe))}function Ze(N,_e){let Xe=f.get(_e).get(N);h.get(_e)!==Xe&&(n.uniformBlockBinding(_e,Xe,N.__bindingPointIndex),h.set(_e,Xe))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,re={},d={},g=new WeakMap,x=[],m=null,p=!1,_=null,v=null,M=null,b=null,T=null,w=null,P=null,y=new pe(0,0,0),E=0,D=!1,B=null,K=null,L=null,O=null,k=null,me.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ze,disable:Ae,bindFramebuffer:We,drawBuffers:I,useProgram:ue,setBlending:$,setMaterial:Ie,setFlipSided:ve,setCullFace:A,setLineWidth:S,setPolygonOffset:z,setScissorTest:ae,activeTexture:oe,bindTexture:ne,unbindTexture:Ce,compressedTexImage2D:de,compressedTexImage3D:Te,texImage2D:ke,texImage3D:Re,updateUBOMapping:vt,uniformBlockBinding:Ze,texStorage2D:et,texStorage3D:qe,texSubImage2D:Oe,texSubImage3D:Ge,compressedTexSubImage2D:ie,compressedTexSubImage3D:rt,scissor:Ke,viewport:lt,reset:he}}function YS(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Na("canvas")}function x(A,S,z,ae){let oe=1;if((A.width>ae||A.height>ae)&&(oe=ae/Math.max(A.width,A.height)),oe<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let ne=S?mc:Math.floor,Ce=ne(oe*A.width),de=ne(oe*A.height);f===void 0&&(f=g(Ce,de));let Te=z?g(Ce,de):f;return Te.width=Ce,Te.height=de,Te.getContext("2d").drawImage(A,0,0,Ce,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ce+"x"+de+")."),Te}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Fu(A.width)&&Fu(A.height)}function p(A){return a?!1:A.wrapS!==Fn||A.wrapT!==Fn||A.minFilter!==bt&&A.minFilter!==Nt}function _(A,S){return A.generateMipmaps&&S&&A.minFilter!==bt&&A.minFilter!==Nt}function v(A){n.generateMipmap(A)}function M(A,S,z,ae,oe=!1){if(a===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=S;if(S===n.RED&&(z===n.FLOAT&&(ne=n.R32F),z===n.HALF_FLOAT&&(ne=n.R16F),z===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.R8UI),z===n.UNSIGNED_SHORT&&(ne=n.R16UI),z===n.UNSIGNED_INT&&(ne=n.R32UI),z===n.BYTE&&(ne=n.R8I),z===n.SHORT&&(ne=n.R16I),z===n.INT&&(ne=n.R32I)),S===n.RG&&(z===n.FLOAT&&(ne=n.RG32F),z===n.HALF_FLOAT&&(ne=n.RG16F),z===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RGBA){let Ce=oe?uc:ht.getTransfer(ae);z===n.FLOAT&&(ne=n.RGBA32F),z===n.HALF_FLOAT&&(ne=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ne=Ce===St?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(A,S,z){return _(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==bt&&A.minFilter!==Nt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){return A===bt||A===hc||A===Ta?n.NEAREST:n.LINEAR}function w(A){let S=A.target;S.removeEventListener("dispose",w),y(S),S.isVideoTexture&&h.delete(S)}function P(A){let S=A.target;S.removeEventListener("dispose",P),D(S)}function y(A){let S=i.get(A);if(S.__webglInit===void 0)return;let z=A.source,ae=u.get(z);if(ae){let oe=ae[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&E(A),Object.keys(ae).length===0&&u.delete(z)}i.remove(A)}function E(A){let S=i.get(A);n.deleteTexture(S.__webglTexture);let z=A.source,ae=u.get(z);delete ae[S.__cacheKey],o.memory.textures--}function D(A){let S=A.texture,z=i.get(A),ae=i.get(S);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(z.__webglFramebuffer[oe]))for(let ne=0;ne<z.__webglFramebuffer[oe].length;ne++)n.deleteFramebuffer(z.__webglFramebuffer[oe][ne]);else n.deleteFramebuffer(z.__webglFramebuffer[oe]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[oe])}else{if(Array.isArray(z.__webglFramebuffer))for(let oe=0;oe<z.__webglFramebuffer.length;oe++)n.deleteFramebuffer(z.__webglFramebuffer[oe]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let oe=0;oe<z.__webglColorRenderbuffer.length;oe++)z.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[oe]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let oe=0,ne=S.length;oe<ne;oe++){let Ce=i.get(S[oe]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),o.memory.textures--),i.remove(S[oe])}i.remove(S),i.remove(A)}let B=0;function K(){B=0}function L(){let A=B;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function O(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function k(A,S){let z=i.get(A);if(A.isVideoTexture&&Ie(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let ae=A.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(z,A,S);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function j(A,S){let z=i.get(A);if(A.version>0&&z.__version!==A.version){me(z,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function J(A,S){let z=i.get(A);if(A.version>0&&z.__version!==A.version){me(z,A,S);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function W(A,S){let z=i.get(A);if(A.version>0&&z.__version!==A.version){Pe(z,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}let F={[pn]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Ua]:n.MIRRORED_REPEAT},Z={[bt]:n.NEAREST,[hc]:n.NEAREST_MIPMAP_NEAREST,[Ta]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[Cf]:n.LINEAR_MIPMAP_NEAREST,[ys]:n.LINEAR_MIPMAP_LINEAR},re={[Fv]:n.NEVER,[Gv]:n.ALWAYS,[kv]:n.LESS,[_0]:n.LEQUAL,[Bv]:n.EQUAL,[Vv]:n.GEQUAL,[zv]:n.GREATER,[Hv]:n.NOTEQUAL};function V(A,S,z){if(z?(n.texParameteri(A,n.TEXTURE_WRAP_S,F[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,F[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,F[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Z[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Z[S.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Fn||S.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,T(S.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==bt&&S.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===bt||S.minFilter!==Ta&&S.minFilter!==ys||S.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ft&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function te(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));let ae=S.source,oe=u.get(ae);oe===void 0&&(oe={},u.set(ae,oe));let ne=O(S);if(ne!==A.__cacheKey){oe[ne]===void 0&&(oe[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),oe[ne].usedTimes++;let Ce=oe[A.__cacheKey];Ce!==void 0&&(oe[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(S)),A.__cacheKey=ne,A.__webglTexture=oe[ne].texture}return z}function me(A,S,z){let ae=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=n.TEXTURE_3D);let oe=te(A,S),ne=S.source;t.bindTexture(ae,A.__webglTexture,n.TEXTURE0+z);let Ce=i.get(ne);if(ne.version!==Ce.__version||oe===!0){t.activeTexture(n.TEXTURE0+z);let de=ht.getPrimaries(ht.workingColorSpace),Te=S.colorSpace===ci?null:ht.getPrimaries(S.colorSpace),Oe=S.colorSpace===ci||de===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Ge=p(S)&&m(S.image)===!1,ie=x(S.image,Ge,!1,s.maxTextureSize);ie=ve(S,ie);let rt=m(ie)||a,et=r.convert(S.format,S.colorSpace),qe=r.convert(S.type),ke=M(S.internalFormat,et,qe,S.colorSpace,S.isVideoTexture);V(ae,S,rt);let Re,Ke=S.mipmaps,lt=a&&S.isVideoTexture!==!0&&ke!==g0,vt=Ce.__version===void 0||oe===!0,Ze=b(S,ie,rt);if(S.isDepthTexture)ke=n.DEPTH_COMPONENT,a?S.type===Zn?ke=n.DEPTH_COMPONENT32F:S.type===Zs?ke=n.DEPTH_COMPONENT24:S.type===vs?ke=n.DEPTH24_STENCIL8:ke=n.DEPTH_COMPONENT16:S.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Tr&&ke===n.DEPTH_COMPONENT&&S.type!==Pf&&S.type!==Zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Zs,qe=r.convert(S.type)),S.format===Js&&ke===n.DEPTH_COMPONENT&&(ke=n.DEPTH_STENCIL,S.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=vs,qe=r.convert(S.type))),vt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,ke,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ke,ie.width,ie.height,0,et,qe,null));else if(S.isDataTexture)if(Ke.length>0&&rt){lt&&vt&&t.texStorage2D(n.TEXTURE_2D,Ze,ke,Ke[0].width,Ke[0].height);for(let he=0,N=Ke.length;he<N;he++)Re=Ke[he],lt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Re.width,Re.height,et,qe,Re.data):t.texImage2D(n.TEXTURE_2D,he,ke,Re.width,Re.height,0,et,qe,Re.data);S.generateMipmaps=!1}else lt?(vt&&t.texStorage2D(n.TEXTURE_2D,Ze,ke,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,et,qe,ie.data)):t.texImage2D(n.TEXTURE_2D,0,ke,ie.width,ie.height,0,et,qe,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,ke,Ke[0].width,Ke[0].height,ie.depth);for(let he=0,N=Ke.length;he<N;he++)Re=Ke[he],S.format!==zn?et!==null?lt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,ie.depth,et,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,ke,Re.width,Re.height,ie.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,ie.depth,et,qe,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,ke,Re.width,Re.height,ie.depth,0,et,qe,Re.data)}else{lt&&vt&&t.texStorage2D(n.TEXTURE_2D,Ze,ke,Ke[0].width,Ke[0].height);for(let he=0,N=Ke.length;he<N;he++)Re=Ke[he],S.format!==zn?et!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Re.width,Re.height,et,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,he,ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Re.width,Re.height,et,qe,Re.data):t.texImage2D(n.TEXTURE_2D,he,ke,Re.width,Re.height,0,et,qe,Re.data)}else if(S.isDataArrayTexture)lt?(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,ke,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,et,qe,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,ie.width,ie.height,ie.depth,0,et,qe,ie.data);else if(S.isData3DTexture)lt?(vt&&t.texStorage3D(n.TEXTURE_3D,Ze,ke,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,et,qe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ke,ie.width,ie.height,ie.depth,0,et,qe,ie.data);else if(S.isFramebufferTexture){if(vt)if(lt)t.texStorage2D(n.TEXTURE_2D,Ze,ke,ie.width,ie.height);else{let he=ie.width,N=ie.height;for(let _e=0;_e<Ze;_e++)t.texImage2D(n.TEXTURE_2D,_e,ke,he,N,0,et,qe,null),he>>=1,N>>=1}}else if(Ke.length>0&&rt){lt&&vt&&t.texStorage2D(n.TEXTURE_2D,Ze,ke,Ke[0].width,Ke[0].height);for(let he=0,N=Ke.length;he<N;he++)Re=Ke[he],lt?t.texSubImage2D(n.TEXTURE_2D,he,0,0,et,qe,Re):t.texImage2D(n.TEXTURE_2D,he,ke,et,qe,Re);S.generateMipmaps=!1}else lt?(vt&&t.texStorage2D(n.TEXTURE_2D,Ze,ke,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,et,qe,ie)):t.texImage2D(n.TEXTURE_2D,0,ke,et,qe,ie);_(S,rt)&&v(ae),Ce.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Pe(A,S,z){if(S.image.length!==6)return;let ae=te(A,S),oe=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);let ne=i.get(oe);if(oe.version!==ne.__version||ae===!0){t.activeTexture(n.TEXTURE0+z);let Ce=ht.getPrimaries(ht.workingColorSpace),de=S.colorSpace===ci?null:ht.getPrimaries(S.colorSpace),Te=S.colorSpace===ci||Ce===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,Ge=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let he=0;he<6;he++)!Oe&&!Ge?ie[he]=x(S.image[he],!1,!0,s.maxCubemapSize):ie[he]=Ge?S.image[he].image:S.image[he],ie[he]=ve(S,ie[he]);let rt=ie[0],et=m(rt)||a,qe=r.convert(S.format,S.colorSpace),ke=r.convert(S.type),Re=M(S.internalFormat,qe,ke,S.colorSpace),Ke=a&&S.isVideoTexture!==!0,lt=ne.__version===void 0||ae===!0,vt=b(S,rt,et);V(n.TEXTURE_CUBE_MAP,S,et);let Ze;if(Oe){Ke&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Re,rt.width,rt.height);for(let he=0;he<6;he++){Ze=ie[he].mipmaps;for(let N=0;N<Ze.length;N++){let _e=Ze[N];S.format!==zn?qe!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,0,0,_e.width,_e.height,qe,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,0,0,_e.width,_e.height,qe,ke,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,Re,_e.width,_e.height,0,qe,ke,_e.data)}}}else{Ze=S.mipmaps,Ke&&lt&&(Ze.length>0&&vt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Re,ie[0].width,ie[0].height));for(let he=0;he<6;he++)if(Ge){Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ie[he].width,ie[he].height,qe,ke,ie[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Re,ie[he].width,ie[he].height,0,qe,ke,ie[he].data);for(let N=0;N<Ze.length;N++){let ye=Ze[N].image[he].image;Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,0,0,ye.width,ye.height,qe,ke,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,Re,ye.width,ye.height,0,qe,ke,ye.data)}}else{Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,qe,ke,ie[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Re,qe,ke,ie[he]);for(let N=0;N<Ze.length;N++){let _e=Ze[N];Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,0,0,qe,ke,_e.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,Re,qe,ke,_e.image[he])}}}_(S,et)&&v(n.TEXTURE_CUBE_MAP),ne.__version=oe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xe(A,S,z,ae,oe,ne){let Ce=r.convert(z.format,z.colorSpace),de=r.convert(z.type),Te=M(z.internalFormat,Ce,de,z.colorSpace);if(!i.get(S).__hasExternalTextures){let Ge=Math.max(1,S.width>>ne),ie=Math.max(1,S.height>>ne);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ne,Te,Ge,ie,S.depth,0,Ce,de,null):t.texImage2D(oe,ne,Te,Ge,ie,0,Ce,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),$(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,oe,i.get(z).__webglTexture,0,ce(S)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,oe,i.get(z).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(A,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ae=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||$(S)){let oe=S.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Zn?ae=n.DEPTH_COMPONENT32F:oe.type===Zs&&(ae=n.DEPTH_COMPONENT24));let ne=ce(S);$(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,ae,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,ae,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let ae=ce(S);z&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,S.width,S.height):$(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let ae=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let oe=0;oe<ae.length;oe++){let ne=ae[oe],Ce=r.convert(ne.format,ne.colorSpace),de=r.convert(ne.type),Te=M(ne.internalFormat,Ce,de,ne.colorSpace),Oe=ce(S);z&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Te,S.width,S.height):$(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Te,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Te,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);let ae=i.get(S.depthTexture).__webglTexture,oe=ce(S);if(S.depthTexture.format===Tr)$(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(S.depthTexture.format===Js)$(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ae(A){let S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ze(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]=n.createRenderbuffer(),Ne(S.__webglDepthbuffer[ae],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Ne(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(A,S,z){let ae=i.get(A);S!==void 0&&xe(ae.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ae(A)}function I(A){let S=A.texture,z=i.get(A),ae=i.get(S);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=S.version,o.memory.textures++);let oe=A.isWebGLCubeRenderTarget===!0,ne=A.isWebGLMultipleRenderTargets===!0,Ce=m(A)||a;if(oe){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let Te=0;Te<S.mipmaps.length;Te++)z.__webglFramebuffer[de][Te]=n.createFramebuffer()}else z.__webglFramebuffer[de]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)z.__webglFramebuffer[de]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ne)if(s.drawBuffers){let de=A.texture;for(let Te=0,Oe=de.length;Te<Oe;Te++){let Ge=i.get(de[Te]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&$(A)===!1){let de=ne?S:[S];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Te=0;Te<de.length;Te++){let Oe=de[Te];z.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Te]);let Ge=r.convert(Oe.format,Oe.colorSpace),ie=r.convert(Oe.type),rt=M(Oe.internalFormat,Ge,ie,Oe.colorSpace,A.isXRRenderTarget===!0),et=ce(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,rt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,z.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),V(n.TEXTURE_CUBE_MAP,S,Ce);for(let de=0;de<6;de++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)xe(z.__webglFramebuffer[de][Te],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Te);else xe(z.__webglFramebuffer[de],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);_(S,Ce)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let de=A.texture;for(let Te=0,Oe=de.length;Te<Oe;Te++){let Ge=de[Te],ie=i.get(Ge);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),V(n.TEXTURE_2D,Ge,Ce),xe(z.__webglFramebuffer,A,Ge,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,0),_(Ge,Ce)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?de=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ae.__webglTexture),V(de,S,Ce),a&&S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)xe(z.__webglFramebuffer[Te],A,S,n.COLOR_ATTACHMENT0,de,Te);else xe(z.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,de,0);_(S,Ce)&&v(de),t.unbindTexture()}A.depthBuffer&&Ae(A)}function ue(A){let S=m(A)||a,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0,oe=z.length;ae<oe;ae++){let ne=z[ae];if(_(ne,S)){let Ce=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(ne).__webglTexture;t.bindTexture(Ce,de),v(Ce),t.unbindTexture()}}}function Q(A){if(a&&A.samples>0&&$(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,ae=A.height,oe=n.COLOR_BUFFER_BIT,ne=[],Ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(A),Te=A.isWebGLMultipleRenderTargets===!0;if(Te)for(let Oe=0;Oe<S.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Oe=0;Oe<S.length;Oe++){ne.push(n.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&ne.push(Ce);let Ge=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ge===!1&&(A.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Te&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[Oe]),Ge===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Te){let ie=i.get(S[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,z,ae,0,0,z,ae,oe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let Oe=0;Oe<S.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,de.__webglColorRenderbuffer[Oe]);let Ge=i.get(S[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function ce(A){return Math.min(s.maxSamples,A.samples)}function $(A){let S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ie(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ve(A,S){let z=A.colorSpace,ae=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ou||z!==Yt&&z!==ci&&(ht.getTransfer(z)===St?a===!1?e.has("EXT_sRGB")===!0&&ae===zn?(A.format=Ou,A.minFilter=Nt,A.generateMipmaps=!1):S=gc.sRGBToLinear(S):(ae!==zn||oe!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=$}function ZS(n,e,t){let i=t.isWebGL2;function s(r,o=ci){let a,l=ht.getTransfer(o);if(r===Kn)return n.UNSIGNED_BYTE;if(r===u0)return n.UNSIGNED_SHORT_4_4_4_4;if(r===f0)return n.UNSIGNED_SHORT_5_5_5_1;if(r===wv)return n.BYTE;if(r===Av)return n.SHORT;if(r===Pf)return n.UNSIGNED_SHORT;if(r===h0)return n.INT;if(r===Zs)return n.UNSIGNED_INT;if(r===Zn)return n.FLOAT;if(r===Ft)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Rv)return n.ALPHA;if(r===zn)return n.RGBA;if(r===Cv)return n.LUMINANCE;if(r===Pv)return n.LUMINANCE_ALPHA;if(r===Tr)return n.DEPTH_COMPONENT;if(r===Js)return n.DEPTH_STENCIL;if(r===Ou)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Lv)return n.RED;if(r===d0)return n.RED_INTEGER;if(r===Iv)return n.RG;if(r===p0)return n.RG_INTEGER;if(r===m0)return n.RGBA_INTEGER;if(r===jh||r===Jh||r===$h||r===Qh)if(l===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===jh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===jh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$h)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sp||r===bp||r===Ep||r===Tp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Sp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ep)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===g0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wp||r===Ap)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===wp)return l===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ap)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rp||r===Cp||r===Pp||r===Lp||r===Ip||r===Dp||r===Up||r===Np||r===Op||r===Fp||r===kp||r===Bp||r===zp||r===Hp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Rp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ip)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Up)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Np)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Op)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hp)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===eu||r===Vp||r===Gp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===eu)return l===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dv||r===Wp||r===Xp||r===qp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===eu)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Wp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Ku=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hi=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},KS={type:"move"},Ca=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ju=class extends $s{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,x=t.getContextAttributes(),m=null,p=null,_=[],v=[],M=new ee,b=null,T=new tn;T.layers.enable(1),T.viewport=new mt;let w=new tn;w.layers.enable(2),w.viewport=new mt;let P=[T,w],y=new Ku;y.layers.enable(1),y.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=_[V];return te===void 0&&(te=new Ca,_[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=_[V];return te===void 0&&(te=new Ca,_[V]=te),te.getGripSpace()},this.getHand=function(V){let te=_[V];return te===void 0&&(te=new Ca,_[V]=te),te.getHandSpace()};function B(V){let te=v.indexOf(V.inputSource);if(te===-1)return;let me=_[te];me!==void 0&&(me.update(V.inputSource,V.frame,c||o),me.dispatchEvent({type:V.type,data:V.inputSource}))}function K(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",L);for(let V=0;V<_.length;V++){let te=v[V];te!==null&&(v[V]=null,_[V].disconnect(te))}E=null,D=null,e.setRenderTarget(m),d=null,u=null,f=null,s=null,p=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",K),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let te={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Qt(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let te=null,me=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?Js:Tr,me=x.stencil?vs:Zs);let xe={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(xe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Qt(u.textureWidth,u.textureHeight,{format:zn,type:Kn,depthTexture:new Io(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ne=e.properties.get(p);Ne.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let te=0;te<V.removed.length;te++){let me=V.removed[te],Pe=v.indexOf(me);Pe>=0&&(v[Pe]=null,_[Pe].disconnect(me))}for(let te=0;te<V.added.length;te++){let me=V.added[te],Pe=v.indexOf(me);if(Pe===-1){for(let Ne=0;Ne<_.length;Ne++)if(Ne>=v.length){v.push(me),Pe=Ne;break}else if(v[Ne]===null){v[Ne]=me,Pe=Ne;break}if(Pe===-1)break}let xe=_[Pe];xe&&xe.connect(me)}}let O=new C,k=new C;function j(V,te,me){O.setFromMatrixPosition(te.matrixWorld),k.setFromMatrixPosition(me.matrixWorld);let Pe=O.distanceTo(k),xe=te.projectionMatrix.elements,Ne=me.projectionMatrix.elements,ze=xe[14]/(xe[10]-1),Ae=xe[14]/(xe[10]+1),We=(xe[9]+1)/xe[5],I=(xe[9]-1)/xe[5],ue=(xe[8]-1)/xe[0],Q=(Ne[8]+1)/Ne[0],ce=ze*ue,$=ze*Q,Ie=Pe/(-ue+Q),ve=Ie*-ue;te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ve),V.translateZ(Ie),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let A=ze+Ie,S=Ae+Ie,z=ce-ve,ae=$+(Pe-ve),oe=We*Ae/S*A,ne=I*Ae/S*A;V.projectionMatrix.makePerspective(z,ae,oe,ne,A,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function J(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=w.near=T.near=V.near,y.far=w.far=T.far=V.far,(E!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,D=y.far);let te=V.parent,me=y.cameras;J(y,te);for(let Pe=0;Pe<me.length;Pe++)J(me[Pe],te);me.length===2?j(y,T,w):y.projectionMatrix.copy(T.projectionMatrix),W(V,y,te)};function W(V,te,me){me===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy(me.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Co*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let F=null;function Z(V,te){if(h=te.getViewerPose(c||o),g=te,h!==null){let me=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Pe=!1;me.length!==y.cameras.length&&(y.cameras.length=0,Pe=!0);for(let xe=0;xe<me.length;xe++){let Ne=me[xe],ze=null;if(d!==null)ze=d.getViewport(Ne);else{let We=f.getViewSubImage(u,Ne);ze=We.viewport,xe===0&&(e.setRenderTargetTextures(p,We.colorTexture,u.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(p))}let Ae=P[xe];Ae===void 0&&(Ae=new tn,Ae.layers.enable(xe),Ae.viewport=new mt,P[xe]=Ae),Ae.matrix.fromArray(Ne.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ne.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(ze.x,ze.y,ze.width,ze.height),xe===0&&(y.matrix.copy(Ae.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Pe===!0&&y.cameras.push(Ae)}}for(let me=0;me<_.length;me++){let Pe=v[me],xe=_[me];Pe!==null&&xe!==void 0&&xe.update(Pe,te,c||o)}F&&F(V,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let re=new b0;re.setAnimationLoop(Z),this.setAnimationLoop=function(V){F=V},this.dispose=function(){}}};function jS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,S0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JS(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){let M=v.program;i.uniformBlockBinding(_,M)}function c(_,v){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));let b=v.program;i.updateUBOMapping(_,b);let T=e.render.frame;r[_.id]!==T&&(u(_),r[_.id]=T)}function h(_){let v=f();_.__bindingPointIndex=v;let M=n.createBuffer(),b=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let v=s[_.id],M=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,w=M.length;T<w;T++){let P=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,E=P.length;y<E;y++){let D=P[y];if(d(D,T,y,b)===!0){let B=D.__offset,K=Array.isArray(D.value)?D.value:[D.value],L=0;for(let O=0;O<K.length;O++){let k=K[O],j=x(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,B+L,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,v,M,b){let T=_.value,w=v+"_"+M;if(b[w]===void 0)return typeof T=="number"||typeof T=="boolean"?b[w]=T:b[w]=T.clone(),!0;{let P=b[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return b[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(_){let v=_.uniforms,M=0,b=16;for(let w=0,P=v.length;w<P;w++){let y=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,D=y.length;E<D;E++){let B=y[E],K=Array.isArray(B.value)?B.value:[B.value];for(let L=0,O=K.length;L<O;L++){let k=K[L],j=x(k),J=M%b;J!==0&&b-J<j.boundary&&(M+=b-J),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=j.storage}}}let T=M%b;return T>0&&(M+=b-T),_.__size=M,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ba=class{constructor(e={}){let{canvas:t=s_(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=js,this.toneMappingExposure=1;let v=this,M=!1,b=0,T=0,w=null,P=-1,y=null,E=new mt,D=new mt,B=null,K=new pe(0),L=0,O=t.width,k=t.height,j=1,J=null,W=null,F=new mt(0,0,O,k),Z=new mt(0,0,O,k),re=!1,V=new Fa,te=!1,me=!1,Pe=null,xe=new Be,Ne=new ee,ze=new C,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return w===null?j:1}let I=i;function ue(R,H){for(let X=0;X<R.length;X++){let q=R[X],G=t.getContext(q,H);if(G!==null)return G}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sf}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",_e,!1),I===null){let H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),I=ue(H,R),I===null)throw ue(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Q,ce,$,Ie,ve,A,S,z,ae,oe,ne,Ce,de,Te,Oe,Ge,ie,rt,et,qe,ke,Re,Ke,lt;function vt(){Q=new gM(I),ce=new hM(I,Q,e),Q.init(ce),Re=new ZS(I,Q,ce),$=new qS(I,Q,ce),Ie=new _M(I),ve=new US,A=new YS(I,Q,$,ve,ce,Re,Ie),S=new fM(v),z=new mM(v),ae=new A_(I,ce),Ke=new lM(I,Q,ae,ce),oe=new xM(I,ae,Ie,Ke),ne=new bM(I,oe,ae,Ie),et=new SM(I,ce,A),Ge=new uM(ve),Ce=new DS(v,S,z,Q,ce,Ke,Ge),de=new jS(v,ve),Te=new OS,Oe=new VS(Q,ce),rt=new aM(v,S,z,$,ne,u,l),ie=new XS(v,ne,ce),lt=new JS(I,Ie,ce,$),qe=new cM(I,Q,Ie,ce),ke=new vM(I,Q,Ie,ce),Ie.programs=Ce.programs,v.capabilities=ce,v.extensions=Q,v.properties=ve,v.renderLists=Te,v.shadowMap=ie,v.state=$,v.info=Ie}vt();let Ze=new ju(v,I);this.xr=Ze,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let R=Q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(O,k,!1))},this.getSize=function(R){return R.set(O,k)},this.setSize=function(R,H,X=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,k=H,t.width=Math.floor(R*j),t.height=Math.floor(H*j),X===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(O*j,k*j).floor()},this.setDrawingBufferSize=function(R,H,X){O=R,k=H,j=X,t.width=Math.floor(R*X),t.height=Math.floor(H*X),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,H,X,q){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,H,X,q),$.viewport(E.copy(F).multiplyScalar(j).floor())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,H,X,q){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,H,X,q),$.scissor(D.copy(Z).multiplyScalar(j).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(R){$.setScissorTest(re=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(R=!0,H=!0,X=!0){let q=0;if(R){let G=!1;if(w!==null){let we=w.texture.format;G=we===m0||we===p0||we===d0}if(G){let we=w.texture.type,Fe=we===Kn||we===Zs||we===Pf||we===vs||we===u0||we===f0,Ve=rt.getClearColor(),Ye=rt.getClearAlpha(),tt=Ve.r,je=Ve.g,$e=Ve.b;Fe?(d[0]=tt,d[1]=je,d[2]=$e,d[3]=Ye,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=tt,g[1]=je,g[2]=$e,g[3]=Ye,I.clearBufferiv(I.COLOR,0,g))}else q|=I.COLOR_BUFFER_BIT}H&&(q|=I.DEPTH_BUFFER_BIT),X&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Te.dispose(),Oe.dispose(),ve.dispose(),S.dispose(),z.dispose(),ne.dispose(),Ke.dispose(),lt.dispose(),Ce.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Dn),Ze.removeEventListener("sessionend",Rt),Pe&&(Pe.dispose(),Pe=null),Un.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=Ie.autoReset,H=ie.enabled,X=ie.autoUpdate,q=ie.needsUpdate,G=ie.type;vt(),Ie.autoReset=R,ie.enabled=H,ie.autoUpdate=X,ie.needsUpdate=q,ie.type=G}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){let H=R.target;H.removeEventListener("dispose",ye),Xe(H)}function Xe(R){He(R),ve.remove(R)}function He(R){let H=ve.get(R).programs;H!==void 0&&(H.forEach(function(X){Ce.releaseProgram(X)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,X,q,G,we){H===null&&(H=Ae);let Fe=G.isMesh&&G.matrixWorld.determinant()<0,Ve=Jx(R,H,X,q,G);$.setMaterial(q,Fe);let Ye=X.index,tt=1;if(q.wireframe===!0){if(Ye=oe.getWireframeAttribute(X),Ye===void 0)return;tt=2}let je=X.drawRange,$e=X.attributes.position,Xt=je.start*tt,Xn=(je.start+je.count)*tt;we!==null&&(Xt=Math.max(Xt,we.start*tt),Xn=Math.min(Xn,(we.start+we.count)*tt)),Ye!==null?(Xt=Math.max(Xt,0),Xn=Math.min(Xn,Ye.count)):$e!=null&&(Xt=Math.max(Xt,0),Xn=Math.min(Xn,$e.count));let fn=Xn-Xt;if(fn<0||fn===1/0)return;Ke.setup(G,q,Ve,X,Ye);let as,Ut=qe;if(Ye!==null&&(as=ae.get(Ye),Ut=ke,Ut.setIndex(as)),G.isMesh)q.wireframe===!0?($.setLineWidth(q.wireframeLinewidth*We()),Ut.setMode(I.LINES)):Ut.setMode(I.TRIANGLES);else if(G.isLine){let it=q.linewidth;it===void 0&&(it=1),$.setLineWidth(it*We()),G.isLineSegments?Ut.setMode(I.LINES):G.isLineLoop?Ut.setMode(I.LINE_LOOP):Ut.setMode(I.LINE_STRIP)}else G.isPoints?Ut.setMode(I.POINTS):G.isSprite&&Ut.setMode(I.TRIANGLES);if(G.isBatchedMesh)Ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ut.renderInstances(Xt,fn,G.count);else if(X.isInstancedBufferGeometry){let it=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,qh=Math.min(X.instanceCount,it);Ut.renderInstances(Xt,fn,qh)}else Ut.render(Xt,fn)};function wt(R,H,X){R.transparent===!0&&R.side===Ii&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,Ll(R,H,X),R.side=Xi,R.needsUpdate=!0,Ll(R,H,X),R.side=Ii):Ll(R,H,X)}this.compile=function(R,H,X=null){X===null&&(X=R),m=Oe.get(X),m.init(),_.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),R!==X&&R.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);let q=new Set;return R.traverse(function(G){let we=G.material;if(we)if(Array.isArray(we))for(let Fe=0;Fe<we.length;Fe++){let Ve=we[Fe];wt(Ve,X,G),q.add(Ve)}else wt(we,X,G),q.add(we)}),_.pop(),m=null,q},this.compileAsync=function(R,H,X=null){let q=this.compile(R,H,X);return new Promise(G=>{function we(){if(q.forEach(function(Fe){ve.get(Fe).currentProgram.isReady()&&q.delete(Fe)}),q.size===0){G(R);return}setTimeout(we,10)}Q.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let At=null;function un(R){At&&At(R)}function Dn(){Un.stop()}function Rt(){Un.start()}let Un=new b0;Un.setAnimationLoop(un),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(R){At=R,Ze.setAnimationLoop(R),R===null?Un.stop():Un.start()},Ze.addEventListener("sessionstart",Dn),Ze.addEventListener("sessionend",Rt),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(H),H=Ze.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,H,w),m=Oe.get(R,_.length),m.init(),_.push(m),xe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),V.setFromProjectionMatrix(xe),me=this.localClippingEnabled,te=Ge.init(this.clippingPlanes,me),x=Te.get(R,p.length),x.init(),p.push(x),Vi(R,H,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(J,W),this.info.render.frame++,te===!0&&Ge.beginShadows();let X=m.state.shadowsArray;if(ie.render(X,R,H),te===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(x,R),m.setupLights(v._useLegacyLights),H.isArrayCamera){let q=H.cameras;for(let G=0,we=q.length;G<we;G++){let Fe=q[G];hp(x,R,Fe,Fe.viewport)}}else hp(x,R,H);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(v,R,H),Ke.resetDefaultState(),P=-1,y=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Vi(R,H,X,q){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||V.intersectsSprite(R)){q&&ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);let Fe=ne.update(R),Ve=R.material;Ve.visible&&x.push(R,Fe,Ve,X,ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||V.intersectsObject(R))){let Fe=ne.update(R),Ve=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ze.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ze.copy(Fe.boundingSphere.center)),ze.applyMatrix4(R.matrixWorld).applyMatrix4(xe)),Array.isArray(Ve)){let Ye=Fe.groups;for(let tt=0,je=Ye.length;tt<je;tt++){let $e=Ye[tt],Xt=Ve[$e.materialIndex];Xt&&Xt.visible&&x.push(R,Fe,Xt,X,ze.z,$e)}}else Ve.visible&&x.push(R,Fe,Ve,X,ze.z,null)}}let we=R.children;for(let Fe=0,Ve=we.length;Fe<Ve;Fe++)Vi(we[Fe],H,X,q)}function hp(R,H,X,q){let G=R.opaque,we=R.transmissive,Fe=R.transparent;m.setupLightsView(X),te===!0&&Ge.setGlobalState(v.clippingPlanes,X),we.length>0&&jx(G,we,H,X),q&&$.viewport(E.copy(q)),G.length>0&&Pl(G,H,X),we.length>0&&Pl(we,H,X),Fe.length>0&&Pl(Fe,H,X),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function jx(R,H,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let we=ce.isWebGL2;Pe===null&&(Pe=new Qt(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Ft:Kn,minFilter:ys,samples:we?4:0})),v.getDrawingBufferSize(Ne),we?Pe.setSize(Ne.x,Ne.y):Pe.setSize(mc(Ne.x),mc(Ne.y));let Fe=v.getRenderTarget();v.setRenderTarget(Pe),v.getClearColor(K),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Ve=v.toneMapping;v.toneMapping=js,Pl(R,X,q),A.updateMultisampleRenderTarget(Pe),A.updateRenderTargetMipmap(Pe);let Ye=!1;for(let tt=0,je=H.length;tt<je;tt++){let $e=H[tt],Xt=$e.object,Xn=$e.geometry,fn=$e.material,as=$e.group;if(fn.side===Ii&&Xt.layers.test(q.layers)){let Ut=fn.side;fn.side=Pn,fn.needsUpdate=!0,up(Xt,X,q,Xn,fn,as),fn.side=Ut,fn.needsUpdate=!0,Ye=!0}}Ye===!0&&(A.updateMultisampleRenderTarget(Pe),A.updateRenderTargetMipmap(Pe)),v.setRenderTarget(Fe),v.setClearColor(K,L),v.toneMapping=Ve}function Pl(R,H,X){let q=H.isScene===!0?H.overrideMaterial:null;for(let G=0,we=R.length;G<we;G++){let Fe=R[G],Ve=Fe.object,Ye=Fe.geometry,tt=q===null?Fe.material:q,je=Fe.group;Ve.layers.test(X.layers)&&up(Ve,H,X,Ye,tt,je)}}function up(R,H,X,q,G,we){R.onBeforeRender(v,H,X,q,G,we),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(v,H,X,q,R,we),G.transparent===!0&&G.side===Ii&&G.forceSinglePass===!1?(G.side=Pn,G.needsUpdate=!0,v.renderBufferDirect(X,H,q,G,R,we),G.side=Xi,G.needsUpdate=!0,v.renderBufferDirect(X,H,q,G,R,we),G.side=Ii):v.renderBufferDirect(X,H,q,G,R,we),R.onAfterRender(v,H,X,q,G,we)}function Ll(R,H,X){H.isScene!==!0&&(H=Ae);let q=ve.get(R),G=m.state.lights,we=m.state.shadowsArray,Fe=G.state.version,Ve=Ce.getParameters(R,G.state,we,H,X),Ye=Ce.getProgramCacheKey(Ve),tt=q.programs;q.environment=R.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(R.isMeshStandardMaterial?z:S).get(R.envMap||q.environment),tt===void 0&&(R.addEventListener("dispose",ye),tt=new Map,q.programs=tt);let je=tt.get(Ye);if(je!==void 0){if(q.currentProgram===je&&q.lightsStateVersion===Fe)return dp(R,Ve),je}else Ve.uniforms=Ce.getUniforms(R),R.onBuild(X,Ve,v),R.onBeforeCompile(Ve,v),je=Ce.acquireProgram(Ve,Ye),tt.set(Ye,je),q.uniforms=Ve.uniforms;let $e=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=Ge.uniform),dp(R,Ve),q.needsLights=Qx(R),q.lightsStateVersion=Fe,q.needsLights&&($e.ambientLightColor.value=G.state.ambient,$e.lightProbe.value=G.state.probe,$e.directionalLights.value=G.state.directional,$e.directionalLightShadows.value=G.state.directionalShadow,$e.spotLights.value=G.state.spot,$e.spotLightShadows.value=G.state.spotShadow,$e.rectAreaLights.value=G.state.rectArea,$e.ltc_1.value=G.state.rectAreaLTC1,$e.ltc_2.value=G.state.rectAreaLTC2,$e.pointLights.value=G.state.point,$e.pointLightShadows.value=G.state.pointShadow,$e.hemisphereLights.value=G.state.hemi,$e.directionalShadowMap.value=G.state.directionalShadowMap,$e.directionalShadowMatrix.value=G.state.directionalShadowMatrix,$e.spotShadowMap.value=G.state.spotShadowMap,$e.spotLightMatrix.value=G.state.spotLightMatrix,$e.spotLightMap.value=G.state.spotLightMap,$e.pointShadowMap.value=G.state.pointShadowMap,$e.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=je,q.uniformsList=null,je}function fp(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=To.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function dp(R,H){let X=ve.get(R);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Jx(R,H,X,q,G){H.isScene!==!0&&(H=Ae),A.resetTextureUnits();let we=H.fog,Fe=q.isMeshStandardMaterial?H.environment:null,Ve=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Yt,Ye=(q.isMeshStandardMaterial?z:S).get(q.envMap||Fe),tt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,je=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),$e=!!X.morphAttributes.position,Xt=!!X.morphAttributes.normal,Xn=!!X.morphAttributes.color,fn=js;q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(fn=v.toneMapping);let as=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ut=as!==void 0?as.length:0,it=ve.get(q),qh=m.state.lights;if(te===!0&&(me===!0||R!==y)){let oi=R===y&&q.id===P;Ge.setState(q,R,oi)}let Vt=!1;q.version===it.__version?(it.needsLights&&it.lightsStateVersion!==qh.state.version||it.outputColorSpace!==Ve||G.isBatchedMesh&&it.batching===!1||!G.isBatchedMesh&&it.batching===!0||G.isInstancedMesh&&it.instancing===!1||!G.isInstancedMesh&&it.instancing===!0||G.isSkinnedMesh&&it.skinning===!1||!G.isSkinnedMesh&&it.skinning===!0||G.isInstancedMesh&&it.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&it.instancingColor===!1&&G.instanceColor!==null||it.envMap!==Ye||q.fog===!0&&it.fog!==we||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ge.numPlanes||it.numIntersection!==Ge.numIntersection)||it.vertexAlphas!==tt||it.vertexTangents!==je||it.morphTargets!==$e||it.morphNormals!==Xt||it.morphColors!==Xn||it.toneMapping!==fn||ce.isWebGL2===!0&&it.morphTargetsCount!==Ut)&&(Vt=!0):(Vt=!0,it.__version=q.version);let xr=it.currentProgram;Vt===!0&&(xr=Ll(q,H,G));let pp=!1,xa=!1,Yh=!1,An=xr.getUniforms(),vr=it.uniforms;if($.useProgram(xr.program)&&(pp=!0,xa=!0,Yh=!0),q.id!==P&&(P=q.id,xa=!0),pp||y!==R){An.setValue(I,"projectionMatrix",R.projectionMatrix),An.setValue(I,"viewMatrix",R.matrixWorldInverse);let oi=An.map.cameraPosition;oi!==void 0&&oi.setValue(I,ze.setFromMatrixPosition(R.matrixWorld)),ce.logarithmicDepthBuffer&&An.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&An.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,xa=!0,Yh=!0)}if(G.isSkinnedMesh){An.setOptional(I,G,"bindMatrix"),An.setOptional(I,G,"bindMatrixInverse");let oi=G.skeleton;oi&&(ce.floatVertexTextures?(oi.boneTexture===null&&oi.computeBoneTexture(),An.setValue(I,"boneTexture",oi.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(An.setOptional(I,G,"batchingTexture"),An.setValue(I,"batchingTexture",G._matricesTexture,A));let Zh=X.morphAttributes;if((Zh.position!==void 0||Zh.normal!==void 0||Zh.color!==void 0&&ce.isWebGL2===!0)&&et.update(G,X,xr),(xa||it.receiveShadow!==G.receiveShadow)&&(it.receiveShadow=G.receiveShadow,An.setValue(I,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(vr.envMap.value=Ye,vr.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),xa&&(An.setValue(I,"toneMappingExposure",v.toneMappingExposure),it.needsLights&&$x(vr,Yh),we&&q.fog===!0&&de.refreshFogUniforms(vr,we),de.refreshMaterialUniforms(vr,q,j,k,Pe),To.upload(I,fp(it),vr,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(To.upload(I,fp(it),vr,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&An.setValue(I,"center",G.center),An.setValue(I,"modelViewMatrix",G.modelViewMatrix),An.setValue(I,"normalMatrix",G.normalMatrix),An.setValue(I,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let oi=q.uniformsGroups;for(let Kh=0,ev=oi.length;Kh<ev;Kh++)if(ce.isWebGL2){let mp=oi[Kh];lt.update(mp,xr),lt.bind(mp,xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xr}function $x(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Qx(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,H,X){ve.get(R.texture).__webglTexture=H,ve.get(R.depthTexture).__webglTexture=X;let q=ve.get(R);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,H){let X=ve.get(R);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,X=0){w=R,b=H,T=X;let q=!0,G=null,we=!1,Fe=!1;if(R){let Ye=ve.get(R);Ye.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(I.FRAMEBUFFER,null),q=!1):Ye.__webglFramebuffer===void 0?A.setupRenderTarget(R):Ye.__hasExternalTextures&&A.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);let tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Fe=!0);let je=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[H])?G=je[H][X]:G=je[H],we=!0):ce.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?G=ve.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?G=je[X]:G=je,E.copy(R.viewport),D.copy(R.scissor),B=R.scissorTest}else E.copy(F).multiplyScalar(j).floor(),D.copy(Z).multiplyScalar(j).floor(),B=re;if($.bindFramebuffer(I.FRAMEBUFFER,G)&&ce.drawBuffers&&q&&$.drawBuffers(R,G),$.viewport(E),$.scissor(D),$.setScissorTest(B),we){let Ye=ve.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ye.__webglTexture,X)}else if(Fe){let Ye=ve.get(R.texture),tt=H||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ye.__webglTexture,X||0,tt)}P=-1},this.readRenderTargetPixels=function(R,H,X,q,G,we,Fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){$.bindFramebuffer(I.FRAMEBUFFER,Ve);try{let Ye=R.texture,tt=Ye.format,je=Ye.type;if(tt!==zn&&Re.convert(tt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=je===Ft&&(Q.has("EXT_color_buffer_half_float")||ce.isWebGL2&&Q.has("EXT_color_buffer_float"));if(je!==Kn&&Re.convert(je)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Zn&&(ce.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-q&&X>=0&&X<=R.height-G&&I.readPixels(H,X,q,G,Re.convert(tt),Re.convert(je),we)}finally{let Ye=w!==null?ve.get(w).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(R,H,X=0){let q=Math.pow(2,-X),G=Math.floor(H.image.width*q),we=Math.floor(H.image.height*q);A.setTexture2D(H,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,R.x,R.y,G,we),$.unbindTexture()},this.copyTextureToTexture=function(R,H,X,q=0){let G=H.image.width,we=H.image.height,Fe=Re.convert(X.format),Ve=Re.convert(X.type);A.setTexture2D(X,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment),H.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,q,R.x,R.y,G,we,Fe,Ve,H.image.data):H.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,q,R.x,R.y,H.mipmaps[0].width,H.mipmaps[0].height,Fe,H.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,q,R.x,R.y,Fe,Ve,H.image),q===0&&X.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(R,H,X,q,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=R.max.x-R.min.x+1,Fe=R.max.y-R.min.y+1,Ve=R.max.z-R.min.z+1,Ye=Re.convert(q.format),tt=Re.convert(q.type),je;if(q.isData3DTexture)A.setTexture3D(q,0),je=I.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)A.setTexture2DArray(q,0),je=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);let $e=I.getParameter(I.UNPACK_ROW_LENGTH),Xt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xn=I.getParameter(I.UNPACK_SKIP_PIXELS),fn=I.getParameter(I.UNPACK_SKIP_ROWS),as=I.getParameter(I.UNPACK_SKIP_IMAGES),Ut=X.isCompressedTexture?X.mipmaps[G]:X.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,R.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,R.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,R.min.z),X.isDataTexture||X.isData3DTexture?I.texSubImage3D(je,G,H.x,H.y,H.z,we,Fe,Ve,Ye,tt,Ut.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(je,G,H.x,H.y,H.z,we,Fe,Ve,Ye,Ut.data)):I.texSubImage3D(je,G,H.x,H.y,H.z,we,Fe,Ve,Ye,tt,Ut),I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xn),I.pixelStorei(I.UNPACK_SKIP_ROWS,fn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,as),G===0&&q.generateMipmaps&&I.generateMipmap(je),$.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){b=0,T=0,w=null,$.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===If?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Qc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?wr:v0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wr?ft:Yt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ju=class extends Ba{};Ju.prototype.isWebGL1Renderer=!0;var bc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var za=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Cr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nn=new C,er=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Om=new C,Fm=new mt,km=new mt,$S=new C,Bm=new Be,ec=new C,Eu=new jn,zm=new Be,Tu=new Rr,Ec=class extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mp,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ec),this.boundingBox.expandByPoint(ec)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ec),this.boundingSphere.expandByPoint(ec)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eu.copy(this.boundingSphere),Eu.applyMatrix4(s),e.ray.intersectsSphere(Eu)!==!1&&(zm.copy(s).invert(),Tu.copy(e.ray).applyMatrix4(zm),!(this.boundingBox!==null&&Tu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Fm.fromBufferAttribute(s.attributes.skinIndex,e),km.fromBufferAttribute(s.attributes.skinWeight,e),Om.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=km.getComponent(r);if(o!==0){let a=Fm.getComponent(r);Bm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector($S.copy(Om).applyMatrix4(Bm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ha=class extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}},tr=class extends mn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=bt,h=bt,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hm=new Be,QS=new Be,Tc=class n{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:QS;Hm.multiplyMatrices(a,t[r]),Hm.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new tr(t,e,e,zn,Zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ha),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},bs=class extends Gt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vo=new Be,Vm=new Be,tc=[],Gm=new fi,eb=new Be,Sa=new gt,ba=new jn,Pr=class extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,eb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vo),Gm.copy(e.boundingBox).applyMatrix4(vo),this.boundingBox.union(Gm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vo),ba.copy(e.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(i),e.ray.intersectsSphere(ba)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vo),Vm.multiplyMatrices(i,vo),Sa.matrixWorld=Vm,Sa.raycast(e,tc);for(let o=0,a=tc.length;o<a;o++){let l=tc[o];l.instanceId=r,l.object=this,t.push(l)}tc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Va=class extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wm=new C,Xm=new C,qm=new Be,wu=new Rr,nc=new jn,Do=class extends kt{constructor(e=new Bt,t=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Wm.fromBufferAttribute(t,s-1),Xm.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Wm.distanceTo(Xm);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),nc.radius+=r,e.ray.intersectsSphere(nc)===!1)return;qm.copy(s).invert(),wu.copy(e.ray).applyMatrix4(qm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,f=new C,u=new C,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=p,M=_-1;v<M;v+=d){let b=g.getX(v),T=g.getX(v+1);if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,T),wu.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(u);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let v=p,M=_-1;v<M;v+=d){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),wu.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Ym=new C,Zm=new C,wc=class extends Do{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Ym.fromBufferAttribute(t,s),Zm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ym.distanceTo(Zm);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ac=class extends Do{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Lr=class extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Km=new Be,$u=new Rr,ic=new jn,sc=new C,Uo=class extends kt{constructor(e=new Bt,t=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(s),ic.radius+=r,e.ray.intersectsSphere(ic)===!1)return;Km.copy(s).invert(),$u.copy(e.ray).applyMatrix4(Km);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,x=d;g<x;g++){let m=c.getX(g);sc.fromBufferAttribute(f,m),jm(sc,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,x=d;g<x;g++)sc.fromBufferAttribute(f,g),jm(sc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jm(n,e,t,i,s,r,o){let a=$u.distanceSqToPoint(n);if(a<t){let l=new C;$u.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Ga=class extends mn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=bt,this.minFilter=bt,this.generateMipmaps=!1,this.needsUpdate=!0}};var Es=class extends mn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ee:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,s=[],r=[],o=[],a=new C,l=new Be;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos($t(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($t(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wa=class extends di{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new ee,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qu=class extends Wa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var rc=new C,Au=new Nf,Ru=new Nf,Cu=new Nf,ef=class extends di{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(rc.subVectors(s[0],s[1]).add(s[0]),c=rc);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(rc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Au.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,m),Ru.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,m),Cu.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Au.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ru.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Cu.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Au.calc(l),Ru.calc(l),Cu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function tb(n,e){let t=1-n;return t*t*e}function nb(n,e){return 2*(1-n)*n*e}function ib(n,e){return n*n*e}function Pa(n,e,t,i){return tb(n,e)+nb(n,t)+ib(n,i)}function sb(n,e){let t=1-n;return t*t*t*e}function rb(n,e){let t=1-n;return 3*t*t*n*e}function ob(n,e){return 3*(1-n)*n*n*e}function ab(n,e){return n*n*n*e}function La(n,e,t,i,s){return sb(n,e)+rb(n,t)+ob(n,i)+ab(n,s)}var Rc=class extends di{constructor(e=new ee,t=new ee,i=new ee,s=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ee){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(La(e,s.x,r.x,o.x,a.x),La(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tf=class extends di{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(La(e,s.x,r.x,o.x,a.x),La(e,s.y,r.y,o.y,a.y),La(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cc=class extends di{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nf=class extends di{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends di{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Pa(e,s.x,r.x,o.x),Pa(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sf=class extends di{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Pa(e,s.x,r.x,o.x),Pa(e,s.y,r.y,o.y),Pa(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Jm(a,l.x,c.x,h.x,f.x),Jm(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ee().fromArray(s))}return this}},rf=Object.freeze({__proto__:null,ArcCurve:Qu,CatmullRomCurve3:ef,CubicBezierCurve:Rc,CubicBezierCurve3:tf,EllipseCurve:Wa,LineCurve:Cc,LineCurve3:nf,QuadraticBezierCurve:Pc,QuadraticBezierCurve3:sf,SplineCurve:Lc}),of=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new rf[s.type]().fromJSON(s))}return this}},Xa=class extends of{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Cc(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Pc(this.currentPoint.clone(),new ee(e,t),new ee(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Rc(this.currentPoint.clone(),new ee(e,t),new ee(i,s),new ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Lc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Wa(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},af=class n extends Bt{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=$t(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new C,u=new ee,d=new C,g=new C,x=new C,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=t;_++){let v=i+_*h*s,M=Math.sin(v),b=Math.cos(v);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*M,f.y=e[T].y,f.z=e[T].x*b,o.push(f.x,f.y,f.z),u.x=_/t,u.y=T/(e.length-1),a.push(u.x,u.y);let w=l[3*T+0]*M,P=l[3*T+1],y=l[3*T+0]*b;c.push(w,P,y)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let M=v+_*e.length,b=M,T=M+e.length,w=M+e.length+1,P=M+1;r.push(b,T,P),r.push(w,P,T)}this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("uv",new Pt(a,2)),this.setAttribute("normal",new Pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ic=class n extends af{constructor(e=1,t=1,i=4,s=8){let r=new Xa;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}};var Dc=class n extends Bt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],m=i/2,p=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(d,2));function _(){let M=new C,b=new C,T=0,w=(t-e)/i;for(let P=0;P<=r;P++){let y=[],E=P/r,D=E*(t-e)+e;for(let B=0;B<=s;B++){let K=B/s,L=K*l+a,O=Math.sin(L),k=Math.cos(L);b.x=D*O,b.y=-E*i+m,b.z=D*k,f.push(b.x,b.y,b.z),M.set(O,w,k).normalize(),u.push(M.x,M.y,M.z),d.push(K,1-E),y.push(g++)}x.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){let E=x[y][P],D=x[y+1][P],B=x[y+1][P+1],K=x[y][P+1];h.push(E,D,K),h.push(D,B,K),T+=6}c.addGroup(p,T,0),p+=T}function v(M){let b=g,T=new ee,w=new C,P=0,y=M===!0?e:t,E=M===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*E,0),u.push(0,E,0),d.push(.5,.5),g++;let D=g;for(let B=0;B<=s;B++){let L=B/s*l+a,O=Math.cos(L),k=Math.sin(L);w.x=y*k,w.y=m*E,w.z=y*O,f.push(w.x,w.y,w.z),u.push(0,E,0),T.x=O*.5+.5,T.y=k*.5*E+.5,d.push(T.x,T.y),g++}for(let B=0;B<s;B++){let K=b+B,L=D+B;M===!0?h.push(L,L+1,K):h.push(L+1,L,K),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qa=class extends Xa{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Xa().fromJSON(s))}return this}},lb={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=C0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(i&&(r=db(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)f=n[g],u=n[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Ya(r,o,t,a,l,d,0),o}};function C0(n,e,t,i,s){let r,o;if(s===Eb(n,e,t,i)>0)for(r=e;r<t;r+=i)o=$m(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=$m(r,n[r],n[r+1],o);return o&&nh(o,o.next)&&(Ka(o),o=o.next),o}function Ir(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nh(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Ka(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ya(n,e,t,i,s,r,o){if(!n)return;!o&&r&&vb(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?hb(n,i,s,r):cb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Ka(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ub(Ir(n),e,t),Ya(n,e,t,i,s,r,2)):o===2&&fb(n,e,t,i,s,r):Ya(Ir(n),e,t,i,s,r,1);break}}}function cb(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&So(s,a,r,l,o,c,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hb(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,x=a>l?a>c?a:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,p=lf(d,g,e,t,i),_=lf(x,m,e,t,i),v=n.prevZ,M=n.nextZ;for(;v&&v.z>=p&&M&&M.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&So(a,h,l,f,c,u,v.x,v.y)&&Ot(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&So(a,h,l,f,c,u,M.x,M.y)&&Ot(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&So(a,h,l,f,c,u,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&So(a,h,l,f,c,u,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ub(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!nh(s,r)&&P0(s,i,i.next,r)&&Za(s,r)&&Za(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Ka(i),Ka(i.next),i=n=r),i=i.next}while(i!==n);return Ir(i)}function fb(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mb(o,a)){let l=L0(o,a);o=Ir(o,o.next),l=Ir(l,l.next),Ya(o,e,t,i,s,r,0),Ya(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function db(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=C0(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(yb(c));for(s.sort(pb),r=0;r<s.length;r++)t=mb(s[r],t);return t}function pb(n,e){return n.x-e.x}function mb(n,e){let t=gb(n,e);if(!t)return e;let i=L0(t,n);return Ir(i,i.next),Ir(t,t.next)}function gb(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&So(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Za(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&xb(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function xb(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function vb(n,e,t,i){let s=n;do s.z===0&&(s.z=lf(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,_b(s)}function _b(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function lf(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function yb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function So(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Mb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Sb(n,e)&&(Za(n,e)&&Za(e,n)&&bb(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||nh(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nh(n,e){return n.x===e.x&&n.y===e.y}function P0(n,e,t,i){let s=ac(Ot(n,e,t)),r=ac(Ot(n,e,i)),o=ac(Ot(t,i,n)),a=ac(Ot(t,i,e));return!!(s!==r&&o!==a||s===0&&oc(n,t,e)||r===0&&oc(n,i,e)||o===0&&oc(t,n,i)||a===0&&oc(t,e,i))}function oc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ac(n){return n>0?1:n<0?-1:0}function Sb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&P0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Za(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function bb(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function L0(n,e){let t=new cf(n.i,n.x,n.y),i=new cf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function $m(n,e,t,i){let s=new cf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ka(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function cf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Eb(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ia=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Qm(e),e0(i,e);let o=e.length;t.forEach(Qm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,e0(i,t[l]);let a=lb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Qm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function e0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Uc=class n extends Bt{constructor(e=new qa([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Pt(s,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Tb,v,M=!1,b,T,w,P;p&&(v=p.getSpacedPoints(h),M=!0,u=!1,b=p.computeFrenetFrames(h,!1),T=new C,w=new C,P=new C),u||(m=0,d=0,g=0,x=0);let y=a.extractPoints(c),E=y.shape,D=y.holes;if(!Ia.isClockWise(E)){E=E.reverse();for(let I=0,ue=D.length;I<ue;I++){let Q=D[I];Ia.isClockWise(Q)&&(D[I]=Q.reverse())}}let K=Ia.triangulateShape(E,D),L=E;for(let I=0,ue=D.length;I<ue;I++){let Q=D[I];E=E.concat(Q)}function O(I,ue,Q){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(ue,Q)}let k=E.length,j=K.length;function J(I,ue,Q){let ce,$,Ie,ve=I.x-ue.x,A=I.y-ue.y,S=Q.x-I.x,z=Q.y-I.y,ae=ve*ve+A*A,oe=ve*z-A*S;if(Math.abs(oe)>Number.EPSILON){let ne=Math.sqrt(ae),Ce=Math.sqrt(S*S+z*z),de=ue.x-A/ne,Te=ue.y+ve/ne,Oe=Q.x-z/Ce,Ge=Q.y+S/Ce,ie=((Oe-de)*z-(Ge-Te)*S)/(ve*z-A*S);ce=de+ve*ie-I.x,$=Te+A*ie-I.y;let rt=ce*ce+$*$;if(rt<=2)return new ee(ce,$);Ie=Math.sqrt(rt/2)}else{let ne=!1;ve>Number.EPSILON?S>Number.EPSILON&&(ne=!0):ve<-Number.EPSILON?S<-Number.EPSILON&&(ne=!0):Math.sign(A)===Math.sign(z)&&(ne=!0),ne?(ce=-A,$=ve,Ie=Math.sqrt(ae)):(ce=ve,$=A,Ie=Math.sqrt(ae/2))}return new ee(ce/Ie,$/Ie)}let W=[];for(let I=0,ue=L.length,Q=ue-1,ce=I+1;I<ue;I++,Q++,ce++)Q===ue&&(Q=0),ce===ue&&(ce=0),W[I]=J(L[I],L[Q],L[ce]);let F=[],Z,re=W.concat();for(let I=0,ue=D.length;I<ue;I++){let Q=D[I];Z=[];for(let ce=0,$=Q.length,Ie=$-1,ve=ce+1;ce<$;ce++,Ie++,ve++)Ie===$&&(Ie=0),ve===$&&(ve=0),Z[ce]=J(Q[ce],Q[Ie],Q[ve]);F.push(Z),re=re.concat(Z)}for(let I=0;I<m;I++){let ue=I/m,Q=d*Math.cos(ue*Math.PI/2),ce=g*Math.sin(ue*Math.PI/2)+x;for(let $=0,Ie=L.length;$<Ie;$++){let ve=O(L[$],W[$],ce);xe(ve.x,ve.y,-Q)}for(let $=0,Ie=D.length;$<Ie;$++){let ve=D[$];Z=F[$];for(let A=0,S=ve.length;A<S;A++){let z=O(ve[A],Z[A],ce);xe(z.x,z.y,-Q)}}}let V=g+x;for(let I=0;I<k;I++){let ue=u?O(E[I],re[I],V):E[I];M?(w.copy(b.normals[0]).multiplyScalar(ue.x),T.copy(b.binormals[0]).multiplyScalar(ue.y),P.copy(v[0]).add(w).add(T),xe(P.x,P.y,P.z)):xe(ue.x,ue.y,0)}for(let I=1;I<=h;I++)for(let ue=0;ue<k;ue++){let Q=u?O(E[ue],re[ue],V):E[ue];M?(w.copy(b.normals[I]).multiplyScalar(Q.x),T.copy(b.binormals[I]).multiplyScalar(Q.y),P.copy(v[I]).add(w).add(T),xe(P.x,P.y,P.z)):xe(Q.x,Q.y,f/h*I)}for(let I=m-1;I>=0;I--){let ue=I/m,Q=d*Math.cos(ue*Math.PI/2),ce=g*Math.sin(ue*Math.PI/2)+x;for(let $=0,Ie=L.length;$<Ie;$++){let ve=O(L[$],W[$],ce);xe(ve.x,ve.y,f+Q)}for(let $=0,Ie=D.length;$<Ie;$++){let ve=D[$];Z=F[$];for(let A=0,S=ve.length;A<S;A++){let z=O(ve[A],Z[A],ce);M?xe(z.x,z.y+v[h-1].y,v[h-1].x+Q):xe(z.x,z.y,f+Q)}}}te(),me();function te(){let I=s.length/3;if(u){let ue=0,Q=k*ue;for(let ce=0;ce<j;ce++){let $=K[ce];Ne($[2]+Q,$[1]+Q,$[0]+Q)}ue=h+m*2,Q=k*ue;for(let ce=0;ce<j;ce++){let $=K[ce];Ne($[0]+Q,$[1]+Q,$[2]+Q)}}else{for(let ue=0;ue<j;ue++){let Q=K[ue];Ne(Q[2],Q[1],Q[0])}for(let ue=0;ue<j;ue++){let Q=K[ue];Ne(Q[0]+k*h,Q[1]+k*h,Q[2]+k*h)}}i.addGroup(I,s.length/3-I,0)}function me(){let I=s.length/3,ue=0;Pe(L,ue),ue+=L.length;for(let Q=0,ce=D.length;Q<ce;Q++){let $=D[Q];Pe($,ue),ue+=$.length}i.addGroup(I,s.length/3-I,1)}function Pe(I,ue){let Q=I.length;for(;--Q>=0;){let ce=Q,$=Q-1;$<0&&($=I.length-1);for(let Ie=0,ve=h+m*2;Ie<ve;Ie++){let A=k*Ie,S=k*(Ie+1),z=ue+ce+A,ae=ue+$+A,oe=ue+$+S,ne=ue+ce+S;ze(z,ae,oe,ne)}}}function xe(I,ue,Q){l.push(I),l.push(ue),l.push(Q)}function Ne(I,ue,Q){Ae(I),Ae(ue),Ae(Q);let ce=s.length/3,$=_.generateTopUV(i,s,ce-3,ce-2,ce-1);We($[0]),We($[1]),We($[2])}function ze(I,ue,Q,ce){Ae(I),Ae(ue),Ae(ce),Ae(ue),Ae(Q),Ae(ce);let $=s.length/3,Ie=_.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);We(Ie[0]),We(Ie[1]),We(Ie[3]),We(Ie[1]),We(Ie[2]),We(Ie[3])}function Ae(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function We(I){r.push(I.x),r.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return wb(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new rf[s.type]().fromJSON(s)),new n(i,e.options)}},Tb={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ee(r,o),new ee(a,l),new ee(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ee(o,1-l),new ee(c,1-f),new ee(u,1-g),new ee(x,1-p)]:[new ee(a,1-l),new ee(h,1-f),new ee(d,1-g),new ee(m,1-p)]}};function wb(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Nc=class n extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new C,u=new C,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],v=p/i,M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){let T=b/t;f.x=-e*Math.cos(s+T*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(T+M,1-v),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let v=h[p][_+1],M=h[p][_],b=h[p+1][_],T=h[p+1][_+1];(p!==0||o>0)&&d.push(v,M,T),(p!==i-1||l<Math.PI)&&d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var nr=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$n=class extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pi=class extends $n{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Oc=class extends kn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Fc=class extends kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function lc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ab(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Rb(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function t0(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function I0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ir=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hf=class extends ir{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yp,endingEnd:Yp}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zp:r=e,a=2*t-i;break;case Kp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zp:o=e,l=2*i-t;break;case Kp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+_*o[c+b]+v*o[l+b]+M*o[f+b];return r}},uf=class extends ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},ff=class extends ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},mi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lc(t,this.TimeBufferType),this.values=lc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:lc(e.times,Array),values:lc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case tu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ab(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===tu,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let x=t[f+g];if(x!==t[u+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Ar;var sr=class extends mi{};sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Ro;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends mi{};kc.prototype.ValueTypeName="color";var Ts=class extends mi{};Ts.prototype.ValueTypeName="number";var df=class extends ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)dt.slerpFlat(r,0,o,c-a,o,c,l);return r}},qi=class extends mi{InterpolantFactoryMethodLinear(e){return new df(this.times,this.values,this.getValueSize(),e)}};qi.prototype.ValueTypeName="quaternion";qi.prototype.DefaultInterpolation=Ar;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends mi{};rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Ro;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends mi{};ws.prototype.ValueTypeName="vector";var Bc=class{constructor(e,t=-1,i,s=Uv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Pb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(mi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Rb(l);l=t0(l,1,h),c=t0(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ts(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let f=h[1],u=s[f];u||(s[f]=u=[]),u.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(f,u,d,g,x){if(d.length!==0){let m=[],p=[];I0(d,m,p,g),m.length!==0&&x.push(new f(u,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let f=0;f<c.length;f++){let u=c[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let d={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)d[u[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let _=0;_!==u[g].morphTargets.length;++_){let v=u[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new Ts(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{let d=".bones["+t[f].name+"]";i(ws,d+".position",u,"pos",s),i(qi,d+".quaternion",u,"rot",s),i(ws,d+".scale",u,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Cb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ts;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return kc;case"quaternion":return qi;case"bool":case"boolean":return sr;case"string":return rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Pb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Cb(n.type);if(n.times===void 0){let t=[],i=[];I0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ks={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},pf=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Lb=new pf,Yi=class{constructor(e){this.manager=e!==void 0?e:Lb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds={},mf=class extends Error{constructor(e,t){super(e),this.response=t}},No=class extends Yi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ks.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ds[e]!==void 0){ds[e].push({onLoad:t,onProgress:i,onError:s});return}ds[e]=[],ds[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ds[e],f=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=u?parseInt(u):0,g=d!==0,x=0,m=new ReadableStream({start(p){_();function _(){f.read().then(({done:v,value:M})=>{if(v)p.close();else{x+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,w=h.length;T<w;T++){let P=h[T];P.onProgress&&P.onProgress(b)}p.enqueue(M),_()}})}}});return new Response(m)}else throw new mf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ks.add(e,c);let h=ds[e];delete ds[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=ds[e];if(h===void 0)throw this.manager.itemError(e),c;delete ds[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var gf=class extends Yi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ks.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Na("img");function l(){h(),Ks.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var zc=class extends Yi{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new tr,a=new No(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Fn,o.wrapT=c.wrapT!==void 0?c.wrapT:Fn,o.magFilter=c.magFilter!==void 0?c.magFilter:Nt,o.minFilter=c.minFilter!==void 0?c.minFilter:Nt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ys),c.mipmapCount===1&&(o.minFilter=Nt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},Oo=class extends Yi{constructor(e){super(e)}load(e,t,i,s){let r=new mn,o=new gf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Fo=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Hc=class extends Fo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pu=new Be,n0=new C,i0=new C,ja=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;n0.setFromMatrixPosition(e.matrixWorld),t.position.copy(n0),i0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(i0),t.updateMatrixWorld(),Pu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xf=class extends ja{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Co*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Vc=class extends Fo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},s0=new Be,Ea=new C,Lu=new C,vf=class extends ja{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ea),Lu.copy(i.position),Lu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Lu),i.updateMatrixWorld(),s.makeTranslation(-Ea.x,-Ea.y,-Ea.z),s0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s0)}},or=class extends Fo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_f=class extends ja{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends Fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new _f}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ar=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Gc=class extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ks.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ks.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ks.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ks.add(e,l),r.manager.itemStart(e)}};var Wc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=r0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=r0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function r0(){return(typeof performance>"u"?Date:performance).now()}var Of="\\[\\]\\.:\\/",Ib=new RegExp("["+Of+"]","g"),Ff="[^"+Of+"]",Db="[^"+Of.replace("\\.","")+"]",Ub=/((?:WC+[\/:])*)/.source.replace("WC",Ff),Nb=/(WCOD+)?/.source.replace("WCOD",Db),Ob=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ff),Fb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ff),kb=new RegExp("^"+Ub+Nb+Ob+Fb+"$"),Bb=["material","materials","bones","map"],yf=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ib,"")}static parseTrackName(e){let t=kb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Bb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=yf;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JT=new Float32Array(1);var Xc=class{constructor(e,t,i=0,s=1/0){this.ray=new Rr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Mf(e,this,i,t),i.sort(o0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mf(e[s],this,i,t);return i.sort(o0),i}};function o0(n,e){return n.distance-e.distance}function Mf(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Mf(s[r],e,t,!0)}}var a0=new ee,qc=class{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=a0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,a0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sf);var lr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Hb=new Qs(-1,1,1,-1,0,1),kf=class extends Bt{constructor(){super(),this.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pt([0,2,0,0,2,0],2))}},Vb=new kf,gi=class{constructor(e){this._mesh=new gt(Vb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vo=class extends yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qa=class extends yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ih=class extends yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var sh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ee);this._width=i.width,this._height=i.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ft}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vo(lr),this.copyPass.material.blending=qt,this.clock=new Wc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qa!==void 0&&(o instanceof Qa?i=!0:o instanceof ih&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var rh=class extends yn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var el={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ee},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Be},cameraProjectionMatrixInverse:{value:new Be},cameraWorldMatrix:{value:new Be},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},tl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},oh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function D0(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=Gb(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new C(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new tr(s,e,e);return r.wrapS=pn,r.wrapT=pn,r.needsUpdate=!0,r}function Gb(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var nl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Bf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ee},cameraProjectionMatrixInverse:{value:new Be},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Bf(n,e,t){let i=Wb(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function Wb(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new C(Math.cos(r),Math.sin(r),o))}return i}var ah=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,g=e-u,x=t-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let _=g-m+h,v=x-p+h,M=g-1+2*h,b=x-1+2*h,T=l&255,w=c&255,P=this.perm[T+this.perm[w]]%12,y=this.perm[T+m+this.perm[w+p]]%12,E=this.perm[T+1+this.perm[w+1]]%12,D=.5-g*g-x*x;D<0?i=0:(D*=D,i=D*D*this.dot(this.grad3[P],g,x));let B=.5-_*_-v*v;B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[y],_,v));let K=.5-M*M-b*b;return K<0?r=0:(K*=K,r=K*K*this.dot(this.grad3[E],M,b)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),u=Math.floor(i+c),d=1/6,g=(h+f+u)*d,x=h-g,m=f-g,p=u-g,_=e-x,v=t-m,M=i-p,b,T,w,P,y,E;_>=v?v>=M?(b=1,T=0,w=0,P=1,y=1,E=0):_>=M?(b=1,T=0,w=0,P=1,y=0,E=1):(b=0,T=0,w=1,P=1,y=0,E=1):v<M?(b=0,T=0,w=1,P=0,y=1,E=1):_<M?(b=0,T=1,w=0,P=0,y=1,E=1):(b=0,T=1,w=0,P=1,y=1,E=0);let D=_-b+d,B=v-T+d,K=M-w+d,L=_-P+2*d,O=v-y+2*d,k=M-E+2*d,j=_-1+3*d,J=v-1+3*d,W=M-1+3*d,F=h&255,Z=f&255,re=u&255,V=this.perm[F+this.perm[Z+this.perm[re]]]%12,te=this.perm[F+b+this.perm[Z+T+this.perm[re+w]]]%12,me=this.perm[F+P+this.perm[Z+y+this.perm[re+E]]]%12,Pe=this.perm[F+1+this.perm[Z+1+this.perm[re+1]]]%12,xe=.6-_*_-v*v-M*M;xe<0?s=0:(xe*=xe,s=xe*xe*this.dot3(this.grad3[V],_,v,M));let Ne=.6-D*D-B*B-K*K;Ne<0?r=0:(Ne*=Ne,r=Ne*Ne*this.dot3(this.grad3[te],D,B,K));let ze=.6-L*L-O*O-k*k;ze<0?o=0:(ze*=ze,o=ze*ze*this.dot3(this.grad3[me],L,O,k));let Ae=.6-j*j-J*J-W*W;return Ae<0?a=0:(Ae*=Ae,a=Ae*Ae*this.dot3(this.grad3[Pe],j,J,W)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,u,d,g,x=(e+t+i+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),_=Math.floor(i+x),v=Math.floor(s+x),M=(m+p+_+v)*c,b=m-M,T=p-M,w=_-M,P=v-M,y=e-b,E=t-T,D=i-w,B=s-P,K=y>E?32:0,L=y>D?16:0,O=E>D?8:0,k=y>B?4:0,j=E>B?2:0,J=D>B?1:0,W=K+L+O+k+j+J,F=o[W][0]>=3?1:0,Z=o[W][1]>=3?1:0,re=o[W][2]>=3?1:0,V=o[W][3]>=3?1:0,te=o[W][0]>=2?1:0,me=o[W][1]>=2?1:0,Pe=o[W][2]>=2?1:0,xe=o[W][3]>=2?1:0,Ne=o[W][0]>=1?1:0,ze=o[W][1]>=1?1:0,Ae=o[W][2]>=1?1:0,We=o[W][3]>=1?1:0,I=y-F+c,ue=E-Z+c,Q=D-re+c,ce=B-V+c,$=y-te+2*c,Ie=E-me+2*c,ve=D-Pe+2*c,A=B-xe+2*c,S=y-Ne+3*c,z=E-ze+3*c,ae=D-Ae+3*c,oe=B-We+3*c,ne=y-1+4*c,Ce=E-1+4*c,de=D-1+4*c,Te=B-1+4*c,Oe=m&255,Ge=p&255,ie=_&255,rt=v&255,et=a[Oe+a[Ge+a[ie+a[rt]]]]%32,qe=a[Oe+F+a[Ge+Z+a[ie+re+a[rt+V]]]]%32,ke=a[Oe+te+a[Ge+me+a[ie+Pe+a[rt+xe]]]]%32,Re=a[Oe+Ne+a[Ge+ze+a[ie+Ae+a[rt+We]]]]%32,Ke=a[Oe+1+a[Ge+1+a[ie+1+a[rt+1]]]]%32,lt=.6-y*y-E*E-D*D-B*B;lt<0?h=0:(lt*=lt,h=lt*lt*this.dot4(r[et],y,E,D,B));let vt=.6-I*I-ue*ue-Q*Q-ce*ce;vt<0?f=0:(vt*=vt,f=vt*vt*this.dot4(r[qe],I,ue,Q,ce));let Ze=.6-$*$-Ie*Ie-ve*ve-A*A;Ze<0?u=0:(Ze*=Ze,u=Ze*Ze*this.dot4(r[ke],$,Ie,ve,A));let he=.6-S*S-z*z-ae*ae-oe*oe;he<0?d=0:(he*=he,d=he*he*this.dot4(r[Re],S,z,ae,oe));let N=.6-ne*ne-Ce*Ce-de*de-Te*Te;return N<0?g=0:(N*=N,g=N*N*this.dot4(r[Ke],ne,Ce,de,Te)),27*(h+f+u+d+g)}};var il=class n extends yn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=D0(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Qt(this.width,this.height,{type:Ft}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},el.defines),uniforms:xn.clone(el.uniforms),vertexShader:el.vertexShader,fragmentShader:el.fragmentShader,blending:qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Oc,this.normalMaterial.blending=qt,this.pdMaterial=new yt({defines:Object.assign({},nl.defines),uniforms:xn.clone(nl.uniforms),vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},tl.defines),uniforms:xn.clone(tl.uniforms),vertexShader:tl.vertexShader,fragmentShader:tl.fragmentShader,blending:qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:xn.clone(lr.uniforms),vertexShader:lr.vertexShader,fragmentShader:lr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Kc,blendDst:Bo,blendEquation:li,blendSrcAlpha:Zc,blendDstAlpha:Bo,blendEquationAlpha:li}),this.blendMaterial=new yt({uniforms:xn.clone(oh.uniforms),vertexShader:oh.vertexShader,fragmentShader:oh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:bf,blendSrc:Kc,blendDst:Bo,blendEquation:li,blendSrcAlpha:Zc,blendDstAlpha:Bo,blendEquationAlpha:li}),this.fsQuad=new gi(null),this.originalClearColor=new pe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Io,this.depthTexture.format=Js,this.depthTexture.type=vs,this.normalRenderTarget=new Qt(this.width,this.height,{minFilter:bt,magFilter:bt,type:Ft,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Bf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new ah,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new tr(s,e,e,zn,Kn);return r.wrapS=pn,r.wrapT=pn,r.needsUpdate=!0,r}};il.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var U0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Go=class n extends yn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,o,{type:Ft}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let u=new Qt(r,o,{type:Ft});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Qt(r,o,{type:Ft});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=U0;this.highPassUniforms=xn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ee(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=lr;this.copyUniforms=xn.clone(h.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_s,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pe,this.oldClearAlpha=1,this.basic=new gn,this.fsQuad=new gi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ee(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Go.BlurDirectionX=new ee(1,0);Go.BlurDirectionY=new ee(0,1);var N0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var lh=class extends yn{constructor(){super();let e=N0;this.uniforms=xn.clone(e.uniforms),this.material=new nr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Af?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rf&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Wo=class n extends gt{constructor(){let e=n.SkyShader,t=new yt({name:e.name,uniforms:xn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Pn,depthWrite:!1});super(new Jn(1,1,1),t),this.isSky=!0}};Wo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new C},up:{value:new C(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var sl=new C;function xi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;sl.copy(e),sl[i]=0,sl.normalize();let c=.5*o/(o+a),h=1-sl.angleTo(n)/l;return Math.sign(sl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var ch=class extends Jn{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new C,l=new C,c=new C(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,g=new C,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),u[p+0]=xi(g,l,"z","y",r,i),u[p+1]=1-xi(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[p+0]=1-xi(g,l,"z","y",r,i),u[p+1]=1-xi(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[p+0]=1-xi(g,l,"x","z",r,e),u[p+1]=xi(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),u[p+0]=1-xi(g,l,"x","z",r,e),u[p+1]=1-xi(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),u[p+0]=1-xi(g,l,"x","y",r,e),u[p+1]=1-xi(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[p+0]=xi(g,l,"x","y",r,e),u[p+1]=1-xi(g,l,"y","x",r,t);break}}};var hh=class extends zc{constructor(e){super(e),this.type=Ft}parse(e){let o=function(P,y){switch(P){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},h=`
`,f=function(P,y,E){y=y||1024;let B=P.pos,K=-1,L=0,O="",k=String.fromCharCode.apply(null,new Uint16Array(P.subarray(B,B+128)));for(;0>(K=k.indexOf(h))&&L<y&&B<P.byteLength;)O+=k,L+=k.length,B+=128,k+=String.fromCharCode.apply(null,new Uint16Array(P.subarray(B,B+128)));return-1<K?(E!==!1&&(P.pos+=L+K+1),O+k.slice(0,K)):!1},u=function(P){let y=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,K=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},O,k;for((P.pos>=P.byteLength||!(O=f(P)))&&o(1,"no header found"),(k=O.match(y))||o(3,"bad initial token"),L.valid|=1,L.programtype=k[1],L.string+=O+`
`;O=f(P),O!==!1;){if(L.string+=O+`
`,O.charAt(0)==="#"){L.comments+=O+`
`;continue}if((k=O.match(E))&&(L.gamma=parseFloat(k[1])),(k=O.match(D))&&(L.exposure=parseFloat(k[1])),(k=O.match(B))&&(L.valid|=2,L.format=k[1]),(k=O.match(K))&&(L.valid|=4,L.height=parseInt(k[1],10),L.width=parseInt(k[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||o(3,"missing format specifier"),L.valid&4||o(3,"missing image size specifier"),L},d=function(P,y,E){let D=y;if(D<8||D>32767||P[0]!==2||P[1]!==2||P[2]&128)return new Uint8Array(P);D!==(P[2]<<8|P[3])&&o(3,"wrong scanline width");let B=new Uint8Array(4*y*E);B.length||o(4,"unable to allocate buffer space");let K=0,L=0,O=4*D,k=new Uint8Array(4),j=new Uint8Array(O),J=E;for(;J>0&&L<P.byteLength;){L+4>P.byteLength&&o(1),k[0]=P[L++],k[1]=P[L++],k[2]=P[L++],k[3]=P[L++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=D)&&o(3,"bad rgbe scanline format");let W=0,F;for(;W<O&&L<P.byteLength;){F=P[L++];let re=F>128;if(re&&(F-=128),(F===0||W+F>O)&&o(3,"bad scanline data"),re){let V=P[L++];for(let te=0;te<F;te++)j[W++]=V}else j.set(P.subarray(L,L+F),W),W+=F,L+=F}let Z=D;for(let re=0;re<Z;re++){let V=0;B[K]=j[re+V],V+=D,B[K+1]=j[re+V],V+=D,B[K+2]=j[re+V],V+=D,B[K+3]=j[re+V],K+=4}J--}return B},g=function(P,y,E,D){let B=P[y+3],K=Math.pow(2,B-128)/255;E[D+0]=P[y+0]*K,E[D+1]=P[y+1]*K,E[D+2]=P[y+2]*K,E[D+3]=1},x=function(P,y,E,D){let B=P[y+3],K=Math.pow(2,B-128)/255;E[D+0]=Dr.toHalfFloat(Math.min(P[y+0]*K,65504)),E[D+1]=Dr.toHalfFloat(Math.min(P[y+1]*K,65504)),E[D+2]=Dr.toHalfFloat(Math.min(P[y+2]*K,65504)),E[D+3]=Dr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=u(m),_=p.width,v=p.height,M=d(m.subarray(m.pos),_,v),b,T,w;switch(this.type){case Zn:w=M.length/4;let P=new Float32Array(w*4);for(let E=0;E<w;E++)g(M,E*4,P,E*4);b=P,T=Zn;break;case Ft:w=M.length/4;let y=new Uint16Array(w*4);for(let E=0;E<w;E++)x(M,E*4,y,E*4);b=y,T=Ft;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:_,height:v,data:b,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,i,s){function r(o,a){switch(o.type){case Zn:case Ft:o.colorSpace=Yt,o.minFilter=Nt,o.magFilter=Nt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,i,s)}};function zf(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Bt,c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=O0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);let g=O0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function O0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<n.length;++c)o.set(n[c].array,a),a+=n[c].array.length;let l=new Gt(o,t,i);return s!==void 0&&(l.gpuType=s),l}function Hf(n,e){if(e===x0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ja||e===Jc){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Ja)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var ol=class extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zf(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ar.extractUrlBase(e);o=ar.resolveURL(c,this.path)}else o=ar.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new No(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===H0){try{o[at.KHR_BINARY_GLTF]=new ld(e)}catch(f){s&&s(f);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new md(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(f){case at.KHR_MATERIALS_UNLIT:o[f]=new qf;break;case at.KHR_DRACO_MESH_COMPRESSION:o[f]=new cd(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[f]=new hd;break;case at.KHR_MESH_QUANTIZATION:o[f]=new ud;break;default:u.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function Xb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Xf=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yt);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ko(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new or(h),c.distance=f;break;case"spot":c=new Vc(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},qf=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,i){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}},Yf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Zf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ee(a,a)}return Promise.all(r)}},Kf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},jf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ft)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Jf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},$f=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}},Qf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ft)),Promise.all(r)}},td=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},nd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},id=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},sd=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},rd=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},od=class{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,f=s.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,u,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(d),h,f,u,s.mode,s.filter),d})})}else return null}},ad=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],u=c[0].count,d=[];for(let g of f){let x=new Be,m=new C,p=new dt,_=new C(1,1,1),v=new Pr(g.geometry,g.material,u);for(let M=0;M<u;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&_.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,x.compose(m,p,_));for(let M in l)if(M==="_COLOR_0"){let b=l[M];v.instanceColor=new bs(b.array,b.itemSize,b.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);kt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},H0="glTF",rl=12,F0={JSON:1313821514,BIN:5130562},ld=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,rl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==H0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-rl,r=new DataView(e,rl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===F0.JSON){let c=new Uint8Array(e,rl+o,a);this.content=i.decode(c)}else if(l===F0.BIN){let c=rl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},cd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let f=dd[h]||h.toLowerCase();a[f]=o[h]}for(let h in e.attributes){let f=dd[h]||h.toLowerCase();if(o[h]!==void 0){let u=i.accessors[e.attributes[h]],d=Xo[u.componentType];c[f]=d.name,l[f]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,u){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}f(d)},a,c,Yt,u)})})}},hd=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ud=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},uh=class extends ir{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,f=(i-t)/h,u=f*f,d=u*f,g=e*c,x=g-c,m=-2*d+3*u,p=d-u,_=1-m,v=p-u+f;for(let M=0;M!==a;M++){let b=o[x+M+a],T=o[x+M+l]*h,w=o[g+M+a],P=o[g+M]*h;r[M]=_*b+v*T+m*w+p*P}return r}},qb=new dt,fd=class extends uh{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return qb.fromArray(r).normalize().toArray(r),r}},vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},k0={9728:bt,9729:Nt,9984:hc,9985:Cf,9986:Ta,9987:ys},B0={33071:Fn,33648:Ua,10497:pn},Vf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yb={CUBICSPLINE:void 0,LINEAR:Ar,STEP:Ro},Gf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new $n({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),n.DefaultMaterial}function Ur(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function hr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kb(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(i){let u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(u)}if(s){let u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(u)}if(r){let u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],u=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=u),n.morphTargetsRelative=!0,n})}function jb(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jb(n){let e,t=n.extensions&&n.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wf(t.attributes):e=n.indices+":"+Wf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Wf(n.targets[i]);return e}function Wf(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function pd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $b(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Qb=new Be,md=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Oo(this.options.manager):this.textureLoader=new Gc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new No(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Ur(r,a,s),hr(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(ar.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Vf[s.type],a=Xo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Gt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Vf[s.type],c=Xo[s.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,u=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==f){let p=Math.floor(u/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(_);v||(x=new c(a,p*d,s.count*d/h),v=new Cr(x,d/h),t.cache.add(_,v)),m=new er(v,l,u%d/h,g)}else a===null?x=new c(s.count*l):x=new c(a,u,s.count*l),m=new Gt(x,l,g);if(s.sparse!==void 0){let p=Vf.SCALAR,_=Xo[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,b=new _(o[1],v,s.sparse.count*p),T=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,P=b.length;w<P;w++){let y=b[w];if(m.setX(y,T[w*l]),l>=2&&m.setY(y,T[w*l+1]),l>=3&&m.setZ(y,T[w*l+2]),l>=4&&m.setW(y,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=k0[u.magFilter]||Nt,h.minFilter=k0[u.minFilter]||ys,h.wrapS=B0[u.wrapS]||pn,h.wrapT=B0[u.wrapT]||pn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let u=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(f){return new Promise(function(u,d){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){let m=new mn(x);m.needsUpdate=!0,u(m)}),t.load(ar.resolveURL(f,r.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||$b(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Lr,kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Va,kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return $n}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){let f=s[at.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let u=f.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Yt),a.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,ft)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ii);let h=r.alphaMode||Gf.OPAQUE;if(h===Gf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Gf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==gn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ee(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==gn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==gn){let f=r.emissiveFactor;a.emissive=new pe().setRGB(f[0],f[1],f[2],Yt)}return r.emissiveTexture!==void 0&&o!==gn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),hr(f,r),t.associations.set(f,{materials:e}),r.extensions&&Ur(s,f,r),f})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return z0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Jb(c),f=s[h];if(f)o.push(f.promise);else{let u;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=z0(new Bt,c,t),s[h]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Zb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=o[d],p,_=c[d];if(m.mode===vi.TRIANGLES||m.mode===vi.TRIANGLE_STRIP||m.mode===vi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ec(x,_):new gt(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vi.TRIANGLE_STRIP?p.geometry=Hf(p.geometry,Jc):m.mode===vi.TRIANGLE_FAN&&(p.geometry=Hf(p.geometry,Ja));else if(m.mode===vi.LINES)p=new wc(x,_);else if(m.mode===vi.LINE_STRIP)p=new Do(x,_);else if(m.mode===vi.LINE_LOOP)p=new Ac(x,_);else if(m.mode===vi.POINTS)p=new Uo(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&jb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hr(p,r),m.extensions&&Ur(s,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&Ur(s,f[0],r),f[0];let u=new hi;r.extensions&&Ur(s,u,r),t.associations.set(u,{meshes:e});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new tn($a.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Qs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),hr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let f=o[c];if(f){a.push(f);let u=new Be;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Tc(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let f=0,u=s.channels.length;f<u;f++){let d=s.channels[f],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let u=f[0],d=f[1],g=f[2],x=f[3],m=f[4],p=[];for(let _=0,v=u.length;_<v;_++){let M=u[_],b=d[_],T=g[_],w=x[_],P=m[_];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let y=i._createAnimationTracks(M,b,T,w,P);if(y)for(let E=0;E<y.length;E++)p.push(y[E])}return new Bc(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],f=c[1],u=c[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,Qb)});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ha:c.length>1?h=new hi:c.length===1?h=c[0]:h=new kt,h!==c[0])for(let f=0,u=c.length;f<u;f++)h.add(c[f]);if(r.name&&(h.userData.name=r.name,h.name=o),hr(h,r),r.extensions&&Ur(i,h,r),r.matrix!==void 0){let f=new Be;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new hi;i.name&&(r.name=s.createUniqueName(i.name)),hr(r,i),i.extensions&&Ur(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,f=l.length;h<f;h++)r.add(l[h]);let c=h=>{let f=new Map;for(let[u,d]of s.associations)(u instanceof kn||u instanceof mn)&&f.set(u,d);return h.traverse(u=>{let d=s.associations.get(u);d!=null&&f.set(u,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];cr[r.path]===cr.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(cr[r.path]){case cr.weights:c=Ts;break;case cr.rotation:c=qi;break;case cr.position:case cr.scale:c=ws;break;default:switch(i.itemSize){case 1:c=Ts;break;case 2:case 3:default:c=ws;break}break}let h=s.interpolation!==void 0?Yb[s.interpolation]:Ar,f=this._getArrayFromAccessor(i);for(let u=0,d=l.length;u<d;u++){let g=new c(l[u]+"."+cr[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=pd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof qi?fd:uh;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function eE(n,e,t){let i=e.attributes,s=new fi;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let h=pd(Xo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){let f=r[c];if(f.POSITION!==void 0){let u=t.json.accessors[f.POSITION],d=u.min,g=u.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),u.normalized){let x=pd(Xo[u.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new jn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function z0(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=dd[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return ht.workingColorSpace!==Yt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),hr(n,e),eE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Kb(n,e.targets,t):n})}function V0(n){let e=new Map,t=new Map,i=n.clone();return G0(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function G0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)G0(n.children[i],e.children[i],t)}var W0={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var fh=class extends yn{constructor(e,t,i){super(),this.scene=e,this.camera=t;let s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Qt(1,1,{minFilter:bt,magFilter:bt,type:Ft}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new ka,this.materialDepth.depthPacking=Lf,this.materialDepth.blending=qt;let a=W0,l=xn.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=s,l.aspect.value=t.aspect,l.aperture.value=r,l.maxblur.value=o,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new yt({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new gi(this.materialBokeh),this._oldClearColor=new pe}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var al=class n extends gt{constructor(){super(n.Geometry,new gn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new C,t=new C,i=new Ga(16,16),s=new Ga(16,16),r=Kn,o=n.Geometry,a=new nr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new nr({uniforms:{map:{value:i},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new gt(o,a),h=[],f=Nr.Shader,u=new nr({name:f.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new pe(16777215)},scale:{value:new ee},screenPosition:{value:new C}},vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:_s,transparent:!0,depthWrite:!1}),d=new gt(o,u);this.addElement=function(_){h.push(_)};let g=new ee,x=new ee,m=new qc,p=new mt;this.onBeforeRender=function(_,v,M){_.getCurrentViewport(p);let b=_.getRenderTarget(),T=b!==null?b.texture.type:Kn;r!==T&&(i.dispose(),s.dispose(),i.type=s.type=T,r=T);let w=p.w/p.z,P=p.z/2,y=p.w/2,E=16/p.w;if(g.set(E*w,E),m.min.set(p.x,p.y),m.max.set(p.x+(p.z-16),p.y+(p.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(M.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(M.projectionMatrix),x.x=p.x+e.x*P+P-8,x.y=p.y+e.y*y+y-8,m.containsPoint(x))){_.copyFramebufferToTexture(x,i);let D=a.uniforms;D.scale.value=g,D.screenPosition.value=e,_.renderBufferDirect(M,null,o,a,c,null),_.copyFramebufferToTexture(x,s),D=l.uniforms,D.scale.value=g,D.screenPosition.value=e,_.renderBufferDirect(M,null,o,l,c,null);let B=-e.x*2,K=-e.y*2;for(let L=0,O=h.length;L<O;L++){let k=h[L],j=u.uniforms;j.color.value.copy(k.color),j.map.value=k.texture,j.screenPosition.value.x=e.x+B*k.distance,j.screenPosition.value.y=e.y+K*k.distance,E=k.size/p.w;let J=p.w/p.z;j.scale.value.set(E*J,E),u.uniformsNeedUpdate=!0,_.renderBufferDirect(M,null,o,u,d,null)}}},this.dispose=function(){a.dispose(),l.dispose(),u.dispose(),i.dispose(),s.dispose();for(let _=0,v=h.length;_<v;_++)h[_].texture.dispose()}}},Nr=class{constructor(e,t=1,i=0,s=new pe(16777215)){this.texture=e,this.size=t,this.distance=i,this.color=s}};Nr.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};al.Geometry=function(){let n=new Bt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new Cr(e,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new er(t,3,0,!1)),n.setAttribute("uv",new er(t,2,3,!1)),n}();var se=480,pt=270,ni=1/60,Ht=120,hn=-10.2,_n=10.2,vn=-11,pa=.04,Oi=-10,rn=Ht+20,na=-11,Vr=22,Tl=2048,wl=320,Bn={y:1.9,z:2.6,lookY:1.2,lookZ:-1.6,fov:55,half:5.6},En=11,Gr=Ht*.3+10,tE=1.62,Hg=72,nE=.0026,v2=pa*.5,De={gravity:15,playerSpeed:3.2,playerHP:100,bulletRange:40,weapons:{knife:{name:"KNIFE",dmg:45,rate:.38,mag:1/0,knock:3,pen:3,melee:!0},pistol:{name:"PISTOL",dmg:34,rate:.16,mag:12,reserve:1/0,reload:1,recoil:.06,knock:1.6,pen:1,spread:.012,auto:!1,shake:1.2},smg:{name:"SMG",dmg:15,rate:.06,mag:40,reserve:240,reload:1.4,recoil:.022,knock:1.1,pen:1,spread:.02,spreadGrow:.006,spreadMax:.07,auto:!0,shake:1},rifle:{name:"RIFLE",dmg:24,rate:.085,mag:30,reserve:150,reload:1.6,recoil:.035,knock:1.9,pen:2,spread:.01,spreadGrow:.008,spreadMax:.06,auto:!0,shake:1.5},shotgun:{name:"SHOTGUN",dmg:16,pellets:6,rate:.62,mag:6,reserve:30,reload:1.9,recoil:.12,knock:4.5,pen:1,spread:.08,auto:!1,shake:3.5},sniper:{name:"SNIPER",dmg:160,rate:.9,mag:5,reserve:30,reload:2.2,recoil:.2,knock:6,pen:4,spread:.002,auto:!1,shake:4,zoom:.35}},zombies:{walker:{hp:60,speed:.65,dmg:10,scale:1,cash:5},runner:{hp:34,speed:1.8,dmg:6,scale:.95,cash:6},brute:{hp:420,speed:.45,dmg:26,scale:1.35,cash:40,barricadeMul:3},crawler:{hp:48,speed:.5,dmg:8,scale:1,cash:6},spitter:{hp:55,speed:.62,dmg:12,scale:1,cash:8,range:6.5,cooldown:2.6},gunner:{hp:55,speed:.6,dmg:9,scale:1,cash:10,range:13,cooldown:2.2,burst:3,bulletSpeed:15}},headshotMul:2.5,headshotCash:3,killScore:10,maxParticles:2200,maxRagdolls:36,waveBase:6,wavePerDiff:3,hordeMul:1.6,grenade:{dmg:220,radius:2.8,fuse:1.4,startCount:2},defenses:{wire:{hp:320,cost:40,slow:.4,dps:9},spikes:{hp:220,cost:35,dps:22},sandbags:{hp:520,cost:60}},shop:{ammo:15,grenade:25,shotgun:120,smg:150,sniper:220,heal:20,upDmg:60,upRate:60,upReload:50,upHP:50},upgrade:{dmg:.15,rate:.1,reload:.12,hp:25},drops:{ammo:.07,med:.04,nade:.02},move:{sprintMul:1.6,stamina:100,drain:28,regen:22,meleeCost:18,meleeDmg:20,meleeCd:.8,adsMul:.62}},Uh=["knife","pistol","smg","rifle","shotgun","sniper"],ii=[{name:"CHECKPOINT",obj:"waves",waves:5,startCash:0,flank:0,dark:0,mix:{runner:.1,crawler:.08,spitter:0,gunner:.1},pal:{skyT:[178,168,172],skyB:[150,156,142],fog:[150,160,140],wall:[100,110,114],stripeA:[206,192,58],stripeB:[44,48,66],post:[96,128,28],road:[94,72,50],fg:[74,64,40],light:[216,240,192]}},{name:"OVERPASS",obj:"hold",waves:6,startCash:250,flank:.1,dark:.15,mix:{runner:.18,crawler:.12,spitter:.08,gunner:.14},pal:{skyT:[214,140,90],skyB:[170,100,76],fog:[190,120,90],wall:[110,96,90],stripeA:[190,50,40],stripeB:[220,210,200],post:[70,70,70],road:[100,74,52],fg:[70,54,40],light:[255,200,120]}},{name:"QUARANTINE",obj:"survive",waves:6,startCash:550,flank:.2,dark:.45,mix:{runner:.25,crawler:.15,spitter:.1,gunner:.16},pal:{skyT:[20,24,44],skyB:[40,46,70],fog:[36,42,64],wall:[60,66,80],stripeA:[200,190,60],stripeB:[30,32,44],post:[40,90,40],road:[64,52,44],fg:[40,36,30],light:[255,240,200]}},{name:"BLACKSITE",obj:"protect",waves:7,startCash:900,flank:.25,dark:.3,mix:{runner:.2,crawler:.15,spitter:.18,brute:.04,gunner:.18},pal:{skyT:[60,30,34],skyB:[90,44,40],fog:[90,40,38],wall:[70,62,64],stripeA:[220,40,30],stripeB:[30,26,28],post:[90,90,90],road:[74,54,44],fg:[46,36,32],light:[255,70,50]}},{name:"LAST STAND",obj:"waves",waves:1/0,startCash:1300,flank:.3,dark:.2,mix:{runner:.25,crawler:.15,spitter:.18,brute:.05,gunner:.2},pal:{skyT:[120,140,90],skyB:[96,116,66],fog:[120,150,80],wall:[86,96,80],stripeA:[190,200,60],stripeB:[40,46,30],post:[120,150,40],road:[84,72,48],fg:[60,58,36],light:[200,255,120]}}],U=(n=0,e=1)=>n+Math.random()*(e-n),Lt=n=>n[Math.random()*n.length|0],Le=(n,e,t)=>n<e?e:n>t?t:n,Et=(n,e,t)=>n+(e-n)*t,Nh=(n,e,t)=>[Et(n[0],e[0],t),Et(n[1],e[1],t),Et(n[2],e[2],t)],Cs=(n,e=1)=>`rgb(${Le(n[0]*e,0,255)|0},${Le(n[1]*e,0,255)|0},${Le(n[2]*e,0,255)|0})`,Sn=(n,e=1)=>new pe().setRGB(Le(n[0]*e/255,0,1),Le(n[1]*e/255,0,1),Le(n[2]*e/255,0,1),ft),X0={},be=n=>X0[n]||(X0[n]=new pe(n));function iE(n){let e={},t={};for(let i in n)e[i]=Sn(n[i]),t[i]=Sn(n[i],.78);return{col:e,colB:t}}var _d=new pe(1,1,1),q0=new Proxy({},{get:()=>_d}),Is=(n,e,t)=>{let i=((e-n+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return n+Le(i,-t,t)};function rs(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,t}var Vg=document.getElementById("gl"),Qi=document.getElementById("ui"),ot=Qi.getContext("2d"),sE={A:"010101111101101",B:"110101110101110",C:"011100100100011",D:"110101101101110",E:"111100110100111",F:"111100110100100",G:"011100101101011",H:"101101111101101",I:"111010010010111",J:"001001001101010",K:"101101110101101",L:"100100100100111",M:"101111111101101",N:"110101101101101",O:"010101101101010",P:"110101110100100",Q:"010101101110011",R:"110101110101101",S:"011100010001110",T:"111010010010010",U:"101101101101111",V:"101101101101010",W:"101101111111101",X:"101101010101101",Y:"101101010010010",Z:"111001010100111",0:"111101101101111",1:"010110010010111",2:"110001010100111",3:"110001010001110",4:"101101111001001",5:"111100110001110",6:"011100111101111",7:"111001010010010",8:"111101111101111",9:"111101111001110",$:"011110010011110","/":"001001010100100",":":"000010000010000",".":"000000000000010","!":"010010010000010","?":"110001010000010","-":"000000111000000","+":"000010111010000","%":"101001010100101","(":"001010010010001",")":"100010010010100","'":"010010000000000",">":"100010001010100","<":"001010100010001"};function Ee(n,e,t,i,s,r=1,o="left",a=!1){e=String(e).toUpperCase();let l=e.length*4*r-r;o==="center"?t-=l/2|0:o==="right"&&(t-=l),a&&Ee(n,e,t+r,i+r,"rgba(0,0,0,.7)",r),n.fillStyle=s;for(let c=0;c<e.length;c++){let h=sE[e[c]];if(h)for(let f=0;f<15;f++)h[f]==="1"&&n.fillRect(t+c*4*r+f%3*r,i+(f/3|0)*r,r,r)}}var Y0={k:"#141210",w:"#f2f0ea",g:"#9a9a9a",d:"#555",r:"#d42a2a",R:"#8a1010",y:"#f0d040",Y:"#b08a20",o:"#e07020",G:"#5a8a3a",D:"#2e4a22",b:"#7a5a34",B:"#3a2a1a",t:"#c8b088",p:"#fff4c0"},yd={heart:[".kk...kk.","krrk.krrk","krwrkrrrk","krrrrrrrk","krrrrrrRk",".krrrrRk.","..krrRk..","...kRk...","....k...."],coin:["..kkkkk..",".kyyyyyk.","kyppyyyYk","kypyyyyYk","kyyyyyyYk","kyyyyyyYk","kyyyyyYYk",".kYYYYYk.","..kkkkk.."],skull:[".kkkkkkk.","kwwwwwwwk","kwwwwwwwk","kwkkwkkwk","kwkkwkkwk","kwwwkwwwk",".kwwwwwk.","..kwkwk..","..kkkkk.."],nade:["....kkk..","...kg.gk.","..kkdkk..",".kGGGGGk.","kGDGDGDGk","kGGGGGGGk","kGDGDGDGk","kGGGGGGGk",".kGDGDGk.","..kkkkk.."],ammo:["...........",".kkkkkkkkk.","kDDDDDDDDDk","kGGGGGGGGGk","kGyyyyyyyGk","kGGGGGGGGGk","kGGGGGGGGGk","kDDDDDDDDDk",".kkkkkkkkk."],med:["...kkkkk...","...k...k...","kkkkkkkkkkk","kwwwwrwwwwk","kwwwrrrwwwk","kwwwwrwwwwk","kgwwwwwwwgk","kkkkkkkkkkk"],burst:["....r....",".r..r..r.","..rrorr..",".rroyorr.","rrooyoorr",".rroyorr.","..rrorr..",".r..r..r.","....r...."],bolt:[".....kkk.","....kyyk.","...kyyk..","..kyyyk..",".kyyyyyk.","..kkyyk..","...kyk...","..kyk....","..kk....."],reload:["..wwww...",".w....w.w","w......ww","w.....www","w........","w.......w",".w.....w.","..wwwww.."],swap:["......w..","wwwwwwwww","......w..","..w......","wwwwwwwww","..w......"],wire:["b.......b","bgg.g.ggb","b.gg.gg.b","bg.ggg.gb","b.gg.gg.b","bgg.g.ggb","b.......b"],spikes:[".w..w..w.",".g..g..g.","ggggggggg","BBBBBBBBB","bBbBbBbBb"],bags:[".kkkkkkkkk.","ktttttttttk","kbbbbbbbbbk",".kkkkkkkkk.","kttttkttttk","kbbbbkbbbbk",".kkkk.kkkk."],lock:["..kkk..",".k...k.",".k...k.","kkkkkkk","kyyyyyk","kyykyyk","kyyyyyk","kkkkkkk"],sound:["...k.....","..kk..w..","kkwk...w.","kwwk.w.w.","kkwk...w.","..kk..w..","...k....."],mute:["...k.....","..kk.....","kkwk.r.r.","kwwk..r..","kkwk.r.r.","..kk.....","...k....."],star:["...y...","...y...","yyyyyyy",".yyyyy.","..yyy..",".yy.yy.",".y...y."],flag:["k.......","krrrrr..","krrrrrrr","krrrrr..","k.......","k.......","k......."],phone:["kkkkk","kwwwk","kwwwk","kwwwk","kwwwk","kwwwk","kkkkk"]},ia={};for(let n in yd){let e=yd[n],t=rs(e[0].length,e.length),i=t.getContext("2d");e.forEach((s,r)=>[...s].forEach((o,a)=>{Y0[o]&&(i.fillStyle=Y0[o],i.fillRect(a,r,1,1))})),ia[n]=t}function an(n,e,t,i,s=1){let r=ia[e];n.drawImage(r,Math.round(t),Math.round(i),r.width*s,r.height*s)}try{let n=rs(32,32),e=n.getContext("2d");e.imageSmoothingEnabled=!1,e.fillStyle="#5a0a0a",e.fillRect(0,0,32,32),e.drawImage(ia.skull,3,3,27,27);let t=document.createElement("link");t.rel="icon",t.href=n.toDataURL(),document.head.appendChild(t)}catch{}var rE={pistol:[[-1,-3,9,2,"#a9a9a9"],[-1,-1,8,2,"#2c2c2c"],[-1,0,3,4,"#1e1e1e"]],rifle:[[-8,-2,6,3,"#3a3328"],[-3,-3,13,3,"#2a2a2a"],[10,-2,8,1,"#1c1c1c"],[10,-1,5,1,"#333"],[3,0,2,4,"#1c1c1c"],[0,-4,5,1,"#111"],[-1,0,2,3,"#1c1c1c"],[-2,-3,10,1,"#444"]],shotgun:[[-9,-2,8,3,"#6b4a2a"],[-1,-3,6,3,"#2a2a2a"],[5,-3,13,1,"#3c3c3c"],[5,-2,11,1,"#2b2b2b"],[8,-2,5,2,"#6b4a2a"],[-1,0,2,3,"#6b4a2a"]],knife:[[-2,-1,3,2,"#2d3a1a"],[1,-1,7,2,"#d8d8d8"],[8,-1,1,1,"#d8d8d8"]],smg:[[-6,-2,5,3,"#2e2e2e"],[-1,-3,10,3,"#262626"],[9,-2,5,1,"#1a1a1a"],[2,0,2,6,"#1c1c1c"],[-1,0,2,3,"#1c1c1c"],[1,-4,3,1,"#111"]],sniper:[[-10,-2,8,3,"#4a3a26"],[-2,-3,12,3,"#2a2a2a"],[10,-2,14,1,"#1c1c1c"],[0,-6,9,2,"#151515"],[1,-4,2,1,"#111"],[6,-4,2,1,"#111"],[-1,0,2,3,"#4a3a26"],[3,0,2,3,"#1c1c1c"]]},Oh={rifle:{muz:[.6,.045],ads:.118,left:[.27,-.005],parts:[["b",.02,0,0,.16,.05,.028,"#2b2b2b","m"],["b",.03,.045,0,.2,.045,.03,"#262626","m"],["b",.05,.072,0,.26,.012,.022,"#1a1a1a","m"],["b",.27,.04,0,.26,.055,.042,"#2e2e2c","p"],["b",.2,.04,-.0215,.035,.018,.002,"#121212","p"],["b",.27,.04,-.0215,.035,.018,.002,"#121212","p"],["b",.34,.04,-.0215,.035,.018,.002,"#121212","p"],["c",.5,.045,0,.2,.018,0,"#1b1b1b","m"],["b",.415,.07,0,.02,.045,.016,"#1c1c1c","m"],["c",.585,.045,0,.05,.026,0,"#141414","m"],["b",.07,-.065,0,.05,.12,.022,"#2a2a28","p",.25],["b",.07,-.01,0,.065,.04,.032,"#262626","m"],["b",-.025,-.055,0,.032,.085,.026,"#202020","p",-.3],["b",.02,-.032,0,.05,.006,.012,"#1c1c1c","m"],["c",-.13,.045,0,.16,.03,0,"#1f1f1f","m"],["b",-.22,.028,0,.13,.07,.036,"#2a2a28","p"],["b",-.29,.028,0,.015,.085,.04,"#111","p"],["b",-.06,.07,0,.03,.01,.03,"#1c1c1c","m"],["b",.05,.09,0,.045,.022,.02,"#181818","m"],["c",.05,.118,0,.075,.04,0,"#151515","m"],["c",.09,.118,0,.008,.046,0,"#0c0c0c","m"]]},smg:{muz:[.33,.045],ads:.085,left:[.17,0],parts:[["b",.05,.04,0,.24,.05,.032,"#262626","m"],["b",.2,.03,0,.11,.05,.04,"#2c2c2c","p"],["c",.29,.045,0,.08,.02,0,"#181818","m"],["b",.27,.075,0,.015,.03,.012,"#1a1a1a","m"],["b",.12,-.065,0,.035,.12,.02,"#222","m",.35],["b",-.02,-.05,0,.03,.08,.026,"#1e1e1e","p",-.25],["b",.02,-.025,0,.045,.006,.012,"#1c1c1c","m"],["b",-.14,.05,-.012,.14,.012,.006,"#1a1a1a","m"],["b",-.14,.05,.012,.14,.012,.006,"#1a1a1a","m"],["b",-.21,.035,0,.015,.07,.04,"#141414","p"],["c",-.05,.08,0,.02,.024,0,"#151515","m"]]},shotgun:{muz:[.56,.06],ads:.075,left:[.25,-.005],parts:[["b",.02,.045,0,.16,.055,.034,"#2a2a2a","m"],["c",.32,.06,0,.48,.022,0,"#1e1e1e","m"],["c",.3,.03,0,.4,.022,0,"#262626","m"],["b",.25,.03,0,.14,.04,.042,"#6b4a2a","w"],["b",-.17,.02,0,.22,.07,.036,"#5e4026","w",.1],["b",-.04,-.02,0,.06,.06,.03,"#5e4026","w",-.4],["b",.01,-.012,0,.05,.006,.012,"#1c1c1c","m"],["b",.55,.074,0,.006,.006,.006,"#d8d8d8","m"]]},knife:{muz:[.2,0],ads:.05,parts:[["b",-.02,0,0,.1,.025,.02,"#2d3a1a","p"],["b",.035,0,0,.01,.04,.022,"#3a3a3a","m"],["b",.12,.005,0,.16,.03,.004,"#c8c8c8","m"],["b",.205,.01,0,.02,.016,.004,"#c8c8c8","m",.6]]},pistol:{muz:[.18,.06],ads:.078,model:"pistol",parts:[["b",.06,.055,0,.19,.03,.026,"#3a3a3a","m"],["b",.055,.03,0,.17,.025,.024,"#1e1e1e","p"],["b",-.01,-.02,0,.03,.08,.025,"#1a1a1a","p",-.25],["b",.03,0,0,.04,.006,.01,"#1a1a1a","m"]]},sniper:{muz:[.55,.05],ads:.135,left:[.3,0],model:"sniper",modelMuz:[.89,.025],modelX:.29,parts:[["b",-.2,.02,0,.26,.07,.036,"#4a3a26","w"],["b",.05,.04,0,.26,.05,.034,"#4a3a26","w"],["b",.02,.065,0,.14,.03,.03,"#222","m"],["c",.4,.06,0,.4,.02,0,"#1c1c1c","m"],["c",.03,.11,0,.3,.04,0,"#151515","m"],["c",-.1,.11,0,.06,.05,0,"#151515","m"],["c",.17,.11,0,.07,.055,0,"#151515","m"]]}};for(let n of Object.values(Oh))n.parts.forEach(e=>{e[7]=be(e[7])});function Gg(n,e,t,i,s=1){n.save(),n.translate(t,i),n.scale(s,s);for(let r of rE[e])n.fillStyle=r[4],n.fillRect(r[0],r[1],r[2],r[3]);n.restore()}var Ue={ctx:null,on:!0,noise:null,master:null,dest:null,musicBus:null,last:{}};function Wg(){if(Ue.ctx){Ue.ctx.state==="suspended"&&Ue.ctx.resume();return}try{let r=window.AudioContext||window.webkitAudioContext;if(!r)return;Ue.ctx=new r}catch{return}let n=Ue.ctx;Ue.master=n.createGain(),Ue.master.gain.value=Ue.on?.6:0,Ue.master.connect(n.destination),Ue.dest=Ue.master,Ue.musicBus=n.createGain(),Ue.musicBus.gain.value=0,Ue.musicBus.connect(Ue.master);let e=n.createBuffer(1,n.sampleRate,n.sampleRate),t=e.getChannelData(0);for(let r=0;r<t.length;r++)t[r]=Math.random()*2-1;Ue.noise=e;let i=n.createGain();i.gain.value=.05;let s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=180,s.connect(i),i.connect(Ue.dest||Ue.master),[55,55.7,82.4].forEach(r=>{let o=n.createOscillator();o.type="sawtooth",o.frequency.value=r,o.connect(s),o.start()})}function Yd(n,e,t,i,s){n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(i,e+t),n.gain.exponentialRampToValueAtTime(1e-4,e+t+s)}function yi(n,e,t,i,s=0,r=1){let o=Ue.ctx,a=o.currentTime+s,l=o.createBufferSource();l.buffer=Ue.noise,l.playbackRate.value=.7+Math.random()*.6;let c=o.createBiquadFilter();c.type=e,c.frequency.value=n,c.Q.value=r;let h=o.createGain();Yd(h,a,.003,t,i),l.connect(c),c.connect(h),h.connect(Ue.dest||Ue.master),l.start(a,Math.random()*.5),l.stop(a+i+.05)}function Mn(n,e,t,i,s,r=0){let o=Ue.ctx,a=o.currentTime+r,l=o.createOscillator();l.type=n,l.frequency.setValueAtTime(e,a),l.frequency.exponentialRampToValueAtTime(Math.max(1,t),a+s);let c=o.createGain();Yd(c,a,.004,i,s),l.connect(c),c.connect(Ue.dest||Ue.master),l.start(a),l.stop(a+s+.05)}var Xg={pistol(){yi(2600,"lowpass",.5,.12),Mn("sine",160,40,.6,.12)},rifle(){yi(3200,"lowpass",.45,.09),yi(900,"bandpass",.3,.18,0,.7),Mn("sine",120,35,.5,.1)},shotgun(){yi(1500,"lowpass",.8,.35),Mn("sine",90,30,.9,.25)},knife(){yi(4e3,"highpass",.15,.08)},tink(){Mn("sine",3200+Math.random()*1200,2600,.06,.06,.25+Math.random()*.2)},click(){Mn("square",1400,900,.08,.03),Mn("square",900,600,.08,.03,.08)},impact(){yi(500,"lowpass",.35,.1)},ric(){Mn("sine",2400,900,.05,.12)},groan(){let n=Ue.ctx,e=n.currentTime,t=n.createBiquadFilter();t.type="bandpass",t.frequency.value=450+Math.random()*300,t.Q.value=4;let i=n.createGain();Yd(i,e,.15,.12,.9),t.connect(i),i.connect(Ue.dest||Ue.master);let s=70+Math.random()*40;[0,7].forEach(r=>{let o=n.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(s+r,e),o.frequency.linearRampToValueAtTime(s*.8+r,e+1),o.connect(t),o.start(e),o.stop(e+1.1)})},boom(){yi(600,"lowpass",1,.9),Mn("sine",80,25,1,.7)},blip(){Mn("square",660,880,.08,.06)},pickup(){Mn("square",520,1040,.1,.08),Mn("square",780,1560,.08,.08,.07)},hurt(){Mn("sawtooth",220,110,.2,.15)},splat(){yi(300,"lowpass",.3,.15)},stomp(){Mn("sine",60,30,.35,.12)},step(){yi(220,"lowpass",.3,.07)},shove(){yi(700,"lowpass",.45,.12),Mn("sine",140,60,.4,.1)},alarm(){Mn("square",520,380,.07,.14)}};function dl(n,e){let t=Y,i=n-t.x,s=e-t.z,r=Math.hypot(i,s),o=Math.atan2(s,i)-t.heading;return{pan:Le(Math.sin(o),-1,1)*.9,gain:1/(1+r*.18),behind:Math.cos(o)<-.2,d:r}}function Fi(n,e,t,i=30){if(!Ue.ctx||!Ue.on||!lp())return Wt(n,i);let s=dl(e,t);if(s.gain<.03)return;let r=performance.now();if(Ue.last[n]&&r-Ue.last[n]<i)return;Ue.last[n]=r;let o=Ue.ctx,a=o.createGain(),l=o.createBiquadFilter(),c=o.createStereoPanner?o.createStereoPanner():null;a.gain.value=s.gain,l.type="lowpass",l.frequency.value=s.behind?900:16e3,a.connect(l),c?(c.pan.value=s.pan,l.connect(c),c.connect(Ue.master)):l.connect(Ue.master),Ue.dest=a;try{Xg[n]()}catch{}Ue.dest=Ue.master,setTimeout(()=>{try{a.disconnect()}catch{}},2500)}var As={next:0,step:0},oE=[55,55,65.4,49],Md=n=>84+n*56;function aE(){return Le(Je.length/18+(Se.n-1)*.06+(Se.spec&&Se.spec.horde?.3:0),0,1)}function lE(){if(!Ue.ctx||!Ue.musicBus)return;let n=nt.music&&nt.sound&&ge==="play",e=Ue.ctx,t=e.currentTime;if(Ue.musicBus.gain.setTargetAtTime(n?.45:0,t,.4),!n){As.next=0;return}let i=aE(),s=30/Md(i);for(As.next<t&&(As.next=t+.05),Ue.dest=Ue.musicBus;As.next<t+.12;){let r=As.next-t,o=As.step%8,a=oE[(As.step>>3)%4];(o===0||o===4||i>.7&&o===6)&&Mn("sine",110,40,.7,.18,r),i>.35&&(o===2||o===6)&&yi(1800,"bandpass",.22,.1,r,.8),i>.15&&yi(7e3,"highpass",.06,.03,r),o%2===0&&Mn("triangle",a*(o===4?2:1),a,.22,s*1.6,r),As.next+=s,As.step++}Ue.dest=Ue.master}function Wt(n,e=30){if(!Ue.ctx||!Ue.on)return;let t=performance.now();if(!(Ue.last[n]&&t-Ue.last[n]<e)){Ue.last[n]=t;try{Xg[n]()}catch{}}}var le={keys:{},mx:se*.75,my:150,mouseDown:!1,firePressed:!1,touch:!1,joy:null,look:null,ads:!1,fireTouch:0,holds:{},lookAmt:0,noLock:!1},vl=[];function qg(n){let e=Qi.getBoundingClientRect();return[(n.clientX-e.left)/e.width*se,(n.clientY-e.top)/e.height*pt]}document.addEventListener("pointerdown",n=>{n.pointerType!=="mouse"&&n.preventDefault(),Wg();let[e,t]=qg(n),i=n.pointerType!=="mouse";i&&(le.touch=!0);try{Qi.setPointerCapture(n.pointerId)}catch{}(!i||ge!=="play")&&(le.mx=e,le.my=t);for(let s=vl.length-1;s>=0;s--){let r=vl[s];if(e>=r.x&&e<r.x+r.w&&t>=r.y&&t<r.y+r.h){if(le.uiHit=!0,r.disabled)return;r.hold?(le.holds[n.pointerId]=r.hold,r.hold==="fire"&&le.fireTouch++,r.hold==="ads"&&(le.ads=!0)):(r.fn(),Wt("blip",40));return}}if(ge==="title"){ge="levels";return}if(ge==="place"){let s=$d(e,t);s&&hT(s.x,s.z);return}ge==="play"&&i&&(e<se*.42&&t>110?le.joy={id:n.pointerId,cx:e,cy:t,x:e,y:t}:le.look={id:n.pointerId,x:e,y:t})});document.addEventListener("pointermove",n=>{let[e,t]=qg(n);if(le.joy&&le.joy.id===n.pointerId){le.joy.x=e,le.joy.y=t;return}if(le.look&&le.look.id===n.pointerId){Z0((e-le.look.x)*2.4,(t-le.look.y)*2.4),le.look.x=e,le.look.y=t;return}let i=n.movementX||0,s=n.movementY||0;ge==="play"&&n.pointerType==="mouse"&&Math.abs(i)<150&&Math.abs(s)<150&&Z0(i,s),(n.pointerType==="mouse"||ge!=="play")&&(le.mx=e,le.my=t)});function Yg(n){le.joy&&le.joy.id===n.pointerId&&(le.joy=null),le.look&&le.look.id===n.pointerId&&(le.look=null),le.holds[n.pointerId]==="fire"&&(le.fireTouch=Math.max(0,le.fireTouch-1)),le.holds[n.pointerId]==="ads"&&(le.ads=!1),delete le.holds[n.pointerId],n.pointerType==="mouse"&&(le.mouseDown=!1,le.ads=!1)}document.addEventListener("mousedown",n=>{if(le.uiHit){le.uiHit=!1;return}ge==="play"&&(!document.pointerLockElement&&Qi.requestPointerLock&&(Kg(),!le.noLock)||(n.button===0?(le.mouseDown=!0,le.firePressed=!0):n.button===2&&(le.ads=!0)))});document.addEventListener("mouseup",n=>{n.button===0?le.mouseDown=!1:n.button===2&&(le.ads=!1)});document.addEventListener("pointerup",Yg);document.addEventListener("pointercancel",Yg);document.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("keydown",n=>{if(Wg(),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),n.repeat||(le.keys[n.code]=!0,(n.code==="Escape"&&performance.now()-Zg>300||n.code==="KeyP")&&Wh(),(n.code==="Enter"||n.code==="Space")&&ge==="title"&&(ge="levels"),ge!=="play"))return;n.code==="KeyR"&&Lh(),n.code==="KeyQ"&&Vd(-1),n.code==="KeyE"&&Vd(1),n.code==="KeyG"&&Fx(),n.code==="KeyF"&&op(),n.code==="Space"&&(le.mouseDown=!0,le.firePressed=!0);let e="123456".indexOf(n.key);e>=0&&Vh(Uh[e])});addEventListener("keyup",n=>{le.keys[n.code]=!1,n.code==="Space"&&(le.mouseDown=!1)});addEventListener("blur",()=>{le.keys={},le.mouseDown=!1,le.ads=!1});var Zg=0;function Z0(n,e){if(ge!=="play"||!Y.alive)return;let t=Y,i=nE*nt.sens*Et(1,.5,t.adsT);t.heading+=n*i,t.pitch=Le(t.pitch-e*i,-1.35,1.35),le.lookAmt+=Math.abs(n)+Math.abs(e),t.swayX=Le(t.swayX-n*i*.3,-.08,.08),t.swayY=Le(t.swayY+e*i*.3,-.08,.08)}function Kg(){if(!(le.touch||document.pointerLockElement===Qi||!Qi.requestPointerLock))try{let n=Qi.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement?le.noLock=!1:(Zg=performance.now(),ge==="play"&&(ge="pause"))});document.addEventListener("pointerlockerror",()=>{le.noLock=!0});document.addEventListener("visibilitychange",()=>{document.hidden&&ge==="play"&&Wh()});var si=new Ba({canvas:Vg,antialias:!0,powerPreference:"high-performance"});si.toneMapping=zo;si.toneMappingExposure=.6;si.shadowMap.enabled=!0;si.shadowMap.type=Yc;var jt=new za,ct=new tn(Hg,se/pt,.05,220),yh=new Hc(16777215,4469538,.35);jt.add(yh);var ln=new ko(16777215,3);ln.castShadow=!0;ln.shadow.mapSize.set(2048,2048);ln.shadow.bias=-4e-4;ln.shadow.normalBias=.03;Object.assign(ln.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:140});ln.shadow.camera.updateProjectionMatrix();jt.add(ln,ln.target);var Ki=new C(-.4,.8,.45).normalize(),Ah=new or(16760944,0,10,2);jt.add(Ah);var Rh=new or(16747056,0,18,2);jt.add(Rh);var jg=[0,1,2,3].map(()=>{let n=new or(16777215,0,16,2);return jt.add(n),n}),Wr=new Wo;Wr.scale.setScalar(140);jt.add(Wr);var Jg=new za,Zd=new Wo;Zd.scale.setScalar(100);Jg.add(Zd);var K0=new Lo(si),ll=null,$g=new Bt,Qg=new Float32Array(1500);for(let n=0;n<500;n++){let e=U(0,6.283),t=Math.asin(U(.08,1));Qg.set([Math.cos(e)*Math.cos(t)*120,Math.sin(t)*120,Math.sin(e)*Math.cos(t)*120],n*3)}$g.setAttribute("position",new Gt(Qg,3));var sa=new Uo($g,new Lr({color:14673663,size:1.5,sizeAttenuation:!1,fog:!1}));sa.visible=!1;jt.add(sa);var cE={uniforms:{tDiffuse:{value:null},time:{value:0},slow:{value:0},vig:{value:.38},grain:{value:.035},tint:{value:new C(1,1,1)},ca:{value:.006},blur:{value:0},split:{value:.55},bars:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float time, slow, vig, grain, ca, blur, split, bars; uniform vec3 tint; varying vec2 vUv;
    float rnd(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + time) * 43758.5453); }
    void main() {
      vec2 d = vUv - .5; float r2 = dot(d, d); vec2 off = d * ca * r2 * 4.0;
      vec3 c = vec3(texture2D(tDiffuse, vUv - off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv + off).b);
      if (blur > .0005) { for (int i = 1; i < 6; i++) c += texture2D(tDiffuse, vUv - d * blur * float(i)).rgb; c /= 6.0; }
      c *= tint;
      float l = dot(c, vec3(.299, .587, .114));
      c = mix(c, c * mix(vec3(.86, 1.0, 1.08), vec3(1.1, 1.0, .85), smoothstep(.1, .75, l)), split);
      c = mix(vec3(l), c, 1.1);
      c = mix(c, vec3(l) * vec3(.86, .95, 1.1), slow * .5); // frozen time drains colour
      c *= 1.0 - (vig + slow * .25) * r2 * 2.2;
      c += (rnd(vUv * 731.0) - .5) * grain;
      float bar = .11 * bars; if (vUv.y < bar || vUv.y > 1.0 - bar) c = vec3(0.0);
      gl_FragColor = vec4(c, 1.0);
    }`},os=new sh(si);os.addPass(new rh(jt,ct));var ra=new il(jt,ct,640,360);os.addPass(ra);var Ds=new fh(jt,ct,{focus:8,aperture:.0018,maxblur:.008});Ds.enabled=!1;os.addPass(Ds);var ex=new Go(new ee(640,360),.55,.5,.88);os.addPass(ex);os.addPass(new lh);var Fh=new Vo(cE);os.addPass(Fh);var kh=new ch(1,1,1,2,.14),tx=new Jn(1,1,1),nx=new Ic(.5,1,4,10),hE=new Nc(.5,14,10),ix=new Dc(.5,.5,1,16),sx=new Ss(1,1);function ri(n,e,t,i,s=!1){let r=new Pr(n,e,t);return r.instanceMatrix.setUsage(eh),r.instanceColor=new bs(new Float32Array(t*3),3),r.instanceColor.setUsage(eh),r.castShadow=r.receiveShadow=i,r.frustumCulled=!1,r.count=0,Object.assign(r.userData,{max:t,bill:s,half:n===nx}),jt.add(r),r}var Vs=(n,e=0)=>new $n({roughness:n,metalness:e}),Kd=(()=>{let n=rs(64,64),e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new Es(n);return i.colorSpace=ft,i})(),Hn=ri(kh,Vs(.8),6e3,!0),Vn=ri(nx,Vs(.75),2600,!0),Xr=ri(hE,Vs(.55),3200,!0),Si=ri(kh,Vs(.45,.6),900,!0);Si.material.envMapIntensity=.45;var xl=ri(ix,Vs(.6,.2),300,!0),en=ri(sx,new gn({map:Kd,blending:_s,transparent:!0,depthWrite:!1,fog:!1}),2600,!1,!0),Zo=ri(tx,new gn({blending:_s,transparent:!0,depthWrite:!1,fog:!1}),400,!1),jd=ri(sx,new Fc({map:Kd,transparent:!0,opacity:.5,depthWrite:!1}),1500,!1,!0),qr=ri(kh,Vs(.85),1800,!0),ki=ri(kh,Vs(.38,.55),500,!0),ei=ri(ix,Vs(.6,.3),400,!0),rx=ri(tx,new gn,600,!1),uE=(()=>{let n=new Uc(new qa([[-.3,0],[.3,0],[.3,.08],[.1,.33],[.075,.81],[-.075,.81],[-.1,.33],[-.3,.08]].map(([e,t])=>new ee(e,t))),{depth:1,bevelEnabled:!1});return n.translate(0,0,-.5),n.rotateY(Math.PI/2),n.computeVertexNormals(),n})(),Jd=ri(uE,Vs(.9),400,!0),j0=[Hn,Vn,Xr,Si,xl,en,Zo,jd],_l=[qr,ki,ei,rx,Jd],fE=ra.render.bind(ra),dE=()=>[en,Zo,jd,Wr,sa,ga],ox=(n,e)=>(...t)=>{let i=dE(),s=i.map(r=>r.visible);i.forEach(r=>{r.visible=!1}),e(...t),i.forEach((r,o)=>{r.visible=s[o]})};ra.render=ox(ra,fE);Ds.render=ox(Ds,Ds.render.bind(Ds));var pE=(()=>{let n=rs(64,64),e=n.getContext("2d");e.strokeStyle="rgba(255,255,255,.45)",e.lineWidth=2,e.beginPath();for(let i=0;i<7;i++){let s=i/6*6.283;e.lineTo(32+Math.cos(s)*26,32+Math.sin(s)*26)}e.stroke(),e.fillStyle="rgba(255,255,255,.12)",e.fill();let t=new Es(n);return t.colorSpace=ft,t})(),ma=new al;ma.addElement(new Nr(Kd,280,0,new pe(.8,.62,.45)));for(let[n,e,t]of[[40,.45,[.35,1,.7]],[70,.62,[.3,.9,.8]],[28,.78,[.9,.7,.4]],[90,.95,[.25,.8,.7]]])ma.addElement(new Nr(pE,n,e,new pe(...t).multiplyScalar(.35)));jt.add(ma);var Zt=new dt,ax=new dt().setFromAxisAngle(new C(1,0,0),Math.PI/2),J0=new Be,$0=new C,Q0=new C,oa=new dt,eg=new dt;function Me(n,e,t,i,s,r,o,a,l=Zt,c=1){let h=n.count,f=n.userData;h>=f.max||($0.set(e,t,i),Q0.set(s,f.half?r/2:r,o),J0.compose($0,f.bill?ct.quaternion:l,Q0),n.setMatrixAt(h,J0),n.instanceColor.setXYZ(h,a.r*c,a.g*c,a.b*c),n.count=h+1)}var Di=new C,_i=new C,tg=new C,ng=new Be;function yl(n,e,t,i,s,r){Di.set(n,e,t);let o=Di.length()||1e-5;return Di.multiplyScalar(1/o),_i.set(i,s,r),_i.addScaledVector(Di,-_i.dot(Di)),_i.lengthSq()<1e-8&&(_i.set(Di.y,-Di.x,0),_i.lengthSq()<1e-8&&_i.set(1,0,0),_i.addScaledVector(Di,-_i.dot(Di))),_i.normalize(),tg.crossVectors(_i,Di),ng.makeBasis(_i,Di,tg),oa.setFromRotationMatrix(ng),o}function Fr(n,e,t,i,s,r,o,a,l=0,c=1){let h=e[t*3],f=e[t*3+1],u=e[t*3+2],d=e[i*3],g=e[i*3+1],x=e[i*3+2],m=yl(d-h,g-f,x-u,a.x,a.y,a.z);Me(n,(h+d)/2,(f+g)/2,(u+x)/2,s,m+l,r,o,oa,c)}function kr(n,e,t,i,s,r,o,a,l,c=1){let h=yl(s-e,r-t,o-i,0,0,1);Me(n,(e+s)/2,(t+r)/2,(i+o)/2,a,h,a,l,oa,c)}var ig=new Xc,sg=new ee;function lx(n,e){return sg.set(n/se*2-1,-(e/pt*2-1)),ig.setFromCamera(sg,ct),ig.ray}function $d(n,e){let t=lx(n,e);if(t.direction.y>-1e-4)return null;let i=-t.origin.y/t.direction.y;return{x:t.origin.x+t.direction.x*i,z:t.origin.z+t.direction.z*i}}var cl=new C;function mE(n,e,t){let i=cl.set(n,e,t).applyMatrix4(ct.matrixWorldInverse).z<-.05;return cl.set(n,e,t).project(ct),[(cl.x+1)/2*se,(1-cl.y)/2*pt,i?cl.z:2]}var cx=rs(Tl,wl),ji=cx.getContext("2d"),Al=new Es(cx);Al.generateMipmaps=!1;Al.minFilter=Nt;Al.colorSpace=ft;var ga=new gt(new Ss(rn,Vr),new $n({map:Al,roughness:.3,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));ga.rotation.x=-Math.PI/2;ga.position.set(Oi+rn/2,.004,na+Vr/2);ga.receiveShadow=!0;ga.renderOrder=1;jt.add(ga);var aa=!1,hx=0,ux=Tl/rn,fx=wl/Vr;function Br(n,e,t,i,s){ji.fillStyle=s,ji.fillRect((n-Oi)*ux|0,(e-na)*fx|0,t,i),aa=!0}function Bh(n,e,t){for(let i=0;i<t*t*900+20;i++){let s=U(0,6.283),r=Math.sqrt(Math.random())*t;Br(n+Math.cos(s)*r,e+Math.sin(s)*r,U(1,3)|0,1,Lt(da))}}function gE(){ji.globalCompositeOperation="destination-out",ji.fillStyle="rgba(0,0,0,.55)",ji.fillRect(0,0,Tl,wl),ji.globalCompositeOperation="source-over",aa=!0}var Zi=new hi;jt.add(Zi);var Os=[],xE=["#6a3020","#3e4c5a","#7a6a40","#3a4a3a","#5a2a2a","#8a8a86"].map(n=>new pe(n)),dx=4,vE=-12,Qd=Math.ceil((Ht+24)/dx)+1,rg=1.6,Sd=Array.from({length:Qd},()=>[]),bd=n=>Le(Math.floor((n-vE)/dx),0,Qd-1);function Ed(){Sd=Array.from({length:Qd},()=>[]);for(let n of Os)for(let e=bd(n.x0-rg);e<=bd(n.x1+rg);e++)Sd[e].push(n)}var px=n=>Sd[bd(n)],_E=new dt().setFromAxisAngle(new C(0,1,0),Math.PI/2),yE=new dt().setFromAxisAngle(new C(0,0,1),Math.PI/2);function ME(n){Os=[];let e=(s,r,o,a,l,c,h)=>{Os.push({x0:s-o/2,x1:s+o/2,z0:r-a/2,z1:r+a/2,h:l,kind:c,x:s,z:r,w:o,d:a,along:h}),Ed()},t=Ht*.3,i=(s,r,o)=>Math.hypot(s-t,r)>5&&Math.hypot(s-Gr,r)>4.5&&r>hn+o&&r<_n-o&&!Qr(s,r,o);n.obj==="protect"&&e(Gr,-1.75,4.4,1.9,2.1,"truck");for(let s=0;s<Ht*.6;s++){let r=U(1.5,Ht-1.5),o=U(hn+1,_n-1),a=Math.random(),l=Math.random()<.7;if(a<.3)i(r,o,1.3)&&e(r,o,l?4.4:1.8,l?1.8:4.4,1.4,"car",l);else if(a<.6)for(let c=0,h=1+(Math.random()*3|0);c<h;c++){let f=l?r+c*1.62:r,u=l?o:o+c*1.62;i(f,u,.4)&&e(f,u,l?1.6:.66,l?.66:1.6,.85,"jersey",l)}else if(a<.8)i(r,o,.7)&&e(r,o,l?1.15:.57,l?.57:1.15,Math.random()<.4?.96:.48,"crate",l);else for(let c=0,h=1+(Math.random()*3|0);c<h;c++){let f=r+(c&1)*.72,u=o+(c>>1)*.72;i(f,u,.4)&&e(f,u,.7,.7,.93,"barrel",!0)}}mx()}var SE=be("#d8d4cc"),bE=be("#161616"),_2=be("#8a8a8a"),EE=be("#1c242c"),TE=be("#9a968c"),y2=be("#8e8c86"),wE=be("#7a5a36"),AE=be("#4a3220"),M2=be("#5a3a22"),RE=be("#3e4a3a"),og=be("#2a3328"),Td=null;function mx(){Td=_l.map(e=>e.count);let n=Bi.ready;if(n)for(let e of Tg)for(let t of zi[e])t.count=0;for(let e of Os){if(n&&XE(e))continue;let t=e.along?Zt:_E,i=(o,a)=>e.along?[e.x+o,e.z+a]:[e.x+a,e.z+o],s=Math.max(e.w,e.d),r=Math.min(e.w,e.d);if(e.kind==="car"){let o=Lt(xE),[a,l]=i(0,0);Me(ki,a,.58,l,s,.52,r,o,t),[a,l]=i(-.25,0),Me(ki,a,1.08,l,s*.52,.5,r*.9,o,t),Me(ki,a,1.08,l,s*.5,.36,r*.92,EE,t);for(let c of[-1,1])[a,l]=i(c*s/2,0),Me(ki,a,.5,l,.1,.18,r*.96,TE,t);for(let c of[-1,1])for(let h of[-1,1])[a,l]=i(c*s*.31,h*r*.47),Me(ei,a,.3,l,.6,.24,.6,bE,e.along?ax:yE)}else e.kind==="jersey"?Me(Jd,e.x,0,e.z,1.6,e.h/.81,1.1,SE,t):e.kind==="crate"?(Me(qr,e.x,e.h/2,e.z,e.w,e.h,e.d,wE),Me(qr,e.x,e.h/2,e.z,e.w+.03,.06,e.d+.03,AE)):e.kind==="barrel"&&(Me(ei,e.x,.465,e.z,.62,.93,.62,RE),Me(ei,e.x,.3,e.z,.64,.05,.64,og),Me(ei,e.x,.62,e.z,.64,.05,.64,og))}if(n)for(let e of Tg)for(let t of zi[e])t.instanceMatrix.needsUpdate=!0}function Qr(n,e,t){for(let i of px(n))if(n>i.x0-t&&n<i.x1+t&&e>i.z0-t&&e<i.z1+t)return i;return null}function Ml(n,e){for(let t of px(n.x)){let i=n.x-Le(n.x,t.x0,t.x1),s=n.z-Le(n.z,t.z0,t.z1),r=i*i+s*s;if(r>=e*e)continue;if(r>1e-8){let f=Math.sqrt(r),u=(e-f)/f;n.x+=i*u,n.z+=s*u;continue}let o=n.x-t.x0,a=t.x1-n.x,l=n.z-t.z0,c=t.z1-n.z,h=Math.min(o,a,l,c);h===o?n.x=t.x0-e:h===a?n.x=t.x1+e:h===l?n.z=t.z0-e:n.z=t.z1+e}}function Sl(n,e,t,i,s,r){let o=1e9;for(let a of Os){let l=0,c=1e9;for(let[h,f,u,d]of[[n,i,a.x0,a.x1],[e,s,0,a.h],[t,r,a.z0,a.z1]]){if(Math.abs(f)<1e-9){if(h<u||h>d){l=1e9;break}continue}let g=(u-h)/f,x=(d-h)/f;if(g>x&&([g,x]=[x,g]),l=Math.max(l,g),c=Math.min(c,x),l>c){l=1e9;break}}l<o&&(o=l)}return o}var wd=[],Ko={road:null,walls:[]};function qo(n,e,t,i,s=!0,r=1){let o=ti.tex&&ti.tex[n];if(!o)return!1;let a=l=>{let c=o[l].clone();return c.repeat.set(e,t),c.needsUpdate=!0,c};return s&&(i.map=a("diff")),i.normalMap=a("nor"),i.normalScale.setScalar(r),i.roughnessMap=a("rough"),i.roughness=1,i.needsUpdate=!0,!0}function gx(n){Ko.road&&qo("asphalt",rn/3.5,Vr/3.5,Ko.road.material)&&Ko.road.material.color.copy(Sn(Nh([255,255,255],n.pal.road,.25)));for(let e of Ko.walls)qo("concrete",rn/2.4,1,e.material,!1,.8);qo("carmetal",1,1,ki.material),qo("concrete",1.2,1.2,Jd.material,!0,.9),qo("barrel",1,1,ei.material,!1),qo("concrete",1,1,qr.material,!1,.6)}function ag(n,e,t,i){let s=rs(e,t),r=s.getContext("2d");n(r,e,t);let o=new Es(s);return o.colorSpace=ft,o.wrapS=pn,o.repeat.set(i,1),o.anisotropy=8,o}function lg(n,e,t,i,s,r=2){let o=rs(n,e),a=o.getContext("2d");t(a,n,e);let l=a.getImageData(0,0,n,e).data,c=rs(n,e),h=c.getContext("2d"),f=h.createImageData(n,e),u=f.data,d=(x,m)=>{let p=((m+e)%e*n+(x+n)%n)*4;return(l[p]+l[p+1]+l[p+2])/765};for(let x=0;x<e;x++)for(let m=0;m<n;m++){let p=(d(m+1,x)-d(m-1,x))*r,_=(d(m,x+1)-d(m,x-1))*r,v=Math.hypot(p,_,1),M=(x*n+m)*4;u[M]=(-p/v*.5+.5)*255,u[M+1]=(_/v*.5+.5)*255,u[M+2]=(1/v*.5+.5)*255,u[M+3]=255}h.putImageData(f,0,0);let g=(x,m)=>{let p=new Es(x);return p.wrapS=p.wrapT=pn,p.repeat.set(i,s),p.anisotropy=8,m&&(p.colorSpace=ft),p};return{map:g(o,!0),normalMap:g(c,!1)}}function Ad(n,e,t,i,s,r,o,a){for(let l=0;l<s;l++){let c=U(r,o),h=U(-1,1);n.fillStyle=h>0?`rgba(255,255,255,${a*h})`:`rgba(0,0,0,${-a*h})`,n.beginPath(),n.ellipse(U(0,e),U(0,t),c,c*U(.4,1),U(0,3),0,6.283),n.fill()}n.fillStyle=Cs(i),n.globalCompositeOperation="destination-over",n.fillRect(0,0,e,t),n.globalCompositeOperation="source-over"}var cg=[{el:34,az:200,turb:7,ray:1.6,exp:.55,hdrExp:.65,fog:.009,tint:[1,1,1]},{el:3,az:255,turb:9,ray:3,exp:.62,hdrExp:.6,fog:.013,tint:[1.06,.98,.9]},{el:-7,az:220,turb:2,ray:.6,exp:.9,hdrExp:1.4,fog:.03,tint:[.9,.96,1.1]},{el:7,az:160,turb:18,ray:4,exp:.55,hdrExp:.6,fog:.028,tint:[1.12,.9,.86]},{el:20,az:210,turb:20,ray:2.2,exp:.55,hdrExp:.6,fog:.018,tint:[.96,1.05,.88]}];function xx(n,e,t){let i=(n-.5)*2*Math.PI,s=(e-.5)*Math.PI;return t.set(Math.cos(s)*Math.cos(i),Math.sin(s),Math.cos(s)*Math.sin(i))}function CE(n){let{data:e,width:t,height:i}=n.image,s=n.type===Ft,r=h=>s?Dr.fromHalfFloat(e[h]):e[h],o=0,a=-1;for(let h=0;h<i;h+=2)for(let f=0;f<t;f+=2){let u=(h*t+f)*4,d=r(u)+r(u+1)+r(u+2);d>o&&(o=d,a=h*t+f)}if(o<30)return null;let l=a%t,c=a/t|0;return xx((l+.5)/t,n.flipY?1-(c+.5)/i:(c+.5)/i,new C)}function vx(n){let e=n.pal,t=n.dark,i=ii.indexOf(n),s=cg[i]||cg[0],r=ti.hdr[Id[i]];if(Ki.setFromSphericalCoords(1,$a.degToRad(90-s.el),$a.degToRad(s.az)),ll&&ll.dispose(),r)jt.background=r,Wr.visible=!1,sa.visible=!1,ll=K0.fromEquirectangular(r),si.toneMappingExposure=s.hdrExp,r.userData.sun&&s.el>=0&&Ki.copy(r.userData.sun);else{for(let a of[Wr,Zd]){let l=a.material.uniforms;l.turbidity.value=s.turb,l.rayleigh.value=s.ray,l.mieCoefficient.value=.005,l.mieDirectionalG.value=.8,l.sunPosition.value.copy(Ki)}jt.background=null,Wr.visible=!0,sa.visible=s.el<0,ll=K0.fromScene(Jg,0,.1,200),si.toneMappingExposure=s.exp}jt.environment=ll.texture,Fh.uniforms.tint.value.set(...s.tint);let o=s.el<0;o&&Ki.set(.35,.75,.55).normalize(),jt.fog=new bc(Sn(o?[14,18,30]:Nh(e.fog,[120,124,130],.4)),s.fog),yh.color.copy(Sn(e.skyT)),yh.groundColor.copy(Sn(e.road,.5)),yh.intensity=o?.25:.35,ln.color.copy(o?Sn([150,170,220]):s.el<10?Sn([255,170,110]):Sn([255,246,232])),ln.intensity=o?.45:s.el<10?2.4:3.2;for(let a of jg)a.color.copy(Sn(e.light)),a.intensity=t>0?25+t*70:0;ma.visible=!o&&Ki.y>.02}var hg=(()=>{let n=rs(256,256),e=rs(256,256),t=n.getContext("2d"),i=e.getContext("2d");t.fillStyle="#8a857c",t.fillRect(0,0,256,256),Ad(t,256,256,[138,133,124],260,2,30,.08),i.fillStyle="#000",i.fillRect(0,0,256,256);for(let r=0;r<4;r++)for(let o=0;o<4;o++){let a=o*64+12,l=r*64+14,c=40,h=36,f=Math.random();t.fillStyle=f<.12?"#5a4632":f<.2?"#0a0a0a":`rgb(${30+U(0,25)},${36+U(0,25)},${44+U(0,30)})`,t.fillRect(a,l,c,h),t.fillStyle="rgba(255,255,255,.12)",t.fillRect(a,l,c,3),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(a-2,l+h,c+4,4),t.fillStyle="rgba(30,26,22,.6)",t.fillRect(a+c/2-1,l,2,h),f>.2&&Math.random()<.3&&(i.fillStyle=`rgb(255,${190+U(0,40)},${110+U(0,50)})`,i.fillRect(a+2,l+2,c-4,h-4));for(let u=0;u<3;u++)t.fillStyle="rgba(20,16,12,.15)",t.fillRect(a+U(0,c),l+h,U(2,5),U(10,40))}let s=(r,o)=>{let a=new Es(r);return a.wrapS=a.wrapT=pn,a.anisotropy=8,o&&(a.colorSpace=ft),a};return{map:s(n,!0),emissiveMap:s(e,!0)}})();function PE(n){let e=[],t=Sn(Nh(n.pal.wall,[150,146,140],.6));for(let s of[-1,1])for(let r of[0,1])for(let o=-40;o<Ht+40;){let a=U(8,18),l=U(8,14),c=r?U(14,42):U(7,22),h=s*(Math.abs(vn)+4+r*16+l/2+U(0,3)),f=new Jn(a,c,l),u=f.attributes.uv;for(let d=0;d<6;d++){let g=d<2?l:a,x=d===2||d===3?l:c;for(let m=d*4;m<d*4+4;m++)u.setXY(m,u.getX(m)*g/12,u.getY(m)*x/12.8)}f.translate(o+a/2,c/2,h),e.push(f),o+=a+U(.5,4)}let i=new gt(zf(e),new $n({map:hg.map,emissiveMap:hg.emissiveMap,emissive:new pe(1,1,1),emissiveIntensity:n.dark>.2?1.6:0,color:t,roughness:.85}));e.forEach(s=>s.dispose()),i.castShadow=i.receiveShadow=!0,i.userData.keepMaps=!0,Zi.add(i)}function _x(n){for(let b of[...Zi.children]){if(Zi.remove(b),b.geometry.dispose(),!b.userData.keepMaps)for(let T of["map","normalMap"])b.material[T]&&b.material[T].dispose();b.material.dispose()}let e=n.pal,t=n.dark;vx(n);let i=(b,T,w,P,y,E=0,D=.9)=>{let B=new gt(b,new $n({...T,roughness:D}));return B.position.set(w,P,y),B.rotation.x=E,B.receiveShadow=!0,Zi.add(B),B},s=Nh(e.road,[70,70,72],.55);i(new Ss(rn,Vr),lg(1024,640,(b,T,w)=>{Ad(b,T,w,s,900,2,40,.07);for(let P=0;P<9e3;P++)b.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},${U(.05,.2)})`,b.fillRect(U(0,T),U(0,w),1.5,1.5);for(let P of[-9.2,-5.5,-1.8,1.8,5.5,9.2]){let y=(P-na)/Vr*w;b.fillStyle="rgba(0,0,0,.1)",b.fillRect(0,y-6,T,12)}b.strokeStyle="rgba(15,12,10,.6)",b.lineWidth=1.5;for(let P=0;P<26;P++){let y=U(0,T),E=U(0,w);b.beginPath(),b.moveTo(y,E);for(let D=0;D<8;D++)y+=U(-22,22),E+=U(-22,22),b.lineTo(y,E);b.stroke()}for(let P=0;P<8;P++)b.fillStyle=`rgba(10,8,8,${U(.15,.35)})`,b.beginPath(),b.ellipse(U(0,T),U(0,w),U(10,40),U(6,20),U(0,3),0,6.283),b.fill()},rn/12,1,3),Oi+rn/2,0,na+Vr/2,-Math.PI/2,.92),Ko.road=Zi.children[Zi.children.length-1];let r=(b,T)=>new $n({map:ag((w,P,y)=>{for(let E=0;E<P;E+=T?256:P){w.fillStyle=b,w.fillRect(E,0,T?128:P,y);for(let D=0;D<40;D++)w.clearRect(E+U(0,T?128:P),U(0,y),U(1,4),U(1,3))}},512,8,rn/6),transparent:!0,roughness:.6,depthWrite:!1}),o=r("rgba(225,215,185,.75)",!0),a=r("rgba(220,170,40,.8)",!1);for(let[b,T]of[[-7.33,o],[-3.66,o],[3.66,o],[7.33,o],[-.12,a],[.12,a]]){let w=new gt(new Ss(rn,.13),T);w.rotation.x=-Math.PI/2,w.position.set(Oi+rn/2,.003,b),w.receiveShadow=!0,Zi.add(w)}let l=lg(256,280,(b,T,w)=>{Ad(b,T,w,e.wall,500,2,34,.07);for(let P=0;P<40;P++)b.fillStyle=`rgba(20,18,16,${U(.04,.12)})`,b.fillRect(U(0,T),U(0,w*.4),U(2,6),U(30,160));b.fillStyle="rgba(0,0,0,.65)",b.fillRect(T-5,0,5,w),b.fillStyle="rgba(255,255,255,.08)",b.fillRect(0,0,T,6);for(let P of[24,T-30])for(let y of[20,w-24])b.fillStyle="rgba(40,36,32,.8)",b.beginPath(),b.arc(P,y,3,0,6.283),b.fill()},rn/2.4,1,2.5),c=i(new Jn(rn,2.6,.5),l,Oi+rn/2,1.3,vn-.25,0,.88);c.castShadow=!0;let h=c.clone();h.material=c.material.clone(),h.position.z=En+.25,Zi.add(h),Ko.walls=[c,h];let f=new $n({map:ag((b,T,w)=>{b.fillStyle=Cs(e.stripeB),b.fillRect(0,0,T,w);for(let P=-w;P<T;P+=36)b.fillStyle=Cs(e.stripeA),b.beginPath(),b.moveTo(P,w),b.lineTo(P+18,w),b.lineTo(P+18+w,0),b.lineTo(P+w,0),b.fill();for(let P=0;P<140;P++)b.clearRect(U(0,T),Math.random()<.5?U(0,6):U(w-6,w),U(2,9),U(2,5));for(let P=0;P<50;P++)b.clearRect(U(0,T),U(0,w),U(1,5),U(1,4))},256,46,rn/2.4),alphaTest:.5,roughness:.75});for(let[b,T]of[[vn+.006,0],[En-.006,Math.PI]]){let w=new gt(new Ss(rn,.44),f);w.position.set(Oi+rn/2,1.9,b),w.rotation.y=T,w.receiveShadow=!0,Zi.add(w)}for(let b of _l)b.count=0;let u=Sn(e.post),d=be("#2e3034"),g=Sn(e.light,3);for(let b=Oi+2.4-.1;b<Oi+rn;b+=2.4)Me(ki,b,1.86,vn+.04,.14,.6,.1,u),Me(ki,b,1.86,En-.04,.14,.6,.1,u);wd=[];for(let b of[-1,1])for(let T=b<0?3:11;T<Ht;T+=16){let w=b<0?vn+.35:En-.35,P=-b;wd.push({x:T,z:w+P*.9}),Me(ei,T,2.6,w,.14,5.2,.14,d),Me(ki,T,5.15,w+P*.55,.1,.1,1.2,d),Me(ki,T,5.1,w+P*1.1,.26,.1,.44,d),Me(rx,T,5.04,w+P*1.1,.2,.03,.36,g)}let x=be("#3e4a3a"),m=be("#2a3328"),p=be("#d0601c"),_=be("#e8e8e8"),v=be("#8a8a86"),M=be("#161616");for(let b=0;b<110;b++){let T=U(-9,Ht+9),w=Math.random()<.5?U(vn+.45,vn+.9):U(En-.9,En-.45),P=Math.random();if(P<.35)Me(ei,T,.44,w,.58,.88,.58,x),Me(ei,T,.3,w,.6,.05,.6,m),Me(ei,T,.62,w,.6,.05,.6,m);else if(P<.6){for(let y=0;y<4;y++)Me(ei,T,.07+y*.15,w,.4-y*.09,.15,.4-y*.09,y===2?_:p);Me(qr,T,.02,w,.5,.04,.5,p)}else P<.8?Me(qr,T,.26,w,1.2,.52,.62,v):Me(ei,T,.14,w,.66,.28,.66,M)}PE(n),gx(n),n.obj==="hold"&&(Me(qr,Gr,.25,0,.6,.5,.6,be("#4a5a3a")),Me(ei,Gr,1.4,0,.06,2.2,.06,d),Me(ki,Gr+.15,2.3,0,.32,.04,.32,be("#9a9a9a"))),ME(n);for(let b of _l)b.instanceMatrix.needsUpdate=!0,b.instanceColor.needsUpdate=!0}var pr=0,bi=1,Fs=2,es=3,zs=4,ks=5,ts=6,mr=7,Wn=8,Zr=9,Bs=10,la=11,Kr=12,ns=13,jr=14,LE=[[0,1],[1,2],[1,3],[1,6],[3,6],[3,2],[6,2],[2,9],[2,12],[9,12],[9,3],[12,6],[3,12],[6,9],[3,4],[4,5],[6,7],[7,8],[9,10],[10,11],[12,13],[13,14],[0,3],[0,6]],ug=[[0,0],[1,2],[9,10],[10,11],[12,13],[13,14],[3,4],[4,5],[6,7],[7,8]],IE=[[0,0,0,4.6,!0],[1,2,.15,4.6],[1,2,.5,4.8],[1,2,.85,4.6],[3,6,.5,4.4],[9,10,.5,3.2],[10,10,0,3],[10,11,.5,3],[12,13,.5,3.2],[13,13,0,3],[13,14,.5,3],[4,4,0,2.8,!1,-1],[5,5,0,2.8,!1,-1],[7,7,0,2.8,!1,1],[8,8,0,2.8,!1,1]],yx={},Mx=0,Sx=0,bx=0,Rd=1,Cd=0,Mh=pa;function DE(n,e,t,i,s=0){Mx=n,Sx=s,bx=e,Rd=Math.cos(t),Cd=Math.sin(t),Mh=i}function Mt(n,e,t,i,s){n[e*3]=Mx+(Rd*t-Cd*s)*Mh,n[e*3+1]=Sx+i*Mh,n[e*3+2]=bx+(Cd*t+Rd*s)*Mh}function dr(n){let e=n.P,t=n.phase,i=n.lunge;if(DE(n.x,n.z,n.heading,n.s*pa,-Math.max(0,n.rise||0)/1.2*1.9*n.s),n.type==="crawler"){let _=Math.sin(t),v=Math.abs(_);Mt(e,Fs,-13,4,0),Mt(e,Zr,-13,4,-3),Mt(e,Kr,-13,4,3),Mt(e,bi,2,8+v,0),Mt(e,es,2,7.5+v,-4.5),Mt(e,ts,2,7.5+v,4.5),Mt(e,pr,6.5,10+v,0),Mt(e,Bs,-22,2,-3.5),Mt(e,la,-30,1,-3.5),Mt(e,ns,-21,3,3.5),Mt(e,jr,-29,2,3.5),Mt(e,ks,9+_*4+i*4,1,-5),Mt(e,Wn,9-_*4+i*4,1,5),Mt(e,zs,4+_*2,8,-6),Mt(e,mr,4-_*2,7,6);return}let s=n.type==="runner",r=(s?6:2.5)+i*4,o=Math.sin(t),a=Math.cos(t),l=Math.abs(a)*1.4+(n.limp?Math.max(0,o)*2.2:0),c=s?7:5,h=22-l*.4;Mt(e,Fs,0,h,0),Mt(e,Zr,0,h-1,-3),Mt(e,Kr,0,h-1,3);let f=r+(n.limp?o*1.5:0)-(n.flinch>0?4:0),u=40-l-(s?2:0),d=u-1.5;Mt(e,bi,f,u,0),Mt(e,es,f,d,-4.5),Mt(e,ts,f,d,4.5);let g=n.tilt+Math.sin(Ud*6+n.seed)*.05;Mt(e,pr,f+1.5+r*.25-(n.flinch>0?2:0),u+5.2-Math.abs(g)*1.5,g*8);let x=n.limp?.3:1;Mt(e,Bs,o*c*.6*x+2-(n.limp?2:0),11,-3.2),Mt(e,la,o*c*x-(n.limp?4:0),n.limp?0:Math.max(0,a)*3,-3.4),Mt(e,ns,-o*c*.6+2,11,3.2),Mt(e,jr,-o*c,Math.max(0,-a)*3,3.4);let m=(n.type==="brute"?11:13)+i*7,p=(_,v,M,b,T)=>{let w,P,y;n.dangle===_?(w=f+1+Math.sin(t*.5+_)*1.5,P=d-15,y=_*5.5):s&&i===0?(w=f+Math.sin(t+b)*7,P=d-12,y=_*5.5):n.type==="gunner"?(w=f+15+i*2,P=d-1.5,y=_*.8+1):(w=f+m,P=d-T-Math.sin(t*.7+b)*1.5,y=_*3.5),Mt(e,M,w,P,y),Mt(e,v,(f+w)/2,(d+P)/2-2.5,_*5.5)};p(-1,zs,ks,0,1),p(1,mr,Wn,Math.PI,3)}var UE=0;function Pd(n,e,t,i,s){let r=Float32Array.from(n.P),o=new Float32Array(45),a=1.8*n.s;for(let c=0;c<15;c++){let h=.6+Math.random()*.8,f=Le(r[c*3+1]/a,0,1.3),u=.5+f*.7;o[c*3]=r[c*3]-e*h*u*pl,o[c*3+1]=r[c*3+1]-(t*h+Math.random()*.4)*pl,o[c*3+2]=r[c*3+2]-i*h*u*pl}let l=LE.map(([c,h])=>[c,h,Math.hypot(r[h*3]-r[c*3],r[h*3+1]-r[c*3+1],r[h*3+2]-r[c*3+2])]);return{id:UE++,dtp:pl,P:r,O:o,sticks:l,s:n.s,col:n.col,colB:n.colB,gore:n.gore||[],cut:{},missing:n.missing||0,kind:s,type:n.type,still:0,age:0,spurts:[],sleep:!1,sink:0,x:n.x,z:n.z,heading:n.heading}}function Ld(n,e,t){let i=n.P,s=n.O,r=De.gravity*e*e,o=e/(n.dtp||e)*Math.pow(.995,e/ni),a=Math.pow(.5,e/ni),l=0;n.dtp=e;for(let c=0;c<15;c++){let h=c*3,f=c===pr?.11*n.s:.05,u=(i[h]-s[h])*o,d=(i[h+1]-s[h+1])*o,g=(i[h+2]-s[h+2])*o;s[h]=i[h],s[h+1]=i[h+1],s[h+2]=i[h+2],i[h]+=u,i[h+1]+=d-r,i[h+2]+=g,l=Math.max(l,Math.abs(u)+Math.abs(d)+Math.abs(g)),i[h+1]<f&&(i[h+1]=f,s[h]=i[h]-u*a,s[h+2]=i[h+2]-g*a,s[h+1]=f+d*.2),i[h+2]<vn+.08?i[h+2]=vn+.08:i[h+2]>En-.08&&(i[h+2]=En-.08);let x=Qr(i[h],i[h+2],0);if(x&&i[h+1]<x.h+f)if(s[h+1]>=x.h-.05||i[h+1]>x.h-.3)i[h+1]=x.h+f,s[h]=i[h]-u*.5,s[h+2]=i[h+2]-g*.5;else{let m={x:i[h],z:i[h+2]};Ml(m,.02),i[h]=m.x,i[h+2]=m.z}}for(let c=0;c<6;c++){for(let h of n.sticks){let f=h[0]*3,u=h[1]*3,d=i[u]-i[f],g=i[u+1]-i[f+1],x=i[u+2]-i[f+2],m=Math.hypot(d,g,x)||1e-5,p=(m-h[2])/m*.5;d*=p,g*=p,x*=p,i[f]+=d,i[f+1]+=g,i[f+2]+=x,i[u]-=d,i[u+1]-=g,i[u+2]-=x}for(let h=0;h<15;h++){let f=h===pr?.11*n.s:.05;i[h*3+1]<f&&(i[h*3+1]=f)}}if(t){for(let c of t)if(!(c===n||c.id>n.id||Math.abs(c.P[6]-i[6])>2||Math.abs(c.P[8]-i[8])>2))for(let h=0;h<15;h++)for(let f=0;f<15;f++){let u=h*3,d=f*3,g=i[u]-c.P[d],x=i[u+1]-c.P[d+1],m=i[u+2]-c.P[d+2],p=g*g+x*x+m*m;if(p<.04&&p>1e-8){let _=Math.sqrt(p),v=(.2-_)/_;i[u]+=g*v*.25,i[u+1]+=Math.max(x*v,.006),i[u+2]+=m*v*.25,s[u]+=(i[u]-s[u])*.6,s[u+2]+=(i[u+2]-s[u+2])*.6}}}return n.x=i[6],n.z=i[8],l*ni/e}function Sh(n,e,t){n.sticks=n.sticks.filter(i=>!(i[0]===e&&i[1]===t)),n.cut[e+"-"+t]=1}function fg(n,e,t){Sh(n,0,1),Sh(n,0,3),Sh(n,0,6),n.O[0]=n.P[0]-e*3*n.dtp,n.O[1]=n.P[1]-3.5*n.dtp,n.O[2]=n.P[2]-t*3*n.dtp,n.spurts.push({i:bi,t:1.6},{i:pr,t:.7})}function dg(n){let[e,t]=Lt([[es,zs],[ts,mr],[Zr,Bs],[Kr,ns]]);if(!(n.cut[e+"-"+t]||n.missing===-1&&e===es||n.missing===1&&e===ts)){Sh(n,e,t),n.spurts.push({i:e,t:1.2},{i:t,t:.7});for(let i=0;i<6;i++)It(ut.CHUNK,n.P[e*3],n.P[e*3+1],n.P[e*3+2],U(-2.5,2.5),U(1,4),U(-2.5,2.5),Lt(YE),"#7a1414",.06,3)}}var ti={hdr:{},done:!1,failed:!1,progress:0},pg=["asphalt","concrete","carmetal","barrel","wood"],Id=["quarry_01_1k.hdr","venice_sunset_1k.hdr","moonless_golf_1k.hdr","blouberg_sunrise_2_1k.hdr","pedestrian_overpass_1k.hdr"],ca={ready:!1,tpl:{},pool:{soldier:[],michelle:[]}},NE={hips:"Hips",spine:"Spine",spine1:"Spine1",spine2:"Spine2",neck:"Neck",head:"Head",lArm:"LeftArm",lFore:"LeftForeArm",lHand:"LeftHand",rArm:"RightArm",rFore:"RightForeArm",rHand:"RightHand",lUp:"LeftUpLeg",lLeg:"LeftLeg",lFoot:"LeftFoot",rUp:"RightUpLeg",rLeg:"RightLeg",rFoot:"RightFoot"},mg={spine:"spine1",spine1:"spine2",spine2:"neck",neck:"head",lArm:"lFore",lFore:"lHand",rArm:"rFore",rFore:"rHand",lUp:"lLeg",lLeg:"lFoot",rUp:"rLeg",rLeg:"rFoot"},OE=[["spine",Fs,bi],["spine1",Fs,bi],["spine2",Fs,bi],["neck",bi,pr],["head",bi,pr],["lArm",es,zs],["lFore",zs,ks],["rArm",ts,mr],["rFore",mr,Wn],["lUp",Zr,Bs],["lLeg",Bs,la],["rUp",Kr,ns],["rLeg",ns,jr]],FE=[[.62,.72,.6],[.7,.68,.62],[.58,.66,.62],[.75,.7,.6]].map(n=>new pe(...n)),kE=new pe(.6,.82,.45),BE=new pe(.28,.05,.04);function Ex(n){let e={},t=Object.entries(NE);return n.traverse(i=>{if(!i.isBone)return;let s=i.name.replace(/^mixamorig:?/,"");for(let[r,o]of t)o===s&&(e[r]=i)}),e}var hl=new C,gg=new C,gd=new C,xg=new C,vg=new Be;function Tx(n,e,t){return hl.copy(e).normalize(),gg.copy(n).addScaledVector(hl,-n.dot(hl)).normalize(),gd.copy(gg).negate(),xg.crossVectors(gd,hl),vg.makeBasis(gd,hl,xg),t.setFromRotationMatrix(vg)}function _g(n,e){let t=n.scene;t.updateMatrixWorld(!0);let i=Ex(t),s={},r=l=>i[l].getWorldPosition(new C);for(let l in i){let c=i[l].quaternion.clone(),h=mg[l]&&i[mg[l]];s[l]={q:c,dirP:(h?h.position.clone():new C(0,1,0)).normalize().applyQuaternion(c).normalize()}}let o=r("rUp").sub(r("lUp")).add(r("rArm").sub(r("lArm"))),a=r("neck").sub(r("hips"));ca.tpl[e]={scene:t,rest:s,q0inv:Tx(o,a,new dt).invert(),hipsW:i.hips.getWorldQuaternion(new dt)}}function wx(n){let e=n.type==="brute"||n.type==="gunner"||Math.random()<.72?"soldier":"michelle",t=ca.tpl[e],i=ca.pool[e].pop();if(!i){let s=V0(t.scene),r=[];s.traverse(o=>{o.isMesh&&(o.material=o.material.clone(),r.push(o.material),o.frustumCulled=!1,o.castShadow=o.receiveShadow=!0)}),i={key:e,root:s,b:Ex(s),mats:r,base:r.map(o=>o.color.clone()),tpl:t,gore:-1},jt.add(s)}i.root.visible=!0,i.gore=-1,i.tint=n.type==="spitter"?kE:Lt(FE);for(let s in i.b)i.b[s].scale.set(1,1,1);return i}function ep(n){n&&(n.root.visible=!1,ca.pool[n.key].push(n))}var zr=new C,zE=new C,dh=new dt,HE=new dt,yg=new dt,Mg=new C,Sg=new C,ph=new C;function Ax(n,e,t,i){let s=n.b,r=n.tpl,o=r.rest,a=f=>zr.set(e[f*3],e[f*3+1],e[f*3+2]);n.root.scale.setScalar(t),n.root.updateMatrixWorld(!0),Mg.set(e[36]-e[27]+e[18]-e[9],e[37]-e[28]+e[19]-e[10],e[38]-e[29]+e[20]-e[11]),Sg.set(e[3]-e[6],e[4]-e[7],e[5]-e[8]),Tx(Mg,Sg,yg).multiply(r.q0inv).multiply(r.hipsW);let l=s.hips.parent;l.getWorldQuaternion(dh),s.hips.quaternion.copy(dh.invert().multiply(yg)),s.hips.position.copy(l.worldToLocal(a(Fs)));for(let[f,u,d]of OE){let g=s[f];g&&(ph.set(e[d*3]-e[u*3],e[d*3+1]-e[u*3+1],e[d*3+2]-e[u*3+2]),!(ph.lengthSq()<1e-10)&&(g.parent.getWorldQuaternion(dh),ph.normalize().applyQuaternion(dh.invert()),g.quaternion.copy(HE.setFromUnitVectors(o[f].dirP,ph)).multiply(o[f].q)))}let c=1e9;for(let f of i?["lFoot","rFoot"]:["lFoot","rFoot","head","hips","lHand","rHand"])s[f]&&s[f].scale.x>.5&&(c=Math.min(c,s[f].getWorldPosition(zE).y));let h=i?.08*t-c:Math.max(0,.1*t-c);Math.abs(h)>1e-4&&c<1e8&&(a(Fs).y+=h,s.hips.position.copy(l.worldToLocal(zr)))}async function VE(){let n=new hh,e=new ol,t=new Oo,i=Id.length+2+pg.length*3,s=0;ti.tex={};let r=()=>{ti.progress=++s/i};try{await Promise.all([...Id.map(o=>n.loadAsync("assets/"+o).then(a=>{a.mapping=Da,a.userData.sun=CE(a),ti.hdr[o]=a,r()})),...pg.flatMap(o=>["diff","nor","rough"].map(a=>t.loadAsync(`assets/tex/${o}_${a}.jpg`).then(l=>{l.wrapS=l.wrapT=pn,l.anisotropy=8,a==="diff"&&(l.colorSpace=ft),(ti.tex[o]=ti.tex[o]||{})[a]=l,r()}))),e.loadAsync("assets/Soldier.glb").then(o=>{_g(o,"soldier"),r()}),e.loadAsync("assets/Michelle.glb").then(o=>{_g(o,"michelle"),r()})]),ca.ready=!0,vx(xt),gx(xt),WE().catch(o=>console.warn("models unavailable, keeping stand-ins",o)),/[?&]test\b/.test(location.search)&&qE()}catch(o){ti.failed=!0,console.warn("assets unavailable, using procedural looks",o)}ti.done=!0}var Bi={ready:!1,parts:{}},bg={pistol:["service_pistol",/_a$/],sniper:["bolt_action_rifle_7_62"],car:["covered_car"],barrel:["barrel_03"],crate:["wooden_crate_01"],ammo:["ammo_box"],med:["medical_box"]},Eg={pistol:40,sniper:1,ammo:24,med:24,car:50,barrel:120,crate:120},Dd=["pistol","sniper","ammo","med"],zi={};function GE(n,e){n.updateMatrixWorld(!0);let t=new Map;return n.traverse(i=>{if(!i.isMesh||e&&!e.test(i.name)&&!e.test(i.parent.name))return;let s=i.geometry.clone().applyMatrix4(i.matrixWorld);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);t.has(i.material)||t.set(i.material,[]),t.get(i.material).push(s)}),[...t].flatMap(([i,s])=>{let r=s.length>1?zf(s):s[0];return r?[{geo:r,mat:i}]:s.map(o=>({geo:o,mat:i}))})}function $o(n,e,t,i){Ig.compose(e,t,MT.setScalar(i));for(let s of n)s.count<s.userData.max&&s.setMatrixAt(s.count++,Ig)}async function WE(){let n=new ol;await Promise.all(Object.entries(bg).map(([e,[t,i]])=>n.loadAsync(`assets/models/${t}/${t}.gltf`).then(s=>{Bi.parts[e]=GE(s.scene,i)})));for(let e in bg)zi[e]=Bi.parts[e].map(({geo:t,mat:i})=>{let s=new Pr(t,i,Eg[e]);return s.count=0,s.frustumCulled=!1,s.castShadow=s.receiveShadow=!0,Dd.includes(e)&&s.instanceMatrix.setUsage(eh),s.userData.max=Eg[e],jt.add(s),s});if(Bi.ready=!0,Td){_l.forEach((e,t)=>{e.count=Td[t]}),mx();for(let e of _l)e.instanceMatrix.needsUpdate=e.instanceColor.needsUpdate=!0}}var xd=new dt,vd=new Ms,bh=new C,Tg=["car","barrel","crate"];function XE(n){let e=n.along?0:Math.PI/2,t=(n.x*7.3+n.z*3.1)%1>.5?Math.PI:0;if(n.kind==="car")$o(zi.car,bh.set(n.x,0,n.z),xd.setFromEuler(vd.set(0,(n.along?Math.PI/2:0)+t,0)),1);else if(n.kind==="barrel")$o(zi.barrel,bh.set(n.x,0,n.z),xd.setFromEuler(vd.set(0,n.x*13%6.28,0)),1.08);else if(n.kind==="crate")for(let i=0;i<n.h-.1;i+=.48)$o(zi.crate,bh.set(n.x,i,n.z),xd.setFromEuler(vd.set(0,e+t+(i?.08:0),0)),1.39);else return!1;return!0}function qE(){let n=[],e=(t,i)=>n.push((i?"PASS ":"FAIL ")+t);for(let t of["walker","brute","crawler"]){let i=Ni(t,10,0);i.heading=.8,dr(i);let s=wx(i);Ax(s,i.P,i.s,t!=="crawler");let r=(a,l,c,h)=>{let f=s.b[a].getWorldPosition(new C);return s.b[l].getWorldPosition(new C).sub(f).normalize().angleTo(new C(i.P[h*3]-i.P[c*3],i.P[h*3+1]-i.P[c*3+1],i.P[h*3+2]-i.P[c*3+2]).normalize())};e(t+" rig: forearms, shins and spine follow the skeleton",Math.max(r("lFore","lHand",zs,ks),r("rLeg","rFoot",ns,jr),r("spine","neck",Fs,bi))<.12);let o=Math.min(s.b.lFoot.getWorldPosition(new C).y,s.b.rFoot.getWorldPosition(new C).y);e(t+" rig stays on the road",o>-.02&&o<.4),ep(s)}n.forEach(t=>console.log(t)),console.log(n.every(t=>t.startsWith("PASS"))?"RIGTEST: ALL PASS":"RIGTEST: FAILURES")}var Rs=1,pl=ni,Ud=0,ge="title",on=0,eo=0,Ei=0,wn=0,Nd=0,Jr=0,gr=0,bl=0,Ji=null,Dt={type:"waves",meter:100,x:Gr,z:0,r:2.2,truck:null,fail:"",contested:!1,boomed:!1},Yr=[],Hs=1,El=0,tp=!1,Ls=0,ha=0,Ai=null,cn={kills:0,heads:0,shots:0,hits:0,time:0},Je=[],Gn=[],Ti=[],Qo=[],wi=[],is=[],Hi=[],ea=[],ta=[],Us=null,Qn=null,Od=0,Y,ss=0,xt=ii[0],Tn={x:12,kx:0},bn={dmg:0,rate:0,reload:0,hp:0},nt={sound:!0,music:!0,shake:!0,sens:1,fov:Hg,quality:"auto"};try{let n=JSON.parse(localStorage.getItem("deadlinefps_settings")||"null");if(n&&typeof n=="object")for(let e in nt)typeof n[e]==typeof nt[e]&&(nt[e]=n[e])}catch{}nt.sens=Le(nt.sens,.2,3);nt.fov=Le(nt.fov,55,100);["auto","high","med","low"].includes(nt.quality)||(nt.quality="auto");Ue.on=nt.sound;function ua(){try{localStorage.setItem("deadlinefps_settings",JSON.stringify(nt))}catch{}}var Se={n:0,phase:"idle",t:0,queue:[],spec:null},zt={unlocked:1,best:ii.map(()=>({wave:0,score:0})),guns:{smg:!1,shotgun:!1,sniper:!1},bank:0};try{let n=JSON.parse(localStorage.getItem("deadline3d_v1")||"null");if(n&&Number.isInteger(n.unlocked)&&Array.isArray(n.best)){if(zt.unlocked=Le(n.unlocked,1,ii.length),n.best.forEach((e,t)=>{zt.best[t]&&e&&typeof e.wave=="number"&&typeof e.score=="number"&&(zt.best[t]={wave:e.wave,score:e.score})}),n.guns)for(let e in zt.guns)zt.guns[e]=n.guns[e]===!0;Number.isFinite(n.bank)&&n.bank>=0&&(zt.bank=Math.floor(n.bank))}}catch{}function zh(){try{localStorage.setItem("deadline3d_v1",JSON.stringify(zt))}catch{}}var Ch=0,fa=0;function Fd(n){Ei+=n,Ch+=n}var kd=n=>Math.floor(n*.1);function Rx(){fa=kd(Ch),zt.bank+=fa,Ch=0,zh()}function Cx(){let n=zt.best[ss];n.wave=Math.max(n.wave,Se.n),n.score=Math.max(n.score,eo),zh()}var ut={BLOOD:0,CASING:1,SPARK:2,SMOKE:3,CHUNK:4,ACID:5,FIRE:6,MIST:7,DUST:8},Px=["solid","solid","glow","smoke","solid","solid","glow","smoke","smoke"],da=["#7c0e0e","#951414","#5e0a0a","#a81c1c","#6a0c0c","#4e0808"],Hr=da.map(n=>new pe(n)),YE=["#8a1a1a","#b0505a","#5e0a0a"].map(n=>new pe(n)),jo=Array.from({length:De.maxParticles},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,type:0,col:null,css:"",size:.05})),Ns=0,Lx=De.maxParticles;function It(n,e,t,i,s,r,o,a,l,c,h){if(Ns>=Lx)return;let f=jo[Ns++];f.type=n,f.x=e,f.y=t,f.z=i,f.vx=s,f.vy=r,f.vz=o,f.col=a,f.css=l,f.size=c,f.life=f.max=h}var ZE=be("#9a1010"),Bd=be("#8c7458"),Ix=be("#c8c4bc");function Rl(n,e,t,i,s,r,o=1){for(let a=0;a<r;a++){let l=U(0,Hr.length)|0;It(ut.BLOOD,n,e,t,i*U(.3,3)*o+U(-.7,.7),U(0,2.6)*o,s*U(.3,3)*o+U(-.7,.7),Hr[l],da[l],U(.03,.06),3)}for(let a=0;a<r/3;a++){let l=U(0,Hr.length)|0;It(ut.BLOOD,n,e,t,i*U(3.5,6.5)*o,U(.2,1.4),s*U(3.5,6.5)*o,Hr[l],da[l],.035,3)}for(let a=0;a<3;a++)It(ut.MIST,n+U(-.05,.05),e+U(-.05,.05),t+U(-.05,.05),i*U(.2,1),U(-.1,.3),s*U(.2,1),ZE,"",U(.1,.18),.35)}var KE=[[150,160,138],[160,150,140],[132,142,125],[170,158,145],[120,130,115]],jE=[[190,184,172],[52,74,96],[110,30,30],[88,92,100],[130,122,100],[60,44,40]],JE=[[44,72,104],[54,54,64],[120,110,80],[80,60,50]],$E=[[40,30,26],[70,50,35],[55,55,55],[90,70,50]];function np(){let n={},e={},t={knife:!0,pistol:!0,rifle:!0};for(let i of Uh){let s=De.weapons[i];s.melee||(n[i]=s.mag,e[i]=s.reserve),zt.guns[i]&&(t[i]=!0)}return{kind:"player",x:12,z:0,s:1,heading:0,pitch:0,kick:0,hp:De.playerHP,maxHp:De.playerHP,alive:!0,phase:0,moving:!1,recoil:0,cool:0,reloadT:0,weapon:"rifle",throwT:0,mag:n,res:e,owned:t,nades:De.grenade.startCount,nadeCd:0,inv:0,heat:0,swing:0,deadT:0,gunPitch:0,aimT:{x:16,y:1.05,z:0},stamina:De.move.stamina,staminaT:0,sprint:!1,adsT:0,swapT:0,meleeT:0,meleeCd:0,shotT:0,moveAmt:0,strafe:0,swayX:0,swayY:0,roll:0}}function zd(n,e,t){return n.dmg*(1+e*De.upgrade.dmg)*(t?De.headshotMul:1)}function Ni(n,e,t){let i=De.zombies[n],s=Se.spec||{speedMul:1,hpMul:1},r=n==="spitter"?[150,190,90]:Lt(KE),o=i.hp*s.hpMul,a={kind:"zombie",type:n,cfg:i,x:e??20,z:t??U(hn,_n),s:i.scale*U(.94,1.06),heading:Math.PI,hp:o,maxHp:o,phase:U(0,6),seed:U(0,100),lastStep:0,flinch:0,hitT:0,atkCd:U(0,1),lunge:0,kvx:0,kvz:0,spitCd:U(1,2.5),speedMul:s.speedMul*U(.85,1.15),P:new Float32Array(45),gore:[],dead:!1,...iE({skin:r,shirt:n==="brute"?[90,70,60]:Lt(jE),pants:Lt(JE),shoe:[42,36,32],hair:Lt($E)}),limp:(n==="walker"||n==="brute")&&Math.random()<.35,tilt:U(-.35,.35),dangle:0,missing:0};n!=="crawler"&&n!=="gunner"&&(Math.random()<.12?a.missing=Lt([-1,1]):Math.random()<.25&&(a.dangle=Lt([-1,1]))),n==="gunner"&&Object.assign(a,{burst:0,burstT:0,los:!1,losT:0,flashT:0}),dr(a);for(let l=U(0,5)|0;l>0;l--)Ph(a,a.x+U(-.2,.2),U(.2,1.6),a.z);return a}function Ph(n,e,t,i){if(n.gore.length>=26)return;let s=n.P,r=1e9,o=ug[1],a=.5;for(let h of ug){let f=h[0]*3,u=h[1]*3,d=s[u]-s[f],g=s[u+1]-s[f+1],x=s[u+2]-s[f+2],m=d*d+g*g+x*x,p=m?Le(((e-s[f])*d+(t-s[f+1])*g+(i-s[f+2])*x)/m,0,1):0,_=Math.hypot(s[f]+d*p-e,s[f+1]+g*p-t,s[f+2]+x*p-i);_<r&&(r=_,o=h,a=p)}let l=o[0]===1,c=Math.random()<.5;n.gore.push({a:o[0],b:o[1],t:a,o1:c?(l?4.3:2.1)*Lt([-1,1]):U(-2,2),o2:c?U(-2,2):(l?2.6:2.1)*Lt([-1,1]),sz:1.2+Math.random()*1.6,c:Lt(Hr)})}function QE(n){let e=Y,t=Math.hypot(e.x-n.x,e.z-n.z),i=Dt.truck;return n.goal==="zone"&&(t>3.5||!e.alive)?[Dt.x+(n.seed%1-.5)*2.4,Dt.z+(n.seed*7%1-.5)*2.4,"zone"]:n.goal==="truck"&&i&&i.hp>0&&(t>3||!e.alive)?[Le(n.x,i.x0,i.x1),Le(n.z,i.z0,i.z1),"truck"]:[e.x,e.z,"player"]}function Dx(n,e){let t=n.cfg,i=Y;if(n.flinch=Math.max(0,n.flinch-e),n.atkCd-=e,n.lunge=Math.max(0,n.lunge-e*3),n.rise>0){n.rise-=e,Math.random()<e*20&&It(ut.DUST,n.x+U(-.3,.3),.05,n.z+U(-.3,.3),U(-.5,.5),U(.3,.8),U(-.5,.5),Bd,"",U(.1,.2),.7),dr(n);return}let s=t.speed*n.speedMul*(n.flinch>0?.25:1)*(n.limp?.55+.9*Math.max(0,Math.sin(n.phase)):1),r=null;for(let _ of is){if(_.hp<=0||Math.abs(n.z-_.z)>Ri+.2)continue;let v=n.x-_.x;if(_.type==="sandbags")v>.15&&v<.45*n.s+.15&&(r=_);else if(Math.abs(v)<.3){let M=De.defenses[_.type];_.type==="wire"&&(s*=M.slow),n.hp-=M.dps*e,_.hp-=e*(n.type==="brute"?8:1.5),Math.random()<e*3&&Rl(n.x,.3,n.z,1,0,2,.5)}}if(n.hp<=0){Cl(n,1,0,0,1,!1,10);return}let[o,a,l]=QE(n),c=o-n.x,h=a-n.z,f=Math.hypot(c,h),u=Math.hypot(i.x-n.x,i.z-n.z),d=u<16,g=r?Math.PI:Math.atan2(h,c);if(!r){let _=Math.cos(g),v=Qr(n.x+_*.6,n.z+Math.sin(g)*.6,.3);if(v&&!(v.kind==="truck"&&l==="truck")){let M=v.z0-.55,b=v.z1+.55,T=M>hn-.01&&(b>_n+.01||Math.abs(n.z-M)<Math.abs(n.z-b));g=Math.atan2(T?-1:1,Math.sign(_||1)*.35)}}let x=i.alive||l!=="player";x&&(n.heading=Is(n.heading,g,e*5));let m=!1;if(r)n.phase+=e*2,n.atkCd<=0&&(n.atkCd=1,n.lunge=1,r.hp-=t.dmg*(t.barricadeMul||1),Fi("impact",n.x,n.z,80));else if(i.alive&&u<.7*n.s+.15)n.phase+=e*2,n.heading=Is(n.heading,Math.atan2(i.z-n.z,i.x-n.x),e*8),n.atkCd<=0&&(n.atkCd=1.1,n.lunge=1,ip(t.dmg,n.x,n.z));else if(l==="truck"&&f<.45){if(n.phase+=e*2,n.atkCd<=0){n.atkCd=1.1,n.lunge=1,Dt.truck.hp-=t.dmg*(t.barricadeMul||1),Fi("impact",n.x,n.z,80);for(let _=0;_<3;_++)It(ut.SPARK,o,U(.4,1.2),a,U(-1,1),U(.5,2),U(-1,1),be("#ffd080"),"",.03,.3)}}else if(l==="zone"&&f<.5)n.phase+=e;else if(i.alive&&n.type==="gunner"&&u<t.range&&eT(n,e))n.phase+=e,n.heading=Is(n.heading,Math.atan2(i.z-n.z,i.x-n.x),e*6),(n.spitCd-=e)<=0&&(n.spitCd=t.cooldown*U(.8,1.3),n.burst=t.burst,n.burstT=U(.1,.3));else if(i.alive&&n.type==="spitter"&&u<t.range&&d){if(n.phase+=e*1.5,n.spitCd-=e,n.heading=Is(n.heading,Math.atan2(i.z-n.z,i.x-n.x),e*8),n.spitCd<=0){n.spitCd=t.cooldown*U(.8,1.2),n.lunge=1;let _=1,v=1.6*n.s,M=n.P[0],b=n.P[2];Ti.push({kind:"acid",x:M,y:v,z:b,vx:(i.x-M)/_,vy:(.5*De.gravity*_*_-v)/_,vz:(i.z-b)/_,t:0,dmg:t.dmg}),Fi("splat",n.x,n.z,100)}}else x?(m=!0,n.x+=Math.cos(n.heading)*s*e,n.z+=Math.sin(n.heading)*s*e,n.phase+=e*s*7.7):n.phase+=e;if(m){let _=Math.floor(n.phase/Math.PI);if(_!==n.lastStep&&(n.lastStep=_,u<12&&Fi("step",n.x,n.z,70),n.type==="brute"&&d)){wn=Math.max(wn,1.4),Fi("stomp",n.x,n.z,150);for(let v=0;v<4;v++)It(ut.DUST,n.x+U(-.3,.3),.05,n.z+U(-.3,.3),U(-.6,.6),U(.2,.5),U(-.3,.3),Bd,"",U(.12,.22),.6)}}n.type==="gunner"&&(n.flashT-=e,n.burst>0&&i.alive&&(n.burstT-=e)<=0&&(tT(n),n.burst--,n.burstT=.22)),n.x=Le(n.x+n.kvx*e,-5,Ht+5),n.z=Le(n.z+n.kvz*e,hn,_n);let p=Math.max(0,1-8*e);n.kvx*=p,n.kvz*=p,Ml(n,.22*n.s),n.z=Le(n.z,hn,_n),dr(n)}function eT(n,e){if((n.losT-=e)<=0){n.losT=.25;let t=Y,i=n.P[Wn*3],s=n.P[Wn*3+1],r=n.P[Wn*3+2],o=t.x-i,a=1.3-s,l=t.z-r,c=Math.hypot(o,a,l)||1;n.los=Sl(i,s,r,o/c,a/c,l/c)>c}return n.los}function tT(n){let e=Y,t=n.cfg,i=Math.cos(n.heading),s=Math.sin(n.heading),r=n.P[Wn*3]+i*.2,o=n.P[Wn*3+1]+.05,a=n.P[Wn*3+2]+s*.2,l=e.x-r+U(-.35,.35),c=1.3-o+U(-.25,.2),h=e.z-a+U(-.35,.35),f=Math.hypot(l,c,h)||1;l/=f,c/=f,h/=f,Ti.push({kind:"bullet",x:r,y:o,z:a,vx:l*t.bulletSpeed,vy:c*t.bulletSpeed,vz:h*t.bulletSpeed,t:0,dmg:t.dmg,whiz:!1}),n.flashT=.06,n.lunge=.35,Fi("pistol",n.x,n.z,40),It(ut.SMOKE,r,o,a,i*.4,.2,s*.4,Ix,"",.03,.4)}function Hd(n,e){let t=Y,i=n.x-n.vx*e,s=n.z-n.vz*e;if(t.alive){let o=n.x-i,a=n.z-s,l=o*o+a*a,c=l?Le(((t.x-i)*o+(t.z-s)*a)/l,0,1):1,h=i+o*c,f=s+a*c,u=Math.hypot(t.x-h,t.z-f),d=n.y-n.vy*e*(1-c);if(u<.3&&d>.1&&d<1.85)return ip(n.dmg,i,s),!0;u<1.1&&!n.whiz&&(n.whiz=!0,Fi("ric",n.x,n.z,90))}let r=Qr(n.x,n.z,0);if(n.y<=0||n.z<vn||n.z>En||r&&n.y<r.h||n.t>3){for(let o=0;o<4;o++)It(ut.SPARK,n.x,Math.max(.02,n.y),n.z,U(-1.5,1.5)-n.vx*.05,U(.5,2),U(-1.5,1.5)-n.vz*.05,be("#ffc060"),"",.03,.25);return!0}return!1}function Hh(n,e,t,i,s,r,o,a,l,c){if(n.dead)return;let h=e*(t?De.headshotMul:1);n.hp-=h,n.flinch=.18,n.hitT=.06,n.kvx+=i*o*.7,n.kvz+=r*o*.7,El=.12,tp=!1,Rl(a,l,c,i,r,t?16:10,t?1.3:1),Ph(n,a,l,c),t&&Ph(n,a,l,c),Fi("impact",n.x,n.z,40),n.hp<=0&&Cl(n,i,s,r,o,t,h)}function Cl(n,e,t,i,s,r,o,a){n.dead=!0;let l=1.4+s*.9,c=Pd(n,e*l,t*l+1.4+s*.35,i*l,"zombie");(r&&(o>=60||Math.random()<.45)||a&&o>140&&Math.random()<.4)&&fg(c,e,i),o>=70&&Math.random()<.5&&dg(c),a&&o>120&&Math.random()<.5&&dg(c),c.rig=n.rig,n.rig=null,nT(c),Bh(n.x,n.z,.32*n.s),Rl(n.x,.8*n.s,n.z,e,i,22,1.3);let h=n.cfg.cash+(r?De.headshotCash:0);if(Fd(h),eo+=De.killScore*(n.type==="brute"?6:1)+(r?5:0),wi.push({x:n.x,y:2*n.s,z:n.z,text:"+$"+h,t:1,col:r?"#ffd84a":"#e8e8e8"}),cn.kills++,tp=!0,r&&(cn.heads++,wi.push({x:n.x,y:2.3*n.s,z:n.z,text:"HEADSHOT",t:.9,col:"#ff6040"})),Ls=ha>0?Ls+1:1,ha=1.4,Ls>=3){let g=Ls*2;Fd(g),Ai={n:Ls,bonus:g,t:1.4}}n.type==="brute"&&(bl=.07,wn=Math.max(wn,5));let f=Math.random(),u=De.drops,d=n.type==="gunner"&&f<.45||f<u.ammo?"ammo":f<u.ammo+u.med?"med":f<u.ammo+u.med+u.nade?"nade":null;d&&Hi.push({type:d,x:n.x,z:n.z,t:15}),Wt("splat",50)}function nT(n){Gn.push(n);let e=Gn.filter(t=>!t.sink);if(e.length>De.maxRagdolls){let t=e[0];t.sink=1.2,t.sleep=!0,Bh(t.x,t.z,.3)}}function Ux(n){n.sink||(n.sleep=!1,n.still=0)}function ip(n,e,t){let i=Y;if(!i.alive||i.inv>0)return;let s=i.x-e,r=i.z-t,o=Math.hypot(s,r)||1;i.hp-=n,i.inv=.45,Jr=.35,wn=Math.max(wn,3),Wt("hurt",80),Yr.push({a:Math.atan2(-r,-s),t:1}),i.x=Le(i.x+s/o*.15,.5,Ht-.5),i.z=Le(i.z+r/o*.15,hn,_n),Rl(i.x,1.2,i.z,s/o,r/o,10),i.hp<=0&&(i.hp=0,i.alive=!1,Bh(i.x,i.z,.45),Wt("splat"))}function Vh(n){let e=Y;!e.alive||!e.owned[n]||e.weapon===n||(e.weapon=n,e.reloadT=0,e.cool=.35,e.swapT=.35,e.heat=0,Wt("click",60))}function Vd(n){let e=Uh.filter(i=>Y.owned[i]),t=e.indexOf(Y.weapon);Vh(e[(t+n+e.length)%e.length])}function Lh(){let n=Y,e=De.weapons[n.weapon];return!n.alive||e.melee||n.reloadT>0||n.mag[n.weapon]>=e.mag||n.res[n.weapon]<=0?!1:(n.reloadT=e.reload*(1-bn.reload*De.upgrade.reload),Wt("click",100),!0)}function iT(){let n=Y,e=n.weapon,t=De.weapons[e],i=Math.min(t.mag-n.mag[e],n.res[e]);n.mag[e]+=i,n.res[e]-=i,Wt("click",60)}var Kt=new C,Ln=new C,In=new C,$i=new C;function wg(n){if(!n)return;let e=Math.cos(n),t=Math.sin(n);$i.copy(Ln),Ln.multiplyScalar(e).addScaledVector(In,t),In.multiplyScalar(e).addScaledVector($i,-t)}function Ag(n,e){let t=Math.cos(n),i=Math.sin(n),s=Math.cos(e),r=Math.sin(e);Kt.set(t*s,r,i*s),Ln.set(-t*r,s,-i*r),In.crossVectors(Kt,Ln)}function sp(n){let e=n.reloadT>0,t=n.adsT,i=n.weapon==="knife",s=(n.moving?Math.sin(n.phase)*(n.sprint?.03:.012):Math.sin(on*2)*.004)*(1-t*.8),r=n.swapT>0?Math.sin(n.swapT/.35*Math.PI)*.25:0,o=n.meleeT>0?Math.sin(n.meleeT/.25*Math.PI)*.14:0,a=n.swayX*(1-t*.8),l=n.swayY*(1-t*.8);Ag(n.heading,n.pitch+n.kick),wg(n.roll);let c=ct.position,h=Et(.36,.3,t)-n.recoil*.05+o,f=Et(-.2,-Oh[n.weapon].ads,t)+s-(e?.06:0)-n.throwT*.1-r-(n.sprint?.06:0)+l*.4,u=Et(n.weapon==="pistol"?.15:.18,0,t)-a*.4,d=[c.x+Kt.x*h+Ln.x*f+In.x*u,c.y+Kt.y*h+Ln.y*f+In.y*u,c.z+Kt.z*h+Ln.z*f+In.z*u];return n.gunPitch=n.pitch+n.kick-(e?.7:0)-n.throwT*.9-r*2-(n.sprint?.5:0)+(i?n.swing>0?n.swing*1.6-1.2:-.3:0),Ag(n.heading+a+(i&&n.swing>0?(n.swing-.5)*.8:0)+(n.sprint?.35:0),n.gunPitch+l),wg(n.roll),d}function Nx(n){let[e,t,i]=sp(n),s=Oh[n.weapon],[r,o]=Bi.ready&&s.modelMuz?s.modelMuz:s.muz;return[e+Kt.x*r+Ln.x*o,t+Kt.y*r+Ln.y*o,i+Kt.z*r+Ln.z*o]}var Ox=n=>n.weapon==="sniper"&&n.adsT>.8;function Ih(n,e,t,i,s,r,o,a=1){let l=o.P,c=1e9,h=!1;for(let f of IE){if(f[5]&&o.missing===f[5])continue;let u=f[0]*3,d=f[1]*3,g=f[2],x=Et(l[u],l[d],g)-n,m=Et(l[u+1],l[d+1],g)-e,p=Et(l[u+2],l[d+2],g)-t,_=x*i+m*s+p*r;if(_<0)continue;let v=f[3]*o.s*pa*a;x*x+m*m+p*p-_*_<v*v&&(f[4]&&(h=!0),_<c&&(c=_))}return c<1e8?{t:c,head:h}:null}function sT(n,e,t,i,s,r,o,a,l=n,c=e,h=t){let f=[],u=Sl(n,e,t,i,s,r);for(let x of Je){if(x.dead)continue;let m=Ih(n,e,t,i,s,r,x);m&&m.t<u&&f.push({z:x,t:m.t,head:m.head})}f.sort((x,m)=>x.t-m.t);let d=o.pen,g=De.bulletRange;for(let x of f){if(d--<=0)break;Hh(x.z,a,x.head,i,s,r,o.knock,n+i*x.t,e+s*x.t,t+r*x.t),g=x.t}if(d<o.pen&&cn.hits++,d>0){g=De.bulletRange;let x=s<-1e-4?-e/s:1e9,m=Math.min(u,r<-1e-4?(vn-t)/r:r>1e-4?(En-t)/r:1e9);if(x<g||m<g){let p=x<m;g=Math.min(x,m);let _=n+i*g,v=e+s*g,M=t+r*g;for(let b=0;b<5;b++)It(ut.SPARK,_,v+.02,M,U(-1.5,1.5)-i,U(.5,2.5),p?U(-1.5,1.5):U(.5,2),Lt([be("#ffe080"),be("#ffb040")]),"",.03,.25);for(let b=0;b<3;b++)It(ut.DUST,_,v,M+(p?0:.1),U(-.4,.4),U(.3,.8),U(-.2,.4),Bd,"",U(.08,.16),.5);p?Br(_,M,1,1,"#3a2a1c"):Fi("ric",_,M,120)}}for(let x of Gn)if(!x.sink)for(let m=0;m<15;m++){let p=x.P[m*3]-n,_=x.P[m*3+1]-e,v=x.P[m*3+2]-t,M=p*i+_*s+v*r;if(M>0&&M<g&&p*p+_*_+v*v-M*M<.02){Ux(x),x.O[m*3]-=i*2.5*x.dtp,x.O[m*3+1]-=1.6*x.dtp,x.O[m*3+2]-=r*2.5*x.dtp,Rl(x.P[m*3],x.P[m*3+1],x.P[m*3+2],i,r,5);break}}Qo.push({x0:l,y0:c,z0:h,x1:n+i*g,y1:e+s*g,z1:t+r*g,t:.08})}function rT(){let n=Y,e=De.weapons[n.weapon],t=1-bn.rate*De.upgrade.rate;if(e.melee){n.cool=e.rate*t,n.swing=1,n.shotT=.18,Wt("knife");let x=e.pen;ea.push({x:n.x,y:ct.position.y-.2,z:n.z,h:n.heading,p:n.pitch,t:.15});let m=Math.cos(n.heading),p=Math.sin(n.heading);for(let _ of Je){if(_.dead||x<=0)continue;let v=_.x-n.x,M=_.z-n.z,b=v*m+M*p,T=Math.abs(-v*p+M*m);b>-.1&&b<1.15&&T<.55&&(x--,Hh(_,zd(e,bn.dmg,!1),!1,m,-.2,p,e.knock,_.x-m*.1,1.1*_.s,_.z-p*.1))}return}if(n.mag[n.weapon]<=0){Lh()||(n.cool=.25,Wt("click",200));return}n.mag[n.weapon]--,n.cool=e.rate*t,cn.shots+=e.pellets||1,n.shotT=.18;let[i,s,r]=Nx(n),o=ct.position;ct.getWorldDirection($i);let a=$i.x,l=$i.y,c=$i.z,h=(e.spread+n.heat)*Et(1,.3,n.adsT),f=zd(e,bn.dmg,!1);for(let x=0;x<(e.pellets||1);x++){let m=a+U(-h,h),p=l+U(-h,h),_=c+U(-h,h),v=Math.hypot(m,p,_);sT(o.x,o.y,o.z,m/v,p/v,_/v,e,f,i,s,r)}e.spreadGrow&&(n.heat=Math.min(e.spreadMax,n.heat+e.spreadGrow)),n.recoil=1,n.kick=Math.min(.12,n.kick+e.recoil*1.2),n.pitch=Le(n.pitch+e.recoil*.06,-1.35,1.35),wn=Math.max(wn,e.shake*.5),Nd=2,gr=Math.max(gr,.03*e.shake),Qn={x:i,y:s,z:r,big:e.pellets?1.6:1,v:Math.random()},Ah.position.set(i,s,r+.3),Ah.intensity=(e.pellets?26:16)*(1+xt.dark*2);for(let x=0;x<(e.pellets?4:1);x++)It(ut.SMOKE,i,s,r,Kt.x*U(.6,1.4),U(.1,.3),Kt.z*U(.6,1.4),Ix,"",U(.015,.03),U(.3,.6));let[u,d,g]=sp(n);It(ut.CASING,u+In.x*.04,d+.03,g+In.z*.04,-Kt.x*U(.2,.6)+In.x*U(1.6,2.4),U(1.2,2),-Kt.z*U(.2,.6)+In.z*U(1.6,2.4),n.weapon==="shotgun"?be("#b02a20"):be("#d8b040"),n.weapon==="shotgun"?"#b02a20":"#d8b040",.04,9),Wt(n.weapon,25),Math.random()<.5&&Wt("tink",60),n.mag[n.weapon]===0&&Lh()}function Fx(){let n=Y;if(!n.alive||n.nades<=0||n.nadeCd>0||ge!=="play")return;n.nades--,n.nadeCd=.6,n.throwT=1;let e=n.aimT.x,t=n.aimT.z;if(le.touch){let f=Bx();e=f?f.x:n.x+Math.cos(n.heading)*6,t=f?f.z:n.z+Math.sin(n.heading)*6}let i=e-n.x,s=t-n.z,r=Math.hypot(i,s),o=r>9?9/r:1;e=n.x+i*o,t=Le(n.z+s*o,hn-.3,_n+.3);let a=.85,l=1.5,c=n.x+Math.cos(n.heading)*.4,h=n.z+Math.sin(n.heading)*.4;Ti.push({kind:"nade",x:c,y:l,z:h,vx:(e-c)/a,vy:(.5*De.gravity*a*a-l)/a,vz:(t-h)/a,t:0}),Wt("knife")}function kx(n,e){let t=De.grenade.radius;Fi("boom",n,e,0),wn=Math.max(wn,9),bl=.04,gr=.45,Od=.35,Rh.position.set(n,1.2,e),Rh.intensity=120*(1+xt.dark),ta.push({x:n,z:e,t:.35});for(let o of Je){if(o.dead)continue;let a=o.x-n,l=o.z-e,c=Math.hypot(a,l);if(c<t){let h=De.grenade.dmg*(1-c/t)+30,f=a/(c||1),u=l/(c||1);o.hp-=h,o.hitT=.08,Ph(o,o.x,.9,o.z),o.hp<=0?Cl(o,f,.45,u,3,!1,h,!0):(o.kvx+=f*4*(1-c/t),o.kvz+=u*4*(1-c/t),o.flinch=.4)}}for(let o of Gn){if(o.sink)continue;let a=Math.hypot(o.x-n,o.z-e);if(a<t){Ux(o);let l=1-a/t;for(let c=0;c<15;c++){let h=o.P[c*3]-n,f=o.P[c*3+2]-e,u=Math.hypot(h,f)||1;o.O[c*3]-=h/u*5*l*o.dtp,o.O[c*3+1]-=4.5*l*o.dtp*U(.5,1.2),o.O[c*3+2]-=f/u*5*l*o.dtp}}}let i=["#fff3b0","#ffc040","#ff7a20","#d84010"].map(be),s=["#3a3530","#4a4540","#2a2622"].map(be),r=["#4a3626","#5a4430","#2e2218"];for(let o=0;o<46;o++)It(ut.FIRE,n+U(-.3,.3),U(.05,.6),e+U(-.3,.3),U(-2.5,2.5),U(.3,3.5),U(-2.5,2.5),Lt(i),"",U(.12,.26),U(.2,.6));for(let o=0;o<16;o++)It(ut.FIRE,n+U(-.6,.6),.05,e+U(-.6,.6),U(-.2,.2),U(.1,.5),U(-.2,.2),Lt(i),"",U(.04,.08),U(1.2,2.4));for(let o=0;o<26;o++)It(ut.SMOKE,n+U(-.5,.5),U(.2,1.2),e+U(-.5,.5),U(-.8,.8),U(.4,1.6),U(-.8,.8),Lt(s),"",U(.25,.45),U(1.2,2.6));for(let o=0;o<26;o++){let a=Lt(r);It(ut.CHUNK,n,.1,e,U(-5,5),U(3,8),U(-5,5),be(a),a,U(.05,.09),3)}for(let o=0;o<420;o++){let a=U(0,6.283),l=Math.sqrt(Math.random())*1.2;ji.fillStyle=`rgba(20,14,10,${(.85-l/1.4).toFixed(2)})`,ji.fillRect((n+Math.cos(a)*l-Oi)*ux|0,(e+Math.sin(a)*l-na)*fx|0,1,1)}aa=!0}function Bx(){let n=null,e=1e9;for(let t of Je){if(t.dead||t.rise>0)continue;let i=Math.atan2(t.z-Y.z,t.x-Y.x),s=Math.hypot(t.x-Y.x,t.z-Y.z);Math.abs(Is(0,i-Y.heading,9))<.7&&s<25&&s<e&&(e=s,n=t)}return n}function oT(n,e){let t=lx(n,e),i=t.origin,s=t.direction,r=1e9;for(let c of Je){if(c.dead)continue;let h=Ih(i.x,i.y,i.z,s.x,s.y,s.z,c,1.25);h&&h.t<r&&(r=h.t)}if(r<1e8)return{x:i.x+s.x*r,y:i.y+s.y*r,z:i.z+s.z*r};let o=Sl(i.x,i.y,i.z,s.x,s.y,s.z);if(s.y<-1e-4){let c=-i.y/s.y,h=i.z+s.z*c;if(h>vn&&c<o)return{x:i.x+s.x*c,y:1.05,z:h}}if(o<60)return{x:i.x+s.x*o,y:i.y+s.y*o,z:i.z+s.z*o};let a=s.z>0?En:vn,l=Math.min(60,(a-i.z)/(Math.abs(s.z)>1e-4?s.z:-1e-4));return{x:i.x+s.x*l,y:i.y+s.y*l,z:i.z+s.z*l}}var rp=(n,e)=>ii[n].waves===1/0?e%5===0:e===ii[n].waves;function ml(n,e){return Math.round((De.waveBase+(n*3+e)*De.wavePerDiff)*(rp(n,e)?De.hordeMul:1))}function Eh(n,e){let t=ii[n],i=n*3+e,s=rp(n,e),r=ml(n,e),o=[],a=t.mix,l=Math.min(1,.4+e*.15),c=(a.brute||0)*l,h=a.runner*l,f=a.crawler*l,u=a.spitter*l,d=(a.gunner||0)*l;for(let x=0;x<r;x++){let m=Math.random();o.push(m<c?"brute":m<c+h?"runner":m<c+h+f?"crawler":m<c+h+f+u?"spitter":m<c+h+f+u+d?"gunner":"walker")}let g=s?1+(n>>1)+(t.waves===1/0?Math.floor(e/10):0):0;for(let x=0;x<g;x++)o.splice(Math.floor(o.length*(x+1)/(g+1)),0,"brute");return{list:o,horde:s,hpMul:1+i*.04,speedMul:1+i*.03,interval:Math.max(.25,1.3/(1+i*.1)),flank:t.flank}}function zx(){Se.timer=30+(Se.n+1)*5,Se.n++,Se.spec=Eh(ss,Se.n),Se.queue=Se.spec.list.slice(),Se.phase="countdown",Se.t=2.6,Ji={text:"WAVE "+Se.n,sub:Se.spec.horde?"HORDE INCOMING":Se.n===1?"TIME MOVES ONLY WHEN YOU MOVE":xt.name,t:Se.n===1?3.4:2.4},Wt("blip")}function aT(n){let e=Y,t,i,s=0;do{let a=Math.random()<Se.spec.flank+.2?U(0,6.283):U(-1.1,1.1),l=U(10,20);t=Le(e.x+Math.cos(a)*l,1,Ht-1),i=Le(e.z+Math.sin(a)*l,hn,_n)}while((Qr(t,i,.45)||Math.hypot(t-e.x,i-e.z)<7)&&++s<16);let r=Ni(n,t,i),o=Math.random();r.goal=xt.obj==="hold"&&o<.5?"zone":xt.obj==="protect"&&o<.45?"truck":"player",r.heading=Math.atan2(e.z-r.z,e.x-t),r.rise=1.2,Je.push(r);for(let a=0;a<8;a++){let l=Lt(["#4a3626","#5a4430"]);It(ut.CHUNK,t,.05,r.z,U(-1.5,1.5),U(1.5,3.5),U(-1.5,1.5),be(l),l,.06,2)}Bh(t,r.z,.2)}function lT(n){if(Se.phase==="countdown")Se.t-=n,Se.t<=0&&(Se.phase="spawn",Se.t=0);else if(Se.phase==="spawn"){if(Se.t-=n,xt.obj==="survive"&&(Se.timer-=n,!Se.queue.length&&Se.timer>3&&Je.length<24&&Se.queue.push(Lt(Se.spec.list))),Se.queue.length&&Se.t<=0){let t=Se.spec.horde&&Math.random()<.4?2:1;for(let i=0;i<t&&Se.queue.length;i++)aT(Se.queue.shift());Se.t=Se.spec.interval*U(.6,1.4)}if((xt.obj==="survive"?Se.timer<=0:!Se.queue.length&&!Je.some(t=>!t.dead))&&Y.alive){if(xt.obj==="survive"){Se.queue=[];for(let i of Je)i.dead||Cl(i,0,1,0,1,!1,10)}Se.phase="clear",Se.t=2.2;let t=20+Se.n*6;Fd(t),eo+=Se.n*50,Ji={text:"WAVE CLEARED",sub:"+$"+t+" BONUS",t:2}}}else Se.phase==="clear"&&(Se.t-=n,Se.t<=0&&(gE(),Se.phase="idle",Se.n>=xt.waves?(zt.unlocked=Math.max(zt.unlocked,Math.min(ii.length,ss+2)),Cx(),Rx(),ge="levelclear",Hs=.6):ge="shop"))}function cT(){let n=Y,e=De.shop,t=De.upgrade,i=De.defenses,s=(l,c,h)=>{let f=h*(bn[l]+1),u=bn[l]>=c;return{cost:f,can:!u,sub:u?"MAX":"LV"+(bn[l]+1)+" $"+f}},r=l=>({cost:i[l].cost,can:is.length<8,buy(){Us=l,ge="place"}}),o=l=>({label:De.weapons[l].name,cost:e[l],can:!n.owned[l],sub:n.owned[l]?"OWNED":null,buy(){n.owned[l]=!0,zt.guns[l]=!0,zh(),Vh(l)}}),a=Object.keys(n.res).some(l=>n.owned[l]&&n.res[l]<De.weapons[l].reserve);return[{label:"AMMO REFILL",cost:e.ammo,can:a,buy(){for(let l in n.res)n.owned[l]&&(n.res[l]=De.weapons[l].reserve)}},{label:"GRENADE +1",cost:e.grenade,can:n.nades<9,buy(){n.nades++}},o("smg"),o("shotgun"),o("sniper"),{label:"HEAL +40",cost:e.heal,can:n.hp<n.maxHp,buy(){n.hp=Math.min(n.maxHp,n.hp+40)}},{label:"DAMAGE",...s("dmg",8,e.upDmg),buy(){bn.dmg++}},{label:"FIRE RATE",...s("rate",5,e.upRate),buy(){bn.rate++}},{label:"RELOAD",...s("reload",5,e.upReload),buy(){bn.reload++}},{label:"MAX HP",...s("hp",8,e.upHP),buy(){bn.hp++,n.maxHp+=t.hp,n.hp+=t.hp}},{label:"BARBED WIRE",...r("wire")},{label:"SPIKE STRIP",...r("spikes")},{label:"SANDBAGS",...r("sandbags")}]}var Ri=3;function hT(n,e){let t=De.defenses[Us];is.push({type:Us,x:Le(n,1,Ht-1),z:Le(e,hn+Ri-1,_n-Ri+1),hp:t.hp,max:t.hp}),Us=null,ge="shop",Wt("impact")}function Gh(n,e){ss=n,xt=ii[n],_x(xt);for(let t of[...Je,...Gn])ep(t.rig);Je=[],Gn=[],Ti=[],Qo=[],wi=[],is=[],Hi=[],ea=[],ta=[],Yr=[],Ns=0,ji.clearRect(0,0,Tl,wl),aa=!0,Ji=null,wn=0,Jr=0,gr=0,Hs=1,Ls=0,ha=0,Ai=null,Object.keys(cn).forEach(t=>cn[t]=0),Object.assign(Dt,{type:xt.obj,meter:100,fail:"",contested:!1,boomed:!1,truck:Os.find(t=>t.kind==="truck")||null}),Dt.truck&&(Dt.truck.hp=Dt.truck.max=900),e&&Y&&Y.alive?(Y.hp=Y.maxHp,Ei+=100):(Object.keys(bn).forEach(t=>bn[t]=0),Y=np(),eo=0,Ch=0,Ei=xt.startCash+zt.bank,zt.bank&&(wi.push({x:Ht*.3+3,y:1.8,z:0,text:"BANK +$"+zt.bank,t:2.5,col:"#9fe870"}),zt.bank=0,zh())),Y.x=Ht*.3,Y.z=0,Y.heading=0,Y.pitch=0,Y.inv=0,Tn.x=Le(Y.x+1.4,Bn.half,Ht-Bn.half),Se.n=0,Se.phase="idle",Se.spec=null,Ei>0?ge="shop":(ge="play",zx())}function uT(){ge="over",Cx(),Rx()}function Wh(){ge==="play"?ge="pause":ge==="pause"&&(ge="play",Kg())}function Gd(n,e,t){let i=Math.cos(n),s=Math.sin(n);return[i*e-s*t,s*e+i*t]}function op(){let n=Y,e=De.move;if(!n.alive||ge!=="play"||n.meleeCd>0||n.stamina<e.meleeCost)return;n.meleeCd=e.meleeCd,n.meleeT=.25,n.stamina-=e.meleeCost,n.staminaT=.6,n.sprint=!1,Wt("knife");let t=Math.cos(n.heading),i=Math.sin(n.heading),s=!1;for(let r of Je){if(r.dead||r.rise>0)continue;let o=r.x-n.x,a=r.z-n.z,l=o*t+a*i,c=Math.abs(-o*i+a*t);l>-.1&&l<1.3&&c<.7&&(s=!0,Hh(r,e.meleeDmg,!1,t,0,i,7,r.x-t*.1,1.2*r.s,r.z-i*.1),r.flinch=.6)}s&&(Wt("shove"),wn=Math.max(wn,2))}function fT(n){let e=Y,t=De.move;if(!e.alive){e.deadT+=n,e.adsT=0,e.deadT>2.2&&ge==="play"&&uT();return}let i=0,s=0,r=le.keys;(r.KeyW||r.ArrowUp)&&(i+=1),(r.KeyS||r.ArrowDown)&&(i-=1),(r.KeyD||r.ArrowRight)&&(s+=1),(r.KeyA||r.ArrowLeft)&&(s-=1),le.joy&&(s+=Le((le.joy.x-le.joy.cx)/22,-1,1),i-=Le((le.joy.y-le.joy.cy)/22,-1,1));let o=Math.hypot(i,s);o>1&&(i/=o,s/=o),e.moving=o>.15,e.moveAmt=o>.15?Math.min(1,o):0,e.strafe=s;let a=(r.ShiftLeft||r.ShiftRight||le.joy&&i>.9)&&i>.3&&!le.ads&&e.reloadT<=0;e.sprint=a&&(e.sprint?e.stamina>0:e.stamina>15),e.sprint?(e.stamina=Math.max(0,e.stamina-t.drain*n),e.staminaT=.6):(e.staminaT-=n)<=0&&(e.stamina=Math.min(t.stamina,e.stamina+t.regen*n));let l=De.weapons[e.weapon];e.adsT=Le(e.adsT+(le.ads&&!e.sprint&&!l.melee?7:-7)*n,0,1);let c=De.playerSpeed*(e.sprint?t.sprintMul:1)*Et(1,.55,e.adsT),[h,f]=Gd(e.heading,i,s);e.x=Le(e.x+h*c*n,.5,Ht-.5),e.z=Le(e.z+f*c*n,hn,_n);for(let x of Je){let m=e.x-x.x,p=e.z-x.z,_=Math.hypot(m,p);_<.45&&_>1e-4&&!(x.rise>0)&&(e.x=Le(e.x+m/_*(.45-_),.5,Ht-.5),e.z=Le(e.z+p/_*(.45-_),hn,_n))}if(Ml(e,.3),e.z=Le(e.z,hn,_n),e.moving){let x=Math.floor(e.phase/Math.PI);e.phase+=n*(e.sprint?13:9)*Math.min(1,o),Math.floor(e.phase/Math.PI)!==x&&Wt("step",100)}let u=le.mouseDown||le.fireTouch>0;if(le.touch&&u){let x=Bx();if(x){let m=Math.atan2(x.z-e.z,x.x-e.x);Math.abs(Is(0,m-e.heading,9))<.3&&(e.heading=Is(e.heading,m,n*2.5))}}e.kick=Math.max(0,e.kick-n*5),e.recoil=Math.max(0,e.recoil-n*9),e.cool-=n,e.inv-=n,e.swing=Math.max(0,e.swing-n*4),e.nadeCd-=n,e.throwT=Math.max(0,e.throwT-n*4),e.swapT=Math.max(0,e.swapT-n),e.meleeT=Math.max(0,e.meleeT-n),e.meleeCd-=n,e.shotT=Math.max(0,e.shotT-n);let d=Math.min(1,n*9);e.swayX-=e.swayX*d,e.swayY-=e.swayY*d,e.roll+=((e.strafe||0)*-.022*(e.sprint?1.6:1)-e.roll)*Math.min(1,n*6),Dh(),e.aimT=oT(se/2,pt/2),e.heat=Math.max(0,e.heat-n*(l.spreadMax?.12:1)),e.reloadT>0&&(e.reloadT-=n,e.reloadT<=0&&iT());let g=(l.auto||l.melee||le.touch)&&u||le.firePressed;g&&(e.sprint=!1),g&&e.cool<=0&&e.reloadT<=0&&e.swapT<=0&&rT(),le.firePressed=!1;for(let x=Hi.length-1;x>=0;x--){let m=Hi[x];if(Math.hypot(m.x-e.x,m.z-e.z)<.55){if(m.type==="ammo")for(let p in e.res)e.owned[p]&&e.res[p]!==1/0&&(e.res[p]=Math.min(De.weapons[p].reserve,e.res[p]+De.weapons[p].mag*2));else m.type==="med"?e.hp=Math.min(e.maxHp,e.hp+25):e.nades=Math.min(9,e.nades+1);wi.push({x:m.x,y:1.2,z:m.z,text:{ammo:"+AMMO",med:"+25 HP",nade:"+GRENADE"}[m.type],t:1,col:"#9fe870"}),Hi.splice(x,1),Wt("pickup",50)}}}function dT(n){let e=De.gravity;for(let t=0;t<Ns;t++){let i=jo[t];i.life-=n;let s=i.life<=0;if(!s)if(Px[i.type]==="smoke"||i.type===ut.FIRE){i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n;let r=Math.pow(.1,n);i.vx*=r,i.vz*=r,i.vy*=Math.pow(.3,n),i.size+=n*(i.type===ut.SMOKE?.35:i.type===ut.FIRE?.05:.2)}else{i.vy-=e*n,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n,i.z<vn+.02?(i.z=vn+.02,i.vz=-i.vz*.3):i.z>En-.02&&(i.z=En-.02,i.vz=-i.vz*.3);let r=Qr(i.x,i.z,0);if(r&&i.y<r.h)s=!0;else if(i.y<=0)if(i.y=0,i.type===ut.CASING)i.vy<-1.2?(i.vy=-i.vy*.38,i.vx*=.5,i.vz*=.5):(Br(i.x,i.z,2,1,i.css),Br(i.x,i.z,1,1,"#fff0b0"),s=!0);else if(i.type===ut.SPARK)s=!0;else{let o=Math.hypot(i.vx,i.vz);if(i.type===ut.BLOOD&&o>2.5){let a=Math.min(6,o/1.1)|0,l=i.vx/o*.04,c=i.vz/o*.04;for(let h=0;h<a;h++)Br(i.x-l*h,i.z-c*h,1,1,i.css)}else Br(i.x,i.z,i.size>.045?2:1,1,i.css||"#5a0a0a");s=!0}}s&&(jo[t]=jo[Ns-1],jo[Ns-1]=i,Ns--,t--)}}function Rg(n){Dt.fail||ge!=="play"||(Dt.fail=n,Y.alive=!1,Y.deadT=0,Wt("hurt"))}function Hx(n){let e=Dt;if(!(ge!=="play"||Se.phase==="idle")){if(e.type==="hold"){let t=0;for(let s of Je)!s.dead&&!(s.rise>0)&&Math.hypot(s.x-e.x,s.z-e.z)<e.r&&t++;let i=Y.alive&&Math.hypot(Y.x-e.x,Y.z-e.z)<e.r;e.contested=t>0&&!i,e.contested?(e.meter-=5*Math.min(t,4)*n,Wt("alarm",900)):e.meter=Math.min(100,e.meter+3*n),e.meter<=0&&Rg("THE RADIO POINT WAS OVERRUN")}else if(e.type==="protect"&&e.truck){let t=e.truck,i=t.hp/t.max;i<.5&&Math.random()<n*8&&It(ut.SMOKE,t.x1-.6,1.6,t.z,U(-.2,.2),U(.6,1.2),U(-.2,.2),be(i<.25?"#2a2622":"#6a6660"),"",U(.2,.35),U(1.5,2.5)),i<.25&&Math.random()<n*10&&It(ut.FIRE,t.x1-.6+U(-.3,.3),1.5,t.z+U(-.4,.4),0,U(.6,1.4),0,be(Lt(["#ffc040","#ff7a20"])),"",U(.08,.16),U(.4,.8)),t.hp<=0&&(e.boomed||(e.boomed=!0,kx(t.x+1,t.z)),Rg("THE CONVOY TRUCK WAS DESTROYED"))}}}function Wd(n){let e=Y.x+Math.cos(Y.heading)*1.4;Tn.x=Le(Tn.x+(e-Tn.x)*Math.min(1,n*4),Bn.half,Ht-Bn.half),Tn.kx*=.8}var Xd=.01;function pT(n){let e=Y,t=le.lookAmt/Math.max(n,.001);le.lookAmt=0;let i=Je.some(s=>!s.dead)||Ti.some(s=>s.kind!=="nade");return ge!=="play"||!e.alive||!i||Se.phase!=="spawn"?1:Math.max(Xd,e.moveAmt,Math.min(.45,t/1800),e.shotT>0?1:0,e.meleeT>0||e.throwT>0?1:0,e.reloadT>0||e.swapT>0?.3:0)}var qd=(n,e,t)=>n+(e-n)*Math.min(1,t*(e>n?14:5));function mT(n){if(on+=n,lE(),Hs=Math.max(0,Hs-n*2.5),El=Math.max(0,El-n),Ah.intensity*=Math.pow(5e-4,n),Rh.intensity*=Math.pow(.002,n),Od=Math.max(0,Od-n),ge==="title"||ge==="levels"){Ud+=n;for(let t of Je)t.heading=Math.PI,t.x-=t.cfg.speed*n,t.phase+=n*t.cfg.speed*7.7,dr(t),t.x<Tn.x-Bn.half-1.5&&(t.x=Tn.x+Bn.half+U(1,6));return}if(ge==="play"&&Xx()){ge="pause";return}if(ge!=="play"&&ge!=="over")return;if(bl>0){bl-=n;return}ge==="play"&&Y.alive&&(cn.time+=n),(ha-=n)<=0&&(Ls=0),Ai&&(Ai.t-=n)<=0&&(Ai=null),fT(n),Wd(n),Rs=qd(Rs,pT(n),n);let e=n;n=pl=e*Rs,Ud+=n,ge==="play"&&lT(n);for(let t=Je.length-1;t>=0;t--){let i=Je[t];i.hitT-=e,i.dead||Dx(i,n),i.dead&&Je.splice(t,1)}for(let t=0;t<Je.length;t++)for(let i=t+1;i<Je.length;i++){let s=Je[t],r=Je[i],o=s.x-r.x,a=s.z-r.z,l=o*o+a*a,c=.42*(s.s+r.s)/2;if(l<c*c&&l>1e-6){let h=Math.sqrt(l),f=(c-h)/h*.5*Math.min(1,n*10);s.x+=o*f,s.z=Le(s.z+a*f,hn,_n),r.x-=o*f,r.z=Le(r.z-a*f,hn,_n)}}for(let t=Gn.length-1;t>=0;t--){let i=Gn[t];if(i.age+=n,i.sink){i.sink-=n;for(let r=1;r<45;r+=3)i.P[r]-=n*.5;i.sink<=0&&(ep(i.rig),Gn.splice(t,1));continue}for(let r of i.spurts)if(r.t>0&&(r.t-=n,Math.random()<.7*Rs)){let o=U(0,Hr.length)|0;It(ut.BLOOD,i.P[r.i*3],i.P[r.i*3+1],i.P[r.i*3+2],U(-1,1),U(.8,2.4),U(-1,1),Hr[o],da[o],.04,3)}if(i.age<4&&Math.random()<.3*Rs){let r=i.age*.12*i.s,o=U(0,6.283);Br(i.x+Math.cos(o)*r,i.z+Math.sin(o)*r,2,1,Lt(da))}if(i.sleep)continue;let s=Ld(i,n,Gn);i.still=s<.0015?i.still+1:0,i.still>45&&i.spurts.every(r=>r.t<=0)&&(i.sleep=!0)}for(let t=Ti.length-1;t>=0;t--){let i=Ti[t];if(i.t+=n,i.kind!=="bullet"&&(i.vy-=De.gravity*n),i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n,i.kind==="bullet")Hd(i,n)&&Ti.splice(t,1);else if(i.kind==="nade"){i.y<=.05&&(i.y=.05,i.vy<-1.5?(i.vy=-i.vy*.35,i.vx*=.55,i.vz*=.55):(i.vy=0,i.vx*=.9,i.vz*=.9)),i.z<vn+.1?(i.z=vn+.1,i.vz=-i.vz*.4):i.z>En-.1&&(i.z=En-.1,i.vz=-i.vz*.4);let s=Qr(i.x,i.z,.05);s&&i.y<s.h&&(i.y-i.vy*n>=s.h-.03?(i.y=s.h,i.vy=Math.abs(i.vy)*.35,i.vx*=.6,i.vz*=.6):(i.x-=i.vx*n,i.z-=i.vz*n,i.vx*=-.4,i.vz*=-.4)),Math.random()<.5*Rs&&It(ut.SMOKE,i.x,i.y+.05,i.z,0,.4,0,be("#bdbdbd"),"",.05,.5),i.t>=De.grenade.fuse&&(kx(i.x,i.z),Ti.splice(t,1))}else if(i.y<=0){let s=Y;s.alive&&Math.hypot(s.x-i.x,s.z-i.z)<.5&&ip(i.dmg,i.x-i.vx,i.z-i.vz);for(let r=0;r<10;r++)It(ut.ACID,i.x,.02,i.z,U(-1.5,1.5),U(.5,2),U(-1.5,1.5),Lt([be("#9be22a"),be("#6fae18")]),"#7fc020",.04,2);It(ut.MIST,i.x,.1,i.z,0,.3,0,be("#7fc020"),"",.3,.5),Ti.splice(t,1)}else Math.random()<.5*Rs&&It(ut.MIST,i.x,i.y,i.z,0,0,0,be("#7fc020"),"",.08,.25)}dT(n);for(let t=is.length-1;t>=0;t--){let i=is[t];if(i.hp<=0){let s=i.type==="sandbags"?"#9a8458":"#777777";for(let r=0;r<20;r++)It(ut.CHUNK,i.x,U(.1,.5),i.z+U(-Ri,Ri),U(-2,2),U(1,3),U(-1,1),be(s),s,.07,2);is.splice(t,1),Wt("impact")}}for(let t=Hi.length-1;t>=0;t--)(Hi[t].t-=n)<=0&&Hi.splice(t,1);for(let t=Qo.length-1;t>=0;t--)(Qo[t].t-=n)<=0&&Qo.splice(t,1);for(let t=ea.length-1;t>=0;t--)(ea[t].t-=e)<=0&&ea.splice(t,1);for(let t=ta.length-1;t>=0;t--)(ta[t].t-=n)<=0&&ta.splice(t,1);for(let t=wi.length-1;t>=0;t--)wi[t].t-=e,wi[t].y+=e*.5,wi[t].t<=0&&wi.splice(t,1);Ji&&(Ji.t-=e)<=0&&(Ji=null),wn=wn>.1?wn*Math.pow(4e-4,e):0,Jr=Math.max(0,Jr-e),gr=Math.max(0,gr-e*3);for(let t=Yr.length-1;t>=0;t--)(Yr[t].t-=e)<=0&&Yr.splice(t,1);if(Je.length&&Math.random()<n*.35*Math.min(Je.length,6)/6){let t=Lt(Je);Fi("groan",t.x,t.z,700)}Hx(n)}var Ui=new C,Or=new C,Jo=new C,ul=new C,mh=new C,Vx=be("#ffe070"),ap=be("#b7ff3a"),gT=be("#2a0808"),Ps=be("#6a0a0a"),Cg=be("#140808");function Pg(n,e){if(ca.ready&&n.kind==="zombie")return n.rig||(n.rig=wx(n)),xT(n,e);let t=n.P,i=n.s*pa,s=n.cut||yx,r=n.missing,o=e?q0:n.col,a=e?q0:n.colB;Ui.set(t[18]-t[9],t[19]-t[10],t[20]-t[11]).normalize(),Or.set(t[3]-t[6],t[4]-t[7],t[5]-t[8]).normalize(),Jo.crossVectors(Or,Ui).normalize();let l=Ui,c=Jo,h=(v,M,b,T)=>{s[v+"-"+M]||Fr(Vn,t,v,M,b*i,b*i,T,l)},f=(v,M,b,T,w)=>Me(Xr,t[v*3],t[v*3+1],t[v*3+2],M*i,b*i,T*i,w),u=(v,M)=>{yl(c.x,c.y,c.z,l.x,l.y,l.z),Me(Hn,t[v*3]+c.x*1.3*i,t[v*3+1]+.9*i,t[v*3+2]+c.z*1.3*i,3.6*i,6.6*i,2.6*i,M,oa)};h(Zr,Bs,4.6,a.pants),h(Bs,la,3.9,a.pants),s["9-10"]||(f(Bs,4.3,4.3,4.3,a.pants),u(la,a.shoe)),h(Kr,ns,4.6,o.pants),h(ns,jr,3.9,o.pants),s["12-13"]||(f(ns,4.3,4.3,4.3,o.pants),u(jr,o.shoe)),Fr(Hn,t,Zr,Kr,5.4*i,5*i,o.pants,c,3.6*i),Fr(Hn,t,Fs,bi,8.4*i,5.4*i,o.shirt,l,1.4*i);let d=(v,M,b,T)=>{f(v,4.4,4.4,4.4,T.shirt),h(v,M,3.4,T.shirt),s[v+"-"+M]||f(M,3.1,3.1,3.1,T.skin),h(M,b,2.9,T.skin),f(b,3.1,3.5,2.4,T.skin)};r!==-1?d(es,zs,ks,a):f(es,3.6,3,3.6,Ps),r!==1?d(ts,mr,Wn,o):f(ts,3.6,3,3.6,Ps),yl(t[0]-t[3],t[1]-t[4],t[2]-t[5],l.x,l.y,l.z),eg.copy(oa),ul.set(t[0]-t[3],t[1]-t[4],t[2]-t[5]).normalize(),mh.crossVectors(ul,l).normalize();let g=t[0],x=t[1],m=t[2],p=(v,M,b,T,w,P,y,E=Xr,D=1)=>Me(E,g+(mh.x*v+ul.x*M+l.x*b)*i,x+(mh.y*v+ul.y*M+l.y*b)*i,m+(mh.z*v+ul.z*M+l.z*b)*i,T*i,w*i,P*i,y,eg,D);s["0-1"]||p(-1,-4.8,0,3,4,3,o.skin,Vn),p(0,0,0,7,8.2,7.6,o.skin),p(-.7,2.6,0,7.3,3.2,7.6,o.hair,Hn),p(0,.2,3.6,1.2,2,1.4,o.skin),p(0,.2,-3.6,1.2,2,1.4,o.skin),p(3.1,.7,1.5,1.8,1.4,1.2,Cg),p(3.1,.7,-1.5,1.8,1.4,1.2,Cg);let _=n.type==="spitter"?ap:Vx;if(p(3.6,.7,1.5,1.4,1.4,1,_,en,.9),p(3.6,.7,-1.5,1.4,1.4,1,_,en,.9),p(3.3,-2.3,.2,3.2,1.1,1.2,gT),s["0-1"]&&f(bi,3.6,2.4,3.6,Ps),!e)for(let v of n.gore){if(s[v.a+"-"+v.b]||r===-1&&(v.a===es||v.a===zs)||r===1&&(v.a===ts||v.a===mr))continue;let M=v.a*3,b=v.b*3,T=Et(t[M],t[b],v.t)+(l.x*v.o1+c.x*v.o2)*i,w=Et(t[M+1],t[b+1],v.t)+(l.y*v.o1+c.y*v.o2)*i,P=Et(t[M+2],t[b+2],v.t)+(l.z*v.o1+c.z*v.o2)*i;Me(Xr,T,w,P,v.sz*i,v.sz*.7*i,v.sz*i,v.c)}}function xT(n,e){let t=n.rig,i=n.cut||yx,s=n.P,r=n.s*pa,o=n.col;t.root.visible=!0;let a=(h,f)=>{t.b[h]&&t.b[h].scale.setScalar(f?.001:1)};a("head",!!i["0-1"]),a("lArm",!!i["3-4"]||n.missing===-1),a("rArm",!!i["6-7"]||n.missing===1),a("lUp",!!i["9-10"]),a("rUp",!!i["12-13"]),Ax(t,s,n.s,!n.O);let l=n.gore.length;if(l!==t.gore||e!==t.white){t.gore=l,t.white=e;let h=Math.min(.6,l/26);t.mats.forEach((f,u)=>{f.color.copy(t.base[u]).multiply(t.tint).lerp(BE,h),f.emissive.setScalar(e?.4:0)})}Ui.set(s[18]-s[9],s[19]-s[10],s[20]-s[11]).normalize();let c=(h,f,u,d,g)=>Me(Xr,s[h*3],s[h*3+1],s[h*3+2],f*r,u*r,d*r,g);if(i["0-1"]&&(c(pr,7,8.2,7.6,o.skin),c(bi,3.6,2.4,3.6,Ps)),i["3-4"]&&(Fr(Vn,s,zs,ks,2.9*r,2.9*r,o.skin,Ui),c(es,3.6,3,3.6,Ps)),i["6-7"]&&(Fr(Vn,s,mr,Wn,2.9*r,2.9*r,o.skin,Ui),c(ts,3.6,3,3.6,Ps)),i["9-10"]&&(Fr(Vn,s,Bs,la,3.9*r,3.9*r,o.pants,Ui),c(Zr,4,3,4,Ps)),i["12-13"]&&(Fr(Vn,s,ns,jr,3.9*r,3.9*r,o.pants,Ui),c(Kr,4,3,4,Ps)),n.missing&&c(n.missing<0?es:ts,3.6,3,3.6,Ps),xt.dark>.2&&!i["0-1"]&&t.b.head){t.b.head.getWorldPosition(zr),Or.set(s[3]-s[6],s[4]-s[7],s[5]-s[8]).normalize(),Jo.crossVectors(Or,Ui).normalize();let h=n.type==="spitter"?ap:Vx,f=n.s;for(let u of[-1,1])Me(en,zr.x+Or.x*.08*f+Jo.x*.09*f+Ui.x*.032*u*f,zr.y+Or.y*.08*f+Jo.y*.09*f,zr.z+Or.z*.08*f+Jo.z*.09*f+Ui.z*.032*u*f,.035*f,.035*f,1,h,Zt,.8)}}var gh=new dt,Lg=new Be,vT=new dt,_T=new dt,yT=new C(0,0,1),Ig=new Be,Gx=new C,MT=new C,ST=Sn([70,76,58]),bT=Sn([40,42,34]),Dg=Sn([34,32,30]);function ET(n){let[e,t,i]=sp(n),s=Oh[n.weapon];Lg.makeBasis(Kt,Ln,In),gh.setFromRotationMatrix(Lg);let r=(l,c,h=0)=>[e+Kt.x*l+Ln.x*c+In.x*h,t+Kt.y*l+Ln.y*c+In.y*h,i+Kt.z*l+Ln.z*c+In.z*h];if(Bi.ready&&s.model){let[l,c,h]=r(s.modelX||0,0);$o(zi[s.model],Gx.set(l,c,h),gh,1)}else for(let[l,c,h,f,u,d,g,x,m,p]of s.parts){let[_,v,M]=r(c,h,f),b=l==="c",T=(p||0)-(b?Math.PI/2:0),w=T?_T.copy(gh).multiply(vT.setFromAxisAngle(yT,T)):gh;b?Me(xl,_,v,M,d,u,d,x,w):Me(m==="m"?Si:Hn,_,v,M,u,d,g,x,w)}let o=ct.position,a=(l,c,h,f)=>{let u=o.x+Kt.x*.1-Ln.x*.5+In.x*f,d=o.y-.5,g=o.z+Kt.z*.1-Ln.z*.5+In.z*f,x=Et(l,u,.14),m=Et(c,d,.14),p=Et(h,g,.14);Me(Xr,l,c,h,.07,.06,.075,Dg),kr(Vn,l,c,h,x,m,p,.055,Dg),kr(Vn,x,m,p,Et(x,u,.12),Et(m,d,.12),Et(p,g,.12),.075,bT),kr(Vn,Et(x,u,.1),Et(m,d,.1),Et(p,g,.1),u,d,g,.085,ST)};{let[l,c,h]=r(-.015,-.035);a(l,c,h,.26)}if(s.left){let[l,c,h]=r(s.left[0],s.left[1]-.02,-.005);a(l,c,h,-.06)}}var xh=new dt,Ug=new Ms(0,0,0,"YZX");function TT(n){if(n.missing===1||n.cut&&n.cut["6-7"])return;let e=Y,t=(n.P[ks*3]+n.P[Wn*3])/2,i=(n.P[ks*3+1]+n.P[Wn*3+1])/2,s=(n.P[ks*3+2]+n.P[Wn*3+2])/2,r=Math.atan2(1.3-i,Math.hypot(e.x-t,e.z-s))*(n.burst>0||n.los?1:0)-(n.los?0:.5);Ug.set(0,-n.heading,r),xh.setFromEuler(Ug);let o=Math.cos(n.heading),a=Math.sin(n.heading),l=Math.cos(r),c=Math.sin(r);wT(n,t,i,s,xh)||(Me(Si,t+o*.06*l,i+.03+c*.06,s+a*.06*l,.2,.035,.03,Fg,xh),Me(Si,t-o*.01,i-.03,s-a*.01,.035,.08,.028,Fg,xh)),n.flashT>0&&Me(en,t+o*.2*l,i+.03+c*.2,s+a*.2*l,.22,.22,1,Wx,Zt,2)}function wT(n,e,t,i,s){return Bi.ready?($o(zi.pistol,Gx.set(e,t,i),s,1.1*n.s),!0):!1}var Yo={post:be("#4a3a28"),wire:be("#9a9a9a"),plank:be("#3a2c1c"),spike:be("#8a8a8a"),bagD:be("#7e6e4e"),bag:be("#a89468")},AT=new dt().setFromEuler(new Ms(Math.PI/4,0,Math.PI/4));function Ng(n,e){let t=e?.6:.55+.45*n.hp/n.max,i=n.z-Ri,s=n.z+Ri;if(n.type==="wire"){for(let r=i;r<=s;r+=.9)Me(Hn,n.x,.32,r,.06,.64,.06,Yo.post,Zt,t);for(let r=i;r<=s;r+=.05){let o=r*9;Me(Si,n.x+Math.cos(o)*.2,.32+Math.sin(o)*.2,r,.02,.02,.05,Yo.wire,Zt,t)}}else if(n.type==="spikes"){Me(Hn,n.x,.03,(i+s)/2,.36,.06,s-i,Yo.plank,Zt,t);for(let r=i+.1;r<=s;r+=.28)for(let o of[-.1,.1])Me(Si,n.x+o,.1,r,.11,.11,.11,Yo.spike,AT,t)}else for(let r=i;r<=s;r+=.5)for(let o=0;o<3;o++){let a=(o&1)*.25;Me(Hn,n.x,.1+o*.18,r+a,.5,.2,.46,o&1?Yo.bagD:Yo.bag,Zt,t)}}var ur={ammo:be("#4a5a2c"),band:be("#d8b040"),med:be("#e8e8e0"),red:be("#c02020"),nade:be("#3c5a2a")},fr=new dt,RT=new C(0,1,0),Og=be("#ff8a3a"),Fg=be("#2a2a2c"),CT=be("#ffe2a0"),Wx=be("#fff2c0"),kg=be("#ffa040"),PT=be("#ffd090"),LT=be("#ffffff");function gl(){Dh();for(let u of j0)u.count=0;if(Bi.ready)for(let u of Dd)for(let d of zi[u])d.count=0;for(let u of Je)u.rig&&(u.rig.root.visible=!1);for(let u of Gn)u.rig&&(u.rig.root.visible=!1);let n=lp(),e=n?Y.x:Tn.x,t=n?Y.z:Bn.z,i=(u,d=t)=>n?(u-e)**2+(d-t)**2<2e3:Math.abs(u-e)<Bn.half+3;for(let u of Je)!u.dead&&i(u.x,u.z)&&(Pg(u,u.hitT>0),u.type==="gunner"&&TT(u));for(let u of Gn)i(u.x,u.z)&&Pg(u,!1);n&&Y.alive&&!Ox(Y)&&ET(Y);let s=Dt.truck;if(s&&i(s.x)){let u=.4+.6*Math.max(0,s.hp)/s.max,d=be("#4e5a36"),g=be("#3a4428"),x=be("#161616"),m=be("#1c242c");Me(Hn,s.x0+1.55,1.4,s.z,3.1,1.5,s.d,d,Zt,u),Me(Si,s.x0+2.1,.62,s.z,4.3,.22,s.d*.9,x,Zt,u),Me(Si,s.x1-.65,1.05,s.z,1.25,1.1,s.d*.95,g,Zt,u),Me(Si,s.x1-.05,1.25,s.z,.1,.5,s.d*.8,m,Zt,u);for(let p of[s.x0+.6,s.x0+1.6,s.x1-.7])for(let _ of[-1,1])Me(xl,p,.36,s.z+_*s.d*.46,.72,.26,.72,x,ax,u)}if(n&&xt.obj==="hold"){let u=Dt,d=u.contested?be("#ff3020"):be("#9fe870");for(let g=0;g<48;g++){let x=g/48*6.283+on*.3;Me(en,u.x+Math.cos(x)*u.r,.05,u.z+Math.sin(x)*u.r,.2,.2,1,d,Zt,.5+.3*Math.sin(on*5))}Math.sin(on*4)>0&&Me(en,Gr+.15,2.55,0,.3,.3,1,d,Zt,1.5)}for(let u of is)i(u.x)&&Ng(u,!1);if(ge==="place"){let u=$d(le.mx,le.my);u&&Ng({type:Us,x:Le(u.x,1,Ht-1),z:Le(u.z,hn+Ri-1,_n-Ri+1),hp:1,max:1},!0)}for(let u of Hi){if(!i(u.x,u.z)||u.t<3&&(on*8|0)%2)continue;fr.setFromAxisAngle(RT,on*2+u.x);let d=.22+Math.abs(Math.sin(on*4+u.x))*.1;Bi.ready&&u.type!=="nade"?$o(zi[u.type],bh.set(u.x,d-.1,u.z),fr,u.type==="ammo"?1.7:.75):u.type==="ammo"?(Me(Hn,u.x,d,u.z,.36,.24,.24,ur.ammo,fr),Me(Si,u.x,d+.03,u.z,.37,.06,.25,ur.band,fr)):u.type==="med"?(Me(Hn,u.x,d,u.z,.34,.26,.26,ur.med,fr),Me(Hn,u.x,d,u.z,.35,.06,.2,ur.red,fr),Me(Hn,u.x,d,u.z,.35,.2,.06,ur.red,fr)):Me(xl,u.x,d,u.z,.14,.2,.14,ur.nade,fr),Me(en,u.x,.05,u.z,.7,.7,1,ur.band,Zt,.2+.1*Math.sin(on*6))}for(let u of Ti)u.kind==="nade"?Me(xl,u.x,u.y,u.z,.09,.12,.09,ur.nade):u.kind==="bullet"?(kr(Zo,u.x-u.vx*.035,u.y-u.vy*.035,u.z-u.vz*.035,u.x,u.y,u.z,.014,Og,2.2),Me(en,u.x,u.y,u.z,.14,.14,1,Og,Zt,1.4)):Me(en,u.x,u.y,u.z,.3,.3,1,ap);for(let u=0;u<Ns;u++){let d=jo[u],g=Px[d.type],x=Math.max(0,d.life/d.max);if(g==="solid")d.type===ut.CASING?Me(Si,d.x,d.y+.01,d.z,.024,.01,.01,d.col):Me(Xr,d.x,d.y+d.size/2,d.z,d.size,d.size*.8,d.size,d.col);else if(g==="glow")Me(en,d.x,d.y,d.z,d.size*2.6,d.size*2.6,1,d.col,Zt,x*1.6);else{let m=d.size*1.8*Math.min(1,x*2.2);Me(jd,d.x,d.y,d.z,m,m,1,d.col)}}for(let u of Qo){let d=u.t/.08;kr(Zo,u.x0,u.y0,u.z0,u.x1,u.y1,u.z1,.008,CT,d*1.5),kr(Zo,u.x0,u.y0,u.z0,u.x1,u.y1,u.z1,.02,kg,d*.3)}if(Nd>0&&Qn){let u=Qn.big,d=(.28+Qn.v*.2)*u;Me(en,Qn.x,Qn.y,Qn.z,.07*u,.07*u,1,Wx,Zt,1.6),kr(Zo,Qn.x,Qn.y,Qn.z,Qn.x+Kt.x*d*.4,Qn.y+Kt.y*d*.4,Qn.z+Kt.z*d*.4,.025*u,kg,2),Nd--}for(let u of ea){let d=u.t/.15,g=Math.cos(u.h),x=Math.sin(u.h);for(let m=0;m<9;m++){let p=u.p+1.5-m*.3,_=.55;Me(en,u.x+g*Math.cos(p)*_,u.y+Math.sin(p)*_,u.z+x*Math.cos(p)*_,.1,.1,1,LT,Zt,d)}}for(let u of ta){let d=u.t/.35,g=.2+(1-d)*De.grenade.radius*1.1;for(let x=0;x<32;x++){let m=x/32*6.283;Me(en,u.x+Math.cos(m)*g,.1,u.z+Math.sin(m)*g,.5,.5,1,PT,Zt,d*1.5)}}let r=Sn(xt.pal.light);for(let u=Oi+1.2;u<Oi+rn;u+=2.4)for(let d of[vn+.03,En-.03])i(u,d)&&Math.sin(on*2+u*.7+d)>0&&Me(en,u,.3,d,.12,.12,1,r,Zt,1.2);for(let u of j0)u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0;if(Bi.ready)for(let u of Dd)for(let d of zi[u])d.instanceMatrix.needsUpdate=!0;aa&&hx%3===0&&(Al.needsUpdate=!0,aa=!1);let o=wd.slice().sort((u,d)=>Math.hypot(u.x-e,u.z-t)-Math.hypot(d.x-e,d.z-t));jg.forEach((u,d)=>{let g=o[d];g?u.position.set(g.x,4.8,g.z):u.position.set(-100,4,0)});let a=Fh.uniforms,l=ge==="title"||ge==="levels"||ge==="over"||ge==="levelclear";a.time.value=on%100;let c=performance.now(),h=Math.min(.25,(c-(gl.lt??c))/1e3);gl.lt=c,a.bars.value=Et(a.bars.value,l?1:0,1-Math.exp(-h*5));let f=Math.abs(Is(0,Y.heading-(gl.lastH??Y.heading),9));gl.lastH=Y.heading,a.blur.value=n?Le(f*.35+(Y.sprint?.006:0),0,.03):0,a.ca.value=.006+Jr*.03+a.slow.value*.004,a.slow.value=ge==="play"?1-Math.sqrt(Rs):0,Ds.enabled=$r===0&&(l||Y.adsT>.3),Ds.enabled&&(Ds.uniforms.focus.value=l?7:Math.max(1,ct.position.distanceTo(zr.set(Y.aimT.x,Y.aimT.y,Y.aimT.z)))),os.render()}function lp(){return ge!=="title"&&ge!=="levels"}function Dh(){let n=nt.shake?wn*.02:0,e=lp(),t=e?nt.fov*Et(1,De.weapons[Y.weapon].zoom||De.move.adsMul,Y.adsT):Bn.fov;ct.fov!==t&&(ct.fov=t,ct.updateProjectionMatrix());let i,s=0;if(e){let r=Y,o=r.alive?0:Math.min(1,r.deadT*1.6),a=r.alive&&r.moving?Math.abs(Math.sin(r.phase))*.04:0,l=Et(tE*r.s+a,.28,o),c=r.pitch+r.kick;ct.position.set(r.x+U(-n,n)*.3,l+U(-n,n)*.3,r.z+U(-n,n)*.3),ct.lookAt(r.x+Math.cos(r.heading)*Math.cos(c),l+Math.sin(c),r.z+Math.sin(r.heading)*Math.cos(c)),o>0?ct.rotateZ(o*.9):r.roll&&ct.rotateZ(-r.roll),i=r.x+Math.cos(r.heading)*8,s=r.z+Math.sin(r.heading)*8}else ct.position.set(Tn.x-4+Tn.kx+U(-n,n),Bn.y+U(-n,n),Bn.z),ct.lookAt(Tn.x+6,Bn.lookY,Bn.lookZ),i=Tn.x;ct.updateMatrixWorld(),Wr.position.copy(ct.position),sa.position.copy(ct.position),ma.position.copy(ct.position).addScaledVector(Ki,120),ln.position.set(i+Ki.x*60,Ki.y*60,s+Ki.z*60),ln.target.position.set(i,0,s),ln.target.updateMatrixWorld()}function IT(){vl=[],hx++,gl(),ot.setTransform(1,0,0,1,0,0),ot.clearRect(0,0,se,pt),ot.imageSmoothingEnabled=!1,ot.globalAlpha=1,ot.globalCompositeOperation="source-over",gr>0&&(ot.fillStyle=`rgba(255,190,120,${Math.min(.35,gr).toFixed(3)})`,ot.fillRect(0,0,se,pt));for(let e of wi){let[t,i,s]=mE(e.x,e.y,e.z);s<1&&(ot.globalAlpha=Math.min(1,e.t*2),Ee(ot,e.text,t|0,i|0,e.col,1,"center",!0))}if(ot.globalAlpha=1,Jr>0||ge==="play"&&Y.alive&&Y.hp<Y.maxHp*.3){let e=Math.max(Jr,Y.hp<Y.maxHp*.3?.15+.1*Math.sin(on*6):0);ot.fillStyle=`rgba(150,0,0,${e.toFixed(2)})`,ot.fillRect(0,0,se,10),ot.fillRect(0,pt-10,se,10),ot.fillRect(0,0,10,pt),ot.fillRect(se-10,0,10,pt)}ge==="title"?kT(ot):ge==="levels"?BT(ot):(FT(ot),Ji&&ge==="play"&&(ot.globalAlpha=Math.min(1,Ji.t*2),Ee(ot,Ji.text,se/2,64,"#fff",4,"center",!0),Ee(ot,Ji.sub,se/2,90,"#e8c860",2,"center",!0),ot.globalAlpha=1),ge==="shop"?VT(ot):ge==="place"?GT(ot):ge==="pause"?WT(ot):ge==="over"?XT(ot):ge==="levelclear"&&qT(ot)),ge!=="play"&&document.pointerLockElement&&document.exitPointerLock();let n=ge==="play"&&!le.touch&&Y.alive?"none":"default";Qi.style.cursor!==n&&(Qi.style.cursor=n),Hs>0&&(ot.fillStyle=`rgba(0,0,0,${Hs.toFixed(2)})`,ot.fillRect(0,0,se,pt)),Xx()&&(ot.fillStyle="rgba(0,0,0,.88)",ot.fillRect(0,0,se,pt),ot.save(),ot.translate(se/2,100),ot.rotate(Math.sin(on*2)>0?Math.PI/2:0),an(ot,"phone",-15,-21,6),ot.restore(),Ee(ot,"ROTATE TO LANDSCAPE",se/2,160,"#fff",3,"center",!0))}function Xx(){return le.touch&&innerHeight>innerWidth}function Xh(n){let e=Math.floor(n/60),t=Math.floor(n%60);return e+":"+(t<10?"0":"")+t}function DT(){nt.sound=Ue.on=!nt.sound,Ue.master&&(Ue.master.gain.value=Ue.on?.6:0),ua()}function UT(){nt.music=!nt.music,ua()}function qx(){try{let n=document.documentElement,e=n.requestFullscreen||n.webkitRequestFullscreen,t=e&&e.call(n);t&&t.catch&&t.catch(()=>{}),screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}}function Mi(n,e,t,i,s,r="rgba(10,10,10,.55)",o="rgba(255,255,255,.22)"){n.fillStyle=r,n.fillRect(e,t,i,s),n.strokeStyle=o,n.lineWidth=1,n.strokeRect(e+.5,t+.5,i-1,s-1)}function Tt(n,e,t,i,s,r,o,a={}){vl.push({x:e,y:t,w:i,h:s,fn:o,hold:a.hold,disabled:a.disabled}),Mi(n,e,t,i,s,a.disabled?"rgba(30,30,30,.55)":a.col||"rgba(14,14,14,.6)",a.border),r&&Ee(n,r,e+i/2,t+(s-5*(a.s||2))/2|0,a.disabled?"#777":a.tc||"#fff",a.s||2,"center",!0)}function NT(n,e,t,i,s){Mi(n,e,t,i,s,"rgba(0,0,0,.5)");let r=i/Ht,o=a=>t+1+(Le(a,hn,_n)-hn)/(_n-hn)*(s-3);n.fillStyle="#8a8a8a";for(let a of is)n.fillRect(e+a.x*r,o(a.z-Ri),1,Math.max(1,o(a.z+Ri)-o(a.z-Ri)));n.fillStyle="#f0d040";for(let a of Hi)n.fillRect(e+a.x*r,o(a.z),1,1);for(let a of Je){if(a.dead)continue;let l=a.type==="brute"?2:1;n.fillStyle=l>1?"#ff7040":a.type==="gunner"?"#ffc030":"#d02020",n.fillRect(Le(e+a.x*r,e,e+i-2),o(a.z),l,l)}if(Y.alive){let a=e+Y.x*r,l=o(Y.z);n.fillStyle="#7cff5a",n.fillRect(a-1,l-1,2,2),n.fillStyle="#c8ffb0",n.fillRect(a+Math.cos(Y.heading)*3,l+Math.sin(Y.heading)*2,1,1)}}function OT(n,e,t,i){let s=t.weapon;if(Ee(n,i.name,e,224,"#aaa",1),i.melee){Ee(n,"--",e,234,"#fff",2,"left",!0);return}let r=t.mag[s],o=s==="shotgun",a=o?3:2,l=o?4:3,c=r<=Math.ceil(i.mag*.25);for(let h=0;h<i.mag;h++){let f=e+h*l,u=h<r;n.fillStyle=u?o?"#c03020":"#d8b040":"#2a2622",n.fillRect(f,233,a,6),u&&(n.fillStyle=o?"#d8b040":"#fff0b0",n.fillRect(f,233,a,o?2:1))}if(t.reloadT>0){let h=1-t.reloadT/(i.reload*(1-bn.reload*De.upgrade.reload));n.fillStyle="#e8c860",n.fillRect(e,241,i.mag*l*Le(h,0,1),2)}Ee(n,t.res[s]===1/0?"INF":t.res[s],e,246,"#fff",2,"left",!0),t.reloadT>0?Ee(n,"RELOADING",e+40,250,"#e8c860",1):c&&(on*4|0)%2&&Ee(n,r?"LOW AMMO":le.touch?"RELOAD":"RELOAD [R]",e+40,250,"#e04040",1)}function FT(n){let e=Y,t=De.weapons[e.weapon];Tt(n,4,4,24,24,"",Wh),n.fillStyle="#fff",n.fillRect(11,10,3,12),n.fillRect(18,10,3,12);let i=Le(e.hp/e.maxHp,0,1);if(an(n,"heart",33,5),Mi(n,45,6,92,9),n.fillStyle=i>.3?"#5fbf3a":(on*6|0)%2?"#d03a2a":"#801a10",n.fillRect(46,7,90*i,7),n.fillStyle="rgba(255,255,255,.25)",n.fillRect(46,7,90*i,2),Ee(n,Math.ceil(e.hp)+"/"+e.maxHp,49,9,"#fff",1),Mi(n,45,16,92,4,"rgba(0,0,0,.5)"),n.fillStyle=e.stamina<15?"#c08020":"#e8d070",n.fillRect(46,17,90*e.stamina/De.move.stamina,2),an(n,"coin",33,22),Ee(n,Ei,45,24,"#ffd84a",2,"left",!0),an(n,"skull",33,35),Ee(n,cn.kills,45,37,"#ddd",1,"left",!0),Ee(n,xt.name,se/2,3,"#bbb",1,"center",!0),Ee(n,"WAVE "+Se.n+(xt.waves===1/0?"":"/"+xt.waves),se/2,10,"#fff",2,"center",!0),Se.spec&&Se.phase!=="idle"){let r=Se.spec.list.length,o=Se.queue.length+Je.length;Mi(n,se/2-50,23,100,5,"rgba(0,0,0,.5)"),n.fillStyle="#c02020",n.fillRect(se/2-49,24,98*Le(1-o/r,0,1),3),Ee(n,xt.obj==="survive"&&Se.phase==="spawn"?"SURVIVE "+Xh(Math.max(0,Se.timer)):o+" LEFT",se/2,30,"#ccc",1,"center",!0)}if(xt.obj==="hold"){let r=Dt,o=r.contested&&(on*6|0)%2;Ee(n,"RADIO POINT "+Math.ceil(r.meter)+"%"+(r.contested?" - RETAKE IT":""),se/2,38,o?"#ff4030":"#9fe870",1,"center",!0)}if(xt.obj==="protect"&&Dt.truck){let r=Dt.truck,o=Math.max(0,r.hp)/r.max;Ee(n,"CONVOY TRUCK",se/2,38,"#ddd",1,"center",!0),Mi(n,se/2-40,45,80,4,"rgba(0,0,0,.5)"),n.fillStyle=o>.3?"#7cc050":"#d03a2a",n.fillRect(se/2-39,46,78*o,2)}Ai&&Ee(n,"X"+Ai.n+" CHAIN +$"+Ai.bonus,se/2,54,"#ff9a30",Ai.t>1.1?3:2,"center",!0),NT(n,se-130,6,92,14),Ee(n,"SCORE "+eo,se-38,24,"#ddd",1,"right",!0),ge==="play"&&(Se.phase==="countdown"||Se.phase==="spawn"&&Se.queue.length)&&(n.globalAlpha=.45+.55*(.5+.5*Math.sin(on*8)),n.fillStyle="#e01010",n.beginPath(),n.moveTo(se-34,6),n.lineTo(se-6,16),n.lineTo(se-34,26),n.closePath(),n.fill(),xt.flank>0&&(n.beginPath(),n.moveTo(32,46),n.lineTo(6,55),n.lineTo(32,64),n.closePath(),n.fill()),n.globalAlpha=1);let s=(r,o,a)=>{let l=r-Y.heading,c=Math.cos(l),h=Math.sin(l),f=se/2+h*100,u=pt/2-c*62;n.fillStyle=o,n.fillRect(f-a,u-a,a*2,a*2)};if(e.alive)for(let r of Je){if(r.dead)continue;let o=Math.atan2(r.z-e.z,r.x-e.x),a=Math.hypot(r.x-e.x,r.z-e.z);a<14&&Math.abs(Is(0,o-e.heading,9))>.85&&s(o,`rgba(224,32,32,${(1-a/14).toFixed(2)})`,2)}for(let r of Yr)s(r.a,`rgba(255,40,30,${(r.t*.8).toFixed(2)})`,5);if(Uh.forEach((r,o)=>{let a=68+o*28,l=e.owned[r],c=e.weapon===r;Tt(n,4,a,34,26,"",()=>Vh(r),{border:c?"#f0d040":void 0,col:c?"rgba(60,50,10,.6)":void 0}),n.globalAlpha=l?1:.3,Gg(n,r,13,a+13,.85),n.globalAlpha=1,Ee(n,String(o+1),6,a+2,c?"#f0d040":"#999",1),l?De.weapons[r].melee||Ee(n,e.mag[r],36,a+19,e.mag[r]?"#ddd":"#e04040",1,"right"):an(n,"lock",28,a+16)}),Tt(n,148,228,36,36,"",Fx),an(n,"nade",157,236,2),Mi(n,146,222,14,11,"#a02020"),Ee(n,e.nades,153,225,"#fff",1,"center"),le.touch||(Ee(n,"G",181,257,"#999",1,"right"),Ee(n,"SHIFT SPRINT  F SHOVE  RMB AIM",se-6,258,"#777",1,"right")),OT(n,le.touch?284:196,e,t),le.touch&&ge==="play"){Tt(n,192,228,40,36,"",Lh),an(n,"reload",203,238,2),Tt(n,238,228,40,36,"",()=>Vd(1)),an(n,"swap",249,240,2),Tt(n,se-106,158,42,32,"ADS",()=>{},{s:1,hold:"ads",col:le.ads?"rgba(60,90,140,.6)":void 0}),Tt(n,se-58,152,52,36,"SHOVE",op,{s:1});let r=se-60,o=196,a=le.fireTouch>0;vl.push({x:r,y:o,w:56,h:56,hold:"fire"}),n.fillStyle=a?"rgba(200,60,40,.6)":"rgba(0,0,0,.4)",n.beginPath(),n.arc(r+28,o+28,27,0,6.283),n.fill(),n.strokeStyle="rgba(255,255,255,.4)",n.stroke(),Ee(n,"FIRE",r+28,o+24,"#fff",2,"center",!0);let l=le.joy,c=l?l.cx:48,h=l?l.cy:222;n.strokeStyle="rgba(255,255,255,.25)",n.beginPath(),n.arc(c,h,22,0,6.283),n.stroke();let f=l?Le(l.x-l.cx,-22,22):0,u=l?Le(l.y-l.cy,-22,22):0;n.fillStyle="rgba(255,255,255,.35)",n.beginPath(),n.arc(c+f,h+u,9,0,6.283),n.fill()}if(e.alive&&e.reloadT>0&&!t.melee){let r=Le(1-e.reloadT/(t.reload*(1-bn.reload*De.upgrade.reload)),0,1);Mi(n,se/2-12,pt/2+14,24,4,"rgba(0,0,0,.6)"),n.fillStyle="#e8c860",n.fillRect(se/2-11,pt/2+15,22*r,2)}if(ge==="play"&&e.alive&&Ox(e))n.fillStyle="#000",n.beginPath(),n.rect(0,0,se,pt),n.arc(se/2,pt/2,112,0,Math.PI*2),n.fill("evenodd"),n.fillStyle="rgba(0,0,0,.85)",n.fillRect(se/2-112,pt/2,224,1),n.fillRect(se/2,pt/2-112,1,224),n.fillStyle="#ff3030",n.fillRect(se/2-1,pt/2-1,2,2);else if(ge==="play"&&e.alive&&e.adsT>.5)n.fillStyle="#fff",n.fillRect(se/2-1,pt/2-1,2,2);else if(ge==="play"&&e.alive){let r=se/2,o=pt/2,a=Math.round(3+((t.spread||0)+e.heat)*120+e.recoil*3),l=(c,h,f,u)=>{n.fillStyle="rgba(0,0,0,.6)",n.fillRect(c-1,h-1,f+2,u+2),n.fillStyle="#fff",n.fillRect(c,h,f,u)};if(l(r-a-4,o,4,1),l(r+a+1,o,4,1),l(r,o-a-4,1,4),l(r,o+a+1,1,4),n.fillStyle="#fff",n.fillRect(r,o,1,1),!le.touch&&!document.pointerLockElement&&!le.noLock&&Ee(n,"CLICK TO CAPTURE THE MOUSE",r,o+22,"#fff",1,"center",!0),El>0){n.fillStyle=tp?"#ff3030":"#fff";for(let c=2;c<5;c++)n.fillRect(r-c,o-c,1,1),n.fillRect(r+c,o-c,1,1),n.fillRect(r-c,o+c,1,1),n.fillRect(r+c,o+c,1,1)}}}function Yx(n,e){let t=cn.shots?Math.round(cn.hits/cn.shots*100):0;[["skull",cn.kills,"KILLS"],["burst",cn.heads,"HEADSHOTS"],["bolt",t+"%","ACCURACY"],["flag",Xh(cn.time),"TIME"],["coin",eo,"SCORE"]].forEach(([i,s,r],o)=>{let a=se/2-200+o*80;Mi(n,a,e,76,44,"rgba(0,0,0,.45)"),an(n,i,a+38-ia[i].width,e+4,2),Ee(n,s,a+38,e+25,"#fff",2,"center",!0),Ee(n,r,a+38,e+37,"#aaa",1,"center")})}function kT(n){n.fillStyle="rgba(0,0,0,.3)",n.fillRect(0,0,se,pt),Ee(n,"DEAD LINE",se/2+3,39,"#5a0808",7,"center"),Ee(n,"DEAD LINE",se/2,36,"#ece4d4",7,"center"),Ee(n,"FPS",se/2+128,36,"#d04030",3,"left",!0);for(let t=0;t<9;t++){let i=se/2-118+t*29+t*7%11,s=(on*5+t*3.7)%16;n.fillStyle="#8a1010",n.fillRect(i,71,2,s),s>12&&n.fillRect(i,74+s,2,2)}Ee(n,"HOLD THE ROAD. DO NOT FALL BACK.",se/2,98,"#d04030",2,"center",!0);let e=matchMedia("(pointer:coarse)").matches;(on*2|0)%2&&Ee(n,e?"TAP TO START":"CLICK OR PRESS ENTER",se/2,200,"#fff",2,"center",!0),Ee(n,e?"LEFT THUMB MOVE (PUSH TO SPRINT)  -  DRAG RIGHT SIDE TO LOOK  -  HOLD FIRE":"WASD MOVE  MOUSE LOOK  CLICK FIRE  RMB AIM  SHIFT SPRINT  F SHOVE  R RELOAD  1-6 WEAPONS  G GRENADE  ESC PAUSE",se/2,222,"#ddd",1,"center",!0),ti.done?ti.failed&&Ee(n,"ASSETS MISSING - RUN THROUGH A WEB SERVER (NPM RUN DEV)",se/2,252,"#e08060",1,"center",!0):Ee(n,"LOADING ASSETS "+Math.round(ti.progress*100)+"%",se/2,252,"#aaa",1,"center",!0),an(n,"star",se/2-52,240),Ee(n,"ZONES OPEN "+zt.unlocked+"/"+ii.length,se/2-42,241,"#e8c860",1),e&&Tt(n,se-64,6,58,22,"FULL",qx,{s:1})}function BT(n){n.fillStyle="rgba(0,0,0,.6)",n.fillRect(0,0,se,pt),Ee(n,"SELECT LEVEL",se/2,24,"#e8c860",3,"center",!0),ii.forEach((e,t)=>{let i=8+t*94,s=56,r=88,o=150,a=t>=zt.unlocked,l=e.pal;Tt(n,i,s,r,o,"",()=>Gh(t,!1),{disabled:a,col:"rgba(24,22,18,.92)",border:a?void 0:"#6a5a3a"}),n.fillStyle=Cs(l.skyT),n.fillRect(i+4,s+4,r-8,14),n.fillStyle=Cs(l.fog),n.fillRect(i+4,s+18,r-8,6),n.fillStyle=Cs(l.wall),n.fillRect(i+4,s+24,r-8,16);for(let h=0;h<r-8;h+=4)n.fillStyle=Cs(h>>2&1?l.stripeA:l.stripeB),n.fillRect(i+4+h,s+28,4,3);n.fillStyle=Cs(l.road),n.fillRect(i+4,s+40,r-8,22),n.fillStyle=Cs(l.fg),n.fillRect(i+4,s+62,r-8,6),e.dark&&(n.fillStyle=`rgba(4,6,16,${e.dark})`,n.fillRect(i+4,s+4,r-8,64)),Ee(n,t+1+"",i+8,s+76,"#999",2),Ee(n,e.name,i+r/2,s+96,a?"#777":"#fff",2,"center",!0),Ee(n,e.waves===1/0?"ENDLESS":e.waves+" WAVES",i+r/2,s+110,"#aaa",1,"center"),Ee(n,{waves:"CLEAR",hold:"HOLD POINT",survive:"SURVIVE",protect:"PROTECT"}[e.obj],i+r/2,s+118,"#e8a060",1,"center");let c=zt.best[t];a?an(n,"lock",i+r/2-7,s+124,2):c.wave&&(an(n,"star",i+14,s+128),Ee(n,"BEST W"+c.wave,i+24,s+129,"#e8c860",1))}),Tt(n,8,230,70,28,"< BACK",()=>{ge="title"},{s:1}),Ee(n,"CLEAR A ZONE TO UNLOCK THE NEXT",se/2,242,"#999",1,"center"),zt.bank&&Ee(n,"BANK $"+zt.bank,se-12,242,"#9fe870",1,"right")}var zT=["ammo","nade","gun:smg","gun:shotgun","gun:sniper","med","burst","bolt","reload","heart","wire","spikes","bags"],HT=[null,null,null,null,null,null,["dmg",8],["rate",5],["reload",5],["hp",8],null,null,null];function VT(n){n.fillStyle="rgba(0,0,0,.5)",n.fillRect(0,0,se,pt),Mi(n,8,6,se-16,pt-12,"rgba(24,22,18,.94)","#6a5a3a"),Ee(n,"SUPPLY DEPOT",18,12,"#e8c860",2,"left",!0),an(n,"coin",se-18-(String(Ei).length*8-2)-12,11),Ee(n,Ei,se-18,12,"#ffd84a",2,"right",!0),Ee(n,Se.n?"WAVE "+Se.n+" CLEARED":xt.name,se/2,14,"#aaa",1,"center"),cT().forEach((e,t)=>{let i=t%3,s=t/3|0,r=18+i*150,o=28+s*37,a=e.can&&Ei>=e.cost;Tt(n,r,o,144,33,"",()=>{e.can&&Ei>=e.cost&&(Ei-=e.cost,e.buy())},{disabled:!a,col:"rgba(40,36,28,.9)"}),n.globalAlpha=a?1:.45;let l=zT[t];l.startsWith("gun:")?Gg(n,l.slice(4),r+15,o+16,.8):an(n,l,r+17-ia[l].width,o+16-ia[l].height,2),n.globalAlpha=1,Ee(n,e.label,r+36,o+5,a?"#fff":"#888",2);let c=HT[t];if(c){for(let h=0;h<c[1];h++)n.fillStyle=h<bn[c[0]]?"#e8c860":"#3a3428",n.fillRect(r+36+h*6,o+23,5,4);Ee(n,bn[c[0]]>=c[1]?"MAX":"$"+e.cost,r+138,o+23,a?"#e8c860":"#776a50",1,"right")}else Ee(n,e.sub||"$"+e.cost,r+36,o+21,a?"#e8c860":"#776a50",1)}),Tt(n,se/2-80,222,160,36,Se.n?"NEXT WAVE >":"START >",()=>{ge="play",zx()},{col:"rgba(120,30,20,.9)",border:"#e04030"}),Ee(n,"DEFENSES "+is.length+"/8",330,236,"#999",1),Ee(n,"GUNS STAY UNLOCKED",330,246,"#777",1)}function GT(n){Mi(n,se/2-150,30,300,24,"rgba(0,0,0,.7)"),an(n,{wire:"wire",spikes:"spikes",sandbags:"bags"}[Us],se/2-142,37),Ee(n,"TAP THE ROAD TO PLACE "+{wire:"BARBED WIRE",spikes:"SPIKES",sandbags:"SANDBAGS"}[Us],se/2+6,40,"#fff",1,"center"),Tt(n,se/2-50,222,100,34,"CANCEL",()=>{Ei+=De.defenses[Us].cost,Us=null,ge="shop"})}function Bg(n,e,t,i,s,r){Mi(n,e,t,150,30,"rgba(14,14,14,.6)"),Tt(n,e+2,t+2,30,26,"-",()=>{r(-1),ua()}),Tt(n,e+118,t+2,30,26,"+",()=>{r(1),ua()}),Ee(n,i+" "+s,e+75,t+10,"#fff",2,"center",!0)}function WT(n){n.fillStyle="rgba(0,0,0,.65)",n.fillRect(0,0,se,pt),Ee(n,"PAUSED",se/2,18,"#fff",4,"center",!0);let e=se/2-155,t=se/2+5,i=r=>50+r*36,s=r=>r?"ON":"OFF";Tt(n,e,i(0),150,30,"RESUME",Wh,{col:"rgba(40,90,30,.9)",border:"#9fe870"}),Tt(n,t,i(0),150,30,"RESTART",()=>Gh(ss,!1)),Tt(n,e,i(1),150,30,"LEVELS",()=>{ge="levels",Hs=.6}),Tt(n,t,i(1),150,30,"    SOUND",DT),an(n,nt.sound?"sound":"mute",t+46,i(1)+8,2),Tt(n,e,i(2),150,30,"MUSIC "+s(nt.music),UT),Tt(n,t,i(2),150,30,"SHAKE "+s(nt.shake),()=>{nt.shake=!nt.shake,ua()}),Tt(n,e,i(3),150,30,"FULLSCREEN",qx),Tt(n,t,i(3),150,30,"GFX "+(nt.quality==="auto"?"AUTO ":"")+ZT[$r],jT),Bg(n,e,i(4),"SENS",nt.sens.toFixed(1),r=>{nt.sens=Le(Math.round((nt.sens+r*.1)*10)/10,.2,3)}),Bg(n,t,i(4),"FOV",nt.fov,r=>{nt.fov=Le(nt.fov+r*5,55,100)}),an(n,"skull",se/2-70,236),Ee(n,cn.kills+" KILLS",se/2-58,238,"#aaa",1),an(n,"flag",se/2+10,237),Ee(n,Xh(cn.time),se/2+22,238,"#aaa",1)}function XT(n){if(Y.deadT<2.2)return;n.fillStyle="rgba(30,0,0,.6)",n.fillRect(0,0,se,pt),Ee(n,"THE LINE FELL",se/2,18,"#e04030",5,"center",!0),Dt.fail&&Ee(n,Dt.fail,se/2,50,"#ff8060",2,"center",!0),Ee(n,xt.name+"  -  WAVE "+Se.n,se/2,66,"#fff",2,"center",!0),Yx(n,82);let e=zt.best[ss];an(n,"star",se/2-90,135),Ee(n,"BEST WAVE "+e.wave+"   BEST SCORE "+e.score,se/2-80,136,"#e8c860",1),fa&&Ee(n,"BANKED +$"+fa+" FOR YOUR NEXT RUN",se/2,148,"#9fe870",1,"center",!0),Tt(n,se/2-170,166,160,36,"RETRY",()=>Gh(ss,!1),{col:"rgba(120,30,20,.9)",border:"#e04030"}),Tt(n,se/2+10,166,160,36,"LEVELS",()=>{ge="levels",Hs=.6})}function qT(n){n.fillStyle="rgba(0,0,0,.55)",n.fillRect(0,0,se,pt),Ee(n,"ZONE SECURED",se/2,24,"#9fe870",5,"center",!0),Ee(n,xt.name,se/2,62,"#fff",2,"center",!0),Yx(n,82);let e=ss+1<ii.length;e&&Ee(n,"NEXT: "+ii[ss+1].name+"  (KEEP GEAR, +$100)",se/2,134,"#e8c860",1,"center",!0),fa&&Ee(n,"BANKED +$"+fa+" FOR YOUR NEXT RUN",se/2,146,"#9fe870",1,"center",!0),e&&Tt(n,se/2-170,166,160,36,"NEXT ZONE >",()=>Gh(ss+1,!0),{col:"rgba(40,90,30,.9)",border:"#9fe870"}),Tt(n,e?se/2+10:se/2-80,166,160,36,"LEVELS",()=>{ge="levels",Hs=.6})}function YT(){let n=[],e=(F,Z)=>n.push((Z?"PASS ":"FAIL ")+F),t=Ni("walker",10,0),i=Pd(t,3,2,1,"zombie");for(let F=0;F<120;F++)Ld(i,ni,null);let s=0;for(let[F,Z,re]of i.sticks)s=Math.max(s,Math.abs(Math.hypot(i.P[Z*3]-i.P[F*3],i.P[Z*3+1]-i.P[F*3+1],i.P[Z*3+2]-i.P[F*3+2])-re)/re);e("3d verlet stick lengths within 5% after 120 steps (worst "+(s*100).toFixed(2)+"%)",s<.05),e("ragdoll rests on the ground",i.P.every((F,Z)=>Z%3!==1||F>=0&&F<.5));let r=Pd(t,0,0,0,"zombie");for(let F=0;F<15;F++)r.P[F*3]=i.P[F*3],r.P[F*3+2]=i.P[F*3+2],r.P[F*3+1]=i.P[F*3+1]+.5,r.O.set(r.P);for(let F=0;F<180;F++)Ld(r,ni,[i]);e("a corpse dropped on a corpse piles on top",Array.from(r.P).filter((F,Z)=>Z%3===1&&F>.14).length>=6),yl(0,0,1,1,0,0);let o=new C(0,1,0).applyQuaternion(oa);e("segment orientation maps local Y onto the bone",o.distanceTo(new C(0,0,1))<1e-4);let a=!0;for(let F=1;F<30;F++)F%5&&(F+1)%5&&ml(4,F+1)<=ml(4,F)&&(a=!1);e("endless wave count grows between normal waves",a),e("last wave of a level is a horde with a brute",rp(0,5)&&Eh(0,5).list.includes("brute")),e("later levels are harder",Eh(2,1).hpMul>Eh(0,1).hpMul&&ml(2,1)>ml(0,1)),e("rifle dmg lv2 headshot",Math.abs(zd(De.weapons.rifle,2,!0)-24*1.3*2.5)<1e-9);let l=Ni("walker",14,0);l.hp=10,Je=[l];let c=Ih(10,1,0,1,0,0,l);e("ray hits a zombie standing in its path",!!c&&c.t>3&&c.t<4.5),Hh(l,34,!1,1,0,0,1.6,l.x,1,l.z),e("lethal hit kills and spawns a ragdoll",l.dead&&Gn.length===1),Vn.count=0,Me(Vn,0,0,0,1,2,1,_d);let h=new Be,f=new C;Vn.getMatrixAt(0,h),h.decompose(new C,new dt,f),Vn.count=0,e("capsule limbs span exactly the bone length",Math.abs(f.y-1)<1e-6),en.count=0,ct.quaternion.setFromEuler(new Ms(.3,.7,0)),Me(en,0,0,0,1,1,1,_d);let u=new dt;en.getMatrixAt(0,h),h.decompose(new C,u,f),en.count=0,e("particles are billboards facing the camera",u.angleTo(ct.quaternion)<1e-4),e("filmic tone mapping and soft shadows are on",si.toneMapping===zo&&si.shadowMap.type===Yc);{let F=xx(.3,.7,new C),Z=Math.atan2(F.z,F.x)/(2*Math.PI)+.5,re=Math.asin(F.y)/Math.PI+.5;e("photo-sky sun direction round-trips through the sky mapping",Math.abs(Z-.3)<1e-6&&Math.abs(re-.7)<1e-6)}e("cinematic grade has bars, aberration and split toning",["bars","ca","split","blur"].every(F=>F in Fh.uniforms)),e("icon maps are rectangular",Object.values(yd).every(F=>F.every(Z=>Z.length===F[0].length))),Je=[],ha=0;for(let F=0;F<3;F++){let Z=Ni("walker",14+F,0);Je.push(Z),Cl(Z,1,0,0,1,!1,10)}e("kill chain counts and pays a bonus",Ls===3&&Ai&&Ai.bonus===6),e("time format",Xh(65)==="1:05"),Y.x=0,Wd(1);let d=Tn.x;Y.x=Ht;for(let F=0;F<60;F++)Wd(.1);e("camera stays inside the world",d===Bn.half&&Math.abs(Tn.x-(Ht-Bn.half))<1e-6),Tn.x=12,Dh();let g=$d(se/2,pt*.7);e("cursor ray finds the road",!!g&&g.z>na&&g.z<En);let[x,m]=Gd(Math.PI/2,1,0),[p,_]=Gd(0,0,1);e("W walks where you look, D strafes right",Math.abs(x)<1e-9&&Math.abs(m-1)<1e-9&&Math.abs(p)<1e-9&&Math.abs(_-1)<1e-9),ge="play",Y.x=12,Y.z=0,Y.heading=.7,Y.pitch=.2,Dh();let v=Nx(Y);ct.getWorldDirection($i);let M=(v[0]-ct.position.x)*$i.x+(v[1]-ct.position.y)*$i.y+(v[2]-ct.position.z)*$i.z;e("gun muzzle sits just in front of the eye",M>.2&&M<1.3);let b=Ni("walker",16,0);b.heading=Math.PI,b.rise=1.2,Je=[b];let T=Ni("walker",16,0);T.heading=Math.PI,dr(T);let w=Ih(ct.position.x,1.2,0,1,0,0,T);e("center ray from the eye hits a zombie ahead",!!w),dr(b);let P=b.P[1];Dx(b,.6),e("spawning zombie rises out of the ground",P<.3&&b.P[1]>P+.5);let y=Ni("walker",Y.x+.8,Y.z);y.heading=Math.PI,dr(y),Je=[y],Y.stamina=100,Y.meleeCd=0,Y.heading=0;let E=y.hp;op(),e("shove hurts and knocks back the zombie in front",y.hp<E&&y.kvx>2&&Y.stamina<100);{let F=1;for(let re=0;re<120;re++)F=qd(F,Xd,ni);let Z=Xd;for(let re=0;re<15;re++)Z=qd(Z,1,ni);e("standing still freezes time within 2 s, moving restores it within 0.25 s",F<.02&&Z>.9)}{Y.x=50,Y.z=0,Y.inv=0,Y.alive=!0;let F=Y.hp,Z={kind:"bullet",x:49.95,y:1.3,z:.05,vx:15,vy:0,vz:0,t:0,dmg:9},re={kind:"bullet",x:49.95,y:1.3,z:2,vx:15,vy:0,vz:0,t:0,dmg:9};e("enemy bullets hit the player in their path and miss beside it",Hd(Z,ni)&&Y.hp===F-9&&!Hd(re,ni)),Y.hp=F,Y.x=12}Y.heading=0;let D=dl(Y.x,Y.z+3),B=dl(Y.x-4,Y.z),K=dl(Y.x+20,Y.z),L=dl(Y.x+2,Y.z);e("3d sound: right is panned right, behind is muffled, far is quieter",D.pan>.5&&B.behind&&!L.behind&&K.gain<L.gain),e("auto quality only steps down when slow",wh(30,0)===1&&wh(60,1)===1&&wh(20,3)===3),e("music speeds up with intensity",Md(1)>Md(0)),e("10% of run earnings is banked",kd(95)===9&&kd(0)===0);let O=Os;Os=[{x0:0,x1:2,z0:0,z1:2,h:1,kind:"crate"}],Ed();let k={x:1,z:-.1};Ml(k,.3);let j={x:1.9,z:1};Ml(j,.3),e("cover pushes bodies out of it",Math.abs(k.z+.3)<1e-6&&Math.abs(j.x-2.3)<1e-6),e("bullets stop on cover",Math.abs(Sl(-5,.5,1,1,0,0)-5)<1e-6&&Sl(-5,1.5,1,1,0,0)>1e8),Os=O,Ed();let J={...Dt};Object.assign(Dt,{type:"hold",meter:100,x:22,z:0}),Se.phase="spawn",Je=[Ni("walker",22,0)],Y.x=5,Hx(1),e("radio point drains while zombies hold it alone",Dt.meter<100&&Dt.contested&&!Dt.fail),Object.assign(Dt,J),Se.phase="idle",ge="title",Je=[],Gn=[],Hi=[],Ns=0,Ei=0,eo=0,wi=[],ji.clearRect(0,0,Tl,wl),Yr=[],Y=np(),Ls=0,ha=0,Ai=null,El=0,Object.keys(cn).forEach(F=>cn[F]=0),n.forEach(F=>console.log(F)),console.log(n.every(F=>F.startsWith("PASS"))?"SELFTEST: ALL PASS":"SELFTEST: FAILURES")}var $r=0,fl=0,vh=0,ZT=["HIGH","MED","LOW","MIN"],KT=[1,.85,.7,.5],Th=["auto","high","med","low"],wh=(n,e)=>n<45&&e<3?e+1:e;function Zx(){let n=Math.min(innerWidth/se,innerHeight/pt),e=se*n,t=pt*n,i=Math.min(devicePixelRatio||1,1.5)*KT[$r];for(let s of[Vg,Qi])s.style.width=e+"px",s.style.height=t+"px",s.style.left=(innerWidth-e)/2+"px",s.style.top=(innerHeight-t)/2+"px";si.setPixelRatio(i),si.setSize(e,t,!1),os.setPixelRatio(i),os.setSize(e,t)}function cp(n){$r=n,ra.enabled=n===0,ex.enabled=n<2,ln.castShadow=n<3,Lx=n>=3?900:De.maxParticles;let e=n===0?2048:1024;ln.shadow.mapSize.x!==e&&(ln.shadow.mapSize.set(e,e),ln.shadow.map&&(ln.shadow.map.dispose(),ln.shadow.map=null)),Zx()}function jT(){nt.quality=Th[(Th.indexOf(nt.quality)+1)%4],nt.quality!=="auto"&&cp(Th.indexOf(nt.quality)-1),ua()}addEventListener("resize",Zx);cp(nt.quality!=="auto"?Th.indexOf(nt.quality)-1:matchMedia("(pointer:coarse)").matches?1:0);_x(xt);Y=np();Y.x=12;Tn.x=13;/[?&]test\b/.test(location.search)&&(YT(),window.__dl=()=>({heading:Y.heading,pitch:Y.pitch,kick:Y.kick,state:ge,lock:!!document.pointerLockElement,ads:le.ads,adsT:Y.adsT,fov:ct.fov,q:$r,sun:Ki.toArray(),flare:ma.visible,ts:Rs,models:Bi.ready,shots:cn.shots,hp:Y.hp,zs:Je.map(n=>n.type),bullets:Ti.filter(n=>n.kind==="bullet").length,pos:[Y.x,Y.z],touch:le.touch,dbg:{md:le.mouseDown,fp:le.firePressed,cool:Y.cool,rel:Y.reloadT,swap:Y.swapT,mag:Y.mag[Y.weapon],w:Y.weapon,alive:Y.alive,hs:bl,nl:le.noLock}}),window.__three={scene:jt,renderer:si,composer:os},window.__look=(n,e)=>{Y.heading=n,Y.pitch=e},window.__spawn=(n,e=7)=>{let t=Ni(n,Y.x+Math.cos(Y.heading)*e,Y.z+Math.sin(Y.heading)*e);t.heading=Y.heading+Math.PI,Je.push(t)});for(let n=0;n<6;n++)Je.push(Ni(Lt(["walker","walker","runner","crawler","brute","gunner"]),Tn.x+1.5+n*1.6,U(-3,2.2)));var _h=0,zg=performance.now();function Kx(n){let e=(n-zg)/1e3;if(zg=n,e>.25&&(e=.25),ge==="play"&&nt.quality==="auto"){if(fl+=e,vh++,fl>=2){let i=wh(vh/fl,$r);i!==$r&&cp(i),fl=vh=0}}else fl=vh=0;_h+=e;let t=0;for(;_h>=ni&&t<5;)mT(ni),_h-=ni,t++;t===5&&(_h=0),IT(),requestAnimationFrame(Kx)}requestAnimationFrame(Kx);VE();})();
