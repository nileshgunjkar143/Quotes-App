/* eslint-disable react-hooks/exhaustive-deps */
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {AuthorList, AuthorSearch} from '../components/author';
import authorActions from '../redux/action/authors';
import {useRedux} from '../redux/hooks/useRedux';
import NetInfo from '@react-native-community/netinfo';

const AuthorPage = () => {
  const [searchAuthor, setSearchAuthor] = useState<string>('');
  const [netInfo, setNetInfo] = useState<boolean>(true);

  //Use custom redux hooks
  const {authorsData, dispatch} = useRedux();
  const {authors, isLoading, authorsList} = authorsData;


  useFocusEffect(
    useCallback(() => {
      const data = NetInfo.addEventListener(state => {
        setNetInfo(!state.isConnected);
      });
      dispatch(authorActions.getAuthorsList(netInfo));
      return () => {
        data();
      };
    }, [netInfo]),
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(authorActions.getFilterByAuthor(authors, searchAuthor));
    }, [searchAuthor]),
  );

  return (
    <View style={styles.mainView}>
      <AuthorSearch
        setSearchAuthor={setSearchAuthor}
        searchAuthor={searchAuthor}
      />
      {isLoading ? (
        <ActivityIndicator animating size="large" />
      ) : (
        <>
          <AuthorList
            authors={authorsList}
            isLoading={isLoading}
            authorActions={authorActions}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {backgroundColor: '#1e2225', flex: 1},
});

export default AuthorPage;
