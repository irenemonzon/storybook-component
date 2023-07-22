import{j as L}from"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const n=({label:l="No Label",size:_="normal",allCaps:S=!1,color:q="primary",fontcolor:x})=>L("span",{className:`label ${_} text-${q}`,style:{color:x},children:S?l.toUpperCase():l});try{n.displayName="MyLabel",n.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Text contents",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"How size should text",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Si quiere todo capitalizado",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Colores basico",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontcolor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontcolor",required:!1,type:{name:"string"}}}}}catch{}const T={title:"UI/MyLabel",component:n,tags:["autodocs"],argTypes:{color:{control:"select",options:["tertiary","secondary","primary"]},size:{control:"select"},fontcolor:{control:"color"}}},e={args:{label:"hola mundo",size:"normal",allCaps:!1}},a={args:{size:"normal",allCaps:!0}},r={args:{size:"normal",color:"secondary"}},o={args:{size:"normal",color:"tertiary"}},s={args:{size:"h1",fontcolor:"#5517ac"}};var t,c,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'hola mundo',
    size: 'normal',
    allCaps: false
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    allCaps: true
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,y,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'secondary'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,z,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    color: 'tertiary'
  }
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var b,v,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    fontcolor: '#5517ac'
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const j=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{a as AllCaps,e as Basic,s as CustomFontColor,r as Secondary,o as Tertiary,j as __namedExportsOrder,T as default};
//# sourceMappingURL=MyLabel.stories-8e32b79d.js.map
