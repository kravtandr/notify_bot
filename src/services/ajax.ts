import http from "../http-common";

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

  return http.post("/upload", formData, {
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
  
    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  };

const getFiles = () : Promise<any> => {
  return http.get("/files");
};

const FileUploadService = {
  users,
  notify,
  getFiles,
};

export default FileUploadService;