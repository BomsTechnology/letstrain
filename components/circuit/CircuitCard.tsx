import {SizableText, View, XStack, YStack} from "tamagui";
import {Image, ImageSourcePropType} from "react-native";

export type CircuitItemStepProps = {
    image: ImageSourcePropType,
    title: string,
    description: string,
    difficultVersion: boolean,
    easyVersion: boolean,
    round: string
};

const CircuitCard = ({data, showTitle = true}: { data: CircuitItemStepProps, showTitle: boolean }) => {
    return (
        <YStack w="30%" justifyContent="center" alignItems="center">
            <View h={85} borderRadius={20} w="100%" overflow="hidden" mb={5} position="relative">
                <View position="absolute" bg="rgba(0,0,0,0.2)" h="100%" w="100%" left={0} zIndex={10} top={0}
                      justifyContent="center" alignItems="center">
                    <SizableText fontSize="$5" color="#fff" fontWeight="500">
                        GIF
                    </SizableText>
                </View>
                <Image
                    resizeMode="cover"
                    source={data.image}
                    style={{width: "100%", height: "100%"}}
                />
            </View>
            <XStack elevation={5} bg="#fff" mt={-20} mb={5} py={5} px={10} borderRadius={10} justifyContent="center"
                    alignItems="center">
                <SizableText fontSize="$5" color="#000" fontWeight="700">
                    X{data.round}
                </SizableText>
            </XStack>
            {showTitle && (
                <SizableText fontSize="$5" fontStyle="italic" color="#888888" fontWeight="500" numberOfLines={1}
                             textAlign="center">
                    {data.title}
                </SizableText>)}
        </YStack>

    )
}

export default CircuitCard;