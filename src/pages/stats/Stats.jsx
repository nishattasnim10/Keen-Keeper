import React from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { ContextTimeline } from '../../context/TimelineContext';
import { useContext } from 'react';


const Stats = () => {
const { timelineData  } = useContext(ContextTimeline);

// filter call, vdo, txt
  const callCount = timelineData.filter(item =>item.preferred_contact ==='Call').length;
  const textCount = timelineData.filter(item =>item.preferred_contact ==='Text').length;
  const videoCount = timelineData.filter(item =>item.preferred_contact =='Video').length;

  const data = [
    { name: 'Call', value: callCount, fill: '#244D3F' },
    { name: 'Text', value: textCount, fill: '#7E35E1' },
    { name: 'Video', value: videoCount, fill: '#37A163' },

  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 ">

      <div className="w-full max-w-4xl mb-5 ">
        <h1 className="text-3xl font-bold text-[#1F2937]">Friendship Analytics</h1>
      </div>

      <div className="card w-full max-w-4xl bg-white shadow-sm border border-gray-100 rounded-lg p-5">

        <h2 className="text-lg font-semibold text-emerald-800 mb-8">By Interaction Type</h2>

       
        <div className="flex justify-center items-center w-full">
          <PieChart style={{ width: '80%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 }} responsive>
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </div>

      </div>
    </div>

  )
}

export default Stats


