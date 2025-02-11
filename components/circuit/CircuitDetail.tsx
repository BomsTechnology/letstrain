import {SizableText, View, XStack, YStack} from "tamagui";
import CircuitCard, {CircuitItemStepProps} from "@/components/circuit/CircuitCard";
import {Colors} from "@/constants/Colors";


const Circuit = ({datas}: { datas: CircuitItemStepProps[] }) => {
    return (
        <YStack px={20} mt={10} w="100%">
            {datas.map((d, index) => (
                <XStack py={20} key={index} gap={20} borderBottomWidth={(datas.length === index + 1) ? 0.5 : 0} borderColor="#C6C6C680">
                    <CircuitCard data={d} showTitle={false} />
                    <YStack>
                        <SizableText fontSize="$7" textTransform="uppercase" lineHeight="$1" fontWeight="700"
                                     textAlign="left">
                            {d.title}
                        </SizableText>
                        <SizableText fontSize="$5" mb={5} fontWeight="400" color="#888888" textAlign="left">
                            {d.description}
                        </SizableText>
                        {(d.difficultVersion || d.easyVersion) && <View py={5} px={10} borderRadius={5}
                                                                              bg={d.difficultVersion ? Colors.light.redLight : Colors.light.blue}>
                            <SizableText fontSize="$5" fontWeight="400">
                                Version {d.difficultVersion ? 'difficile' : 'facile'} disponible
                            </SizableText>
                        </View>}
                    </YStack>
                </XStack>
            ))}
        </YStack>
    );
};


export default Circuit;