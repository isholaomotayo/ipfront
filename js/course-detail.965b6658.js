(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["course-detail"],{"09e8":function(t,e,s){},"223d":function(t,e,s){"use strict";s.d(e,"f",function(){return u}),s.d(e,"j",function(){return c}),s.d(e,"h",function(){return l}),s.d(e,"k",function(){return d}),s.d(e,"d",function(){return m}),s.d(e,"c",function(){return f}),s.d(e,"g",function(){return h}),s.d(e,"i",function(){return p}),s.d(e,"a",function(){return _}),s.d(e,"e",function(){return v}),s.d(e,"b",function(){return b});var a=s("795b"),i=s.n(a),n=s("bc3a"),r=s.n(n),o=s("5f87");function u(t){return Object(o["b"])()?r.a.get("/v1/users/".concat(t)):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t,e){return Object(o["b"])()?r.a.patch("/v1/users/".concat(t),e):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function l(t,e){return Object(o["b"])()?r.a.patch("v1/users/".concat(t,"/avatar"),{file:e}):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function d(t,e){return Object(o["b"])()?r.a.post("v1/credentials",e):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t){return Object(o["b"])()?r.a.get("/v1/users/".concat(t,"/credentials")):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(t){return Object(o["b"])()?r.a.get("/v1/users/".concat(t,"/certificates")):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function h(t){return Object(o["b"])()?r.a.get("/v1/scores/".concat(t,"/user")):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t,e){return Object(o["b"])()?r.a.patch("/v1/users/".concat(t,"/bank"),e):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function _(t,e){return Object(o["b"])()?r.a.delete("/v1/credentials/".concat(t,"/user/").concat(e)):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function v(t){return Object(o["b"])()?r.a.get("/v1/users/".concat(t,"/jobs")):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function b(t){return Object(o["b"])()?r.a.get("v1/users/".concat(t,"/badges")):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},"25d3":function(t,e,s){"use strict";var a=s("e83e"),i=s.n(a);i.a},4000:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loadingCourse?[t._m(0)]:[s("main",{staticClass:"bg-grey"},[s("section",{staticClass:"main__grid"},[s("div",{staticClass:"container"},[s("div",[s("aside",{staticClass:"module__section"},[s("img",{staticClass:"module__img",staticStyle:{"object-fit":"cover"},attrs:{src:t.itemData.avatar,alt:t.itemData.title}}),t.joinedCourse?t._e():[s("div",{staticClass:"module__details"},[s("span",[t._v("Join this free class for full access.")]),s("button",{staticClass:"btn__primary btn__primary--alt btn__grey--sm",on:{click:function(e){return e.preventDefault(),t.joinCourse(e)}}},[t._v("Join")])])]],2),s("main",{staticClass:"courses__tabs module__tabs"},[s("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{id:"learn-tab","data-toggle":"tab",href:"#learn",role:"tab","aria-controls":"learn","aria-selected":"true"},on:{click:function(e){t.activateTab("learningTab")}}},[t._v("Lessons")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"discussion-tab","data-toggle":"tab",href:"#discussion",role:"tab","aria-controls":"discussion","aria-selected":"false"},on:{click:function(e){t.activateTab("discussionTab")}}},[t._v("Discussion")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"quiz-tab","data-toggle":"tab",href:"#quiz",role:"tab","aria-controls":"quiz","aria-selected":"false"},on:{click:function(e){t.activateTab("quizTab")}}},[t._v("Take Assessment")])])]),s("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[s("div",{ref:"learningTab",staticClass:"tab-pane fade show active",attrs:{id:"learn",role:"tabpanel","aria-labelledby":"learn-tab"}},[t.joinedCourse?[s("div",{staticClass:"module__wrapper--flex"},[s("h4",{staticClass:"bold"},[t._v("Introduction")]),s("div",{staticClass:"module__body"},[s("p",{domProps:{innerHTML:t._s(t.itemData.description)}})])]),s("div",{staticClass:"module__wrapper"},[s("span",{staticClass:"module__label"},[t._v("Lessons")]),t.lessons&&t.lessons.length>0?[s("ul",t._l(t.lessons,function(e){return s("li",{key:e.id},[s("router-link",{staticClass:"module__item",attrs:{to:{name:"course-lessons",params:{id:e.id,onlineClassId:t.itemData.id}}}},[s("div",[s("h5",{staticClass:"module__title"},[t._v("\n                                    "+t._s(e.title)+"\n                                    "),e.lessonProgress&&e.lessonProgress.length>0?[s("span",{staticClass:"badge badge-primary"},[t._v("Completed")])]:[s("span",{staticClass:"badge badge-warning"},[t._v("Not Completed")])]],2),s("span",{domProps:{innerHTML:t._s(e.description)}})]),s("div",{staticClass:"item__row"},[s("a",{staticClass:"link__module",attrs:{href:""}},[s("svg",{attrs:{width:"9",height:"17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M.4 14.4l5.3-5.9L.4 2.58A1.64 1.64 0 0 1 .4.44c.53-.59 1.4-.59 1.93 0L8.6 7.43c.53.6.53 1.55 0 2.14l-6.27 6.98c-.54.6-1.4.6-1.93 0a1.68 1.68 0 0 1 0-2.16z",fill:"#4F4F4F"}})])])])])],1)}))]:t._e()],2)]:[s("h4",{staticClass:"padded"},[t._v("Join this course to view content")])]],2),s("div",{ref:"discussionTab",staticClass:"tab-pane fade",attrs:{id:"discussion",role:"tabpanel","aria-labelledby":"discussion-tab"}},[t.joinedCourse?[s("course-discussion",{attrs:{joinedCourse:t.joinedCourse}})]:[s("h4",{staticClass:"padded"},[t._v("Join this course to participate in course discussion")])]],2),s("div",{ref:"quizTab",staticClass:"tab-pane fade",attrs:{id:"quiz",role:"tabpanel","aria-labelledby":"quiz-tab"}},[t.joinedCourse?[s("CourseQuiz",{attrs:{done:t.joinedCourse,itemData:t.itemData}})]:[s("h4",{staticClass:"padded"},[t._v("Join this course to take a quiz")])]],2),s("div",{ref:"contentTab",staticClass:"tab-pane fade",attrs:{id:"content",role:"tabpanel","aria-labelledby":"content-tab"}})])])])])])])]],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preloader",staticStyle:{display:"flex","flex-direction":"column"}},[s("img",{attrs:{src:"/assets/images/logo.svg"}}),s("h2",{staticClass:"text-white"},[t._v("Integrated Platform")]),s("div",{staticClass:"sk-double-bounce"},[s("div",{staticClass:"sk-child sk-double-bounce1"}),s("div",{staticClass:"sk-child sk-double-bounce2"})])])}],n=(s("c5f6"),s("7514"),s("cebc")),r=(s("cadf"),s("551c"),s("f751"),s("097d"),s("2f62")),o=s("4d0f"),u=s("223d"),c=s("555f"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.attempt>0?[t.attempt>=Number(t.itemData.exam_attempts)?[t._m(0)]:[t.quizResult>=t.itemData.pass_grade?s("div",{staticClass:"result__wrapper"},[s("p",[t._v("\n          You have already completed this Assessment and earned a passing grade of\n          "),s("strong",[t._v(t._s(t.quizResult)+"%")]),t._v(". Please visit your profile to view and download your certificate\n        ")]),s("router-link",{staticClass:"btn btn-accent text-white",attrs:{"active-class":"active",to:{name:"user-profile",params:{id:t.id}},exact:""}},[t._v("My Profile")])],1):s("div",[!1===t.agreementStatus?[s("ExamInstructionModal",{attrs:{itemData:t.itemData}})]:s("div",{staticClass:"quiz"},[s("div",{staticClass:"module__wrapper module__wrapper--between"},[s("div",[t._v("\n              Attempts:\n              "),s("span",{staticClass:"bold"},[t._v(t._s(t.attempt)+"/"+t._s(t.itemData.exam_attempts))])]),s("div",{staticClass:"time__wrapper"},[s("h5",{staticClass:"title"},[t._v("Countdown Timer")]),s("span",{staticClass:"time"},[t._v(t._s(t.minutes)+":"+t._s(t.seconds))])])]),t.quizStart&&!t.quizSubmitted?s("div",{staticClass:"quiz__meta"},[s("span",{ref:"progress",staticClass:"level"},[t._v("\n              course progress:\n              "),t.progress?s("span",{staticClass:"bold"},[t._v(t._s(t.progress+"%"))]):s("span",{staticClass:"bold"},[t._v("0%")])])]):t._e(),t.quizIntro?[s("div",{staticClass:"center"},[s("h6",[t._v("Hello, we noticed you scored below the pass mark. Do take the exams again if you wish to be certified in this course.")]),s("p",{staticClass:"bold pb-10"},[t._v("Click the button below to start the timer to retake quiz")]),s("button",{staticClass:"btn__primary btn__primary--alt",attrs:{type:"button"},on:{click:t.startQuiz}},[t._v("Start Assessment")])])]:t._e(),t.quizStart?[s("div",{staticClass:"quiz__heading"},[s("h4",{staticClass:"quiz__primary"},[t._v(t._s(t.itemData.title))]),s("h5",{staticClass:"quiz__secondary"},[t._v("Please answer all questions.")])]),s("div",{staticClass:"quiz__body"},[s("form",{staticClass:"form__quiz",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submitQuiz(e)}}},[s("Question",{key:t.key,attrs:{selectedAnswer:t.scoreArray[t.currentQuizIndex],question:t.quizzes[t.currentQuizIndex],"question-index":t.currentQuizIndex+1,reset:t.reset}}),t.currentQuizIndex===t.quizzes.length-1?[s("button",{staticClass:"btn btn__quiz",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitQuiz(e)}}},[t._v("Submit")])]:[s("div",{staticClass:"d-flex"},[s("button",{staticClass:"btn btn__quiz",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.nextQuiz(e)}}},[t._v("Next")])])]],2)])]:t._e(),t.quizSubmitted?[s("div",{staticClass:"center"},[s("div",{},[s("p",[t._v("Your score is "+t._s(t.percentage))])]),t.percentage>=t.itemData.pass_grade?s("div",{},[s("h4",[t._v("Well done!")]),s("h5",{staticClass:"bold"},[t._v("You have earned a Certificate")])]):t.quizStart?t._e():s("div",[s("h5",{staticClass:"bold"},[t._v("\n                  Hello, we noticed you scored below the pass mark. Do take the exams again if you wish to be certified in this course.\n                  You have "+t._s(t.itemData.exam_attempts-t.attempt)+" more trie(s) to reach the passmark.\n                ")]),s("button",{staticClass:"btn__primary btn__primary--alt",attrs:{type:"button"},on:{click:t.restartQuiz}},[t._v("Retake Assessment")])])])]:t._e()],2)],2)]]:!1===t.agreementStatus?[s("ExamInstructionModal",{attrs:{itemData:t.itemData}})]:[t.quizLoaded&&t.quizzes.length?[s("div",{staticClass:"quiz"},[s("div",{staticClass:"module__wrapper module__wrapper--between"},[s("div",[t._v("\n            Attempts:\n            "),s("span",{staticClass:"bold"},[t._v(t._s(t.attempt)+"/"+t._s(t.itemData.exam_attempts))])]),s("div",{staticClass:"time__wrapper"},[s("h5",{staticClass:"title"},[t._v("Countdown Timer")]),s("span",{staticClass:"time"},[t._v(t._s(t.minutes)+":"+t._s(t.seconds))])])]),t.quizStart&&!t.quizSubmitted?s("div",{staticClass:"quiz__meta"},[s("span",{ref:"progress",staticClass:"level"},[t._v("\n            course progress:\n            "),t.progress?s("span",{staticClass:"bold"},[t._v(t._s(t.progress+"%"))]):s("span",{staticClass:"bold"},[t._v("0%")])])]):t._e(),s("div",{staticClass:"quiz__main"},[t.quizIntro?[s("div",{staticClass:"center"},[s("h4",[t._v("Welcome to the quiz")]),s("p",{staticClass:"pb-10"},[t._v("Click the button below to start the timer for your quiz")]),s("button",{staticClass:"btn__primary btn__primary--alt",attrs:{type:"button"},on:{click:t.startQuiz}},[t._v("Start")])])]:t._e(),t.quizStart?[s("div",{staticClass:"quiz__heading"},[s("h4",{staticClass:"quiz__primary"},[t._v(t._s(t.itemData.title))]),s("h5",{staticClass:"quiz__secondary"},[t._v("Please answer all questions.")])]),s("div",{staticClass:"quiz__body"},[s("form",{staticClass:"form__quiz",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submitQuiz(e)}}},[s("Question",{key:t.key,attrs:{selectedAnswer:t.scoreArray[t.currentQuizIndex],question:t.quizzes[t.currentQuizIndex],"question-index":t.currentQuizIndex+1,reset:t.reset}}),t.currentQuizIndex===t.quizzes.length-1?[s("div",{staticClass:"d-flex"},[s("button",{staticClass:"btn btn__quiz",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitQuiz(e)}}},[t._v("Submit")])])]:[s("div",{staticClass:"d-flex"},[s("button",{staticClass:"btn btn__quiz btn__quiz--alt",attrs:{disabled:t.currentQuizIndex<=1,type:"submit"},on:{click:function(e){return e.preventDefault(),t.prevQuiz(e)}}},[t._v("Prev")]),s("button",{staticClass:"btn btn__quiz",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.nextQuiz(e)}}},[t._v("Next")])])]],2)])]:t._e(),t.quizSubmitted?[s("div",{staticClass:"center"},[s("h4",{staticClass:"bold"},[t._v("Your score is "+t._s(t.percentage))]),t.percentage>=t.itemData.pass_grade?s("div",{},[s("h4",[t._v("Well done!")]),s("h5",{staticClass:"bold"},[t._v("You have earned a Certificate")])]):s("div",[s("h5",[t._v("\n                  Hello, we noticed you scored below the pass mark. Do take the assessment again if you wish to be certified in this course.\n                  You have "+t._s(t.itemData.exam_attempts-t.attempt)+" more attempt(s) to reach the passmark.\n                ")])])])]:t._e()],2)])]:t.quizLoaded?[t._m(1)]:[t._m(2)]]],2)},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert__wrapper"},[s("p",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("You are out of attempts and can not take this exam again")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result__wrapper"},[s("p",[t._v("No quiz available yet")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result__wrapper"},[s("p",[t._v("Error Loading quiz")])])}],m=s("e9cc"),f=s("8504"),h=s("ad9e"),p=s("eae4"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"certificate"},[s("div",{staticClass:"certificate__wrapper"},[t._m(0),s("div",{staticClass:"certificate__body"},[s("p",{domProps:{innerHTML:t._s(t.itemData.exam_instructions)}})]),s("div",{staticClass:"btn__group btn__group--form"},[s("div",[s("label",[s("input",{attrs:{type:"checkbox"},on:{click:t.toggleCheckbox}}),s("span",{staticClass:"terms"},[t._v("I agree to the Assessment Instructions")])])]),s("button",{staticClass:"btn__primary",attrs:{disabled:!t.checked},on:{click:function(e){return e.preventDefault(),t.changeAgreement(e)}}},[t._v("Confirm")])])])])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"certificate__header"},[s("h5",[t._v("Exam Instructions")])])}],b={name:"ExamInstructionModal",props:{itemData:{type:Object,default:function(){return{}}}},data:function(){return{checked:!1}},methods:{changeAgreement:function(){!0===this.checked?(Object(p["b"])({title:"Success! You can now take the exam!"}),f["a"].$emit("changed-instruction-status",this.checked)):Object(p["a"])({title:"Hello! You need to agree to the exam instructions to proceed"})},toggleCheckbox:function(){this.checked=!this.checked}}},g=b,C=(s("b8e33"),s("2877")),z=Object(C["a"])(g,_,v,!1,null,"ed2bf696",null),y=z.exports,q=s("5118"),w={name:"CourseQuiz",props:{done:{type:Boolean,default:function(){return!1}},itemData:{type:Object,default:function(){return{}}}},data:function(){return{id:this.$session.get("id"),quizzes:[],loadingQuiz:!1,quizLoaded:!1,total:0,currentQuizIndex:0,quizIntro:!1,quizStart:!1,quizSubmitted:!1,quizResult:"",result:null,score:0,timer:null,timelimit:1,totalTime:0,percentage:0,response:[],reset:!1,attempt:0,key:0,scoreArray:[],agreementStatus:!1}},created:function(){var t=this;this.getQuiz(),this.getScores(),this.getUserAttempts(),f["a"].$on("result",function(e){t.score+=e}),f["a"].$on("answer",function(e){t.scoreArray[t.currentQuizIndex]=e}),f["a"].$on("changed-instruction-status",function(e){t.agreementStatus=e}),this.totalTime=this.timelimit*this.itemData.exam_duration},mounted:function(){this.done&&this.getScores()},watch:{score:function(t){this.percentage=t/this.quizzes.length*100},progress:function(){this.setProgressWidth()}},computed:Object(n["a"])({},Object(r["c"])({joinedCourse:"getJoinedStatus",user:"getLoggedUser"}),{progress:function(){return this.quizStart?(this.currentQuizIndex+1)/this.quizzes.length*100:0},minutes:function(){var t=Math.floor(this.totalTime/60);return t<10?"0".concat(t):t},seconds:function(){var t=Math.floor(this.totalTime-60*this.minutes);return t<10?"0".concat(t):t}}),methods:{getScores:function(){var t=this;Object(u["g"])(this.$session.get("id")).then(function(e){if(200===e.status){var s=t.$route.params.id||t.$route.params.onlineClassId,a=e.data.data;t.quizResult=a.find(function(t){return t.online_class_id==s}).score}}).catch(function(t){return t})},getQuiz:function(){var t=this;return Object(o["h"])(this.$route.params.id||this.$route.params.onlineClassId).then(function(e){200===e.status&&(t.quizzes=e.data.data,t.total=e.data.total,t.loadingQuiz=!1,t.quizLoaded=!0,t.quizIntro=!0)}).catch(function(e){return t.quizLoaded=!1,t.loadingQuiz=!1,e}),!0},getUserAttempts:function(){var t=this;Object(o["n"])(this.$route.params.id,this.user.id).then(function(e){200===e.status&&(t.attempt=e.data.data.attempt)}).catch(function(t){return t})},startQuiz:function(){this.quizIntro=!1,this.quizStart=!0,this.quizSubmitted=!1,this.scoreArray=[],this.currentQuizIndex=0,this.startTimer(),this.setProgressWidth()},restartQuiz:function(){var t=this;this.quizzes=[],this.loadingQuiz=!1,this.quizLoaded=!1,this.total=0,this.currentQuizIndex=0,this.quizIntro=!1,this.quizStart=!1,this.quizSubmitted=!1,this.quizResult="",this.result=null,this.score=0,this.timer=null,this.timelimit=1,this.totalTime=0,this.percentage=0,this.response=[],this.reset=!1,this.attempt=0,this.key=0,this.scoreArray=[],this.agreementStatus=!1,this.getQuiz(),this.getUserAttempts(),f["a"].$on("result",function(e){t.score+=e}),f["a"].$on("answer",function(e){t.scoreArray[t.currentQuizIndex]=e}),f["a"].$on("changed-instruction-status",function(e){t.agreementStatus=e}),this.totalTime=this.timelimit*this.itemData.exam_duration},submitQuiz:function(){var t=this;this.stopTimer(),Object(m["d"])({online_class_id:this.$route.params.id||this.$route.params.onlineClassId,user_id:this.$session.get("id"),score:this.percentage}).then(function(e){201===e.status&&(t.quizStart=!1,t.quizSubmitted=!0,t.getScores(),Object(p["b"])({title:"Success! You have completed the quiz!."}))}).catch(function(t){return Object(p["a"])({title:"Oops! Something went wrong",text:t.data}),t})},nextQuiz:function(){var t=this;this.currentQuizIndex+=1,this.reset=!0,Object(q["setTimeout"])(function(){t.reset=!1},500)},prevQuiz:function(){this.reset=!0,this.currentQuizIndex-=1,this.key+=1},startTimer:function(){var t=this;this.timer=setInterval(function(){return t.countdown()},1e3)},stopTimer:function(){clearInterval(this.timer),this.timer=null},resetTimer:function(){this.totalTime=60,clearInterval(this.timer),this.timer=null},countdown:function(){this.totalTime>=1?this.totalTime-=1:(this.totalTime=0,this.submitQuiz(),this.resetTimer())},setProgressWidth:function(){var t=this;Object(q["setTimeout"])(function(){t.$refs.progress.style.width="".concat(Number(t.progress.toFixed(2)),"%")},1e3)}},components:{Question:h["a"],Loader:c["a"],ExamInstructionModal:y}},x=w,T=(s("9846"),Object(C["a"])(x,l,d,!1,null,"48183ddf",null)),k=T.exports,I=s("b2d4"),j=s("c1d8"),O={name:"CourseDetail",data:function(){return{loadingCourse:!0,itemData:{},courseLoaded:!1,lessons:[],userCourses:[],userCoursesLoaded:!1,userId:this.$session.get("id"),agreementStatus:!1,lessonIds:[]}},created:function(){var t=this;this.getCourse(),this.courseLearner(),this.getUserProfile(),f["a"].$on("changed-instruction-status",function(e){t.agreementStatus=e})},methods:Object(n["a"])({},Object(r["d"])(["setJoinedCourse","resetJoinedCourse","setLessonIds"]),{courseLearner:function(){var t=this;Object(o["g"])(this.$route.params.id,this.$session.get("id")).then(function(e){return 200===e.status?(t.setJoinedCourse(!!e.data.data.class_id),!0):(t.resetJoinedCourse(),!1)}).catch(function(e){return t.resetJoinedCourse(),e})},getCourse:function(){var t=this;Object(o["e"])(this.$route.params.id,this.userId).then(function(e){if(200===e.status){t.itemData=e.data.data,t.lessons=e.data.data.lessons;var s=t.lessons.map(function(t){return t.id});return t.setLessonIds(s),t.courseLoaded=!0,!0}return t.courseLoaded=!1,!1}).catch(function(e){return t.courseLoaded=!1,e}).finally(function(){t.loadingCourse=!1})},activateTab:function(t){return Object(j["a"])(t,this.$refs)},getUserProfile:function(){var t=this;Object(u["f"])(this.userId).then(function(e){if(200===e.status){t.userCourses=e.data.data.classes,t.userCoursesLoaded=!0;var s=t.userCourses.find(function(e){return e.class_id===Number(t.$route.params.id)}).class_id;s?t.setJoinedCourse(!0):t.resetJoinedCourse()}return t.userCoursesLoaded=!1,!1}).catch(function(e){return t.userCoursesLoaded=!1,e})}}),computed:Object(n["a"])({},Object(r["c"])({joinedCourse:"getJoinedStatus",getLessonId:"getLessonIds"})),components:{Loader:c["a"],CourseDiscussion:I["default"],CourseQuiz:k},filters:{date:function(t){return moment(t).fromNow()}}},Q=O,S=(s("25d3"),Object(C["a"])(Q,a,i,!1,null,"08dca163",null));e["default"]=S.exports},5118:function(t,e,s){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function n(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new n(i.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new n(i.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},s("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,s("c8ba"))},6017:function(t,e,s){(function(t,e){(function(t,s){"use strict";if(!t.setImmediate){var a,i=1,n={},r=!1,o=t.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(t);u=u&&u.setTimeout?u:t,"[object process]"==={}.toString.call(t.process)?f():h()?p():t.MessageChannel?_():o&&"onreadystatechange"in o.createElement("script")?v():b(),u.setImmediate=c,u.clearImmediate=l}function c(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),s=0;s<e.length;s++)e[s]=arguments[s+1];var r={callback:t,args:e};return n[i]=r,a(i),i++}function l(t){delete n[t]}function d(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(s,a);break}}function m(t){if(r)setTimeout(m,0,t);else{var e=n[t];if(e){r=!0;try{d(e)}finally{l(t),r=!1}}}}function f(){a=function(t){e.nextTick(function(){m(t)})}}function h(){if(t.postMessage&&!t.importScripts){var e=!0,s=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=s,e}}function p(){var e="setImmediate$"+Math.random()+"$",s=function(s){s.source===t&&"string"===typeof s.data&&0===s.data.indexOf(e)&&m(+s.data.slice(e.length))};t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),a=function(s){t.postMessage(e+s,"*")}}function _(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;m(e)},a=function(e){t.port2.postMessage(e)}}function v(){var t=o.documentElement;a=function(e){var s=o.createElement("script");s.onreadystatechange=function(){m(e),s.onreadystatechange=null,t.removeChild(s),s=null},t.appendChild(s)}}function b(){a=function(t){setTimeout(m,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,s("c8ba"),s("4362"))},9846:function(t,e,s){"use strict";var a=s("f35e"),i=s.n(a);i.a},b8e33:function(t,e,s){"use strict";var a=s("09e8"),i=s.n(a);i.a},e83e:function(t,e,s){},e9cc:function(t,e,s){"use strict";s.d(e,"b",function(){return u}),s.d(e,"a",function(){return c}),s.d(e,"e",function(){return l}),s.d(e,"c",function(){return d}),s.d(e,"d",function(){return m});var a=s("795b"),i=s.n(a),n=s("bc3a"),r=s.n(n),o=s("5f87");function u(){return Object(o["b"])()?r.a.get("/v1/quiz"):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t){return Object(o["b"])()?r.a.get("v1/quiz/".concat(t,"/questions")):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function l(t){return Object(o["b"])()?r.a.post("/v1/quizresponses",t):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function d(t){return Object(o["b"])()?r.a.get("/v1/users/".concat(t,"/quiz")):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t){return Object(o["b"])()?r.a.post("/v1/scores",t):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},f35e:function(t,e,s){}}]);
//# sourceMappingURL=course-detail.965b6658.js.map