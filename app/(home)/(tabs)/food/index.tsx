import {Accordion, ScrollView, SizableText, View, XStack} from "tamagui";
import {Colors} from "@/constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Href, useRouter} from "expo-router";
import RecipeCard from "@/components/card/RecipeCard";
import React from "react";

const FoodIndex = () => {
    const days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']
    return (
        <ScrollView bg="#fff" px={20} pt={50} showsVerticalScrollIndicator={false}>

            <SizableText
                fontWeight="600"
                fontSize="$9"
                lineHeight="$8"
                textAlign="center"
            >
                Alimentation
            </SizableText>
            <XStack mt={15} mb={30} gap={10} flexWrap="wrap" mx="auto" maxWidth="70%" justifyContent="center"
                    alignItems="center">
                <FoodBadge active text="Menu de la semaine"/>
                <FoodBadge
                    href="/(home)/(tabs)/food/recipes"
                    text="Recettes"
                />
                <FoodBadge
                    href="/(home)/(tabs)/food/advice"
                    text="Conseils"
                />
                <FoodBadge
                    href="/(home)/(tabs)/food/favourite"
                    text="Favoris"
                    icon={<Ionicons name="heart" size={18} color={Colors.light.greenDark}/>}
                />
            </XStack>
            <Accordion overflow="hidden" gap={10} collapsible type="single">
                {Array.from({length: 7}).map((_, i) => (
                <Accordion.Item value={`a${i}`} key={i+6}>
                    <Accordion.Trigger bg="$backgroundTransparent" borderWidth={0} p={0}
                    >
                        {({
                              open,
                          }: {
                            open: boolean
                        }) => (
                            <XStack p={20} borderRadius={20} bg={open ? Colors.light.greenDark : '#EFEFEF'} justifyContent="space-between">
                                <SizableText size="$7" fontWeight={700} color={ open ?"#fff" : Colors.light.greenDark}>{days[i]}</SizableText>
                                <Ionicons name="chevron-down" size={22} color={ open ? "#fff": Colors.light.greenDark}/>
                            </XStack>
                        )}
                    </Accordion.Trigger>
                    <Accordion.HeightAnimator>
                        <Accordion.Content bg="#fff" gap={10}>
                            {Array.from({length: 4}).map((_, i) => (
                            <RecipeCard key={i}/>))}
                        </Accordion.Content>
                    </Accordion.HeightAnimator>
                </Accordion.Item>))}
            </Accordion>
            <View h={100}/>
        </ScrollView>
    )
        ;
};

const FoodBadge = ({active, text, icon, href}: { text: string; active?: boolean, icon?: JSX.Element, href?: Href }) => {
    const router = useRouter();

    return (
        <XStack onPress={() => href && router.push(href)} justifyContent="center" alignItems="center" borderWidth={1}
                gap={5}
                borderColor={active ? '#fff' : Colors.light.green} bg={active ? '#D3FDCC8C' : '#fff'} px={8} py={5}
                borderRadius={20}>
            {icon}
            <SizableText color={Colors.light.greenDark} size="$5" fontWeight={500}>{text}</SizableText>
        </XStack>
    );

};

export default FoodIndex;