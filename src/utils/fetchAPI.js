const codes = [200, 201];

export async function post(url, data, upload = false, method = 'POST') {
  try {
    let token = localStorage.getItem("token");

    // Post to API
    let action = {
      body: upload ? data : JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + token,
      },
      method,
    };
    if (!upload) action.headers["Content-Type"] = "application/json";

    let res = await fetch(import.meta.env.VITE_API + "/" + url.replace(/^\/+/g, ""), action);

    console.log({ res });

    let ress = await res.json();
    if (codes.indexOf(res.status) < 0) throw ress;

    if (url == "login" && ress?.token) {
      localStorage.setItem("token", ress.token);
      localStorage.setItem("refresh_token", ress.refresh_token);
      delete ress.token;
      delete ress.refresh_token;
      return ress;
    }

    console.log("Result POST", ress);

    return ress;
  } catch (error) {
    // console.log("Error", error.message);
    console.error(error);
    throw error;
  }
}


export async function put(url, data, upload = false) {
  return post(url, data, upload, 'PUT')
}

export async function get(url, headers = {}) {
  let secure_endpoints = ["user"];
  try {
    let token = localStorage.getItem("token"); // localstorage
    if (token) headers = { ...headers, Authorization: "Bearer " + token };
    else if (secure_endpoints.indexOf(url) > -1) throw { status: 401, detail: "No token" };

    // Get from API
    let action = {
      headers,
      method: "GET",
    };
    let res = await fetch(import.meta.env.VITE_API + "/" + url.replace(/^\/+/g, ""), action);
    let status = res.status;

    let ress = await res.json();
    // console.log("Result GET", { ...ress, status });
    if (!res.ok) throw { ...ress, status };
    return ress;
  } catch (error) {
    // console.log("Error", error);
    if (url == "user" && (error.status == 401 || error.status == 403)) await signOut();
    if (error.detail == 'Invalid Authorisation') await signOut();
    throw error;
    // Sign out
    // if (error.status == 401 || error.message == "Unauthorized. Try login again.") await signOut();
  }
}

const signOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
};

export default { post, get, put };
