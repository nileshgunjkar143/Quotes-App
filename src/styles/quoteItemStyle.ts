import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    marginBottom: 70,
    marginTop: 20,
  },
  container: {
    flex: 1,
    marginBottom: 15,
  },
  cardContainerStyle: {
    marginTop: 0,
    borderRadius: 15,
    backgroundColor: '#1e2225',
    borderColor: '#e1d64c',
  },
  editView: {
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  edit: {
    fontSize: 21,
    marginLeft: 15,
    color: '#E1D64C',
  },
  delete: {
    fontSize: 19,
    marginLeft: 15,
    color: '#C62424',
  },
  cardFooter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  fontAwesomeLeft: {
    fontSize: 24,
    marginBottom: -15,
    marginLeft: 0,
    color: '#efefef',
    opacity: 0.4,
  },
  fontAwesomeRight: {
    fontSize: 24,
    marginBottom: 20,
    color: '#efefef',
    textAlign: 'right',
    opacity: 0.4,
  },
  quote: {
    fontFamily: 'cursive',
    color: 'white',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 0,
    paddingHorizontal: 40,
    paddingLeft: 28,
    paddingVertical: 20,
    textTransform: 'capitalize',
  },
  author: {
    textAlign: 'right',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 14,
    color: '#c5c5c5',
    fontFamily: 'monospace',
  },
  quoteRight: {
    fontSize: 20,
    textAlign: 'right',
    marginTop: -20,
    marginBottom: 20,
    color: '#e1d64c',
  },
  likes: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 15,
  },
  likesIcon: {
    marginRight: 5,
    marginTop: 0,
  },
  iconText1: {
    fontSize: 17,
    color: 'white',
    marginTop: -2,
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
  },
});
