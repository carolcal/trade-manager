import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { auth } from "../../databases/firebase"
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { Header, Button, Text, Input } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';

const LogInScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe;
    }, [])

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log("Logged in with: " + user.email)
            })
            .catch(error => alert(error.message))
    }

    const goToWelcome = () => {
        navigation.replace("Welcome")
    }
    const goToRegister = () => {
        navigation.replace("Register")
    }

    return (
        <>
            <Header >
                <Button onPress={goToWelcome}>
                    <AntDesign name="left" size={18} color="white" />
                    Voltar
                </Button>
            </Header>
            <KeyboardAvoidingView style={styles.container} behavior='height'>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder='Email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        placeholder='Password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                </View>
                    <Button radius={"sm"} onPress={handleLogIn} title="Login" />
                    <View style={[styles.flexboxColumn, styles.m2]}>
                    <Text>Ainda não tem conta?</Text>
                    <Button type="clear" title='Registre-se aqui' onPress={goToRegister} />
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default LogInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    flexboxColumn: {
        flexDirection: 'row', // Alinha os itens lado a lado
        alignItems: 'center', // Centraliza os itens verticalmente
    },
    /*input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    } */
})
