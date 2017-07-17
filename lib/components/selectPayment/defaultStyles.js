Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _styles=require('../../common/styles');var commonStyles=_interopRequireWildcard(_styles);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

var defaultStyles=function defaultStyles(_ref){var _ref$bold=_ref.
bold,bold=_ref$bold===undefined?commonStyles.bold:_ref$bold,_ref$grey=_ref.
grey,grey=_ref$grey===undefined?commonStyles.grey:_ref$grey,_ref$darkGrey=_ref.
darkGrey,darkGrey=_ref$darkGrey===undefined?commonStyles.darkGrey:_ref$darkGrey,_ref$accentColor=_ref.
accentColor,accentColor=_ref$accentColor===undefined?commonStyles.accentColor:_ref$accentColor,_ref$touchableOpacity=_ref.
touchableOpacityContainer,touchableOpacityContainer=_ref$touchableOpacity===undefined?commonStyles.touchableOpacityContainer:_ref$touchableOpacity,_ref$innerTouchableOp=_ref.
innerTouchableOpacityContainer,innerTouchableOpacityContainer=_ref$innerTouchableOp===undefined?commonStyles.innerTouchableOpacityContainer:_ref$innerTouchableOp;return(
{
touchableOpacityContainer:touchableOpacityContainer,
innerTouchableOpacityContainer:innerTouchableOpacityContainer,
addButton:_extends({},
touchableOpacityContainer,{
marginTop:20,
marginBottom:20,
borderBottomWidth:1,
borderTopWidth:1,
borderColor:grey}),

addButtonText:{
color:accentColor},

addButtonIcon:{
marginRight:16},

applePayContainer:{
marginLeft:10},

cardBrandImage:{
marginRight:8},

cardsLoadingIndicator:{
marginBottom:20,
marginTop:20},

cardTextLast4:{
fontWeight:bold},

cardTextEndingIn:{
fontWeight:'400'},

cardTextType:{
fontWeight:bold},

cardText:{
color:'#3c3c3c'},

cardTextSelected:{
color:accentColor},

accentTint:{
tintColor:accentColor},

greyTint:{
tintColor:darkGrey},

selectedContainer:{
flex:1,
alignItems:'flex-end'},

cardTextContainer:{
flexDirection:'row',
alignItems:'center'},

innerTouchableOpacityContainerLast:{
borderBottomWidth:0},

paymentMethodsContainer:{
justifyContent:'flex-end',
flex:1},

paymentMethodsInnerContainer:{
borderBottomWidth:1,
borderTopWidth:1,
borderColor:grey},

paymentMethodsInnerViewContainer:{},


selectPaymentContainer:{
flex:1,
backgroundColor:'#F2F2F5'}});};exports.default=



defaultStyles;