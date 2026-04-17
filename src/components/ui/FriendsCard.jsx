import React from 'react'
import { Link } from 'react-router-dom';

const FriendsCard = ({friend}) => {
  return (
      <Link to={`/friend/${friend.id}`} className="card bg-white shadow-sm border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
          <figure className="px-10 pt-10">
              <img
                  src={`/${friend.picture}`}
                  alt={friend.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
              />
          </figure>

          <div className="card-body items-center text-center p-4">
              <h2 className="text-xl font-bold text-gray-800">{friend.name}</h2>
              <p className="text-gray-400 text-sm ">{friend.days_since_contact}</p>

              {/*tags logic*/}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {friend.tags?.map((tag, i) => (
                      <span key={i} className="bg-[#DCFCE7] text-[#166534] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                          {tag}
                      </span>
                  ))}
              </div>

              {/*status badge logic*/}
              <div className="card-actions">
                  <span className={`px-5 py-1.5 rounded-full text-xs font-semibold text-white ${friend.status === "Overdue"
                      ? "bg-[#EF4444]"

                      : friend.status === "Almost Due" ? "bg-[#F59E0B]"

                          : "bg-[#064E3B]"
                      }`}>
                      {friend.status}
                  </span>
              </div>
          </div>
      </Link>
  )
}

export default FriendsCard