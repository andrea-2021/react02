import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import MyCards from "./components/MyCards"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)
  const dogs = [
    {
      id: 1,
      nombre: "Cloe",
      descripcion: "Cloe es una perrita cariñosa y juguetona que adora dar largos paseos por el parque y disfrutar del aire libre. Su pelaje suave y brillante la hace aún más adorable.",
      rutaImagen: "img/Cloe.jpg",
      colorButton: "info",
      textButton: "Adoptame"
    },
    {
      id: 2,
      nombre: "Jackson",
      descripcion: "Jackson es un perrito inteligente y leal que siempre está listo para una aventura. A pesar de su tamaño pequeño, tiene un corazón valiente y está ansioso por hacer nuevos amigos.",
      rutaImagen: "img/Jackson.jpg",
      colorButton: "info",
      textButton: "Adoptame"
    },
    {
      id: 3,
      nombre: "Molly",
      descripcion: "Molly es una perrita dulce y tranquila que disfruta de largas siestas al sol y caricias suaves. Su pelaje es tan suave como un peluche y su lealtad es incomparable.",
      rutaImagen: "img/Molly.jpg",
      colorButton: "info",
      textButton: "Adoptame"
    },
    {
      id: 4,
      nombre: "Thor",
      descripcion: "Thor es un perrito enérgico y aventurero que siempre está listo para la acción. Le encanta correr, saltar y explorar nuevos lugares.",
      rutaImagen: "img/Thor.jpg",
      colorButton: "info",
      textButton: "Adoptame"
    }

  ]

  return (
    <>
      <div>
        <Header titulo="Adopta un Perrito" />
        <div className='container-cards'>
          <MyCards dogs={dogs} />
        </div>
        <Footer />
      </div>


    </>
  )
}

export default App
