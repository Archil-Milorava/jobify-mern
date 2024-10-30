import dayjs from "dayjs";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { Link, Form } from "react-router-dom";


const Job = ({ _id, position, company, jobLocation, jobStatus, createdAt, jobType }) => {

// console.log(createdAt);

const date = dayjs(createdAt).format("MMM Do, YYYY");



  return <Wrapper>
    <header>
      <div className="main-icon">{company.charAt(0)}</div>
      <div className="info">
        <h5>{position}</h5>
        <p>{company}</p>
      </div>
    </header>
    <div className="content">
      <div className="content-center">
        <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
        <JobInfo icon={<FaCalendarAlt />} text={date} />
        <JobInfo icon={<FaBriefcase />} text={jobType} />
        <div className={`status ${jobStatus}`}>
          {jobStatus}
        </div>
      </div>
      <footer className="actions">
        <Link className="btn edit-btn">
        Edit
        </Link>
        <Form>
        <button className="btn delete-btn">
          delete
        </button>
        </Form>
      </footer>
    </div>
  </Wrapper>;
};

export default Job;