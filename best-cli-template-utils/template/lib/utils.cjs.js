"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isEmail=function(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/.test(e)},exports.isIDCard=function(e){return/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(e)},exports.isMobile=function(e){return/^((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14|17)\d{9}$/.test(e)},exports.sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))};
