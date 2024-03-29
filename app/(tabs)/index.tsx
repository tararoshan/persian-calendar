import { StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/fa';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Today</Text> */}
      <Text>today is</Text>
      <Text style={styles.day}>{moment().locale('fr').format('dddd (DD)')}</Text>
      <Text style={styles.month}>{moment().format('MMMM (MM)')}</Text>
      <Text style={styles.year}>{moment().format('YYYY')}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 15,
  },
  year: {
    fontSize: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
