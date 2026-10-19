import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Calendar } from 'react-native-calendars';

function CalendarItem() {
  const [selected, setSelected] = useState('');

  const dispatch = useDispatch();

  const setDate = day => {
    setSelected(day.dateString);
    dispatch(changeDate(day.dateString));
  };

  return (
    <SafeAreaView style={styles.calendarBlock}>
      <Text style={styles.calendarDay}>8 червня</Text>
      <View style={styles.calendar}>
        <Calendar onDayPress={day => setDate(day)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  calendarBlock: {
    padding: 5,
    paddingTop: 15,
    display: 'flex',
    marginBottom: 70,
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
