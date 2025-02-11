import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/montserrat';
import {DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {TamaguiProvider} from 'tamagui'
import tamaguiConfig from '../tamagui.config';
//import { useFonts } from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    MontserratThin: Montserrat_100Thin,
    MontserratThinItalic: Montserrat_100Thin_Italic,
    MontserratExtraLight: Montserrat_200ExtraLight,
    MontserratExtraLightItalic: Montserrat_200ExtraLight_Italic,
    MontserratLight: Montserrat_300Light,
    MontserratLightItalic: Montserrat_300Light_Italic,
    MontserratRegular: Montserrat_400Regular,
    MontserratRegularItalic: Montserrat_400Regular_Italic,
    MontserratMedium: Montserrat_500Medium,
    MontserratMediumItalic: Montserrat_500Medium_Italic,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratSemiBoldItalic: Montserrat_600SemiBold_Italic,
    MontserratBold: Montserrat_700Bold,
    MontserratBoldItalic: Montserrat_700Bold_Italic,
    MontserratExtraBold: Montserrat_800ExtraBold,
    MontserratExtraBoldItalic: Montserrat_800ExtraBold_Italic,
    MontserratBlack: Montserrat_900Black_Italic,
    MontserratBlackItalic: Montserrat_900Black,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
        <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="(home)" options={{headerShown: false}}/>
              <Stack.Screen name="index" options={{headerShown: false}}/>
              <Stack.Screen name="login" options={{headerShown: false}}/>
              <Stack.Screen name="register" options={{headerShown: false}}/>
              <Stack.Screen name="quizz" options={{headerShown: false}}/>
              <Stack.Screen name="+not-found"/>
            </Stack>
          </ThemeProvider>
        </TamaguiProvider>

  );
}
