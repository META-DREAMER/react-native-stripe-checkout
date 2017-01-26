import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PaymentMethods from '../paymentMethods'
import defaultStyles from './defaultStyles'
import TouchableOpacity from '../common/touchableOpacity'
import _ from 'lodash'

export default class SelectPayment extends Component {
  render() {
    const styles = _.merge({}, defaultStyles(this.props.styles), this.props.styles);
    return (
      <View style={styles.selectPaymentContainer}>
        <PaymentMethods
          paymentSources={this.props.paymentSources}
          selectPaymentHandler={this.props.selectPaymentHandler}
          applePayHandler={this.props.applePayHandler}
          enableApplePay={this.props.enableApplePay}
          styles={styles}
        />
        <TouchableOpacity style={styles.addButton} styles={styles} onPress={() => this.props.addCardHandler()} last>
          <View style={styles.cardTextContainer}>
            <Image style={[styles.accentTint, styles.addButtonIcon]} source={require('../../../assets/images/icon_add.png')} />
            <Text style={styles.addButtonText}>{this.props.addNewCardText || 'Add New Card'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
