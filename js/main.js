
// SignUp
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
        signupForm.reset();

        // cerrar modal
        // $('#register').modal('hide');
        console.log('Usuario Registrado');
    })
});

// SingIn
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
        signupForm.reset();

        // cerrar modal
        // $('#login').modal('hide');
        console.log('Usuario Logueado');
    })
});

// Logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('Haz salido de tu cuenta');
    })
});

// Google Login
const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', e => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then(result => {
      console.log('Autenticacion correcta')
      // $('#login').modal('hide');
      signupForm.reset();
  })
  .catch(err => {
      console.log(err)
  })
})


// Posts
const postList = document.querySelector('.posts');
const setupPosts = data => {
    if(data.length){
        let html = '';
        data.forEach(doc => {
            const post = doc.data()
            const li = `<li class="list-group-item list-group-action">
            <h5>${post.title}</h5>
            <p>${post.description}</p>
            </li>
            `;
            html += li;
        });
        postList.innerHTML = html;
    }else{
        postList.innerHTML = '<h2 class="text-center">LOGIN TO SEE POSTS</h2>'
    }
}
// // events
// auth.onAuthStateChanged(user => {
//     if(user){
//         fs.collection('posts')
//             .get()
//             .then((snapshot) => {
//                 setupPosts(snapshot.docs);
//             })
//     }else{
//         setupPosts([]);
//     }
// });

