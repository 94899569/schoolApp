import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const Scores = ({ navigation }) => {
    this.state = {
        tableHead: ['Код', 'Хичээл', 'Крдт', 'Оноо', 'Дүн'],
        tableData: [
            ['A01', 'Математик', '4', '70', 'C+'],
            ['A02', 'Физик', '4', '90', 'A-'],
            ['A03', 'Биеийн тамир', '2', '100', 'A+'],
            ['A04', 'Монголын түүх', '3', '98', 'A+'],
            ['A05', 'Монгол хэл', '3', '97', 'A+'],
            ['A06', 'Англи хэл', '3', '89', 'B+'],
            ['A07', 'Сэтгэлгээний түүх', '3', '91', 'A-'],
            ['A08', 'Дифференциал тэгшитгэл', '3', '81', 'B-'],

        ]
    }
    const state = this.state;
    return (
        <View style={styles.maincontainer}>
            <View style={{ flexDirection: 'row', lex: 1, backgroundColor: '#fff', alignItems: 'center' }}>

                <Pressable onPress={() => navigation.pop()}>
                    <Ionicons name='arrow-back-outline' color={'black'} size={40} style={{ marginTop: 60, marginLeft: 20 }} />
                </Pressable>
                <Text style={styles.headerTxt}>Дүн</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 30}}>
                <Text style={styles.yearText}>2020-2021</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <View style={styles.tableHeadTextContainer}>
                            <Text style={styles.tableHeadText}>1-р улирал</Text>
                        </View>
                        <Table borderStyle={{ borderWidth: 0.5 }}>
                            <Row data={state.tableHead} flexArr={[1, 4, 1, 1, 1]} style={styles.head} textStyle={styles.titleText} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[1, 4, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.tableHeadTextContainer}>
                            <Text style={styles.tableHeadText}>2-р улирал</Text>
                        </View>
                        <Table borderStyle={{ borderWidth: 0.5 }}>
                            <Row data={state.tableHead} flexArr={[1, 4, 1, 1, 1]} style={styles.head} textStyle={styles.titleText} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[1, 4, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>

                </ScrollView>
                <Text style={styles.yearText}>2021-2022</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <View style={styles.tableHeadTextContainer}>
                            <Text style={styles.tableHeadText}>1-р улирал</Text>
                        </View>
                        <Table borderStyle={{ borderWidth: 0.5 }}>
                            <Row data={state.tableHead} flexArr={[1, 4, 1, 1, 1]} style={styles.head} textStyle={styles.titleText} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[1, 4, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.tableHeadTextContainer}>
                            <Text style={styles.tableHeadText}>2-р улирал</Text>
                        </View>
                        <Table borderStyle={{ borderWidth: 0.5 }}>
                            <Row data={state.tableHead} flexArr={[1, 4, 1, 1, 1]} style={styles.head} textStyle={styles.titleText} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[1, 4, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                </ScrollView>
                <Text style={styles.yearText}>2022-2023</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <View style={styles.tableHeadTextContainer}>
                            <Text style={styles.tableHeadText}>1-р улирал</Text>
                        </View>
                        <Table borderStyle={{ borderWidth: 0.5 }}>
                            <Row data={state.tableHead} flexArr={[1, 4, 1, 1, 1]} style={styles.head} textStyle={styles.titleText} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[1, 4, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.tableHeadTextContainer}>
                            <Text style={styles.tableHeadText}>2-р улирал</Text>
                        </View>
                        <Table borderStyle={{ borderWidth: 0.5 }}>
                            <Row data={state.tableHead} flexArr={[1, 4, 1, 1, 1]} style={styles.head} textStyle={styles.titleText} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[1, 4, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                </ScrollView>
                <Text style={styles.yearText}>2023-2024</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <View style={styles.tableHeadTextContainer}>
                            <Text style={styles.tableHeadText}>1-р улирал</Text>
                        </View>
                        <Table borderStyle={{ borderWidth: 0.5 }}>
                            <Row data={state.tableHead} flexArr={[1, 4, 1, 1, 1]} style={styles.head} textStyle={styles.titleText} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[1, 4, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.tableHeadTextContainer}>
                            <Text style={styles.tableHeadText}>2-р улирал</Text>
                        </View>
                        <Table borderStyle={{ borderWidth: 0.5 }}>
                            <Row data={state.tableHead} flexArr={[1, 4, 1, 1, 1]} style={styles.head} textStyle={styles.titleText} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[1, 4, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 25,
        color: 'black',
        position: 'absolute',
        left: 190,
        top: 60
    },
    maincontainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headText: {
        position: 'absolute',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        top: 60
    },
    container: {
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
        width: 400
    },
    head: {
        height: 40,
        backgroundColor: '#D4E6F1',
        fontWeight: 'bold'
    },
    wrapper: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        height: 28
    },
    titleText: {
        textAlign: 'center',
        fontWeight: '600',
    },
    text: {
        textAlign: 'center',
    },
    tableHeadTextContainer: {
        alignContent: 'flex-start',
        justifyContent: 'center',
        marginBottom: 10
    },
    tableHeadText: {
        fontSize: 18,
        fontWeight: '500'
    },
    yearText: {
        marginTop: 15,
        fontWeight: '400',
        fontSize: 25,
        backgroundColor: '#D4E6F1',
        width: '100%',
        height: 50,
        textAlign: 'center',
        padding: 10
    }
});
export default Scores