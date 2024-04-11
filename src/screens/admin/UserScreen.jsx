import React from "react";
import { Text, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'

export default function UserScreen() {
    
    const navigation = useNavigation()

    const goToHome = () => {
        navigation.replace("Units")
    }

    return (
        <>
        <Text>Usuário</Text>
        <Button onPress={goToHome}>Home</Button>
        </>
    )
}