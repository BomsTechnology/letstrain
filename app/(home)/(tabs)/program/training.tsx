import {Button, ScrollView, SizableText, View, XStack, YStack} from "tamagui";
import {LinearGradient} from 'expo-linear-gradient';
import {Image, StyleSheet} from 'react-native';
import {AntDesign, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";
import React from "react";
import ExerciseCard from "@/components/card/ExerciseCard";
import {circuits, exercises} from "@/data/exercises";
import Circuit from "@/components/circuit/Circuit";
import {useRouter} from "expo-router";

const Training = () => {
    const router = useRouter();
    return (
        <YStack bg="#fff" flex={1} w="100%">
            <LinearGradient
                colors={['#FFF4F3', '#FFFFFF']}
                locations={[0.8, 1]}
                style={styles.calendar}>
                <YStack p={8} borderRadius={15} bg={Colors.light.redDark} elevation={5} justifyContent="center"
                        alignItems="center">
                    <AntDesign name="checkcircle" size={15} color="#fff"/>
                    <SizableText fontWeight="500" color="#fff">Lun.</SizableText>
                </YStack>
                <YStack bg="#fff" p={8} borderRadius={15} elevation={5} justifyContent="center" alignItems="center">
                    <View h={15} w={15} borderRadius={15} borderWidth={0.5} borderColor="#000"/>
                    <SizableText fontWeight="500" color="#000">Mar.</SizableText>
                </YStack>
                <YStack bg="#fff" p={8} borderRadius={15} elevation={5} justifyContent="center" alignItems="center">
                    <View h={15} w={15} borderRadius={15} borderWidth={0.5} borderColor="#000"/>
                    <SizableText fontWeight="500" color="#000">Mer.</SizableText>
                </YStack>
                <YStack bg="#fff" p={8} borderRadius={15} elevation={5} justifyContent="center" alignItems="center">
                    <View h={15} w={15} borderRadius={15} borderWidth={0.5} borderColor="#000"/>
                    <SizableText fontWeight="500" color="#000">Jeu.</SizableText>
                </YStack>
                <YStack bg="#fff" p={8} borderRadius={15} elevation={5} justifyContent="center" alignItems="center">
                    <View h={15} w={15} borderRadius={15} borderWidth={0.5} borderColor="#000"/>
                    <SizableText fontWeight="500" color="#000">Ven.</SizableText>
                </YStack>
                <YStack bg="#fff" p={8} borderRadius={15} elevation={5} justifyContent="center" alignItems="center">
                    <View h={15} w={15} borderRadius={15} borderWidth={0.5} borderColor="#000"/>
                    <SizableText fontWeight="500" color="#000">Sam.</SizableText>
                </YStack>
                <YStack bg="#fff" p={8} borderRadius={15} elevation={5} justifyContent="center" alignItems="center">
                    <View h={15} w={15} borderRadius={15} borderWidth={0.5} borderColor="#000"/>
                    <SizableText fontWeight="500" color="#000">Dim.</SizableText>
                </YStack>
            </LinearGradient>
            <ScrollView flex={1} w="100%" showsVerticalScrollIndicator={false}>
                <View position="relative">
                    <View w="100%"
                          h="100%"
                          justifyContent="center"
                          alignItems="center"
                          zIndex={1}
                          bg="rgba(0,0,0,0.25)" position="absolute">
                        <SizableText
                            fontWeight="700"
                            fontSize="$9"
                            lineHeight="$8"
                            textAlign="center"
                            color="#fff"
                        >
                            Je garde mes formes
                        </SizableText>
                    </View>
                    <Image
                        resizeMode="cover"
                        source={require("@/assets/images/program/detail.png")}
                        style={{width: "100%", height: 180}}
                    />
                </View>


                <YStack p={20} gap={15} mt={15}>
                    <XStack w="100%" bg="#FFC8C12E" px={10} py={15} borderRadius={20}>
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
                    <YStack w="100%" gap={15} p={20} borderRadius={20}>
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
                    </YStack>
                    <LinearGradient
                        colors={[Colors.light.redLight, '#FFFFFF']}
                        end={{y: 1, x: 0.9}}
                        start={{x: 0.1, y: 0}}
                        style={styles.point}>
                        <AntDesign name="star" size={20} color={Colors.light.redDark}/>
                        <SizableText fontSize={16} fontWeight="600" color={Colors.light.redDark}>
                            Points : 0000 pts
                        </SizableText>
                    </LinearGradient>
                    <YStack gap={5}>
                        <XStack bg={Colors.light.red} p={15} borderRadius={20} alignItems="center"
                                justifyContent="space-between">
                            <XStack alignItems="center" gap={20}>
                                <View h={40} w={40} borderRadius={20} bg="#fff" justifyContent="center"
                                      alignItems="center">
                                    <SizableText fontSize="$8"
                                                 lineHeight="$8" fontWeight="700">1</SizableText>
                                </View>
                                <XStack gap={5}>
                                    <SizableText color="#fff" fontSize="$7"
                                                 lineHeight="$8" fontWeight="700"
                                                 numberOfLines={1}>ECHAUFFEMENT</SizableText>
                                    <SizableText color="#fff" fontSize="$7"
                                                 lineHeight="$8" fontWeight="500">5-10min</SizableText>
                                </XStack>
                            </XStack>
                            <View h={40} w={40} borderRadius={20} bg={Colors.light.redDark} justifyContent="center"
                                  alignItems="center">
                                <Ionicons name="play" size={20} color={Colors.light.background}/>
                            </View>
                        </XStack>
                        <XStack bg="#EFEFEF" p={15} borderRadius={20} alignItems="center"
                                justifyContent="space-between">
                            <XStack alignItems="center" gap={20}>
                                <View h={40} w={40} borderRadius={20} bg="#000" justifyContent="center"
                                      alignItems="center">
                                    <SizableText fontSize="$8"
                                                 lineHeight="$8" color="#fff" fontWeight="700">2</SizableText>
                                </View>
                                <YStack>
                                    <SizableText color="#000" fontSize="$7"
                                                 lineHeight="$1" fontWeight="700"
                                                 numberOfLines={1}>RECUPERATION</SizableText>
                                    <SizableText color="#888888" fontSize="$6"
                                                 lineHeight="$1" fontWeight="500">5-10min</SizableText>
                                </YStack>
                            </XStack>
                            <SizableText color="#000" fontSize="$7"
                                         lineHeight="$1" fontWeight="500">X-Xmin</SizableText>
                        </XStack>
                    </YStack>
                    <XStack gap={15}>
                        <YStack bg="#FFC8C12E" flex={1} py={15} px={15} gap={5} borderRadius={10} alignItems="center">
                            <MaterialCommunityIcons name="weight-lifter" size={40} color={Colors.light.red}/>
                            <SizableText fontSize={16} fontWeight="500">
                                Poids 5kg
                            </SizableText>
                        </YStack>
                        <YStack bg="#FFC8C12E" flex={1} py={15} px={15} gap={5} borderRadius={10} alignItems="center">
                            <MaterialCommunityIcons name="timer" size={40} color={Colors.light.red}/>
                            <SizableText fontSize={16} fontWeight="500">
                                20-25 min
                            </SizableText>
                        </YStack>
                        <YStack bg="#FFC8C12E" flex={1} py={15} px={15} gap={5} borderRadius={10} alignItems="center">
                            <MaterialCommunityIcons name="chart-bar" size={40} color={Colors.light.red}/>
                            <SizableText fontSize={16} fontWeight="500">
                                Intensité
                            </SizableText>
                        </YStack>
                    </XStack>
                    <XStack gap={15}>
                        <XStack flex={1} bg="#FFC8C12E" borderRadius={10} py={20} px={20}>
                            <YStack gap={10}>
                                <SizableText color={Colors.light.red} fontSize="$9"
                                             lineHeight="$8" fontWeight="700">Muscles ciblés</SizableText>
                                <SizableText color="#888888" fontSize="$6"
                                             lineHeight="$1" fontWeight="500">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                    Ut et.
                                </SizableText>
                            </YStack>
                        </XStack>
                        <XStack flex={1} borderWidth={1} py={15} px={10} borderRadius={10} alignItems="center"
                                justifyContent="center" borderColor={Colors.light.red}>
                            <Image
                                resizeMode="contain"
                                source={require("@/assets/images/muscle.png")}
                                style={{height: '100%'}}
                            />
                        </XStack>
                    </XStack>
                </YStack>

                <SizableText fontSize="$9" lineHeight="$8" maxWidth="80%" mx="auto" fontWeight="700" textAlign="center"
                             mt={25}>
                    Un aperçu de ta séance
                </SizableText>
                <SizableText fontSize="$7" lineHeight="$8" maxWidth="80%" mx="auto" color="#888888" fontWeight="400"
                             textAlign="center">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                </SizableText>
                <ScrollView horizontal={true} flex={1} pl={20} mt={20} showsHorizontalScrollIndicator={false}>
                    {
                        exercises.map((exercise, index) => (
                            <ExerciseCard image={exercise.image} title={exercise.title} key={index}/>
                        ))
                    }
                </ScrollView>

                <XStack mt={25} bg={Colors.light.red} justifyContent="center" px={10} py={5} borderRadius={20}
                        alignItems="center" mx="auto" maxWidth="80%" w="100%">
                    <SizableText fontSize="$9" lineHeight="$8" color="#fff" fontWeight="600" textAlign="center"
                                 numberOfLines={1}>
                        Ta séance
                    </SizableText>
                </XStack>
                <Circuit datas={circuits}/>

                <YStack px={20} gap={20}>
                    <XStack bg="#EFEFEF" p={15} borderRadius={20} alignItems="center" justifyContent="space-between">
                        <XStack alignItems="center" gap={20}>
                            <View h={40} w={40} borderRadius={20} bg="#000" justifyContent="center"
                                  alignItems="center">
                                <SizableText fontSize="$8"
                                             lineHeight="$8" color="#fff" fontWeight="700">2</SizableText>
                            </View>
                            <YStack>
                                <SizableText color="#000" fontSize="$7"
                                             lineHeight="$1" fontWeight="700"
                                             numberOfLines={1}>RECUPERATION</SizableText>
                                <SizableText color="#888888" fontSize="$6"
                                             lineHeight="$1" fontWeight="500">5-10min</SizableText>
                            </YStack>
                            <SizableText color="#000" fontSize="$7"
                                         lineHeight="$1" fontWeight="500">X-Xmin</SizableText>
                        </XStack>

                        <View h={40} w={40} borderRadius={20} bg="#888888" justifyContent="center"
                              alignItems="center">
                            <Ionicons name="play" size={20} color={Colors.light.background}/>
                        </View>
                    </XStack>
                    <XStack bg="#000" p={20} borderRadius={20} alignItems="center" justifyContent="center">
                        <SizableText color="#fff" fontSize="$7" fontWeight="700" numberOfLines={1}>J’AI
                            FINI MA SÉANCE </SizableText>
                        <AntDesign name="checkcircle" size={20} color={Colors.light.background}/>
                    </XStack>
                    <XStack borderWidth={1} borderColor="#19D6ED" borderRadius={20} overflow="hidden">

                        <LinearGradient
                            colors={['#015C68', '#C9F9FF']}
                            end={{y: 1, x: 1}}
                            start={{x: 0.5, y: 0}}
                            style={styles.button}>
                            <SizableText color="#fff" fontSize="$7"
                                         fontWeight="700"
                                         numberOfLines={1}>🧠 J’ENTRAÎNE MON MENTAL</SizableText>
                        </LinearGradient>
                    </XStack>
                </YStack>
                <View h={100}/>
            </ScrollView>
            <View elevationAndroid={5} position="absolute" borderTopLeftRadius={20} borderTopRightRadius={20} bottom={0}
                  left={0} w="100%">
                <View opacity={0.5} top={0} bottom={0} left={0} right={0} bg="#fff" position="absolute"/>
                <XStack flex={1} p={10} gap={10}>
                    <Button bg="#FFF" flex={1} borderRadius={40} px={8} size="$5" borderWidth={2} borderColor="#888888"
                            onPress={() => router.push("/(home)/(tabs)/program/training")}>
                        <SizableText fontWeight="700" color="#888888" fontSize={16}>
                            ADAPTER LA SEANCE
                        </SizableText>
                    </Button>
                    <Button bg="#000" flex={0.7} borderRadius={40} size="$5"
                            onPress={() => router.push("/(home)/(tabs)/program/training")}>
                        <SizableText fontWeight="700" color="#fff" fontSize={16}>
                            DEMARRER
                        </SizableText>
                    </Button>
                </XStack>
            </View>
        </YStack>
    );
};

export default Training;

const styles = StyleSheet.create({
    calendar: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
    },
    point: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        borderRadius: 10,
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
});