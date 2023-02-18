import React, {useCallback, useState} from 'react';
import {FlatList, Image, RefreshControl, Text, View} from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../../styles/authorItemStyle';
import {AuthorPropsType} from '../../types/authorstype/authorsTypes';
import AuthorItem from './AuthorItem';

const AuthorList = (props: AuthorPropsType) => {
  const {authors, authorActions, isLoading} = props;
  const [refreshing, setRefreshing] = useState<boolean>(isLoading);

  const dispatch = useDispatch();

  const wait = (timeout: number | undefined) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    dispatch(authorActions.getAuthorsList());
    wait(2000).then(() => setRefreshing(false));
  }, [authorActions, dispatch]);

  const renderItem = ({item}: {item: string}) => <AuthorItem author={item} />;

  return (
    <View style={styles.mainView}>
      {authors.length === 0 ? (
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
          data={authors}
          renderItem={renderItem}
          keyExtractor={item => item}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default AuthorList;
