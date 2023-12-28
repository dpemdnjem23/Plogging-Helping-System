import React, { useState, useRef, useEffect } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Pressable,
  TouchableHighlight,
  Animated,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Footer from '../../components/footer'
import styles from './mypageStyle/EditProfileStyle'
import HeaderBackScroll2 from '../../components/HeaderbackScroll2'
import TextInput from '../../components/TextInput'
import { ConnectContactLens } from 'aws-sdk'

const EditProfile = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [note, setNote] = useState('')
  const [isPressed, setIsPressed] = useState(false)
  const animatedValue = useRef(new Animated.Value(0)).current
  const [pressInTime, setPressInTime] = useState(0)

  const handleEditProfile = () => {
    // 프로필 수정 로직을 여기에 작성
    //프로필 수정api필요
    //
  }

  Animated.timing(animatedValue, {
    toValue: 1,
    duration: 2000, // 애니메이션 지속 시간 (밀리초)
    useNativeDriver: false, // Native Driver를 사용하지 않음
  }).start()
  const handlePressIn = () => {
    setIsPressed(true)
    // alert('zmfflr')
    setPressInTime(new Date().getTime())

    // 실행할 애니메이션 등을 추가할 수 있습니다.
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  // useEffect(() => {
  //   return () => {
  //     // 컴포넌트가 언마운트 될 때 초기화
  //     setPressInTime(0)
  //   }
  // }, [])
  const handleButtonCheck = () => {
    const pressOutTime = new Date().getTime()
    const pressDuration = pressOutTime - pressInTime

    console.log(pressDuration, pressOutTime, pressInTime)
    if (pressDuration < 500) {
      // 여기에 작동하길 원하는 기능을 추가
      alert(pressDuration)
      setPressInTime(0)

      console.log('Button Pressed!')
    }

    setIsPressed(false)
  }
  const fillWidth = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  })
  //글자 문제 해결 필요
  return (
    <View style={styles.container}>
      <HeaderBackScroll2 title={'프로필 관리'}>
        <View style={styles.content}>
          {/* <View style={styles.imageContent}>
            <Image
              source={require('../../assets/profile_photo.png')}
              style={styles.image}
            />
            <View style={styles.overImageContent}>
              <Image
                style={styles.overImage}
                source={require('../../assets/camera.png')}
              ></Image>
            </View>S

            <Text style={styles.title}>{name}플로깅1</Text>
          </View> */}

          <View style={styles.textInputContainer}>
            <Animated.View
              style={{
                // fontSize: 1,
                right: 0,
                position: 'absolute',

                backgroundColor: 'gray',
                width: fillWidth,
                // opacity: animatedValue,
              }}
            >
              <Pressable
                // onPressIn={handlePressIn}
                onPressOut={handleButtonCheck}
                onLongPress={handlePressIn}
                style={({ pressed }) => [
                  // styles.button,
                  pressed && styles.buttonPressed,
                  styles.textInputContent,
                  // animatedStyle.transform,
                ]}
                // style={}
              >
                <Text style={styles.text}>닉네임</Text>
                <Text style={styles.text2}>도라에몽</Text>
              </Pressable>
            </Animated.View>

            <Pressable style={styles.textInputContent}>
              <Text style={styles.text}>이메일</Text>
              <Text style={styles.text2}>doridori@naver.com</Text>
            </Pressable>

            <Pressable style={styles.textInputContent}>
              <Text style={styles.text}>전화번호</Text>
              <Text style={styles.text2}> 010-5898-5556</Text>
            </Pressable>

            <Pressable style={styles.textInputContent}>
              <Text style={styles.text}>한줄소개</Text>
              <Text style={styles.text2}>안녕하세요</Text>
            </Pressable>
          </View>
          {/* <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>프로필 수정</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </HeaderBackScroll2>
      <Footer></Footer>
    </View>
  )
}

export default EditProfile
