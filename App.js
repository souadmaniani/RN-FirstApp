import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  console.log(courseGoals);
  // useState with arrayt: in setter fct make a copy using spread operator,
  // append the new item and pass it as arg to the setter fct
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,
    { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionModal = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      {/* pass the fct "addGoalHandler" to the child component */}
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionModal} />
      {/* Outputting a List Of Items */}
      <FlatList
        // numColumns={2}
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler.bind(this,)} title={itemData.item.value} />}
      />
      {/* <ScrollView>
        <View>
          {courseGoals.map((goal) => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
        </View>
      </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
