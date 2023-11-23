import React from 'react';
import { JobProfile, Responsibility } from './JobProfile';

import './Sidebar.css'

function getImageUrl(responsibility: string)
{
    return responsibility.toLocaleLowerCase();
}

const toPercentage = (value: number) => (100*(value)).toFixed(0) + '%'

function LevelBars({values}:{values:number[]}) {
    return <div className="level-container">
    <div className="level-bar">
        <div className="level-upper-bound" style={{ width: toPercentage(values[0]/7) }}></div>
        {values.length > 1 && <div className="level" style={{ width: toPercentage(values[1]/7) }}></div>}
    </div>
    <span className="level-number">{values[0]}{values.length > 1 && '/' + values[1]}</span>
</div>
}

function ResponsibilityItem({ responsibility, r }: { responsibility: string, r: Responsibility }) {  
    return <div className="responsibility">
        <div className="icon-circle">
            <img src={`/access-job-levels/icons/${getImageUrl(responsibility)}.svg`} alt={responsibility} />
        </div>
        <div className="responsibility-info">
            <span className="title">{responsibility}</span>
            <span className="subtitle">{r.description}</span>
            <LevelBars values={r.values} />
        </div>
    </div>;
}

interface SidebarProps {
    profile: JobProfile;
}

const Sidebar: React.FC<SidebarProps> = ({ profile }) => {
    return (<div className="sidebar">
        <div className="profile-picture">
            <img src="https://source.unsplash.com/random/900%C3%97700/?office+workers" alt="Architect" />
            <h2>{profile.title}</h2>
        </div>
        <div className="responsibility-list">
            <h3>Level of Responsibility</h3>
            {Object.keys(profile.level_of_responsibility).map(
                responsibility => <ResponsibilityItem key={responsibility} responsibility={responsibility} r={profile.level_of_responsibility[responsibility]} />
            )}
        </div>
    </div>);
};

export default Sidebar;
