import React from 'react';
import {Button, ButtonText, Label, ScrollView, SizableText, Switch, View, XStack, YStack} from "tamagui";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";
import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useRouter} from "expo-router";

const Paywall = () => {
    const router = useRouter();
    return (
        <LinearGradient
            colors={[
                Colors.light.red,
                Colors.light.red,
                "rgb(255,255,255)",
                "rgb(255,255,255)",
                "rgb(255,255,255)",
                "rgb(255,255,255)",
            ]}
            style={[StyleSheet.absoluteFillObject, {flex: 1, width: "100%"}]}
        >
            <SafeAreaView
                style={{flex: 1, position: "relative"}}>
                <ScrollView flex={1} showsVerticalScrollIndicator={false} pt={50} px={20}>
                    <SizableText
                        fontWeight="700"
                        fontSize="$8"
                        lineHeight="$8"
                        textAlign="center"
                        color={Colors.light.background}
                    >
                        Profite gratuitement
                        de ton programme
                    </SizableText>
                    <YStack position="relative" w="100%" mt={25} gap={5}>
                        <YStack position="absolute" top={62} bottom={62} w={3} bg="#000000" zIndex={1} left={15}>
                            <YStack flex={1} bg={Colors.light.red}/>
                            <YStack flex={1} bg="#C6C6C6"/>
                        </YStack>
                        <XStack w="100%" gap={8} alignItems="center">
                            <View bg={Colors.light.red} w={30} h={30} borderRadius={20} zIndex={50}
                                  justifyContent="center" alignItems="center">
                                <Ionicons name="lock-closed" size={18} color="#fff"/>
                            </View>
                            <LinearGradient
                                colors={[Colors.light.redLight, '#FFFFFF']}
                                locations={[1, 0.5]}

                                style={{
                                    borderRadius: 20,
                                    padding: 15,
                                    flex: 1,
                                    borderWidth: 1,
                                    borderColor: Colors.light.red
                                }}
                            >

                                <SizableText fontSize="$5" color={Colors.light.red} fontWeight="700">
                                    Aujourd’hui
                                </SizableText>
                                <SizableText fontSize="$3" fontWeight="500">
                                    Essaye gratuitement 7 jours puis 14,95€/mois (soit 0,49cts/mois).
                                </SizableText>
                                <SizableText fontSize="$3" lineHeight="$1" mt={5} fontStyle="italic" pl={10}>
                                    Pas d’engagement.
                                </SizableText>
                                <SizableText fontSize="$3" lineHeight="$1" fontStyle="italic" pl={10}>
                                    Désabonne-toi à tout moment.
                                </SizableText>

                            </LinearGradient>
                        </XStack>

                        <XStack w="100%" gap={8} alignItems="center">
                            <View bg="#EDEDED" w={30} h={30} zIndex={50} borderRadius={20} justifyContent="center"
                                  alignItems="center">
                                <Ionicons name="notifications" size={18} color="#C6C6C6"/>
                            </View>
                            <YStack flex={1} bg={Colors.light.background} p={15} borderRadius={20} borderWidth={1}
                                    borderColor="#888888">
                                <SizableText fontSize="$5" color={Colors.light.red} fontWeight="700">
                                    Jour 5
                                </SizableText>
                                <SizableText fontSize="$3" lineHeight="$1" fontWeight="500">
                                    Tu reçois un rappel t’indiquant la fin de ta période d’essai.
                                </SizableText>
                            </YStack>
                        </XStack>

                        <XStack w="100%" gap={8} alignItems="center">
                            <View bg="#EDEDED" w={30} h={30} zIndex={50} borderRadius={20} justifyContent="center"
                                  alignItems="center">
                                <Ionicons name="checkbox" size={18} color="#C6C6C6"/>
                            </View>
                            <YStack flex={1} bg={Colors.light.background} p={15} borderRadius={20} borderWidth={1}
                                    borderColor="#888888">
                                <SizableText fontSize="$5" color={Colors.light.red} fontWeight="700">
                                    Jour 7
                                </SizableText>
                                <SizableText fontSize="$3" lineHeight="$1" fontWeight="500">
                                    Débit automatique du compte.
                                </SizableText>
                                <SizableText fontSize="$3" lineHeight="$1" color={Colors.light.red} fontStyle="italic"
                                             fontWeight="500">
                                    Tu pourras annuler à tout moment mais au moins 24h avant la fin de ton essai.
                                </SizableText>
                            </YStack>
                        </XStack>


                    </YStack>
                    <XStack flex={1} px={20} mt={20} alignItems="center" gap="$4">
                        <Ionicons name="notifications" size={18} color={Colors.light.red}/>
                        <Label
                            paddingRight="$0"
                            minWidth={90}
                            justifyContent="flex-end"
                            fontWeight="600"
                            size="$3"
                            lineHeight="$1"
                            htmlFor="notif"
                            flex={1}
                        >
                            Recevoir un rappel au
                            5ème jour de l’essai gratuit
                        </Label>
                        <Switch id="notif" size="$2" defaultChecked={true}>
                            <Switch.Thumb animation="bouncy"/>
                        </Switch>
                    </XStack>
                    <XStack justifyContent="center" mt={20}>
                        <Button onPress={() => router.push("/paywall2")} bg={Colors.light.red}>
                            <ButtonText color={Colors.light.background}>En Savoir +</ButtonText>
                        </Button>
                    </XStack>
                    <View h={150}/>
                </ScrollView>

            </SafeAreaView>
            <XStack flex={1} elevationAndroid={5} position="absolute" borderTopLeftRadius={20} borderTopRightRadius={20}
                    bottom={0} left={0}>
                <View opacity={0.7} flex={1} top={0} bottom={0} left={0} right={0} bg="#fff" position="absolute"/>
                <XStack flex={1} p={20} py={30}>
                    <XStack bg="#000" flex={1} justifyContent="center" py={5} borderRadius={10}
                            onPress={() => router.push("/(home)/(tabs)/program")}>
                        <SizableText textAlign="center" fontWeight="700" color="#fff" fontSize="$5">
                            Patricia, commence ta semaine gratuite maintenant !
                        </SizableText>
                    </XStack>
                </XStack>
            </XStack>
        </LinearGradient>
    );
};

export default Paywall;