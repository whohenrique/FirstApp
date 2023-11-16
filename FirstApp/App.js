import React from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, Alert} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>

    <View>
      <Text style={styles.title}>My first app</Text>
      <Button
        title="Click me"
        onPress={() => Alert.alert('you just clicked the button')}
      />
    </View>
  
    <View>
      <Text style={styles.title}>
        Just below we have two buttons
      </Text>
      <View style={styles.separator}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 30
  },
  separator: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

export default App;