import {StyleSheet, Text, View, Image, TextInput, Pressable, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
    const array = [
        { username: 'NgocLinh', password: '20002765' },
        { username: 'KeinVu', password: '12345678' },
        { username: 'Ayo', password: '00000000' },
    ];

    function checkLogin(username, password) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (
                username === array[index].username &&
                password === array[index].password
            )
                Alert.alert('Success!');
            else Alert.alert('Fail!');
        }
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[
                    '#FBCB00',
                    '#FBCB00',
                    '#FBCB00',
                    '#FBCB00',
                    '#FBCB00',
                    '#BF9A00',
                    '#BF9A00',
                    'transparent',
                ]}
                style={{ width: '100%', height: '750px' }}
            >
                <View
                    style={{
                        width: '110px',
                        height: '35px',
                        marginTop: '82px',
                        marginLeft: '30px',
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: '30px',
                            fontWeight: '700',
                            lineHeight: '35.16x',
                            letterSpacing: '0em',
                            textAlign: 'center',
                        }}
                    >
                        LOGIN
                    </Text>
                </View>
                <View
                    style={{
                        width: '90%',
                        height: '54px',
                        marginTop: '75px',
                        marginLeft: '15px',
                        borderColor: 'white',
                        backgroundColor: '#FBCB00',
                        borderWidth: '2px',
                        gap: '9px',
                        flexDirection: 'row',
                        backgroundColor: '#C4C4C4 30%',
                    }}
                >
                    <Image
                        style={{
                            height: '32px',
                            width: '32px',
                            marginTop: '9px',
                            marginLeft: '9px',
                        }}
                        source={require('./pic/avataruser.png')}
                    ></Image>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder='Name'
                        style={{
                            outline: 'none',
                            width: '300px',
                            fontFamily: 'Roboto',
                            fontSize: '18px',
                            fontWeight: '400',
                            lineHeight: '21px',
                            letterSpacing: '0em',
                        }}
                    ></TextInput>
                </View>
                <View
                    style={{
                        width: '90%',
                        height: '54px',
                        marginTop: '20px',
                        marginLeft: '15px',
                        borderColor: 'white',
                        backgroundColor: '#FBCB00',
                        borderWidth: '2px',
                        gap: '9px',
                        flexDirection: 'row',
                        backgroundColor: ['Gray 6', '#C4C4C4 30%'],
                    }}
                >
                    <Image
                        style={{
                            height: '32px',
                            width: '32px',
                            marginTop: '9px',
                            marginLeft: '9px',
                        }}
                        source={require('./pic/lock.png')}
                    ></Image>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Password'
                        style={{
                            outline: 'none',
                            width: '230px',
                            fontFamily: 'Roboto',
                            fontSize: '18px',
                            fontWeight: '400',
                            lineHeight: '21px',
                            letterSpacing: '0em',
                        }}
                    ></TextInput>
                    <Image
                        style={{
                            height: '32px',
                            width: '32px',
                            marginTop: '9px',
                            marginLeft: '9px',
                        }}
                        source={require('./pic/eye.png')}
                    ></Image>
                </View>
                <View
                    style={{
                        width: '90%',
                        height: '45px',
                        marginTop: '59px',
                        marginLeft: '15px',
                        backgroundColor: 'black',
                        borderWidth: '2px',
                        gap: '9px',
                        flexDirection: 'row',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}
                >
                    <Pressable onPress={checkLogin(username, password)}>
                        LOGIN
                    </Pressable>
                </View>
                <View
                    style={{
                        width: '239px',
                        height: '27px',
                        marginTop: '45px',
                        marginLeft: '61px',
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '23px',
                            letterSpacing: '0em',
                            textAlign: 'center',
                        }}
                    >
                        CREATE ACCOUNT
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});