import Tags from './Tags'


const MyCards = (props) => {
    return (
        props.dogs.map((dog) => (
            <div className="card" key={dog.id}>
                <img src={dog.rutaImagen} alt="" />
                <h2>
                    {dog.nombre}
                </h2>
                <p>{dog.descripcion} </p>

                <Tags text={dog.textButton} backgroundColor={dog.colorButton} />
            </div >
        ))

    )
}

export default MyCards;