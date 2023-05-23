import {
  Alert,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

const CompletedScreen = () => {
  const completedTasks: any = useSelector((state: any) => state);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#141419'}}>
      <View>
        <Text
          style={{
            color: '#EBEBEB' && '#FFFFFF',
            fontSize: 18,
            marginLeft: 20,
            marginTop: 10,
          }}>
          Completed
        </Text>
      </View>
      <View style={{height: 100}}>
        <FlatList
          data={completedTasks}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#575767',
                    fontSize: 18,
                    fontFamily: "'Inter-Black",
                    marginLeft: 20,
                    marginTop: 10,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
            
        <View style={{backgroundColor:'#575767',height:200,marginTop:300,marginHorizontal:20,borderRadius:10}}>
            
           <TextInput placeholder='Enter your task' style={{backgroundColor:"grey",marginHorizontal:20,marginTop:20,borderRadius:10}} />
             
            <TouchableOpacity style={{alignItems:"center",marginTop:10}}>
             <View style={{height:30,width:80,backgroundColor:"yellow",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
                <Text>Add Task</Text>
             </View>
             </TouchableOpacity>
        </View>
        
      </Modal>
      

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View
          style={{
            backgroundColor: '#515CC6',
            borderRadius: 1000,
            width: 56,
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            marginLeft: 300,
            marginTop: 100,
          }}>
          <Icon name="googleplus" size={30} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CompletedScreen;

const styles = StyleSheet.create({});
