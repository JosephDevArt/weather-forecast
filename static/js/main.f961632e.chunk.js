(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),s=n(1),o=(n(25),function(e){var t=e.isFetching;return r.a.createElement("div",{style:{display:t?"":"none"},className:"loading"},r.a.createElement("div",null,r.a.createElement("div",{className:"c1"}),r.a.createElement("div",{className:"c2"}),r.a.createElement("div",{className:"c3"}),r.a.createElement("div",{className:"c4"})),r.a.createElement("span",null,"loading"))}),u=function(){var e=Object(s.e)((function(e){return{city:e.location.city,country:e.location.country,day:e.time.day,month:e.time.month,year:e.time.year,date:e.time.date,time:e.time.time,temp:Math.round(e.weather.currentWeather.main.temp),icon:e.weather.currentWeather.weather[0].icon,description:e.weather.currentWeather.weather[0].description,isChecked:e.units.isChecked}})),t=e.city,n=e.country,a=e.day,c=e.month,i=e.date,o=e.year,u=e.time,l=e.temp,d=e.icon,m=e.description,p=e.isChecked;return r.a.createElement("div",{className:"current"},r.a.createElement("h1",null,t,", ",n),r.a.createElement("p",null,u," ",a,", ",i," ",c," ",o),r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(d,"@4x.png"),alt:""}),r.a.createElement("h2",null,m),r.a.createElement("h3",null,l," ",r.a.createElement("span",null," ",p?"\u2109":"\u2103")))},l=n(3),d=n.n(l),m=n(5),p=function(e){return{type:"LOAD_WEATHER_SECCESS",payload:e}},h=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){var e=Object(m.a)(d.a.mark((function e(n,a){var r,c,i,o,u,l,m,h,E,f,O,g,w;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a().units.isChecked,c=a().app.errorMessage,i=a().app.isGeoProvided,o="4d96cdf290adaa3b042770b44f98ee42",n(v(!0)),1!=t.length){e.next=12;break}return l=t[0],e.next=9,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(l,"&appid=").concat(o,"&units=").concat(r?"imperial":"metric"));case 9:u=e.sent,e.next=17;break;case 12:return m=t[0],h=t[1],e.next=16,fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(m,"&lon=").concat(h,"&appid=").concat(o,"&units=").concat(r?"imperial":"metric"));case 16:u=e.sent;case 17:if(!u.ok){e.next=25;break}return e.next=20,u.json();case 20:E=e.sent,f={city:E.city,weather:E.list},Object(s.b)((function(){!i&&n(b(!0)),n(p(f)),n(v(!1)),c&&n(y(""))})),e.next=27;break;case 25:throw Object(s.b)((function(){n(v(!1)),n(y(u.statusText))})),Error;case 27:return O=E.city.coord,g=O.lat,w=O.lon,e.abrupt("return",[g,w]);case 29:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},E=function(e,t){return function(){var n=Object(m.a)(d.a.mark((function n(a,r){var c,i,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r().app.isInitialized,"D2A7A53KAY86",a(v(!0)),n.next=5,fetch("https://api.timezonedb.com/v2.1/get-time-zone?key=".concat("D2A7A53KAY86","&format=json&by=position&lat=").concat(e,"&lng=").concat(t));case 5:return i=n.sent,n.next=8,i.json();case 8:o=n.sent,Object(s.b)((function(){a({type:"LOAD_TIME_SUCCESS",time:o.formatted}),a(v(!1)),!c&&a(f(!0))}));case 10:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},f=function(e){return{type:"SET_IS_INITIALIZED",payload:e}},v=function(e){return{type:"SET_IS_FETCHING",payload:e}},y=function(e){return{type:"SET_ERROR_MESSAGE",error:e}},b=function(e){return{type:"SET_IS_GEOLOCATION_PROVIDED",payload:e}},O=function(){var e=Object(a.useRef)(null),t=Object(s.d)(),n=Object(s.e)((function(e){return{isFetching:e.app.isFetching,errorMessage:e.app.errorMessage,isGeoProvided:e.app.isGeoProvided}})),c=n.isFetching,i=n.errorMessage,o=n.isGeoProvided;return r.a.createElement("form",{className:o?"":"geo-not-provided",onSubmit:function(n){n.preventDefault();var a,r=e.current;null===r||void 0===r||r.blur(),t((a=null===r||void 0===r?void 0:r.value,function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(h(a));case 2:return n=e.sent,e.next=5,t(E(n[0],n[1]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},action:""},r.a.createElement("input",{ref:e,type:"text",placeholder:"city"}),r.a.createElement("p",null,i),r.a.createElement("button",{disabled:c,type:"submit"},"Search"))},g=function(e){var t=e.time,n=e.temp,a=e.icon,c=e.isChecked;return r.a.createElement("div",{className:"time-stamp"},r.a.createElement("div",{className:"temp-at-specific-hour"},r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(a,"@4x.png"),alt:""}),r.a.createElement("p",null,n,c?"\u2109":"\u2103")),r.a.createElement("span",null,t))},w=function(){var e=Object(s.e)((function(e){return{timeLine:e.weather.timeLine,isChecked:e.units.isChecked}}),s.c),t=e.timeLine,n=e.isChecked;return r.a.createElement("div",{className:"cont"},r.a.createElement("div",{className:"time-line"},t.map((function(e,t){return r.a.createElement(g,Object.assign({key:t,isChecked:n},e))}))))},_=function(){return r.a.createElement("div",{className:"main-info"},r.a.createElement(O,null),r.a.createElement(u,null),r.a.createElement(w,null))},S=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.location.city}));return r.a.createElement("div",{className:"temp-units"},r.a.createElement("p",null,"Weather forecast"),r.a.createElement("div",{className:"toggle"},r.a.createElement("input",{onChange:function(){Object(s.b)((function(){e({type:"SET_IS_CHECKED"}),e(h(t))}))},type:"checkbox"}),r.a.createElement("label",{htmlFor:""},"\u2103"),r.a.createElement("label",{htmlFor:""},"\u2109")))},j=n(6),C=function(e){var t=e.text,n=e.value;return r.a.createElement("li",null,t,": ",r.a.createElement("span",null,n))},k=function(){var e=Object(s.e)((function(e){var t;return t={humidity:e.weather.currentWeather.main.humidity,pressure:e.weather.currentWeather.main.pressure},Object(j.a)(t,"sea level",e.weather.currentWeather.main.sea_level),Object(j.a)(t,"wind speed",e.weather.currentWeather.wind.speed),Object(j.a)(t,"sunrise",e.time.sunrise),Object(j.a)(t,"sunset",e.time.sunset),t}),s.c);return r.a.createElement("div",{className:"weather-details"},r.a.createElement("h4",null,"Weather details"),r.a.createElement("ul",null,Object.keys(e).map((function(t,n){return r.a.createElement(C,{key:n,text:t,value:e[t]})}))))},x=function(e){var t=e.day,n=e.temp,a=e.isChecked;return r.a.createElement("li",null,t,r.a.createElement("span",null,n," ",a?"\u2109":"\u2103"))},I=function(){var e=Object(s.e)((function(e){return{nextDays:e.weather.nextDays,isChecked:e.units.isChecked}}),s.c),t=e.nextDays,n=e.isChecked;return r.a.createElement("div",{className:"next-days-forecast"},r.a.createElement("h4",null,"Next days"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(x,Object.assign({key:t,isChecked:n},e))}))))},T=function(){return r.a.createElement("aside",{className:"side-bar"},r.a.createElement(k,null),r.a.createElement(I,null))},D=function(){var e=Object(s.e)((function(e){return{isInitialized:e.app.isInitialized,isFetching:e.app.isFetching,isGeoProvided:e.app.isGeoProvided}})),t=e.isInitialized,n=e.isFetching,c=e.isGeoProvided,i=Object(s.d)();return Object(a.useEffect)((function(){i(function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation.getCurrentPosition((function(e){t(b(!0));var n=e.coords.latitude,a=e.coords.longitude,r=t(h(n,a)),c=t(E(n,a));Promise.all([r,c]).then((function(){t(f(!0))}))}),(function(e){t(b(!1))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),c?t?r.a.createElement("main",{className:"App"},r.a.createElement(o,{isFetching:n}),r.a.createElement(_,null),r.a.createElement(S,null),r.a.createElement(T,null)):r.a.createElement(o,{isFetching:n}):r.a.createElement(O,null)},N=n(4),A=n(13),F=n(2),L={isInitialized:!1,isFetching:!1,errorMessage:"",isGeoProvided:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_INITIALIZED":return Object(F.a)(Object(F.a)({},e),{},{isInitialized:!0});case"SET_IS_FETCHING":return Object(F.a)(Object(F.a)({},e),{},{isFetching:t.payload});case"SET_ERROR_MESSAGE":return Object(F.a)(Object(F.a)({},e),{},{errorMessage:t.error});case"SET_IS_GEOLOCATION_PROVIDED":return Object(F.a)(Object(F.a)({},e),{},{isGeoProvided:t.payload});default:return e}},W=function(e){var t=new Date(1e3*e);return 2!=t.getMinutes().toString().length?t.getUTCHours()+3+":0"+t.getMinutes():t.getUTCHours()+3+":"+t.getMinutes()},G=function(e){var t={};return e.forEach((function(e){t.hasOwnProperty(e.dt_txt.slice(0,10))||(t[e.dt_txt.slice(0,10)]=new Object),t[e.dt_txt.slice(0,10)][e.dt_txt.slice(11)]={temp:e.main.temp,icon:e.weather[0].icon}})),t},R=function(e){e=G(e);var t=[],n=0;for(var a in e)for(var r in e[a]){if(9==n)break;n++,t.push({time:r.slice(0,5),temp:Math.round(e[a][r].temp),icon:e[a][r].icon})}return t},P=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],H=function(e){e=G(e);var t=[];for(var n in e){var a=new Date(n),r=P[a.getDay()],c=0,i=0;for(var s in e[n])c+=e[n][s].temp,i+=1;t.push({day:r,temp:Math.round(c/i)})}return t},z={currentWeather:{dt_txt:"",main:{humidity:0,pressure:0,sea_level:0,temp:0},weather:[{description:"",icon:"",main:""}],wind:{speed:0}},timeLine:[],nextDays:[],isFetching:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_WEATHER_SECCESS":var n=R(t.payload.weather),a=H(t.payload.weather);return Object(F.a)(Object(F.a)({},e),{},{currentWeather:t.payload.weather[0],timeLine:n,nextDays:a});default:return e}},K={day:"",month:"",date:"",year:"",time:"",sunrise:"",sunset:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_TIME_SUCCESS":var n=new Date(t.time.replace(/ /g,"T")),a=n.toDateString().split(" "),r=t.time.slice(11,16);return Object(F.a)(Object(F.a)({},e),{},{day:a[0],month:a[1],date:a[2],year:a[3],time:r});case"LOAD_WEATHER_SECCESS":var c=W(t.payload.city.sunrise),i=W(t.payload.city.sunset);return Object(F.a)(Object(F.a)({},e),{},{sunrise:c,sunset:i});default:return e}},X={isChecked:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_CHECKED":return{isChecked:!e.isChecked};default:return e}},Y={country:"",city:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_WEATHER_SECCESS":var n=t.payload.city,a=n.name,r=n.country;return{country:r,city:a};default:return e}},q=Object(N.c)({app:M,location:Z,weather:U,time:V,units:J}),B=Object(N.e)(q,Object(N.d)(Object(N.a)(A.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()||N.d));i.a.render(r.a.createElement(s.a,{store:B},r.a.createElement(D,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f961632e.chunk.js.map