Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _paymentMethods=require('../paymentMethods');var _paymentMethods2=_interopRequireDefault(_paymentMethods);
var _defaultStyles=require('./defaultStyles');var _defaultStyles2=_interopRequireDefault(_defaultStyles);
var _touchableOpacity=require('../common/touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

SelectPayment=function(_Component){_inherits(SelectPayment,_Component);function SelectPayment(){_classCallCheck(this,SelectPayment);return _possibleConstructorReturn(this,(SelectPayment.__proto__||Object.getPrototypeOf(SelectPayment)).apply(this,arguments));}_createClass(SelectPayment,[{key:'render',value:function render()
{var _this2=this;
var styles=_lodash2.default.merge({},(0,_defaultStyles2.default)(this.props.styles),this.props.styles);
return(
_react2.default.createElement(_reactNative.View,{style:styles.selectPaymentContainer},
_react2.default.createElement(_paymentMethods2.default,{
paymentSources:this.props.paymentSources,
selectPaymentHandler:this.props.selectPaymentHandler,
applePayHandler:this.props.applePayHandler,
enableApplePay:this.props.enableApplePay,
styles:styles}),

_react2.default.createElement(_touchableOpacity2.default,{style:styles.addButton,styles:styles,onPress:function onPress(){return _this2.props.addCardHandler();},last:true},
_react2.default.createElement(_reactNative.View,{style:styles.cardTextContainer},
_react2.default.createElement(_reactNative.Image,{style:[styles.accentTint,styles.addButtonIcon],source:require('../../../assets/images/icon_add.png')}),
_react2.default.createElement(_reactNative.Text,{style:styles.addButtonText},this.props.addNewCardText||'Add New Card')))));




}}]);return SelectPayment;}(_react.Component);exports.default=SelectPayment;