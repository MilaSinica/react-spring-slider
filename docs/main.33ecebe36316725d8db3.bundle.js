(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{360:function(module,exports,__webpack_require__){__webpack_require__(361),__webpack_require__(641),module.exports=__webpack_require__(642)},402:function(module,exports){},494:function(module,exports){},642:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(36),__webpack_require__(28),__webpack_require__(22),__webpack_require__(37),__webpack_require__(38);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(193),req=__webpack_require__(890);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(643)(module))},890:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":891};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=890},891:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importStar(__webpack_require__(0)),react_2=__webpack_require__(193),_1=__importDefault(__webpack_require__(892)),images=["https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],onSlideChange=function(index){console.log("Slide changed to: "+index)},imageStyle=function(src){return{backgroundSize:"cover",backgroundImage:"url("+src+")",height:"100%",width:"100%"}};react_2.storiesOf("Slider",module).add("Default",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,onSlideChange:onSlideChange},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("Smaller than 100%",(function(){return react_1.default.createElement("div",{style:{width:"500px",height:"500px"}},react_1.default.createElement(_1.default,{hasBullets:!0},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With auto sliding",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,auto:2e3},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With activeIndex (2)",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,activeIndex:2},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With activeIndex (interval)",(function(){var _a=react_1.useState(2),activeIndex=_a[0],setActiveIndex=_a[1];return react_1.useEffect((function(){var id=setInterval((function(){var index=activeIndex+1%images.length;setActiveIndex(index)}),2e3);return function(){clearInterval(id)}})),react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,activeIndex:activeIndex},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With different `bulletStyle`",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,bulletStyle:{backgroundColor:"#fff"}},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With custom `bullets`",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,BulletComponent:function(_a){var onClick=_a.onClick,isActive=_a.isActive;return react_1.default.createElement("li",{style:{width:"25px",height:"25px",backgroundColor:"red",margin:"0 2px",opacity:isActive?"0.5":void 0},onClick:onClick})}},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With arrows",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasArrows:!0},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With custom arrow style",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasArrows:!0,arrowStyle:{border:"solid red",borderWidth:"0 5px 5px 0"}},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With custom arrow component",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasArrows:!0,ArrowComponent:function(_a){var onClick=_a.onClick,direction=_a.direction;return react_1.default.createElement("div",{style:{border:"1px solid black",padding:"1em",backgroundColor:"white"},onClick:onClick},direction)}},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With arrows and bullets",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasArrows:!0,hasBullets:!0},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image)})}))))})).add("With onClick",(function(){return react_1.default.createElement("div",{style:{width:"100vw",height:"100vh"}},react_1.default.createElement(_1.default,{hasBullets:!0,onSlideChange:onSlideChange},images.map((function(image){return react_1.default.createElement("div",{key:image,draggable:"false",style:imageStyle(image),onClick:function(){return console.log("click")}})}))))}))}).call(this,__webpack_require__(82)(module))},892:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,templateObject_6,react_1=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(192)),react_spring_1=__webpack_require__(897),react_use_gesture_1=__webpack_require__(894),arrow_1=__importDefault(__webpack_require__(895)),bullet_1=__importDefault(__webpack_require__(896)),StyledSliderArrows=styled_components_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n\ttop: 50%;\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"],["\n\ttop: 50%;\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]))),StyledBulletList=styled_components_1.default.ul(templateObject_2||(templateObject_2=__makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tlist-style-type: none;\n"],["\n\tdisplay: flex;\n\tjustify-content: center;\n\tlist-style-type: none;\n"]))),StyledBullets=styled_components_1.default.div(templateObject_3||(templateObject_3=__makeTemplateObject(["\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\tz-index: 1;\n"],["\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\tz-index: 1;\n"]))),StyledWrapper=styled_components_1.default.div(templateObject_4||(templateObject_4=__makeTemplateObject(["\n\twidth: 100%;\n\theight: 100%;\n"],["\n\twidth: 100%;\n\theight: 100%;\n"]))),StyledSlider=styled_components_1.default.div(templateObject_5||(templateObject_5=__makeTemplateObject(["\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\theight: 100%;\n"],["\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\theight: 100%;\n"]))),StyledSlide=styled_components_1.default.div(templateObject_6||(templateObject_6=__makeTemplateObject(["\n\twidth: 100%;\n\theight: 100%;\n\twill-change: transform;\n\tuser-select: none;\n\tpointer-events: none;\n"],["\n\twidth: 100%;\n\theight: 100%;\n\twill-change: transform;\n\tuser-select: none;\n\tpointer-events: none;\n"])));exports.default=function(_a){var _b=_a.activeIndex,activeIndex=void 0===_b?0:_b,ArrowComponent=_a.ArrowComponent,_c=_a.arrowStyle,arrowStyle=void 0===_c?{}:_c,_d=_a.auto,auto=void 0===_d?0:_d,BulletComponent=_a.BulletComponent,_e=_a.bulletStyle,bulletStyle=void 0===_e?{}:_e,_f=_a.children,children=void 0===_f?[]:_f,_g=_a.hasArrows,hasArrows=void 0!==_g&&_g,_h=_a.hasBullets,hasBullets=void 0!==_h&&_h,_j=_a.onSlideChange,onSlideChange=void 0===_j?function(){}:_j,sliderRef=react_1.useRef(null),_k=react_1.useState(0),slide=_k[0],setSlide=_k[1],_l=react_1.useState(!1),isDragging=_l[0],setDragging=_l[1],_m=react_spring_1.useSprings(children.length,(function(index){return{offset:index}})),springProps=_m[0],setSpringProps=_m[1],gestureBinds=react_use_gesture_1.useGesture({onDrag:function(_a){var input,lower,upper,down=_a.down,xDelta=_a.movement[0],xDir=_a.direction[0],distance=_a.distance,cancel=_a.cancel;if(_a.first&&setDragging(!0),sliderRef&&sliderRef.current&&sliderRef.current.parentElement){var width_1=sliderRef.current.parentElement.getBoundingClientRect().width;down&&distance>width_1/2&&(cancel&&cancel(),setSlide((input=slide+(xDir>0?-1:1),lower=0,upper=children.length-1,Math.min(Math.max(input,lower),upper)))),setSpringProps((function(index){return{offset:(down?xDelta:0)/width_1+(index-slide)}}))}},onClick:function(){isDragging?setDragging(!1):clickOnSlide(slide)}},{drag:{delay:200}});react_1.useEffect((function(){setSpringProps((function(index){return{offset:index-slide}})),onSlideChange(slide)}),[slide,setSpringProps,onSlideChange]),react_1.useEffect((function(){var interval;return auto>0&&(interval=setInterval((function(){var targetIndex=(slide+1)%children.length;setSlide(targetIndex)}),auto)),function(){interval&&clearInterval(interval)}}),[auto,children.length,slide]),react_1.useEffect((function(){setSlide(activeIndex%children.length)}),[activeIndex,children.length]);var childs=children.map((function(child,index){return react_1.default.createElement(StyledSlide,{key:index},child)})),clickOnSlide=function(slideIndex){childs[slideIndex].props.children.props.onClick&&childs[slideIndex].props.children.props.onClick()};return react_1.default.createElement(StyledWrapper,{ref:sliderRef},react_1.default.createElement(StyledSlider,null,hasArrows&&react_1.default.createElement(StyledSliderArrows,null,react_1.default.createElement(arrow_1.default,{ArrowComponent:ArrowComponent,arrowStyle:arrowStyle,direction:"left",onClick:function(){setSlide(0!==slide?slide-1:children.length-1)}}),react_1.default.createElement(arrow_1.default,{ArrowComponent:ArrowComponent,arrowStyle:arrowStyle,direction:"right",onClick:function(){slide!==children.length-1?setSlide(slide+1):setSlide(0)}})),hasBullets&&react_1.default.createElement(StyledBullets,null,react_1.default.createElement(StyledBulletList,null,children.map((function(_,index){return react_1.default.createElement(bullet_1.default,{key:index,index:index,BulletComponent:BulletComponent,setSlide:setSlide,activeIndex:slide,bulletStyle:bulletStyle})})))),springProps.map((function(_a,index){var offset=_a.offset;return react_1.default.createElement(react_spring_1.animated.div,__assign({},gestureBinds(),{key:index,className:"slider__slide",style:{transform:offset.interpolate((function(offsetX){return"translate3d("+100*offsetX+"%, 0, 0)"})),position:"absolute",width:"100%",height:"100%",willChange:"transform"}}),childs[index])}))))}},895:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,react_1=__importDefault(__webpack_require__(0)),StyledI=__importDefault(__webpack_require__(192)).default.i(templateObject_1||(templateObject_1=__makeTemplateObject(["\n\tborder: solid #333;\n\tborder-width: 0 5px 5px 0;\n\tdisplay: inline-block;\n\tpadding: 3px;\n\theight: 20px;\n\twidth: 20px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\topacity: 0.4;\n\t}\n\n\t","\n"],["\n\tborder: solid #333;\n\tborder-width: 0 5px 5px 0;\n\tdisplay: inline-block;\n\tpadding: 3px;\n\theight: 20px;\n\twidth: 20px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\topacity: 0.4;\n\t}\n\n\t","\n"])),(function(_a){return"left"===_a.direction?"transform: rotate(135deg); \t\t\t\tmargin-left: 1em;":"transform: rotate(-45deg); \t\t\t\tmargin-right: 1em;"})),Arrow=function(_a){var ArrowComponent=_a.ArrowComponent,arrowStyle=_a.arrowStyle,onClick=_a.onClick,direction=_a.direction;return ArrowComponent?react_1.default.createElement(ArrowComponent,{direction:direction,onClick:onClick}):react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("a",{onClick:onClick},react_1.default.createElement(StyledI,{style:arrowStyle,direction:direction})))};Arrow.defaultProps={ArrowComponent:void 0,arrowStyle:{}},exports.default=Arrow},896:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,react_1=__importDefault(__webpack_require__(0)),StyledBullet=__importDefault(__webpack_require__(192)).default.li(templateObject_1||(templateObject_1=__makeTemplateObject(["\n\tcursor: pointer;\n\theight: 15px;\n\twidth: 15px;\n\tbackground-color: #333;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\tmargin: 0 2px;\n\n\t",";\n"],["\n\tcursor: pointer;\n\theight: 15px;\n\twidth: 15px;\n\tbackground-color: #333;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\tmargin: 0 2px;\n\n\t",";\n"])),(function(_a){return _a.active?"opacity: 0.5":""})),Bullet=function(_a){var index=_a.index,BulletComponent=_a.BulletComponent,setSlide=_a.setSlide,activeIndex=_a.activeIndex,bulletStyle=_a.bulletStyle,updateSlide=function(){setSlide(index)};return BulletComponent?react_1.default.createElement(BulletComponent,{key:index,isActive:index===activeIndex,onClick:updateSlide}):react_1.default.createElement(StyledBullet,{active:index===activeIndex,key:index,style:bulletStyle,onClick:updateSlide})};Bullet.defaultProps={BulletComponent:void 0,bulletStyle:{}},exports.default=Bullet}},[[360,1,2]]]);
//# sourceMappingURL=main.33ecebe36316725d8db3.bundle.js.map