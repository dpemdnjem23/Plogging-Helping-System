import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import styles from './mypageStyle/MyPageStyle.js'
// import { useNavigation } from '@react-navigation/native'
import Profile_photo from '../../components/Profile'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import Footer from '../../components/footer.js'

import HeaderBackScroll from '../../components/HeaderbackScroll.js'
const MyPage = ({ navigation }) => {
  // const navigation = useNavigation()
  const username = useSelector((state) => state.auth.user?.ClientName)
  const email = useSelector((state) => state.auth.user?.email)
  const phone = useSelector((state) => state.auth.user?.phone)
  const [note, setNote] = useState('잘부탁드립니다~~')

  console.log(navigation)
  const handleProfile = () => {
    navigation.navigate('ProfileScreen')
  }

  const handlePointInquiry = () => {
    navigation.navigate('point')
  }

  const handleRecordHistory = () => {
    navigation.navigate('recordHistory')
  }

  const handleServicePolicy = () => {
    // 서비스 정책
  }

  return (
    // <Footer>
    <View style={styles.container}>
      <HeaderBackScroll title={'마이페이지'}>
        <View style={styles.content}>
          <View style={styles.profileContainer}>
            {/* <View> */}
            <Profile_photo />
            {/* </View> */}

            <View style={styles.profileInfo}>
              <Text style={styles.text}>플로깅</Text>
              <TouchableOpacity
                style={styles.profileButton}
                onPress={handleProfile}
              >
                <Text style={styles.buttonText}>프로필 수정</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.centerContainer}>
            <View style={styles.centerContainer_title}>
              <Text style={styles.centerContainer_title_text}>신고</Text>
            </View>

            <View style={styles.centerContainer_label}>
              <Text style={styles.text}>회원신고 내역</Text>
              <Text style={styles.text}>불편신고 내역</Text>
            </View>
          </View>

          <View style={styles.centerContainer}>
            <View s style={styles.centerContainer_title}>
              <Text style={styles.centerContainer_title_text}>포인트 조회</Text>
            </View>
            <View style={styles.centerContainer_label}>
              <TouchableOpacity onPress={handlePointInquiry}>
                <Text style={styles.text}>포인트 사용 내역</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.centerContainer}>
            <View style={styles.centerContainer_title}>
              <Text style={styles.centerContainer_title_text}>
                기록물 내역 확인
              </Text>
            </View>
            <View style={styles.centerContainer_label}>
              <Text style={styles.text}>작성글 확인</Text>
              <Text style={styles.text}>플로깅 데이터 확인</Text>
            </View>
          </View>
          <View style={styles.centerContainer}>
            <View style={styles.centerContainer_title}>
              <Text style={styles.centerContainer_title_text}>
                공지사항/이벤트
              </Text>
            </View>
            <View style={styles.centerContainer_label}>
              <Text style={styles.text}>공지사항</Text>
              <Text style={styles.text}>이벤트</Text>
            </View>
          </View>

          <View style={styles.centerContainer2}>
            <View style={styles.centerContainer_title}>
              <Text style={styles.centerContainer_title_text}>서비스 정책</Text>
            </View>
            <View style={styles.centerContainer_label2}>
              <Text style={styles.text}>개인정보 취급정책</Text>
              <Text style={styles.text}>이용약관</Text>
            </View>
          </View>
        </View>
      </HeaderBackScroll>
      <Footer></Footer>
    </View>
  )
}

export default MyPage
