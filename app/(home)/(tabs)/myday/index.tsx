import {ScrollView, SizableText, View, XStack, YStack} from "tamagui";
import {Colors} from "@/constants/Colors";
import MyDayCard from "@/components/card/MyDayCard";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import {useRouter} from "expo-router";
import MoodBS from "@/components/bottomsheet/MoodBS";


export default function TabTwoScreen() {
    const router = useRouter();
    const [openMood, setOpenMood] = useState(false);
    const datas = [
        {
            img: "🍽",
            title: "Repas du jour",
            description: "Calcule tes calories journalières facilement.",
            goal: "1800 cal.",
            action: () => router.push('/(home)/(tabs)/myday/food')
        },
        {
            img: "💦",
            title: "Boire de l'eau",
            description: "Rempli ton objectif d’hydratation quotidienne.",
            goal: "3 Litres",
            action: () => router.push('/(home)/(tabs)/myday/water')
        },
        {
            img: "👟",
            title: "Marche",
            description: "Relève le challenge pas du jour !",
            goal: "8000 pas 🎉",
            action: () => router.push('/(home)/(tabs)/myday/walk')
        },
        {
            img: "💭",
            title: "Mood du jour",
            description: "Comment te sens-tu aujourd’hui ? ☺️",
            action: () => setOpenMood(true)
        }
    ]

    return (
        <>
            <MoodBS open={openMood} setOpen={setOpenMood} />
        <ScrollView bg="#fff" px={20} pt={50} showsVerticalScrollIndicator={false}>
            <SizableText
                fontWeight="600"
                fontSize="$9"
                lineHeight="$8"
                textAlign="center"
                color={Colors.light.red}
            >
                Ma journée
            </SizableText>
            <SizableText
                fontWeight="600"
                fontSize="$6"
                lineHeight="$9"
                textAlign="center"
                mb={20}
                color="#888888"
            >
                Lundi 13 Janvier 2025
            </SizableText>

            <YStack gap={20}>
                <LinearGradient
                    colors={['#015C68', '#C9F9FF']}
                    style={{
                        borderRadius: 20,
                        padding: 20,
                    }}
                >
                    <SizableText
                        fontWeight="600"
                        fontSize="$6"
                        lineHeight="$9"
                        textAlign="center"
                        color="#ffffff"
                    >
                        CITATION DU JOUR
                    </SizableText>
                    <SizableText
                        fontSize="$5"
                        lineHeight="$3"
                        textAlign="center"
                        color="#ffffff"
                        fontWeight="500"
                    >
                        “ Chaque goutte de sueur est une victoire sur tes limites. 🔥💪 ”
                    </SizableText>
                </LinearGradient>


                <MyDayCard/>
                {datas.map((data, index) => (
                    <DayCard key={index} title={data.title} img={data.img} description={data.description} action={data.action}
                             goal={data.goal}/>
                ))}

                <XStack gap={10}>
                    <SizableText fontSize={20}>💪</SizableText>
                    <YStack>
                        <SizableText fontWeight="700" fontSize="$5">Besoin de te dépenser ?</SizableText>
                        <SizableText fontWeight="500" lineHeight="$1">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.</SizableText>
                    </YStack>
                </XStack>
                <XStack  gap={10} alignItems="center" flexWrap="wrap">
                    <XStack bg={Colors.light.red}  justifyContent="center" alignItems="center" width="48%" h={50}  p={10} borderRadius={10}>
                        <SizableText textAlign="center" fontWeight="600" color="#fff">Créer ma séance</SizableText>
                    </XStack>
                    <XStack bg="#000" p={10} justifyContent="center" alignItems="center" width="48%" h={50} borderRadius={10}>
                        <SizableText textAlign="center" lineHeight={15} fontWeight="600" color="#fff">Me proposer une séance</SizableText>
                    </XStack>
                    <XStack bg="#000" p={10} justifyContent="center" alignItems="center" width="48%" h={50} borderRadius={10}>
                        <SizableText textAlign="center" lineHeight={15} fontWeight="600" color="#fff">Récupérations/Étirements</SizableText>
                    </XStack>
                    <XStack bg="#000" p={10} justifyContent="center" alignItems="center" width="48%" h={50} borderRadius={10}>
                        <SizableText textAlign="center" lineHeight={15} fontWeight="600" color="#fff">Course/Marche</SizableText>
                    </XStack>
                </XStack>
            </YStack>
            <View h={100}/>
        </ScrollView>
        </>
    );
}

const DayCard = ({
                     img,
                     title,
                     description,
                     goal,
                     action
                 } : {
    img: string,
    title: string,
    description: string,
    goal?: string,
    action: Function
}) => {

    return (
        <XStack onPress={() => action()} bg="#fff" borderWidth={0.5} borderColor="#888888" alignItems="center" gap={10} flex={1} borderRadius={20} p={20} elevation={5}>
            <SizableText fontSize={30} lineHeight={40}>{img}</SizableText>
            <YStack flex={1} gap={5}>
                <SizableText fontWeight="700" fontSize="$5">{title}</SizableText>
                <SizableText fontWeight="500" lineHeight="$1">{description}</SizableText>
                { goal
                    &&(<XStack alignItems="center" gap={5}>
                    <View h={15} w={15} borderStyle="dashed" borderRadius={20} borderWidth={0.5}/>
                     <XStack>
                        <SizableText fontWeight="500">Objectif :</SizableText>
                        <SizableText fontWeight="600">{goal}</SizableText>
                    </XStack>
                </XStack>)}
            </YStack>
            <XStack>
                <Ionicons name="chevron-forward" size={30} color="#888888"/>
            </XStack>
        </XStack>
    );
}

