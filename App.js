import React, { Component } from 'react';
import { Text, View, StyleSheet , TouchableOpacity, Image, ScrollView} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
              <TouchableOpacity
      style={{backgroundColor:'aqua',height:100,width:360, marginTop:0,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:50}}>Birthday Wishes</Text></TouchableOpacity>	
      
      <View>
      <Image
      style={{width: 128, height: 128, marginTop:5}}
          source={{uri: 'https://lh3.googleusercontent.com/CiJxrhLAPsJ04WO_E_Mn48boIgIw43ZLf_dcnh72ZrIxorLqGs2RQ4AvxkZu4cse9uA=s128'}} />
</View>

   <TouchableOpacity
      style={{backgroundColor:'lavender',height:100,width:300, marginTop:5,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:25}}>Happy Birthday Dear May this Day bring to you alot of happiness</Text></TouchableOpacity>	
      
       <View>
      <Image
      style={{width: 128, height: 128, marginTop:5}}
          source={{uri: 'https://4.bp.blogspot.com/-eeNjlT4ABq8/WLgjnsLeGuI/AAAAAAAABR4/syNdI8-gq44zmNfZUz7LiP0L9vaJLX1MgCEw/s1600/bf-birthday.png'}} />
</View>
      
       <TouchableOpacity
      style={{backgroundColor:'khaki',height:100,width:360, marginTop:5,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:25}}>Special wishes for the special person on special day happy Birthday</Text></TouchableOpacity>	
      
        <View>
      <Image
      style={{width: 128, height: 128, marginTop:5}}
          source={{uri: 'https://lh3.ggpht.com/4ccm8z4o1leKcNudv41E78i7Rfn3uUJM5lFw0LmO6odRlS3WpVLwOrDzFeyfo5jqlXc=s128'}} />
</View>

        <TouchableOpacity
      style={{backgroundColor:'lavender',height:100,width:300, marginTop:5,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:25}}>Wishing you a day that is as special in every way as you are!</Text></TouchableOpacity>	
      
      
       <TouchableOpacity
      style={{backgroundColor:'mediumslateblue',height:130,width:360, marginTop:10,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:50}}>Mothers day wishes</Text></TouchableOpacity>	
      
        <View>
      <Image
      style={{width: 128, height: 128, marginTop:5}}
          source={{uri: 'https://seedroid.com/img/post/icons/128/net.Mothers.Day.Wishes.jpg'}} />
</View>

   <TouchableOpacity
      style={{backgroundColor:'violet',height:100,width:300, marginTop:10,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:25}}>My Mother is a walking Mircale, Happy mothers day Mom</Text></TouchableOpacity>	
      <View>
      
       
      <Image
      style={{width: 128, height: 128, marginTop:5}}
          source={{uri: 'https://seedroid.com/img/post/icons/128/com.mothers.day.greeting.cards.with.special.messages.jpg'}} />
</View>

   <TouchableOpacity
      style={{backgroundColor:'',height:100,width:360, marginTop:10,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:25}}>Mama was my greatest teacher, a teacher of compassion, love and fearlessness.</Text></TouchableOpacity>	
      
       <View>
      
       
      <Image
      style={{width: 128, height: 128, marginTop:5}}
          source={{uri: 'https://seedroid.com/img/post/icons/128/com.mothersday.satstus.ADAMS.jpg'}} />
</View>

   <TouchableOpacity
      style={{backgroundColor:'violet',height:100,width:300, marginTop:10,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:20}}>I remember my mother's prayers and they have always followed me. Happy Mothers day </Text></TouchableOpacity>	
      
          <TouchableOpacity
      style={{backgroundColor:'turquoise',height:90,width:360, marginTop:10,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:40}}>Friendship Wishes</Text></TouchableOpacity>
      
       <View>
      
       
      <Image
      style={{width: 128, height: 128, marginTop:5}}
          source={{uri: 'https://78.media.tumblr.com/avatar_fbdd54ae68d9_128.pnj'}} />
</View>

 <TouchableOpacity
      style={{backgroundColor:'',height:150,width:360, marginTop:10,}}
      ><Text style = {{color :'red', textAlign:'center',  marginTop:10, fontweight:'bold', fontSize:25}}>You are the only only relation in my life that i made own my choice , Happy Friendship day</Text></TouchableOpacity>
      
  </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffc0cb',
  },
 
});
