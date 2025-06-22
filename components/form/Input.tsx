import { Colors } from "@/constants/Colors";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ComponentProps, useState } from "react";
import { XStack, Input as TamaguiInput, InputProps, Button, XStackProps } from "tamagui";

type PropsIcon = IconProps<ComponentProps<typeof Ionicons>["name"]>;

const Input = ({
                   icon,
                   eyeBtn,
                   containerProps,
                   ...rest
               }: InputProps & { icon?: PropsIcon; eyeBtn?: boolean, containerProps?: XStackProps}) => {
    const [secureTextEntry, setSecureTextEntry] = useState(false);
    return (

            <XStack
                bg="rgba(255,255,255, 0.1)"
                py={6}
                px={15}
                borderRadius={10}
                gap={5}
                alignItems="center"
                flex={1}
                {...containerProps}
            >
                {icon && <Ionicons size={20} color="#fff" {...icon} />}
                <TamaguiInput
                    unstyled
                    h={38}
                    fontSize={18}
                    flex={1}
                    secureTextEntry={secureTextEntry}
                    {...rest}
                />
                {eyeBtn && (
                    <Button unstyled onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Ionicons
                            name={!secureTextEntry ? "eye-off-outline" : "eye-outline"}
                            size={25}
                            color={Colors.light.redDark}
                        />
                    </Button>
                )}
            </XStack>

    );
};

export default Input;