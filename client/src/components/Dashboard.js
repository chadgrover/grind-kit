import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import LevelInput from "./LevelInput";

function Dashboard(props) {
  const { setIsOpen, inputRef } = props;
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");

  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setUid(data.uid);
    } catch (error) {
      console.error(error);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    setIsOpen(true);

    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      <div>
        <LevelInput inputRef={inputRef} uid={uid}/>
      </div>
    </div>

    // OLD
    
    // <div className="dashboard">
    //   <div className="dashboard__container">
    //     Logged in as
    //     <div>{name}</div>
    //     <div>{user?.email}</div>
    //     <button className="dashboard__btn" onClick={logout}>
    //       Logout
    //     </button>
    //   </div>
    // </div>
  );
}
export default Dashboard;
