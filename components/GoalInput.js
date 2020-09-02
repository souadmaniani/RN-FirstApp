import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  // enteredGoal = enteredText
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.input}>
        <TextInput
          placeholder="Goal"
          style={styles.inputContainer}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style= {styles.buttonContainer}>
          <View style= {styles.button}>
            <Button title="CANCEL" color='red' onPress= {props.onCancel}/>
          </View>
          <View style= {styles.button}>
            {/*forward the argument "enteredGoal" to the fct */}
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
        {/* <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} /> */}
      </View>
    </Modal>
  )
};
const styles = StyleSheet.create({
  input: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button : {
    width : '40%'
  }
});
export default GoalInput;