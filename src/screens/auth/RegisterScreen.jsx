import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Text, StyleSheet, View } from 'react-native'
import { Input, Button, Header } from '@rneui/themed';
import { auth } from "../../databases/firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

const LogInScreen = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe;
    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log(user)
                console.log("Registred with: " + user.email)
            })
            .catch(error => console.log(error))
    }

    const goToLogin = () => {
        navigation.replace("Login")
    }

    const goToWelcome = () => {
        navigation.replace("Welcome")
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
                <Button radius={"sm"} onPress={handleSignUp} title="Criar Conta" />
                <View style={[styles.flexboxColumn, styles.m2]}>
                    <Text>Já tem conta?</Text>
                    <Button type="clear" title='Entre aqui' onPress={goToLogin} />
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
})
