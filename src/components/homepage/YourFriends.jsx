import React, { useEffect, useState } from 'react';
import FriendsCard from '../ui/FriendsCard';
import { PropagateLoader } from 'react-spinners';
import UseFriends from '../../hooks/UseFriends';

const YourFriends = () => {
    const { friends, loading } = UseFriends();
    console.log(friends, 'friends from hook');

    // const [friends, setFriends]= useState([]);
    // // loading
    // const [loading, setLoading] = useState(true);

    // useEffect(() =>{
    //     const fetchData=async() =>{
    //         const res=await fetch('/data.json');
    //         const data=await res.json();
    //         console.log(data,'data');

    //         setTimeout(() => {

    //             setFriends(data);
    //             setLoading(false);
            
                
    //         },2000);
    //     };
            
    //     fetchData();
    // },[]);
     
    // console.log(friends,'friends');
    // console.log(loading,'loading');

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            {/*title section */}
            <div className='w-9/12 md:w-9/12 mx-auto mb-6'>
                <h1 className='text-2xl font-bold text-[#1F2937]'>Your Friends</h1>
            </div>

            {/* loading */}
            {loading ? (
                <div className='flex justify-center items-center h-20'>
                    <PropagateLoader color='#166534'/>
                </div>
            ) : (

            
            <div className='w-9/12 md:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {friends.map((friend, ind) => {
                    return(
                    <FriendsCard friend={friend} key={ind} />
                    );
          })};
            </div>
            )};
        </div>
    );
};

export default YourFriends;