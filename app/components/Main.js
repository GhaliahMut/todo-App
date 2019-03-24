
import React from 'react';
import {StyleSheet, Text, View, 
  TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import Note from './Note';

export default class Main extends React.Component{
constructor(props){
	super(props);
	this.state = {
		noteArray: [],
		noteText: '',
	}

}
  render() {

  	let notes = this.state.noteArray.map((val,key) =>{
  		return <Note key={key} keyval={key} val={val}
  		deleteMethod ={ ()=> this.deleteNote(key)}/>
  	});

    return (
      <View style={styles.container}>
	      <View style={styles.header}>
		      <Text style={styles.headerText}>TODO List App</Text>
	      </View>

	      <View style={styles.noteInputText}>
		      <TextInput style={styles.textInput}
		      onChangeText= {(noteText) => this.setState({noteText})}
		      value= {this.state.noteText}
		      placeholder='What do you have today?'
		      placeholderTextColor='#707070'
		      underlineColorAndroid='#E8E8E8'>
		      </TextInput>
	      </View>

	      <ScrollView style={styles.scrollContainer}>
	      {notes}
	      </ScrollView>


	      <TouchableOpacity onPress={this.addNote.bind(this)}  style={styles.addButton}>
	      <Text style={styles.addButtonText}>+</Text>
	      </TouchableOpacity>
       
      </View>
    );
  }
  addNote() {

  	if (this.state.noteText) {
  		
  		this.state.noteArray.push({
  			'note' : this.state.noteText
  		});
  		this.setState({ noteArray: this.state.noteArray})
  		this.setState({ noteText: ''});
  	}
   

  }

  deleteNote(key){
  	this.state.noteArray.splice(key,1);
  	this.setState({ noteArray: this.state.noteArray})


  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1, 
  },
  header: {
  	backgroundColor: '#80c47a',
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderBottomWidth: 10,
  	borderBottomColor: '#ddd',
  },
  headerText :{
  	color: 'white',
  	fontSize: 18,
  	padding: 26,
  },
  scrollContainer: {
  	flex: 1,
  	marginBottom: 100,
  },
  noteInputText: {
  
  },
  textInput: {
  	color: '#686868',
  	fontSize:15,
  	padding: 20,
  	borderBottomColor: '#80c47a',
  	
  },
  addButton: {
  	position: 'absolute',
  	zIndex: 11,
  	right: 20,
  	bottom: 30,
  	backgroundColor: '#80c47a',
  	width: 60,
  	height: 60,
  	borderRadius: 50,
  	alignItems: 'center',
  	justifyContent: 'center',
  	elevation: 8,
  },
  addButtonText: {
  	color: '#fff',
  	fontSize: 24,
  },
});
