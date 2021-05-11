/**
 * File: PostJobs.js
 * Purpose: Employers to Insert Job
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron Set API and Response Check
 */

import { useCookies } from "react-cookie";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
//API
import API_EMPLOYER_INSERT_JOB from "../../../../models/POST/Employers/insert_job";
//Custom Styling
const PostJobs = () => {
  //Init user
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Cur use
  const [newJob, setNewJob] = useState({
    Employer_ID: cookie.ID_OF_USER,
    organization_name: "Organization Name",
    position_title: "User Experience Designer | Backend Developer Etc",
    location: "California | New York | Etc",
    job_type: "0",
    experience_years: "0",
    experience_levels: "0",
    salary: "0",
    about_us: "About Us Description",
    the_opportunity: "Paycheck",
    task_responsibilites: "Work along w/ Developers",
    skillset: "Good Stamina",
    benefits: "401k Plan",
    landing_image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await API_EMPLOYER_INSERT_JOB(newJob);
    if (response === 200) {
      window.location.reload();
      console.log("success");
    } else {
      console.log("error");
    }
  };

  return (
    <div>
      <h4 style={{ textAlign: "center", marginTop: "2rem", fontWeight: "600" }}>
        Insert New Job
      </h4>
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
        {/* Compnany Name */}
        <Form.Group controlId=''>
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setNewJob({
                ...newJob,
                organization_name: e.target.value,
              })
            }
          />
        </Form.Group>
        {/* position title */}
        <Form.Group controlId=''>
          <Form.Label>Position Title</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setNewJob({
                ...newJob,
                position_title: e.target.value,
              })
            }
          />
        </Form.Group>

        {/* Location */}
        <Form.Group controlId=''>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setNewJob({
                ...newJob,
                location: e.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Row>
          <Col>
            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Job Type</Form.Label>
              <Form.Control
                as='select'
                defaultValue='Choose...'
                onChange={(e) =>
                  setNewJob({
                    ...newJob,
                    job_type: e.target.value,
                  })
                }>
                <option>Choose...</option>
                <option value='Full Time'>Full Time</option>
                <option value='Part Time'>Part Time</option>
                <option value='Internship'>Internship</option>
                <option value='Contract'>Contract</option>
                <option value='Remote'>Remote</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId=''>
              <Form.Label>Annual Salary</Form.Label>
              <Form.Control
                type='text'
                placeholder='$ 00.00'
                onChange={(e) =>
                  setNewJob({
                    ...newJob,
                    salary: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Experience Level</Form.Label>
              <Form.Control
                as='select'
                defaultValue='Choose...'
                onChange={(e) =>
                  setNewJob({
                    ...newJob,
                    experience_levels: e.target.value,
                  })
                }>
                <option>Choose...</option>
                <option value='Entry Leve'>Entry Level</option>
                <option value='Mid Level'>Mid Level</option>
                <option value='Senior Level'>Senior Level</option>
                <option value='Directors'>Directors</option>
                <option value='VP or Above'>VP or Above</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Experience Years</Form.Label>
              <Form.Control
                type='text'
                onChange={(e) =>
                  setNewJob({
                    ...newJob,
                    experience_years: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group controlId='' style={{ marginTop: "1rem" }}>
          <Form.Label>About us</Form.Label>
          <Form.Control
            type='text'
            as='textarea'
            onChange={(e) =>
              setNewJob({
                ...newJob,
                about_us: e.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Group controlId=''>
          <Form.Label>The Opportunity</Form.Label>
          <Form.Control
            type='text'
            as='textarea'
            onChange={(e) =>
              setNewJob({
                ...newJob,
                the_opportunity: e.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Group controlId=''>
          <Form.Label>Task Responsibility</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setNewJob({
                ...newJob,
                task_responsibilites: e.target.value,
              })
            }
          />
          <Form.Text className='text-muted'>
            Add a comma between responsibility
          </Form.Text>
        </Form.Group>

        <Form.Group controlId=''>
          <Form.Label>Skillset</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setNewJob({
                ...newJob,
                skillset: e.target.value,
              })
            }
          />
          <Form.Text className='text-muted'>
            Add a comma between skill
          </Form.Text>
        </Form.Group>

        <Form.Group controlId=''>
          <Form.Label>Benefits</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setNewJob({
                ...newJob,
                benefits: e.target.value,
              })
            }
          />
          <Form.Text className='text-muted'>
            Add a comma between benefits
          </Form.Text>
        </Form.Group>

        <Button variant='dark' type='submit'>
          Submit New Job
        </Button>
      </Form>
    </div>
  );
};

export default PostJobs;
