import * as React from 'react';
import { ScrollView } from 'react-native';
import {StyleSheet, View, Text,Pressable} from 'react-native';

export default function SelectScreen({route, navigation}) {
    const chordss = [
        "Abmaj7",
        "A",
        "A6",
        "A7",
        "A9",
        "Ab",
        "Ab",
        "Ab6",
        "Ab7",
        "Ab9",
        "Absus",
        "Adim",
        "Am","Am6","Am7","Amaj7"
    ]
    const styles = styles_for_SelectScreen
    const SelectChord = route.params.state

    // React.useEffect(()=>{

    // },[])

    return (
        <View style={
            styles.ViewGobal
        }>
            <Text style={styles.Header}>CHORD G-uidance</Text>
            <ScrollView style={styles.scrollView}>
        {chordss.map((items)=>{
            return(
                // <View style={styles.ButtonHome}>
                // <Button style={styles.text} title={items} onPress={() => navigation.navigate('Select',{state:items})} />  
                // </View>
                <Pressable style={styles.buttons} onPress={() => navigation.navigate('Details',{state:items})}>
                    <Text style={styles.text}>{items}</Text>
                    </Pressable>
            )
        })}
        </ScrollView>
        </View>
    );
}

// -----------------------------------------------------------------------css--------------------------------------------------------------------------

const styles_for_SelectScreen = StyleSheet.create({
    ViewGobal: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    Header: { // fontFamily:"itim",
        fontSize: 50,
        fontWeight: 'bold'
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 30
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    scrollView: {
        backgroundColor: '#fff',
        marginHorizontal: 30,
        width:"50%",
        marginBottom:20
      },
});
