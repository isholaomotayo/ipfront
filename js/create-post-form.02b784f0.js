(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create-post-form"],{"1c32":function(t,e,a){"use strict";var r=a("f0b1"),i=a.n(r),s={post:{title:i.a.string().min(2).required(),forum_category_id:i.a.number().required(),body:i.a.string().min(2).required()},thread:{body:i.a.string().min(2).required()}};e["a"]=s},3259:function(t,e,a){},"37b8":function(t,e,a){"use strict";var r=a("3259"),i=a.n(r);i.a},"555f":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"lds-spinner",staticStyle:{background:"none"},attrs:{width:"50px",height:"50px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("g",{attrs:{transform:"rotate(0 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(30 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(60 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(90 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(120 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(150 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(180 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(210 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(240 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(270 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(300 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(330 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})])])])},i=[],s={name:"Loader"},o=s,n=a("2877"),l=Object(n["a"])(o,r,i,!1,null,null,null);e["a"]=l.exports},"6a98":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form__wrapper form__wrapper--no-border"},[a("div",{staticClass:"form__body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createPost(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Provide a Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.title,expression:"itemData.title"}],staticClass:"form-control",class:[{"is-invalid":t.errors.title}],attrs:{id:"title",placeholder:"Enter a title here",type:"text"},domProps:{value:t.itemData.title},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"title",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.errors.title)+"\n\t\t\t\t\t\t\t")])])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"category"}},[t._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.itemData.forum_category_id,expression:"itemData.forum_category_id"}],staticClass:"custom-select form__select",class:[{"is-invalid":t.errors.forum_category_id}],attrs:{id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.itemData,"forum_category_id",e.target.multiple?a:a[0])}}},[t.loadingCategories?[a("option",{attrs:{selected:""}},[t._v("Select Category")])]:t.categoriesLoaded&&t.forumCategories.length?t._l(t.forumCategories,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t")])}):[a("option",[t._v("Error loading categories")])]],2),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t"+t._s(t.errors.forum_category_id)+"\n\t\t\t\t\t")])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"forum-body"}},[t._v("Ask Away")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.itemData.body,expression:"itemData.body"}],staticClass:"input input--lg input--light",class:[{"is-invalid":t.errors.title}],attrs:{id:"forum-body",title:"",cols:"30",rows:"4",placeholder:"What do you need help with? please be specific,so that your peers are better able to assist you."},domProps:{value:t.itemData.body},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"body",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.errors.body)+"\n\t\t\t\t\t\t\t")])])])]),a("div",{staticClass:"btn__group btn__group--form"},[a("button",{staticClass:"btn__grey",on:{click:function(e){return e.preventDefault(),t.clearErrors(e)}}},[t._v("Cancel")]),a("button",{staticClass:"btn__primary btn__primary--lg",attrs:{"v-bind":{disabled:t.loading}},on:{click:function(e){return e.preventDefault(),t.createPost(e)}}},[t._v("Publish discussion")]),a("span",{staticClass:"loader"},[t.loading?a("loader"):t._e()],1)])])])])])},i=[],s=a("a4bb"),o=a.n(s),n=a("cebc"),l=a("2f62"),d=a("e49c"),u=a("1c32"),c=a("c85d"),m=a("555f"),g={name:"CreateForumPost",mixins:[d["a"]],components:{Loader:m["a"]},data:function(){return{itemData:{title:"",body:"",forum_category_id:null},errors:{},loading:!1,loadingCategories:!0,forumCategories:[],categoriesLoaded:!1}},computed:Object(n["a"])({},Object(l["c"])(["getPostStatus"])),watch:{getPostStatus:function(t){this.loading=!("loading"!==t),"success"===t&&this.$router.push("/forum")}},created:function(){this.listForumCategories(),"employer"===this.$session.get("category")&&this.$router.push("/jobs")},methods:Object(n["a"])({},Object(l["b"])(["postForumTopic"]),{createPost:function(){return this.validate(this.itemData,u["a"].post),o()(this.issues).length>0?(this.errors=this.issues,!1):(this.loading=!0,this.postForumTopic(Object(n["a"])({},this.itemData,{user_id:this.$session.get("id")})),!0)},listForumCategories:function(){var t=this;return Object(c["d"])().then(function(e){200===e.status&&(t.loadingCategories=!1,t.categoriesLoaded=!0,t.forumCategories=e.data.data)}).catch(function(e){return t.loadingCategories=!1,t.categoriesLoaded=!1,e}),!0}})},f=g,p=(a("37b8"),a("2877")),y=Object(p["a"])(f,r,i,!1,null,"523ae8ec",null);e["default"]=y.exports}}]);
//# sourceMappingURL=create-post-form.02b784f0.js.map