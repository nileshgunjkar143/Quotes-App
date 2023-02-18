import React, {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList, Image, RefreshControl, Text, View} from 'react-native';
import QuoteItem from './QuoteItem';
import styles from '../../styles/quoteItemStyle';
import {quoteListType} from '../../types/quotestype/quotesType';
import {useAppDispatch} from '../../redux/hooks/hooks';
import quotesActions from '../../redux/action/quotes';

const QuoteList = (props: quoteListType) => {
  const {quotes, handleLikeClicked, isLoading, loadQuotes, searchAuthor} =
    props;

  const [refreshing, setRefreshing] = useState<boolean>(isLoading);
  const [quoteData, setQuoteData] = useState<any>([]);

  const dispatch = useAppDispatch();

  const wait = (timeout: number | undefined) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    loadQuotes(searchAuthor);
    wait(2000).then(() => setRefreshing(false));
  }, [loadQuotes, searchAuthor]);

  //Quote delete function
  const handleDelete = (id: string) => {
    alert(id);
  };

  const alert = async (id: string) => {
    Alert.alert(
      'Quote',
      'Are you sure you want to delete?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(quotesActions.deleteQuoteById(id));
            const quoteList = [...quotes];
            let data = quoteList.filter((i: {_id: string}) => i._id !== id);
            setQuoteData(data);
          },
        },
      ],
      {cancelable: false},
    );
  };

  useEffect(() => {
    setQuoteData(quotes);
  }, [quotes]);

  const renderItem = ({item}: any) => (
    <QuoteItem
      quote={item}
      key={item._id}
      likes={item.likes}
      handleLikeClicked={handleLikeClicked}
      handleDelete={handleDelete}
    />
  );

  return (
    <View style={styles.mainView}>
      {quotes?.length === 0 ? (
        <View>
          <Image
            style={styles.noDataImg}
            source={require('../../assets/no-data-found.png')}
          />
          <Text style={styles.noDataTitleText}>Oops!</Text>
          <Text style={styles.noDataText}>No Data Found</Text>
        </View>
      ) : (
        <FlatList
          data={quoteData}
          keyboardShouldPersistTaps="handled"
          renderItem={renderItem}
          keyExtractor={item => item._id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default QuoteList;
