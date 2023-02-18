import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Card} from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../../styles/quoteEditStyle';

interface Props {
  quote: {quote: string; author: string};
  setShowEdit: Dispatch<SetStateAction<boolean>>;
  handleEditSave: (quoteData: {quote: string; author: string}) => void;
}

const QuoteEdit = (props: Props) => {
  const {quote, handleEditSave, setShowEdit} = props;
  const [edQuote, setEdQuote] = useState<string>(quote.quote);
  const [edAuthor, setEdAuthor] = useState<string>(quote.author);

  const quoteData = {quote: edQuote, author: edAuthor};

  const cancelEdit = () => {
    setShowEdit(false);
  };
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <TouchableOpacity onPress={cancelEdit}>
          <Entypo name="cross" style={styles.cross} />
        </TouchableOpacity>
        <TextInput
          style={styles.quote}
          multiline={true}
          numberOfLines={2}
          onChangeText={setEdQuote}
          value={edQuote}
          autoComplete={undefined}
        />
        <View style={styles.cardFooter}>
          <TextInput
            style={styles.author}
            onChangeText={setEdAuthor}
            value={edAuthor}
          />
          <Button
            title="Save"
            buttonStyle={styles.button}
            color="black"
            onPress={() => handleEditSave(quoteData)}
          />
        </View>
      </Card>
    </View>
  );
};

export default QuoteEdit;
