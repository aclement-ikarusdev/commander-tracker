import Commanders from "@/components/Commanders";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/Button";
import { CommanderCard } from "@/components/CommanderCard";
import { ScrollView } from "react-native";

export default function TabOneScreen() {
  return (
    <SafeAreaView className="flex">
      <ScrollView className="flex h-full bg-[#1C1C21]">
        <Text className="font-sg-bold text-xl flex text-center p-6">
          Welcome Username!
        </Text>
        <View className="flex p-2">
          <Text className="font-sg-bold text-2xl flex pt-2 pb-4">
            Your Commanders
          </Text>
          <Commanders />
        </View>
        <View className="flex flex-row gap-2 p-2 pt-6">
          <Button
            onPress={() => {
              console.log("Add a Commander");
            }}
            text="Add a Commander"
            className="flex-1"
          />
        </View>
        <Text className="font-sg-bold text-2xl flex pt-2 pb-4">
          Next Suggested Commander
        </Text>
        <View className="flex p-2 items-center">
          <CommanderCard
            name={"Commander 1"}
            image="https://via.placeholder.com/150"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
