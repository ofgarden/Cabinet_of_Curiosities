import { db, auth } from '../../firebase';

export const getArtwork = async () => {
  let user = auth.currentUser;
  // console.log('user: ', user.uid);
  let dbRef = db.collection('users').doc(user.uid).collection('artworks');
  let artworksFromDb = [];
  await dbRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      artworksFromDb.push(doc.data());
      // console.log('artworksFromDb', artworksFromDb);
    });
  });
  return artworksFromDb;
};
