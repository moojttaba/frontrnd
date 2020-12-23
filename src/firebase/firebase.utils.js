import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1Klmha7h2e8hDteEBcpR3BIcVEzKE8ns",
  authDomain: "biareh-2a437.firebaseapp.com",
  databaseURL: "https://biareh-2a437.firebaseio.com",
  projectId: "biareh-2a437",
  storageBucket: "biareh-2a437.appspot.com",
  messagingSenderId: "505232216584",
  appId: "1:505232216584:web:7ecae9cbcd8b768491b7bd",
  measurementId: "G-XSB7XNYSXS",
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } else {
  }

  return userRef;
};

export const getUserCartRef = async (userId) => {
  const cartsRef = firestore.collection("carts").where("userId", "==", userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection("carts").doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.auth().onAuthStateChanged(function (user) {
  console.log(user);
});

export const auth = firebase.auth();
export const credential = firebase.auth.EmailAuthProvider.credential;

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

//////////////////////////////////////////////////////////////////////////////////////////////AUTH
/*
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } else {
  }

  return userRef;
};
*/

// export const MyUserDataRepo = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   } else {
//   }

//   return userRef;
// };

// MyUserDataRepo.prototype.merge = function (data1, data2) {
//   // TODO(you): How you implement this is specific to your application!
//   return {
//     ...data1,
//     ...data2,
//   };
// };

// MyUserDataRepo.prototype.set = function (user, data) {
//   // TODO(you): How you implement this is specific to your application!
// };

// MyUserDataRepo.prototype.delete = function (user) {
//   // TODO(you): How you implement this is specific to your application!
// };

// MyUserDataRepo.prototype.get = function (user) {
//   // TODO(you): How you implement this is specific to your application!
//   return {};
// };

// function getProviders() {
//   // [START auth_get_providers]
//   const googleProvider = new firebase.auth.GoogleAuthProvider();
//   const facebookProvider = new firebase.auth.FacebookAuthProvider();
//   const twitterProvider = new firebase.auth.TwitterAuthProvider();
//   const githubProvider = new firebase.auth.GithubAuthProvider();
//   // [END auth_get_providers]
// }

// function simpleLink(credential) {
//   // [START auth_simple_link]
//   auth.currentUser
//     .linkWithCredential(credential)
//     .then(function (usercred) {
//       const user = usercred.user;
//       console.log("Account linking success", user);
//     })
//     .catch(function (error) {
//       console.log("Account linking error", error);
//     });
//   // [END auth_simple_link]
// }

// export function anonymousLink(credential) {
//   // [START auth_anonymous_link]
//   auth.currentUser
//     .linkWithCredential(credential)
//     .then(function (usercred) {
//       const user = usercred.user;
//       console.log("Anonymous account successfully upgraded", user);
//     })
//     .catch(function (error) {
//       console.log("Error upgrading anonymous account", error);
//     });
//   // [END auth_anonymous_link]
// }

// export function linkWithPopup() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   // [START auth_link_with_popup]
//   auth.currentUser
//     .linkWithPopup(provider)
//     .then(function (result) {
//       // Accounts successfully linked.
//       const credential = result.credential;
//       const user = result.user;
//       // ...
//     })
//     .catch(function (error) {
//       // Handle Errors here.
//       // ...
//     });
//   // [END auth_link_with_popup]
// }

// export function linkWithRedirect() {
//   const provider = new firebase.auth.GoogleAuthProvider();

//   // [START auth_link_with_redirect]
//   auth.currentUser.linkWithRedirect(provider).then(/* ... */).catch(/* ... */);
//   // [END auth_link_with_redirect]

//   // [START auth_get_redirect_result]
//   auth
//     .getRedirectResult()
//     .then(function (result) {
//       if (result.credential) {
//         // Accounts successfully linked.
//         const credential = result.credential;
//         const user = result.user;
//         // ...
//       }
//     })
//     .catch(function (error) {
//       // Handle Errors here.
//       // ...
//     });
//   // [END auth_get_redirect_result]
// }

// export function mergeAccounts(newCredential) {
//   // [START auth_merge_accounts]
//   // The implementation of how you store your user data depends on your application

//   const repo = new MyUserDataRepo();
//   // Get reference to the currently signed-in user
//   const prevUser = auth.currentUser;
//   // Get the data which you will want to merge. This should be done now
//   // while the app is still signed in as this user.
//   const prevUserData = repo.get(prevUser);
//   // Delete the user's data now, we will restore it if the merge fails
//   repo.delete(prevUser);

//   // Sign in user with the account you want to link to
//   auth
//     .signInWithCredential(newCredential)
//     .then(function (result) {
//       console.log("Sign In Success", result);
//       const currentUser = result.user;
//       const currentUserData = repo.get(currentUser);

//       // Merge prevUser and currentUser data stored in Firebase.
//       // Note: How you handle this is specific to your application
//       const mergedData = repo.merge(prevUserData, currentUserData);

//       return prevUser
//         .linkWithCredential(result.credential)
//         .then(function (linkResult) {
//           // Sign in with the newly linked credential
//           return auth.signInWithCredential(linkResult.credential);
//         })
//         .then(function (signInResult) {
//           // Save the merged data to the new user
//           repo.set(signInResult.user, mergedData);
//         });
//     })
//     .catch(function (error) {
//       // If there are errors we want to undo the data merge/deletion
//       console.log("Sign In Error", error);
//       repo.set(prevUser, prevUserData);
//     });
//   // [END auth_merge_accounts]
// }

// export const makeEmailCredential = firebase.auth.EmailAuthProvider.credential;

// function unlink(providerId) {
//   const user = auth.currentUser;

//   // [START auth_unlink_provider]
//   user
//     .unlink(providerId)
//     .then(function () {
//       // Auth provider unlinked from account
//       // ...
//     })
//     .catch(function (error) {
//       // An error happened
//       // ...
//     });
//   // [END auth_unlink_provider]
// }
