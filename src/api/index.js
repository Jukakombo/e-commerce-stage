// https://certificate-management-system.onrender.com/
import axios from "axios";
const API = axios.create({
  baseURL: "https://stage-backend-mongodb.onrender.com",
});
// https://y2y.onrender.com
// process.env.REACT_APP_CLIENT_DATABASE

// contacts api call endpoints
export const fetchContacts = () => API.get("/contacts");
export const createContact = (contact) => API.post("/contacts", contact);
export const updateContact = (updatedContact, id) =>
  API.patch(`/contacts/${id}`, updatedContact);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);

// news api call endpoints
export const fetchNews = () => API.get("/news");
export const createNews = (news) => API.post("/news", news);
export const updateNews = (newsupdatedNews, id) =>
  API.patch(`/news/${id}`, newsupdatedNews);
export const deleteNews = (id) => API.delete(`/news/${id}`);

// comments api call endpoints
export const fetchComments = () => API.get("/comment");
export const createComment = (comment) => API.post("/comment", comment);
export const updateComment = (updatedComment, id) =>
  API.put(`/comment/${id}`, updatedComment);
export const deleteComment = (id) => API.delete(`/comment/${id}`);

// courses api call endpoints
export const fetchCourses = () => API.get("/course");
export const createCourse = (course) => API.post("/course", course);
export const updateCourse = (updatedCourse, id) =>
  API.put(`/course/${id}`, updatedCourse);
export const deleteCourse = (id) => API.delete(`/course/${id}`);

// Registration
export const fetchRegistrations = () => API.get("/registration");

export const creatRregistration = (registration) =>
  API.post("/registration", registration);

export const updateRegistration = (updatedregistration, id) =>
  API.put(`/registration/${id}`, updatedregistration);

export const deleteRegistration = (id) => API.delete(`/registration/${id}`);

// Ngo data
export const fetchNgoDatas = () => API.get("/ngodatas");

export const createNgoData = (NgoData) => API.post("/ngodatas", NgoData);

export const updateNgoData = (updatedNgoData, id) =>
  API.put(`/ngodatas/${id}`, updatedNgoData);

export const deleteNgoData = (id) => API.delete(`/ngodatas/${id}`);
