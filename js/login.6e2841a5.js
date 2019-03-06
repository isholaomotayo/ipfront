(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"214f":function(t,e,i){"use strict";var a=i("32e9"),s=i("2aba"),r=i("79e5"),n=i("be13"),o=i("2b4c");t.exports=function(t,e,i){var c=o(t),l=i(n,c,""[t]),d=l[0],u=l[1];r(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(s(String.prototype,t,d),a(RegExp.prototype,c,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)}))}},"386d":function(t,e,i){i("214f")("search",1,function(t,e,i){return[function(i){"use strict";var a=t(this),s=void 0==i?void 0:i[e];return void 0!==s?s.call(i,a):new RegExp(i)[e](String(a))},i]})},"78f3":function(t,e,i){},9239:function(t,e,i){"use strict";i("cadf"),i("551c"),i("f751"),i("097d");var a=i("f0b1"),s=i.n(a),r=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/gm,n=s.a.string().regex(r).options({language:{string:{regex:{base:"must be a valid phone number"}}}}),o={business_name:s.a.string().min(2).max(24).required(),phone:n,email:s.a.string().email().required(),address:s.a.string().min(2).max(24).required(),city:s.a.string().min(2).max(24).required()},c={create:{fname:s.a.string().min(2).max(24).required(),lname:s.a.string().min(2).max(24).required(),email:s.a.string().email().required(),password:s.a.string().min(7).required(),phone:n.required()},login:{email:s.a.string().email().required(),password:s.a.string().min(7).required()},reset:{email:s.a.string().email().required()},passwordChange:{password:s.a.string().min(7).required(),confirm_password:s.a.string().min(7).required(),token:s.a.string().min(4).required()},employer:{fname:s.a.string().min(2).max(24),lname:s.a.string().min(2).max(24),email:s.a.string().email(),password:s.a.string().min(4),phone:n,employer:o}};e["a"]=c},a55b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"form__wrapper"},[i("div",{staticClass:"form__title"},[t._v("\n\t\t\tLog In\n\t\t")]),i("div",{staticClass:"form__body"},[t.getErrorMessage?i("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n\t\t\t\t"+t._s(t.getErrorMessage)+"\n\t\t\t")]):t.verification.status?i("div",{staticClass:"alert",class:t.verification.class,attrs:{role:"alert"}},[t._v("\n\t\t\t\t"+t._s(t.verification.message)+"\n\t\t\t")]):t._e(),i("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[i("div",{staticClass:"form-row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"email"}},[t._v("Email Address")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.email,expression:"itemData.email"}],staticClass:"form-control",class:[{"is-invalid":t.errors.email}],attrs:{id:"email",placeholder:"Email Address",type:"email"},domProps:{value:t.itemData.email},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"email",e.target.value)}}}),i("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.errors.email)+"\n\t\t\t\t\t\t\t")])])])]),i("div",{staticClass:"form-row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"password"}},[t._v("Password")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.password,expression:"itemData.password"}],staticClass:"form-control",class:[{"is-invalid":t.errors.password}],attrs:{id:"password",placeholder:"*********",type:"password"},domProps:{value:t.itemData.password},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"password",e.target.value)}}}),i("span",[i("router-link",{staticClass:"form-link",attrs:{to:{name:"forgot-password"}}},[t._v("\n\t\t\t\t\t\t\t\t\tForgot password?\n\t\t\t\t\t\t\t\t")])],1),i("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.errors.password)+"\n\t\t\t\t\t\t\t")])])])]),i("div",{staticClass:"btn__group btn__group--form"},[i("button",t._b({staticClass:"btn__primary btn__primary--main",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.loginUser(e)}}},"button",{disabled:t.loading},!1),[t._v("Sign In")])])])])])])},s=[],r=(i("386d"),i("a4bb")),n=i.n(r),o=i("cebc"),c=(i("cadf"),i("551c"),i("f751"),i("097d"),i("2f62")),l=i("e49c"),d=i("9239"),u={name:"Login",mixins:[l["a"]],data:function(){return{itemData:{},errors:{},loading:!1,verification:{status:!1,class:null}}},computed:Object(o["a"])({},Object(c["c"])(["isLoggedIn","getStatus","getLoggedUser","getError","getErrorMessage"])),created:function(){this.reset()},watch:{isLoggedIn:function(t){var e=this;t&&setTimeout(function(){e.$router.push({name:"dashboard",params:{id:e.getLoggedUser.id}})},1e3)},getStatus:function(t){"error"===t&&(this.loading=!1)}},methods:Object(o["a"])({},Object(c["d"])(["reset"]),Object(c["b"])(["login"]),{loginUser:function(){return this.validate(this.itemData,d["a"].login),n()(this.issues).length?(this.errors=this.issues,!1):(this.loading=!0,this.login(this.itemData),!0)}}),mounted:function(){var t=new URLSearchParams(window.location.search);void 0!==t.get("verification")&&"success"===t.get("verification")?(this.verification.status=!0,this.verification.message="Your account verification was successful. Please login.",this.verification.class="alert-success"):void 0!==t.get("verification")&&"fail"===t.get("verification")&&(this.verification.status=!0,this.verification.message="Your account verification was not successful",this.verification.class="alert-danger")}},m=u,g=(i("fe7c"),i("2877")),f=Object(g["a"])(m,a,s,!1,null,"024a3d66",null);e["default"]=f.exports},fe7c:function(t,e,i){"use strict";var a=i("78f3"),s=i.n(a);s.a}}]);
//# sourceMappingURL=login.6e2841a5.js.map