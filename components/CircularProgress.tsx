import {StyleProp, StyleSheet, ViewStyle, View} from "react-native";
import {Colors} from "@/constants/Colors";
import {useDerivedValue, useSharedValue, withTiming} from "react-native-reanimated";
import {Canvas, Path, SkFont, Skia, Text} from "@shopify/react-native-skia";

interface CircularProgressProps {
    duration: number;
    radius: number;
    strokeWidth: number;
    font: SkFont;
    maximun?: number;
    color?: string;
    showPercent?: boolean;
    style?: StyleProp<ViewStyle>;
}

const CircularProgress = ({
                              radius,
                              strokeWidth,
                              duration,
                              font,
                              maximun,
                              color,
                              showPercent = true,
                              style,
                          }: CircularProgressProps) => {
    const innerRadius = radius - strokeWidth / 2;
    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    const progress = useSharedValue(0);
    const percentage = useSharedValue(0);

    progress.value = withTiming(maximun ? maximun / 100 : 1, {duration: duration});
    percentage.value = withTiming(maximun ? maximun : 100, {duration: duration});

    const targetText = useDerivedValue(
        () => `${Math.round(percentage.value)}%`,
        []
    );

    const fontSize = font.measureText("00%");

    const textX = useDerivedValue(() => {
        const _fontSize = font.measureText(targetText.value);
        return radius - _fontSize.width / 2;
    }, []);

    return (
        <View style={[{width: radius * 2, height: radius * 2}, style]}>
            <Canvas style={styles.container}>
                <Path
                    path={path}
                    strokeWidth={strokeWidth}
                    color={Colors.light.black}
                    strokeJoin={"round"}
                    strokeCap={"round"}
                    style={"stroke"}
                    start={0}
                    end={1}
                />
                <Path
                    path={path}
                    strokeWidth={strokeWidth}
                    color={color ? color : Colors.light.red}
                    strokeJoin={"round"}
                    strokeCap={"round"}
                    style={"stroke"}
                    start={0}
                    end={progress}
                />

                {showPercent ? <Text
                        x={textX}
                        y={radius + fontSize.height / 2}
                        text={targetText}
                        font={font}
                    /> : null}
            </Canvas>
        </View>
    );
};

export default CircularProgress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        transform: "rotate(-90deg)",
    }
});
