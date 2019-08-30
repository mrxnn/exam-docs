import * as functions from 'firebase-functions';
import * as algoliasearch from 'algoliasearch';
const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;
const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex('posts');

export const addToIndex = functions.firestore.document('posts/{postId}')
  .onCreate((snapshot, context) => {
    const data = snapshot.data();
    const objectID = snapshot.id;
    return index.addObject({ ...data, objectID });
  });

export const updateIndex = functions.firestore.document('posts/{postId}')
  .onWrite(change => {
    const data = change.after.data();
    const objectID = change.after.id;
    return index.saveObject({ ...data, objectID });
  });

export const removeFromIndex = functions.firestore.document('posts/{postId}')
  .onDelete(snapshot => index.deleteObject(snapshot.id));