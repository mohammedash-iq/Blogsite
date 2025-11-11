import useToken from "../store/authStore";

//importing token from the global variable
const token = useToken((state) => state.token);

async function apiCall(url, options, refreshCall = false) {
  const response = await fetch(url);

  if ((refreshCall == true) & (response.status === 401)) {
    return false;
  }
  if (response.status === 401) {
    apiCall(url, (refreshCall = true));
  }
}
