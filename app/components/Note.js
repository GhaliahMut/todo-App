
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { CheckBox } from 'react-native';

export default class Note extends React.Component{

 constructor(){
      super();
      this.state={
        checked:false,
      }
    }

  render() {
    if(this.state.checked == true){
      return (
     <View key={this.props.keyval} style={styles.note}>
      
      <CheckBox
        center
        title='Click Here'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.state.checked}
      />
      <Text style={styles.noteTextChecked} >{this.props.val.note}</Text>
       
       <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
       <Text style={styles.noteDeleteText}>x</Text>
       </TouchableOpacity>
     </View>
    );
    } else {
       return (
     <View key={this.props.keyval} style={styles.note}>
      
      <CheckBox
        center
        title='Click Here'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.state.checked}
      />
      <Text style={styles.noteText} >{this.props.val.note}</Text>
       
       <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
       <Text style={styles.noteDeleteText}>x</Text>
       </TouchableOpacity>
     </View>
    );
    }
    
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    fontWeight:"500",
    fontSize: 14,  
  },
  noteTextChecked: {
  	textDecorationLine : 'line-through',
    fontWeight:"500",
    fontSize: 14, 
  },

  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems:'center',
    padding: 8,
    top: 8,
    bottom: 8,
    right: 10,
  },
 
  noteDeleteText: {
    color: 'white',
    backgroundColor: '#ce1e1e',
    borderColor: '#ce1e1e',
    borderWidth:1,
    borderRadius: 3,
    padding:8,
  },
    circle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderColor: '#80c47a',
    borderWidth: 1,
  },
  circleCheck: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  }
});
