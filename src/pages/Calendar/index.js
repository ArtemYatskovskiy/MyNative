import { StyleSheet, Text, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalendarItem from './commons/CalendarItem';

function Calendar() {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#0057b8', '#ffffff', '#FFD600']}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        style={styles.linearGradient}
      >
        <Text>Calendar</Text>
        <CalendarItem />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});

export default Calendar;
