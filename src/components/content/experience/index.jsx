import "./index.css"
import Element from './element/index'


export default function Experience({title, company, location, date, content}){
    return (
        <li>
            <h4>{title}</h4>
            {location ? 
                <p>{company} | {location}</p>: 
                <p>{company}</p>
            }
            <p>{date}</p>
            {content && content.map((element,index) => {
                return (
                    <Element 
                        key={`${element.name}-${index}`}
                        name= {element.name}   
                        skills= {element.skills}                 
                    />
                )
                
            })}
        </li>
    )
}