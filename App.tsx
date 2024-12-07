import { StyleSheet, Text, View } from 'react-native';
import FutsalScoreApp from './components/Futsal';

export default function App() {
  return (
    <View style={styles.container}>
      <FutsalScoreApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
