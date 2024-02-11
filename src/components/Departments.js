import React from 'react'
import Hodmessage from './constants/Hodmessage'
import { hods,departmentslp } from './constants'
import DepartmentsLP from './constants/DepartmentsLP'

const Deparments = () => {
    
  return (
    <div> 
    <div>
      <DepartmentsLP dlp={departmentslp}/>
      <Hodmessage hod={hods[0]}/>

      {/* {hods.map((hod, index) => (
        <div key={index}>
          <Hodmessage hod={hod} />
          
        </div>
      ))} */}
    </div>
    
    </div>
  )
}

export default Deparments