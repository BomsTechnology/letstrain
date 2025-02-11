import {ScrollView, SizableText, XStack, YStack, View, Button} from "tamagui";
import {Image} from "react-native";
import {Fontisto, Ionicons, AntDesign, FontAwesome} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";
import {AlertDialogDemo} from "@/components/modal/SomeDialog";
import {useRouter} from "expo-router";

const ProgramDetail = () => {
    const router = useRouter();
    return (
        <YStack flex={1} bg="#fff" >
        <ScrollView  flex={1} showsVerticalScrollIndicator={false}>
            <Image
                resizeMode="cover"
                source={require("@/assets/images/program/detail.png")}
                style={{width: "100%", height: 300}}
            />

            <YStack p={20}>
                <SizableText
                    fontWeight="700"
                    fontSize="$9"
                    lineHeight="$8"
                    textAlign="left"
                >
                    Je garde mes formes
                </SizableText>
                <XStack bg="#FFC8C12E" px={10} py={15} borderRadius={20} mt={15}>
                    <YStack>
                        <XStack gap={5} alignItems="center">
                            <SizableText fontSize={16} fontWeight="600" color="#000">
                                Cardio
                            </SizableText>
                            <XStack gap={2}>
                                <Fontisto name="blood-drop" size={12} color="#000"/>
                                <Fontisto name="blood-drop" size={12} color="#000"/>
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
                            <SizableText fontSize={16} fontWeight="600" color="#000">
                                Musculation
                            </SizableText>
                            <XStack gap={2}>
                                <Fontisto name="star" size={11} color="#000"/>
                                <Fontisto name="star" size={11} color="#000"/>
                                <Fontisto name="star" size={11} color="#000"/>
                                <Fontisto name="star" size={11} color="rgba(255,255,255,0.5)"/>
                                <Fontisto name="star" size={11} color="rgba(255,255,255,0.5)"/>
                            </XStack>
                        </XStack>
                    </YStack>
                    <YStack>
                        <XStack gap={5} alignItems="center">
                            <SizableText fontSize={16} fontWeight="600" color="#000">
                                Nombre de séance :
                            </SizableText>
                            <SizableText fontSize={16} fontWeight="600" color="#00000050">
                                XX
                            </SizableText>
                        </XStack>
                        <XStack gap={5} alignItems="center">
                            <SizableText fontSize={16} fontWeight="600" color="#000">
                                Durée totale :
                            </SizableText>
                            <SizableText fontSize={16} fontWeight="600" color="#00000050">
                                4 semaines
                            </SizableText>
                        </XStack>
                    </YStack>
                </XStack>

                <SizableText fontSize="$8" lineHeight="$8" maxWidth="80%" mx="auto" fontWeight="700" textAlign="center" mt={25}>
                    Infos pratiques
                </SizableText>

                <YStack w="100%" bg="#88888812" gap={15} mt={15} p={20} borderRadius={20}>
                    <XStack gap={8} alignItems="center">
                        <Ionicons name="home" size={20} color={Colors.light.redDark}/>
                        <SizableText fontSize={16} fontWeight="600">
                            A la maison
                        </SizableText>
                    </XStack>
                    <XStack gap={8} alignItems="flex-start">
                        <Ionicons name="timer" size={22} color={Colors.light.redDark}/>
                        <YStack>
                            <SizableText fontSize={16} fontWeight="600">
                                25-30 minutes par séance
                            </SizableText>
                            <SizableText fontSize={16}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                            </SizableText>
                        </YStack>
                    </XStack>
                    <YStack>
                        <SizableText fontSize={16} fontWeight="600">
                            Types d'exercices :
                        </SizableText>
                        <SizableText fontSize={16}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                        </SizableText>
                    </YStack>
                </YStack>

                <YStack px={20} gap={25} mt={25}>
                    <SizableText fontSize="$8" maxWidth="90%" mx="auto" lineHeight="$8" fontWeight="700"
                                 textAlign="center">
                        Ce programme est fait pour toi si...
                    </SizableText>

                    <SizableText fontSize={16}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                    </SizableText>

                    <XStack gap={8} alignItems="flex-start">
                        <AntDesign name="checkcircle" size={22} color={Colors.light.redDark}/>
                        <YStack>
                            <SizableText fontSize={16} fontWeight="600">
                                Avantage 1
                            </SizableText>
                            <SizableText fontSize={16}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                            </SizableText>
                        </YStack>
                    </XStack>
                    <XStack gap={8} alignItems="flex-start">
                        <AntDesign name="checkcircle" size={22} color={Colors.light.redDark}/>
                        <YStack>
                            <SizableText fontSize={16} fontWeight="600">
                                Avantage 2
                            </SizableText>
                            <SizableText fontSize={16}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                            </SizableText>
                        </YStack>
                    </XStack>
                    <XStack gap={8} alignItems="flex-start">
                        <AntDesign name="checkcircle" size={22} color={Colors.light.redDark}/>
                        <YStack>
                            <SizableText fontSize={16} fontWeight="600">
                                Avantage 3
                            </SizableText>
                            <SizableText fontSize={16}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                            </SizableText>
                        </YStack>
                    </XStack>
                </YStack>

                <SizableText fontSize="$8" lineHeight="$8" maxWidth="80%" mx="auto" fontWeight="700" textAlign="center" mt={25}>
                    Découvre ton parcours
                </SizableText>

                <YStack position="relative" w="100%" mt={25} gap={5}>
                    <View position="absolute" top={35} bottom={35} w={3} bg="#000000" zIndex={1} left={22} />
                    <XStack  w="100%" bg="#FFC8C12E" borderTopLeftRadius={20} borderTopRightRadius={20} px={10} gap={8} py={15} alignItems="center">
                        <View bg="#000" w={30} h={30} borderRadius={20} zIndex={50} justifyContent="center" alignItems="center">
                            <FontAwesome name="flag-checkered" size={18} color="#fff" />
                        </View>
                        <YStack flex={1}>
                            <SizableText fontSize={16} fontWeight="600">
                                Types d'exercices :
                            </SizableText>
                            <SizableText fontSize={16}>
                                Lorem Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                            </SizableText>
                        </YStack>
                    </XStack>

                    <XStack  w="100%" bg={Colors.light.redLight} px={10} gap={8} py={15} alignItems="center">
                        <View bg="#000" w={30} h={30} zIndex={50} borderRadius={20} justifyContent="center" alignItems="center">
                            <Ionicons name="reload" size={18} color="#fff" />
                        </View>
                        <YStack flex={1}>
                            <SizableText fontSize={16} fontWeight="600">
                                Types d'exercices :
                            </SizableText>
                            <SizableText fontSize={16}>
                                Lorem Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                            </SizableText>
                        </YStack>
                    </XStack>

                    <XStack  w="100%" bg={Colors.light.redLight}  px={10} gap={8} py={15} alignItems="center">
                        <View bg="#000" w={30} h={30} zIndex={50} borderRadius={20} justifyContent="center" alignItems="center">
                            <Ionicons name="reload" size={18} color="#fff" />
                        </View>
                        <YStack flex={1}>
                            <SizableText fontSize={16} fontWeight="600">
                                Types d'exercices :
                            </SizableText>
                            <SizableText fontSize={16}>
                                Lorem Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                            </SizableText>
                        </YStack>
                    </XStack>

                    <XStack  w="100%" bg="#FFC8C12E" borderBottomLeftRadius={20} borderBottomRightRadius={20} px={10} gap={8} py={15} alignItems="center">
                        <View bg="#000" w={30} h={30} zIndex={50} borderRadius={20} justifyContent="center" alignItems="center">
                            <Ionicons name="checkmark" size={18} color="#fff" />
                        </View>
                        <YStack flex={1}>
                            <SizableText fontSize={16} fontWeight="600">
                                Types d'exercices :
                            </SizableText>
                            <SizableText fontSize={16}>
                                Lorem Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                            </SizableText>
                        </YStack>
                    </XStack>

                </YStack>
            </YStack>

<View h={100}/>
        </ScrollView>
            <View elevationAndroid={5} position="absolute" borderTopLeftRadius={20} borderTopRightRadius={20} bottom={0} left={0} w="100%" >
                <View opacity={0.7} top={0} bottom={0} left={0} right={0} bg="#fff" position="absolute" />
                <View flex={1} p={20}>
                    <Button bg="#FF5540" w="100%" borderRadius={10} size="$5" onPress={() => router.push("/(home)/(tabs)/program/training")}>
                        <SizableText fontWeight="700" color="#fff" fontSize={18}>
                            DEBUTEZ LE PARCOURS
                        </SizableText>
                    </Button>
                </View>
            </View>
        </YStack>
    );
};

export default ProgramDetail;