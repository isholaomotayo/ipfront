(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["course-detail"],{"0a2c":function(t,e,s){"use strict";var n=s("7827"),a=s.n(n);a.a},"0a49":function(t,e,s){var n=s("9b43"),a=s("626a"),i=s("4bf8"),o=s("9def"),r=s("cd1c");t.exports=function(t,e){var s=1==t,u=2==t,c=3==t,d=4==t,l=6==t,f=5==t||l,h=e||r;return function(e,r,m){for(var p,v,_=i(e),b=a(_),g=n(r,m,3),C=o(b.length),w=0,q=s?h(e,C):u?h(e,0):void 0;C>w;w++)if((f||w in b)&&(p=b[w],v=g(p,w,_),t))if(s)q[w]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return w;case 2:q.push(p)}else if(d)return!1;return l?-1:c||d?d:q}}},1169:function(t,e,s){var n=s("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"223d":function(t,e,s){"use strict";s.d(e,"f",function(){return u}),s.d(e,"g",function(){return c}),s.d(e,"b",function(){return d}),s.d(e,"k",function(){return l}),s.d(e,"i",function(){return f}),s.d(e,"l",function(){return h}),s.d(e,"d",function(){return m}),s.d(e,"c",function(){return p}),s.d(e,"h",function(){return v}),s.d(e,"j",function(){return _}),s.d(e,"a",function(){return b}),s.d(e,"e",function(){return g});var n=s("795b"),a=s.n(n),i=s("bc3a"),o=s.n(i),r=s("5f87");function u(t){return Object(r["b"])()?o.a.get("/v1/users/".concat(t)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t){return r["b"]?o.a.get("/v1/quizresponses/".concat(t,"/user")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function d(t){return Object(r["b"])()?o.a.get("/v1/users/".concat(t,"/certificates")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function l(t,e){return Object(r["b"])()?o.a.patch("/v1/users/".concat(t),e):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(t,e){return Object(r["b"])()?o.a.patch("v1/users/".concat(t,"/avatar"),{file:e}):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function h(t,e){return Object(r["b"])()?o.a.post("v1/credentials",e):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t){return Object(r["b"])()?o.a.get("/v1/users/".concat(t,"/credentials")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t){return Object(r["b"])()?o.a.get("/v1/users/".concat(t,"/certificates")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function v(t){return Object(r["b"])()?o.a.get("/v1/scores/".concat(t,"/user")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function _(t,e){return Object(r["b"])()?o.a.patch("/v1/users/".concat(t,"/bank"),e):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function b(t,e){return Object(r["b"])()?o.a.delete("/v1/credentials/".concat(t,"/user/").concat(e)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function g(t){return Object(r["b"])()?o.a.get("/v1/users/".concat(t,"/jobs")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},4000:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loadingCourse?[t._m(0)]:[s("main",{staticClass:"bg-grey"},[s("section",{staticClass:"main__grid "},[s("div",{staticClass:"container"},[s("div",[s("aside",{staticClass:"module__section"},[s("img",{staticClass:"module__img",staticStyle:{"object-fit":"cover"},attrs:{src:t.itemData.avatar,alt:t.itemData.title}}),t.joinedCourse?t._e():[s("div",{staticClass:"module__details"},[s("span",[t._v("Join this free class for full access.")]),s("button",{staticClass:"btn__primary btn__primary--alt btn__grey--sm",on:{click:function(e){return e.preventDefault(),t.joinCourse(e)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tJoin\n\t\t\t\t\t\t\t\t\t\t")])])]],2),s("main",{staticClass:"courses__tabs module__tabs"},[s("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{id:"learn-tab","data-toggle":"tab",href:"#learn",role:"tab","aria-controls":"learn","aria-selected":"true"},on:{click:function(e){t.activateTab("learningTab")}}},[t._v("Lessons")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"discussion-tab","data-toggle":"tab",href:"#discussion",role:"tab","aria-controls":"discussion","aria-selected":"false"},on:{click:function(e){t.activateTab("discussionTab")}}},[t._v("Discussion")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"quiz-tab","data-toggle":"tab",href:"#quiz",role:"tab","aria-controls":"quiz","aria-selected":"false"},on:{click:function(e){t.activateTab("quizTab")}}},[t._v("Take Tests")])])]),s("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[s("div",{ref:"learningTab",staticClass:"tab-pane fade show active",attrs:{id:"learn",role:"tabpanel","aria-labelledby":"learn-tab"}},[t.joinedCourse?[s("div",{staticClass:"module__wrapper--flex"},[s("h4",{staticClass:"bold"},[t._v("Introduction")]),s("div",{staticClass:"module__body"},[s("p",{domProps:{innerHTML:t._s(t.itemData.description)}})])]),s("div",{staticClass:"module__wrapper"},[s("span",{staticClass:"module__label"},[t._v("Lessons")]),t.lessons&&t.lessons.length>0?[s("ul",t._l(t.lessons,function(e){return s("li",{key:e.id},[s("router-link",{staticClass:"module__item",attrs:{to:{name:"course-lessons",params:{id:e.id,onlineClassId:t.itemData.id}}}},[s("div",[s("h5",{staticClass:"module__title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n                                                                        "),e.progress&&e.progress.length>0?[s("span",{staticClass:"badge badge-primary"},[t._v("Completed")])]:void 0],2),s("span",{domProps:{innerHTML:t._s(e.description)}})]),s("div",{staticClass:"item__row"},[s("a",{staticClass:"link__module",attrs:{href:""}},[s("svg",{attrs:{width:"9",height:"17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M.4 14.4l5.3-5.9L.4 2.58A1.64 1.64 0 0 1 .4.44c.53-.59 1.4-.59 1.93 0L8.6 7.43c.53.6.53 1.55 0 2.14l-6.27 6.98c-.54.6-1.4.6-1.93 0a1.68 1.68 0 0 1 0-2.16z",fill:"#4F4F4F"}})])])])])],1)}))]:t._e()],2)]:[s("h4",{staticClass:"padded"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tJoin this course to view content\n\t\t\t\t\t\t\t\t\t\t\t")])]],2),s("div",{ref:"discussionTab",staticClass:"tab-pane fade",attrs:{id:"discussion",role:"tabpanel","aria-labelledby":"discussion-tab"}},[t.joinedCourse?[s("course-discussion",{attrs:{joinedCourse:t.joinedCourse}})]:[s("h4",{staticClass:"padded"},[t._v("Join this course to participate in course discussion")])]],2),s("div",{ref:"quizTab",staticClass:"tab-pane fade",attrs:{id:"quiz",role:"tabpanel","aria-labelledby":"quiz-tab"}},[t.joinedCourse?[s("CourseQuiz",{attrs:{done:t.joinedCourse,itemData:t.itemData}})]:[s("h4",{staticClass:"padded"},[t._v("Join this course to take a quiz")])]],2),s("div",{ref:"contentTab",staticClass:"tab-pane fade",attrs:{id:"content",role:"tabpanel","aria-labelledby":"content-tab"}})])])])])])])]],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preloader",staticStyle:{display:"flex","flex-direction":"column"}},[s("img",{attrs:{src:"/assets/images/logo.svg"}}),s("h2",{staticClass:"text-white"},[t._v("\n\t\t\t\t\tIntegrated Platform\n\t\t\t\t")]),s("div",{staticClass:"sk-double-bounce"},[s("div",{staticClass:"sk-child sk-double-bounce1"}),s("div",{staticClass:"sk-child sk-double-bounce2"})])])}],i=(s("c5f6"),s("7514"),s("cebc")),o=(s("cadf"),s("551c"),s("f751"),s("097d"),s("2f62")),r=s("4d0f"),u=s("223d"),c=s("555f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.attempt>=t.itemData.exam_attempts?[t._m(0)]:t.quizResult?[s("div",{staticClass:"result__wrapper"},[s("p",[t._v("This quiz has been taken and submitted already")]),s("h3",{staticClass:"bold"},[t._v("Your Score is "+t._s(t.quizResult.score)+"%")])])]:[t.quizLoaded&&t.quizzes.length?[s("div",{staticClass:"quiz"},[s("div",{staticClass:"module__wrapper module__wrapper--between"},[s("div",[t._v("\n\t\t\t\t\t\tAttempts: "),s("span",{staticClass:"bold"},[t._v(t._s(t.attempt)+"/"+t._s(t.itemData.exam_attempts))])]),s("div",{staticClass:"time__wrapper"},[s("h5",{staticClass:"title"},[t._v("Countdown Timer")]),s("span",{staticClass:"time"},[t._v(t._s(t.minutes)+":"+t._s(t.seconds))])])]),s("div",{staticClass:"quiz__meta"},[s("span",{ref:"progress",staticClass:"level"},[t._v("course progress: \n\t\t\t\t\t\t"),t.progress?s("span",{staticClass:"bold"},[t._v(t._s(t.progress+"%"))]):s("span",{staticClass:"bold"},[t._v("0%")])])]),s("div",{staticClass:"quiz__main"},[t.quizIntro?[s("div",{staticClass:"center"},[s("h4",[t._v("Welcome to the quiz")]),s("p",{staticClass:"pb-10"},[t._v("Click the button below to start the timer for your quiz")]),s("button",{staticClass:"btn__primary btn__primary--alt",attrs:{type:"button"},on:{click:t.startQuiz}},[t._v("Start")])])]:t._e(),t.quizStart?[s("div",{staticClass:"quiz__heading"},[s("h4",{staticClass:"quiz__primary"},[t._v(t._s(t.itemData.title))]),s("h5",{staticClass:"quiz__secondary"},[t._v("Please answer all question.")])]),s("div",{staticClass:"quiz__body"},[s("form",{staticClass:"form__quiz",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submitQuiz(e)}}},[s("Question",{attrs:{question:t.quizzes[t.currentQuizIndex],"question-index":t.currentQuizIndex+1,reset:t.reset}}),t.currentQuizIndex===t.quizzes.length-1?[s("button",{staticClass:"btn btn__quiz",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitQuiz(e)}}},[t._v("Submit\n\t\t\t\t\t\t\t\t\t")])]:[s("button",{staticClass:"btn btn__quiz",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.nextQuiz(e)}}},[t._v("Next")])]],2)])]:t._e(),t.quizSubmitted?[s("div",{staticClass:"center"},[s("h4",[t._v("Well done!")]),s("p",[t._v("Your score is "+t._s(t.percentage))]),s("h5",{staticClass:"bold"},[t._v("You earned a badge")])])]:t._e()],2)])]:t.quizLoaded?[t._m(1)]:[t._m(2)]]],2)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert__wrapper"},[s("p",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n\t\t\t\tYou are out of attempts and can not take this exam again\n\t\t\t")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result__wrapper"},[s("p",[t._v("No quiz available yet")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result__wrapper"},[s("p",[t._v("Error Loading quiz")])])}],f=s("e9cc"),h=s("8504"),m=s("ad9e"),p=s("eae4"),v={name:"CourseQuiz",props:{done:{type:Boolean,default:function(){return!1}},itemData:{type:Object,default:function(){return{}}}},data:function(){return{quizzes:[],loadingQuiz:!1,quizLoaded:!1,total:0,currentQuizIndex:0,quizIntro:!1,quizStart:!1,quizSubmitted:!1,quizResult:null,result:null,score:0,timer:null,timelimit:1,totalTime:0,percentage:0,response:[],reset:!1,attempt:0}},created:function(){var t=this;this.getQuiz(),this.getScores(),this.getUserAttempts(),h["a"].$on("result",function(e){t.score+=e})},mounted:function(){this.done&&this.getScores()},watch:{score:function(t){this.percentage=t/this.quizzes.length*100}},computed:Object(i["a"])({},Object(o["c"])({joinedCourse:"getJoinedStatus",user:"getLoggedUser"}),{progress:function(){return this.quizStart?(this.currentQuizIndex+1)/this.quizzes.length*100:0},minutes:function(){var t=Math.floor(this.totalTime/60);return t<10?"0".concat(t):t},seconds:function(){var t=Math.floor(this.totalTime-60*this.minutes);return t<10?"0".concat(t):t}}),methods:{getScores:function(){var t=this;Object(u["h"])(this.$session.get("id")).then(function(e){if(200===e.status){var s=t.$route.params.id||t.$route.params.onlineClassId;t.quizResult=e.data.data.find(function(t){return t.online_class_id===s})}}).catch(function(t){return t})},getQuiz:function(){var t=this;return Object(r["h"])(this.$route.params.id||this.$route.params.onlineClassId).then(function(e){if(200===e.status){t.quizzes=e.data.data,t.total=e.data.total,t.loadingQuiz=!1,t.quizLoaded=!0,t.quizIntro=!0;var s=t.quizzes.reduce(function(t,e){return t+e.duration},0);t.totalTime=t.timelimit*s}}).catch(function(e){return t.quizLoaded=!1,t.loadingQuiz=!1,e}),!0},getUserAttempts:function(){var t=this;Object(r["o"])(this.$route.params.id,this.user.id).then(function(e){200===e.status&&(t.attempt=e.data.data.attempt,console.log(t.attempt))}).catch(function(t){return t})},startQuiz:function(){this.quizIntro=!1,this.quizStart=!0,this.setProgressWidth(),this.startTimer()},submitQuiz:function(){var t=this;this.resetTimer(),Object(f["d"])({online_class_id:this.$route.params.id||this.$route.params.onlineClassId,user_id:this.$session.get("id"),score:this.percentage}).then(function(e){201===e.status&&(t.quizStart=!1,t.quizSubmitted=!0,t.getScores(),Object(p["b"])({title:"Success! You have completed the quiz!."}))}).catch(function(t){return Object(p["a"])({title:"Oops! Something went wrong",text:t.data}),t})},nextQuiz:function(){var t=this;this.currentQuizIndex+=1,this.reset=!0,setTimeout(function(){t.reset=!1},500)},startTimer:function(){var t=this;this.timer=setInterval(function(){return t.countdown()},1e3)},stopTimer:function(){clearInterval(this.timer),this.timer=null},resetTimer:function(){this.totalTime=60,clearInterval(this.timer),this.timer=null},countdown:function(){this.totalTime>=1?this.totalTime-=1:(this.totalTime=0,this.submitQuiz(),this.resetTimer())},setProgressWidth:function(){var t=100*this.progress;this.$refs.progress.style.width="".concat(Number(t.toFixed(2)),"%")}},components:{Question:m["a"],Loader:c["a"]}},_=v,b=(s("e968"),s("2877")),g=Object(b["a"])(_,d,l,!1,null,"4f605342",null),C=g.exports,w=s("b2d4"),q=s("c1d8"),z={name:"CourseDetail",data:function(){return{loadingCourse:!0,itemData:{},courseLoaded:!1,lessons:[],userCourses:[],userCoursesLoaded:!1,userId:this.$session.get("id")}},created:function(){this.getCourse(),this.courseLearner(),this.getUserProfile()},methods:Object(i["a"])({},Object(o["d"])(["setJoinedCourse","resetJoinedCourse"]),{courseLearner:function(){var t=this;Object(r["g"])(this.$route.params.id,this.$session.get("id")).then(function(e){return 200===e.status?(t.setJoinedCourse(!!e.data.data.class_id),!0):(t.resetJoinedCourse(),!1)}).catch(function(e){return t.resetJoinedCourse(),e})},getCourse:function(){var t=this;Object(r["e"])(this.$route.params.id,this.userId).then(function(e){return 200===e.status?(t.itemData=e.data.data,t.lessons=e.data.data.lessons,t.courseLoaded=!0,!0):(t.courseLoaded=!1,!1)}).catch(function(e){return t.courseLoaded=!1,e}).finally(function(){t.loadingCourse=!1})},activateTab:function(t){return Object(q["a"])(t,this.$refs)},joinCourse:function(){var t=this;Object(r["p"])(this.$route.params.id,{user_id:this.userId}).then(function(e){201===e.status&&(t.setJoinedCourse(!0),Object(p["b"])({title:"Success! You have successfully joined the course!."}))}).catch(function(t){return Object(p["a"])({title:"Oops! Something went wrong",text:t.data}),t})},getUserProfile:function(){var t=this;Object(u["f"])(this.userId).then(function(e){if(200===e.status){t.userCourses=e.data.data.classes,t.userCoursesLoaded=!0;var s=t.userCourses.find(function(e){return e.class_id===Number(t.$route.params.id)}).class_id;s?t.setJoinedCourse(!0):t.resetJoinedCourse()}return t.userCoursesLoaded=!1,!1}).catch(function(e){return t.userCoursesLoaded=!1,e})}}),computed:Object(i["a"])({},Object(o["c"])({joinedCourse:"getJoinedStatus"})),components:{Loader:c["a"],CourseDiscussion:w["default"],CourseQuiz:C},filters:{date:function(t){return moment(t).fromNow()}}},j=z,x=(s("be15"),Object(b["a"])(j,n,a,!1,null,"502c24b6",null));e["default"]=x.exports},"4d0f":function(t,e,s){"use strict";s.d(e,"i",function(){return u}),s.d(e,"l",function(){return c}),s.d(e,"e",function(){return d}),s.d(e,"f",function(){return l}),s.d(e,"a",function(){return f}),s.d(e,"m",function(){return h}),s.d(e,"n",function(){return m}),s.d(e,"p",function(){return p}),s.d(e,"j",function(){return v}),s.d(e,"b",function(){return _}),s.d(e,"h",function(){return b}),s.d(e,"d",function(){return g}),s.d(e,"k",function(){return C}),s.d(e,"c",function(){return w}),s.d(e,"g",function(){return q}),s.d(e,"o",function(){return z});var n=s("795b"),a=s.n(n),i=s("bc3a"),o=s.n(i),r=s("5f87");function u(t,e){return Object(r["b"])()?o.a.get("/v1/classes?limit=".concat(t,"&offset=").concat(e)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t,e){return Object(r["b"])()?o.a.get("/v1/classes/filter?status=".concat(t,"&career_id=").concat(e)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function d(t,e){return Object(r["b"])()?o.a.get("/v1/classes/".concat(t,"?userId=").concat(e)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function l(t){return Object(r["b"])()?o.a.get("/v1/classes/".concat(t,"/forum")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(t,e){return Object(r["b"])()?o.a.post("/v1/classes/".concat(t,"/forum"),e):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function h(t,e,s){return Object(r["b"])()?o.a.get("/v1/classes/".concat(t,"/lessons/").concat(e,"?userId=").concat(s)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t,e,s,n){return Object(r["b"])()?o.a.get("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(s,"?userId=").concat(n)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t,e){return Object(r["b"])()?o.a.post("/v1/classes/".concat(t,"/learners"),e):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function v(t,e){return Object(r["b"])()?o.a.get("/v1/classes/".concat(t,"/forum/").concat(e)).then(function(t){return t}):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function _(t,e,s){return Object(r["b"])()?o.a.post("/v1/classes/".concat(t,"/forum/").concat(e,"/thread"),s):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function b(t){return Object(r["b"])()?o.a.get("/v1/classes/".concat(t,"/quiz")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function g(t,e){return Object(r["b"])()?o.a.delete("/v1/classes/".concat(t,"/forum/").concat(e)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function C(t,e){return Object(r["b"])()?o.a.get("/v1/classes/".concat(t,"/forum/").concat(e,"/thread")).then(function(t){return t}):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function w(t,e,s){return Object(r["b"])()?o.a.delete("/v1/classes/".concat(t,"/forum/").concat(e,"/thread/").concat(s)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function q(t,e){return Object(r["b"])()?o.a.get("/v1/classes/".concat(t,"/learners/").concat(e)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function z(t,e){return Object(r["b"])()?o.a.get("/v1/classes/".concat(t,"/user/").concat(e)):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},"67fa":function(t,e,s){},"707c":function(t,e,s){t.exports=s.p+"img/profile.a46d8ad4.jpg"},7514:function(t,e,s){"use strict";var n=s("5ca1"),a=s("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i](function(){o=!1}),n(n.P+n.F*o,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")(i)},7827:function(t,e,s){},ad9e:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"form__question"},[s("img",{staticClass:"quiz__img",attrs:{src:"img/question.png",alt:""}}),s("div",{staticClass:"form__questions__body"},[s("p",[t._v(t._s(t.questionIndex)+". "+t._s(t.question.question))]),s("ul",{staticClass:"test__sub-item quiz__options"},[s("li",{staticClass:"test__option"},[s("label",{staticClass:"option"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],attrs:{name:"question-"+t.question.id,type:"radio"},domProps:{value:t.question.option_a,checked:t._q(t.answer,t.question.option_a)},on:{click:function(e){t.setAnswer(t.question.option_a,"option_a")},change:function(e){t.answer=t.question.option_a}}}),s("span",{staticClass:"text"},[t._v(t._s(t.question.option_a))]),s("span",{staticClass:"radio"})])]),s("li",{staticClass:"test__option"},[s("label",{staticClass:"option"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],attrs:{name:"question-"+t.question.id,type:"radio"},domProps:{value:t.question.option_b,checked:t._q(t.answer,t.question.option_b)},on:{click:function(e){t.setAnswer(t.question.option_b,"option_b")},change:function(e){t.answer=t.question.option_b}}}),s("span",{staticClass:"text"},[t._v(t._s(t.question.option_b))]),s("span",{staticClass:"radio"})])]),s("li",{staticClass:"test__option"},[s("label",{staticClass:"option"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],attrs:{name:"question-"+t.question.id,type:"radio"},domProps:{value:t.question.option_c,checked:t._q(t.answer,t.question.option_c)},on:{click:function(e){t.setAnswer(t.question.option_c,"option_c")},change:function(e){t.answer=t.question.option_c}}}),s("span",{staticClass:"text"},[t._v(t._s(t.question.option_c))]),s("span",{staticClass:"radio"})])]),s("li",{staticClass:"test__option"},[s("label",{staticClass:"option"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],attrs:{name:"question-"+t.question.id,type:"radio"},domProps:{value:t.question.option_d,checked:t._q(t.answer,t.question.option_d)},on:{click:function(e){t.setAnswer(t.question.option_d,"option_d")},change:function(e){t.answer=t.question.option_d}}}),s("span",{staticClass:"text"},[t._v(t._s(t.question.option_d))]),s("span",{staticClass:"radio"})])])])])])])},a=[],i=(s("c5f6"),s("8504")),o={name:"Question",props:{question:{type:Object,default:function(){return{}}},questionIndex:{type:Number,default:function(){return null}},reset:{type:Boolean,default:function(){return!1}}},data:function(){return{answer:"",isCorrect:!1,isAnswered:!1,option:""}},watch:{isCorrect:function(){return this.isAnswered?!this.isAnswered||(this.isCorrect?i["a"].$emit("result",1):this.isCorrect||i["a"].$emit("result",-1),this.isAnswered=!0,!0):(this.isCorrect?i["a"].$emit("result",1):this.isCorrect||i["a"].$emit("result",0),this.isAnswered=!0,!0)},answer:function(){},reset:function(t){t&&(this.isCorrect=!1,this.isAnswered=!1)}},methods:{setAnswer:function(t,e){this.isCorrect=t===this.question.answer,this.option=e}}},r=o,u=s("2877"),c=Object(u["a"])(r,n,a,!1,null,null,null);e["a"]=c.exports},b2d4:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loadingCourseDiscussion?[n("div",{staticClass:"div__loading"},[n("loader")],1)]:[n("div",{staticClass:"module__wrapper thread"},[n("div",{staticClass:"forum__heading"},[t._m(0),n("div",{staticClass:"d-flex align-items-center mb-heading"},[n("router-link",{staticClass:"text-underline text-black-70 ml-auto",attrs:{to:{name:"create-course-discussion"},exact:""}},[t._v("Ask a\n                            Question\n                        ")])],1),t.joinedCourse?void 0:t._e()],2),n("div",{staticClass:"forum__body"},[t.courseDiscussion&&t.courseDiscussion.length>0?t._l(t.courseDiscussion,function(e){return n("div",{key:e.id,staticClass:"forum__item section__row"},[e.user.avatar?n("img",{staticClass:"post__img",attrs:{src:e.user.avatar,alt:""}}):n("img",{staticClass:"post__img",attrs:{src:s("707c"),alt:""}}),n("div",{staticClass:"thread__body"},[n("router-link",{attrs:{to:{name:"discussion-page",params:{discussionId:e.id,id:e.online_class_id}}}},[n("h6",{staticClass:"bold"},[t._v(t._s(e.title))])]),n("span",{staticClass:"meta"},[t._v(t._s(t._f("date")(e.created_at)))])],1)])}):[t._m(1)]],2)])]],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"forum__left"},[s("h4",{staticClass:"forum__title"},[t._v("Discussions")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item__row thread__item"},[s("div",{staticClass:"thread__body"},[s("h6",{staticClass:"bold"},[t._v("No Course Discussion")])])])}],i=s("4d0f"),o=s("555f"),r={name:"CourseDiscussion",props:{joinedCourse:[Boolean,String]},data:function(){return{courseDiscussion:[],courseDiscussionLoaded:!1,loadingCourseDiscussion:!0}},methods:{getCourseDiscussion:function(){var t=this;Object(i["f"])(this.$route.params.onlineClassId||this.$route.params.id).then(function(e){return 200===e.status?(t.courseDiscussion=e.data.data,t.courseDiscussionLoaded=!0,!0):(t.courseDiscussionLoaded=!1,!1)}).catch(function(e){t.courseDiscussionLoaded=!1}).finally(function(){t.loadingCourseDiscussion=!1})}},mounted:function(){this.getCourseDiscussion()},components:{Loader:o["a"]},filters:{date:function(t){return moment(t).fromNow()}},watch:{joinedCourse:function(){return this.joinedCourse}}},u=r,c=(s("0a2c"),s("2877")),d=Object(c["a"])(u,n,a,!1,null,"87b753e8",null);e["default"]=d.exports},b764:function(t,e,s){},be15:function(t,e,s){"use strict";var n=s("b764"),a=s.n(n);a.a},c1d8:function(t,e,s){"use strict";var n=function(t,e){for(var s in e)e[s].classList.add("show","active"),s!==t&&e[s].classList.remove("show","active")};e["a"]=n},cd1c:function(t,e,s){var n=s("e853");t.exports=function(t,e){return new(n(t))(e)}},e853:function(t,e,s){var n=s("d3f4"),a=s("1169"),i=s("2b4c")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),n(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},e968:function(t,e,s){"use strict";var n=s("67fa"),a=s.n(n);a.a},e9cc:function(t,e,s){"use strict";s.d(e,"b",function(){return u}),s.d(e,"a",function(){return c}),s.d(e,"e",function(){return d}),s.d(e,"c",function(){return l}),s.d(e,"d",function(){return f});var n=s("795b"),a=s.n(n),i=s("bc3a"),o=s.n(i),r=s("5f87");function u(){return Object(r["b"])()?o.a.get("/v1/quiz"):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t){return Object(r["b"])()?o.a.get("v1/quiz/".concat(t,"/questions")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function d(t){return Object(r["b"])()?o.a.post("/v1/quizresponses",t):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function l(t){return Object(r["b"])()?o.a.get("/v1/users/".concat(t,"/quiz")):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(t){return Object(r["b"])()?o.a.post("/v1/scores",t):a.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}}}]);
//# sourceMappingURL=course-detail.dfc5d4a7.js.map