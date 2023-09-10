import React from "react";
import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend, onHandleDelete }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {friend.balance}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owes You {friend.balance}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
      <button className="delete" onClick={() => onHandleDelete(friend.id)}>
        Delete Friend
      </button>
    </li>
  );
}

export default Friend;
