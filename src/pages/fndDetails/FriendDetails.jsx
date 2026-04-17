import React from 'react'
import { useParams } from 'react-router'
import UseFriends from '../../hooks/UseFriends';

const FriendDetails = () => {
    const { id } = useParams();
    console.log(id,"prm");

    const { friends, loading } = UseFriends();

    // const expectedFriend = friends.find((friend) =>String( friend.id) ===id);
    const expectedFriend = friends.find((friend) =>friend.id == id);
    console.log(friends, 'friends from hook');
    console.log(expectedFriend, 'expected friend');

  return (
    <div>FriendDetails</div>
  )
}

export default FriendDetails