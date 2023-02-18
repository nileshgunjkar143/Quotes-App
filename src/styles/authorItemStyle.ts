import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    borderWidth: 1,
    elevation: 0,
    borderRadius: 10,
    marginTop: 0,
    marginBottom: 15,
    backgroundColor: '#1e2225',
    borderColor: '#e1d64c',
  },
  text: {
    color: 'white', 
    fontWeight: '400'
  },
  mainView: {
    marginTop: 20, 
    padding: 2, 
    marginBottom: 50
  },
  noDataImg: {
    alignSelf: 'center', 
    marginTop: 30,
    marginBottom: 10, 
  },
  noDataTitleText: {
    fontFamily: 'sans-serif',
    fontSize: 30,
    fontWeight: '700',
    color: '#e1d64c',
    textAlign: 'center',
    marginBottom: 5,
  },
  noDataText: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#e1d64c',
    marginBottom: 30,
  }
});
