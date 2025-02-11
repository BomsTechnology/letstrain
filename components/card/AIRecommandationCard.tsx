import { Image } from "react-native";
import React from "react";
import { Button, SizableText, View, XStack, YStack } from "tamagui";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Colors } from "../../constants/Colors";
import { ButtonText } from "@/tamagui.config";

const AIRecommandationCard = () => {
  return (
    <YStack
      bg={Colors.light.redLight}
      p={15}
      borderRadius={20}
      alignItems="center"
    >
      <XStack
        justifyContent="center"
        borderRadius={20}
        h={220}
        position="relative"
        overflow="hidden"
        mx={5}
        borderWidth={1}
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
        />
        <XStack
          position="absolute"
          zIndex={1}
          py={2}
          pl={12}
          borderTopLeftRadius={15}
          borderBottomLeftRadius={15}
          pr={8}
          right={0}
          top={20}
          gap={5}
          bg="#000"
          alignItems="center"
        >
          <FontAwesome6 name="clock-rotate-left" size={14} color="#fff" />
          <SizableText color="#fff">4 semaines</SizableText>
        </XStack>
        <Image
          resizeMode="cover"
          source={require("@/assets/images/quizz/overview.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <XStack position="absolute" bottom={30} justifyContent="space-between" px={20} zIndex={1} w="100%">
          <XStack gap={5} alignItems="center">
            <SizableText fontSize={16} fontWeight="600" color="#fff">
              Cardio
            </SizableText>
            <XStack gap={2}>
              <Fontisto name="blood-drop" size={12} color="#fff" />
              <Fontisto name="blood-drop" size={12} color="#fff" />
              <Fontisto
                name="blood-drop"
                size={12}
                color="rgba(255,255,255,0.5)"
              />
              <Fontisto
                name="blood-drop"
                size={12}
                color="rgba(255,255,255,0.5)"
              />
              <Fontisto
                name="blood-drop"
                size={12}
                color="rgba(255,255,255,0.5)"
              />
            </XStack>
          </XStack>
          <XStack gap={5} alignItems="center">
            <SizableText fontSize={16} fontWeight="600" color="#fff">
              Musculation
            </SizableText>
            <XStack gap={2}>
              <Fontisto name="star" size={11} color="#fff" />
              <Fontisto name="star" size={11} color="#fff" />
              <Fontisto name="star" size={11} color="#fff" />
              <Fontisto name="star" size={11} color="rgba(255,255,255,0.5)" />
              <Fontisto name="star" size={11} color="rgba(255,255,255,0.5)" />
            </XStack>
          </XStack>
        </XStack>
      </XStack>
      <YStack
        gap={5}
        maxWidth="87%"
        mt={-20}
        justifyContent="center"
        alignItems="center"
      >
        
        <XStack w="100%" bg={Colors.light.red} p={10} borderRadius={20}>
          <SizableText
            w="100%"
            fontSize={16}
            fontWeight="600"
            color="#fff"
            textAlign="center"
          >
            Recommandation de l’IA
          </SizableText>
        </XStack>
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

export default AIRecommandationCard;
