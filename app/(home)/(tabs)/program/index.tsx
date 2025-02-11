import AIRecommandationCard from "@/components/card/AIRecommandationCard";
import ProgramCard from "@/components/card/ProgramCard";
import { HelloWave } from "@/components/HelloWave";
import { Colors } from "@/constants/Colors";
import { ScrollView, Separator, SizableText, XStack, YStack } from "tamagui";
import FoodCard from "@/components/card/FoodCard";
import MindsetCard from "@/components/card/MindsetCard";

export default function HomeScreen() {
  return (
    <ScrollView bg="#fff" px={20} pt={50} showsVerticalScrollIndicator={false}>
      <XStack gap={5} alignItems="center" justifyContent="center">
        <SizableText
          fontWeight="600"
          fontSize="$9"
          lineHeight="$8"
          textAlign="center"
        >
          Hello Patricia !
        </SizableText>
        <HelloWave />
      </XStack>
      <SizableText
        fontWeight="600"
        fontSize="$8"
        lineHeight="$9"
        textAlign="center"
        mb={20}
      >
        Choisis ton programme :
      </SizableText>
      <AIRecommandationCard />
      <Separator my={50} borderColor={Colors.light.red} />
      <YStack gap={30}>
        <ProgramCard
          images={[require("@/assets/images/program/1.png"), require("@/assets/images/program/2.png"), require("@/assets/images/program/3.png")]}
          title="Atteint ton objectif"
          description="Perte de masse grasse"
          programTitle="Programme 1"
        />
        <ProgramCard
            images={[require("@/assets/images/program/2.png"), require("@/assets/images/program/1.png"), require("@/assets/images/program/3.png")]}
            title="Atteint ton objectif"
          description="Perte de masse grasse"
          programTitle="Programme 1"
        />
        <ProgramCard
            images={[require("@/assets/images/program/3.png"), require("@/assets/images/program/1.png"), require("@/assets/images/program/2.png")]}
            title="Atteint ton objectif"
          description="Perte de masse grasse"
          programTitle="Programme 1"
        />

          <FoodCard />
          <MindsetCard />
      </YStack>
    </ScrollView>
  );
}
