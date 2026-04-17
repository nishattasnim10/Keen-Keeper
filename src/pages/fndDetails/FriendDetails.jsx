import React from 'react'
import { useParams } from 'react-router'
import UseFriends from '../../hooks/UseFriends';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";
import { PropagateLoader } from 'react-spinners';


const FriendDetails = () => {
    const { id } = useParams();
    console.log(id,"prm");

    const { friends, loading } = UseFriends();

    // const expectedFriend = friends.find((friend) =>String( friend.id) ===id);
    const expectedFriend = friends.find((friend) =>friend.id == id);
    console.log(friends, 'friends from hook');
    console.log(expectedFriend, 'expected friend');

    // loading

    if (loading) {
        return (
            <div className="min-h-screen flex  justify-center items-center ">   
                <PropagateLoader color='#166534' />   
            </div>
        );
    }

    return (
        <div className="bg-[#F8FAFC] min-h-screen p-4 md:p-10 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/*Profile & Actions */}
                <div className="lg:col-span-4 space-y-3">
                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm text-center border border-gray-100">
                        <img
                            src={expectedFriend?.picture}
                            alt={expectedFriend?.name}
                            className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2 border-gray-100"
                        />
                        <h2 className="text-2xl font-bold text-[#1E293B] mb-2">{expectedFriend?.name}</h2>

                        <div className="flex flex-col items-center gap-2 mb-4">
                            <span className={`px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase ${expectedFriend?.status === "Overdue" ? "bg-[#EF4444]" : "bg-[#064E3B]"
                                }`}>
                                {expectedFriend?.status}
                            </span>
                            <span className="bg-[#DCFCE7] text-[#166534] text-[10px] font-bold px-4 py-1 rounded-full uppercase">
                                {expectedFriend?.tags[0]}
                            </span>
                        </div>

                        <p className="text-[#64748B] italic mb-1 text-sm">"{expectedFriend?.bio}"</p>
                        <p className="text-[#94A3B8] text-xs uppercase tracking-wider">Preferred: {expectedFriend?.preferred_contact}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                        <button className="w-full bg-white hover:bg-gray-50 text-[#475569] font-semibold py-3 rounded-xl border border-gray-100 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                            <RiNotificationSnoozeLine className="text-xl" />
                            <span>Snooze 2 Weeks</span>
                        </button>
                        <button className="w-full bg-white hover:bg-gray-50 text-[#475569] font-semibold py-3 rounded-xl border border-gray-100 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                            <LuArchive className="text-xl" />
                            <span>Archive</span>
                        </button>
                        <button className="w-full bg-white hover:bg-red-50 text-[#EF4444] font-semibold py-3 rounded-xl border border-gray-100 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                            <RiDeleteBinLine color='red' className="text-xl" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>

                {/*Stats & Goals */}
                <div className="lg:col-span-8 space-y-6">

                    {/*Stats*/}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-2xl font-bold text-[#1E293B]">{expectedFriend?.days_since_contact}</h3>
                            <p className="text-[#64748B] text-sm mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-2xl font-bold text-[#1E293B]">{expectedFriend?.goal}</h3>
                            <p className="text-[#64748B] text-sm mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-2xl font-bold text-[#064E3B]">{expectedFriend?.next_due_date}</h3>
                            <p className="text-[#64748B] text-sm mt-1">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-[#1E293B] mb-1">Relationship Goal</h3>
                            <p className="text-[#64748B]">Connect every <span className="font-bold text-[#1E293B]">{expectedFriend?.goal} days</span></p>
                        </div>
                        <button className="bg-gray-100 hover:bg-gray-200 text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-gray-200 cursor-pointer">
                            Edit
                        </button>
                    </div>

                    {/* Quick Check-In Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-[#1E293B] mb-6">Quick Check-In</h3>

                        {/* buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                            <button className="flex flex-col items-center justify-center p-6 bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-2xl border border-gray-200 transition-all  text-[#475569] cursor-pointer">
                                <BiPhoneCall color='black' size={30} />Call
                            </button>
                            <button className="flex flex-col items-center justify-center p-6 bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-2xl border border-gray-200 transition-all  text-[#475569] cursor-pointer">
                                <BiChat color='black' size={30} />Text
                            </button>
                            <button className="flex flex-col items-center justify-center p-6 bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-2xl border border-gray-200 transition-all  text-[#475569] cursor-pointer">
                                <BiVideo color='black' size={30} />Video
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FriendDetails