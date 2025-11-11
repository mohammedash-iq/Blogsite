import useToken from "../store/authStore";

async function loginService(email, password) {
  if (!email | !password) {
    return { message: "Please fill the Credentials", result: false };
  }
  const response =await fetch("loginurl");
  response=JSON.parse(response)
  //set the globbal state token to the recieved token
  //global.token=response.accesstoken;
  return {message:"Logged in successfully",result:true}
}

async function signInService(username,email,password) {
    if(!username|!email|!password){
        return{ message:"Please provide all the credentials",result:false}
    }
    const response =await fetch('signinUrl')
    //
      //set the globbal state token to the recieved token
  //global.token=response.accesstoken;
  return {message:"Registered in successfully",result:true}
}