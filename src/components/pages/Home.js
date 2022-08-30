import React, { useContext, useEffect, useState  } from "react";
import { AuthContext } from "../../helpers/AuthContext";
import "./Hover.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";



const Home = () => {
    let navigate = useNavigate();
    const {authState} = useContext(AuthContext);


    

    useEffect(() => {
       console.log(authState);
    }, []);

   
 const [game1, setGame1] = useState();
 const [game2, setGame2] = useState();
 const [game3, setGame3] = useState();
 const [game4, setGame4] = useState();
 const [game5, setGame5] = useState();

   

    useEffect(() => {
        Axios.get(`http://localhost:3001/games/`,{
            id:1
        }).then((response) => {
            setGame1(response.data);
        });
        Axios.get(`http://localhost:3001/games/`,{
            id:2
        }).then((response) => {
            setGame1(response.data);
        });
        Axios.get(`http://localhost:3001/games/`,{
            id:3
        }).then((response) => {
            setGame1(response.data);
        });
        Axios.get(`http://localhost:3001/games/`,{
            id:4
        }).then((response) => {
            setGame1(response.data);
        });
        Axios.get(`http://localhost:3001/games/`,{
            id:5
        }).then((response) => {
            setGame1(response.data);
        });

    }, []);


    return (
        

        <div className="container-fluid">
    
            <div className=" py-4">  

               <div className=" row">


               <div className="col-lg-1"></div>


               <div className="col-lg-11 rounded p-3 p-3">

                    <div className="row mb-3">
                            <div className="col-lg-6 hover-container-b bg-white border shadow rounded p-3 mx-4 " onClick={() => { navigate(`/Buy/${game1.id}`);}}> <img className="container-fluid" src={game1.img_src}  border="0" /></div> 
                            <div className="col-lg-3"> 
                                <div className="row border hover-container bg-white shadow rounded p-3 mb-3" onClick={() => { navigate(`/Buy/${game2.id}`);}}><img className="container-fluid"  src={game2.img_src}  border="0" /></div>
                                <div className="row border hover-container bg-white shadow rounded p-3 " onClick={() => { navigate(`/Buy/${game3.id}`);}}><img className="container-fluid" src={game3.img_src}  border="0" /></div>   
                            </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 mx-3">
                            <div className="row">
                                <div className="col border hover-container bg-white shadow rounded p-3 mx-2">   
                                <img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" />   
                                </div>
                                <div className="col "> 
                                    <div className="row mb-2 border hover-container bg-white shadow rounded p-3 mb-3" onClick={() => { navigate(`/Subscription`);}}><img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /> </div> 
                                    <div className="row border hover-container bg-white shadow rounded p-3"  onClick={() => { navigate(`/Deals`);}}><img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /> </div> 
                                </div>  
                            </div>
                        </div>
                        <div className="col-lg-3 border hover-container bg-white shadow rounded p-3 mx-1" onClick={() => { navigate(`/Buy/${game4.id}`);}}><img className="container-fluid" src={game4.img_src} border="0" /></div> 
                        <div className="col-lg-3  border hover-container bg-white shadow rounded p-3 mx-1" onClick={() => { navigate(`/Buy/${game5.id}`);}}><img className="container-fluid" src={game5.img_src}  border="0" /></div>  
                    </div>


                    </div>




               </div>
            </div>
        </div>

    );
};

export default Home;