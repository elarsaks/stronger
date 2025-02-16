import { Stack } from "expo-router";
import { useAuth } from "../context/AuthContext";
import LoginScreen from "./(auth)/Login";

export default function TabsLayout() {
  const { user } = useAuth();

  if (!user) {
    return <LoginScreen />;
  }

  return <Stack />;
}
