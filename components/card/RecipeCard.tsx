import {SizableText, XStack, YStack} from "tamagui";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {Colors} from "@/constants/Colors";
import {Image} from "react-native";
import React from "react";
import {Link} from "expo-router";

const RecipeCard = () => {
    return (
<Link href="/(home)/(tabs)/food/recipe"  asChild>
        <YStack elevation={5} gap={10} bg="#fff" px={15} py={10} borderRadius={20}>
            <XStack justifyContent="space-between" alignItems="center">
                <SizableText color={Colors.light.greenDark} size="$6" fontWeight={700}>Petit déjeuner</SizableText>
                <Ionicons name="heart-outline" size={22} color="#888888"/>
            </XStack>
            <XStack flex={1} justifyContent="space-between" gap={10} alignItems="center">
                <XStack flex={1} alignItems="center" gap={20}>
                    <Image
                        resizeMode="cover"
                        source={require("@/assets/images/recipe/2.png")}
                        style={{width: 130, height: 110, borderRadius: 20}}
                    />
                    <YStack flex={1}>
                        <SizableText color={Colors.light.black} size="$6" mb={10} numberOfLines={1} fontWeight={700}>Lorem ipsum</SizableText>
                        <XStack alignItems="center" gap={5}>
                            <MaterialCommunityIcons name="silverware-fork-knife" mb={10} size={20} color={Colors.light.green}/>
                            <SizableText color="#888888" size="$5" numberOfLines={1} fontWeight={400}>000 calories</SizableText>
                        </XStack>
                        <XStack alignItems="center" gap={5}>
                            <MaterialCommunityIcons name="timer" size={20} color={Colors.light.green}/>
                            <SizableText color="#888888" size="$5" numberOfLines={1} fontWeight={400}>10 min</SizableText>
                        </XStack>
                    </YStack>
                </XStack>
                <Ionicons name="chevron-forward" size={24} color="#888888"/>
            </XStack>
        </YStack>
</Link>
    );
};

export default RecipeCard;