(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["learner-registration"],{"7d1c":function(t,e,a){},9239:function(t,e,a){"use strict";var i=a("f0b1"),s=a.n(i),r=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/gm,n=s.a.string().regex(r).options({language:{string:{regex:{base:"must be a valid phone number"}}}}),o={business_name:s.a.string().min(2).max(24).required(),phone:n,email:s.a.string().email().required(),address:s.a.string().min(2).max(24).required(),city:s.a.string().min(2).max(24).required(),file:s.a.string()},l={create:{fname:s.a.string().min(2).max(24).required(),lname:s.a.string().min(2).max(24).required(),email:s.a.string().email().required(),password:s.a.string().min(7).required(),phone:n.required(),state_id:s.a.number().required(),city_id:s.a.number().required()},login:{email:s.a.string().email().required(),password:s.a.string().min(7).required()},reset:{email:s.a.string().email().required()},passwordChange:{password:s.a.string().min(7).required(),confirm_password:s.a.string().min(7).required(),token:s.a.string().min(4).required()},employer:{fname:s.a.string().min(2).max(24),lname:s.a.string().min(2).max(24),email:s.a.string().email(),password:s.a.string().min(4),phone:n,employer:o,state_id:s.a.number().required(),city_id:s.a.number().required()}};e["a"]=l},d9cf:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form__wrapper"},[a("div",{staticClass:"form__title"},[t._v("Learner Registration")]),a("div",{staticClass:"form__body"},[t.getErrorMessage?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.getErrorMessage))]):t._e(),a("form",{on:{submit:function(e){return e.preventDefault(),t.registerUser(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"fname"}},[t._v("First Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.fname,expression:"itemData.fname"}],staticClass:"form-control",class:[{"is-invalid":t.errors.fname}],attrs:{id:"fname",type:"text",placeholder:"First Name"},domProps:{value:t.itemData.fname},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"fname",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.fname))])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lname"}},[t._v("Last Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.lname,expression:"itemData.lname"}],staticClass:"form-control",class:[{"is-invalid":t.errors.lname}],attrs:{id:"lname",type:"text",placeholder:"Last Name"},domProps:{value:t.itemData.lname},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"lname",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.lname))])])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.email,expression:"itemData.email"}],staticClass:"form-control",class:[{"is-invalid":t.errors.email}],attrs:{id:"email",placeholder:"Email Address",type:"email"},domProps:{value:t.itemData.email},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"email",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.email))])])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.password,expression:"itemData.password"}],staticClass:"form-control",class:[{"is-invalid":t.errors.password}],attrs:{id:"password",type:"password",placeholder:"********"},domProps:{value:t.itemData.password},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"password",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.password))])]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"phone"}},[t._v("Phone Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.phone,expression:"itemData.phone"}],staticClass:"form-control",class:[{"is-invalid":t.errors.phone}],attrs:{id:"phone",type:"text",placeholder:"Phone Number"},domProps:{value:t.itemData.phone},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"phone",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.phone))])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("State")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.state_id,expression:"state_id"}],staticClass:"custom-select form__select",class:[{"is-invalid":t.errors.state_id}],attrs:{id:"state"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.state_id=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select State")]),t.statesLoaded&&t.states.length?t._l(t.states,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}):[a("option",[t._v("Error loading states")])]],2),a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.state_id))])]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("LGA")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.city_id,expression:"city_id"}],staticClass:"custom-select form__select",class:[{"is-invalid":t.errors.city_id}],attrs:{disabled:!t.state_id,id:"city"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.city_id=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select LGA")]),t.citiesLoaded&&t.cities.length?t._l(t.cities,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}):[a("option",[t._v("Error loading cities")])]],2),a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.city_id))])])]),a("div",{staticClass:"btn__group btn__group--form"},[a("button",t._b({staticClass:"btn__primary btn__primary--main",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.registerUser(e)}}},"button",{disabled:t.loading},!1),[t._v("Sign Up")])])]),a("div",{staticClass:"form__meta"},[a("p",[t._v("\n          Already have an account?\n          "),a("router-link",{staticClass:"form__link",attrs:{to:{name:"login"},exact:""}},[t._v("Sign In")])],1)])])])])},s=[],r=a("a4bb"),n=a.n(r),o=a("cebc"),l=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2f62")),d=a("80be"),c=a("e49c"),m=a("9239"),u=void 0,v={name:"LearnerRegistration",mixins:[c["a"]],data:function(){return{itemData:{},errors:{},loading:!1,state_id:"",states:[],statesLoaded:!1,loadingStates:!0,city_id:"",cities:[],citiesLoaded:!1,loadingCities:!0}},created:function(){this.reset(),this.getStates()},computed:Object(o["a"])({},Object(l["c"])(["getRegistrationStatus","getStatus","getErrorMessage"])),watch:{getRegistrationStatus:function(t){return!!t&&(this.clearErrors(),this.$router.push("/"),!0)},loggedUser:function(t,e){t&&t.length&&u.$router.push("/")},getStatus:function(t,e){this.loading="loading"===t},isLoggedIn:function(t,e){t&&u.$router.push("/")},state_id:function(){this.getCities(this.state_id)}},methods:Object(o["a"])({},Object(l["b"])(["register"]),Object(l["d"])(["reset"]),{registerUser:function(){return this.itemData.state_id=this.state_id,this.itemData.city_id=this.city_id,this.validate(this.itemData,m["a"].create),n()(this.issues).length>0?(this.errors=this.issues,!1):(this.loading=!0,this.register(this.itemData),!0)},getStates:function(){var t=this;return Object(d["c"])().then(function(e){200===e.status&&(t.states=e.data.data,t.statesLoaded=!0,t.loadingStates=!1)}).catch(function(e){return t.statesLoaded=!1,t.loadingStates=!1,e}),!0},getCities:function(t){var e=this;return Object(d["b"])(t).then(function(t){200===t.status&&(e.cities=t.data.data,e.citiesLoaded=!0,e.loadingCities=!1)}).catch(function(t){return e.statesLoaded=!1,e.loadingCities=!1,t}),!0}})},g=v,p=(a("ea47"),a("2877")),f=Object(p["a"])(g,i,s,!1,null,"6aef770f",null);e["default"]=f.exports},ea47:function(t,e,a){"use strict";var i=a("7d1c"),s=a.n(i);s.a}}]);
//# sourceMappingURL=learner-registration.a745b340.js.map