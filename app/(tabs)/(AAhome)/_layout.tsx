import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Edisens' }} />
        <Stack.Screen
          name="device/[device]/index"
          options={{ title: 'Device' }}
        />
        <Stack.Screen
          name="device/[device]/metric/[metric]/index"
          options={{ title: 'Metric' }}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerIcon: {
    padding: 10,
  },
});
