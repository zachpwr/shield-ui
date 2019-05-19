(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(46);function getFocusedBorderColor(props){return props.error?props.theme.colors.error:props.theme.colors.main}const TextInput=__webpack_require__(15).default.input`
  background-color: ${props=>props.theme.colors.white};
  border: 1px solid ${function getBorderColor(props){return props.error?props.theme.colors.error:props.theme.colors.secondary}};
  border-radius: ${props=>props.theme.borderRadius};
  transition: 0.25s border-color ease-in-out;
  cursor: text;
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  padding: 0.75em 1em;
  outline: 0;

  &::placeholder {
    color: ${props=>props.theme.colors.secondary};
  }

  &:hover {
    border-color: ${props=>polished_1.mix(.5,props.theme.colors.white,getFocusedBorderColor(props))};
  }

  &:focus {
    border-color: ${getFocusedBorderColor};
    box-shadow: 0 0 0 2px ${props=>polished_1.transparentize(.75,getFocusedBorderColor(props))};
  }

  &:disabled {
    border-color: ${props=>props.theme.colors.secondary};
    background-color: ${props=>polished_1.mix(.5,props.theme.colors.white,props.theme.colors.secondary)};
    cursor: default;
  }
`;TextInput.displayName="TextInput",exports.default=TextInput},185:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(46),styled_components_1=__webpack_require__(15),DEFAULT_COLOR="main";function getPillColor(props){return props.theme.colors[props.color||DEFAULT_COLOR]}const Pill=styled_components_1.default.span`
  background-color: ${getPillColor};
  color: ${function getPillTextColor(props){const bgColor=getPillColor(props);return polished_1.getLuminance(bgColor)>.5?props.theme.colors.darkGray:props.theme.colors.white}};
  margin-right: 5px;
  font-size: 1em;
  padding: 0.25em 0.75em;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
  vertical-align: middle;
  cursor: default;

  &:last-of-type {
    margin-right: 0;
  }
`;Pill.displayName="Pill",exports.default=Pill},186:function(module,exports,__webpack_require__){"use strict";function getSwitchColor(props){return props.on?props.theme.colors.main:props.theme.colors.secondary}Object.defineProperty(exports,"__esModule",{value:!0});const Switch=__webpack_require__(15).default.button`
  height: 1em;
  width: 2.5em;
  background-color: ${getSwitchColor};
  border: 0;
  outline: 0;
  height: 1em;
  border-radius: 100px;
  padding: 0.75em 1em;
  font-size: 1em;
  line-height: 1em;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out;
  display: inline-block;
  vertical-align: middle;

  &::before {
    width: 1em;
    height: 1em;
    padding: 0.5em;
    border-radius: 100px;
    background-color: ${props=>props.theme.colors.white};
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    right: ${props=>props.on?"0.25em":"calc(100% - 2.25em)"};
    transition: 0.25s right ease-in-out;
    transform: translateY(-50%);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background-color: ${getSwitchColor};
  }
`;Switch.displayName="Switch",exports.default=Switch},188:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),styled_components_1=__webpack_require__(15),theme_1=__webpack_require__(350),ThemeProvider=props=>React.createElement(styled_components_1.ThemeProvider,{theme:props.theme||theme_1.default},props.children);ThemeProvider.displayName="ThemeProvider",exports.default=ThemeProvider;try{themeProvider.displayName="themeProvider",themeProvider.__docgenInfo={description:"",displayName:"themeProvider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/themeProvider/index.tsx#themeProvider"]={docgenInfo:themeProvider.__docgenInfo,name:"themeProvider",path:"src/themeProvider/index.tsx#themeProvider"})}catch(__react_docgen_typescript_loader_error){}},191:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const GlobalStyle=__webpack_require__(15).createGlobalStyle`
  ${function getFontImport(props){return props.theme.fontImportUrl?`@import url('${props.theme.fontImportUrl}');`:""}}

  * {
    font-family: ${props=>props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 14px;
  }
`;GlobalStyle.displayName="GlobalStyle",exports.default=GlobalStyle;try{GlobalStyleComponent.displayName="GlobalStyleComponent",GlobalStyleComponent.__docgenInfo={description:"",displayName:"GlobalStyleComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/globalStyle/index.tsx#GlobalStyleComponent"]={docgenInfo:GlobalStyleComponent.__docgenInfo,name:"GlobalStyleComponent",path:"src/globalStyle/index.tsx#GlobalStyleComponent"})}catch(__react_docgen_typescript_loader_error){}},193:function(module,exports,__webpack_require__){__webpack_require__(194),__webpack_require__(280),module.exports=__webpack_require__(281)},281:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(19),__webpack_require__(20),__webpack_require__(17),__webpack_require__(26);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),_src_themeProvider__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(188),_src_themeProvider__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_src_themeProvider__WEBPACK_IMPORTED_MODULE_6__),_src_globalStyle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(191),_src_globalStyle__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_src_globalStyle__WEBPACK_IMPORTED_MODULE_7__),req=__webpack_require__(351),_ref=react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_globalStyle__WEBPACK_IMPORTED_MODULE_7___default.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(req),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(function(story){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_themeProvider__WEBPACK_IMPORTED_MODULE_6___default.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,_ref,story()))})},module)}.call(this,__webpack_require__(282)(module))},350:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default={borderRadius:"5px",fontFamily:"'Roboto', sans-serif",fontImportUrl:"https://fonts.googleapis.com/css?family=Roboto:400,600,700",colors:{darkGray:"#424242",error:"#ef5350",main:"#304ffe",secondary:"#eeeeee",success:"#4caf50",warning:"#ffb300",white:"#fff"}};try{DefaultTheme.displayName="DefaultTheme",DefaultTheme.__docgenInfo={description:"This interface can be augmented by users to add types to `styled-components`' default theme\nwithout needing to reexport `ThemedStyledComponentsModule`.",displayName:"DefaultTheme",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme.ts#DefaultTheme"]={docgenInfo:DefaultTheme.__docgenInfo,name:"DefaultTheme",path:"src/theme.ts#DefaultTheme"})}catch(__react_docgen_typescript_loader_error){}},351:function(module,exports,__webpack_require__){var map={"./button.stories.tsx":352,"./buttonGroup.stories.tsx":422,"./checkbox.stories.tsx":424,"./formSection.stories.tsx":426,"./panel.stories.tsx":428,"./pill.stories.tsx":430,"./progressBar.stories.tsx":431,"./select.stories.tsx":440,"./switch.stories.tsx":442,"./textInput.stories.tsx":443};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=351},352:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),addon_actions_1=__webpack_require__(36),button_1=__webpack_require__(59);react_1.storiesOf("Button",module).add("Text",()=>React.createElement("div",null,React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked")},"Hello"),React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary"},"Hello"))).add("Emojis",()=>React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked")},React.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))).add("Disabled",()=>React.createElement("div",null,React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),disabled:!0},"Disabled"),React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary",disabled:!0},"Disabled")))}).call(this,__webpack_require__(5)(module))},422:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),addon_actions_1=__webpack_require__(36),button_1=__webpack_require__(59),buttonGroup_1=__webpack_require__(423);react_1.storiesOf("ButtonGroup",module).add("Default",()=>React.createElement(buttonGroup_1.default,null,React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary"},"Hello"),React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary"},"Hello"),React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary"},"Hello")))}).call(this,__webpack_require__(5)(module))},423:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const styled_components_1=__webpack_require__(15),button_1=__webpack_require__(59),ButtonGroup=styled_components_1.default.span`
  ${button_1.default} {
    border-radius: 0;
    margin-right: 0;
    z-index: 0;
    position: relative;

    &:first-of-type {
      border-top-left-radius: ${props=>props.theme.borderRadius};
      border-bottom-left-radius: ${props=>props.theme.borderRadius};
    }

    &:last-of-type {
      border-top-right-radius: ${props=>props.theme.borderRadius};
      border-bottom-right-radius: ${props=>props.theme.borderRadius};
    }

    &:focus {
      z-index: 1;
    }
  }
`;ButtonGroup.displayName="ButtonGroup",exports.default=ButtonGroup},424:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),addon_actions_1=__webpack_require__(36),checkbox_1=__webpack_require__(425),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[checked,setChecked]=React.useState(initialValue||!1);return render(checked,()=>{setChecked(!checked),addon_actions_1.action("click")(checked?"unchecked":"checked")})};react_1.storiesOf("Checkbox",module).add("Default",()=>React.createElement(DemoStateWrapper,{render:(checked,onClick)=>React.createElement(checkbox_1.default,{checked:checked,onClick:onClick})})).add("Disabled",()=>React.createElement("div",null,React.createElement(checkbox_1.default,{disabled:!0,onClick:addon_actions_1.action("clicked")}),React.createElement("br",null),React.createElement(checkbox_1.default,{disabled:!0,checked:!0,onClick:addon_actions_1.action("clicked")})))}).call(this,__webpack_require__(5)(module))},425:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(46);function getBorderColor(props){return props.checked?props.theme.colors.main:props.theme.colors.secondary}const Checkbox=__webpack_require__(15).default.button`
  border-radius: ${props=>props.theme.borderRadius};
  background-color: ${props=>props.theme.colors.white};
  border: 1px solid ${getBorderColor};
  height: 2em;
  width: 2em;
  padding: 0;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  transition: 0.25s border-color ease-in-out;
  position: relative;
  vertical-align: middle;
  font-size: 1em;

  &:hover {
    border-color: ${function getHoverBorderColor(props){return polished_1.mix(props.checked?.9:.1,props.theme.colors.main,props.theme.colors.secondary)}};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props=>polished_1.transparentize(.75,getBorderColor(props))};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    border-color: ${getBorderColor};
  }

  &::before {
    content: '';
    width: 33%;
    height: 66%;
    border-width: 0 1px 1px 0;
    border-color: ${props=>props.theme.colors.main};
    border-style: solid;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    margin-top: -0.125em;
    opacity: ${props=>props.checked?1:0};
    transition: 0.25s opacity ease-in-out;
  }
`;Checkbox.displayName="Checkbox",exports.default=Checkbox},426:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),addon_actions_1=__webpack_require__(36),formSection_1=__webpack_require__(427),textInput_1=__webpack_require__(184),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[text,setText]=React.useState(initialValue||"");return render(text,({target:target})=>{setText(target.value),addon_actions_1.action("change")(target.value)})};react_1.storiesOf("FormSection",module).add("Default",()=>React.createElement("div",null,React.createElement(formSection_1.default,{title:"Name"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})),React.createElement(formSection_1.default,{title:"Email Address"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})))).add("Required",()=>React.createElement("div",null,React.createElement(formSection_1.default,{title:"Name",required:!0},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})),React.createElement(formSection_1.default,{title:"Email Address"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})))).add("Error",()=>React.createElement("div",null,React.createElement(formSection_1.default,{title:"Name",required:!0,error:"Please enter your name"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange,error:!0})})),React.createElement(formSection_1.default,{title:"Email Address"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})}))))}).call(this,__webpack_require__(5)(module))},427:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),styled_components_1=__webpack_require__(15),SectionTitle=styled_components_1.default.div`
  font-size: 1em;
  margin-bottom: 5px;
  color: ${props=>props.theme.colors.darkGray};

  &::after {
    content: '${props=>props.required?" *":""}';
    color: ${props=>props.theme.colors.error};
    display: inline;
  }
`;SectionTitle.displayName="SectionTitle";const SectionError=styled_components_1.default.div`
  color: ${props=>props.theme.colors.error};
  margin-top: 5px;
  font-size: 0.75em;
`;SectionError.displayName="SectionError";const FormSection=styled_components_1.default(props=>React.createElement("div",{className:props.className},React.createElement(SectionTitle,{required:props.required},props.title),props.children,props.error&&React.createElement(SectionError,null,props.error)))`
  margin-bottom: 20px;
`;FormSection.displayName="FormSection",exports.default=FormSection},428:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),button_1=__webpack_require__(59),panel_1=__webpack_require__(429),pill_1=__webpack_require__(185),switch_1=__webpack_require__(186),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[checked,setChecked]=React.useState(initialValue||!1);return render(checked,()=>{setChecked(!checked)})};react_1.storiesOf("Panel",module).add("Empty",()=>React.createElement(panel_1.default,null)).add("With Text",()=>React.createElement("div",null,React.createElement(panel_1.default,null,React.createElement("h1",null,"Baile Átha Cliath"," ",React.createElement(pill_1.default,{style:{fontSize:"1rem",float:"right"},color:"secondary"},"99€")),React.createElement("p",null,"Is é Baile Átha Cliath príomhchathair na hÉireann agus é ar an gcathair is mó sa tír freisin. Tá sé suite in oirthear na tíre, cois Life agus ar imeall Mhuir Éireann. Tá breis is 1.6 milliún duine ina gcónaí i mórcheantar Bhaile Átha Cliath agus deirtear go dtiocfaidh borradh agus fás ar an daonra sa todhchaí."),React.createElement(button_1.default,null,"Ticéid a cheannach"),React.createElement(button_1.default,{color:"secondary"},"Tuilleadh eolais")),React.createElement(panel_1.default,null,React.createElement("h1",null,"Reykjavík"," ",React.createElement(pill_1.default,{style:{fontSize:"1rem",float:"right"},color:"secondary"},"13.645kr")),React.createElement("p",null,"Reykjavík er höfuðborg Íslands, fjölmennasta sveitarfélag landsins og eina borgin. Þannig er Reykjavík efnahagsleg, menningarleg og stjórnmálaleg þungamiðja landsins. Rúmlega 126.000 manns búa í Reykjavík, þar af eru um 11% innflytjendur. Íbúar höfuðborgarsvæðisins eru yfir 200 þúsund í sjö sveitarfélögum. Opinbert heiti sveitarfélagsins Reykjavíkur er Reykjavíkurborg."),React.createElement(DemoStateWrapper,{render:(on,onClick)=>React.createElement(switch_1.default,{on:on,onClick:onClick}),initialValue:!0}),React.createElement("span",{style:{marginLeft:20}},"Sendu mér tölvupóst þegar þetta er í boði"))))}).call(this,__webpack_require__(5)(module))},429:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const styled_components_1=__webpack_require__(15),polished_1=__webpack_require__(46),Panel=styled_components_1.default.div`
  background-color: ${props=>props.theme.colors.white};
  border-radius: ${props=>props.theme.borderRadius};
  padding: 20px;
  box-shadow: 0 5px 20px ${props=>polished_1.transparentize(.9,props.theme.colors.darkGray)};
  margin-bottom: 20px;
`;Panel.displayName="Panel",exports.default=Panel},430:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),pill_1=__webpack_require__(185);react_1.storiesOf("Pill",module).add("Default",()=>React.createElement("div",null,React.createElement(pill_1.default,null,"Complete"),React.createElement(pill_1.default,{color:"success"},"Passed"),React.createElement(pill_1.default,{color:"error"},"Failed"),React.createElement(pill_1.default,{color:"warning"},"Pending"),React.createElement(pill_1.default,{color:"secondary"},"To Do")))}).call(this,__webpack_require__(5)(module))},431:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),addon_knobs_1=__webpack_require__(432),progressBar_1=__webpack_require__(439);react_1.storiesOf("ProgressBar",module).addDecorator(addon_knobs_1.withKnobs).add("Default",()=>{const progress=addon_knobs_1.number("Progress",100,{range:!0,min:0,max:100,step:1});return React.createElement("div",null,React.createElement(progressBar_1.default,{progress:0}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:progress/3}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:2*progress/3}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:progress}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:0,color:"secondary"}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:progress/3,color:"secondary"}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:2*progress/3,color:"secondary"}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:progress,color:"secondary"}),React.createElement("br",null))})}).call(this,__webpack_require__(5)(module))},439:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const ProgressBar=__webpack_require__(15).default.div`
  position: relative;
  border-radius: ${props=>props.theme.borderRadius};
  height: 0.5em;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px ${props=>props.theme.colors.secondary};

  &::before {
    width: ${props=>String(props.progress)}%;
    transition: 0.25s width ease-in-out;
    display: block;
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${function getProgressBarColor(props){return props.color?props.theme.colors[props.color]:props.theme.colors.main}};
  }
`;ProgressBar.displayName="ProgressBar",exports.default=ProgressBar},440:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),addon_actions_1=__webpack_require__(36),select_1=__webpack_require__(441),choices=[{value:"choice1",text:"Choice 1"},{value:"choice2",text:"Choice 2"},{value:"choice3",text:"Choice 3"}],DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[value,setValue]=React.useState(initialValue||choices[0].value);return render(value,newValue=>{setValue(newValue),addon_actions_1.action("select")(newValue)})};react_1.storiesOf("Select",module).add("Default",()=>React.createElement("div",null,React.createElement(DemoStateWrapper,{render:(value,onSelect)=>React.createElement(select_1.default,{onSelect:onSelect,choices:choices,value:value})}),React.createElement(DemoStateWrapper,{render:(value,onSelect)=>React.createElement(select_1.default,{onSelect:onSelect,choices:choices,value:value,color:"secondary"})}))).add("Disabled",()=>React.createElement("div",null,React.createElement(select_1.default,{onSelect:addon_actions_1.action("select"),choices:choices,value:"choice1",disabled:!0}),React.createElement(select_1.default,{onSelect:addon_actions_1.action("select"),choices:choices,value:"choice1",color:"secondary",disabled:!0})))}).call(this,__webpack_require__(5)(module))},441:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(46),React=__webpack_require__(0),styled_components_1=__webpack_require__(15),button_1=__webpack_require__(59),DEFAULT_COLOR="main";const SelectMenuRow=styled_components_1.default.button`
  background-color: ${props=>props.theme.colors.white};
  padding: 0.75em 1em;
  margin: 5px 0;
  display: block;
  width: 100%;
  outline: 0;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out;
  font-size: 1em;

  &:hover {
    background-color: ${props=>polished_1.mix(.5,props.theme.colors.secondary,props.theme.colors.white)};
  }

  &:last-of-type {
    border-bottom: 0;
  }
`,SelectMenu=styled_components_1.default.div`
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid ${props=>props.theme.colors.secondary};
  border-radius: ${props=>props.theme.borderRadius};
  background-color: ${props=>props.theme.colors.white};
  min-width: 110%;
  max-width: 150%;
  margin: 5px 0 0 0;
`;class Select extends React.Component{constructor(props){super(props),this.state={menuIsVisible:!1},this.toggleMenu=(()=>{const{menuIsVisible:menuIsVisible}=this.state;this.setState({menuIsVisible:!menuIsVisible})}),this.closeMenu=(()=>{this.setState({menuIsVisible:!1})}),this.handleGlobalClick=(e=>{this.node.current&&e.target instanceof Node&&this.node.current.contains(e.target)||this.closeMenu()}),this.handleSelect=(value=>{const{onSelect:onSelect}=this.props;onSelect(value),this.closeMenu()}),this.renderMenu=(()=>React.createElement(SelectMenu,null,this.props.choices.map(({value:value,text:text})=>React.createElement(SelectMenuRow,{key:value,onClick:()=>this.handleSelect(value)},text)))),this.node=React.createRef()}componentDidMount(){window.addEventListener("mousedown",this.handleGlobalClick,!1)}componentWillUnmount(){window.removeEventListener("mousedown",this.handleGlobalClick,!1)}render(){const{className:className,color:color,value:value,choices:choices,disabled:disabled}=this.props,{menuIsVisible:menuIsVisible}=this.state,buttonText=choices.reduce((acc,choice)=>acc||choice.value!==value?acc:choice.text,"");return React.createElement("span",{className:className,ref:this.node},React.createElement(button_1.default,{color:color,onClick:this.toggleMenu,disabled:disabled},buttonText),menuIsVisible&&this.renderMenu())}}const StyledSelect=styled_components_1.default(props=>React.createElement(Select,Object.assign({},props)))`
  margin-right: 5px;
  position: relative;
  display: inline-block;

  ${button_1.default} {
    ${polished_1.ellipsis("200px")}
    position: relative;
    padding-right: 2.5em;

    &::after {
      content: '';
      width: 0.5em;
      height: 0.5em;
      display: inline-block;
      border-width: 0 1px 1px 0;
      border-style: solid;
      transform: translateY(-50%) rotate(45deg);
      margin-top: -2px;
      position: absolute;
      right: 1em;
      top: 50%;
      border-color: ${function getArrowColor(props){const bgColor=function getDropdownColor(props){return props.theme.colors[props.color||DEFAULT_COLOR]}(props);return polished_1.getLuminance(bgColor)>.5?props.theme.colors.darkGray:props.theme.colors.white}};
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;StyledSelect.displayName="Select",exports.default=StyledSelect},442:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),addon_actions_1=__webpack_require__(36),switch_1=__webpack_require__(186),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[on,setOn]=React.useState(initialValue||!1);return render(on,()=>{setOn(!on),addon_actions_1.action("click")(on?"off":"on")})};react_1.storiesOf("Switch",module).add("Default",()=>React.createElement(DemoStateWrapper,{render:(on,onClick)=>React.createElement(switch_1.default,{on:on,onClick:onClick})})).add("Disabled",()=>React.createElement("div",null,React.createElement(switch_1.default,{disabled:!0,onClick:addon_actions_1.action("clicked")}),React.createElement("br",null),React.createElement(switch_1.default,{disabled:!0,on:!0,onClick:addon_actions_1.action("clicked")})))}).call(this,__webpack_require__(5)(module))},443:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(0),react_1=__webpack_require__(11),addon_actions_1=__webpack_require__(36),textInput_1=__webpack_require__(184),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[text,setText]=React.useState(initialValue||"");return render(text,({target:target})=>{setText(target.value),addon_actions_1.action("change")(target.value)})};react_1.storiesOf("TextInput",module).add("Default",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})).add("Placeholder",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange,placeholder:"City"})})).add("Text",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{onChange:onChange,value:text,placeholder:"City"}),initialValue:"San Francisco, CA"})).add("Error",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{onChange:onChange,value:text,placeholder:"City",error:!0}),initialValue:"San Francisco, CA"})).add("Disabled",()=>React.createElement(textInput_1.default,{value:"San Francisco, CA",disabled:!0}))}).call(this,__webpack_require__(5)(module))},59:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(46),styled_components_1=__webpack_require__(15),DEFAULT_COLOR="main";function getButtonColor(props){return props.theme.colors[props.color||DEFAULT_COLOR]}function getButtonTextColor(props){const bgColor=getButtonColor(props);return polished_1.getLuminance(bgColor)>.5?props.theme.colors.darkGray:props.theme.colors.white}const Button=styled_components_1.default.button`
  border-radius: ${props=>props.theme.borderRadius};
  background-color: ${getButtonColor};
  color: ${getButtonTextColor};
  border: 0;
  cursor: pointer;
  outline: 0;
  font-size: 1em;
  line-height: 1em;
  padding: 0.75em 1em;
  transition: 0.25s background-color ease-in-out;
  margin-right: 5px;

  &:hover {
    background-color: ${props=>polished_1.mix(.9,getButtonColor(props),getButtonTextColor(props))};
  }

  &:active {
    transition: 0.05s background-color ease-in-out;
    background-color: ${props=>polished_1.mix(.85,getButtonColor(props),getButtonTextColor(props))};
    color: ${props=>polished_1.mix(.1,getButtonColor(props),getButtonTextColor(props))};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props=>polished_1.transparentize(.75,getButtonColor(props))};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
    background-color: ${getButtonColor};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;Button.displayName="Button",exports.default=Button}},[[193,1,2]]]);
//# sourceMappingURL=main.ed39a73dd06a0b6407a2.bundle.js.map