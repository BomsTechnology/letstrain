import {Accordion, Paragraph, ScrollView, SizableText, XStack, YStack} from "tamagui";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {useRouter} from "expo-router";
import {Colors} from "@/constants/Colors";
import RecipeCard from "@/components/card/RecipeCard";

const Recette = () => {
    const router = useRouter();
    return (
        <ScrollView bg="#fff" px={20} pt={30} showsVerticalScrollIndicator={false}>
            <XStack
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={30} color="#000"/>
            </XStack>
            <SizableText
                fontWeight="600"
                fontSize="$9"
                lineHeight="$8"
                textAlign="center"
            >
                Conseil
            </SizableText>
            <SizableText fontSize="$7" maxWidth="80%" mx="auto" lineHeight="$8" textAlign="center" mb={50}>
                lorem ipsum dolor sit amet consectetur
            </SizableText>
            <YStack gap={30}>
                {Array.from({length: 4}).map((_, i) => ( <YStack key={i} >
                <YStack bg={Colors.light.greenDark} p={20} borderRadius={30} >
                    <XStack justifyContent="space-between" alignItems="center">
                        <YStack maxWidth="80%">
                            <SizableText color="#fff" fontWeight={700} fontSize="$6">RÈGLE N°{i+1}</SizableText>
                            <SizableText color="#fff">Lorem ipsum dolor sit amet consectetur</SizableText>
                        </YStack>
                        <SizableText fontSize="$10" lineHeight="$10">💦</SizableText>
                    </XStack>
                </YStack>
                <YStack px={20} mt={20}>
                    <Accordion overflow="hidden" gap={10} collapsible type="single">
                        {Array.from({length: 4}).map((_, i) => (
                            <Accordion.Item value={`a${i}`} key={i + 6}>
                                <Accordion.Trigger py={15} bg={Colors.light.greenLight} flexDirection="row" alignItems="center"
                                                   justifyContent="space-between" borderRadius={20}
                                >
                                    <SizableText size="$5" fontWeight={700}
                                                 color={Colors.light.greenDark}>Lorem
                                        ipsum</SizableText>
                                    <Ionicons name="chevron-down" size={22}
                                              color={Colors.light.greenDark}/>

                                </Accordion.Trigger>
                                <Accordion.HeightAnimator>
                                    <Accordion.Content bg="#fff" gap={10}>
                                        <SizableText size="$5" fontWeight={700}>Lorem
                                            ipsum</SizableText>
                                        <Paragraph>
                                            Cold showers can help reduce inflammation, relieve pain, improve
                                            circulation, lower stress levels, and reduce muscle soreness and fatigue.
                                        </Paragraph>
                                    </Accordion.Content>
                                </Accordion.HeightAnimator>
                            </Accordion.Item>))}
                    </Accordion>
                </YStack>
                </YStack>))}
            </YStack>
        </ScrollView>
    );
};

export default Recette;