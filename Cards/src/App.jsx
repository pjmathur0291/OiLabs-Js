import React from 'react'
import './App.css'
import Card from './Card'
import Home from './Home'
import Login from './Login'
import Footer from './Footer'
import Signup from './Signup'
import Display from './Display'
import Moreinfo from './Moreinfo'
import ImageSlider from './ImageSlider'
import About from './About'
import DetailProduct from './DetailProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App({ id, Name, categories, image, song, productId, productName, productImage, productDetails, Compnay, price, previousPrice }) {
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

  const products = [
    {
      productId: 1,
      productName: 'Accostic Guitar',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/263be203fdb4831fcff24348c255c941/f/g/fgc_ta_bs_3.jpg',
      productDetails: 'Yamaha FGC -TA TransAcoustic cutaway guitars transport you to new creative spaces via immersive built-in reverb and chorus effects that actually resonate within the body of the instrument itself. Combining classic craftsmanship with revolutionary technology, the FGC-TA cutaway guitar will enable you to play and sound your best no matter where you are, and its cutaway design provides easy access to every note on the fretboard.',
      Company: 'Yamaha',
      price: 88000,
      previousPrice: 95000
    },
    {
      productId: 2,
      productName: 'Electric Guitar',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/p/a/pacs_12_black_front_0001.jpg',
      productDetails: 'The PACS+12 delivers exceptional sound and playability, and features a newly designed alder body, a slim C-shape maple neck with a rosewood fingerboard, Reflectone pickups co-developed with Rupert Neve Designs, and a choice of four vibrant finishes.',
      Company: 'Yamaha',
      price: 165000,
      previousPrice: 185000
    },
    {
      productId: 3,
      productName: 'Yamaha PSR-SX700 Digital Workstation',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/p/s/psr_sx700_-_4.png',
      productDetails: 'Take your performance to a whole new dimension with the PSR-SX. Replacing the hugely successful PSR-S series, the PSR-SX700 is the new generation in Digital Workstation sound, design and user experience. These instruments will inspire and intensify your musical performance and enjoyment.',
      Company: 'Yamaha',
      price: 102990,
      previousPrice: 120990
    },
    {
      productId: 4,
      productName: 'Yamaha DTX-402K Electronic Drum',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/d/t/dtx402k-1.jpg',
      productDetails: '  Yamaha DTX-402K Electronic Drum. Newly developed drum pads incorporating Yamahas unique floating system. KU100 kick unit reduces noise when playing the bass drum. Choke-able crash cymbal pad.',
      Company: 'Yamaha',
      price: 102990,
      previousPrice: 120990
    },
    {
      productId: 5,
      productName: 'Yamaha DM-305 Microphone',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/d/m/dm-305-1-10jan23.jpg',
      productDetails: 'Yamaha genuine microphone. The best directional characteristic for vocal (cardioid). Higher sound quality to highlight vocal sound. Yamaha original body design.',
      Company: 'Yamaha',
      price: 5400,
      previousPrice: 6500
    },
    {
      productId: 6,
      productName: 'Yamaha HS4 (White) Powered Studio Monitors',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/h/s/hs4-white-1.jpg',
      productDetails: 'HS4 Powered Studio Monitors High-quality compact studio monitors for the uncompromising creator. 2-way bass-reflex powered speaker with 4.5" cone woofer and 1" dome tweeter. 60 Hz - 22 kHz frequency response (-10 dB). 26 W + 26 W output power (Dynamic, RL=6 Ω). ROOM CONTROL and HIGH TRIM response controls',
      Company: 'Yamaha',
      price: 27200,
      previousPrice: 28000
    },
    {
      productId: 7,
      productName: 'Yamaha AG08 (Black) Live Streaming Mixer',
      productImage: 'https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/a/g/ag08-black-1.jpg',
      productDetails: 'AG08 Live Streaming Mixer An 8-channel live streaming mixer featuring two phantom power inputs for condenser mics, an integrated USB audio interface, voice changer and sampler.',
      Company: 'Yamaha',
      price: 61900,
      previousPrice: 63000
    }
  ]
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Card' element={<Card />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Footer' element={<Footer />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Display' element={<Display data={artist} />}></Route>
          <Route path='/Moreinfo/:id' element={<Moreinfo artist={artist} />}></Route>
          <Route path='/ImageSlider' element={<ImageSlider />}></Route>
          <Route path='/About' element={<About product={products} />}></Route>
          <Route path='/DetailProduct/:id' element={<DetailProduct productDetail={products} />}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App