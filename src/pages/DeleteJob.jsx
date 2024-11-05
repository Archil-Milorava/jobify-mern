import axios from "axios";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    await axios.delete(`http://localhost:3000/api/v1/jobs/${params.id}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
  }
  return redirect("../all-jobs");
};

const DeleteJob = () => {
  return null;
};

export default DeleteJob;
