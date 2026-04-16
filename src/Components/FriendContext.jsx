import { createContext, useState, useContext } from "react";

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([
    { id: 1, type: "Meetup", with: "Tom Baker", date: "March 29, 2026", icon: "🤝" },
    { id: 2, type: "Text", with: "Sarah Chen", date: "March 28, 2026", icon: "💬" }
  ]);

  const addTimelineEntry = (entry) => {
    setTimeline([entry, ...timeline]); 
  };

  return (
    <FriendContext.Provider value={{ timeline, addTimelineEntry }}>
      {children}
    </FriendContext.Provider>
  );
};

export const useFriends = () => useContext(FriendContext);