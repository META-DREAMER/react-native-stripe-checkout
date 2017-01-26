import * as commonStyles from '../../common/styles'

const defaultStyles = ({
  bold = commonStyles.bold,
  grey = commonStyles.grey,
  darkGrey = commonStyles.darkGrey,
  accentColor = commonStyles.accentColor,
  touchableOpacityContainer = commonStyles.touchableOpacityContainer,
  innerTouchableOpacityContainer = commonStyles.innerTouchableOpacityContainer,
}) => ({
  touchableOpacityContainer: touchableOpacityContainer,
  innerTouchableOpacityContainer: innerTouchableOpacityContainer,
  addButton: {
    ...touchableOpacityContainer,
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: grey,
  },
  addButtonText: {
    color: accentColor,
  },
  addButtonIcon: {
    marginRight: 16,
  },
  applePayContainer: {
    marginLeft: 10,
  },
  cardBrandImage: {
    marginRight: 8
  },
  cardsLoadingIndicator: {
    marginBottom: 20,
    marginTop: 20,
  },
  cardTextLast4: {
    fontWeight: bold,
  },
  cardTextEndingIn: {
    fontWeight: '400',
  },
  cardTextType: {
    fontWeight: bold,
  },
  cardText: {
    color: '#3c3c3c'
  },
  cardTextSelected: {
    color: accentColor
  },
  accentTint: {
    tintColor: accentColor
  },
  greyTint: {
    tintColor: darkGrey
  },
  selectedContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerTouchableOpacityContainerLast: {
    borderBottomWidth: 0,
  },
  paymentMethodsContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  paymentMethodsInnerContainer: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: grey,
  },
  paymentMethodsInnerViewContainer: {

  },
  selectPaymentContainer: {
    flex: 1,
    backgroundColor: '#F2F2F5',
  },
});

export default defaultStyles;
