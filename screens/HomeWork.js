import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, Pressable, SafeAreaView, TouchableOpacity, LayoutAnimation } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const content = [
    {
        isExpanded: false,
        category_name: 'Лекцийн материал',
        subcategory: [
            { id: 1, val: 'Лекц 1 материал' },
            { id: 2, val: 'Лекц 2 материал' },
            { id: 3, val: 'Лекц 3 материал' },
            { id: 4, val: 'Лекц 4 материал' },
            { id: 5, val: 'Лекц 5 материал' },
            { id: 6, val: 'Лекц 6 материал' },
            { id: 7, val: 'Лекц 7 материал' },
            { id: 8, val: 'Лекц 8 материал' },
            { id: 9, val: 'Лекц 9 материал' },
            { id: 10, val: 'Лекц 10 материал' },
            { id: 11, val: 'Лекц 11 материал' },
            { id: 12, val: 'Лекц 12 материал' },
            { id: 13, val: 'Лекц 13 материал' },
            { id: 14, val: 'Лекц 14 материал' },
            { id: 15, val: 'Лекц 15 материал' },
            { id: 16, val: 'Лекц 16 материал' },
        ]
    },
    {
        isExpanded: false,
        category_name: 'Лабораторын материал',
        subcategory: [
            { id: 17, val: 'Лаборатори 1 материал'},
            { id: 18, val: 'Лаборатори 2 материал'},
            { id: 19, val: 'Лаборатори 3 материал'},
            { id: 20, val: 'Лаборатори 4 материал'},
            { id: 21, val: 'Лаборатори 5 материал'},
            { id: 22, val: 'Лаборатори 6 материал'},
            { id: 23, val: 'Лаборатори 7 материал'},
            { id: 24, val: 'Лаборатори 8 материал'},
            { id: 25, val: 'Лаборатори 9 материал'},
            { id: 26, val: 'Лаборатори 10 материал'},
            { id: 27, val: 'Лаборатори 11 материал'},
            { id: 28, val: 'Лаборатори 12 материал'},
            { id: 29, val: 'Лаборатори 13 материал'},
            { id: 30, val: 'Лаборатори 14 материал'},
            { id: 31, val: 'Лаборатори 15 материал'},
            { id: 32, val: 'Лаборатори 16 материал'},
        ]
    },
]

const ExpandableComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setlayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setlayoutHeight(null);
        } else {
            setlayoutHeight(0);
        }
    }, [item.isExpanded])

    return (
        <View>
            <TouchableOpacity
                style={styles.item}
                onPress={onClickFunction}
            >
                <Text style={styles.itemText}>
                    {item.category_name}
                </Text>
            </TouchableOpacity>
            <View style={{ height: layoutHeight, overflow: 'hidden' }}>

                {
                    item.subcategory.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.content}
                            >
                            <View style={{ backgroundColor: '#C2C2C2', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                            </View>
                            <Text style={styles.text}>
                                {item.val}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const HomeWork = ({ navigation, route }) => {
    const { LessonId } = route.params;
    const [multiSelect, setmultiSelect] = useState(false);
    const [listDataSource, setlistDataSource] = useState(content);

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect) {
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            array.map((value, placeindex) =>
                placeindex === index
                    ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
                    : (array[placeindex]['isExpanded']) = false
            )
        }
        setlistDataSource(array)
    }

    return (
        <View style={{ flex: 1 }}>
            {LessonId === 1 ? (
                <ImageBackground source={require('../assets/img1.jpg')} style={{ width: '100%', height: 300 }}>
                    <Pressable onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </Pressable>
                    <Text style={styles.lessTxt}>Өгөгдлийн олборлолт</Text>
                </ImageBackground>
            ) : LessonId === 2 ? (
                <ImageBackground source={require('../assets/img2.jpg')} style={{ width: '100%', height: 300 }}>
                    <Pressable onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </Pressable>
                    <Text style={styles.lessTxt}>Мобайл програмчлал</Text>
                </ImageBackground>
            ) : LessonId === 3 ? (
                <ImageBackground source={require('../assets/img3.jpg')} style={{ width: '100%', height: 300 }}>
                    <Pressable onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </Pressable>
                    <Text style={styles.lessTxt}>Систем хөгжүүлэлт</Text>
                </ImageBackground>
            ) : LessonId === 4 ? (
                <ImageBackground source={require('../assets/img4.jpg')} style={{ width: '100%', height: 300 }}>
                    <Pressable onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </Pressable>
                    <Text style={styles.lessTxt}>Бакалаврын төсөл II</Text>
                </ImageBackground>
            ) : LessonId === 5 ? (
                <ImageBackground source={require('../assets/img5.jpg')} style={{ width: '100%', height: 300 }}>
                    <Pressable onPress={() => navigation.pop()}>
                        <Ionicons name='arrow-back-outline' color={'#fff'} size={40} style={{ marginTop: 50, marginLeft: 20 }} />
                    </Pressable>
                    <Text style={styles.lessTxt}>Програм хангамжийн төсөл</Text>
                </ImageBackground>
            ) : (
                <Text>!</Text>
            )}
            <View style={{ flex: 1, backgroundColor: '#fff', borderTopRightRadius: 30, borderTopLeftRadius: 30, height: '100%', width: '100%', top: -50, paddingTop: 20, paddingBottom: 30 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ padding: 25 }}>

                            <TouchableOpacity
                                onPress={() => setmultiSelect(!multiSelect)}
                            >
                                <View style={{ backgroundColor: '#177CE6', borderRadius: 10, height: 40, width: 70, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.headerButton}>
                                        {
                                            multiSelect
                                                ? 'Нэг'
                                                : 'Бүгд'
                                        }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {
                                listDataSource.map((item, key) => (
                                    <ExpandableComponent
                                        key={item.category_name}
                                        item={item}
                                        onClickFunction={() => {
                                            updateLayout(key)
                                        }}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lessTxt: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '600',
        marginTop: 100,
        marginLeft: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#177CE6',
        margin: 10
    },
    workName: {
        fontSize: 16,
        fontWeight: '400'
    },
    titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold'
    },
    headerButton: {
        // textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: '#fff'

    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1.2,
        borderColor: '#177CE6',
        marginLeft: 15,
        marginRight: 15
    },
    itemText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#177CE6'
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        padding: 10,
        flex: 1
    },
    textRight: {
        fontSize: 15,
        padding: 10,
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        flex: 0.2
    }
})

export default HomeWork