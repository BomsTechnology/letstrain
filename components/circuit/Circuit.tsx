import {SizableText, View, XStack, YStack} from "tamagui";
import {Colors} from "@/constants/Colors";
import CircuitCard, {CircuitItemStepProps} from "@/components/circuit/CircuitCard";

type CircuitItemProps = {
    title: string,
    duration: string,
    round: string,
    difficultVersion: boolean,
    easyVersion: boolean,
    items: CircuitItemStepProps[],
};

type CircuitProps = CircuitItemProps[];

const Circuit = ({datas}: { datas: CircuitProps }) => {
    return (
        <YStack px={20} mt={10} w="100%">
            {datas.map((d, index) => (
                <CircuitItem data={d} key={index} isLast={datas.length === index + 1}/>
            ))}
        </YStack>
    );
};

const CircuitItem = ({data, isLast}: { data: CircuitItemProps, isLast: boolean }) => {
    return (
        <XStack pt={30} position="relative" alignItems="flex-start" flex={1}>
            {!isLast && <View position="absolute" bg={Colors.light.red} w={2} top={30} left={8} bottom={-30}/>}
            <View h={20} zIndex={10} bg={Colors.light.red} borderRadius={10} w={20}/>
            <XStack flex={1}>
                <YStack ml={15} flex={1} borderBottomWidth={!isLast ? 0.5 : 0} borderColor="#C6C6C680" pb={30}
                        alignItems="flex-start">
                    <SizableText fontSize="$7" textTransform="uppercase" lineHeight="$1" fontWeight="700"
                                 textAlign="left">
                        {data.title}
                    </SizableText>
                    <SizableText fontSize="$5" my={5} fontWeight="400" color="#888888" textAlign="left">
                        {data.duration} ‣ {data.round}
                    </SizableText>
                    {(data.difficultVersion || data.easyVersion) && <View py={5} px={10} borderRadius={5}
                                                                          bg={data.difficultVersion ? Colors.light.redLight : Colors.light.blue}>
                        <SizableText fontSize="$5" fontWeight="400">
                            Version {data.difficultVersion ? 'difficile' : 'facile'} disponible
                        </SizableText>
                    </View>}
                    <XStack mt={20} gap={15} w="100%" flex={1} overflow="hidden" flexWrap="wrap">
                        {data.items.map((item, index) => (
                            <CircuitCard data={item} key={index}/>
                        ))}
                    </XStack>
                </YStack>
            </XStack>
        </XStack>
    );
};

export default Circuit;