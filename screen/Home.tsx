import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const [currentDate, setCurrentDate] = useState('');
  let completedTasks: any = useSelector((state: any) => state);
   const tasks = [
    {
      id: 1,
      title: 'Design Meeting',
    },
    {
      id: 2,
      title: 'Cultural Meeting',
    },
  ];
  const dispatch = useDispatch();
  const addTask = (item: any) => {
    dispatch({type: 'ADD_TASK', payload: item});
    let filteredtasks=tasks.filter((task) => task.id !== item.id);
    tasks.push(...filteredtasks);
    
   
  };

  useEffect(() => {
    var monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var date = new Date().getDate();
    var month = monthNames[new Date().getMonth()];
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    setCurrentDate(month + ' ' + date + ',' + year);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#141419'}}>
      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text
          style={{color: '#DADADA', fontSize: 32, fontFamily: 'Inter-Black'}}>
          {currentDate}
        </Text>

        <Text style={{color: '#575767', fontSize: 14}}>
          {tasks.length} incomplete tasks, {}completed
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#EBEBEB' && '#FFFFFF',
            fontSize: 18,
            marginLeft: 20,
            marginTop: 10,
          }}>
          Incomplete
        </Text>
      </View>
      <View>
        <FlatList
          data={tasks}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={()=>addTask(item)}>
                <View
                  style={{
                    backgroundColor: '#2D2D2D',
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10,
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: '#FFFFFF', fontSize: 18}}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
