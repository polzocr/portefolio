import './index.css'

export default function Element({name, skills}){
    return (
        <>
            <ul className='ul-element'>
                <li>{name}</li>
                <ul className='ul-skills'>
                    {skills && skills.map((skill, index) => {
                        return (<li key={index}>{skill}</li>)
                    })}
                </ul>
            </ul>
            
        </>
    )
}