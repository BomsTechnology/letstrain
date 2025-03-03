import {Image, ImageSourcePropType} from "react-native";
import React, {useRef, useState} from "react";
import {Button, SizableText, View, XStack, YStack} from "tamagui";
import {FontAwesome6, Fontisto} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";
import {ButtonText} from "@/tamagui.config";
import {useRouter} from "expo-router";
import PagerView from "react-native-pager-view";

type ProgramCardProps = {
    images: ImageSourcePropType[];
    title: string;
    description: string;
    programTitle: string;
}

const ProgramCard = ({images, title, description, programTitle}: ProgramCardProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const pageRef = useRef<PagerView>(null);
    const router = useRouter();
    return (
        <YStack>
            <SizableText
                fontWeight="600"
                fontSize="$9"
                lineHeight="$8"
                textAlign="center"
            >
                {title}
            </SizableText>
            <SizableText fontSize="$7" lineHeight="$8" textAlign="center" mb={10}>
                {description}
            </SizableText>
            <PagerView
                ref={pageRef}
                overScrollMode="auto"
                initialPage={0}
                onPageScroll={(e) => setCurrentPage(e.nativeEvent.position)}
                style={{ height: 220 }}
            >
                {images.map((image, index) => (
                <XStack
                    justifyContent="center"
                    borderRadius={20}
                    h={220}
                    position="relative"
                    overflow="hidden"
                    mx={5}
                    key={index}
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
                        <FontAwesome6 name="clock-rotate-left" size={14} color="#fff"/>
                        <SizableText color="#fff">4 semaines</SizableText>
                    </XStack>
                    <Image
                        resizeMode="cover"
                        source={image}
                        style={{width: "100%", height: "100%"}}
                    />
                    <XStack
                        position="absolute"
                        bottom={30}
                        justifyContent="space-between"
                        alignItems="flex-end"
                        px={20}
                        zIndex={1}
                        flex={1}
                        gap={5}
                    >
                        <YStack>
                            <SizableText fontSize="$6" fontWeight="600" color="#fff" lineHeight="$7" textAlign="left">
                                {programTitle}
                            </SizableText>
                            <XStack gap={5} alignItems="center">
                                <SizableText fontSize={16} fontWeight="600" color="#fff">
                                    Cardio
                                </SizableText>
                                <XStack gap={2}>
                                    <Fontisto name="blood-drop" size={12} color="#fff"/>
                                    <Fontisto name="blood-drop" size={12} color="#fff"/>
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
                                    <Fontisto name="star" size={11} color="#fff"/>
                                    <Fontisto name="star" size={11} color="#fff"/>
                                    <Fontisto name="star" size={11} color="#fff"/>
                                    <Fontisto name="star" size={11} color="rgba(255,255,255,0.5)"/>
                                    <Fontisto name="star" size={11} color="rgba(255,255,255,0.5)"/>
                                </XStack>
                            </XStack>
                        </YStack>
                        <Button
                            bg={Colors.light.red}
                            borderRadius={28}
                            shadowOpacity={0}
                            borderWidth={1}
                            onPress={() => router.push("/(home)/(tabs)/program/detail")}
                        >
                            <ButtonText color="#fff" textAlign="center">
                                Commencer
                            </ButtonText>
                        </Button>
                    </XStack>
                </XStack>
                ))}
            </PagerView>
            <XStack my={20} justifyContent="center" gap={5} alignItems="center">
                {images.map((item, index) => (
                    <XStack
                        h={10}
                        w={10}
                        borderRadius={5}
                        bg={currentPage === index ? Colors.light.red : "#888888"}
                        key={index}
                    />
                ))}
            </XStack>
        </YStack>
    );
};

export default ProgramCard;
