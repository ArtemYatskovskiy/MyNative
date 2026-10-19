import { View, StyleSheet, Text } from 'react-native';

function Header() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  const monthNames = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  const nameMonth = (monthNames = monthNames[month]);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Генеральний штаб ЗСУ України інформує</Text>
      <Text style={styles.titleBig}>
        Загальні бойові втрати російського окупанта
      </Text>
      <View style={styles.blockData}>
        <Text style={styles.data}>
          {day}
          {nameMonth}
        </Text>
        ;<Text style={styles.day}>469-й день війни</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    color: 'black',
    fontWeight: '600',
  },
  titleBig: {
    fontSize: 24,
    color: 'black',
    fontWeight: '900',
  },
  blockData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    fontSize: 19,
    color: '#FFD600',
    fontWeight: '600',
  },
});

export default Header;
