import React from "react";
import { ListItem, Icon, Text } from '@rneui/themed';
import Container from "../../components/Container";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function AdminScreen() {

    const itemsAdmin = [
        {
            icon: "store",
            title: "Cadastro Unidades",
            route: "AdminUnits"
        },
        {
            icon: "add-shopping-cart",
            title: "Cadastro de Estoques",
            route: "AdminStocks"
        },
        {
            icon: "remove-shopping-cart",
            title: "Cadastro de Despesas",
            route: "AdminExpanses"
        },
        {
            icon: "attach-money",
            title: "Gerenciar Capital",
            route: "AdminMoney"
        },
        {
            icon: "group",
            title: "Gerenciar Usuarios",
            route: "AdminUsers"
        },
    ]
    const navigation = useNavigation()

    const goToPressed = (route) => {
        console.log(route)
        navigation.replace(route)
    }

    const ItemsAdminList = itemsAdmin.map((item, index) => {
        return (
            <ListItem 
            key={index}
            topDivider={index === 0 ? false : true} 
            onPress={() => goToPressed(item.route)}>
                <Icon name={item.icon} />
                <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem>
        )
    })

    return (
        <>
        <Container>
            <View style={{ alignItems: 'left' }}>
                {ItemsAdminList}
            </View>

        </Container>
        </>
    )
}