import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Card, Icon} from '@rneui/themed';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import QuoteEdit from './QuoteEdit';
import styles from '../../styles/quoteItemStyle';
import {quoteItemType, quotesType} from '../../types/quotestype/quotesType';
import quotesActions from '../../redux/action/quotes';
import {useAppDispatch} from '../../redux/hooks/hooks';

const QuoteItem = (props: quoteItemType) => {
  const {quote, handleLikeClicked, likes, handleDelete} = props;

  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [aquote, setAquote] = useState<quotesType>(quote);

  const dispatch = useAppDispatch();

  //Show edit screen
  const handleEdit = () => {
    setShowEdit(true);
  };

  //Call editQuoteItem function and sent id and quote data
  const handleEditSave = (quoteData: {quote: string; author: string}) => {
    setAquote({...aquote, quote: quoteData.quote, author: quoteData.author});
    dispatch(quotesActions.editQuoteItem(quote._id, quoteData));
    setShowEdit(false);
  };

  return (
    <>
      {showEdit ? (
        <QuoteEdit
          quote={aquote}
          setShowEdit={setShowEdit}
          handleEditSave={handleEditSave}
        />
      ) : (
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainerStyle}>
            <View style={styles.editView}>
              <TouchableOpacity onPress={handleEdit}>
                <AntDesign name="edit" style={styles.edit} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(aquote._id)}>
                <AntDesign name="delete" style={styles.delete} />
              </TouchableOpacity>
            </View>
            <FontAwesome5 name="quote-left" style={styles.fontAwesomeLeft} />
            <Text style={styles.quote}>{aquote.quote}</Text>
            <FontAwesome5 name="quote-right" style={styles.fontAwesomeRight} />
            <View style={styles.cardFooter}>
              <Text style={styles.author}>— {aquote.author}</Text>
              <View style={styles.editView}>
                <TouchableOpacity
                  style={styles.likes}
                  onPress={() => handleLikeClicked(aquote._id)}>
                  <Icon
                    name="heart"
                    style={styles.likesIcon}
                    type="font-awesome"
                    color="#C62424"
                    size={23}
                  />
                  <Text style={styles.iconText1}>{likes}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        </View>
      )}
    </>
  );
};

export default QuoteItem;
