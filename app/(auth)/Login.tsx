import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { TextInput, Button, Title, HelperText } from "react-native-paper";

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
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>
      <TextInput
        label="Username"
        mode="outlined"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      {errorMessage ? (
        <HelperText type="error" visible={true} style={styles.errorText}>
          {errorMessage}
        </HelperText>
      ) : null}
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  errorText: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
  },
});
