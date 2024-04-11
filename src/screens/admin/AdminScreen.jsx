import React from "react";
import { Text, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'

export default function AdminScreen() {
    
    const navigation = useNavigation()

    const goToHome = () => {
        navigation.replace("Units")
    }

    return (
        <>
        <Text>Administrativo</Text>
        <Button onPress={goToHome}>Home</Button>
        </>
    )
}