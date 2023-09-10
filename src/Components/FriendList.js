import React from "react";
import Friend from "./Friend";

function FriendList({ friends, onSelection, selectedFriend, onHandleDelete }) {
  // const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
          onHandleDelete={onHandleDelete}
        />
      ))}
    </ul>
  );
}
export default FriendList;
