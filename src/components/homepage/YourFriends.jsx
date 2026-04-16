import React, { useEffect, useState } from 'react';
import FriendsCard from '../ui/FriendsCard';

const YourFriends = () => {
    const [friends, setFriends]= useState([]);

    useEffect(() =>{
        const fetchData=async() =>{
            const res=await fetch('/data.json');
            const data=await res.json();
            setFriends(data);
        }
        fetchData();
    },[]);

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            {/* Title Section */}
            <div className='w-9/12 md:w-9/12 mx-auto mb-6'>
                <h1 className='text-2xl font-bold text-[#1F2937]'>Your Friends</h1>
            </div>

            {/* Grid Container - Responsible for the 4-column layout */}
            <div className='w-9/12 md:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {friends.map((friend, ind) => {
                    return(
                    <FriendsCard friend={friend} key={ind} />
                    );
      })};
            </div>
        </div>
    );
};

export default YourFriends;