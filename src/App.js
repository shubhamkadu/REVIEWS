import React from 'react';  //importing react
import Reviews from './Reviews';  //importing review component
function App() {
  return (
    <main>
     <section className={'container'}>
       <div className={'title'}>
         <h2>our reviews</h2>               
         <div className='underline'></div>
       </div>
       {/* returning review component */}
       <Reviews/>
     </section>
    </main>
  )
}

export default App;
