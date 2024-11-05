import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllJobs = async (req, res) => {

  
  const jobs = await Job.find({createdBy: req.user.userId});
  res.status(StatusCodes.OK).json({
    status: "success",
    jobs,
  });
};

export const getJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id);

    res.status(StatusCodes.OK).json({
      job,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createJob = async (req, res) => {

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: "success",
    job,
  });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({
    status: "job successfully deleted",
  });
};

export const udpdateJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({
    msg: "job successfully updated",
  });
};
