import { TouchableOpacity } from "react-native";
import { Text } from "./Themed";
import clsx from "clsx";

export type ButtonProps = {
  disabled?: boolean;
  onPress: () => void;
  text: string;
  primary?: boolean;
  className?: string;
};

export const Button = ({
  disabled,
  onPress,
  text,
  primary = true,
  className,
}: ButtonProps) => {
  if (!primary) {
    return (
      <TouchableOpacity
        className={clsx([
          "bg-[#3D404A] rounded-xl p-4 h-16 mb-4 w-full",
          className,
        ])}
        disabled={disabled}
        onPress={onPress}
      >
        <Text className="text-white text-lg text-center">{text}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      className={clsx([
        "bg-[#1A5CE5] rounded-xl p-4 h-16 mb-4 w-full",
        className,
      ])}
      disabled={disabled}
      onPress={onPress}
    >
      <Text className="text-white text-lg text-center">{text}</Text>
    </TouchableOpacity>
  );
};
