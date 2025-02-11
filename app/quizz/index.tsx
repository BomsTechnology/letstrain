import {Button, SizableText, YStack} from "tamagui";
import {Colors} from "@/constants/Colors";
import {Image, ImageBackground, StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Link} from "expo-router";

export default function Quizz() {
    const {bottom} = useSafeAreaInsets()
    return (
        <YStack flex={1} borderTopWidth={1} borderTopColor={Colors.light.red}>
            <ImageBackground resizeMode="cover" source={
                require("@/assets/images/quizz/background.png")
            } style={{flex: 1, overflow: "hidden"}}>
                <View style={[StyleSheet.absoluteFillObject, {flex: 1, backgroundColor: 'rgba(239, 109, 93, .8)'}]}/>
                <YStack pt={50} pb={40} px={60} borderBottomEndRadius={50} borderBottomStartRadius={50} bg="#fff"
                        mb={20}>
                    <SizableText fontWeight="600" fontSize="$9" lineHeight="$7" textAlign="center">
                        Construisons ton programme
                    </SizableText>
                    <SizableText fontWeight="600" fontSize="$9" lineHeight="$7" color={Colors.light.red}
                                 textAlign="center">
                        personnalisé
                    </SizableText>
                    <SizableText textAlign="center" mt={10} fontSize={16} color={Colors.light.text}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                    </SizableText>
                </YStack>
                <YStack px={20} flex={1} pb={bottom + 30} justifyContent="center" alignItems="center">
                    <Image style={{flex: 1}} resizeMode="contain" source={require('@/assets/images/quizz/img1.png')}/>
                    <Link href={{ pathname: "/quizz/step" }} asChild>
                    <Button bg="#000" borderRadius={28} size="$5" width="100%">
                        <SizableText fontWeight="700" color="#fff" fontSize={16}>
                            Continuer
                        </SizableText>
                    </Button>
                    </Link>
                </YStack>
            </ImageBackground>
        </YStack>
    );
}