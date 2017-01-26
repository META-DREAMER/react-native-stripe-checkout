import React from 'react'
import { Text, View, Image } from 'react-native'
import TouchableOpacity from '../common/touchableOpacity'
import CardBrandImage from './cardBrandImage'
export default (props) =>
  <TouchableOpacity {...props} styles={props.styles} style={props.styles.cardTextOuterContainer} onPress={() => props.selectPaymentHandler(props.paymentSource)}>
    <View style={props.styles.cardTextContainer}>
      <CardBrandImage
        style={[props.styles.cardBrandImage, props.selected ? props.styles.accentTint : props.styles.greyTint]}
        brand={props.brand}
      />
      <Text style={props.selected ? props.styles.cardTextSelected : props.styles.cardText}>
	      <Text style={props.styles.cardTextType}>{props.brand}</Text>
	      {props.brand === 'Apple Pay' ? null : <Text style={props.styles.cardTextEndingIn}>{' Ending in '}</Text>}
	      {props.brand === 'Apple Pay' ? null : <Text style={props.styles.cardTextLast4}>{props.last4}</Text>}
      </Text>
      {props.selected ?
      	<View style={props.styles.selectedContainer}>
  			  <Image style={props.styles.accentTint} source={require('../../../assets/images/icon_checkmark.png')} />
      	</View>
      	:
      	null
      }
    </View>
  </TouchableOpacity>
