(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9868c40c"],{4784:function(e,t,r){"use strict";var a=r("e4a3"),i=r.n(a);i.a},"555f":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"lds-spinner",staticStyle:{background:"none"},attrs:{width:"50px",height:"50px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[r("g",{attrs:{transform:"rotate(0 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(30 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(60 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(90 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(120 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(150 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(180 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(210 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(240 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(270 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(300 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}})])]),r("g",{attrs:{transform:"rotate(330 50 50)"}},[r("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#215d38"}},[r("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})])])])},i=[],s={name:"Loader"},n=s,o=r("2877"),c=Object(o["a"])(n,a,i,!1,null,null,null);t["a"]=c.exports},"850b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loadingCategories||e.loadingCareers?r("div",[r("div",{staticClass:"loading"},[r("Loader")],1)]):r("div",[e.selectedCategory?[e.selectedCareerSegment?[r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"skillset"},[r("div",{},[r("h3",{staticClass:"section__title"},[e._v("Select A Career Path")]),r("ul",{staticClass:"skillset__grid"},e._l(e.careers,function(t){return r("li",{staticClass:"panel__item",attrs:{Key:t.id}},[e._v(e._s(t.name)+"\n\t\t\t\t\t\t\t\t\t"),r("label",{staticClass:"check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCareer,expression:"selectedCareer"}],attrs:{type:"radio"},domProps:{value:t.id,checked:e._q(e.selectedCareer,t.id)},on:{change:function(r){e.selectedCareer=t.id}}}),r("span",{staticClass:"checkmark"})])])})),r("div",{staticClass:"btn__group btn__group--flex"},[r("button",{staticClass:"btn__primary btn__main",on:{click:e.saveCareers}},[e._v("Save")])])])])])])]:[r("div",{},[r("div",{staticClass:"container"},[r("div",{staticClass:"skillset"},[r("h3",{staticClass:"section__title"},[e._v("Select A Career Segment")]),r("div",[r("form",{attrs:{action:""}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"category"}},[e._v("Select segment")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCareerSegment,expression:"selectedCareerSegment"}],staticClass:"custom-select form__select",attrs:{id:"category"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedCareerSegment=t.target.multiple?r:r[0]}}},[r("option",{attrs:{selected:"",value:""}},[e._v("Select Career Segment")]),e.careerSegmentLoaded&&e.careerSegment.length?e._l(e.careerSegment,function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")])}):[r("option",[e._v("Error loading career segments")])]],2)])])])])])])]]:[r("div",{},[r("div",{staticClass:"container"},[r("div",{staticClass:"skillset"},[r("h3",{staticClass:"section__title"},[e._v("Select A Career Category")]),r("div",[r("form",{attrs:{action:""}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"category"}},[e._v("Select category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],staticClass:"custom-select form__select",attrs:{id:"category"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedCategory=t.target.multiple?r:r[0]}}},[r("option",{attrs:{selected:"",value:""}},[e._v("Select Career Category")]),e.categoriesLoaded&&e.categories.length?e._l(e.categories,function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t\t\t\t\t")])}):[r("option",[e._v("Error loading categories")])]],2)])])])])])])]],2)},i=[],s=(r("ac6a"),r("cebc")),n=r("2f62"),o=r("795b"),c=r.n(o),l=r("bc3a"),d=r.n(l),u=r("5f87");function g(e,t){return Object(u["b"])()?d.a.post("/v1/users/".concat(e,"/careers"),t):c.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(){return Object(u["b"])()?d.a.get("v1/categories?status=all"):c.a.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}var f=r("555f"),h=r("eae4"),p={name:"Careers",data:function(){return{selectedCareer:null,careers:{},loadingCareers:!1,careersLoaded:!1,selectedCategory:"",categories:[],categoriesLoaded:!1,loadingCategories:!0,selectedCategories:[],careerSegment:[],careerSegmentLoaded:!1,loadingCareerSegment:!0,selectedCareerSegment:""}},watch:{selectedCategory:function(e){this.getCareerSegment(e)},selectedCareerSegment:function(e){this.getSelectedCareers(e)}},mounted:function(){var e=this;1!==this.userObject.is_credential_uploaded?(Object(h["b"])({title:"Notice!",text:"Kindly update your credentials to proceed, you are being redirected.",timer:8e3}),setTimeout(function(){e.$router.push({name:"user-profile",params:{id:e.$session.get("id")}})},5e3)):1!==this.userObject.is_psychometric_completed?(Object(h["b"])({title:"Notice!",text:"Kindly complete your psychometirc tests to continue, you are being redirected.",timer:8e3}),setTimeout(function(){e.$router.push({name:"test"})},5e3)):1===this.userObject.is_career_selected&&(Object(h["a"])({title:"Notice!",text:"You have already selected a career choice",timer:8e3}),setTimeout(function(){e.$router.push({name:"dashboard"})},50))},created:function(){this.getCategories()},computed:Object(s["a"])({},Object(n["c"])(["userObject"])),methods:Object(s["a"])({},Object(n["d"])(["updateUserObject"]),{saveCareers:function(){var e=this;return g(this.$session.get("id"),{career_id:this.selectedCareer}).then(function(t){if(201===t.status){Object(h["b"])({title:"Success! You have shosen a career track."});var r={career:{career_id:e.selectedCareer}};return e.updateUserObject({is_career_selected:1}),e.updateUserObject(r),e.$router.push("/dashboard"),!0}return!1}).catch(function(e){return Object(h["a"])({title:"Oops! Something went wrong",text:e.data}),e}),!0},getCategories:function(){var e=this;return m().then(function(t){return 200===t.status?(e.categories=t.data.data,e.categoriesLoaded=!0,!0):(e.categoriesLoaded=!1,!1)}).catch(function(t){return e.categoriesLoaded=!1,t}).finally(function(){e.loadingCategories=!1}),!0},getSelectedCareers:function(e){var t=this;return this.careerSegment.forEach(function(r){return r.id===e?(t.careers=r.careers,t.careersLoaded=!0,t.loadingCareers=!1,!0):(t.loadingCareers=!1,!1)}),!0},getCareerSegment:function(e){var t=this;return this.categories.forEach(function(r){return r.id===e?(t.careerSegment=r.segments,t.careerSegmentLoaded=!0,t.loadingCareerSegment=!1,!0):(t.loadingCareerSegment=!1,!1)}),!0}}),components:{Loader:f["a"]}},v=p,y=(r("4784"),r("2877")),C=Object(y["a"])(v,a,i,!1,null,"075a9b36",null);t["default"]=C.exports},ac6a:function(e,t,r){for(var a=r("cadf"),i=r("0d58"),s=r("2aba"),n=r("7726"),o=r("32e9"),c=r("84f2"),l=r("2b4c"),d=l("iterator"),u=l("toStringTag"),g=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(m),h=0;h<f.length;h++){var p,v=f[h],y=m[v],C=n[v],b=C&&C.prototype;if(b&&(b[d]||o(b,d,g),b[u]||o(b,u,v),c[v]=g,y))for(p in a)b[p]||s(b,p,a[p],!0)}},e4a3:function(e,t,r){}}]);
//# sourceMappingURL=chunk-9868c40c.02d22b65.js.map