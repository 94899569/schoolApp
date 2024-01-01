import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const Profile = ({ navigation }) => {
    return (
        <View
            // colors={['#CBD6EE', '#7A95CD']}
            style={styles.container}
        >
            <View style={{ width: '100%', flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.headerTxt}>Профайл</Text>
                </View>
            </View>
            <View style={{ flex: 7, alignItems: 'center' }}>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/me.png')} style={styles.image} />
                    <Text style={styles.logoName}>Энхтүвшин Арвис</Text>
                    <Text style={styles.logoTxt}>se20d017@nmit.edu.mn</Text>
                </View>
                <View style={styles.btnMainContainer}>
                    <View style={styles.btnContainer}>
                            <Text style={styles.infoTxt}>Мэргэжил</Text>
                            <View style={styles.btns}>
                                <Ionicons name='person' size={25} color={'#000'} />
                                <Text style={styles.btnsTxt}>Програм хангамжийн инженер</Text>
                            </View>
                            <Text style={styles.infoTxt}>Анги</Text>
                            <View style={styles.btns}>
                                <Ionicons name='person' size={25} color={'#000'} />
                                <Text style={styles.btnsTxt}>406</Text>
                            </View>
                            <Text style={styles.infoTxt}>Оюутны код</Text>
                            <View style={styles.btns}>
                                <Ionicons name='person' size={25} color={'#000'} />
                                <Text style={styles.btnsTxt}>se20d017</Text>
                            </View>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <View style={styles.logoutBtn}>
                                <Ionicons name='log-out-outline' size={28} color={'#fff'} />
                                <Text style={styles.logoutTxt}>Гарах</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View styles={{ flex: 0.7 }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    btnMainContainer: {
        backgroundColor: '#fff', 
        borderRadius: 40, 
        width: '90%', 
        // padding: 5, 
        flex: 4, 
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    btnContainer: {
        padding: 20
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    btns: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 50,
        // marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        flexDirection: 'row',
        paddingLeft: 15
    },
    logoutBtn: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#3367D5',
        height: 50,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    btnsTxt: {
        fontSize: 18,
        color: '#6C757D',
        marginLeft: 15
    },
    logoutTxt: {
        fontSize: 20,
        color: '#fff'
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    headerTxt: {
        fontSize: 25,
        color: 'black'
    },
    logoName: {
        marginTop: 10,
        fontWeight: '600',
        fontSize: 22
    },
    logoTxt: {
        color: '#6C757D',
        fontWeight: '500',
        marginBottom: 20
    },
    infoTxt: {
        fontSize: 17,
        margin: 15,
        fontWeight: '500'
    }
})
export default Profile