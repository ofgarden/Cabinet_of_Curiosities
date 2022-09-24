import { db, auth } from '../../firebase';

export const getArtwork = async () => {
  let user = auth.currentUser;
  // console.log('user: ', user.uid);
  let Test = db.collection('Test').doc(user.uid).collection('artworks');
  let artworksFromDb = [];
  await Test.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      artworksFromDb.push(doc.data());
      // console.log('artworksFromDb', artworksFromDb);
    });
  });
  return artworksFromDb;
};
