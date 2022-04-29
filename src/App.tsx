import { 
    Editor,
    Fullscreen,
    PageNotFound
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
            element={<PageNotFound/>}/>
        </Routes>
    );
}

export default App;