import { message } from "antd";

const SERVER_ORIGIN = "http://localhost:8080";

//----------Login/Register Related APIs------------------

const loginUrl = `${SERVER_ORIGIN}/login`;
// SZ: the content type should be x-www-form-urlencoded.
export const login = (credential) => {
  const { username, password } = credential;
  var urlencoded = new URLSearchParams();
  urlencoded.append("username", username);
  urlencoded.append("password", password);
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlencoded,
    redirect: "follow",
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to log in");
    }
    // chaining fetch
    getAccountInfo().then((data) => {
      message.success(`Welcome back, ${data.firstName + " " + data.lastName}`);
    });
  });
};

const getAccountInfoUrl = `${SERVER_ORIGIN}/accountinfo`;
export const getAccountInfo = () => {
  return fetch(getAccountInfoUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get account information");
    }
    console.log("got fetched data from backend");
    console.log("fetched response is: ");
    console.log(response);

    var data = response.json();
    if (data === null) {
      message.warning("Please login");
    }
    return data;
  });
};

const registerUrl = `${SERVER_ORIGIN}/register`;

export const register = (data) => {
  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status !== 201) {
      // 201 represents account is successfully created.
      throw Error("Fail to register");
    }
  });
};

const logoutUrl = `${SERVER_ORIGIN}/logout`;

export const logout = (data) => {
  return fetch(logoutUrl, {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to logout");
    }
  });
};

//----------Announcement Related APIs------------------

export const getAnnouncements = () => {
  return fetch("/announcements").then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get announcements");
    }
    return response.json();
  });
};

export const newAnnouncement = (data) => {
  const newAnnoucementUrl = "/announcements/new-announcement";

  return fetch(newAnnoucementUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to create new announcement");
    }
  });
};

// ----------Requests APIs------------------

export const getAllRequests = () => {
  return fetch("/allRequests").then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get requests");
    }
    return response.json();
  });
};

export const setRequestStatus = (data) => {
  const setRequestStatusUrl = "/setRequestStatus";

  // takes in a list to support future mass update status
  return fetch(setRequestStatusUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([data]),
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to update request status");
    }
  });
};

export const getCurrentRequests = () => {
  return fetch("/currentRequests", {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get requests");
    }
    return response.json();
  });
};

// ----------New Request APIs---------------

export const newRequest = (data) => {
  const newRequestUrl = "/newRequest";

  return fetch(newRequestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to create new request");
    }
  });
};
