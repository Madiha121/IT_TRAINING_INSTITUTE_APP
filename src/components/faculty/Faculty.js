import React from "react"
import Back from "../common/back/Back"
import FacultyCard from "./FacultyCard"
import "./faculty.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Faculty = () => {
  return (
    <>
      <Back title='Faculty' />
      <section className='faculty padding'>
        <div className='container grid'>
          <FacultyCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Faculty;