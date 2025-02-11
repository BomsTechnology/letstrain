import {QuizzQuestionProps} from "@/types/QuizzProps";
import {questionTypeProps, QuizzDataProps} from "@/data/quizzData";
import {InputQuizz} from "@/components/quizz/inputs/InputQuizz";
import {Image, useWindowDimensions} from "react-native";
import {Colors} from "@/constants/Colors";

export default function RenderInputQuizz({question, type, onPress, multiple, index}: { question:QuizzQuestionProps, type: questionTypeProps, onPress: (index: number, value: string, multiple: boolean) => void, index: number, multiple: boolean }) {
    const { width } = useWindowDimensions()
    const renderQuestionQuizz = () => {
        switch (type) {
            case 'Question1':
                return (
                    <InputQuizz.ItemX gap={10} flex={1} onPress={() => onPress(index, question.value, multiple)} value={question.value}>
                        <InputQuizz.YStack flex={1}  justifyContent="center" alignItems="center">
                        <InputQuizz.Title flex={1} textAlign="center">{question.label}</InputQuizz.Title>
                        {question.description && <InputQuizz.Description
                            textAlign="center">{question.description}</InputQuizz.Description>}
                    </InputQuizz.YStack>
                        <InputQuizz.Check/>
                    </InputQuizz.ItemX>
                );
            case 'Question2':
                return (
                    <InputQuizz.ItemX gap={10} value={question.value} onPress={() => onPress(index, question.value, multiple)}>
                        <InputQuizz.XStack w={120} h={100} borderRadius={10} justifyContent="center" alignItems="center" bg={Colors.light.redLight}>
                            <Image source={question.icon} style={{ width: 40, height: 40 }} resizeMode="contain" />
                        </InputQuizz.XStack>
                        <InputQuizz.YStack flex={1} justifyContent="center" alignItems="center">
                            <InputQuizz.Title fontSize={14} textAlign="center">{question.label}</InputQuizz.Title>
                            {question.description && <InputQuizz.Description
                                                     textAlign="center">{question.description}</InputQuizz.Description>}
                        </InputQuizz.YStack>
                    </InputQuizz.ItemX>
                );
            case 'Question3':
                return (
                    <InputQuizz.ItemY gap={10} width={(width - 80) / 2}  value={question.value} onPress={() => onPress(index, question.value, multiple)}>
                        <InputQuizz.XStack>
                            <Image  source={question.icon} style={{ height: 30, width: 30 }} resizeMode="contain" />
                        </InputQuizz.XStack>
                        <InputQuizz.YStack flex={1} justifyContent="center" alignItems="center">
                        <InputQuizz.Title textAlign="center">{question.label}</InputQuizz.Title>
                            {question.description && <InputQuizz.Description
                                textAlign="center">{question.description}</InputQuizz.Description>}
                        </InputQuizz.YStack>
                    </InputQuizz.ItemY>
                );
            case 'Question4':
                return (
                    <InputQuizz.ItemX gap={10} value={question.value} onPress={() => onPress(index, question.value, multiple)}>
                        <InputQuizz.XStack w={120} h={100} borderRadius={10} justifyContent="center" alignItems="center" borderWidth={1} borderColor={Colors.light.redLight}>
                            <Image source={question.icon} style={{ width: 40, height: 40 }} resizeMode="contain" />
                        </InputQuizz.XStack>
                        <InputQuizz.YStack flex={1} justifyContent="center" alignItems="center">
                            <InputQuizz.Title fontSize={14} textAlign="center">{question.label}</InputQuizz.Title>
                            {question.description && <InputQuizz.Description
                                textAlign="center">{question.description}</InputQuizz.Description>}
                        </InputQuizz.YStack>
                    </InputQuizz.ItemX>
                );
            case 'Question5':
                return (
                    <InputQuizz.ItemX gap={20} value={question.value} onPress={() => onPress(index, question.value, multiple)}>
                        <InputQuizz.Check size={30}/>
                        <InputQuizz.YStack flex={1}  justifyContent="flex-start" alignItems="flex-start">
                            <InputQuizz.Title flex={1} textAlign="left">{question.label}</InputQuizz.Title>
                            {question.description && <InputQuizz.Description
                                textAlign="left">{question.description}</InputQuizz.Description>}
                        </InputQuizz.YStack>
                    </InputQuizz.ItemX>
                );
            case 'Question6':
                return (
                    <InputQuizz.ItemX gap={15} value={question.value} onPress={() => onPress(index, question.value, multiple)}>
                        <InputQuizz.XStack w={80} h={70} borderRadius={10} justifyContent="center" alignItems="center" borderWidth={1} borderColor={Colors.light.redLight}>
                            <Image source={question.icon} style={{ width: 35, height: 35 }} resizeMode="contain" />
                        </InputQuizz.XStack>
                        <InputQuizz.YStack flex={1} justifyContent="flex-start" alignItems="flex-start">
                            <InputQuizz.Title fontSize={14} textAlign="left">{question.label}</InputQuizz.Title>
                            {question.description && <InputQuizz.Description
                                textAlign="left">{question.description}</InputQuizz.Description>}
                        </InputQuizz.YStack>
                    </InputQuizz.ItemX>
                );
        }
    }

    return renderQuestionQuizz();
}