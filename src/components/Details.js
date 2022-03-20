import React from 'react';

function Details(props) {
    return (
        <div className='details'>

            <button className="goback" onClick={()=>window.location.reload()}>Home</button>

            <div className='flex-container'>

                <div className='left_content'>
                    <img src={props.files.i}/>
                </div>

                <div className='right_content'>

                            
                        <div className='title'>{props.files.tit}</div>
                        <div className='btns'><button className='hd'>HD</button> <button className='rating'>IMDB {props.files.rating} </button></div>
                        <div className='synopsis'>{props.files.synopsis}</div>    
                        <div className='year'>Release Year: <span>{props.files.yr}</span></div>   

                         <div className='genre'>Country/Genre  {props.files.genre.map((item,idx)=>{
                                    return(
                                        <span className='genre_item'>{item}</span>


                                    )
                                    
                                    
                                })} 
                        </div>

                        
                                
                              
                               
                </div>


            </div>

           
            
        </div>
    );
}

export default Details;