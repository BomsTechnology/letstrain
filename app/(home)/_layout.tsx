import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Image, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { Avatar, Button, View, XStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerNavigationProp,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { DrawerActions, type ParamListBase, useNavigation } from "@react-navigation/native";

export default function HomeLayout() {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTitle: () => (
            <Image
              source={require("@/assets/images/logo3.png")}
              style={{ height: 38 }}
            />
          ),
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomWidth: 0,
            elevation: 5,
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            shadowColor: Colors.light.red,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            height: 120,
          },
          headerLeft: () => (
              <DrawerToggleButton tintColor="#000" />
          ),
          headerRight: () => (
            <XStack
              alignItems="center"
              justifyContent="center"
              gap={10}
              marginRight={10}
            >
              <Pressable>
                <Ionicons name="notifications" size={25} color="#000" />
              </Pressable>
              <Avatar circular size="$2.5">
                <Avatar.Image
                  accessibilityLabel="Cam"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                />
                <Avatar.Fallback backgroundColor="$blue10" />
              </Avatar>
            </XStack>
          ),
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
