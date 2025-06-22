import { YStack, XStack, Button, View } from "tamagui";
import { StyleSheet, Image } from "react-native";
import { useSafeAreaInsets} from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { ButtonText } from "@/tamagui.config";
import PagerView from "react-native-pager-view";
import { useRef, useState } from "react";
import { Link } from "expo-router";
import OnboardingPage from "@/components/onboarding/OnboardingPage";

const datas = [
  {
    id: 1,
    title: "Atteint ton objectif :",
    subtitle: "Perte de masse grasse",
    description:
      "Ton parcours sain, personnalisé et durable commence maintenant. Déjà +10 000 femmes transformées !",
    color: Colors.light.red,
    image: require("@/assets/images/onboarding/1.png"),
  },
  {
    id: 2,
    title: "Séances pour",
    subtitle: "toutes.",
    description:
      "Des entraînements optimisés par notre IA pour brûler les graisses et sculpter ton corps, adaptés à ton rythme, ton niveau, et ton âge.",
    color: Colors.light.red,
    image: require("@/assets/images/onboarding/2.png"),
  },
  {
    id: 3,
    title: "Alimentation",
    subtitle: "personnalisée.",
    description:
      "Un plan alimentaire pensé pour les femmes, adapté à tes goûts et ton mode de vie, pour perdre du gras facilement et avec plaisir.",
    color: Colors.light.green,
    image: require("@/assets/images/onboarding/3.png"),
  },
  {
    id: 4,
    title: "Mindset",
    subtitle: "renforcé.",
    description:
      "Ton mental, ta force. Notre IA t’aide à rester motivée et à transformer chaque défi en succès.",
    color: Colors.light.blueDark,
    image: require("@/assets/images/onboarding/4.png"),
  },
  {
    id: 5,
    title: "Perds du poids en",
    subtitle: "En toute confiance",
    description: "Des résultats durables, pensés pour toi.",
    color: Colors.light.red,
    image: require("@/assets/images/onboarding/5.png"),
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const {top, bottom} = useSafeAreaInsets()
  const pageRef = useRef<PagerView>(null);
  return (

      <YStack position="relative" flex={1}>
        <XStack justifyContent="center" position="absolute" zIndex={10}
                top={top + 20}
                width="100%"
                >
          <Image source={require("@/assets/images/logo.png")} />
        </XStack>
        <YStack width="100%" gap={5} position="absolute" bottom={bottom + 20} px={20} zIndex={10} >
          <XStack mb={10} justifyContent="center" px={10} alignItems="center" gap={5}>
            {datas.map((item, index) => (
                <View flex={1} key={index} bg={currentPage === index ? Colors.light.black :'#888888' } width={5} h={3}></View>
            ))}
          </XStack>
          <Link href={{ pathname: "/quizz" }} asChild>
            <Button borderRadius={30} bg={Colors.light.black} shadowOpacity={0}>
              <ButtonText>Decouvrir</ButtonText>
            </Button>
          </Link>
          <Link href={{ pathname: "/login" }} asChild>
            <Button bg="#fff" borderRadius={30}  shadowOpacity={0} borderWidth={1} borderColor="#000">
              <ButtonText color={Colors.light.black}>
                J'ai déjà un compte
              </ButtonText>
            </Button>
          </Link>
        </YStack>
        <PagerView
          ref={pageRef}
          overScrollMode="auto"
          initialPage={0}
          style={{ flex: 1 }}
          onPageScroll={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {datas.map((item, index) => (
              <OnboardingPage key={item.id} image={item.image} title={item.title} color={item.color} subtitle={item.subtitle} description={item.description} />
          ))}
        </PagerView>

      </YStack>
  );
};

export default Page;

const styles = StyleSheet.create({
  logo: {

  }
})


