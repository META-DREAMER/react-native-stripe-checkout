Object.defineProperty(exports,"__esModule",{value:true});exports.formatMonthYearExpiry=undefined;var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var formatMonthYearExpiry=exports.formatMonthYearExpiry=function formatMonthYearExpiry(monthYearExpiryString,previousMonthYearExpiry){
if(_lodash2.default.size(monthYearExpiryString)===2&&_lodash2.default.size(previousMonthYearExpiry)!==3){
return monthYearExpiryString+'/';
}else if(_lodash2.default.size(monthYearExpiryString)===2&&_lodash2.default.size(previousMonthYearExpiry)===3){
return monthYearExpiryString.substring(0,1);
}
return monthYearExpiryString;
};