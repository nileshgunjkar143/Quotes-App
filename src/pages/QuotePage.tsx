import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {QuoteSearch} from '../components/quote';
import QuoteList from '../components/quote/QuoteList';
import quotesActions from '../redux/action/quotes';
import {useRedux} from '../redux/hooks/useRedux';
import {quotePageType} from '../types/quotestype/quotesType';
import NetInfo from '@react-native-community/netinfo';

const QuotePage = (props: quotePageType) => {
  const {route, navigation} = props;
  const [searchAuthor, setSearchAuthor] = useState<string>('');
  const [netInfo, setNetInfo] = useState<boolean>(true);

  /* Get the param */
  const params = route.params;

  //Use custom redux hooks
  const {quotesData, dispatch} = useRedux();
  const {quotesList, isLoading} = quotesData;

  const loadQuotes = async (author: string, usenetInfo: boolean) => {
    if (author) {
      setSearchAuthor(author);
      //Get quote By author
      dispatch(quotesActions.getQuotesListByAuthor(author, usenetInfo));
    } else {
      //Get all quotes
      dispatch(quotesActions.getQuotesList(usenetInfo));
    }
  };

  //change screen function (goto quote add screen)
  const toggleAddQuote = () => {
    navigation.navigate('Add New Quote');
  };

  const handleLikeClicked = async (quoteId: any) => {
    dispatch(quotesActions.handleLikeClicked(quoteId));
  };

  useFocusEffect(
    useCallback(() => {
      const data = NetInfo.addEventListener(state => {
        setNetInfo(!state.isConnected);
      });

      loadQuotes(params, netInfo);
      return () => {
        data();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, netInfo]),
  );

  return (
    <View style={styles.mainView}>
      <QuoteSearch
        loadQuotes={loadQuotes}
        toggleAddQuote={toggleAddQuote}
        searchAuthor={searchAuthor}
        setSearchAuthor={setSearchAuthor}
      />
      {isLoading ? (
        <ActivityIndicator animating size="large" />
      ) : (
        <QuoteList
          quotes={quotesList}
          handleLikeClicked={handleLikeClicked}
          loadQuotes={loadQuotes}
          isLoading={isLoading}
          searchAuthor={searchAuthor}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {backgroundColor: '#1e2225', flex: 1},
});

export default QuotePage;
