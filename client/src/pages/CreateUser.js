import React, { useState } from 'react';
import '../components/RegisterCard' // registercard for register user ? AP assummed 

 
function User(props) {
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
      Create New User<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" ref="user"/>
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      <div>
        Company<br />
        <input type="text" {...company} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Website<br />
        <input type="text" {...website} autoComplete="new-password" />
      </div>
      <div>
        Location<br />
        <input type="text" {...location} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Status<br />
        <input type="text" {...status} autoComplete="new-password" required= "true"/>
      </div>
      <div>
        Skills<br />
        <input type="boolean" {...skills} autoComplete="new-password" required= "true"/>
      </div>
      <div style={{ marginTop: 10 }}>
        Bio<br />
        <input type="text" {...bio} autoComplete="new-password" />
      </div>
      <div>
        GithubUsername<br />
        <input type="text" {...githubusername} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Experience<br />
        <input type="text" {...title} autoComplete="new-password" required= "true"/>
        <input type="text" {...company} autoComplete="new-password" required= "true"/>
        <input type="text" {...location} autoComplete="new-password" />
        <input type="date" {...from} autoComplete="new-password" required= "true"/>
        <input type="date" {...to} autoComplete="new-password" />
        <input type="date" {...current} autoComplete="new-password" default="false" />
        <input type="text" {...description} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Education<br />
        <input type="text" {...school} autoComplete="new-password" required= "true"/>
        <input type="text" {...degree} autoComplete="new-password" required= "true"/>
        <input type="text" {...fieldofstudy} autoComplete="new-password" required= "true"/>
        <input type="date" {...from} autoComplete="new-password" />
        <input type="date" {...to} autoComplete="new-password" />
        <input type="date" {...current} autoComplete="new-password" default="false"/>
        <input type="text" {...description} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Social<br />
        <input type="text" {...youtube} autoComplete="new-password" />
        <input type="text" {...twitter} autoComplete="new-password" />
        <input type="text" {...facebook} autoComplete="new-password" />
        <input type="date" {...linkedin} autoComplete="new-password" />
        <input type="date" {...instagram} autoComplete="new-password" />
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