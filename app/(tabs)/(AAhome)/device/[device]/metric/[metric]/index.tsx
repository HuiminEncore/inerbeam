import { StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/Header';
import { ImageContainer } from '@/components/ImageContainer';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import LineChartComponent from '../../../component/LineChart';

export default function DeviceScreen() {
  const { device, metric } = useLocalSearchParams();
  const data = [
    {
      value: 10.1,
      time: '16:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>16:00</ThemedText>
        </View>
      ),
    },
    { value: 9.8, time: '16:10' },
    { value: 9.5, time: '16:20' },
    { value: 9.7, time: '16:30' },
    { value: 9.2, time: '16:40' },
    { value: 8.8, time: '16:50' },
    {
      value: 8.5,
      time: '17:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>17:00</ThemedText>
        </View>
      ),
    },
    { value: 8.2, time: '17:10' },
    { value: 7.9, time: '17:20' },
    { value: 7.5, time: '17:30' },
    { value: 7.2, time: '17:40' },
    { value: 6.8, time: '17:50' },
    {
      value: 6.5,
      time: '18:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>18:00</ThemedText>
        </View>
      ),
    },
    { value: 6.2, time: '18:10' },
    { value: 5.9, time: '18:20' },
    { value: 5.8, time: '18:30' },
    { value: 5.7, time: '18:40' },
    { value: 5.6, time: '18:50' },
    {
      value: 5.5,
      time: '19:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>19:00</ThemedText>
        </View>
      ),
    },
    { value: 5.0, time: '19:10' },
    { value: 4.6, time: '19:20' },
    { value: 4.3, time: '19:30' },
    { value: 4.1, time: '19:40' },
    { value: 3.9, time: '19:50' },
    {
      value: 4.1,
      time: '20:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>20:00</ThemedText>
        </View>
      ),
    },
    { value: 3.8, time: '20:10' },
    { value: 3.5, time: '20:20' },
    { value: 3.2, time: '20:30' },
    { value: 2.9, time: '20:40' },
    { value: 2.6, time: '20:50' },
    {
      value: 3.2,
      time: '21:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>21:00</ThemedText>
        </View>
      ),
    },
    { value: 2.8, time: '21:10' },
    { value: 2.5, time: '21:20' },
    { value: 2.2, time: '21:30' },
    { value: 1.9, time: '21:40' },
    { value: 1.6, time: '21:50' },
    {
      value: 2.2,
      time: '22:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>22:00</ThemedText>
        </View>
      ),
    },
    { value: 1.8, time: '22:10' },
    { value: 1.5, time: '22:20' },
    { value: 1.2, time: '22:30' },
    { value: 0.9, time: '22:40' },
    { value: 0.6, time: '22:50' },
    {
      value: 0.3,
      time: '23:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>23:00</ThemedText>
        </View>
      ),
    },
    { value: 1.0, time: '23:10' },
    { value: 0.8, time: '23:20' },
    { value: 0.5, time: '23:30' },
    { value: 0.3, time: '23:40' },
    { value: 0.1, time: '23:50' },
    {
      value: 0.5,
      time: '00:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>00:00</ThemedText>
        </View>
      ),
    },
    { value: 0.2, time: '00:10' },
    { value: 0.0, time: '00:20' },
    { value: -0.2, time: '00:30' },
    { value: -0.4, time: '00:40' },
    { value: -0.6, time: '00:50' },
    {
      value: -0.5,
      time: '01:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>01:00</ThemedText>
        </View>
      ),
    },
    { value: -0.8, time: '01:10' },
    { value: -1.0, time: '01:20' },
    { value: -1.2, time: '01:30' },
    { value: -1.4, time: '01:40' },
    { value: -1.6, time: '01:50' },
    {
      value: -1.2,
      time: '02:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>02:00</ThemedText>
        </View>
      ),
    },
    { value: -1.4, time: '02:10' },
    { value: -1.6, time: '02:20' },
    { value: -1.8, time: '02:30' },
    { value: -2.0, time: '02:40' },
    { value: -2.2, time: '02:50' },
    {
      value: -1.8,
      time: '03:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>03:00</ThemedText>
        </View>
      ),
    },
    { value: -1.8, time: '03:10' },
    { value: -1.7, time: '03:20' },
    { value: -1.5, time: '03:30' },
    { value: -1.3, time: '03:40' },
    { value: -1.1, time: '03:50' },
    {
      value: -1.5,
      time: '04:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>04:00</ThemedText>
        </View>
      ),
    },
    { value: -1.2, time: '04:10' },
    { value: -1.0, time: '04:20' },
    { value: -0.8, time: '04:30' },
    { value: -0.6, time: '04:40' },
    { value: -0.4, time: '04:50' },
    {
      value: 0.0,
      time: '05:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>05:00</ThemedText>
        </View>
      ),
    },
    { value: 1.0, time: '05:10' },
    { value: 1.5, time: '05:20' },
    { value: 2.0, time: '05:30' },
    { value: 2.5, time: '05:40' },
    { value: 3.0, time: '05:50' },
    {
      value: 3.0,
      time: '06:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>06:00</ThemedText>
        </View>
      ),
    },
    { value: 3.5, time: '06:10' },
    { value: 4.0, time: '06:20' },
    { value: 4.5, time: '06:30' },
    { value: 5.0, time: '06:40' },
    { value: 5.5, time: '06:50' },
    {
      value: 6.0,
      time: '07:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>07:00</ThemedText>
        </View>
      ),
    },
    { value: 5.0, time: '07:10' },
    { value: 5.5, time: '07:20' },
    { value: 6.0, time: '07:30' },
    { value: 6.5, time: '07:40' },
    { value: 7.0, time: '07:50' },
    {
      value: 7.5,
      time: '08:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>08:00</ThemedText>
        </View>
      ),
    },
    { value: 6.5, time: '08:10' },
    { value: 7.0, time: '08:20' },
    { value: 7.5, time: '08:30' },
    { value: 8.0, time: '08:40' },
    {
      value: 8.5,
      time: '09:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>09:00</ThemedText>
        </View>
      ),
    },
    { value: 8.0, time: '09:10' },
    { value: 8.5, time: '09:20' },
    { value: 9.0, time: '09:30' },
    { value: 9.5, time: '09:40' },
    { value: 10.0, time: '09:50' },
    {
      value: 10.0,
      time: '10:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>10:00</ThemedText>
        </View>
      ),
    },
    { value: 9.5, time: '10:10' },
    { value: 10.0, time: '10:20' },
    { value: 10.5, time: '10:30' },
    { value: 11.0, time: '10:40' },
    { value: 11.5, time: '10:50' },
    {
      value: 11.5,
      time: '11:00',
      labelComponent: () => (
        <View
          style={{
            backgroundColor: 'transparent',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ThemedText style={{ color: 'black' }}>11:00</ThemedText>
        </View>
      ),
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <ImageContainer />
      <Header
        title="Temperature"
        leftIconName="back"
        rightIconName="plus"
        backLink={`/(tabs)/(AAhome)/device/${device}`}
      />
      <ThemedView style={styles.chart}>
        <LineChartComponent
          data={data as any}
          unit="°C"
          title="Ultimas 24 horas"
          secondTitle="Predicción próximas 36h"
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  chart: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
