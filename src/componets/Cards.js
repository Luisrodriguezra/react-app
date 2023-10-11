import React from 'react';
import Card  from './Card';
import imagen1 from '../assats/OIP.jpeg';
import imagen2 from '../assats/OIP.jpeg';
import imagen3 from '../assats/OIP.jpeg';

const cards = [
    {
    id: 1,
    title: 'fast react',
    image:imagen2,
    instructor: "Benito Samuel Lopez Razo"

},
{
    id: 2,
    title: 'fast Java-docker',
    image:imagen3,
    instructor: "Valentin Jimenez Jarquen"  
},
{
    id: 3,
    title: 'fast Java',
    image:imagen1,
    instructor: "Benito Samuel Lopez Razo"
}
]

export default function Cards() {

    return(
       <div className='container d-flex justify-content-center align-items-center h-100'>
         <div className='row'>
            {
                cards.map(c => (
                    <div className="col-md-4" key={cards.id}>
                        <Card
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        instructor={c.instructor}
                        />
                    </div>
                    ))
            }
         </div>
     </div>
    );
}