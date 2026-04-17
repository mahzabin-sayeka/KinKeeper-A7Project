import { createContext, useState, useContext } from "react";

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addTimelineEntry = (entry) => {
    const newEntry = { ...entry, id: Date.now() }; 
    setTimeline((prev) => [newEntry, ...prev]); 
  };

  return (
    <FriendContext.Provider value={{ timeline, addTimelineEntry }}>
      {children}
    </FriendContext.Provider>
  );
};

export const useFriends = () => useContext(FriendContext);