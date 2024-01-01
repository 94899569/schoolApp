import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const LessonsAll = ({ navigation }) => {
    return (
        <View
            //   colors={['#BCF2F6', '#3F8880']}
            style={{ flex: 1, backgroundColor: '#fff' }}
        >
            <View style={{ backgroundColor: '#fff', width: '100%', flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={()=>navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'black'} size={35} />
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>Хичээл</Text>
                    <Image source={require('../assets/me.png')} style={styles.logo} />
                </View>
            </View>
            <View style={{ flex: 6, alignSelf: 'center' }}>
                {/* <View style={{ flex: 2 }}> */}
                <ScrollView horizontal={false}>
                    <Pressable onPress={() => navigation.navigate('lessContainer', { LessonId: 1 })}>
                        <ImageBackground source={require('../assets/img1.jpg')} style={styles.lessonCard} imageStyle={styles.imageCard}>
                            <Text style={styles.teacherTxt}>Гантөр Тогтох</Text>
                            <Text style={styles.cardTxt}>Өгөгдлийн олборлолт</Text>
                        </ImageBackground>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('lessContainer', { LessonId: 2 })}>
                        <ImageBackground source={require('../assets/img2.jpg')} style={styles.lessonCard} imageStyle={styles.imageCard}>
                            <Text style={styles.teacherTxt}>Солонго Ц</Text>
                            <Text style={styles.cardTxt}>Мобайл програмчлал</Text>
                        </ImageBackground>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('lessContainer', { LessonId: 3 })}>
                        <ImageBackground source={require('../assets/img3.jpg')} style={styles.lessonCard} imageStyle={styles.imageCard}>
                            <Text style={styles.teacherTxt}>Идэрбаатар Мөнхөө</Text>
                            <Text style={styles.cardTxt}>Систем хөгжүүлэлт</Text>
                        </ImageBackground>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('lessContainer', { LessonId: 4 })}>
                        <ImageBackground source={require('../assets/img4.jpg')} style={styles.lessonCard} imageStyle={styles.imageCard}>
                            <Text style={styles.teacherTxt}>Анхбаяр Нямдаваа</Text>
                            <Text style={styles.cardTxt}>Бакалаврын төсөл II</Text>
                        </ImageBackground>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('lessContainer', { LessonId: 5 })}>
                        <ImageBackground source={require('../assets/img5.jpg')} style={styles.lessonCard} imageStyle={styles.imageCard}>
                            <Text style={styles.teacherTxt}>Золжаргал Дөлгөөн</Text>
                            <Text style={styles.cardTxt}>Програм хангамжийн төсөл</Text>
                        </ImageBackground>
                    </Pressable>
                </ScrollView>
                {/* </View> */}

            </View>
            <View style={{ flex: 0.7 }}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    headerTxt: {
        fontSize: 25,
        color: 'black',
    },
    lessonCard: {
        width: 400,
        height: 150,
        margin: 15,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    imageCard: {
        borderRadius: 20
    },
    cardTxt: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',

    },
    teacherTxt: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '400',
    }
});

export default LessonsAll