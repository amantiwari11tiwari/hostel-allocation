import firebase from '../firebase/config'
const socialmedia=(provider)=>{ 
 return firebase.auth().signInWithPopup(provider).then((res)=>
{
    console.log(res.user.uid);
    return res.user;
})
.catch((er)=> {
    return er;
});
};
export default socialmedia;
