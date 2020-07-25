(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),s=n(1),u=(n(25),function(e){var t=e.isFetching;return r.a.createElement("div",{style:{display:t?"":"none"},className:"loading"},r.a.createElement("div",null,r.a.createElement("div",{className:"c1"}),r.a.createElement("div",{className:"c2"}),r.a.createElement("div",{className:"c3"}),r.a.createElement("div",{className:"c4"})),r.a.createElement("span",null,"loading"))}),l=n(3),o=n.n(l),m=n(4),d=function(e){return{type:"LOAD_WEATHER_SECCESS",payload:e}},p=function(e){return function(){var t=Object(m.a)(o.a.mark((function t(n,a){var r,c,i,u,l,m,p,h;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().units.isChecked,c=a().app.errorMessage,"4d96cdf290adaa3b042770b44f98ee42",n(E(!0)),t.next=6,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&appid=").concat("4d96cdf290adaa3b042770b44f98ee42","&units=").concat(r?"imperial":"metric"));case 6:if(!(i=t.sent).ok){t.next=15;break}return t.next=10,i.json();case 10:u=t.sent,l={city:u.city,weather:u.list},Object(s.b)((function(){n(d(l)),n(E(!1)),c&&n(f(""))})),t.next=17;break;case 15:throw Object(s.b)((function(){n(E(!1)),n(f(i.statusText))})),Error;case 17:return m=u.city.coord,p=m.lat,h=m.lon,t.abrupt("return",[p,h]);case 19:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(m.a)(o.a.mark((function n(a){var r,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(E(!0)),"D2A7A53KAY86",n.next=4,fetch("http://api.timezonedb.com/v2.1/get-time-zone?key=".concat("D2A7A53KAY86","&format=json&by=position&lat=").concat(e,"&lng=").concat(t));case 4:return r=n.sent,n.next=7,r.json();case 7:c=n.sent,a({type:"LOAD_TIME_SUCCESS",time:c.formatted}),a(E(!1));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(e){return{type:"SET_IS_FETCHING",payload:e}},f=function(e){return{type:"SET_ERROR_MESSAGE",error:e}},y=function(e){return function(){var t=Object(m.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(p(e));case 2:return a=t.sent,t.next=5,n(h(a[0],a[1]));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(){var e=Object(s.e)((function(e){return{city:e.location.city,country:e.location.country,day:e.time.day,month:e.time.month,year:e.time.year,date:e.time.date,time:e.time.time,temp:Math.round(e.weather.currentWeather.main.temp),icon:e.weather.currentWeather.weather[0].icon,description:e.weather.currentWeather.weather[0].description,isChecked:e.units.isChecked}})),t=e.city,n=e.country,a=e.day,c=e.month,i=e.date,u=e.year,l=e.time,o=e.temp,m=e.icon,d=e.description,p=e.isChecked;return r.a.createElement("div",{className:"current"},r.a.createElement("h1",null,t,", ",n),r.a.createElement("p",null,l," ",a,", ",i," ",c," ",u),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(m,"@4x.png"),alt:""}),r.a.createElement("h2",null,d),r.a.createElement("h3",null,o," ",r.a.createElement("span",null," ",p?"\u2109":"\u2103")))},b=function(){var e=Object(a.useRef)(null),t=Object(s.d)(),n=Object(s.e)((function(e){return{isFetching:e.app.isFetching,errorMessage:e.app.errorMessage}})),c=n.isFetching,i=n.errorMessage;return r.a.createElement("form",{onSubmit:function(n){n.preventDefault();var a=e.current;t(y(null===a||void 0===a?void 0:a.value))},action:""},r.a.createElement("input",{ref:e,type:"text",placeholder:"city"}),r.a.createElement("p",null,i),r.a.createElement("button",{disabled:c,type:"submit"},"Search"))},O=function(e){var t=e.time,n=e.temp,a=e.icon,c=e.isChecked;return r.a.createElement("div",{className:"time-stamp"},r.a.createElement("div",{className:"temp-at-specific-hour"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a,"@4x.png"),alt:""}),r.a.createElement("p",null,n,c?"\u2109":"\u2103")),r.a.createElement("span",null,t))},g=function(){var e=Object(s.e)((function(e){return{timeLine:e.weather.timeLine,isChecked:e.units.isChecked}}),s.c),t=e.timeLine,n=e.isChecked;return r.a.createElement("div",{className:"cont"},r.a.createElement("div",{className:"time-line"},t.map((function(e,t){return r.a.createElement(O,Object.assign({key:t,isChecked:n},e))}))))},w=function(){return r.a.createElement("div",{className:"main-info"},r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(g,null))},j=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.location.city}));return r.a.createElement("div",{className:"temp-units"},r.a.createElement("p",null,"Weather forecast"),r.a.createElement("div",{className:"toggle"},r.a.createElement("input",{onChange:function(){Object(s.b)((function(){e({type:"SET_IS_CHECKED"}),e(p(t))}))},type:"checkbox"}),r.a.createElement("label",{htmlFor:""},"\u2103"),r.a.createElement("label",{htmlFor:""},"\u2109")))},_=n(6),S=function(e){var t=e.text,n=e.value;return r.a.createElement("li",null,t,": ",r.a.createElement("span",null,n))},x=function(){var e=Object(s.e)((function(e){var t;return t={humidity:e.weather.currentWeather.main.humidity,pressure:e.weather.currentWeather.main.pressure},Object(_.a)(t,"sea level",e.weather.currentWeather.main.sea_level),Object(_.a)(t,"wind speed",e.weather.currentWeather.wind.speed),Object(_.a)(t,"sunrise",e.time.sunrise),Object(_.a)(t,"sunset",e.time.sunset),t}),s.c);return r.a.createElement("div",{className:"weather-details"},r.a.createElement("h4",null,"Weather details"),r.a.createElement("ul",null,Object.keys(e).map((function(t,n){return r.a.createElement(S,{key:n,text:t,value:e[t]})}))))},C=function(e){var t=e.day,n=e.temp,a=e.isChecked;return r.a.createElement("li",null,t,r.a.createElement("span",null,n," ",a?"\u2109":"\u2103"))},k=function(){var e=Object(s.e)((function(e){return{nextDays:e.weather.nextDays,isChecked:e.units.isChecked}}),s.c),t=e.nextDays,n=e.isChecked;return r.a.createElement("div",{className:"next-days-forecast"},r.a.createElement("h4",null,"Next days"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(C,Object.assign({key:t,isChecked:n},e))}))))},D=function(){return r.a.createElement("aside",{className:"side-bar"},r.a.createElement(x,null),r.a.createElement(k,null))},I=function(){var e=Object(s.e)((function(e){return{isInitialized:e.app.isInitialized,isFetching:e.app.isFetching}})),t=e.isInitialized,n=e.isFetching,c=Object(s.d)();return Object(a.useEffect)((function(){c(function(){var e=Object(m.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://ip-api.com/json");case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,t(y(a.city));case 8:return e.next=10,t({type:"SET_IS_INITIALIZED"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),t?r.a.createElement("main",{className:"App"},r.a.createElement(u,{isFetching:n}),r.a.createElement(w,null),r.a.createElement(j,null),r.a.createElement(D,null)):r.a.createElement(u,{isFetching:n})},N=n(5),T=n(13),A=n(2),F={isInitialized:!1,isFetching:!1,errorMessage:""},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_INITIALIZED":return Object(A.a)(Object(A.a)({},e),{},{isInitialized:!0});case"SET_IS_FETCHING":return Object(A.a)(Object(A.a)({},e),{},{isFetching:t.payload});case"SET_ERROR_MESSAGE":return Object(A.a)(Object(A.a)({},e),{},{errorMessage:t.error});default:return e}},W=function(e){var t=new Date(1e3*e);return 2!=t.getMinutes().toString().length?t.getHours()+":0"+t.getMinutes():t.getHours()+":"+t.getMinutes()},L=function(e){var t={};return e.forEach((function(e){t.hasOwnProperty(e.dt_txt.slice(0,10))||(t[e.dt_txt.slice(0,10)]=new Object),t[e.dt_txt.slice(0,10)][e.dt_txt.slice(11)]={temp:e.main.temp,icon:e.weather[0].icon}})),t},R=function(e){e=L(e);var t=[],n=0;for(var a in e)for(var r in e[a]){if(9==n)break;n++,t.push({time:r.slice(0,5),temp:Math.round(e[a][r].temp),icon:e[a][r].icon})}return t},H=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],z=function(e){e=L(e);var t=[];for(var n in e){var a=new Date(n),r=H[a.getDay()],c=0,i=0;for(var s in e[n])c+=e[n][s].temp,i+=1;t.push({day:r,temp:Math.round(c/i)})}return t},G={currentWeather:{dt_txt:"",main:{humidity:0,pressure:0,sea_level:0,temp:0},weather:[{description:"",icon:"",main:""}],wind:{speed:0}},timeLine:[],nextDays:[],isFetching:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_WEATHER_SECCESS":var n=R(t.payload.weather),a=z(t.payload.weather);return Object(A.a)(Object(A.a)({},e),{},{currentWeather:t.payload.weather[0],timeLine:n,nextDays:a});default:return e}},U={day:"",month:"",date:"",year:"",time:"",sunrise:"",sunset:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_TIME_SUCCESS":var n=new Date(t.time),a=n.toDateString().split(" "),r=t.time.slice(11,16);return Object(A.a)(Object(A.a)({},e),{},{day:a[0],month:a[1],date:a[2],year:a[3],time:r});case"LOAD_WEATHER_SECCESS":var c=W(t.payload.city.sunrise),i=W(t.payload.city.sunset);return Object(A.a)(Object(A.a)({},e),{},{sunrise:c,sunset:i});default:return e}},J={isChecked:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_CHECKED":return{isChecked:!e.isChecked};default:return e}},Y={country:"",city:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_WEATHER_SECCESS":var n=t.payload.city,a=n.name,r=n.country;return{country:r,city:a};default:return e}},q=Object(N.c)({app:M,location:Z,weather:K,time:X,units:V}),B=Object(N.e)(q,Object(N.d)(Object(N.a)(T.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(r.a.createElement(s.a,{store:B},r.a.createElement(I,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cc1a6e6b.chunk.js.map