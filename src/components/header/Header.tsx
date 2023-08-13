import './header.module.css'
import { ReactComponent as Logo } from '../../'
import {List} from '@phosphor-icons/react'

const Header = () => {
  return (
    <div className="header">
        <div className="header-title">
            <Logo className='img'/>
            <h2>Igreja Vinde e Celebrai a Deus</h2>
        </div>
        <div>
            <div className="dropdown">
                <List size={32} />
                <div className="dropdown-content">
                    <a href="">Programação</a>
                    <a href="">Sobre a IVCD</a>
                    <a href="">Playlist do Youtube</a>
                    <a href="">Peça uma oração</a>
                </div>
            </div>
            <div className="header-links">
                <a href="">Programação</a>
                <a href="">Sobre a IVCD</a>
                <a href="">Playlist do Youtube</a>
                <a href="">Peça uma oração</a>
            </div>
        </div>
    </div>
  )
}

export default Header