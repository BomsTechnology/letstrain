import {Button, SizableText, View, XStack, YStack} from "tamagui";
import {Ionicons} from "@expo/vector-icons";
import {Image} from "react-native";
import {Colors} from "@/constants/Colors";
import {useRouter} from "expo-router";
import React from "react";

const MindsetCard = () => {
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
                Mindset
            </SizableText>
            <XStack
                justifyContent="center"
                borderRadius={20}
                h={250}
                position="relative"
                overflow="hidden"
                mx={5}
                bg={Colors.light.blueLight}
                py={10}
                px={15}
                flex={1}
                gap={10}
            >
                <YStack flex={1} borderRadius={20} bg={Colors.light.blueDark} p={15}>
                    <Ionicons name="cloud" size={30} color={Colors.light.blueLight} />
                    <SizableText
                        fontWeight="800"
                        fontSize="$8"
                        lineHeight="$6"
                        textAlign="left"
                        color={Colors.light.blueLight}
                    >
                        Un esprit sain,
                    </SizableText>
                    <SizableText
                        fontWeight="800"
                        fontSize="$8"
                        lineHeight="$6"
                        textAlign="left"
                        mb={5}
                        color="#fff"
                    >
                        dans un coprs sain.
                    </SizableText>
                    <Button bg="#FFF" flex={1} borderRadius={28} >
                        <SizableText textAlign="center" flex={1} fontWeight="700" color={Colors.light.blueDark} fontSize={16}>
                            Decouvrir
                        </SizableText>
                    </Button>
                </YStack>
                <YStack flex={1} borderRadius={20} bg={Colors.light.blueDark}  position="relative" overflow="hidden">
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
                        <Ionicons name="play" size={30} color={Colors.light.blueLight} />

                    <YStack width="100%" justifyContent="flex-start">
                        <SizableText fontSize="$6" fontWeight="600" color="#fff" lineHeight="$7" textAlign="left">
                            Podcast #1
                        </SizableText>
                        <XStack gap={2} alignItems="center">
                            <Ionicons name="timer" size={20} color={Colors.light.blueLight} />
                            <SizableText fontSize={16} fontWeight="600"  color="#fff" textAlign="left">
                                10 min
                            </SizableText>
                        </XStack>

                    </YStack>
                    </YStack>
                    <Image
                        resizeMode="cover"
                        source={require("@/assets/images/program/1.png")}
                        style={{width: "100%", height: "100%"}}
                    />
                </YStack>

            </XStack>
        </YStack>
    );
};

export default MindsetCard;