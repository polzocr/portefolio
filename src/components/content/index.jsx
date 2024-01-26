import './index.css'

import contentData from '../../data/content-data'

import Experience from './experience/index'


export default function Content(){

    console.log(contentData)
    return (
        <>
            <h1><span>Paul</span> Wattelar</h1>
            <h2>Développeur Javascript</h2>
            <p className='intro'>Désireux de développer constamment mes compétences dans un domaine en
            pleine expansion, je souhaite trouver un emploi dans le développement
            <span> Javascript</span>, au niveau <span>front-end</span>, <span>back-end</span>, ou sur un framework comme <span>React</span>.
            </p>
            <h3>Experience</h3>
            <ul>
            {contentData.map((data,index) => {
                return <Experience 
                        key={`${data.title}-${index}`}
                        title={data.title}
                        company={data.company}
                        location={data.location}
                        date={data.date}
                        content={data.content}
                        />
            })}
            </ul>
            

        </>
    )
}