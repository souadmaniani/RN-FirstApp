import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity  onPress= {props.onDelete.bind(this, props.id)} >
           <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View> 
        </TouchableOpacity>
        
    );
};


const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: 'violet',
        borderColor: 'black',
        borderWidth: 1
        // marginHorizontal: 30
      }
    });
export default GoalItem;