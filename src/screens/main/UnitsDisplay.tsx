import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, FlatList, Button, Alert } from 'react-native';

import { database } from './../../databases'
//import { sincronizarAutomaticamente } from './src/databases/sync';
//import { readUnidades } from './src/databases/sync';
import UnitModel from './../../databases/model/unitModel';

import UnitForm from '../admin/unitForm';



function UnitsDisplay() {

    const [units, setUnits] = useState([])
    const [unit, setUnit] = useState({} as UnitModel)

    async function fetchData() {
        const unitCollection = database.get<UnitModel>('units');
        const response = await unitCollection.query().fetch();
        setUnits(response)

    }

    useEffect(() => {
        fetchData();
    }, [])

  /*   useEffect(() => {
        sincronizarAutomaticamente(); // Chame a função de sincronização quando o componente for montado
      }, []);      */

    function handleEdit(item: UnitModel) {
        setUnit(item)
    }

    async function handleRemove(item: UnitModel) {
        await database.write(async () => {
            await item.destroyPermanently();
        })
        fetchData()
        Alert.alert("Deleted!")
    }

    const Unit = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.address}</Text>
            <Text>{item.phone}</Text>
            <Button title="Editar" onPress={() => handleEdit(item)} />
            <Button title="Deletar" onPress={() => handleRemove(item)} />
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text>TRADE MANAGER</Text>
            {/* <Button title='READ' onPress={() => readUnidades()}/> */}
            <FlatList
                data={units}
                renderItem={({ item }) =>
                    <Unit
                        item={item}
                    />
                }
                keyExtractor={item => item.id}>

            </FlatList>
            <UnitForm unit={unit} setUnit={setUnit} fetchData={fetchData}/>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
});

export default UnitsDisplay;