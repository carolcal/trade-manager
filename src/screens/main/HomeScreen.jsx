import React from 'react'
import AdminScreen from '../admin/AdminScreen'
import UnitsScreen from './UnitsScreen'
import UserScreen from '../admin/UserScreen'
import HeaderComponent from '../../components/HeaderComponent'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {

    const HomeStack = createNativeStackNavigator();

    return (
        <>
            <HeaderComponent />
            <HomeStack.Navigator>
                <HomeStack.Screen options={{ headerShown: false }} name="Units" component={UnitsScreen} />
                <HomeStack.Screen options={{ headerShown: false }} name="Admin" component={AdminScreen} />
                <HomeStack.Screen options={{ headerShown: false }} name="User" component={UserScreen} />
            </HomeStack.Navigator>
        </>
    )
}

export default HomeScreen