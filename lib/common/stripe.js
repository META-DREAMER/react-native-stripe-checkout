Object.defineProperty(exports,"__esModule",{value:true});exports.getCardToken=undefined;var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var stripeUrl='https://api.stripe.com/v1/';

var getCardToken=exports.getCardToken=function getCardToken(cardNumber,expiryMonth,expiryYear,cvc,publicStripeKey){
var cardDetails={
'card[number]':cardNumber,
'card[exp_month]':expiryMonth,
'card[exp_year]':expiryYear,
'card[cvc]':cvc};


var formBody=_lodash2.default.map(cardDetails,function(value,key){
var encodedValue=encodeURIComponent(value);
var encodedKey=encodeURIComponent(key);
return encodedKey+'='+encodedValue;
}).join('&');

return(
fetch(stripeUrl+'tokens',{
method:'post',
headers:{
Accept:'application/json',
'Content-Type':'application/x-www-form-urlencoded',
Authorization:'Bearer '+publicStripeKey},

body:formBody}).

then(function(response){return response.text();}).
then(function(responseText){return JSON.parse(responseText).id;}));

};