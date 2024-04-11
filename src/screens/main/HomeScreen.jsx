import React from 'react'
import { StyleSheet, View } from 'react-native'
import { auth } from '../../databases/firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { Button, Header, Text } from '@rneui/themed';

const HomeScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigation.replace("Login")
        }).catch(error => alert(error.message))
    }

    return (
        <>
            <Header>
                <Text>Home</Text>
            </Header>
            <View style={styles.container}>
                <Text> Email: {auth.currentUser?.email}</Text>
                <Button radius={"sm"} onPress={handleSignOut} title="Sair"/>
            </View>
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