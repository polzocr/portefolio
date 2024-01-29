import './index.css'

export default function Element({element, type}){
    const formation = type === 'Formation'
    const skills = type === 'Compétences'
    return (
        <>
            {skills ? (
                <li>{element.name}</li>
            ) : (
                <div className='elements'>
                <p className={`name-${type}`}>{element.name}</p>
                <p className= {`value`}>{element.value}</p>
                {formation && (
                    <>
                        <p>{element.date}</p>
                        <p>{element.organisme}</p>
                    </>
                )}
            </div>
            )}
        </>
    )
}