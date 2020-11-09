import { FILTER } from "../constants";

 const filters = (nameFilter,payload,id,label) => ({type:FILTER,nameFilter,payload,id,label})
export default filters;
