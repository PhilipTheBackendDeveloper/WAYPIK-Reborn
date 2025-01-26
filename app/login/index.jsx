import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#F18F05" }}>
      {/* Centered Title */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Lalezar", // Ensure this font is loaded
            fontSize: 70,
            fontWeight: "400",
            color: "#FFFFFF",
            lineHeight: 109.69,
            textAlign: "center",
          }}
        >
          WAYPIK
        </Text>
      </View>

      {/* Footer Section */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingVertical: 20,
          paddingHorizontal: 16,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "inter", // Ensure this font is loaded
            height: 50,
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#000000",
          }}
        >
          Get started
        </Text>
        <Pressable
          onPress={() => router.push("/login/sign-up")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F18F05",
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 8,
            width: "80%",
            height: 50,
            marginBottom: 29,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: "bold",
              marginRight: 8,
            }}
          >
            Continue
          </Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    </View>
  );
}
