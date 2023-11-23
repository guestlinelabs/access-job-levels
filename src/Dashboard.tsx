import React from 'react';
import Sidebar from './Sidebar';

import { JobProfile, RoleFocusScale } from './JobProfile';
import './Dashboard.css'
import { Link, useLocation } from 'react-router-dom';

interface DashboardProps {
    profile: JobProfile;
}

function Attributes({ profile }: { profile: JobProfile }) {
    return <section className="attributes-container">
        <div className="attributes-title">
            <span>Key Attributes</span>
        </div>
        <div className="attributes-list">
            <div className="attribute-item">
                <div className="icon-circle">
                    <img src="/icons/scope.svg" alt="Scope" />
                </div>
                <div className="attribute-text">
                    <strong>Scope</strong><br />
                    {profile.key_attributes["Scope"]}
                </div>
            </div>
            <div className="attribute-item">
                <div className="icon-circle">
                    <img src="/icons/drive.svg" alt="Drive" />
                </div>
                <div className="attribute-text">
                    <strong>Drive</strong><br />
                    {profile.key_attributes["Drive"]}
                </div>
            </div>
            <div className="attribute-item">
                <div className="icon-circle">
                    <img src="/icons/style.svg" alt="Style" />
                </div>
                <div className="attribute-text">
                    <strong>Style</strong><br />
                    {profile.key_attributes["Style"]}
                </div>
            </div>
            <div className="attribute-item">
                <div className="icon-circle">
                    <img src="/icons/communication.svg" alt="Communication" />
                </div>
                <div className="attribute-text">
                    <strong>Communication</strong><br />
                    {profile.key_attributes["Communication"]}
                </div>
            </div>
            <div className="attribute-item">
                <div className="icon-circle">
                    <img src="/icons/leadership.svg" alt="Leadership/Engagement" />
                </div>
                <div className="attribute-text">
                    <strong>Leadership/Engagement</strong><br />
                    {profile.key_attributes["Leadership/Engagement"]}
                </div>
            </div>
        </div>
    </section>
}

function Quote({ profile }: { profile: JobProfile }) {
    return <section className="quote-box">
        <span className="quote-mark top">“</span>
        <p className="quote-text">{profile.quote}</p>
        <span className="quote-mark bottom">”</span>
    </section>;
}

function FocusMeter({ focus }: { focus: RoleFocusScale }) {
    const toAngle = (i: number) => (-135 + i * 180).toFixed(0)
    return <div className="focus-item">
        <div className="meter">
            <div className="indicator" style={{ transform: `rotate(${toAngle(focus.value)}deg)` }}></div>
            <span className="vs">vs</span>
        </div>
        <div className="labels">
            <span className="left-label">{focus.scale.from}</span>
            <span className="right-label">{focus.scale.to}</span>
        </div>
    </div>
}

function Alignment({ profile }: { profile: JobProfile }) {
    return <section className="role-focus">
        <h2>Role Focus</h2>
        <div>
            <FocusMeter focus={profile.role_focuses[0]} />
            <FocusMeter focus={profile.role_focuses[1]} />
            <FocusMeter focus={profile.role_focuses[2]} />
        </div>
    </section>;
}

const Dashboard: React.FC<DashboardProps> = ({ profile }) => {
    const route = useLocation().pathname.substring(1);
    return <>
        <div className="fixed-forward-button">
            <Link to={`/${route}/details`} >
                <img src='/icons/arrow_forward.svg' alt="details" height="40px" />
            </Link>
        </div>
        <Sidebar profile={profile} />
        <div className="main-content">
            <div className="attributes-and-quote">
                <Attributes profile={profile} />
                <Quote profile={profile} />
            </div>
            <Alignment profile={profile} />
        </div>

    </>;
};

export default Dashboard;
