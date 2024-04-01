import { router } from "expo-router";
import { Image, ImageBackground, TextInput, View } from "react-native";

import { useSession } from "../../src/providers/SessionProvider";
import { useMemo, useState } from "react";
import CodeInput from "@/components/CodeInput";
import { Button } from "@/components/Button";

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
          <Button
            disabled={!isEmailValid}
            onPress={() => {
              if (!isEmailValid) {
                return;
              }

              setStep("code");
            }}
            text="Login"
          />
        </View>
      )}
      {step === "code" && (
        <View className="flex-[0.4] flex-col justify-end items-end m-4">
          <CodeInput />
          <View className="flex flex-row gap-2">
            <Button
              disabled={!isEmailValid}
              onPress={() => {
                setStep("email");
              }}
              text="Cancel"
              primary={false}
              className="flex-1"
            />
            <Button
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
              text="Login"
              className="flex-1"
            />
          </View>
        </View>
      )}
    </View>
  );
}
