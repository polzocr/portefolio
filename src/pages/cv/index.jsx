import './index.css'

import Aside from '../../components/aside/index'
import Content from '../../components/content/index'

export default function cv(){
    return (
        <>
            <section id='cv'>
                <section id="side">
                    <Aside />
                </section>
                <section id="content">
                    <Content />
                </section>
            </section>
        </>
    )
}