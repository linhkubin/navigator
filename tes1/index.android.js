/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
} from 'react-native';



class tes1 extends Component {

      constructor(props){ // chay trc render

        super(props);
       
        }
      


      componentWillMount(){
      // man hinh trc render
      }
  
      renderScene(route,navigator){
        switch(route.name){
          case "do" : return (<AX  clickMe={()=>{navigator.push({name:"vang"});}}/>);
          case "vang" : return (<BX clickBack={()=>{navigator.pop({name:"do"});}}/>);
        }
      }

      render() {
        return (
          <Navigator 
            initialRoute={{name:"do"}}
            renderScene = {this.renderScene}
          />

        

        );
      }



        componentDidMount(){
        // sau render
        }


}
 


    export default class AX extends Component{

      render(){
        return(
        <View style={styles.screenR}>
            <TouchableOpacity onPress= {this.props.clickMe} >
            <Text style = {{ fontSize : 30,}}> doi man hinh </Text>
            </TouchableOpacity>
        </View>
        );
      }
    }

    export  class BX extends Component{

      render(){
        return(
        <View style={styles.screenY} >
            <TouchableOpacity onPress= {this.props.clickBack} >
            <Text style = {{ fontSize : 30,}}> doi man hinh </Text>
            </TouchableOpacity>
        </View>
        );
      }
    }



const styles = StyleSheet.create({

  screenR: {
    
    backgroundColor : "red",
    flex: 1,
  },

  screenY: {
    
    backgroundColor : "yellow",
    flex: 1,
  },
});


AppRegistry.registerComponent('tes1', () => tes1);
