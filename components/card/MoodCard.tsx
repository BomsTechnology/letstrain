import {Image, StyleSheet} from "react-native";
import React from "react";
import {Button, SizableText, View, XStack, YStack} from "tamagui";
import {Colors} from "../../constants/Colors";
import {ButtonText} from "@/tamagui.config";
import {LinearGradient} from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const MyDayCard = () => {
    return (
        <YStack alignItems="center" borderRadius={25} p={15} position="relative" mt={20} borderWidth={1}
                borderColor={Colors.light.blue}>
            <LinearGradient
                colors={[
                    Colors.light.blueDark,
                    Colors.light.blueDark,
                    Colors.light.blue,
                ]}
                style={[StyleSheet.absoluteFillObject, {borderRadius: 25}]}
            />
            <XStack zIndex={50} mt={-30} mb={10} bg={Colors.light.blue} alignItems="center" gap={5} px={12} py={6}
                    borderRadius={20}>
                <Ionicons name="headset" size={18} color={Colors.light.blueDark}/>
                <SizableText
                    fontSize={13}
                    fontWeight="500"
                    color={Colors.light.blueDark}
                    textAlign="center"
                >
                    On a le podcast parfait pour toi
                </SizableText>
            </XStack>
            <XStack
                justifyContent="center"
                borderRadius={20}
                h={150}
                position="relative"
                overflow="hidden"
                mx={5}
                flex={1}
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
                    <SizableText fontSize={30} lineHeight="$8" maxWidth="80%" fontWeight="700" textAlign="center"
                                 color="#fff">
                        RÉUSSIR À SE DÉPASSER</SizableText>
                </View>

                <Image
                    resizeMode="cover"
                    source={require("@/assets/images/mood/podcastcard.jpg")}
                    style={{width: "100%", height: "100%"}}
                />
            </XStack>
            <YStack
                gap={15}
                maxWidth="87%"
                mt={15}
                justifyContent="center"
                alignItems="center"
            >

                <XStack gap={10}>
                    <XStack zIndex={50} bg={Colors.light.blue} alignItems="center" gap={5} px={12} py={6}
                            borderRadius={20}>
                        <SizableText
                            fontSize={18}
                            fontWeight="500"
                            color={Colors.light.blueDark}
                            textAlign="center"
                        >
                            💫 Populaire
                        </SizableText>
                    </XStack>
                    <XStack zIndex={50} bg="#fff" alignItems="center" gap={5} px={12} py={6} borderRadius={20}>
                        <Ionicons name="headset" size={18} color={Colors.light.blueDark}/>
                        <SizableText
                            fontWeight="500"
                            color={Colors.light.blueDark}
                            textAlign="center"
                            fontSize={18}
                        >
                            5 min
                        </SizableText>
                    </XStack>
                </XStack>
                <SizableText textAlign="center" color="#fff" fontWeight="500" fontSize={18}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </SizableText>
                <XStack gap={10}>
                    <Button
                        bg="#fff"
                        borderRadius={28}
                        shadowOpacity={0}
                        borderWidth={1}
                    >
                        <Ionicons name="play" size={18} color="#000"/>
                        <ButtonText color="#000" textAlign="center">
                            ÉCOUTER
                        </ButtonText>
                    </Button>
                    <Button
                        bg={Colors.light.blueDark}
                        borderRadius={28}
                        shadowOpacity={0}
                        borderWidth={1}
                    >
                        <ButtonText color="#fff" textAlign="center">
                            VOIR PLUS
                        </ButtonText>
                    </Button>
                </XStack>
            </YStack>
        </YStack>
    );
};

export default MyDayCard;

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        padding: 15,
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.light.blue,
        position: "relative",
        marginTop: 20
    }
})
