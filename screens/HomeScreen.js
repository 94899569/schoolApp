import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Modal, Button, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'

const transparent = 'rgba(0,0,0,0.8)'
const HomeScreen = ({ navigation }) => {
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
    <LinearGradient
      colors={['#fff', '#fff']}
      style={{ flex: 1 }}
    >
      <View style={{ width: '100%', flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center', justifyContent: 'space-between' }}>
          {/* <Ionicons name='notifications' color={'gray'} size={35} /> */}
          <View style={{ flexDirection: 'column', marginLeft: 20 }}>
            <Text style={styles.headerTxt}>Сайна уу,</Text>
            <Text style={styles.headerTxt2}>Э. Арвис</Text>
          </View>
          <Image source={require('../assets/me.png')} style={styles.logo} />
        </View>
      </View>
      <View style={{ flex: 5, alignSelf: 'center' }}>
        <View style={{ flex: 2 }}>
          <Text style={styles.headerTitle}>Дугуйлан, Секц</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ImageBackground source={require('../assets/img6.jpg')} style={styles.lessonCard} imageStyle={styles.imageCard}>
              <Text style={styles.cardHeaderTxt}>5 дахь өдөр бүр 18:50-с</Text>
              <Text style={styles.cardTxt}>Сагс</Text>
            </ImageBackground>
            <ImageBackground source={require('../assets/img7.jpg')} style={styles.lessonCard} imageStyle={styles.imageCard}>
              <Text style={styles.cardHeaderTxt}>1, 5 дахь өдөр бүр 18:50-с</Text>
              <Text style={styles.cardTxt}>Ширээний теннис</Text>
            </ImageBackground>
            <ImageBackground source={require('../assets/img8.jpg')} style={styles.lessonCard} imageStyle={styles.imageCard}>
              <Text style={styles.cardHeaderTxt}>4 дэх өдөр бүр 17:30-с</Text>
              <Text style={styles.cardTxt}>Чөлөөт бүжиг</Text>
            </ImageBackground>
            <ImageBackground source={require('../assets/img9.jpg')} style={styles.lessonCard} imageStyle={styles.imageCard}>
              <Text style={styles.cardHeaderTxt}>2 дахь өдөр бүр 15:30-с</Text>
              <Text style={styles.cardTxt}>Гэрэл зураг</Text>
            </ImageBackground>
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }}>

          <TouchableOpacity onPress={() => navigation.navigate('schedule')}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ width: 70, height: 70, borderRadius: 100, backgroundColor: '#009788', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name='calendar-outline' size={35} color={'#fff'} />
              </View>
              <Text>Хуваарь</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('score')}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ width: 70, height: 70, borderRadius: 100, backgroundColor: '#3367D5', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name='newspaper-outline' size={35} color={'#fff'} />
              </View>
              <Text>Дүн</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('info')}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ width: 70, height: 70, borderRadius: 100, backgroundColor: '#32AC71', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name='chatbox-ellipses-outline' size={35} color={'#fff'} />
              </View>
              <Text>Мэдээлэл</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('notification')}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: 70, height: 70, borderRadius: 100, backgroundColor: '#566E7A', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name='notifications-outline' size={35} color={'#fff'} />
            </View>
            <Text>Мэдэгдэл</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 3, padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: '500' }}>Хичээлүүд</Text>
            <TouchableOpacity onPress={() => navigation.navigate('all')}>
              <Text style={{ fontSize: 12, color: '#497DFF', fontWeight: 'bold' }}>бүгдийг харах</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            <View style={{ alignItems: 'center', marginBottom: 20 }}>

              <TouchableOpacity
                 onPress={() => navigation.navigate('lessContainer', { LessonId: 1 })}
              >
                <View style={styles.assignCard}>
                  <View style={{ backgroundColor: '#4285F4', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.assignLesson}>Өгөгдлийн олборлолт</Text>
                  </View>
                </View>
              </TouchableOpacity>



              <TouchableOpacity
                 onPress={() => navigation.navigate('lessContainer', { LessonId: 2 })}
              >
                <View style={styles.assignCard}>
                  <View style={{ backgroundColor: '#566E7A', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.assignLesson}>Мобайл програмчлал</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                 onPress={() => navigation.navigate('lessContainer', { LessonId: 3 })}
              >
                <View style={styles.assignCard}>
                  <View style={{ backgroundColor: '#775BA6', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.assignLesson}>Систем хөгжүүлэлт</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                 onPress={() => navigation.navigate('lessContainer', { LessonId: 4 })}
              >
                <View style={styles.assignCard}>
                  <View style={{ backgroundColor: '#009788', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.assignLesson}>Бакалаврын төсөл II</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                 onPress={() => navigation.navigate('lessContainer', { LessonId: 5 })}
              >
                <View style={styles.assignCard}>
                  <View style={{ backgroundColor: '#32AC71', width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Ionicons name='newspaper-outline' color={'#fff'} size={25} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.assignLesson}>Програм хангамжийн төсөл</Text>
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
      </View >
      <View style={{ flex: 0.5 }}>
      </View>
    </LinearGradient >
  )
}

const styles = StyleSheet.create({
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
    height: 90,
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

export default HomeScreen