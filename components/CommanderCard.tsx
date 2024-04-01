import { Image } from "react-native";
import { Text, View } from "./Themed";
import { clsx } from "clsx";

export type CommanderCardProps = {
  image: string;
  name: string;
  containerClasses?: string;
  textClasses?: string;
};

export const CommanderCard = ({
  image,
  name,
  textClasses,
  containerClasses,
}: CommanderCardProps) => {
  return (
    <View className={clsx(["flex", containerClasses])}>
      <Image
        source={{ uri: image }}
        width={160}
        height={215}
        className="rounded-xl"
      />
      <Text className={clsx(["text-lg pl-2 pt-6 font-sg-reg", textClasses])}>
        {name}
      </Text>
    </View>
  );
};
