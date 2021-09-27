console.disableYellowBox = true;
import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Shop, Order } from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Shop" component={Shop} />
                <Stack.Screen name="Order" component={Order} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;