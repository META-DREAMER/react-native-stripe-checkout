Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(props){return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
style:[props.styles.touchableOpacityContainer,props.style],
onPress:props.onPress},

_react2.default.createElement(_reactNative.View,{style:[props.styles.innerTouchableOpacityContainer,props.last&&props.styles.innerTouchableOpacityContainerLast,props.innerStyle]},
props.children)));};