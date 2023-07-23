"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[908],{7908:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,a,o,i,c,l,s,d,h,p,u,x,f=t(3623),m=t(168),v=t(6444),b=v.ZP.section(r||(r=(0,m.Z)(["\n  padding: 30px 0 50px;\n  h1 {\n    font-size: 30px;\n  }\n"]))),g=t(7834),j=t(9434),w=function(n){return n.contacts},y=function(n){var e=n.contacts.items,t=n.filter.val;return e.filter((function(n){return n.name.toLowerCase().includes(t)}))},Z=t(3634),k=t(5264),C=v.ZP.form(a||(a=(0,m.Z)(["\n  display: flex;\n  margin: 20px 0;\n  flex-direction: column;\n  gap: 20px;\n\n  label {\n    width: 100%;\n    font-size: 16px;\n    color: var(--accent);\n    margin-right: 20px;\n  }\n\n  input {\n    width: 100%;\n    height: 32px;\n    padding: 0 10px;\n    border: 2px solid var(--accent);\n    border-radius: 4px;\n    outline: none;\n    color: var(--title);\n    transition: border-color 250ms linear;\n    :hover,\n    :focus {\n      border-color: var(--title);\n    }\n  }\n\n  button {\n    margin-left: auto;\n    width: 150px;\n  }\n"]))),_=t(7650),z=t(3329),A=function(){var n=(0,j.I0)(),e=(0,j.v9)(y);return(0,z.jsxs)(C,{onSubmit:function(t){t.preventDefault();var r=t.target.elements,a=r.name,o=r.phone;e.length>0&&e.find((function(n){return n.name.toLowerCase()===a.value.toLowerCase()}))?k.Notify.info("".concat(a.value," is already in contacts.")):(n((0,Z.uK)({name:a.value,phone:o.value})),t.target.reset())},children:[(0,z.jsxs)("label",{htmlFor:"name",children:["Name",(0,z.jsx)("input",{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)("label",{htmlFor:"phone",children:["Number",(0,z.jsx)("input",{type:"tel",name:"phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsx)(_.O,{type:"submit",children:"Add contact"})]})},P=t(3853),F=t(1913),L=v.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n\n  ","\n\n  div {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    ","\n\n    h3 {\n      color: var(--accent);\n    }\n\n    a {\n      font-size: 18px;\n      font-weight: 500;\n      color: var(--title);\n      transition: color 250ms linear;\n      :hover,\n      :focus {\n        color: var(--accent);\n      }\n    }\n  }\n\n  button {\n    background-color: transparent;\n    border: none;\n  }\n"])),(0,F.w)("tablet")(i||(i=(0,m.Z)(["animation: scale 400ms linear;"]))),(0,F.w)("desktop")(c||(c=(0,m.Z)(["\n    max-width: 550px;\n    flex-direction: row;\n    flex-grow: 1;\njustify-content: space-between;"])))),N=(0,v.ZP)(P.Ybf)(l||(l=(0,m.Z)(["\n  width: 24px;\n  height: 24px;\n  color: var(--title);\n"]))),I=function(n){var e=n.contact,t=(0,j.I0)(),r=e.name,a=e.phone;return(0,z.jsxs)(L,{children:[(0,z.jsxs)("div",{children:[(0,z.jsx)("h3",{children:r}),(0,z.jsx)("a",{href:"tel:".concat(a),children:a})]}),(0,z.jsx)("button",{onClick:function(){return t((0,Z.GK)(e._id))},children:(0,z.jsx)(N,{})})]})},q=t(966),B=t(2791),D=v.ZP.ul(s||(s=(0,m.Z)(["\n  display: flex;\n  padding: 20px 0 40px;\n  flex-direction: column;\n  gap: 20px;\n"]))),J=function(){var n=(0,j.I0)(),e=(0,j.v9)(w),t=e.isLoading,r=e.error,a=(0,j.v9)(y);return(0,B.useEffect)((function(){n((0,Z.yF)())}),[n]),r&&k.Notify.failure("".concat(r)),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(D,{children:a.map((function(n){return(0,z.jsx)("li",{children:(0,z.jsx)(I,{contact:n})},n._id)}))}),t&&(0,z.jsx)(q.a,{})]})},K=t(4808),M=v.ZP.section(d||(d=(0,m.Z)(["\n  margin: 20px 0 10px;\n\n  label {\n    width: 100%;\n    font-size: 16px;\n    color: var(--accent);\n  }\n\n  input {\n    width: 100%;\n    height: 32px;\n    border: 2px solid var(--accent);\n    border-radius: 4px;\n    outline: none;\n    color: var(--title);\n    transition: border-color 250ms linear;\n    ","\n\n    :hover, :focus {\n      border-color: var(--title);\n    }\n  }\n"])),(0,F.w)("tablet")(h||(h=(0,m.Z)(["\n    display: block;\n    width: 250px;"])))),Y=function(){var n=(0,j.I0)();return(0,z.jsx)(M,{children:(0,z.jsxs)("label",{htmlFor:"filter",children:["Find contacts by name",(0,z.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$}",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(e){e.preventDefault();var t=e.target.value.toLowerCase();n((0,K.T)(t))}})]})})},E=v.ZP.div(p||(p=(0,m.Z)(["\n  ","\n  ","\n"])),(0,F.w)("tablet")(u||(u=(0,m.Z)(["display: flex;\n  justify-content: space-between;\n  div:nth-child(2) {flex-grow: 1;\nmax-width: 50%;}\n  "]))),(0,F.w)("desktop")(x||(x=(0,m.Z)(["div:nth-child(2) {max-width: 65%;}"])))),G=function(){return(0,z.jsxs)(E,{children:[(0,z.jsxs)("div",{children:[(0,z.jsx)("h2",{children:"Add contact"}),(0,z.jsx)(A,{})]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("h2",{children:"Your contacts"}),(0,z.jsx)(Y,{}),(0,z.jsx)(J,{})]})]})};function O(){var n=(0,g.a)().isLoggedIn;return(0,z.jsx)(b,{children:(0,z.jsx)(f.W,{children:n?(0,z.jsx)(G,{}):(0,z.jsx)("h1",{children:"Please, regist or log in to start working with your contacts!"})})})}}}]);
//# sourceMappingURL=908.f30e9b6a.chunk.js.map