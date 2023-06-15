import React, { useContext } from "react";
import { Text, View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon } from '@rneui/base'
import UsersContext from "../context/UsersContext";

export default (props) => {
    const { state, dispatch } = useContext(UsersContext)

    const confirmUserDeletion = (user) => {
        Alert.alert('Excluir Usúario', 'Deseja Excluir Usúario', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            },
        ])
    }

    const getActions = (user) => (
        <>
            <Button
                onPress={() => props.navigation.navigate('userForm', user)}
                type="clear"
                icon={<Icon name="edit" size={25} color='orange' />}
            />
            <Button
                onPress={() => confirmUserDeletion(user)}
                type="clear"
                icon={<Icon name="delete" size={25} color='red' />}
            />
        </>
    )

    const getUserItem = ({ item: user }) => {
        return (
            <ListItem
                leftAvatar={{ source: { uri: user.avatar } }}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('userForm', user)}
            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}