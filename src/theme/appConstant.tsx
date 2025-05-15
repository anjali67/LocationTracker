import { Dimensions, PixelRatio, Platform } from 'react-native';

// Get screen dimensions
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;
export const SCREEN_WIDTH: number = Dimensions.get('window').width;
const platformWithPad = Platform as typeof Platform & { isPad?: boolean };

// Platform checks
export const IsIOS: boolean = Platform.OS === 'ios';
export const IsIPAD: boolean = platformWithPad.OS === 'ios' && platformWithPad.isPad === true;
export const IsHaveNotch: boolean = SCREEN_HEIGHT > 750;
export const Isiphone12promax: boolean = Platform.OS === 'ios' && SCREEN_HEIGHT > 2778;

// Dimension utilities
export const windowHeight = (height: number): number => {
  const tempHeight = SCREEN_HEIGHT * (height / 667);
  return PixelRatio.roundToNearestPixel(tempHeight);
};

export const windowWidth = (width: number): number => {
  const tempWidth = SCREEN_WIDTH * (width / 480);
  return PixelRatio.roundToNearestPixel(tempWidth);
};

// Font sizes
export const fontSizes: { [key: string]: number } = {
  FONT6: windowWidth(6),
  FONT7: windowWidth(7),
  FONT8: windowWidth(8),
  FONT9: windowWidth(9),
  FONT10: windowWidth(10),
  FONT11: windowWidth(11),
  FONT12: windowWidth(12),
  FONT13: windowWidth(13),
  FONT14: windowWidth(14),
  FONT14HALF: windowWidth(14.5),
  FONT15: windowWidth(15),
  FONT15HALF: windowWidth(15.5),
  FONT16: windowWidth(16),
  FONT16HALF: windowWidth(16.5),
  FONT17: windowWidth(17),
  FONT17HALF: windowWidth(17.5),
  FONT18: windowWidth(18),
  FONT18HALF: windowWidth(18.5),
  FONT19: windowWidth(19),
  FONT19HALF: windowWidth(19.5),
  FONT20: windowWidth(20),
  FONT20HALF: windowWidth(20.5),
  FONT21: windowWidth(21),
  FONT22: windowWidth(22),
  FONT23: windowWidth(23),
  FONT24: windowWidth(24),
  FONT25: windowWidth(25),

};
