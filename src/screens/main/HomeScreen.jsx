import React from 'react'
import AdminScreen from '../admin/AdminScreen'
import AdminUnitsScreen from '../admin/AdminUnitsScreen'
import AdminStocksScreen from '../admin/AdminStocksScreen'
import AdminExpansesScreen from '../admin/AdminExpansesScreen'
import AdminMoneyScreen from '../admin/AdminMoneyScreen'
import AdminUsersScreen from '../admin/AdminUsersScreen'
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
                <HomeStack.Screen options={{ headerShown: false }} name="AdminUnits" component={AdminUnitsScreen} />
                <HomeStack.Screen options={{ headerShown: false }} name="AdminStocks" component={AdminStocksScreen} />
                <HomeStack.Screen options={{ headerShown: false }} name="AdminExpanses" component={AdminExpansesScreen} />
                <HomeStack.Screen options={{ headerShown: false }} name="AdminMoney" component={AdminMoneyScreen} />
                <HomeStack.Screen options={{ headerShown: false }} name="AdminUsers" component={AdminUsersScreen} />
                <HomeStack.Screen options={{ headerShown: false }} name="User" component={UserScreen} />
            </HomeStack.Navigator>
        </>
    )
}

export default HomeScreen