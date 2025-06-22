import {Button, Paragraph, ScrollView, Sheet, SizableText, View, XStack, YStack} from "tamagui";
import {Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import ExerciseCard from "@/components/card/ExerciseCard";
import {exercises} from "@/data/exercises";
import React, {useState} from "react";
import {Colors} from "@/constants/Colors";

const Instructions = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false)
    return (
        <>
            <YStack flex={1} position="relative">
                <Image
                    resizeMode="cover"
                    source={require("@/assets/images/program/instruction.png")}
                    style={{width: '100%', flex: 1}}
                />
                <ScrollView top={20} position="absolute" maxHeight="90%"
                            right={20} showsVerticalScrollIndicator={false}>
                    {
                        exercises.map((exercise, index) => (
                            <ExerciseCard showName={false} size={100} image={exercise.image} title={exercise.title}
                                          key={index}/>
                        ))
                    }
                </ScrollView>
                <XStack
                    position="absolute"
                    top={20}
                    left={20}
                    onPress={() => router.back()}
                >
                    <Ionicons name="arrow-back" size={30} color="#fff"/>
                </XStack>
                <XStack bottom={20} flex={1}  w="100%"
                        position="absolute" justifyContent="center" alignItems="center">
                <Button
                    bg="#FFF"
                    maxWidth="70%"
                    w="100%"
                    onPress={() => setOpen(true)}
                    borderRadius={40} px={8} size="$5" borderWidth={2} borderColor="#888888"
                >
                    <SizableText fontWeight="700" color="#000" fontSize={16}>
                        INSTRUCTIONS
                    </SizableText>
                </Button>
                </XStack>
            </YStack>
            <Sheet modal snapPoints={[80]} dismissOnSnapToBottom
                   open={open}
                   onOpenChange={setOpen}
            >
                <Sheet.Overlay

                    enterStyle={{opacity: 0}}
                    exitStyle={{opacity: 0}}
                />

                <Sheet.Handle/>
                <Sheet.Frame flex={1}>
                    <Sheet.ScrollView>
                        <YStack py={50}>
                            <XStack p={10} pl={50} bg={Colors.light.redDark} maxWidth="60%" borderTopRightRadius={30}
                                    borderBottomRightRadius={30}>
                                <SizableText color="#fff" size="$8" fontWeight="700">EXERCICE 1</SizableText>
                            </XStack>

                            <XStack px={30} gap={10} my={30}>
                                <SizableText size="$9" fontWeight="700">☝</SizableText>
                                <YStack>
                                    <SizableText color="#000" size="$7" fontWeight="700">INSTRUCTIONS</SizableText>
                                    <Paragraph size="$5">
                                        Eu officia sunt ipsum nisi dolore laboreEu officia sunt ipsum nisi dolore labore
                                    </Paragraph>
                                </YStack>
                            </XStack>

                            <XStack bg="#000" p={10} pl={50} maxWidth="70%" borderTopRightRadius={30}
                                    borderBottomRightRadius={30}>
                                <SizableText color="#fff" size="$8" fontWeight="700">INSTRUCTIONS</SizableText>
                            </XStack>

                            <YStack mt={20}>
                                {Array.from({length: 6}).map((_, i) => (
                                    <XStack key={i!} borderColor={Colors.light.green} py={10}  px={20}
                                            justifyContent="flex-start" alignItems="flex-start" gap={10}>
                                        <View h={30} w={30} borderRadius={20} justifyContent="center"
                                              alignItems="center" bg="#000">
                                            <SizableText fontSize="$6" fontWeight="600" numberOfLines={1}
                                                         lineHeight="$8"
                                                         color="#fff"
                                                         textAlign="left">
                                                {i + 1}
                                            </SizableText>
                                        </View>

                                        <Paragraph size="$6" flex={1}>
                                            Eu officia sunt ipsum nisi dolore laboreEu officia sunt ipsum nisi dolore labore
                                        </Paragraph>
                                    </XStack>))}

                            </YStack>
                        </YStack>
                    </Sheet.ScrollView>
                </Sheet.Frame>
            </Sheet>

        </>
    );
};

export default Instructions;