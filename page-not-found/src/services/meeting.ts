import Instance from "../utils/axios";

export const getMeetings = async () => {
    console.log("logi ---time", new Date())
    // const response = await Instance.get("/meetings");
    const response = await Instance.get("/todos");
    console.log("check -=-=-=", response);
    return response.data;
};
