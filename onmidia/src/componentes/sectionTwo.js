import React from 'react'
import Icons from './icons/icon-whatsapp.png'
import Iconsbook from './icons/icone-books.png'
import ImgsPontoVerde from './imgs/pontos-verdes.png'
import ImgsPontoRoxo from './imgs/Sem Título-6.png'
import ImgsPontoRosa from './imgs/ponto-rosa.png'
import IconsHouse from './icons/icone-house.png'

export default function sectionTwo(){

    return(

            <>
                <section className="two">
            
                    <div className="menu-works">
                        
                        <h2>Nossos Serviços</h2>
                        
                        <div className="box">
                            <div className="box-interative" id="whats"><img src={Icons} /></div>
                            <h3>Newsletter</h3>
                            <p>Atendimento automatizado com<br/> <strong>WhatsApp</strong> para ajudar milhares de famílias<br/> e sugerir
                                assuntos didáticos de acordo<br/> com o perfil do seu filho.</p>
                            <img src={ImgsPontoVerde} className="ponto-verde"/> 
                        </div>
                        
                        <div className="box">
                            <div className="box-interative" id="books"><img src={Iconsbook} /></div>
                            <h3>Conteúdo Didático</h3>
                            <p>Vasto acesso a material interativo de livros,<br/> áudios, vídeos e muito mais. Esse<br/> conteúdo será enviado
                                pelo número de<br/> <strong>WhatsApp</strong> cadastrado</p>
                            <img src={ImgsPontoRoxo} style={{width: '120px', height:'257px'}} className="ponto-azul"/>
                        </div>
                        
                        <div className="box">
                            <div className="box-interative" id="house"><img src={IconsHouse} /></div>
                            <h3>Bem-Estar</h3>
                            <p>Aproximando mais o hábito da leitura e<br/> estudos em casa, por meio dos pais ou<br/> responsáveis</p>
                            <img src={ImgsPontoRosa} className="ponto-rosa"/>
                        </div>
                    </div>
                </section>

            </>


    )


}