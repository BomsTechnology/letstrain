import {ScrollView, SizableText, View, XStack, YStack} from "tamagui";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {Image} from "react-native";
import {Colors} from "@/constants/Colors";
import React from "react";
import {useRouter} from "expo-router";

const Recipe = () => {
    const router = useRouter();
    return (<ScrollView bg="#fff" showsVerticalScrollIndicator={false}>
        <XStack
            justifyContent="center"
            w="100%"
            h={220}
            position="relative"
            overflow="hidden"

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
                    fontWeight="400"
                    fontSize="$8"
                    lineHeight="$8"
                    textAlign="center"
                    color="#fff"
                >
                    Recette :
                </SizableText>
                <SizableText
                    fontWeight="600"
                    fontSize="$9"
                    lineHeight="$8"
                    textAlign="center"
                    color="#fff"
                >
                    Lorem ipsum dolor
                </SizableText>
            </YStack>

            <XStack
                position="absolute"
                zIndex={1}
                left={20}
                top={20}
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={30} color="#fff"/>
            </XStack>
            <XStack
                position="absolute"
                zIndex={1}
                right={20}
                bottom={20}
            >
                <Ionicons name="heart-outline" size={30} color="#fff"/>
            </XStack>
            <Image
                resizeMode="cover"
                source={require("@/assets/images/recipe/2.png")}
                style={{width: "100%", height: "100%"}}
            />
        </XStack>

        <XStack my={20} justifyContent="center" gap={20} alignItems="center">
            <XStack alignItems="center" gap={5}>
                <MaterialCommunityIcons name="silverware-fork-knife" mb={10} size={30} color={Colors.light.green}/>
                <SizableText color="#000" size="$5" numberOfLines={1} fontWeight={600}>Facile</SizableText>
            </XStack>
            <View h={50} w={1} bg="#000"/>
            <XStack alignItems="center" gap={5}>
                <MaterialCommunityIcons name="timer" size={30} color={Colors.light.green}/>
                <SizableText color="#000" size="$5" numberOfLines={1} fontWeight={600}>10 min</SizableText>
            </XStack>
        </XStack>

        <YStack px={20}>
            <XStack bg="#E7FEE3" mb={20} justifyContent="center" alignItems="center" gap={20} p={15}
                    borderRadius={20}>
                <YStack elevation={3} minWidth={70} bg="#fff" p={15} borderRadius={20}>
                    <SizableText fontWeight="600" fontSize="$6" textAlign="center">200</SizableText>
                    <SizableText textAlign="center">Cal.</SizableText>
                </YStack>
                <YStack elevation={3} minWidth={70} bg="#fff" p={15} borderRadius={20}>
                    <SizableText fontWeight="600" fontSize="$6" textAlign="center">200</SizableText>
                    <SizableText textAlign="center">Cal.</SizableText>
                </YStack>
                <YStack elevation={3} minWidth={70} bg="#fff" p={15} borderRadius={20}>
                    <SizableText fontWeight="600" fontSize="$6" textAlign="center">200</SizableText>
                    <SizableText textAlign="center">Cal.</SizableText>
                </YStack>
                <YStack elevation={3} minWidth={70} bg="#fff" p={15} borderRadius={20}>
                    <SizableText fontWeight="600" fontSize="$6" textAlign="center">200</SizableText>
                    <SizableText textAlign="center">Cal.</SizableText>
                </YStack>
            </XStack>
            <SizableText
                fontWeight="600"
                fontSize="$9"
                lineHeight="$8"
                textAlign="center"
            >
                Les ingrédients
            </SizableText>
            <SizableText fontSize="$7" lineHeight="$8" textAlign="center" mb={10}>
                lorem ipsum dolor sit amet consectetur
            </SizableText>

            <YStack mt={20} mb={50} borderWidth={1} borderColor={Colors.light.green} p={15} borderRadius={20}>
                {Array.from({length: 6}).map((_, i) => (
                    <XStack borderBottomWidth={i === 5 ? 0 : 1} borderColor={Colors.light.green} py={10}
                            justifyContent="space-between" alignItems="center" gap={10}>
                        <XStack alignItems="center" gap={8}>
                            <View h={5} w={5} bg="#000" borderRadius={10}/>
                            <SizableText fontSize="$6" numberOfLines={1} lineHeight="$8" textAlign="left">
                                Lorem ipsum dolor sit amet
                            </SizableText>
                        </XStack>
                        <SizableText fontSize="$6" fontWeight="600" numberOfLines={1} lineHeight="$8"
                                     color="#888888"
                                     textAlign="left">
                            10g
                        </SizableText>
                    </XStack>))}
            </YStack>

            <SizableText
                fontWeight="600"
                fontSize="$9"
                lineHeight="$8"
                textAlign="center"
            >
                La recette
            </SizableText>
            <XStack
                justifyContent="center"
                w="90%"
                borderRadius={30}
                h={180}
                my={30}
                mx="auto"
                position="relative"
                overflow="hidden"

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
                    <XStack px={10} py={5} borderRadius={30} gap={5} alignItems="center" bg="rgba(255,255,255,.35)">
                        <Ionicons name="play" size={24} color="#fff" />
                    <SizableText
                        fontWeight="400"
                        fontSize="$7"
                        lineHeight="$8"
                        textAlign="center"
                        color="#fff"
                    >
                        Tuto vidéo
                    </SizableText>
                    </XStack>
                </YStack>


                <Image
                    resizeMode="cover"
                    source={require("@/assets/images/recipe/2.png")}
                    style={{width: "100%", height: "100%"}}
                />
            </XStack>

            <YStack px={30} mx="auto">
                {Array.from({length: 6}).map((_, i) => (
                    <XStack  borderColor={Colors.light.green} py={10}
                            justifyContent="flex-start" alignItems="center" gap={10}>
                            <SizableText fontSize="$6" fontWeight="600" numberOfLines={1} lineHeight="$8"
                                         color={Colors.light.greenDark}
                                         textAlign="left">
                                {i+1}.
                            </SizableText>
                            <SizableText fontSize="$6"  lineHeight="$5" textAlign="left">
                                Lorem ipsum dolor sit amet consectetur dolor sit amet
                            </SizableText>

                    </XStack>))}
            </YStack>

            <View h={100}/>
        </YStack>
    </ScrollView>);
};

export default Recipe;