
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Share, Modal, SectionList,Image, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import normalize from 'react-native-normalize';
import { WebView } from 'react-native-webview';
import  debounce  from 'lodash.debounce'; 


const ShareExample = () => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React https://www.youtube.com/watch?v=HJEahE-4juQ'
           
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (

    <View style={{flexDirection: 'row'}}>
      <TouchableHighlightEx style={styles.shareContainer} onPress={onShare} activeOpacity={0.6}  underlayColor="#DDDDDD"><Image style={styles.shareImage} source={require('./assets/shareicon.png')} /></TouchableHighlightEx>
     
    </View>
      
  
  );
};




// Esta vairante de un TouchableHighLight sirve para prevenir multiples clicks
const withPreventDoubleClick = (WrappedComponent) => {

  class PreventDoubleClick extends React.PureComponent {

    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    }

    onPress = debounce(this.debouncedOnPress, 1000, { leading: true, trailing: false });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName ||WrappedComponent.name})`
  return PreventDoubleClick;
}


const TouchableHighlightEx = withPreventDoubleClick(TouchableHighlight);



// <Text style={styles.textDetalles}>
//John Locke fue un filósofo y médico inglés, considerado como uno de los más influyentes pensadores del empirismo inglés y conocido como el Padre del Liberalismo Clásico. Su trabajo afectó en gran medida el desarrollo de la epistemología y la filosofía política. Sus escritos influyeron en Voltaire y Rousseau, pensadores de la Ilustración francesa.
//</Text>
 


 
const webviewLibros = ({navigation}) => {
  const title = navigation.getParam('title')
  if (title === 'John Locke'){
    var url = 'https://drive.google.com/drive/folders/18TtZvBp6DV9msNt-k_qMaLiMrIfxE3OV?usp=sharing'
  }
  else if (title === 'Adam Smith'){
    var url = 'https://drive.google.com/drive/folders/14QZpI4VX47Iw-93kHjmlRh6pgIbteDxE?usp=sharing'
  }
  else if(title ==='Thomas Paine'){
    var url = 'https://drive.google.com/drive/folders/1P8skVWgjjzn4pfQW-9K0CBIhv_vHRHxW?usp=sharing'
  }
  else if(title === 'Benjamin Constant'){
    var url = 'https://drive.google.com/drive/folders/19DxnbTgLcRoMbL_DL9j8Z54zXHEVgS07?usp=sharing'
  }
  else if(title === 'David Ricardo'){
    var url = 'https://drive.google.com/drive/folders/1_ux19t8TOGFeKR8Tjfpm8N-IayyoMK9S?usp=sharing'
  }
  else if(title === 'Fréderic Bastiat'){
    var url = 'https://drive.google.com/drive/folders/12LfT4Z4WCtQk_3n2Ab1cmED2RiSv6Ats?usp=sharing'
  }
  else if(title === 'Alexis de Tocqueville'){
    var url = 'https://drive.google.com/drive/folders/1hxsReIHbGm0liF53HIARjhcrTXbJsc-D?usp=sharing'
  }
  else if(title === 'John Stuart Mill'){
    var url = 'https://drive.google.com/drive/folders/1B0BHniiXiAxcYUkKByZSWNyHzGSDqsV_?usp=sharing'
  }
  else if(title === 'Juan Bautista Alberdi'){
    var url = 'https://drive.google.com/drive/folders/1MwMVSAlsneN-7NzA0Lm4g5rF9urm08NU?usp=sharing'
  }
  else if(title === 'Herbert Spencer'){
    var url = 'https://drive.google.com/drive/folders/13HHUnicZMGQMeN3aJl-wWW28nK-Ltp3l?usp=sharing'
  }
  else if(title === 'Carl Menger'){
    var url = 'https://drive.google.com/drive/folders/1s47EsjN-lmdAazwLD8VogZKggV3mZMJ_?usp=sharing'
  }
  else if(title === 'John Dewey'){
    var url = 'https://drive.google.com/drive/folders/1i3TQ8R79okaQqr0tbDSXC64rIpXSd6mk?usp=sharing'
  }
  else if(title === 'Leonard T. Hobhouse'){
    var url = 'https://drive.google.com/drive/folders/17quDRBGxbkMsLcCFUCFkIbAuF6NLoGE8?usp=sharing'
  }
  else if(title === 'Benedetto Croce'){
    var url = 'https://drive.google.com/drive/folders/1weqb9Mti0uGDoTXVQCXqGA9rYcZ-Zj9e?usp=sharing'
  }
  else if(title === 'Ludwig Von Mises'){
    var url = 'https://drive.google.com/drive/folders/1kpyBdSd7E89fjM91tSBWs_n-fT8XUH9z?usp=sharing'
  }
  else if(title === 'Henry Hazlitt'){
    var url = 'https://drive.google.com/drive/folders/1oTvyGwFDtYHLH-ia-iOyGRopimNXJOpr?usp=sharing'
  }
  else if(title === 'Friedrich Hayek'){
    var url = 'https://drive.google.com/drive/folders/1AKIoNLauNd0hIST_5e3TWG1-z4qBTHh5?usp=sharing'
  }
  else if(title === 'Karl Popper'){
    var url = 'https://drive.google.com/drive/folders/1_xgDZS6N8-SkhqgxmqxQ0BRTYApNofDx?usp=sharing'
  }
  else if(title === 'Raymond Aron'){
    var url = 'https://drive.google.com/drive/folders/1sz-A0-VkU95eVT1iXvy9_Fe7Y6g-pVyq?usp=sharing'
  }
  else if(title === 'Isaiah Berlin'){
    var url = 'https://drive.google.com/drive/folders/1O6DOFNRhnNl7DMravxbS17x31mHh2lQh?usp=sharing'
  }
  else if(title === 'Norberto Bobbio'){
    var url = 'https://drive.google.com/drive/folders/10mcD64Cl6XQv3NcPwYuTukmfzx53oyAf?usp=sharing'
  }
  else if(title === 'Milton Friedman'){
    var url = 'https://drive.google.com/drive/folders/1ULRd9ET7kH3PjXN71KfXrtFNNsxPXasX?usp=sharing'
  }
  else if(title === 'James M. Buchanan'){
    var url = 'https://drive.google.com/drive/folders/1qNmTcLpSLPzv_uRGC9Xu0Q4yWSRT6WNO?usp=sharing'
  }
  else if(title === 'John Rawls'){
    var url = 'https://drive.google.com/drive/folders/1pCNmOCCr53QzRcHkEQJX7-_JIGywYJCE?usp=sharing'
  }
  else if(title === 'Murray Rothbard'){
    var url = 'https://drive.google.com/drive/folders/1te1KhyP-Dluxr2C0FmUEtl0V2C0cOoIZ?usp=sharing'
  }
  else if(title === 'Ronald Dworkin'){
    var url = 'https://drive.google.com/drive/folders/1EvqfqsbnaFuwm4RQTP9SGh9YOZMi2aXl?usp=sharing'
  }
  else if(title === 'Javier Milei'){
    var url = 'https://drive.google.com/drive/folders/1MQbmVRtuXqur7TWqBjHUAfzQl8V3V_ys?usp=sharing'
  }
  else if(title === 'Axel Kaiser'){
    var url = 'https://drive.google.com/drive/folders/1SY-NmMx6Jn-qC59f-7lt5k-M3PjtIzV5?usp=sharing'
  }
  else if(title === 'Gloria Álvarez'){
    var url = 'https://drive.google.com/drive/folders/1yUMeR-NdwwwUPQuiOxrGriR4HewRGAP5?usp=sharing'
  }
  return(
    <WebView
        source={{ uri: url}}
        style={{ marginTop: 20 }}
      />
  )
}

webviewLibros.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const DetallesJohnLocke = ({navigation}) => {
  const [modal, setModal] = useState(false)
  
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>John Locke fue un filósofo y médico inglés, considerado como uno de los más influyentes pensadores del empirismo inglés y conocido como el Padre del Liberalismo Clásico. Su trabajo afectó en gran medida el desarrollo de la epistemología y la filosofía política. Sus escritos influyeron en Voltaire y Rousseau, pensadores de la Ilustración francesa.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/johnlocke1.jpg')} />
      
      <View style={styles.viewDetalles2}>
        <TouchableHighlightEx 
        style={styles.buttonBiografia} 
        activeOpacity={0.5}
        underlayColor="white" 
 
        onPress={() => setModal(!modal)} >
          <Image style={styles.imageButtonBiografia} 
         source={require('./assets/biografia.png')}/>
        </TouchableHighlightEx>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        underlayColor="white" 

        onPress={() =>  navigation.navigate('webviewLibros',{title: 'John Locke'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}
//

const DetallesAdamSmith = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Adam Smith fue un economista y filósofo escocés, considerado uno de los mayores exponentes de la economía clásica y de la filosofía de la economía. Gracias a su obra La Riqueza de las Naciones se le conoce como el Padre de la Economía Moderna dado que fue el primer estudio completo y sistemático acerca de la creación y acumulación de la riqueza.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/adamsmith1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Adam Smith'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesThomasPaine = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Thomas Paine fue un filósofo y escritor político nacido en Inglaterra que apoyó las causas revolucionarias en América y Europa. Publicado en 1776 con reconocimiento internacional, Sentido Común fue el primer folleto que abogó por la independencia estadounidense. Fue promotor del liberalismo,la democracia y considerado un Padre fundador.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/thomaspaine1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Thomas Paine'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesBenjaminConstant = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Henri Benjamin Constant de Rebecque fue escritor y político francés. Procedente de una desarraigada familia de protestantes franceses emigrados a Suiza, recibió una educación cosmopolita pasando por las universidades de Oxford, Erlangen y Edimburgo. Su afición política inicio en el periodo de la Revolución francesa y defendió el liberalismo.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/benjaminconstantderebecque1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Benjamin Constant'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesDavidRicardo = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>David Ricardo fue un economista inglés de origen judío sefardí-portugués, miembro de la corriente de pensamiento clásico económico y uno de los más influyentes junto a Adam Smith y Thomas Malthus. Es considerado uno de los pioneros de la macroeconomía moderna por su análisis de la relación entre beneficios y salarios.También fue un exitoso empresario.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/davidricardo1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'David Ricardo'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesFredericBastiat = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Fréderic Bastiat fue un economista, político, magistrado y pensador liberal francés de la primera mitad del siglo XIX. Desarrolló un pensamiento liberal, caracterizado por la defensa del libre comercio y la oposición al socialismo y al colonialismo. Fue parte de la Escuela liberal francesa. Conocido también como "El Cobden francés".</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/fredericbastiat1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Fréderic Bastiat'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesAlexisdeTocqueville = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Charles-Alexis Clérel de Tocqueville fue pensador y político liberal francés. Procedente de una familia noble, Tocqueville fue uno de los observadores más lúcidos del cambio producido en su época por la revolución liberal. Estudió derecho y obtuvo una plaza de magistrado en Versalles en 1827. Su obra magna fue "La Democracia en América".</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/alexisdetocqueville1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Alexis de Tocqueville'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesJohnStuartMill = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>John Stuart Mill fue un economista, filósofo y político nacido en Londres que defendió el Utilitarismo. Miembro del Partido Liberal, Mill fue un defensor de la libertad individual en oposición al control estatal y social ilimitado, como también defendió la investigación de la metodología científica, y el sufragio femenino.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/johnstuartmill1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'John Stuart Mill'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd1.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesJuanBautistaAlberdi = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Juan Bautista Alberdi, el inspirador de la Constitución Nacional Argentina y del período más próspero de la economía Argentina, fue uno de los más grandes pensadores argentinos, nació en Tucumán el 29 de agosto de 1810. Su principal obra fue Bases y Puntos de Partida para la Organización Política de la República Argentina.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/juanbautistaalberdi1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Juan Bautista Alberdi'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd1.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesHerbertSpencer = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Herbert Spencer vivió en el siglo XIX. Aunque de formación técnica, trabajó todo tipo de disciplinas, tanto en las ciencias naturales como en las sociales. Partidario del Darwinismo Social y firme defensor del individuo y del liberalismo más radical.  Durante su vida alcanzó una tremenda autoridad, sobre todo en el ámbito académico de habla inglesa.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/herbertspencer1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Herbert Spencer'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd1.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesCarlMenger = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Carl Menger fue un economista austríaco, considerado junto a W. S. Jevons y Léon Walras como uno de los fundadores del marginalismo y de la teoría de la utilidad. También fue fundador de la Escuela Austríaca, donde sus principales seguidores Wieser y Böhm -Bawerk fueron sus discípulos. Su obra más notable es Principios de Economía</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/carlmenger1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Carl Menger'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd1.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesJohnDewey = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>John Dewey fue el filósofo estadounidense más importante de la primera mitad del siglo XX y, junto con Charles Sanders Peirce y William James, uno de los fundadores de la filosofía del pragmatismo. Durante la primera mitad del siglo XX fue la figura más representativa de la pedagogía progresista en Estados Unidos.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/johndewey1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'John Dewey'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd2.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesLeonardTHobhouse = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Leonard Trelawny Hobhouse sociólogo y filósofo inglés que intentó reconciliar el liberalismo con el colectivismo en aras del progreso social. Al elaborar su concepción de la sociología , se basó en su conocimiento de varios otros campos: filosofía, psicología, biología, antropología e historia de la religión, la ética y el derecho.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/leonardtrelawnyhobhouse1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Leonard T. Hobhouse'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd2.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesBenedettoCroce = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Benedetto Croce fue un escritor, filósofo, historiador y político italiano. Figura destacada del liberalismo. Fue miembro del senado italiano desde 1910, Ministro de Educación desde 1920 a 1921, y otra vez después de la II Guerra Mundial. Oponente al fascismo, se pronunció en contra del Gobierno de Benito Mussolini.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/benedettocroce1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Benedetto Croce'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd2.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesLudwigVonMises = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Ludwig Heinrich Edler von Mises fue un economista austríaco. Mises ha contribuido en gran medida a la economía neoclásica y fue uno de los líderes de la Escuela Austríaca.Fue un firme defensor del liberalismo económico, basado en la idea de que la teoría de la oferta y la demanda dará lugar a la asignación más eficiente de los recursos.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/ludwigvonmises1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Ludwig Von Mises'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd2.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesHenryHazlitt = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Henry Hazlitt fue periodista, crítico literario, economista y filósofo.Considerado uno de los intelectuales públicos más brillantes de nuestro siglo. En sus últimos años, a menudo se sorprendió de que La Economía en una Lección se hubiera convertido en su contribución más duradera. La escribió para exponer las falacias populares de su tiempo.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/henryhazlitt2.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Henry Hazlitt'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd2.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesFriedrichHayek = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Friedrich August von Hayek fue un economista, jurista y filósofo vienés de la Escuela Austríaca. Especialmente conocido por recibir el Premio Nobel en 1974, Hayek fue un firme defensor del liberalismo y crítico de la economía planificada y el socialismo. La principal aportación de von Hayek fue su teoría del ciclo económico.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/friedrichhayek1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Friedrich Hayek'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd2.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesKarlPopper = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Karl Popper es considerado como uno de los filósofos de la ciencia más importantes del siglo XX y sentó una de las bases del método cientifico, el falsasionismo. En el discurso político, es conocido por su vigorosa defensa de la democracia liberal y los principios de crítica social que creía que hacían posible una floreciente sociedad abierta.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/karlpopper1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Karl Popper'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd3.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesRaymonAron = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Raymon Aron sociólogo francés. Fue uno de los primeros en proponer una teoría de la sociedad industrial como vía para comprender los problemas fundamentales de la civilización occidental del siglo XX. Aron, afín al liberalismo tradicional, fustigó las ideologías de derechas e izquierdas y fue un lúcido analista de la realidad social y política de su tiempo.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/raymondaron1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Raymond Aron'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd3.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesIsaiahBerlin = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Isaiah Berlin fue un politólogo e historiador de las ideas, británico de origen judío; está considerado como uno de los principales pensadores liberales del siglo XX. A pesar de escribir solo escasas obras que fueron publicadas, sus charlas y coloquios fueron alguna vez grabados y transcritos, y muchas de sus palabras convertidas en obras publicadas.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/isaiahberlin1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Isaiah Berlin'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd3.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const DetallesNorbertoBobbio = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Norberto Bobbio fue ensayista, profesor y teórico del pensamiento político. Norberto Bobbio nació el 18 de octubre de 1909 en Turín, en el seno de una familia acomodada y relativamente progresista. Su padre, Luigi Bobbio, era uno de los cirujanos más prestigiosos de la ciudad. Se delcaró abierta y conscientemente en contra del fascismo.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/norbertobobbio1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Norberto Bobbio'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd3.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}


const DetallesMiltonFriedman = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Milton Friedman fue un estadístico, economista e intelectual estadounidense de origen judío ganador del Premio Nobel de Economía de 1976. Profesor en la Universidad de Chicago, fue uno de los fundadores de la Escuela de Economía de Chicago, una escuela de economía clásica defensora del libre mercado. Fue uno de los economistas más influyentes del siglo XX.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/miltonfriedman1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Milton Friedman'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd4.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}


const DetallesJamesMBuchanan = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>James McGill Buchanan. Economista norteamericano, se dedicó al estudio de la economía pública y especialmente de las elecciones públicas en su incidencia en los mercados. Obtuvo el Premio Nobel de Economía en 1986 por su desarrollo de las bases contractuales y constitucionales de la teoría de la adopción de decisiones económicas y políticas.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/jamesmbuchanan1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'James M. Buchanan'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd4.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}


const DetallesJohnRawls = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>John Rawls, filósofo estadounidense, profesor de filosofía política en la Universidad de Harvard. Su vida encarnaba el respeto a la humanidad, principio que impartía a través de su pensamiento original y sorprendente combinación de libertad e igualdad, animado por la tolerancia y la democrática confianza en las posibilidades humanas.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/johnrawls1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'John Rawls'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd4.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}


const DetallesMurrayRothbard = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Murray Rothbard, el gran discípulo de Mises, dio un nuevo empuje a la Escuela Austríaca con su tratado Hombre, Economía y Estado. Escribió ampliamente sobre teoría monetaria defendiendo el patrón oro y criticando los bancos centrales. Contribuyó a definir el moderno liberalismo de corte libertario.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/murrayrothbard1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Murray Rothbard'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd4.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}


const DetallesRonaldDworkin = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Ronald Dworkin fue un filósofo del Derecho y catedrático de Derecho Constitucional. Su teoría del derecho es una de las contemporáneas más influyentes respecto de la naturaleza del derecho. Según The Journal of Legal Studies, fue el segundo autor estadounidense del siglo XX más citado en el campo del Derecho.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/ronalddworkin1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Ronald Dworkin'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd4.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}


const DetallesJavierMilei = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Javier Gerardo Milei es un economista, escritor, docente, conductor de radio y conferencista argentino de filosofía anarcocapitalista pero liberal libertario en lo práctico, asociado a la escuela austríaca de pensamiento económico. Se hizo principalmente famoso por sus argumentos económicos en programas de televisión y su fuerte compromiso con la Batalla Cultural.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/javiermileii.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Javier Milei'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd4.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}


const DetallesAxelKaiser = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Axel Kaiser es un profesor universitario, analista político y escritor Chileno. Director Ejecutivo de la Fundación para el Progreso y columnista habitual de los periódicos El Mercurio, El Líbero y el Diario Financiero. Es fiel seguidor y divulgador del Liberalismo en Latinoamérica.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/axelkaiserr.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Axel Kaiser'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd4.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}



const DetallesGloriaAlvarez = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.viewDetalles}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTextDetalles}>Gloria Álvarez Cross es una politóloga, presentadora de televisión, locutora de radio y escritora guatemalteca que se identifica como libertaria. Descrita como una figura mediática,​ ha realizado giras de conferencias por Iberoamérica en contra del populismo. Una de las figuras más actuales que representa el Liberalismo en la lucha de las ideas.</Text>
            <TouchableHighlight 
            style={styles.modalButtonDetalles}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>

            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>
      <Image style={styles.photoDetalles} source={require('./assets/fotosPersonajes/MarcoEspecial/gloriaalvares1.jpg')} />
      <TouchableHighlightEx  
      style={styles.buttonBiografia} 
      activeOpacity={0.5} 
      onPress={() => setModal(!modal)} >
        <Image style={styles.imageButtonBiografia} 
        source={require('./assets/biografia.png')}/>
      </TouchableHighlightEx>
      <View style={styles.viewDetalles2}>
        
        <TouchableHighlight 
        style={styles.buttonDetalles2} 
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('webviewLibros',{title: 'Gloria Álvarez'})}
        >
        <Image style={styles.imageButtonDetalles2} source={require('./assets/librosxd4.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}




















const HomeScreen = ({ navigation }) => {
  const [modal, setModal] = useState(false)
  const [modalAdam, setModalAdam] = useState(false)
  const [modalThomasPaine, setModalThomasPaine] = useState(false)
  const [modalBenjaminConstant, setModalBenjaminConstant] = useState(false)
  const [modalDavidRicardo, setModalDavidRicardo] = useState(false)
  const [modalFredericBastiat, setModalFredericBastiat] = useState(false)
  const [modalAlexis, setModalAlexis] = useState(false)
  const [modalJohnStuartMill, setModalJohnStuartMill] = useState(false)
  const [modalAlberdi, setModalAlberdi] = useState(false)
  const [modalHerbertSpencer, setModalHerbertSpencer] = useState(false)
  const [modalCarlMenger, setModalCarlMenger] = useState(false)
  const [modalJohnDewey, setModalJohnDewey] = useState(false)
  const [modalLeonardTH, setModalLeonardTH] = useState(false)
  const [modalBenedettoCroce, setModalBenedettoCroce] = useState(false)
  const [modalLudwigVonMises, setModalLudwigVonMises] = useState(false)
  const [modalHenryHazlitt, setModalHenryHazlitt] = useState(false)
  const [modalFriedrichHayek, setModalFriedrichHayek] = useState(false)
  const [modalKarlPopper, setModalKarlPopper] = useState(false)
  const [modalRaymonAron, setModalRaymonAron] = useState(false)
  const [modalIsaiahBerlin, setModalIsaiahBerlin] = useState(false)
  const [modalNorbertoBobbio, setModalNorbertoBobbio] = useState(false)
  const [modalMiltonFriedman, setModalMiltonFriedman] = useState(false)
  const [modalJamesMBuchanan, setModalJamesMBuchanan] = useState(false)
  const [modalJohnRawls, setModalJohnRawls] = useState(false)
  const [modalMurrayRothbard, setModalMurrayRothbard] = useState(false)
  const [modalRonaldDworkin, setModalRonaldDworkin] = useState(false)
  const [modalJavierMilei, setModalJavierMilei] = useState(false)
  const [modalAxelKaiser, setModalAxelKaiser] = useState(false)
  const [modalGloriaAlvarez, setModalGloriaAlvarez] = useState(false)
  
  return (
    <View style={styles.container}>
      <SectionList style={styles.sectionlist}
      sections={[
        {
          title: 'John Locke',
          data: [
            {key: '1', 
            country: 'Reino Unido', 
            date: '1632-1704', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/johnlockee.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderareinounido.png')} />,

          },
          ]
        },
        {
          title: 'Adam Smith',
          data: [
            {key: '2', 
            country: 'Reino Unido', 
            date: '1723-1790', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/adamsmithh.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderareinounido.png')} />
          },
          ]
        },
        {
          title: 'Thomas Paine',
          data: [
            {key: '3', 
            country: 'Reino Unido', 
            date: '1737-1790', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/thomaspainee.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderareinounido.png')} />
          },
            
          ]
        },
        {
          title: 'Benjamin Constant',
          data: [
            {key: '4', 
            country: 'Suiza', 
            date: '1767-1830', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/benjaminconstantderebecquee.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderasuiza.png')} />
          },
          ]
        },
        {
          title: 'David Ricardo',
          data: [
            {key: '5', 
            country: 'Reino Unido', 
            date: '1772-1823', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/davidricardoo.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderareinounido.png')} />
          },
          ]
        },
        {
          title: 'Fréderic Bastiat',
          data: [
            {key: '6', 
            country: 'Francia', 
            date: '1772-1823', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/fredericbastiatt.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderafrancia.png')} />
          },
          ]
        },
        {
          title: 'Alexis de Tocqueville',
          data: [
            {key: '7', 
            country: 'Francia', 
            date: '1805-1859', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/alexisdetocquevillee.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderafrancia.png')} />
          },
          ]
        },
        {
          title: 'John Stuart Mill',
          data: [
            {key: '8', 
            country: 'Reino Unido', 
            date: '1805-1873', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/johnstuartmilll.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderareinounido.png')} />
          },
          ]
        },
        {
          title: 'Juan Bautista Alberdi',
          data: [
            {key: '9', 
            country: 'Argentina', 
            date: '1810-1884', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/juanbautista.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaargentina.png')} />
          },
          ]
        },
        {
          title: 'Herbert Spencer',
          data: [
            {key: '10', 
            country: 'Reino Unido', 
            date: '1820-1903', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/herbertspencerr.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderareinounido.png')} />
          },    
          ]
        },
        {
          title: 'Carl Menger',
          data: [
            {key: '11', 
            country: 'Reino Unido', 
            date: '1840-1921', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/carlmengerr.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderapolonia.png')} />
          },
          ]
        },
        {
          title: 'John Dewey',
          data: [
            {key: '12', 
            country: 'Estados Unidos', 
            date: '1859-1952', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/johndeweyy.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaeeuu.png')} />
          },
          ]
        },
        {
          title: 'Leonard T. Hobhouse',
          data: [
            {key: '13', 
            country: 'Reino Unido', 
            date: '1864-1929', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/leonardtrelawnyhobhousee.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderareinounido.png')} />
          },
          ]
        },
        {
          title: 'Benedetto Croce',
          data: [
            {key: '14', 
            country: 'Italia', 
            date: '1866-1952', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/benedettocrocee.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaitalia.png')} />
          },
          ]
        },
        {
          title: 'Ludwig Von Mises',
          data: [
            {key: '15', 
            country: 'Ucrania', 
            date: '1881-1973', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/ludwigvonmisess.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaucrania.png')} />
          },
          ]
        },
        {
          title: 'Henry Hazlitt',
          data: [
            {key: '16', 
            country: 'Estados Unidos', 
            date: '1894-1993', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/henryhazlitt.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaeeuu.png')} />
          },
          ]
        },
        {
          title: 'Friedrich Hayek',
          data: [
            {key: '17', 
            country: 'Austria', 
            date: '1899-1992', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/friedrichhayekk.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaaustria.png')} />
          },
          ]
        },
        {
          title: 'Karl Popper',
          data: [
            {key: '18', 
            country: 'Austria', 
            date: '1905-1983', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/karlpopperr.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaaustria.png')} />
          },
          ]
        },
        {
          title: 'Raymond Aron',
          data: [
            {key: '19', 
            country: 'Francia', 
            date: '1905-1983', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/raymondaronn.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderafrancia.png')} />
          },
          ]
        },
        {
          title: 'Isaiah Berlin',
          data: [
            {key: '20', 
            country: 'Letonia', 
            date: '1909-1997', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/isaiahberlinn.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaletonia.png')} />
          },
          ]
        },
        {
          title: 'Norberto Bobbio',
          data: [
            {key: '21', 
            country: 'Italia', 
            date: '1909-2004', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/norbertobobbioo.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaitalia.png')} />
          },
          ]
        },
        {
          title: 'Milton Friedman',
          data: [
            {key: '22', 
            country: 'Estados Unidos', 
            date: '1912-2006', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/miltonfriedmann.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaeeuu.png')} />
          },
          ]
        },
        {
          title: 'James M. Buchanan',
          data: [
            {key: '23', 
            country: 'Estados Unidos', 
            date: '1919-2013', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/jamesmbuchanann.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaeeuu.png')} />
          },
          ]
        },
        {
          title: 'John Rawls',
          data: [
            {key: '24', 
            country: 'Estados Unidos', 
            date: '1921-2002', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/johnrawlss.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaeeuu.png')} />
          },
          ]
        },
        {
          title: 'Murray Rothbard',
          data: [
            {key: '25', 
            country: 'Estados Unidos', 
            date: '1926-1995', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/murrayrothbardd.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaeeuu.png')} />
          },
          ]
        },
        {
          title: 'Ronald Dworkin',
          data: [
            {key: '26', 
            country: 'Estados Unidos', 
            date: '1931-2013', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/ronalddworkinn.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaeeuu.png')} />
          },
          ]
        },
        {
          title: 'Javier Milei',
          data: [
            {key: '27', 
            country: 'Argentina', 
            date: '1970-Presente', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/javiermilei.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaargentina.png')} />
          },
          ]
        },
        {
          title: 'Axel Kaiser',
          data: [
            {key: '28', 
            country: 'Chile', 
            date: '1981-Presente', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/axelkaiser1.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderachile.png')} />
          },
          ]
        },
        {
          title: 'Gloria Álvarez',
          data: [
            {key: '28', 
            country: 'Guatemala', 
            date: '1985-Presente', 
            image: <Image style={styles.photo} source={require('./assets/fotosPersonajes/MarcoEstandar/gloriaalvares.jpg')}/>,
            countryFlag: <Image style={styles.flag} source={require('./assets/fotosPersonajes/Banderas/banderaguatemala.png')} />
          },
          ]
        }
      ]}
      
      renderSectionHeader={({}) => {}}
      renderItem={({ item, section }) => 
      <View style={styles.listcontainer}>
        <View style={styles.imageView}>{ item.image }</View>
        <View style={styles.textView}><Text style={styles.textName}>{ section.title }</Text ><Text style={styles.textCountry}>{item.country}  {item.countryFlag}</Text><Text style={styles.text}>{item.date}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableHighlightEx 
        style={styles.button1}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {
          if(section.title === 'John Locke'){
            setModal(!modal)
          }
          else if(section.title === 'Adam Smith'){
            setModalAdam(!modalAdam)
          }
          else if(section.title === 'Thomas Paine'){
            setModalThomasPaine(!modalThomasPaine)
          }
          else if(section.title === 'Benjamin Constant'){
            setModalBenjaminConstant(!modalBenjaminConstant)
          }
          else if(section.title === 'David Ricardo'){
            setModalDavidRicardo(!modalDavidRicardo)
          }
          else if(section.title === 'Fréderic Bastiat'){
            setModalFredericBastiat(!modalFredericBastiat)
          }
          else if(section.title === 'Alexis de Tocqueville'){
            setModalAlexis(!modalAlexis)
          }
          else if(section.title === 'John Stuart Mill'){
            setModalJohnStuartMill(!modalJohnStuartMill)
          }
          else if(section.title === 'Juan Bautista Alberdi'){
            setModalAlberdi(!modalAlberdi)
          }
          else if(section.title === 'Herbert Spencer'){
            setModalHerbertSpencer(!modalHerbertSpencer)
          }
          else if(section.title === 'Carl Menger'){
            setModalCarlMenger(!modalCarlMenger)
          }
          else if(section.title === 'John Dewey'){
            setModalJohnDewey(!modalJohnDewey)
          }
          else if(section.title === 'Leonard T. Hobhouse'){
            setModalLeonardTH(!modalLeonardTH)
          }
          else if(section.title === 'Benedetto Croce'){
            setModalBenedettoCroce(!modalBenedettoCroce)
          }
          else if(section.title === 'Ludwig Von Mises'){
            setModalLudwigVonMises(!modalLudwigVonMises)
          }
          else if(section.title === 'Henry Hazlitt'){
            setModalHenryHazlitt(!modalHenryHazlitt)
          }
          else if(section.title === 'Friedrich Hayek'){
            setModalFriedrichHayek(!modalFriedrichHayek)
          }
          else if(section.title === 'Karl Popper'){
            setModalKarlPopper(!modalKarlPopper)
          }
          else if(section.title === 'Raymond Aron'){
            setModalRaymonAron(!modalRaymonAron)
          }
          else if(section.title === 'Isaiah Berlin'){
            setModalIsaiahBerlin(!modalIsaiahBerlin)
          }
          else if(section.title === 'Norberto Bobbio'){
            setModalNorbertoBobbio(!modalNorbertoBobbio)
          }
          else if(section.title === 'Milton Friedman'){
            setModalMiltonFriedman(!modalMiltonFriedman)
          }
          else if(section.title === 'James M. Buchanan'){
            setModalJamesMBuchanan(!modalJamesMBuchanan)
          }
          else if(section.title === 'John Rawls'){
            setModalJohnRawls(!modalJohnRawls)
          }
          else if(section.title === 'Murray Rothbard'){
            setModalMurrayRothbard(!modalMurrayRothbard)
          }
          else if(section.title === 'Ronald Dworkin'){
            setModalRonaldDworkin(!modalRonaldDworkin)
          }
          else if(section.title === 'Javier Milei'){
            setModalJavierMilei(!modalJavierMilei)
          }
          else if(section.title === 'Axel Kaiser'){
            setModalAxelKaiser(!modalAxelKaiser)
          }
          else if(section.title === 'Gloria Álvarez'){
            setModalGloriaAlvarez(!modalGloriaAlvarez)
          }
  
        }}
        > 
        <Text style={{color: 'white',alignSelf: 'center', fontWeight: 'bold', fontSize: normalize(16)}}>FRASE</Text>
        </TouchableHighlightEx>
        <TouchableHighlightEx 
        style={styles.button1}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {

          //Condicional para ir a una vista de acuerdo al personaje
          if(section.title === 'John Locke'){
            navigation.navigate('DetallesJohnLocke')
          }
  
          else if(section.title === 'Adam Smith'){
            navigation.navigate('DetallesAdamSmith')
          }
          else if(section.title === 'Thomas Paine'){
            navigation.navigate('DetallesThomasPaine')
          }
          else if(section.title === 'Benjamin Constant'){
            navigation.navigate('DetallesBenjaminConstant')
          }
          else if(section.title === 'David Ricardo'){
            navigation.navigate('DetallesDavidRicardo')
          }
          else if(section.title === 'Fréderic Bastiat'){
            navigation.navigate('DetallesFredericBastiat')
          }
          else if(section.title === 'Alexis de Tocqueville'){
            navigation.navigate('DetallesAlexisdeTocqueville')
          }
          else if(section.title === 'John Stuart Mill'){
            navigation.navigate('DetallesJohnStuartMill')
          }
          else if(section.title === 'Juan Bautista Alberdi'){
            navigation.navigate('DetallesJuanBautistaAlberdi')
          }
          else if(section.title === 'Herbert Spencer'){
            navigation.navigate('DetallesHerbertSpencer')
          }
          else if(section.title === 'Carl Menger'){
            navigation.navigate('DetallesCarlMenger')
          }
          else if(section.title === 'John Dewey'){
            navigation.navigate('DetallesJohnDewey')
          }
          else if(section.title === 'Leonard T. Hobhouse'){
            navigation.navigate('DetallesLeonardTHobhouse')
          }
          else if(section.title === 'Benedetto Croce'){
            navigation.navigate('DetallesBenedettoCroce')
          }
          else if(section.title === 'Ludwig Von Mises'){
            navigation.navigate('DetallesLudwigVonMises')
          }
          else if(section.title === 'Henry Hazlitt'){
            navigation.navigate('DetallesHenryHazlitt')
          }
          else if(section.title === 'Friedrich Hayek'){
            navigation.navigate('DetallesFriedrichHayek')
          }
          else if(section.title === 'Karl Popper'){
            navigation.navigate('DetallesKarlPopper')
          }
          else if(section.title === 'Raymond Aron'){
            navigation.navigate('DetallesRaymonAron')
          }
          else if(section.title === 'Isaiah Berlin'){
            navigation.navigate('DetallesIsaiahBerlin')
          }
          else if(section.title === 'Norberto Bobbio'){
            navigation.navigate('DetallesNorbertoBobbio')
          }
          else if(section.title === 'Milton Friedman'){
            navigation.navigate('DetallesMiltonFriedman')
          }
          else if (section.title === 'James M. Buchanan'){
            navigation.navigate('DetallesJamesMBuchanan')
          }
          else if(section.title === 'John Rawls'){
            navigation.navigate('DetallesJohnRawls')
          }
          else if(section.title === 'Murray Rothbard'){
            navigation.navigate('DetallesMurrayRothbard')
          }
          else if(section.title === 'Ronald Dworkin'){
            navigation.navigate('DetallesRonaldDworkin')
          }
          else if(section.title === 'Javier Milei'){
            navigation.navigate('DetallesJavierMilei')
          }
          else if(section.title === 'Axel Kaiser'){
            navigation.navigate('DetallesAxelKaiser')
          }
          else if(section.title === 'Gloria Álvarez'){
            navigation.navigate('DetallesGloriaAlvarez')
          }
          }}
        
        
        > 
        <Text style={{color: 'white',alignSelf: 'center', fontWeight: 'bold',fontSize: normalize(16)}}>DETALLES</Text>
        </TouchableHighlightEx>
        </View>
        
      </View>
      </View>}
      
      />
      
      <Modal
      animationType='fade'
      transparent={true}
      visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"El Gobierno no debe tener otra finalidad que la preservación de la propiedad"</Text>
            <Text style={styles.modalName}>~John Locke</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModal(!modal)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalAdam}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"No puede haber una sociedad floreciente y feliz cuando la mayor parte de sus miembros son pobres y desdichados"</Text>
            <Text style={styles.modalName}>~Adam Smith</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalAdam(!modalAdam)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalThomasPaine}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"El arma más formidable contra los errores de todo tipo es la razón"</Text>
            <Text style={styles.modalName}>~Thomas Paine</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalThomasPaine(!modalThomasPaine)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalBenjaminConstant}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"La Libertad no es otra cosa que aquello que la Sociedad tiene el derecho de hacer y el Estado no tiene el derecho de impedir"</Text>
            <Text style={styles.modalName}>~Benjamin Constant</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalBenjaminConstant(!modalBenjaminConstant)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalDavidRicardo}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"La mayoría de los bienes que son objetos de deseo se procuran mediante el trabajo, y pueden ser multiplicados, no solamente en una nación, sino en muchas, casi sin ningún límite determinable, si estamos dispuestos a dedicar el trabajo necesario para obtenerlos"</Text>
            <Text style={styles.modalName}>~David Ricardo</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalDavidRicardo(!modalDavidRicardo)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalFredericBastiat}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Todo el mundo quiere vivir a expensas del Estado, pero olvidan que el Estado vive a expensas de todo el mundo"</Text>
            <Text style={styles.modalName}>~Fréderic Bastiat</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalFredericBastiat(!modalFredericBastiat)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalAlexis}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"El Individualismo es un sentimiento maduro y tranquilo que nos diferencia de las masas"</Text>
            <Text style={styles.modalName}>~Alexis de Tocqueville</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalAlexis(!modalAlexis)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalJohnStuartMill}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"No existe una mejor prueba del progreso de una civilización que la del progreso de la cooperación"</Text>
            <Text style={styles.modalName}>~John Stuart Mill</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalJohnStuartMill(!modalJohnStuartMill)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalAlberdi}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"El Gobierno no ha sido creado para hacer ganancias, sino para hacer Justicia; noha sido creado para hacerse rico, sino para ser el guardián y centinela de los derechos del hombre"</Text>
            <Text style={styles.modalName}>~Juan Bautista Alberdi</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalAlberdi(!modalAlberdi)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalHerbertSpencer}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Fórmate tú en vez de esperar a que te formen y modelen"</Text>
            <Text style={styles.modalName}>~Herbert Spencer</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalHerbertSpencer(!modalHerbertSpencer)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalCarlMenger}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"El dinero no es un invento del Estado. No es un producto legislativo. La sanción de una autoridad política no es necesaria para su existencia"</Text>
            <Text style={styles.modalName}>~Carl Menger</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalCarlMenger(!modalCarlMenger)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalJohnDewey}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"El fundamento de las ideas y prácticas democráticas es la fe en las potencialidades de los individuos, fe en la capacidad para desarrollos positivos si las condiciones son adecuadas. "</Text>
            <Text style={styles.modalName}>~John Dewey</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalJohnDewey(!modalJohnDewey)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalLeonardTH}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"La base de Libertad es la idea del crecimiento"</Text>
            <Text style={styles.modalName}>~Leonard T. Hobhouse</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalLeonardTH(!modalLeonardTH)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalBenedettoCroce}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Hay quien pone en duda el porvenir del ideal de la libertad. Nosotros respondemos que tiene más que un porvenir: posee eternidad."</Text>
            <Text style={styles.modalName}>~Benedetto Croce</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalBenedettoCroce(!modalBenedettoCroce)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalLudwigVonMises}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Mientras más gasta el gobierno, menos puede gastar el ciudadano. Las obrás públicas no se hacen con el poder milagroso de una varita mágica. Son pagadas con fondos arrancados a los ciudadanos"</Text>
            <Text style={styles.modalName}>~Ludwig Von Mises</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalLudwigVonMises(!modalLudwigVonMises)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalHenryHazlitt}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"El Gobierno es incapaz de darnos algo sin despojarnos de algo más"</Text>
            <Text style={styles.modalName}>~Henry Hazlitt</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalHenryHazlitt(!modalHenryHazlitt)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalFriedrichHayek}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Hay una gran diferencia entre tratar a los hombres con igualdad, e intentar hacerlos iguales"</Text>
            <Text style={styles.modalName}>~Friedrich Hayek</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalFriedrichHayek(!modalFriedrichHayek)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalKarlPopper}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Tenemos que hacer planes para la Libertad, y no solo para la seguridad, por la única razón de que solo la Libertad puede hacer segura la seguridad"</Text>
            <Text style={styles.modalName}>~Karl Popper</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalKarlPopper(!modalKarlPopper)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalRaymonAron}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Lo sabemos, el hombre es un ser racional, pero ¿lo son los hombres?"</Text>
            <Text style={styles.modalName}>~Raymon Aron</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalRaymonAron(!modalRaymonAron)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalIsaiahBerlin}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Confundir nuestras construcciones e invenciones con leyes eternas o decretos divinos es uno de los más fatales delirios de los hombres"</Text>
            <Text style={styles.modalName}>~Isaiah Berlin</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalIsaiahBerlin(!modalIsaiahBerlin)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalNorbertoBobbio}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Ser de izquierda es optar por los pobres, indignarse ante la exclusión social, inconformarse con todo tipo de injusticia y considerar una aberración la desigualdad social"</Text>
            <Text style={styles.modalName}>~Norberto Bobbio</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalNorbertoBobbio(!modalNorbertoBobbio)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Modal
      animationType='fade'
      transparent={true}
      visible={modalMiltonFriedman}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Copien los que los países ricos hicieron para hacerse ricos. No lo que hacen ahora ya que son ricos"</Text>
            <Text style={styles.modalName}>~Milton Friedman</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalMiltonFriedman(!modalMiltonFriedman)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalJamesMBuchanan}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"La Economía es el estudio de todo el sistema de relaciones de intercambio. La política es el estudio de todo el sistema de relaciones coercitivas o potencialmente coercitivas"</Text>
            <Text style={styles.modalName}>~James M. Buchanan</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalJamesMBuchanan(!modalJamesMBuchanan)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalJohnRawls}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Los principios de la Justicia se eligen detrás de un velo de ignorancia"</Text>
            <Text style={styles.modalName}>~John Rawls</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalJohnRawls(!modalJohnRawls)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalMurrayRothbard}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"En el mercado libre cada cual gana según el valor productivo en satisfacer los deseos de los consumidores. Bajo la distribución Estatista, cada uno gana en proporción a la cantidad que puede saquear de los productores"</Text>
            <Text style={styles.modalName}>~Murray Rothbard</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalMurrayRothbard(!modalMurrayRothbard)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalRonaldDworkin}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Discrepamos, ferozmente sobre casit todo. Discrepamos sobre el terror y la seguridad, sobre la justicia social, sobre la religión en la política, sobre quién es apto para ser juez y sobre qué es la democracia. Estos desacuerdos no transcurren de manera civilizada, ya que no existe respeto recíproco entre las partes"</Text>
            <Text style={styles.modalName}>~Ronald Dworkin</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalRonaldDworkin(!modalRonaldDworkin)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalJavierMilei}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Hay dos modelos de sociedad: El Capitalismo que premia el esfuerzo, las ganas de progresar o el Socialismo, donde un conjunto de envidiosos quieren exporpiarle el fruto del trabajo al que le va bien"</Text>
            <Text style={styles.modalName}>~Javier Milei</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalJavierMilei(!modalJavierMilei)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalAxelKaiser}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"La búsqueda sistemática de la igualdad solo puede conducir a la eliminación de los incentivos y espacios para el desarrollo máximo de los talentos y capacidades individuales"</Text>
            <Text style={styles.modalName}>~Axel Kaiser</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalAxelKaiser(!modalAxelKaiser)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalGloriaAlvarez}
      >
        <View style={styles.center}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>"Es del todo absurdo que los Latinoamericanos sigamos esperando que la educación, el juicio crítico y analítico nos vengan de quienes prefieren, para su beneficio, que seamos brutos e ignorantes: los gobernantes"</Text>
            <Text style={styles.modalName}>~Gloria Álvarez</Text>
            <TouchableHighlight 
            style={styles.modalButton}
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => setModalGloriaAlvarez(!modalGloriaAlvarez)}
            >
              <Text style={styles.modalTextButton} >CERRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>




      
      
      
      
      
    </View>
  )
}

HomeScreen.navigationOptions = ({navigation}) => {

  return {
    
    headerRight: () => 
    <View style={styles.rightView} >
  
      <ShareExample style={styles.share}></ShareExample>
      <TouchableHighlightEx style={styles.infoContainer} onPress={() => {navigation.navigate('DetalleScreen')}} activeOpacity={0.6}  underlayColor="#DDDDDD"><Image style={styles.infoImage} source={require('./assets/infoicon.png')} /></TouchableHighlightEx>
    </View>
                        
  }  
}



const Liberalismo = () => {
  return(
    <View style={styles.viewLiberalismo}>
      <View style={styles.viewTitle}>
      <Text style={styles.titleLiberalismo}>Liberalismo</Text>
      <Text style={styles.descriptionLiberalismo}>El Liberalismo es una doctrina política, económica y social
            que defiende la libertad del individuo y una intervención mínima del Estado en la vida Social y Económica.
      </Text>
      </View>

    </View>
  )
}


const AcercaDe = ({navigation}) => {
  return(
    <View style={styles.acercadeContainer}>
      <View style={styles.itemsContainer}>
      <Image style={styles.imageAcercaDe} source={require('./assets/torchacercade.png')}/>
      <Text style={styles.developerText}>Desarrollado por <Text style={{fontWeight: 'bold'},{textDecorationLine: 'underline'}}>El Capital Chile</Text></Text>
      </View>
      <View style={styles.itemsContainer2}>
      <Text style={styles.footerCopyRight}>Copyright {'\u00A9'} 2020</Text>
      <Text onPress={() => navigation.navigate('PoliticaPrivacidad')} style={styles.footerAcercade}>Políticas de Privacidad</Text>
      <Text onPress={() => navigation.navigate('TerminosYCondiciones')}style={styles.footerAcercade}>Términos & Condiciones</Text>        
      </View>
    </View>
  )
}

const PoliticaPrivacidad = () =>{
  return(
    <WebView
        source={{ uri: 'https://drive.google.com/file/d/1rP5M_rF29gpk1cs-jQpciSB4MQkXqrZP/view?usp=sharing'}}
        style={{ marginTop: 20 }}
      />
  )
}

PoliticaPrivacidad.navigationOptions = () => {
  return{
    headerShown: false,
  }
}

const TerminosYCondiciones = () => {
  return(
    <WebView
        source={{ uri: 'https://drive.google.com/file/d/1wRXu1OpjhmjAOgOhQOcEK7-3fV3SG851/view?usp=sharing'}}
        style={{ marginTop: 20 }}
      />
  )
}

TerminosYCondiciones.navigationOptions = () => {
  return{
    headerShown: false,
  }
}
const DetalleScreen = ({navigation}) =>{
  
  return(
    <View style={styles.infoContainer2}>
      <TouchableHighlightEx 
      style={styles.buttonInfo}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => navigation.navigate('Liberalismo')}
      >
        <Text style={styles.textInfo}>¿Qué es el Liberalismo?</Text>
      </TouchableHighlightEx>
      <TouchableHighlightEx 
      style={styles.buttonInfo}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => navigation.navigate('AcercaDe')}
      >
        <Text style={styles.textInfo}>Acerca de</Text>
      </TouchableHighlightEx>
    </View>
  )
}


DetalleScreen.navigationOptions = () => {
  return {
   
  }
}

//Navegador de las vistas, aquí se deben agregar cada vista nueva que se desarrolle
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  DetalleScreen: {
    screen: DetalleScreen,
  },
  DetallesJohnLocke: {
    screen: DetallesJohnLocke,
  },
  DetallesAdamSmith: {
    screen: DetallesAdamSmith,
  },
  webviewLibros: {
    screen: webviewLibros,
  },
  DetallesThomasPaine: {
    screen: DetallesThomasPaine,
  },
  DetallesBenjaminConstant: {
    screen: DetallesBenjaminConstant,
  },
  DetallesDavidRicardo: {
    screen: DetallesDavidRicardo,
  },
  DetallesFredericBastiat: {
    screen: DetallesFredericBastiat,
  },
  DetallesAlexisdeTocqueville: {
    screen: DetallesAlexisdeTocqueville,
  },
  DetallesJohnStuartMill: {
    screen: DetallesJohnStuartMill,
  },
  DetallesJuanBautistaAlberdi: {
    screen: DetallesJuanBautistaAlberdi,
  },
  DetallesHerbertSpencer: {
    screen: DetallesHerbertSpencer,
  },
  DetallesCarlMenger: {
    screen: DetallesCarlMenger,
  },
  DetallesJohnDewey: {
    screen: DetallesJohnDewey,
  },
  DetallesLeonardTHobhouse: {
    screen: DetallesLeonardTHobhouse,
  },
  DetallesBenedettoCroce: {
    screen: DetallesBenedettoCroce,
  },
  DetallesLudwigVonMises: {
    screen: DetallesLudwigVonMises,
  },
  DetallesHenryHazlitt: {
    screen: DetallesHenryHazlitt,
  },
  DetallesFriedrichHayek: {
    screen: DetallesFriedrichHayek,
  },
  DetallesKarlPopper: {
    screen: DetallesKarlPopper,
  },
  DetallesRaymonAron: {
    screen: DetallesRaymonAron,
  },
  DetallesIsaiahBerlin: {
    screen:  DetallesIsaiahBerlin,
  },
  DetallesNorbertoBobbio: {
    screen: DetallesNorbertoBobbio,
  },
  DetallesMiltonFriedman: {
    screen: DetallesMiltonFriedman,
  },
  DetallesJamesMBuchanan: {
    screen: DetallesJamesMBuchanan,
  },
  DetallesJohnRawls: {
    screen: DetallesJohnRawls,
  },
  DetallesMurrayRothbard: {
    screen: DetallesMurrayRothbard
  },
  DetallesRonaldDworkin: {
    screen: DetallesRonaldDworkin,
  },
  DetallesJavierMilei: {
    screen: DetallesJavierMilei
  },
  DetallesAxelKaiser: {
    screen: DetallesAxelKaiser,
  },
  DetallesGloriaAlvarez: {
    screen: DetallesGloriaAlvarez,
  },
  Liberalismo: {
    screen: Liberalismo,
  },
  AcercaDe : {
    screen: AcercaDe,
  },
  PoliticaPrivacidad: {
    screen: PoliticaPrivacidad,
  },
  TerminosYCondiciones: {
    screen: TerminosYCondiciones,
  }
  
}, { 
  initialRouteName: 'Home',
  
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
    headerStyle: {
      backgroundColor: '#eff400'
    },
    headerTitle: () => 
      <Image style={styles.headerTitle} source={require('./assets/lecturaliberal.png')}/>
    ,
    
  },
  
  
})

export default createAppContainer(AppNavigator)


const styles = StyleSheet.create({
  button1: {
    padding: normalize(10),
    backgroundColor: '#333',
    width: normalize(100),
    alignItems: 'center',
    marginTop: '20%',
    marginRight: '4%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
  },
  button2: {
    backgroundColor: '#eff400',
    flex: 1,
  },
  listcontainer: {
    marginTop: normalize(10),
    paddingBottom: normalize(10),
    borderBottomColor: '#eff400',
    borderBottomWidth: normalize(3),
    flex: 1,
    flexDirection: 'row',
  },
  imageView:{
    flex:2,
  },
  textView: {
    flex:3,
    flexDirection: 'column',
    
  },
  sectionlist: {
    width: '100%',
    
  },
  text: {
    marginLeft: '5%',
    fontSize: normalize(20),
    fontStyle: 'normal',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    color: 'white',
    marginTop: normalize(0),
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  textCountry: {
    marginLeft: '5%',
    fontSize: normalize(20),
    fontStyle: 'normal',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    color: 'white',
    marginTop: normalize(10),
    marginBottom: normalize(5),
    paddingBottom: 0,
    paddingTop: 0,
  },
  textName: {
    fontSize: normalize(24),
    color: 'white',
    marginLeft: '5%',
    fontWeight: 'bold',
  },

  titleText: {
    fontSize: normalize(36),
    fontFamily: 'catffeteglobus'
 
  },
  headerTitle: {
    height: normalize(40),
    width: normalize(150)
  },
  photo: {
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 0.5,
    flex: 1,
    width: normalize(140),
    height: normalize(180),
    marginLeft: '2%',
    
  },
  viewDetalles: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#231F20',
  },
  viewDetalles2: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#231F20',
  },
  photoDetalles: {
    alignSelf: 'center',
    flex: 1,
    width: normalize(240),
    height: normalize(180),
    marginTop: normalize(20),
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  textDetalles: {
    flex:1,
    fontSize: normalize(22),
  },
  
  buttonDetalles2: {
    marginTop: '2%',
    alignSelf: 'center',
    width: '90%',
    height: '50%',
    marginBottom: '5%',
    borderColor: '#6b6b6b',
    borderWidth: 1.5,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  imageButtonDetalles2: {
    alignSelf: 'center',
    width: '70%',
    height: '70%',
    borderWidth: 1.5,
    backgroundColor: 'white',
    
  },
  viewAllDetalles: {
    flexDirection: 'row',
    flex: 1,
    
  },
  buttonBiografia: {
    alignSelf: 'center',
    width: '90%',
    borderRadius: 5,
    marginTop: normalize(20),
    marginBottom: normalize(0),
    borderColor: '#6b6b6b',
    borderWidth: 1.5,
    backgroundColor: 'white',
  },
  imageButtonBiografia: {
    alignSelf: 'center',
    width: '70%',
    marginLeft: '100%',
    marginRight: '100%',
    height: 100,
    backgroundColor: 'white',
    borderWidth: 1.5,
  },
 
  flag: {
    width: 30,
    height: 20,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  
  },
  center: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(239,244,0,0.8)',
  },
  modalContent: {
    width: '95%',
    borderRadius: 5,
    padding: 0,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#333',
  
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: normalize(22),
    backgroundColor: 'white',
    padding: normalize(10),
    paddingTop: normalize(20),
    paddingBottom: normalize(0),
    width:'100%',
    justifyContent: 'center',
    textAlign: "justify",
    alignSelf: 'center',
    borderRadius: 5,
  },
  modalName: {
    fontWeight: 'bold',
    fontSize: normalize(22),
    alignSelf: 'flex-end',
    padding: normalize(10),
    paddingBottom: normalize(40),
  },
  modalButton: {
    borderRadius: 5,
    backgroundColor: '#222',
    width: '30%',
    marginBottom: normalize(20),
    padding: normalize(10),
  },
  modalTextButton: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  }, 

  //Detalles de los personajes
  modalButtonDetalles: {
    borderRadius: 5,
    backgroundColor: '#222',
    width: '30%',
    marginBottom: normalize(20),
    marginTop: normalize(60),
    padding: normalize(10),
    
  },
  modalTextDetalles: {
    fontWeight: 'bold',
    fontSize: normalize(26),
    backgroundColor: 'white',
    padding: normalize(10),
    paddingTop: normalize(20),
    paddingBottom: normalize(0),
    width:'100%',
    justifyContent: 'center',
    textAlign: "justify",
    alignSelf: 'center',
    borderRadius: 5,
  },
  rightView: {
    flexDirection: 'row',
    
  },
  share: {
    flex: 1,
  },
  shareContainer: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: 20,
    marginRight: normalize(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareImage: {
    width: normalize(40),
    height: normalize(40),
    alignSelf: 'center',
  },
  infoContainer: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: 20,
    marginRight: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoImage: {
    width: normalize(35),
    height: normalize(35),
    alignSelf: 'center',
    marginTop: normalize(5),

  },
  infoContainer2: {
    flex: 1,
    backgroundColor: '#231F20',
    width: '100%',
  },
  buttonInfo: {
    width: '100%',
    paddingBottom: normalize(20),
    paddingTop: normalize(20),
    borderBottomColor: 'white',
    borderBottomWidth: normalize(3),

  },
  textInfo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(22),
    alignSelf: 'center'
  },
  acercadeContainer: {
    flex:1,
    height: 1000,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#231F20',
  },
  itemsContainer:{
    flex: 2,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#231F20',
  },
  itemsContainer2:{
    flex: 1,
    flexDirection: 'column-reverse',
    width: '100%',
    backgroundColor: '#231F20',
  },
  imageAcercaDe: {
    width: normalize(230),
    height: normalize(230),
    alignSelf: 'center',
    marginTop: '15%',
  },
  footerAcercade: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    paddingBottom: normalize(5),
    paddingTop: normalize(5),
  },
  developerText: {
    marginTop: normalize(20),
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(22),
    alignSelf: 'center'
  },
  footerCopyRight:{
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: normalize(10),
  },
  viewLiberalismo: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  viewTitle: {
    flex: 1,
    backgroundColor: '#231F20',
    alignSelf: 'center',
    width: '100%'
  },
  titleLiberalismo: {
    fontSize: normalize(28),
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: normalize(20),
    marginTop: normalize(20),
  },
  descriptionLiberalismo: {
    fontSize: normalize(24),
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'justify',
    width: '100%',
    paddingLeft: '2.5%',
    paddingRight: '2.5%',

  },
  
  textdetailsLiberalismo2: {
    fontSize: normalize(18),
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'justify',
    width: '100%',
    borderBottomColor: 'white',
    borderTopColor: 'white',
    borderTopWidth: normalize(3),
    borderBottomWidth: normalize(3),
    paddingLeft: '2.5%',
    paddingRight: '2.5%',
    paddingTop: normalize(8),
    paddingBottom: normalize(8),
  }



  
  
});