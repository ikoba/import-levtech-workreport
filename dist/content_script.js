var we=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ce(S){return S&&S.__esModule&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S}var ke={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(S,K){(function(W,_){S.exports=_()})(we,function W(){var _=typeof self<"u"?self:typeof window<"u"?window:_!==void 0?_:{},z=!_.document&&!!_.postMessage,V=_.IS_PAPA_WORKER||!1,X={},be=0,f={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(p(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!p(e.transform)&&e.transform,e.worker&&f.WORKERS_SUPPORTED){var n=function(){if(!f.WORKERS_SUPPORTED)return!1;var h=(A=_.URL||_.webkitURL||null,b=W.toString(),f.BLOB_URL||(f.BLOB_URL=A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",b,")();"],{type:"text/javascript"})))),l=new _.Worker(h),A,b;return l.onmessage=Ee,l.id=be++,X[l.id]=l}();return n.userStep=e.step,n.userChunk=e.chunk,n.userComplete=e.complete,n.userError=e.error,e.step=p(e.step),e.chunk=p(e.chunk),e.complete=p(e.complete),e.error=p(e.error),delete e.worker,void n.postMessage({input:t,config:e,workerId:n.id})}var s=null;return f.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),s=e.download?new oe(e):new se(e)):t.readable===!0&&p(t.read)&&p(t.on)?s=new he(e):(_.File&&t instanceof File||t instanceof Object)&&(s=new ue(e)),s.stream(t)},unparse:function(t,e){var r=!1,n=!0,s=",",h=`\r
`,l='"',A=l+l,b=!1,a=null,w=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||f.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(s=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(b=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(l=e.quoteChar),typeof e.header=="boolean"&&(n=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");a=e.columns}e.escapeChar!==void 0&&(A=e.escapeChar+l),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(w=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var u=new RegExp(ae(l),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return j(null,t,b);if(typeof t[0]=="object")return j(a||Object.keys(t[0]),t,b)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||a),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),j(t.fields||[],t.data||[],b);throw new Error("Unable to serialize unrecognized input");function j(i,y,L){var E="";typeof i=="string"&&(i=JSON.parse(i)),typeof y=="string"&&(y=JSON.parse(y));var I=Array.isArray(i)&&0<i.length,x=!Array.isArray(y[0]);if(I&&n){for(var T=0;T<i.length;T++)0<T&&(E+=s),E+=D(i[T],T);0<y.length&&(E+=h)}for(var o=0;o<y.length;o++){var d=I?i.length:y[o].length,v=!1,R=I?Object.keys(y[o]).length===0:y[o].length===0;if(L&&!I&&(v=L==="greedy"?y[o].join("").trim()==="":y[o].length===1&&y[o][0].length===0),L==="greedy"&&I){for(var g=[],F=0;F<d;F++){var C=x?i[F]:F;g.push(y[o][C])}v=g.join("").trim()===""}if(!v){for(var m=0;m<d;m++){0<m&&!R&&(E+=s);var N=I&&x?i[m]:m;E+=D(y[o][N],m)}o<y.length-1&&(!L||0<d&&!R)&&(E+=h)}}return E}function D(i,y){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var L=!1;w&&typeof i=="string"&&w.test(i)&&(i="'"+i,L=!0);var E=i.toString().replace(u,A);return(L=L||r===!0||typeof r=="function"&&r(i,y)||Array.isArray(r)&&r[y]||function(I,x){for(var T=0;T<x.length;T++)if(-1<I.indexOf(x[T]))return!0;return!1}(E,f.BAD_DELIMITERS)||-1<E.indexOf(s)||E.charAt(0)===" "||E.charAt(E.length-1)===" ")?l+E+l:E}}};if(f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!z&&!!_.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=de,f.ParserHandle=ge,f.NetworkStreamer=oe,f.FileStreamer=ue,f.StringStreamer=se,f.ReadableStreamStreamer=he,_.jQuery){var ie=_.jQuery;ie.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(h){if(!(ie(this).prop("tagName").toUpperCase()==="INPUT"&&ie(this).attr("type").toLowerCase()==="file"&&_.FileReader)||!this.files||this.files.length===0)return!0;for(var l=0;l<this.files.length;l++)r.push({file:this.files[l],inputElem:this,instanceConfig:ie.extend({},e)})}),n(),this;function n(){if(r.length!==0){var h,l,A,b,a=r[0];if(p(t.before)){var w=t.before(a.file,a.inputElem);if(typeof w=="object"){if(w.action==="abort")return h="AbortError",l=a.file,A=a.inputElem,b=w.reason,void(p(t.error)&&t.error({name:h},l,A,b));if(w.action==="skip")return void s();typeof w.config=="object"&&(a.instanceConfig=ie.extend(a.instanceConfig,w.config))}else if(w==="skip")return void s()}var u=a.instanceConfig.complete;a.instanceConfig.complete=function(j){p(u)&&u(j,a.file,a.inputElem),s()},f.parse(a.file,a.instanceConfig)}else p(t.complete)&&t.complete()}function s(){r.splice(0,1),n()}}}function H(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var r=ce(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new ge(r),(this._handle.streamer=this)._config=r}).call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&p(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);n!==void 0&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var h=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var l=h.meta.cursor;this._finished||(this._partialLine=s.substring(l-this._baseIndex),this._baseIndex=l),h&&h.data&&(this._rowCount+=h.data.length);var A=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(V)_.postMessage({results:h,workerId:f.WORKER_ID,finished:A});else if(p(this._config.chunk)&&!r){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!A||!p(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),A||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){p(this._config.error)?this._config.error(e):V&&this._config.error&&_.postMessage({workerId:f.WORKER_ID,error:e,finished:!1})}}function oe(t){var e;(t=t||{}).chunkSize||(t.chunkSize=f.RemoteChunkSize),H.call(this,t),this._nextChunk=z?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),z||(e.onload=J(this._chunkLoaded,this),e.onerror=J(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!z),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var n in r)e.setRequestHeader(n,r[n])}if(this._config.chunkSize){var s=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+s)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}z&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var n=r.getResponseHeader("Content-Range");return n===null?-1:parseInt(n.substring(n.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var n=e.statusText||r;this._sendError(new Error(n))}}function ue(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=f.LocalChunkSize),H.call(this,t);var n=typeof FileReader<"u";this.stream=function(s){this._input=s,r=s.slice||s.webkitSlice||s.mozSlice,n?((e=new FileReader).onload=J(this._chunkLoaded,this),e.onerror=J(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var s=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);s=r.call(s,this._start,h)}var l=e.readAsText(s,this._config.encoding);n||this._chunkLoaded({target:{result:l}})},this._chunkLoaded=function(s){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(s.target.result)},this._chunkError=function(){this._sendError(e.error)}}function se(t){var e;H.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,n=this._config.chunkSize;return n?(r=e.substring(0,n),e=e.substring(n)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function he(t){H.call(this,t=t||{});var e=[],r=!0,n=!1;this.pause=function(){H.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){H.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(s){this._input=s,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=J(function(s){try{e.push(typeof s=="string"?s:s.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=J(function(s){this._streamCleanUp(),this._sendError(s)},this),this._streamEnd=J(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=J(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ge(t){var e,r,n,s=Math.pow(2,53),h=-s,l=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,A=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,b=this,a=0,w=0,u=!1,j=!1,D=[],i={data:[],errors:[],meta:{}};if(p(t.step)){var y=t.step;t.step=function(o){if(i=o,I())E();else{if(E(),i.data.length===0)return;a+=o.data.length,t.preview&&a>t.preview?r.abort():(i.data=i.data[0],y(i,b))}}}function L(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function E(){return i&&n&&(T("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),n=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(o){return!L(o)})),I()&&function(){if(!i)return;function o(v,R){p(t.transformHeader)&&(v=t.transformHeader(v,R)),D.push(v)}if(Array.isArray(i.data[0])){for(var d=0;I()&&d<i.data.length;d++)i.data[d].forEach(o);i.data.splice(0,1)}else i.data.forEach(o)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function o(v,R){var g,F=t.header?{}:[];for(g=0;g<v.length;g++){var C=g,m=v[g];t.header&&(C=g>=D.length?"__parsed_extra":D[g]),t.transform&&(m=t.transform(m,C)),m=x(C,m),C==="__parsed_extra"?(F[C]=F[C]||[],F[C].push(m)):F[C]=m}return t.header&&(g>D.length?T("FieldMismatch","TooManyFields","Too many fields: expected "+D.length+" fields but parsed "+g,w+R):g<D.length&&T("FieldMismatch","TooFewFields","Too few fields: expected "+D.length+" fields but parsed "+g,w+R)),F}var d=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(o),d=i.data.length):i.data=o(i.data,0),t.header&&i.meta&&(i.meta.fields=D),w+=d,i}()}function I(){return t.header&&D.length===0}function x(o,d){return v=o,t.dynamicTypingFunction&&t.dynamicTyping[v]===void 0&&(t.dynamicTyping[v]=t.dynamicTypingFunction(v)),(t.dynamicTyping[v]||t.dynamicTyping)===!0?d==="true"||d==="TRUE"||d!=="false"&&d!=="FALSE"&&(function(R){if(l.test(R)){var g=parseFloat(R);if(h<g&&g<s)return!0}return!1}(d)?parseFloat(d):A.test(d)?new Date(d):d===""?null:d):d;var v}function T(o,d,v,R){var g={type:o,code:d,message:v};R!==void 0&&(g.row=R),i.errors.push(g)}this.parse=function(o,d,v){var R=t.quoteChar||'"';if(t.newline||(t.newline=function(C,m){C=C.substring(0,1048576);var N=new RegExp(ae(m)+"([^]*?)"+ae(m),"gm"),M=(C=C.replace(N,"")).split("\r"),B=C.split(`
`),Q=1<B.length&&B[0].length<M[0].length;if(M.length===1||Q)return`
`;for(var P=0,k=0;k<M.length;k++)M[k][0]===`
`&&P++;return P>=M.length/2?`\r
`:"\r"}(o,R)),n=!1,t.delimiter)p(t.delimiter)&&(t.delimiter=t.delimiter(o),i.meta.delimiter=t.delimiter);else{var g=function(C,m,N,M,B){var Q,P,k,O;B=B||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var ee=0;ee<B.length;ee++){var c=B[ee],re=0,$=0,te=0;k=void 0;for(var G=new de({comments:M,delimiter:c,newline:m,preview:10}).parse(C),Z=0;Z<G.data.length;Z++)if(N&&L(G.data[Z]))te++;else{var Y=G.data[Z].length;$+=Y,k!==void 0?0<Y&&(re+=Math.abs(Y-k),k=Y):k=Y}0<G.data.length&&($/=G.data.length-te),(P===void 0||re<=P)&&(O===void 0||O<$)&&1.99<$&&(P=re,Q=c,O=$)}return{successful:!!(t.delimiter=Q),bestDelimiter:Q}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);g.successful?t.delimiter=g.bestDelimiter:(n=!0,t.delimiter=f.DefaultDelimiter),i.meta.delimiter=t.delimiter}var F=ce(t);return t.preview&&t.header&&F.preview++,e=o,r=new de(F),i=r.parse(e,d,v),E(),u?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,r.abort(),e=p(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){b.streamer._halted?(u=!1,b.streamer.parseChunk(e,!0)):setTimeout(b.resume,3)},this.aborted=function(){return j},this.abort=function(){j=!0,r.abort(),i.meta.aborted=!0,p(t.complete)&&t.complete(i),e=""}}function ae(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function de(t){var e,r=(t=t||{}).delimiter,n=t.newline,s=t.comments,h=t.step,l=t.preview,A=t.fastMode,b=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(b=t.escapeChar),(typeof r!="string"||-1<f.BAD_DELIMITERS.indexOf(r))&&(r=","),s===r)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<f.BAD_DELIMITERS.indexOf(s))&&(s=!1),n!==`
`&&n!=="\r"&&n!==`\r
`&&(n=`
`);var a=0,w=!1;this.parse=function(u,j,D){if(typeof u!="string")throw new Error("Input must be a string");var i=u.length,y=r.length,L=n.length,E=s.length,I=p(h),x=[],T=[],o=[],d=a=0;if(!u)return q();if(t.header&&!j){var v=u.split(n)[0].split(r),R=[],g={},F=!1;for(var C in v){var m=v[C];p(t.transformHeader)&&(m=t.transformHeader(m,C));var N=m,M=g[m]||0;for(0<M&&(F=!0,N=m+"_"+M),g[m]=M+1;R.includes(N);)N=N+"_"+M;R.push(N)}if(F){var B=u.split(n);B[0]=R.join(r),u=B.join(n)}}if(A||A!==!1&&u.indexOf(e)===-1){for(var Q=u.split(n),P=0;P<Q.length;P++){if(o=Q[P],a+=o.length,P!==Q.length-1)a+=n.length;else if(D)return q();if(!s||o.substring(0,E)!==s){if(I){if(x=[],te(o.split(r)),fe(),w)return q()}else te(o.split(r));if(l&&l<=P)return x=x.slice(0,l),q(!0)}}return q()}for(var k=u.indexOf(r,a),O=u.indexOf(n,a),ee=new RegExp(ae(b)+ae(e),"g"),c=u.indexOf(e,a);;)if(u[a]!==e)if(s&&o.length===0&&u.substring(a,a+E)===s){if(O===-1)return q();a=O+L,O=u.indexOf(n,a),k=u.indexOf(r,a)}else if(k!==-1&&(k<O||O===-1))o.push(u.substring(a,k)),a=k+y,k=u.indexOf(r,a);else{if(O===-1)break;if(o.push(u.substring(a,O)),Y(O+L),I&&(fe(),w))return q();if(l&&x.length>=l)return q(!0)}else for(c=a,a++;;){if((c=u.indexOf(e,c+1))===-1)return D||T.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:x.length,index:a}),Z();if(c===i-1)return Z(u.substring(a,c).replace(ee,e));if(e!==b||u[c+1]!==b){if(e===b||c===0||u[c-1]!==b){k!==-1&&k<c+1&&(k=u.indexOf(r,c+1)),O!==-1&&O<c+1&&(O=u.indexOf(n,c+1));var re=G(O===-1?k:Math.min(k,O));if(u.substr(c+1+re,y)===r){o.push(u.substring(a,c).replace(ee,e)),u[a=c+1+re+y]!==e&&(c=u.indexOf(e,a)),k=u.indexOf(r,a),O=u.indexOf(n,a);break}var $=G(O);if(u.substring(c+1+$,c+1+$+L)===n){if(o.push(u.substring(a,c).replace(ee,e)),Y(c+1+$+L),k=u.indexOf(r,a),c=u.indexOf(e,a),I&&(fe(),w))return q();if(l&&x.length>=l)return q(!0);break}T.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:x.length,index:a}),c++}}else c++}return Z();function te(U){x.push(U),d=a}function G(U){var ye=0;if(U!==-1){var pe=u.substring(c+1,U);pe&&pe.trim()===""&&(ye=pe.length)}return ye}function Z(U){return D||(U===void 0&&(U=u.substring(a)),o.push(U),a=i,te(o),I&&fe()),q()}function Y(U){a=U,te(o),o=[],O=u.indexOf(n,a)}function q(U){return{data:x,errors:T,meta:{delimiter:r,linebreak:n,aborted:w,truncated:!!U,cursor:d+(j||0)}}}function fe(){h(q()),x=[],T=[]}},this.abort=function(){w=!0},this.getCharIndex=function(){return a}}function Ee(t){var e=t.data,r=X[e.workerId],n=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){n=!0,_e(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:me,resume:me};if(p(r.userStep)){for(var h=0;h<e.results.data.length&&(r.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},s),!n);h++);delete e.results}else p(r.userChunk)&&(r.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!n&&_e(e.workerId,e.results)}function _e(t,e){var r=X[t];p(r.userComplete)&&r.userComplete(e),r.terminate(),delete X[t]}function me(){throw new Error("Not implemented.")}function ce(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=ce(t[r]);return e}function J(t,e){return function(){t.apply(e,arguments)}}function p(t){return typeof t=="function"}return V&&(_.onmessage=function(t){var e=t.data;if(f.WORKER_ID===void 0&&e&&(f.WORKER_ID=e.workerId),typeof e.input=="string")_.postMessage({workerId:f.WORKER_ID,results:f.parse(e.input,e.config),finished:!0});else if(_.File&&e.input instanceof File||e.input instanceof Object){var r=f.parse(e.input,e.config);r&&_.postMessage({workerId:f.WORKER_ID,results:r,finished:!0})}}),(oe.prototype=Object.create(H.prototype)).constructor=oe,(ue.prototype=Object.create(H.prototype)).constructor=ue,(se.prototype=Object.create(se.prototype)).constructor=se,(he.prototype=Object.create(H.prototype)).constructor=he,f})})(ke);var Oe=ke.exports;const Re=Ce(Oe);var ve;(ve=xe(".tabContainer"))==null||ve.then(S=>{S.prepend(le)});async function xe(S){let K=null;for(;!K;)K=await new Promise(W=>{setTimeout(()=>{W(document.querySelector(S))},100)});return K}const le=document.createElement("button");le.type="button";le.textContent="CSVインポート";le.onclick=()=>{ne.click()};const ne=document.createElement("input");ne.type="file";ne.accept=".csv,text/plain";ne.onchange=()=>{if(ne.files==null)return;const S=ne.files[0];Re.parse(S,{header:!0,complete:K=>{const W={};for(const _ of K.data){const z=Object.values(_),V=z[0].replaceAll("/","");W[V]={start_time:z[1],end_time:z[2],relax_time:z[3],work_content:z[4]}}Te(W)}})};function Te(S){for(const K of Object.keys(S)){const W=S[K];for(const[_,z]of Object.entries(W)){const V=`input[name="data[DailyReport][${K}][${_}]"]`,X=document.querySelector(V);X!=null&&z!=null&&(X.value=z)}}}
