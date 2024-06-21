import React from 'react';
import Review from './Review';
import { FaSquareGithub } from "react-icons/fa6";
function App() {
  return (
    <main>
      <section className='container'>
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review/>
      </section>
    </main>
  )
}
export default App;
