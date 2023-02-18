import React, {useEffect} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/quoteSearchStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {quotesSearchType} from '../../types/quotestype/quotesType';

const QuoteSearch = (props: quotesSearchType) => {
  const {loadQuotes, toggleAddQuote, searchAuthor, setSearchAuthor} =
    props;

  //Call getFilteredQuotes
  useEffect(() => {
    loadQuotes(searchAuthor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchAuthor]);

  return (
    <View style={styles.searchWrap}>
      <View style={styles.search}>
        <FontAwesome5 name="search" style={styles.iconStyle} />
        <TextInput
          style={styles.input}
          onChangeText={setSearchAuthor}
          value={searchAuthor}
          placeholder="Enter author name"
          placeholderTextColor="#FFF"
        />
      </View>
      <TouchableOpacity onPress={toggleAddQuote}>
        <Ionicons name="add-circle" style={styles.addButton} />
      </TouchableOpacity>
    </View>
  );
};

export default QuoteSearch;
