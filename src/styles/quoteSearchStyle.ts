import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  searchWrap: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: 'white',
    marginHorizontal: 5,
  },
  search: {
    marginTop: 10,
    color: 'white',
    backgroundColor:'#1e2225',
    borderColor:'#e1d64c',
    borderWidth: 1,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 20,
    width: '77%',
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 22,
    alignSelf: 'center',
    marginHorizontal: 15,
    color: 'white',
  },
  addButton: {
    fontSize: 45,
    marginVertical: 5,
    marginRight: 15,
    marginTop: 20,
    color: 'white',
  },
});
