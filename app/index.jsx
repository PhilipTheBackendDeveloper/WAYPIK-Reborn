import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F18F05", // Orange background
      }}
    >
      <Text
        style={{
          fontFamily: "Lalezar", // Font set to Lalezar
          fontSize: 70, // Font size in px
          fontWeight: "400", // Font weight
          color: "#FFFFFF", // White text color
          lineHeight: 109.69, // Line height
          textAlign: "center",
        }}
      >
        WAYPIK
      </Text>

      {/* Add a clickable text/button to navigate to the login */}
      <Pressable
        onPress={() => router.push("/login")} // Navigate to the login screen
        style={{
          marginTop: 20,
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: "#F18F05",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Go to Login
        </Text>
      </Pressable>
    </View>
  );
}
