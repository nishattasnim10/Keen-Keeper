import React, { useState } from 'react'
import { ContextTimeline } from './TimelineContext';




const TimelineProvider = ({children}) => {

  const [timelineData, setTimelineData] = useState([])
  
  const data = {
    timelineData,
    setTimelineData,

  }
  
  return (
    
    <ContextTimeline.Provider value={data}>{children}</ContextTimeline.Provider>
  )
}

export default TimelineProvider