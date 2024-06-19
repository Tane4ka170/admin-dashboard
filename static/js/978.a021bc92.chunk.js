"use strict";(self.webpackChunkadmin_dashboard=self.webpackChunkadmin_dashboard||[]).push([[978],{4978:function(A,e,r){r.r(e),r.d(e,{default:function(){return D}});var l=r(1413),s=r(9439),n=r(8713),i=r(1994),o=r(1816),t=r(2791),a=r(1134),d=r(4420),c=r(3754),u=r(6645),p=r(5898),h=r(5561),x=r(1040),j=r(518),f=r(1352),v=r(1505),m=r(6699),C=r(8292),y=r(4695),b=r(4885),k=r(8007),S=r(2165),g=r(6673),Z=r(3329),K=k.Ry({name:k.Z_().trim(),category:k.Z_(),suppliers:k.Z_().trim(),stock:k.Rx(),price:k.Rx()}),V=[{value:"Medicine",label:"Medicine"},{value:"Head",label:"Head"},{value:"Hand",label:"Hand"},{value:"Dental Care",label:"Dental Care"},{value:"Skin Care",label:"Skin Care"},{value:"Eye Care",label:"Eye Care"},{value:"Vitamins & Supplements",label:"Vitamins & Supplements"},{value:"Orthopedic Products",label:"Orthopedic Products"},{value:"Baby Care",label:"Baby Care"}],q=function(A){var e,r,s,n,i,o=A.onRequestClose,t=A.product,u=(0,d.I0)(),h=(0,a.cI)({resolver:(0,y.X)(K)}),x=h.reset,j=h.register,f=h.handleSubmit,v=h.control,m=h.formState.errors;return(0,Z.jsxs)(S.hz,{children:[(0,Z.jsx)("h2",{children:"Edit data"}),(0,Z.jsxs)(S.l0,{onSubmit:f((function(A){u((0,c.yt)({id:t._id,productData:A})),x(),o()})),children:[(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(g.Fy,(0,l.Z)((0,l.Z)({},j("name",{autoComplete:"off"})),{},{placeholder:"Product Info",style:{borderColor:m.name&&"#E85050"},defaultValue:t.name})),(0,Z.jsx)("p",{children:null===(e=m.name)||void 0===e?void 0:e.message})]}),(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(a.Qr,{control:v,name:"category",rules:{required:"Category is a required field"},render:function(A){var e=A.fieldState,r=A.field,l=r.onChange,s=r.name,n=r.ref,i=r.value;return(0,Z.jsx)(b.ZP,{classNamePrefix:"custom-select",status:e.error?"error":void 0,name:s,ref:n,options:V,placeholder:t.category,value:V.find((function(A){return A.value===i})),onChange:function(A){return l(null===A||void 0===A?void 0:A.value)}})}}),(0,Z.jsx)("p",{children:null===(r=m.category)||void 0===r?void 0:r.message})]}),(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(g.Fy,(0,l.Z)((0,l.Z)({},j("suppliers",{autoComplete:"off"})),{},{placeholder:"Suppliers",style:{borderColor:m.suppliers&&"#E85050"},defaultValue:t.suppliers})),(0,Z.jsx)("p",{children:null===(s=m.suppliers)||void 0===s?void 0:s.message})]}),(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(g.Fy,(0,l.Z)((0,l.Z)({},j("stock",{autoComplete:"off"})),{},{placeholder:"Stock",style:{borderColor:m.stock&&"#E85050"},defaultValue:t.stock})),(0,Z.jsx)("p",{children:null===(n=m.stock)||void 0===n?void 0:n.message})]}),(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(g.Fy,(0,l.Z)((0,l.Z)({},j("price",{autoComplete:"off"})),{},{placeholder:"Price",style:{borderColor:m.price&&"#E85050"},defaultValue:t.price})),(0,Z.jsx)("p",{children:null===(i=m.price)||void 0===i?void 0:i.message})]}),(0,Z.jsxs)(S.qO,{children:[(0,Z.jsx)(p.Z,{prop:"Save",$variant:"save"}),(0,Z.jsx)(p.Z,{prop:"Cancel",$variant:"cancel",onClick:function(){x(),o()}})]})]})]})},E=function(){var A,e=(0,t.useState)(!1),r=(0,s.Z)(e,2),l=r[0],n=r[1],i=(0,t.useState)(null),o=(0,s.Z)(i,2),a=o[0],u=o[1],p=(0,t.useState)(1),y=(0,s.Z)(p,2),b=y[0],k=y[1],S=(0,d.I0)(),g=(0,d.v9)(f.nR),K=Math.ceil(g.total/5),V=function(){n(!1),document.body.style.overflow=""};return(0,t.useEffect)((function(){S((0,c.t2)({page:b}))}),[S,b]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.xJ,{children:(0,Z.jsxs)(j.aJ,{children:[(0,Z.jsx)("thead",{children:(0,Z.jsx)("tr",{children:(0,Z.jsx)(x.qN,{colSpan:"6",children:"All Products"})})}),(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)(x.NO,{children:"Product Info"}),(0,Z.jsx)(x.NO,{children:"Category"}),(0,Z.jsx)(x.NO,{children:"Stock"}),(0,Z.jsx)(x.NO,{children:"Suppliers"}),(0,Z.jsx)(x.NO,{children:"Price"}),(0,Z.jsx)(x.NO,{children:"Actions"})]}),null===(A=g.result)||void 0===A?void 0:A.map((function(A){return(0,Z.jsxs)("tr",{children:[(0,Z.jsxs)(x.OC,{children:[(0,Z.jsx)("img",{src:A.image||m,alt:"product"}),(0,Z.jsx)("span",{children:A.name})]}),(0,Z.jsx)("td",{children:A.category}),(0,Z.jsx)("td",{children:A.stock}),(0,Z.jsx)("td",{children:A.suppliers}),(0,Z.jsx)("td",{children:A.price}),(0,Z.jsx)("td",{children:(0,Z.jsxs)(v.p3,{children:[(0,Z.jsxs)(v.pf,{children:[(0,Z.jsx)(v.w6,{onClick:function(){return function(A){n(!0),u(A),document.body.style.overflow="hidden"}(A)},children:(0,Z.jsx)("svg",{children:(0,Z.jsx)("use",{href:"".concat(h.Z,"#icon-edit")})})}),(0,Z.jsx)(v.k5,{children:"Click to edit"})]}),(0,Z.jsxs)(v.pf,{children:[(0,Z.jsx)(v.m1,{onClick:function(){return S((0,c.kh)(A._id))},children:(0,Z.jsx)("svg",{children:(0,Z.jsx)("use",{href:"".concat(h.Z,"#icon-trash")})})}),(0,Z.jsx)(v.k5,{children:"You`re about to delete an item!"})]})]})})]},A._id)}))]})]})}),(0,Z.jsxs)(j.Nl,{children:[(0,Z.jsx)("button",{type:"button",onClick:function(){b>1&&k(b-1)},disabled:1===b,children:"\ud83d\udd3c"}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("span",{children:b})," / ",K]}),(0,Z.jsx)("button",{type:"button",onClick:function(){b<K&&k(b+1)},disabled:b===K,children:"\ud83d\udd3d"})]}),l&&(0,Z.jsx)(C.A,{isOpen:l,onRequestClose:V,children:(0,Z.jsx)(q,{onRequestClose:V,product:a})})]})},O=k.Ry({name:k.Z_().trim().required("Name is required field"),category:k.Z_().oneOf(["Medicine","Head","Hand","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],"Invalid Job Type").required("Category is required field"),suppliers:k.Z_().trim().required("Suppliers is required field"),stock:k.Rx().required("Stock is required field"),price:k.Rx().required("Price is required field")}),R=[{value:"Medicine",label:"Medicine"},{value:"Head",label:"Head"},{value:"Hand",label:"Hand"},{value:"Dental Care",label:"Dental Care"},{value:"Skin Care",label:"Skin Care"},{value:"Eye Care",label:"Eye Care"},{value:"Vitamins & Supplements",label:"Vitamins & Supplements"},{value:"Orthopedic Products",label:"Orthopedic Products"},{value:"Baby Care",label:"Baby Care"}],F=function(A){var e,r,s,n,i,o=A.onRequestClose,t=(0,d.I0)(),u=(0,a.cI)({resolver:(0,y.X)(O)}),h=u.reset,x=u.register,j=u.handleSubmit,f=u.control,v=u.formState.errors;return(0,Z.jsxs)(S.hz,{children:[(0,Z.jsx)("h2",{children:"Add a new product"}),(0,Z.jsxs)(S.l0,{onSubmit:j((function(A){t((0,c.ry)(A)),h(),o()})),children:[(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(g.Fy,(0,l.Z)((0,l.Z)({},x("name",{autoComplete:"off"})),{},{placeholder:"Product Info",style:{borderColor:v.name&&"#E85050"}})),(0,Z.jsx)("p",{children:null===(e=v.name)||void 0===e?void 0:e.message})]}),(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(a.Qr,{control:f,name:"category",rules:{required:"Status is required field"},render:function(A){var e=A.fieldState,r=A.field,l=r.onChange,s=r.name,n=r.ref,i=r.value;return(0,Z.jsx)(b.ZP,{classNamePrefix:"custom-select",status:e.error?"error":void 0,name:s,ref:n,options:R,placeholder:"Category",value:R.find((function(A){return A.value===i})),onChange:function(A){return l(null===A||void 0===A?void 0:A.value)}})}}),(0,Z.jsx)("p",{children:null===(r=v.category)||void 0===r?void 0:r.message})]}),(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(g.Fy,(0,l.Z)((0,l.Z)({},x("suppliers",{autoComplete:"off"})),{},{placeholder:"Suppliers",style:{borderColor:v.suppliers&&"#E85050"}})),(0,Z.jsx)("p",{children:null===(s=v.suppliers)||void 0===s?void 0:s.message})]}),(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(g.Fy,(0,l.Z)((0,l.Z)({},x("stock",{autoComplete:"off"})),{},{placeholder:"Stock",style:{borderColor:v.stock&&"#E85050"}})),(0,Z.jsx)("p",{children:null===(n=v.stock)||void 0===n?void 0:n.message})]}),(0,Z.jsxs)(g._X,{children:[(0,Z.jsx)(g.Fy,(0,l.Z)((0,l.Z)({},x("price",{autoComplete:"off"})),{},{placeholder:"Price",style:{borderColor:v.price&&"#E85050"}})),(0,Z.jsx)("p",{children:null===(i=v.price)||void 0===i?void 0:i.message})]}),(0,Z.jsxs)(S.qO,{children:[(0,Z.jsx)(p.Z,{prop:"Add",$variant:"add"}),(0,Z.jsx)(p.Z,{prop:"Cancel",$variant:"cancel",onClick:function(){h(),o()}})]})]})]})},P=function(){var A=(0,t.useState)(!1),e=(0,s.Z)(A,2),r=e[0],x=e[1],j=(0,t.useState)(!1),f=(0,s.Z)(j,2),v=f[0],m=f[1],y=(0,d.I0)(),b=window.innerWidth,k=(0,a.cI)({mode:"onBlur"}),S=k.reset,g=k.register,K=k.handleSubmit,V=function(){x(!1),document.body.style.overflow=""};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(i.Z,{children:[b>1439&&(0,Z.jsx)(o.Z,{}),(0,Z.jsxs)(u.Yb,{children:[(0,Z.jsxs)(n.n,{onSubmit:K((function(A){m(!v),y((0,c.t2)(A)),S()})),children:[(0,Z.jsx)(n.U,(0,l.Z)((0,l.Z)({},g("name",{autoComplete:"off"})),{},{placeholder:"Product Name",onFocus:function(){m(!1)}})),(0,Z.jsx)(p.Z,{icon:!v,prop:v?"Reset":"Filter",$variant:v?"add-sup":"filter"})]}),(0,Z.jsxs)(u.gP,{children:[(0,Z.jsx)(u.i6,{onClick:function(){x(!0),document.body.style.overflow="hidden"},children:(0,Z.jsx)("svg",{children:(0,Z.jsx)("use",{href:"".concat(h.Z,"#icon-plus")})})}),(0,Z.jsx)("span",{children:"Add a new product"})]})]}),(0,Z.jsx)(E,{})]}),(0,Z.jsx)(C.A,{isOpen:r,onRequestClose:V,children:(0,Z.jsx)(F,{onRequestClose:V})})]})};function D(){return(0,Z.jsx)(P,{})}},6699:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=978.a021bc92.chunk.js.map