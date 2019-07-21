import React from 'react';
import { Button, View, ScrollView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ContactScreen from './src/components/Contact';
import { Platform } from 'react-native';
import AnimateSquare from './src/components/AnimateSquare'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements';

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#222222' }}>
        
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
        <View style={styles.container}>
          <Button
            title="Go to Contacts"
            onPress={() => this.props.navigation.navigate('Contact')}
          />
        </View>
        <Divider style={{ backgroundColor: '#fff' }} />
        <View style={styles.container}>
          <Button
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            title="Button with icon component"
          />
        </View>
        <AnimateSquare />
      </ScrollView >
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Contact: ContactScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
    margin: 10,
  },
});
