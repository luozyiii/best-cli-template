!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Utils={})}(this,(function(e){"use strict";e.isEmail=function(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/.test(e)},e.isIDCard=function(e){return/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(e)},e.isMobile=function(e){return/^((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14|17)\d{9}$/.test(e)},e.sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},Object.defineProperty(e,"__esModule",{value:!0})}));
