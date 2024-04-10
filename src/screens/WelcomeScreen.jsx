import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container';


function WelcomeScreen() {

    const navigation = useNavigation()

    const goToRegister = () => {
        navigation.replace("Register")
    }
    const goToLogin = () => {
        navigation.replace("Login")
    }

    return (
        <Container>
            <Text h4 h4Style={{textAlign: 'center'}}>Bem-vindo ao seu gerenciador de negócios!</Text>
        
            <Text style={[styles.m4, styles.textCenter]}> Pronto para organizar o seu negócio?</Text>
            <Button radius={"sm"} color="secondary" title='Registre-se agora!' onPress={goToRegister} />

            <View style={[styles.flexboxColumn, styles.m2]}>
                <Text>Já tem conta?</Text>
                <Button radius={"sm"} type="clear" title='Entre aqui' onPress={goToLogin}/>
            </View>        
        
        </Container>
    )
    
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    flexboxColumn: {
        flexDirection: 'row', // Alinha os itens lado a lado
        alignItems: 'center', // Centraliza os itens verticalmente
      },
    textCenter: {
        textAlign: 'center'
    },
    m1: {
        margin: 1
    },
    m2: {
        margin: 3
    },
    m3: {
        margin: 5
    },
    m4: {
        margin: 10
    },
})