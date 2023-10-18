import * as React from 'react';

import { StyleSheet, View, Text ,Button,Image} from 'react-native';

export default function DetailsScreen({route, navigation}) {
    const styles = styles_for_DetailsScreen
    const SelectChord = route.params.state
    return (
        <View style={styles.ViewGobal}>
        <View style={styles.ImageView}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/159587676_3812794832147508_4773544819394517293_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeHYHDSR3gOhUtwgYZvv7MaQgNtPgvVnH_-A20-C9Wcf_9KGBS0Ox9yLwN42akiXkGDbDvveENqBnD8EV5QRrRzX&_nc_ohc=0mVFltwn-DQAX838DT5&_nc_ht=scontent-ssn1-1.xx&_nc_e2o=s&oh=00_AfAHfd3dvl4IHRHrusWIF5gaJ7e2VIA4o-lpAEQD9ESiPQ&oe=655710FF',
        }}/>
        </View>
        
        <Text>คอร์ด : A</Text>
      </View>
      
    );
  }

// ------------------------------------------------------------------------------css--------------------------------------------------------------------------

  const styles_for_DetailsScreen = StyleSheet.create({
    ViewGobal:{
        backgroundColor:"#fff",
        flex: 1, 
        alignItems: 'center', 
        // justifyContent: 'center'
    },
    Header:{
        // fontFamily:"itim",
        fontSize:50,
        fontWeight: 'bold',
    },
    tinyLogo: {
        width: "100%",
        height:300
      },
      ImageView: { 
        paddingTop:20,
        paddingBottom:20,
        width:300,
        backgroundColor:"#fff"
      }
    
  });