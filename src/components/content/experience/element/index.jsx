import './index.css'
import Skill from './skills/index'

export default function Element({name, skills}){
    return (
        <>
            <ul>
                <li>{name}</li>
                <ul>
                    {skills && skills.map((skill, index) => {
                        return (<li key={index}>{skill}</li>)
                    })}
                </ul>
            </ul>
            
        </>
    )
}