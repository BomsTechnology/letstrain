import React, {useState} from 'react';
import {Accordion, Button, Paragraph, ScrollView, Sheet, SizableText, View, XStack, YStack} from "tamagui";
import {Ionicons, AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {Colors} from "@/constants/Colors";
import CircularProgress from "@/components/CircularProgress";
import {useFont} from "@shopify/react-native-skia";
import {Montserrat_500Medium} from "@expo-google-fonts/montserrat";
import {Image, StyleSheet} from "react-native";
import Input from "@/components/form/Input";
import {ItemProgress} from "@/app/(home)/(tabs)/myday/water";
import RecipeCard from "@/components/card/RecipeCard";

const RADIUS = 100;
const DURATION = 8500;
const STROKE_WIDTH = 7;
const VALUE = 1000;
const MAX_VALUE = 1800;

const datas = [
    "🍳  Petit déjeuner ",
    "🍲  Déjeuner ",
    "🥗  Diner ",
    "🥪  En Cas ",
]

const Food = () => {
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
                    Compteur de calories 🥑
                </SizableText>

                <YStack position="relative" bg="#fff" h={230} w={230} mt={20} borderRadius={120} mx="auto"
                        justifyContent="center" elevation={2}>
                    <YStack style={styles.content} zIndex={1} justifyContent="center" alignItems="center">
                        <SizableText fontSize="$8" fontWeight="500">{VALUE} cal.</SizableText>
                        <XStack alignItems="center" gap={5}>
                            <SizableText color="#888888" fontSize="$5" fontWeight="500">Sur {MAX_VALUE}</SizableText>
                            <Ionicons name="alert-circle" size={20} color={Colors.light.greenDark}/>
                        </XStack>
                        <Button p={0} h="auto" onPress={() => setOpen(true)} bg="transparent">
                            <Ionicons name="add-circle-outline" size={45} color={Colors.light.greenDark}/>
                        </Button>
                    </YStack>
                    <XStack position="absolute" height="100%" justifyContent="center" alignItems="center" width="100%" left={0} top={0}>
                        <CircularProgress
                            duration={DURATION}
                            font={font!}
                            strokeWidth={STROKE_WIDTH}
                            radius={RADIUS}
                            maximun={progressValue}
                            color={Colors.light.green}
                            showPercent={false}
                            style={styles.progress}
                        />
                    </XStack>
                </YStack>
                <XStack my={20} justifyContent="center">
                    <Button backgroundColor="#000" position="relative">
                        <Ionicons name="sparkles" size={20} style={styles.sparkles} color={Colors.light.redDark}/>
                        <Ionicons name="scan" size={20} color="#fff"/>
                        <SizableText color="#fff" fontWeight="700">SCANNER LE PLAT</SizableText>
                    </Button>
                </XStack>
                <XStack  borderWidth={1} borderRadius={20} borderColor={Colors.light.greenDark} p={8} gap={8}
                        flex={1}>
                    <Ionicons name="alert-circle" size={25} color={Colors.light.greenDark}/>
                    <Paragraph flex={1} fontStyle="italic">
                        Nombre de litres basées sur tes besoins. ⚠️ Lorem ipsum dolor sit amet consectetur adipiscing
                        elit
                        Ut et.
                    </Paragraph>
                </XStack>
                <XStack flex={1} my={20} position="relative" overflow="hidden" borderRadius={20}>
                    <View position="absolute" justifyContent="center" alignItems="center" left={0} top={0} zIndex={1} h="100%" w="100%"  bg="rgba(0,0,0,0.25)">
                        <SizableText fontWeight="600" color="#fff" fontSize={20} mb={5}>MENU DE LA SEMAINE</SizableText>
                        <YStack backgroundColor="#fff" p={10} justifyContent="center" alignItems="center" maxWidth="80%" width="100%" borderRadius={10}>
                            <SizableText color={Colors.light.greenDark} fontWeight="500">🍽 Recette du jour</SizableText>
                            <SizableText fontWeight="600">Nom de la recette</SizableText>
                            <XStack justifyContent="space-between" gap={20}>
                                <XStack alignItems="center" gap={5}>
                                    <MaterialCommunityIcons name="silverware-fork-knife" mb={10} size={20} color={Colors.light.green}/>
                                    <SizableText fontSize={12}>000 calories</SizableText>

                                </XStack>
                                <XStack alignItems="center" gap={5}>
                                    <Ionicons name="timer" mb={10} size={20} color={Colors.light.green}/>
                                    <SizableText fontSize={12}>000 calories</SizableText>
                                </XStack>
                            </XStack>
                        </YStack>
                    </View>
                    <Image style={{ height: 150, width: '100%' }} source={require('@/assets/images/recipe/3.png')} />
                </XStack>
                <YStack gap={10} backgroundColor={Colors.light.greenLight}  p={20} borderRadius={20}>
                    <XStack backgroundColor="#fff" alignItems="center" gap={10} justifyContent="space-between" flex={1}
                            p={20}
                            borderRadius={15}>
                        <ItemProgress percentage={`30%`} color="#888888" text="Glu. 20 sur 180 g"/>
                    </XStack>
                    <XStack backgroundColor="#fff" alignItems="center" gap={10} justifyContent="space-between" flex={1}
                            p={20}
                            borderRadius={15}>
                        <ItemProgress percentage={`60%`} color="#888888" text="Gras. 20 sur 50 g"/>
                    </XStack>
                    <XStack backgroundColor="#fff" alignItems="center" gap={10} justifyContent="space-between" flex={1}
                            p={20}
                            borderRadius={15}>
                        <ItemProgress percentage={`10%`} color="#888888" text="Prot. 10 sur 90 g"/>
                    </XStack>
                </YStack>

                <Accordion mt={20} gap={10} collapsible type="single">
                    {datas.map((data, i) => (
                        <Accordion.Item value={`a${i}`} key={i+6} py={10} px={15}  bg="#fff" borderRadius={20} borderWidth={1} borderColor={Colors.light.greenDark} >
                            <Accordion.Trigger bg="$backgroundTransparent" borderWidth={0} p={0}
                            >
                                {({
                                      open,
                                  }: {
                                    open: boolean
                                }) => (
                                    <XStack alignItems="center" justifyContent="space-between">
                                        <SizableText size="$7" fontWeight={700} color={Colors.light.greenDark}>{data}</SizableText>
                                        <Ionicons name="add-circle" size={40} color={Colors.light.greenDark}/>
                                    </XStack>
                                )}
                            </Accordion.Trigger>
                            <Accordion.HeightAnimator>
                                <Accordion.Content bg="#fff" gap={10}>
                                    <YStack gap={8}>
                                        <XStack flex={1} borderBottomWidth={1} borderColor={Colors.light.greenDark} pb={8} alignItems="center" gap={10} justifyContent="space-between">
                                            <View h={5} w={5} borderRadius={5} bg={Colors.light.greenDark}/>
                                            <SizableText fontWeight="700">Oeuf</SizableText>
                                            <XStack flex={1} justifyContent="flex-end">
                                            <SizableText color="#888888"  fontWeight="500">20 cal. 10 gras 20 prot.</SizableText>
                                            </XStack>
                                            </XStack>
                                        <XStack flex={1} borderBottomWidth={1} borderColor={Colors.light.greenDark} pb={8} alignItems="center" gap={10} justifyContent="space-between">
                                            <View h={5} w={5} borderRadius={5} bg={Colors.light.greenDark}/>
                                            <SizableText fontWeight="700">Avocat</SizableText>
                                            <XStack flex={1} justifyContent="flex-end">
                                                <SizableText color="#888888"  fontWeight="500">20 cal. 10 gras 20 prot.</SizableText>
                                            </XStack>
                                        </XStack>
                                    </YStack>
                                </Accordion.Content>
                            </Accordion.HeightAnimator>
                        </Accordion.Item>))}
                </Accordion>

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
                        <SizableText textAlign="center" color={Colors.light.greenDark} fontWeight="700" fontSize="$8">Ajoute
                            tes calories</SizableText>
                        <SizableText fontWeight="600" mt={20}>Aliment ou plat :</SizableText>
                        <XStack flex={1} alignItems="center" gap={10}>
                            <Input
                                placeholder="Avocado"
                                containerProps={{bg: "#B3B3B350", mt: 8, mb: 10}}
                                placeholderTextColor="#888888"
                            />
                        </XStack>
                        <XStack flex={1} alignItems="center" justifyContent="center" gap={10}>
                            <SizableText fontWeight="600" numberOfLines={1}>Quantité : </SizableText>
                            <XStack flex={1} alignItems="center" gap={10}>
                                <XStack borderWidth={0.5} height={40} width={40} borderRadius={10} justifyContent="center" alignItems="center">
                                    <Ionicons name="add" size={25} />
                                </XStack>
                                <Input
                                    containerProps={{bg: "#B3B3B350"}}
                                    placeholderTextColor="#888888"
                                />
                                <XStack borderWidth={0.5} height={40} width={40} borderRadius={10} justifyContent="center" alignItems="center">
                                    <AntDesign name="minus" size={24} color="black" />
                                </XStack>
                            </XStack>
                        </XStack>
                        <SizableText color={Colors.light.greenDark} fontWeight="500">Ou</SizableText>
                        <SizableText fontWeight="600">Manuellement</SizableText>
                        <XStack flex={1} alignItems="center" gap={10}>
                            <Input
                                placeholder="000"
                                containerProps={{bg: "#B3B3B350", mt: 8, mb: 20}}
                                placeholderTextColor="#888888"
                            />
                            <SizableText fontWeight="600" numberOfLines={1}>Cal.</SizableText>
                        </XStack>

                        <Button bg={Colors.light.greenDark} borderRadius={28} size="$5">
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

export default Food;

const styles = StyleSheet.create({
    progress: {
        transform: [{translateX: "-50%"}, {translateY: "-50%"}, {rotate: "-90deg"}],
        position: "absolute",
        top: "50%",
        left: "50%",
    },
    content: {},
    sparkles: {
        position: "absolute",
        zIndex: 1,
        right: 1,
        top: 1,
        display: 'none'
    }
});