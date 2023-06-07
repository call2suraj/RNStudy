import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CounterScreen from './CounterScreen';
import JavaScriptScreen from './JavaScriptScreen';

function DetailsScreen(props) {
   const { state} = props.navigation;
      console.log("PROPS", props.route.params);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details! {props?.route?.params?.user}</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flexDirection:'column', height: 200,}}>
      <Text>Home screen</Text>

      <CounterScreen />
      <Button style={{margin: 55, padding: 10, width: 80}}
        title="Go to Details"
        onPress={() => navigation.navigate('Details',{ user: 'Lucy' })}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="MyHome" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="MySettings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

function JavaScriptStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="JavaScript" component={JavaScriptScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function LandingScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          } else if (route.name === 'JavaScript') {
            iconName = focused ? 'logo-javascript' : 'logo-javascript';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="JavaScript" component={JavaScriptStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
