Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _touchableOpacity=require('../common/touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);
var _cardBrandImage=require('./cardBrandImage');var _cardBrandImage2=_interopRequireDefault(_cardBrandImage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
function(props){return(
_react2.default.createElement(_touchableOpacity2.default,_extends({},props,{styles:props.styles,style:props.styles.cardTextOuterContainer,onPress:function onPress(){return props.selectPaymentHandler(props.paymentSource);}}),
_react2.default.createElement(_reactNative.View,{style:props.styles.cardTextContainer},
_react2.default.createElement(_cardBrandImage2.default,{
style:[props.styles.cardBrandImage,props.selected?props.styles.accentTint:props.styles.greyTint],
brand:props.brand}),

_react2.default.createElement(_reactNative.Text,{style:props.selected?props.styles.cardTextSelected:props.styles.cardText},
_react2.default.createElement(_reactNative.Text,{style:props.styles.cardTextType},props.brand),
props.brand==='Apple Pay'?null:_react2.default.createElement(_reactNative.Text,{style:props.styles.cardTextEndingIn},' Ending in '),
props.brand==='Apple Pay'?null:_react2.default.createElement(_reactNative.Text,{style:props.styles.cardTextLast4},props.last4)),

props.selected?
_react2.default.createElement(_reactNative.View,{style:props.styles.selectedContainer},
_react2.default.createElement(_reactNative.Image,{style:props.styles.accentTint,source:require('../../../assets/images/icon_checkmark.png')})):


null)));};