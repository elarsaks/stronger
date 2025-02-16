import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { TextInput, Button, Title, HelperText } from "react-native-paper";
import Logo from "@/components/ui/Logo";

export default function LoginScreen() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      // Dummy login check
      if (username === "test" && password === "password") {
        router.push("/(tabs)"); // Navigate to protected screens
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.log("Error signing in:", error);
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <Title style={styles.loginTitle}>Login</Title>
        <TextInput
          label="Username"
          mode="outlined"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          theme={{
            colors: {
              primary: "#1E90FF", // Blue outline when active
              placeholder: "#1E90FF", // Blue placeholder
              text: "#FFFFFF",
              background: "#121212",
            },
          }}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          theme={{
            colors: {
              primary: "#1E90FF",
              placeholder: "#1E90FF",
              text: "#FFFFFF",
              background: "#121212",
            },
          }}
        />
        {errorMessage ? (
          <HelperText type="error" visible={true} style={styles.errorText}>
            {errorMessage}
          </HelperText>
        ) : null}
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121212",
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  loginTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 52,
    color: "#1E90FF",
    fontSize: 24,
  },
  input: {
    marginBottom: 12,
    backgroundColor: "#121212",
    color: "#FFFFFF",
  },
  errorText: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
    borderRadius: 4,
  },
  buttonContent: {
    backgroundColor: "#1E90FF",
    paddingVertical: 8,
  },
});
