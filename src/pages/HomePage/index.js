import { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './commons/header';
import Stats from './commons/stats';
import { useDispatch } from 'react-redux';
import { addStats } from '../../redux/statsSlice';

function HomePage() {
  const dispatch = useDispatch();
  const test = 'test';

  useEffect(() => {
    dispatch(addStats(test));
  });

  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#0057b8', '#ffffff', '#FFD600']}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        style={styles.linearGradient}
      >
        <Header />
        <Stats />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 15,
  },
});

export default HomePage;
