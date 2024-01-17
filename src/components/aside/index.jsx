import './index.css'
import photo from '../../assets/photo.jpg'

export default function Aside(){
    return (
        <>
            <div className='container-photo'>
                <img src={photo} alt="photo-profil" />
            </div>
        </>
    )
}