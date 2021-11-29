import React from "react";
const AppContext = React.createContext({ groups: null, tasks: null, dragging: null, setDragging: null });

export default AppContext;