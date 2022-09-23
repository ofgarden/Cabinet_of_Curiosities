import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import * as Firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
// import { firebaseConfig } from '../firebase';
// import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const db = Firebase.firestore();
// let user = Firebase.auth().currentUser;
// console.log('user', user.uid);

// if (user) {
//   let testRef = db.collection('users').doc(user.uid)
//                   .collection('artworks')
// }

// let testRef = db.collection('users').doc(user.uid)
//                   .collection('artworks')

const AddArtwork = () => {
  const navigation = useNavigation();

  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [medium, setMedium] = useState('');

  // if (!getApps.length) {
  //   Firebase.initializeApp(firebaseConfig);
  // }

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handlePickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // SEDN DATA TO DATABASE
  const handleSubmit = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', image, true);
      xhr.send(null);
    });

    const ref = Firebase.storage().ref().child(new Date().toISOString());
    const snapshot = ref.put(blob);

    snapshot.on(
      Firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true);
      },
      (error) => {
        setUploading(false);
        console.log(error);
        blob.close();
        return;
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          setUploading(false);
          console.log('download url : ', url);
          blob.close();
          // return url;

          // TRY, IMAGE를 올리면서 데이터도 같이 올리기
          let saved = {
            artist: artist,
            title: title,
            date: date,
            medium: medium,
            image: url,
            // uid: user.uid
          };

          console.log('saved: ', saved);

          // Create document by uid and create another collection which is artworks
          // TEST DB (WORKING!)
          // db.collection('Test')
          //   .add(saved)
          //   .then(() => {
          //     setTimeout(() => {}, 10000);
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });

          db.collection('Test')
            // .doc(user.uid)
            .doc('Test2')
            .collection('artworks')
            .add(saved)
            .then(() => {
              setTimeout(() => {}, 10000);
            })
            .catch((error) => {
              console.log(error);
            });

          // let testRef;
          // if (user) {
          //   testRef = db
          //     .collection('users')
          //     .doc(user.uid)
          //     .collection('artworks');
          // }

          // // 1
          // testRef
          //   .add(saved)
          //   .then(() => {
          //     setTimeout(() => {}, 10000);
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });

          // 2
          // testRef
          //   .add(saved)
          //   .then(() => {
          //     setTimeout(() => {}, 10000);
          //     navigation.navigate('Artworks');
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
        });
      },
    );
  };

  // const handleUploadImage = async () => {
  //   const blob = await new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.onload = function() {
  //       resolve(xhr.response);
  //     };
  //     xhr.onerror = function() {
  //       reject(new TypeError('Network request failed'));
  //     };
  //     xhr.responseType = 'blob';
  //     xhr.open('GET', image, true);
  //     xhr.send(null);
  //   });

  //   const fileRef = ref(getStorage(), uuid.v4());
  //   const result = await uploadBytes(fileRef, blob);

  //   blob.close();

  //   return await getDownloadURL(fileRef);
  // }

  return (
    <>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.imageBox} />
        <Button
          style={styles.button}
          title="choose image"
          onPress={handlePickImage}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Artist"
            value={artist}
            onChangeText={(text) => setArtist(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Date"
            value={date}
            onChangeText={(text) => setDate(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Medium"
            value={medium}
            onChangeText={(text) => setMedium(text)}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text>
            {!uploading ? (
              <Button title="Submit to Database" onPress={handleSubmit} />
            ) : (
              <ActivityIndicator size="large" color="#000" />
            )}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit to Database</Text>
          </TouchableOpacity> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: 'lavender',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'lavender',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default AddArtwork;

// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Button,
//   Image,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';
// import * as Firebase from 'firebase';
// import { auth, db } from '../../firebase';

// import * as ImagePicker from 'expo-image-picker';

// let user = auth.currenUser;
// console.log('user ', user);

// const AddArtwork = () => {
//   const navigation = useNavigation();

//   const [artist, setArtist] = useState('');
//   const [title, setTitle] = useState('');
//   const [date, setDate] = useState('');
//   const [medium, setMedium] = useState('');

//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   // OUTSIDE? or INSIDE?
//   // let user = auth.currenUser;
//   // console.log('user ', user);

//   const handlePickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   // SEDN DATA TO DATABASE
//   const handleSubmit = async () => {
//     const blob = await new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.onload = function () {
//         resolve(xhr.response);
//       };
//       xhr.onerror = function () {
//         reject(new TypeError('Network request failed'));
//       };
//       xhr.responseType = 'blob';
//       xhr.open('GET', image, true);
//       xhr.send(null);
//     });

//     // const ref = db.storage().ref().child(new Date().toISOString());
//     const ref = Firebase.ref().child(new Date().toISOString());
//     const snapshot = ref.put(blob);

//     snapshot.on(
//       Firebase.storage.TaskEvent.STATE_CHANGED,
//       () => {
//         setUploading(true);
//       },
//       (error) => {
//         setUploading(false);
//         console.log(error);
//         blob.close();
//         return;
//       },
//       () => {
//         snapshot.snapshot.ref.getDownloadURL().then((url) => {
//           setUploading(false);
//           console.log('download url : ', url);
//           blob.close();
//           // return url;

//           // TRY, IMAGE를 올리면서 데이터도 같이 올리기
//           let saved = {
//             artist: artist,
//             title: title,
//             date: date,
//             medium: medium,
//             image: url,
//             // uid: user.uid
//           };

//           console.log('saved: ', saved);

//           // Create document by uid and create another collection which is artworks
//           db.collection('Test')
//             .add(saved)
//             .then(() => {
//               setTimeout(() => {}, 10000);
//               navigation.navigate('Cabinet');
//             })
//             .catch((error) => {
//               console.log(error);
//             });

//           // let testRef;
//           // if (user) {
//           //   testRef = db.collection('users').doc(user.uid)
//           //                   .collection('artworks')
//           // }

//           // 1
//           // testRef.add(saved).then(() => {setTimeout(() => {}, 10000)}).catch((error) => {console.log(error)})

//           // 2
//           // testRef
//           //   .add(saved)
//           //   .then(() => {
//           //     setTimeout(() => {}, 10000);
//           //     navigation.navigate('Artworks');
//           //   })
//           //   .catch((error) => {
//           //     console.log(error);
//           //   });
//         });
//       },
//     );
//   };

//   return (
//     <>
//       <View style={styles.container}>
//         <Image source={{ uri: image }} style={styles.imageBox} />
//         <Button
//           style={styles.button}
//           title="choose image"
//           onPress={handlePickImage}
//         />

//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Artist"
//             value={artist}
//             onChangeText={(text) => setArtist(text)}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Title"
//             value={title}
//             onChangeText={(text) => setTitle(text)}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Date"
//             value={date}
//             onChangeText={(text) => setDate(text)}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Medium"
//             value={medium}
//             onChangeText={(text) => setMedium(text)}
//             style={styles.input}
//           />
//         </View>

//         <TouchableOpacity style={styles.button}>
//           <Text>
//             {!uploading ? (
//               <Button title="Submit to Database" onPress={handleSubmit} />
//             ) : (
//               <ActivityIndicator size="large" color="#000" />
//             )}
//           </Text>
//         </TouchableOpacity>
//         {/* <TouchableOpacity
//           onPress={handleSubmit}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>Submit to Database</Text>
//           </TouchableOpacity> */}
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageBox: {
//     width: 200,
//     height: 200,
//   },
//   inputContainer: {
//     width: '80%',
//   },
//   input: {
//     backgroundColor: 'white',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   button: {
//     backgroundColor: 'lavender',
//     width: '60%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   buttonOutline: {
//     backgroundColor: 'white',
//     marginTop: 5,
//     borderColor: 'lavender',
//     borderWidth: 2,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// });

// export default AddArtwork;
