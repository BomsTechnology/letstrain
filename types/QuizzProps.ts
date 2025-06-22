import {FC, PropsWithChildren} from "react";
import {SizableTextProps, ViewProps, XStackProps, YStackProps} from "tamagui";
import {ImageSourcePropType} from "react-native";
import {questionTypeProps, QuizzDataProps} from "@/data/quizzData";

export type InputQuizz  = {
    value?: string[],
    setValue?: Function;
    multiple?: boolean,
    multipleAmount?: number,
}

export type InputQuizzProps = PropsWithChildren & InputQuizz & ViewProps;

export type InputQuizzComposition = {
    ItemX: FC<QuizzItemXProps>,
    ItemY: FC<QuizzItemYProps>,
    Title: FC<QuizzTitleProps>,
    Check: FC<QuizzCheckProps>,
    XStack: FC<QuizzXStackProps>,
    YStack: FC<QuizzYStackProps>,
    Description: FC<QuizzDescriptionProps>
}
export type QuizzItemXProps = PropsWithChildren & XStackProps & {
    value?: string,
    selected?: boolean,
};

export type QuizzItemYProps = PropsWithChildren & YStackProps & {
    value?: string,
    selected?: boolean,
};

export type QuizzTitleProps = PropsWithChildren & SizableTextProps;

export type QuizzDescriptionProps = PropsWithChildren & SizableTextProps;

export type QuizzXStackProps = PropsWithChildren & XStackProps;

export type QuizzYStackProps = PropsWithChildren & YStackProps

export type QuizzCheckProps = {
    color?: string,
    size?: number,
}

export type QuizzQuestionProps = {
    id: string;
    label: string;
    description?: string;
    value: string;
    icon?: ImageSourcePropType | undefined;
}

export type PageQuizzProps = {
    value: string[];
    index: number,
    setValue: (index: number, value: string, multiple: boolean) => void;
    alignement?: 'grid' | 'col',
    question: QuizzDataProps
}

