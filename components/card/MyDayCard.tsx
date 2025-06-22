import { Image } from "react-native";
import React from "react";
import { Button, SizableText, View, XStack, YStack } from "tamagui";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Colors } from "../../constants/Colors";
import { ButtonText } from "@/tamagui.config";

const MyDayCard = () => {
  return (
    <YStack
      bg={Colors.light.redLight}
      p={15}
      borderRadius={20}
      alignItems="center"
    >
      <XStack zIndex={50} bg={Colors.light.red} px={12} py={6} borderRadius={20}>
        <SizableText
            fontSize={14}
            fontWeight="700"
            color="#fff"
            textAlign="center"
        >
          SEANCE DU JOUR
        </SizableText>
      </XStack>
      <XStack
        justifyContent="center"
        borderRadius={20}
        h={200}
        position="relative"
        overflow="hidden"
        mx={5}
        mt={-15}
        borderWidth={1}
        flex={1}
        borderColor={Colors.light.redDark}
      >
        <View
          position="absolute"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100%"
          zIndex={1}
          bg="rgba(0,0,0,0.25)"
        >
          <SizableText fontSize="$8" maxWidth="90%" fontWeight="700" textAlign="center" color="#fff">Perte de masse grasse</SizableText>
        </View>

        <Image
            resizeMode="cover"
            source={require("@/assets/images/quizz/overview.png")}
            style={{ width: "100%", height: "100%" }}
        />
        <XStack position="absolute" flex={1} gap={5}  bottom={30} justifyContent="space-between" px={20} zIndex={1}>
          <XStack gap={5} flex={1}  alignItems="center">
            <SizableText fontSize={14} fontWeight="600" color="#fff">
              Cardio
            </SizableText>
            <XStack gap={2} flex={1}>
              <Fontisto name="blood-drop" size={10} color="#fff" />
              <Fontisto name="blood-drop" size={10} color="#fff" />
              <Fontisto
                name="blood-drop"
                size={10}
                color="rgba(255,255,255,0.5)"
              />
              <Fontisto
                name="blood-drop"
                size={10}
                color="rgba(255,255,255,0.5)"
              />
              <Fontisto
                name="blood-drop"
                size={10}
                color="rgba(255,255,255,0.5)"
              />
            </XStack>
          </XStack>
          <XStack gap={5} flex={1} alignItems="center">
            <SizableText fontSize={14} fontWeight="600" color="#fff">
              Musculation
            </SizableText>
            <XStack gap={2} flex={1}>
              <Fontisto name="star" size={9} color="#fff" />
              <Fontisto name="star" size={9} color="#fff" />
              <Fontisto name="star" size={9} color="#fff" />
              <Fontisto name="star" size={9} color="rgba(255,255,255,0.5)" />
              <Fontisto name="star" size={9} color="rgba(255,255,255,0.5)" />
            </XStack>
          </XStack>
        </XStack>
      </XStack>
      <YStack
        gap={5}
        maxWidth="87%"
        mt={5}
        justifyContent="center"
        alignItems="center"
      >
        

        <SizableText textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
        </SizableText>
        <Button
          bg={Colors.light.black}
          borderRadius={28}
          shadowOpacity={0}
          borderWidth={1}
        >
          <ButtonText color="#fff" textAlign="center">
            Commencer
          </ButtonText>
        </Button>
      </YStack>
    </YStack>
  );
};

export default MyDayCard;
