import {H3, ScrollView, Separator, SizableText, YStack} from "tamagui";
import {InputQuizz} from "@/components/quizz/inputs/InputQuizz";
import {PageQuizzProps} from "@/types/QuizzProps";
import RenderInputQuizz from "@/components/quizz/inputs/RenderInputQuizz";
import {FontAwesome} from "@expo/vector-icons";


export default function PageQuizz3({
                                       value,
                                       setValue,
                                       question,
                                       index,
                                       alignement = 'grid',
                                   }: PageQuizzProps) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <H3 textAlign="center" mb={30}>{question.title}</H3>

            {question.questions.length > 0 &&
                <InputQuizz multiple={question.multiple} gap={10} flex={1} px={10}
                            flexWrap={question.questionType === "Question3" ? "wrap" : "nowrap"}
                            flexDirection={question.questionType === "Question3" ? "row" : "column"}
                            value={value}>
                    {question.questions.map((quest, i) =>
                        <RenderInputQuizz onPress={setValue} index={index} key={i} multiple={question.multiple} type={question.questionType} question={quest}/>
                    )
                    }
                </InputQuizz>
            }
            <Separator my={20}/>
            <YStack justifyContent="center" alignItems="center" gap={20}>
                <FontAwesome name="quote-left" size={24} color="black"/>
                {question.quote && <SizableText textAlign="center" px={40} fontSize={16}
                                                fontStyle="italic">{question.quote}</SizableText>}
                {question.quoteAuthor &&
                    <SizableText textAlign="center" px={40} fontSize={18} fontWeight="700"
                    >{question.quoteAuthor}</SizableText>
                }
            </YStack>

        </ScrollView>
    );
}