(this["webpackJsonpfirst-proj-react"]=this["webpackJsonpfirst-proj-react"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return g}));var r=n(45),s=n(5),c=n(19),i="ADD-POST",a="SET_PROFILE",o="SET_STATUS",u={posts:[{id:1,message:"It`s my first msg",likesCount:22},{id:2,message:"It`s my second text country",likesCount:18}],newPostText:"k",profile:null,status:null},l=function(e){return{type:i,textPost:e}},d=function(e){return{type:a,profile:e}},f=function(e){return function(t){c.b.getProfile(e).then((function(e){t(d(e))}))}},j=function(e){return{type:o,status:e}},b=function(e){return function(t){c.b.getStatus(e).then((function(e){t(j(e))}))}},g=function(e){return function(t){c.b.updateStatus(e).then((function(n){0===n.resultCode&&t(j(e))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:5,message:t.textPost,likesCount:1};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[n]),newPostText:""});case a:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case o:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});default:return e}}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(45),s=n(5),c="ADD-MESSAGE-NAME",i={messages:[{id:1,message:"Hi"},{id:2,message:"Hi wrld"},{id:3,message:"Hi react"},{id:4,message:"Hi makar"}],dialogs:[{name:"Dima",id:1},{name:"Lesha",id:2},{name:"Makar",id:3},{name:"Danya",id:4},{name:"Sasha",id:5}],messageText:"red"},a=function(e){return{type:c,textOfMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:6,message:t.textOfMessage};return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},137:function(e,t,n){e.exports={img:"Users_img__OMUB_",currentPageBold:"Users_currentPageBold__25A1d"}},169:function(e,t,n){},170:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(134),s=(n(91),r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"90b84780-ca16-47cf-bccf-0b371bcc8836"}})),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return s.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return s.delete("follow/".concat(e)).then((function(e){return e.data}))}},i={getProfile:function(e){return s.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return s.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return s.put("profile/status/",{status:e}).then((function(e){return e.data}))}},a={getAuth:function(){return s.get("auth/me").then((function(e){return e.data}))},login:function(e,t,n){return s.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return s.delete("auth/login").then((function(e){return e.data}))}}},24:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return b}));var r=n(12),s=n.n(r),c=n(25),i=n(5),a=n(37),o=n(19),u="auth/SET_USER_DATA",l={userId:null,login:null,email:null,isAuth:!1},d=function(e,t,n,r){return{type:u,data:{userId:e,login:t,email:n,isAuth:r}}},f=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var n,r,c,i,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getAuth();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,i=r.login,a=r.email,t(d(c,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n){return function(){var r=Object(c.a)(s.a.mark((function r(c){var i;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(e,t,n);case 2:0===(i=r.sent).resultCode?c(f()):c(Object(a.a)("login",{_error:i.messages[0]}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),t.data);default:return e}}},293:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(66),i=n.n(c),a=(n(169),n(35)),o=n(36),u=n(39),l=n(38),d=(n(170),n(34)),f=n.n(d),j=n(14),b=n(1),g=function(){return Object(b.jsx)("nav",{className:f.a.nav,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/dialogs",activeClassName:f.a.active,children:"Messages"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/users",activeClassName:f.a.active,children:"User"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/music",activeClassName:f.a.active,children:"Music"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/settings",activeClassName:f.a.active,children:"Setting"})})]})})},p=function(e){return Object(b.jsx)("div",{children:"Music"})},h=function(e){return Object(b.jsx)("div",{children:"Settings"})},O=n(10),m=n(13),v=n(12),x=n.n(v),w=n(25),P=n(45),C=n(5),_=n(19),S=function(e,t,n,r){return e.map((function(e){return e[t]===n?Object(C.a)(Object(C.a)({},e),r):e}))},y="users/FOLLOW",I="users/UNFOLLOW",N="users/SET_USERS",U="users/SET_CURRENT_PAGE",E="users/SET_TOTAL_USERS_COUNT",k="users/TOGGLE_IS_FETCHING",T="users/TOGGLE_IS_FOLLOWING_PROGRESS",F={users:[],totalUsersCount:0,pageSize:100,currentPage:1,isFetching:!0,followingInProgress:[]},A=function(e){return{type:y,userId:e}},z=function(e){return{type:I,userId:e}},L=function(e){return{type:E,totalUsersCount:e}},M=function(e){return{type:k,isFetching:e}},D=function(e,t){return{type:T,isFollowing:e,userId:t}},R=function(){var e=Object(w.a)(x.a.mark((function e(t,n,r,s){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&(t(s(n)),t(D(!1,n)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(C.a)(Object(C.a)({},e),{},{users:S(e.users,"id",t.userId,{followed:!0})});case I:return Object(C.a)(Object(C.a)({},e),{},{users:S(e.users,"id",t.userId,{followed:!1})});case N:return Object(C.a)(Object(C.a)({},e),{},{users:t.users});case U:return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.currentPage});case E:return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.totalUsersCount});case k:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case T:return Object(C.a)(Object(C.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},H=n(46),B=n(69),W=n(131),q=n(72),Q=n.n(q),X=n(50),J=n(136),K=n.n(J),V=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,c=e.onPageChanged,i=e.portionSize,a=void 0===i?10:i,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/a),f=Object(r.useState)(1),j=Object(W.a)(f,2),g=j[0],p=j[1],h=(g-1)*a+1,O=g*a;return Object(b.jsxs)("div",{className:Q.a.paginator,children:[g>1&&Object(b.jsx)("button",{onClick:function(){p(g-1)},children:"PREV"}),u.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(b.jsx)("span",{className:K()(Object(B.a)({},Q.a.selectedPage,s===e),Q.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>g&&Object(b.jsx)("button",{onClick:function(){p(g+1)},children:"NEXT"})]})},Y=n(137),Z=n.n(Y),$=n.p+"static/media/1.e430e235.png",ee=function(e){var t=e.users,n=e.follow,r=e.unfollow,s=e.followingInProgress;return Object(b.jsx)("div",{className:"",children:t.map((function(e){return Object(b.jsxs)("div",{className:"users",children:[Object(b.jsx)(j.b,{to:"/profile/".concat(e.id),children:Object(b.jsxs)("div",{className:Z.a.img,children:[" ",Object(b.jsx)("img",{src:e.photos.small||$,alt:"",className:""})," "]})}),Object(b.jsx)("div",{className:"follow-unfollow",children:e.followed?Object(b.jsx)("button",{disabled:s.some((function(t){return t===e.id})),onClick:function(){r(e.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:s.some((function(t){return t===e.id})),onClick:function(){n(e.id)},children:"Follow"})}),Object(b.jsx)("div",{className:"fullname",children:e.name}),Object(b.jsx)("div",{className:"status",children:e.status})]},e.id)}))})},te=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,s=e.onPageChanged,c=e.users,i=Object(H.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)(V,{totalItemsCount:n,pageSize:r,currentPage:t,onPageChanged:s,portionSize:10}),Object(b.jsx)(ee,{users:c,follow:i.follow,unfollow:i.unfollow,followingInProgress:i.followingInProgress})]})},ne=n(138),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),se=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.pageSize},ie=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.requestUsers(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(X.a,{}):null,Object(b.jsx)(te,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,toggleFollowingProgress:this.props.toggleFollowingProgress})]})}}]),n}(s.a.Component),le=Object(m.b)((function(e){return{users:re(e),totalUsersCount:se(e),pageSize:ce(e),currentPage:ie(e),isFetching:ae(e),followingInProgress:oe(e)}}),{follow:function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(n,e,_.c.follow,A);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function e(t){return function(){var n=Object(w.a)(x.a.mark((function n(r){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:R(r,t,e,z);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:U,currentPage:e}},setTotalUsersCount:L,toggleFollowingProgress:D,requestUsers:function(e,t){return function(){var n=Object(w.a)(x.a.mark((function n(r){var s;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),n.next=3,_.c.getUsers(e,t);case 3:s=n.sent,r(M(!1)),r((c=s.items,{type:N,users:c})),r(L(s.totalCount));case 7:case"end":return n.stop()}var c}),n)})));return function(e){return n.apply(this,arguments)}}()}})(ue),de=n(24),fe=n(99),je=n.n(fe),be=function(e){return Object(b.jsxs)("header",{className:je.a.header,children:[Object(b.jsx)("img",{src:"https://pngimage.net/wp-content/uploads/2018/06/logo-fotografer-png-1.png",alt:"imag"}),Object(b.jsx)("div",{className:je.a.loginUser,children:Object(b.jsxs)(j.b,{to:"/login",children:[" ",Object(b.jsx)("span",{children:null!==e.login?Object(b.jsxs)("span",{children:[e.login," ",Object(b.jsx)("button",{onClick:e.logout,children:"Logout"})]}):"Login"})]})})]})},ge=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(be,Object(C.a)({},this.props))}}]),n}(s.a.Component),pe=Object(m.b)((function(e){return{login:e.auth.login,email:e.auth.email}}),{setAuthUserData:de.e,getAuth:de.b,logout:de.d})(ge),he=n(91),Oe=n(9),me="INITIALIZED_SUCCESS",ve={initialized:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},we=function(e){return function(t){return Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)("div",{children:"Now is loading..."}),children:Object(b.jsx)(e,Object(C.a)({},t))})}},Pe=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,301))})),Ce=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,302))})),_e=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(pe,{}),Object(b.jsx)(g,{}),Object(b.jsxs)("div",{className:"wrapper-content",children:[Object(b.jsx)(O.b,{path:"/dialogs",render:we(Ce)}),Object(b.jsx)(O.b,{path:"/profile/:userId?",render:we(Pe)}),Object(b.jsx)(O.b,{path:"/users",render:function(){return Object(b.jsx)(le,{})}}),Object(b.jsx)(O.b,{path:"/login",render:function(){return Object(b.jsx)(he.a,{})}}),Object(b.jsx)(O.b,{path:"/music",render:p}),Object(b.jsx)(O.b,{path:"/settings",render:h})]})]}):Object(b.jsx)(X.a,{})}}]),n}(s.a.Component),Se=Object(Oe.d)(O.f,Object(m.b)((function(e){return{initialized:e.appInitialized.initialized}}),{initializedApp:function(){return function(e){var t=e(Object(de.b)());Promise.all([t]).then((function(){e({type:me})}))}}}))(_e),ye=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))},Ie=n(130),Ne=n(100),Ue=n(139),Ee=n(132),ke=Object(Oe.c)({profilePage:Ne.b,dialogsPage:Ie.b,usersPage:G,auth:de.a,form:Ee.a,appInitialized:xe}),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.d,Fe=Object(Oe.e)(ke,Te(Object(Oe.a)(Ue.a)));window.store=Fe;var Ae=Fe;i.a.render(Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{store:Ae,children:Object(b.jsx)(Se,{})})}),document.getElementById("root")),ye()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(5),s=n(46),c=(n(0),n(92)),i=n(55),a=n.n(i),o=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=(e.child,Object(s.a)(e,["input","meta","child"])),i=r&&n;return Object(o.jsxs)("div",{className:a.a.formsControl+" "+(i?a.a.error:""),children:[Object(o.jsx)("div",{children:c.children}),i&&Object(o.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,s){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:s},i))," ",a]})}},34:function(e,t,n){e.exports={nav:"Navbar_nav__QMuAi",active:"Navbar_active__2WC8z"}},50:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loading.39ee2642.gif",s=n(1);t.a=function(e){return Object(s.jsx)("div",{className:"loading-block",children:Object(s.jsx)("img",{src:r,style:{width:"200px"},alt:"photography"})})}},55:function(e,t,n){e.exports={formsControl:"FormsControls_formsControl__39en-",error:"FormsControls_error__2lmOQ",formsSummaryError:"FormsControls_formsSummaryError__2SovT"}},72:function(e,t,n){e.exports={paginator:"Pagination_paginator__29W7A",pageNumber:"Pagination_pageNumber__3QKem",selectedPage:"Pagination_selectedPage__2YH3i"}},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));n(0);var r=function(e){if(!e)return"Field is Required"},s=function(e){return function(t){if(t.length>e)return"Error. MaxLength is must be less ".concat(e)}}},91:function(e,t,n){"use strict";n(0);var r=n(13),s=n(10),c=n(93),i=n(33),a=n(24),o=n(88),u=n(55),l=n.n(u),d=n(1),f=Object(c.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsxs)("div",{children:[Object(i.c)("Email","email",[o.b],i.a),Object(i.c)("Password","password",[o.b],i.a,{type:"password"}),Object(i.c)("","rememberMe",null,i.a,{type:"checkbox"},"remember me")]}),n&&Object(d.jsx)("div",{className:l.a.formsSummaryError,children:n}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Log in"})})]})})}));t.a=Object(r.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:a.c})((function(e){return!0===e.isAuth?Object(d.jsx)(s.a,{to:"/profile"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Log-in:"}),Object(d.jsx)(f,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})}))},99:function(e,t,n){e.exports={header:"Header_header__2mQcI",loginUser:"Header_loginUser__22xRU"}}},[[293,1,2]]]);
//# sourceMappingURL=main.f45b62d2.chunk.js.map