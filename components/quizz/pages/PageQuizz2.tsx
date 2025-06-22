import {H3, Image, ScrollView, Separator, SizableText, View, XStack} from "tamagui";
import {InputQuizz} from "@/components/quizz/inputs/InputQuizz";
import {PageQuizzProps} from "@/types/QuizzProps";
import RenderInputQuizz from "@/components/quizz/inputs/RenderInputQuizz";


export default function PageQuizz2({
                                       value,
                                       setValue,
                                       question,
                                       index,
    alignement = 'grid',
                                   }: PageQuizzProps ) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <H3 textAlign="center" mb={30}>{question.title}</H3>

            {question.questions.length > 0 &&
                <InputQuizz multiple={question.multiple} gap={10} flex={1} px={10} flexWrap={question.questionType === "Question3" ? "wrap" : "nowrap"} flexDirection={question.questionType === "Question3" ? "row" : "column"}
                            value={value}
                            setValue={setValue}>
                    {question.questions.map((quest, i) =>
                        <RenderInputQuizz onPress={setValue} index={index} multiple={question.multiple} multipleAmount={question.multipleAmount} key={i} type={question.questionType} question={quest}/>
                    )
                    }
                </InputQuizz>
            }
            <Separator my={20} />
            {question.quote && <SizableText textAlign="center" px={40} fontSize={14} color="#888888" fontStyle="italic" >{question.quote}</SizableText>}
            {question.image && <XStack justifyContent="center" mx="auto" mt={30} h={180} overflow="hidden" borderRadius={20} w={280}>
                <Image source={question.image} style={{ height: "100%", width: "100%" }}/>
            </XStack>}
            <View h={50}/>
        </ScrollView>
    );
}