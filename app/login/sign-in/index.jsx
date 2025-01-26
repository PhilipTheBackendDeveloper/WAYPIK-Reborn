import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Image, StyleSheet, TouchableOpacity } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  const [country, setCountry] = useState(null);
  const [callingCode, setCallingCode] = useState("+233");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSelect = (selectedCountry) => {
    setCountry(selectedCountry);
    setCallingCode(`+${selectedCountry.callingCode[0]}`);
  };

  const handlePhoneNumberChange = (text) => {
    // Limit input to 10 digits
    const trimmedText = text.replace(/[^0-9]/g, "").slice(0, 10);
    setPhoneNumber(trimmedText);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Welcome Back!</Text>

      {/* Input Fields */}
      

      {/* Phone Number Input */}
      <View style={styles.phoneInput}>
        <CountryPicker
          withFlag
          withCallingCode
          withFilter
          withAlphaFilter
          onSelect={onSelect}
          countryCode={country?.cca2 || "GH"} // Default to Ghana
        />
        <Text style={styles.dropdownArrow}>▼</Text>
        <Text style={styles.countryCode}>{callingCode}</Text>
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor="#716B6B"
          keyboardType="numeric"
          style={styles.textInput}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>

      {/* Sign-up Button */}
      <Pressable style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Log in</Text>
      </Pressable>

      {/* Divider */}
      <Text style={styles.orText}>or</Text>

      {/* Social Media Login */}
      <View style={styles.socialMediaIcons}>
        <Image source={require("../../../assets/images/google.png")} style={styles.icon} />
        <Image source={require("../../../assets/images/facebook.jpeg")} style={styles.icon} />
        <Image source={require("../../../assets/images/apple.jpeg")} style={styles.icon} />
        <Image source={require("../../../assets/images/twitter.png")} style={styles.icon} />
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Don't have an Account{" "}
        <TouchableOpacity onPress={() => router.push("login/sign-up")}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#FCF6F6",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#F18F05",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  phoneInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F18F05",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  countryCode: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    padding: 0,
    marginLeft: 10,
  },
  signupButton: {
    backgroundColor: "#F18F05",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  signupButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    color: "#A9A9A9",
    marginBottom: 20,
  },
  socialMediaIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "#A9A9A9",
  },
  loginText: {
    color: "#F18F05",
    fontWeight: "bold",
  },
});
