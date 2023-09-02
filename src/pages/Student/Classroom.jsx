import React from 'react'
import Cards from '../../components/Cards'

const Classroom = () => {
  return (
      <>
          <h1>Classroom</h1>
          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
              <Cards />
              
          </div>
      </>
  )
}

export default Classroom