import { createAnimations } from '@tamagui/animations-react-native';
import { createInterFont } from '@tamagui/font-inter';
import { createMedia } from '@tamagui/react-native-media-driver';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';
import { createTamagui, styled, SizableText, H1, YStack, createFont } from 'tamagui';

const animations = createAnimations({
  bouncy: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
    type: 'spring',
  },
  lazy: {
    damping: 20,
    type: 'spring',
    stiffness: 60,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
    type: 'spring',
  },
});

const headingFont = createInterFont();

const MontserratFont = createFont({
    family: 'Montserrat',
    size: headingFont.size,
    weight: {
      1: '100',
      3: '200',
      4: '300',
      5: '400',
      6: '500',
      7: '600',
      8: '700',
      9: '800',
      10: '900',
    },
    letterSpacing: headingFont.letterSpacing,
    lineHeight: headingFont.lineHeight,
    face: {
      100: { normal: 'MontserratThin', italic: 'MontserratThinItalic' },
      200: { normal: 'MontserratExtraLight', italic: 'MontserratExtraLightItalic' },
      300: { normal: 'MontserratLight', italic: 'MontserratLightItalic' },
      400: { normal: 'MontserratRegular', italic: 'MontserratRegularItalic' },
      500: { normal: 'MontserratMedium', italic: 'MontserratMediumItalic' },
      600: { normal: 'MontserratSemiBold', italic: 'MontserratSemiBoldItalic' },
      700: { normal: 'MontserratBold', italic: 'MontserratBoldItalic' },
      800: { normal: 'MontserratExtraBold', italic: 'MontserratExtraBoldItalic' },
      900: { normal: 'MontserratBlack', italic: 'MontserratBlackItalic' },
    },
  });

export const Container = styled(YStack, {
  flex: 1,
  padding: 24,
});

export const Main = styled(YStack, {
  flex: 1,
  justifyContent: 'space-between',
  maxWidth: 960,
});

export const Title = styled(H1, {
  color: '#000',
  size: '$12',
});

export const Subtitle = styled(SizableText, {
  color: '#38434D',
  size: '$9',
});

export const Button = styled(YStack, {
  alignItems: 'center',
  backgroundColor: '#6366F1',
  borderRadius: 28,
  hoverStyle: {
    backgroundColor: '#5a5fcf',
  },
  justifyContent: 'center',
  maxWidth: 500,
  padding: 16,
  shadowColor: '#000',
  shadowOffset: {
    height: 2,
    width: 0,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
});

export const ButtonText = styled(SizableText, {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
});

const config = createTamagui({
  light: {
    color: {
      background: 'gray',
      text: 'black',
    },
  },
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: MontserratFont,
    heading: MontserratFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
});

type AppConfig = typeof config;

// Enable auto-completion of props shorthand (ex: jc="center") for Tamagui templates.
// Docs: https://tamagui.dev/docs/core/configuration

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;