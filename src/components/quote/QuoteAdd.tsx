import React, {useEffect, useState, useRef} from 'react';
import {
  ScrollView,
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import styles from '../../styles/quoteAddStyle';
import {Button} from '@rneui/themed';
import authorActions from '../../redux/action/authors';
import quotesActions from '../../redux/action/quotes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
interface quoteItemType {
  quote: string;
  author: string;
  tags: string;
}

const QuoteAdd = ({navigation}: {navigation: any}) => {
  const DropdownButton = useRef<TextInput | null>(null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [quoteItem, setQuoteItem] = useState<quoteItemType>({
    quote: '',
    author: '',
    tags: '',
  });

  //Redux useSelector for get data and useDispatch for dispatch data
  const {authorsData} = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const {authors, authorsList, dropdown} = authorsData;

  //Set new quote data in quoteItem
  const handleChange = (name: string, val: string) => {
    setQuoteItem({
      ...quoteItem,
      [name]: val,
    });
    handleScreen();
    name === 'author' ? dispatch({type: 'SET_DROPDOWN', payload: true}) : null;
  };

  const handleScreen = () => {
    DropdownButton?.current?.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number,
      ) => {
        setDropdownTop(py + h - 118);
      },
    );
  };

  //Post new quote function
  const addNewQuoteItem = (quote: quoteItemType) => {
    dispatch(quotesActions.addQuote(quote));
    navigation?.goBack();
  };

  //Call addNewQuoteItem function and pass new quote data
  const handleAddQuote = (e: {preventDefault: () => void}) => {
    e.preventDefault();
    //Check for the Name TextInput
    if (!(quoteItem.quote.trim().length > 50)) {
      setErrorMessage(
        ' Too short, the quote must have at least 60 characters.',
      );
      return;
    }
    //Check for the Email TextInput
    if (!(quoteItem.author.trim().length >= 3)) {
      setErrorMessage('Please enter author valid name');
      return;
    }

    //Check for the Email TextInput
    if (!(quoteItem.tags.trim().length >= 3)) {
      setErrorMessage('Please enter valid tag');
      return;
    }
    //Checked Successfully
    setErrorMessage('Success');
    addNewQuoteItem(quoteItem);
  };

  const handleAuthorName = (item: string) => {
    handleChange('author', item);
    dispatch({type: 'SET_DROPDOWN', payload: false});
    Keyboard.dismiss();
  };

  useEffect(() => {
    dispatch(authorActions.getFilterByAuthor(authors, quoteItem.author));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quoteItem.author]);

  useEffect(() => {
    dispatch(authorActions.getAuthorsList());
  }, [dispatch]);

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.formView}>
      <SafeAreaView>
        <View style={styles.boxView}>
          <View>
            <TextInput
              style={styles.textarea}
              multiline={true}
              numberOfLines={2}
              placeholder="Enter your Quote"
              placeholderTextColor="#e0e6ef"
              value={quoteItem.quote}
              onChangeText={val => handleChange('quote', val)}
            />
          </View>
          <View>
            <TextInput
              style={styles.textinput}
              placeholder="Enter the author name"
              placeholderTextColor="#e0e6ef"
              value={quoteItem.author}
              onChangeText={val => handleChange('author', val)}
              ref={DropdownButton}
            />
          </View>
          {dropdown && quoteItem.author !== '' ? (
            <View style={[styles.dropdownList, {top: dropdownTop}]}>
              {authorsList.slice(0, 5).map((author: string, index: number) => (
                <TouchableOpacity
                  onPress={() => handleAuthorName(author)}
                  key={index}>
                  <Text style={styles.dropdownText}>{author}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}

          <View>
            <TextInput
              style={styles.textinput}
              placeholder="Enter the tag"
              placeholderTextColor="#e0e6ef"
              value={quoteItem.tags}
              onChangeText={val => handleChange('tags', val)}
            />
          </View>
          <Text
            style={
              errorMessage === 'Success' ? styles.successText : styles.errorText
            }>
            {errorMessage}
          </Text>
        </View>
        <Button
          onPress={handleAddQuote}
          containerStyle={styles.button}
          color="#e1d64c">
          <Text style={styles.textButton}>Add Quote</Text>
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
};

export default QuoteAdd;
