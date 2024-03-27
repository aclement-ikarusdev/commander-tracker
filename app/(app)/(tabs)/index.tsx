import { StyleSheet } from "react-native";

import Commanders from "@/components/Commanders";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  return (
    <SafeAreaView className="flex">
      <View className="flex p-2 h-full">
        <Text className="font-sg-bold text-xl flex text-center p-6">
          Welcome Username!
        </Text>
        <View className="flex p-2">
          <Text className="font-sg-bold text-2xl flex pt-2 pb-4">
            Your Commanders
          </Text>
          <Commanders />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
