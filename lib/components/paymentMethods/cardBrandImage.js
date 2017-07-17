Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(props){
var brandLower=_lodash2.default.lowerCase(props.brand);
if(brandLower==='visa'){
return _react2.default.createElement(_reactNative.Image,{style:props.style,source:require('../../../assets/images/card_visa.png')});
}else if(brandLower==='master card'){
return _react2.default.createElement(_reactNative.Image,{style:props.style,source:require('../../../assets/images/card_mastercard.png')});
}else if(brandLower==='american express'){
return _react2.default.createElement(_reactNative.Image,{style:props.style,source:require('../../../assets/images/card_amex.png')});
}else if(brandLower==='apple pay'){
return _react2.default.createElement(_reactNative.Image,{style:props.style,source:require('../../../assets/images/card_applepay.png')});
}else if(brandLower==='discover'){
return _react2.default.createElement(_reactNative.Image,{style:props.style,source:require('../../../assets/images/card_discover.png')});
}
return _react2.default.createElement(_reactNative.View,null);
};