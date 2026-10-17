import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

function CalendarItem() {
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={styles.calendarBlock}>
      <Text style={styles.calendarDay}>8 червня</Text>
      <View style={styles.calendar}>
        <Calendar onDayPress={day => setSelected(day.dateString)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  calendarBlock: {
    padding: 5,
    display: 'flex',
  },
  calendarDay: {
    fontSize: 24,
    color: 'white',
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },
  calendar: {
    height: 250,
    backgroundColor: 'white',
  },
});

export default CalendarItem;
