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

const RADIUS = 100;
const DURATION = 8500;
const STROKE_WIDTH = 7;
const VALUE = 1000;
const MAX_VALUE = 3000;

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

const Water = () => {
    const [item, setItem] = useState(0);
    const font = useFont(Montserrat_500Medium, 50);
    const router = useRouter();
    const progressValue = (VALUE * 100) / MAX_VALUE;
    const [open, setOpen] = useState(false);

    const changeItem = (val: number) => {
        if(item === val){
            setItem(0)
        }else{
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
                maxWidth="70%"
                mx="auto"
            >
                Suivi de l’hydratation 💦
            </SizableText>

            <YStack position="relative" bg="#fff" h={230} w={230} mt={20} borderRadius={120} mx="auto"
                    justifyContent="center" elevation={2}>
                <YStack style={styles.content} zIndex={1} justifyContent="center" alignItems="center">
                    <SizableText fontSize="$8" fontWeight="500">{VALUE} ml.</SizableText>
                    <XStack alignItems="center" gap={5}>
                        <SizableText color="#888888" fontSize="$5" fontWeight="500">Sur {MAX_VALUE/1000} Litres</SizableText>
                        <Ionicons name="alert-circle" size={20} color={Colors.light.blueDark}/>
                    </XStack>
                    <Button p={0} h="auto" onPress={() => setOpen(true)} bg="transparent">
                        <Ionicons name="add-circle-outline" size={45} color={Colors.light.blueDark}/>
                    </Button>
                </YStack>
                <XStack position="absolute" height="100%" justifyContent="center" alignItems="center" width="100%" left={0} top={0}>
                    <CircularProgress
                        duration={DURATION}
                        font={font!}
                        strokeWidth={STROKE_WIDTH}
                        radius={RADIUS}
                        maximun={progressValue}
                        color={Colors.light.blue}
                        showPercent={false}
                        style={styles.progress}
                    />
                </XStack>
            </YStack>
            <XStack my={20} borderWidth={1} borderRadius={20} borderColor={Colors.light.blueDark} p={8} gap={8}
                    flex={1}>
                <Ionicons name="alert-circle" size={25} color={Colors.light.blueDark}/>
                <Paragraph flex={1} fontStyle="italic">
                    Nombre de litres basées sur tes besoins. ⚠️ Lorem ipsum dolor sit amet consectetur adipiscing elit
                    Ut et.
                </Paragraph>
            </XStack>

            <YStack backgroundColor={Colors.light.blueLight} p={20} borderRadius={20}>
                <XStack mb={20} backgroundColor="#fff" maxWidth="70%" mx="auto" justifyContent="center" width="100%" p={8}
                        borderRadius={15}>
                    <SizableText fontWeight="600" numberOfLines={1}>Cette semaine</SizableText>
                </XStack>
                <YStack gap={5}>
                {
                    datas.map((item, index) =>
                        (<ItemProgress percentage={`${(item.value*100)/MAX_VALUE}%`} text={item.day} value={`${item.value}ml`} key={index} />)
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
                <SizableText textAlign="center" color={Colors.light.blueDark} fontWeight="700" fontSize="$8">Quantité d'eau</SizableText>
                <XStack flex={1} gap={20} my={30}>
                    <Button flex={1} onPress={() => changeItem(1)} backgroundColor={item == 1 ? Colors.light.blueDark : "#B3B3B350"}>
                        <SizableText fontWeight="700" color={item == 1 ? "#fff" : "#000"}>1 L</SizableText>
                    </Button>
                    <Button flex={1} onPress={() => changeItem(0.5)} backgroundColor={item == 0.5 ? Colors.light.blueDark : "#B3B3B350"}>
                        <SizableText fontWeight="700" color={item == 0.5 ? "#fff" : "#000"}>0,5 L</SizableText>
                    </Button>
                    <Button flex={1} onPress={() => changeItem(1.5)} backgroundColor={item == 1.5 ? Colors.light.blueDark : "#B3B3B350"}>
                        <SizableText fontWeight="700" color={item == 1.5 ? "#fff" : "#000"}>1,5 L</SizableText>
                    </Button>
                </XStack>
                <SizableText color={Colors.light.blueDark} fontWeight="500">Ou</SizableText>
                <SizableText fontWeight="600">Manuellement</SizableText>
                <XStack flex={1} alignItems="center" gap={10}>
                    <Input
                        placeholder="000"
                        containerProps={{ bg: "#B3B3B350", my: 18 }}
                        placeholderTextColor="#888888"
                    />
                    <SizableText fontWeight="600" numberOfLines={1}>Litres</SizableText>
                </XStack>

                <Button bg={Colors.light.blueDark} borderRadius={28} size="$5">
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

export const ItemProgress = ({text, value, percentage, color}: { text: string; value?: string; percentage: string; color?: string}) => {
    return (
        <XStack flex={1} gap={10} justifyContent="flex-start" alignItems="flex-start">
            <YStack>
                <SizableText fontSize={14} color={color ? color : '#000'} fontWeight="500" lineHeight={14}>{text}</SizableText>
            </YStack>
            <YStack gap={5} mt={2} alignItems="flex-end" flex={1}>
                <View width="100%" h={7} backgroundColor="#D9D9D9" overflow="hidden" borderRadius={10}>
                    <View width={percentage} h="100%" backgroundColor="#000"/>
                </View>
                {value && <SizableText fontSize={12} fontStyle="italic" color={color ? color : '#000'}
                              lineHeight={12}>{value}</SizableText>}
            </YStack>
        </XStack>
    );
}

export default Water;

const styles = StyleSheet.create({
    progress: {
        transform: [{translateX: "-50%"}, {translateY: "-50%"}, {rotate: "-90deg"}],
        position: "absolute",
        top: "50%",
        left: "50%",
    },
    content: {}
});