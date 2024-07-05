import React from 'react'
import './App.css'
import Card from './Card'
import Home from './Home'
import Login from './Login'
import Footer from './Footer'
import Signup from './Signup'
import Display from './Display'
import Moreinfo from './Moreinfo'
import RandomPassword from './RandomPassword'

// import arijitSingh from './assets/arijitSingh.jpg'
// import honeySingh from './assets/honeySingh.jpg'
// import shaan from './assets/Shaan.jpeg'
// import shankarMahadevan from './assets/shankarMahadevan.jpeg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App({ id, Name, categories, image, song }) {
  const artist = [
    {
      id: 1,
      Name: "Arijit Singh",
      categories: ["Romantic", "Hip-Hop"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-nPt6gJoHxFGlM5l1ucWM3YFbBwZKwn86w&s',
      song: '/public/song.mp3',
      about: 'Arijit Singh is one of the most loved and famous singers from India. In 2005, he was among the top six contestants on the reality singing show Fame Gurukul, and later, he went on to work as an assistant to music director Pritam. Arijit Singh, known for his deep voice that resounds with love tunes, is breaking new ground in the music industry by conjuring unforgettable notes for youthful hearts. On April 25, 1987, Arijit was born in Murshidabad, Jiaganj, West Bengal, India.'
    },
    {
      id: 2,
      Name: "Honey Singh",
      categories: ["Rap", "Hip-Hop"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36rw-ZUah_HnibZ1fTn8zEuGWFgk_QeUjoA&s',
      about: 'Hirdesh Singh known by his stage name Yo Yo Honey Singh or simply Honey Singh is a rapper, composer, pop vocalist, and actor. Honey Singh has an era of his songs where youth and children were extremely fond of him. His very song became a huge success in those years when no other singer could stand a chance in front of Honey Singh.',
      song: '/public/song2.mp3'
    },
    {
      id: 3,
      Name: "Shankar Mahadevan",
      categories: ["Romantic", "Fast Songs"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFtIJ3RcWVWCyvvvQCKuy27x5M9AzElHQIQ&s',
      about: 'Shankar Mahadevan is an award-winning musical composer, playback singer and part of the Shankarâ€“Ehsaanâ€“Loy composing trio team. He is also the founder of the Shankar Mahadevan Academy, which teaches Indian Music online to students worldwide. He can speak fluently in Marathi, Malayalam, Tamil, Urdu, Hindi and English. Some of his popular songs include Urvashi Take It Easy from Humse Hai Muqabla (1995), I Love You from Auzaar (1997) and Kay Sera Sera from Pukar (2000).',
      song: '/public/song3.mp3'
    },
    {
      id: 4,
      Name: "Shaan",
      categories: ["Romantic", "Slow Track"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5sOgcNedgLzn39sJxT--6qB3B8Oq-Bl64A&s',
      song: '/public/song1.mp3',
      about: 'From Pop to Hip Hop to Ballads, Shaan is a singer in many genres. With an ability to sing in Bengali, Kannada, Telugu and Tamil, he has done numerous hit songs for movies. Shaan has provided the vocals for many hit Kannada, Bengali, Telugu, Tamil and Urdu film songs. He is also a talented music composer, lyricist, music director and television presenter. He also helps the music directors on music and lyrics for whom he sings.'
    }
    
  ]

  // const artist = [
  //   {
  //     id: 1,
  //     Name: "Arijit Singh",
  //     categories: ["Romantic", "Hip-Hop"],
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-nPt6gJoHxFGlM5l1ucWM3YFbBwZKwn86w&s'
  //   },
  //   {
  //     id: 2,
  //     Name: "Honey Singh",
  //     categories: ["Rap", "Hip-Hop"],
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36rw-ZUah_HnibZ1fTn8zEuGWFgk_QeUjoA&s'
  //   },
  //   {
  //     id: 3,
  //     Name: "Shankar Mahadevan",
  //     categories: ["Romantic", "Fast Songs"],
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFtIJ3RcWVWCyvvvQCKuy27x5M9AzElHQIQ&s'
  //   },
  //   {
  //     id: 4,
  //     Name: "Shaan",
  //     categories: ["Romantic", "Slow Track"],
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5sOgcNedgLzn39sJxT--6qB3B8Oq-Bl64A&s'
  //   },
  //   {
  //     id: 5,
  //     Name: "Shaan",
  //     categories: ["Romantic", "Slow Track"],
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5sOgcNedgLzn39sJxT--6qB3B8Oq-Bl64A&s'
  //   },
  //   {
  //     id: 6,
  //     Name: "Shaan",
  //     categories: ["Romantic", "Slow Track"],
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5sOgcNedgLzn39sJxT--6qB3B8Oq-Bl64A&s'
  //   },
  //   {
  //     id: 7,
  //     Name: "Shaan",
  //     categories: ["Romantic", "Slow Track"],
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5sOgcNedgLzn39sJxT--6qB3B8Oq-Bl64A&s'
  //   }
  // ]
  return (
    <>
      <RandomPassword />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Card' element={<Card />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Footer' element={<Footer />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Display' element={<Display data={artist} />}></Route>
          <Route path='/Moreinfo/:id' element={<Moreinfo artist={artist} />}></Route>
        </Routes>
      </Router>

    </>
  )
}
export default App