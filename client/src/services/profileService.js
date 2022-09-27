import { db, auth } from '../../firebase';

export const getProfile = async () => {
  const user = auth.currentUser;
  const dbRef = db.collection('users').doc(user.uid);
  return await dbRef
    .get()
    .then((documentSnapshot) => documentSnapshot.data())
    .catch((err) => err.message);
};
