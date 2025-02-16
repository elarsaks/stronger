import { Stack } from "expo-router";
import { useAuth } from "../context/AuthContext";
import LoginScreen from "./(auth)/Login";
import {
  Provider as PaperProvider,
  MD3DarkTheme as PaperDarkTheme,
} from "react-native-paper";

export default function TabsLayout() {
  const { user } = useAuth();

  return (
    <PaperProvider theme={PaperDarkTheme}>
      {!user ? <LoginScreen /> : <Stack />}
    </PaperProvider>
  );
}
