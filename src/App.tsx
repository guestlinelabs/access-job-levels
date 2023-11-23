import TableOfContents from './TableOfContents';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useJobProfile } from './useJobProfile';

import './App.css'
import Dashboard from './Dashboard';

function Profile() {
  const route = useLocation();
  const jobProfile = useJobProfile(`/roles${route.pathname}.md`);

  return <>
    {jobProfile.loading && <div>Loading</div>}
    {!jobProfile.loading && !jobProfile.error && jobProfile.data && <Dashboard profile={jobProfile.data} />}
    {jobProfile.error && <div>Error {JSON.stringify(jobProfile.error)}</div>}
  </>;
}

function Details() {
  const location = useLocation();
  const route = location.pathname.split('/');
  const jobProfile = useJobProfile(`/roles/${route[1]}.md`);

  return <>
    <div className="fixed-back-button">
      <Link to={`/${route[1]}`} >
        <img src='/icons/arrow_back.svg' alt="details" height="40px" />
      </Link>
    </div>
    {jobProfile.loading && <div>Loading</div>}
    {!jobProfile.loading && !jobProfile.error && jobProfile.data && <><section className="core-competencies">
      <h2>Core Competencies</h2>
      <ul>
        {jobProfile.data.core_competencies.map((c, i) => <li key={i + 'cc'}>{c}</li>)}
      </ul>
    </section>
      <section className="key-responsibilities">
        <table>
          <th>Key Responsibilities</th>
          {jobProfile.data.core_competencies.map((c, i) => <tr key={i + 'kr'}><td >{c}</td></tr>)}
        </table>
      </section></>}
    {jobProfile.error && <div>Error {location.pathname} {route[1]} {JSON.stringify(jobProfile.error)}</div>}
  </>;
}

function App() {
  return (<>
    <header>
      <div className="top-row">
        <img src='/logo.svg' alt="Company Logo" />
        <Link to="/"><img src='/icons/home.svg' alt="Home Icon" height="48px" /></Link>
      </div>
    </header>
    <main>
      <Routes>
        <Route path="/:profile" element={<Profile />} />
        <Route path="/:profile/details" element={<Details />} />
        <Route path="/" element={<TableOfContents />} />
      </Routes>
    </main>
  </>);
}

export default App;
