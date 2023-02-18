import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  formView: {
    backgroundColor: '#1e2225',
  },
  boxView: {
    alignItems: 'center',
    margin: 50,
    padding: 5,
  },
  textarea: {
    borderBottomWidth: 1,
    width: 350,
    borderColor: '#e1d64c',
    marginBottom: 10,
    color: 'white',
  },
  textinput: {
    borderBottomWidth: 1,
    width: 350,
    borderColor: '#e1d64c',
    color: 'white',
  },
  errorText: {
    marginTop: 30,
    color: '#C62424',
    width: '120%',
  },
  successText: {
    marginTop: 30,
    color: 'green',
    width: '120%',
  },
  button: {
    margin: 0,
    marginHorizontal: 40,
    borderRadius: 2,
    borderWidth: 0,
    width: 330,
  },
  textButton: {
    color: 'black',
    fontWeight: '700',
  },
  dropdownList: {
    maxHeight: 100,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#1e2225',
    width: '117%',
    marginTop: 13,
  },
  dropdownText: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#bbbb75',
    padding: 3,
  },
});
