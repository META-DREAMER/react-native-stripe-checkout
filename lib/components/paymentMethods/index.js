Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _card=require('./card');var _card2=_interopRequireDefault(_card);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

PaymentMethods=function(_Component){_inherits(PaymentMethods,_Component);
function PaymentMethods(props){_classCallCheck(this,PaymentMethods);var _this=_possibleConstructorReturn(this,(PaymentMethods.__proto__||Object.getPrototypeOf(PaymentMethods)).call(this,
props));
_this.state={
selectedId:null};

_this.cards=_this.cards.bind(_this);
_this.onSelect=_this.onSelect.bind(_this);return _this;

}_createClass(PaymentMethods,[{key:'onSelect',value:function onSelect(

paymentSource){
this.setState({selectedId:paymentSource.id});
if(paymentSource.brand==='Apple Pay'){
this.props.applePayHandler();
}else{
this.props.selectPaymentHandler(paymentSource);
}
}},{key:'cards',value:function cards()

{var _this2=this;var _props=
this.props,enableApplePay=_props.enableApplePay,styles=_props.styles,_props$paymentSources=_props.paymentSources,paymentSources=_props$paymentSources===undefined?[]:_props$paymentSources;
var sources=[];
if(enableApplePay){
sources=[{id:'__applePay__',brand:'Apple Pay'}].concat(_toConsumableArray(paymentSources));
}else{
sources=paymentSources;
}
return(
_lodash2.default.map(sources,function(paymentSource,i){
return(
_react2.default.createElement(_card2.default,{
last4:paymentSource.last4,
brand:paymentSource.brand,
selectPaymentHandler:_this2.onSelect,
paymentSource:paymentSource,
styles:styles,
last:i===sources.length-1,
key:paymentSource.id,
selected:_this2.state.selectedId===paymentSource.id}));


}));

}},{key:'render',value:function render()

{var _props2=
this.props,styles=_props2.styles,paymentSources=_props2.paymentSources;

return(
_react2.default.createElement(_reactNative.View,{style:styles.paymentMethodsContainer},
_react2.default.createElement(_reactNative.ScrollView,{automaticallyAdjustContentInsets:false,contentContainerStyle:styles.paymentMethodsInnerContainer},
_react2.default.createElement(_reactNative.View,{style:styles.paymentMethodsInnerViewContainer},
this.cards())),


!paymentSources?_react2.default.createElement(_reactNative.ActivityIndicator,{style:styles.cardsLoadingIndicator}):null));


}}]);return PaymentMethods;}(_react.Component);exports.default=PaymentMethods;