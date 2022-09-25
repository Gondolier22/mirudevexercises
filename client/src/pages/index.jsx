import React, { useState } from "react";
import ExercisesRoutes from '../routes/exercises';

import './indexStyles.css'

const StartView = () => {
    const [currentTab, setCurrentTab] = useState('exercises');

    const exercisesRoutes = ExercisesRoutes.map(r => <a className="item" href={`/exercises/${r.path}`}>{r.name}</a>)

    const onClickTabHandler = (e, tab) => {
        e.preventDefault();
        setCurrentTab(tab)
    }

    return (
        <div className="container">
            <h1>Ejercicios y aplicaciones de mirudev</h1>
            <div className="tabs">
                <a href="#" className={`item ${currentTab === 'exercises' ? 'active' : ''}`} onClick={(e) => onClickTabHandler(e, "exercises")}>Ejercicios</a>
                <a href="#" className={`item ${currentTab === 'apps' ? 'active' : ''}`} onClick={(e) => onClickTabHandler(e, "apps")}>Apps</a>
            </div>
            <div className="content">
                {currentTab === 'exercises' && exercisesRoutes}
            </div>
        </div>
    )
}

export default StartView;