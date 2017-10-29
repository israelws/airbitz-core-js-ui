import * as Constants from '../../constants/'
import { hs, fontSize } from '../../util'
const PrimaryButtonUpStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_PRIMARY_UP,
  width: Constants.BUTTON_WIDTH_1,
  height: Constants.BUTTON_HEIGHT,
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: Constants.BUTTON_BORDER_RADIUS
}
const PrimaryButtonUpTextStyle = {
  position: 'relative',
  color: Constants.WHITE,
  fontSize: Constants.BUTTON_TEXT_SIZE,
  width: '100%',
  textAlign: 'center'
}
const PrimaryButtonDownTextStyle = {
  position: 'relative',
  color: Constants.WHITE,
  fontSize: Constants.BUTTON_TEXT_SIZE,
  width: '100%',
  textAlign: 'center'
}

const PrimaryButtonDownStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_PRIMARY_DOWN,
  width: Constants.BUTTON_WIDTH_1,
  height: Constants.BUTTON_HEIGHT,
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: Constants.BUTTON_BORDER_RADIUS
}

const SecondaryButtonUpStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_SECONDARY_UP,
  width: Constants.BUTTON_WIDTH_1,
  height: Constants.BUTTON_HEIGHT,
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: Constants.BUTTON_BORDER_RADIUS
}

const SecondaryButtonDownStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_SECONDARY_DOWN,
  width: Constants.BUTTON_WIDTH_1,
  height: Constants.BUTTON_HEIGHT,
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: Constants.BUTTON_BORDER_RADIUS
}
const SecondaryButtonUpTextStyle = {
  position: 'relative',
  color: Constants.WHITE,
  fontSize: Constants.BUTTON_TEXT_SIZE,
  width: '100%',
  textAlign: 'center'
}
const SecondaryButtonDownTextStyle = {
  position: 'relative',
  color: Constants.WHITE,
  fontSize: Constants.BUTTON_TEXT_SIZE,
  width: '100%',
  textAlign: 'center'
}

const TertiaryButtonUpStyle = {
  backgroundColor: Constants.TRANSPARENT,
  width: Constants.BUTTON_WIDTH_1,
  height: Constants.BUTTON_HEIGHT,
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: hs(3),
  borderColor: Constants.ACCENT_MINT,
  borderWidth: Constants.BUTTON_BORDER_STROKE
}

const TertiaryButtonTextUpStyle = {
  color: Constants.ACCENT_MINT,
  fontSize: 22,
  width: '100%',
  textAlign: 'center'
}

const TertiaryButtonDownStyle = {
  backgroundColor: Constants.ACCENT_MINT,
  width: Constants.BUTTON_WIDTH_1,
  height: Constants.BUTTON_HEIGHT,
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: hs(3),
  borderColor: Constants.ACCENT_MINT,
  borderWidth: Constants.BUTTON_BORDER_STROKE
}

const TertiaryButtonTextDownStyle = {
  color: Constants.PRIMARY,
  fontSize: 18,
  width: '100%',
  textAlign: 'center'
}

const TextOnlyButtonUpStyle = {
  backgroundColor: Constants.TRANSPARENT,
  padding: 10
}

const TextOnlyButtonTextUpStyle = {
  color: Constants.SECONDARY,
  fontSize: fontSize(17),
  width: '100%',
  textAlign: 'center'
}

const TextOnlyButtonDownStyle = {
  backgroundColor: Constants.TRANSPARENT,
  padding: 10
}

const TextOnlyButtonTextDownStyle = {
  color: Constants.PRIMARY,
  fontSize: fontSize(17),
  width: '100%',
  textAlign: 'center'
}

const IconButtonStyle = {
  container: {
    width: 40,
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icon: {
    color: Constants.WHITE
  },
  iconPressed: {
    color: Constants.GRAY_2
  },
  iconSize: 36,
  underlayColor: Constants.TRANSPARENT
}

const TextAndIconButtonStyle = {
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  centeredContent: {
    width: '100%',
    alignItems: 'center'
  },
  inner: {
    position: 'relative',
    flexDirection: 'row'
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  iconContainer: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center'

  },
  text: {
    color: Constants.WHITE,
    fontSize: 20
  },
  textPressed: {
    color: Constants.GRAY_2,
    fontSize: 20
  },
  icon: {
    color: Constants.WHITE
  },
  iconPressed: {
    color: Constants.GRAY_2
  },
  iconSize: 25,
  underlayColor: Constants.TRANSPARENT
}

export { TextAndIconButtonStyle }
export { IconButtonStyle }
export { PrimaryButtonUpStyle }
export { PrimaryButtonUpTextStyle }
export { PrimaryButtonDownTextStyle }
export { PrimaryButtonDownStyle }
export { SecondaryButtonUpStyle }
export { SecondaryButtonUpTextStyle }
export { SecondaryButtonDownStyle }
export { SecondaryButtonDownTextStyle }
export { TertiaryButtonUpStyle }
export { TertiaryButtonTextUpStyle }
export { TertiaryButtonDownStyle }
export { TertiaryButtonTextDownStyle }
export { TextOnlyButtonUpStyle }
export { TextOnlyButtonTextUpStyle }
export { TextOnlyButtonDownStyle }
export { TextOnlyButtonTextDownStyle }
