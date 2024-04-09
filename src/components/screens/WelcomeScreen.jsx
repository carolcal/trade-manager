import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native'

const StyledView = styled(View, 'flex-1 items-center justify-center');
const StyledText = styled(Text, 'text-lg font-bold');

function WelcomeScreen() {

    const navigation = useNavigation()

    const goToRegister = () => {
        navigation.replace("Register")
    }
    const goToLogin = () => {
        navigation.replace("Login")
    }

    return (
        <StyledView className="h-full bg-fuchsia-100">
            <StyledText className="text-lg">Bem-vindo ao seu gerenciador de negócios!</StyledText>

            <Text>Pronto para organizar o seu negócio?</Text>
            <Button title='Registre-se agora!' onPress={goToRegister} />

            <Text mt="$3">Já tem conta?</Text>
            <Button title='Entre aqui' onPress={goToLogin}/>

        </StyledView>


    )

}

export default WelcomeScreen;
