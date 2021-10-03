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
  })
    .then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to log in");
      }
      return response.json();
    })
    .then((json) => {
      return getAccountInfo().then((user) => {
        // check user role
        const role = json.authority; 
        if (role === "ROLE_ADMIN") {
          return { ...user, role: "admin" };
        } else {
          return { ...user, role: "user" };
        }
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

const logoutUrl = `/logout`;
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

const announcementsUrl = `/announcements`;
export const getAnnouncements = () => {
  return fetch(announcementsUrl).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get announcements");
    }
    return response.json();
  });
};

const newAnnouncementUrl = `/announcements/new-announcement`;
export const newAnnouncement = (data) => {
  return fetch(newAnnouncementUrl, {
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

const allRequestsUrl = `/allRequests`;
export const getAllRequests = () => {
  return fetch(allRequestsUrl).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get requests");
    }
    return response.json();
  });
};

const setRequestStatusUrl = `/setRequestStatus`;
export const setRequestStatus = (data) => {
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

const getCurrentRequestsUrl = `/currentRequests`;
export const getCurrentRequests = () => {
  return fetch(getCurrentRequestsUrl, {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get requests");
    }
    return response.json();
  });
};

const deleteRequestUrl = `/deleteRequest`;
export const deleteRequest = (data) => {
  // takes in a list to support future mass update status
  return fetch(deleteRequestUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify([data]),
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to delete request");
    }
  });
};

// ----------New Request APIs---------------

const newRequestUrl = `/newRequest`;
export const newRequest = (data) => {
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
