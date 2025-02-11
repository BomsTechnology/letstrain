import {createContext, FC, useContext} from "react";
import {SizableText, View, XStack, YStack} from "tamagui";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Colors} from "@/constants/Colors";
import {
    InputQuizz as PropsInputQuizz,
    InputQuizzComposition,
    InputQuizzProps,
    QuizzCheckProps,
    QuizzItemXProps,
    QuizzItemYProps,
    QuizzTitleProps,
    QuizzXStackProps,
    QuizzYStackProps
} from "@/types/QuizzProps";

function handleSelected(multiple: boolean | undefined, mainValue: string | string[] | undefined, value: string): string | string[]  {
    if(multiple){
        const values = mainValue as string[];
        const index = values.indexOf(value);
        if(index !== -1){
            values.splice(1, index);
            return  values;
        }else{
            return [...values, value];
        }
    }else {
        return value;
    }

}

const InputQuizzContext = createContext<PropsInputQuizz | undefined>(undefined);

const InputQuizzItemContext = createContext<{ selected?: boolean } | undefined>(undefined);

function useInputQuizzContext() {
    const context = useContext(InputQuizzContext);
    if (!context) {
        throw new Error('useInputQuizzContext must be used within inputQuizz');
    }
    return context;
}

function useInputQuizzItemContext() {
    const context = useContext(InputQuizzItemContext);
    if (!context) {
        throw new Error('useInputQuizzContext must be used within inputQuizz');
    }
    return context;
}


const InputQuizz: FC<InputQuizzProps> & InputQuizzComposition = ({children, value, setValue, multiple, ...props}) => {
    return (
        <InputQuizzContext.Provider value={{setValue, value, multiple}}>
            <View {...props}>
                {children}
            </View>
        </InputQuizzContext.Provider>
    );
}

InputQuizz.ItemX = function InputQuizzXStack({children, value, selected, ...props}: QuizzItemXProps) {
    const {value: mainValue, setValue, multiple} = useInputQuizzContext();
    const isSelected = selected || mainValue === value || (mainValue as string[]).includes(value!);
    return (
        <InputQuizzItemContext.Provider value={{selected: isSelected}}>
            <XStack
                onPress={() => {
                    if(setValue && value) {
                        setValue()
                    }
                }}
                shadowOffset={{
                    width: 0,
                    height: 2,
                }}
                shadowOpacity={0.5}
                shadowRadius={3.84}
                shadowColor="#000"
                backgroundColor="#fff"
                borderRadius={15}
                alignItems="center"
                elevation={5} py={10} px={15} borderWidth={1}
                borderColor={isSelected ? Colors.light.red : '#fff'} {...props}>{children}</XStack>
        </InputQuizzItemContext.Provider>
    );
}

InputQuizz.ItemY = function InputQuizzYStack({children, value, selected, ...props}: QuizzItemYProps) {
    const {value: mainValue, setValue, multiple} = useInputQuizzContext();
    const isSelected = selected || mainValue!.includes(value!);
    return (
        <InputQuizzItemContext.Provider value={{selected: isSelected}}>
            <YStack onPress={() => {
                if(setValue && value) {
                    setValue();
                }
            }} shadowOffset={{
                width: 0,
                height: 2,
            }}
                    shadowOpacity={0.5}
                    shadowRadius={3.84}
                    shadowColor="#000"
                    backgroundColor="#fff"
                    borderRadius={15}
                    alignItems="center"
                    elevation={5} py={20} px={15} borderWidth={1}
                    borderColor={isSelected ? Colors.light.red : '#fff'} {...props}>{children}</YStack>
        </InputQuizzItemContext.Provider>
    );
}

InputQuizz.Title = function InputQuizzTitle({children, ...props}: QuizzTitleProps) {
    return (<SizableText fontSize={16} {...props}>{children}</SizableText>);
}

InputQuizz.Description = function InputQuizzDescription({children, ...props}: QuizzTitleProps) {
    return (<SizableText fontSize={13} color="#888888" {...props}>{children}</SizableText>);
}

InputQuizz.Check = function InputQuizzCheck({color, size}: QuizzCheckProps) {
    const {selected} = useInputQuizzItemContext();
    size = size ? size : 24;
    return selected ? <Ionicons name="checkmark-circle-sharp" size={size} color={color ? color : Colors.light.red}/> :
        <View w={size - 10} h={size - 10} borderRadius={(size - 10) / 2} borderWidth={1}/>;
}

InputQuizz.XStack = function InputQuizzXStack({children, ...props}: QuizzXStackProps) {
    return (<XStack {...props}>{children}</XStack>);
}

InputQuizz.YStack = function InputQuizzYStack({children, ...props}: QuizzYStackProps) {
    return (<YStack {...props}>{children}</YStack>);
}

export {InputQuizz};