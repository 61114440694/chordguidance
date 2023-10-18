import * as React from 'react';
import { View, Text ,Pressable,Modal,StyleSheet} from 'react-native';
// import { firebase } from '../firebase'

// const entityRef = firebase.firestore().collection()
// console.log(entityRef)

export default function HomeScreen({navigation}) {
    const lists = ["C","D","E","F","G","A","B"]
    const [modalVisible, setModalVisible] = React.useState(true);
    const styles = styles_for_HomeScreen
    return (
        <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
                แอพนี้ถูกพัฒนาขึ้นมาเพื่อเป็นการแนะนำวิธีการจับคอร์ดกีต้าร์พื้นฐานเท่านั้น เพื่อให้ผู้ใช้สามารถจับคอร์ดได้อย่างถูกต้อง
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>เริ่มต้นใช้งาน</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  
        <View style={styles.ViewGobal}>
        
        <Text style={styles.Header}>CHORD G-uidance</Text>
        {lists.map((items)=>{
            return(
                // <View style={styles.ButtonHome}>
                // <Button style={styles.text} title={items} onPress={() => navigation.navigate('Select',{state:items})} />  
                // </View>
                <Pressable style={styles.buttons} onPress={() => navigation.navigate('Select',{state:items})}>
                    <Text style={styles.text}>{items}</Text>
                    </Pressable>
            )
        })}
      </View>
        </>
    );
  }

// ------------------------------------------------------------------------------css--------------------------------------------------------------------------


  const styles_for_HomeScreen = StyleSheet.create({
    ViewGobal:{
        backgroundColor:"#fff",
        flex: 1, 
        alignItems: 'center', 
        // justifyContent: 'center'
    },
    Header:{
        // fontFamily:"itim",
        fontSize:40,
        fontWeight: 'bold',
    },
    ButtonHome:{
        width:50,
        marginTop:30,
        maginBottom:30,
        fontWeight: 'bold',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        marginTop:30
      },
      text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  
  
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height:"100%"
      },
      modalView: {
        flex:1,
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 280,
        padding: "10%",
        width:"100%",
        alignItems: "center",
      },
      button: {
        borderRadius: 20,
        padding: 15,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });