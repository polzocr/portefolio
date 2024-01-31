import './index.css'

export default function Element({element, type}){
    const formation = type === 'Formation'
    const skills = type === 'Compétences'
    return (
        <div className='elements'>
            {skills ? (
                <li className={`name`}>{element.name}</li>
            ) : (
                <>
                    <p className={`name`}>{element.name}</p>
                    <p className= {`value`}>{element.value}</p>
                    {formation && (
                        <>
                            <p className='element-date'>{element.date}</p>
                            <p className='element-organisme'>{element.organisme}</p>
                        </>
                    )}
                </>
            )}
        </div>
    )
}