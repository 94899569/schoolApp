import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import PieChart from 'react-native-pie-chart'

const transparent = 'rgba(0,0,0,0.8)'
const LessonChoose = ({ navigation, route }) => {
    const { LessonId } = route.params;
    console.log('lessonchoose', LessonId)

    const data = [
        { week: '1-р', lecture: '1', laboratory: '1' },
        { week: '2-р', lecture: '1', laboratory: '1' },
        { week: '3-р', lecture: '1', laboratory: '1' },
        { week: '4-р', lecture: '1', laboratory: '1' },
        { week: '5-р', lecture: '1', laboratory: '1' },
        { week: '6-р', lecture: '1', laboratory: '1' },
        { week: '7-р', lecture: '1', laboratory: '1' },
        { week: '8-р', lecture: '1', laboratory: '0' },
        { week: '9-р', lecture: '2', laboratory: '2' },
        { week: '10-р', lecture: '2', laboratory: '2' },
        { week: '11-р', lecture: '1', laboratory: '1' },
        { week: '12-р', lecture: '1', laboratory: '1' },
        { week: '13-р', lecture: '1', laboratory: '0' },
        { week: '14-р', lecture: '1', laboratory: '1' },
        { week: '15-р', lecture: '1', laboratory: '1' },
        { week: '16-р', lecture: '0', laboratory: '1' },
    ];
    const data1 = [
        { laboratory: 'Лаборатори 1', score: '2/2' },
        { laboratory: 'Лаборатори 2', score: '2/2' },
        { laboratory: 'Лаборатори 3', score: '2/2' },
        { laboratory: 'Лаборатори 4', score: '2/2' },
        { laboratory: 'Лаборатори 5', score: '2/2' },
        { laboratory: 'Лаборатори 6', score: '2/2' },
        { laboratory: 'Лаборатори 7', score: '2/2' },
        { laboratory: 'Лаборатори 8', score: '2/2' },
        { laboratory: 'Лаборатори 9', score: '2/2' },
        { laboratory: 'Лаборатори 10', score: '2/2' },
        { laboratory: 'Лаборатори 11', score: '0/2' },
        { laboratory: 'Нэмэлт даалгавар', score: '2/2' },
    ];
    const data2 = [
        { laboratory: 'Бие даалт 1', score: '10/10' },
        { laboratory: 'Бие даалт 2', score: '9/10' },
    ];
    const data3 = [
        { laboratory: 'Сорил 1', score: '8/8' },
        { laboratory: 'Сорил 2', score: '7/7' },
    ];
    const data4 = [
        { laboratory: 'Шалгалт', score: '29/30' },
    ];

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
        <View style={{ flex: 1 }}>

            {LessonId === 1 ? (
                <ImageBackground source={require('../assets/img1.jpg')} style={{ width: '100%', height: 300 }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Text style={styles.lessTxt}>Өгөгдлийн олборлолт</Text>
                </ImageBackground>
            ) : LessonId === 2 ? (
                <ImageBackground source={require('../assets/img2.jpg')} style={{ width: '100%', height: 300 }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Text style={styles.lessTxt}>Мобайл програмчлал</Text>
                </ImageBackground>

            ) : LessonId === 3 ? (
                <ImageBackground source={require('../assets/img3.jpg')} style={{ width: '100%', height: 300 }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Text style={styles.lessTxt}>Систем хөгжүүлэлт</Text>
                </ImageBackground>
            ) : LessonId === 4 ? (
                <ImageBackground source={require('../assets/img4.jpg')} style={{ width: '100%', height: 300 }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Text style={styles.lessTxt}>Бакалаврын төсөл II</Text>
                </ImageBackground>

            ) : LessonId === 5 ? (
                <ImageBackground source={require('../assets/img5.jpg')} style={{ width: '100%', height: 300 }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Text style={styles.lessTxt}>Програм хангамжийн төсөл</Text>
                </ImageBackground>

            ) : (
                <Text>!</Text>
            )}

            <View style={{ flex: 1, backgroundColor: '#fff', borderTopRightRadius: 30, borderTopLeftRadius: 30, height: '100%', width: '100%', top: -50, paddingTop: 20 }}>

                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', marginBottom: 20, padding: 20, justifyContent: 'center', top: -25 }}>

                            <View style={styles.cardContainerAll}>
                                <Text style={styles.chartTxtAll}>Нийт оноо</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    <PieChart widthAndHeight={80} series={[100, 4]} sliceColor={['#009788', '#CBCBCB']} coverRadius={0.70} />
                                    <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                        <Text style={{ fontSize: 14 }}>96/100</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#CBCBCB', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Дутуу оноо</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ backgroundColor: '#009788', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Авсан оноо</Text>
                                    </View>
                                </View>
                            </View>

                        <TouchableOpacity onPress={() => showModal(0)}>
                            <View style={styles.cardContainer}>
                                <Text style={styles.chartTxt}>Ирц</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    <PieChart widthAndHeight={80} series={[10, 1]} sliceColor={['#3367D5', '#CBCBCB']} coverRadius={0.70} />
                                    <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                        <Text style={{ fontSize: 18 }}>9/10</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#CBCBCB', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Дутуу оноо</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ backgroundColor: '#3367D5', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Авсан оноо</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => showModal(1)}>
                            <View style={styles.cardContainer}>
                                <Text style={styles.chartTxt}>Явц</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    <PieChart widthAndHeight={80} series={[25, 1]} sliceColor={['#3367D5', '#CBCBCB']} coverRadius={0.70} />
                                    <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                        <Text style={{ fontSize: 18 }}>24/25</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#CBCBCB', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Дутуу оноо</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ backgroundColor: '#3367D5', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Авсан оноо</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => showModal(2)}>
                            <View style={styles.cardContainer}>
                                <Text style={styles.chartTxt}>Бие даалт</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    <PieChart widthAndHeight={80} series={[20, 1]} sliceColor={['#3367D5', '#CBCBCB']} coverRadius={0.70} />
                                    <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                        <Text style={{ fontSize: 18 }}>19/20</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#CBCBCB', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Дутуу оноо</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ backgroundColor: '#3367D5', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Авсан оноо</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => showModal(3)}>
                            <View style={styles.cardContainer}>
                                <Text style={styles.chartTxt}>Сорил</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    <PieChart widthAndHeight={80} series={[15, 0]} sliceColor={['#3367D5', '#CBCBCB']} coverRadius={0.70} />
                                    <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                        <Text style={{ fontSize: 18 }}>15/15</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#CBCBCB', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Дутуу оноо</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ backgroundColor: '#3367D5', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Авсан оноо</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => showModal(4)}>
                            <View style={styles.cardContainer}>
                                <Text style={styles.chartTxt}>Шалгалт</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    <PieChart widthAndHeight={80} series={[30, 1]} sliceColor={['#3367D5', '#CBCBCB']} coverRadius={0.70} />
                                    <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                        <Text style={{ fontSize: 18 }}>29/30</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#CBCBCB', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Дутуу оноо</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ backgroundColor: '#3367D5', width: 15, height: 15, borderRadius: 20, marginRight: 5 }}></View>
                                        <Text>Авсан оноо</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {modalVisible[0] && (
                            <Modal visible={modalVisible[0]} animationType='none' transparent={true}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.popupContainerAttend}>
                                        <View style={{ flex: 6 }}>
                                            <View style={styles.popupTitle}>
                                                <Text style={styles.popupTitleTxt}>Ирцийн дэлгэрэнгүй</Text>
                                            </View>
                                            <View style={styles.contentContainerAttend}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                                                    <View style={{ alignItems: 'center' }}>
                                                        <View style={styles.container0}>
                                                            <Text style={styles.cellTxt}>Т</Text>
                                                        </View>
                                                        <Text>Тасалсан</Text>
                                                    </View>
                                                    <View style={{ alignItems: 'center' }}>
                                                        <View style={styles.container1}>
                                                            <Text style={styles.cellTxt}>И</Text>
                                                        </View>
                                                        <Text>Ирсэн</Text>
                                                    </View>
                                                    <View style={{ alignItems: 'center' }}>
                                                        <View style={styles.container2}>
                                                            <Text style={styles.cellTxt}>Ө</Text>
                                                        </View>
                                                        <Text>Өвчтэй</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.titleRow}>
                                                    <Text style={styles.titleCell}>7 хоног</Text>
                                                    <Text style={styles.titleCell}>Лекц</Text>
                                                    <Text style={styles.titleCell}>Лаб</Text>
                                                </View>
                                                <ScrollView>
                                                    {data.map((item, index) => (
                                                        <View key={index} style={styles.row}>
                                                            <View style={styles.cell}>
                                                                <Text style={styles.cellId}>{item.week}</Text>
                                                            </View>
                                                            <View style={styles.cell}>
                                                                {item.lecture == 0 && (
                                                                    <View style={styles.container0}>
                                                                        <Text style={styles.cellTxt}>Т</Text>
                                                                    </View>
                                                                )}
                                                                {item.lecture == 1 && (
                                                                    <View style={styles.container1}>
                                                                        <Text style={styles.cellTxt}>И</Text>
                                                                    </View>
                                                                )}
                                                                {item.lecture == 2 && (
                                                                    <View style={styles.container2}>
                                                                        <Text style={styles.cellTxt}>Ө</Text>
                                                                    </View>
                                                                )}
                                                            </View>
                                                            <View style={styles.cell}>
                                                                {item.laboratory == 0 && (
                                                                    <View style={styles.container0}>
                                                                        <Text style={styles.cellTxt}>Т</Text>
                                                                    </View>
                                                                )}
                                                                {item.laboratory == 1 && (
                                                                    <View style={styles.container1}>
                                                                        <Text style={styles.cellTxt}>И</Text>
                                                                    </View>
                                                                )}
                                                                {item.laboratory == 2 && (
                                                                    <View style={styles.container2}>
                                                                        <Text style={styles.cellTxt}>Ө</Text>
                                                                    </View>
                                                                )}
                                                            </View>
                                                        </View>
                                                    ))}
                                                    <View style={styles.rowAll}>
                                                        <Text style={styles.cell1IdAll}>Нийт:</Text>
                                                        <Text style={styles.cell1All}>13/16</Text>
                                                        <Text style={styles.cell1All}>12/16</Text>
                                                    </View>
                                                </ScrollView>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => hideModal(0)} style={styles.touchAbleAttend}>
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
                                    <View style={styles.popupContainerAttend}>
                                        <View style={{ flex: 6 }}>
                                            <View style={styles.popupTitle}>
                                                <Text style={styles.popupTitleTxt}>Явцийн дэлгэрэнгүй</Text>
                                            </View>
                                            <View style={styles.contentContainerAttend}>
                                                <View style={styles.titleRow}>
                                                    <Text style={styles.titleCell}>Даалгавар</Text>
                                                    <Text style={styles.titleCell}>Оноо</Text>
                                                </View>
                                                <ScrollView>
                                                    {data1.map((item, index) => (
                                                        <View key={index} style={styles.row}>
                                                            <Text style={styles.cell1Id}>{item.laboratory}</Text>
                                                            <Text style={styles.cell1}>{item.score}</Text>
                                                        </View>
                                                    ))}
                                                    <View style={styles.rowAll}>
                                                        <Text style={styles.cell1IdAll}>Нийт:</Text>
                                                        <Text style={styles.cell1All}>22/24</Text>
                                                    </View>
                                                </ScrollView>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => hideModal(1)} style={styles.touchAbleAttend}>
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
                                                <Text style={styles.popupTitleTxt}>Бие даалтын дэлгэрэнгүй</Text>
                                            </View>
                                            <View style={styles.contentContainer}>
                                                <View style={styles.titleRow}>
                                                    <Text style={styles.titleCell}>Бие даалт</Text>
                                                    <Text style={styles.titleCell}>Оноо</Text>
                                                </View>
                                                <ScrollView>
                                                    {data2.map((item, index) => (
                                                        <View key={index} style={styles.row}>
                                                            <Text style={styles.cell1Id}>{item.laboratory}</Text>
                                                            <Text style={styles.cell1}>{item.score}</Text>

                                                        </View>
                                                    ))}
                                                    <View style={styles.rowAll}>
                                                        <Text style={styles.cell1IdAll}>Нийт:</Text>
                                                        <Text style={styles.cell1All}>19/20</Text>
                                                    </View>
                                                </ScrollView>
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
                                                <Text style={styles.popupTitleTxt}>Сорилын дэлгэрэнгүй</Text>
                                            </View>
                                            <View style={styles.contentContainer}>
                                                <View style={styles.titleRow}>
                                                    <Text style={styles.titleCell}>Сорил</Text>
                                                    <Text style={styles.titleCell}>Оноо</Text>
                                                </View>
                                                <ScrollView>
                                                    {data3.map((item, index) => (
                                                        <View key={index} style={styles.row}>
                                                            <Text style={styles.cell1Id}>{item.laboratory}</Text>
                                                            <Text style={styles.cell1}>{item.score}</Text>

                                                        </View>
                                                    ))}
                                                    <View style={styles.rowAll}>
                                                        <Text style={styles.cell1IdAll}>Нийт:</Text>
                                                        <Text style={styles.cell1All}>15/15</Text>
                                                    </View>
                                                </ScrollView>
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
                                                <Text style={styles.popupTitleTxt}>Шалгалтын дэлгэрэнгүй</Text>
                                            </View>
                                            <View style={styles.contentContainer}>
                                                <View style={styles.titleRow}>
                                                    <Text style={styles.titleCell}>Шалгалт</Text>
                                                    <Text style={styles.titleCell}>Оноо</Text>
                                                </View>
                                                <ScrollView>
                                                    {data4.map((item, index) => (
                                                        <View key={index} style={styles.row}>
                                                            <Text style={styles.cell1Id}>{item.laboratory}</Text>
                                                            <Text style={styles.cell1}>{item.score}</Text>

                                                        </View>
                                                    ))}
                                                    <View style={styles.rowAll}>
                                                        <Text style={styles.cell1IdAll}>Нийт:</Text>
                                                        <Text style={styles.cell1All}>29/30</Text>
                                                    </View>
                                                </ScrollView>
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
    );
}

const styles = StyleSheet.create({
    chartTxt: {
        fontSize: 18,
        fontWeight: '400',
        flex: 0.7,
        marginLeft: 15,
    },
    chartTxtAll: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 0.7,
        marginLeft: 15,
    },
    cardContainer: {
        width: '100%',
        height: 120,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        borderRadius: 40,
        backgroundColor: '#fff',
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    cardContainerAll: {
        width: '100%',
        height: 100,
        borderColor: 'gray',
        borderBottomWidth: 3,
        backgroundColor: '#fff',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    lessTxt: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '600',
        marginTop: 100,
        marginLeft: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: transparent
    },
    popupContainerAttend: {
        backgroundColor: 'white',
        padding: 15,
        width: '90%',
        borderRadius: 20,
        height: '75%'
    },
    popupContainer: {
        backgroundColor: 'white',
        padding: 15,
        width: '90%',
        borderRadius: 20,
        height: '35%'
    },
    contentContainerAttend: {
        padding: 15,
        flex: 10
    },
    contentContainer: {
        padding: 15,
        flex: 4
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
    touchAbleAttend: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
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
    container: {
        flex: 1,
        padding: 10,
    },
    titleRow: {
        flexDirection: 'row',
        marginBottom: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
    },
    titleCell: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'italic'
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C2C2C2',
        padding: 8,
        alignItems: 'center',
    },
    rowAll: {
        flexDirection: 'row',
        borderColor: '#C2C2C2',
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#C2C2C2'
    },
    cell: {
        flex: 1,
        alignItems: 'center'
    },
    cell1: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        padding: 5,
        // fontStyle: 'italic'
    },
    cell1Id: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        padding: 5,
        fontWeight: '600',
        // fontStyle: 'italic'
    },
    cell1All: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        padding: 5,
        fontStyle: 'italic'
    },
    cell1IdAll: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        padding: 5,
        fontWeight: '600',
        fontStyle: 'italic'
    },
    cellTxt: {
        textAlign: 'center',
        alignSelf: 'center',
        color: '#fff',
        fontSize: 15,
    },
    cellId: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    container0: {
        backgroundColor: '#6C757D',
        borderRadius: 20,
        width: 60,
        height: 25,
        paddingTop: 3,
        alignItems: 'center'
    },
    container1: {
        backgroundColor: '#3367D5',
        borderRadius: 20,
        width: 60,
        height: 25,
        paddingTop: 3,
        alignItems: 'center'
    },
    container2: {
        backgroundColor: '#28A745',
        borderRadius: 20,
        width: 60,
        height: 25,
        paddingTop: 3,
        alignItems: 'center'
    }

})

export default LessonChoose