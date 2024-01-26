import './index.css'
import Skill from './skills/index'

export default function Element({name, skills}){
    return (
        <>
            <ul>
                <li>{name}</li>
                <ul>
                    {skills && skills.map((skill, index) => {
                        return <Skill 
                                key={`${skill}-${index}`}
                                skill={skill}
                                />
                    })}
                </ul>
            </ul>
            
        </>
    )
}