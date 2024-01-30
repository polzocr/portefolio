import "./index.css"
import Element from './element/index'


export default function Experience({title, company, location, date, content}){
    return (
        <li>
            <h4>{title}</h4>
            {location ? 
                <p className="company">{company} | {location}</p>: 
                <p className="company">{company}</p>
            }
            <p className="date">{date}</p>
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