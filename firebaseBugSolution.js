// Improved error handling in Firebase Authentication

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('User signed in:', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error signing in:', errorCode, errorMessage);
    // Handle specific error codes
    if (errorCode === 'auth/wrong-password') {
      alert('Incorrect password.');
    } else if (errorCode === 'auth/user-not-found') {
      alert('User not found.');
    } else {
      alert('An unexpected error occurred.');
    }
  });