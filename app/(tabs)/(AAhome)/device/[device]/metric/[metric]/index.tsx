import { StyleSheet, Dimensions, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/Header';
import { ImageContainer } from '@/components/ImageContainer';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';



export default function DeviceScreen() {
  const { device, metric } = useLocalSearchParams();
 
  return (
    <ThemedView style={styles.container}>
      <ImageContainer />

      <Header
        title="Temperature"
        leftIconName="back"
        rightIconName="plus"
        backLink={`/(tabs)/(AAhome)/device/${device}`}
      />

      <ThemedText style={styles.title}>
        Details of Device ID: {device}
      </ThemedText>
      <ThemedText style={styles.title}>
        Details of Metrix ID: {metric}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.blue,
  },
});
