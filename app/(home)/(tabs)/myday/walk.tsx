import React, {useState} from 'react';
import {Button, Paragraph, ScrollView, Sheet, SizableText, View, XStack, YStack} from "tamagui";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {Colors} from "@/constants/Colors";
import CircularProgress from "@/components/CircularProgress";
import {useFont} from "@shopify/react-native-skia";
import {Montserrat_500Medium} from "@expo-google-fonts/montserrat";
import {StyleSheet} from "react-native";
import Input from "@/components/form/Input";
import {ItemProgress} from "@/app/(home)/(tabs)/myday/water";

const RADIUS = 100;
const DURATION = 8500;
const STROKE_WIDTH = 7;
const VALUE = 1000;
const MAX_VALUE = 8000;

const datas = [
    {
        day: "Lundi",
        value: 500,
    },
    {
        day: "Mardi",
        value: 1500,
    },
    {
        day: "Mercredi",
        value: 3000,
    },
    {
        day: "jeudi",
        value: 200,
    },
    {
        day: "Vendredi",
        value: 0,
    },
    {
        day: "Samedi",
        value: 0,
    },
    {
        day: "Dimanche",
        value: 0,
    },
]

const Walk = () => {
    const [item, setItem] = useState(0);
    const font = useFont(Montserrat_500Medium, 50);
    const router = useRouter();
    const progressValue = (VALUE * 100) / MAX_VALUE;
    const [open, setOpen] = useState(false);

    const changeItem = (val: number) => {
        if (item === val) {
            setItem(0)
        } else {
            setItem(val)
        }
    }

    if (!font) {
        return <View/>;
    }

    return (
        <>
            <ScrollView flex={1} bg="#fff" px={20} pt={20} showsVerticalScrollIndicator={false}>
                <XStack
                    onPress={() => router.back()}
                >
                    <Ionicons name="arrow-back" size={30} color="#888888"/>
                </XStack>
                <SizableText
                    fontWeight="600"
                    fontSize="$8"
                    lineHeight="$8"
                    textAlign="center"
                    maxWidth="60%"
                    mx="auto"
                >
                    Compteur de pas 🔥
                </SizableText>

                <YStack position="relative" bg="#fff" h={230} w={230} mt={20} borderRadius={120} mx="auto"
                        justifyContent="center" elevation={2}>
                    <YStack style={styles.content} zIndex={1} justifyContent="center" alignItems="center">
                        <SizableText fontSize="$8" fontWeight="500">{VALUE}</SizableText>
                        <XStack alignItems="center" gap={5}>
                            <SizableText color="#888888" fontSize="$5" fontWeight="500">Sur {MAX_VALUE} pas</SizableText>
                            <Ionicons name="alert-circle" size={20} color={Colors.light.redDark}/>
                        </XStack>
                        <Button p={0} h="auto" onPress={() => setOpen(true)} bg="transparent">
                            <Ionicons name="add-circle-outline" size={45} color={Colors.light.redDark}/>
                        </Button>
                    </YStack>
                    <XStack position="absolute" height="100%" justifyContent="center" alignItems="center" width="100%" left={0} top={0}>
                        <CircularProgress
                            duration={DURATION}
                            font={font!}
                            strokeWidth={STROKE_WIDTH}
                            radius={RADIUS}
                            maximun={progressValue}
                            color={Colors.light.red}
                            showPercent={false}
                            style={styles.progress}
                        />
                    </XStack>
                </YStack>
                <XStack my={20} borderWidth={1} borderRadius={20} borderColor={Colors.light.redDark} p={8} gap={8}
                        flex={1}>
                    <Ionicons name="alert-circle" size={25} color={Colors.light.redDark}/>
                    <Paragraph flex={1} fontStyle="italic">
                        Nombre de litres basées sur tes besoins. ⚠️ Lorem ipsum dolor sit amet consectetur adipiscing
                        elit
                        Ut et.
                    </Paragraph>
                </XStack>
                <YStack gap={10} backgroundColor={Colors.light.redLight} mb={20} p={20} borderRadius={20}>
                    <XStack backgroundColor="#fff" alignItems="center" gap={10} justifyContent="space-between" flex={1}
                            p={8}
                            borderRadius={15}>
                        <XStack flex={1} gap={10} alignItems="center">
                            <Ionicons name="flame" size={30} color={Colors.light.redDark}/>
                            <SizableText fontWeight="600" color="#888888" numberOfLines={1}>Calories
                                dépensées</SizableText>
                        </XStack>
                        <XStack borderWidth={1} flex={0.3} py={10} justifyContent="center" px={12} borderRadius={15} borderColor={Colors.light.redDark}>
                            <SizableText fontWeight="600" textAlign="center" numberOfLines={1}>100 cal.</SizableText>
                        </XStack>
                    </XStack>
                    <XStack backgroundColor="#fff" alignItems="center" gap={10} justifyContent="space-between" flex={1}
                            p={8}
                            borderRadius={15}>
                        <XStack flex={1} gap={10} alignItems="center">
                            <Ionicons name="accessibility" size={30} color={Colors.light.redDark}/>
                            <SizableText fontWeight="600" color="#888888" numberOfLines={1}>Distance en KM</SizableText>
                        </XStack>
                        <XStack borderWidth={1} flex={0.3} justifyContent="center" py={10} px={12} borderRadius={15} borderColor={Colors.light.redDark}>
                            <SizableText fontWeight="600" textAlign="center" numberOfLines={1}>5 km.</SizableText>
                        </XStack>
                    </XStack>
                </YStack>

                <YStack backgroundColor={Colors.light.redDark} p={20} borderRadius={20}>
                    <XStack mb={20} backgroundColor="#fff" maxWidth="70%" mx="auto" justifyContent="center" width="100%"
                            p={8}
                            borderRadius={15}>
                        <SizableText fontWeight="600" numberOfLines={1}>Cette semaine</SizableText>
                    </XStack>
                    <YStack gap={5}>
                        {
                            datas.map((item, index) =>
                                (<ItemProgress color="#fff" percentage={`${(item.value * 100) / MAX_VALUE}%`}
                                               text={item.day} value={`${item.value} pas`} key={index}/>)
                            )
                        }
                    </YStack>
                </YStack>
                <View h={100}/>
            </ScrollView>
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
                    <Sheet.ScrollView p={20}>
                        <SizableText textAlign="center" color={Colors.light.redDark} fontWeight="700" fontSize="$8">Ajoute
                            tes pas</SizableText>
                        <XStack flex={1} alignItems="center" gap={10}>
                            <Input
                                placeholder="000"
                                containerProps={{bg: "#B3B3B350", my: 18}}
                                placeholderTextColor="#888888"
                            />
                            <SizableText fontWeight="600" numberOfLines={1}>Pas</SizableText>
                        </XStack>
                        <SizableText color={Colors.light.redDark} fontWeight="500">Ou</SizableText>
                        <XStack flex={1} alignItems="center" gap={10}>
                            <Input
                                placeholder="000"
                                containerProps={{bg: "#B3B3B350", my: 18}}
                                placeholderTextColor="#888888"
                            />
                            <SizableText fontWeight="600" numberOfLines={1}>Km</SizableText>
                        </XStack>

                        <Button bg={Colors.light.redDark} borderRadius={28} size="$5">
                            <SizableText fontWeight="600" color="#fff" fontSize={18}>
                                Ajouter
                            </SizableText>
                        </Button>
                    </Sheet.ScrollView>
                </Sheet.Frame>
            </Sheet>

        </>
    );
};

export default Walk;

const styles = StyleSheet.create({
    progress: {
        transform: [{rotate: "-90deg"}],
    },
    content: {}
});