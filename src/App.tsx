import "./globalStyles";

import React from "react";

import { ResumeEditor } from "./pages";

import { Routes, Route } from "react-router-dom";

export const App: React.FC = () => {
    
    return (
        <Routes>
            <Route 
            path="/"
            element={<ResumeEditor/>}/>

            <Route 
            path="/view"
            element={<ResumeEditor/>}/>
        </Routes>
    );
}

export default App;