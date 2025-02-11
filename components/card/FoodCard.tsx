import {Button, SizableText, View, XStack, YStack} from "tamagui";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Image} from "react-native";
import {Colors} from "@/constants/Colors";
import {useRouter} from "expo-router";
import React from "react";

const FoodCard = () => {
    const router = useRouter();
    return (
        <YStack>
            <SizableText
                fontWeight="600"
                fontSize="$9"
                lineHeight="$8"
                textAlign="center"
                mb={15}
            >
                Alimentation
            </SizableText>
            <XStack
                justifyContent="center"
                borderRadius={20}
                h={220}
                position="relative"
                overflow="hidden"
                mx={5}
                bg={Colors.light.greenLight}
                py={10}
                px={15}
                gap={10}
            >
                <YStack w="55%" borderRadius={20} bg={Colors.light.greenDark}  position="relative" overflow="hidden">
                    <YStack
                        position="absolute"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        w="100%"
                        h="100%"
                        zIndex={1}
                        bg="rgba(0,0,0,0.25)"
                        p={10}
                    >
                    <View position="relative">
                        <Image
                            resizeMode="cover"
                            source={require("@/assets/images/new.png")}
                            style={{width: 50, height: 50}}
                        />
                    </View>

                    <YStack width="100%" justifyContent="flex-start">
                        <SizableText fontSize="$6" fontWeight="600" color="#fff" lineHeight="$7" textAlign="left">
                            Morning Bowl
                        </SizableText>
                        <SizableText fontSize={16} fontWeight="600"  color="#fff" textAlign="left">
                            Niveau : Facile
                        </SizableText>
                    </YStack>
                    </YStack>
                    <Image
                        resizeMode="cover"
                        source={require("@/assets/images/program/2.png")}
                        style={{width: "100%", height: "100%"}}
                    />
                </YStack>
                <YStack w="45%" borderRadius={20} bg={Colors.light.greenDark} p={15}>
                    <MaterialCommunityIcons name="silverware-fork-knife" size={30} color={Colors.light.greenLight} />
                    <SizableText
                        fontWeight="800"
                        fontSize="$9"
                        lineHeight="$6"
                        textAlign="left"
                        color={Colors.light.greenLight}
                    >
                        + de 50
                    </SizableText>
                    <SizableText
                        fontWeight="800"
                        fontSize="$9"
                        lineHeight="$6"
                        textAlign="left"
                        mb={15}
                        color="#fff"
                    >
                        recettes
                        saines.
                    </SizableText>
                    <Button bg="#FFF" borderRadius={28} >
                        <SizableText fontWeight="700" color={Colors.light.greenDark} fontSize={18}>
                            Decouvrir
                        </SizableText>
                    </Button>
                </YStack>
            </XStack>
        </YStack>
    );
};

export default FoodCard;