!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("ExcelJS")):"function"==typeof define&&define.amd?define(["ExcelJS"],t):"object"==typeof exports?exports.Table2Excel=t(require("ExcelJS")):e.Table2Excel=t(e.ExcelJS)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"saveAsExcel",function(){return i}),n.d(t,"columnIndex",function(){return a}),n.d(t,"cellPosition",function(){return c}),n.d(t,"mergeCells",function(){return s}),n.d(t,"argb",function(){return u});var o=n(1),r=n(6),i=(n.n(r),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"table",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"xlsx",i=o.a[n];if(!i)return void console.error(n+" file extension is not supported");e.xlsx.writeBuffer().then(function(e){Object(r.saveAs)(new Blob([e.buffer],{type:i}),t+"."+n)})}),l=function(e){var t="A".charCodeAt(0);return String.fromCharCode(t+e-1)},a=function(e){var t=void 0;if((e+=1)<=26)t=l(e);else{var n=e%26,o=Math.floor(e/26);t=0===n?l(o-1)+l(26):l(o)+l(n)}return t},c=function(e,t){return""+a(e)+(t+1)},s=function(e,t,n,o,r){var i=c(t,n),l=c(o,r);return e.mergeCells(i,l),e.getCell(i)},u=function(e){var t=e.split("(")[1].split(")")[0].split(",").map(function(e,t){return 3===t?255*e:e});return 3===t.length&&t.push(255),t.unshift(t.pop()),t.map(function(e){var t=parseInt(e).toString(16);return 1===t.length?"0"+t:t}).join("").toUpperCase()}},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var o={xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},r=.14},function(e,t,n){"use strict";var o=n(9),r=n(10),i=n(11),l=n(12),a=n(13),c=n(14);t.a={fontPlugin:o.a,fillPlugin:r.a,formPlugin:i.a,alignmentPlugin:l.a,hyperlinkPlugin:a.a,autoWidthPlugin:c.a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0);o.a.plugins=r.a,o.a.utils=i,t.default=o.a},function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(5),l=n.n(i),a=n(0),c=n(1),s=n(2),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=["workbookCreated","worksheetCreated","worksheetCompleted","workcellCreated"],d={views:[{x:0,y:0,width:1e4,height:2e4,firstSheet:0,activeTab:1,visibility:"visible"}]},p={workbook:d,widthRatio:c.b,exportStyle:!0,plugins:[]},v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"table",n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];r(this,e),this.tables=Array.from("string"==typeof t?document.querySelectorAll(t):t),this.names=l,this.options=Object.assign({},p,i),this.options.exportStyle&&(this.options.plugins=[].concat(o(Object.values(s.a)),o(this.options.plugins))),this.plugins={},f.forEach(function(e){n.plugins[e]=n.options.plugins.filter(function(t){return t[e]}).map(function(t){return t[e]})}),this.pluginContext={}}return u(e,[{key:"_invokePlugin",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.pluginContext=Object.assign({},this.pluginContext,n),this.plugins[e].forEach(function(e){return e.call(t,t.pluginContext)})}},{key:"toExcel",value:function(){var e=this,t=this.tables,n=this.options,o=new l.a.Workbook;return Object.assign(o,n),this._invokePlugin("workbookCreated",{workbook:o,tables:t}),t.forEach(function(t,n){var r=void 0;r=e.names&&e.names[n]?e.names[n].length>31?o.addWorksheet(e.names[n].slice(0,30)):o.addWorksheet(e.names[n]):o.addWorksheet("Sheet "+(n+1)),e._invokePlugin("worksheetCreated",{worksheet:r,table:t}),e.toSheet(t,r),e._invokePlugin("worksheetCompleted",{worksheet:r,table:t})}),this.workbook=o}},{key:"toSheet",value:function(e,t){var n=this,o=e.rows.length,r=0;if(e.rows.length>0)for(var i=0;i<e.rows[0].cells.length;i++)r+=e.rows[0].cells[i].colSpan;var l=[];Array.from(e.rows).forEach(function(e){Array.from(e.cells).forEach(function(e){l.push({rowRange:{},colRange:{},el:e})})});for(var c=[],s=0;s<o;s++){for(var u=[],f=0;f<r;f++)u.push({cell:null});c.push(u)}for(var d=0,p=0;p<o;p++)for(var v=0;v<r;v++)if(!c[p][v].cell){var h=l[d++],g=h.el,w=g.rowSpan,b=g.colSpan;h.rowRange={from:p,to:p},h.colRange={from:v,to:v};for(var y=p;y<p+w;y++)for(var m=v;m<v+b;m++)c[y][m].cell=h,h.colRange.to=m,h.rowRange.to=y}l.forEach(function(e){var o=e.rowRange,r=e.colRange,i=e.el,l=i.innerText,c=Object(a.mergeCells)(t,r.from,o.from,r.to,o.to),s=getComputedStyle(i);c.value=isNumeric(l)?parseFloat(l):l,n._invokePlugin("workcellCreated",{workcell:c,cell:i,rowRange:o,colRange:r,cellStyle:s})})}},{key:"export",value:function(e,t){this.workbook||this.toExcel(),Object(a.saveAsExcel)(this.workbook,e,t)}},{key:"isNumeric",value:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}}]),e}();t.a=v},function(t,n){t.exports=e},function(e,t,n){var o,r=r||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,n=function(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},l=/constructor/i.test(e.HTMLElement)||e.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent),c=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s=function(e){var t=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};setTimeout(t,4e4)},u=function(e,t,n){t=[].concat(t);for(var o=t.length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(e){c(e)}}},f=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},d=function(t,c,d){d||(t=f(t));var p,v=this,h=t.type,g="application/octet-stream"===h,w=function(){u(v,"writestart progress write writeend".split(" "))};if(v.readyState=v.INIT,r)return p=n().createObjectURL(t),void setTimeout(function(){o.href=p,o.download=c,i(o),w(),s(p),v.readyState=v.DONE});!function(){if((a||g&&l)&&e.FileReader){var o=new FileReader;return o.onloadend=function(){var t=a?o.result:o.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,v.readyState=v.DONE,w()},o.readAsDataURL(t),void(v.readyState=v.INIT)}if(p||(p=n().createObjectURL(t)),g)e.location.href=p;else{e.open(p,"_blank")||(e.location.href=p)}v.readyState=v.DONE,w(),s(p)}()},p=d.prototype,v=function(e,t,n){return new d(e,t||e.name||"download",n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=f(e)),navigator.msSaveOrOpenBlob(e,t)}:(p.abort=function(){},p.readyState=p.INIT=0,p.WRITING=1,p.DONE=2,p.error=p.onwritestart=p.onprogress=p.onwrite=p.onabort=p.onerror=p.onwriteend=null,v)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);void 0!==e&&e.exports?e.exports.saveAs=r:null!==n(7)&&null!==n(8)&&void 0!==(o=function(){return r}.call(t,n,t,e))&&(e.exports=o)},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,n){"use strict";var o=n(0);t.a={workcellCreated:function(e){var t=e.workcell,n=(e.cell,e.cellStyle),r=t.style&&t.style.font?t.style.font:{},i=n.fontWeight;t.style=Object.assign({},t.style,Object.assign({},r,{name:n.fontFamily,color:{argb:Object(o.argb)(n.color)},bold:"bold"===i||+i>600}))}}},function(e,t,n){"use strict";var o=n(0);t.a={workcellCreated:function(e){var t=e.workcell,n=(e.cell,e.cellStyle),r=Object(o.argb)(n.backgroundColor);t.style="00000000"===r?Object.assign({},t.style,{fill:{type:"pattern",pattern:"none"}}):Object.assign({},t.style,{fill:{type:"pattern",pattern:"solid",fgColor:{argb:r}}})}}},function(e,t,n){"use strict";t.a={workcellCreated:function(e){var t=e.workcell,n=e.cell,o=n.children[0];o&&["INPUT","SELECT","TEXTAREA"].includes(o.tagName)&&(t.value=o.value)}}},function(e,t,n){"use strict";t.a={workcellCreated:function(e){var t=e.workcell,n=(e.cell,e.cellStyle),o=n.verticalAlign,r=n.textAlign;t.style=Object.assign({},t.style,{alignment:{vertical:o,horizontal:r}})}}},function(e,t,n){"use strict";t.a={workcellCreated:function(e){var t=e.workcell,n=e.cell,o=n.children[0];o&&"A"===o.tagName&&(t.value={text:o.innerText,hyperlink:o.href})}}},function(e,t,n){"use strict";t.a={workcellCreated:function(e){var t=e.worksheet,n=e.colRange,o=(e.cell,e.cellStyle);n.from===n.to&&(t.getColumn(n.from+1).width=+o.width.split("px")[0]*this.options.widthRatio)}}}]).default});