import React from "react";
import { FlatList, Image } from "react-native";

import { Text, View } from "./Themed";

export default function Commanders() {
  const [commanders, setCommanders] = React.useState([
    {
      name: "Commander 1",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Commander 2",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Commander 3",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Commander 4",
      image: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <View className="flex">
      <FlatList
        data={commanders}
        horizontal={true}
        renderItem={({ item }) => (
          <View className="flex">
            <Image
              source={{ uri: item.image }}
              width={160}
              height={215}
              className="rounded-xl"
            />
            <Text className="text-lg pl-2 pt-6 font-sg-reg" style={{}}>
              {item.name}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
      />
    </View>
  );
}
