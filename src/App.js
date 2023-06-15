import React from "react";
import { Button, Icon } from '@rneui/base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

import { UsersProvider } from "./context/UsersContext";

const Stack = createNativeStackNavigator()

export default (props) => {
    const screenOptions = {
        headerStyle: {
            backgroundColor: '#f4511e'
        },

        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }

    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="userList"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="userList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: 'Lista de Usúarios',
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate('userForm')}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="#fff" />}
                                    />
                                )
                            }
                        }}
                    />

                    <Stack.Screen
                        name="userForm"
                        component={UserForm}
                        options={{
                            title: 'Formluario de Usúarios'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}