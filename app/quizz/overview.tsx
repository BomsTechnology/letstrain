import { Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Button, ScrollView, SizableText, XStack, YStack, View } from "tamagui";
import { ButtonText } from "@/tamagui.config";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";

const overview = () => {
  return (
    <>
      <LinearGradient
        colors={[
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          Colors.light.red,
        ]}
        style={[StyleSheet.absoluteFillObject]}
      />

      <ScrollView
        flex={1}
        borderTopWidth={1}
        borderTopColor={Colors.light.red}
        px={40}
      >
        <YStack p={30} mb={20}>
          <SizableText
            fontWeight="600"
            fontSize="$9"
            lineHeight="$7"
            textAlign="center"
          >
            Ton programme est
          </SizableText>
          <SizableText
            fontWeight="600"
            fontSize="$9"
            lineHeight="$7"
            color={Colors.light.red}
            textAlign="center"
          >
            prêt ! 🎉
          </SizableText>
        </YStack>
        <XStack
          justifyContent="center"
          borderRadius={20}
          h={200}
          position="relative"
          overflow="hidden"
          mx={5}
        >
          <YStack
            position="absolute"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
            zIndex={1}
            bg="rgba(0,0,0,0.25)"
          >
            <SizableText
              fontWeight="600"
              fontSize="$9"
              lineHeight="$7"
              color="#fff"
              textAlign="center"
            >
              FOCUS FESSIERS
            </SizableText>
            <SizableText textAlign="center" mt={10} fontSize={16} color="#fff">
              Sans équipements
            </SizableText>
          </YStack>
          <Image
            resizeMode="cover"
            source={require("@/assets/images/quizz/overview.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </XStack>

        <YStack position="relative" my={50} overflowX="hidden" p={5}>
          <View
            w="100%"
            h="100%"
            bg={Colors.light.red}
            borderRadius={20}
            transform={[{ rotate: "2deg" }]}
            position="absolute"
          />
          <YStack
            w="100%"
            bg="#fff"
            shadowOffset={{
              width: 0,
              height: 1,
            }}
            shadowOpacity={0.2}
            shadowRadius={1.41}
            elevation={1}
            borderRadius={20}
            px={15}
          >
            <XStack
              py={15}
              borderBottomColor={Colors.light.red}
              borderBottomWidth={1}
              alignItems="center"
              gap={10}
            >
              <View bg="#F5F5F5" p={10} borderRadius={7}>
                <MaterialIcons
                  name="timer"
                  size={20}
                  color={Colors.light.red}
                />
              </View>
              <YStack>
                <SizableText
                  fontWeight="400"
                  fontSize="$2"
                  lineHeight="$1"
                  color="#888888"
                >
                  Durée :
                </SizableText>
                <SizableText fontWeight="500" fontSize="$6" lineHeight="$1">
                  12 Semaines
                </SizableText>
              </YStack>
            </XStack>
            <XStack
              py={15}
              borderBottomColor={Colors.light.red}
              borderBottomWidth={1}
              alignItems="center"
              gap={10}
            >
              <View bg="#F5F5F5" p={10} borderRadius={7}>
                <Foundation
                  name="target-two"
                  size={20}
                  color={Colors.light.red}
                />
              </View>
              <YStack>
                <SizableText
                  fontWeight="400"
                  fontSize="$2"
                  lineHeight="$1"
                  color="#888888"
                >
                  Objectif :
                </SizableText>
                <SizableText fontWeight="500" fontSize="$6" lineHeight="$1">
                  Perte de gras
                </SizableText>
              </YStack>
            </XStack>
            <XStack py={15} alignItems="center" gap={10}>
              <View bg="#F5F5F5" p={10} borderRadius={7}>
                <FontAwesome5
                  name="weight-hanging"
                  size={20}
                  color={Colors.light.red}
                />
              </View>
              <YStack>
                <SizableText
                  fontWeight="400"
                  fontSize="$2"
                  lineHeight="$1"
                  color="#888888"
                >
                  Programme :
                </SizableText>
                <SizableText fontWeight="500" fontSize="$6" lineHeight="$1">
                  Débutant
                </SizableText>
              </YStack>
            </XStack>
          </YStack>
        </YStack>

        <Link href={{ pathname: "/(home)/(tabs)/program" }} asChild>
          <Button
            bg={Colors.light.red}
            borderRadius={28}
            shadowOpacity={0}
            borderWidth={1}
          >
            <ButtonText color="#fff">Decouvrir mon plan</ButtonText>
          </Button>
        </Link>
      </ScrollView>
    </>
  );
};

export default overview;
