import { Stack } from 'expo-router';

export default function QuizzLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerShadowVisible: false,
                headerTitle: '',
            }}>
            <Stack.Screen name="index"  />
            <Stack.Screen name="step" options={{ headerShown: false }}  />
            <Stack.Screen name="result" options={{ 
                headerBackVisible: false
             }}  />
             <Stack.Screen name="overview" options={{ 
                headerBackVisible: false,
             }}  />
        </Stack>
    );
}
