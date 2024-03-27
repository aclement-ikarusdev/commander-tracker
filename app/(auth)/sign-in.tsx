import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useSession } from "../../src/providers/SessionProvider";
import { useMemo, useState } from "react";
import CodeInput from "@/components/CodeInput";

export default function SignIn() {
  const { signIn } = useSession();
  const [email, onChangeText] = useState<string>();
  const [step, setStep] = useState<"code" | "email">("email");

  const isEmailValid = useMemo(() => {
    return email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  }, [email]);

  return (
    <View className="flex flex-1 justify-center align-middle bg-slate-500">
      <ImageBackground
        source={require("../../assets/images/background.png")}
        resizeMode="cover"
        className="absolute top-0 left-0 right-0 bottom-0 z-0 w-full h-full"
      />
      <View className="flex-[0.6] flex-column justify-end items-center">
        <Image
          source={require("../../assets/images/logo-with-title.png")}
          className="w-96 h-96 z-10"
        />
      </View>
      {step === "email" && (
        <View className="flex-[0.4] flex-col justify-end items-end m-4">
          <TextInput
            className="bg-[#292E38] rounded-xl p-4 h-16 w-full mb-4 text-lg text-white"
            editable
            autoComplete="email"
            onChangeText={(text: string) => onChangeText(text)}
            value={email}
            placeholder="Enter your email address"
            placeholderTextColor={"#9EA6B8"}
            style={{ padding: 10 }}
          />
          <TouchableOpacity
            className="bg-[#1A5CE5] rounded-xl p-4 h-16 w-full mb-4"
            disabled={!isEmailValid}
            onPress={() => {
              if (!isEmailValid) {
                return;
              }

              setStep("code");
            }}
          >
            <Text className="text-white text-lg text-center">Login</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === "code" && (
        <View className="flex-[0.4] flex-col justify-end items-end m-4">
          <CodeInput />
          <View className="flex flex-row gap-2">
            <TouchableOpacity
              className="bg-[#3D404A] rounded-xl p-4 h-16 mb-4 flex-1"
              disabled={!isEmailValid}
              onPress={() => {
                setStep("email");
              }}
            >
              <Text className="text-white text-lg text-center">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#1A5CE5] rounded-xl p-4 h-16 mb-4 flex-1"
              disabled={!isEmailValid}
              onPress={() => {
                if (!isEmailValid || !email) {
                  return;
                }

                signIn(email);
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
            >
              <Text className="text-white text-lg text-center">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
