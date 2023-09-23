import React from 'react'
import { useTheme } from '../context/ThemeContext';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../src/assets/docs/Abhishek Maurya.pdf'
import { FaMoon } from 'react-icons/fa'
import { BsSun } from 'react-icons/bs'


const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? "dark" : "light"));
  };
  return (
    <>

      <div className='container-fluid home-container' id='home'>
        <div className='theme-btn' onClick={handleTheme}>
          {theme === 'light' ? (<FaMoon size={30} />) : (<BsSun size={'30px'} />)}
        </div>
        <div className='container home-content'>
          <h2>Hi I'm Abhishek</h2>
          <h1>
            <Typewriter
              options={{
                strings: ['FullStack Developer!',
                  'Mern Stack Developer!',
                  'React Native Developer!',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className='home-buttons'>
            <button className='btn btn-hire'>Hire Me</button>
            <a className='btn btn-cv' href={Resume} download="Abhishek Maurya.pdf">My Resume</a>
          </div>

        </div>
      </div >

    </>
  )
}

export default Home