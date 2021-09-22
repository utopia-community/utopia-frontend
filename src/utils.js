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
