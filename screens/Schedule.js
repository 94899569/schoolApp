import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Schedule = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', lex: 1, backgroundColor: '#fff', alignItems: 'center' }}>

                <Pressable onPress={() => navigation.pop()}>
                    <Ionicons name='arrow-back-outline' color={'black'} size={40} style={{ marginTop: 60, marginLeft: 20 }} />
                </Pressable>
                <Text style={styles.headerTxt}>Хуваарь</Text>
            </View>
            <View style={{ width: '100%', paddingTop: 30, marginTop: 10, flex: 7 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 20, justifyContent: 'space-evenly' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 20, height: 20, backgroundColor: '#D4EFDF', borderRadius: 20, marginRight: 5 }}>
                        </View>
                        <Text>Лекц</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 20, height: 20, backgroundColor: '#D4E6F1', borderRadius: 20, marginRight: 5 }}>
                        </View>
                        <Text>Семинар</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.daysContainer}>
                        <View style={styles.days}>
                            <Text style={styles.daysTxt}>Мягмар</Text>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>08:20</Text>
                                    <Text>09:50</Text>
                                </View>
                                <View style={styles.lessonsInLekts}>
                                    <Text>Япон хэл</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>10:00</Text>
                                    <Text>11:30</Text>
                                </View>
                                <View style={styles.lessonsInLekts}>
                                    <Text>Програм хангамжийн төсөл</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>11:40</Text>
                                    <Text>13:10</Text>
                                </View>
                                <View style={styles.lessonsInSem}>
                                    <Text>Програм хангамжийн төсөл</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.days}>
                            <Text style={styles.daysTxt}>Лхагва</Text>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>10:00</Text>
                                    <Text>11:30</Text>
                                </View>
                                <View style={styles.lessonsInLekts}>
                                    <Text>Өргөн хүрээний систем хөгжүүлэлт</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>11:40</Text>
                                    <Text>13:10</Text>
                                </View>
                                <View style={styles.lessonsInSem}>
                                    <Text>Япон хэл</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>15:40</Text>
                                    <Text>17:10</Text>
                                </View>
                                <View style={styles.lessonsInLekts}>
                                    <Text>Мобайл Програмчлал</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>17:20</Text>
                                    <Text>18:50</Text>
                                </View>
                                <View style={styles.lessonsInSem}>
                                    <Text>Мобайл Програмчлал</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.days}>
                            <Text style={styles.daysTxt}>Баасан</Text>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>08:20</Text>
                                    <Text>09:50</Text>
                                </View>
                                <View style={styles.lessonsInSem}>
                                    <Text>Өргөн хүрээний систем хөгжүүлэлт</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>10:00</Text>
                                    <Text>11:30</Text>
                                </View>
                                <View style={styles.lessonsInLekts}>
                                    <Text>Өгөгдлийн Олборлолт</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lessons}>
                            <View style={styles.lessonsIn1}>
                                <View style={{ flex: 1, paddingLeft: 10 }}>
                                    <Text>11:40</Text>
                                    <Text>13:10</Text>
                                </View>
                                <View style={styles.lessonsInSem}>
                                    <Text>Өгөгдлийн Олборлолт</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 25,
        color: 'black',
        position: 'absolute',
        left: 167,
        top: 60

    },
    daysContainer: {
        flex: 1,
        width: '100%',
        marginBottom: 10
    },
    days: {
        width: '100%',
        height: 50,
        backgroundColor: '#E5E8E8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    daysTxt: {
        fontSize: 25,
        fontWeight: '100'
    },
    lessons: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#E5E8E8',
        flex: 1,
        padding: 5
    },
    lessonsIn1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    lessonsInLekts: {
        width: '100%',
        height: '100%',
        backgroundColor: '#D4EFDF',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 6,
        margin: 5,
        borderRadius: 10
    },
    lessonsInSem: {
        width: '100%',
        height: '100%',
        backgroundColor: '#D4E6F1',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 6,
        margin: 5,
        borderRadius: 10
    },
});
export default Schedule