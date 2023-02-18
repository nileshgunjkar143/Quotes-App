import React from 'react';
import {ListItem, Icon, Card} from '@rneui/themed';
import {navigate} from '../navigation/RootNavigation';
import styles from '../../styles/authorItemStyle';
import {TouchableOpacity} from 'react-native';

const AuthorItem = (props: {author: string}) => {
  const {author} = props;
  return (
    <Card containerStyle={styles.card}>
      <TouchableOpacity
        onPress={() => {
          /* Navigate to the Details route with params */
          navigate('Quotes', author);
        }}>
        <ListItem containerStyle={{backgroundColor: '#1e2225'}}>
          <Icon name="user-circle-o" type="font-awesome" color="white" />
          <ListItem.Content>
            <ListItem.Title style={styles.text}>{author}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    </Card>
  );
};

export default AuthorItem;
