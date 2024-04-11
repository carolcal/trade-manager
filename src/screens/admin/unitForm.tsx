import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

import { database } from '../../databases'
import UnitModel from '../../databases/model/unitModel';

function UnitForm({unit, setUnit, fetchData}) {

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<number>(0);
    const [user_id] = useState<number>(1);

    async function handleSave() {
        if(unit.id){
            await database.write(async() => {
                await unit.update(data => {
                    data.name = name
                    data.description = description
                    data.address = address
                    data.phone = phone
                })
            })
            Alert.alert("Registro editado!");
            setUnit({} as UnitModel)
        }else{
            await database.write(async () => {
                await database
                .get<UnitModel>('units')
                .create(data => {
                    data.name = name,
                    data.description = description,
                    data.address = address,
                    data.phone = phone,
                    data.user_id = user_id
                })
            })
            Alert.alert("Registro criado!");
        }

        fetchData()
        setName('')
        setDescription('')
        setAddress('')
        setPhone(0)
    }

    useEffect(() => {
        if (unit) {
            setName(unit.name || '');
            setDescription(unit.description || '');
            setAddress(unit.address || '');
            setPhone(unit.phone || 0);
          }
    }, [unit])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Endereço"
                value={address}
                onChangeText={(text) => setAddress(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone"
                value={phone === 0 ? '' : phone.toString()}
                onChangeText={(text) => setPhone(Number(text))}
                keyboardType="numeric"
            />
            <Button title="Enviar" onPress={handleSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default UnitForm;
