import { StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { View } from 'react-native';

interface ChartProps {
  data: Array<{
    value: number;
    time: string;
    labelComponent?: React.ReactNode;
  }>;
  unit?: string;
  title?: string;
  secondTitle?: string;
}

export default function LineChartComponent({
  unit = '°C',
  title,
  data,
  secondTitle,
}: ChartProps) {
  const maxValue = Math.max(...data.map((item) => item.value));
  const minValue = Math.min(...data.map((item) => item.value));
  const avgValue =
    data.reduce((sum, item) => sum + item.value, 0) / data.length;

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <ThemedView style={styles.dataContainer}>
        <ThemedView style={styles.dataSubContainer}>
          <ThemedText style={styles.data}>
            {maxValue.toFixed(2)} {unit}
          </ThemedText>
          <ThemedText style={styles.dataType}>Max</ThemedText>
        </ThemedView>
        <ThemedView style={styles.dataSubContainer}>
          <ThemedText style={styles.data}>
            {minValue.toFixed(2)} {unit}
          </ThemedText>
          <ThemedText style={styles.dataType}>Min</ThemedText>
        </ThemedView>
        <ThemedView style={styles.dataSubContainer}>
          <ThemedText style={styles.data}>
            {avgValue.toFixed(2)} {unit}
          </ThemedText>
          <ThemedText style={styles.dataType}>Avg</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.chart}>
        <LineChart
          areaChart
          // curved
          isAnimated
          animateOnDataChange
          animationDuration={1000}
          data={data as any}
          // xAxisTextNumberOfLines={2}
          // xAxisLabelsHeight={50}
          width={300}
          hideDataPoints
          spacing={10}
          color="#0096FF"
          thickness={2}
          startFillColor="rgba(20,105,81,0.3)"
          endFillColor="rgba(20,85,81,0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={10}
          noOfSections={6}
          maxValue={maxValue}
          // yAxisColor="white"
          yAxisThickness={0}
          rulesType="solid"
          rulesColor="#e6e6e6"
          yAxisLabelSuffix={unit}
          yAxisTextStyle={{ color: 'gray' }}
          xAxisColor="#357af0"
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: 'lightgray',
            pointerStripWidth: 2,
            pointerColor: 'lightgray',
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items: any) => {
              return (
                <View
                  style={{
                    height: 120,
                    width: 100,
                    justifyContent: 'center',
                    marginTop: 0,
                    marginLeft: -40,
                  }}
                >
                  <ThemedView
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 16,
                      backgroundColor: 'white',
                    }}
                  >
                    <ThemedText
                      style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingVertical: 2,
                        color: Colors.light.blue,
                      }}
                    >
                      {items[0].value.toFixed(2) + unit}
                    </ThemedText>
                    <ThemedText
                      style={{
                        color: Colors.light.gray,
                        fontSize: 10,
                        marginBottom: 6,
                        textAlign: 'center',
                      }}
                    >
                      {items[0].time}
                    </ThemedText>
                  </ThemedView>
                </View>
              );
            },
          }}
        />
      </ThemedView>
      <ThemedText style={styles.title}>{secondTitle}</ThemedText>
      <ThemedView style={styles.dataContainer}>
        <ThemedView style={styles.dataSubContainer}>
          <ThemedText style={styles.data}>
            {maxValue.toFixed(2)} {unit}
          </ThemedText>
          <ThemedText style={styles.dataType}>Max</ThemedText>
        </ThemedView>
        <ThemedView style={styles.dataSubContainer}>
          <ThemedText style={styles.data}>
            {minValue.toFixed(2)} {unit}
          </ThemedText>
          <ThemedText style={styles.dataType}>Min</ThemedText>
        </ThemedView>
        <ThemedView style={styles.dataSubContainer}>
          <ThemedText style={styles.data}>
            {avgValue.toFixed(2)} {unit}
          </ThemedText>
          <ThemedText style={styles.dataType}>Avg</ThemedText>
        </ThemedView>
      </ThemedView>
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
    textAlign: 'center',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: 'transparent',
    marginTop: 10,
    marginHorizontal: 30,
  },
  dataSubContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  data: {
    fontSize: 22,
    color: Colors.light.black,
  },
  dataType: {
    fontSize: 12,
    color: Colors.light.gray,
  },
  chart: {
    backgroundColor: 'transparent',
    marginTop: 20,
    marginHorizontal: 20,
    width: '100%',
  },
  tooltip: {
    backgroundColor: Colors.light.blue,
    padding: 8,
    borderRadius: 4,
    paddingVertical: 100,
    paddingLeft: 20,
  },
  tooltipText: {
    color: 'white',
    fontSize: 12,
  },
});
