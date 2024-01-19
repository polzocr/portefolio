import './index.css'
import photo from '../../assets/photo.jpg'
import asideDatas from '../../data/aside-data'

export default function Aside(){
    console.log(asideDatas)
    return (
        <>
            <div className='container-photo'>
                <img src={photo} alt="photo-profil" />
            </div>
            
        </>
    )
}