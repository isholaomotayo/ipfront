(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job-detail"],{"2bd6":function(t,e,a){"use strict";a.d(e,"c",function(){return c}),a.d(e,"b",function(){return u}),a.d(e,"e",function(){return d}),a.d(e,"d",function(){return l}),a.d(e,"a",function(){return p}),a.d(e,"f",function(){return b});var s=a("795b"),i=a.n(s),n=a("bc3a"),r=a.n(n),o=a("5f87");function c(t){return Object(o["b"])()?r.a.get("/v1/jobs?career_id=".concat(t)):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function u(t){return Object(o["b"])()?r.a.get("/v1/jobs/".concat(t)):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function d(t){return Object(o["b"])()?r.a.get("/v1/jobs/search?query=".concat(t)):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function l(t,e){return Object(o["b"])()?r.a.post("v1/jobs/".concat(t,"/apply"),e):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t){return Object(o["b"])()?r.a.get("/v1/jobs/".concat(t,"/applicants")):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function b(t){return Object(o["b"])()?r.a.post("/v1/jobs/cv",t):i.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},"43d6":function(t,e,a){"use strict";var s=a("cc7d"),i=a.n(s);i.a},"555f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"lds-spinner",staticStyle:{background:"none"},attrs:{width:"50px",height:"50px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("g",{attrs:{transform:"rotate(0 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(30 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(60 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(90 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(120 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(150 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(180 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(210 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(240 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(270 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(300 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(330 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})])])])},i=[],n={name:"Loader"},r=n,o=a("2877"),c=Object(o["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},be85:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("main",[t._m(0),a("section",{staticClass:"section bg-grey"},[a("div",{staticClass:"container main__grid job"},[a("article",{staticClass:"job__main"},[a("section",[a("main",[a("ul",{staticClass:"job__heading"},[a("li",{staticClass:"boards__item"},[a("div",{staticClass:"item__row"},[a("div",{staticClass:"boards__head"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tJOB\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"boards__detail"},[a("h5",{staticClass:"bold"},[t._v(t._s(t.job.title))]),a("div",{staticClass:"boards__item__meta"},[a("span",{staticClass:"item"},[a("span",{staticClass:"item"},[a("svg",{attrs:{width:"8",height:"11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 0C1.77 0 0 1.7 0 3.85 0 6.71 4 11 4 11s4-4.29 4-7.15A3.9 3.9 0 0 0 4 0zm0 5.22c-.8 0-1.43-.6-1.43-1.37 0-.77.63-1.38 1.43-1.38.8 0 1.43.61 1.43 1.38 0 .77-.63 1.37-1.43 1.37z",fill:"#474747"}})]),a("span",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  "+t._s(t.job.location)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])]),a("div",{staticClass:"right"},[a("ul",{staticClass:"tag"},[a("li",{staticClass:"tag__item"},[t._v(t._s(t.job.type))])])])])]),a("div",{staticClass:"job__meta"},[a("div",{staticClass:"job__meta__item"},[t._v("\n\t\t\t\t\t\t\t\t\t\tType:\n\t\t\t\t\t\t\t\t\t\t"),a("span",[t._v(t._s(t.job.type))])]),a("div",{staticClass:"job__meta__item"},[t._v("\n\t\t\t\t\t\t\t\t\t\tClosing Date:\n\t\t\t\t\t\t\t\t\t\t"),a("span",[t._v(t._s(t._f("date")(t.job.closing_date)))])]),a("div",{staticClass:"job__meta__item"},[t._v("\n\t\t\t\t\t\t\t\t\t\tStatus:\n\t\t\t\t\t\t\t\t\t\t"),a("span",{class:t.isActive},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(1===t.job.active?"Active":"Not Active")+"\n\t\t\t\t\t\t\t\t\t\t")])])]),a("div",{staticClass:"job__body"},[a("h5",{staticClass:"job__primary"},[t._v("Job Description")]),a("p",{domProps:{innerHTML:t._s(t.job.description)}})])])])]),a("aside",[t.applicationStatus||!t.jobStatus?[t.applicationStatus?[a("p",[t._v("You have applied for this job.")])]:[a("p",[t._v("This job is currently inactive.")])]]:[a("form",{staticClass:"upload",on:{submit:function(e){return e.preventDefault(),t.jobApplication(e)}}},[a("strong",[t._v("Upload Your Resume.")]),a("div",{staticClass:"upload__section"},[a("div",{staticClass:"upload__wrapper"},[a("input",{ref:"cvs",staticClass:"upload__input",attrs:{role:"button",type:"file",placeholder:"Upload File"},on:{change:t.uploadCv}}),a("button",{staticClass:"btn__primary btn__primary--upload",attrs:{type:"submit","v-bind":{disabled:t.isUploadingCv}},on:{click:function(e){return e.preventDefault(),t.jobApplication(e)}}},[t._v("\n                                            Apply\n                                            "),t.isUploadingCv?a("Loader",{staticClass:"loading loading--alt"}):t._e()],1)])]),a("div",{staticClass:"invalid-feedback"},[t._v("\n                                    "+t._s(t.errors.cv)+"\n                                ")])])]],2)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero hero--job"},[a("div",{staticClass:"container"})])}],n=a("768b"),r=a("795b"),o=a.n(r),c=a("2bd6"),u=a("eae4"),d=a("555f"),l={name:"JobDetail",data:function(){return{job:{},loadingJob:!0,jobLoaded:!1,applicationStatus:!1,applicants:[],applicantsLoaded:!1,status:!1,errors:{},resumeData:{},isUploadingCv:!1,cvUploaded:!1,resume:null,file:""}},created:function(){this.getJobDetails(),this.getJobApplicants()},methods:{getJobDetails:function(){var t=this;return Object(c["b"])(this.$route.params.id).then(function(e){return 200===e.status&&(t.jobLoaded=!0,t.job=e.data.data),t.loadingJob=!1,!1}).catch(function(e){return t.loadingJob=!1,e}),!0},jobApplication:function(){var t=this,e={user_id:this.$session.get("id"),resume:this.resume};Object(c["d"])(this.$route.params.id,e).then(function(e){201===e.status&&(t.applicationStatus=!0,Object(u["b"])({title:"Success! You have successfully applied!."}))}).catch(function(t){Object(u["a"])({title:"Oops! Something went wrong",text:t.data})})},getJobApplicants:function(){var t=this,e=this.$session.get("id");Object(c["a"])(this.$route.params.id).then(function(a){return 200===a.status?(t.applicants=a.data.data,t.applicantsLoaded=!0,t.applicants.map(function(a){return a.user_id===e&&(t.applicationStatus=!0),!0}),!0):(t.applicantsLoaded=!1,!1)}).catch(function(e){o.a.reject(e.response),t.applicantsLoaded=!1}).finally(function(){t.applicantsLoaded=!1})},uploadCv:function(){var t=this,e=Object(n["a"])(this.$refs.cvs.files,1),a=e[0];this.file=a;var s=new FormData;return s.append("file",this.file),this.isUploadingCv=!0,this.cvUploaded=!1,Object(c["f"])(s).then(function(e){return 200===e.status?(t.resume=e.data.file,t.isUploadingCv=!1,t.cvUploaded=!0,!0):(t.cvUploaded=!1,!1)}).catch(function(e){return t.cvUploaded=!1,e}).finally(function(){t.isUploadingCv=!1}),!0}},filters:{date:function(t){return moment(t).fromNow()}},computed:{isActive:function(){return[1===this.job.active?"badge badge-success":"badge badge-danger"]},jobStatus:function(){return!(1!==this.job.active||!moment(this.job.closing_date).isAfter(new Date))&&(this.status=!0,!0)}},components:{Loader:d["a"]}},p=l,b=(a("43d6"),a("2877")),f=Object(b["a"])(p,s,i,!1,null,"3de88b32",null);e["default"]=f.exports},cc7d:function(t,e,a){}}]);
//# sourceMappingURL=job-detail.f07247b9.js.map