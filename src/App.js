import { useState } from "react";
import Button from "./Components/Button";
import FriendList from "./Components/FriendList";
import FormAddFriend from "./Components/FormAddFriends";
import FormSplitBill from "./Components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Amr",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Fred",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// function Button({ children, onClick }) {
//   return (
//     <button className='button' onClick={onClick}>
//       {children}
//     </button>
//   );
// }

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleDelete(id) {
    setFriends(friends.filter((friend) => friend.id !== id));
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    //Used optionalChaining because curFriend.id will become "null" so there won't be comparation in Friend Component for Closing
    // here we are passing the object
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }
  return (
    <>
      <h1>Split The Bill 💸</h1>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleSelection}
            onHandleDelete={handleDelete}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
            key={selectedFriend.id}
          />
        )}
      </div>
    </>
  );
}
