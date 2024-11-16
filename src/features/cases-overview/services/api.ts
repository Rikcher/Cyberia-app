import axios from "../../../services/axios";

export const getProjectCategories = async () => {
    return (await axios.get("/project-categories")).data
}

export const getProject = async () => {
    return (await axios.get("/projects")).data
}