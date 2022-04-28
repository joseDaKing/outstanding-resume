import { 
    Editor,
    Fullscreen
}
from "pages";

import { Route, Routes } from "react-router-dom";


const App = () => {
    
    return (
        <Routes>
            <Route
            path="/"
            element={<Editor/>}/>

            <Route
            path="preview"
            element={<Fullscreen/>}/>

            <Route
            path="*"
            element={
                <div>
                    Page Not Found
                </div>
            }/>
        </Routes>
    );
}

export default App;