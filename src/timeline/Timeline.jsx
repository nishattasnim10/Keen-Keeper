import React, { useContext, useState } from 'react'; 
import { ContextTimeline } from '../context/TimelineContext';
import { BsChatLeftTextFill } from "react-icons/bs";
import { IoCall, IoVideocam } from "react-icons/io5";

const Timeline = () => {
  const { timelineData } = useContext(ContextTimeline);

  const [filter, setFilter] = useState('All');

  const today = new Date().toLocaleDateString('en-US',{
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const filteredData = timelineData.filter(item =>{
    if (filter === 'All')return true;
    return item.preferred_contact === filter;
  });

  return (

  <div className='bg-gray-50'>
    <div className="max-w-4xl mx-auto p-5 ">
        <h1 className=" mt-10 text-3xl font-bold text-slate-800 mb-5">Timeline</h1>

      {/* filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="select select-bordered select-sm w-full max-w-xs mb-6 text-gray-700 font-normal"
      >
        <option value="All">All Timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      <div className="flex flex-col gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((fnd, ind) => {
            let Icon = IoCall;
            let actionText = "Call";

            if (fnd.preferred_contact === "Text") {
              Icon = BsChatLeftTextFill;
              actionText = "Text";

            } else if (fnd.preferred_contact === "Video"){
              Icon = IoVideocam;
              actionText = "Video";

            } else{
              Icon = IoCall;
              actionText = "Call";
            }

            return(
              <div key={ind} className="card card-side bg-base-100 border border-gray-200 rounded-lg p-4 shadow-sm items-center">
                <div className="flex items-center justify-center text-2xl text-gray-400 mr-4">
                  <Icon />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-lg">
                    <span className="font-bold text-slate-700">{actionText}</span>
                    <span className="text-gray-500 ml-1">with {fnd.name}</span>
                  </p>
                  <p className="text-sm text-gray-400">{today}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className='w-1/3 mx-auto text-center boarder mb-25 '>
          <p className="text-gray-400 italic text-xl mt-15">No entries found for {filter}</p>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default Timeline;






// import { useContext } from 'react'

// import { ContextTimeline } from '../context/TimelineContext'


// const Timeline = () => {
  
//   const { timelineData, setTimelineData } = useContext(ContextTimeline);
//   console.log(timelineData, 'timeline data');
  

//   return (
//     <div>
//       {

//       timelineData.map((fnd,ind) => {
//         return <div key={ind}>

          


//         </div>

//       })
//        }
//     </div>
//   )
// }

// export default Timeline

