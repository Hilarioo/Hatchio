import "../../css/Forms.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FirstTimeUser = () => {
  // about, and strengths
  const [about, setAbout] = useState("");
  const [strength, setStrength] = useState(["test", "l"]);
  const [strengths, setStrengths] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
  });

  // saves school name, degree, gpa, start year, end year
  const [education, setEducation] = useState({
    schoolName: "",
    degree: "",
    gpa: "",
    startYear: "",
    endYear: "",
  });
  // saves role, employement type, tools used, company, location, start year, and end year
  const [experience, setExperience] = useState({
    position: "",
    employementType: "fulltime",
    description: "",
    company: "",
    location: "",
    startYear: "",
    endYear: "",
  });

  // saves website, linkedin, and github URL links
  const [links, setLinks] = useState({ website: "", linkedin: "", github: "" });

  // saves role, employement type, tools used, company, location, start year, and end year
  const [project, setProject] = useState({
    position: "",
    employementType: "fulltime",
    description: "",
    company: "",
    location: "",
    startYear: "",
    endYear: "",
  });

  // Submits the Student Education to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    let str;
    // reformats the strengths for DB
    for (const strength in strengths)
      if (strengths[strength] !== "") str += strengths[strength] + ".";
    str.replace("undefined", ".");
    console.log("about: " + about);
    console.log("string: " + str);
    console.log("experience: " + experience);
    console.log("education:" + education);
  };
  return (
    <div style={{ maxWidth: 600 }}>
      <h1>Welcome!</h1>
      <h4>Let's start by filling-in some profile information.</h4>

      {/* About */}
      <Form>
        <Form.Label>About</Form.Label>
        <Form.Group>
          <Form.Control
            type='text'
            as='textarea'
            onChange={(e) => setAbout(e.target.value)}
          />
        </Form.Group>

        {/* Top stengths / Qualtiies */}
        <Form.Label>Top Strengths</Form.Label>
        <Form.Group>
          <ol>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) => setStrengths((strength[1] = e.target.value))}
                />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) =>
                    setStrengths({ ...strengths, two: e.target.value })
                  }
                />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) =>
                    setStrengths({ ...strengths, three: e.target.value })
                  }
                />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) =>
                    setStrengths({ ...strengths, four: e.target.value })
                  }
                />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) =>
                    setStrengths({ ...strengths, five: e.target.value })
                  }
                />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) =>
                    setStrengths({ ...strengths, six: e.target.value })
                  }
                />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) =>
                    setStrengths({ ...strengths, seven: e.target.value })
                  }
                />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) =>
                    setStrengths({ ...strengths, eight: e.target.value })
                  }
                />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) =>
                    setStrengths({ ...strengths, nine: e.target.value })
                  }
                />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control
                  type='text'
                  onChange={(e) =>
                    setStrengths({ ...strengths, ten: e.target.value })
                  }
                />
              </Form.Group>
            </li>
          </ol>
        </Form.Group>
        {/* Education */}
        <Form.Label>Education</Form.Label>
        {/* School Names */}
        <Form.Group>
          <Form.Label>School</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setEducation({ ...education, schoolName: e.target.value })
            }
          />
        </Form.Group>
        {/* Degree */}
        <Form.Group>
          <Form.Label>Degree</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setEducation({ ...education, degree: e.target.value })
            }
          />
        </Form.Group>
        {/* GPA */}
        <Form.Group>
          <Form.Label>GPA</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setEducation({ ...education, gpa: e.target.value })
            }
          />
        </Form.Group>
        {/* Start Year */}
        <Form.Group>
          <Form.Label>Start Year</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setEducation({ ...education, startYear: e.target.value })
            }
          />
        </Form.Group>
        {/* End Year */}
        <Form.Group>
          <Form.Label>End Year</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) =>
              setEducation({ ...education, endYear: e.target.value })
            }
          />
        </Form.Group>
        {/* Experience */}
        <Form.Label>Experience</Form.Label>
        <Form.Group>
          {/* Role / Position */}
          <Form.Group>
            <Form.Label>Role / Position</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, position: e.target.value })
              }
            />
          </Form.Group>

          {/* Employment Type */}
          <Form.Group>
            <Form.Label>Employement Type</Form.Label>
            <Form.Control
              as='select'
              onChange={(e) =>
                setExperience({
                  ...experience,
                  employementType: e.target.value,
                })
              }>
              <option name='fulltime'>Full Time</option>
              <option name='parttime'>Part Time</option>
              <option name='internship'>Internship</option>
              <option name='contract'>Contract</option>
              <option name='remote'>Remote</option>
            </Form.Control>
          </Form.Group>

          {/* Description */}
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              as='textarea'
              onChange={(e) =>
                setExperience({ ...experience, description: e.target.value })
              }
            />
          </Form.Group>

          {/* Company */}
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, company: e.target.value })
              }
            />
          </Form.Group>

          {/* Location */}
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, location: e.target.value })
              }
            />
          </Form.Group>

          {/* Start Year */}
          <Form.Group>
            <Form.Label>Start Year</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, startYear: e.target.value })
              }
            />
          </Form.Group>

          {/* End Year */}
          <Form.Group>
            <Form.Label>End Year</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, endYear: e.target.value })
              }
            />
          </Form.Group>
        </Form.Group>

        {/* Projects */}
        <Form.Label>Project</Form.Label>
        <Form.Group>
          <Form.Control type='text' as='textarea' />
        </Form.Group>

        {/* Links */}
        <Form.Label>Links</Form.Label>
        {/* website */}
        <Form.Group>
          <Form.Label>Website</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Personal Website URL'
            onChange={(e) => setLinks({ ...links, website: e.target.value })}
          />
        </Form.Group>
        {/* linkedin */}
        <Form.Group>
          <Form.Label>Linkedin</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Linkedin URL'
            onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
          />
        </Form.Group>
        {/* github */}
        <Form.Group>
          <Form.Label>Github</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Github URL'
            onChange={(e) => setLinks({ ...links, github: e.target.value })}
          />
        </Form.Group>

        <Button variant='primary' onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FirstTimeUser;
