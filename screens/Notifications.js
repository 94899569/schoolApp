import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'

const transparent = 'rgba(0,0,0,0.8)'
const Notifications = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState([false, false, false, false, false]);

    const showModal = (index) => {
        const updatedModals = [...modalVisible];
        updatedModals[index] = true;
        setModalVisible(updatedModals);
    };

    const hideModal = (index) => {
        const updatedModals = [...modalVisible];
        updatedModals[index] = false;
        setModalVisible(updatedModals);
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', lex: 1, backgroundColor: '#fff', alignItems: 'center' }}>

                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Ionicons name='arrow-back-outline' color={'black'} size={40} style={{ marginTop: 60, marginLeft: 20 }} />
                </TouchableOpacity>
                <Text style={styles.mainTitle}>
                    Мэдэгдэл
                </Text>
            </View>
            <View style={{ width: '100%', paddingTop: 30, marginTop: 10, flex: 7 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <View style={{ alignItems: 'center', marginBottom: 20 }}>

                        <TouchableOpacity
                            onPress={() => showModal(0)}
                        >
                            <View style={styles.assignCard}>
                                <View style={{ backgroundColor: '#4285F4', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.assignLesson}>Өгөгдлийн олборлолт</Text>
                                    <Text style={styles.assignTitle}>Лаборатори 10</Text>

                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <Text style={styles.assignDate}>2023/12/25 Даваа, 10:00</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => showModal(1)}
                        >
                            <View style={styles.assignCard}>
                                <View style={{ backgroundColor: '#4285F4', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.assignLesson}>Өгөгдлийн олборлолт</Text>
                                    <Text style={styles.assignTitle}>Лаборатори 9</Text>

                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <Text style={styles.assignDate}>2023/12/22 Баасан, 10:00</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => showModal(2)}
                        >
                            <View style={styles.assignCard}>
                                <View style={{ backgroundColor: '#775BA6', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.assignLesson}>Систем хөгжүүлэлт</Text>
                                    <Text style={styles.assignTitle}>Лаборатори 12</Text>

                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <Text style={styles.assignDate}>2023/12/25 Даваа, 12:00</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => showModal(3)}
                        >
                            <View style={styles.assignCard}>
                                <View style={{ backgroundColor: '#566E7A', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.assignLesson}>Мобайл програмчлал</Text>
                                    <Text style={styles.assignTitle}>Лаборатори 10</Text>

                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <Text style={styles.assignDate}>2023/12/22 Баасан, 08:00</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => showModal(4)}
                        >
                            <View style={styles.assignCard}>
                                <View style={{ backgroundColor: '#009788', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.assignLesson}>Бакалаврын төсөл II</Text>
                                    <Text style={styles.assignTitle}>Даалгавар 5</Text>

                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <Text style={styles.assignDate}>2023/12/27 Лхагва, 09:00</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {modalVisible[0] && (
                            <Modal visible={modalVisible[0]} animationType='none' transparent={true}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.popupContainer}>
                                        <View style={{ flex: 6 }}>
                                            <View style={styles.popupTitle}>
                                                <Text style={styles.popupTitleTxt}>Өгөгдлийн олборлолт</Text>
                                            </View>
                                            <View style={styles.contentContainer}>
                                                <Text style={styles.popupContentTitle}>Лаборатори 10</Text>
                                                <Text style={styles.popupContentTxt}>Лаборатори 10</Text>
                                            </View>
                                            <View style={styles.dateContent}>
                                                <Text style={{ color: '#CA0000' }}>2023/12/25, Даваа, 10:00</Text>
                                            </View>

                                        </View>
                                        <TouchableOpacity onPress={() => hideModal(0)} style={styles.touchAble}>
                                            <View style={styles.popupButton}>
                                                <Text style={styles.popupButtonTxt}>Хаах</Text>
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        )}
                        {modalVisible[1] && (
                            <Modal visible={modalVisible[1]} animationType='none' transparent={true}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.popupContainer}>
                                        <View style={{ flex: 6 }}>
                                            <View style={styles.popupTitle}>
                                                <Text style={styles.popupTitleTxt}>Өгөгдлийн олборлолт</Text>
                                            </View>
                                            <View style={styles.contentContainer}>
                                                <Text style={styles.popupContentTitle}>Лаборатори 9</Text>
                                                <Text style={styles.popupContentTxt}>Лаборатори 9</Text>
                                            </View>
                                            <View style={styles.dateContent}>
                                                <Text style={{ color: '#CA0000' }}>2023/12/22, Баасан, 10:00</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => hideModal(1)} style={styles.touchAble}>
                                            <View style={styles.popupButton}>
                                                <Text style={styles.popupButtonTxt}>Хаах</Text>
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        )}
                        {modalVisible[2] && (
                            <Modal visible={modalVisible[2]} animationType='none' transparent={true}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.popupContainer}>
                                        <View style={{ flex: 6 }}>
                                            <View style={styles.popupTitle}>
                                                <Text style={styles.popupTitleTxt}>Систем хөгжүүлэлт</Text>
                                            </View>
                                            <View style={styles.contentContainer}>
                                                <Text style={styles.popupContentTitle}>Лаборатори 12</Text>
                                                <Text style={styles.popupContentTxt}>Лаборатори 12</Text>
                                            </View>
                                            <View style={styles.dateContent}>
                                                <Text style={{ color: '#CA0000' }}>2023/12/25, Даваа, 12:00</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => hideModal(2)} style={styles.touchAble}>
                                            <View style={styles.popupButton}>
                                                <Text style={styles.popupButtonTxt}>Хаах</Text>
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        )}
                        {modalVisible[3] && (
                            <Modal visible={modalVisible[3]} animationType='none' transparent={true}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.popupContainer}>
                                        <View style={{ flex: 6 }}>
                                            <View style={styles.popupTitle}>
                                                <Text style={styles.popupTitleTxt}>Мобайл програмчлал</Text>
                                            </View>
                                            <View style={styles.contentContainer}>
                                                <Text style={styles.popupContentTitle}>Лаборатори 10</Text>
                                                <Text style={styles.popupContentTxt}>Лаборатори 10</Text>
                                            </View>
                                            <View style={styles.dateContent}>
                                                <Text style={{ color: '#CA0000' }}>2023/12/22, Баасан, 08:00</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => hideModal(3)} style={styles.touchAble}>
                                            <View style={styles.popupButton}>
                                                <Text style={styles.popupButtonTxt}>Хаах</Text>
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        )}
                        {modalVisible[4] && (
                            <Modal visible={modalVisible[4]} animationType='none' transparent={true}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.popupContainer}>
                                        <View style={{ flex: 6 }}>
                                            <View style={styles.popupTitle}>
                                                <Text style={styles.popupTitleTxt}>Бакалаврын төсөл II</Text>
                                            </View>
                                            <View style={styles.contentContainer}>
                                                <Text style={styles.popupContentTitle}>Даалгавар 5</Text>
                                                <Text style={styles.popupContentTxt}>Даалгавар 5</Text>
                                            </View>
                                            <View style={styles.dateContent}>
                                                <Text style={{ color: '#CA0000' }}>2023/12/27, Лхагва, 09:00</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => hideModal(4)} style={styles.touchAble}>
                                            <View style={styles.popupButton}>
                                                <Text style={styles.popupButtonTxt}>Хаах</Text>
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        )}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 25,
        color: 'black',
        position: 'absolute',
        left: 160,
        top: 60
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    headerTitle: {
        fontSize: 16,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    headerTxt: {
        fontSize: 30,
        color: 'black',
        fontWeight: '600'
    },
    headerTxt2: {
        fontSize: 25,
        color: 'black',
        fontWeight: '400'
    },
    lessonCard: {
        width: 310,
        height: 180,
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
    cardHeaderTxt: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '400',
    },
    cardTxt: {
        fontSize: 23,
        color: '#fff',
        fontWeight: 'bold',
    },
    assignCard: {
        height: 100,
        borderRadius: 30,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        backgroundColor: '#fff',
        width: '95%',
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    assignLesson: {
        fontSize: 16,
        fontWeight: '500'
    },
    assignTitle: {
        fontSize: 12,
        color: 'gray'
    },
    assignDate: {
        color: '#CA0000',
        fontSize: 14
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: transparent
    },
    popupContainer: {
        backgroundColor: 'white',
        padding: 15,
        width: '90%',
        borderRadius: 20,
        height: '40%'
    },
    contentContainer: {
        padding: 15,
        flex: 5
    },
    popupTitle: {
        padding: 10,
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#3367D5',
        flex: 0.5
    },
    popupTitleTxt: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3367D5'
    },
    popupContentTitle: {
        fontWeight: '500',
        fontSize: 15
    },
    popupContentTxt: {
        fontWeight: '300',
        marginTop: 20
    },
    touchAble: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    popupButton: {
        backgroundColor: '#3367D5',
        width: '30%', height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    popupButtonTxt: {
        color: '#fff',
        ontWeight: '500',
        fontSize: 16
    },
    dateContent: {
        flex: 0.5,
        alignItems: 'flex-end'
    }
});
export default Notifications