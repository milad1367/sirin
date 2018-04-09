// import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   Dimensions,
//   StyleSheet,
//   ScrollView,
//   View,
//   Image,
//   Text,
// } from 'react-native';

// const window = Dimensions.get('window');
// //const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

// const styles = StyleSheet.create({
//   menu: {
//     flex: 1,
//     width: window.width,
//     height: window.height,
//     backgroundColor: 'white',
//     padding: 20,
//   },
//   avatarContainer: {
//     marginBottom: 20,
//     marginTop: 20,
//     flexDirection:"column",
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 24,
   
//   },
//   name: {
//     position: 'absolute',
//     left: 70,
//     top: 20,
//     color:"#51a9ce",
//     fontSize:Math.round(window.height/40),
//   },

//   item: {
//     fontSize: 14,
//     fontWeight: '300',
//     paddingTop: window.height/25,
//     color:"#4c80b9",
//     fontSize:Math.round(window.height/35),
//   },
// });

// export default function Menu({ onItemSelected }) {
//   return (
//     <ScrollView scrollsToTop={false} style={styles.menu}>
//       <View style={styles.avatarContainer}>
//         <Image
//           style={styles.avatar}
//           source={require('../imgs/face.png')}
//         />
//         <Text style={styles.name}>milad kastakorta {"\n"}{"\n"} 19 years old</Text>
//       </View>
//      <View style={{marginTop:window.width/3,}}>
//       <Text
//         onPress={() => onItemSelected('About')}
//         style={styles.item}
//       >
//         Home
//       </Text>

//       <Text
//         onPress={() => onItemSelected('Contacts')}
//         style={styles.item}
//       >
//         History
//       </Text>
//       <Text
//         onPress={() => onItemSelected('Contacts')}
//         style={styles.item}
//       >
//         Story
//       </Text>
//       <Text
//         onPress={() => onItemSelected('Contacts')}
//         style={styles.item}
//       >
//         Profile
//       </Text>
//       </View>
//     </ScrollView>
//   );
// }

// Menu.propTypes = {
//   onItemSelected: PropTypes.func.isRequired,
// };
import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default function Menu({ onItemSelected }) {
  console.log(this.props);
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Your name</Text>
      </View>

      <Text
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
        About
      </Text>

      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Contacts
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};