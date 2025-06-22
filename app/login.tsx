import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import {H2, Button, SizableText, YStack, Separator, XStack} from "tamagui";
import Input from "@/components/form/Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import ForgotPasswordModal from "@/components/modal/ForgotPasswordModal";

const LoginPage = () => {
  return (
    <LinearGradient
      colors={[
        Colors.light.red,
        Colors.light.red,
        Colors.light.red,
        "rgb(255,255,255)",
        "rgb(255,255,255)",
      ]}
      style={[StyleSheet.absoluteFillObject]}
    >
      <SafeAreaView
        style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 30 }}
      >
        <H2 textAlign="center" color="#fff">
          Connexion
        </H2>
        <SizableText fontSize={18} mt={20} textAlign="center" color="#fff">
          Lorem ipsum dolor sit amet.
        </SizableText>
        <YStack mt={30} gap={10} >
          <XStack>
          <Input icon={{ name: "mail-outline", size: 20 }} placeholder="Email" color="#fff"
                 placeholderTextColor="#fff" />
          </XStack>
          <XStack>
          <Input
            eyeBtn
            icon={{ name: "lock-closed-outline" }}
            placeholder="Mot de passe"
            color="#fff"
            placeholderTextColor="#fff"
          />
          </XStack>
        </YStack>
        <ForgotPasswordModal />
        <Link href={{ pathname: "/(home)/(tabs)/program" }} asChild>
        <Button bg="#fff" borderRadius={28} mt={20} size="$5">
          <SizableText fontWeight="500" fontSize={16}>
            Se connecter
          </SizableText>
        </Button>
        </Link>
        <Separator my={10} />
        <YStack gap={10}>
          <Button bg="#000" borderRadius={28} size="$5">
            <Ionicons name="logo-apple" size={20} color="#fff" />
            <SizableText fontWeight="500" color="#fff" fontSize={16}>
              Continuer avec Apple
            </SizableText>
          </Button>
          <Button bg="#126CFF" borderRadius={28} size="$5">
            <Ionicons name="logo-facebook" size={20} color="#fff" />
            <SizableText fontWeight="500" color="#fff" fontSize={16}>
              Continuer avec Facebook
            </SizableText>
          </Button>
          <Button bg="#FF5540" borderRadius={28} size="$5">
            <Ionicons name="logo-google" size={20} color="#fff" />
            <SizableText fontWeight="500" color="#fff" fontSize={16}>
              Continuer avec Gmail
            </SizableText>
          </Button>
        </YStack>
        <Link href={{ pathname: "/register" }} asChild>
          <SizableText
            textAlign="center"
            mt={15}
            textDecorationLine="underline"
            color="#000"
            fontWeight="500"
          >
            S'inscrire avec mon email
          </SizableText>
        </Link>
        
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginPage;
