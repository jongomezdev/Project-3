import React, { useState } from 'react';
import '../components/RegisterCard' // registercard for register user ? AP assummed 

 
function createUser(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/');
  }
 
  return (
    <div>
      Create New User<br /><br/>
      <div>
        Company<br /> 
         {/* Should we turn this into current Company or Employer ?  */}
        <input type="text" {...company} autoComplete="new-password" label="currentCompany" />
      </div>
      <div style={{ marginTop: 10 }}>
        Website<br />
        <input type="text" {...website} autoComplete="new-password" label="Website" />
      </div>
      <div>
        Location<br />
        <input type="text" {...location} autoComplete="new-password" label="Location" />
      </div>
      <div style={{ marginTop: 10 }}>
        Status<br />
        <input type="text" {...status} autoComplete="new-password" label="Status" required= "true"/>
      </div>
      <div>
        Skills<br />
        <input type="boolean" {...skills} autoComplete="new-password" label="Skills" required= "true"/>
      </div>
      <div style={{ marginTop: 10 }}>
        Bio<br />
        <input type="text" {...bio} label="Bio" autoComplete="new-password" />
      </div>
      <div>
        GithubUsername<br />
        <input type="text" {...githubusername} label="GithubUsername" autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Experience<br />
        <input type="text" {...title} autoComplete="new-password" label="Title" required= "true"/>
        <input type="text" {...company} autoComplete="new-password" label="Company" required= "true"/>
        <input type="text" {...location} autoComplete="new-password" label="Location" />
        <input type="date" {...from} autoComplete="new-password" label="From:" required= "true"/>
        <input type="date" {...to} autoComplete="new-password" label="To:" />
        <input type="date" {...current} autoComplete="new-password" label="Current" default="false" />
        <input type="text" {...description} autoComplete="new-password" label="Description" />
      </div>
      <div style={{ marginTop: 10 }}>
        Education<br />
        <input type="text" {...school} autoComplete="new-password" label="School" required= "true"/>
        <input type="text" {...degree} autoComplete="new-password" label="Degree" required= "true"/>
        <input type="text" {...fieldofstudy} autoComplete="new-password" label="Field of Study" required= "true"/>
        <input type="date" {...from} autoComplete="new-password" label="From:" />
        <input type="date" {...to} autoComplete="new-password" label="To:" />
        <input type="date" {...current} autoComplete="new-password" label="Current" default="false"/>
        <input type="text" {...description} autoComplete="new-password" label="Description" />
      </div>
      <div style={{ marginTop: 10 }}>
        Social<br />
        <input type="text" {...youtube} autoComplete="new-password" label="Youtube" />
        <input type="text" {...twitter} autoComplete="new-password" label="Twitter" />
        <input type="text" {...facebook} autoComplete="new-password" label="Facebook" />
        <input type="text" {...linkedin} autoComplete="new-password" label="LinkedIn" />
        <input type="text" {...instagram} autoComplete="new-password" label="Instagram" />
      </div>
      <div style={{ marginTop: 10 }}>
        Date<br />
        <input type="date" {...Date.now} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}