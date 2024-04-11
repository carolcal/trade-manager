import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../databases/firebase'
import { signOut } from 'firebase/auth'
import { Button, Header, ListItem, Icon, Text } from '@rneui/themed';
import { View } from 'react-native'

const HeaderComponent = () => {
    const [menu, setMenu] = useState(false)

    const [showBack, setShowBack] = useState(false)


    const toggleMenu = () => {
        setMenu(!menu)
    }

    const goToAdmin = () => {
        setMenu(false)
        setShowBack(true)
        navigation.replace("Admin")
    }

    const goToUser = () => {
        setMenu(false)
        setShowBack(true)
        navigation.replace("User")
    }

    const goToUnits = () => {
        setMenu(false)
        setShowBack(false)
        navigation.replace("Units")
    }

    const navigation = useNavigation()

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigation.replace("Login")
        }).catch(error => alert(error.message))
    }

    return <Header
        elevated
        placement="left"
        rightComponent={
            <>
                <Button onPress={toggleMenu}>
                    <Icon name='menu' />
                </Button>
                {menu && <View>
                    <ListItem onPress={goToUser}>
                        <Icon name='person' />
                        <ListItem.Title>Usuário</ListItem.Title>
                    </ListItem>
                    <ListItem onPress={goToAdmin}>
                        <Icon name='house' />
                        <ListItem.Title>Administrativo</ListItem.Title>
                    </ListItem>
                    <ListItem onPress={handleSignOut}>
                        <Icon name='logout' />
                        <ListItem.Title>Sair</ListItem.Title>
                    </ListItem>
                </View>}
            </>

        }
        leftComponent={
            showBack &&
            <Button onPress={goToUnits}>
                <Icon name='chevron-left' />
                <Text>Voltar</Text>
            </Button>
        }
    />;
};



export default HeaderComponent;