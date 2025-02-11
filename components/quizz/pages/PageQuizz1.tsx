import {H3, Image, ScrollView, XStack} from "tamagui";
import {InputQuizz} from "@/components/quizz/inputs/InputQuizz";
import {PageQuizzProps} from "@/types/QuizzProps";
import RenderInputQuizz from "@/components/quizz/inputs/RenderInputQuizz";


export default function PageQuizz1({
                                       value,
                                       setValue,
                                       question,
                                       index
                                   }: PageQuizzProps) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <H3 textAlign="center" mb={30}>{question.title}</H3>
            {question.image && <XStack justifyContent="center" mb={40}>
                <Image style={{width: 120, height: 130}} resizeMode="contain" source={question.image}/>
            </XStack>}
            {question.questions.length > 0 &&
                <InputQuizz multiple={question.multiple} gap={10}
                            value={value}
                            >
                    {question.questions.map((quest, i) =>
                        <RenderInputQuizz onPress={setValue} index={index} key={i} multiple={question.multiple} type={question.questionType} question={quest}/>
                    )
                    }
                </InputQuizz>
            }
        </ScrollView>
    );
}