import { YStack, XStack, SizableText } from "tamagui";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Button, ButtonText } from "@/tamagui.config";
import PagerView from "react-native-pager-view";
import { useRef, useState } from "react";
import { Link } from "expo-router";

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
  const pageRef = useRef<PagerView>(null);
  return (
    <ImageBackground source={datas[currentPage].image} style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          "transparent",
          "rgba(255,255,255, 0.3)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
        ]}
        style={[StyleSheet.absoluteFillObject]}
      />
      <SafeAreaView style={{ flex: 1, padding: 24 }}>
        <XStack justifyContent="center">
          <Image source={require("@/assets/images/logo.png")} />
        </XStack>
        <PagerView
          ref={pageRef}
          overScrollMode="auto"
          initialPage={0}
          style={{ flex: 1 }}
          onPageScroll={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {datas.map((item, index) => (

            <YStack flex={1} justifyContent="flex-end" key={item.id}>
              <SizableText fontSize={22} fontWeight="500" color="#000" mx={10}>
                {item.title}
              </SizableText>
              <XStack
                bg={item.color}
                px={8}
                py={4}
                borderRadius={20}
                alignSelf="flex-start"
              >
                <SizableText fontSize={22} fontWeight="500" color="#fff">
                  {item.subtitle}
                </SizableText>
              </XStack>
              <SizableText fontWeight="400" fontSize={16} mt={10}>
                {item.description}
              </SizableText>
            </YStack>
          ))}
        </PagerView>
        <XStack my={20} justifyContent="center" gap={5} alignItems="center">
          {datas.map((item, index) => (
            <XStack
              h={3}
              borderRadius={5}
              minWidth={30}
              maxWidth={50}
              bg={currentPage === index ? Colors.light.black : "#888888"}
              key={item.id}
            />
          ))}
        </XStack>
        <YStack gap={15}>
          <Link href={{ pathname: "/login" }} asChild>
            <Button bg={Colors.light.black} shadowOpacity={0}>
              <ButtonText>Decouvrir</ButtonText>
            </Button>
          </Link>
          <Link href={{ pathname: "/login" }} asChild>
            <Button bg="#fff"  shadowOpacity={0} borderWidth={1}>
              <ButtonText color={Colors.light.black}>
                J'ai déjà un compte
              </ButtonText>
            </Button>
          </Link>
        </YStack>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Page;
