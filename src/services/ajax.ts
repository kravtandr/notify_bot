// import http from "../http-common";

import axios from "axios";

const users = (file: File, onUploadProgress: any): Promise<any> => {
  let formData = new FormData();

  formData.append("all", file);
  formData.append("chatId", file);
  formData.append("name", file);
  formData.append("balancestart", file);
  formData.append("balanceend", file);
  formData.append("dateofbirthstart", file);
  formData.append("dateofbirthend", file);
  formData.append("placeofbirth", file);
  formData.append("createdatstart", file);
  formData.append("createdatend", file);
  formData.append("updatedatstart", file);
  formData.append("updatedatend", file);
  formData.append("borninday", file);
  formData.append("borninmonth", file);

  return axios.post("http://193.109.69.104:8080/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const notify = (file: File, onUploadProgress: any): Promise<any> => {
    let formData = new FormData();
  
    formData.append("file", file);
    formData.append("msg", "Test");
    formData.append("recipients", "398548347,398548347");
  
    return axios.post("http://193.109.69.104:8080/notify", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  };

const FileUploadService = {
  users,
  notify,
};

export default FileUploadService;