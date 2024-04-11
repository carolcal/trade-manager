import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { auth } from '../../databases/firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
//import { Button, Header, Text, ListItem, Icon } from '@rneui/themed';
import AdminScreen from '../admin/AdminScreen'
import UnitsScreen from './UnitsScreen'
import UserScreen from '../admin/UserScreen'
import HeaderComponent from '../../components/HeaderComponent'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {

    const [menu, setMenu] = useState(false)
    const [admin, setAdmin] = useState(false)

    const navigation = useNavigation()

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigation.replace("Login")
        }).catch(error => alert(error.message))
    }
    const goToAdmin = () => {
        navigation.replace("Admin")
    }

    const toggleMenu = () => {
        console.log('menu')
        console.log(menu)
        setMenu(!menu)
    }

    const showAdmin = () => {
        console.log('admin')
        console.log(admin)
        setAdmin(!admin)
        setMenu(false)
    }

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})