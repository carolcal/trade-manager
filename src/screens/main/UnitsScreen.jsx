import React from "react";
import { Text } from '@rneui/themed';
import { useRoute } from '@react-navigation/native'

export default function UnitsScreen() {
    const route = useRoute();
    return (
        <Text>{route.name}</Text>
    )
}