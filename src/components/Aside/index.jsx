import './index.css'
import photo from '../../assets/photo.jpg'
import asideDatas from '../../data/aside-data'

import Infos from './infos/index'


export default function Aside(){
    return (
        <>
            <div className='container-photo'>
                <img src={photo} alt="photo-profil" />
            </div>
            {asideDatas.map((data, index) => {
                return <Infos 
                    key={`${data.name}-${index}`}
                    name = {data.name}
                    elements = {data.elements}
                />
            })}
            
        </>
    )
}