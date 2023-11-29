import React from 'react'

export default function Card() {
  return (
      
    <div>
        <div>
            <div className='card mt-3' style={{"width":"18rem","maxHeight":"360px"}}>
                <img src="https://media.istockphoto.com/id/473582820/photo/nepali-thali-meal-set-with-mutton-curry.jpg?s=612x612&w=0&k=20&c=57AIVUdYVCe09dINwzr_fkG0TuqpO_JMeJHqEM8bT1A=" className='card-img-top' alt="..."/>
                <div className='card-body'>
                    <h5 className='card-title'>NewaFood Items</h5>
                    <p className='card-text'>This is imp textt.</p>
                    <div className='container w-100' >
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6),(e,i) =>{
                                return(
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                           
                                    <option value="half">Half</option>
                                    <option value="full">Full</option>
                                
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
