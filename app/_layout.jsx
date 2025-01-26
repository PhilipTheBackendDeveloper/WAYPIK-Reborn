import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    lalezar: require("../assets/fonts/Lalezar-Regular.ttf"),
  });

  useEffect(() => {
    // Keep the splash screen visible while fonts are loading
    async function prepare() {
      if (!fontsLoaded) {
        await SplashScreen.preventAutoHideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      // Hide the splash screen once fonts are loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Don't render until fonts are loaded
  }

  return (
    <Stack onLayout={onLayout}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="login/sign-up/index" options={{ headerShown: false }} />
      <Stack.Screen name="login/sign-in/index" options={{ headerShown: false }} />
    </Stack>
  );
}
