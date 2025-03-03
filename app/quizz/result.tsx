import CircularProgress from "@/components/CircularProgress";
import { Colors } from "@/constants/Colors";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import { useFont } from "@shopify/react-native-skia";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { ScrollView, SizableText, XStack, YStack, View } from "tamagui";

const RADIUS = 120;
const STROKE_WIDTH = 7;

const result = () => {
  const font = useFont(Montserrat_500Medium, 50);
  const [progress, setProgress] = useState(0);

  const renderItem = (text: string, active: boolean) => {
    return (
      <XStack
          gap={5}
          alignItems="center"
          width="100%"
          borderWidth={1}
          borderColor={active ? Colors.light.red : "#fff"}
          py={10}
          px={20}
          borderRadius={50}
        >
          {active ? (
            <Ionicons
              name="checkmark-circle-sharp"
              size={20}
              color={Colors.light.red}
            />
          ) : (
            <View w={20} h={20} borderRadius={10} borderWidth={1} />
          )}
          <SizableText fontSize={16} fontWeight="500">
            {text}
          </SizableText>
        </XStack>
    );
  } 

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!font) {
    return <View />;
  }

  if(progress === 9) {
    return <Redirect href="/quizz/overview" />;
  }

  return (
    <ScrollView
      flex={1}
      backgroundColor="#fff"
      borderTopWidth={1}
      borderTopColor={Colors.light.red}
    >
      <YStack
        pt={50}
        pb={40}
        px={60}
        shadowOffset={{
          width: 0,
          height: 2,
        }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}
        shadowColor={Colors.light.red}
        borderBottomEndRadius={50}
        borderBottomStartRadius={50}
        bg="#fff"
        mb={20}
      >
        <SizableText
          fontWeight="600"
          fontSize="$9"
          lineHeight="$7"
          textAlign="center"
        >
          Construisons ton programme
        </SizableText>
        <SizableText
          fontWeight="600"
          fontSize="$9"
          lineHeight="$7"
          color={Colors.light.red}
          textAlign="center"
        >
          personnalisé
        </SizableText>
        <SizableText
          textAlign="center"
          mt={10}
          fontSize={16}
          color={Colors.light.text}
        >
          Il sera prêt dans quelques secondes...
        </SizableText>
      </YStack>

      <YStack position="relative" justifyContent="center" alignItems="center">
        <Image
          source={require("@/assets/images/logo2.png")}
          style={{
            position: "absolute",
            height: 100,
            width: 100,
            opacity: 0.1,
          }}
        />
        <CircularProgress
          font={font}
          strokeWidth={STROKE_WIDTH}
          radius={RADIUS}
          duration={8500}
        />
      </YStack>
      <YStack p={40} gap={10} justifyContent="center" alignItems="center">
        {renderItem("Analyse de ton profil", progress >= 1)}
        {renderItem("Estimation de ton âge métabolique", progress >= 3)}
        {renderItem("Adaptation du plan à tes disponibilités", progress >= 5)}
        {renderItem("Creation de ton espace personnel", progress >= 7)}
      </YStack>
      <View h={100} />
    </ScrollView>
  );
};

export default result;
