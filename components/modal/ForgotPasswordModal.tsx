import { Image } from "react-native";
import { AlertDialog, Button, SizableText, XStack, YStack } from "tamagui";
import Input from "../form/Input";
import { useState } from "react";

const ForgotPasswordModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Trigger asChild>
        <SizableText textAlign="center" mt={15} color="#fff" fontWeight="500">
          Mot de passe oublié ?
        </SizableText>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          onPress={() => setIsOpen(false)}
        />
        <AlertDialog.Content
          bordered
          borderRadius={20}
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          py={50}
        >
          <YStack>
            <XStack justifyContent="center">
              <Image source={require("@/assets/images/Vector.png")} />
            </XStack>
            <AlertDialog.Title fontSize="$8" textAlign="center">
              Mot de passe oublié
            </AlertDialog.Title>
            <AlertDialog.Description fontSize="$3" textAlign="center">
              By pressing yes, you accept our terms and conditions.
            </AlertDialog.Description>

            <YStack>
              <Input
                icon={{ name: "mail-outline", color: "#000" }}
                placeholder="Email"
                containerProps={{ bg: "#B3B3B350", my: 18 }}
                placeholderTextColor="#000"
              />
              <AlertDialog.Action asChild w="100%">
                <Button bg="#000" borderRadius={28} size="$5">
                  <SizableText fontWeight="500" color="#fff" fontSize={16}>
                    Réinitialiser le mot de passe
                  </SizableText>
                </Button>
              </AlertDialog.Action>
            </YStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
};

export default ForgotPasswordModal;
