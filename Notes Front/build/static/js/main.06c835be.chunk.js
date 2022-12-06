(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e,n){},113:function(t,e,n){},115:function(t,e,n){},117:function(t,e,n){},119:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(27),i=n.n(r),l=n(153),s=(n(65),n(21)),c=n(22),u=n(24),d=n(23),m=n(25),h=n(155),p=n(79),g=n(152),f=n(156),v=(n(67),function(t){return o.a.createElement(a.Fragment,null,o.a.createElement("header",{className:"main-header"},t.header),t.mobileNav,o.a.createElement("main",{className:"content"},t.children))}),b=(n(69),function(t){return i.a.createPortal(o.a.createElement("div",{className:["backdrop",t.open?"open":""].join(" "),onClick:t.onClick}),document.getElementById("backdrop-root"))}),E=(n(71),function(t){return o.a.createElement("div",{className:"toolbar"},t.children)}),y=n(138),w=(n(73),function(t){return o.a.createElement("button",{className:"mobile-toggle",onClick:t.onOpen},o.a.createElement("span",{className:"mobile-toggle__bar"}),o.a.createElement("span",{className:"mobile-toggle__bar"}),o.a.createElement("span",{className:"mobile-toggle__bar"}))}),S=(n(75),function(t){return o.a.createElement("h1",{className:"logo"},"MessageNode")}),C=n(19),j=(n(77),[{id:"feed",text:"Feed",link:"/",auth:!0},{id:"login",text:"Login",link:"/",auth:!1},{id:"signup",text:"Signup",link:"/signup",auth:!1}]),k=function(t){return[].concat(Object(C.a)(j.filter(function(e){return e.auth===t.isAuth}).map(function(e){return o.a.createElement("li",{key:e.id,className:["navigation-item",t.mobile?"mobile":""].join(" ")},o.a.createElement(y.a,{to:e.link,exact:!0,onClick:t.onChoose},e.text))})),[t.isAuth&&o.a.createElement("li",{className:"navigation-item",key:"logout"},o.a.createElement("button",{onClick:t.onLogout},"Logout"))])},F=(n(84),function(t){return o.a.createElement("nav",{className:"main-nav"},o.a.createElement(w,{onOpen:t.onOpenMobileNav}),o.a.createElement("div",{className:"main-nav__logo"},o.a.createElement(y.a,{to:"/"},o.a.createElement(S,null))),o.a.createElement("div",{className:"spacer"}),o.a.createElement("ul",{className:"main-nav__items"},o.a.createElement(k,{isAuth:t.isAuth,onLogout:t.onLogout})))}),O=(n(86),function(t){return o.a.createElement("nav",{className:["mobile-nav",t.open?"open":""].join(" ")},o.a.createElement("ul",{className:["mobile-nav__items",t.mobile?"mobile":""].join(" ")},o.a.createElement(k,{mobile:!0,onChoose:t.onChooseItem,isAuth:t.isAuth,onLogout:t.onLogout})))}),P=n(83),N=(n(88),function(t){return t.link?o.a.createElement(P.a,{className:["button","button--".concat(t.design),"button--".concat(t.mode)].join(" "),to:t.link},t.children):o.a.createElement("button",{className:["button","button--".concat(t.design),"button--".concat(t.mode)].join(" "),onClick:t.onClick,disabled:t.disabled||t.loading,type:t.type},t.loading?"Loading...":t.children)}),H=(n(90),function(t){return i.a.createPortal(o.a.createElement("div",{className:"modal"},o.a.createElement("header",{className:"modal__header"},o.a.createElement("h1",null,t.title)),o.a.createElement("div",{className:"modal__content"},t.children),o.a.createElement("div",{className:"modal__actions"},o.a.createElement(N,{design:"danger",mode:"flat",onClick:t.onCancelModal},"Cancel"),o.a.createElement(N,{mode:"raised",onClick:t.onAcceptModal,disabled:!t.acceptEnabled,loading:t.isLoading},"Accept"))),document.getElementById("modal-root"))}),A=function(t){return o.a.createElement(a.Fragment,null,t.error&&o.a.createElement(b,{onClick:t.onHandle}),t.error&&o.a.createElement(H,{title:"An Error Occurred",onCancelModal:t.onHandle,onAcceptModal:t.onHandle,acceptEnabled:!0},o.a.createElement("p",null,t.error.message)))},I=n(12),_=(n(92),function(t){return o.a.createElement("article",{className:"post"},o.a.createElement("header",{className:"post__header"},o.a.createElement("h3",{className:"post__meta"},"Posted by ",t.author," on ",t.date),o.a.createElement("h1",{className:"post__title"},t.title)),o.a.createElement("div",{className:"post__actions"},o.a.createElement(N,{mode:"flat",link:t.id},"View"),o.a.createElement(N,{mode:"flat",onClick:t.onStartEdit},"Edit"),o.a.createElement(N,{mode:"flat",design:"danger",onClick:t.onDelete},"Delete")))}),L=n(4),B=(n(52),function(t){return o.a.createElement("div",{className:"input"},t.label&&o.a.createElement("label",{htmlFor:t.id},t.label),"input"===t.control&&o.a.createElement("input",{className:[t.valid?"valid":"invalid",t.touched?"touched":"untouched"].join(" "),type:t.type,id:t.id,required:t.required,value:t.value,placeholder:t.placeholder,onChange:function(e){return t.onChange(t.id,e.target.value,e.target.files)},onBlur:t.onBlur}),"textarea"===t.control&&o.a.createElement("textarea",{className:[t.valid?"valid":"invalid",t.touched?"touched":"untouched"].join(" "),id:t.id,rows:t.rows,required:t.required,value:t.value,onChange:function(e){return t.onChange(t.id,e.target.value)},onBlur:t.onBlur}))}),x=function(t){return o.a.createElement("div",{className:"input"},o.a.createElement("label",{htmlFor:t.id},t.label),o.a.createElement("input",{className:[t.valid?"valid":"invalid",t.touched?"touched":"untouched"].join(" "),type:"file",id:t.id,onChange:function(e){return t.onChange(t.id,e.target.value,e.target.files)},onBlur:t.onBlur}))},D=(n(95),function(t){return o.a.createElement("div",{className:"image",style:{backgroundImage:"url('".concat(t.imageUrl,"')"),backgroundSize:t.contain?"contain":"cover",backgroundPosition:t.left?"left":"center"}})}),M=function(t){return""!==t.trim()},U=function(t){return function(e){var n=!0;return t.min&&(n=n&&e.trim().length>=t.min),t.max&&(n=n&&e.trim().length<=t.max),n}},T=function(t){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t)},z=function(t){var e=new FileReader,n=new Promise(function(t,n){e.onload=function(e){return t(e.target.result)},e.onerror=function(t){return n(t)}});return e.readAsDataURL(t),n};function V(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw r}}}}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var q={title:{value:"",valid:!1,touched:!1,validators:[M,U({min:5})]},image:{value:"",valid:!1,touched:!1,validators:[M]},content:{value:"",valid:!1,touched:!1,validators:[M,U({min:5})]}},J=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={postForm:q,formIsValid:!1,imagePreview:null},n.postInputChangeHandler=function(t,e,a){a&&z(a[0]).then(function(t){n.setState({imagePreview:t})}).catch(function(t){n.setState({imagePreview:null})}),n.setState(function(n){var o,r=!0,i=V(n.postForm[t].validators);try{for(i.s();!(o=i.n()).done;){var l=o.value;r=r&&l(e)}}catch(d){i.e(d)}finally{i.f()}var s=Object(I.a)({},n.postForm,Object(L.a)({},t,Object(I.a)({},n.postForm[t],{valid:r,value:a?a[0]:e}))),c=!0;for(var u in s)c=c&&s[u].valid;return{postForm:s,formIsValid:c}})},n.inputBlurHandler=function(t){n.setState(function(e){return{postForm:Object(I.a)({},e.postForm,Object(L.a)({},t,Object(I.a)({},e.postForm[t],{touched:!0})))}})},n.cancelPostChangeHandler=function(){n.setState({postForm:q,formIsValid:!1}),n.props.onCancelEdit()},n.acceptPostChangeHandler=function(){var t={title:n.state.postForm.title.value,image:n.state.postForm.image.value,content:n.state.postForm.content.value};n.props.onFinishEdit(t),n.setState({postForm:q,formIsValid:!1,imagePreview:null})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(t,e){if(this.props.editing&&t.editing!==this.props.editing&&t.selectedPost!==this.props.selectedPost){var n={title:Object(I.a)({},e.postForm.title,{value:this.props.selectedPost.title,valid:!0}),image:Object(I.a)({},e.postForm.image,{value:this.props.selectedPost.imagePath,valid:!0}),content:Object(I.a)({},e.postForm.content,{value:this.props.selectedPost.content,valid:!0})};this.setState({postForm:n,formIsValid:!0})}}},{key:"render",value:function(){return this.props.editing?o.a.createElement(a.Fragment,null,o.a.createElement(b,{onClick:this.cancelPostChangeHandler}),o.a.createElement(H,{title:"New Post",acceptEnabled:this.state.formIsValid,onCancelModal:this.cancelPostChangeHandler,onAcceptModal:this.acceptPostChangeHandler,isLoading:this.props.loading},o.a.createElement("form",null,o.a.createElement(B,{id:"title",label:"Title",control:"input",onChange:this.postInputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"title"),valid:this.state.postForm.title.valid,touched:this.state.postForm.title.touched,value:this.state.postForm.title.value}),o.a.createElement(x,{id:"image",label:"Image",control:"input",onChange:this.postInputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"image"),valid:this.state.postForm.image.valid,touched:this.state.postForm.image.touched}),o.a.createElement("div",{className:"new-post__preview-image"},!this.state.imagePreview&&o.a.createElement("p",null,"Please choose an image."),this.state.imagePreview&&o.a.createElement(D,{imageUrl:this.state.imagePreview,contain:!0,left:!0})),o.a.createElement(B,{id:"content",label:"Content",control:"textarea",rows:"5",onChange:this.postInputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"content"),valid:this.state.postForm.content.valid,touched:this.state.postForm.content.touched,value:this.state.postForm.content.value})))):null}}]),e}(a.Component),Y=(n(97),function(t){return o.a.createElement("div",{className:"paginator"},t.children,o.a.createElement("div",{className:"paginator__controls"},t.currentPage>1&&o.a.createElement("button",{className:"paginator__control",onClick:t.onPrevious},"Previous"),t.currentPage<t.lastPage&&o.a.createElement("button",{className:"paginator__control",onClick:t.onNext},"Next")))}),R=(n(99),function(t){return o.a.createElement("div",{className:"loader"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}),G=(n(101),n(154)),K=n(149),Q=n(157),W=n(54),X=n.n(W),Z=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={isEditing:!1,posts:[],totalPosts:0,editPost:null,status:"",postPage:1,postsLoading:!1,editLoading:!1,openSnackbar:!1},n.loadPosts=function(t){console.log("iam in load"),t&&n.setState({postsLoading:!0,posts:[]});var e=n.state.postPage;"next"===t&&(e++,n.setState({postPage:e})),"previous"===t&&(e--,n.setState({postPage:e})),fetch("".concat("https://blogbackend.techcode.dev","/feed/posts?page=")+e,{headers:{Authorization:"Bearer "+n.props.token}}).then(function(t){if(200!==t.status)throw new Error("Failed to fetch posts.");return t.json()}).then(function(t){n.setState({posts:t.posts.map(function(t){return Object(I.a)({},t,{imagePath:t.imageUrl})}),totalPosts:t.totalItems,postsLoading:!1})}).catch(n.catchError)},n.statusUpdateHandler=function(t){t.preventDefault(),console.log(n.state.status);var e=new FormData;e.append("status",n.state.status),fetch("".concat("https://blogbackend.techcode.dev","/feed/updateStatus"),{method:"POST",body:e,headers:{Authorization:"Bearer "+n.props.token}}).then(function(t){if(200!==t.status&&201!==t.status)throw new Error("Can't update status!");return t.json()}).then(function(t){n.handleClick(),console.log(t)}).catch(n.catchError)},n.newPostHandler=function(){n.setState({isEditing:!0})},n.startEditPostHandler=function(t){n.setState(function(e){return{isEditing:!0,editPost:Object(I.a)({},e.posts.find(function(e){return e._id===t}))}})},n.cancelEditHandler=function(){n.setState({isEditing:!1,editPost:null})},n.finishEditHandler=function(t){var e="https://blogbackend.techcode.dev";n.setState({editLoading:!0});var a=new FormData;a.append("title",t.title),a.append("content",t.content),a.append("image",t.image),e="".concat(e,"/feed/post");var o="POST";n.state.editPost&&(e="".concat(e,"/feed/post/")+n.state.editPost._id,o="PUT"),fetch(e,{method:o,body:a,headers:{Authorization:"Bearer "+n.props.token}}).then(function(t){if(200!==t.status&&201!==t.status)throw new Error("Creating or editing a post failed!");return t.json()}).then(function(t){console.log(t);var e={_id:t.post._id,title:t.post.title,content:t.post.content,creator:t.post.creator,createdAt:t.post.createdAt};n.setState(function(t){var n=Object(C.a)(t.posts);t.editPost?n[t.posts.findIndex(function(e){return e._id===t.editPost._id})]=e:t.posts.length<2&&(n=t.posts.concat(e));return{posts:n,isEditing:!1,editPost:null,editLoading:!1,postsLoading:!1}})}).catch(function(t){console.log(t),n.setState({isEditing:!1,editPost:null,editLoading:!1,error:t})}),n.loadPosts()},n.statusInputChangeHandler=function(t,e){n.setState({status:e})},n.deletePostHandler=function(t){n.setState({postsLoading:!0});fetch("".concat("https://blogbackend.techcode.dev","/feed/post/delete/")+t,{method:"DELETE"}).then(function(t){if(200!==t.status&&201!==t.status)throw new Error("Deleting a post failed!");return t.json()}).then(function(e){console.log(e),n.setState(function(e){return{posts:e.posts.filter(function(e){return e._id!==t}),postsLoading:!1}})}).catch(function(t){console.log(t),n.setState({postsLoading:!1})})},n.errorHandler=function(){n.setState({error:null})},n.catchError=function(t){n.setState({error:t})},n.handleClick=function(){n.setState({openSnackbar:!0})},n.handleClose=function(t,e){"clickaway"!==e&&n.setState({openSnackbar:!1})},n.action=o.a.createElement(o.a.Fragment,null,o.a.createElement(G.a,{color:"secondary",size:"small",onClick:n.handleClose},"UNDO"),o.a.createElement(Q.a,{size:"small","aria-label":"close",color:"inherit",onClick:n.handleClose},o.a.createElement(X.a,{fontSize:"small"}))),n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat("https://blogbackend.techcode.dev","/feed/posts"),{headers:{Authorization:"Bearer "+this.props.token}}).then(function(t){if(200!==t.status)throw new Error("Failed to fetch user status.");return t.json()}).then(function(e){console.log(e),t.setState({status:e.status})}).catch(this.catchError),this.loadPosts()}},{key:"render",value:function(){var t=this;return o.a.createElement(a.Fragment,null,o.a.createElement(A,{error:this.state.error,onHandle:this.errorHandler}),o.a.createElement(J,{editing:this.state.isEditing,selectedPost:this.state.editPost,loading:this.state.editLoading,onCancelEdit:this.cancelEditHandler,onFinishEdit:this.finishEditHandler}),o.a.createElement("section",{className:"feed__status"},o.a.createElement("form",{onSubmit:this.statusUpdateHandler},o.a.createElement(B,{type:"text",placeholder:"Your status",control:"input",onChange:this.statusInputChangeHandler,value:this.state.status}),o.a.createElement(N,{mode:"flat",type:"submit"},"Update"))),o.a.createElement("section",{className:"feed__control"},o.a.createElement(N,{mode:"raised",design:"accent",onClick:this.newPostHandler},"New Post")),o.a.createElement("section",{className:"feed"},this.state.postsLoading&&o.a.createElement("div",{style:{textAlign:"center",marginTop:"2rem"}},o.a.createElement(R,null)),this.state.posts.length<=0&&!this.state.postsLoading?o.a.createElement("p",{style:{textAlign:"center"}},"No posts found."):null,!this.state.postsLoading&&o.a.createElement(Y,{onPrevious:this.loadPosts.bind(this,"previous"),onNext:this.loadPosts.bind(this,"next"),lastPage:Math.ceil(this.state.totalPosts/2),currentPage:this.state.postPage},this.state.posts.map(function(e){return o.a.createElement(_,{key:e._id,id:e._id,author:e.creator.name,date:new Date(e.createdAt).toLocaleDateString("en-US"),title:e.title,image:e.imageUrl,content:e.content,onStartEdit:t.startEditPostHandler.bind(t,e._id),onDelete:t.deletePostHandler.bind(t,e._id)})}))),o.a.createElement("div",null,o.a.createElement(K.a,{open:this.state.openSnackbar,autoHideDuration:6e3,onClose:this.handleClose,message:"Status Updated",action:this.action})))}}]),e}(a.Component),tt=(n(113),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={title:"",author:"",date:"",image:"",content:""},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.postId,n="https://blogbackend.techcode.dev";fetch("".concat(n,"/feed/post/")+e).then(function(t){if(200!==t.status)throw new Error("Failed to fetch status");return t.json()}).then(function(e){t.setState({title:e.post.title,author:e.post.creator.name,image:"".concat(n,"/")+e.post.imageUrl,date:new Date(e.post.createdAt).toLocaleDateString("en-US"),content:e.post.content})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return o.a.createElement("section",{className:"single-post"},o.a.createElement("h1",null,this.state.title),o.a.createElement("h2",null,"Created by ",this.state.author," on ",this.state.date),o.a.createElement("div",{className:"single-post__image"},o.a.createElement(D,{contain:!0,imageUrl:this.state.image})),o.a.createElement("p",null,this.state.content))}}]),e}(a.Component)),et=(n(115),function(t){return o.a.createElement("section",{className:"auth-form"},t.children)});function nt(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return at(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return at(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw r}}}}function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var ot=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={loginForm:{email:{value:"",valid:!1,touched:!1,validators:[M,T]},password:{value:"",valid:!1,touched:!1,validators:[M,U({min:5})]},formIsValid:!1}},n.inputChangeHandler=function(t,e){n.setState(function(n){var a,o=!0,r=nt(n.loginForm[t].validators);try{for(r.s();!(a=r.n()).done;){var i=a.value;o=o&&i(e)}}catch(u){r.e(u)}finally{r.f()}var l=Object(I.a)({},n.loginForm,Object(L.a)({},t,Object(I.a)({},n.loginForm[t],{valid:o,value:e}))),s=!0;for(var c in l)s=s&&l[c].valid;return{loginForm:l,formIsValid:s}})},n.inputBlurHandler=function(t){n.setState(function(e){return{loginForm:Object(I.a)({},e.loginForm,Object(L.a)({},t,Object(I.a)({},e.loginForm[t],{touched:!0})))}})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(et,null,o.a.createElement("form",{onSubmit:function(e){return t.props.onLogin(e,{email:t.state.loginForm.email.value,password:t.state.loginForm.password.value})}},o.a.createElement(B,{id:"email",label:"Your E-Mail",type:"email",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"email"),value:this.state.loginForm.email.value,valid:this.state.loginForm.email.valid,touched:this.state.loginForm.email.touched}),o.a.createElement(B,{id:"password",label:"Password",type:"password",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"password"),value:this.state.loginForm.password.value,valid:this.state.loginForm.password.valid,touched:this.state.loginForm.password.touched}),o.a.createElement(N,{design:"raised",type:"submit",loading:this.props.loading},"Login")))}}]),e}(a.Component);function rt(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return it(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return it(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw r}}}}function it(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var lt=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={signupForm:{email:{value:"",valid:!1,touched:!1,validators:[M,T]},password:{value:"",valid:!1,touched:!1,validators:[M,U({min:5})]},name:{value:"",valid:!1,touched:!1,validators:[M]},formIsValid:!1}},n.inputChangeHandler=function(t,e){n.setState(function(n){var a,o=!0,r=rt(n.signupForm[t].validators);try{for(r.s();!(a=r.n()).done;){var i=a.value;o=o&&i(e)}}catch(u){r.e(u)}finally{r.f()}var l=Object(I.a)({},n.signupForm,Object(L.a)({},t,Object(I.a)({},n.signupForm[t],{valid:o,value:e}))),s=!0;for(var c in l)s=s&&l[c].valid;return{signupForm:l,formIsValid:s}})},n.inputBlurHandler=function(t){n.setState(function(e){return{signupForm:Object(I.a)({},e.signupForm,Object(L.a)({},t,Object(I.a)({},e.signupForm[t],{touched:!0})))}})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(et,null,o.a.createElement("form",{onSubmit:function(e){return t.props.onSignup(e,t.state)}},o.a.createElement(B,{id:"email",label:"Your E-Mail",type:"email",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"email"),value:this.state.signupForm.email.value,valid:this.state.signupForm.email.valid,touched:this.state.signupForm.email.touched}),o.a.createElement(B,{id:"name",label:"Your Name",type:"text",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"name"),value:this.state.signupForm.name.value,valid:this.state.signupForm.name.valid,touched:this.state.signupForm.name.touched}),o.a.createElement(B,{id:"password",label:"Password",type:"password",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"password"),value:this.state.signupForm.password.value,valid:this.state.signupForm.password.valid,touched:this.state.signupForm.password.touched}),o.a.createElement(N,{design:"raised",type:"submit",loading:this.props.loading},"Signup")))}}]),e}(a.Component),st=(n(117),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={showBackdrop:!1,showMobileNav:!1,isAuth:!1,token:null,userId:null,authLoading:!1,error:null},n.errorHandler=function(){console.log("error Handler"),n.setState({error:null})},n.setAutoLogout=function(t){setTimeout(function(){n.logoutHandler()},t)},n.mobileNavHandler=function(t){n.setState({showMobileNav:t,showBackdrop:t})},n.backdropClickHandler=function(){n.setState({showBackdrop:!1,showMobileNav:!1,error:null})},n.logoutHandler=function(){n.setState({isAuth:!1,token:null}),localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId")},n.loginHandler=function(t,e){t.preventDefault(),n.setState({authLoading:!0}),fetch("".concat("https://blogbackend.techcode.dev","/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then(function(t){if(422===t.status)throw new Error("Validation failed.");if(200!==t.status&&201!==t.status)throw console.log("Error!"),new Error("Could not authenticate you!");return t.json()}).then(function(t){console.log(t),n.setState({isAuth:!0,token:t.token,authLoading:!1,userId:t.userId}),localStorage.setItem("token",t.token),localStorage.setItem("userId",t.userId);var e=new Date((new Date).getTime()+36e5);localStorage.setItem("expiryDate",e.toISOString()),n.setAutoLogout(36e5)}).catch(function(t){console.log(t),n.setState({isAuth:!1,authLoading:!1,error:t})})},n.signupHandler=function(t,e){t.preventDefault();n.setState({authLoading:!0}),fetch("".concat("https://blogbackend.techcode.dev","/auth/signup"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.signupForm.email.value,password:e.signupForm.password.value,name:e.signupForm.name.value})}).then(function(t){if(422===t.status)throw new Error("Validation failed. Either password is too short (at least 5 char!) either email address is already used!");if(200!==t.status&&201!==t.status)throw console.log("Error!"),new Error("Creating a user failed!");return t.json()}).then(function(t){console.log(t),n.setState({isAuth:!1,authLoading:!1}),n.props.history.replace("/")}).catch(function(t){console.log(t),n.setState({isAuth:!1,authLoading:!1,error:t})})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("token"),e=localStorage.getItem("expiryDate");if(t&&e)if(new Date(e)<=new Date)this.logoutHandler();else{var n=localStorage.getItem("userId"),a=new Date(e).getTime()-(new Date).getTime();this.setState({isAuth:!0,token:t,userId:n}),this.setAutoLogout(a)}}},{key:"render",value:function(){var t=this,e=o.a.createElement(h.a,null,o.a.createElement(p.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(ot,Object.assign({},e,{onLogin:t.loginHandler,loading:t.state.authLoading}))}}),o.a.createElement(p.a,{path:"/signup",exact:!0,render:function(e){return o.a.createElement(lt,Object.assign({},e,{onSignup:t.signupHandler,loading:t.state.authLoading}))}}),o.a.createElement(g.a,{to:"/"}));return this.state.isAuth&&(e=o.a.createElement(h.a,null,o.a.createElement(p.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(Z,{userId:t.state.userId,token:t.state.token})}}),o.a.createElement(p.a,{path:"/:postId",render:function(e){return o.a.createElement(tt,Object.assign({},e,{userId:t.state.userId,token:t.state.token}))}}),o.a.createElement(g.a,{to:"/"}))),o.a.createElement(a.Fragment,null,this.state.showBackdrop&&o.a.createElement(b,{onClick:this.backdropClickHandler}),o.a.createElement(A,{error:this.state.error,onHandle:this.errorHandler}),o.a.createElement(v,{header:o.a.createElement(E,null,o.a.createElement(F,{onOpenMobileNav:this.mobileNavHandler.bind(this,!0),onLogout:this.logoutHandler,isAuth:this.state.isAuth})),mobileNav:o.a.createElement(O,{open:this.state.showMobileNav,mobile:!0,onChooseItem:this.mobileNavHandler.bind(this,!1),onLogout:this.logoutHandler,isAuth:this.state.isAuth})}),e)}}]),e}(a.Component)),ct=Object(f.a)(st);i.a.render(o.a.createElement(l.a,null,o.a.createElement(ct,null)),document.getElementById("root"))},52:function(t,e,n){},60:function(t,e,n){t.exports=n(119)},65:function(t,e,n){},67:function(t,e,n){},69:function(t,e,n){},71:function(t,e,n){},73:function(t,e,n){},75:function(t,e,n){},77:function(t,e,n){},84:function(t,e,n){},86:function(t,e,n){},88:function(t,e,n){},90:function(t,e,n){},92:function(t,e,n){},95:function(t,e,n){},97:function(t,e,n){},99:function(t,e,n){}},[[60,2,1]]]);
//# sourceMappingURL=main.06c835be.chunk.js.map