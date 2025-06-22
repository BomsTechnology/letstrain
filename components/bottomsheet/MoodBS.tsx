import {Button, Sheet, SizableText, View, XStack, YStack} from "tamagui";
import {Colors} from "@/constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import {Dispatch, SetStateAction, useState} from "react";
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import MoodCard from "@/components/card/MoodCard";

const MoodBs = ({open, setOpen}: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => {
    const [selected, setSelected] = useState<boolean>(false)

    return (
        <Sheet modal snapPoints={[80, 90]} dismissOnSnapToBottom
               open={open}
               onOpenChange={() => {
                   setOpen((v) => !v);
                   if(open) setSelected(false);
               }}
        >
            <Sheet.Overlay
                enterStyle={{opacity: 0}}
                exitStyle={{opacity: 0}}
            />

            <Sheet.Handle/>
            <Sheet.Frame flex={1} borderTopRightRadius={40} borderTopLeftRadius={40}>
                <LinearGradient
                    colors={[
                        "rgb(255,255,255)",
                        "rgb(255,255,255)",
                        Colors.light.blue,
                    ]}
                    style={[StyleSheet.absoluteFillObject]}
                >
                    <XStack justifyContent="flex-end" px={20} pt={20}>
                        <Button borderRadius={99} onPress={() => {
                            setOpen(false);
                            setSelected(false);
                        }} h={30} w={30} p={0}>
                            <Ionicons name="close" size={20} color="#888888"/>
                        </Button>
                    </XStack>
                    <Sheet.ScrollView p={20}>
                        {selected ? <YStack>
                                <SizableText textAlign="center" fontSize={50} lineHeight={55}>🌟</SizableText>
                                <SizableText textAlign="center" maxWidth="70%" color={Colors.light.blueDark} mx="auto" fontWeight="700" fontSize="$8">
                                    On a le podcast parfait pour toi !</SizableText>
                                <SizableText fontWeight="500" mb={20} color="#888888" fontSize={18} textAlign="center" mt={20}>Lorem
                                    ipsum dolor sit
                                    amet consectetur adipiscing elit Ut et lorem ipsum dolor sit amet consectetur
                                    adipiscing
                                    elit Ut et..</SizableText>
                                <MoodCard/>
                            </YStack>
                            :
                            <YStack>
                                <SizableText textAlign="center" maxWidth="70%" mx="auto" fontWeight="700" fontSize="$8">
                                    💭 Quel est ton humeur du jour ?</SizableText>
                                <SizableText fontWeight="500" color="#888888" fontSize={18} textAlign="center" mt={20}>Lorem
                                    ipsum dolor sit
                                    amet consectetur adipiscing elit Ut et lorem ipsum dolor sit amet consectetur
                                    adipiscing
                                    elit Ut et..</SizableText>
                                <XStack flex={1} onPress={() => setSelected(true)} mt={30} justifyContent="center" alignItems="center" gap={10}>
                                    <YStack justifyContent="center" width={100} py={20} borderRadius={15}
                                            alignItems="center"
                                            backgroundColor="#F2F2F2">
                                        <SizableText fontSize={30} lineHeight={34}>😁</SizableText>
                                        <SizableText fontWeight="500" fontSize={16}>Au top</SizableText>
                                    </YStack>
                                    <YStack justifyContent="center" width={100} py={20} borderRadius={15}
                                            alignItems="center"
                                            backgroundColor="#F2F2F2">
                                        <SizableText fontSize={30} lineHeight={34}>😐</SizableText>
                                        <SizableText fontWeight="500" fontSize={16}>Bof</SizableText>
                                    </YStack>
                                    <YStack width={100} justifyContent="center" py={20} borderRadius={15}
                                            alignItems="center"
                                            backgroundColor="#F2F2F2">
                                        <SizableText fontSize={30} lineHeight={34}>☹️</SizableText>
                                        <SizableText fontWeight="500" fontSize={16}>Pas Bien</SizableText>
                                    </YStack>
                                </XStack>
                            </YStack>}
                        <View h={50}/>
                    </Sheet.ScrollView>
                </LinearGradient>
            </Sheet.Frame>
        </Sheet>
    );
};

export default MoodBs;