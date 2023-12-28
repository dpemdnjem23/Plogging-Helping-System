import { StyleSheet, Dimensions, PixelRatio } from 'react-native'
import { theme } from '../../../core/theme'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,

    marginBottom: 80,
    marginTop: 80,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderBottomColor: '#c1c1c1',
    borderBottomWidth: 0.5,
  },

  buttonPressed: {
    // fontSize: 15,

    // width:
    // width: 200,
    backgroundColor: '#f1f1f1',
  },

  imageContent: {
    // flex: 1,
    marginTop: 40,
  },
  view: {
    backgroundColor: 'lightgray',
  },
  image: {
    width: 200,
    height: 200,
  },
  overImageContent: {
    flex: 1,
    right: -10,
    bottom: 45,
    position: 'absolute',
    alignItems: 'center', // 이미지를 수평으로 가운데로 정렬
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    // backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 100,
  },

  overImage: {
    position: 'absolute', // 겹치려는 이미지를 프로필 사진 위에 겹치기 위해 절대 위치로 설정
    width: '65%',
    height: '65%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 24 * PixelRatio.getFontScale(),
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,

    textAlign: 'center',
  },

  textInputContainer: {
    // justifyContent: 'center',
    padding: 15,
    // alignIte/ms: 'center',
    flex: 1,
    marginTop: 20,
  },
  textInputContent: {
    // backgroundColor: 'red',
    marginTop: 10,

    height: 60,
    // flexDirection: 'column',
  },

  text: {
    fontSize: 18,
  },
  text2: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    // marginTop: 10,
    width: width * 0.85,
  },
  button: {
    justifyContent: 'center', // 버튼 내의 요소들을 수직으로 가운데 정렬
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    backgroundColor: '#379DF1',
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: 23,
    color: 'white',

    fontSize: 20,
  },
})
export default styles
