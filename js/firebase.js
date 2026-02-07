// Firebase via compat SDK loaded by <script> tags (works well on GitHub Pages)
const cfg = window.firebaseConfig;
if (!cfg) {
  throw new Error("firebaseConfig mancante: controlla js/firebase-config-global.js");
}

// Avoid double init
let app;
try {
  app = firebase.app();
} catch (_) {
  app = firebase.initializeApp(cfg);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

export const fb = {
  onAuthStateChanged: (authInst, cb) => authInst.onAuthStateChanged(cb),
  signInWithEmailAndPassword: (authInst, email, pass) => authInst.signInWithEmailAndPassword(email, pass),
  createUserWithEmailAndPassword: (authInst, email, pass) => authInst.createUserWithEmailAndPassword(email, pass),
  signOut: (authInst) => authInst.signOut(),

  // Firestore helpers (compat)
  doc: (dbInst, ...path) => dbInst.doc(path.join("/")),
  collection: (dbInst, path) => dbInst.collection(path),
  getDoc: async (docRef) => {
    const snap = await docRef.get();
    return {
      exists: () => snap.exists,
      data: () => snap.data(),
    };
  },
  setDoc: (docRef, data, options) => docRef.set(data, options),
  updateDoc: (docRef, data) => docRef.update(data),
  deleteDoc: (docRef) => docRef.delete(),
  addDoc: (colRef, data) => colRef.add(data),

  // query/orderBy/getDocs wrapper (simple)
  orderBy: (field) => ({ __type: "orderBy", field }),
  query: (colRef, orderByObj) => ({ colRef, orderByObj }),
  getDocs: async (q) => {
    const { colRef, orderByObj } = q || {};
    let ref = colRef || q; // allow passing collection directly
    if (orderByObj && orderByObj.__type === "orderBy") {
      ref = ref.orderBy(orderByObj.field);
    }
    const snap = await ref.get();
    return {
      empty: snap.empty,
      forEach: (fn) => snap.forEach((d) => fn({ id: d.id, data: () => d.data() })),
      docs: snap.docs.map(d => ({ id: d.id, data: () => d.data() }))
    };
  },
};
