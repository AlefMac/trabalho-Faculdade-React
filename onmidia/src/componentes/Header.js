import React from 'react'
import Icon from './icons/icon.png'
import Svg from './svg/arrow-right-solid.svg'
import Pontos from './imgs/pontos.png'

export default function Header(){

    return(
        <>
            <header className='menu-main'>
                <div className='menu'> 
                    <input type="checkbox"  id="check" ></input>
                    <label for="check" class="checkbtn">
                        <p className='icon-btn-menu'>&#8801;</p>
                    </label>  
                    <img src={Icon} className='img-logo' style={{pointerEvents:'none'}}/>
                    <nav className='nav-menu'>
                        <ul>
                            <li className='active'><a href='#'>Inicio</a></li>
                            <li><a href='#'>Ajuda</a></li>
                            <li><a href='#'>Recursos</a></li>
                            <li><a href='#'>Acessar</a></li>
                        </ul>
                    </nav> 
                    <a href='#' className='btn-login'>Login <img src={Svg} className='svg-inline--fa '/></a> 
                </div>
            </header>
            <img src={Pontos} className='pontos'/>
        </>
    )
}