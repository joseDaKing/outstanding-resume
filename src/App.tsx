import "./globalStyles";

import React from "react";

import { ResumeEditor, View } from "./pages";

import { Routes, Route } from "react-router-dom";

export const App: React.FC = () => {
    
    return (
        <Routes>
            <Route 
            path="/"
            element={<ResumeEditor/>}/>

            <Route 
            path="/view"
            element={<View/>}/>
        </Routes>
    );
}

export default App;