import React, {Dispatch, SetStateAction} from 'react';
import {TextInput, View} from 'react-native';
import styles from '../../styles/authorSearchStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface props {
  searchAuthor: string;
  setSearchAuthor: Dispatch<SetStateAction<string>>;
}

const AuthorSearch = (props: props) => {
  const {searchAuthor, setSearchAuthor} = props;
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome5 name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        onChangeText={setSearchAuthor}
        value={searchAuthor}
        placeholder="Search"
        placeholderTextColor="#FFF"
      />
    </View>
  );
};

export default AuthorSearch;
