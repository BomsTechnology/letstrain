import { SafeAreaView } from "react-native-safe-area-context";
import { Button, SizableText, View, XStack } from "tamagui";
import { useEffect, useRef, useState } from "react";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PagerView from "react-native-pager-view";
import quizzData, { QuizzDataProps } from "@/data/quizzData";
import PageQuizz1 from "@/components/quizz/pages/PageQuizz1";
import PageQuizz2 from "@/components/quizz/pages/PageQuizz2";
import PageQuizz3 from "@/components/quizz/pages/PageQuizz3";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

type selectedProps = { id: string; answers: string[] };

export default function Step() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedValue, setSelectedValue] = useState<selectedProps[]>([]);
  const pageRef = useRef<PagerView>(null);
  const progress = ((currentPage + 1) * 100) / quizzData.length;
  const router = useRouter();

  const handleNext = () => {
    if (pageRef.current && currentPage < quizzData.length - 1) {
      pageRef.current.setPage(currentPage + 1);
    } else if (currentPage === quizzData.length - 1) {
        router.push("/quizz/result")
    }
  };

  const handlePrev = () => {
    if (pageRef.current && currentPage > 0) {
      pageRef.current.setPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const initialValues: selectedProps[] = [];
    quizzData.map((data) => {
      initialValues.push({
        id: data.id,
        answers: [],
      });
    });
    setSelectedValue(initialValues);
  }, []);

  const handleSelected = (index: number, value: string, multiple: boolean, multipleAmount?: number) => {
    const values = [...selectedValue];
    if (multiple) {
      const i = values[index].answers.indexOf(value);
      if (i !== -1) {
        values[index] = {
          ...values[index],
          answers :values[index].answers.filter((_, idx) => idx !== i),
        };
      } else {
        if(multipleAmount && values[index].answers.length >= multipleAmount) {
          return;
        }
        values[index] = {
          ...values[index],
          answers: [...values[index].answers, value],
        };
      }
    } else {
      values[index] = {
        ...values[index],
        answers: [value],
      };
    }
    setSelectedValue(values);
  };

  const renderQuizzPage = (page: QuizzDataProps, index: number) => {
    switch (page.pageType) {
      case "Page1":
        return (
          <PageQuizz1
            question={page}
            key={index}
            value={selectedValue[index] ? selectedValue[index].answers : []}
            setValue={handleSelected}
            index={index}
          />
        );
      case "Page2":
        return (
          <PageQuizz2
            question={page}
            key={index}
            value={selectedValue[index] ? selectedValue[index].answers : []}
            setValue={handleSelected}
            index={index}
          />
        );
      case "Page3":
        return (
          <PageQuizz3
            question={page}
            key={index}
            value={selectedValue[index] ? selectedValue[index].answers : []}
            setValue={handleSelected}
            index={index}
          />
        );
    }
  };
  return (
    <>
      <LinearGradient
        colors={[
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          Colors.light.red,
        ]}
        style={[StyleSheet.absoluteFillObject]}
      />

      <SafeAreaView style={{ flex: 1, paddingHorizontal: 24, paddingTop: 24 }}>
        <View
          width="100%"
          borderRadius={100}
          overflow="hidden"
          height={12}
          backgroundColor="#f2f2f2"
        >
          <View
            backgroundColor={Colors.light.red}
            height="100%"
            width={`${progress}%`}
          />
        </View>

        <PagerView
          ref={pageRef}
          overScrollMode="auto"
          initialPage={0}
          scrollEnabled={false}
          onPageScroll={(e) => setCurrentPage(e.nativeEvent.position)}
          style={{ flex: 1, marginTop: 40, marginBottom: 0 }}
        >
          {quizzData.map((item, index) => renderQuizzPage(item, index))}
        </PagerView>
        <XStack alignItems="center" gap={10} pb={20}>
          {currentPage > 0 && (
            <Button
              enterStyle={{ opacity: 0.5, x: 5 }}
              style={{}}
              animation="bouncy"
              onPress={() => handlePrev()}
              circular
              bg="#000"
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </Button>
          )}
          <Button
            flex={1}
            onPress={() => handleNext()}
            bg="#000"
            borderRadius={28}
            size="$5"
            width="100%"
          >
            <SizableText fontWeight="700" color="#fff" fontSize={16}>
              Continuer
            </SizableText>
          </Button>
        </XStack>
      </SafeAreaView>
    </>
  );
}
