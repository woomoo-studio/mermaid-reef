/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip=2;const ap=1,rp=2;const sp=1,op=2;const lp=6;const cp=4;const up=1e3;const hp=1003;const dp=1006;const fp=1008;const wt="srgb",Kn="srgb-linear",aa="linear",Ze="srgb";const fr="300 es";class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,o=a.length;r<o;r++)a[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pr=1234567;const mi=Math.PI/180,_i=180/Math.PI;function Qt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Za(i,e){return(i%e+e)%e}function vo(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function So(i,e,t){return i!==e?(t-i)/(e-i):0}function gi(i,e,t){return(1-t)*i+t*e}function xo(i,e,t,n){return gi(i,e,1-Math.exp(-t*n))}function bo(i,e=1){return e-Math.abs(Za(i,e*2)-e)}function Mo(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function To(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Eo(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wo(i,e){return i+Math.random()*(e-i)}function Ao(i){return i*(.5-Math.random())}function Ro(i){i!==void 0&&(pr=i);let e=pr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Co(i){return i*mi}function Po(i){return i*_i}function Lo(i){return(i&i-1)===0&&i!==0}function Do(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Io(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fo(i,e,t,n,a){const r=Math.cos,o=Math.sin,s=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(a){case"XYX":i.set(s*u,l*h,l*d,s*c);break;case"YZY":i.set(l*d,s*u,l*h,s*c);break;case"ZXZ":i.set(l*h,l*d,s*u,s*c);break;case"XZX":i.set(s*u,l*g,l*f,s*c);break;case"YXY":i.set(l*f,s*u,l*g,s*c);break;case"ZYZ":i.set(l*g,l*f,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pp={DEG2RAD:mi,RAD2DEG:_i,generateUUID:Qt,clamp:Mt,euclideanModulo:Za,mapLinear:vo,inverseLerp:So,lerp:gi,damp:xo,pingpong:bo,smoothstep:Mo,smootherstep:To,randInt:Eo,randFloat:wo,randFloatSpread:Ao,seededRandom:Ro,degToRad:Co,radToDeg:Po,isPowerOfTwo:Lo,ceilPowerOfTwo:Do,floorPowerOfTwo:Io,setQuaternionFromProperEuler:Fo,normalize:Ke,denormalize:Vt};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*a+e.x,this.y=r*a+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,a,r,o,s,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,o,s,l,c)}set(e,t,n,a,r,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],y=a[0],m=a[3],p=a[6],E=a[1],M=a[4],v=a[7],H=a[2],w=a[5],R=a[8];return r[0]=o*y+s*E+l*H,r[3]=o*m+s*M+l*w,r[6]=o*p+s*v+l*R,r[1]=c*y+u*E+h*H,r[4]=c*m+u*M+h*w,r[7]=c*p+u*v+h*R,r[2]=d*y+f*E+g*H,r[5]=d*m+f*M+g*w,r[8]=d*p+f*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-n*r*u+n*s*l+a*r*c-a*o*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,d=s*l-u*r,f=c*r-o*l,g=t*h+n*d+a*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(a*c-u*n)*y,e[2]=(s*n-a*o)*y,e[3]=d*y,e[4]=(u*t-a*l)*y,e[5]=(a*r-s*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-a*c,a*l,-a*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Ie;function Cs(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uo(){const i=ea("canvas");return i.style.display="block",i}const mr={};function fi(i){i in mr||(mr[i]=!0,console.warn(i))}function No(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ho(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bo(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ve={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ze&&(i.r=en(i.r),i.g=en(i.g),i.b=en(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ze&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?aa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function en(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gr=[.64,.33,.3,.6,.15,.06],_r=[.2126,.7152,.0722],yr=[.3127,.329],vr=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sr=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[Kn]:{primaries:gr,whitePoint:yr,transfer:aa,toXYZ:vr,fromXYZ:Sr,luminanceCoefficients:_r,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:gr,whitePoint:yr,transfer:Ze,toXYZ:vr,fromXYZ:Sr,luminanceCoefficients:_r,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}});let An;class Oo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{An===void 0&&(An=ea("canvas")),An.width=e.width,An.height=e.height;const n=An.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=An}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let o=0;o<r.length;o++)r[o]=en(r[o]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(en(t[n]/255)*255):t[n]=en(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ko=0;class Ps{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ko++}),this.uuid=Qt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let o=0,s=a.length;o<s;o++)a[o].isDataTexture?r.push(da(a[o].image)):r.push(da(a[o]))}else r=da(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Go=0;class yt extends Zn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=1001,a=1001,r=1006,o=1008,s=1023,l=1009,c=yt.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Go++}),this.uuid=Qt(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=300;yt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,a=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*a+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*a+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*a+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(f+1)/2,H=(p+1)/2,w=(u+d)/4,R=(h+y)/4,U=(g+m)/4;return M>v&&M>H?M<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(M),a=w/n,r=R/n):v>H?v<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),n=w/a,r=U/a):H<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(H),n=R/r,a=U/r),this.set(n,a,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-y)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zo extends Zn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const a={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new yt(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let s=0;s<o;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ps(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends zo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ls extends yt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vo extends yt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,o,s){let l=n[a+0],c=n[a+1],u=n[a+2],h=n[a+3];const d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==d||c!==f||u!==g){let m=1-s;const p=l*d+c*f+u*g+h*y,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const H=Math.sqrt(M),w=Math.atan2(H,p*E);m=Math.sin(m*w)/H,s=Math.sin(s*w)/H}const v=s*E;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+y*v,m===1-s){const H=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=H,c*=H,u*=H,h*=H}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,a,r,o){const s=n[a],l=n[a+1],c=n[a+2],u=n[a+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=s*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-s*f,e[t+2]=c*g+u*f+s*d-l*h,e[t+3]=u*g-s*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(a/2),h=s(r/2),d=l(n/2),f=l(a/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+s+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-a)*f}else if(n>s&&n>h){const f=2*Math.sqrt(1+n-s-h);this._w=(u-l)/f,this._x=.25*f,this._y=(a+o)/f,this._z=(r+c)/f}else if(s>h){const f=2*Math.sqrt(1+s-n-h);this._w=(r-c)/f,this._x=(a+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-s);this._w=(o-a)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*s+a*c-r*l,this._y=a*u+o*l+r*s-n*c,this._z=r*u+o*c+n*l-a*s,this._w=o*u-n*s-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+a*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=a,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*a+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=a*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*a-s*n),u=2*(s*t-r*a),h=2*(r*n-o*t);return this.x=t+l*c+o*h-s*u,this.y=n+l*u+s*c-r*h,this.z=a+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,o=t.x,s=t.y,l=t.z;return this.x=a*l-r*s,this.y=r*o-n*l,this.z=n*s-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new I,xr=new Jn;class Tn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=r.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Ot):Ot.fromBufferAttribute(r,o),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mi.copy(n.boundingBox)),Mi.applyMatrix4(e.matrixWorld),this.union(Mi)}const a=e.children;for(let r=0,o=a.length;r<o;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ni),Ti.subVectors(this.max,ni),Rn.subVectors(e.a,ni),Cn.subVectors(e.b,ni),Pn.subVectors(e.c,ni),rn.subVectors(Cn,Rn),sn.subVectors(Pn,Cn),fn.subVectors(Rn,Pn);let t=[0,-rn.z,rn.y,0,-sn.z,sn.y,0,-fn.z,fn.y,rn.z,0,-rn.x,sn.z,0,-sn.x,fn.z,0,-fn.x,-rn.y,rn.x,0,-sn.y,sn.x,0,-fn.y,fn.x,0];return!pa(t,Rn,Cn,Pn,Ti)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,Rn,Cn,Pn,Ti))?!1:(Ei.crossVectors(rn,sn),t=[Ei.x,Ei.y,Ei.z],pa(t,Rn,Cn,Pn,Ti))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new I,new I,new I,new I,new I,new I,new I,new I],Ot=new I,Mi=new Tn,Rn=new I,Cn=new I,Pn=new I,rn=new I,sn=new I,fn=new I,ni=new I,Ti=new I,Ei=new I,pn=new I;function pa(i,e,t,n,a){for(let r=0,o=i.length-3;r<=o;r+=3){pn.fromArray(i,r);const s=a.x*Math.abs(pn.x)+a.y*Math.abs(pn.y)+a.z*Math.abs(pn.z),l=e.dot(pn),c=t.dot(pn),u=n.dot(pn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Wo=new Tn,ii=new I,ma=new I;class $n{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wo.setFromPoints(e).getCenter(n);let a=0;for(let r=0,o=e.length;r<o;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ii.subVectors(e,this.center);const t=ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(ii,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ii.copy(e.center).add(ma)),this.expandByPoint(ii.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new I,ga=new I,wi=new I,on=new I,_a=new I,Ai=new I,ya=new I;class Ds{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){ga.copy(e).add(t).multiplyScalar(.5),wi.copy(t).sub(e).normalize(),on.copy(this.origin).sub(ga);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wi),s=on.dot(this.direction),l=-on.dot(wi),c=on.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-s,d=o*s-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,f=h*(h+o*d+2*s)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+s)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+s)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(ga).addScaledVector(wi,d),f}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),a=Kt.dot(Kt)-n*n,r=e.radius*e.radius;if(a>r)return null;const o=Math.sqrt(r-a),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>a||((r>n||isNaN(n))&&(n=r),(o<a||isNaN(a))&&(a=o),h>=0?(s=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||s>a)||((s>n||n!==n)&&(n=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,a,r){_a.subVectors(t,e),Ai.subVectors(n,e),ya.crossVectors(_a,Ai);let o=this.direction.dot(ya),s;if(o>0){if(a)return null;s=1}else if(o<0)s=-1,o=-o;else return null;on.subVectors(this.origin,e);const l=s*this.direction.dot(Ai.crossVectors(on,Ai));if(l<0)return null;const c=s*this.direction.dot(_a.cross(on));if(c<0||l+c>o)return null;const u=-s*on.dot(ya);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,a,r,o,s,l,c,u,h,d,f,g,y,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,o,s,l,c,u,h,d,f,g,y,m)}set(e,t,n,a,r,o,s,l,c,u,h,d,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=a,p[1]=r,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Ln.setFromMatrixColumn(e,0).length(),r=1/Ln.setFromMatrixColumn(e,1).length(),o=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(a),c=Math.sin(a),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=s*u,y=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-s*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d+y*s,t[4]=g*s-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=f*s-g,t[6]=y+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d-y*s,t[4]=-o*h,t[8]=g+f*s,t[1]=f+g*s,t[5]=o*u,t[9]=y-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=s*u,y=s*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=s*l,y=s*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=s*l,y=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=s*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xo,e,qo)}lookAt(e,t,n){const a=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),ln.crossVectors(n,Ct),ln.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),ln.crossVectors(n,Ct)),ln.normalize(),Ri.crossVectors(Ct,ln),a[0]=ln.x,a[4]=Ri.x,a[8]=Ct.x,a[1]=ln.y,a[5]=Ri.y,a[9]=Ct.y,a[2]=ln.z,a[6]=Ri.z,a[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],E=n[3],M=n[7],v=n[11],H=n[15],w=a[0],R=a[4],U=a[8],b=a[12],x=a[1],A=a[5],z=a[9],B=a[13],G=a[2],K=a[6],q=a[10],te=a[14],X=a[3],re=a[7],he=a[11],xe=a[15];return r[0]=o*w+s*x+l*G+c*X,r[4]=o*R+s*A+l*K+c*re,r[8]=o*U+s*z+l*q+c*he,r[12]=o*b+s*B+l*te+c*xe,r[1]=u*w+h*x+d*G+f*X,r[5]=u*R+h*A+d*K+f*re,r[9]=u*U+h*z+d*q+f*he,r[13]=u*b+h*B+d*te+f*xe,r[2]=g*w+y*x+m*G+p*X,r[6]=g*R+y*A+m*K+p*re,r[10]=g*U+y*z+m*q+p*he,r[14]=g*b+y*B+m*te+p*xe,r[3]=E*w+M*x+v*G+H*X,r[7]=E*R+M*A+v*K+H*re,r[11]=E*U+M*z+v*q+H*he,r[15]=E*b+M*B+v*te+H*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*h-a*c*h-r*s*d+n*c*d+a*s*f-n*l*f)+y*(+t*l*f-t*c*d+r*o*d-a*o*f+a*c*u-r*l*u)+m*(+t*c*h-t*s*f-r*o*h+n*o*f+r*s*u-n*c*u)+p*(-a*s*u-t*l*h+t*s*d+a*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],E=h*m*c-y*d*c+y*l*f-s*m*f-h*l*p+s*d*p,M=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*y*c-g*h*c+g*s*f-o*y*f-u*s*p+o*h*p,H=g*h*l-u*y*l-g*s*d+o*y*d+u*s*m-o*h*m,w=t*E+n*M+a*v+r*H;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=E*R,e[1]=(y*d*r-h*m*r-y*a*f+n*m*f+h*a*p-n*d*p)*R,e[2]=(s*m*r-y*l*r+y*a*c-n*m*c-s*a*p+n*l*p)*R,e[3]=(h*l*r-s*d*r-h*a*c+n*d*c+s*a*f-n*l*f)*R,e[4]=M*R,e[5]=(u*m*r-g*d*r+g*a*f-t*m*f-u*a*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*a*c+t*m*c+o*a*p-t*l*p)*R,e[7]=(o*d*r-u*l*r+u*a*c-t*d*c-o*a*f+t*l*f)*R,e[8]=v*R,e[9]=(g*h*r-u*y*r-g*n*f+t*y*f+u*n*p-t*h*p)*R,e[10]=(o*y*r-g*s*r+g*n*c-t*y*c-o*n*p+t*s*p)*R,e[11]=(u*s*r-o*h*r-u*n*c+t*h*c+o*n*f-t*s*f)*R,e[12]=H*R,e[13]=(u*y*a-g*h*a+g*n*d-t*y*d-u*n*m+t*h*m)*R,e[14]=(g*s*a-o*y*a-g*n*l+t*y*l+o*n*m-t*s*m)*R,e[15]=(o*h*a-u*s*a+u*n*l-t*h*l-o*n*d+t*s*d)*R,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,o=e.x,s=e.y,l=e.z,c=r*o,u=r*s;return this.set(c*o+n,c*s-a*l,c*l+a*s,0,c*s+a*l,u*s+n,u*l-a*o,0,c*l-a*s,u*l+a*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,o){return this.set(1,n,r,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,o=t._y,s=t._z,l=t._w,c=r+r,u=o+o,h=s+s,d=r*c,f=r*u,g=r*h,y=o*u,m=o*h,p=s*h,E=l*c,M=l*u,v=l*h,H=n.x,w=n.y,R=n.z;return a[0]=(1-(y+p))*H,a[1]=(f+v)*H,a[2]=(g-M)*H,a[3]=0,a[4]=(f-v)*w,a[5]=(1-(d+p))*w,a[6]=(m+E)*w,a[7]=0,a[8]=(g+M)*R,a[9]=(m-E)*R,a[10]=(1-(d+y))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let r=Ln.set(a[0],a[1],a[2]).length();const o=Ln.set(a[4],a[5],a[6]).length(),s=Ln.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],kt.copy(this);const c=1/r,u=1/o,h=1/s;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,a,r,o,s=2e3){const l=this.elements,c=2*r/(t-e),u=2*r/(n-a),h=(t+e)/(t-e),d=(n+a)/(n-a);let f,g;if(s===2e3)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(s===2001)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,r,o,s=2e3){const l=this.elements,c=1/(t-e),u=1/(n-a),h=1/(o-r),d=(t+e)*c,f=(n+a)*u;let g,y;if(s===2e3)g=(o+r)*h,y=-2*h;else if(s===2001)g=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ln=new I,kt=new Ye,Xo=new I(0,0,0),qo=new I(1,1,1),ln=new I,Ri=new I,Ct=new I,br=new Ye,Mr=new Jn;class At{constructor(e=0,t=0,n=0,a=At.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],o=a[4],s=a[8],l=a[1],c=a[5],u=a[9],h=a[2],d=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(Mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return br.makeRotationFromQuaternion(e),this.setFromRotationMatrix(br,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mr.setFromEuler(this),this.setFromQuaternion(Mr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}At.DEFAULT_ORDER="XYZ";class Is{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yo=0;const Tr=new I,Dn=new Jn,Zt=new Ye,Ci=new I,ai=new I,jo=new I,Ko=new Jn,Er=new I(1,0,0),wr=new I(0,1,0),Ar=new I(0,0,1),Rr={type:"added"},Zo={type:"removed"},In={type:"childadded",child:null},va={type:"childremoved",child:null};class ut extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yo++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new I,t=new At,n=new Jn,a=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ie}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(Er,e)}rotateY(e){return this.rotateOnAxis(wr,e)}rotateZ(e){return this.rotateOnAxis(Ar,e)}translateOnAxis(e,t){return Tr.copy(e).applyQuaternion(this.quaternion),this.position.add(Tr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Er,e)}translateY(e){return this.translateOnAxis(wr,e)}translateZ(e){return this.translateOnAxis(Ar,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ci.copy(e):Ci.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(ai,Ci,this.up):Zt.lookAt(Ci,ai,this.up),this.quaternion.setFromRotationMatrix(Zt),a&&(Zt.extractRotation(a.matrixWorld),Dn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rr),In.child=e,this.dispatchEvent(In),In.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zo),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rr),In.child=e,this.dispatchEvent(In),In.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,e,jo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,Ko,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));a.material=s}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];a.animations.push(r(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=a,n;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}ut.DEFAULT_UP=new I(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new I,Jt=new I,Sa=new I,$t=new I,Fn=new I,Un=new I,Cr=new I,xa=new I,ba=new I,Ma=new I,Ta=new Je,Ea=new Je,wa=new Je;class Nt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Gt.subVectors(e,t),a.cross(Gt);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){Gt.subVectors(a,t),Jt.subVectors(n,t),Sa.subVectors(e,t);const o=Gt.dot(Gt),s=Gt.dot(Jt),l=Gt.dot(Sa),c=Jt.dot(Jt),u=Jt.dot(Sa),h=o*c-s*s;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-s*u)*d,g=(o*u-s*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,$t)===null?!1:$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getInterpolation(e,t,n,a,r,o,s,l){return this.getBarycoord(e,t,n,a,$t)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$t.x),l.addScaledVector(o,$t.y),l.addScaledVector(s,$t.z),l)}static getInterpolatedAttribute(e,t,n,a,r,o){return Ta.setScalar(0),Ea.setScalar(0),wa.setScalar(0),Ta.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),wa.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(Ea,r.y),o.addScaledVector(wa,r.z),o}static isFrontFacing(e,t,n,a){return Gt.subVectors(n,t),Jt.subVectors(e,t),Gt.cross(Jt).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Gt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return Nt.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let o,s;Fn.subVectors(a,n),Un.subVectors(r,n),xa.subVectors(e,n);const l=Fn.dot(xa),c=Un.dot(xa);if(l<=0&&c<=0)return t.copy(n);ba.subVectors(e,a);const u=Fn.dot(ba),h=Un.dot(ba);if(u>=0&&h<=u)return t.copy(a);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Fn,o);Ma.subVectors(e,r);const f=Fn.dot(Ma),g=Un.dot(Ma);if(g>=0&&f<=g)return t.copy(r);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Un,s);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Cr.subVectors(r,a),s=(h-u)/(h-u+(f-g)),t.copy(a).addScaledVector(Cr,s);const p=1/(m+y+d);return o=y*p,s=d*p,t.copy(n).addScaledVector(Fn,o).addScaledVector(Un,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=Ve.workingColorSpace){if(e=Za(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Aa(o,r,e+1/3),this.g=Aa(o,r,e),this.b=Aa(o,r,e-1/3)}return Ve.toWorkingColorSpace(this,a),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=a[1],s=a[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=Fs[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}copyLinearToSRGB(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ve.fromWorkingColorSpace(gt.copy(this),e),Math.round(Mt(gt.r*255,0,255))*65536+Math.round(Mt(gt.g*255,0,255))*256+Math.round(Mt(gt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,a=gt.g,r=gt.b,o=Math.max(n,a,r),s=Math.min(n,a,r);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=u<=.5?h/(o+s):h/(2-o-s),o){case n:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-n)/h+2;break;case r:l=(n-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=wt){Ve.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,a=gt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Pi);const n=gi(cn.h,Pi.h,t),a=gi(cn.s,Pi.s,t),r=gi(cn.l,Pi.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Ee;Ee.NAMES=Fs;let Jo=0;class tn extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jo++}),this.uuid=Qt(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(t){const r=a(e.textures),o=a(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ta extends tn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new At,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new I,Li=new Pe;class vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.applyMatrix3(e),this.setXY(t,Li.x,Li.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),a=Ke(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),a=Ke(a,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Us extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ns extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $o=0;const Ft=new Ye,Ra=new ut,Nn=new I,Pt=new Tn,ri=new Tn,ft=new I;class Lt extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$o++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cs(e)?Ns:Us)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const o=e[a];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(n,3))}else{for(let n=0,a=t.count;n<a;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];Pt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(Pt.min,ri.min),Pt.expandByPoint(ft),ft.addVectors(Pt.max,ri.max),Pt.expandByPoint(ft)):(Pt.expandByPoint(ri.min),Pt.expandByPoint(ri.max))}Pt.getCenter(n);let a=0;for(let r=0,o=e.count;r<o;r++)ft.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(ft));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ft.fromBufferAttribute(s,c),l&&(Nn.fromBufferAttribute(e,c),ft.add(Nn)),a=Math.max(a,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let U=0;U<n.count;U++)s[U]=new I,l[U]=new I;const c=new I,u=new I,h=new I,d=new Pe,f=new Pe,g=new Pe,y=new I,m=new I;function p(U,b,x){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),s[U].add(y),s[b].add(y),s[x].add(y),l[U].add(m),l[b].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,b=E.length;U<b;++U){const x=E[U],A=x.start,z=x.count;for(let B=A,G=A+z;B<G;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new I,v=new I,H=new I,w=new I;function R(U){H.fromBufferAttribute(a,U),w.copy(H);const b=s[U];M.copy(b),M.sub(H.multiplyScalar(H.dot(b))).normalize(),v.crossVectors(w,b);const A=v.dot(l[U])<0?-1:1;o.setXYZW(U,M.x,M.y,M.z,A)}for(let U=0,b=E.length;U<b;++U){const x=E[U],A=x.start,z=x.count;for(let B=A,G=A+z;B<G;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const a=new I,r=new I,o=new I,s=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);a.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(a,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(a,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){s.isInterleavedBufferAttribute?f=l[y]*s.data.stride+s.offset:f=l[y]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new vt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,a=this.attributes;for(const s in a){const l=a[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(a[l]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pr=new Ye,mn=new Ds,Di=new $n,Lr=new I,Ii=new I,Fi=new I,Ui=new I,Ca=new I,Ni=new I,Dr=new I,Hi=new I;class Tt extends ut{constructor(e=new Lt,t=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const s=this.morphTargetInfluences;if(r&&s){Ni.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],h=r[l];u!==0&&(Ca.fromBufferAttribute(h,e),o?Ni.addScaledVector(Ca,u):Ni.addScaledVector(Ca.sub(t),u))}t.add(Ni)}return t}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(r),mn.copy(e.ray).recast(e.near),!(Di.containsPoint(mn.origin)===!1&&(mn.intersectSphere(Di,Lr)===null||mn.origin.distanceToSquared(Lr)>(e.far-e.near)**2))&&(Pr.copy(r).invert(),mn.copy(e.ray).applyMatrix4(Pr),!(n.boundingBox!==null&&mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mn)))}_computeIntersections(e,t,n){let a;const r=this.geometry,o=this.material,s=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(s.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,H=M;v<H;v+=3){const w=s.getX(v),R=s.getX(v+1),U=s.getX(v+2);a=Bi(this,p,e,n,c,u,h,w,R,U),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),y=Math.min(s.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const E=s.getX(m),M=s.getX(m+1),v=s.getX(m+2);a=Bi(this,o,e,n,c,u,h,E,M,v),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,H=M;v<H;v+=3){const w=v,R=v+1,U=v+2;a=Bi(this,p,e,n,c,u,h,w,R,U),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const E=m,M=m+1,v=m+2;a=Bi(this,o,e,n,c,u,h,E,M,v),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Qo(i,e,t,n,a,r,o,s){let l;if(e.side===1?l=n.intersectTriangle(o,r,a,!0,s):l=n.intersectTriangle(a,r,o,e.side===0,s),l===null)return null;Hi.copy(s),Hi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hi);return c<t.near||c>t.far?null:{distance:c,point:Hi.clone(),object:i}}function Bi(i,e,t,n,a,r,o,s,l,c){i.getVertexPosition(s,Ii),i.getVertexPosition(l,Fi),i.getVertexPosition(c,Ui);const u=Qo(i,e,t,n,Ii,Fi,Ui,Dr);if(u){const h=new I;Nt.getBarycoord(Dr,Ii,Fi,Ui,h),a&&(u.uv=Nt.getInterpolatedAttribute(a,s,l,c,h,new Pe)),r&&(u.uv1=Nt.getInterpolatedAttribute(r,s,l,c,h,new Pe)),o&&(u.normal=Nt.getInterpolatedAttribute(o,s,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new I,materialIndex:0};Nt.getNormal(Ii,Fi,Ui,d.normal),u.face=d,u.barycoord=h}return u}class En extends Lt{constructor(e=1,t=1,n=1,a=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:o};const s=this;a=Math.floor(a),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,a,o,2),g("x","z","y",1,-1,e,n,-t,a,o,3),g("x","y","z",1,-1,e,t,n,a,r,4),g("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function g(y,m,p,E,M,v,H,w,R,U,b){const x=v/R,A=H/U,z=v/2,B=H/2,G=w/2,K=R+1,q=U+1;let te=0,X=0;const re=new I;for(let he=0;he<q;he++){const xe=he*A-B;for(let Ne=0;Ne<K;Ne++){const $e=Ne*x-z;re[y]=$e*E,re[m]=xe*M,re[p]=G,c.push(re.x,re.y,re.z),re[y]=0,re[m]=0,re[p]=w>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ne/R),h.push(1-he/U),te+=1}}for(let he=0;he<U;he++)for(let xe=0;xe<R;xe++){const Ne=d+xe+K*he,$e=d+xe+K*(he+1),j=d+(xe+1)+K*(he+1),ne=d+(xe+1)+K*he;l.push(Ne,$e,ne),l.push($e,j,ne),X+=6}s.addGroup(f,X,b),f+=X,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=jn(i[t]);for(const a in n)e[a]=n[a]}return e}function el(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hs(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const tl={clone:jn,merge:bt};var nl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,il=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends tn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nl,this.fragmentShader=il,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jn(e.uniforms),this.uniformsGroups=el(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bs extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const un=new I,Ir=new Pe,Fr=new Pe;class Ut extends Bs{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _i*2*Math.atan(Math.tan(mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(un.x,un.y).multiplyScalar(-e/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(un.x,un.y).multiplyScalar(-e/un.z)}getViewSize(e,t){return this.getViewBounds(e,Ir,Fr),t.subVectors(Fr,Ir)}setViewOffset(e,t,n,a,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mi*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*a/l,t-=o.offsetY*n/c,a*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hn=-90,Bn=1;class al extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ut(Hn,Bn,e,t);a.layers=this.layers,this.add(a);const r=new Ut(Hn,Bn,e,t);r.layers=this.layers,this.add(r);const o=new Ut(Hn,Bn,e,t);o.layers=this.layers,this.add(o);const s=new Ut(Hn,Bn,e,t);s.layers=this.layers,this.add(s);const l=new Ut(Hn,Bn,e,t);l.layers=this.layers,this.add(l);const c=new Ut(Hn,Bn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,o,s,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,r),e.setRenderTarget(n,1,a),e.render(t,o),e.setRenderTarget(n,2,a),e.render(t,s),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,a),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Os extends yt{constructor(e,t,n,a,r,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,a,r,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rl extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Os(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new En(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new Tt(a,r),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new al(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,a){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,a);e.setRenderTarget(r)}}const Pa=new I,sl=new I,ol=new Ie;class vn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Pa.subVectors(n,t).cross(sl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ol.getNormalMatrix(e),a=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gn=new $n,Oi=new I;class Ja{constructor(e=new vn,t=new vn,n=new vn,a=new vn,r=new vn,o=new vn){this.planes=[e,t,n,a,r,o]}set(e,t,n,a,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(a),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,a=e.elements,r=a[0],o=a[1],s=a[2],l=a[3],c=a[4],u=a[5],h=a[6],d=a[7],f=a[8],g=a[9],y=a[10],m=a[11],p=a[12],E=a[13],M=a[14],v=a[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+g,v+E).normalize(),n[3].setComponents(l-o,d-u,m-g,v-E).normalize(),n[4].setComponents(l-s,d-h,m-y,v-M).normalize(),t===2e3)n[5].setComponents(l+s,d+h,m+y,v+M).normalize();else if(t===2001)n[5].setComponents(s,h,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gn)}intersectsSprite(e){return gn.center.set(0,0,0),gn.radius=.7071067811865476,gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Oi.x=a.normal.x>0?e.max.x:e.min.x,Oi.y=a.normal.y>0?e.max.y:e.min.y,Oi.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Oi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ks(){let i=null,e=!1,t=null,n=null;function a(r,o){t(r,o),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ll(i){const e=new WeakMap;function t(s,l){const c=s.array,u=s.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),s.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:h}}function n(s,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,s),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const y=h[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(i.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,s,l),c.version=s.version}}return{get:a,remove:r,update:o}}class ra extends Lt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,o=t/2,s=Math.floor(n),l=Math.floor(a),c=s+1,u=l+1,h=e/s,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let M=0;M<c;M++){const v=M*h-r;g.push(v,-E,0),y.push(0,0,1),m.push(M/s),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<s;E++){const M=E+c*p,v=E+c*(p+1),H=E+1+c*(p+1),w=E+1+c*p;f.push(M,v,w),f.push(v,H,w)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var cl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ul=`#ifdef USE_ALPHAHASH
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
#endif`,hl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ml=`#ifdef USE_AOMAP
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
#endif`,gl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_l=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bl=`#ifdef USE_IRIDESCENCE
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
#endif`,Ml=`#ifdef USE_BUMPMAP
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
#endif`,Tl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,El=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ll=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dl=`#define PI 3.141592653589793
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
} // validated`,Il=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fl=`vec3 transformedNormal = objectNormal;
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
#endif`,Ul=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ol="gl_FragColor = linearToOutputTexel( gl_FragColor );",kl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gl=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,zl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vl=`#ifdef USE_ENVMAP
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
#endif`,Wl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xl=`#ifdef USE_ENVMAP
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
#endif`,ql=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zl=`#ifdef USE_GRADIENTMAP
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
}`,Jl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$l=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ql=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ec=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,tc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,nc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ic=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ac=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sc=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,oc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,lc=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,cc=`#if defined( RE_IndirectDiffuse )
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
#endif`,uc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fc=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pc=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_c=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yc=`#if defined( USE_POINTS_UV )
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
#endif`,vc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ec=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ac=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lc=`#ifdef USE_NORMALMAP
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
#endif`,Dc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ic=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Bc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kc=`#ifdef USE_SKINNING
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
#endif`,Zc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jc=`#ifdef USE_SKINNING
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
#endif`,$c=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tu=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nu=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iu=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cu=`uniform sampler2D t2D;
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
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pu=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,mu=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gu=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,_u=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bu=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Mu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Tu=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Eu=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wu=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Au=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ru=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Cu=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pu=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Lu=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Du=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Iu=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Fu=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Uu=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Nu=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Hu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Bu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ou=`uniform vec3 color;
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
}`,ku=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Gu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ue={alphahash_fragment:cl,alphahash_pars_fragment:ul,alphamap_fragment:hl,alphamap_pars_fragment:dl,alphatest_fragment:fl,alphatest_pars_fragment:pl,aomap_fragment:ml,aomap_pars_fragment:gl,batching_pars_vertex:_l,batching_vertex:yl,begin_vertex:vl,beginnormal_vertex:Sl,bsdfs:xl,iridescence_fragment:bl,bumpmap_pars_fragment:Ml,clipping_planes_fragment:Tl,clipping_planes_pars_fragment:El,clipping_planes_pars_vertex:wl,clipping_planes_vertex:Al,color_fragment:Rl,color_pars_fragment:Cl,color_pars_vertex:Pl,color_vertex:Ll,common:Dl,cube_uv_reflection_fragment:Il,defaultnormal_vertex:Fl,displacementmap_pars_vertex:Ul,displacementmap_vertex:Nl,emissivemap_fragment:Hl,emissivemap_pars_fragment:Bl,colorspace_fragment:Ol,colorspace_pars_fragment:kl,envmap_fragment:Gl,envmap_common_pars_fragment:zl,envmap_pars_fragment:Vl,envmap_pars_vertex:Wl,envmap_physical_pars_fragment:tc,envmap_vertex:Xl,fog_vertex:ql,fog_pars_vertex:Yl,fog_fragment:jl,fog_pars_fragment:Kl,gradientmap_pars_fragment:Zl,lightmap_pars_fragment:Jl,lights_lambert_fragment:$l,lights_lambert_pars_fragment:Ql,lights_pars_begin:ec,lights_toon_fragment:nc,lights_toon_pars_fragment:ic,lights_phong_fragment:ac,lights_phong_pars_fragment:rc,lights_physical_fragment:sc,lights_physical_pars_fragment:oc,lights_fragment_begin:lc,lights_fragment_maps:cc,lights_fragment_end:uc,logdepthbuf_fragment:hc,logdepthbuf_pars_fragment:dc,logdepthbuf_pars_vertex:fc,logdepthbuf_vertex:pc,map_fragment:mc,map_pars_fragment:gc,map_particle_fragment:_c,map_particle_pars_fragment:yc,metalnessmap_fragment:vc,metalnessmap_pars_fragment:Sc,morphinstance_vertex:xc,morphcolor_vertex:bc,morphnormal_vertex:Mc,morphtarget_pars_vertex:Tc,morphtarget_vertex:Ec,normal_fragment_begin:wc,normal_fragment_maps:Ac,normal_pars_fragment:Rc,normal_pars_vertex:Cc,normal_vertex:Pc,normalmap_pars_fragment:Lc,clearcoat_normal_fragment_begin:Dc,clearcoat_normal_fragment_maps:Ic,clearcoat_pars_fragment:Fc,iridescence_pars_fragment:Uc,opaque_fragment:Nc,packing:Hc,premultiplied_alpha_fragment:Bc,project_vertex:Oc,dithering_fragment:kc,dithering_pars_fragment:Gc,roughnessmap_fragment:zc,roughnessmap_pars_fragment:Vc,shadowmap_pars_fragment:Wc,shadowmap_pars_vertex:Xc,shadowmap_vertex:qc,shadowmask_pars_fragment:Yc,skinbase_vertex:jc,skinning_pars_vertex:Kc,skinning_vertex:Zc,skinnormal_vertex:Jc,specularmap_fragment:$c,specularmap_pars_fragment:Qc,tonemapping_fragment:eu,tonemapping_pars_fragment:tu,transmission_fragment:nu,transmission_pars_fragment:iu,uv_pars_fragment:au,uv_pars_vertex:ru,uv_vertex:su,worldpos_vertex:ou,background_vert:lu,background_frag:cu,backgroundCube_vert:uu,backgroundCube_frag:hu,cube_vert:du,cube_frag:fu,depth_vert:pu,depth_frag:mu,distanceRGBA_vert:gu,distanceRGBA_frag:_u,equirect_vert:yu,equirect_frag:vu,linedashed_vert:Su,linedashed_frag:xu,meshbasic_vert:bu,meshbasic_frag:Mu,meshlambert_vert:Tu,meshlambert_frag:Eu,meshmatcap_vert:wu,meshmatcap_frag:Au,meshnormal_vert:Ru,meshnormal_frag:Cu,meshphong_vert:Pu,meshphong_frag:Lu,meshphysical_vert:Du,meshphysical_frag:Iu,meshtoon_vert:Fu,meshtoon_frag:Uu,points_vert:Nu,points_frag:Hu,shadow_vert:Bu,shadow_frag:Ou,sprite_vert:ku,sprite_frag:Gu},ie={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Xt={basic:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:bt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:bt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:bt([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:bt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:bt([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:bt([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:bt([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:bt([ie.lights,ie.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Xt.physical={uniforms:bt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ki={r:0,b:0,g:0},_n=new At,zu=new Ye;function Vu(i,e,t,n,a,r,o){const s=new Ee(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function y(E){let M=!1;const v=g(E);v===null?p(s,l):v&&v.isColor&&(p(v,1),M=!0);const H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===306)?(u===void 0&&(u=new Tt(new En(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:jn(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),_n.copy(M.backgroundRotation),_n.x*=-1,_n.y*=-1,_n.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_n.y*=-1,_n.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zu.makeRotationFromEuler(_n)),u.material.toneMapped=Ve.getTransfer(v.colorSpace)!==Ze,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Tt(new ra(2,2),new hn({name:"BackgroundMaterial",uniforms:jn(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(v.colorSpace)!==Ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,M){E.getRGB(ki,Hs(i)),n.buffers.color.setClear(ki.r,ki.g,ki.b,M,o)}return{getClearColor:function(){return s},setClearColor:function(E,M=1){s.set(E),l=M,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(s,l)},render:y,addToRenderList:m}}function Wu(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=d(null);let r=a,o=!1;function s(x,A,z,B,G){let K=!1;const q=h(B,z,A);r!==q&&(r=q,c(r.object)),K=f(x,B,z,G),K&&g(x,B,z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(x,A,z,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,A,z){const B=z.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let K=G[A.id];K===void 0&&(K={},G[A.id]=K);let q=K[B];return q===void 0&&(q=d(l()),K[B]=q),q}function d(x){const A=[],z=[],B=[];for(let G=0;G<t;G++)A[G]=0,z[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,A,z,B){const G=r.attributes,K=A.attributes;let q=0;const te=z.getAttributes();for(const X in te)if(te[X].location>=0){const he=G[X];let xe=K[X];if(xe===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),he===void 0||he.attribute!==xe||xe&&he.data!==xe.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function g(x,A,z,B){const G={},K=A.attributes;let q=0;const te=z.getAttributes();for(const X in te)if(te[X].location>=0){let he=K[X];he===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));const xe={};xe.attribute=he,he&&he.data&&(xe.data=he.data),G[X]=xe,q++}r.attributes=G,r.attributesNum=q,r.index=B}function y(){const x=r.newAttributes;for(let A=0,z=x.length;A<z;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const z=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;z[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),G[x]!==A&&(i.vertexAttribDivisor(x,A),G[x]=A)}function E(){const x=r.newAttributes,A=r.enabledAttributes;for(let z=0,B=A.length;z<B;z++)A[z]!==x[z]&&(i.disableVertexAttribArray(z),A[z]=0)}function M(x,A,z,B,G,K,q){q===!0?i.vertexAttribIPointer(x,A,z,G,K):i.vertexAttribPointer(x,A,z,B,G,K)}function v(x,A,z,B){y();const G=B.attributes,K=z.getAttributes(),q=A.defaultAttributeValues;for(const te in K){const X=K[te];if(X.location>=0){let re=G[te];if(re===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){const he=re.normalized,xe=re.itemSize,Ne=e.get(re);if(Ne===void 0)continue;const $e=Ne.buffer,j=Ne.type,ne=Ne.bytesPerElement,ye=j===i.INT||j===i.UNSIGNED_INT||re.gpuType===1013;if(re.isInterleavedBufferAttribute){const se=re.data,we=se.stride,Ce=re.offset;if(se.isInstancedInterleavedBuffer){for(let He=0;He<X.locationSize;He++)p(X.location+He,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let He=0;He<X.locationSize;He++)m(X.location+He);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let He=0;He<X.locationSize;He++)M(X.location+He,xe/X.locationSize,j,he,we*ne,(Ce+xe/X.locationSize*He)*ne,ye)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)p(X.location+se,re.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let se=0;se<X.locationSize;se++)M(X.location+se,xe/X.locationSize,j,he,xe*ne,xe/X.locationSize*se*ne,ye)}}else if(q!==void 0){const he=q[te];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(X.location,he);break;case 3:i.vertexAttrib3fv(X.location,he);break;case 4:i.vertexAttrib4fv(X.location,he);break;default:i.vertexAttrib1fv(X.location,he)}}}}E()}function H(){U();for(const x in n){const A=n[x];for(const z in A){const B=A[z];for(const G in B)u(B[G].object),delete B[G];delete A[z]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const z in A){const B=A[z];for(const G in B)u(B[G].object),delete B[G];delete A[z]}delete n[x.id]}function R(x){for(const A in n){const z=n[A];if(z[x.id]===void 0)continue;const B=z[x.id];for(const G in B)u(B[G].object),delete B[G];delete z[x.id]}}function U(){b(),o=!0,r!==a&&(r=a,c(r.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:U,resetDefaultState:b,dispose:H,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function Xu(i,e,t){let n;function a(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function s(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*d[y];t.update(g,n,1)}}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function qu(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(R){return!(R!==1023&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(R){const U=R===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==1009&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:H,maxSamples:w}}function Yu(i){const e=this;let t=null,n=0,a=!1,r=!1;const o=new vn,s=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||a;return a=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!a||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:n,M=E*4;let v=p.clippingState||null;l.value=v,v=u(g,d,M,f);for(let H=0;H!==M;++H)v[H]=t[H];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=f+y*4,E=d.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==y;++M,v+=4)o.copy(h[M]).applyMatrix4(E,s),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function ju(i){let e=new WeakMap;function t(o,s){return s===303?o.mapping=301:s===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===303||s===304)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",a),t(c.texture,o.mapping)}else return null}}return o}function a(o){const s=o.target;s.removeEventListener("dispose",a);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Gs extends Bs{constructor(e=-1,t=1,n=1,a=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xn=4,Ur=[.125,.215,.35,.446,.526,.582],xn=20,La=new Gs,Nr=new Ee;let Da=null,Ia=0,Fa=0,Ua=!1;const Sn=(1+Math.sqrt(5))/2,On=1/Sn,Hr=[new I(-Sn,On,0),new I(Sn,On,0),new I(-On,0,Sn),new I(On,0,Sn),new I(0,Sn,-On),new I(0,Sn,On),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Br{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,a,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Ia,Fa),this._renderer.xr.enabled=Ua,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Kn,depthBuffer:!1},a=Or(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Or(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ku(r)),this._blurMaterial=Zu(r,e,t)}return a}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,a){const s=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Nr),u.toneMapping=0,u.autoClear=!1;const f=new ta({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Tt(new En,f);let y=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(Nr),y=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(s.up.set(0,l[p],0),s.lookAt(c[p],0,0)):E===1?(s.up.set(0,0,l[p]),s.lookAt(0,c[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,c[p]));const M=this._cubeSize;Gi(a,E*M,p>2?M:0,M,M),u.setRenderTarget(a),y&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===301||e.mapping===302;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kr());const r=a?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Gi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Hr[(a-r-1)%Hr.length];this._blur(e,r-1,r,o,s)}t.autoClear=n}_blur(e,t,n,a,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,a,"latitudinal",r),this._halfBlur(o,e,n,n,a,"longitudinal",r)}_halfBlur(e,t,n,a,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[a],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xn-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):xn;m>xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xn}`);const p=[];let E=0;for(let R=0;R<xn;++R){const U=R/y,b=Math.exp(-U*U/2);p.push(b),R===0?E+=b:R<m&&(E+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[a],H=3*v*(a>M-Xn?a-M+Xn:0),w=4*(this._cubeSize-v);Gi(t,H,w,3*v,2*v),l.setRenderTarget(t),l.render(h,La)}}function Ku(i){const e=[],t=[],n=[];let a=i;const r=i-Xn+1+Ur.length;for(let o=0;o<r;o++){const s=Math.pow(2,a);t.push(s);let l=1/s;o>i-Xn?l=Ur[o-i+Xn-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,y=3,m=2,p=1,E=new Float32Array(y*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,U=w>2?0:-1,b=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];E.set(b,y*g*w),M.set(d,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const H=new Lt;H.setAttribute("position",new vt(E,y)),H.setAttribute("uv",new vt(M,m)),H.setAttribute("faceIndex",new vt(v,p)),e.push(H),a>Xn&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Or(i,e,t){const n=new bn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Zu(i,e,t){const n=new Float32Array(xn),a=new I(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$a(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function kr(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gr(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}function Ju(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u){let h=e.get(s);const d=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return t===null&&(t=new Br(i)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const f=s.image;return c&&f&&f.height>0||u&&f&&a(f)?(t===null&&(t=new Br(i)),h=c?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",r),h.texture):null}}}return s}function a(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $u(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Qu(i,e,t,n){const a={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete a[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return a[d.id]===!0||(d.addEventListener("dispose",o),a[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let y=0;if(f!==null){const E=f.array;y=f.version;for(let M=0,v=E.length;M<v;M+=3){const H=E[M+0],w=E[M+1],R=E[M+2];d.push(H,w,w,R,R,H)}}else if(g!==void 0){const E=g.array;y=g.version;for(let M=0,v=E.length/3-1;M<v;M+=3){const H=M+0,w=M+1,R=M+2;d.push(H,w,w,R,R,H)}}else return;const m=new(Cs(d)?Ns:Us)(d,1);m.version=y;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function eh(i,e,t){let n;function a(d){n=d}let r,o;function s(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*y[E];t.update(p,n,1)}}this.setMode=a,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function th(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(r/3);break;case i.LINES:t.lines+=s*(r/2);break;case i.LINE_STRIP:t.lines+=s*(r-1);break;case i.LINE_LOOP:t.lines+=s*r;break;case i.POINTS:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function nh(i,e,t){const n=new WeakMap,a=new Je;function r(o,s,l){const c=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(s);if(d===void 0||d.count!==h){let b=function(){R.dispose(),n.delete(s),s.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=s.morphAttributes.position!==void 0,g=s.morphAttributes.normal!==void 0,y=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],p=s.morphAttributes.normal||[],E=s.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let v=s.attributes.position.count*M,H=1;v>e.maxTextureSize&&(H=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*H*4*h),R=new Ls(w,v,H,h);R.type=1015,R.needsUpdate=!0;const U=M*4;for(let x=0;x<h;x++){const A=m[x],z=p[x],B=E[x],G=v*H*4*x;for(let K=0;K<A.count;K++){const q=K*U;f===!0&&(a.fromBufferAttribute(A,K),w[G+q+0]=a.x,w[G+q+1]=a.y,w[G+q+2]=a.z,w[G+q+3]=0),g===!0&&(a.fromBufferAttribute(z,K),w[G+q+4]=a.x,w[G+q+5]=a.y,w[G+q+6]=a.z,w[G+q+7]=0),y===!0&&(a.fromBufferAttribute(B,K),w[G+q+8]=a.x,w[G+q+9]=a.y,w[G+q+10]=a.z,w[G+q+11]=B.itemSize===4?a.w:1)}}d={count:h,texture:R,size:new Pe(v,H)},n.set(s,d),s.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];const g=s.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ih(i,e,t,n){let a=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(a.get(h)!==c&&(e.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return h}function o(){a=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class zs extends yt{constructor(e,t,n,a,r,o,s,l,c,u=1026){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1014),n===void 0&&u===1027&&(n=1020),super(null,a,r,o,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vs=new yt,zr=new zs(1,1),Ws=new Ls,Xs=new Vo,qs=new Os,Vr=[],Wr=[],Xr=new Float32Array(16),qr=new Float32Array(9),Yr=new Float32Array(4);function Qn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=Vr[a];if(r===void 0&&(r=new Float32Array(a),Vr[a]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(r,s)}return r}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=Wr[e];t===void 0&&(t=new Int32Array(e),Wr[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ah(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function sh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function lh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Yr.set(n),i.uniformMatrix2fv(this.addr,!1,Yr),dt(t,n)}}function ch(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;qr.set(n),i.uniformMatrix3fv(this.addr,!1,qr),dt(t,n)}}function uh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Xr.set(n),i.uniformMatrix4fv(this.addr,!1,Xr),dt(t,n)}}function hh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function fh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function ph(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function mh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function _h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function vh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(zr.compareFunction=515,r=zr):r=Vs,t.setTexture2D(e||r,a)}function Sh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Xs,a)}function xh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||qs,a)}function bh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Ws,a)}function Mh(i){switch(i){case 5126:return ah;case 35664:return rh;case 35665:return sh;case 35666:return oh;case 35674:return lh;case 35675:return ch;case 35676:return uh;case 5124:case 35670:return hh;case 35667:case 35671:return dh;case 35668:case 35672:return fh;case 35669:case 35673:return ph;case 5125:return mh;case 36294:return gh;case 36295:return _h;case 36296:return yh;case 35678:case 36198:case 36298:case 36306:case 35682:return vh;case 35679:case 36299:case 36307:return Sh;case 35680:case 36300:case 36308:case 36293:return xh;case 36289:case 36303:case 36311:case 36292:return bh}}function Th(i,e){i.uniform1fv(this.addr,e)}function Eh(i,e){const t=Qn(e,this.size,2);i.uniform2fv(this.addr,t)}function wh(i,e){const t=Qn(e,this.size,3);i.uniform3fv(this.addr,t)}function Ah(i,e){const t=Qn(e,this.size,4);i.uniform4fv(this.addr,t)}function Rh(i,e){const t=Qn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ch(i,e){const t=Qn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ph(i,e){const t=Qn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lh(i,e){i.uniform1iv(this.addr,e)}function Dh(i,e){i.uniform2iv(this.addr,e)}function Ih(i,e){i.uniform3iv(this.addr,e)}function Fh(i,e){i.uniform4iv(this.addr,e)}function Uh(i,e){i.uniform1uiv(this.addr,e)}function Nh(i,e){i.uniform2uiv(this.addr,e)}function Hh(i,e){i.uniform3uiv(this.addr,e)}function Bh(i,e){i.uniform4uiv(this.addr,e)}function Oh(i,e,t){const n=this.cache,a=e.length,r=sa(t,a);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||Vs,r[o])}function kh(i,e,t){const n=this.cache,a=e.length,r=sa(t,a);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||Xs,r[o])}function Gh(i,e,t){const n=this.cache,a=e.length,r=sa(t,a);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||qs,r[o])}function zh(i,e,t){const n=this.cache,a=e.length,r=sa(t,a);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||Ws,r[o])}function Vh(i){switch(i){case 5126:return Th;case 35664:return Eh;case 35665:return wh;case 35666:return Ah;case 35674:return Rh;case 35675:return Ch;case 35676:return Ph;case 5124:case 35670:return Lh;case 35667:case 35671:return Dh;case 35668:case 35672:return Ih;case 35669:case 35673:return Fh;case 5125:return Uh;case 36294:return Nh;case 36295:return Hh;case 36296:return Bh;case 35678:case 36198:case 36298:case 36306:case 35682:return Oh;case 35679:case 36299:case 36307:return kh;case 35680:case 36300:case 36308:case 36293:return Gh;case 36289:case 36303:case 36311:case 36292:return zh}}class Wh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mh(t.type)}}class Xh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vh(t.type)}}class qh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(e,t[s.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function jr(i,e){i.seq.push(e),i.map[e.id]=e}function Yh(i,e,t){const n=i.name,a=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),o=Na.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===a){jr(t,c===void 0?new Wh(s,i,e):new Xh(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new qh(s),jr(t,h)),t=h}}}class $i{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=e.getActiveUniform(t,a),o=e.getUniformLocation(t,r.name);Yh(r,o,this)}}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,o=t.length;r!==o;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const o=e[a];o.id in t&&n.push(o)}return n}}function Kr(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const jh=37297;let Kh=0;function Zh(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=a;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}const Zr=new Ie;function Jh(i){Ve._getMatrix(Zr,Ve.workingColorSpace,i);const e=`mat3( ${Zr.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case aa:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jr(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Zh(i.getShaderSource(e),o)}else return a}function $h(i,e){const t=Jh(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qh(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zi=new I;function ed(){Ve.getLuminanceCoefficients(zi);const i=zi.x.toFixed(4),e=zi.y.toFixed(4),t=zi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function td(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pi).join(`
`)}function nd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function id(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),o=r.name;let s=1;r.type===i.FLOAT_MAT2&&(s=2),r.type===i.FLOAT_MAT3&&(s=3),r.type===i.FLOAT_MAT4&&(s=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function pi(i){return i!==""}function $r(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qr(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ad=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(i){return i.replace(ad,sd)}const rd=new Map;function sd(i,e){let t=Ue[e];if(t===void 0){const n=rd.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Va(t)}const od=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function es(i){return i.replace(od,ld)}function ld(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function ts(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function ud(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function dd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function fd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pd(i,e,t,n){const a=i.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=cd(t),c=ud(t),u=hd(t),h=dd(t),d=fd(t),f=td(t),g=nd(r),y=a.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pi).join(`
`),p.length>0&&(p+=`
`)):(m=[ts(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pi).join(`
`),p=[ts(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ue.tonemapping_pars_fragment:"",t.toneMapping!==0?Qh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,$h("linearToOutputTexel",t.outputColorSpace),ed(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pi).join(`
`)),o=Va(o),o=$r(o,t),o=Qr(o,t),s=Va(s),s=$r(s,t),s=Qr(s,t),o=es(o),s=es(s),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===fr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+m+o,v=E+p+s,H=Kr(a,a.VERTEX_SHADER,M),w=Kr(a,a.FRAGMENT_SHADER,v);a.attachShader(y,H),a.attachShader(y,w),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function R(A){if(i.debug.checkShaderErrors){const z=a.getProgramInfoLog(y).trim(),B=a.getShaderInfoLog(H).trim(),G=a.getShaderInfoLog(w).trim();let K=!0,q=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,y,H,w);else{const te=Jr(a,H,"vertex"),X=Jr(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+te+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||G==="")&&(q=!1);q&&(A.diagnostics={runnable:K,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}a.deleteShader(H),a.deleteShader(w),U=new $i(a,y),b=id(a,y)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=a.getProgramParameter(y,jh)),x},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kh++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=H,this.fragmentShader=w,this}let md=0;class gd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _d(e),t.set(e,n)),n}}class _d{constructor(e){this.id=md++,this.code=e,this.usedTimes=0}}function yd(i,e,t,n,a,r,o){const s=new Is,l=new gd,c=new Set,u=[],h=a.logarithmicDepthBuffer,d=a.vertexTextures;let f=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,A,z,B){const G=z.fog,K=B.geometry,q=b.isMeshStandardMaterial?z.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),X=te&&te.mapping===306?te.image.height:null,re=g[b.type];b.precision!==null&&(f=a.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const he=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xe=he!==void 0?he.length:0;let Ne=0;K.morphAttributes.position!==void 0&&(Ne=1),K.morphAttributes.normal!==void 0&&(Ne=2),K.morphAttributes.color!==void 0&&(Ne=3);let $e,j,ne,ye;if(re){const je=Xt[re];$e=je.vertexShader,j=je.fragmentShader}else $e=b.vertexShader,j=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),ye=l.getFragmentShaderID(b);const se=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,He=B.isBatchedMesh===!0,at=!!b.map,Ge=!!b.matcap,lt=!!te,F=!!b.aoMap,Dt=!!b.lightMap,Be=!!b.bumpMap,Oe=!!b.normalMap,Me=!!b.displacementMap,tt=!!b.emissiveMap,be=!!b.metalnessMap,T=!!b.roughnessMap,_=b.anisotropy>0,N=b.clearcoat>0,Z=b.dispersion>0,$=b.iridescence>0,Y=b.sheen>0,ve=b.transmission>0,oe=_&&!!b.anisotropyMap,de=N&&!!b.clearcoatMap,ze=N&&!!b.clearcoatNormalMap,Q=N&&!!b.clearcoatRoughnessMap,fe=$&&!!b.iridescenceMap,Te=$&&!!b.iridescenceThicknessMap,Ae=Y&&!!b.sheenColorMap,pe=Y&&!!b.sheenRoughnessMap,ke=!!b.specularMap,Fe=!!b.specularColorMap,Qe=!!b.specularIntensityMap,C=ve&&!!b.transmissionMap,ae=ve&&!!b.thicknessMap,V=!!b.gradientMap,J=!!b.alphaMap,ue=b.alphaTest>0,le=!!b.alphaHash,Le=!!b.extensions;let ot=0;b.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ot=i.toneMapping);const pt={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:$e,fragmentShader:j,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:He,batchingColor:He&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Kn,alphaToCoverage:!!b.alphaToCoverage,map:at,matcap:Ge,envMap:lt,envMapMode:lt&&te.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:Dt,bumpMap:Be,normalMap:Oe,displacementMap:d&&Me,emissiveMap:tt,normalMapObjectSpace:Oe&&b.normalMapType===1,normalMapTangentSpace:Oe&&b.normalMapType===0,metalnessMap:be,roughnessMap:T,anisotropy:_,anisotropyMap:oe,clearcoat:N,clearcoatMap:de,clearcoatNormalMap:ze,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:$,iridescenceMap:fe,iridescenceThicknessMap:Te,sheen:Y,sheenColorMap:Ae,sheenRoughnessMap:pe,specularMap:ke,specularColorMap:Fe,specularIntensityMap:Qe,transmission:ve,transmissionMap:C,thicknessMap:ae,gradientMap:V,opaque:b.transparent===!1&&b.blending===1&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ue,alphaHash:le,combine:b.combine,mapUv:at&&y(b.map.channel),aoMapUv:F&&y(b.aoMap.channel),lightMapUv:Dt&&y(b.lightMap.channel),bumpMapUv:Be&&y(b.bumpMap.channel),normalMapUv:Oe&&y(b.normalMap.channel),displacementMapUv:Me&&y(b.displacementMap.channel),emissiveMapUv:tt&&y(b.emissiveMap.channel),metalnessMapUv:be&&y(b.metalnessMap.channel),roughnessMapUv:T&&y(b.roughnessMap.channel),anisotropyMapUv:oe&&y(b.anisotropyMap.channel),clearcoatMapUv:de&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ze&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(b.sheenRoughnessMap.channel),specularMapUv:ke&&y(b.specularMap.channel),specularColorMapUv:Fe&&y(b.specularColorMap.channel),specularIntensityMapUv:Qe&&y(b.specularIntensityMap.channel),transmissionMapUv:C&&y(b.transmissionMap.channel),thicknessMapUv:ae&&y(b.thicknessMap.channel),alphaMapUv:J&&y(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Oe||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(at||J),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:at&&b.map.isVideoTexture===!0&&Ve.getTransfer(b.map.colorSpace)===Ze,decodeVideoTextureEmissive:tt&&b.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(b.emissiveMap.colorSpace)===Ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===2,flipSided:b.side===1,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Le&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&b.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const A in b.defines)x.push(A),x.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(E(x,b),M(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function E(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function M(b,x){s.disableAll(),x.supportsVertexTextures&&s.enable(0),x.instancing&&s.enable(1),x.instancingColor&&s.enable(2),x.instancingMorph&&s.enable(3),x.matcap&&s.enable(4),x.envMap&&s.enable(5),x.normalMapObjectSpace&&s.enable(6),x.normalMapTangentSpace&&s.enable(7),x.clearcoat&&s.enable(8),x.iridescence&&s.enable(9),x.alphaTest&&s.enable(10),x.vertexColors&&s.enable(11),x.vertexAlphas&&s.enable(12),x.vertexUv1s&&s.enable(13),x.vertexUv2s&&s.enable(14),x.vertexUv3s&&s.enable(15),x.vertexTangents&&s.enable(16),x.anisotropy&&s.enable(17),x.alphaHash&&s.enable(18),x.batching&&s.enable(19),x.dispersion&&s.enable(20),x.batchingColor&&s.enable(21),b.push(s.mask),s.disableAll(),x.fog&&s.enable(0),x.useFog&&s.enable(1),x.flatShading&&s.enable(2),x.logarithmicDepthBuffer&&s.enable(3),x.reverseDepthBuffer&&s.enable(4),x.skinning&&s.enable(5),x.morphTargets&&s.enable(6),x.morphNormals&&s.enable(7),x.morphColors&&s.enable(8),x.premultipliedAlpha&&s.enable(9),x.shadowMapEnabled&&s.enable(10),x.doubleSided&&s.enable(11),x.flipSided&&s.enable(12),x.useDepthPacking&&s.enable(13),x.dithering&&s.enable(14),x.transmission&&s.enable(15),x.sheen&&s.enable(16),x.opaque&&s.enable(17),x.pointsUvs&&s.enable(18),x.decodeVideoTexture&&s.enable(19),x.decodeVideoTextureEmissive&&s.enable(20),x.alphaToCoverage&&s.enable(21),b.push(s.mask)}function v(b){const x=g[b.type];let A;if(x){const z=Xt[x];A=tl.clone(z.uniforms)}else A=b.uniforms;return A}function H(b,x){let A;for(let z=0,B=u.length;z<B;z++){const G=u[z];if(G.cacheKey===x){A=G,++A.usedTimes;break}}return A===void 0&&(A=new pd(i,x,b,r),u.push(A)),A}function w(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:H,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:U}}function vd(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function n(o){i.delete(o)}function a(o,s,l){i.get(o)[s]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function Sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ns(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function is(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function o(h,d,f,g,y,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=y,p.group=m),e++,p}function s(h,d,f,g,y,m){const p=o(h,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?a.push(p):t.push(p)}function l(h,d,f,g,y,m){const p=o(h,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?a.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Sd),n.length>1&&n.sort(d||ns),a.length>1&&a.sort(d||ns)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:s,unshift:l,finish:u,sort:c}}function xd(){let i=new WeakMap;function e(n,a){const r=i.get(n);let o;return r===void 0?(o=new is,i.set(n,[o])):a>=r.length?(o=new is,r.push(o)):o=r[a],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function bd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Md(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Td=0;function Ed(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wd(i){const e=new bd,t=Md(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const a=new I,r=new Ye,o=new Ye;function s(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,E=0,M=0,v=0,H=0,w=0,R=0;c.sort(Ed);for(let b=0,x=c.length;b<x;b++){const A=c[b],z=A.color,B=A.intensity,G=A.distance,K=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=z.r*B,h+=z.g*B,d+=z.b*B;else if(A.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(A.sh.coefficients[q],B);R++}else if(A.isDirectionalLight){const q=e.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const te=A.shadow,X=t.get(A);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=A.shadow.matrix,E++}n.directional[f]=q,f++}else if(A.isSpotLight){const q=e.get(A);q.position.setFromMatrixPosition(A.matrixWorld),q.color.copy(z).multiplyScalar(B),q.distance=G,q.coneCos=Math.cos(A.angle),q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),q.decay=A.decay,n.spot[y]=q;const te=A.shadow;if(A.map&&(n.spotLightMap[H]=A.map,H++,te.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[y]=te.matrix,A.castShadow){const X=t.get(A);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=K,v++}y++}else if(A.isRectAreaLight){const q=e.get(A);q.color.copy(z).multiplyScalar(B),q.halfWidth.set(A.width*.5,0,0),q.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=q,m++}else if(A.isPointLight){const q=e.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),q.distance=A.distance,q.decay=A.decay,A.castShadow){const te=A.shadow,X=t.get(A);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=q,g++}else if(A.isHemisphereLight){const q=e.get(A);q.skyColor.copy(A.color).multiplyScalar(B),q.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==E||U.numPointShadows!==M||U.numSpotShadows!==v||U.numSpotMaps!==H||U.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+H-w,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,U.directionalLength=f,U.pointLength=g,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=E,U.numPointShadows=M,U.numSpotShadows=v,U.numSpotMaps=H,U.numLightProbes=R,n.version=Td++)}function l(c,u){let h=0,d=0,f=0,g=0,y=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[y];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:s,setupView:l,state:n}}function as(i){const e=new wd(i),t=[],n=[];function a(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function s(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:s,setupLightsView:l,pushLight:r,pushShadow:o}}function Ad(i){let e=new WeakMap;function t(a,r=0){const o=e.get(a);let s;return o===void 0?(s=new as(i),e.set(a,[s])):r>=o.length?(s=new as(i),o.push(s)):s=o[r],s}function n(){e=new WeakMap}return{get:t,dispose:n}}class Rd extends tn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cd extends tn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ld=`uniform sampler2D shadow_pass;
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
}`;function Dd(i,e,t){let n=new Ja;const a=new Pe,r=new Pe,o=new Je,s=new Rd({depthPacking:3201}),l=new Cd,c={},u=t.maxTextureSize,h={0:1,1:0,2:2},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Pd,fragmentShader:Ld}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(w,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),z=i.state;z.setBlending(0),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==3&&this.type===3,G=p===3&&this.type!==3;for(let K=0,q=w.length;K<q;K++){const te=w[K],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const re=X.getFrameExtents();if(a.multiply(re),r.copy(X.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/re.x),a.x=r.x*re.x,X.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/re.y),a.y=r.y*re.y,X.mapSize.y=r.y)),X.map===null||B===!0||G===!0){const xe=this.type!==3?{minFilter:1003,magFilter:1003}:{};X.map!==null&&X.map.dispose(),X.map=new bn(a.x,a.y,xe),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const he=X.getViewportCount();for(let xe=0;xe<he;xe++){const Ne=X.getViewport(xe);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),z.viewport(o),X.updateMatrices(te,xe),n=X.getFrustum(),v(R,U,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===3&&E(X,U),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,x,A)};function E(w,R){const U=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bn(a.x,a.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,U,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,U,f,y,null)}function M(w,R,U,b){let x=null;const A=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)x=A;else if(x=U.isPointLight===!0?l:s,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=x.uuid,B=R.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let K=G[B];K===void 0&&(K=x.clone(),G[B]=K,R.addEventListener("dispose",H)),x=K}if(x.visible=R.visible,x.wireframe=R.wireframe,b===3?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=i.properties.get(x);z.light=U}return x}function v(w,R,U,b,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const B=e.update(w),G=w.material;if(Array.isArray(G)){const K=B.groups;for(let q=0,te=K.length;q<te;q++){const X=K[q],re=G[X.materialIndex];if(re&&re.visible){const he=M(w,re,b,x);w.onBeforeShadow(i,w,R,U,B,he,X),i.renderBufferDirect(U,null,B,he,w,X),w.onAfterShadow(i,w,R,U,B,he,X)}}}else if(G.visible){const K=M(w,G,b,x);w.onBeforeShadow(i,w,R,U,B,K,null),i.renderBufferDirect(U,null,B,K,w,null),w.onAfterShadow(i,w,R,U,B,K,null)}}const z=w.children;for(let B=0,G=z.length;B<G;B++)v(z[B],R,U,b,x)}function H(w){w.target.removeEventListener("dispose",H);for(const U in c){const b=c[U],x=w.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const Id={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Fd(i,e){function t(){let C=!1;const ae=new Je;let V=null;const J=new Je(0,0,0,0);return{setMask:function(ue){V!==ue&&!C&&(i.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){C=ue},setClear:function(ue,le,Le,ot,pt){pt===!0&&(ue*=ot,le*=ot,Le*=ot),ae.set(ue,le,Le,ot),J.equals(ae)===!1&&(i.clearColor(ue,le,Le,ot),J.copy(ae))},reset:function(){C=!1,V=null,J.set(-1,0,0,0)}}}function n(){let C=!1,ae=!1,V=null,J=null,ue=null;return{setReversed:function(le){if(ae!==le){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const ot=ue;ue=null,this.setClear(ot)}ae=le},getReversed:function(){return ae},setTest:function(le){le?se(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(le){V!==le&&!C&&(i.depthMask(le),V=le)},setFunc:function(le){if(ae&&(le=Id[le]),J!==le){switch(le){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=le}},setLocked:function(le){C=le},setClear:function(le){ue!==le&&(ae&&(le=1-le),i.clearDepth(le),ue=le)},reset:function(){C=!1,V=null,J=null,ue=null,ae=!1}}}function a(){let C=!1,ae=null,V=null,J=null,ue=null,le=null,Le=null,ot=null,pt=null;return{setTest:function(je){C||(je?se(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(je){ae!==je&&!C&&(i.stencilMask(je),ae=je)},setFunc:function(je,Ht,qt){(V!==je||J!==Ht||ue!==qt)&&(i.stencilFunc(je,Ht,qt),V=je,J=Ht,ue=qt)},setOp:function(je,Ht,qt){(le!==je||Le!==Ht||ot!==qt)&&(i.stencilOp(je,Ht,qt),le=je,Le=Ht,ot=qt)},setLocked:function(je){C=je},setClear:function(je){pt!==je&&(i.clearStencil(je),pt=je)},reset:function(){C=!1,ae=null,V=null,J=null,ue=null,le=null,Le=null,ot=null,pt=null}}}const r=new t,o=new n,s=new a,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,E=null,M=null,v=null,H=null,w=null,R=new Ee(0,0,0),U=0,b=!1,x=null,A=null,z=null,B=null,G=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=te>=2);let re=null,he={};const xe=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),$e=new Je().fromArray(xe),j=new Je().fromArray(Ne);function ne(C,ae,V,J){const ue=new Uint8Array(4),le=i.createTexture();i.bindTexture(C,le),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<V;Le++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ae+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return le}const ye={};ye[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),se(i.DEPTH_TEST),o.setFunc(3),Be(!1),Oe(1),se(i.CULL_FACE),F(0);function se(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function we(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Ce(C,ae){return h[C]!==ae?(i.bindFramebuffer(C,ae),h[C]=ae,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function He(C,ae){let V=f,J=!1;if(C){V=d.get(ae),V===void 0&&(V=[],d.set(ae,V));const ue=C.textures;if(V.length!==ue.length||V[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Le=ue.length;le<Le;le++)V[le]=i.COLOR_ATTACHMENT0+le;V.length=ue.length,J=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,J=!0);J&&i.drawBuffers(V)}function at(C){return g!==C?(i.useProgram(C),g=C,!0):!1}const Ge={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Ge[103]=i.MIN,Ge[104]=i.MAX;const lt={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function F(C,ae,V,J,ue,le,Le,ot,pt,je){if(C===0){y===!0&&(we(i.BLEND),y=!1);return}if(y===!1&&(se(i.BLEND),y=!0),C!==5){if(C!==m||je!==b){if((p!==100||v!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,v=100),je)switch(C){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,M=null,H=null,w=null,R.set(0,0,0),U=0,m=C,b=je}return}ue=ue||ae,le=le||V,Le=Le||J,(ae!==p||ue!==v)&&(i.blendEquationSeparate(Ge[ae],Ge[ue]),p=ae,v=ue),(V!==E||J!==M||le!==H||Le!==w)&&(i.blendFuncSeparate(lt[V],lt[J],lt[le],lt[Le]),E=V,M=J,H=le,w=Le),(ot.equals(R)===!1||pt!==U)&&(i.blendColor(ot.r,ot.g,ot.b,pt),R.copy(ot),U=pt),m=C,b=!1}function Dt(C,ae){C.side===2?we(i.CULL_FACE):se(i.CULL_FACE);let V=C.side===1;ae&&(V=!V),Be(V),C.blending===1&&C.transparent===!1?F(0):F(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);const J=C.stencilWrite;s.setTest(J),J&&(s.setMask(C.stencilWriteMask),s.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),s.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),tt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(C){x!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),x=C)}function Oe(C){C!==0?(se(i.CULL_FACE),C!==A&&(C===1?i.cullFace(i.BACK):C===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),A=C}function Me(C){C!==z&&(q&&i.lineWidth(C),z=C)}function tt(C,ae,V){C?(se(i.POLYGON_OFFSET_FILL),(B!==ae||G!==V)&&(i.polygonOffset(ae,V),B=ae,G=V)):we(i.POLYGON_OFFSET_FILL)}function be(C){C?se(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function T(C){C===void 0&&(C=i.TEXTURE0+K-1),re!==C&&(i.activeTexture(C),re=C)}function _(C,ae,V){V===void 0&&(re===null?V=i.TEXTURE0+K-1:V=re);let J=he[V];J===void 0&&(J={type:void 0,texture:void 0},he[V]=J),(J.type!==C||J.texture!==ae)&&(re!==V&&(i.activeTexture(V),re=V),i.bindTexture(C,ae||ye[C]),J.type=C,J.texture=ae)}function N(){const C=he[re];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(C){$e.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),$e.copy(C))}function pe(C){j.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),j.copy(C))}function ke(C,ae){let V=c.get(ae);V===void 0&&(V=new WeakMap,c.set(ae,V));let J=V.get(C);J===void 0&&(J=i.getUniformBlockIndex(ae,C.name),V.set(C,J))}function Fe(C,ae){const J=c.get(ae).get(C);l.get(ae)!==J&&(i.uniformBlockBinding(ae,J,C.__bindingPointIndex),l.set(ae,J))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,he={},h={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,E=null,M=null,v=null,H=null,w=null,R=new Ee(0,0,0),U=0,b=!1,x=null,A=null,z=null,B=null,G=null,$e.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:se,disable:we,bindFramebuffer:Ce,drawBuffers:He,useProgram:at,setBlending:F,setMaterial:Dt,setFlipSided:Be,setCullFace:Oe,setLineWidth:Me,setPolygonOffset:tt,setScissorTest:be,activeTexture:T,bindTexture:_,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:$,texImage2D:fe,texImage3D:Te,updateUBOMapping:ke,uniformBlockBinding:Fe,texStorage2D:ze,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Ae,viewport:pe,reset:Qe}}function rs(i,e,t,n){const a=Ud(n);switch(t){case 1021:return i*e;case 1024:return i*e;case 1025:return i*e*2;case 1028:return i*e/a.components*a.byteLength;case 1029:return i*e/a.components*a.byteLength;case 1030:return i*e*2/a.components*a.byteLength;case 1031:return i*e*2/a.components*a.byteLength;case 1022:return i*e*3/a.components*a.byteLength;case 1023:return i*e*4/a.components*a.byteLength;case 1033:return i*e*4/a.components*a.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ud(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Nd(i,e,t,n,a,r,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):ea("canvas")}function y(T,_,N){let Z=1;const $=be(T);if(($.width>N||$.height>N)&&(Z=N/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(Z*$.width),ve=Math.floor(Z*$.height);h===void 0&&(h=g(Y,ve));const oe=_?g(Y,ve):h;return oe.width=Y,oe.height=ve,oe.getContext("2d").drawImage(T,0,0,Y,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+ve+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,_,N,Z,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),_===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),_===i.RGBA){const ve=$?aa:Ve.getTransfer(Z);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=ve===Ze?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(T,_){let N;return T?_===null||_===1014||_===1020?N=i.DEPTH24_STENCIL8:_===1015?N=i.DEPTH32F_STENCIL8:_===1012&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===1014||_===1020?N=i.DEPTH_COMPONENT24:_===1015?N=i.DEPTH_COMPONENT32F:_===1012&&(N=i.DEPTH_COMPONENT16),N}function H(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function w(T){const _=T.target;_.removeEventListener("dispose",w),U(_),_.isVideoTexture&&u.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),x(_)}function U(T){const _=n.get(T);if(_.__webglInit===void 0)return;const N=T.source,Z=d.get(N);if(Z){const $=Z[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(T),Object.keys(Z).length===0&&d.delete(N)}n.remove(T)}function b(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const N=T.source,Z=d.get(N);delete Z[_.__cacheKey],o.memory.textures--}function x(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let $=0;$<_.__webglFramebuffer[Z].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[Z][$]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=T.textures;for(let Z=0,$=N.length;Z<$;Z++){const Y=n.get(N[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(N[Z])}n.remove(T)}let A=0;function z(){A=0}function B(){const T=A;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),A+=1,T}function G(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function K(T,_){const N=n.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,T,_);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function q(T,_){const N=n.get(T);if(T.version>0&&N.__version!==T.version){j(N,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function te(T,_){const N=n.get(T);if(T.version>0&&N.__version!==T.version){j(N,T,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function X(T,_){const N=n.get(T);if(T.version>0&&N.__version!==T.version){ne(N,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const re={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},he={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},xe={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Ne(T,_){if(_.type===1015&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,re[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,re[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,re[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $e(T,_){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",w));const Z=_.source;let $=d.get(Z);$===void 0&&($={},d.set(Z,$));const Y=G(_);if(Y!==T.__cacheKey){$[Y]===void 0&&($[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[Y].usedTimes++;const ve=$[T.__cacheKey];ve!==void 0&&($[T.__cacheKey].usedTimes--,ve.usedTimes===0&&b(_)),T.__cacheKey=Y,T.__webglTexture=$[Y].texture}return N}function j(T,_,N){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);const $=$e(T,_),Y=_.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+N);const ve=n.get(Y);if(Y.version!==ve.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const oe=Ve.getPrimaries(Ve.workingColorSpace),de=_.colorSpace===""?null:Ve.getPrimaries(_.colorSpace),ze=_.colorSpace===""||oe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Q=y(_.image,!1,a.maxTextureSize);Q=tt(_,Q);const fe=r.convert(_.format,_.colorSpace),Te=r.convert(_.type);let Ae=M(_.internalFormat,fe,Te,_.colorSpace,_.isVideoTexture);Ne(Z,_);let pe;const ke=_.mipmaps,Fe=_.isVideoTexture!==!0,Qe=ve.__version===void 0||$===!0,C=Y.dataReady,ae=H(_,Q);if(_.isDepthTexture)Ae=v(_.format===1027,_.type),Qe&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,fe,Te,null));else if(_.isDataTexture)if(ke.length>0){Fe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ae,Ae,ke[0].width,ke[0].height);for(let V=0,J=ke.length;V<J;V++)pe=ke[V],Fe?C&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(i.TEXTURE_2D,V,Ae,pe.width,pe.height,0,fe,Te,pe.data);_.generateMipmaps=!1}else Fe?(Qe&&t.texStorage2D(i.TEXTURE_2D,ae,Ae,Q.width,Q.height),C&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,fe,Te,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,fe,Te,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ae,ke[0].width,ke[0].height,Q.depth);for(let V=0,J=ke.length;V<J;V++)if(pe=ke[V],_.format!==1023)if(fe!==null)if(Fe){if(C)if(_.layerUpdates.size>0){const ue=rs(pe.width,pe.height,_.format,_.type);for(const le of _.layerUpdates){const Le=pe.data.subarray(le*ue/pe.data.BYTES_PER_ELEMENT,(le+1)*ue/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,le,pe.width,pe.height,1,fe,Le)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,fe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ae,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?C&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,fe,Te,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Ae,pe.width,pe.height,Q.depth,0,fe,Te,pe.data)}else{Fe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ae,Ae,ke[0].width,ke[0].height);for(let V=0,J=ke.length;V<J;V++)pe=ke[V],_.format!==1023?fe!==null?Fe?C&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?C&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(i.TEXTURE_2D,V,Ae,pe.width,pe.height,0,fe,Te,pe.data)}else if(_.isDataArrayTexture)if(Fe){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ae,Q.width,Q.height,Q.depth),C)if(_.layerUpdates.size>0){const V=rs(Q.width,Q.height,_.format,_.type);for(const J of _.layerUpdates){const ue=Q.data.subarray(J*V/Q.data.BYTES_PER_ELEMENT,(J+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,fe,Te,ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,fe,Te,Q.data);else if(_.isData3DTexture)Fe?(Qe&&t.texStorage3D(i.TEXTURE_3D,ae,Ae,Q.width,Q.height,Q.depth),C&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,fe,Te,Q.data);else if(_.isFramebufferTexture){if(Qe)if(Fe)t.texStorage2D(i.TEXTURE_2D,ae,Ae,Q.width,Q.height);else{let V=Q.width,J=Q.height;for(let ue=0;ue<ae;ue++)t.texImage2D(i.TEXTURE_2D,ue,Ae,V,J,0,fe,Te,null),V>>=1,J>>=1}}else if(ke.length>0){if(Fe&&Qe){const V=be(ke[0]);t.texStorage2D(i.TEXTURE_2D,ae,Ae,V.width,V.height)}for(let V=0,J=ke.length;V<J;V++)pe=ke[V],Fe?C&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,fe,Te,pe):t.texImage2D(i.TEXTURE_2D,V,Ae,fe,Te,pe);_.generateMipmaps=!1}else if(Fe){if(Qe){const V=be(Q);t.texStorage2D(i.TEXTURE_2D,ae,Ae,V.width,V.height)}C&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ae,fe,Te,Q);m(_)&&p(Z),ve.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,N){if(_.image.length!==6)return;const Z=$e(T,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const Y=n.get($);if($.version!==Y.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);const ve=Ve.getPrimaries(Ve.workingColorSpace),oe=_.colorSpace===""?null:Ve.getPrimaries(_.colorSpace),de=_.colorSpace===""||ve===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ze=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!ze&&!Q?fe[J]=y(_.image[J],!0,a.maxCubemapSize):fe[J]=Q?_.image[J].image:_.image[J],fe[J]=tt(_,fe[J]);const Te=fe[0],Ae=r.convert(_.format,_.colorSpace),pe=r.convert(_.type),ke=M(_.internalFormat,Ae,pe,_.colorSpace),Fe=_.isVideoTexture!==!0,Qe=Y.__version===void 0||Z===!0,C=$.dataReady;let ae=H(_,Te);Ne(i.TEXTURE_CUBE_MAP,_);let V;if(ze){Fe&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,ke,Te.width,Te.height);for(let J=0;J<6;J++){V=fe[J].mipmaps;for(let ue=0;ue<V.length;ue++){const le=V[ue];_.format!==1023?Ae!==null?Fe?C&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,le.width,le.height,Ae,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,ke,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,le.width,le.height,Ae,pe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,ke,le.width,le.height,0,Ae,pe,le.data)}}}else{if(V=_.mipmaps,Fe&&Qe){V.length>0&&ae++;const J=be(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,ke,J.width,J.height)}for(let J=0;J<6;J++)if(Q){Fe?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,Ae,pe,fe[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,fe[J].width,fe[J].height,0,Ae,pe,fe[J].data);for(let ue=0;ue<V.length;ue++){const Le=V[ue].image[J].image;Fe?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Le.width,Le.height,Ae,pe,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,ke,Le.width,Le.height,0,Ae,pe,Le.data)}}else{Fe?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae,pe,fe[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,Ae,pe,fe[J]);for(let ue=0;ue<V.length;ue++){const le=V[ue];Fe?C&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Ae,pe,le.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,ke,Ae,pe,le.image[J])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),Y.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ye(T,_,N,Z,$,Y){const ve=r.convert(N.format,N.colorSpace),oe=r.convert(N.type),de=M(N.internalFormat,ve,oe,N.colorSpace),ze=n.get(_),Q=n.get(N);if(Q.__renderTarget=_,!ze.__hasExternalTextures){const fe=Math.max(1,_.width>>Y),Te=Math.max(1,_.height>>Y);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Y,de,fe,Te,_.depth,0,ve,oe,null):t.texImage2D($,Y,de,fe,Te,0,ve,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Oe(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,$,Q.__webglTexture,0,Be(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,$,Q.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(T,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const Z=_.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,Y=v(_.stencilBuffer,$),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=Be(_);Oe(_)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Y,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,T)}else{const Z=_.textures;for(let $=0;$<Z.length;$++){const Y=Z[$],ve=r.convert(Y.format,Y.colorSpace),oe=r.convert(Y.type),de=M(Y.internalFormat,ve,oe,Y.colorSpace),ze=Be(_);N&&Oe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,de,_.width,_.height):Oe(_)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,de,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,de,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const $=Z.__webglTexture,Y=Be(_);if(_.depthTexture.format===1026)Oe(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===1027)Oe(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const _=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=Z}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");we(_.__webglFramebuffer,T)}else if(N){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),se(_.__webglDepthbuffer[Z],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),se(_.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(T,_,N){const Z=n.get(T);_!==void 0&&ye(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ce(T)}function at(T){const _=T.texture,N=n.get(T),Z=n.get(_);T.addEventListener("dispose",R);const $=T.textures,Y=T.isWebGLCubeRenderTarget===!0,ve=$.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,o.memory.textures++),Y){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let de=0;de<_.mipmaps.length;de++)N.__webglFramebuffer[oe][de]=i.createFramebuffer()}else N.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)N.__webglFramebuffer[oe]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ve)for(let oe=0,de=$.length;oe<de;oe++){const ze=n.get($[oe]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Oe(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const de=$[oe];N.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);const ze=r.convert(de.format,de.colorSpace),Q=r.convert(de.type),fe=M(de.internalFormat,ze,Q,de.colorSpace,T.isXRRenderTarget===!0),Te=Be(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,fe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),se(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)ye(N.__webglFramebuffer[oe][de],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else ye(N.__webglFramebuffer[oe],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,de=$.length;oe<de;oe++){const ze=$[oe],Q=n.get(ze);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ne(i.TEXTURE_2D,ze),ye(N.__webglFramebuffer,T,ze,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),m(ze)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),Ne(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)ye(N.__webglFramebuffer[de],T,_,i.COLOR_ATTACHMENT0,oe,de);else ye(N.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,oe,0);m(_)&&p(oe),t.unbindTexture()}T.depthBuffer&&Ce(T)}function Ge(T){const _=T.textures;for(let N=0,Z=_.length;N<Z;N++){const $=_[N];if(m($)){const Y=E(T),ve=n.get($).__webglTexture;t.bindTexture(Y,ve),p(Y),t.unbindTexture()}}}const lt=[],F=[];function Dt(T){if(T.samples>0){if(Oe(T)===!1){const _=T.textures,N=T.width,Z=T.height;let $=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(T),oe=_.length>1;if(oe)for(let de=0;de<_.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let de=0;de<_.length;de++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);const ze=n.get(_[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,$,i.NEAREST),l===!0&&(lt.length=0,F.length=0,lt.push(i.COLOR_ATTACHMENT0+de),T.depthBuffer&&T.resolveDepthBuffer===!1&&(lt.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<_.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);const ze=n.get(_[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Be(T){return Math.min(a.maxSamples,T.samples)}function Oe(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(T){const _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function tt(T,_){const N=T.colorSpace,Z=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Kn&&N!==""&&(Ve.getTransfer(N)===Ze?(Z!==1023||$!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=He,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Oe}function Hd(i,e){function t(n,a=""){let r;const o=Ve.getTransfer(a);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Bd extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rt extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Od={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return s!==null&&(s.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const kd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new yt,r=e.properties.get(a);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:kd,fragmentShader:Gd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vd extends Zn{constructor(e,t){super();const n=this;let a=null,r=1,o=null,s="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const y=new zd,m=t.getContextAttributes();let p=null,E=null;const M=[],v=[],H=new Pe;let w=null;const R=new Ut;R.viewport=new Je;const U=new Ut;U.viewport=new Je;const b=[R,U],x=new Bd;let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=M[j];return ne===void 0&&(ne=new Ha,M[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=M[j];return ne===void 0&&(ne=new Ha,M[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=M[j];return ne===void 0&&(ne=new Ha,M[j]=ne),ne.getHandSpace()};function B(j){const ne=v.indexOf(j.inputSource);if(ne===-1)return;const ye=M[ne];ye!==void 0&&(ye.update(j.inputSource,j.frame,c||o),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",K);for(let j=0;j<M.length;j++){const ne=v[j];ne!==null&&(v[j]=null,M[j].disconnect(ne))}A=null,z=null,y.reset(),e.setRenderTarget(p),f=null,d=null,h=null,a=null,E=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(p=e.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",G),a.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(H),a.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(a,t,ne),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new bn(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ye=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?1027:1026,ye=m.stencil?1020:1014);const we={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(a,t),d=h.createProjectionLayer(we),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new bn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new zs(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(s),$e.setContext(a),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(j){for(let ne=0;ne<j.removed.length;ne++){const ye=j.removed[ne],se=v.indexOf(ye);se>=0&&(v[se]=null,M[se].disconnect(ye))}for(let ne=0;ne<j.added.length;ne++){const ye=j.added[ne];let se=v.indexOf(ye);if(se===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=v.length){v.push(ye),se=Ce;break}else if(v[Ce]===null){v[Ce]=ye,se=Ce;break}if(se===-1)break}const we=M[se];we&&we.connect(ye)}}const q=new I,te=new I;function X(j,ne,ye){q.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(ye.matrixWorld);const se=q.distanceTo(te),we=ne.projectionMatrix.elements,Ce=ye.projectionMatrix.elements,He=we[14]/(we[10]-1),at=we[14]/(we[10]+1),Ge=(we[9]+1)/we[5],lt=(we[9]-1)/we[5],F=(we[8]-1)/we[0],Dt=(Ce[8]+1)/Ce[0],Be=He*F,Oe=He*Dt,Me=se/(-F+Dt),tt=Me*-F;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(tt),j.translateZ(Me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const be=He+Me,T=at+Me,_=Be-tt,N=Oe+(se-tt),Z=Ge*at/T*be,$=lt*at/T*be;j.projectionMatrix.makePerspective(_,N,Z,$,be,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function re(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let ne=j.near,ye=j.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),x.near=U.near=R.near=ne,x.far=U.far=R.far=ye,(A!==x.near||z!==x.far)&&(a.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,z=x.far),R.layers.mask=j.layers.mask|2,U.layers.mask=j.layers.mask|4,x.layers.mask=R.layers.mask|U.layers.mask;const se=j.parent,we=x.cameras;re(x,se);for(let Ce=0;Ce<we.length;Ce++)re(we[Ce],se);we.length===2?X(x,R,U):x.projectionMatrix.copy(R.projectionMatrix),he(j,x,se)};function he(j,ne,ye){ye===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_i*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let xe=null;function Ne(j,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const ye=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let se=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Ce=0;Ce<ye.length;Ce++){const He=ye[Ce];let at=null;if(f!==null)at=f.getViewport(He);else{const lt=h.getViewSubImage(d,He);at=lt.viewport,Ce===0&&(e.setRenderTargetTextures(E,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(E))}let Ge=b[Ce];Ge===void 0&&(Ge=new Ut,Ge.layers.enable(Ce),Ge.viewport=new Je,b[Ce]=Ge),Ge.matrix.fromArray(He.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(He.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(at.x,at.y,at.width,at.height),Ce===0&&(x.matrix.copy(Ge.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(Ge)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ce=h.getDepthInformation(ye[0]);Ce&&Ce.isValid&&Ce.texture&&y.init(e,Ce,a.renderState)}}for(let ye=0;ye<M.length;ye++){const se=v[ye],we=M[ye];se!==null&&we!==void 0&&we.update(se,ne,c||o)}xe&&xe(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const $e=new ks;$e.setAnimationLoop(Ne),this.setAnimationLoop=function(j){xe=j},this.dispose=function(){}}}const yn=new At,Wd=new Ye;function Xd(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hs(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,E,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?l(m,p,E,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),M=E.envMap,v=E.envMapRotation;M&&(m.envMap.value=M,yn.copy(v),yn.x*=-1,yn.y*=-1,yn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),m.envMapRotation.value.setFromMatrix4(Wd.makeRotationFromEuler(yn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function qd(i,e,t,n){let a={},r={},o=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const v=M.program;n.uniformBlockBinding(E,v)}function c(E,M){let v=a[E.id];v===void 0&&(g(E),v=u(E),a[E.id]=v,E.addEventListener("dispose",m));const H=M.program;n.updateUBOMapping(E,H);const w=e.render.frame;r[E.id]!==w&&(d(E),r[E.id]=w)}function u(E){const M=h();E.__bindingPointIndex=M;const v=i.createBuffer(),H=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,H,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=a[E.id],v=E.uniforms,H=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,R=v.length;w<R;w++){const U=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,x=U.length;b<x;b++){const A=U[b];if(f(A,w,b,H)===!0){const z=A.__offset,B=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let K=0;K<B.length;K++){const q=B[K],te=y(q);typeof q=="number"||typeof q=="boolean"?(A.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,z+G,A.__data)):q.isMatrix3?(A.__data[0]=q.elements[0],A.__data[1]=q.elements[1],A.__data[2]=q.elements[2],A.__data[3]=0,A.__data[4]=q.elements[3],A.__data[5]=q.elements[4],A.__data[6]=q.elements[5],A.__data[7]=0,A.__data[8]=q.elements[6],A.__data[9]=q.elements[7],A.__data[10]=q.elements[8],A.__data[11]=0):(q.toArray(A.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,M,v,H){const w=E.value,R=M+"_"+v;if(H[R]===void 0)return typeof w=="number"||typeof w=="boolean"?H[R]=w:H[R]=w.clone(),!0;{const U=H[R];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return H[R]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(E){const M=E.uniforms;let v=0;const H=16;for(let R=0,U=M.length;R<U;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,A=b.length;x<A;x++){const z=b[x],B=Array.isArray(z.value)?z.value:[z.value];for(let G=0,K=B.length;G<K;G++){const q=B[G],te=y(q),X=v%H,re=X%te.boundary,he=X+re;v+=re,he!==0&&H-he<te.storage&&(v+=H-he),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=te.storage}}}const w=v%H;return w>0&&(v+=H-w),E.__size=v,E.__cache={},this}function y(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(a[M.id]),delete a[M.id],delete r[M.id]}function p(){for(const E in a)i.deleteBuffer(a[E]);o=[],a={},r={}}return{bind:l,update:c,dispose:p}}class mp{constructor(e={}){const{canvas:t=Uo(),context:n=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,p=null;const E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let H=!1,w=0,R=0,U=null,b=-1,x=null;const A=new Je,z=new Je;let B=null;const G=new Ee(0);let K=0,q=t.width,te=t.height,X=1,re=null,he=null;const xe=new Je(0,0,q,te),Ne=new Je(0,0,q,te);let $e=!1;const j=new Ja;let ne=!1,ye=!1;const se=new Ye,we=new Ye,Ce=new I,He=new Je,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function lt(){return U===null?X:1}let F=n;function Dt(S,L){return t.getContext(S,L)}try{const S={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",le,!1),F===null){const L="webgl2";if(F=Dt(L,S),F===null)throw Dt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Be,Oe,Me,tt,be,T,_,N,Z,$,Y,ve,oe,de,ze,Q,fe,Te,Ae,pe,ke,Fe,Qe,C;function ae(){Be=new $u(F),Be.init(),Fe=new Hd(F,Be),Oe=new qu(F,Be,e,Fe),Me=new Fd(F,Be),Oe.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),tt=new th(F),be=new vd,T=new Nd(F,Be,Me,be,Oe,Fe,tt),_=new ju(v),N=new Ju(v),Z=new ll(F),Qe=new Wu(F,Z),$=new Qu(F,Z,tt,Qe),Y=new ih(F,$,Z,tt),Ae=new nh(F,Oe,T),Q=new Yu(be),ve=new yd(v,_,N,Be,Oe,Qe,Q),oe=new Xd(v,be),de=new xd,ze=new Ad(Be),Te=new Vu(v,_,N,Me,Y,f,l),fe=new Dd(v,Y,Oe),C=new qd(F,tt,Oe,Me),pe=new Xu(F,Be,tt),ke=new eh(F,Be,tt),tt.programs=ve.programs,v.capabilities=Oe,v.extensions=Be,v.properties=be,v.renderLists=de,v.shadowMap=fe,v.state=Me,v.info=tt}ae();const V=new Vd(v,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(q,te,!1))},this.getSize=function(S){return S.set(q,te)},this.setSize=function(S,L,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,te=L,t.width=Math.floor(S*X),t.height=Math.floor(L*X),O===!0&&(t.style.width=S+"px",t.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(q*X,te*X).floor()},this.setDrawingBufferSize=function(S,L,O){q=S,te=L,X=O,t.width=Math.floor(S*O),t.height=Math.floor(L*O),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(xe)},this.setViewport=function(S,L,O,k){S.isVector4?xe.set(S.x,S.y,S.z,S.w):xe.set(S,L,O,k),Me.viewport(A.copy(xe).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Ne)},this.setScissor=function(S,L,O,k){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,L,O,k),Me.scissor(z.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(S){Me.setScissorTest($e=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(S=!0,L=!0,O=!0){let k=0;if(S){let D=!1;if(U!==null){const ee=U.texture.format;D=ee===1033||ee===1031||ee===1029}if(D){const ee=U.texture.type,ce=ee===1009||ee===1014||ee===1012||ee===1020||ee===1017||ee===1018,me=Te.getClearColor(),ge=Te.getClearAlpha(),Re=me.r,De=me.g,_e=me.b;ce?(g[0]=Re,g[1]=De,g[2]=_e,g[3]=ge,F.clearBufferuiv(F.COLOR,0,g)):(y[0]=Re,y[1]=De,y[2]=_e,y[3]=ge,F.clearBufferiv(F.COLOR,0,y))}else k|=F.COLOR_BUFFER_BIT}L&&(k|=F.DEPTH_BUFFER_BIT),O&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",le,!1),de.dispose(),ze.dispose(),be.dispose(),_.dispose(),N.dispose(),Y.dispose(),Qe.dispose(),C.dispose(),ve.dispose(),V.dispose(),V.removeEventListener("sessionstart",rr),V.removeEventListener("sessionend",sr),dn.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const S=tt.autoReset,L=fe.enabled,O=fe.autoUpdate,k=fe.needsUpdate,D=fe.type;ae(),tt.autoReset=S,fe.enabled=L,fe.autoUpdate=O,fe.needsUpdate=k,fe.type=D}function le(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Le(S){const L=S.target;L.removeEventListener("dispose",Le),ot(L)}function ot(S){pt(S),be.remove(S)}function pt(S){const L=be.get(S).programs;L!==void 0&&(L.forEach(function(O){ve.releaseProgram(O)}),S.isShaderMaterial&&ve.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,O,k,D,ee){L===null&&(L=at);const ce=D.isMesh&&D.matrixWorld.determinant()<0,me=go(S,L,O,k,D);Me.setMaterial(k,ce);let ge=O.index,Re=1;if(k.wireframe===!0){if(ge=$.getWireframeAttribute(O),ge===void 0)return;Re=2}const De=O.drawRange,_e=O.attributes.position;let We=De.start*Re,et=(De.start+De.count)*Re;ee!==null&&(We=Math.max(We,ee.start*Re),et=Math.min(et,(ee.start+ee.count)*Re)),ge!==null?(We=Math.max(We,0),et=Math.min(et,ge.count)):_e!=null&&(We=Math.max(We,0),et=Math.min(et,_e.count));const nt=et-We;if(nt<0||nt===1/0)return;Qe.setup(D,k,me,O,ge);let Et,Xe=pe;if(ge!==null&&(Et=Z.get(ge),Xe=ke,Xe.setIndex(Et)),D.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*lt()),Xe.setMode(F.LINES)):Xe.setMode(F.TRIANGLES);else if(D.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),Me.setLineWidth(Se*lt()),D.isLineSegments?Xe.setMode(F.LINES):D.isLineLoop?Xe.setMode(F.LINE_LOOP):Xe.setMode(F.LINE_STRIP)}else D.isPoints?Xe.setMode(F.POINTS):D.isSprite&&Xe.setMode(F.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Xe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Xe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Se=D._multiDrawStarts,Yt=D._multiDrawCounts,qe=D._multiDrawCount,Bt=ge?Z.get(ge).bytesPerElement:1,wn=be.get(k).currentProgram.getUniforms();for(let Rt=0;Rt<qe;Rt++)wn.setValue(F,"_gl_DrawID",Rt),Xe.render(Se[Rt]/Bt,Yt[Rt])}else if(D.isInstancedMesh)Xe.renderInstances(We,nt,D.count);else if(O.isInstancedBufferGeometry){const Se=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Yt=Math.min(O.instanceCount,Se);Xe.renderInstances(We,nt,Yt)}else Xe.render(We,nt)};function je(S,L,O){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,bi(S,L,O),S.side=0,S.needsUpdate=!0,bi(S,L,O),S.side=2):bi(S,L,O)}this.compile=function(S,L,O=null){O===null&&(O=S),p=ze.get(O),p.init(L),M.push(p),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),S!==O&&S.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const k=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ee=D.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){const me=ee[ce];je(me,O,D),k.add(me)}else je(ee,O,D),k.add(ee)}),M.pop(),p=null,k},this.compileAsync=function(S,L,O=null){const k=this.compile(S,L,O);return new Promise(D=>{function ee(){if(k.forEach(function(ce){be.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){D(S);return}setTimeout(ee,10)}Be.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ht=null;function qt(S){Ht&&Ht(S)}function rr(){dn.stop()}function sr(){dn.start()}const dn=new ks;dn.setAnimationLoop(qt),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(S){Ht=S,V.setAnimationLoop(S),S===null?dn.stop():dn.start()},V.addEventListener("sessionstart",rr),V.addEventListener("sessionend",sr),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,L,U),p=ze.get(S,M.length),p.init(L),M.push(p),we.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),j.setFromProjectionMatrix(we),ye=this.localClippingEnabled,ne=Q.init(this.clippingPlanes,ye),m=de.get(S,E.length),m.init(),E.push(m),V.enabled===!0&&V.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&ua(ee,L,-1/0,v.sortObjects)}ua(S,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,he),Ge=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ge&&Te.addToRenderList(m,S),this.info.render.frame++,ne===!0&&Q.beginShadows();const O=p.state.shadowsArray;fe.render(O,S,L),ne===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,D=m.transmissive;if(p.setupLights(),L.isArrayCamera){const ee=L.cameras;if(D.length>0)for(let ce=0,me=ee.length;ce<me;ce++){const ge=ee[ce];lr(k,D,S,ge)}Ge&&Te.render(S);for(let ce=0,me=ee.length;ce<me;ce++){const ge=ee[ce];or(m,S,ge,ge.viewport)}}else D.length>0&&lr(k,D,S,L),Ge&&Te.render(S),or(m,S,L);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(v,S,L),Qe.resetDefaultState(),b=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],ne===!0&&Q.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ua(S,L,O,k){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){k&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(we);const ce=Y.update(S),me=S.material;me.visible&&m.push(S,ce,me,O,He.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){const ce=Y.update(S),me=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),He.copy(ce.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(we)),Array.isArray(me)){const ge=ce.groups;for(let Re=0,De=ge.length;Re<De;Re++){const _e=ge[Re],We=me[_e.materialIndex];We&&We.visible&&m.push(S,ce,We,O,He.z,_e)}}else me.visible&&m.push(S,ce,me,O,He.z,null)}}const ee=S.children;for(let ce=0,me=ee.length;ce<me;ce++)ua(ee[ce],L,O,k)}function or(S,L,O,k){const D=S.opaque,ee=S.transmissive,ce=S.transparent;p.setupLightsView(O),ne===!0&&Q.setGlobalState(v.clippingPlanes,O),k&&Me.viewport(A.copy(k)),D.length>0&&xi(D,L,O),ee.length>0&&xi(ee,L,O),ce.length>0&&xi(ce,L,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function lr(S,L,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new bn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const ee=p.state.transmissionRenderTarget[k.id],ce=k.viewport||A;ee.setSize(ce.z,ce.w);const me=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(G),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&Te.render(O);const ge=v.toneMapping;v.toneMapping=0;const Re=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ne===!0&&Q.setGlobalState(v.clippingPlanes,k),xi(S,O,k),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),Be.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let _e=0,We=L.length;_e<We;_e++){const et=L[_e],nt=et.object,Et=et.geometry,Xe=et.material,Se=et.group;if(Xe.side===2&&nt.layers.test(k.layers)){const Yt=Xe.side;Xe.side=1,Xe.needsUpdate=!0,cr(nt,O,k,Et,Xe,Se),Xe.side=Yt,Xe.needsUpdate=!0,De=!0}}De===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}v.setRenderTarget(me),v.setClearColor(G,K),Re!==void 0&&(k.viewport=Re),v.toneMapping=ge}function xi(S,L,O){const k=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ee=S.length;D<ee;D++){const ce=S[D],me=ce.object,ge=ce.geometry,Re=k===null?ce.material:k,De=ce.group;me.layers.test(O.layers)&&cr(me,L,O,ge,Re,De)}}function cr(S,L,O,k,D,ee){S.onBeforeRender(v,L,O,k,D,ee),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(v,L,O,k,S,ee),D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=1,D.needsUpdate=!0,v.renderBufferDirect(O,L,k,D,S,ee),D.side=0,D.needsUpdate=!0,v.renderBufferDirect(O,L,k,D,S,ee),D.side=2):v.renderBufferDirect(O,L,k,D,S,ee),S.onAfterRender(v,L,O,k,D,ee)}function bi(S,L,O){L.isScene!==!0&&(L=at);const k=be.get(S),D=p.state.lights,ee=p.state.shadowsArray,ce=D.state.version,me=ve.getParameters(S,D.state,ee,L,O),ge=ve.getProgramCacheKey(me);let Re=k.programs;k.environment=S.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(S.isMeshStandardMaterial?N:_).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",Le),Re=new Map,k.programs=Re);let De=Re.get(ge);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===ce)return hr(S,me),De}else me.uniforms=ve.getUniforms(S),S.onBeforeCompile(me,v),De=ve.acquireProgram(me,ge),Re.set(ge,De),k.uniforms=me.uniforms;const _e=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(_e.clippingPlanes=Q.uniform),hr(S,me),k.needsLights=yo(S),k.lightsStateVersion=ce,k.needsLights&&(_e.ambientLightColor.value=D.state.ambient,_e.lightProbe.value=D.state.probe,_e.directionalLights.value=D.state.directional,_e.directionalLightShadows.value=D.state.directionalShadow,_e.spotLights.value=D.state.spot,_e.spotLightShadows.value=D.state.spotShadow,_e.rectAreaLights.value=D.state.rectArea,_e.ltc_1.value=D.state.rectAreaLTC1,_e.ltc_2.value=D.state.rectAreaLTC2,_e.pointLights.value=D.state.point,_e.pointLightShadows.value=D.state.pointShadow,_e.hemisphereLights.value=D.state.hemi,_e.directionalShadowMap.value=D.state.directionalShadowMap,_e.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_e.spotShadowMap.value=D.state.spotShadowMap,_e.spotLightMatrix.value=D.state.spotLightMatrix,_e.spotLightMap.value=D.state.spotLightMap,_e.pointShadowMap.value=D.state.pointShadowMap,_e.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function ur(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=$i.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function hr(S,L){const O=be.get(S);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function go(S,L,O,k,D){L.isScene!==!0&&(L=at),T.resetTextureUnits();const ee=L.fog,ce=k.isMeshStandardMaterial?L.environment:null,me=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Kn,ge=(k.isMeshStandardMaterial?N:_).get(k.envMap||ce),Re=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_e=!!O.morphAttributes.position,We=!!O.morphAttributes.normal,et=!!O.morphAttributes.color;let nt=0;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(nt=v.toneMapping);const Et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Xe=Et!==void 0?Et.length:0,Se=be.get(k),Yt=p.state.lights;if(ne===!0&&(ye===!0||S!==x)){const It=S===x&&k.id===b;Q.setState(k,S,It)}let qe=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Yt.state.version||Se.outputColorSpace!==me||D.isBatchedMesh&&Se.batching===!1||!D.isBatchedMesh&&Se.batching===!0||D.isBatchedMesh&&Se.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Se.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Se.instancing===!1||!D.isInstancedMesh&&Se.instancing===!0||D.isSkinnedMesh&&Se.skinning===!1||!D.isSkinnedMesh&&Se.skinning===!0||D.isInstancedMesh&&Se.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Se.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Se.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Se.instancingMorph===!1&&D.morphTexture!==null||Se.envMap!==ge||k.fog===!0&&Se.fog!==ee||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Q.numPlanes||Se.numIntersection!==Q.numIntersection)||Se.vertexAlphas!==Re||Se.vertexTangents!==De||Se.morphTargets!==_e||Se.morphNormals!==We||Se.morphColors!==et||Se.toneMapping!==nt||Se.morphTargetsCount!==Xe)&&(qe=!0):(qe=!0,Se.__version=k.version);let Bt=Se.currentProgram;qe===!0&&(Bt=bi(k,L,D));let wn=!1,Rt=!1,ei=!1;const it=Bt.getUniforms(),Wt=Se.uniforms;if(Me.useProgram(Bt.program)&&(wn=!0,Rt=!0,ei=!0),k.id!==b&&(b=k.id,Rt=!0),wn||x!==S){Me.buffers.depth.getReversed()?(se.copy(S.projectionMatrix),Ho(se),Bo(se),it.setValue(F,"projectionMatrix",se)):it.setValue(F,"projectionMatrix",S.projectionMatrix),it.setValue(F,"viewMatrix",S.matrixWorldInverse);const nn=it.map.cameraPosition;nn!==void 0&&nn.setValue(F,Ce.setFromMatrixPosition(S.matrixWorld)),Oe.logarithmicDepthBuffer&&it.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&it.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Rt=!0,ei=!0)}if(D.isSkinnedMesh){it.setOptional(F,D,"bindMatrix"),it.setOptional(F,D,"bindMatrixInverse");const It=D.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),it.setValue(F,"boneTexture",It.boneTexture,T))}D.isBatchedMesh&&(it.setOptional(F,D,"batchingTexture"),it.setValue(F,"batchingTexture",D._matricesTexture,T),it.setOptional(F,D,"batchingIdTexture"),it.setValue(F,"batchingIdTexture",D._indirectTexture,T),it.setOptional(F,D,"batchingColorTexture"),D._colorsTexture!==null&&it.setValue(F,"batchingColorTexture",D._colorsTexture,T));const ti=O.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Ae.update(D,O,Bt),(Rt||Se.receiveShadow!==D.receiveShadow)&&(Se.receiveShadow=D.receiveShadow,it.setValue(F,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Wt.envMap.value=ge,Wt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Wt.envMapIntensity.value=L.environmentIntensity),Rt&&(it.setValue(F,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&_o(Wt,ei),ee&&k.fog===!0&&oe.refreshFogUniforms(Wt,ee),oe.refreshMaterialUniforms(Wt,k,X,te,p.state.transmissionRenderTarget[S.id]),$i.upload(F,ur(Se),Wt,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&($i.upload(F,ur(Se),Wt,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&it.setValue(F,"center",D.center),it.setValue(F,"modelViewMatrix",D.modelViewMatrix),it.setValue(F,"normalMatrix",D.normalMatrix),it.setValue(F,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const It=k.uniformsGroups;for(let nn=0,an=It.length;nn<an;nn++){const dr=It[nn];C.update(dr,Bt),C.bind(dr,Bt)}}return Bt}function _o(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function yo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,L,O){be.get(S.texture).__webglTexture=L,be.get(S.depthTexture).__webglTexture=O;const k=be.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const O=be.get(S);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,O=0){U=S,w=L,R=O;let k=!0,D=null,ee=!1,ce=!1;if(S){const ge=be.get(S);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(F.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(ge.__hasExternalTextures)T.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const _e=S.depthTexture;if(ge.__boundDepthTexture!==_e){if(_e!==null&&be.has(_e)&&(S.width!==_e.image.width||S.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Re=S.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ce=!0);const De=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[L])?D=De[L][O]:D=De[L],ee=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?D=be.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?D=De[O]:D=De,A.copy(S.viewport),z.copy(S.scissor),B=S.scissorTest}else A.copy(xe).multiplyScalar(X).floor(),z.copy(Ne).multiplyScalar(X).floor(),B=$e;if(Me.bindFramebuffer(F.FRAMEBUFFER,D)&&k&&Me.drawBuffers(S,D),Me.viewport(A),Me.scissor(z),Me.setScissorTest(B),ee){const ge=be.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge.__webglTexture,O)}else if(ce){const ge=be.get(S.texture),Re=L||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.__webglTexture,O||0,Re)}b=-1},this.readRenderTargetPixels=function(S,L,O,k,D,ee,ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){Me.bindFramebuffer(F.FRAMEBUFFER,me);try{const ge=S.texture,Re=ge.format,De=ge.type;if(!Oe.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-k&&O>=0&&O<=S.height-D&&F.readPixels(L,O,k,D,Fe.convert(Re),Fe.convert(De),ee)}finally{const ge=U!==null?be.get(U).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(S,L,O,k,D,ee,ce){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){const ge=S.texture,Re=ge.format,De=ge.type;if(!Oe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-k&&O>=0&&O<=S.height-D){Me.bindFramebuffer(F.FRAMEBUFFER,me);const _e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.bufferData(F.PIXEL_PACK_BUFFER,ee.byteLength,F.STREAM_READ),F.readPixels(L,O,k,D,Fe.convert(Re),Fe.convert(De),0);const We=U!==null?be.get(U).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,We);const et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await No(F,et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ee),F.deleteBuffer(_e),F.deleteSync(et),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,O=0){S.isTexture!==!0&&(fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-O),D=Math.floor(S.image.width*k),ee=Math.floor(S.image.height*k),ce=L!==null?L.x:0,me=L!==null?L.y:0;T.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,O,0,0,ce,me,D,ee),Me.unbindTexture()},this.copyTextureToTexture=function(S,L,O=null,k=null,D=0){S.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],L=arguments[2],D=arguments[3]||0,O=null);let ee,ce,me,ge,Re,De,_e,We,et;const nt=S.isCompressedTexture?S.mipmaps[D]:S.image;O!==null?(ee=O.max.x-O.min.x,ce=O.max.y-O.min.y,me=O.isBox3?O.max.z-O.min.z:1,ge=O.min.x,Re=O.min.y,De=O.isBox3?O.min.z:0):(ee=nt.width,ce=nt.height,me=nt.depth||1,ge=0,Re=0,De=0),k!==null?(_e=k.x,We=k.y,et=k.z):(_e=0,We=0,et=0);const Et=Fe.convert(L.format),Xe=Fe.convert(L.type);let Se;L.isData3DTexture?(T.setTexture3D(L,0),Se=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),Se=F.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),Se=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);const Yt=F.getParameter(F.UNPACK_ROW_LENGTH),qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Bt=F.getParameter(F.UNPACK_SKIP_PIXELS),wn=F.getParameter(F.UNPACK_SKIP_ROWS),Rt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ge),F.pixelStorei(F.UNPACK_SKIP_ROWS,Re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,De);const ei=S.isDataArrayTexture||S.isData3DTexture,it=L.isDataArrayTexture||L.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Wt=be.get(S),ti=be.get(L),It=be.get(Wt.__renderTarget),nn=be.get(ti.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,It.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let an=0;an<me;an++)ei&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(S).__webglTexture,D,De+an),S.isDepthTexture?(it&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(L).__webglTexture,D,et+an),F.blitFramebuffer(ge,Re,ee,ce,_e,We,ee,ce,F.DEPTH_BUFFER_BIT,F.NEAREST)):it?F.copyTexSubImage3D(Se,D,_e,We,et+an,ge,Re,ee,ce):F.copyTexSubImage2D(Se,D,_e,We,et+an,ge,Re,ee,ce);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else it?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Se,D,_e,We,et,ee,ce,me,Et,Xe,nt.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(Se,D,_e,We,et,ee,ce,me,Et,nt.data):F.texSubImage3D(Se,D,_e,We,et,ee,ce,me,Et,Xe,nt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,D,_e,We,ee,ce,Et,Xe,nt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,D,_e,We,nt.width,nt.height,Et,nt.data):F.texSubImage2D(F.TEXTURE_2D,D,_e,We,ee,ce,Et,Xe,nt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Bt),F.pixelStorei(F.UNPACK_SKIP_ROWS,wn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt),D===0&&L.generateMipmaps&&F.generateMipmap(Se),Me.unbindTexture()},this.copyTextureToTexture3D=function(S,L,O=null,k=null,D=0){return S.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,S=arguments[2],L=arguments[3],D=arguments[4]||0),fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,L,O,k,D)},this.initRenderTarget=function(S){be.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){w=0,R=0,U=null,Me.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class Ys{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new Ys(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gp extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new At,this.environmentIntensity=1,this.environmentRotation=new At,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xt=new I;class na{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),a=Ke(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),a=Ke(a,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new na(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jd extends tn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let kn;const si=new I,Gn=new I,zn=new I,Vn=new Pe,oi=new Pe,js=new Ye,Vi=new I,li=new I,Wi=new I,ss=new Pe,Ba=new Pe,os=new Pe;class _p extends ut{constructor(e=new jd){if(super(),this.isSprite=!0,this.type="Sprite",kn===void 0){kn=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yd(t,5);kn.setIndex([0,1,2,0,2,3]),kn.setAttribute("position",new na(n,3,0,!1)),kn.setAttribute("uv",new na(n,2,3,!1))}this.geometry=kn,this.material=e,this.center=new Pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gn.setFromMatrixScale(this.matrixWorld),js.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gn.multiplyScalar(-zn.z);const n=this.material.rotation;let a,r;n!==0&&(r=Math.cos(n),a=Math.sin(n));const o=this.center;Xi(Vi.set(-.5,-.5,0),zn,o,Gn,a,r),Xi(li.set(.5,-.5,0),zn,o,Gn,a,r),Xi(Wi.set(.5,.5,0),zn,o,Gn,a,r),ss.set(0,0),Ba.set(1,0),os.set(1,1);let s=e.ray.intersectTriangle(Vi,li,Wi,!1,si);if(s===null&&(Xi(li.set(-.5,.5,0),zn,o,Gn,a,r),Ba.set(0,1),s=e.ray.intersectTriangle(Vi,Wi,li,!1,si),s===null))return;const l=e.ray.origin.distanceTo(si);l<e.near||l>e.far||t.push({distance:l,point:si.clone(),uv:Nt.getInterpolation(si,Vi,li,Wi,ss,Ba,os,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xi(i,e,t,n,a,r){Vn.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(oi.x=r*Vn.x-a*Vn.y,oi.y=a*Vn.x+r*Vn.y):oi.copy(Vn),i.copy(e),i.x+=oi.x,i.y+=oi.y,i.applyMatrix4(js)}class Kd extends yt{constructor(e=null,t=1,n=1,a,r,o,s,l,c=1003,u=1003,h,d){super(null,o,s,l,c,u,a,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls extends vt{constructor(e,t,n,a=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wn=new Ye,cs=new Ye,qi=[],us=new Tn,Zd=new Ye,ci=new Tt,ui=new $n;class yp extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<n;a++)this.setMatrixAt(a,Zd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wn),us.copy(e.boundingBox).applyMatrix4(Wn),this.boundingBox.union(us)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wn),ui.copy(e.boundingSphere).applyMatrix4(Wn),this.boundingSphere.union(ui)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,a=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let s=0;s<n.length;s++)n[s]=a[o+s]}raycast(e,t){const n=this.matrixWorld,a=this.count;if(ci.geometry=this.geometry,ci.material=this.material,ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ui.copy(this.boundingSphere),ui.applyMatrix4(n),e.ray.intersectsSphere(ui)!==!1))for(let r=0;r<a;r++){this.getMatrixAt(r,Wn),cs.multiplyMatrices(n,Wn),ci.matrixWorld=cs,ci.raycast(e,qi);for(let o=0,s=qi.length;o<s;o++){const l=qi[o];l.instanceId=r,l.object=this,t.push(l)}qi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,a=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kd(new Float32Array(a*this.count),a,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const s=this.geometry.morphTargetsRelative?1:1-o,l=a*e;r[l]=s,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jd extends tn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hs=new Ye,Wa=new Ds,Yi=new $n,ji=new I;class vp extends ut{constructor(e=new Lt,t=new Jd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(a),Yi.radius+=r,e.ray.intersectsSphere(Yi)===!1)return;hs.copy(a).invert(),Wa.copy(e.ray).applyMatrix4(hs);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,y=f;g<y;g++){const m=c.getX(g);ji.fromBufferAttribute(h,m),ds(ji,m,l,a,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,y=f;g<y;g++)ji.fromBufferAttribute(h,g),ds(ji,g,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function ds(i,e,t,n,a,r,o){const s=Wa.distanceSqToPoint(i);if(s<t){const l=new I;Wa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ks extends yt{constructor(e,t,n,a,r,o,s,l,c){super(e,t,n,a,r,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qa extends Lt{constructor(e=1,t=1,n=1,a=32,r=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:l};const c=this;a=Math.floor(a),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const y=[],m=n/2;let p=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function E(){const v=new I,H=new I;let w=0;const R=(t-e)/n;for(let U=0;U<=r;U++){const b=[],x=U/r,A=x*(t-e)+e;for(let z=0;z<=a;z++){const B=z/a,G=B*l+s,K=Math.sin(G),q=Math.cos(G);H.x=A*K,H.y=-x*n+m,H.z=A*q,h.push(H.x,H.y,H.z),v.set(K,R,q).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-x),b.push(g++)}y.push(b)}for(let U=0;U<a;U++)for(let b=0;b<r;b++){const x=y[b][U],A=y[b+1][U],z=y[b+1][U+1],B=y[b][U+1];(e>0||b!==0)&&(u.push(x,A,B),w+=3),(t>0||b!==r-1)&&(u.push(A,z,B),w+=3)}c.addGroup(p,w,0),p+=w}function M(v){const H=g,w=new Pe,R=new I;let U=0;const b=v===!0?e:t,x=v===!0?1:-1;for(let z=1;z<=a;z++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const A=g;for(let z=0;z<=a;z++){const G=z/a*l+s,K=Math.cos(G),q=Math.sin(G);R.x=b*q,R.y=m*x,R.z=b*K,h.push(R.x,R.y,R.z),d.push(0,x,0),w.x=K*.5+.5,w.y=q*.5*x+.5,f.push(w.x,w.y),g++}for(let z=0;z<a;z++){const B=H+z,G=A+z;v===!0?u.push(G,G+1,B):u.push(G+1,G,B),U+=3}c.addGroup(p,U,v===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zs extends Qa{constructor(e=1,t=1,n=32,a=1,r=!1,o=0,s=Math.PI*2){super(0,e,t,n,a,r,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:s}}static fromJSON(e){return new Zs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const $d={triangulate:function(i,e,t=2){const n=e&&e.length,a=n?e[0]*t:i.length;let r=Js(i,0,a,t,!0);const o=[];if(!r||r.next===r.prev)return o;let s,l,c,u,h,d,f;if(n&&(r=af(i,e,r,t)),i.length>80*t){s=c=i[0],l=u=i[1];for(let g=t;g<a;g+=t)h=i[g],d=i[g+1],h<s&&(s=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-s,u-l),f=f!==0?32767/f:0}return yi(r,o,t,s,l,f,0),o}};function Js(i,e,t,n,a){let r,o;if(a===mf(i,e,t,n)>0)for(r=e;r<t;r+=n)o=fs(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=fs(r,i[r],i[r+1],o);return o&&oa(o,o.next)&&(Si(o),o=o.next),o}function Mn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oa(t,t.next)||st(t.prev,t,t.next)===0)){if(Si(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function yi(i,e,t,n,a,r,o){if(!i)return;!o&&r&&cf(i,n,a,r);let s=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?ef(i,n,a,r):Qd(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Si(i),i=c.next,s=c.next;continue}if(i=c,i===s){o?o===1?(i=tf(Mn(i),e,t),yi(i,e,t,n,a,r,2)):o===2&&nf(i,e,t,n,a,r):yi(Mn(i),e,t,n,a,r,1);break}}}function Qd(i){const e=i.prev,t=i,n=i.next;if(st(e,t,n)>=0)return!1;const a=e.x,r=t.x,o=n.x,s=e.y,l=t.y,c=n.y,u=a<r?a<o?a:o:r<o?r:o,h=s<l?s<c?s:c:l<c?l:c,d=a>r?a>o?a:o:r>o?r:o,f=s>l?s>c?s:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&qn(a,s,r,l,o,c,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ef(i,e,t,n){const a=i.prev,r=i,o=i.next;if(st(a,r,o)>=0)return!1;const s=a.x,l=r.x,c=o.x,u=a.y,h=r.y,d=o.y,f=s<l?s<c?s:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,y=s>l?s>c?s:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Xa(f,g,e,t,n),E=Xa(y,m,e,t,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=E;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==a&&M!==o&&qn(s,u,l,h,c,d,M.x,M.y)&&st(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==a&&v!==o&&qn(s,u,l,h,c,d,v.x,v.y)&&st(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==a&&M!==o&&qn(s,u,l,h,c,d,M.x,M.y)&&st(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==a&&v!==o&&qn(s,u,l,h,c,d,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function tf(i,e,t){let n=i;do{const a=n.prev,r=n.next.next;!oa(a,r)&&$s(a,n,n.next,r)&&vi(a,r)&&vi(r,a)&&(e.push(a.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Si(n),Si(n.next),n=i=r),n=n.next}while(n!==i);return Mn(n)}function nf(i,e,t,n,a,r){let o=i;do{let s=o.next.next;for(;s!==o.prev;){if(o.i!==s.i&&df(o,s)){let l=Qs(o,s);o=Mn(o,o.next),l=Mn(l,l.next),yi(o,e,t,n,a,r,0),yi(l,e,t,n,a,r,0);return}s=s.next}o=o.next}while(o!==i)}function af(i,e,t,n){const a=[];let r,o,s,l,c;for(r=0,o=e.length;r<o;r++)s=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Js(i,s,l,n,!1),c===c.next&&(c.steiner=!0),a.push(hf(c));for(a.sort(rf),r=0;r<a.length;r++)t=sf(a[r],t);return t}function rf(i,e){return i.x-e.x}function sf(i,e){const t=of(i,e);if(!t)return e;const n=Qs(t,i);return Mn(n,n.next),Mn(t,t.next)}function of(i,e){let t=e,n=-1/0,a;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,a=t.x<t.next.x?t:t.next,d===r))return a}t=t.next}while(t!==e);if(!a)return null;const s=a,l=a.x,c=a.y;let u=1/0,h;t=a;do r>=t.x&&t.x>=l&&r!==t.x&&qn(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),vi(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&lf(a,t)))&&(a=t,u=h)),t=t.next;while(t!==s);return a}function lf(i,e){return st(i.prev,i,e.prev)<0&&st(e.next,i,i.next)<0}function cf(i,e,t,n){let a=i;do a.z===0&&(a.z=Xa(a.x,a.y,e,t,n)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==i);a.prevZ.nextZ=null,a.prevZ=null,uf(a)}function uf(i){let e,t,n,a,r,o,s,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,s=0,e=0;e<c&&(s++,n=n.nextZ,!!n);e++);for(l=c;s>0||l>0&&n;)s!==0&&(l===0||!n||t.z<=n.z)?(a=t,t=t.nextZ,s--):(a=n,n=n.nextZ,l--),r?r.nextZ=a:i=a,a.prevZ=r,r=a;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Xa(i,e,t,n,a){return i=(i-t)*a|0,e=(e-n)*a|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qn(i,e,t,n,a,r,o,s){return(a-o)*(e-s)>=(i-o)*(r-s)&&(i-o)*(n-s)>=(t-o)*(e-s)&&(t-o)*(r-s)>=(a-o)*(n-s)}function df(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ff(i,e)&&(vi(i,e)&&vi(e,i)&&pf(i,e)&&(st(i.prev,i,e.prev)||st(i,e.prev,e))||oa(i,e)&&st(i.prev,i,i.next)>0&&st(e.prev,e,e.next)>0)}function st(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oa(i,e){return i.x===e.x&&i.y===e.y}function $s(i,e,t,n){const a=Zi(st(i,e,t)),r=Zi(st(i,e,n)),o=Zi(st(t,n,i)),s=Zi(st(t,n,e));return!!(a!==r&&o!==s||a===0&&Ki(i,t,e)||r===0&&Ki(i,n,e)||o===0&&Ki(t,i,n)||s===0&&Ki(t,e,n))}function Ki(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Zi(i){return i>0?1:i<0?-1:0}function ff(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$s(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vi(i,e){return st(i.prev,i,i.next)<0?st(i,e,i.next)>=0&&st(i,i.prev,e)>=0:st(i,e,i.prev)<0||st(i,i.next,e)<0}function pf(i,e){let t=i,n=!1;const a=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&a<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qs(i,e){const t=new qa(i.i,i.x,i.y),n=new qa(e.i,e.x,e.y),a=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=a,a.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fs(i,e,t,n){const a=new qa(i,e,t);return n?(a.next=n.next,a.prev=n,n.next.prev=a,n.next=a):(a.prev=a,a.next=a),a}function Si(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qa(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mf(i,e,t,n){let a=0;for(let r=e,o=t-n;r<t;r+=n)a+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return a}class eo{static area(e){const t=e.length;let n=0;for(let a=t-1,r=0;r<t;a=r++)n+=e[a].x*e[r].y-e[r].x*e[a].y;return n*.5}static isClockWise(e){return eo.area(e)<0}static triangulateShape(e,t){const n=[],a=[],r=[];ps(e),ms(n,e);let o=e.length;t.forEach(ps);for(let l=0;l<t.length;l++)a.push(o),o+=t[l].length,ms(n,t[l]);const s=$d.triangulate(n,a);for(let l=0;l<s.length;l+=3)r.push(s.slice(l,l+3));return r}}function ps(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ms(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class to extends Lt{constructor(e=.5,t=1,n=32,a=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:a,thetaStart:r,thetaLength:o},n=Math.max(3,n),a=Math.max(1,a);const s=[],l=[],c=[],u=[];let h=e;const d=(t-e)/a,f=new I,g=new Pe;for(let y=0;y<=a;y++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let y=0;y<a;y++){const m=y*(n+1);for(let p=0;p<n;p++){const E=p+m,M=E,v=E+n+1,H=E+n+2,w=E+1;s.push(M,v,w),s.push(v,H,w)}}this.setIndex(s),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class no extends Lt{constructor(e=1,t=32,n=16,a=0,r=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:r,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const E=[],M=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let H=0;H<=t;H++){const w=H/t;h.x=-e*Math.cos(a+w*r)*Math.sin(o+M*s),h.y=e*Math.cos(o+M*s),h.z=e*Math.sin(a+w*r)*Math.sin(o+M*s),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(w+v,1-M),E.push(c++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const M=u[p][E+1],v=u[p][E],H=u[p+1][E],w=u[p+1][E+1];(p!==0||o>0)&&f.push(M,v,w),(p!==n-1||l<Math.PI)&&f.push(v,H,w)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sp extends tn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new At,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xp extends tn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new At,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class la extends tn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new At,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class er extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class bp extends er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Oa=new Ye,gs=new I,_s=new I;class io{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gs.setFromMatrixPosition(e.matrixWorld),t.position.copy(gs),_s.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_s),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ys=new Ye,hi=new I,ka=new I;class gf extends io{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,a=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hi.setFromMatrixPosition(e.matrixWorld),n.position.copy(hi),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),a.makeTranslation(-hi.x,-hi.y,-hi.z),ys.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ys)}}class Mp extends er{constructor(e,t,n=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=a,this.shadow=new gf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _f extends io{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tp extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new _f}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vs(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vs();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vs(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function tr(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),a=new Set(Object.keys(i[0].morphAttributes)),r={},o={},s=i[0].morphTargetsRelative,l=new Lt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(s!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!a.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Ss(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let y=0;y<o[u].length;++y)f.push(o[u][y][d]);const g=Ss(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Ss(i){let e,t,n,a=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=u.gpuType),a!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),s=new vt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const y=u.getComponent(d,g);s.setComponent(d+h,g,y)}}else o.set(u.array,l);l+=u.count*t}return a!==void 0&&(s.gpuType=a),s}function yf(i,e){var n;const t=[];i.traverse(a=>t.push(a));for(const a of t)a.isMesh&&vf(a);for(const a of t){const r=new Map;for(const o of a.children){const s=o;if(!s.isMesh||s.isInstancedMesh||e.has(s)||s.children.length||!s.visible)continue;const l=s.material;if(Array.isArray(l)||!(l instanceof la)||l.vertexColors)continue;const c=[(n=l.map)==null?void 0:n.uuid,l.transparent,l.opacity,l.side,l.emissive.getHex(),l.alphaTest,l.depthWrite].join("|");let u=r.get(c);u||r.set(c,u=[]),u.push(s)}for(const o of r.values()){if(o.length<2)continue;const s=o.map(h=>{h.updateMatrix();const d=(h.geometry.index?h.geometry.toNonIndexed():h.geometry.clone()).applyMatrix4(h.matrix);for(const m of Object.keys(d.attributes))m!=="position"&&m!=="normal"&&m!=="uv"&&d.deleteAttribute(m);const f=h.material.color,g=d.getAttribute("position").count,y=new Float32Array(g*3);for(let m=0;m<g;m++)y.set([f.r,f.g,f.b],m*3);return d.setAttribute("color",new vt(y,3)),d}),l=tr(s,!1);if(!l)continue;s.forEach(h=>h.dispose());const c=o[0].material.clone();c.color.set(16777215),c.vertexColors=!0;const u=new Tt(l,c);u.castShadow=o[0].castShadow,u.receiveShadow=o[0].receiveShadow;for(const h of o)a.remove(h),h.geometry.dispose();a.add(u)}}}function vf(i){const e=i.material,t=i.geometry;if(!Array.isArray(e)||!t.index||t.groups.length<2)return;const n=[...new Set(e)];if(n.length===t.groups.length)return;const a=t.index.array,r=[],o=[];n.forEach((l,c)=>{const u=r.length;for(const h of t.groups)if(e[h.materialIndex??0]===l)for(let d=h.start;d<h.start+h.count;d++)r.push(a[d]);o.push({start:u,count:r.length-u,materialIndex:c})});const s=t.clone();s.setIndex(r),s.clearGroups();for(const l of o)s.addGroup(l.start,l.count,l.materialIndex);t.dispose(),i.geometry=s,i.material=n.length===1?n[0]:n}const ao=1,xs=new Map;function Sf(i){const e=xs.get(i);if(e)return e;const t=16,n=document.createElement("canvas");n.width=n.height=t;const a=n.getContext("2d");let r=i.length*7919+i.charCodeAt(0)*31;const o=()=>(r=r*16807%2147483647,r/2147483647);for(let l=0;l<t;l++)for(let c=0;c<t;c++){let u=1;const h=o();switch(i){case"plain":u=.95+h*.05;break;case"noise":u=.84+h*.16;break;case"sand":u=h<.12?.82:h>.94?1:.92+h*.05;break;case"stone":{const g=Math.sin(c*.9+Math.sin(l*.7)*2)*Math.cos(l*.8);u=.78+h*.12+g*.08;break}case"scales":u=(c+Math.floor(l/4)%2*2)%4===0||l%4===3?.86:.96+h*.04;break;case"planks":u=l%4===0?.7:.88+h*.1;break;case"leaves":u=h<.25?.62:.85+h*.15;break;case"windows":{const g=l%8,y=c%8;u=g===0?1:g>=3&&g<=5&&y>=1&&y<=5?g===3?.58:.68:.93+h*.03;break}case"carpark":{u=l%8<4||c%8===0?.92+h*.04:.32;break}case"louvres":{const g=l%8,y=c%8;u=g<=1||y===0||y===7?.97+h*.02:g%2?.86:.72;break}case"glass":u=c===0||l===0||c===t-1||l===t-1?.75:c===l||c===l+1?1:.92;break}let d=!1;switch(i){case"mall":{const g=l%8;d=g>=2&&c%4!==0,u=d?g===2?.62:.74+(c%4===1&&g===3?.2:0):g===1?.86:.97+h*.02;break}case"shopfront":{d=l>=3&&c%8!==0&&!(l>=6&&c%8>=3&&c%8<=4),u=l<2?.97:l===2?.8:d?l===3?.55:.68+(c%8===1&&l<9?.18:0):c%8===0?.9:.42;break}case"ribbon":{const g=l%8;d=g>=3&&g<=5&&c%8!==7,u=d?g===3?.6:.72:g===2?.88:.95+h*.03;break}}const f=Math.round(Math.min(1,Math.max(0,u))*255);a.fillStyle=d?`rgb(${Math.round(f*.62)},${Math.round(f*.8)},${f})`:`rgb(${f},${f},${f})`,a.fillRect(c,l,1,1)}const s=new Ks(n);return s.colorSpace=wt,s.magFilter=1003,s.minFilter=1004,s.wrapS=s.wrapT=1e3,s.userData.shared=!0,xs.set(i,s),s}function W(i,e="noise",t={}){return new la({color:i,map:Sf(e),...t})}function nr(i,e,t,n=ao){const a=new En(i,e,t),r=a.getAttribute("uv"),o=[[t,e],[t,e],[i,t],[i,t],[i,e],[i,e]];for(let s=0;s<6;s++){const[l,c]=o[s];for(let u=0;u<4;u++){const h=s*4+u;r.setXY(h,r.getX(h)*l/n,r.getY(h)*c/n)}}return a}const bs=new Ye,xf=new Jn,bf=new At,Mf=new I,Tf=new I(1,1,1);class wp{constructor(e=Math.random,t=.12){this.rng=e,this.shade=t,this.parts=new Map}box(e,t,n,a,r,o,s,l=0,c=0,u=0,h=ao,d){const f=nr(r,o,s,h);bs.compose(Mf.set(t,n,a),xf.setFromEuler(bf.set(c,l,u)),Tf.set(1,1,1)),this.addGeometry(e,f,bs,d)}cube(e,t,n,a,r){this.box(e,t,n,a,r,r,r,0,0,0,Math.max(r,.25))}addGeometry(e,t,n,a){const r=t.index?t.toNonIndexed():t.clone();t.dispose(),r.applyMatrix4(n);const o=r.getAttribute("position").count,s=new Float32Array(o*3),l=1-this.rng()*this.shade;if(a)for(let u=0;u<o;u++)s.set([a.r*l,a.g*l,a.b*l],u*3);else s.fill(l);r.setAttribute("color",new vt(s,3));let c=this.parts.get(e);c||this.parts.set(e,c=[]),c.push(r)}build(){const e=new Map;for(const[t,n]of this.parts){const a=tr(n,!1);n.forEach(r=>r.dispose()),a&&e.set(t,a)}return this.parts.clear(),e}meshes(e){return[...this.build()].map(([t,n])=>{const a=new Tt(n,e(t));return a.name=t,a})}}function Ap(i,e=.25){const t=[],n=new Ee,a=new At,r=new Ye;for(const s of i){const l=nr(s.w,s.h,s.d,e).toNonIndexed();(s.rx||s.ry||s.rz)&&l.applyMatrix4(r.makeRotationFromEuler(a.set(s.rx??0,s.ry??0,s.rz??0))),l.translate(s.x,s.y,s.z),n.set(s.color);const c=l.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([n.r,n.g,n.b],h*3);l.setAttribute("color",new vt(u,3)),t.push(l)}const o=tr(t,!1);return t.forEach(s=>s.dispose()),o}function _t(i,e){const t=i.length,n=i[0].length,a=document.createElement("canvas");a.width=n,a.height=t;const r=a.getContext("2d");i.forEach((s,l)=>{for(let c=0;c<n;c++){const u=e[s[c]];u&&(r.fillStyle=u,r.fillRect(c,l,1,1))}});const o=new Ks(a);return o.colorSpace=wt,o.magFilter=1003,o.minFilter=1003,o.generateMipmaps=!1,o}const Ef=["top","tail","hairStyle","hairColor","accessory","glasses","neck"],ca={daisy:{top:"own",tail:"own",hairStyle:"bun",hairColor:"brown",accessory:"daisy",glasses:"none",neck:"none"},coral:{top:"own",tail:"own",hairStyle:"ponytail",hairColor:"pink",accessory:"star",glasses:"none",neck:"none"},leo:{top:"own",tail:"own",hairStyle:"spiky",hairColor:"black",accessory:"goggles",glasses:"none",neck:"none"}},di=[".....",".....",".....",".....","....."],wf={shell:{top:12166911,accent:16777215,badge:[".PPP.","PWPWP","PWPWP",".PPP.","..P.."],badgePalette:{P:"#ff8ac8",W:"#ffe0f0"}},sailor:{top:16777215,accent:2047887,badge:["..R..",".RRR.","..R..","R.R.R",".RRR."],badgePalette:{R:"#e53030"}},sparkle:{top:9064447,accent:16765501,badge:["..Y..","..Y..","YYWYY","..Y..","..Y.."],badgePalette:{Y:"#ffd23d",W:"#ffffff"}},heart:{top:8118467,accent:16777215,badge:[".R.R.","RRRRR","RRRRR",".RRR.","..R.."],badgePalette:{R:"#ff3b6b"}},kebaya:{top:16775419,accent:16744366,badge:[".P.PY","PYP.Y",".P.G.","G.GPY",".G.P."],badgePalette:{P:"#ff5f9e",Y:"#ffc21a",G:"#3faa6a"}},hanbok:{top:16769899,accent:16777215,badge:["RR.RR","RRRRR","..R..",".R.R.",".R..R"],badgePalette:{R:"#e5304a"},sleeves:["#ffe36b","#e5304a","#ffd23d","#2fae5a","#3f7fff","#ff6fb0","#ffffff","#e5304a"]},saree:{top:14032762,accent:16761370,badge:["GOO..","GOOO.",".GOOO","..GOO","...GO"],badgePalette:{G:"#ffc21a",O:"#ff7a1a"}},ballet:{top:16757713,accent:16777215,badge:["P...P","PP.PP","PPPPP","PP.PP","P...P"],badgePalette:{P:"#ff5f9e"},frill:16769263},stripes:{top:16777215,accent:2047887,badge:di,badgePalette:{N:"#1f3f8f"},pattern:["TTTT","NNNN"]},dots:{top:15020104,accent:16777215,badge:di,badgePalette:{W:"#ffffff"},pattern:["TTTT","TWTT","TTTT","TTTW"]},strawberry:{top:16726863,accent:4172362,badge:di,badgePalette:{Y:"#ffe680"},pattern:["TTTT","TYTT","TTTT","TTTY"]},starry:{top:2042479,accent:16765501,badge:["..YY.",".YY..",".Y...",".YY..","..YY."],badgePalette:{Y:"#ffd23d",S:"#fff3b0"},pattern:["TTTTTT","TSTTTT","TTTTTT","TTTTST","TTTTTT","TTSTTT"]},rainbow:{top:16731998,accent:16777215,badge:di,badgePalette:{R:"#ff4f5e",O:"#ff9a2a",Y:"#ffd23d",G:"#4fd977",B:"#3fa8ff",V:"#9a5fff"},pattern:["R","O","Y","G","B","V"]},princess:{top:9425151,accent:16765501,badge:[".....","..P..",".PWP.","..P..","....."],badgePalette:{P:"#ff5fa8",W:"#ffffff"},puff:!0,frill:16777215},football:{top:15020080,accent:16777215,badge:[".WWW.","WKWKW","WWKWW","WKWKW",".WWW."],badgePalette:{W:"#ffffff",K:"#22222e"},pattern:["TTTTTTW"]},fish:{top:6279400,accent:16777215,badge:[".....","O.OO.","OOOWO","O.OO.","....."],badgePalette:{O:"#ff8a1a",W:"#ffffff"}},turtle:{top:9429152,accent:3116874,badge:["..G..","GDDDG",".DLD.","GDDDG","....."],badgePalette:{G:"#3faa4a",D:"#2f7f3a",L:"#8fd06a"}},hoodie:{top:10924224,accent:8358554,badge:[".....",".P.P.",".PPP.","..P..","....."],badgePalette:{P:"#ff5f9e"},hood:!0},hawaii:{top:4172031,accent:16777215,badge:di,badgePalette:{R:"#ff3b6b",Y:"#ffd23d",G:"#3faa4a"},pattern:["TTTTTT","TRRTTT","TRYRTG","TTRTGG","TTTTTT","GTTTTT"]},tuxedo:{top:2236974,accent:16777215,badge:[".WWW.",".WKW.",".WWW.",".WKW.",".WWW."],badgePalette:{W:"#ffffff",K:"#22222e"},bowTie:15020080},hero:{top:3104728,accent:15020080,badge:["..YY.",".YY..","YYYY.","..YY.",".YY.."],badgePalette:{Y:"#ffd23d"}},stage:{top:1710628,accent:16761370,badge:["..G..",".GGG.","GGGGG",".GGG.","..G.."],badgePalette:{G:"#ffc21a",S:"#d8dee8"},pattern:["TTTTT","TGTTT","TTTST","TTTTT","TSTTG"]},purpleHeart:{top:13215487,accent:8011728,badge:[".P.P.","PPPPP","PPPPP",".PPP.","..P.."],badgePalette:{P:"#7a3fd0"}},idolSuit:{top:16777215,accent:16761370,badge:[".G.G.",".....",".G.G.",".....",".G.G."],badgePalette:{G:"#ffc21a"},bowTie:16761370}},Af={rainbow:{colors:[16731998,16751146,16765501,5233015,4172031,10117119],fin:16777215},galaxy:{colors:[2760559,3811994,5910448,3811994,2760559,6963152],fin:13215487,dots:16777215},batik:{colors:[2047871,9064226,2047871,9064226,2047871,9064226],fin:15913866,dots:16765501},lehenga:{colors:[13111342,14692458,13111342,14692458,13111342,16761370],fin:16765501,dots:16770688},ice:{colors:[10477823,13168895,15268863,13168895,10477823,16777215],fin:15268863,dots:16777215},candy:{colors:[16736168,16777215,16736168,16777215,16736168,16777215],fin:16752589},koi:{colors:[16777215,16738842,16777215,16726810,16777215,16747069],fin:16774120,bigFin:!0},peacock:{colors:[2060223,2072463,3129194,2072463,2060223,3100607],fin:3129194,dots:16765501,bigFin:!0},strawberry:{colors:[15020106,16726874,15020106,16726874,15020106,16726874],fin:4172362,dots:16770688},leopard:{colors:[15249504,15777904,15249504,15777904,15249504,15777904],fin:16773328,dots:5912095},sakura:{colors:[16765414,16770800,16765414,16770800,16765414,16752589],fin:16777215,dots:16736168},aurora:{colors:[3137696,3129544,4165631,8019967,11558911,16740304],fin:13172720,bigFin:!0},stage:{colors:[5910448,1710628,8011728,1710628,10117119,1710628],fin:13215487,dots:15265528},lava:{colors:[3809055,13119514,16738842,13119514,3809055,16753178],fin:16747034,dots:16765501}},Rf={ocean:{tail:2064383,tip:4186320,fin:12121343},purple:{tail:8011775,tip:13215487,fin:15391999},emerald:{tail:2075226,tip:9105576,fin:14221283},sunset:{tail:16738842,tip:16736168,fin:16766648},silver:{tail:10135739,tip:15660026,fin:16777215},gold:{tail:13208074,tip:16770688,fin:16774856},chima:{tail:15020106,tip:16736122,fin:16765501},candyfloss:{tail:16752589,tip:13232383,fin:16777215},ruby:{tail:13111342,tip:16736122,fin:16761035},mint:{tail:4182184,tip:14221288,fin:16777215},shark:{tail:7308185,tip:14213352,fin:7308185}},Cf={brown:{hair:"#5a361f",dark:"#3f2414"},pink:{hair:"#ff4f9e",dark:"#d63384"},blonde:{hair:"#f2c44a",dark:"#c9971f"},black:{hair:"#2a2a33",dark:"#14141a"},blue:{hair:"#3f8fff",dark:"#1f5fd0"},purple:{hair:"#9a5fff",dark:"#6a2fd6"},mint:{hair:"#5fe0b8",dark:"#2fae88"},silver:{hair:"#d8dee8",dark:"#a6b0c0"},red:{hair:"#d8322f",dark:"#a01f1f"},orange:{hair:"#ff8a2a",dark:"#d8661a"},teal:{hair:"#1fb5b0",dark:"#12857f"},lilac:{hair:"#c9a6ff",dark:"#9a7fe0"}},Pf={top:[{id:"own",price:0},{id:"shell",price:20},{id:"sailor",price:20},{id:"heart",price:20},{id:"sparkle",price:30},{id:"kebaya",price:25,ocean:"singapore"},{id:"hanbok",price:25,ocean:"busan"},{id:"saree",price:25,ocean:"andaman"},{id:"ballet",price:30},{id:"stripes",price:20},{id:"dots",price:20},{id:"strawberry",price:25},{id:"starry",price:30},{id:"rainbow",price:35},{id:"princess",price:35},{id:"football",price:25},{id:"fish",price:20},{id:"turtle",price:20},{id:"hoodie",price:25},{id:"hawaii",price:25},{id:"tuxedo",price:30},{id:"hero",price:30},{id:"stage",price:35},{id:"purpleHeart",price:25},{id:"idolSuit",price:35}],tail:[{id:"own",price:0},{id:"ocean",price:25},{id:"emerald",price:25},{id:"purple",price:25},{id:"sunset",price:25},{id:"silver",price:30},{id:"rainbow",price:40},{id:"batik",price:25,ocean:"singapore"},{id:"chima",price:25,ocean:"busan"},{id:"lehenga",price:25,ocean:"andaman"},{id:"candyfloss",price:25},{id:"ruby",price:25},{id:"mint",price:25},{id:"shark",price:30},{id:"candy",price:30},{id:"ice",price:35},{id:"koi",price:35},{id:"strawberry",price:30},{id:"leopard",price:30},{id:"sakura",price:35},{id:"peacock",price:40},{id:"stage",price:35},{id:"gold",price:0,mystery:!0},{id:"galaxy",price:0,mystery:!0},{id:"aurora",price:0,mystery:!0},{id:"lava",price:0,mystery:!0}],hairStyle:[{id:"bun",price:0},{id:"ponytail",price:0},{id:"spiky",price:0},{id:"short",price:0},{id:"twin",price:15},{id:"long",price:15},{id:"braid",price:15},{id:"spaceBuns",price:15},{id:"sidePony",price:15},{id:"bob",price:10},{id:"curly",price:20},{id:"mohawk",price:20}],hairColor:[{id:"brown",price:0},{id:"pink",price:0},{id:"black",price:0},{id:"blonde",price:10},{id:"blue",price:15},{id:"purple",price:15},{id:"red",price:10},{id:"orange",price:10},{id:"teal",price:15},{id:"lilac",price:15},{id:"mint",price:0,mystery:!0},{id:"silver",price:0,mystery:!0}],accessory:[{id:"daisy",price:0},{id:"star",price:0},{id:"goggles",price:0},{id:"none",price:0},{id:"shell",price:15},{id:"bow",price:15},{id:"cap",price:20},{id:"catEars",price:25},{id:"flowers",price:25},{id:"pirate",price:30},{id:"crown",price:30},{id:"tiara",price:35},{id:"orchid",price:20,ocean:"singapore"},{id:"daenggi",price:20,ocean:"busan"},{id:"tikka",price:20,ocean:"andaman"},{id:"butterfly",price:15},{id:"starfish",price:15},{id:"cherry",price:15},{id:"bunnyEars",price:25},{id:"bearEars",price:25},{id:"headphones",price:25},{id:"beret",price:20},{id:"strawHat",price:25},{id:"partyHat",price:20},{id:"chefHat",price:25},{id:"witchHat",price:30},{id:"shellCrown",price:35},{id:"mic",price:25},{id:"halo",price:0,mystery:!0},{id:"unicorn",price:0,mystery:!0},{id:"sharkHat",price:0,mystery:!0},{id:"jellyHat",price:0,mystery:!0},{id:"crabHat",price:0,mystery:!0}],glasses:[{id:"none",price:0},{id:"sunglasses",price:20},{id:"round",price:15},{id:"heart",price:25},{id:"star",price:25},{id:"cat",price:20},{id:"threeD",price:20},{id:"snorkel",price:25}],neck:[{id:"none",price:0},{id:"shells",price:10},{id:"pearls",price:20},{id:"lei",price:20},{id:"locket",price:20},{id:"bowTie",price:15},{id:"bandana",price:15},{id:"scarf",price:20},{id:"medal",price:30},{id:"chain",price:20}]};function ro(i,e){const n={...ca[i]};for(const a of Ef){const r=e==null?void 0:e[a];r!==void 0&&Pf[a].some(o=>o.id===r)&&(n[a]=r)}return n}const Lf=["daisy","coral","leo"],ia="#ffe0c8",Df="#ff9fb2",If="#d2475f",Ff={daisy:{hair:"#5a361f",hairDark:"#3f2414",top:16767053,topAccent:16777215,tail:16761370,tailTip:16771466,fin:16774072,eye:"#4a2a12",shoe:16765501,badge:["..W..",".WYW.","WYYYW",".WYW.","..W.."],badgePalette:{W:"#ffffff",Y:"#ff9f1a"}},coral:{hair:"#ff4f9e",hairDark:"#d63384",top:16747720,topAccent:16769126,tail:16734885,tailTip:16752589,fin:16765414,eye:"#8a1f55",shoe:16732062,badge:["..Y..",".YYY.","YYYYY",".Y.Y.","Y...Y"],badgePalette:{Y:"#ffe066"}},leo:{hair:"#2a2a33",hairDark:"#14141a",top:3121112,topAccent:2047887,tail:2064319,tailTip:6283472,fin:13170431,eye:"#1f3550",shoe:2047887,badge:["...W.","..WW.",".WWW.","WWWW.","NNNNN"],badgePalette:{W:"#ffffff",N:"#1f3f8f"}}};function Ya(i){return i.hairStyle==="short"||i.hairStyle==="spiky"||i.hairStyle==="mohawk"}function Uf(i,e){const t=ro(i,e),n={...Ff[i]},a=Cf[t.hairColor];if(n.hair=a.hair,n.hairDark=a.dark,t.top!=="own"){const s=wf[t.top];n.top=s.top,n.topAccent=s.accent,n.badge=s.badge,n.badgePalette=s.badgePalette,n.sleeves=s.sleeves,n.extras=s}const r=Af[t.tail],o=Rf[t.tail];return r?(n.tailColors=r.colors,n.tail=r.colors[0],n.fin=r.fin,n.tailDots=r.dots,n.bigFin=r.bigFin):o&&(n.tail=o.tail,n.tailTip=o.tip,n.fin=o.fin),n}const so=["HHHHHHHHHHHH","HHDHHHHHHDHH","HHSSHHHHSSHH","HSSSSHHSSSSH","HSSSSSSSSSSH","HSWESSSSWESH","HSEESSSSEESH","HPSSSSSSSSPH","HSSSSMMSSSSH","HSSSSSSSSSSH","HSSSSSSSSSSH","HHSSSSSSSSHH"],oo=["HHHHHHHHHHHH","HHHDHHHHDHHH","HHSHHHHSSHHH","HSSSSSSSSSSH","SSSSSSSSSSSS","SSWESSSSWESS","SSEESSSSEESS","SPSSSSSSSSPS","SSSMSSSSMSSS","SSSSMMMMSSSS","SSSSSSSSSSSS","SSSSSSSSSSSS"];function Rp(i){return Ya(i)?oo:so}function Nf(i){return{H:i.hair,D:i.hairDark,S:ia,E:i.eye,W:"#ffffff",P:Df,M:If}}function Hf(i,e){const t=Nf(i);if(e){const u=["HHHHHHHHHHHH","HHHHHHHDHHHH","HHHHHHHHHHHH","SHHHHHHHHHHH","SSHHHHHHHDHH","SSSSSSHHHHHH","SSSSSPPSHHHH","SSSSSPPSHHHH","SSSSSSSSSHHH","SSSSSSSSSSHH","SSSSSSSSSSSH","SSSSSSSSSSSS"];return{front:_t(oo,t),right:_t(u,t),left:_t(u.map(h=>h.split("").reverse().join("")),t),top:_t(["HHHHHHHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH"],t),back:_t(["HHHHHHHHHHHH","HHHDHHHHHDHH","HHHHHHHHHHHH","HHHHHHDHHHHH","HDHHHHHHHHHH","HHHHHHHHHHHH","SSSSSSSSSSSS","SSSSSSSSSSSS"],t),chin:_t(["SSSS"],t)}}const n=_t(so,t),a=["HHHHHHHHHHHH","HHHHHHHDHHHH","HHHHHHHHHHHH","SHHHHHHHHHHH","SSHHHHHHHHHH","SSSHHHHHHDHH","SSSSHHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHDHHH","SSSSSHHHHHHH"],r=_t(a,t),o=_t(a.map(u=>u.split("").reverse().join("")),t),s=_t(["HHHHHHHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH"],t),l=_t(["HHHHHHHHHHHH","HHHDHHHHHDHH","HHHHHHHHHHHH","HHHHHHDHHHHH","HDHHHHHHHHHH","HHHHHHHHHDHH"],t),c=_t(["SSSS"],t);return{front:n,right:r,left:o,top:s,back:l,chin:c}}function Bf(i){var r;const e="#"+new Ee(i.top).getHexString(),t="#"+new Ee(i.topAccent).getHexString(),n=(r=i.extras)==null?void 0:r.pattern,a=[];for(let o=0;o<9;o++){let s="";for(let l=0;l<9;l++){const c=o-3,u=l-2,h=c>=0&&c<5&&u>=0&&u<5?i.badge[c][u]:".";s+=o===0?"A":h!=="."?h:n?n[o%n.length][l%n[0].length]:"T"}a.push(s)}return _t(a,{T:e,A:t,...i.badgePalette})}function Of(i,e){const t=[];for(let n=0;n<8;n++){let a="";for(let r=0;r<8;r++)a+=e[n%e.length][r%e[0].length];t.push(a)}return _t(t,{T:"#"+new Ee(i.top).getHexString(),...i.badgePalette})}function Ms(i,e=!0){const t=[...i.map((a,r)=>String.fromCharCode(65+r).repeat(4)),...e?["SSSS","SSSS"]:[]],n={S:ia};return i.forEach((a,r)=>n[String.fromCharCode(65+r)]=a),_t(t,n)}const Ts=.5,Es=.2,Ga=new Set(["cap","pirate","sharkHat","jellyHat","witchHat","strawHat","beret","partyHat","chefHat","crabHat"]),zt=i=>new la({map:i});function ws(i,e,t){const n=new rt,a=W(i,"plain");for(const o of[-1,1]){const s=P(.18,.18,.06,a);s.position.set(.12*o,0,0),n.add(s);const l=P(.06,.26,.06,a);l.position.set(.22*o,0,0),n.add(l)}const r=P(.09,.11,.08,W(new Ee(i).multiplyScalar(.75),"plain"));return r.position.z=.01,n.add(r),n.position.set(0,e,t),n}const P=(i,e,t,n)=>new Tt(nr(i,e,t,.5),n),Ji=(i,e,t,n)=>new Tt(new En(i,e,t),n);class Cp{constructor(e,t=ca[e]){this.id=e,this.root=new rt,this.pivot=new rt,this.head=new rt,this.hair=new rt,this.tail=[],this.tailGroup=new rt,this.legs=new rt,this.legPivots=[],this.form="mermaid",this.ponytail=[],this.knees=[],this.feet=[],this.elbows=[],this.airBlend=0,this.wasAir=!1,this.landT=0,this.phase=0,this.pitch=.12,this.spin=0,this.flickT=0,this.bag=new rt,this.bagBits=[],this.bagFill=0,this.bagPop=0;const n=this.style=ro(e,t),a=Uf(e,n);this.root.add(this.pivot),this.buildBody(a),this.buildHead(a),this.buildHair(a,n),this.buildNeck(n),this.buildTail(a),this.buildLegs(a),this.buildBag(),this.setForm("mermaid"),this.root.scale.setScalar(.85)}compact(){return yf(this.root,new Set([this.torso,...this.bagBits,...this.feet])),this}setForm(e){this.form=e,this.tailGroup.visible=e==="mermaid",this.legs.visible=e==="human"}buildBody(e){const t=e.extras,n=t!=null&&t.pattern?zt(Of(e,t.pattern)):W(e.top,"plain"),a=zt(Bf(e)),r=Ji(.95,.9,.55,[n,n,n,n,a,n]);r.position.y=.55,this.pivot.add(r),this.torso=r;const o=W(ia,"plain"),s=P(.4,.12,.35,o);s.position.y=1.03,this.pivot.add(s);const l=e.sleeves?zt(Ms(e.sleeves)):o,c=e.sleeves?zt(Ms(e.sleeves,!1)):o;if(this.armL=this.makeArm(n,l,c,1,!!(t!=null&&t.puff)),this.armR=this.makeArm(n,l,c,-1,!!(t!=null&&t.puff)),(t==null?void 0:t.frill)!==void 0){const u=W(t.frill,"plain"),h=P(1.15,.2,.75,u);h.position.y=.14,this.pivot.add(h);for(let d=0;d<10;d++){const f=d/10*Math.PI*2,g=P(.24,.14,.24,u);g.position.set(Math.sin(f)*.56,.02,Math.cos(f)*.36),this.pivot.add(g)}}if(t!=null&&t.hood){const u=P(.8,.45,.22,n);u.position.set(0,.9,-.36),u.rotation.x=.25,this.pivot.add(u);const h=P(.6,.3,.05,W(e.topAccent,"plain"));h.position.set(0,.95,-.24),h.rotation.x=.25,this.pivot.add(h)}(t==null?void 0:t.bowTie)!==void 0&&this.pivot.add(ws(t.bowTie,.98,.3))}makeArm(e,t,n,a,r=!1){const o=new rt;o.position.set(.63*a,.92,0);const s=r?P(.46,.42,.46,e):P(.32,.36,.34,e);s.position.y=-.12,o.add(s);const l=(d,f)=>d instanceof la&&d.map?Ji(.26,f,.28,Array(6).fill(d)):P(.26,f,.28,d),c=l(n,.22);c.position.y=-.4,o.add(c);const u=new rt;u.position.y=-.5;const h=l(t,.32);return h.position.y=-.14,u.add(h),o.add(u),this.elbows.push(u),this.pivot.add(o),o}buildHead(e){const t=this.head;t.position.y=1.7,this.pivot.add(t);const n=Hf(e,Ya(this.style)),a=Ji(1.2,1.2,1.2,[zt(n.right),zt(n.left),zt(n.top),zt(n.chin),zt(n.front),zt(n.back)]);t.add(a)}braid(e){const t=W(16736168,"plain");let n=this.head;for(let a=0;a<6;a++){const r=new rt;a===0?r.position.set(.5,-.5,.3):r.position.set(0,-.26,.02);const o=.3-a*.02,s=P(o,.24,o,e);if(s.position.x=a%2?.05:-.05,s.rotation.z=a%2?.35:-.35,r.add(s),a===5){r.add(P(o+.08,.08,o+.08,t));for(const l of[-1,1]){const c=P(.16,.14,.08,t);c.position.set(.14*l,0,.12),r.add(c)}}n.add(r),this.ponytail.push(r),n=r}}hairBase(e,t){const n=W(e.hair,"noise"),a=t==="long",r=P(1.32,.2,1.32,n);r.position.set(0,.66,-.02),this.hair.add(r);const o=P(1.32,a?2.2:t==="bob"?.95:1.3,.18,n);o.position.set(0,a?-.5:t==="bob"?.12:-.05,-.66),this.hair.add(o);for(const s of[-1,1]){const l=t==="bob",c=P(.2,l?.85:1.25,l?.9:.7,n);if(c.position.set(.68*s,l?.05:-.15,l?-.2:-.25),this.hair.add(c),l){const h=P(.26,.16,.95,n);h.position.set(.7*s,-.4,-.2),this.hair.add(h)}const u=P(.2,.55,.3,n);u.position.set(.68*s,.3,.42),this.hair.add(u)}return n}shortHair(e){const t=W(e.hair,"noise"),n=P(1.3,.18,1.3,t);n.position.set(0,.68,-.02),this.hair.add(n);const a=P(1.3,.85,.16,t);a.position.set(0,.2,-.66),this.hair.add(a);for(const o of[-1,1]){const s=P(.14,.42,1,t);s.position.set(.66*o,.42,-.12),this.hair.add(s)}const r=P(.7,.18,.16,t);return r.position.set(-.18,.5,.64),this.hair.add(r),t}buildHair(e,t){if(this.head.add(this.hair),Ya(t)){const o=this.shortHair(e);if(t.hairStyle==="spiky"&&!Ga.has(t.accessory))for(const[s,l,c,u]of[[-.4,.3,.34,.3],[0,.35,.42,0],[.4,.3,.34,-.3],[-.3,-.2,.38,.2],[.25,-.25,.4,-.2],[0,-.55,.3,0]]){const h=P(.3,c,.3,o);h.position.set(s,.77+c/2,l),h.rotation.z=u,h.rotation.x=l<0?-.25:.15,this.hair.add(h)}else t.hairStyle==="mohawk"&&!Ga.has(t.accessory)&&[.3,.42,.46,.4,.3].forEach((s,l)=>{const c=P(.26,s,.3,o);c.position.set(0,.77+s/2,.45-l*.27),this.head.add(c)});this.buildAccessory(t),this.buildGlasses(t);return}const n=t.hairStyle,a=Ga.has(t.accessory),r=this.hairBase(e,n==="long"?"long":n==="bob"?"bob":"mid");if(n==="spaceBuns"&&!a){const o=W(16736168,"plain");for(const s of[-1,1]){const l=P(.46,.42,.46,r);l.position.set(.4*s,.92,-.05),this.head.add(l);const c=P(.5,.08,.5,o);c.position.set(.4*s,.74,-.05),this.head.add(c)}}else if(n==="braid")this.braid(r);else if(n==="sidePony"){const o=P(.3,.2,.3,W(16765501,"plain"));o.position.set(.74,.5,-.2),this.head.add(o),this.hairChain(r,new I(.76,.3,-.25),5,.42)}else if(n==="curly")for(let o=0;o<26;o++){const s=o/13*Math.PI*2+o%3*.4,l=o<13?0:1;if(l===0&&a)continue;const c=l===0?.48:.8,u=l===0?.84+o%2*.08:-.2+o%3*.36,h=Math.cos(s)*c;if(l===1&&h>.3)continue;const d=P(.42,.42,.42,r);d.position.set(Math.sin(s)*c,u,h-.05),d.rotation.y=s,this.head.add(d)}else if(n==="bun"&&!a){const o=P(.6,.5,.6,r);o.position.set(0,.95,-.2),this.hair.add(o);const s=W(16765501,"plain");for(const l of[-1,1]){const c=P(.28,.24,.1,s);c.position.set(.3*l,.82,.12),this.hair.add(c)}}else if(t.hairStyle==="ponytail")this.hairChain(r,new I(0,.7,-.6),6,.46);else if(t.hairStyle==="twin")for(const o of[-1,1])this.hairChain(r,new I(.72*o,.45,-.3),4,.36);this.buildAccessory(t),this.buildGlasses(t)}hairChain(e,t,n,a){const r=W(14541804,"plain");let o=this.hair;for(let s=0;s<n;s++){const l=new rt;s===0?l.position.copy(t):l.position.set(0,-.3,-.06);const c=a-s*.04;l.add(P(c,.32,c,e)),s%2===1&&l.add(P(c+.06,.08,c+.06,r)),o.add(l),this.ponytail.push(l),o=l}}buildAccessory(e){const t=e.accessory;if(t==="none")return;const n=new rt;if(t==="daisy"){const a=W(16777215,"plain");for(const[r,o]of[[0,1],[0,-1],[1,0],[-1,0]]){const s=P(.12,.12,.06,a);s.position.set(r*.12,o*.12,0),n.add(s)}n.add(P(.12,.12,.08,W(16757530,"plain"))),n.position.set(.45,.48,.64)}else if(t==="orchid"){const a=W(15043288,"plain"),r=W(10498191,"plain");for(const[l,c,u]of[[0,.15,0],[-.15,.04,.5],[.15,.04,-.5],[-.1,-.13,-.4],[.1,-.13,.4]]){const h=P(.16,.16,.06,a);h.position.set(l,c,0),h.rotation.z=u,n.add(h)}const o=P(.1,.12,.09,r);o.position.y=-.02,n.add(o);const s=P(.04,.04,.1,W(16765501,"plain"));s.position.y=.03,n.add(s),n.position.set(.45,.46,.64)}else if(t==="daenggi"){const a=W(14032703,"plain"),r=W(16765501,"plain");n.add(P(.26,.24,.26,a));for(const o of[-1,1]){const s=P(.3,.26,.16,a);s.position.set(0,.02,.24*o),s.rotation.x=.4*o,n.add(s);const l=P(.2,.9,.07,a);l.position.set(0,-.52,.09*o),l.rotation.x=.1*o,n.add(l);const c=P(.1,.1,.1,r);c.position.set(.02,-.7,.09*o),n.add(c)}n.position.set(.7,-.3,-.3)}else if(t==="tikka"){const a=W(16761370,"plain"),r=P(.06,.04,.7,a);r.position.set(0,.62,.3),n.add(r);const o=P(.06,.2,.04,a);o.position.set(0,.52,.64),n.add(o),n.add(P(.22,.22,.05,a));const s=P(.13,.13,.06,W(14032703,"plain"));s.position.z=.02,n.add(s);const l=P(.08,.08,.06,W(16774888,"plain"));l.position.set(0,-.15,.01),n.add(l),n.children.slice(2).forEach(c=>c.position.add(new I(0,.34,.64)))}else if(t==="star"){const a=W(16765501,"plain");n.add(P(.3,.1,.06,a),P(.1,.3,.06,a)),n.rotation.z=.3,n.position.set(.45,.48,.64)}else if(t==="bow"){const a=W(16726891,"plain");for(const r of[-1,1]){const o=P(.34,.3,.14,a);o.position.set(.22*r,0,0),o.rotation.z=.25*r,n.add(o)}n.add(P(.14,.16,.18,W(14032719,"plain"))),n.position.set(0,.86,.25)}else if(t==="shell"){const a=W(16747208,"plain"),r=W(16765414,"plain");for(let s=-2;s<=2;s++){const l=P(.08,.3-Math.abs(s)*.05,.06,s%2?r:a);l.position.set(s*.075,.04-Math.abs(s)*.02,0),l.rotation.z=-s*.25,n.add(l)}const o=P(.14,.08,.07,a);o.position.y=-.14,n.add(o),n.position.set(.42,.45,.64)}else if(t==="cap"){const a=W(15020080,"plain"),r=P(1.36,.3,1.36,a);n.add(r);const o=P(1,.08,.5,a);o.position.set(0,-.12,.88),n.add(o);const s=P(.16,.08,.16,W(16777215,"plain"));s.position.y=.19,n.add(s),n.position.set(0,.72,0)}else if(t==="catEars"){const a=W(16777215,"plain"),r=W(16752589,"plain");n.add(P(1.34,.1,.16,W(16736168,"plain")));for(const o of[-1,1]){const s=P(.34,.28,.14,a);s.position.set(.4*o,.16,0),n.add(s);const l=P(.18,.16,.14,a);l.position.set(.4*o,.36,0),n.add(l);const c=P(.16,.16,.04,r);c.position.set(.4*o,.18,.08),n.add(c)}n.position.set(0,.8,.1)}else if(t==="flowers"){const a=[16736168,16765501,16777215,10117119,16747069,6279423],r=W(4172362,"plain");for(let o=0;o<12;o++){const s=o/12*Math.PI*2,l=o%2===0,c=P(l?.2:.14,l?.2:.1,l?.2:.14,l?W(a[o/2%a.length],"plain"):r);if(c.position.set(Math.sin(s)*.62,0,Math.cos(s)*.62),n.add(c),l){const u=P(.08,.08,.08,W(16757530,"plain"));u.position.set(Math.sin(s)*.72,.02,Math.cos(s)*.72),n.add(u)}}n.position.set(0,.8,0)}else if(t==="pirate"){const a=W(2236974,"plain"),r=W(16777215,"plain"),o=P(1.7,.12,1.2,a);n.add(o);const s=P(1.1,.42,.9,a);s.position.y=.26,n.add(s);for(const c of[-1,1]){const u=P(.3,.3,1.1,a);u.position.set(.78*c,.12,0),n.add(u)}const l=P(.22,.2,.04,r);l.position.set(0,.28,.47),n.add(l);for(const c of[-1,1]){const u=P(.36,.05,.03,r);u.position.set(0,.14,.47),u.rotation.z=.5*c,n.add(u)}n.position.set(0,.82,0)}else if(t==="tiara"){const a=W(16315135,"plain"),r=W(14212840,"plain");n.add(P(1.2,.08,.1,r));for(let s=-3;s<=3;s++){const l=P(.12,.12,.12,a);l.position.set(s*.16,.1+(3-Math.abs(s))*.05,0),n.add(l)}const o=P(.2,.24,.1,W(16726927,"plain"));o.position.set(0,.36,.02),n.add(o),n.position.set(0,.76,.45)}else if(t==="halo"){const a=new ta({color:16773274});for(const[r,o,s,l]of[[0,.42,.96,.12],[0,-.42,.96,.12],[.42,0,.12,.72],[-.42,0,.12,.72]]){const c=P(s,.1,l,a);c.position.set(r,0,o),n.add(c)}n.position.set(0,1.2,0)}else if(t==="unicorn"){const a=W(16765501,"plain"),r=W(16777215,"plain");[.26,.21,.16,.11,.07].forEach((o,s)=>{const l=P(o,.16,o,s%2?r:a);l.position.y=s*.15,l.rotation.y=s*.4,n.add(l)}),n.rotation.x=.35,n.position.set(0,.86,.32)}else if(t==="sharkHat"){const a=W(8360872,"plain"),r=W(16777215,"plain"),o=P(1.42,.42,1.42,a);n.add(o),[.4,.3,.2].forEach((s,l)=>{const c=P(.14,s,.42-l*.12,a);c.position.set(0,.3+l*.12,-.1-l*.08),n.add(c)});for(let s=-3;s<=3;s++){const l=P(.12,.12,.04,r);l.position.set(s*.18,-.24,.72),l.rotation.z=Math.PI/4,n.add(l)}for(const s of[-1,1]){const l=P(.04,.12,.12,W(1315866,"plain"));l.position.set(.72*s,.04,.4),n.add(l)}n.position.set(0,.78,0)}else if(t==="jellyHat"){const a=W(16747216,"plain",{transparent:!0,opacity:.8}),r=W(16765422,"plain",{transparent:!0,opacity:.85});n.add(P(1.46,.36,1.46,a));const o=P(1.1,.26,1.1,a);o.position.y=.3,n.add(o);for(let s=0;s<8;s++){const l=s/8*Math.PI*2+.4;if(Math.cos(l)>.6)continue;const c=P(.08,.5+s%3*.15,.08,r);c.position.set(Math.sin(l)*.68,-.4-s%3*.07,Math.cos(l)*.68),n.add(c)}n.position.set(0,.74,0)}else if(t==="goggles"){const a=W(2047887,"plain"),r=W(16765501,"plain"),o=W(9431295,"glass",{transparent:!0,opacity:.85}),s=P(1.34,.14,1.34,a);n.add(s);for(const l of[-1,1]){const c=P(.42,.32,.1,r);c.position.set(.25*l,0,.68),n.add(c);const u=P(.3,.2,.06,o);u.position.set(.25*l,0,.74),n.add(u)}n.position.set(0,.4,0)}else if(t==="crown"){const a=W(16761370,"plain"),r=W(16736168,"plain");n.add(P(.8,.14,.8,a));for(const[s,l]of[[-.33,.33],[.33,.33],[-.33,-.33],[.33,-.33],[0,.33]]){const c=P(.14,.2,.14,a);c.position.set(s,.17,l),n.add(c)}const o=P(.12,.12,.06,r);o.position.set(0,.02,.42),n.add(o),n.position.set(0,.84,0)}else if(t==="butterfly"){const a=W(4172031,"plain"),r=W(10117119,"plain");for(const o of[-1,1]){const s=P(.2,.2,.05,a);s.position.set(.13*o,.07,0),s.rotation.z=.3*o;const l=P(.14,.14,.05,r);l.position.set(.1*o,-.1,0),n.add(s,l)}n.add(P(.06,.3,.08,W(2760511,"plain"))),n.position.set(.45,.48,.64)}else if(t==="starfish"){const a=W(16747069,"plain");for(let r=0;r<5;r++){const o=P(.08,.18,.06,a),s=r/5*Math.PI*2;o.position.set(Math.sin(s)*.1,Math.cos(s)*.1,0),o.rotation.z=-s,n.add(o)}n.add(P(.12,.12,.08,W(16757610,"plain"))),n.position.set(.45,.48,.64)}else if(t==="cherry"){const a=W(15015994,"plain"),r=W(4172362,"plain");for(const s of[-1,1]){const l=P(.15,.15,.12,a);l.position.set(.1*s,-.08,0),n.add(l);const c=P(.04,.2,.04,r);c.position.set(.05*s,.08,0),c.rotation.z=-.4*s,n.add(c)}const o=P(.12,.06,.04,r);o.position.set(.06,.2,0),n.add(o),n.position.set(.45,.48,.64)}else if(t==="bunnyEars"||t==="bearEars"){const a=t==="bunnyEars",r=W(a?16777215:9067058,"plain"),o=W(a?16752589:14198904,"plain");n.add(P(1.34,.1,.16,W(a?16752589:9067058,"plain")));for(const s of[-1,1]){const l=a?P(.24,.72,.12,r):P(.36,.34,.14,r);l.position.set((a?.26:.46)*s,a?.4:.18,0),l.rotation.z=(a?-.12:0)*s,n.add(l);const c=a?P(.12,.5,.04,o):P(.18,.16,.04,o);c.position.set((a?.26:.46)*s,a?.38:.16,.07),c.rotation.z=l.rotation.z,n.add(c)}n.position.set(0,.8,.1)}else if(t==="headphones"){const a=W(16740272,"plain"),r=W(16777215,"plain"),o=P(1.42,.12,.2,a);o.position.y=.76,n.add(o);for(const s of[-1,1]){const l=P(.1,.5,.16,a);l.position.set(.72*s,.5,0),n.add(l);const c=P(.22,.5,.5,a);c.position.set(.72*s,.05,0),n.add(c);const u=P(.06,.36,.36,r);u.position.set(.85*s,.05,0),n.add(u)}}else if(t==="beret"){const a=W(14165562,"plain");n.add(P(1.4,.22,1.4,a));const r=P(1.1,.14,1.1,a);r.position.y=.16,n.add(r);const o=P(.08,.14,.08,a);o.position.y=.28,n.add(o),n.rotation.z=-.15,n.position.set(.08,.8,-.04)}else if(t==="strawHat"){const a=W(15255664,"noise");n.add(P(2.1,.08,2.1,a));const r=P(1.34,.42,1.34,a);r.position.y=.24,n.add(r);const o=P(1.38,.12,1.38,W(15020106,"plain"));o.position.y=.1,n.add(o),n.position.set(0,.74,0)}else if(t==="partyHat"){const a=[4172031,16765501,16736168,5233015];[.7,.54,.38,.24].forEach((o,s)=>{const l=P(o,.2,o,W(a[s],"plain"));l.position.y=s*.19,n.add(l)});const r=P(.18,.18,.18,W(16777215,"plain"));r.position.y=.82,n.add(r),n.rotation.z=.12,n.position.set(.1,.86,0)}else if(t==="chefHat"){const a=W(16777215,"noise");n.add(P(1.36,.32,1.36,a));const r=P(1.56,.62,1.56,a);r.position.y=.46,n.add(r);const o=P(1.2,.16,1.2,a);o.position.y=.84,n.add(o),n.position.set(0,.8,0)}else if(t==="witchHat"){const a=W(5910432,"plain");n.add(P(1.95,.08,1.95,a)),[1.2,.9,.62,.36,.2].forEach((s,l)=>{const c=P(s,.28,s,a);c.position.set(0,.16+l*.26,-l*l*.03),n.add(c)});const r=P(1.24,.12,1.24,W(16747069,"plain"));r.position.y=.1,n.add(r);const o=P(.24,.2,.06,W(16765501,"plain"));o.position.set(0,.1,.62),n.add(o),n.position.set(0,.74,0)}else if(t==="shellCrown"){const a=W(16761370,"plain"),r=W(16747208,"plain"),o=W(16765414,"plain"),s=W(16315135,"plain");n.add(P(1.36,.1,1.36,a));for(let l=0;l<8;l++){const c=l/8*Math.PI*2,u=new rt,h=l===0;for(let f=-1;f<=1;f++){const g=P(.1,(h?.38:.26)-Math.abs(f)*.08,.05,f?o:r);g.position.set(f*.09,(h?.19:.13)-Math.abs(f)*.04,0),g.rotation.z=-f*.3,u.add(g)}u.position.set(Math.sin(c)*.68,.05,Math.cos(c)*.68),u.rotation.y=c,n.add(u);const d=P(.1,.1,.1,s);d.position.set(Math.sin(c+.39)*.7,.04,Math.cos(c+.39)*.7),n.add(d)}n.position.set(0,.78,0)}else if(t==="crabHat"){const a=W(15024170,"plain"),r=W(11545114,"plain");n.add(P(1.3,.4,1.1,a));const o=P(1,.16,.8,r);o.position.y=.26,n.add(o);for(const s of[-1,1]){const l=P(.08,.2,.08,a);l.position.set(.22*s,.36,.45),n.add(l);const c=P(.14,.14,.14,W(1315866,"plain"));c.position.set(.22*s,.5,.45),n.add(c);const u=P(.16,.4,.16,a);u.position.set(.72*s,.3,.2),u.rotation.z=-.5*s,n.add(u);const h=P(.3,.26,.2,a);h.position.set(.86*s,.58,.22),n.add(h);const d=P(.08,.16,.18,r);d.position.set(.86*s,.74,.22),n.add(d);for(let f=0;f<3;f++){const g=P(.1,.32,.1,a);g.position.set(.68*s,-.24,-.3+f*.24),g.rotation.z=.3*s,n.add(g)}}n.position.set(0,.8,-.05)}if(t==="mic"){const a=W(10117119,"plain"),r=P(1.42,.08,.12,a);r.position.set(0,.8,0),n.add(r);for(const c of[-1,1]){const u=P(.08,.7,.12,a);u.position.set(.81*c,.45,0),n.add(u)}const o=P(.12,.3,.3,a);o.position.set(.84,.05,0),n.add(o);const s=P(.07,.07,.7,W(14212840,"plain"));s.position.set(.72,-.2,.32),s.rotation.y=.35,n.add(s);const l=P(.16,.14,.14,W(2236974,"plain"));l.position.set(.36,-.28,.66),n.add(l)}this.head.add(n)}buildNeck(e){const t=e.neck??"none";if(t==="none")return;const n=new rt,a=(r,o,s,l)=>{for(let c=0;c<r;c++){const u=c/(r-1)*2-1,h=P(s,s,s,l(c));h.position.set(u*.34,1-o*(1-u*u),.3),n.add(h)}for(const[c,u]of[[-.3,.05],[.3,.05],[-.22,-.2],[.22,-.2],[0,-.24]]){const h=P(s,s,s,l(0));h.position.set(c,1,u),n.add(h)}};if(t==="pearls"){const r=W(16315135,"plain");a(9,.2,.09,()=>r)}else if(t==="shells"){const r=W(6965802,"plain");a(9,.16,.05,()=>r),[16747208,16777215,16757610].forEach((o,s)=>{const l=P(.14,.12,.06,W(o,"plain"));l.position.set((s-1)*.16,.84-(s===1?.03:0),.32),l.rotation.z=(s-1)*.3,n.add(l)})}else if(t==="lei"){const r=[16736168,16765501,16777215,16747069,10117119];a(13,.32,.15,o=>W(r[o%r.length],"plain"))}else if(t==="locket"){const r=W(16761370,"plain");a(11,.25,.04,()=>r);const o=W(16726891,"plain");for(const[s,l]of[[-.05,.05],[.05,.05],[0,0],[0,-.05]]){const c=P(s===0?.14:.08,.08,.05,o);c.position.set(s,.7+l,.32),n.add(c)}}else if(t==="medal"){for(const s of[-1,1]){const l=P(.12,.4,.04,W(s<0?15020106:4157439,"plain"));l.position.set(.1*s,.82,.3),l.rotation.z=.35*s,n.add(l)}const r=P(.26,.26,.06,W(16761370,"plain"));r.position.set(0,.56,.31),n.add(r);const o=P(.1,.1,.04,W(16774064,"plain"));o.position.set(0,.56,.35),o.rotation.z=Math.PI/4,n.add(o)}else if(t==="chain"){const r=W(15265528,"plain");a(13,.24,.06,()=>r);const o=P(.14,.14,.05,W(16765501,"plain"));o.position.set(0,.74,.32),o.rotation.z=Math.PI/4,n.add(o)}else if(t==="bowTie")n.add(ws(16726891,.97,.31));else if(t==="bandana"){const r=W(14165562,"plain"),o=P(.62,.12,.58,r);o.position.y=1.02,n.add(o),[.62,.46,.3,.14].forEach((l,c)=>{const u=P(l,.1,.05,r);u.position.set(0,.93-c*.09,.3),n.add(u)});const s=W(16777215,"plain");for(const[l,c]of[[-.18,.93],[.14,.92],[-.02,.84],[.04,.75]]){const u=P(.04,.04,.02,s);u.position.set(l,c,.33),n.add(u)}}else if(t==="scarf"){const r=W(15020106,"noise"),o=W(16777215,"noise"),s=P(1,.22,.68,r);s.position.y=1.04,n.add(s);for(let c=0;c<4;c++){const u=P(.24,.16,.1,c%2?o:r);u.position.set(.24,.9-c*.16,.32),n.add(u)}const l=P(.24,.08,.08,o);l.position.set(.24,.3,.32),n.add(l)}this.pivot.add(n)}buildGlasses(e){const t=e.glasses??"none";if(t==="none")return;const n=new rt;if(t==="snorkel"){const s=W(3129304,"plain");for(const[y,m,p,E]of[[0,.2,1,.08],[0,-.2,1,.08],[.48,0,.08,.44],[-.48,0,.08,.44],[0,-.14,.18,.12]]){const M=P(p,E,.1,s);M.position.set(y,m,0),n.add(M)}const l=P(.9,.34,.03,W(13628671,"glass",{transparent:!0,opacity:.35}));n.add(l);const c=P(.12,.06,.02,W(16777215,"plain"));c.position.set(-.3,.1,.03),n.add(c);const u=W(2047887,"plain");for(const y of[-1,1]){const m=P(.06,.12,1.2,u);m.position.set(.64*y,.02,-.6),n.add(m)}const h=W(16765501,"plain"),d=P(.12,1.2,.12,h);d.position.set(.72,.2,-.2),n.add(d);const f=P(.12,.12,.2,W(16736058,"plain"));f.position.set(.72,.84,-.16),n.add(f);const g=P(.3,.1,.1,h);g.position.set(.58,-.42,-.1),n.add(g),n.position.set(0,0,.64),this.head.add(n);return}const a=(s,l,c,u)=>{const h=W(s,"plain");for(const[d,f]of l){const g=P(c,c,.06,h);g.position.set(.27*u+d*c,f*c,0),n.add(g)}};let r=W(1710634,"plain");const o=W(16777215,"plain");for(const s of[-1,1]){if(t==="sunglasses"){const c=P(.42,.26,.06,r);c.position.set(.27*s,0,0),n.add(c)}else if(t==="heart")r=W(16732058,"plain"),a(16732058,[[-1,1],[1,1],[-1.5,.3],[-.5,.3],[.5,.3],[1.5,.3],[-1,-.4],[0,-.4],[1,-.4],[0,-1.1]],.12,s),a(16752589,[[-.5,.3],[0,-.4]],.12,s);else if(t==="cat"){r=W(10108880,"plain");const c=P(.4,.22,.06,r);c.position.set(.27*s,0,0),n.add(c);const u=P(.28,.12,.03,W(3811930,"plain"));u.position.set(.27*s,-.01,.03),n.add(u);const h=P(.14,.1,.06,r);h.position.set(.27*s+.22*s,.12,0),h.rotation.z=.5*s,n.add(h)}else if(t==="threeD"){r=W(16777215,"plain");const c=P(.42,.26,.05,r);c.position.set(.27*s,0,0),n.add(c);const u=P(.32,.18,.03,W(s>0?16726863:4172031,"glass",{transparent:!0,opacity:.85}));u.position.set(.27*s,0,.03),n.add(u)}else if(t==="star")r=W(16761370,"plain"),a(16761370,[[0,1.2],[-1.2,.3],[0,.3],[1.2,.3],[-.6,-.5],[.6,-.5],[0,-.2]],.13,s);else{r=W(9064226,"plain");for(const[u,h,d,f]of[[0,.15,.36,.06],[0,-.15,.36,.06],[.18,0,.06,.3],[-.18,0,.06,.3]]){const g=P(d,f,.06,r);g.position.set(.27*s+u,h,0),n.add(g)}const c=P(.3,.24,.02,W(13628671,"glass",{transparent:!0,opacity:.35}));c.position.set(.27*s,0,0),n.add(c)}if(t!=="round"){const c=P(.08,.06,.02,o);c.position.set(.27*s-.1,.06,.04),n.add(c)}const l=P(.06,.06,.6,r);l.position.set(.62*s,.04,-.3),n.add(l)}n.add(P(.14,.06,.06,r)),n.position.set(0,0,.64),this.head.add(n)}buildTail(e){const t=new Ee(e.tail),n=new Ee(e.tailTip),a=P(1,.16,.62,W(e.topAccent,"plain"));a.position.y=.08,this.pivot.add(this.tailGroup),this.tailGroup.add(a);let r=this.tailGroup;const o=6;for(let l=0;l<o;l++){const c=new rt;c.position.y=l===0?.02:-.36;const u=.9-l*.11,h=.55-l*.05,d=e.tailColors?new Ee(e.tailColors[l%e.tailColors.length]):t.clone().lerp(n,l/(o-1)),f=W(d,"scales"),g=P(u,.38,h,f);if(g.position.y=-.18,c.add(g),e.tailDots!==void 0){const y=new ta({color:e.tailDots});for(const[m,p,E]of[[l*37%7/7-.4,-.1,1],[l*53%5/5-.3,-.26,-1],[l*29%6/6-.15,-.28,1],[l*41%7/7-.45,-.08,-1]]){const M=P(.07,.07,.02,y);M.position.set(m*u,p,(h/2+.01)*E),c.add(M)}}r.add(c),this.tail.push(c),r=c}const s=W(e.fin,"noise",{transparent:!0,opacity:.92});for(const l of[-1,1]){const c=P(.62,.26,.1,s);c.position.set(.3*l,-.48,0),c.rotation.z=-.55*l,r.add(c);const u=P(.3,.2,.1,s);if(u.position.set(.58*l,-.7,0),u.rotation.z=-.9*l,r.add(u),e.bigFin){const h=P(.34,.5,.06,s);h.position.set(.72*l,-1,0),h.rotation.z=-.5*l,r.add(h);const d=P(.22,.3,.06,s);d.position.set(.86*l,-1.32,0),d.rotation.z=-.3*l,r.add(d)}}if(e.bigFin){const l=P(.24,.5,.06,s);l.position.set(0,-.72,0),r.add(l)}}buildLegs(e){this.pivot.add(this.legs);const t=P(.95,.32,.56,W(e.tail,"plain"));t.position.y=-.02,this.legs.add(t);const n=W(ia,"plain"),a=W(e.shoe,"plain");for(const r of[-1,1]){const o=new rt;o.position.set(.22*r,-.15,0);const s=P(.36,.42,.38,n);s.position.y=-.23,o.add(s);const l=new rt;l.position.y=-.44;const c=P(.36,.42,.38,n);c.position.y=-.19,l.add(c);const u=P(.4,.22,.5,a);u.position.set(0,-.49,.05),l.add(u),o.add(l),this.knees.push(l),this.feet.push(u),this.legs.add(o),this.legPivots.push(o)}}celebrate(){this.spin=1.4}legBits(){return{waist:this.legs,hips:this.legPivots,knees:this.knees}}part(e){return e==="head"?this.head:e==="tail"?this.tailGroup:this.torso}flick(){this.flickT=Ts}setBag(e){if(this.bag.visible=e!==null,e===null)return;e>this.bagFill&&(this.bagPop=.3),this.bagFill=e;const t=Math.ceil(e*this.bagBits.length);this.bagBits.forEach((n,a)=>n.visible=a<t)}buildBag(){const e=zt(_t(["NBBBNBBB","BNBNBNBN","BBNBBBNB","BNBNBNBN","NBBBNBBB","BNBNBNBN","BBNBBBNB","BNBNBNBN"],{N:"#1f5fd0",B:"#5fb8ff"})),t=Ji(.72,.72,.42,[e,e,e,e,e,e]);this.bag.add(t);const n=P(.5,.1,.3,W(2056144,"plain"));n.position.y=.4,this.bag.add(n),[7328767,15020080,16777215,3123818,16765501].forEach((o,s)=>{const l=P(.16,.2+s%2*.08,.16,W(o,"plain"));l.position.set(-.24+s*.12,.42+s%2*.04,s%2?-.06:.06),l.rotation.z=(s-2)*.18,l.visible=!1,this.bag.add(l),this.bagBits.push(l)});const r=W(2056144,"plain");for(const o of[-1,1]){const s=P(.12,.1,.6,r);s.position.set(.28*o,.38,.5),this.bag.add(s)}this.bag.position.set(0,.6,-.5),this.bag.visible=!1,this.pivot.add(this.bag)}tuckHair(e){this.hair.visible=!e}otherHand(){return this.elbows[0]}holdInRightHand(e){e.position.set(0,-.32,.12),this.elbows[1].add(e)}walk(e,t,n=0,a=0){this.head.rotation.y=0,this.legPivots.forEach(G=>G.rotation.z=0);const r=n>.02||a>0;this.wasAir&&!r&&(this.landT=Es),this.wasAir=r,this.landT=Math.max(0,this.landT-e),this.airBlend+=((r?1:0)-this.airBlend)*Math.min(1,e*14);const o=Math.min(1,t),s=Math.min(1,Math.max(0,(t-1)/.3)),l=t>.05;r||(this.phase+=e*(l?7+o*3+s*5:1.6));const c=Math.sin(this.phase),u=Math.cos(this.phase),h=o*.55+s*.4,d=o*.45+s*1.05,f=[-c*h,c*h],g=[Math.max(0,u)*d+s*.15,Math.max(0,-u)*d+s*.15],y=o*.6+s*.55,m=[-c*y,c*y],p=-(o*.25+s*1.15),E=o*.05+s*.2,M=l?Math.abs(u)*.07*o*(1-s)+Math.abs(c)*.16*s:Math.sin(this.phase*.8)*.015,v=Math.min(1,Math.max(0,a/6)),H=[-.9*v-.35*(1-v),.35*v-.15*(1-v)],w=[1.5*v+.5*(1-v),.5*v+.35*(1-v)],R=-2.5*v-.4*(1-v),U=.3*v+1.1*(1-v),b=this.airBlend,x=(G,K)=>G+(K-G)*b,A=this.landT>0?Math.sin(this.landT/Es*Math.PI):0;this.legPivots.forEach((G,K)=>G.rotation.x=x(f[K],H[K])-A*.5),this.knees.forEach((G,K)=>G.rotation.x=x(g[K],w[K])+A*.9),this.armL.rotation.set(x(m[0],R),0,x(.12,U)),this.armR.rotation.set(x(m[1]-.15,R),0,-x(.12,U)),this.elbows.forEach(G=>G.rotation.x=x(p,-.3)-A*.4),this.pitch=0,this.pivot.rotation.x=x(E,.08)+A*.25,this.head.rotation.x=-this.pivot.rotation.x*.6,this.pivot.position.y=(1-b)*M-A*.14;const z=r&&a<0?Math.min(1,-a/8):0;this.ponytail.forEach((G,K)=>G.rotation.x=o*.2+s*.25+z*.5+Math.sin(this.phase-K*.6)*.1*o),this.bagPop=Math.max(0,this.bagPop-e);const B=.7+this.bagFill*.5+Math.sin(this.bagPop/.3*Math.PI)*.15;this.bag.scale.set(B,B,B),this.bag.position.z=-.28-.21*B,this.spin>0?(this.spin=Math.max(0,this.spin-e),this.pivot.rotation.y=(1-this.spin/1.4)*Math.PI*4):this.pivot.rotation.y=c*.08*(o+s)*(1-b)}ride(e,t,n){const a=Math.min(1,n);this.airBlend=0,this.wasAir=!1,this.landT=0,this.phase+=e*(t==="bike"?3+a*9:t==="drive"?2:t==="paddle"?1.5+a*3.5:2.5+a*4.5);const r=Math.sin(this.phase),[o,s]=this.legPivots,[l,c]=this.knees;this.head.rotation.y=0,this.legPivots.forEach(f=>f.rotation.z=0);let u=.08,h=0;if(t==="kick"){const f=a>.1?Math.max(0,r)*a:0;o.rotation.x=.15+f*.75+(a>.1?.15:0),l.rotation.x=.25+f*.45,s.rotation.x=-.05,c.rotation.x=.15+f*.3,this.armL.rotation.set(-.85,0,-.06),this.armR.rotation.set(-.85,0,.06),this.elbows.forEach(g=>g.rotation.x=-.45),u=.1+f*.12,h=-f*.08}else if(t==="board"){this.pivot.rotation.y=-1.25,this.head.rotation.y=1.05,o.rotation.set(-.2,0,-.32),s.rotation.set(-.2,0,.32),this.knees.forEach(g=>g.rotation.x=.45);const f=Math.sin(this.phase*.8)*(.15+a*.15);this.armL.rotation.set(-.2,0,1+f),this.armR.rotation.set(-.2,0,-1+f),this.elbows.forEach(g=>g.rotation.x=-.25),u=.15,h=-.12+Math.sin(this.phase*1.6)*.02}else if(t==="bike")this.legPivots.forEach((f,g)=>{const y=this.phase+g*Math.PI;f.rotation.x=-1.2+Math.sin(y)*.32,this.knees[g].rotation.x=1.25+Math.cos(y)*.38}),this.armL.rotation.set(-1.05,0,-.05),this.armR.rotation.set(-1.05,0,.05),this.elbows.forEach(f=>f.rotation.x=-.35),u=.3+a*.08,h=-.05;else if(t==="paddle"){this.legPivots.forEach(g=>g.rotation.x=-1.45),this.knees.forEach(g=>g.rotation.x=.1);const f=r*(.2+a*.25);this.armL.rotation.set(-1-f,0,-.1),this.armR.rotation.set(-1+f,0,.1),this.elbows.forEach(g=>g.rotation.x=-.5),this.pivot.rotation.y=f*.6,u=.12,h=-.78}else t==="sit"?(this.legPivots.forEach((f,g)=>{f.rotation.x=-1.5,this.knees[g].rotation.x=1.45+Math.sin(this.phase*.8+g*Math.PI)*.12}),this.armL.rotation.set(-1.15,0,-.08),this.armR.rotation.set(-1.15,0,.08),this.elbows.forEach(f=>f.rotation.x=-.25),u=.04,h=0):(this.legPivots.forEach(f=>f.rotation.x=0),this.knees.forEach(f=>f.rotation.x=.1),this.armL.rotation.set(-.95,0,-.1),this.armR.rotation.set(-.95,0,.1),this.elbows.forEach(f=>f.rotation.x=-.6),u=.05,h=Math.sin(this.phase*3)*.015*a);t!=="board"&&t!=="paddle"&&(this.pivot.rotation.y=0),this.pitch=0,this.pivot.rotation.x=u,this.head.rotation.x=-u*.6,this.pivot.position.y=h,this.ponytail.forEach((f,g)=>f.rotation.x=.25+a*.4+Math.sin(this.phase*2-g*.6)*.06),this.bagPop=Math.max(0,this.bagPop-e);const d=.7+this.bagFill*.5;this.bag.scale.set(d,d,d),this.bag.position.z=-.28-.21*d}update(e,t){const n=this.flickT>0?Math.sin(this.flickT/Ts*Math.PI):0;this.flickT=Math.max(0,this.flickT-e),this.phase+=e*(2.2+t*7+n*14);const a=.12+t*1.2;this.pitch+=(a-this.pitch)*(1-Math.exp(-e*4)),this.pivot.rotation.x=this.pitch,this.head.rotation.x=-this.pitch*.55;const r=.1+t*.22+n*.35;this.tail.forEach((c,u)=>{c.rotation.x=Math.sin(this.phase-u*.75)*r*(.5+u*.22)});const o=.5-t*.4,s=Math.sin(this.phase*.5)*.18*(1-t);this.armL.rotation.z=o+s,this.armR.rotation.z=-o-s,this.armL.rotation.x=this.armR.rotation.x=-t*.4,this.legPivots.forEach((c,u)=>{c.rotation.x=Math.sin(this.phase*1.3+u*Math.PI)*(.15+t*.35+n*.4)}),this.bagPop=Math.max(0,this.bagPop-e);const l=.7+this.bagFill*.5+Math.sin(this.bagPop/.3*Math.PI)*.15;if(this.bag.scale.set(l,l,l),this.bag.position.z=-.28-.21*l,this.ponytail.forEach((c,u)=>{c.rotation.x=t*.3+Math.sin(this.phase*.6-u*.6)*.12}),this.spin>0){this.spin=Math.max(0,this.spin-e);const c=1-this.spin/1.4;this.pivot.rotation.y=c*Math.PI*4}else this.pivot.rotation.y=0}}const kf={title1:"黛西",title2:"珂拉",subtitle:"珊瑚礁小美人鱼",place:"新加坡姐妹岛",choose:"你想当谁？",daisy:"黛西",coral:"珂拉",leo:"里奥",friendPick:"一起游的是",play:"开始玩",holdToSwim:"按住屏幕就能游！",clean:"干净的珊瑚礁",complete:"珊瑚礁干净啦！",completeSub:"小鱼们说谢谢你！",coinsEarned:"贝壳币",nextTime:"更多大海快来啦……",playAgain:"再玩一次",menu:"菜单",language:"语言",sound:"声音",replay:"再说一遍",voice:"声音朗读",on:"开",off:"关",restart:"重新开始",resume:"继续玩",untangle:"待在旁边，网就会松开！",fact_bottle:"一个瓶子能在海里待450年！",fact_can:"旧罐子能变成新罐子！",fact_bag:"海龟会以为塑料袋是水母。",fact_net:"海里的旧渔网叫“幽灵网”。小动物会被卡住。",devil:"恶魔博士",narrator:"故事",next:"下一页",skip:"跳过",story0:"{a}和{b}最喜欢在新加坡的海里游泳。",story1:"有一天，来了一艘紫色潜水艇……",story2:"哇哈哈！我是恶魔博士！",story3:"看！海里好多垃圾！",story4:"你们两个来打扫！喝下我的药水！",story5:"哦！我的腿变成尾巴了！",story6:"我们变成美人鱼了！怎么变回去呢？",story7:"打扫大海，找到解药。你们就能变回人！哇哈哈！",story8:"快看！机器人在扔垃圾！",story9:"我们来修好机器人，一起打扫吧！",mission:"任务",missionClean:"捡垃圾",missionRobots:"修好机器人",missionMap:"看地图",missionStars:"快一点就有3颗星！",start:"出发！",watchStory:"看故事",fixRobot:"待在旁边，机器人就修好啦！",robotFixed:"机器人修好啦！现在它来帮忙。",robotsLeft:"也要修好机器人！",time:"时间",map:"地图",worldTab:"世界",singaporeTab:"新加坡",busanTab:"釜山",moreOceans:"下一片海",youAreHere:"你在这里",dragToSpin:"拖一拖，转动地球",singapore:"新加坡",malaysia:"马来西亚",indonesia:"印度尼西亚",sentosa:"圣淘沙",marinaBay:"滨海湾",sistersIslands:"姐妹岛",mbs:"滨海湾金沙",merlion:"鱼尾狮",flyer:"新加坡摩天观景轮",stJohns:"圣约翰岛",oceanReef:"大堡礁",oceanHawaii:"夏威夷",oceanCaribbean:"加勒比海",oceanMed:"地中海",oceanArctic:"北冰洋",oceanBali:"巴厘岛",oceanOkinawa:"冲绳",wishHint:"点 🔜 选你想去的海",wishAsk:"想去这里吗？",wishThanks:"谢谢！我们会记住你想去这里。",parentCorner:"家长专区",parentHold:"家长请按住按钮 3 秒。",parentHoldBtn:"按住打开",parentIntro:"告诉我们您家想要什么：新的海洋、新的海洋朋友，或觉得难的地方。孩子也可以点地球上的 🔜 海洋来投票。",feedbackSend:"发送意见",feedbackRate:"给应用评分",feedbackHelp:"帮助与支持",feedbackPrivacy:"隐私政策",feedbackMailBody:"您的想法或问题（哪片海、发生了什么）：",surfaceUp:"上浮",diveDown:"下潜",flick:"嗖！",whirl:"旋涡",bang:"砰！",ting:"叮！",emptyBag:"去倒空它吧！",surfaceHello:"快看！那是新加坡！",place_busan:"韩国釜山海云台",haeundae:"海云台",busan:"釜山",korea:"韩国",dongbaek:"冬柏岛",hwangok:"美人鱼雕像",marineCity:"海洋城",lct:"LCT大楼",gwangan:"广安大桥",skyCapsule:"天空胶囊列车",oryukdo:"五六岛",surfaceHello_busan:"快看！那是釜山！",chooseOcean:"去哪片海？",go_busan:"去釜山",allOceansDone:"三片大海你们都救啦！🎉",pickNextOcean:"下一站去哪里？⭐ 是大家还没救过的海！",hostPicksOcean:"建房间的朋友来选大海。",newAccountMade:"新游戏准备好啦！",welcomeBack:"欢迎回来",oldAccount:"这是你以前建的账号。保存的游戏都回来啦！",nameTakenPin:"这个名字已经有账号了。请点你当时选的 4 张图片！",houseSwimHint:"点地板，你的美人鱼就游过去。点滑梯就能滑下来！",roomCode:"房间",soloIntro_singapore:"{a}最喜欢在新加坡的大海里游泳。",soloIntro_busan:"{a}最喜欢在韩国釜山的海云台游泳。",soloIntro_andaman:"{a}最喜欢在印度的安达曼海游泳。",teamIntro_busan:"{a}和{b}最喜欢在韩国釜山的海云台游泳。",teamIntro_andaman:"{a}和{b}最喜欢在印度的安达曼海游泳。",soloStory4:"你来打扫！喝下我的药水！",soloStory6:"我变成美人鱼了！怎么变回来呢？",sisterHome:"我也变成美人鱼了！我在美人鱼小屋等你。加油！",soloStory9:"我要修好机器人，把大海变干净！",sgAgain0:"鲸鲨把{a}送到了新加坡。",sgAgain0team:"鲸鲨把{a}和{b}送到了新加坡。",sgAgain1:"谢谢你，鲸鲨！看，鱼尾狮！",sgAgain2:"看！是鲎！它们比恐龙还古老呢！",sgAgain7:"小心鳄鱼。出发！",bstory0solo:"鲸鲨把{a}送到了韩国釜山。",astory0solo:"鲸鲨把{a}送到了印度。",astory6solo:"又是机器人！我来全部打扫干净！",sgBye:"谢谢你们，新加坡的朋友！",endNext:"下一个材料在还没去过的海里！",endThanks:"大家挥挥手。谢谢你，{a}！",rideAsk:"鲸鲨，能带我们去下一片海吗？",cleanDone_singapore:"新加坡的大海变干净啦！🎉",cleanDone_busan:"釜山的大海变干净啦！🎉",cleanDone_andaman:"印度的大海变干净啦！🎉",friendRecycled:"朋友回收啦！你的小屋材料也变多了。",roomLeft:"你离开了房间。自己继续玩吧！",nextCountrySoon:"新的国家会在更新里来哦。会是哪片海呢？敬请期待！🌏",soonOcean:"即将推出",bstory0:"鲸鲨带{a}和{b}去了韩国釜山。",bstory1:"谢谢你，鲸鲨！这里的水凉凉的！",bstory2:"快看！海带森林！还有海星！",bstory3:"哎呀，又是紫色潜水艇……",bstory4:"哇哈哈！我在这片海里也扔了垃圾！",bstory5:"想要下一个解药？把这片海打扫干净！哇哈哈！",bstory6:"机器人又在扔垃圾了！",bstory7:"小心鲨鱼和大水母。出发！",bend0:"恶魔博士掉了一张纸条。",bend1:"下一个解药在印度！",bend2:"出发！谢谢你们，釜山的朋友！",bend3:"鲸鲨又来接她们了。",bend4:"釜山的海干净啦！下一站：印度 🇮🇳",pets:"宠物",petShop:"宠物店",petShopSub:"每只宠物都会给你一个新本领！",buy:"买",needMore:"贝壳不够",close:"关闭",newPet:"新朋友和你一起游！",pet_seahorse:"海马",pet_dolphin:"海豚",pet_jellyfish:"水母",pet_turtle:"海龟",power_seahorse:"磁铁：把垃圾吸过来",power_dolphin:"游得超级快",power_jellyfish:"电一下：让机器人停住，好修理",power_turtle:"护盾：机器人不能在你旁边扔垃圾",shieldBlock:"护盾！这里不许扔垃圾！",wardrobe:"换装",done:"好了",slot_top:"上衣",slot_tail:"尾巴",slot_hairStyle:"发型",slot_hairColor:"发色",slot_accessory:"发夹",top_own:"我的上衣",top_shell:"贝壳上衣",top_sailor:"水手服",top_heart:"爱心上衣",top_sparkle:"闪亮上衣",top_kebaya:"可峇雅",top_hanbok:"韩服上衣",tail_own:"我的尾巴",tail_ocean:"海蓝",tail_emerald:"翡翠绿",tail_purple:"紫色",tail_sunset:"晚霞",tail_silver:"银色",tail_rainbow:"彩虹",tail_gold:"金色",tail_galaxy:"银河",tail_batik:"蜡染纱笼",tail_chima:"韩服裙子",hairStyle_bun:"丸子头",hairStyle_ponytail:"马尾",hairStyle_twin:"双马尾",hairStyle_long:"长发",hairStyle_short:"短发",hairStyle_spiky:"刺刺头",hairColor_brown:"棕色",hairColor_pink:"粉色",hairColor_blonde:"金色",hairColor_black:"黑色",hairColor_blue:"蓝色",hairColor_purple:"紫色",hairColor_mint:"薄荷绿",hairColor_silver:"银色",accessory_daisy:"小雏菊",accessory_star:"星星发夹",accessory_goggles:"潜水镜",accessory_none:"不戴",accessory_bow:"蝴蝶结",accessory_crown:"皇冠",accessory_shell:"贝壳发夹",slot_glasses:"眼镜",glasses_none:"不戴",glasses_sunglasses:"墨镜",glasses_round:"圆眼镜",glasses_heart:"爱心眼镜",glasses_star:"星星眼镜",slot_neck:"项链",top_ballet:"芭蕾舞裙",top_stripes:"条纹上衣",top_dots:"圆点上衣",top_strawberry:"草莓上衣",top_starry:"星空上衣",top_rainbow:"彩虹上衣",top_princess:"公主裙",top_football:"足球衣",top_fish:"小丑鱼上衣",top_turtle:"海龟上衣",top_hoodie:"连帽衫",top_hawaii:"夏威夷衬衫",top_tuxedo:"燕尾服",top_hero:"超级英雄",tail_candyfloss:"棉花糖",tail_ruby:"红宝石",tail_mint:"薄荷",tail_ice:"冰雪",tail_candy:"糖果条纹",tail_koi:"锦鲤",tail_shark:"鲨鱼",tail_peacock:"孔雀",tail_strawberry:"草莓",tail_leopard:"豹纹",tail_sakura:"樱花",tail_aurora:"极光",tail_lava:"岩浆",hairStyle_braid:"麻花辫",hairStyle_spaceBuns:"双丸子头",hairStyle_curly:"卷卷头",hairStyle_sidePony:"侧马尾",hairStyle_bob:"波波头",hairStyle_mohawk:"鸡冠头",hairColor_red:"红色",hairColor_orange:"橙色",hairColor_teal:"青色",hairColor_lilac:"淡紫色",accessory_bunnyEars:"兔耳朵",accessory_bearEars:"小熊耳朵",accessory_witchHat:"女巫帽",accessory_strawHat:"草帽",accessory_beret:"贝雷帽",accessory_butterfly:"蝴蝶发夹",accessory_starfish:"海星发夹",accessory_headphones:"耳机",accessory_partyHat:"派对帽",accessory_shellCrown:"贝壳皇冠",accessory_chefHat:"厨师帽",accessory_cherry:"樱桃发夹",accessory_crabHat:"螃蟹帽",glasses_snorkel:"浮潜面镜",glasses_cat:"猫眼眼镜",glasses_threeD:"3D眼镜",neck_none:"不戴",neck_pearls:"珍珠项链",neck_shells:"贝壳项链",neck_lei:"花环",neck_bowTie:"领结",neck_scarf:"围巾",neck_locket:"爱心项链",neck_medal:"金牌",neck_bandana:"方头巾",top_stage:"舞台夹克",top_purpleHeart:"紫色爱心上衣",top_idolSuit:"白色舞台西装",tail_stage:"舞台闪闪",accessory_mic:"明星麦克风",neck_chain:"闪亮链子",accessory_cap:"鸭舌帽",accessory_catEars:"猫耳朵",accessory_flowers:"花冠",accessory_pirate:"海盗帽",accessory_tiara:"珍珠头冠",accessory_halo:"光环",accessory_unicorn:"独角兽角",accessory_sharkHat:"鲨鱼帽",accessory_jellyHat:"水母帽",accessory_orchid:"兰花",accessory_daenggi:"辫带（韩服）",tradDress:"你去过的国家的衣服",dress_kebaya:"可峇雅：绣着花朵的上衣，新加坡和邻近国家的人会穿。土生华人女士用三枚金胸针扣起来。",dress_batik:"蜡染：用热蜡画出花纹，再染上颜色。蜡染纱笼像裙子一样围在身上。",dress_orchid:"新加坡的国花是一种叫“卓锦万代兰”的兰花。",dress_hanbok:"韩服：韩国的传统衣服。上衣叫“赤古里”，用一条长长的带子系起来。彩虹袖子叫“色同”。",dress_chima:"赤玛：韩服长长、蓬蓬的裙子。黄色上衣配红色裙子是经典搭配。",dress_daenggi:"辫带：系在长辫子末端的丝带。很久以前，韩国女孩会系红色的辫带。",mysteryBox:"神秘盒子",mysteryTap:"点一下盒子打开它！",mysteryNew:"新东西！",wearIt:"穿上它！",later:"等一下",mysteryOnly:"从神秘盒子或礼物里得到",mysteryAll:"神秘宝物全都找到啦！",surprise:"惊喜礼物！",giftAppeared:"机器人给你留了一个礼物！🎁",giftCoins:"礼物里有贝壳币！",newLook:"好漂亮！",boss0:"什么？！你们全都打扫干净了？！",crab1:"我把好心的辣椒蟹变成了机器人！咔嚓咔嚓！",crab2:"现在它只听我的！哈哈哈！",crab3:"看到红色记号了吗？钳子会落在那里。快游开！",crab4:"钳子卡住的时候，撞一撞它背上亮亮的盒子！",crabHint:"躲开红色！盒子一亮，就多按几次旋涡按钮！🦀",crabRound2:"辣酱！躲开红色的云！🌶️",crabRound3:"现在有两只钳子！看红色记号！🦀🦀",crabSauce:"阿嚏！好辣！🌶️",crabWin:"机器人壳掉下来了！好螃蟹回来啦！🦀💚",octo1:"我把好心的章鱼变成了机器人！",octo2:"八条腿全都是！现在它只听我的！",octo3:"看到红色记号了吗？腿会落在那里。快游开！",octo4:"腿累了的时候，撞一撞亮亮的圆环！八条腿都要救出来！",octoHint:"躲开红色！圆环一亮，就多按几次旋涡按钮！🐙",octoRound2:"墨汁！躲开黑色的云！🖤",octoRound3:"它追过来了！还剩两条腿！🐙",octoInk:"墨汁！好黑呀！🖤",octoWin:"机器人盔甲掉下来了！好章鱼向你挥手！🐙💚",ele1:"我把好心的大象变成了机器人！",ele2:"我的盒子在它背上。跑吧，大象！",ele3:"看到红色的路了吗？它会从那里跑过来。快让开！",ele4:"然后它会头晕。撞一撞它背上亮亮的盒子！",eleHint:"离开红色的路！盒子一亮，就多按几次旋涡按钮！🐘",eleRound2:"喷水啦！躲开水云！💦",eleRound3:"现在它要跑两次！小心！🐘",eleSplash:"哗啦！💦",eleWin:"机器人盔甲掉下来了！好大象好开心！🐘💚",devilFlee:"哼！我还会回来的！",ingredientHint:"跟着金色的光走！✨",ingredientAppeared:"快看，金色的光！去看看 ✨",ingredient_seagrape:"海葡萄",ingredient_pearl:"大砗磲的珍珠",ingredient_rainbowCoral:"彩虹珊瑚",ingredient_kelp:"海带",ingredient_camellia:"山茶花",ingredient_feather:"海鸥羽毛",got_kelp:"你找到了海带！小鱼住在海带森林里。",got_camellia:"你找到了山茶花！它是釜山的花。",got_feather:"海鸥羽毛！海鸥是釜山的鸟。",got_seagrape:"你找到了海葡萄！它是一种海草。",got_pearl:"你找到了珍珠！这里住着大砗磲。",got_rainbowCoral:"彩虹珊瑚！开心的珊瑚有好多颜色。",lab:"药水实验室",tempPotion:"小药水",tempPotionSub:"用一种材料，变回人一小会儿！",noIngredients:"先找到金色的光！",stirIt:"点一点锅子来搅拌！",drink:"喝！",alreadyHuman:"你现在已经是人啦！",antidote:"真正的解药",antidoteSub:"集齐每片大海的材料，就能永远变回人！",humanStart:"我们变回人啦！只有一小会儿。",humanEnd:"哦！我们又变回美人鱼了。",missionIngredients:"跟着金色的光",missionRescue:"帮助海洋动物",missionRecycle:"把袋子拿去回收",bagFull:"袋子满啦！去回收吧 ♻️",recycle:"把袋子拿去回收 ♻️",rescue:"待在旁边就能帮忙！",escort:"送小丑鱼回家！游向亮光！🏠",escortOctopus:"送章鱼宝宝回家！游向亮光！🏠",findShell:"寄居蟹住在罐子里。去亮光那里找壳吧！",bringShell:"把壳送给寄居蟹！",animalsLeft:"还有小动物需要帮忙！💗",recycleTitle:"回收角",bin_machine:"瓶子和罐子",bin_blue:"塑料袋",bin_nets:"旧渔网",refund:"退钱",recycleIntro_busan:"在韩国，把瓶子和罐子放进机器能拿到积分！",recycleIntro:"在新加坡，把瓶子放进机器能拿到10分钱！",recycleDone:"都做好啦！真棒！",recycleFact_machine:"旧瓶子可以变成新瓶子，甚至变成T恤！",recycleFact_can:"回收的罐子大约60天就能变成新罐子回到商店！",recycleFact_nets:"旧渔网可以做成泳衣和地毯！",keepSwimming:"继续游",totalRefund:"一共退回的钱",album:"救援图鉴",albumSub:"你救过的海洋动物",notYet:"还没遇到",animal_turtle:"海龟",animal_fish:"蓝色小鱼",animal_seahorse:"海马",animal_clownfish:"小丑鱼",animal_crab:"寄居蟹",animal_octopus:"章鱼宝宝",rescued_octopus:"章鱼宝宝回家啦！章鱼会变颜色。",rescued_turtle:"海龟得救啦！海龟在新加坡的海滩上生蛋。",rescued_fish:"小鱼得救啦！塑料袋会困住小鱼。",rescued_seahorse:"海马得救啦！海马爸爸带着宝宝。",rescued_clownfish:"小丑鱼回家啦！它躲在海葵里。",rescued_crab:"寄居蟹有新家啦！",safetyCards:"海洋安全卡",secretFriends:"秘密朋友",secretHint:"有谁躲在什么地方……",secretFound:"你找到了一个秘密朋友！",comeAlong:"我们一起走吧！",danger_crocodile:"湾鳄",danger_boxJelly:"箱水母",danger_lionfish:"狮子鱼",danger_stonefish:"石头鱼",dangerFact_crocodile:"它是最大的爬行动物，还会在海里游泳。2026年有一条游到了圣淘沙的海滩。看到它就要离开水，躲得远远的。",dangerFact_boxJelly:"方方的、透明的水母，有长长的刺丝。2026年在圣淘沙附近发现了一种新的箱水母。被它蜇了，要告诉大人，再倒上醋。",dangerFact_lionfish:"条纹好漂亮，鳍像扇子，可是它的刺有毒。只用眼睛看哦！",dangerFact_stonefish:"它看起来就像海底的一块石头，刺有毒。穿上水鞋，在海里千万不要踩石头。",dangerSeen_boxJelly:"箱水母！绕过去游。",dangerSeen_lionfish:"狮子鱼！很漂亮，可是会蜇人。只用眼睛看！",dangerSeen_stonefish:"那块石头有眼睛！是石头鱼。往上游！",dangerHit_crocodile:"砰！鳄鱼！快快游！",dangerHit_boxJelly:"哎哟！真的被蜇了要找大人。",dangerHit_lionfish:"哎哟，有刺！只看不摸。",dangerHit_stonefish:"哎哟！它看起来像一块石头。",spilled:"哎呀，垃圾掉出来了。捡起来！",coming_crocodile:"鳄鱼！快游走！",escaped_crocodile:"呼！你逃开啦！",danger_mako:"尖吻鲭鲨",danger_nomura:"越前水母",danger_blueRing:"蓝环章鱼",danger_stingray:"赤魟",dangerFact_mako:"世界上游得最快的鲨鱼之一。有时会游到韩国的海里。救生员喊“鲨鱼！”的时候，要冷静地快快上岸。",dangerFact_nomura:"世界上最大的水母之一：比大人还要宽！夏天它会漂到韩国，所以海云台会拉起防水母网。就算是沙滩上死掉的也会蜇人。",dangerFact_blueRing:"又小又可爱，却是海里毒性最强的动物之一。现在釜山的礁石海边也有它。再小的章鱼也不要用手拿。",dangerFact_stingray:"它平平地躲在沙子里，尾巴上有一根会蜇人的刺。在浅水里拖着脚走，让魟鱼先游开。",dangerSeen_nomura:"好大的水母！离远一点。",dangerSeen_blueRing:"有蓝色圆圈的小章鱼！不要碰！",dangerSeen_stingray:"魟鱼！它的尾巴会蜇人。往上游！",dangerHit_mako:"嗖！鲨鱼！甩甩尾巴游快点！",dangerHit_nomura:"哎哟，水母！真的被蜇了要告诉大人。",dangerHit_blueRing:"哎呀！真的千万不能碰。",dangerHit_stingray:"哎哟，魟鱼的尾巴！",coming_mako:"鲨鱼！快游走！",escaped_mako:"呼！你逃开啦！",newSafetyCard:"书里有一张新卡片！",friend_porpoise:"江豚一家",pet_porpoise:"江豚",power_porpoise:"声呐：咔咔叫，找到最近的垃圾",friendFact_porpoise:"韩国会笑的江豚背上没有鳍。它们一家住在釜山的海里，需要干净的水和更少的渔网才能平安。",friend_otter:"水獭一家",pet_otter:"水獭",power_otter:"捡回来：把附近的垃圾拿给你",friendFact_otter:"江獭在滨海湾和鱼尾狮旁边玩耍。新加坡的河变干净以后，它们就回来啦！",end0:"恶魔博士逃走了。一张纸条掉了下来。",end1:"上面说下一个解药在韩国釜山！",end2:"釜山？好远呀！",end3:"这时，一条又大又温柔的鲸鲨来了！",end4:"大家挥挥手。谢谢你们，{a}和{b}！",end5:"鲸鲨，你能带我们去釜山吗？",end6:"新加坡的海干净啦！下一站：釜山 🇰🇷",nextOcean_busan:"下一片海：韩国釜山海云台 🇰🇷",login:"登录",logout:"退出",saveNow:"现在保存",saving:"保存中…",savedNow:"保存好了！",saveFailed:"没有网络，再试一次",floatTrash:"水面上有垃圾！点 ⬆ 上去！",floatFollow:"跟着箭头去捡垃圾。看看风景吧！",petHide:"待在家里",petShow:"一起来",petHome:"你的宠物在家休息。点一下就回来！",petBack:"你的宠物回来啦！",autoSaved:"已经自动保存啦！",saveLater:"现在没有网络，连上后会自动保存。",statIngredients:"解药材料",statSeas:"海洋",statCoins:"金币",statPets:"宠物",statRescued:"帮助的朋友",deleteAccount:"删除账号",deleteWarn:"这会删掉这个玩家和网上保存的一切：金币、衣服、宠物和大海。删掉就找不回来了。",deletePin:"要删除，请再点一次你的4张秘密图片。",keepAccount:"保留我的账号",accountDeleted:"账号删除了。再见！",whoAreYou:"你叫什么名字？",namePlaceholder:"名字",pickPin:"点你的4张秘密图片",pinHelp:"记住它们：在哪台iPad上都能打开你的游戏。",newPlayer:"第一次来吗？用这个名字开始新游戏？",yesNew:"对，新玩家",tryAgain:"再试一次",wrongPin:"图片不一样哦。再试一次！",busy:"试太多次了。休息一下再试吧。",offline:"连不上网络。检查一下Wi-Fi。",hello:"你好",savedOnline:"你的游戏保存在网上了，每台iPad都能玩。",coop:"一起玩",makeRoom:"开一个房间",joinRoom:"加入房间",tellFriend:"把这3张图片给朋友看（最多4个人一起玩）",waitingFriend:"等朋友来……",friendIn:"来了！",pickRoom:"点3张房间图片",noRoom:"没有用这些图片的房间。",roomFull:"这个房间满了。",joined:"你进来啦！朋友按“开始”游戏就开始了。",waitHost:"朋友来开始游戏",friendLeft:"朋友走了。继续游吧！",leaveRoom:"离开房间",needLogin:"先登录才能一起玩",together:"一起",danger_triggerfish:"褐拟鳞鲀",danger_seaKrait:"蓝灰扁尾海蛇",danger_crownThorns:"棘冠海星",danger_moray:"巨型裸胸鳝",dangerFact_triggerfish:"一种有大门牙的大礁鱼。它在沙子上守着自己的窝，谁靠近就追谁。它守护的地方像一个倒过来的圆锥，所以要往旁边游，不要往上游！",dangerFact_seaKrait:"一条黑色和蓝灰色条纹的海蛇。它的毒很强，可是它很安静、很害羞。千万别碰：待着别动，让它游过去。",dangerFact_crownThorns:"一个全身长满尖尖毒刺的大海星。它吃珊瑚，太多了会伤害珊瑚礁。千万别碰，看到很多的话要告诉大人或潜水教练。",dangerFact_moray:"海鳝躲在石头洞里，嘴巴一张一合地呼吸。它们很害羞，可是咬人很疼。千万不要把手伸进珊瑚礁的洞里！",dangerSeen_seaKrait:"有条纹的海蛇！让它游过去。",dangerSeen_crownThorns:"满身是刺的海星！不要碰。",dangerSeen_moray:"有谁在偷看！是海鳝。离它的洞远一点。",dangerHit_triggerfish:"啊呜！往旁边游走！",dangerHit_seaKrait:"哎呀！真的海蛇千万不能碰。",dangerHit_crownThorns:"哎哟，有刺！只用眼睛看。",dangerHit_moray:"啊呜！千万不要把手伸进洞里。",coming_triggerfish:"大鳞鲀！往旁边游走！",escaped_triggerfish:"呼！你逃开啦！",friend_dugong:"儒艮一家",pet_dugong:"儒艮",power_dugong:"温柔抱抱：动物撞到你时，袋子里的垃圾不会掉出来",friendFact_dugong:"儒艮是温柔的“海牛”，吃海草，就像草地上的牛一样。儒艮是安达曼和尼科巴群岛的代表动物。它们只剩下很少了，需要干净的海草和安静的船。",radhanagar:"拉达纳加尔海滩",elephantBeach:"大象海滩",barrenIsland:"巴伦岛火山",lighthouseAndaman:"北湾灯塔",havelock:"哈夫洛克岛",havelockJetty:"哈夫洛克码头",andaman:"安达曼",andamanIndia:"印度安达曼",andamanTab:"印度",india:"印度",portBlair:"布莱尔港",andamanSea:"安达曼海",place_andaman:"印度 安达曼 哈夫洛克岛",surfaceHello_andaman:"快看！海滩，还有火山！",recycleIntro_andaman:"在印度，“卡巴迪瓦拉”会收旧瓶子和罐子！",go_andaman:"去印度",nextOcean_andaman:"下一片海：印度安达曼群岛 🇮🇳",ingredient_lotus:"莲花",ingredient_peacock:"孔雀羽毛",ingredient_conch:"海螺",got_lotus:"莲花！它是印度的花。",got_peacock:"孔雀羽毛！孔雀是印度的鸟。",got_conch:"海螺！在印度，人们像吹喇叭一样吹它。",astory0:"鲸鲨带{a}和{b}去了印度。",astory1:"谢谢你，鲸鲨！水好清呀！",astory2:"快看！白白的沙子，好多珊瑚！",astory3:"可是紫色潜水艇已经在这里了……",astory4:"哇哈哈！我在这里也扔了垃圾！",astory5:"我的机器人现在很快！哇哈哈！",astory6:"又是机器人！我们来打扫吧！",astory7:"这里住着一条大鳞鲀。它追我们，就往旁边游！",aend0:"恶魔博士又掉了一张纸条。",aend1:"莲花、羽毛、海螺……我们快到啦！",aend2:"谢谢你们，海洋朋友！再见，印度！",aend3:"鲸鲨又来接她们了。",aend4:"大海干净啦！新的国家马上就来！🌏",top_saree:"纱丽上衣",tail_lehenga:"莱恩加长裙",accessory_tikka:"额饰",dress_saree:"纱丽：一块很长很长的布，有五到九米长！把它裹在身上，再搭到肩膀上。",dress_lehenga:"莱恩加：长长的、会转圈圈的印度裙子，常常绣着金线和小镜子。人们在婚礼和节日穿。",dress_tikka:"额饰：一条链子沿着头发中间的分线挂下来，宝石垂在额头上。印度的新娘常常戴。",house:"美人鱼的家",houseOf:"{n}的家",houseExit:"回到海里",houseWall:"墙",houseFloor:"地板",houseFriend:"朋友的",houseMine:"我的家",houseTurn:"转一转",houseAway:"收起来",houseNeedMore:"回收更多垃圾才能做这个！",houseFull:"放不下了！先收起一样东西吧。",houseVisitors:"你救过的动物来做客啦！",houseNoVisitors:"在海里救动物，它们就会来做客！",houseFact_bottle:"用瓶子做的！旧塑料瓶可以变成软软的布、毯子和靠垫里的棉花。",houseFact_can:"用易拉罐做的！回收的易拉罐大约60天就能变成新东西，一次又一次。",houseFact_bag:"用塑料袋做的！它们可以变成做长椅和花盆的塑料木板。",houseFact_net:"用旧渔网做的！真的渔网会被做成地毯和泳衣。",furn_shellBed:"贝壳床",furn_sofa:"珊瑚沙发",furn_table:"亮亮的桌子",furn_stool:"易拉罐凳子",furn_jellyLamp:"水母灯",furn_netRug:"渔网地毯",furn_hammock:"吊床",furn_shelf:"架子",furn_coralPot:"珊瑚花盆",furn_anemone:"海葵",furn_mirror:"贝壳镜子",furn_chest:"宝箱",furn_slide:"滑梯",furn_kopitiam:"咖啡店桌子",furnFact_kopitiam:"在新加坡，人们在咖啡店（Kopitiam）吃早餐：咖椰吐司配咖啡！",furn_orchid:"兰花",furnFact_orchid:"卓锦万代兰是新加坡的国花。",furn_merlion:"小鱼尾狮",furnFact_merlion:"鱼尾狮有狮子的头和鱼的尾巴。它是新加坡有名的雕像！",furn_soban:"小饭桌",furnFact_soban:"在韩国，饭菜放在一张叫“小盘桌”的矮桌上，大家坐在地上吃。",furn_onggi:"瓮器罐子",furnFact_onggi:"韩国人家把泡菜和酱油放在大大的陶土瓮器罐子里。",furn_byeongpung:"屏风",furnFact_byeongpung:"屏风是韩国老房子里画着画、可以折起来的屏风。",furn_charpai:"绳床",furnFact_charpai:"在印度，“查尔帕伊”是用绳子编成的床。热天睡上去凉凉的！",furn_diya:"铜油灯",furnFact_diya:"在印度，排灯节（光明节）时会点亮叫“迪亚”的小油灯。",furn_rangoli:"兰果丽",furnFact_rangoli:"在印度，兰果丽是门口地上画的彩色图案。它在说：欢迎！",furn_bubbler:"泡泡机",housePlace:"点一下你想放的地方！",houseVisit:"去朋友家玩",houseLogin:"登录就能去朋友家玩！",houseNoFriends:"和朋友一起玩过，就能去他们家玩！",houseFriendAway:"去不了那个家。等一下再试吧！"},Gf={title1:"Daisy",title2:"Coral",subtitle:"Les sirènes du récif",place:"Sisters' Islands, Singapour",choose:"Avec qui tu joues ?",daisy:"Daisy",coral:"Coral",leo:"Léo",friendPick:"Elle nage avec",play:"Jouer",holdToSwim:"Touche et garde le doigt pour nager !",clean:"Récif propre",complete:"Le récif est tout propre !",completeSub:"Les poissons te disent merci !",coinsEarned:"Pièces coquillages",nextTime:"D'autres océans arrivent bientôt…",playAgain:"Rejouer",menu:"Menu",language:"Langue",sound:"Son",replay:"Redis-le",voice:"Voix",on:"Oui",off:"Non",restart:"Recommencer",resume:"Continuer",untangle:"Reste tout près et le filet se défait !",fact_bottle:"Une bouteille peut rester 450 ans dans la mer !",fact_can:"Les vieilles canettes peuvent devenir de nouvelles canettes !",fact_bag:"Les tortues peuvent croire qu’un sac en plastique est une méduse.",fact_net:"Les vieux filets dans la mer sont des filets fantômes. Les animaux s’y coincent.",devil:"Devil Science",narrator:"Histoire",next:"Suivant",skip:"Passer",story0:"{a} et {b} adorent nager dans la mer à Singapour.",story1:"Un jour, un sous-marin violet est arrivé...",story2:"Mouahaha ! Je suis Devil Science !",story3:"Regardez ! Plein de déchets dans la mer !",story4:"Vous deux, nettoyez ! Buvez ma potion !",story5:"Oh ! Mes jambes sont devenues une queue !",story6:"On est des sirènes ! Comment on redevient comme avant ?",story7:"Nettoyez la mer et trouvez l’antidote. Après, vous redeviendrez des filles ! Mouahaha !",story8:"Regarde ! Les robots jettent des déchets !",story9:"Réparons les robots et nettoyons !",mission:"Mission",missionClean:"Ramasser les déchets",missionRobots:"Réparer les robots",missionMap:"Regarder la carte",missionStars:"Va vite pour 3 étoiles !",start:"C'est parti !",watchStory:"Voir l'histoire",fixRobot:"Reste près du robot et il sera réparé !",robotFixed:"Robot réparé ! Maintenant il aide.",robotsLeft:"Répare aussi les robots !",time:"Temps",map:"Carte",worldTab:"Monde",singaporeTab:"Singapour",busanTab:"Busan",moreOceans:"Mer suivante",youAreHere:"Tu es ici",dragToSpin:"Glisse pour faire tourner la Terre",singapore:"Singapour",malaysia:"Malaisie",indonesia:"Indonésie",sentosa:"Sentosa",marinaBay:"Marina Bay",sistersIslands:"Sisters' Islands",mbs:"Marina Bay Sands",merlion:"Merlion",flyer:"Singapore Flyer",stJohns:"Île Saint-Jean",oceanReef:"Grande Barrière de corail",oceanHawaii:"Hawaï",oceanCaribbean:"Mer des Caraïbes",oceanMed:"Mer Méditerranée",oceanArctic:"Océan Arctique",oceanBali:"Bali",oceanOkinawa:"Okinawa",wishHint:"Touche 🔜 où tu veux aller",wishAsk:"Tu veux aller ici ?",wishThanks:"Merci ! On s'en souviendra.",parentCorner:"Parents",parentHold:"Pour les adultes : appuie 3 secondes sur le bouton.",parentHoldBtn:"Maintenir pour ouvrir",parentIntro:"Dites-nous ce que votre famille aimerait ensuite : nouveaux océans, nouveaux amis marins, ce qui était difficile. Les enfants peuvent aussi voter en touchant les océans 🔜 sur le globe.",feedbackSend:"Envoyer un avis",feedbackRate:"Noter l'app",feedbackHelp:"Aide",feedbackPrivacy:"Confidentialité",feedbackMailBody:"Votre idée ou problème (quel océan, que s'est-il passé) :",surfaceUp:"Monter",diveDown:"Plonger",flick:"Hop !",whirl:"Tourbillon",bang:"BOUM !",ting:"Ting !",emptyBag:"Allons le vider !",surfaceHello:"Regarde ! C’est Singapour !",place_busan:"Haeundae, Busan, Corée",haeundae:"Haeundae",busan:"Busan",korea:"Corée",dongbaek:"Île Dongbaek",hwangok:"Statue de la sirène",marineCity:"Marine City",lct:"Tour LCT",gwangan:"Pont Gwangan",skyCapsule:"Capsules du ciel",oryukdo:"Oryukdo",surfaceHello_busan:"Regarde ! C’est Busan !",chooseOcean:"Quelle mer ?",go_busan:"Aller à Busan",allOceansDone:"Tu as sauvé les trois océans ! 🎉",pickNextOcean:"On va où maintenant ? ⭐ = une mer que l’équipe n’a pas encore sauvée !",hostPicksOcean:"L’ami qui a créé la salle choisit la mer.",newAccountMade:"Un tout nouveau jeu est prêt !",welcomeBack:"Te revoilà",oldAccount:"C’est le jeu que tu as créé avant. Tout ce que tu as sauvegardé est revenu !",nameTakenPin:"Ce prénom a déjà un jeu. Touche les 4 images choisies la première fois !",houseSwimHint:"Touche le sol et ta sirène y nage. Touche le toboggan pour glisser !",roomCode:"Salle",soloIntro_singapore:"{a} adore nager dans la mer à Singapour.",soloIntro_busan:"{a} adore nager à Haeundae, à Busan, en Corée.",soloIntro_andaman:"{a} adore nager dans la mer d’Andaman, en Inde.",teamIntro_busan:"{a} et {b} adorent nager à Haeundae, à Busan, en Corée.",teamIntro_andaman:"{a} et {b} adorent nager dans la mer d’Andaman, en Inde.",soloStory4:"Toi, nettoie tout ! Bois ma potion !",soloStory6:"Je suis une sirène ! Comment je redeviens moi ?",sisterHome:"Moi aussi, je suis une sirène ! Je t’attends à notre maison de sirène. Courage !",soloStory9:"Je vais réparer les robots et nettoyer la mer !",sgAgain0:"Le requin-baleine a emmené {a} à Singapour.",sgAgain0team:"Le requin-baleine a emmené {a} et {b} à Singapour.",sgAgain1:"Merci, requin-baleine ! Regarde, le Merlion !",sgAgain2:"Regarde ! Une limule ! Elles sont plus vieilles que les dinosaures !",sgAgain7:"Attention au crocodile. On y va !",bstory0solo:"Le requin-baleine a emmené {a} à Busan, en Corée.",astory0solo:"Le requin-baleine a emmené {a} en Inde.",astory6solo:"Encore des robots ! Je vais tout nettoyer !",sgBye:"Merci, les amis de Singapour !",endNext:"Le prochain ingrédient est dans une mer où on n’est pas encore allés !",endThanks:"Tout le monde fait coucou. Merci, {a} !",rideAsk:"Requin-baleine, tu nous emmènes à la prochaine mer ?",cleanDone_singapore:"La mer de Singapour est propre ! 🎉",cleanDone_busan:"La mer de Busan est propre ! 🎉",cleanDone_andaman:"La mer d’Inde est propre ! 🎉",friendRecycled:"Un ami a recyclé ! Tu as aussi les pièces pour ta maison.",roomLeft:"Tu as quitté la salle. Continue à jouer seul !",nextCountrySoon:"De nouveaux pays arrivent dans une mise à jour. Quelle mer ce sera ? Surprise ! 🌏",soonOcean:"Bientôt",bstory0:"Le requin-baleine a emmené {a} et {b} à Busan, en Corée.",bstory1:"Merci, requin-baleine ! L’eau est fraîche ici !",bstory2:"Regarde ! Des forêts d’algues ! Et des étoiles de mer !",bstory3:"Oh non. Encore le sous-marin violet...",bstory4:"Mouahaha ! J’ai mis des déchets dans cette mer aussi !",bstory5:"Tu veux le prochain antidote ? Nettoie cette mer ! Mouahaha !",bstory6:"Les robots jettent encore des déchets !",bstory7:"Attention aux requins et aux grosses méduses. On y va !",bend0:"Devil Science a fait tomber un mot.",bend1:"Le prochain antidote est en Inde !",bend2:"On y va ! Merci, les amis de Busan !",bend3:"Le requin-baleine est revenu les chercher.",bend4:"La mer de Busan est propre ! Ensuite : l’Inde 🇮🇳",pets:"Animaux",petShop:"Animalerie",petShopSub:"Chaque animal te donne un nouveau pouvoir !",buy:"Acheter",needMore:"Il faut plus de coquillages",close:"Fermer",newPet:"Un nouvel ami nage avec toi !",pet_seahorse:"Hippocampe",pet_dolphin:"Dauphin",pet_jellyfish:"Méduse",pet_turtle:"Tortue de mer",power_seahorse:"Aimant : attire les déchets vers toi",power_dolphin:"Nage super vite",power_jellyfish:"Zap : arrête les robots pour les réparer",power_turtle:"Bouclier : pas de déchets près de toi",shieldBlock:"Bouclier ! Pas de déchets ici !",wardrobe:"Habillage",done:"Fini",slot_top:"Haut",slot_tail:"Queue",slot_hairStyle:"Coiffure",slot_hairColor:"Couleur",slot_accessory:"Barrette",top_own:"Mon haut",top_shell:"Haut coquillage",top_sailor:"Marinière",top_heart:"Haut cœur",top_sparkle:"Haut brillant",top_kebaya:"Kebaya",top_hanbok:"Jeogori (hanbok)",tail_own:"Ma queue",tail_ocean:"Océan",tail_emerald:"Émeraude",tail_purple:"Violet",tail_sunset:"Coucher de soleil",tail_silver:"Argent",tail_rainbow:"Arc-en-ciel",tail_gold:"Or",tail_galaxy:"Galaxie",tail_batik:"Sarong batik",tail_chima:"Chima (hanbok)",hairStyle_bun:"Chignon",hairStyle_ponytail:"Queue de cheval",hairStyle_twin:"Couettes",hairStyle_long:"Cheveux longs",hairStyle_short:"Cheveux courts",hairStyle_spiky:"Cheveux en pétard",hairColor_brown:"Brun",hairColor_pink:"Rose",hairColor_blonde:"Blond",hairColor_black:"Noir",hairColor_blue:"Bleu",hairColor_purple:"Violet",hairColor_mint:"Menthe",hairColor_silver:"Argent",accessory_daisy:"Marguerite",accessory_star:"Barrette étoile",accessory_goggles:"Lunettes de plongée",accessory_none:"Rien",accessory_bow:"Nœud",accessory_crown:"Couronne",accessory_shell:"Barrette coquillage",slot_glasses:"Lunettes",glasses_none:"Rien",glasses_sunglasses:"Lunettes de soleil",glasses_round:"Lunettes rondes",glasses_heart:"Lunettes cœur",glasses_star:"Lunettes étoile",slot_neck:"Collier",top_ballet:"Tutu de danse",top_stripes:"Haut rayé",top_dots:"Pois",top_strawberry:"Haut fraise",top_starry:"Nuit étoilée",top_rainbow:"Haut arc-en-ciel",top_princess:"Robe de princesse",top_football:"Maillot de foot",top_fish:"Haut poisson-clown",top_turtle:"Haut tortue",top_hoodie:"Sweat à capuche",top_hawaii:"Chemise hawaïenne",top_tuxedo:"Smoking",top_hero:"Super-héros",tail_candyfloss:"Barbe à papa",tail_ruby:"Rubis",tail_mint:"Menthe",tail_ice:"Glace",tail_candy:"Bonbon rayé",tail_koi:"Carpe koï",tail_shark:"Requin",tail_peacock:"Paon",tail_strawberry:"Fraise",tail_leopard:"Léopard",tail_sakura:"Fleur de cerisier",tail_aurora:"Aurore",tail_lava:"Lave",hairStyle_braid:"Tresse",hairStyle_spaceBuns:"Deux chignons",hairStyle_curly:"Bouclés",hairStyle_sidePony:"Queue sur le côté",hairStyle_bob:"Carré",hairStyle_mohawk:"Crête",hairColor_red:"Rouge",hairColor_orange:"Orange",hairColor_teal:"Bleu canard",hairColor_lilac:"Lilas",accessory_bunnyEars:"Oreilles de lapin",accessory_bearEars:"Oreilles d'ours",accessory_witchHat:"Chapeau de sorcière",accessory_strawHat:"Chapeau de paille",accessory_beret:"Béret",accessory_butterfly:"Barrette papillon",accessory_starfish:"Barrette étoile de mer",accessory_headphones:"Casque",accessory_partyHat:"Chapeau de fête",accessory_shellCrown:"Couronne coquillage",accessory_chefHat:"Toque de chef",accessory_cherry:"Barrette cerise",accessory_crabHat:"Chapeau crabe",glasses_snorkel:"Masque de plongée",glasses_cat:"Lunettes œil de chat",glasses_threeD:"Lunettes 3D",neck_none:"Rien",neck_pearls:"Collier de perles",neck_shells:"Collier coquillages",neck_lei:"Collier de fleurs",neck_bowTie:"Nœud papillon",neck_scarf:"Écharpe",neck_locket:"Médaillon cœur",neck_medal:"Médaille d'or",neck_bandana:"Bandana",top_stage:"Veste de scène",top_purpleHeart:"Haut cœur violet",top_idolSuit:"Costume de scène blanc",tail_stage:"Paillettes de scène",accessory_mic:"Micro de star",neck_chain:"Chaîne brillante",accessory_cap:"Casquette",accessory_catEars:"Oreilles de chat",accessory_flowers:"Couronne de fleurs",accessory_pirate:"Chapeau de pirate",accessory_tiara:"Diadème de perles",accessory_halo:"Auréole",accessory_unicorn:"Corne de licorne",accessory_sharkHat:"Chapeau requin",accessory_jellyHat:"Chapeau méduse",accessory_orchid:"Orchidée",accessory_daenggi:"Ruban daenggi",tradDress:"Les vêtements des pays que tu visites",dress_kebaya:"Kebaya : un chemisier brodé de fleurs, porté à Singapour et chez ses voisins. Les dames peranakan le ferment avec trois broches en or.",dress_batik:"Batik : on dessine des motifs à la cire chaude, puis on teint le tissu. Le sarong batik s'enroule comme une jupe.",dress_orchid:"La fleur nationale de Singapour est une orchidée appelée Vanda Miss Joaquim.",dress_hanbok:"Hanbok : les habits traditionnels de Corée. Le haut s'appelle jeogori, noué avec un ruban appelé goreum. Les manches arc-en-ciel s'appellent saekdong.",dress_chima:"Chima : la longue jupe bouffante du hanbok. Un jeogori jaune avec une chima rouge, c'est le grand classique.",dress_daenggi:"Daenggi : un ruban noué au bout d'une longue tresse. Autrefois, les filles coréennes en portaient des rouges.",mysteryBox:"Boîte mystère",mysteryTap:"Touche la boîte pour l'ouvrir !",mysteryNew:"Nouvel objet !",wearIt:"Je le mets !",later:"Plus tard",mysteryOnly:"Vient d'une boîte mystère ou d'un cadeau",mysteryAll:"Tu as trouvé tous les objets mystère !",surprise:"Cadeau surprise !",giftAppeared:"Le robot t’a laissé un cadeau ! 🎁",giftCoins:"Des pièces coquillage dans le cadeau !",newLook:"Trop jolie !",boss0:"Quoi ?! Vous avez tout nettoyé ?!",crab1:"J’ai changé le gentil crabe au piment en ROBOT ! Clac clac !",crab2:"Maintenant il m’obéit ! Hahaha !",crab3:"Tu vois la marque rouge ? La pince tombe là. Nage plus loin !",crab4:"Quand la pince est coincée, cogne la boîte qui brille sur son dos !",crabHint:"Évite le rouge ! Quand la boîte brille, appuie encore et encore sur le tourbillon ! 🦀",crabRound2:"Sauce piquante ! Évite les nuages rouges ! 🌶️",crabRound3:"Deux pinces maintenant ! Regarde les marques rouges ! 🦀🦀",crabSauce:"Atchoum ! Ça pique ! 🌶️",crabWin:"La carapace de robot est tombée ! Le gentil crabe est revenu ! 🦀💚",octo1:"J’ai changé la gentille pieuvre en ROBOT !",octo2:"Les huit bras ! Maintenant elle m’obéit !",octo3:"Tu vois les marques rouges ? Les bras tombent là. Nage plus loin !",octo4:"Quand un bras est fatigué, cogne l’anneau qui brille ! Libère les huit !",octoHint:"Évite le rouge ! Quand un anneau brille, appuie encore et encore sur le tourbillon ! 🐙",octoRound2:"De l’encre ! Évite les nuages noirs ! 🖤",octoRound3:"Elle te suit ! Encore deux bras ! 🐙",octoInk:"De l’encre ! Il fait tout noir ! 🖤",octoWin:"L’armure de robot est tombée ! La gentille pieuvre te fait coucou ! 🐙💚",ele1:"J’ai changé le gentil éléphant en ROBOT !",ele2:"Ma boîte est sur son dos. Cours, éléphant !",ele3:"Tu vois le chemin rouge ? Il court par là. Pousse-toi !",ele4:"Après, il a la tête qui tourne. Cogne la boîte qui brille sur son dos !",eleHint:"Sors du chemin rouge ! Quand la boîte brille, appuie encore et encore sur le tourbillon ! 🐘",eleRound2:"De l’eau ! Évite les nuages d’eau ! 💦",eleRound3:"Il court deux fois maintenant ! Attention ! 🐘",eleSplash:"Plouf ! 💦",eleWin:"L’armure de robot est tombée ! Le gentil éléphant est tout content ! 🐘💚",devilFlee:"Grr ! Je reviendrai !",ingredientHint:"Suis la lumière dorée ! ✨",ingredientAppeared:"Regarde, une lumière dorée ! Va voir ✨",ingredient_seagrape:"Raisins de mer",ingredient_pearl:"Perle de bénitier",ingredient_rainbowCoral:"Corail arc-en-ciel",ingredient_kelp:"Varech",ingredient_camellia:"Fleur de camélia",ingredient_feather:"Plume de mouette",got_kelp:"Tu as trouvé du varech ! Les poissons vivent dans les forêts d’algues.",got_camellia:"Tu as trouvé un camélia ! C’est la fleur de Busan.",got_feather:"Une plume de mouette ! La mouette est l’oiseau de Busan.",got_seagrape:"Tu as trouvé des raisins de mer ! C’est une algue.",got_pearl:"Tu as trouvé une perle ! Des bénitiers géants vivent ici.",got_rainbowCoral:"Du corail arc-en-ciel ! Les coraux heureux ont plein de couleurs.",lab:"Labo à potions",tempPotion:"Petite potion",tempPotionSub:"Un ingrédient, et tu redeviens humaine un petit moment !",noIngredients:"Trouve d’abord la lumière dorée !",stirIt:"Touche la marmite pour mélanger !",drink:"Bois !",alreadyHuman:"Tu es déjà humaine !",antidote:"Le vrai antidote",antidoteSub:"Ramasse les ingrédients de chaque océan pour redevenir humaine pour toujours !",humanStart:"On est redevenues des filles ! Juste un petit moment.",humanEnd:"Oh ! On est encore des sirènes.",missionIngredients:"Suivre la lumière dorée",missionRescue:"Aider les animaux",missionRecycle:"Recycler le sac",bagFull:"Le sac est plein ! Va au recyclage ♻️",recycle:"Apporte le sac au recyclage ♻️",rescue:"Reste tout près pour aider !",escort:"Ramène le poisson-clown chez lui ! Nage vers la lumière ! 🏠",escortOctopus:"Ramène le bébé pieuvre chez lui ! Nage vers la lumière ! 🏠",findShell:"Le crabe vit dans une canette. Trouve le coquillage dans la lumière !",bringShell:"Donne le coquillage au crabe !",animalsLeft:"D’autres animaux ont besoin d’aide ! 💗",recycleTitle:"Coin recyclage",bin_machine:"Bouteilles et canettes",bin_blue:"Sacs plastique",bin_nets:"Vieux filets",refund:"Argent rendu",recycleIntro_busan:"En Corée, les bouteilles et canettes dans la machine te donnent des points !",recycleIntro:"À Singapour, une bouteille dans la machine te rapporte 10 centimes !",recycleDone:"Fini ! Bravo !",recycleFact_machine:"Les vieilles bouteilles peuvent devenir de nouvelles bouteilles, ou même des t-shirts !",recycleFact_can:"Une canette recyclée peut revenir au magasin en neuve en 60 jours environ !",recycleFact_nets:"On peut transformer les vieux filets en maillots de bain et en tapis !",keepSwimming:"Continuer à nager",totalRefund:"Tout l'argent rendu",album:"Livre des sauvetages",albumSub:"Les animaux marins que tu as sauvés",notYet:"Pas encore rencontré",animal_turtle:"Tortue de mer",animal_fish:"Poisson bleu",animal_seahorse:"Hippocampe",animal_clownfish:"Poisson-clown",animal_crab:"Bernard-l’ermite",animal_octopus:"Bébé pieuvre",rescued_octopus:"Le bébé pieuvre est rentré ! Les pieuvres changent de couleur.",rescued_turtle:"Tortue sauvée ! Les tortues pondent sur les plages de Singapour.",rescued_fish:"Poisson sauvé ! Les sacs en plastique peuvent piéger les poissons.",rescued_seahorse:"Hippocampe sauvé ! Les papas hippocampes portent les bébés.",rescued_clownfish:"Le poisson-clown est rentré ! Il se cache dans l’anémone.",rescued_crab:"Le crabe a une nouvelle maison !",safetyCards:"Cartes de sécurité",secretFriends:"Amis secrets",secretHint:"Quelqu’un se cache quelque part...",secretFound:"Tu as trouvé un ami secret !",comeAlong:"On y va ensemble !",danger_crocodile:"Crocodile marin",danger_boxJelly:"Méduse-boîte",danger_lionfish:"Poisson-lion",danger_stonefish:"Poisson-pierre",dangerFact_crocodile:"C’est le plus grand reptile, et il nage dans la mer. L’un d’eux est venu sur les plages de Sentosa en 2026. Si tu en vois un, sors de l’eau et reste très loin.",dangerFact_boxJelly:"Une méduse carrée et transparente avec de longs filaments. Une nouvelle espèce a été trouvée près de Sentosa en 2026. Si elle te pique, préviens un adulte et verse du vinaigre.",dangerFact_lionfish:"De jolies rayures et des nageoires en éventail, mais ses épines sont venimeuses. On regarde avec les yeux seulement !",dangerFact_stonefish:"Il ressemble à un caillou au fond de la mer et ses épines sont venimeuses. Mets des chaussures d’eau et ne marche jamais sur les rochers dans la mer.",dangerSeen_boxJelly:"Une méduse-boîte ! Nage autour.",dangerSeen_lionfish:"Un poisson-lion ! Joli, mais il pique. On regarde seulement !",dangerSeen_stonefish:"Ce caillou a des yeux ! C’est un poisson-pierre. Reste au-dessus !",dangerHit_crocodile:"Boum ! Un crocodile ! Nage vite !",dangerHit_boxJelly:"Aïe ! Pour une vraie piqûre, appelle un adulte.",dangerHit_lionfish:"Aïe, des épines ! On regarde, on ne touche pas.",dangerHit_stonefish:"Aïe ! On aurait dit un caillou.",spilled:"Oups, des déchets sont tombés. Ramasse-les !",coming_crocodile:"Un crocodile ! Sauve-toi !",escaped_crocodile:"Ouf ! Tu t’es sauvée !",danger_mako:"Requin mako",danger_nomura:"Méduse de Nomura",danger_blueRing:"Pieuvre à anneaux bleus",danger_stingray:"Raie pastenague rouge",dangerFact_mako:"Un des requins les plus rapides du monde. Les makos nagent parfois dans les mers de Corée. Si le maître-nageur crie « requin ! », sors de l’eau calmement et vite.",dangerFact_nomura:"Une des plus grandes méduses du monde : plus large qu’un adulte est grand ! En été, elle arrive en Corée, alors Haeundae installe des filets. Même morte sur le sable, elle peut piquer.",dangerFact_blueRing:"Petite et mignonne, mais un des animaux les plus venimeux de la mer. Elle vit aussi sur les rochers de Busan maintenant. Ne prends jamais une pieuvre dans tes mains, même toute petite.",dangerFact_stingray:"Elle se cache à plat dans le sable et a un dard sur la queue. Dans l’eau peu profonde, traîne les pieds pour que les raies s’en aillent d’abord.",dangerSeen_nomura:"Une méduse géante ! Reste très loin.",dangerSeen_blueRing:"Une petite pieuvre aux anneaux bleus ! Ne touche pas !",dangerSeen_stingray:"Une raie ! Sa queue pique. Reste au-dessus !",dangerHit_mako:"Wouh ! Un requin ! Remue la queue pour aller vite !",dangerHit_nomura:"Aïe, une méduse ! Pour une vraie piqûre, dis-le à un adulte.",dangerHit_blueRing:"Oh non ! Ne touche jamais une vraie.",dangerHit_stingray:"Aïe, la queue de la raie !",coming_mako:"Un requin ! Sauve-toi !",escaped_mako:"Ouf ! Tu t’es sauvée !",newSafetyCard:"Nouvelle carte dans le livre !",friend_porpoise:"Famille de marsouins aptères",pet_porpoise:"Marsouin aptère",power_porpoise:"Sonar : des clics pour trouver le déchet le plus proche",friendFact_porpoise:"Le marsouin souriant de Corée n’a pas de nageoire sur le dos. Des familles vivent dans la mer de Busan. Pour être en sécurité, il leur faut une eau propre et moins de filets de pêche.",friend_otter:"Famille de loutres",pet_otter:"Loutre",power_otter:"Rapporte : t’apporte les déchets autour",friendFact_otter:"Les loutres jouent autour de Marina Bay et du Merlion. Elles sont revenues quand les rivières de Singapour sont devenues propres !",end0:"Devil Science s’est sauvé. Un mot est tombé.",end1:"Il dit que le prochain antidote est à Busan, en Corée !",end2:"Busan ? C’est si loin !",end3:"Alors, un grand et gentil requin-baleine est arrivé !",end4:"Tout le monde fait coucou. Merci, {a} et {b} !",end5:"Requin-baleine, tu nous emmènes à Busan ?",end6:"La mer de Singapour est propre ! Ensuite : Busan 🇰🇷",nextOcean_busan:"Prochaine mer : Haeundae, Busan, Corée 🇰🇷",login:"Se connecter",logout:"Se déconnecter",saveNow:"Sauvegarder",saving:"Sauvegarde…",savedNow:"Sauvegardé !",saveFailed:"Pas d’internet, réessaie",floatTrash:"Des déchets sur l’eau ! Touche ⬆ !",floatFollow:"Suis la flèche jusqu’aux déchets. Regarde le paysage !",petHide:"Reste à la maison",petShow:"Viens avec moi",petHome:"Ton animal se repose à la maison. Touche-le pour qu’il revienne !",petBack:"Ton animal est revenu !",autoSaved:"Sauvegardé tout seul !",saveLater:"Pas d'internet. Ça se sauvegarde au retour d'internet.",statIngredients:"Antidote",statSeas:"Mers",statCoins:"Pièces",statPets:"Animaux",statRescued:"Amis aidés",deleteAccount:"Supprimer le compte",deleteWarn:"Ça efface ce joueur et tout ce qui est sauvegardé en ligne : pièces, habits, animaux et mers. On ne peut pas revenir en arrière.",deletePin:"Pour supprimer, touche encore tes 4 images secrètes.",keepAccount:"Garder mon compte",accountDeleted:"Le compte est supprimé. Au revoir !",whoAreYou:"Comment tu t’appelles ?",namePlaceholder:"Prénom",pickPin:"Touche tes 4 images secrètes",pinHelp:"Retiens-les : elles ouvrent ton jeu sur n’importe quel iPad.",newPlayer:"C’est ta première fois ? Commencer un nouveau jeu avec ce prénom ?",yesNew:"Oui, nouveau joueur",tryAgain:"Réessayer",wrongPin:"Ce ne sont pas les mêmes images. Réessaie !",busy:"Trop d’essais. Repose-toi un peu, puis réessaie.",offline:"Pas d’internet. Vérifie le Wi-Fi.",hello:"Salut",savedOnline:"Ton jeu est sauvegardé en ligne, sur tous les iPad.",coop:"Jouer ensemble",makeRoom:"Créer une salle",joinRoom:"Rejoindre une salle",tellFriend:"Montre ces 3 images à tes amis (jusqu’à 4 joueurs)",waitingFriend:"On attend un ami...",friendIn:"est là !",pickRoom:"Touche les 3 images de la salle",noRoom:"Il n’y a pas de salle avec ces images.",roomFull:"Cette salle est pleine.",joined:"Tu es dedans ! Le jeu commence quand ton ami appuie sur Jouer.",waitHost:"Ton ami lance le jeu",friendLeft:"Ton ami est parti. Continue à nager !",leaveRoom:"Quitter la salle",needLogin:"Connecte-toi d’abord pour jouer ensemble",together:"Ensemble",danger_triggerfish:"Baliste titan",danger_seaKrait:"Tricot rayé",danger_crownThorns:"Étoile de mer couronne d’épines",danger_moray:"Murène géante",dangerFact_triggerfish:"Un gros poisson du récif avec de grandes dents. Il garde son nid dans le sable et chasse ceux qui s’approchent. Sa zone a la forme d’un cône à l’envers : alors nage sur le côté, pas vers le haut !",dangerFact_seaKrait:"Un serpent de mer rayé de noir et de gris-bleu. Son venin est très fort, mais il est calme et timide. Ne le touche jamais : reste immobile et laisse-le passer.",dangerFact_crownThorns:"Une grosse étoile de mer couverte d’épines pointues et venimeuses. Elle mange le corail : s’il y en a trop, le récif souffre. Ne la touche jamais, et préviens un adulte ou un guide de plongée si tu en vois beaucoup.",dangerFact_moray:"Les murènes se cachent dans les trous des rochers et ouvrent et ferment la bouche pour respirer. Elles sont timides, mais elles mordent fort. Ne mets jamais la main dans un trou du récif !",dangerSeen_seaKrait:"Un serpent de mer rayé ! Laisse-le passer.",dangerSeen_crownThorns:"Une étoile de mer à épines ! Ne touche pas.",dangerSeen_moray:"Quelqu’un regarde ! Une murène. Reste loin de son trou.",dangerHit_triggerfish:"Crac ! Sauve-toi sur le côté !",dangerHit_seaKrait:"Oups ! Ne touche jamais un vrai serpent de mer.",dangerHit_crownThorns:"Aïe, des épines ! On regarde seulement.",dangerHit_moray:"Clac ! Ne mets jamais la main dans un trou.",coming_triggerfish:"Un gros baliste ! Sauve-toi sur le côté !",escaped_triggerfish:"Ouf ! Tu t’es sauvée !",friend_dugong:"Famille de dugongs",pet_dugong:"Dugong",power_dugong:"Câlin doux : quand un animal te bouscule, aucun déchet ne tombe de ton sac",friendFact_dugong:"Les dugongs sont de gentilles « vaches de mer » qui broutent les herbes marines, comme des vaches dans un pré. C’est l’animal des îles Andaman-et-Nicobar. Il en reste très peu : ils ont besoin d’herbes propres et de bateaux calmes.",radhanagar:"Plage de Radhanagar",elephantBeach:"Plage des Éléphants",barrenIsland:"Volcan de Barren Island",lighthouseAndaman:"Phare de North Bay",havelock:"Île Havelock",havelockJetty:"Jetée de Havelock",andaman:"Andaman",andamanIndia:"Andaman (Inde)",andamanTab:"Inde",india:"Inde",portBlair:"Port Blair",andamanSea:"Mer d’Andaman",place_andaman:"Île Havelock, Andaman, Inde",surfaceHello_andaman:"Regarde ! Une plage, et un volcan !",recycleIntro_andaman:"En Inde, le kabadiwala achète les vieilles bouteilles et canettes !",go_andaman:"Aller en Inde",nextOcean_andaman:"Prochaine mer : les îles Andaman, Inde 🇮🇳",ingredient_lotus:"Fleur de lotus",ingredient_peacock:"Plume de paon",ingredient_conch:"Conque",got_lotus:"Une fleur de lotus ! C’est la fleur de l’Inde.",got_peacock:"Une plume de paon ! Le paon est l’oiseau de l’Inde.",got_conch:"Une conque ! En Inde, on souffle dedans comme dans une trompette.",astory0:"Le requin-baleine a emmené {a} et {b} en Inde.",astory1:"Merci, requin-baleine ! L’eau est si claire !",astory2:"Regarde ! Du sable blanc et plein de coraux !",astory3:"Mais le sous-marin violet était là...",astory4:"Mouahaha ! J’ai mis des déchets ici aussi !",astory5:"Mes robots sont rapides maintenant ! Mouahaha !",astory6:"Encore des robots ! On nettoie !",astory7:"Un baliste vit ici. S’il nous poursuit, on nage sur le côté !",aend0:"Devil Science a encore fait tomber un mot.",aend1:"Lotus, plume, coquillage... on y est presque !",aend2:"Merci, les amis de la mer ! Au revoir, l’Inde !",aend3:"Le requin-baleine est revenu les chercher.",aend4:"La mer est propre ! D’autres pays arrivent bientôt ! 🌏",top_saree:"Blouse de sari",tail_lehenga:"Jupe lehenga",accessory_tikka:"Maang tikka",dress_saree:"Sari : un seul très long tissu, de cinq à neuf mètres ! On l’enroule autour du corps et on le pose sur l’épaule.",dress_lehenga:"Lehenga : une longue jupe indienne qui tourne, souvent brodée d’or et de petits miroirs. On la porte aux mariages et aux fêtes.",dress_tikka:"Maang tikka : un bijou qui pend sur le front, au bout d’une chaînette posée sur la raie des cheveux. Les mariées en Inde en portent souvent.",house:"Maison de sirène",houseOf:"La maison de {n}",houseExit:"Retour à la mer",houseWall:"Murs",houseFloor:"Sol",houseFriend:"D’un ami",houseMine:"Ma maison",houseTurn:"Tourner",houseAway:"Ranger",houseNeedMore:"Recycle plus de déchets pour fabriquer ça !",houseFull:"Plus de place ! Range quelque chose d’abord.",houseVisitors:"Les animaux que tu as sauvés sont venus te voir !",houseNoVisitors:"Sauve des animaux dans la mer et ils viendront te voir !",houseFact_bottle:"Fait avec des bouteilles ! Les vieilles bouteilles en plastique peuvent devenir du tissu doux, des couvertures et le rembourrage des coussins.",houseFact_can:"Fait avec des canettes ! Une canette recyclée peut revenir en objet neuf en 60 jours environ, encore et encore.",houseFact_bag:"Fait avec des sacs en plastique ! Ils peuvent devenir des planches pour des bancs et des pots de fleurs.",houseFact_net:"Fait avec de vieux filets de pêche ! Les vrais filets deviennent des tapis et des maillots de bain.",furn_shellBed:"Lit coquillage",furn_sofa:"Canapé corail",furn_table:"Table brillante",furn_stool:"Tabouret canette",furn_jellyLamp:"Lampe méduse",furn_netRug:"Tapis filet",furn_hammock:"Hamac",furn_shelf:"Étagère",furn_coralPot:"Pot de corail",furn_anemone:"Anémone",furn_mirror:"Miroir coquillage",furn_chest:"Coffre au trésor",furn_slide:"Toboggan",furn_kopitiam:"Table de kopitiam",furnFact_kopitiam:"À Singapour, on prend le petit-déjeuner au kopitiam : du pain grillé au kaya et un kopi !",furn_orchid:"Orchidée",furnFact_orchid:"L’orchidée Vanda Miss Joaquim est la fleur de Singapour.",furn_merlion:"Mini Merlion",furnFact_merlion:"Le Merlion a une tête de lion et une queue de poisson. C’est la statue célèbre de Singapour !",furn_soban:"Table soban",furnFact_soban:"En Corée, le repas arrive sur une petite table basse appelée soban, et tout le monde s’assoit par terre.",furn_onggi:"Jarres onggi",furnFact_onggi:"Les familles coréennes gardent le kimchi et la sauce soja dans de grandes jarres en terre, les onggi.",furn_byeongpung:"Paravent",furnFact_byeongpung:"Un byeongpung est un paravent peint des anciennes maisons coréennes.",furn_charpai:"Lit charpai",furnFact_charpai:"En Inde, un charpai est un lit en corde tressée. Bien frais quand il fait chaud !",furn_diya:"Lampe en laiton",furnFact_diya:"En Inde, de petites lampes appelées diyas brillent pour Diwali, la fête des lumières.",furn_rangoli:"Rangoli",furnFact_rangoli:"En Inde, un rangoli est un dessin coloré par terre devant la porte. Il dit bienvenue !",furn_bubbler:"Machine à bulles",housePlace:"Touche l’endroit où tu veux le mettre !",houseVisit:"Visiter la maison d’un ami",houseLogin:"Connecte-toi pour visiter la maison de tes amis !",houseNoFriends:"Joue avec un ami, et tu pourras visiter sa maison !",houseFriendAway:"Impossible d’aller dans cette maison. Réessaie plus tard !"},zf={title1:"デイジー",title2:"コーラル",subtitle:"サンゴしょうのマーメイド",place:"シンガポール・シスターズ島",choose:"だれであそぶ？",daisy:"デイジー",coral:"コーラル",leo:"レオ",friendPick:"いっしょにおよぐのは",play:"あそぶ",holdToSwim:"がめんを ぎゅっと おすと およげるよ！",clean:"きれいなサンゴしょう",complete:"サンゴしょうが きれいになった！",completeSub:"さかなたちが ありがとうって！",coinsEarned:"かいがらコイン",nextTime:"ほかの うみも もうすぐ…",playAgain:"もういちど",menu:"メニュー",language:"ことば",sound:"おと",replay:"もういちど きく",voice:"こえ",on:"オン",off:"オフ",restart:"さいしょから",resume:"つづける",untangle:"そばに いると あみが ほどけるよ！",fact_bottle:"ボトルは うみに 450ねんも のこるよ！",fact_can:"ふるい かんは あたらしい かんに なるよ！",fact_bag:"ウミガメは ビニールぶくろを クラゲと まちがえることが あるよ。",fact_net:"うみの ふるい あみは「ゆうれい あみ」。どうぶつが ひっかかるよ。",devil:"デビル・サイエンス",narrator:"おはなし",next:"つぎへ",skip:"とばす",story0:"{a}と {b}は シンガポールの うみで およぐのが だいすき。",story1:"ある ひ、むらさきの せんすいかんが きた…",story2:"ワハハ！ わしは デビル・サイエンスだ！",story3:"みろ！ うみに ゴミが いっぱいだ！",story4:"おまえたち ふたりで そうじしろ！ わしの くすりを のめ！",story5:"あれっ！ あしが しっぽに なった！",story6:"にんぎょに なっちゃった！ どうやって もどるの？",story7:"うみを そうじして げどくざいを さがせ。そしたら にんげんに もどれるぞ！ ワハハ！",story8:"みて！ ロボットが ゴミを すててる！",story9:"ロボットを なおして いっしょに そうじしよう！",mission:"ミッション",missionClean:"ゴミを ひろう",missionRobots:"ロボットを なおす",missionMap:"ちずを みる",missionStars:"はやいと ほしが 3つ！",start:"スタート！",watchStory:"おはなしを みる",fixRobot:"そばに いると ロボットが なおるよ！",robotFixed:"ロボットが なおった！ もう てつだって くれるよ。",robotsLeft:"ロボットも なおしてね！",time:"じかん",map:"ちず",worldTab:"せかい",singaporeTab:"シンガポール",busanTab:"プサン",moreOceans:"つぎの うみ",youAreHere:"いま ここ",dragToSpin:"なぞって ちきゅうを まわそう",singapore:"シンガポール",malaysia:"マレーシア",indonesia:"インドネシア",sentosa:"セントーサ",marinaBay:"マリーナベイ",sistersIslands:"シスターズ島",mbs:"マリーナベイ・サンズ",merlion:"マーライオン",flyer:"シンガポール・フライヤー",stJohns:"セント・ジョンズ島",oceanReef:"グレートバリアリーフ",oceanHawaii:"ハワイ",oceanCaribbean:"カリブ海",oceanMed:"ちちゅうかい",oceanArctic:"ほっきょくかい",oceanBali:"バリ",oceanOkinawa:"おきなわ",wishHint:"いきたい 🔜 の うみを タッチ",wishAsk:"ここに いきたい？",wishThanks:"ありがとう！ おぼえて おくね。",parentCorner:"保護者コーナー",parentHold:"大人の方へ：ボタンを3秒間長押ししてください。",parentHoldBtn:"長押しで開く",parentIntro:"次に欲しい海や海の仲間、むずかしかった所などを教えてください。子どもは地球儀の 🔜 の海をタッチして投票できます。",feedbackSend:"ご意見を送る",feedbackRate:"評価する",feedbackHelp:"ヘルプ・サポート",feedbackPrivacy:"プライバシーポリシー",feedbackMailBody:"ご意見・問題（どの海で、何が起きたか）：",surfaceUp:"うえへ",diveDown:"もぐる",flick:"シュッ！",whirl:"うずまき",bang:"ドーン！",ting:"カーン！",emptyBag:"からっぽに しに いこう！",surfaceHello:"みて！ シンガポールだよ！",place_busan:"かんこく・プサン・ヘウンデ",haeundae:"ヘウンデ",busan:"プサン",korea:"かんこく",dongbaek:"トンベク島",hwangok:"にんぎょの ぞう",marineCity:"マリンシティ",lct:"LCTタワー",gwangan:"クァンアン大橋",skyCapsule:"スカイカプセル",oryukdo:"オリュクド",surfaceHello_busan:"みて！ プサンだよ！",chooseOcean:"どの うみ？",go_busan:"プサンへ いく",allOceansDone:"みっつの うみを ぜんぶ たすけたね！🎉",pickNextOcean:"つぎは どの うみ？ ⭐は まだ みんなで たすけて いない うみだよ！",hostPicksOcean:"へやを つくった ともだちが うみを えらぶよ。",newAccountMade:"あたらしい ゲームを つくったよ！",welcomeBack:"おかえり",oldAccount:"まえに つくった アカウントだよ。セーブした ゲームが もどったよ！",nameTakenPin:"この なまえは もう あるよ。まえに えらんだ 4つの えを おしてね！",houseSwimHint:"ゆかを タッチすると にんぎょが およいで いくよ。すべりだいを タッチすると すべるよ！",roomCode:"へや",soloIntro_singapore:"{a}は シンガポールの うみで およぐのが だいすき。",soloIntro_busan:"{a}は かんこく プサンの ヘウンデで およぐのが だいすき。",soloIntro_andaman:"{a}は インドの アンダマンかいで およぐのが だいすき。",teamIntro_busan:"{a}と {b}は かんこく プサンの ヘウンデで およぐのが だいすき。",teamIntro_andaman:"{a}と {b}は インドの アンダマンかいで およぐのが だいすき。",soloStory4:"おまえが そうじしろ！ わしの くすりを のめ！",soloStory6:"にんぎょに なっちゃった！ どうやって もどるの？",sisterHome:"わたしも にんぎょに なったよ！ にんぎょの おうちで まってるね。がんばって！",soloStory9:"ロボットを なおして うみを きれいに するよ！",sgAgain0:"ジンベエザメが {a}を シンガポールに つれてきたよ。",sgAgain0team:"ジンベエザメが {a}と {b}を シンガポールに つれてきたよ。",sgAgain1:"ありがとう、ジンベエザメさん！ マーライオンが みえる！",sgAgain2:"みて！ カブトガニだ！ きょうりゅうより むかしから いるんだって！",sgAgain7:"ワニに きをつけよう。いこう！",bstory0solo:"ジンベエザメが {a}を かんこくの プサンに つれてきたよ。",astory0solo:"ジンベエザメが {a}を インドに つれてきたよ。",astory6solo:"また ロボット！ ぜんぶ そうじするよ！",sgBye:"ありがとう、シンガポールの ともだち！",endNext:"つぎの ざいりょうは まだ いってない うみに あるって！",endThanks:"みんなで てを ふるよ。ありがとう、{a}！",rideAsk:"ジンベエザメさん、つぎの うみに つれていって くれる？",cleanDone_singapore:"シンガポールの うみが きれいに なったよ！🎉",cleanDone_busan:"プサンの うみが きれいに なったよ！🎉",cleanDone_andaman:"インドの うみが きれいに なったよ！🎉",friendRecycled:"ともだちが リサイクルしたよ！ おうちの ざいりょうも ふえたよ。",roomLeft:"へやから でたよ。ひとりで つづけよう！",nextCountrySoon:"あたらしい くには アップデートで くるよ。どの うみかな？ おたのしみに！🌏",soonOcean:"もうすぐ",bstory0:"ジンベエザメが {a}と {b}を かんこくの プサンに つれてきたよ。",bstory1:"ありがとう、ジンベエザメさん！ ここの みずは ひんやり！",bstory2:"みて！ コンブの もり！ ヒトデも いる！",bstory3:"あっ、また むらさきの せんすいかん…",bstory4:"ワハハ！ この うみにも ゴミを すてたぞ！",bstory5:"つぎの ざいりょうが ほしい？ この うみを そうじしろ！ ワハハ！",bstory6:"ロボットが また ゴミを すててる！",bstory7:"サメと おおきな クラゲに きをつけよう。いこう！",bend0:"デビル・サイエンスが てがみを おとしたよ。",bend1:"つぎの ざいりょうは インドに あるって！",bend2:"いこう！ ありがとう、プサンの ともだち！",bend3:"ジンベエザメが また むかえに きたよ。",bend4:"プサンの うみが きれいに なった！ つぎは インド 🇮🇳",pets:"ペット",petShop:"ペットショップ",petShopSub:"ペットは みんな あたらしい ちからを くれるよ！",buy:"かう",needMore:"かいがらが たりない",close:"とじる",newPet:"あたらしい ともだちが いっしょに およぐよ！",pet_seahorse:"タツノオトシゴ",pet_dolphin:"イルカ",pet_jellyfish:"クラゲ",pet_turtle:"ウミガメ",power_seahorse:"じしゃく：ゴミを ひきよせる",power_dolphin:"すごく はやく およげる",power_jellyfish:"ビリビリ：ロボットを とめて なおせる",power_turtle:"バリア：ちかくに ゴミを すてさせない",shieldBlock:"バリア！ ここに ゴミは だめ！",wardrobe:"きがえ",done:"できた",slot_top:"ふく",slot_tail:"しっぽ",slot_hairStyle:"かみがた",slot_hairColor:"かみのいろ",slot_accessory:"かみかざり",top_own:"いつもの ふく",top_shell:"かいがらの ふく",top_sailor:"セーラーふく",top_heart:"ハートの ふく",top_sparkle:"キラキラの ふく",top_kebaya:"クバヤ",top_hanbok:"チョゴリ（ハンボク）",tail_own:"いつもの しっぽ",tail_ocean:"うみいろ",tail_emerald:"エメラルド",tail_purple:"むらさき",tail_sunset:"ゆうやけ",tail_silver:"ぎんいろ",tail_rainbow:"にじいろ",tail_gold:"きんいろ",tail_galaxy:"ぎんが",tail_batik:"バティックの サロン",tail_chima:"チマ（ハンボク）",hairStyle_bun:"おだんご",hairStyle_ponytail:"ポニーテール",hairStyle_twin:"ツインテール",hairStyle_long:"ロングヘア",hairStyle_short:"ショートヘア",hairStyle_spiky:"ツンツンヘア",hairColor_brown:"ちゃいろ",hairColor_pink:"ピンク",hairColor_blonde:"きんぱつ",hairColor_black:"くろ",hairColor_blue:"あお",hairColor_purple:"むらさき",hairColor_mint:"ミント",hairColor_silver:"ぎんいろ",accessory_daisy:"デイジーの はな",accessory_star:"ほしの ピン",accessory_goggles:"ゴーグル",accessory_none:"なし",accessory_bow:"リボン",accessory_crown:"おうかん",accessory_shell:"かいがらの ピン",slot_glasses:"めがね",glasses_none:"なし",glasses_sunglasses:"サングラス",glasses_round:"まるめがね",glasses_heart:"ハートめがね",glasses_star:"ほしめがね",slot_neck:"ネックレス",top_ballet:"バレエの チュチュ",top_stripes:"しましまの ふく",top_dots:"みずたま",top_strawberry:"いちごの ふく",top_starry:"ほしぞら",top_rainbow:"にじいろの ふく",top_princess:"プリンセスドレス",top_football:"サッカーの ユニフォーム",top_fish:"クマノミの ふく",top_turtle:"カメの ふく",top_hoodie:"パーカー",top_hawaii:"アロハシャツ",top_tuxedo:"タキシード",top_hero:"スーパーヒーロー",tail_candyfloss:"わたあめ",tail_ruby:"ルビー",tail_mint:"ミント",tail_ice:"こおり",tail_candy:"キャンディ",tail_koi:"にしきごい",tail_shark:"サメ",tail_peacock:"クジャク",tail_strawberry:"いちご",tail_leopard:"ヒョウがら",tail_sakura:"さくら",tail_aurora:"オーロラ",tail_lava:"ようがん",hairStyle_braid:"みつあみ",hairStyle_spaceBuns:"ふたつ おだんご",hairStyle_curly:"くるくるヘア",hairStyle_sidePony:"サイドポニー",hairStyle_bob:"ボブ",hairStyle_mohawk:"モヒカン",hairColor_red:"あか",hairColor_orange:"オレンジ",hairColor_teal:"あおみどり",hairColor_lilac:"うすむらさき",accessory_bunnyEars:"うさぎの みみ",accessory_bearEars:"くまの みみ",accessory_witchHat:"まじょの ぼうし",accessory_strawHat:"むぎわらぼうし",accessory_beret:"ベレーぼう",accessory_butterfly:"ちょうちょの ピン",accessory_starfish:"ヒトデの ピン",accessory_headphones:"ヘッドホン",accessory_partyHat:"パーティーぼうし",accessory_shellCrown:"かいがらの おうかん",accessory_chefHat:"コックぼうし",accessory_cherry:"さくらんぼの ピン",accessory_crabHat:"カニの ぼうし",glasses_snorkel:"シュノーケル",glasses_cat:"ねこめがね",glasses_threeD:"3Dめがね",neck_none:"なし",neck_pearls:"しんじゅの ネックレス",neck_shells:"かいがらの ネックレス",neck_lei:"はなの レイ",neck_bowTie:"ちょうネクタイ",neck_scarf:"マフラー",neck_locket:"ハートの ネックレス",neck_medal:"きんメダル",neck_bandana:"バンダナ",top_stage:"ステージジャケット",top_purpleHeart:"むらさきハートの ふく",top_idolSuit:"しろい ステージスーツ",tail_stage:"ステージの キラキラ",accessory_mic:"アイドルマイク",neck_chain:"キラキラ チェーン",accessory_cap:"キャップ",accessory_catEars:"ねこの みみ",accessory_flowers:"はなかんむり",accessory_pirate:"かいぞくの ぼうし",accessory_tiara:"しんじゅの ティアラ",accessory_halo:"てんしの わ",accessory_unicorn:"ユニコーンの つの",accessory_sharkHat:"サメの ぼうし",accessory_jellyHat:"クラゲの ぼうし",accessory_orchid:"ランの はな",accessory_daenggi:"テンギ（リボン）",tradDress:"いった くにの ふく",dress_kebaya:"クバヤ：はなの ししゅうの ブラウス。シンガポールや となりの くにで きるよ。プラナカンの おんなのひとは 3つの きんの ブローチで とめるよ。",dress_batik:"バティック：あつい ロウで もようを かいてから そめるよ。バティックの サロンは スカートみたいに まくんだ。",dress_orchid:"シンガポールの くにの はなは「バンダ・ミス・ジョアキム」という ランだよ。",dress_hanbok:"ハンボク：かんこくの むかしからの ふく。うえは チョゴリ、コルムという リボンで むすぶよ。にじいろの そでは セクトンって いうよ。",dress_chima:"チマ：ハンボクの ながくて ふわっとした スカート。きいろの チョゴリに あかい チマが おなじみだよ。",dress_daenggi:"テンギ：ながい みつあみの さきに むすぶ リボン。むかし かんこくの おんなのこは あかい テンギを つけたよ。",mysteryBox:"ミステリーボックス",mysteryTap:"はこを タップして あけよう！",mysteryNew:"あたらしい アイテム！",wearIt:"きてみる！",later:"あとで",mysteryOnly:"ミステリーボックスか プレゼントから でるよ",mysteryAll:"ミステリーアイテムを ぜんぶ みつけたね！",surprise:"サプライズ プレゼント！",giftAppeared:"ロボットが プレゼントを おいていったよ！ 🎁",giftCoins:"プレゼントに かいがら コインが はいってた！",newLook:"かわいい！",boss0:"なに？！ ぜんぶ きれいに しただと？！",crab1:"やさしい チリクラブを ロボットに したぞ！ チョキチョキ！",crab2:"もう わしの いうことしか きかないぞ！ ハハハ！",crab3:"あかい しるし みえる？ あそこに ハサミが おりてくるよ。にげよう！",crab4:"ハサミが ささったら、せなかの ぴかぴか はこに ドン！",crabHint:"あかい ところから にげて！ はこが ひかったら うずまき ボタンを なんども おしてね！ 🦀",crabRound2:"からい ソース！ あかい くもから にげて！ 🌶️",crabRound3:"こんどは ハサミが ふたつ！ あかい しるしを みて！ 🦀🦀",crabSauce:"ハクション！ からーい！ 🌶️",crabWin:"ロボットの からが とれた！ やさしい カニが もどったよ！ 🦀💚",octo1:"やさしい タコを ロボットに したぞ！",octo2:"あし 8ぽん ぜんぶ！ もう わしの いうことしか きかないぞ！",octo3:"あかい しるし みえる？ あそこに あしが おりてくるよ。にげよう！",octo4:"あしが つかれたら、ぴかぴかの わっかに ドン！ 8ぽん ぜんぶ たすけよう！",octoHint:"あかい ところから にげて！ わっかが ひかったら うずまき ボタンを なんども おしてね！ 🐙",octoRound2:"スミだ！ くろい くもから にげて！ 🖤",octoRound3:"おいかけてくるよ！ あと 2ほん！ 🐙",octoInk:"スミだ！ まっくら！ 🖤",octoWin:"ロボットの よろいが とれた！ やさしい タコが てを ふってるよ！ 🐙💚",ele1:"やさしい ゾウを ロボットに したぞ！",ele2:"せなかに わしの はこが あるぞ。はしれ、ゾウ！",ele3:"あかい みち みえる？ あそこを はしってくるよ。よけよう！",ele4:"そのあと めが まわるよ。せなかの ぴかぴか はこに ドン！",eleHint:"あかい みちから よけて！ はこが ひかったら うずまき ボタンを なんども おしてね！ 🐘",eleRound2:"みずを ふいたよ！ みずの くもから にげて！ 💦",eleRound3:"こんどは 2かい はしるよ！ きをつけて！ 🐘",eleSplash:"バシャーン！ 💦",eleWin:"ロボットの よろいが とれた！ やさしい ゾウが うれしそう！ 🐘💚",devilFlee:"ぐぬぬ！ おぼえてろ！",ingredientHint:"きんいろの ひかりを おいかけよう！✨",ingredientAppeared:"みて、きんいろの ひかり！ いってみよう ✨",ingredient_seagrape:"うみぶどう",ingredient_pearl:"シャコガイの しんじゅ",ingredient_rainbowCoral:"にじいろ サンゴ",ingredient_kelp:"コンブ",ingredient_camellia:"ツバキの はな",ingredient_feather:"カモメの はね",got_kelp:"コンブを みつけたよ！ さかなは コンブの もりに すんでるよ。",got_camellia:"ツバキを みつけたよ！ プサンの はなだよ。",got_feather:"カモメの はね！ カモメは プサンの とりだよ。",got_seagrape:"うみぶどうを みつけたよ！ かいそうの なかまだよ。",got_pearl:"しんじゅを みつけたよ！ ここには おおきな シャコガイが すんでるよ。",got_rainbowCoral:"にじいろの サンゴ！ げんきな サンゴは いろが いっぱい。",lab:"くすりの けんきゅうじょ",tempPotion:"ちょっとだけ くすり",tempPotionSub:"ざいりょう 1つで、すこしの あいだ にんげんに もどれる！",noIngredients:"さきに きんいろの ひかりを さがしてね！",stirIt:"なべを タップして まぜよう！",drink:"のむ！",alreadyHuman:"いまは にんげんだよ！",antidote:"ほんものの げどくざい",antidoteSub:"すべての うみの ざいりょうを あつめると、ずっと にんげんに もどれる！",humanStart:"にんげんに もどった！ ちょっとの あいだだけ。",humanEnd:"あっ！ また にんぎょに もどったよ。",missionIngredients:"きんいろの ひかりを おう",missionRescue:"うみの どうぶつを たすける",missionRecycle:"ふくろを リサイクル",bagFull:"ふくろが いっぱい！ リサイクルに いこう ♻️",recycle:"ふくろを リサイクルに もっていこう ♻️",rescue:"そばに いると たすけられるよ！",escort:"クマノミを おうちに つれていこう！ ひかりの ほうへ およごう！ 🏠",escortOctopus:"タコの あかちゃんを おうちに つれていこう！ ひかりの ほうへ およごう！ 🏠",findShell:"ヤドカリが かんに すんでるよ。ひかりの ところで かいがらを さがして あげて！",bringShell:"かいがらを ヤドカリに あげてね！",animalsLeft:"たすけを まっている どうぶつが まだ いるよ！ 💗",recycleTitle:"リサイクルコーナー",bin_machine:"ボトルと かん",bin_blue:"ビニールぶくろ",bin_nets:"ふるい あみ",refund:"もどってくる おかね",recycleIntro_busan:"かんこくでは ボトルや かんを きかいに いれると ポイントが もらえるよ！",recycleIntro:"シンガポールでは ボトルを きかいに いれると 10セント もらえるよ！",recycleDone:"ぜんぶ できた！ すごいね！",recycleFact_machine:"ふるい ボトルは あたらしい ボトルや Tシャツにも なるよ！",recycleFact_can:"リサイクルした かんは 60にちくらいで あたらしい かんに なって おみせに もどるよ！",recycleFact_nets:"ふるい あみは みずぎや じゅうたんに なるよ！",keepSwimming:"およぎつづける",totalRefund:"もどってきた おかねの ごうけい",album:"たすけた どうぶつの ずかん",albumSub:"きみが たすけた うみの どうぶつ",notYet:"まだ あってないよ",animal_turtle:"ウミガメ",animal_fish:"あおい さかな",animal_seahorse:"タツノオトシゴ",animal_clownfish:"クマノミ",animal_crab:"ヤドカリ",animal_octopus:"タコの あかちゃん",rescued_octopus:"タコの あかちゃんが おうちに かえったよ！ タコは いろを かえられるよ。",rescued_turtle:"ウミガメを たすけたよ！ シンガポールの はまで たまごを うむよ。",rescued_fish:"さかなを たすけたよ！ ビニールぶくろに さかなが つかまることが あるよ。",rescued_seahorse:"タツノオトシゴを たすけたよ！ パパが あかちゃんを はこぶんだ。",rescued_clownfish:"クマノミが おうちに かえったよ！ イソギンチャクに かくれるんだ。",rescued_crab:"ヤドカリに あたらしい おうちが できたよ！",safetyCards:"うみの あんぜん カード",secretFriends:"ひみつの ともだち",secretHint:"だれかが どこかに かくれてる…",secretFound:"ひみつの ともだちを みつけたよ！",comeAlong:"いっしょに いこう！",danger_crocodile:"イリエワニ",danger_boxJelly:"ハコクラゲ",danger_lionfish:"ミノカサゴ",danger_stonefish:"オニダルマオコゼ",dangerFact_crocodile:"いちばん おおきな はちゅうるいで、うみでも およげるよ。2026ねんに セントーサの ビーチに きたことが あるよ。みつけたら うみから でて、とおくに はなれてね。",dangerFact_boxJelly:"しかくくて すきとおった クラゲで、ながい しょくしゅが あるよ。2026ねんに セントーサの ちかくで あたらしい しゅるいが みつかったよ。さされたら おとなに いって、おすを かけてね。",dangerFact_lionfish:"きれいな しまもようと うちわみたいな ひれ。でも とげに どくが あるよ。めで みるだけね！",dangerFact_stonefish:"うみの そこの いしに そっくりで、とげに どくが あるよ。マリンシューズを はいて、うみの いわは ふまないでね。",dangerSeen_boxJelly:"ハコクラゲ！ よけて およいでね。",dangerSeen_lionfish:"ミノカサゴ！ きれいだけど ささるよ。みるだけね！",dangerSeen_stonefish:"あの いし、めが ある！ オニダルマオコゼだよ。うえを およいでね！",dangerHit_crocodile:"ドン！ ワニだ！ はやく およいで！",dangerHit_boxJelly:"いたっ！ ほんとうに さされたら おとなを よんでね。",dangerHit_lionfish:"いたっ、とげ！ みるだけ、さわらないでね。",dangerHit_stonefish:"いたっ！ いしみたいだったね。",spilled:"あっ、ゴミが おちちゃった。ひろってね！",coming_crocodile:"ワニだ！ にげて！",escaped_crocodile:"ふう！ にげられたね！",danger_mako:"アオザメ",danger_nomura:"エチゼンクラゲ",danger_blueRing:"ヒョウモンダコ",danger_stingray:"アカエイ",dangerFact_mako:"せかいで いちばん はやい サメの ひとつ。かんこくの うみに くることも あるよ。ライフガードが「サメだ！」と いったら、おちついて はやく うみから でてね。",dangerFact_nomura:"せかいで いちばん おおきな クラゲの ひとつ。おとなの せより はばが ひろいよ！ なつに かんこくに ながれてくるので、ヘウンデには クラゲよけの あみが あるよ。すなの うえで しんでいても さされるよ。",dangerFact_blueRing:"ちいさくて かわいいけど、うみで いちばん どくが つよい いきものの ひとつ。いまは プサンの いそにも いるよ。ちいさくても タコは ぜったいに てで もたないでね。",dangerFact_stingray:"すなの なかに ぺたんと かくれていて、しっぽに どくの とげが あるよ。あさい ところでは あしを すって あるくと、エイが さきに にげていくよ。",dangerSeen_nomura:"おおきな クラゲ！ とおくに はなれてね。",dangerSeen_blueRing:"あおい わっかの ちいさな タコ！ さわらないで！",dangerSeen_stingray:"エイだ！ しっぽが ささるよ。うえを およいでね！",dangerHit_mako:"ビュン！ サメだ！ しっぽを ふって はやく！",dangerHit_nomura:"いたっ、クラゲ！ ほんとうなら おとなに いってね。",dangerHit_blueRing:"あっ！ ほんものは ぜったい さわらないでね。",dangerHit_stingray:"いたっ、エイの しっぽ！",coming_mako:"サメだ！ にげて！",escaped_mako:"ふう！ にげられたね！",newSafetyCard:"ほんに あたらしい カードが はいったよ！",friend_porpoise:"スナメリの かぞく",pet_porpoise:"スナメリ",power_porpoise:"ソナー：カチカチ おとで いちばん ちかい ゴミを さがすよ",friendFact_porpoise:"かんこくの にっこり スナメリは せなかに ひれが ないよ。プサンの うみに かぞくで すんでいて、きれいな みずと すくない ぎょもうが ひつようなんだ。",friend_otter:"カワウソの かぞく",pet_otter:"カワウソ",power_otter:"とってこい：ちかくの ゴミを もってきてくれるよ",friendFact_otter:"ビロードカワウソは マリーナベイや マーライオンの まわりで あそんでいるよ。シンガポールの かわが きれいに なって、もどってきたんだ！",end0:"デビル・サイエンスが にげた。てがみが ひらひら おちてきたよ。",end1:"つぎの ざいりょうは かんこくの プサンに あるって！",end2:"プサン？ すごく とおいよ！",end3:"そのとき、おおきくて やさしい ジンベエザメが きたよ！",end4:"みんなで てを ふるよ。ありがとう、{a}と {b}！",end5:"ジンベエザメさん、プサンに つれていって くれる？",end6:"シンガポールの うみが きれいに なった！ つぎは プサン 🇰🇷",nextOcean_busan:"つぎの うみ：かんこく プサン ヘウンデ 🇰🇷",login:"ログイン",logout:"ログアウト",saveNow:"いま セーブ",saving:"セーブちゅう…",savedNow:"セーブしたよ！",saveFailed:"インターネットが ないよ。もういちど",floatTrash:"みずの うえに ゴミが あるよ！ ⬆ を おして！",floatFollow:"やじるしに ついていって ゴミを ひろおう。けしきも みてね！",petHide:"おうちで まってて",petShow:"いっしょに いこう",petHome:"ペットは おうちで やすんでるよ。タッチすると もどってくるよ！",petBack:"ペットが もどってきたよ！",autoSaved:"じどうで セーブしたよ！",saveLater:"いま インターネットが ないよ。つながったら セーブするよ。",statIngredients:"くすりの ざいりょう",statSeas:"うみ",statCoins:"コイン",statPets:"ペット",statRescued:"たすけた ともだち",deleteAccount:"アカウントを けす",deleteWarn:"この プレイヤーと オンラインの セーブを ぜんぶ けすよ：コイン、ふく、ペット、うみ。もとに もどせないよ。",deletePin:"けすには、4まいの ひみつの えを もういちど おしてね。",keepAccount:"アカウントを のこす",accountDeleted:"アカウントを けしたよ。バイバイ！",whoAreYou:"おなまえは？",namePlaceholder:"なまえ",pickPin:"4まいの ひみつの えを おしてね",pinHelp:"おぼえておいてね：どの iPadでも ゲームが ひらけるよ。",newPlayer:"はじめて？ この なまえで あたらしく はじめる？",yesNew:"うん、あたらしい プレイヤー",tryAgain:"もういちど",wrongPin:"えが ちがうよ。もういちど！",busy:"ためしすぎたよ。すこし やすんでから もういちど。",offline:"インターネットに つながらないよ。Wi-Fiを みてね。",hello:"やあ",savedOnline:"ゲームは オンラインに セーブされたよ。どの iPadでも あそべるよ。",coop:"いっしょに あそぶ",makeRoom:"へやを つくる",joinRoom:"へやに はいる",tellFriend:"ともだちに この 3まいの えを みせてね（4にんまで あそべるよ）",waitingFriend:"ともだちを まってるよ…",friendIn:"が きたよ！",pickRoom:"へやの えを 3まい おしてね",noRoom:"その えの へやは ないよ。",roomFull:"その へやは いっぱいだよ。",joined:"はいれたよ！ ともだちが「あそぶ」を おすと はじまるよ。",waitHost:"ともだちが ゲームを はじめるよ",friendLeft:"ともだちが ぬけたよ。およぎつづけよう！",leaveRoom:"へやを でる",needLogin:"いっしょに あそぶには さきに ログインしてね",together:"いっしょ",danger_triggerfish:"ゴマモンガラ",danger_seaKrait:"アオマダラウミヘビ",danger_crownThorns:"オニヒトデ",danger_moray:"ドクウツボ",dangerFact_triggerfish:"じょうぶな まえばの おおきな さかな。すなの うえの すを まもっていて、ちかづくと おいかけてくるよ。まもる ばしょは さかさまの とんがりぼうしの かたち。だから うえじゃなくて よこに にげてね！",dangerFact_seaKrait:"くろと あおはいいろの しまもようの ウミヘビ。どくは とても つよいけど、おとなしくて こわがりだよ。ぜったい さわらないで。じっとして とおりすぎるのを まってね。",dangerFact_crownThorns:"するどい どくの とげが いっぱいの おおきな ヒトデ。サンゴを たべるので、ふえすぎると サンゴしょうが こまるんだ。ぜったい さわらないで。たくさん いたら おとなや ダイビングの ガイドさんに おしえてね。",dangerFact_moray:"ウツボは いわの あなに かくれて、くちを あけたり しめたりして いきを してるよ。こわがりだけど、かむ ちからは つよいよ。サンゴしょうの あなに てを いれないでね！",dangerSeen_seaKrait:"しまもようの ウミヘビ！ とおらせて あげてね。",dangerSeen_crownThorns:"とげとげの ヒトデ！ さわらないで。",dangerSeen_moray:"だれかが のぞいてる！ ウツボだよ。あなから はなれてね。",dangerHit_triggerfish:"ガブッ！ よこに にげて！",dangerHit_seaKrait:"あっ！ ほんものの ウミヘビは ぜったい さわらないでね。",dangerHit_crownThorns:"いたっ、とげ！ みるだけね。",dangerHit_moray:"パクッ！ あなに てを いれないでね。",coming_triggerfish:"おおきな ゴマモンガラ！ よこに にげて！",escaped_triggerfish:"ふう！ にげられたね！",friend_dugong:"ジュゴンの かぞく",pet_dugong:"ジュゴン",power_dugong:"やさしい ハグ：いきものに ぶつかっても、ふくろの ゴミが おちないよ",friendFact_dugong:"ジュゴンは やさしい「うみの うし」。まきばの うしみたいに うみくさを たべるよ。アンダマン・ニコバル しょとうの シンボルの どうぶつなんだ。すこししか いないから、きれいな うみくさと しずかな ふねが ひつようだよ。",radhanagar:"ラダナガル ビーチ",elephantBeach:"エレファント ビーチ",barrenIsland:"バレン島 かざん",lighthouseAndaman:"ノースベイ とうだい",havelock:"ハヴロック島",havelockJetty:"ハヴロック さんばし",andaman:"アンダマン",andamanIndia:"インド・アンダマン",andamanTab:"インド",india:"インド",portBlair:"ポートブレア",andamanSea:"アンダマン海",place_andaman:"インド アンダマン ハヴロック島",surfaceHello_andaman:"みて！ ビーチと かざんだよ！",recycleIntro_andaman:"インドでは「カバディワラ」が ふるい ボトルや かんを かってくれるよ！",go_andaman:"インドへ いく",nextOcean_andaman:"つぎの うみ：インド アンダマン しょとう 🇮🇳",ingredient_lotus:"ハスの はな",ingredient_peacock:"クジャクの はね",ingredient_conch:"ほらがい",got_lotus:"ハスの はな！ インドの はなだよ。",got_peacock:"クジャクの はね！ クジャクは インドの とりだよ。",got_conch:"ほらがい！ インドでは ラッパみたいに ふくよ。",astory0:"ジンベエザメが {a}と {b}を インドに つれてきたよ。",astory1:"ありがとう、ジンベエザメさん！ みずが すきとおってる！",astory2:"みて！ しろい すなと サンゴが いっぱい！",astory3:"でも むらさきの せんすいかんが いた…",astory4:"ワハハ！ ここにも ゴミを すてたぞ！",astory5:"わしの ロボットは はやいぞ！ ワハハ！",astory6:"また ロボットだ！ おそうじ しよう！",astory7:"ここには ゴマモンガラが いるよ。おいかけてきたら よこに にげよう！",aend0:"デビル・サイエンスが また てがみを おとしたよ。",aend1:"ハス、はね、かい… もうすこし！",aend2:"ありがとう、うみの ともだち！ バイバイ、インド！",aend3:"ジンベエザメが また むかえに きたよ。",aend4:"うみが きれいに なった！ あたらしい くにが もうすぐ くるよ！ 🌏",top_saree:"サリーの ブラウス",tail_lehenga:"レンガの スカート",accessory_tikka:"マーン ティッカ",dress_saree:"サリー：とっても ながい 1まいの ぬの。5〜9メートルも あるよ！ からだに まいて、かたに かけるよ。",dress_lehenga:"レンガ：くるくる ひろがる インドの ながい スカート。きんの ししゅうや ちいさな かがみが ついていることが おおいよ。けっこんしきや おまつりで きるよ。",dress_tikka:"マーン ティッカ：かみの わけめに そって くさりで おでこに さげる ほうせき。インドの はなよめさんが よく つけるよ。",house:"にんぎょの おうち",houseOf:"{n}の おうち",houseExit:"うみに もどる",houseWall:"かべ",houseFloor:"ゆか",houseFriend:"ともだちの",houseMine:"わたしの おうち",houseTurn:"まわす",houseAway:"しまう",houseNeedMore:"もっと ゴミを リサイクルすると つくれるよ！",houseFull:"もう おけないよ！ さきに なにか しまってね。",houseVisitors:"たすけた どうぶつたちが あそびに きたよ！",houseNoVisitors:"うみで どうぶつを たすけると、あそびに きてくれるよ！",houseFact_bottle:"ボトルから できたよ！ ふるい ペットボトルは やわらかい ぬのや もうふ、クッションの なかみに なるよ。",houseFact_can:"かんから できたよ！ リサイクルした かんは 60にちくらいで あたらしい ものに なるよ。なんかいでも！",houseFact_bag:"ビニールぶくろから できたよ！ ベンチや うえきばちの プラスチックの いたに なるよ。",houseFact_net:"ふるい ぎょもうから できたよ！ ほんものの あみは カーペットや みずぎに なるよ。",furn_shellBed:"かいの ベッド",furn_sofa:"サンゴの ソファ",furn_table:"ぴかぴか テーブル",furn_stool:"かんの いす",furn_jellyLamp:"クラゲの ランプ",furn_netRug:"あみの ラグ",furn_hammock:"ハンモック",furn_shelf:"たな",furn_coralPot:"サンゴの はちうえ",furn_anemone:"イソギンチャク",furn_mirror:"かいの かがみ",furn_chest:"たからばこ",furn_slide:"すべりだい",furn_kopitiam:"コピティアムの テーブル",furnFact_kopitiam:"シンガポールでは コピティアムで あさごはん。カヤトーストと コピ（コーヒー）！",furn_orchid:"ラン",furnFact_orchid:"バンダ・ミス・ジョアキムという ランが シンガポールの くにの はなだよ。",furn_merlion:"ミニ マーライオン",furnFact_merlion:"マーライオンは ライオンの あたまと さかなの しっぽ。シンガポールの ゆうめいな ぞうだよ！",furn_soban:"ソバン",furnFact_soban:"かんこくでは ごはんが「ソバン」という ひくい ちいさな テーブルで でてきて、みんな ゆかに すわるよ。",furn_onggi:"オンギの つぼ",furnFact_onggi:"かんこくの かぞくは キムチや しょうゆを おおきな つちの つぼ「オンギ」に いれておくよ。",furn_byeongpung:"びょうぶ",furnFact_byeongpung:"ピョンプンは むかしの かんこくの いえに ある、えの かいた びょうぶだよ。",furn_charpai:"チャルパイ ベッド",furnFact_charpai:"インドの チャルパイは ロープを あんだ ベッド。あつい ひも すずしいよ！",furn_diya:"しんちゅうの ランプ",furnFact_diya:"インドでは ひかりの おまつり ディワリで、ディヤという ちいさな ランプが ひかるよ。",furn_rangoli:"ランゴリ",furnFact_rangoli:"インドの ランゴリは ドアの まえの ゆかに かく カラフルな もよう。「ようこそ」って いみだよ！",furn_bubbler:"あわの マシン",housePlace:"おきたい ところを タッチしてね！",houseVisit:"ともだちの おうちに いく",houseLogin:"ログインすると ともだちの おうちに いけるよ！",houseNoFriends:"ともだちと いっしょに あそぶと、その おうちに いけるよ！",houseFriendAway:"その おうちに いけなかったよ。あとで もういちど！"},Vf=["en","ko","zh","fr","ja"];function lo(i){return typeof i=="string"&&Vf.includes(i)}function co(){const e=(typeof navigator>"u"?"":(navigator.language||"").toLowerCase()).slice(0,2);return lo(e)?e:"en"}const uo={title1:"Daisy",title2:"Coral",subtitle:"Mermaids of the Reef",place:"Sisters' Islands, Singapore",choose:"Who will you play?",daisy:"Daisy",coral:"Coral",leo:"Leo",friendPick:"Swimming with",play:"Play",holdToSwim:"Touch and hold to swim!",clean:"Clean reef",complete:"The reef is clean!",completeSub:"The fish say thank you!",coinsEarned:"Shell coins",nextTime:"More oceans are coming soon...",playAgain:"Play again",menu:"Menu",language:"Language",sound:"Sound",replay:"Say it again",voice:"Voice",on:"On",off:"Off",restart:"Start over",resume:"Keep playing",untangle:"Stay close and the net comes off!",fact_bottle:"A bottle can stay in the sea for 450 years!",fact_can:"Old cans can become new cans!",fact_bag:"Turtles can think a plastic bag is a jellyfish.",fact_net:"Old nets in the sea are ghost nets. Animals get stuck.",devil:"Devil Science",narrator:"Story",next:"Next",skip:"Skip",story0:"{a} and {b} love to swim in the sea in Singapore.",story1:"One day, a purple submarine came...",story2:"Mwahaha! I am Devil Science!",story3:"Look! So much trash in the sea!",story4:"You two clean it up! Drink my potion!",story5:"Oh! My legs are a tail now!",story6:"We're mermaids! How do we change back?",story7:"Clean the sea and find the antidote. Then you can be people again! Mwahaha!",story8:"Look! The robots are throwing trash!",story9:"Let's fix the robots and clean up!",mission:"Mission",missionClean:"Pick up trash",missionRobots:"Fix the robots",missionMap:"Look at the map",missionStars:"Be quick for 3 stars!",start:"Start!",watchStory:"Watch the story",fixRobot:"Stay close and the robot gets fixed!",robotFixed:"Robot fixed! Now it helps.",robotsLeft:"Fix the robots too!",time:"Time",map:"Map",worldTab:"World",singaporeTab:"Singapore",busanTab:"Busan",moreOceans:"Next ocean",youAreHere:"You are here",dragToSpin:"Drag to spin the Earth",singapore:"Singapore",malaysia:"Malaysia",indonesia:"Indonesia",sentosa:"Sentosa",marinaBay:"Marina Bay",sistersIslands:"Sisters' Islands",mbs:"Marina Bay Sands",merlion:"Merlion",flyer:"Singapore Flyer",stJohns:"St John's Island",oceanReef:"Great Barrier Reef",oceanHawaii:"Hawaii",oceanCaribbean:"Caribbean Sea",oceanMed:"Mediterranean Sea",oceanArctic:"Arctic Ocean",oceanBali:"Bali",oceanOkinawa:"Okinawa",wishHint:"Tap 🔜 where you want to go",wishAsk:"Want to go here?",wishThanks:"Thank you! We'll remember you want to go here.",parentCorner:"Grown-ups",parentHold:"For grown-ups: press and hold for 3 seconds.",parentHoldBtn:"Hold to open",parentIntro:"Tell us what your family would like next: new oceans, new sea friends, anything that was hard. Kids can also tap the 🔜 oceans on the globe to vote.",feedbackSend:"Send feedback",feedbackRate:"Rate the app",feedbackHelp:"Help & support",feedbackPrivacy:"Privacy policy",feedbackMailBody:"Your idea or problem (which ocean, what happened):",surfaceUp:"Up",diveDown:"Dive",flick:"Swish!",whirl:"Whirlpool",bang:"BANG!",ting:"Ping!",emptyBag:"Let's empty it!",surfaceHello:"Look! That's Singapore!",place_busan:"Haeundae, Busan, Korea",haeundae:"Haeundae",busan:"Busan",korea:"Korea",dongbaek:"Dongbaek Island",hwangok:"Mermaid Statue",marineCity:"Marine City",lct:"LCT Tower",gwangan:"Gwangan Bridge",skyCapsule:"Sky Capsule",oryukdo:"Oryukdo",surfaceHello_busan:"Look! That's Busan!",chooseOcean:"Which sea?",go_busan:"Go to Busan",allOceansDone:"You saved all three oceans! 🎉",pickNextOcean:"Where next? ⭐ = a sea your team hasn't saved yet!",hostPicksOcean:"The friend who made the room picks the sea.",newAccountMade:"A brand-new game is ready for you!",welcomeBack:"Welcome back",oldAccount:"This is the game you made before. Everything you saved is back!",nameTakenPin:"This name is already someone's game. Tap the 4 pictures you picked back then!",houseSwimHint:"Tap the floor and your mermaid swims there. Tap the slide to ride it!",soloIntro_singapore:"{a} loves to swim in the sea in Singapore.",soloIntro_busan:"{a} loves to swim at Haeundae, in Busan, Korea.",soloIntro_andaman:"{a} loves to swim in the Andaman Sea, in India.",teamIntro_busan:"{a} and {b} love to swim at Haeundae, in Busan, Korea.",teamIntro_andaman:"{a} and {b} love to swim in the Andaman Sea, in India.",soloStory4:"You clean it up! Drink my potion!",soloStory6:"I'm a mermaid! How do I change back?",sisterHome:"I'm a mermaid too! I'll wait for you at our mermaid house. You can do it!",soloStory9:"I'll fix the robots and clean up the sea!",sgAgain0:"The whale shark took {a} to Singapore.",sgAgain0team:"The whale shark took {a} and {b} to Singapore.",sgAgain1:"Thank you, whale shark! Look, the Merlion!",sgAgain2:"Look! A horseshoe crab! They're older than the dinosaurs!",sgAgain7:"Watch out for the crocodile. Let's go!",bstory0solo:"The whale shark took {a} to Busan in Korea.",astory0solo:"The whale shark took {a} to India.",astory6solo:"Robots again! I'll clean it all up!",sgBye:"Thank you, Singapore friends!",endNext:"The next ingredient is in a sea we haven't been to yet!",endThanks:"Everyone waved. Thank you, {a}!",rideAsk:"Whale shark, can you take us to the next sea?",cleanDone_singapore:"Singapore's sea is clean! 🎉",cleanDone_busan:"Busan's sea is clean! 🎉",cleanDone_andaman:"India's sea is clean! 🎉",friendRecycled:"A friend recycled! You got the pieces for your house too.",roomLeft:"You left the room. Keep playing on your own!",nextCountrySoon:"New countries are coming in an update. Which sea will it be? Stay tuned! 🌏",soonOcean:"Coming soon",bstory0:"The whale shark took {a} and {b} to Busan in Korea.",bstory1:"Thank you, whale shark! The water is cool here!",bstory2:"Look! Seaweed forests! And starfish!",bstory3:"Oh no. The purple submarine again...",bstory4:"Mwahaha! I put trash in this sea too!",bstory5:"Want the next antidote? Clean this sea! Mwahaha!",bstory6:"The robots are throwing trash again!",bstory7:"Watch out for sharks and big jellyfish. Let's go!",bend0:"Devil Science dropped a note.",bend1:"The next antidote is in India!",bend2:"Let's go! Thank you, Busan friends!",bend3:"The whale shark came back for them.",bend4:"Busan's sea is clean! Next: India 🇮🇳",pets:"Pets",petShop:"Pet Shop",petShopSub:"Every pet gives you a new power!",buy:"Buy",needMore:"Need more shells",close:"Close",newPet:"A new friend swims with you!",pet_seahorse:"Seahorse",pet_dolphin:"Dolphin",pet_jellyfish:"Jellyfish",pet_turtle:"Sea Turtle",power_seahorse:"Magnet: pulls trash to you",power_dolphin:"Swim super fast",power_jellyfish:"Zap: stops robots so you can fix them",power_turtle:"Shield: robots can't drop trash near you",shieldBlock:"Shield! No trash here!",wardrobe:"Dress up",done:"Done",slot_top:"Top",slot_tail:"Tail",slot_hairStyle:"Hair",slot_hairColor:"Hair color",slot_accessory:"Clip",top_own:"My top",top_shell:"Shell top",top_sailor:"Sailor top",top_heart:"Heart top",top_sparkle:"Sparkle top",top_kebaya:"Kebaya",top_hanbok:"Hanbok jeogori",tail_own:"My tail",tail_ocean:"Ocean",tail_emerald:"Emerald",tail_purple:"Purple",tail_sunset:"Sunset",tail_silver:"Silver",tail_rainbow:"Rainbow",tail_gold:"Gold",tail_galaxy:"Galaxy",tail_batik:"Batik sarong",tail_chima:"Hanbok chima",hairStyle_bun:"Bun",hairStyle_ponytail:"Ponytail",hairStyle_twin:"Pigtails",hairStyle_long:"Long hair",hairStyle_short:"Short hair",hairStyle_spiky:"Spiky hair",hairColor_brown:"Brown",hairColor_pink:"Pink",hairColor_blonde:"Blonde",hairColor_black:"Black",hairColor_blue:"Blue",hairColor_purple:"Purple",hairColor_mint:"Mint",hairColor_silver:"Silver",accessory_daisy:"Daisy",accessory_star:"Star clip",accessory_goggles:"Goggles",accessory_none:"Nothing",accessory_bow:"Bow",accessory_crown:"Crown",accessory_shell:"Shell clip",slot_glasses:"Glasses",glasses_none:"Nothing",glasses_sunglasses:"Sunglasses",glasses_round:"Round glasses",glasses_heart:"Heart glasses",glasses_star:"Star glasses",slot_neck:"Necklace",top_ballet:"Ballet tutu",top_stripes:"Stripy top",top_dots:"Polka dots",top_strawberry:"Strawberry top",top_starry:"Starry night",top_rainbow:"Rainbow top",top_princess:"Princess dress",top_football:"Football shirt",top_fish:"Clownfish top",top_turtle:"Turtle top",top_hoodie:"Hoodie",top_hawaii:"Hawaiian shirt",top_tuxedo:"Tuxedo",top_hero:"Superhero",tail_candyfloss:"Candyfloss",tail_ruby:"Ruby",tail_mint:"Mint",tail_ice:"Ice",tail_candy:"Candy stripes",tail_koi:"Koi",tail_shark:"Shark",tail_peacock:"Peacock",tail_strawberry:"Strawberry",tail_leopard:"Leopard",tail_sakura:"Cherry blossom",tail_aurora:"Aurora",tail_lava:"Lava",hairStyle_braid:"Braid",hairStyle_spaceBuns:"Space buns",hairStyle_curly:"Curly",hairStyle_sidePony:"Side ponytail",hairStyle_bob:"Bob",hairStyle_mohawk:"Mohawk",hairColor_red:"Red",hairColor_orange:"Orange",hairColor_teal:"Teal",hairColor_lilac:"Lilac",accessory_bunnyEars:"Bunny ears",accessory_bearEars:"Teddy ears",accessory_witchHat:"Witch hat",accessory_strawHat:"Straw hat",accessory_beret:"Beret",accessory_butterfly:"Butterfly clip",accessory_starfish:"Starfish clip",accessory_headphones:"Headphones",accessory_partyHat:"Party hat",accessory_shellCrown:"Shell crown",accessory_chefHat:"Chef hat",accessory_cherry:"Cherry clip",accessory_crabHat:"Crab hat",glasses_snorkel:"Snorkel mask",glasses_cat:"Cat-eye glasses",glasses_threeD:"3D glasses",neck_none:"Nothing",neck_pearls:"Pearl necklace",neck_shells:"Shell necklace",neck_lei:"Flower lei",neck_bowTie:"Bow tie",neck_scarf:"Scarf",neck_locket:"Heart locket",neck_medal:"Gold medal",neck_bandana:"Bandana",top_stage:"Stage jacket",top_purpleHeart:"Purple heart top",top_idolSuit:"White stage suit",tail_stage:"Stage sparkle",accessory_mic:"Pop star mic",neck_chain:"Sparkly chain",accessory_cap:"Cap",accessory_catEars:"Cat ears",accessory_flowers:"Flower crown",accessory_pirate:"Pirate hat",accessory_tiara:"Pearl tiara",accessory_halo:"Halo",accessory_unicorn:"Unicorn horn",accessory_sharkHat:"Shark hat",accessory_jellyHat:"Jellyfish hat",accessory_orchid:"Orchid",accessory_daenggi:"Daenggi ribbon",tradDress:"Clothes from the countries you visit",dress_kebaya:"Kebaya: a blouse with flowers stitched on, worn in Singapore and its neighbours. Peranakan ladies close it with three gold brooches.",dress_batik:"Batik: patterns drawn with hot wax, then dyed. A batik sarong is wrapped around like a skirt.",dress_orchid:"Singapore's national flower is an orchid called Vanda Miss Joaquim.",dress_hanbok:"Hanbok: Korea's traditional clothes. The top is a jeogori, tied with a ribbon called goreum. Rainbow sleeves are called saekdong.",dress_chima:"Chima: the long, full skirt of a hanbok. A yellow jeogori with a red chima is a classic look.",dress_daenggi:"Daenggi: a ribbon tied at the end of a long braid. Korean girls wore red ones long ago.",mysteryBox:"Mystery box",mysteryTap:"Tap the box to open it!",mysteryNew:"New item!",wearIt:"Wear it!",later:"Later",mysteryOnly:"Comes from a mystery box or a gift",mysteryAll:"You found every mystery item!",surprise:"Surprise gift!",giftAppeared:"The robot left you a present! 🎁",giftCoins:"Shell coins in the present!",newLook:"So pretty!",boss0:"What?! You cleaned it all?!",crab1:"I turned the nice chili crab into a ROBOT! Snap snap!",crab2:"Now it does what I say! Hahaha!",crab3:"See the red mark? The claw comes down there. Swim away!",crab4:"When the claw gets stuck, bump the shiny box on its back!",crabHint:"Swim away from red! When the box shines, press the whirlpool button again and again! 🦀",crabRound2:"Hot sauce! Stay away from the red clouds! 🌶️",crabRound3:"Two claws now! Watch the red marks! 🦀🦀",crabSauce:"Achoo! So spicy! 🌶️",crabWin:"The robot shell fell off! The good crab is back! 🦀💚",octo1:"I turned the nice octopus into a ROBOT!",octo2:"All eight arms! Now it does what I say!",octo3:"See the red marks? The arms come down there. Swim away!",octo4:"When an arm is tired, bump the shiny ring! Free all eight!",octoHint:"Swim away from red! When a ring shines, press the whirlpool button again and again! 🐙",octoRound2:"Ink! Stay away from the black clouds! 🖤",octoRound3:"It is coming after you! Two arms left! 🐙",octoInk:"Ink! It is all dark! 🖤",octoWin:"The robot armor fell off! The good octopus waves hello! 🐙💚",ele1:"I turned the nice elephant into a ROBOT!",ele2:"My box is on its back. Run, elephant!",ele3:"See the red path? It runs there. Move away!",ele4:"Then it gets dizzy. Bump the shiny box on its back!",eleHint:"Move off the red path! When the box shines, press the whirlpool button again and again! 🐘",eleRound2:"Water spray! Stay away from the water clouds! 💦",eleRound3:"It runs two times now! Watch out! 🐘",eleSplash:"Splash! 💦",eleWin:"The robot armor fell off! The good elephant is happy! 🐘💚",devilFlee:"Grr! I'll be back!",ingredientHint:"Follow the golden light! ✨",ingredientAppeared:"Look, a golden light! Go and see ✨",ingredient_seagrape:"Sea grapes",ingredient_pearl:"Giant clam pearl",ingredient_rainbowCoral:"Rainbow coral",ingredient_kelp:"Kelp",ingredient_camellia:"Camellia flower",ingredient_feather:"Seagull feather",got_kelp:"You found kelp! Fish live in kelp forests.",got_camellia:"You found a camellia! It is Busan's flower.",got_feather:"A seagull feather! The seagull is Busan's bird.",got_seagrape:"You found sea grapes! They are a seaweed.",got_pearl:"You found a pearl! Giant clams live here.",got_rainbowCoral:"Rainbow coral! Happy corals have lots of colors.",lab:"Potion lab",tempPotion:"Quick potion",tempPotionSub:"Use one ingredient to be human for a little while!",noIngredients:"Find the golden light first!",stirIt:"Tap the pot to stir!",drink:"Drink!",alreadyHuman:"You're human right now!",antidote:"The real antidote",antidoteSub:"Collect the ingredients from every ocean to be human again forever!",humanStart:"We're people again! Just for a little bit.",humanEnd:"Oh! We are mermaids again.",missionIngredients:"Follow the golden light",missionRescue:"Help the sea animals",missionRecycle:"Recycle the bag",bagFull:"The bag is full! Go to recycling ♻️",recycle:"Take the bag to recycling ♻️",rescue:"Stay close to help!",escort:"Take the clownfish home! Swim to the light! 🏠",escortOctopus:"Take the baby octopus home! Swim to the light! 🏠",findShell:"The crab lives in a can. Find the shell in the light!",bringShell:"Give the shell to the crab!",animalsLeft:"More animals need help! 💗",recycleTitle:"Recycling corner",bin_machine:"Bottles & cans",bin_blue:"Plastic bags",bin_nets:"Old nets",refund:"Money back",recycleIntro_busan:"In Korea, bottles and cans in the machine give you points!",recycleIntro:"In Singapore, a bottle in the machine gives you 10 cents!",recycleDone:"All done! Great job!",recycleFact_machine:"Old bottles can become new bottles, or even T-shirts!",recycleFact_can:"A recycled can can be back in the shop as a new can in about 60 days!",recycleFact_nets:"Old fishing nets can be turned into swimsuits and carpets!",keepSwimming:"Keep swimming",totalRefund:"All money back so far",album:"Rescue book",albumSub:"The sea animals you saved",eggHatch:"Surprise egg!",eggTap:"Tap the egg to open it!",eggNew:"A new plush friend!",eggAgain:"Another one!",eggShelf:"It's on the shelf in your mermaid house! 🏠",yay:"Yay!",eggFound:"You found the egg! It hatches tomorrow in your house! 🏠",eggToday:"Today's egg is on the reef! Find the pink light! 🥚",eggFriends:"Egg friends",eggFriendsSub:"A new egg waits on the reef every day",egg_clownfish:"Clownfish",egg_blueTang:"Blue tang",egg_angelfish:"Angelfish",egg_parrotfish:"Parrotfish",egg_butterflyfish:"Butterflyfish",egg_pufferfish:"Pufferfish",egg_seahorse:"Seahorse",egg_starfish:"Starfish",egg_crab:"Crab",egg_lobster:"Lobster",egg_shrimp:"Shrimp",egg_octopus:"Octopus",egg_squid:"Squid",egg_jellyfish:"Jellyfish",egg_turtle:"Sea turtle",egg_dolphin:"Dolphin",egg_orca:"Orca",egg_blueWhale:"Blue whale",egg_beluga:"Beluga",egg_narwhal:"Narwhal",egg_whaleShark:"Whale shark",egg_shark:"Shark",egg_manta:"Manta ray",egg_eagleRay:"Eagle ray",egg_seal:"Seal",egg_walrus:"Walrus",egg_penguin:"Penguin",egg_nautilus:"Nautilus",egg_seaSlug:"Sea slug",egg_sunfish:"Sunfish",notYet:"Not met yet",animal_turtle:"Sea turtle",animal_fish:"Blue fish",animal_seahorse:"Seahorse",animal_clownfish:"Clownfish",animal_crab:"Hermit crab",animal_octopus:"Baby octopus",rescued_octopus:"The baby octopus is home! Octopuses can change color.",rescued_turtle:"Turtle saved! Turtles lay eggs on Singapore's beaches.",rescued_fish:"Fish saved! Plastic bags can trap fish.",rescued_seahorse:"Seahorse saved! Seahorse daddies carry the babies.",rescued_clownfish:"The clownfish is home! It hides in the anemone.",rescued_crab:"The crab has a new home!",safetyCards:"Sea safety cards",secretFriends:"Secret friends",secretHint:"Someone is hiding somewhere...",secretFound:"You found a secret friend!",comeAlong:"Let's go together!",danger_crocodile:"Saltwater crocodile",danger_boxJelly:"Box jellyfish",danger_lionfish:"Lionfish",danger_stonefish:"Stonefish",dangerFact_crocodile:"The biggest reptile, and it can swim in the sea. One visited Sentosa's beaches in 2026. If you see one, get out of the water and stay far away.",dangerFact_boxJelly:"A square, see-through jellyfish with long stingers. A new kind was found near Sentosa in 2026. If one stings you, tell a grown-up and pour on vinegar.",dangerFact_lionfish:"Pretty stripes and fan fins, but its spines are venomous. Look with your eyes only!",dangerFact_stonefish:"It looks just like a stone on the sea floor and has venomous spines. Wear water shoes and never step on rocks in the sea.",dangerSeen_boxJelly:"A box jellyfish! Swim around it.",dangerSeen_lionfish:"A lionfish! Pretty, but it stings. Just look!",dangerSeen_stonefish:"That rock has eyes! It is a stonefish. Stay up!",dangerHit_crocodile:"Bump! A crocodile! Swim fast!",dangerHit_boxJelly:"Ouch! Real stings need a grown-up.",dangerHit_lionfish:"Ouch, spines! Just look, no touching.",dangerHit_stonefish:"Ouch! It looked like a rock.",spilled:"Oops, trash fell out. Pick it up!",coming_crocodile:"A crocodile! Swim away!",escaped_crocodile:"Phew! You got away!",danger_mako:"Shortfin mako shark",danger_nomura:"Nomura's jellyfish",danger_blueRing:"Blue-ringed octopus",danger_stingray:"Red stingray",dangerFact_mako:`One of the fastest sharks in the world. Makos sometimes swim in Korea's seas. If a lifeguard says "shark!", get out of the water calmly and quickly.`,dangerFact_nomura:"One of the biggest jellyfish in the world: wider than a grown-up is tall! In summer it drifts to Korea, so Haeundae puts up jellyfish nets. Even a dead one on the sand can sting.",dangerFact_blueRing:"Small and cute, but one of the most venomous animals in the sea. It now lives on Busan's rocky shores too. Never pick up an octopus, even a tiny one.",dangerFact_stingray:"It hides flat in the sand and has a stinging spine on its tail. In shallow water, shuffle your feet so stingrays swim away first.",dangerSeen_nomura:"A giant jellyfish! Stay far away.",dangerSeen_blueRing:"A tiny octopus with blue rings! Do not touch!",dangerSeen_stingray:"A stingray! Its tail stings. Stay up!",dangerHit_mako:"Whoosh! A shark! Swish your tail to go fast!",dangerHit_nomura:"Ouch, jellyfish! Real stings: tell a grown-up.",dangerHit_blueRing:"Oh no! Never touch a real one.",dangerHit_stingray:"Ouch, the stingray tail!",coming_mako:"A shark! Swim away!",escaped_mako:"Phew! You got away!",newSafetyCard:"New card in the book!",friend_porpoise:"Finless porpoise family",pet_porpoise:"Finless porpoise",power_porpoise:"Sonar: clicks to find the nearest trash",friendFact_porpoise:"Korea's smiling porpoise has no back fin. Families live in Busan's sea, and they need clean water and fewer fishing nets to stay safe.",friend_otter:"Otter family",pet_otter:"Otter",power_otter:"Fetch: brings you trash from nearby",friendFact_otter:"Smooth-coated otters play around Marina Bay and the Merlion. They came back when Singapore's rivers got clean!",end0:"Devil Science ran away. A note fell down.",end1:"It says the next antidote is in Busan, Korea!",end2:"Busan? That is so far away!",end3:"Then a big, kind whale shark came!",end4:"Everyone waved. Thank you, {a} and {b}!",end5:"Whale shark, can you take us to Busan?",end6:"Singapore's sea is clean! Next: Busan 🇰🇷",nextOcean_busan:"Next ocean: Haeundae, Busan, Korea 🇰🇷",login:"Log in",autoSaved:"Saved by itself, all done!",saveLater:"No internet now. It saves when you are back online.",statIngredients:"Antidote",statSeas:"Seas",statCoins:"Coins",statPets:"Pets",statRescued:"Friends helped",statBuses:"Electric buses",statMissions:"Missions done",statThings:"Things owned",logout:"Log out",saveNow:"Save now",saving:"Saving…",savedNow:"Saved!",saveFailed:"No internet, try again",floatTrash:"Trash on top of the water! Tap ⬆ Up!",floatFollow:"Follow the arrow to the trash. Look at the view!",petHide:"Stay home",petShow:"Come along",petHome:"Your pet is resting at home. Tap to bring it back!",petBack:"Your pet is back!",deleteAccount:"Delete account",deleteWarn:"This deletes this player and everything saved online: coins, clothes, pets and oceans. It can't be undone.",deletePin:"To delete, tap your 4 secret pictures again.",keepAccount:"Keep my account",accountDeleted:"The account is deleted. Bye!",whoAreYou:"What is your name?",namePlaceholder:"Name",pickPin:"Tap your 4 secret pictures",pinHelp:"Remember them: they open your game on any iPad.",newPlayer:"First time here? Start a new game with this name?",yesNew:"Yes, new player",tryAgain:"Try again",wrongPin:"Those pictures are different. Try again!",busy:"Too many tries. Rest a little, then try again.",offline:"Can't reach the internet. Check the Wi-Fi.",hello:"Hi",savedOnline:"Your game is saved online, on every iPad.",coop:"Play together",roomCode:"Room",makeRoom:"Make a room",joinRoom:"Join a room",tellFriend:"Show your friends these 3 pictures (up to 4 can play)",waitingFriend:"Waiting for a friend...",friendIn:"is here!",pickRoom:"Tap the 3 room pictures",noRoom:"There is no room with those pictures.",roomFull:"That room is full.",joined:"You're in! The game starts when your friend presses Play.",joinedCity:"You're in! Press Play and find your friend in the city.",waitHost:"Your friend starts the game",friendLeft:"Your friend left. Keep swimming!",leaveRoom:"Leave the room",needLogin:"Log in first to play together",together:"Together",danger_triggerfish:"Titan triggerfish",danger_seaKrait:"Banded sea krait",danger_crownThorns:"Crown-of-thorns starfish",danger_moray:"Giant moray eel",dangerFact_triggerfish:"A big reef fish with strong buck teeth. It guards its nest on the sand and chases anyone who comes close. Its guard zone is shaped like an upside-down cone, so swim away sideways, not up!",dangerFact_seaKrait:"A sea snake with black and blue-grey stripes. Its venom is very strong, but it is calm and shy. Never touch one: stay still and let it swim past.",dangerFact_crownThorns:"A big starfish covered in sharp, venomous spines. It eats coral, so too many of them can hurt a reef. Never touch one, and tell a grown-up or a dive guide if you see lots of them.",dangerFact_moray:"Morays hide in holes in the rocks and open and close their mouths to breathe. They are shy, but their bite is strong. Never put your hand into a hole in the reef!",dangerSeen_seaKrait:"A striped sea snake! Let it swim past.",dangerSeen_crownThorns:"A spiky starfish! Do not touch.",dangerSeen_moray:"Someone is peeking out! A moray eel. Stay away from its hole.",dangerHit_triggerfish:"Chomp! Swim away to the side!",dangerHit_seaKrait:"Oops! Never touch a real sea snake.",dangerHit_crownThorns:"Ouch, spines! Just look.",dangerHit_moray:"Snap! Never put your hand in a hole.",coming_triggerfish:"A big triggerfish! Swim away to the side!",escaped_triggerfish:"Phew! You got away!",friend_dugong:"Dugong family",pet_dugong:"Dugong",power_dugong:"Gentle hug: when an animal bumps you, no trash falls out of your bag",friendFact_dugong:"Dugongs are gentle sea cows that graze on seagrass, like cows in a meadow. The dugong is the state animal of the Andaman and Nicobar Islands. Only a few are left, so they need clean seagrass and quiet boats.",radhanagar:"Radhanagar Beach",elephantBeach:"Elephant Beach",barrenIsland:"Barren Island Volcano",lighthouseAndaman:"North Bay Lighthouse",havelock:"Havelock Island",havelockJetty:"Havelock Jetty",andaman:"Andaman",andamanIndia:"Andaman, India",andamanTab:"India",india:"India",portBlair:"Port Blair",andamanSea:"Andaman Sea",place_andaman:"Havelock Island, Andaman, India",surfaceHello_andaman:"Look! A beach, and a volcano!",recycleIntro_andaman:"In India, the kabadiwala buys old bottles and cans!",go_andaman:"Go to India",nextOcean_andaman:"Next ocean: the Andaman Islands, India 🇮🇳",ingredient_lotus:"Lotus flower",ingredient_peacock:"Peacock feather",ingredient_conch:"Conch shell",got_lotus:"A lotus flower! It is India's flower.",got_peacock:"A peacock feather! The peacock is India's bird.",got_conch:"A conch shell! In India, people blow it like a horn.",astory0:"The whale shark took {a} and {b} to India.",astory1:"Thank you, whale shark! The water is so clear!",astory2:"Look! White sand and lots of coral!",astory3:"But the purple submarine was here...",astory4:"Mwahaha! I put trash here too!",astory5:"My robots are fast now! Mwahaha!",astory6:"Robots again! Let's clean up!",astory7:"A triggerfish lives here. If it chases us, swim to the side!",aend0:"Devil Science dropped a note again.",aend1:"Lotus, feather, shell... we're almost there!",aend2:"Thank you, sea friends! Bye, India!",aend3:"The whale shark came back for them.",aend4:"The sea is clean! More countries are coming soon! 🌏",top_saree:"Saree blouse",tail_lehenga:"Lehenga skirt",accessory_tikka:"Maang tikka",dress_saree:"Saree: one very long cloth, five to nine metres long! It is wrapped around the body and draped over the shoulder.",dress_lehenga:"Lehenga: a long, swirly Indian skirt, often stitched with gold and little mirrors. People wear it at weddings and festivals.",dress_tikka:"Maang tikka: a jewel that hangs on the forehead from a chain along the hair parting. Brides in India often wear one.",house:"Mermaid house",houseOf:"{n}'s house",houseExit:"Back to sea",houseWall:"Walls",houseFloor:"Floor",houseFriend:"Friend's",houseMine:"My house",houseTurn:"Turn",houseAway:"Put away",houseNeedMore:"Recycle more trash to make this!",houseFull:"No more room! Put something away first.",houseVisitors:"The animals you rescued came to visit!",houseNoVisitors:"Rescue animals in the sea and they will come to visit!",houseFact_bottle:"Made from bottles! Old plastic bottles can become soft cloth, blankets and cushion stuffing.",houseFact_can:"Made from cans! A recycled can can come back as something new in about 60 days, again and again.",houseFact_bag:"Made from plastic bags! They can become plastic planks for benches and flower pots.",houseFact_net:"Made from old fishing nets! Real nets are made into carpets and swimsuits.",furn_shellBed:"Clam bed",furn_sofa:"Coral sofa",furn_table:"Shiny table",furn_stool:"Can stool",furn_jellyLamp:"Jellyfish lamp",furn_netRug:"Net rug",furn_hammock:"Hammock",furn_shelf:"Shelf",furn_coralPot:"Coral pot",furn_anemone:"Anemone",furn_mirror:"Shell mirror",furn_chest:"Treasure chest",furn_slide:"Slide",furn_kopitiam:"Kopitiam table",furnFact_kopitiam:"In Singapore, people have breakfast at a kopitiam: kaya toast and kopi!",furn_orchid:"Orchid",furnFact_orchid:"The Vanda Miss Joaquim orchid is Singapore's national flower.",furn_merlion:"Mini Merlion",furnFact_merlion:"The Merlion has a lion's head and a fish's tail. It's Singapore's famous statue!",furn_soban:"Soban table",furnFact_soban:"In Korea, meals come on a little low table called a soban, and everyone sits on the floor.",furn_onggi:"Onggi jars",furnFact_onggi:"Korean families keep kimchi and soy sauce in big clay onggi jars.",furn_byeongpung:"Folding screen",furnFact_byeongpung:"A byeongpung is a painted folding screen from old Korean houses.",furn_charpai:"Charpai bed",furnFact_charpai:"In India, a charpai is a bed of woven rope. Nice and cool on hot days!",furn_diya:"Brass lamp",furnFact_diya:"In India, little lamps called diyas shine for Diwali, the festival of lights.",furn_rangoli:"Rangoli",furnFact_rangoli:"In India, a rangoli is a bright pattern on the floor by the door. It says welcome!",furn_bubbler:"Bubble machine",housePlace:"Tap where you want to put it!",houseVisit:"Visit a friend's house",houseLogin:"Log in to visit your friends' houses!",houseNoFriends:"Play together with a friend, and you can visit their house!",houseFriendAway:"Couldn't reach that house. Try again later!"},Wf={title1:"Daisy",title2:"Coral",subtitle:"산호초의 인어들",place:"싱가포르 시스터즈 아일랜드",choose:"누구로 놀까요?",daisy:"데이지",coral:"코랄",leo:"레오",friendPick:"같이 헤엄칠 친구",play:"시작",holdToSwim:"화면을 꾹 누르면 헤엄쳐요!",clean:"깨끗한 바다",complete:"바다가 깨끗해졌어요!",completeSub:"물고기들이 고맙대요!",coinsEarned:"조개 코인",nextTime:"다른 바다도 곧 열려요...",playAgain:"다시 하기",menu:"메뉴",language:"언어",sound:"소리",replay:"다시 듣기",voice:"목소리",on:"켜기",off:"끄기",restart:"처음부터",resume:"계속하기",untangle:"가까이 있으면 그물이 풀려요!",fact_bottle:"병은 바다에서 450년이나 남아 있어요!",fact_can:"헌 캔은 새 캔이 될 수 있어요!",fact_bag:"거북이는 비닐봉지가 해파리인 줄 알기도 해요.",fact_net:"바다에 버린 그물은 유령 그물이에요. 동물들이 걸려요.",devil:"데빌 사이언스",narrator:"이야기",next:"다음",skip:"건너뛰기",story0:"{a:와} {b:는} 싱가포르 바다에서 헤엄치는 걸 좋아해요.",story1:"어느 날, 보라색 잠수함이 왔어요...",story2:"음하하! 나는 데빌 사이언스다!",story3:"봐라! 바다에 쓰레기가 가득하지!",story4:"너희 둘이 치워라! 내 물약을 마셔라!",story5:"어? 다리가 꼬리가 됐어!",story6:"우리 인어가 됐어! 어떻게 돌아가지?",story7:"바다를 치우고 해독제 재료를 찾아라. 그럼 다시 사람이 된다! 음하하!",story8:"봐! 로봇들이 쓰레기를 버려!",story9:"로봇을 고치고 같이 치우자!",mission:"미션",missionClean:"쓰레기 줍기",missionRobots:"로봇 고치기",missionMap:"지도 보기",missionStars:"빨리 하면 별 3개!",start:"시작!",watchStory:"이야기 다시 보기",fixRobot:"가까이 있으면 로봇이 고쳐져요!",robotFixed:"로봇을 고쳤어요! 이제 도와줘요.",robotsLeft:"로봇도 고쳐 줘요!",time:"시간",map:"지도",worldTab:"세계",singaporeTab:"싱가포르",busanTab:"부산",moreOceans:"다음 바다",youAreHere:"우리는 여기!",dragToSpin:"끌어서 지구를 돌려 보세요",singapore:"싱가포르",malaysia:"말레이시아",indonesia:"인도네시아",sentosa:"센토사",marinaBay:"마리나 베이",sistersIslands:"시스터즈 아일랜드",mbs:"마리나 베이 샌즈",merlion:"머라이언",flyer:"싱가포르 플라이어",stJohns:"세인트 존스 섬",oceanReef:"그레이트 배리어 리프",oceanHawaii:"하와이",oceanCaribbean:"카리브해",oceanMed:"지중해",oceanArctic:"북극해",oceanBali:"발리",oceanOkinawa:"오키나와",wishHint:"가고 싶은 🔜 바다를 눌러요",wishAsk:"여기 가고 싶어요?",wishThanks:"고마워요! 가고 싶은 바다로 기억할게요.",parentCorner:"보호자 코너",parentHold:"어른만: 버튼을 3초 동안 꾹 누르세요.",parentHoldBtn:"꾹 눌러서 열기",parentIntro:"다음에 어떤 바다·바다 친구·기능이 있으면 좋을지, 어렵거나 불편했던 점을 알려 주세요. 아이들은 지구본의 🔜 바다를 눌러 투표할 수 있어요.",feedbackSend:"의견 보내기",feedbackRate:"별점 남기기",feedbackHelp:"도움말·지원",feedbackPrivacy:"개인정보 처리방침",feedbackMailBody:"의견이나 문제를 적어 주세요 (어느 바다에서, 무슨 일이 있었는지):",surfaceUp:"위로",diveDown:"잠수",flick:"꼬리치기",whirl:"회오리",bang:"쾅!",ting:"팅!",emptyBag:"비우러 가요!",surfaceHello:"저기 봐! 싱가포르야!",place_busan:"대한민국 부산 해운대",haeundae:"해운대",busan:"부산",korea:"대한민국",dongbaek:"동백섬",hwangok:"황옥공주 인어상",marineCity:"마린시티",lct:"엘시티",gwangan:"광안대교",skyCapsule:"스카이캡슐",oryukdo:"오륙도",surfaceHello_busan:"저기 봐! 부산이야!",chooseOcean:"어느 바다로 갈까?",go_busan:"부산으로 가기",allOceansDone:"세 바다를 모두 구했어요! 🎉",pickNextOcean:"다음엔 어느 바다로 갈까요? ⭐는 다 같이 아직 안 구한 바다예요!",hostPicksOcean:"방을 만든 친구가 바다를 골라요.",newAccountMade:"새 게임을 만들었어요!",welcomeBack:"다시 왔구나",oldAccount:"예전에 만든 계정이에요. 저장해 둔 게임을 그대로 불러왔어요!",nameTakenPin:"이 이름은 예전에 만든 계정이 있어요. 그때 고른 그림 4개를 눌러 주세요!",houseSwimHint:"바닥을 누르면 내 인어가 헤엄쳐 가요. 미끄럼틀을 누르면 타요!",soloIntro_singapore:"{a:는} 싱가포르 바다에서 헤엄치는 걸 좋아해요.",soloIntro_busan:"{a:는} 한국 부산 해운대 바다에서 헤엄치는 걸 좋아해요.",soloIntro_andaman:"{a:는} 인도 안다만 바다에서 헤엄치는 걸 좋아해요.",teamIntro_busan:"{a:와} {b:는} 한국 부산 해운대 바다에서 헤엄치는 걸 좋아해요.",teamIntro_andaman:"{a:와} {b:는} 인도 안다만 바다에서 헤엄치는 걸 좋아해요.",soloStory4:"네가 치워라! 내 물약을 마셔라!",soloStory6:"내가 인어가 됐어! 어떻게 다시 사람이 되지?",sisterHome:"나도 인어가 됐어! 나는 인어 집에서 기다릴게. 힘내!",soloStory9:"내가 로봇을 고치고 바다를 깨끗하게 할 거야!",sgAgain0:"고래상어가 {a:를} 싱가포르에 데려다 줬어요.",sgAgain0team:"고래상어가 {a:와} {b:를} 싱가포르에 데려다 줬어요.",sgAgain1:"고마워, 고래상어야! 저기 머라이언이 보여!",sgAgain2:"봐! 투구게야! 공룡보다 오래된 동물이래!",sgAgain7:"악어를 조심하자. 가자!",bstory0solo:"고래상어가 {a:를} 한국 부산에 데려다 줬어요.",astory0solo:"고래상어가 {a:를} 인도에 데려다 줬어요.",astory6solo:"또 로봇이야! 내가 다 치울게!",sgBye:"고마워, 싱가포르 친구들!",endNext:"다음 재료는 아직 안 가 본 바다에 있대!",endThanks:"모두 손을 흔들어요. 고마워, {a}!",rideAsk:"고래상어야, 다음 바다에 데려다 줄래?",cleanDone_singapore:"싱가포르 바다가 깨끗해졌어요! 🎉",cleanDone_busan:"부산 바다가 깨끗해졌어요! 🎉",cleanDone_andaman:"인도 바다가 깨끗해졌어요! 🎉",friendRecycled:"친구가 재활용했어요! 우리 집 재료도 같이 늘었어요.",roomLeft:"방에서 나왔어요. 혼자 계속 놀아요!",nextCountrySoon:"새 나라는 업데이트로 찾아와요. 어느 바다일까요? 기대해 주세요! 🌏",soonOcean:"곧 만나요",bstory0:"고래상어가 {a:와} {b:를} 한국 부산에 데려다 줬어요.",bstory1:"고마워, 고래상어야! 여기 물은 시원해!",bstory2:"봐! 다시마 숲이야! 불가사리도 있어!",bstory3:"앗, 또 보라색 잠수함이에요...",bstory4:"음하하! 여기 바다에도 쓰레기를 버렸지!",bstory5:"다음 재료가 갖고 싶으면 이 바다를 치워라! 음하하!",bstory6:"로봇들이 또 쓰레기를 버려!",bstory7:"상어랑 큰 해파리를 조심하자. 가자!",bend0:"데빌 사이언스가 쪽지를 떨어뜨렸어요.",bend1:"다음 재료는 인도에 있대!",bend2:"가자! 고마워, 부산 친구들!",bend3:"고래상어가 다시 왔어요.",bend4:"부산 바다가 깨끗해졌어요! 다음은 인도예요 🇮🇳",pets:"펫",petShop:"펫 가게",petShopSub:"펫마다 새로운 힘이 생겨요!",buy:"사기",needMore:"조개가 더 필요해요",close:"닫기",newPet:"새 친구가 같이 헤엄쳐요!",pet_seahorse:"해마",pet_dolphin:"돌고래",pet_jellyfish:"해파리",pet_turtle:"바다거북",power_seahorse:"자석: 쓰레기를 끌어와요",power_dolphin:"엄청 빠르게 헤엄쳐요",power_jellyfish:"찌릿: 로봇을 멈춰서 고치기 쉬워요",power_turtle:"보호막: 로봇이 내 근처에 쓰레기를 못 버려요",shieldBlock:"보호막! 여기엔 못 버려!",wardrobe:"꾸미기",done:"다 했어요",slot_top:"옷",slot_tail:"꼬리",slot_hairStyle:"머리",slot_hairColor:"머리색",slot_accessory:"장식",top_own:"원래 옷",top_shell:"조개 옷",top_sailor:"세일러 옷",top_heart:"하트 옷",top_sparkle:"반짝이 옷",top_kebaya:"케바야",top_hanbok:"한복 저고리",tail_own:"원래 꼬리",tail_ocean:"바다색",tail_emerald:"에메랄드",tail_purple:"보라",tail_sunset:"노을",tail_silver:"은빛",tail_rainbow:"무지개",tail_gold:"황금",tail_galaxy:"은하수",tail_batik:"바틱 사롱",tail_chima:"한복 치마",hairStyle_bun:"똥머리",hairStyle_ponytail:"포니테일",hairStyle_twin:"양갈래",hairStyle_long:"긴 생머리",hairStyle_short:"짧은 머리",hairStyle_spiky:"삐죽 머리",hairColor_brown:"갈색",hairColor_pink:"분홍",hairColor_blonde:"금발",hairColor_black:"검정",hairColor_blue:"파랑",hairColor_purple:"보라",hairColor_mint:"민트",hairColor_silver:"은색",accessory_daisy:"데이지 꽃",accessory_star:"별 핀",accessory_goggles:"물안경",accessory_none:"없음",accessory_bow:"리본",accessory_crown:"왕관",accessory_shell:"조개 핀",slot_glasses:"안경",glasses_none:"없음",glasses_sunglasses:"선글라스",glasses_round:"동그란 안경",glasses_heart:"하트 안경",glasses_star:"별 안경",slot_neck:"목걸이",top_ballet:"발레 튀튀",top_stripes:"줄무늬 옷",top_dots:"땡땡이 옷",top_strawberry:"딸기 옷",top_starry:"별밤 옷",top_rainbow:"무지개 옷",top_princess:"공주 드레스",top_football:"축구 유니폼",top_fish:"흰동가리 옷",top_turtle:"거북이 옷",top_hoodie:"후드티",top_hawaii:"하와이안 셔츠",top_tuxedo:"턱시도",top_hero:"슈퍼히어로",tail_candyfloss:"솜사탕",tail_ruby:"루비",tail_mint:"민트",tail_ice:"얼음",tail_candy:"사탕 줄무늬",tail_koi:"비단잉어",tail_shark:"상어",tail_peacock:"공작",tail_strawberry:"딸기",tail_leopard:"표범",tail_sakura:"벚꽃",tail_aurora:"오로라",tail_lava:"용암",hairStyle_braid:"땋은 머리",hairStyle_spaceBuns:"양쪽 똥머리",hairStyle_curly:"뽀글 머리",hairStyle_sidePony:"옆으로 묶기",hairStyle_bob:"단발",hairStyle_mohawk:"닭벼슬 머리",hairColor_red:"빨강",hairColor_orange:"주황",hairColor_teal:"청록",hairColor_lilac:"연보라",accessory_bunnyEars:"토끼 귀",accessory_bearEars:"곰돌이 귀",accessory_witchHat:"마녀 모자",accessory_strawHat:"밀짚모자",accessory_beret:"베레모",accessory_butterfly:"나비 핀",accessory_starfish:"불가사리 핀",accessory_headphones:"헤드폰",accessory_partyHat:"고깔모자",accessory_shellCrown:"조개 왕관",accessory_chefHat:"요리사 모자",accessory_cherry:"체리 핀",accessory_crabHat:"꽃게 모자",glasses_snorkel:"스노클 수경",glasses_cat:"고양이 안경",glasses_threeD:"3D 안경",neck_none:"없음",neck_pearls:"진주 목걸이",neck_shells:"조개 목걸이",neck_lei:"꽃 목걸이",neck_bowTie:"나비넥타이",neck_scarf:"목도리",neck_locket:"하트 목걸이",neck_medal:"금메달",neck_bandana:"반다나",top_stage:"케이팝 무대 재킷",top_purpleHeart:"보라 하트 옷",top_idolSuit:"하얀 무대 정장",tail_stage:"반짝이 무대 꼬리",accessory_mic:"아이돌 마이크",neck_chain:"반짝이 체인",accessory_cap:"모자",accessory_catEars:"고양이 귀",accessory_flowers:"꽃 화관",accessory_pirate:"해적 모자",accessory_tiara:"진주 티아라",accessory_halo:"천사 링",accessory_unicorn:"유니콘 뿔",accessory_sharkHat:"상어 모자",accessory_jellyHat:"해파리 모자",accessory_orchid:"난초 꽃",accessory_daenggi:"댕기",tradDress:"여행한 나라의 전통 옷",dress_kebaya:"케바야: 꽃 수를 놓은 블라우스예요. 싱가포르와 이웃 나라에서 입어요. 페라나칸 여성들은 금 브로치 세 개로 여며요.",dress_batik:"바틱: 뜨거운 밀랍으로 그림을 그리고 물을 들인 무늬예요. 바틱 사롱은 치마처럼 둘러 입어요.",dress_orchid:"싱가포르의 나라꽃은 '반다 미스 조아킴'이라는 난초예요.",dress_hanbok:"한복: 한국의 전통 옷이에요. 윗옷은 저고리, 앞에 묶는 끈은 고름이에요. 무지개 소매는 '색동'이라고 해요.",dress_chima:"치마: 한복의 길고 넉넉한 치마예요. 노랑 저고리에 다홍치마는 옛날부터 사랑받은 차림이에요.",dress_daenggi:"댕기: 길게 땋은 머리 끝에 묶는 리본이에요. 옛날 한국 소녀들은 빨간 댕기를 했어요.",mysteryBox:"미스터리 상자",mysteryTap:"상자를 눌러서 열어 봐요!",mysteryNew:"새 아이템!",wearIt:"입어 볼래요!",later:"나중에",mysteryOnly:"미스터리 상자나 선물에서 나와요",mysteryAll:"미스터리 아이템을 모두 모았어요!",surprise:"깜짝 선물!",giftAppeared:"로봇이 선물을 두고 갔어요! 🎁",giftCoins:"선물 안에 조개 코인이 있어요!",newLook:"정말 예뻐요!",boss0:"뭐야?! 다 치웠다고?!",crab1:"착한 칠리크랩을 로봇으로 만들었지! 덥석덥석!",crab2:"이제 크랩은 내 말만 듣지! 하하하!",crab3:"빨간 표시 보여? 저기로 집게가 내려와. 피하자!",crab4:"집게가 박히면 등에 있는 반짝 상자를 쿵 하자!",crabHint:"빨간 곳을 피해요! 상자가 반짝이면 회오리 버튼을 여러 번 눌러요! 🦀",crabRound2:"매운 소스예요! 빨간 구름을 피해요! 🌶️",crabRound3:"이제 집게가 두 개! 빨간 표시를 봐요! 🦀🦀",crabSauce:"에취! 너무 매워! 🌶️",crabWin:"로봇 껍데기가 떨어졌어요! 착한 크랩이 돌아왔어요! 🦀💚",octo1:"착한 문어를 로봇으로 만들었지!",octo2:"다리 여덟 개 모두! 이제 내 말만 듣지!",octo3:"빨간 표시 보여? 저기로 다리가 쾅 내려와. 피하자!",octo4:"다리가 지치면 반짝 고리를 쿵 하자! 여덟 개 다 풀어 주자!",octoHint:"빨간 곳을 피해요! 고리가 반짝이면 회오리 버튼을 여러 번 눌러요! 🐙",octoRound2:"먹물이에요! 까만 구름을 피해요! 🖤",octoRound3:"문어가 따라와요! 다리 두 개 남았어요! 🐙",octoInk:"먹물이다! 깜깜해! 🖤",octoWin:"로봇 갑옷이 떨어졌어요! 착한 문어가 손을 흔들어요! 🐙💚",ele1:"착한 코끼리를 로봇으로 만들었지!",ele2:"등에 내 상자가 있지. 달려라, 코끼리!",ele3:"빨간 길 보여? 저기로 달려와. 비키자!",ele4:"그다음 어지러워해. 등에 있는 반짝 상자를 쿵 하자!",eleHint:"빨간 길에서 비켜요! 상자가 반짝이면 회오리 버튼을 여러 번 눌러요! 🐘",eleRound2:"물을 뿜어요! 물 구름을 피해요! 💦",eleRound3:"이제 두 번 달려요! 조심해요! 🐘",eleSplash:"첨벙! 💦",eleWin:"로봇 갑옷이 떨어졌어요! 착한 코끼리가 신나요! 🐘💚",devilFlee:"으으! 두고 보자!",ingredientHint:"금빛을 따라가요! ✨",ingredientAppeared:"금빛이 나타났어요! 가 봐요 ✨",ingredient_seagrape:"바다포도",ingredient_pearl:"대왕조개 진주",ingredient_rainbowCoral:"무지개 산호",ingredient_kelp:"다시마",ingredient_camellia:"동백꽃",ingredient_feather:"갈매기 깃털",got_kelp:"다시마를 찾았어요! 물고기들이 다시마 숲에 살아요.",got_camellia:"동백꽃을 찾았어요! 부산의 꽃이에요.",got_feather:"갈매기 깃털을 찾았어요! 갈매기는 부산의 새예요.",got_seagrape:"바다포도를 찾았어요! 바다에서 자라는 풀이에요.",got_pearl:"진주를 찾았어요! 여기엔 큰 조개가 살아요.",got_rainbowCoral:"무지개 산호예요! 건강한 산호는 알록달록해요.",lab:"물약 실험실",tempPotion:"임시 물약",tempPotionSub:"재료 하나로 잠깐 사람이 될 수 있어요!",noIngredients:"먼저 금빛을 찾아요!",stirIt:"솥을 톡톡 눌러서 저어요!",drink:"마시기!",alreadyHuman:"지금 사람이에요!",antidote:"진짜 해독제",antidoteSub:"모든 바다의 재료를 모으면 영원히 사람으로 돌아갈 수 있어요!",humanStart:"사람이 됐어요! 잠깐만이에요.",humanEnd:"앗! 다시 인어가 됐어요.",missionIngredients:"금빛 따라가기",missionRescue:"바다 동물 돕기",missionRecycle:"가방 재활용하기",bagFull:"가방이 꽉 찼어요! 재활용하러 가요 ♻️",recycle:"가방을 재활용 코너로 가져가요 ♻️",rescue:"가까이 있으면 도와줄 수 있어요!",escort:"흰동가리를 집에 데려다 줘요! 빛나는 곳으로 가요! 🏠",escortOctopus:"아기 문어를 집에 데려다 줘요! 빛나는 곳으로 가요! 🏠",findShell:"소라게가 캔에 살아요. 빛나는 곳에서 껍데기를 찾아 줘요!",bringShell:"껍데기를 소라게에게 줘요!",animalsLeft:"도와줄 동물이 더 있어요! 💗",recycleTitle:"재활용 코너",bin_machine:"병·캔 자판기",bin_blue:"비닐 (파란 통)",bin_nets:"헌 그물",refund:"돌려받은 돈",recycleIntro_busan:"한국에서는 병과 캔을 기계에 넣으면 포인트를 줘요!",recycleIntro:"싱가포르에서는 병을 기계에 넣으면 10센트를 줘요!",recycleDone:"다 했어요! 정말 잘했어요!",recycleFact_machine:"헌 페트병은 새 병이나 티셔츠로 다시 태어나요!",recycleFact_can:"재활용한 캔은 약 60일이면 새 캔이 되어 가게에 돌아와요!",recycleFact_nets:"낡은 그물은 수영복이나 카펫으로 변신해요!",keepSwimming:"계속 헤엄치기",totalRefund:"지금까지 돌려받은 돈",album:"구조 도감",albumSub:"내가 구한 바다 동물들",eggHatch:"서프라이즈 알!",eggTap:"알을 톡톡 눌러서 깨 봐요!",eggNew:"새 인형 친구!",eggAgain:"또 나왔어요!",eggShelf:"인어 집 선반에 놓았어요! 🏠",yay:"야호!",eggFound:"알을 찾았어요! 내일 인어 집에서 깨어나요! 🏠",eggToday:"오늘의 알이 바다에 있어요! 분홍 빛을 찾아요! 🥚",eggFriends:"알 친구",eggFriendsSub:"매일 바다에 새 알이 하나씩 있어요",egg_clownfish:"흰동가리",egg_blueTang:"블루탱",egg_angelfish:"엔젤피시",egg_parrotfish:"비늘돔",egg_butterflyfish:"나비고기",egg_pufferfish:"복어",egg_seahorse:"해마",egg_starfish:"불가사리",egg_crab:"꽃게",egg_lobster:"바닷가재",egg_shrimp:"새우",egg_octopus:"문어",egg_squid:"오징어",egg_jellyfish:"해파리",egg_turtle:"바다거북",egg_dolphin:"돌고래",egg_orca:"범고래",egg_blueWhale:"대왕고래",egg_beluga:"벨루가",egg_narwhal:"일각고래",egg_whaleShark:"고래상어",egg_shark:"상어",egg_manta:"만타가오리",egg_eagleRay:"매가오리",egg_seal:"물범",egg_walrus:"바다코끼리",egg_penguin:"펭귄",egg_nautilus:"앵무조개",egg_seaSlug:"갯민숭달팽이",egg_sunfish:"개복치",notYet:"아직 못 만났어요",animal_turtle:"바다거북",animal_fish:"파란 물고기",animal_seahorse:"해마",animal_clownfish:"흰동가리",animal_crab:"소라게",animal_octopus:"아기 문어",rescued_octopus:"아기 문어가 집에 왔어요! 문어는 몸 색을 바꿀 수 있어요.",rescued_turtle:"거북이를 구했어요! 거북이는 싱가포르 바닷가에 알을 낳아요.",rescued_fish:"물고기를 구했어요! 비닐봉지에 물고기가 갇힐 수 있어요.",rescued_seahorse:"해마를 구했어요! 해마는 아빠가 아기를 품어요.",rescued_clownfish:"흰동가리가 집에 왔어요! 말미잘 속에 숨어요.",rescued_crab:"소라게에게 새 집이 생겼어요!",safetyCards:"바다 안전 카드",secretFriends:"숨은 친구",secretHint:"어딘가에 누가 숨어 있어요...",secretFound:"숨은 친구를 찾았어요!",comeAlong:"같이 가자!",danger_crocodile:"바다악어",danger_boxJelly:"상자해파리",danger_lionfish:"쏠배감펭",danger_stonefish:"스톤피시",dangerFact_crocodile:"가장 큰 파충류이고 바다에서도 헤엄쳐요. 2026년에 센토사 해변에도 나타났어요. 악어를 보면 물에서 나와 멀리 떨어져요.",dangerFact_boxJelly:"네모나고 투명한 해파리예요. 긴 촉수에 독이 있어요. 2026년 센토사 근처에서 새로운 종류가 발견됐어요. 쏘이면 어른에게 알리고 식초를 부어요.",dangerFact_lionfish:"줄무늬와 부채 같은 지느러미가 예쁘지만 가시에 독이 있어요. 눈으로만 봐요!",dangerFact_stonefish:"바닥의 돌과 똑같이 생겼고 등에 독가시가 있어요. 바다에서는 아쿠아슈즈를 신고 돌을 밟지 않아요.",dangerSeen_boxJelly:"상자해파리예요! 돌아서 가요.",dangerSeen_lionfish:"쏠배감펭이에요! 예쁘지만 따가워요. 눈으로만 봐요!",dangerSeen_stonefish:"저 돌에 눈이 있어요! 스톤피시예요. 위로 지나가요!",dangerHit_crocodile:"쿵! 악어예요! 빨리 헤엄쳐요!",dangerHit_boxJelly:"앗 따가워! 진짜로 쏘이면 어른을 불러요.",dangerHit_lionfish:"앗 따가워, 가시! 눈으로만 봐요.",dangerHit_stonefish:"앗! 돌인 줄 알았어요.",spilled:"앗, 쓰레기가 떨어졌어요. 다시 주워요!",coming_crocodile:"악어예요! 도망가요!",escaped_crocodile:"휴! 도망쳤어요!",danger_mako:"청상아리",danger_nomura:"노무라입깃해파리",danger_blueRing:"파란고리문어",danger_stingray:"노랑가오리",dangerFact_mako:'세상에서 가장 빠른 상어 중 하나예요. 우리나라 바다에도 가끔 나타나요. 안전요원이 "상어!"라고 하면 침착하게 빨리 물 밖으로 나와요.',dangerFact_nomura:"세계에서 가장 큰 해파리 중 하나로, 어른 키보다 더 커요! 여름이면 우리 바다로 떠내려와서 해운대에 해파리 차단 그물을 쳐요. 모래 위에 죽어 있는 것도 쏠 수 있으니 만지지 마요.",dangerFact_blueRing:"작고 귀엽지만 바다에서 가장 독이 강한 동물 중 하나예요. 요즘은 부산 갯바위에서도 발견돼요. 작은 문어라도 절대 손으로 잡지 마요.",dangerFact_stingray:"모래 속에 납작하게 숨어 있고 꼬리에 독가시가 있어요. 얕은 물에서는 발을 끌면서 걸으면 가오리가 먼저 도망가요.",dangerSeen_nomura:"커다란 해파리예요! 멀리 떨어져요.",dangerSeen_blueRing:"파란 고리 작은 문어예요! 만지면 안 돼요!",dangerSeen_stingray:"가오리예요! 꼬리가 따가워요. 위로 가요!",dangerHit_mako:"휙! 상어예요! 꼬리치기로 빨리 가요!",dangerHit_nomura:"앗 따가워, 해파리! 진짜로 쏘이면 어른에게 말해요.",dangerHit_blueRing:"앗! 진짜 문어는 만지면 안 돼요.",dangerHit_stingray:"앗 따가워, 가오리 꼬리!",coming_mako:"상어예요! 도망가요!",escaped_mako:"휴! 도망쳤어요!",newSafetyCard:"도감에 새 카드가 생겼어요!",friend_porpoise:"상괭이 가족",pet_porpoise:"상괭이",power_porpoise:"음파 탐지: 딸깍딸깍 소리로 가까운 쓰레기를 찾아 줘요",friendFact_porpoise:"웃는 얼굴의 우리 바다 돌고래, 상괭이는 등지느러미가 없어요. 부산 바다에도 살아요. 바다가 깨끗하고 버려진 그물이 줄어야 안전하게 살 수 있어요.",friend_otter:"수달 가족",pet_otter:"수달",power_otter:"물어오기: 근처 쓰레기를 물어다 줘요",friendFact_otter:"싱가포르 수달 가족은 마리나 베이와 머라이언 공원에 놀러 와요. 강이 깨끗해지자 다시 돌아왔어요!",end0:"데빌 사이언스가 도망갔어요. 쪽지가 팔랑 떨어졌어요.",end1:"다음 재료는 한국 부산에 있대!",end2:"부산? 너무 멀어!",end3:"그때 크고 착한 고래상어가 왔어요!",end4:"모두 손을 흔들어요. 고마워, {a}! 고마워, {b}!",end5:"고래상어야, 부산에 데려다 줄래?",end6:"싱가포르 바다가 깨끗해졌어요! 다음은 부산이에요 🇰🇷",nextOcean_busan:"다음 바다: 한국 부산 해운대 🇰🇷",login:"로그인",autoSaved:"자동으로 저장됐어요!",saveLater:"지금 인터넷이 안 돼요. 연결되면 저장돼요.",statIngredients:"해독제 재료",statSeas:"바다",statCoins:"코인",statPets:"펫",statRescued:"도와준 친구",statBuses:"전기 버스",statMissions:"끝낸 미션",statThings:"모은 물건",logout:"로그아웃",saveNow:"지금 저장",saving:"저장하는 중…",savedNow:"저장했어요!",saveFailed:"인터넷이 안 돼요, 다시 해 봐요",floatTrash:"물 위에 쓰레기가 있어요! ⬆ 위로를 눌러요!",floatFollow:"화살표를 따라 쓰레기를 주워요. 풍경도 봐요!",petHide:"집에서 쉬기",petShow:"같이 가기",petHome:"펫이 집에서 쉬어요. 누르면 다시 와요!",petBack:"펫이 다시 왔어요!",deleteAccount:"계정 지우기",deleteWarn:"이 플레이어와 인터넷에 저장된 기록(코인, 옷, 펫, 바다)이 모두 지워져요. 다시 되돌릴 수 없어요.",deletePin:"지우려면 비밀 그림 4개를 다시 눌러요.",keepAccount:"안 지울래요",accountDeleted:"계정을 지웠어요. 안녕!",whoAreYou:"이름이 뭐예요?",namePlaceholder:"이름",pickPin:"비밀 그림 4개를 눌러요",pinHelp:"꼭 기억해요. 다른 아이패드에서도 이 그림으로 들어가요.",newPlayer:"처음 왔나요? 이 이름으로 새로 시작할까요?",yesNew:"네, 새로 시작",tryAgain:"다시 하기",wrongPin:"비밀 그림이 달라요. 다시 해 봐요!",busy:"너무 많이 했어요. 조금 쉬었다가 다시 해요.",offline:"인터넷에 연결할 수 없어요. 와이파이를 확인해요.",hello:"안녕",savedOnline:"게임 기록이 인터넷에 저장돼서 어느 아이패드에서든 이어서 해요.",coop:"같이 하기",roomCode:"방 그림",makeRoom:"방 만들기",joinRoom:"방 들어가기",tellFriend:"친구들에게 이 그림 3개를 알려 줘요 (4명까지 같이 해요)",waitingFriend:"친구를 기다리는 중...",friendIn:"들어왔어요!",pickRoom:"방 그림 3개를 눌러요",noRoom:"그 그림의 방이 없어요.",roomFull:"그 방은 꽉 찼어요.",joined:"들어왔어요! 친구가 시작을 누르면 같이 시작해요.",joinedCity:"들어왔어요! 시작을 누르고 도시에서 친구를 찾아봐요.",waitHost:"친구가 게임을 시작해요",friendLeft:"친구가 나갔어요. 계속 헤엄쳐요!",leaveRoom:"방 나가기",needLogin:"같이 하려면 먼저 로그인해요",together:"같이",andaman:"안다만",andamanIndia:"인도 안다만",danger_triggerfish:"타이탄 트리거피시",danger_seaKrait:"줄무늬 바다뱀",danger_crownThorns:"악마불가사리",danger_moray:"자이언트 곰치",dangerFact_triggerfish:"튼튼한 앞니를 가진 커다란 산호초 물고기예요. 모래 위 둥지를 지키느라 가까이 오는 사람을 쫓아와요. 지키는 구역이 거꾸로 선 고깔 모양이라서, 위로 말고 옆으로 헤엄쳐 멀어져요!",dangerFact_seaKrait:"검은색과 푸른 회색 줄무늬가 있는 바다뱀이에요. 독이 아주 강하지만 순하고 부끄럼이 많아요. 절대 만지지 말고, 가만히 있으면서 지나가게 해 줘요.",dangerFact_crownThorns:"날카로운 독가시로 덮인 커다란 불가사리예요. 산호를 먹어서 너무 많아지면 산호초가 아파요. 절대 만지지 말고, 많이 보이면 어른이나 다이빙 선생님에게 알려요.",dangerFact_moray:"곰치는 바위 구멍에 숨어 살고, 숨을 쉬려고 입을 뻐끔뻐끔 열었다 닫아요. 겁이 많지만 무는 힘이 아주 세요. 산호초 구멍에는 절대 손을 넣지 마요!",dangerSeen_seaKrait:"줄무늬 바다뱀이에요! 지나가게 해 줘요.",dangerSeen_crownThorns:"가시 불가사리예요! 만지면 안 돼요.",dangerSeen_moray:"누가 빼꼼 봐요! 곰치예요. 구멍에서 떨어져요.",dangerHit_triggerfish:"앙! 옆으로 도망가요!",dangerHit_seaKrait:"앗! 진짜 바다뱀은 만지면 안 돼요.",dangerHit_crownThorns:"앗 따가워, 가시! 눈으로만 봐요.",dangerHit_moray:"앙! 구멍에 손을 넣으면 안 돼요.",coming_triggerfish:"트리거피시예요! 옆으로 도망가요!",escaped_triggerfish:"휴! 도망쳤어요!",friend_dugong:"듀공 가족",pet_dugong:"듀공",power_dugong:"포근하게 안아 주기: 동물에게 부딪혀도 가방에서 쓰레기가 안 떨어져요",friendFact_dugong:"듀공은 풀밭의 소처럼 바닷속 잘피(해초)를 뜯어 먹는 순한 바다소예요. 안다만 니코바르 제도를 대표하는 동물이에요. 이제 얼마 남지 않아서 깨끗한 해초밭과 조용한 배가 필요해요.",radhanagar:"라다나가르 해변",elephantBeach:"코끼리 해변",barrenIsland:"배런섬 화산",lighthouseAndaman:"노스베이 등대",havelock:"하브록섬",havelockJetty:"하브록 선착장",andamanTab:"인도",india:"인도",portBlair:"포트블레어",andamanSea:"안다만해",place_andaman:"인도 안다만 제도 하브록섬",surfaceHello_andaman:"저기 봐! 바닷가랑 화산이야!",recycleIntro_andaman:"인도에서는 '카바디왈라'가 헌 병과 캔을 사 가요!",go_andaman:"인도로 가기",nextOcean_andaman:"다음 바다: 인도 안다만 제도 🇮🇳",ingredient_lotus:"연꽃",ingredient_peacock:"공작 깃털",ingredient_conch:"소라고둥",got_lotus:"연꽃을 찾았어요! 인도의 꽃이에요.",got_peacock:"공작 깃털을 찾았어요! 공작은 인도의 새예요.",got_conch:"소라고둥을 찾았어요! 인도에서는 나팔처럼 불어요.",astory0:"고래상어가 {a:와} {b:를} 인도에 데려다 줬어요.",astory1:"고마워, 고래상어야! 물이 정말 맑아!",astory2:"봐! 하얀 모래랑 산호가 가득해!",astory3:"그런데 보라색 잠수함이 벌써 있었어요...",astory4:"음하하! 여기에도 쓰레기를 버렸지!",astory5:"내 로봇들은 이제 빠르다! 음하하!",astory6:"또 로봇이야! 같이 치우자!",astory7:"여기엔 트리거피시가 살아. 쫓아오면 옆으로 피하자!",aend0:"데빌 사이언스가 또 쪽지를 떨어뜨렸어요.",aend1:"연꽃, 깃털, 소라고둥... 거의 다 왔어!",aend2:"고마워, 바다 친구들! 안녕, 인도!",aend3:"고래상어가 다시 왔어요.",aend4:"바다가 깨끗해졌어요! 새 나라가 곧 와요! 🌏",top_saree:"사리 블라우스",tail_lehenga:"렝가 치마",accessory_tikka:"망 티카",dress_saree:"사리: 아주 긴 천 한 장이에요. 길이가 5~9미터나 돼요! 몸에 둘러 감고 끝자락을 어깨 위로 넘겨 입어요.",dress_lehenga:"렝가: 빙글빙글 퍼지는 인도의 긴 치마예요. 금실 수와 작은 거울 장식이 많고, 결혼식이나 축제 때 입어요.",dress_tikka:"망 티카: 가르마를 따라 늘어뜨려 이마에 거는 보석이에요. 인도의 신부들이 많이 해요.",house:"인어 집",houseOf:"{n}의 집",houseExit:"바다로",houseWall:"벽",houseFloor:"바닥",houseFriend:"친구 집",houseMine:"우리 집",houseTurn:"돌리기",houseAway:"넣기",houseNeedMore:"재활용을 더 모아 오면 만들 수 있어요!",houseFull:"자리가 없어요! 하나 넣고 다시 해 봐요.",houseVisitors:"구해 준 친구들이 놀러 왔어요!",houseNoVisitors:"바다에서 동물을 구해 주면 놀러 와요!",houseFact_bottle:"병으로 만들었어요! 플라스틱 병은 부드러운 천, 이불, 쿠션 솜으로 다시 태어나요.",houseFact_can:"캔으로 만들었어요! 캔은 재활용하면 약 60일 만에 새것이 될 수 있어요. 몇 번이고요!",houseFact_bag:"비닐봉지로 만들었어요! 비닐은 벤치나 화분을 만드는 플라스틱 판자가 될 수 있어요.",houseFact_net:"버려진 그물로 만들었어요! 진짜 그물도 카펫과 수영복으로 다시 만들어요.",furn_shellBed:"조개 침대",furn_sofa:"산호 소파",furn_table:"반짝 탁자",furn_stool:"캔 의자",furn_jellyLamp:"해파리 램프",furn_netRug:"그물 러그",furn_hammock:"해먹",furn_shelf:"선반",furn_coralPot:"산호 화분",furn_anemone:"말미잘",furn_mirror:"조개 거울",furn_chest:"보물 상자",furn_slide:"미끄럼틀",furn_kopitiam:"코피티암 식탁",furnFact_kopitiam:"싱가포르 사람들은 코피티암에서 카야 토스트랑 코피(커피)로 아침을 먹어요!",furn_orchid:"난초 화분",furnFact_orchid:"반다 미스 조아킴 난초는 싱가포르의 나라꽃이에요.",furn_merlion:"꼬마 머라이언",furnFact_merlion:"머라이언은 사자 머리에 물고기 꼬리예요. 싱가포르의 유명한 조각상이에요!",furn_soban:"소반",furnFact_soban:"한국에서는 소반이라는 작은 상에 밥을 차리고, 바닥에 앉아서 먹어요.",furn_onggi:"장독",furnFact_onggi:"한국에서는 커다란 옹기 장독에 김치랑 간장, 된장을 담가요.",furn_byeongpung:"병풍",furnFact_byeongpung:"병풍은 그림을 그린 접는 가리개예요. 옛날 한국 집에 있었어요.",furn_charpai:"차르파이 침대",furnFact_charpai:"인도의 차르파이는 줄을 엮어 만든 침대예요. 더운 날에도 시원해요!",furn_diya:"놋쇠 등잔",furnFact_diya:"인도에서는 빛의 축제 디왈리에 디야라는 작은 등불을 켜요.",furn_rangoli:"랑골리",furnFact_rangoli:"인도에서는 문 앞 바닥에 알록달록 랑골리를 그려요. 어서 오라는 뜻이에요!",furn_bubbler:"거품 기계",housePlace:"놓고 싶은 곳을 눌러요!",houseVisit:"친구 집 놀러 가기",houseLogin:"로그인하면 친구 집에 놀러 갈 수 있어요!",houseNoFriends:"친구와 같이 놀면 그 친구 집에 놀러 갈 수 있어요!",houseFriendAway:"지금은 그 집에 갈 수 없어요. 조금 뒤에 다시 해 봐요!"},Xf={en:uo,ko:Wf,zh:kf,fr:Gf,ja:zf};let ir="en";function Pp(i){ir=i,document.documentElement.lang=i==="zh"?"zh-Hans":i,document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=qf(e.dataset.i18n)})}function Lp(){return ir}function qf(i){return Xf[ir][i]??uo[i]}const za=["singapore","busan","andaman"],Yf={stool:{w:1,d:1,cost:{can:2},seat:[0,.85,0]},coralPot:{w:1,d:1,cost:{bag:2},seat:[0,1.35,.15]},netRug:{w:2,d:2,cost:{net:2},flat:!0,seat:[.3,.2,.3]},anemone:{w:1,d:1,cost:{bag:1,net:1},seat:[0,1.1,0]},table:{w:1,d:1,cost:{can:3},seat:[0,1.05,0]},jellyLamp:{w:1,d:1,cost:{bottle:2,can:1},seat:[.45,1.5,.3]},bubbler:{w:1,d:1,cost:{bottle:3},seat:[.3,1.7,.3]},mirror:{w:1,d:1,cost:{can:2,bottle:2},seat:[.2,.62,.15]},shelf:{w:1,d:1,cost:{can:3,bag:1},seat:[0,1.85,.05]},chest:{w:1,d:1,cost:{can:3,bag:2},seat:[0,.95,0]},hammock:{w:2,d:1,cost:{net:2,can:2},seat:[0,.82,0]},shellBed:{w:2,d:2,cost:{bottle:4,bag:2},seat:[0,.82,.25]},sofa:{w:2,d:1,cost:{bottle:3,bag:3},seat:[.4,.68,.1]},slide:{w:2,d:1,cost:{bottle:4,can:3},seat:[.7,1.55,0]},kopitiam:{w:2,d:1,cost:{can:3,bag:2},seat:[-.72,.6,0]},orchid:{w:1,d:1,cost:{bag:2,bottle:1},seat:[0,.55,.3]},merlion:{w:1,d:1,cost:{bottle:3,can:2},seat:[.25,.35,.25]},soban:{w:1,d:1,cost:{can:2,bag:1},seat:[0,.6,0]},onggi:{w:1,d:1,cost:{bag:2,bottle:2},seat:[-.2,.95,-.16]},byeongpung:{w:2,d:1,cost:{bottle:2,bag:3},seat:[.3,.3,.3]},charpai:{w:2,d:1,cost:{net:2,can:2},seat:[.2,.62,0]},diya:{w:1,d:1,cost:{can:3},seat:[.3,1.25,.3]},rangoli:{w:2,d:2,cost:{bag:2,bottle:2},flat:!0,seat:[.3,.2,.3]}};function ho(){return{wall:0,floor:0,owned:{shellBed:1},placed:[{id:"shellBed",x:1,z:0,r:0}]}}const jf={bottle:6,can:6,bag:4,net:2};function Kf(i){const e=ho();return i?{wall:i.wall??0,floor:i.floor??0,owned:{...i.owned??e.owned},placed:(i.placed??[]).filter(t=>t&&Yf[t.id]).map(t=>({...t}))}:e}const Zf=["clownfish","blueTang","angelfish","parrotfish","butterflyfish","pufferfish","seahorse","starfish","crab","lobster","shrimp","octopus","squid","jellyfish","turtle","dolphin","orca","blueWhale","beluga","narwhal","whaleShark","shark","manta","eagleRay","seal","walrus","penguin","nautilus","seaSlug","sunfish"];function Jf(){return{day:"",nest:null,found:[]}}const ja="daisy-coral.save.v1",As={coins:0,character:"daisy",friend:"coral",lang:co(),muted:!1,voice:!0,storySeen:!1,bestStars:0,pets:[],hiddenPets:[],rescued:{},cents:0,styles:ca,wardrobe:[],ingredients:{},found:[],safety:[],ocean:"singapore",unlocked:["singapore"],cleared:[],scrap:jf,home:ho(),friends:[],eggs:Jf(),savedAt:0},Ka="daisy-coral.account";function fo(){try{const i=localStorage.getItem(Ka);return i?JSON.parse(i):null}catch{return null}}function $f(i){try{i?localStorage.setItem(Ka,JSON.stringify(i)):localStorage.removeItem(Ka)}catch{}}function Dp(){const i=fo();try{i&&localStorage.removeItem(`${ja}.${i.uid}`)}catch{}$f(null)}function po(){const i=fo();return i?`${ja}.${i.uid}`:ja}function Ip(){try{const i=localStorage.getItem(po());if(i){const e=JSON.parse(i);return Rs({...As,cleared:ep(e.unlocked??[]),...e})}}catch{}return Rs({...As})}function Qf(i){return i.accessory!=="sunglasses"?i:{...i,accessory:"none",glasses:"sunglasses"}}function Rs(i){var t,n,a;const e=i.friend&&i.friend!==i.character?i.friend:tp(i.character);return{...i,lang:lo(i.lang)?i.lang:co(),friend:e,pets:[...i.pets],hiddenPets:[...i.hiddenPets],rescued:{...i.rescued},styles:Object.fromEntries(Lf.map(r=>[r,Qf({...ca[r],...i.styles[r]})])),wardrobe:i.wardrobe.map(r=>r==="accessory:sunglasses"?"glasses:sunglasses":r),ingredients:{...i.ingredients},found:[...i.found],safety:[...i.safety],unlocked:[...i.unlocked],cleared:[...i.cleared],scrap:{...i.scrap},home:Kf(i.home),friends:i.friends.map(r=>({...r})),eggs:{day:typeof((t=i.eggs)==null?void 0:t.day)=="string"?i.eggs.day:"",nest:(n=i.eggs)!=null&&n.nest?{...i.eggs.nest}:null,found:(((a=i.eggs)==null?void 0:a.found)??[]).filter(r=>Zf.includes(r))}}}function ep(i){return za.filter((e,t)=>t+1<za.length&&i.includes(za[t+1]))}function tp(i){return i==="daisy"?"coral":"daisy"}let Qi=null;function Fp(i){Qi=i}function Up(i){i.savedAt=Date.now(),np(i),Qi==null||Qi(i)}function np(i){try{localStorage.setItem(po(),JSON.stringify(i))}catch{}}const mo=[{id:"central",name:"region_central",place:"regionPlace_central",icon:"🦁",pic:"merlion",live:!0,lat:1.279,lon:103.854,center:{lat:1.2862,lon:103.8568},bounds:{south:1.2772,north:1.2952,west:103.836,east:103.8668}},{id:"east",name:"region_east",place:"regionPlace_east",icon:"🛶",pic:"kayak",live:!0,lat:1.373,lon:103.932,center:{lat:1.3475,lon:103.937},bounds:{south:1.329,north:1.366,west:103.913,east:103.961}},{id:"south",name:"region_south",place:"regionPlace_south",icon:"🐢",pic:"turtle",live:!0,lat:1.25,lon:103.74,center:{lat:1.2505,lon:103.8195},bounds:{south:1.2385,north:1.2595,west:103.806,east:103.835}},{id:"north",name:"region_north",place:"regionPlace_north",icon:"🦌",pic:"deer",live:!0,lat:1.434,lon:103.867,center:{lat:1.405,lon:103.7895},bounds:{south:1.3955,north:1.4165,west:103.7765,east:103.806}},{id:"west",name:"region_west",place:"regionPlace_west",icon:"🦦",pic:"otter",live:!0,lat:1.345,lon:103.69,center:{lat:1.3375,lon:103.731},bounds:{south:1.3265,north:1.348,west:103.7175,east:103.7475}},{id:"changi",name:"region_changi",place:"regionPlace_changi",icon:"✈️",pic:"plane",live:!0,lat:1.36,lon:104.005,center:{lat:1.3565,lon:103.9875},bounds:{south:1.345,north:1.368,west:103.976,east:103.999}},{id:"eastcoast",name:"region_eastcoast",place:"regionPlace_eastcoast",icon:"🏖️",pic:"bbq",live:!0,lat:1.275,lon:103.94,center:{lat:1.3045,lon:103.922},bounds:{south:1.296,north:1.3125,west:103.905,east:103.942}},{id:"woodlands",name:"region_woodlands",place:"regionPlace_woodlands",icon:"🦀",pic:"crab",live:!0,lat:1.425,lon:103.72,center:{lat:1.445,lon:103.78},bounds:{south:1.4325,north:1.4575,west:103.766,east:103.794}},{id:"botanic",name:"region_botanic",place:"regionPlace_botanic",icon:"🦢",pic:"swan",live:!0,lat:1.311,lon:103.765,center:{lat:1.315,lon:103.8165},bounds:{south:1.3035,north:1.3265,west:103.8085,east:103.8245}},{id:"macritchie",name:"region_macritchie",place:"regionPlace_macritchie",icon:"🐒",pic:"monkey",live:!0,lat:1.373,lon:103.806,center:{lat:1.3492,lon:103.824},bounds:{south:1.335,north:1.3635,west:103.806,east:103.842}},{id:"punggol",name:"region_punggol",place:"regionPlace_punggol",icon:"🐗",pic:"boar",live:!0,lat:1.418,lon:103.928,center:{lat:1.4,lon:103.905},bounds:{south:1.3795,north:1.4215,west:103.8805,east:103.931}}];let ar="central";function Np(i){ar=i}function Hp(){return ar}function Bp(i=ar){return mo.find(e=>e.id===i)}const Op=i=>mo.some(e=>e.id===i&&e.live);export{Pe as $,Mp as A,En as B,Ee as C,rp as D,Tp as E,St as F,rt as G,bp as H,yp as I,Cp as J,Ys as K,Bp as L,ta as M,Ep as N,Zs as O,ra as P,Jn as Q,up as R,_p as S,Lf as T,Lp as U,wp as V,mp as W,Pp as X,mo as Y,Up as Z,Sp as _,fo as a,op as a0,to as a1,vt as a2,$n as a3,hn as a4,sp as a5,vp as a6,ap as a7,no as a8,Br as a9,At as aa,pp as ab,cp as ac,ip as ad,Nf as ae,Uf as af,Rp as ag,xp as ah,Sf as ai,eo as aj,Ie as ak,hp as al,fp as am,dp as an,bn as ao,Tn as ap,$f as b,np as c,Tt as d,Lt as e,Dp as f,Ye as g,W as h,Op as i,Ap as j,la as k,Ip as l,tr as m,I as n,Fp as o,Ks as p,wt as q,Hp as r,Np as s,qf as t,jd as u,_t as v,nr as w,lp as x,gp as y,Ut as z};
