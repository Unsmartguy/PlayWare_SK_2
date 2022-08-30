import Axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from "react";
import './Card.css';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Home_Select = () => {
    let {id} = useParams();
  

    const [gamesList, setGameList] = useState([]);
   

    useEffect(() => {
        Axios.get(`http://localhost:3001/games/`,{
            id:id
        }).then((response) => {
            setGameList(response.data);
        });

    }, []);

    const Select= (game_id) => {
       

        Axios.put("http://localhost:3001/games/Home_Select", {
    
                game_id: game_id,
                id:id// this id si sent to the backend to let them for which position this game is bwing selected
        
            }).then((response) => {
                if(response.data.success)
                    toast.success("Successfully published the game");
            });
    };



    return (

        <div className="container">
              
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>

          
                <h1 align="center">Select Games for Position {id}</h1>
                <hr></hr>
                <br></br>

                

    
                <div className='wrapper'>
                    {   
                        gamesList.map((game, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    <div className='image-container' >
                                        
                                    <img src={game.img_src} alt={game.name} height="250px" width="290px" border="0" />
                                    </div>
                            
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{game.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <b> <i> Genre: {game.genre} </i></b>
                                                <br></br>
                                                <b>Release date: </b> {moment(game.release_date).format("L")}
                                                <br></br>
                                                <b>Price : </b> {game.price} $
                                                <br></br>
                                                <b>Total sales : </b> {game.total_sales}
                                                <br></br>
                                                <b>wishlisted : </b> {game.wishlist}
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button onClick={ () => 
                                                        Select(game.id)} >  
                                            <b>
                                            Select
                                            </b>
                                        </button>
                                        
                                    </div>
                                    
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>

                               
                            );
                        })
                    }
                </div>

           
        </div>
        

    );
};

export default Home_Select;