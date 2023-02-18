import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e2225',
  },
  title: {
    width: '90%',
    borderRadius: 20,
    padding: 20,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    color: '#e1d64c',
    marginBottom: 50,
    fontFamily: 'monospace',
  },
  fontAwesomeLeft: {
    fontSize: 32,
    marginBottom: 0,
    marginLeft: 0,
    color: '#efefef',
    opacity: 0.4,
  },
  fontAwesomeRight: {
    fontSize: 32,
    marginBottom: 30,
    marginLeft: 0,
    color: '#efefef',
    opacity: 0.4,
    textAlign: 'right',
  },
  quote: {
    fontFamily: 'cursive',
    color: '#fff',
    lineHeight: 36,
    fontWeight: '700',
    textAlign: 'left',
    paddingLeft: 40,
    paddingRight: 30,
    paddingVertical: 10,
    fontSize: 28,
    textTransform: 'capitalize',
  },
  quoteRight: {
    fontSize: 20,
    textAlign: 'right',
    marginTop: -20,
    marginBottom: 20,
    color: '#e1d64c',
  },
  author: {
    textAlign: 'right',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 16,
    color: '#c5c5c5',
    fontFamily: 'monospace',
  },
});