import { config } from "./config/gluestack-ui.config";
import {
  Box,
  ButtonText,
  GluestackUIProvider,
  Text,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast,
  Button,
} from "@gluestack-ui/themed";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}

const Home = () => {
  const toast = useToast();
  return (
    <Button
      p="$0"
      mt={100}
      onPress={() => {
        toast.show({
          placement: "bottom",
          duration: 1000,
          render: ({ id }) => {
            return (
              <>
                <Toast nativeID={`toast-${id}`}>
                  <VStack space="xs">
                    <ToastTitle>Hello World Toast</ToastTitle>
                    <ToastDescription>
                      Please create a support tibnnbcket from the support page
                    </ToastDescription>
                  </VStack>
                </Toast>
              </>
            );
          },
        });
      }}
    >
      <ButtonText>Press Me</ButtonText>
    </Button>
  );
};
