import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import { useContext } from "react";
import UsersContext from "../context/UsersContext";

export default (props) => {
    const [user, setUser] = useState(props.route.params ? props.route.params : {})
    const { state, dispatch } = useContext(useContext)

    return (
        <View style={style.form} >
            <Text>Name </Text>
            <TextInput
                style={style.input}
                onChangeText={(name) => setUser({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name}
            />

            <Text>Email </Text>
            <TextInput
                style={style.input}
                onChangeText={(email) => setUser({ ...user, email })}
                placeholder="Informe o Email"
                value={user.email}
            />

            <Text>URL do avatar </Text>
            <TextInput
                style={style.input}
                onChangeText={(url) => setUser({ ...user, avatarUrl: url })}
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />

            <Button
                title="Save"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    props.navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBotton: 10,
    },
    form: {
        padding: 12,
    }
})