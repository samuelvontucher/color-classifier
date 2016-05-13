/*!
 * color-classifier
 * Classify the color along the reference color.
 *
 * @author tsuyoshiwada
 * @license MIT
 * @version 0.0.1
 */
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.ColorClassifier=r()}(this,function(){"use strict";function e(e,r){return r={exports:{}},e(r,r.exports),r.exports}function r(e,r){var n=[].concat(u.toConsumableArray(e));return n.sort(function(e,n){return e[r]<n[r]?-1:e[r]>n[r]?1:0}),n.shift()}function n(e){return e*Math.PI/180}function t(e){return e*(180/Math.PI)}function a(e,r){return Math.sqrt(e*e+r*r)}function o(e){return e*e}function i(e){return e*e*e*e*e*e*e}var u={};u["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u.classCallCheck=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},u.createClass=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),u.defineProperty=function(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e},u.slicedToArray=function(){function e(e,r){var n=[],t=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(t=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(l){a=!0,o=l}finally{try{!t&&u["return"]&&u["return"]()}finally{if(a)throw o}}return n}return function(r,n){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u.toConsumableArray=function(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)};var l,c=e(function(e){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}),s=c&&"object"===("undefined"==typeof c?"undefined":u["typeof"](c))&&"default"in c?c["default"]:c,h=e(function(e){var r=s,n={};for(var t in r)r.hasOwnProperty(t)&&(n[r[t].join()]=t);var a=e.exports={rgb:{channels:3},hsl:{channels:3},hsv:{channels:3},hwb:{channels:3},cmyk:{channels:4},xyz:{channels:3},lab:{channels:3},lch:{channels:3},hex:{channels:1},keyword:{channels:1},ansi16:{channels:1},ansi256:{channels:1},hcg:{channels:3},apple:{channels:3}};for(var o in a)if(a.hasOwnProperty(o)){if(!("channels"in a[o]))throw new Error("missing channels property: "+o);var i=a[o].channels;delete a[o].channels,Object.defineProperty(a[o],"channels",{value:i})}a.rgb.hsl=function(e){var r,n,t,a=e[0]/255,o=e[1]/255,i=e[2]/255,u=Math.min(a,o,i),l=Math.max(a,o,i),c=l-u;return l===u?r=0:a===l?r=(o-i)/c:o===l?r=2+(i-a)/c:i===l&&(r=4+(a-o)/c),r=Math.min(60*r,360),0>r&&(r+=360),t=(u+l)/2,n=l===u?0:.5>=t?c/(l+u):c/(2-l-u),[r,100*n,100*t]},a.rgb.hsv=function(e){var r,n,t,a=e[0],o=e[1],i=e[2],u=Math.min(a,o,i),l=Math.max(a,o,i),c=l-u;return n=0===l?0:c/l*1e3/10,l===u?r=0:a===l?r=(o-i)/c:o===l?r=2+(i-a)/c:i===l&&(r=4+(a-o)/c),r=Math.min(60*r,360),0>r&&(r+=360),t=l/255*1e3/10,[r,n,t]},a.rgb.hwb=function(e){var r=e[0],n=e[1],t=e[2],o=a.rgb.hsl(e)[0],i=1/255*Math.min(r,Math.min(n,t));return t=1-1/255*Math.max(r,Math.max(n,t)),[o,100*i,100*t]},a.rgb.cmyk=function(e){var r,n,t,a,o=e[0]/255,i=e[1]/255,u=e[2]/255;return a=Math.min(1-o,1-i,1-u),r=(1-o-a)/(1-a)||0,n=(1-i-a)/(1-a)||0,t=(1-u-a)/(1-a)||0,[100*r,100*n,100*t,100*a]},a.rgb.keyword=function(e){return n[e.join()]},a.keyword.rgb=function(e){return r[e]},a.rgb.xyz=function(e){var r=e[0]/255,n=e[1]/255,t=e[2]/255;r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92;var a=.4124*r+.3576*n+.1805*t,o=.2126*r+.7152*n+.0722*t,i=.0193*r+.1192*n+.9505*t;return[100*a,100*o,100*i]},a.rgb.lab=function(e){var r,n,t,o=a.rgb.xyz(e),i=o[0],u=o[1],l=o[2];return i/=95.047,u/=100,l/=108.883,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,u=u>.008856?Math.pow(u,1/3):7.787*u+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,r=116*u-16,n=500*(i-u),t=200*(u-l),[r,n,t]},a.hsl.rgb=function(e){var r,n,t,a,o,i=e[0]/360,u=e[1]/100,l=e[2]/100;if(0===u)return o=255*l,[o,o,o];n=.5>l?l*(1+u):l+u-l*u,r=2*l-n,a=[0,0,0];for(var c=0;3>c;c++)t=i+1/3*-(c-1),0>t&&t++,t>1&&t--,o=1>6*t?r+6*(n-r)*t:1>2*t?n:2>3*t?r+(n-r)*(2/3-t)*6:r,a[c]=255*o;return a},a.hsl.hsv=function(e){var r,n,t=e[0],a=e[1]/100,o=e[2]/100;return 0===o?[0,0,0]:(o*=2,a*=1>=o?o:2-o,n=(o+a)/2,r=2*a/(o+a),[t,100*r,100*n])},a.hsv.rgb=function(e){var r=e[0]/60,n=e[1]/100,t=e[2]/100,a=Math.floor(r)%6,o=r-Math.floor(r),i=255*t*(1-n),u=255*t*(1-n*o),l=255*t*(1-n*(1-o));switch(t*=255,a){case 0:return[t,l,i];case 1:return[u,t,i];case 2:return[i,t,l];case 3:return[i,u,t];case 4:return[l,i,t];case 5:return[t,i,u]}},a.hsv.hsl=function(e){var r,n,t=e[0],a=e[1]/100,o=e[2]/100;return n=(2-a)*o,r=a*o,r/=1>=n?n:2-n,r=r||0,n/=2,[t,100*r,100*n]},a.hwb.rgb=function(e){var r,n,t,a,o=e[0]/360,i=e[1]/100,u=e[2]/100,l=i+u;l>1&&(i/=l,u/=l),r=Math.floor(6*o),n=1-u,t=6*o-r,0!==(1&r)&&(t=1-t),a=i+t*(n-i);var c,s,h;switch(r){default:case 6:case 0:c=n,s=a,h=i;break;case 1:c=a,s=n,h=i;break;case 2:c=i,s=n,h=a;break;case 3:c=i,s=a,h=n;break;case 4:c=a,s=i,h=n;break;case 5:c=n,s=i,h=a}return[255*c,255*s,255*h]},a.cmyk.rgb=function(e){var r,n,t,a=e[0]/100,o=e[1]/100,i=e[2]/100,u=e[3]/100;return r=1-Math.min(1,a*(1-u)+u),n=1-Math.min(1,o*(1-u)+u),t=1-Math.min(1,i*(1-u)+u),[255*r,255*n,255*t]},a.xyz.rgb=function(e){var r,n,t,a=e[0]/100,o=e[1]/100,i=e[2]/100;return r=3.2406*a+-1.5372*o+i*-.4986,n=a*-.9689+1.8758*o+.0415*i,t=.0557*a+o*-.204+1.057*i,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*=12.92,r=Math.min(Math.max(0,r),1),n=Math.min(Math.max(0,n),1),t=Math.min(Math.max(0,t),1),[255*r,255*n,255*t]},a.xyz.lab=function(e){var r,n,t,a=e[0],o=e[1],i=e[2];return a/=95.047,o/=100,i/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,r=116*o-16,n=500*(a-o),t=200*(o-i),[r,n,t]},a.lab.xyz=function(e){var r,n,t,a,o=e[0],i=e[1],u=e[2];return 8>=o?(n=100*o/903.3,a=7.787*(n/100)+16/116):(n=100*Math.pow((o+16)/116,3),a=Math.pow(n/100,1/3)),r=.008856>=r/95.047?r=95.047*(i/500+a-16/116)/7.787:95.047*Math.pow(i/500+a,3),t=.008859>=t/108.883?t=108.883*(a-u/200-16/116)/7.787:108.883*Math.pow(a-u/200,3),[r,n,t]},a.lab.lch=function(e){var r,n,t,a=e[0],o=e[1],i=e[2];return r=Math.atan2(i,o),n=360*r/2/Math.PI,0>n&&(n+=360),t=Math.sqrt(o*o+i*i),[a,t,n]},a.lch.lab=function(e){var r,n,t,a=e[0],o=e[1],i=e[2];return t=i/360*2*Math.PI,r=o*Math.cos(t),n=o*Math.sin(t),[a,r,n]},a.rgb.ansi16=function(e){var r=e[0],n=e[1],t=e[2],o=1 in arguments?arguments[1]:a.rgb.hsv(e)[2];if(o=Math.round(o/50),0===o)return 30;var i=30+(Math.round(t/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===o&&(i+=60),i},a.hsv.ansi16=function(e){return a.rgb.ansi16(a.hsv.rgb(e),e[2])},a.rgb.ansi256=function(e){var r=e[0],n=e[1],t=e[2];if(r===n&&n===t)return 8>r?16:r>248?231:Math.round((r-8)/247*24)+232;var a=16+36*Math.round(r/255*5)+6*Math.round(n/255*5)+Math.round(t/255*5);return a},a.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),r=r/10.5*255,[r,r,r];var n=.5*(~~(e>50)+1),t=(1&r)*n*255,a=(r>>1&1)*n*255,o=(r>>2&1)*n*255;return[t,a,o]},a.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}e-=16;var n,t=Math.floor(e/36)/5*255,a=Math.floor((n=e%36)/6)/5*255,o=n%6/5*255;return[t,a,o]},a.rgb.hex=function(e){var r=((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2])),n=r.toString(16).toUpperCase();return"000000".substring(n.length)+n},a.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}/i);if(!r)return[0,0,0];var n=parseInt(r[0],16),t=n>>16&255,a=n>>8&255,o=255&n;return[t,a,o]},a.rgb.hcg=function(e){var r,n,t=e[0]/255,a=e[1]/255,o=e[2]/255,i=Math.max(Math.max(t,a),o),u=Math.min(Math.min(t,a),o),l=i-u;return r=1>l?u/(1-l):0,n=0>=l?0:i===t?(a-o)/l%6:i===a?2+(o-t)/l:4+(t-a)/l+4,n/=6,n%=1,[360*n,100*l,100*r]},a.hsl.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=1,a=0;return t=.5>n?2*r*n:2*r*(1-n),1>t&&(a=(n-.5*t)/(1-t)),[e[0],100*t,100*a]},a.hsv.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=r*n,a=0;return 1>t&&(a=(n-t)/(1-t)),[e[0],100*t,100*a]},a.hcg.rgb=function(e){var r=e[0]/360,n=e[1]/100,t=e[2]/100;if(0===n)return[255*t,255*t,255*t];var a=[0,0,0],o=r%1*6,i=o%1,u=1-i,l=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=i,a[2]=0;break;case 1:a[0]=u,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=i;break;case 3:a[0]=0,a[1]=u,a[2]=1;break;case 4:a[0]=i,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=u}return l=(1-n)*t,[255*(n*a[0]+l),255*(n*a[1]+l),255*(n*a[2]+l)]},a.hcg.hsv=function(e){var r=e[1]/100,n=e[2]/100,t=r+n*(1-r),a=0;return t>0&&(a=r/t),[e[0],100*a,100*t]},a.hcg.hsl=function(e){var r=e[1]/100,n=e[2]/100,t=n*(1-r)+.5*r,a=0;return t>0&&.5>t?a=r/(2*t):t>=.5&&1>t&&(a=r/(2*(1-t))),[e[0],100*a,100*t]},a.hcg.hwb=function(e){var r=e[1]/100,n=e[2]/100,t=r+n*(1-r);return[e[0],100*(t-r),100*(1-t)]},a.hwb.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=1-n,a=t-r,o=0;return 1>a&&(o=(t-a)/(1-a)),[e[0],100*a,100*o]},a.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},a.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]}}),f=h&&"object"===("undefined"==typeof h?"undefined":u["typeof"](h))&&"default"in h?h["default"]:h,d=e(function(e){function r(){for(var e={},r=i.length,n=0;r>n;n++)e[i[n]]={distance:-1,parent:null};return e}function n(e){var n=r(),t=[e];for(n[e].distance=0;t.length;)for(var a=t.pop(),i=Object.keys(o[a]),u=i.length,l=0;u>l;l++){var c=i[l],s=n[c];-1===s.distance&&(s.distance=n[a].distance+1,s.parent=a,t.unshift(c))}return n}function t(e,r){return function(n){return r(e(n))}}function a(e,r){for(var n=[r[e].parent,e],a=o[r[e].parent][e],i=r[e].parent;r[i].parent;)n.unshift(r[i].parent),a=t(o[r[i].parent][i],a),i=r[i].parent;return a.conversion=n,a}var o=f,i=Object.keys(o);e.exports=function(e){for(var r=n(e),t={},o=Object.keys(r),i=o.length,u=0;i>u;u++){var l=o[u],c=r[l];null!==c.parent&&(t[l]=a(l,r))}return t}}),b=d&&"object"===("undefined"==typeof d?"undefined":u["typeof"](d))&&"default"in d?d["default"]:d,v=e(function(e){function r(e){var r=function(r){return void 0===r||null===r?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),e(r))};return"conversion"in e&&(r.conversion=e.conversion),r}function n(e){var r=function(r){if(void 0===r||null===r)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var n=e(r);if("object"===("undefined"==typeof n?"undefined":u["typeof"](n)))for(var t=n.length,a=0;t>a;a++)n[a]=Math.round(n[a]);return n};return"conversion"in e&&(r.conversion=e.conversion),r}var t=f,a=b,o={},i=Object.keys(t);i.forEach(function(e){o[e]={},Object.defineProperty(o[e],"channels",{value:t[e].channels});var i=a(e),u=Object.keys(i);u.forEach(function(t){var a=i[t];o[e][t]=n(a),o[e][t].raw=r(a)})}),e.exports=o}),g=v&&"object"===("undefined"==typeof v?"undefined":u["typeof"](v))&&"default"in v?v["default"]:v,y=Math.abs,p=Math.atan2,m=Math.cos,k=Math.min,M=Math.exp,w=Math.sqrt,x=Math.sin,C=/^#([a-fA-F0-9]{3})$/,F=/^#([a-fA-F0-9]{6})$/,A={CIEDE2000:"CIEDE2000",HSV:"HSV",RGB:"RGB"},P=(l={},u.defineProperty(l,A.CIEDE2000,"ciede2kDistance"),u.defineProperty(l,A.HSV,"hsvDistance"),u.defineProperty(l,A.RGB,"rgbDistance"),l),j=function(){function e(r){u.classCallCheck(this,e),this.original=r,this.hex=e.normalizeHex(r),this.rgb=e.parseHex(this.hex),this.hsv=e.rgbToHsv(this.rgb)}return u.createClass(e,null,[{key:"normalizeHex",value:function(e){if(F.test(e))return e;if(C.test(e)){var r=e.slice(1,2),n=e.slice(2,3),t=e.slice(3,4);return"#"+(r+r)+(n+n)+(t+t)}return null}},{key:"parseHex",value:function(e){var r=this.normalizeHex(e);if(null===r)return null;var n=g.hex.rgb(r),t=u.slicedToArray(n,3),a=t[0],o=t[1],i=t[2];return{r:a,g:o,b:i}}},{key:"rgbToHsv",value:function(e){var r=g.rgb.hsv([e.r,e.g,e.b]),n=u.slicedToArray(r,3),t=n[0],a=n[1],o=n[2];return{h:t,s:a,v:o}}},{key:"distance",value:function(r,n,t){return e[P[t]](r,n)}},{key:"rgbDistance",value:function(e,r){var n=e.rgb,t=r.rgb;return w(o(n.r-t.r)+o(n.g-t.g)+o(n.b-t.b))}},{key:"hsvDistance",value:function(e,r){var n=e.hsv,t=e.hsv,a=0;return a=n.h>t.h?k(n.h-t.h,t.h-n.h+360):k(t.h-n.h,n.h-t.h+360),w(o(a)+o(n.s-t.s)+o(n.v-t.v))}},{key:"ciede2kDistance",value:function(r,n){var t=g.hex.lab(r.hex),a=g.hex.lab(n.hex),o=u.slicedToArray(t,3),i=o[0],l=o[1],c=o[2],s=u.slicedToArray(a,3),h=s[0],f=s[1],d=s[2];return e._ciede2kDistance(i,l,c,h,f,d)}},{key:"_ciede2kDistance",value:function(e,r,u,l,c,s){var h=1,f=1,d=1,b=a(r,u),v=a(c,s),g=(b+v)/2,k=.5*(1-w(i(g)/(i(g)+i(25)))),C=(1+k)*r,F=(1+k)*c,A=w(o(C)+o(u)),P=w(o(F)+o(s)),j=t(p(u,C)),E=0===u&&0===C?0:j>0?j:j+360,T=t(p(s,F)),O=0===s&&0===F?0:T>0?T:T+360,q=l-e,D=P-A,S=2*w(A*P)*x(n(b*v===0?0:y(O-E)<=180?O-E:O-E>180?O-E-360:O-E+360)/2),z=(e+l)/2,H=(A+P)/2,I=void 0;I=b*v===0?E+O:y(E-O)<=180?(E+O)/2:y(E-O)>180&&360>E+O?(E+O+360)/2:(E+O-360)/2;var B=1-.17*m(n(I-30))+.24*m(n(2*I))+.32*m(n(3*I+6))-.2*m(n(4*I-63)),G=30*M(-o((I-275)/25)),R=w(i(H)/(i(H)+i(25))),V=1+.015*o(z-50)/w(20+o(z-50)),$=1+.045*H,_=1+.015*H*B,U=-2*R*x(n(2*G));return w(o(q/(V*h))+o(D/($*f))+o(S/(_*d))+U*(D/($*f))*(S/(_*d)))}}]),e}(),E=["#000000","#C0C0C0","#808080","#FFFFFF","#800000","#FF0000","#800080","#FF00FF","#008000","#00FF00","#808000","#FFFF00","#000080","#0000FF","#008080","#00FFFF"],T=["#b5184f","#cd1f42","#dd3737","#e55125","#e66d00","#f29500","#eeac00","#e2c500","#c8bb00","#a4b300","#4aa315","#009a55","#008c69","#007e77","#007c8c","#006b93","#005a91","#00569c","#00509d","#474798","#663e8c","#793580","#892c71","#ab2664","#efefef","#d2d2d2","#b6b6b6","#9b9b9b","#818181","#696969","#525252","#3c3c3c","#292929"],O=Object.freeze({W3C:E,PCCS:T}),q=function(){function e(){var r=arguments.length<=0||void 0===arguments[0]?E:arguments[0],n=arguments.length<=1||void 0===arguments[1]?A.CIEDE2000:arguments[1];u.classCallCheck(this,e),this.setPalette(r),this.setAlgorithmType(n)}return u.createClass(e,null,[{key:"throwError",value:function(e){throw new Error("[ColorClassifier] "+e)}}]),u.createClass(e,[{key:"setPalette",value:function(r){Array.isArray(r)||e.throwError("palette is should be a Array."),this.palette=r.map(function(e){return new j(e)})}},{key:"getPalette",value:function(){return this.palette}},{key:"setAlgorithmType",value:function(r){A.hasOwnProperty(r)||e.throwError(r+" is an undefined algorithm type."),this.algorithmType=r}},{key:"getAlgorithmType",value:function(){return this.algorithmType}},{key:"classify",value:function(e){var n=this.palette,t=this.algorithmType,a=new j(e),o=[];return n.forEach(function(e){o.push({distance:j.distance(e,a,t),color:e.original})}),r(o,"distance").color}},{key:"classifyFromArray",value:function(e){var r=this,n={};return e.forEach(function(e){var t=r.classify(e);n.hasOwnProperty(t)||(n[t]=[]),n[t].push(e)}),n}}]),e}();return q.Palette=O,q.AlgorithmTypes=A,q});