import {SizableText, YStack, View} from "tamagui";
import {Image, ImageSourcePropType} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

type CircuitCardProps = {
    image: ImageSourcePropType;
    title: string;
    size?: number;
    showName?: boolean;
}

const ExerciseCard = ({image, title, size, showName}: CircuitCardProps) => {
    const router = useRouter();
    return (
        <YStack w={size ? size : 180} mr={10} onPress={() => router.push("/(home)/(tabs)/program/circuit")}>
            <View h={size ? (size - 10) : 130} borderRadius={20} borderWidth={1} borderColor="#fff" overflow="hidden" mb={5} position="relative">
                <View position="absolute" bg="rgba(0,0,0,0.2)" h="100%" w="100%" left={0} zIndex={10} top={0} justifyContent="center" alignItems="center">
                    <Ionicons name="play" size={40} color="#fff"/>
                </View>
                <Image
                    resizeMode="cover"
                    source={image}
                    style={{width: "100%", height: "100%"}}
                />
            </View>
            { (showName == undefined || showName == true) && (<SizableText fontSize="$6" color="#888888" fontWeight="500" numberOfLines={1} textAlign="center">
                {title}
            </SizableText>)}
        </YStack>
    );
};

export default ExerciseCard;