import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: '#fff', // 헤더 배경색상 설정
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
    // marginBottom: 20,
    position: 'absolute', // 헤더를 화면 상단에 고정
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2, // 다른 요소 위에 표시하려면 설정
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', // 요소 사이에 공간을 동일하게 배치
    alignItems: 'center', // 요소들을 수직으로 가운데 정렬

    borderBottomWidth: 0.5,
    borderBottomColor: '#828080',
  },

  header_left: {
    flex: 1,
  },
  header_center: {
    flex: 2,
    // backgroundColor:'red',
    alignItems: 'center',
  },
  header_center_text: {
    fontSize: 31,
    fontWeight: 400,
  },

  header_right: {
    flex: 1,
  },
  image: {
    marginLeft: 15,
    width: 20,
    height: 20,
  },
  settingButton: {
    width: 25,
    height: 25,
    marginLeft: 'auto',
  },
  image2: {
    width: 32,
    height: 32,
    top: 3,
  },
})

export default styles
