import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import MyInput from '../components/MyInput'

import { FIREBASE_AUTH } from "../FireBaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { ActivityIndicator } from "react-native-paper";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigation.navigate('bottom')
        }
        catch (error) {
            console.log(error);
            alert('Нэвтрэх нэр/нууц үг буруу');
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <LinearGradient
            colors={['#CBD6EE', '#7A95CD']}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <View style={{ backgroundColor: '#fff', width: '80%', height: 350, borderRadius: 30, justifyContent: 'center' }}>
                <Text style={{ color: '#3367D5', textAlign: 'center', top: -25, fontSize: 30, fontWeight: '500' }}>Нэвтрэх</Text>
                <View >
                    <MyInput
                        askeyboardType="number-pad"
                        placeholder="Нэвтрэх нэр"
                        placeholderTextColor="#3367D5"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <MyInput
                        secureTextEntry={true}
                        placeholder="Нууц үг"
                        placeholderTextColor="#3367D5"
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <>
                        <TouchableOpacity onPress={signIn} style={{ alignItems: 'center', top: 20 }}>
                            <View style={{ backgroundColor: '#3367D5', width: '70%', height: 50, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff' }}>Нэвтрэх</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </LinearGradient>
    )
}

export default Login