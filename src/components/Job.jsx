import dayjs from "dayjs";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { Link, Form, useNavigation } from "react-router-dom";


const Job = ({ _id, position, company, jobLocation, jobStatus, createdAt, jobType }) => {

const navigation = useNavigation()
const isSubmitting = navigation.state === "submitting"
const date = dayjs(createdAt).format("MMM Do, YYYY");



  return <Wrapper style={{ opacity: isSubmitting ? ".5" : "1" }}>
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
        <Link to={`../edit-job/${_id}`} className="btn edit-btn">
        Edit
        </Link>
        <Form method="post" action={`../delete-job/${_id}`}>
        <button className="btn delete-btn" disabled={isSubmitting}>
          Delete
        </button>
        </Form>
      </footer>
    </div>
  </Wrapper>;
};

export default Job;
