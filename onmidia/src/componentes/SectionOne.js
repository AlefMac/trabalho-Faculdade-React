import React from 'react'
import Img from './imgs/figura1.png'

export default function SectionOne(){

    return(

        <>
            <section className='One'>
                <div className='texts'>
                    <h1>Auxiliando no Ensino<br/> da Educação </h1>
                    <p><strong>OnMidia</strong> é uma ferramenta educativa que irá<br/> disponibilizar ao seus filhos ou alunos,<br/> conteúdos didáticos de acordo com o perfil<br/> educacional e idade. Tudo com praticidade e<br/> flexibilidade usando o próprio <strong>WhatsApp</strong></p>
                </div>
                <img src={Img} className='Ola'/>
            </section>
        </>

    )

}