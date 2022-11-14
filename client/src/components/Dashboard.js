import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard ({ setIsOpen }) {

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const [paladinLevel, setPaladinLevel] = useState(0);
  const [warriorLevel, setWarriorLevel] = useState(0);
  const [darkKnightLevel, setDarkKnightLevel] = useState(0);
  const [gunbreakerLevel, setGunbreakerLevel] = useState(0);
  const [whiteMageLevel, setWhiteMageLevel] = useState(0);
  const [scholarLevel, setScholarLevel] = useState(0);
  const [astrologianLevel, setAstrologianLevel] = useState(0);
  const [sageLevel, setSageLevel] = useState(0);
  const [monkLevel, setMonkLevel] = useState(0);
  const [dragoonLevel, setDragoonLevel] = useState(0);
  const [ninjaLevel, setNinjaLevel] = useState(0);
  const [samuraiLevel, setSamuraiLevel] = useState(0);
  const [reaperLevel, setReaperLevel] = useState(0);
  const [bardLevel, setBardLevel] = useState(0);
  const [machinistLevel, setMachinistLevel] = useState(0);
  const [dancerLevel, setDancerLevel] = useState(0);
  const [blackMageLevel, setBlackMageLevel] = useState(0);
  const [summonerLevel, setSummonerLevel] = useState(0);
  const [redMageLevel, setRedMageLevel] = useState(0);

  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
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
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
