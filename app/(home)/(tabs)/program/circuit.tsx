import {Button, ScrollView, SizableText, View, XStack, YStack} from "tamagui";
import {LinearGradient} from 'expo-linear-gradient';
import {Image, StyleSheet} from 'react-native';
import {AntDesign, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";
import React from "react";
import ExerciseCard from "@/components/card/ExerciseCard";
import {circuits, exercises} from "@/data/exercises";
import Circuit from "@/components/circuit/Circuit";
import CircuitDetail from "@/components/circuit/CircuitDetail";
import {useRouter} from "expo-router";

const Training = () => {
    const router = useRouter();
    return (
        <YStack bg="#fff" flex={1} w="100%">
            <ScrollView flex={1} w="100%" showsVerticalScrollIndicator={false}>
                <XStack mt={25} bg="#000" justifyContent="center" px={10} py={5} borderRadius={20}
                        alignItems="center" mx="auto" maxWidth="80%" w="100%">
                    <SizableText fontSize="$8" lineHeight="$8" color="#fff" fontWeight="600" textAlign="center"
                                 numberOfLines={1}>
                        CIRCUIT 3
                    </SizableText>
                </XStack>
                <SizableText fontSize="$8" lineHeight="$8" maxWidth="80%" mx="auto" fontWeight="700" textAlign="center"
                             mt={25}>
                    Un aperçu de ta séance
                </SizableText>
                <SizableText fontSize="$5" lineHeight="$8" maxWidth="80%" mx="auto" color="#888888" fontWeight="400"
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

                <XStack gap={15} px={20} mt={40}>
                    <YStack bg="#F2F2F2" flex={1} py={15} px={15} gap={5} borderRadius={10} alignItems="center">
                        <MaterialCommunityIcons name="weight-lifter" size={40} color="#000" />
                        <SizableText fontSize={16} fontWeight="500">
                            Poids 5kg
                        </SizableText>
                    </YStack>
                    <YStack bg="#F2F2F2" flex={1} py={15} px={15} gap={5} borderRadius={10} alignItems="center">
                        <MaterialCommunityIcons name="timer" size={40} color="#000"/>
                        <SizableText fontSize={16} fontWeight="500">
                            20-25 min
                        </SizableText>
                    </YStack>
                    <YStack bg="#F2F2F2" flex={1} py={15} px={15} gap={5} borderRadius={10} alignItems="center">
                        <MaterialCommunityIcons name="chart-bar" size={40} color="#000"/>
                        <SizableText fontSize={16} fontWeight="500">
                            Intensité
                        </SizableText>
                    </YStack>
                </XStack>

                <CircuitDetail datas={circuits[2].items}/>
                <XStack mt={25} bg="#000" justifyContent="center" px={10} py={5} borderRadius={20}
                        alignItems="center" mx="auto" maxWidth="80%" w="100%">
                    <SizableText fontSize="$8" lineHeight="$8" color="#fff" fontWeight="600" textAlign="center"
                                 numberOfLines={1}>
                        MUSCLES CIBLES
                    </SizableText>
                </XStack>
                <XStack flex={1} mt={40} alignItems="center" justifyContent="center" >
                    <Image
                        resizeMode="contain"
                        source={require("@/assets/images/muscle.png")}
                        style={{height: 300, width: '100%'}}
                    />
                </XStack>
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
                            onPress={() => router.push("/(home)/(tabs)/program/instructions")}>
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