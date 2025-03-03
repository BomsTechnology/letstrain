import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet, ImageBackground, ImageSourcePropType, Image} from "react-native";
import {SizableText, XStack, YStack} from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";

type OnboardingPageProps = {
    image: ImageSourcePropType;
    title: string;
    color: string;
    subtitle: string;
    description: string;
}

const OnboardingPage = ({image, title, color, subtitle, description}: OnboardingPageProps) => {
    return (

            <ImageBackground source={image} style={{ flex: 1 }}>
                <LinearGradient
                    colors={[
                        "transparent",
                        "rgba(255,255,255, 0.3)",
                        "rgb(255,255,255)",
                        "rgb(255,255,255)",
                    ]}
                    style={[StyleSheet.absoluteFillObject]}
                />
                <SafeAreaView style={{ flex: 1, padding: 24, paddingBottom: 160 }}>
                    <YStack flex={1} justifyContent="flex-end" maxWidth="90%" mx="auto">
                        <SizableText fontSize="$7" fontWeight="500" color="#000" mx={10}>
                            {title}
                        </SizableText>
                        <XStack
                            bg={color}
                            px={8}
                            py={4}
                            borderRadius={20}
                            alignSelf="flex-start"
                        >
                            <SizableText fontSize="$7" fontWeight="500" color="#fff">
                                {subtitle}
                            </SizableText>
                        </XStack>
                        <SizableText fontWeight="400" fontSize="$5" mt={10}>
                            {description}
                        </SizableText>
                    </YStack>
                </SafeAreaView>
        </ImageBackground>

    );
};

export default OnboardingPage;