import React from "react";
import { FlatList, Image } from "react-native";

import { Text, View } from "./Themed";
import { CommanderCard } from "./CommanderCard";

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
        renderItem={({ item }) => <CommanderCard {...item} />}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
      />
    </View>
  );
}
