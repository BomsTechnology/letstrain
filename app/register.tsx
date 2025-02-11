import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import {
  H2,
  Button,
  SizableText,
  YStack,
  Checkbox,
  XStack,
  Label,
} from "tamagui";
import Input from "@/components/form/Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const RegisterPage = () => {
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
          Inscription
        </H2>
        <SizableText fontSize={18} mt={20} textAlign="center" color="#fff">
          Lorem ipsum dolor sit amet.
        </SizableText>
        <YStack mt={30} gap={10}>
          <Input icon={{ name: "person-outline" }} placeholder="Prénom" />
          <Input icon={{ name: "person-outline" }} placeholder="Nom" />
          <Input icon={{ name: "mail-outline" }} placeholder="Email" />
          <Input
            eyeBtn
            icon={{ name: "lock-closed-outline" }}
            placeholder="Mot de passe"
          />
        </YStack>
        <XStack width={300} alignItems="center" mt={15} gap="$3">
          <Checkbox id="consent" size="$4">
            <Checkbox.Indicator>
              <Ionicons name="checkmark-outline" size={15} />
            </Checkbox.Indicator>
          </Checkbox>

          <Label htmlFor="consent" size="$3" fontWeight='400' color='#fff' lineHeight="$1">
            En continuant, tu acceptes notre <SizableText fontWeight='400' fontSize={12} color='#fff' textDecorationLine="underline">
              Politique de confidentialité
            </SizableText> et <SizableText color='#fff' fontWeight='400' fontSize={12} textDecorationLine="underline">
              Conditions d’utilisation
            </SizableText>
            .
          </Label>
        </XStack>

        <Button bg="#fff" borderRadius={28} mt={20} size="$5">
          <SizableText fontWeight="500" fontSize={16}>
            S'inscrire
          </SizableText>
        </Button>
        <Link href={{ pathname: "/login" }} asChild>
          <Button bg="#000" borderRadius={28} size="$5" mt={10}>
            <SizableText fontWeight="500" color="#fff" fontSize={16}>
              J'ai deja un compte
            </SizableText>
          </Button>
        </Link>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterPage;
