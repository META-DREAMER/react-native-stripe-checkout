import React, { Component } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import Card from './card'
import _ from 'lodash'

export default class PaymentMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    };
    this.cards = this.cards.bind(this);
    this.onSelect = this.onSelect.bind(this);

  }

  onSelect(paymentSource) {
    this.setState({ selectedId: paymentSource.id });
    if (paymentSource.brand === 'Apple Pay') {
      this.props.applePayHandler();
    } else {
      this.props.selectPaymentHandler(paymentSource);
    }
  }

  cards() {
    const { enableApplePay, styles, paymentSources = [] } = this.props;
    let sources = [];
    if (enableApplePay) {
      sources = [{ id: '__applePay__', brand: 'Apple Pay' }, ...paymentSources];
    } else {
      sources = paymentSources;
    }
    return (
      _.map(sources, (paymentSource, i) => {
        return (
          <Card
            last4={paymentSource.last4}
            brand={paymentSource.brand}
            selectPaymentHandler={this.onSelect}
            paymentSource={paymentSource}
            styles={styles}
            last={i === sources.length - 1}
            key={paymentSource.id}
            selected={this.state.selectedId === paymentSource.id}
          />
        )
      })
    )
  }

  render() {
    const { styles, paymentSources } = this.props;
    
    return (
      <View style={styles.paymentMethodsContainer}>
        <ScrollView automaticallyAdjustContentInsets={false} contentContainerStyle={styles.paymentMethodsInnerContainer}>
          <View style={styles.paymentMethodsInnerViewContainer}>
            { this.cards() }
          </View>
        </ScrollView>
        {!paymentSources ? <ActivityIndicator style={styles.cardsLoadingIndicator} /> : null}
      </View>
    )
  }
}
