import {ScrollView, SizableText, View, XStack, YStack} from "tamagui";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import RecipeCard from "@/components/card/RecipeCard";
import {Colors} from "@/constants/Colors";
import Input from "@/components/form/Input";

const Recette = () => {
    const router = useRouter();
    return (<ScrollView bg="#fff" px={20} pt={30} showsVerticalScrollIndicator={false}>
        <XStack
            onPress={() => router.back()}
        >
            <Ionicons name="arrow-back" size={30} color="#000"/>
        </XStack>
        <SizableText
            fontWeight="600"
            fontSize="$9"
            lineHeight="$8"
            textAlign="center"
        >
            Recettes
        </SizableText>
        <SizableText fontSize="$7" maxWidth="80%" mx="auto" lineHeight="$8" textAlign="center" >
            lorem ipsum dolor sit amet consectetur
        </SizableText>
        <Input containerProps={{ bg : "#F4F4F4", borderRadius: 30, my : 30 }} color="#000" icon={{ name: "search", color: "#000" }} placeholder="Recherche une recette" />
        <XStack  justifyContent="center" alignItems="center" maxWidth="80%" w="100%" mx="auto"  mb={50} borderWidth={1}
                 gap={5}
                 borderColor={Colors.light.green}  px={10} py={5}
                 borderRadius={20}>
            <SizableText color={Colors.light.greenDark} flex={1} textAlign="center" size="$7" fontWeight={500}>Tout</SizableText>
            <Ionicons name="chevron-down" size={25} color={Colors.light.greenDark}/>
        </XStack>
        <YStack gap={10}>
            {Array.from({length: 4}).map((_, i) => (
                <RecipeCard key={i}/>))}
        </YStack>
        <View h={100}/>
        </ScrollView>);
};

export default Recette;