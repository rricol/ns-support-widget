"use strict";(()=>{var Oe=Object.create;var he=Object.defineProperty;var Me=Object.getOwnPropertyDescriptor;var Ce=Object.getOwnPropertyNames;var Le=Object.getPrototypeOf,Re=Object.prototype.hasOwnProperty;var Be=(w,n)=>()=>(n||w((n={exports:{}}).exports,n),n.exports);var Ne=(w,n,g,v)=>{if(n&&typeof n=="object"||typeof n=="function")for(let f of Ce(n))!Re.call(w,f)&&f!==g&&he(w,f,{get:()=>n[f],enumerable:!(v=Me(n,f))||v.enumerable});return w};var ze=(w,n,g)=>(g=w!=null?Oe(Le(w)):{},Ne(n||!w||!w.__esModule?he(g,"default",{value:w,enumerable:!0}):g,w));var ve=Be((P,Z)=>{(function(w,n){"use strict";var g="1.0.39",v="",f="?",E="function",k="undefined",L="object",O="string",U="major",i="model",t="name",e="type",o="vendor",r="version",x="architecture",A="console",d="mobile",l="tablet",m="smarttv",y="wearable",$="embedded",Y=500,q="Amazon",R="Apple",ne="ASUS",ae="BlackBerry",B="Browser",V="Chrome",_e="Edge",j="Firefox",H="Google",se="Huawei",K="LG",Q="Microsoft",le="Motorola",N="Opera",z="Samsung",de="Sharp",D="Sony",J="Xiaomi",ee="Zebra",ce="Facebook",we="Chromium OS",be="Mac OS",pe=" Browser",Ee=function(c,b){var s={};for(var u in c)b[u]&&b[u].length%2===0?s[u]=b[u].concat(c[u]):s[u]=c[u];return s},F=function(c){for(var b={},s=0;s<c.length;s++)b[c[s].toUpperCase()]=c[s];return b},ue=function(c,b){return typeof c===O?M(b).indexOf(M(c))!==-1:!1},M=function(c){return c.toLowerCase()},Ae=function(c){return typeof c===O?c.replace(/[^\d\.]/g,v).split(".")[0]:n},ie=function(c,b){if(typeof c===O)return c=c.replace(/^\s\s*/,v),typeof b===k?c:c.substring(0,Y)},I=function(c,b){for(var s=0,u,T,S,p,a,_;s<b.length&&!a;){var oe=b[s],fe=b[s+1];for(u=T=0;u<oe.length&&!a&&oe[u];)if(a=oe[u++].exec(c),a)for(S=0;S<fe.length;S++)_=a[++T],p=fe[S],typeof p===L&&p.length>0?p.length===2?typeof p[1]==E?this[p[0]]=p[1].call(this,_):this[p[0]]=p[1]:p.length===3?typeof p[1]===E&&!(p[1].exec&&p[1].test)?this[p[0]]=_?p[1].call(this,_,p[2]):n:this[p[0]]=_?_.replace(p[1],p[2]):n:p.length===4&&(this[p[0]]=_?p[3].call(this,_.replace(p[1],p[2])):n):this[p]=_||n;s+=2}},W=function(c,b){for(var s in b)if(typeof b[s]===L&&b[s].length>0){for(var u=0;u<b[s].length;u++)if(ue(b[s][u],c))return s===f?n:s}else if(ue(b[s],c))return s===f?n:s;return b.hasOwnProperty("*")?b["*"]:c},Te={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},me={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},ge={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[t,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[t,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[t,r],[/opios[\/ ]+([\w\.]+)/i],[r,[t,N+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[r,[t,N+" GX"]],[/\bopr\/([\w\.]+)/i],[r,[t,N]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[r,[t,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[t,r],[/quark(?:pc)?\/([-\w\.]+)/i],[r,[t,"Quark"]],[/\bddg\/([\w\.]+)/i],[r,[t,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[t,"UC"+B]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[r,[t,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[t,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[t,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[r,[t,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[r,[t,"Smart Lenovo "+B]],[/(avast|avg)\/([\w\.]+)/i],[[t,/(.+)/,"$1 Secure "+B],r],[/\bfocus\/([\w\.]+)/i],[r,[t,j+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[t,N+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[t,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[t,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[t,N+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[t,"MIUI "+B]],[/fxios\/([-\w\.]+)/i],[r,[t,j]],[/\bqihu|(qi?ho?o?|360)browser/i],[[t,"360"+pe]],[/\b(qq)\/([\w\.]+)/i],[[t,/(.+)/,"$1Browser"],r],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[t,/(.+)/,"$1"+pe],r],[/samsungbrowser\/([\w\.]+)/i],[r,[t,z+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[t,/_/g," "],r],[/metasr[\/ ]?([\d\.]+)/i],[r,[t,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[t,"Sogou Mobile"],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[t,r],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[t],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[t,ce],r],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[t,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[t,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[r,[t,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[t,V+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[t,V+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[t,"Android "+B]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[t,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[t,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,t],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[t,[r,W,Te]],[/(webkit|khtml)\/([\w\.]+)/i],[t,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[t,"Netscape"],r],[/(wolvic)\/([\w\.]+)/i],[t,r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[t,j+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[t,[r,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[t,[r,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[x,"amd64"]],[/(ia32(?=;))/i],[[x,M]],[/((?:i[346]|x)86)[;\)]/i],[[x,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[x,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[x,"armhf"]],[/windows (ce|mobile); ppc;/i],[[x,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[x,/ower/,v,M]],[/(sun4\w)[;\)]/i],[[x,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[x,M]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[i,[o,z],[e,l]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[i,[o,z],[e,d]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[i,[o,R],[e,d]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[i,[o,R],[e,l]],[/(macintosh);/i],[i,[o,R]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[i,[o,de],[e,d]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[i,[o,se],[e,l]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[i,[o,se],[e,d]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[i,/_/g," "],[o,J],[e,d]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[i,/_/g," "],[o,J],[e,l]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[i,[o,"OPPO"],[e,d]],[/\b(opd2\d{3}a?) bui/i],[i,[o,"OPPO"],[e,l]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[i,[o,"Vivo"],[e,d]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[i,[o,"Realme"],[e,d]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[i,[o,le],[e,d]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[i,[o,le],[e,l]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[i,[o,K],[e,l]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[i,[o,K],[e,d]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[i,[o,"Lenovo"],[e,l]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[i,/_/g," "],[o,"Nokia"],[e,d]],[/(pixel c)\b/i],[i,[o,H],[e,l]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[i,[o,H],[e,d]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[i,[o,D],[e,d]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[i,"Xperia Tablet"],[o,D],[e,l]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[i,[o,"OnePlus"],[e,d]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[i,[o,q],[e,l]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[i,/(.+)/g,"Fire Phone $1"],[o,q],[e,d]],[/(playbook);[-\w\),; ]+(rim)/i],[i,o,[e,l]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[i,[o,ae],[e,d]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[i,[o,ne],[e,l]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[i,[o,ne],[e,d]],[/(nexus 9)/i],[i,[o,"HTC"],[e,l]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[i,/_/g," "],[e,d]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[i,[o,"TCL"],[e,l]],[/(itel) ((\w+))/i],[[o,M],i,[e,W,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[i,[o,"Acer"],[e,l]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[i,[o,"Meizu"],[e,d]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[i,[o,"Ulefone"],[e,d]],[/droid.+; (a(?:015|06[35]|142p?))/i],[i,[o,"Nothing"],[e,d]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,i,[e,d]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,i,[e,l]],[/(surface duo)/i],[i,[o,Q],[e,l]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[i,[o,"Fairphone"],[e,d]],[/(u304aa)/i],[i,[o,"AT&T"],[e,d]],[/\bsie-(\w*)/i],[i,[o,"Siemens"],[e,d]],[/\b(rct\w+) b/i],[i,[o,"RCA"],[e,l]],[/\b(venue[\d ]{2,7}) b/i],[i,[o,"Dell"],[e,l]],[/\b(q(?:mv|ta)\w+) b/i],[i,[o,"Verizon"],[e,l]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[i,[o,"Barnes & Noble"],[e,l]],[/\b(tm\d{3}\w+) b/i],[i,[o,"NuVision"],[e,l]],[/\b(k88) b/i],[i,[o,"ZTE"],[e,l]],[/\b(nx\d{3}j) b/i],[i,[o,"ZTE"],[e,d]],[/\b(gen\d{3}) b.+49h/i],[i,[o,"Swiss"],[e,d]],[/\b(zur\d{3}) b/i],[i,[o,"Swiss"],[e,l]],[/\b((zeki)?tb.*\b) b/i],[i,[o,"Zeki"],[e,l]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],i,[e,l]],[/\b(ns-?\w{0,9}) b/i],[i,[o,"Insignia"],[e,l]],[/\b((nxa|next)-?\w{0,9}) b/i],[i,[o,"NextBook"],[e,l]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],i,[e,d]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],i,[e,d]],[/\b(ph-1) /i],[i,[o,"Essential"],[e,d]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[i,[o,"Envizen"],[e,l]],[/\b(trio[-\w\. ]+) b/i],[i,[o,"MachSpeed"],[e,l]],[/\btu_(1491) b/i],[i,[o,"Rotor"],[e,l]],[/(shield[\w ]+) b/i],[i,[o,"Nvidia"],[e,l]],[/(sprint) (\w+)/i],[o,i,[e,d]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[o,Q],[e,d]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[i,[o,ee],[e,l]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[i,[o,ee],[e,d]],[/smart-tv.+(samsung)/i],[o,[e,m]],[/hbbtv.+maple;(\d+)/i],[[i,/^/,"SmartTV"],[o,z],[e,m]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,K],[e,m]],[/(apple) ?tv/i],[o,[i,R+" TV"],[e,m]],[/crkey/i],[[i,V+"cast"],[o,H],[e,m]],[/droid.+aft(\w+)( bui|\))/i],[i,[o,q],[e,m]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[i,[o,de],[e,m]],[/(bravia[\w ]+)( bui|\))/i],[i,[o,D],[e,m]],[/(mitv-\w{5}) bui/i],[i,[o,J],[e,m]],[/Hbbtv.*(technisat) (.*);/i],[o,i,[e,m]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[o,ie],[i,ie],[e,m]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[e,m]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,i,[e,A]],[/droid.+; (shield) bui/i],[i,[o,"Nvidia"],[e,A]],[/(playstation [345portablevi]+)/i],[i,[o,D],[e,A]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[i,[o,Q],[e,A]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[i,[o,z],[e,y]],[/((pebble))app/i],[o,i,[e,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[i,[o,R],[e,y]],[/droid.+; (glass) \d/i],[i,[o,H],[e,y]],[/droid.+; (wt63?0{2,3})\)/i],[i,[o,ee],[e,y]],[/(quest( \d| pro)?)/i],[i,[o,ce],[e,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[e,$]],[/(aeobc)\b/i],[i,[o,q],[e,$]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[i,[e,d]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[i,[e,l]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[e,l]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[e,d]],[/(android[-\w\. ]{0,9});.+buil/i],[i,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[t,_e+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[t,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[t,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,t]],os:[[/microsoft (windows) (vista|xp)/i],[t,r],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[t,[r,W,me]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[r,W,me],[t,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[t,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[t,be],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,t],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[t,r],[/\(bb(10);/i],[r,[t,ae]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[t,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[t,j+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[t,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[r,[t,"watchOS"]],[/crkey\/([\d\.]+)/i],[r,[t,V+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[t,we],r],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[t,r],[/(sunos) ?([\w\.\d]*)/i],[[t,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[t,r]]},h=function(c,b){if(typeof c===L&&(b=c,c=n),!(this instanceof h))return new h(c,b).getResult();var s=typeof w!==k&&w.navigator?w.navigator:n,u=c||(s&&s.userAgent?s.userAgent:v),T=s&&s.userAgentData?s.userAgentData:n,S=b?Ee(ge,b):ge,p=s&&s.userAgent==u;return this.getBrowser=function(){var a={};return a[t]=n,a[r]=n,I.call(a,u,S.browser),a[U]=Ae(a[r]),p&&s&&s.brave&&typeof s.brave.isBrave==E&&(a[t]="Brave"),a},this.getCPU=function(){var a={};return a[x]=n,I.call(a,u,S.cpu),a},this.getDevice=function(){var a={};return a[o]=n,a[i]=n,a[e]=n,I.call(a,u,S.device),p&&!a[e]&&T&&T.mobile&&(a[e]=d),p&&a[i]=="Macintosh"&&s&&typeof s.standalone!==k&&s.maxTouchPoints&&s.maxTouchPoints>2&&(a[i]="iPad",a[e]=l),a},this.getEngine=function(){var a={};return a[t]=n,a[r]=n,I.call(a,u,S.engine),a},this.getOS=function(){var a={};return a[t]=n,a[r]=n,I.call(a,u,S.os),p&&!a[t]&&T&&T.platform&&T.platform!="Unknown"&&(a[t]=T.platform.replace(/chrome os/i,we).replace(/macos/i,be)),a},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return u},this.setUA=function(a){return u=typeof a===O&&a.length>Y?ie(a,Y):a,this},this.setUA(u),this};h.VERSION=g,h.BROWSER=F([t,r,U]),h.CPU=F([x]),h.DEVICE=F([i,o,e,A,d,m,l,y,$]),h.ENGINE=h.OS=F([t,r]),typeof P!==k?(typeof Z!==k&&Z.exports&&(P=Z.exports=h),P.UAParser=h):typeof define===E&&define.amd?define(function(){return h}):typeof w!==k&&(w.UAParser=h);var C=typeof w!==k&&(w.jQuery||w.Zepto);if(C&&!C.ua){var G=new h;C.ua=G.getResult(),C.ua.get=function(){return G.getUA()},C.ua.set=function(c){G.setUA(c);var b=G.getResult();for(var s in b)C.ua[s]=b[s]}}})(typeof window=="object"?window:P)});var xe=ze(ve(),1);function Ie(){let n=new xe.default().getResult(),g=n.device.type?n.device.type:"desktop",v=`${n.browser.name} ${n.browser.version}`,f=`${n.os.name} ${n.os.version}`,E=window.location.href,k=new URL(E).hostname.replace(/^www\./,"");return{device:g,browser:v,os:f,url:E,domain:k}}function te(){let{device:w,browser:n,os:g,url:v,domain:f}=Ie(),E=`Support Request - ${f}`,k=`
    


    ----------------------------------------

    Device: ${w}
    OS: ${g}
    Browser: ${n}
    Page: ${v}

    ----------------------------------------

    `,L=`
    mailto:support@numera.swiss?subject=${encodeURIComponent(E)}&body=${encodeURIComponent(k)}
    `,O=`
    Device: ${w}
    OS: ${g}
    Browser: ${n}
    Page: ${v}

    `,U=`
    <style>
        .ns-widget-wrapper {
            overflow: hidden;
        }
        .ns-widget {
            position: fixed;
            bottom: 0;
            right: -300px; /* Initially hidden, placed off-screen */
            top: 0;
            width: 300px;
            background-color: #222222;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 9999;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            transition: right 0.3s ease-in-out; /* Smooth slide */
        }
        .ns-widget.open {
            right: 0; /* Slide in */
        }
        .ns-widget-header {
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            padding: 0 0 1rem 0;
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            flex-shrink: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .ns-widget-content-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-items: center;
            padding: 0.5rem 1rem;
            text-align: center;
            background-color: transparent;
            border-radius: 5px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            text-decoration: none;
            color: rgba(255, 255, 255, 0.8);
        }
        .ns-widget-content-link:hover {
            background-color: #000000;
            color: white;
        }
        .ns-widget-content {
            flex-grow: 1;
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
        }
        .ns-widget-content-header {
            padding: 0 0 0.5rem 0;
            font-size: 0.875rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.5);
        }
        .ns-widget-content-body {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .ns-widget-footer {
            border-top: 1px solid rgba(255, 255, 255, 0.25);
            padding: 1rem 0 0 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
            margin-top: auto;
        }
        .ns-widget-version {
            padding: 0.5rem 0;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            text-align: center;
            flex-shrink: 0;
        }
        .ns-widget-toggle {
            position: absolute;
            bottom: 2rem;
            right: 100%;
            padding: 0.5rem;
            background-color: #222222;
            color: white;
            border: none;
            width: 2rem;
            height: 2rem;
            border-radius: 50% 0 0 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 10000; /* Ensure it appears above other elements */
        }
        .ns-support-close {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            text-decoration: none;
            background-color: #ff000088;
            color: white;
            width: 100%;
        }
        .ns-support-close:hover {
            background-color: #ff000099;
        }
        .ns-widget-container {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 9999;
        color: white;
        }
        .ns-widget-version {
        padding: 0.5rem 0;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        flex-shrink: 0;
        }
        .ns-widget-close {
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
        font-size: 1rem;
        }
        #ns-fillout-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        #ns-content-target {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            width: 100%;
            height: 100%;
        }
        .ns-widget-toggle svg {
            rotate: 180deg;
            transition: transform 0.3s;
        }
        .ns-widget-toggle.open svg {
            transform: rotate(180deg);
        }
        .ns-sys-info {
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.25);
            margin-bottom: 1rem;
        }
        .ns-sys-row {
            display: flex;
            justify-content: space-between;
        }
        #close-form {
            cursor: pointer;
            padding: 0.5rem 0;
            border-radius: 5px;
            text-decoration: underline;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            width: 100%;
            text-align: right;
            margin-left: auto;
        }
    </style>

    <div class="ns-widget-wrapper">
      <div id="widget" class="ns-widget">
        <div id="widget-header" class="ns-widget-header">
          <div id="ns-widget-title">Numera support</div>
          <div class="ns-widget-close ns-toggle">X</div>
        </div>
        <div class="ns-widget-content">
          <div class="ns-widget-content-header">
            <div class="ns-widget-content-title">Vous rencontrez un probl\xE8me avec votre site ?</div>
          </div>
          <div class="ns-widget-content-body">
            <button id="formButton" class="ns-widget-content-link">
                <span>Cr\xE9er un ticket</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>ticket</title><g fill="currentColor"><path d="M19,18.75H5A1.76,1.76,0,0,1,3.25,17V14.5A.76.76,0,0,1,4,13.75a1.75,1.75,0,0,0,0-3.5.76.76,0,0,1-.75-.75V7A1.76,1.76,0,0,1,5,5.25H19A1.76,1.76,0,0,1,20.75,7V9.5a.76.76,0,0,1-.75.75,1.75,1.75,0,0,0,0,3.5.76.76,0,0,1,.75.75V17A1.76,1.76,0,0,1,19,18.75ZM4.75,15.16V17a.25.25,0,0,0,.25.25H19a.25.25,0,0,0,.25-.25V15.16a3.25,3.25,0,0,1,0-6.32V7A.25.25,0,0,0,19,6.75H5A.25.25,0,0,0,4.75,7V8.84a3.25,3.25,0,0,1,0,6.32Z" id="1710274802976-2442731_ticket"></path></g></svg>
            </button>
            <a class="ns-widget-content-link" href="${L}">
                <span>Contacter le support</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>envelope</title><g fill="currentColor"><path d="M19,4.25H5A1.76,1.76,0,0,0,3.25,6V18A1.76,1.76,0,0,0,5,19.75H19A1.76,1.76,0,0,0,20.75,18V6A1.76,1.76,0,0,0,19,4.25ZM5,5.75H19a.25.25,0,0,1,.25.25V7.54L12,11.16,4.75,7.54V6A.25.25,0,0,1,5,5.75Zm14,12.5H5A.25.25,0,0,1,4.75,18V9.21l6.91,3.46a.76.76,0,0,0,.68,0l6.91-3.46V18A.25.25,0,0,1,19,18.25Z" id="1710274802992-1148876_envelope"></path></g></svg>
            </a>
          </div>
          <div id="ns-content-target">
          </div>
        </div>
        <div class="ns-widget-footer">
          <div class="ns-sys-info">
            <div class="ns-sys-row"><span> device:</span><span>${w} </span></div>
            <div class="ns-sys-row"><span> browser:</span><span>${n} </span></div>
            <div class="ns-sys-row"><span> os:</span><span>${g} </span></div>
          </div>
          <button class="ns-support-close">Quitter le mode support</button>
        </div>
        <div class="ns-widget-version">v1.0.0</div>
        <button id="ns-widget-icon" class="ns-widget-toggle ns-toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>
    </div>
    `,i=document.createElement("div");i.innerHTML=U,i.id="widget-container",document.body.appendChild(i);let t=document.getElementById("widget"),e=document.querySelectorAll(".ns-toggle"),o=document.querySelector(".ns-support-close"),r=document.getElementById("ns-widget-icon");document.querySelector("#formButton")?.addEventListener("click",()=>{let A=document.getElementById("ns-fillout-wrapper"),d=document.querySelector("script[src='https://server.fillout.com/embed/v1/']");A?.remove(),d?.remove();let l=document.getElementById("ns-content-target"),m=document.createElement("div");m.id="ns-fillout-wrapper",m.innerHTML=`
        <div style="width:100%;height:100%;" data-fillout-id="n7MAk6Mrhdus" data-inst="${f}" data-sysinfo="${O}" data-src="WF Embed Support" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
        <span id="close-form" >fermer</span>
        `,l?.appendChild(m);let y=document.createElement("script");y.src="https://server.fillout.com/embed/v1/",document.body.appendChild(y),m.querySelector("#close-form")?.addEventListener("click",()=>{m.remove(),y.remove()})}),e?.forEach(A=>{A.addEventListener("click",()=>{t?.classList.toggle("open"),r?.classList.toggle("open"),X()})}),o?.addEventListener("click",()=>{i.remove(),ke()})}function re(){let w=new URLSearchParams(window.location.search);if(w.has("support")){w.delete("support");let n=w.toString(),g=n===""?window.location.pathname:`${window.location.pathname}?${n}`;window.history.replaceState(null,"",g),window.location.href!==g&&(window.location.href=g)}}function ye(){localStorage.getItem("__Support-ns")||localStorage.setItem("__Support-ns","false")}function Se(){return localStorage.getItem("__Support-ns")}function ke(){localStorage.removeItem("__Support-ns")}function X(){localStorage.getItem("__Support-ns")==="true"?localStorage.setItem("__Support-ns","false"):localStorage.setItem("__Support-ns","true")}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let w=Se();if(w?(re(),te()):new URLSearchParams(window.location.search).has("support")&&(ye(),re(),te()),w==="true"){let n=document.getElementById("ns-widget-icon");n&&(n.click(),X())}});})();
