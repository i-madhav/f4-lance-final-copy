import About from "./About"
import Feature from "./Feature"
import Header from "./Header"

import Testimonal from "./Testimonal"


function Home() {
  return (
    <>
      <Header />
      <div className="offer">
        <div className='moving-div'>
          <div className="blur-left"></div>
          <div className='move'>
            <div className="move-item"><h3>40%</h3></div>
            <div className="move-item"><h3>OFF</h3></div>
            <div className="move-item"><h3>For</h3></div>
            <div className="move-item"><h3>First</h3></div>
            <div className="move-item special"><h3>50</h3></div>
            <div className="move-item special"><h3>Members</h3></div>
          </div>
          <div className='move move2'>
            <div className="move-item"><h3>40%</h3></div>
            <div className="move-item"><h3>OFF</h3></div>
            <div className="move-item"><h3>For</h3></div>
            <div className="move-item"><h3>First</h3></div>
            <div className="move-item special"><h3>50</h3></div>
            <div className="move-item special"><h3>Members</h3></div>
          </div>
          <div className="blur-right"></div>
        </div>
       
      </div>


      <Feature />
      <About />
      <Testimonal />
    </>

  )
}

export default Home