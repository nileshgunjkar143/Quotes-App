import React, {useEffect, useState} from 'react';
import {Text} from '@rneui/themed';
import {ActivityIndicator, Alert, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/homeStyle';
import quotesActions from '../redux/action/quotes';
import {useRedux} from '../redux/hooks/useRedux';
import NetInfo from '@react-native-community/netinfo';

const Home = () => {
  const [netInfo, setNetInfo] = useState<boolean>(true);

  //Use custom redux hooks
  const {quotesData, dispatch} = useRedux();
  const {quoteOfTheDay, isLoading} = quotesData;

  const alertOffline = () => {
    Alert.alert('Warning', 'You`re Offline Check Your Connection?', [
      {text: 'OK'},
    ]);
  };
  useEffect(() => {
    const data = NetInfo.addEventListener(state => {
      setNetInfo(!state.isConnected);
      !state.isConnected ? alertOffline() : null;
    });
    dispatch(quotesActions.getQuoteOfTheDay(netInfo));
    return () => {
      data();
    };
  }, [dispatch, netInfo]);

  return (
    <View style={styles.head}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Quote of the Day</Text>
        {isLoading ? (
          <ActivityIndicator animating size="large" />
        ) : (
          <>
            <FontAwesome5
              name="quote-left"
              style={styles.fontAwesomeLeft}
              color="#000"
            />
            <Text style={styles.quote}>{quoteOfTheDay?.quote}</Text>
            <FontAwesome5
              name="quote-right"
              style={styles.fontAwesomeRight}
              color="#000"
            />
            <Text style={styles.author}>— {quoteOfTheDay?.author}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default Home;
