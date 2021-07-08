import { GiConverseShoe, GiDart, GiBeerStein } from 'react-icons/gi'
import { FaDiceD20, FaChessKnight } from 'react-icons/fa'
import { ImMobile } from 'react-icons/im'
import { CgGames } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'

function Navbar(props) {
  const navbarStyles = {
    display: 'flex',
    flexDirection: 'row',
    background: 'rgba(200,200,200,0.7)',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '22px',
    overflow: 'none'
  }

  const linkStyles = {
    width: '12.5%',
    lineHeight: '90px',
    display: 'flex',
    flexDirection: 'row',
    border: '1px groove gray',
    paddingLeft: '10px',
    paddingRight: '22px',
    fontWeight: '500',
  }

  const linkDivStyles = {
    paddingTop: '25px',
    lineHeight: '50px',
    paddingRight: '10px'
  }
  return (
    <div style={navbarStyles}>
      <a type='submit'
        onClick={event => props.navigateTo(event, 'home')}
        style={linkStyles} href='/'
      >
        <div style={linkDivStyles}><AiOutlineHome style={{ fontSize: '40px'}} /></div>
        <span>Home</span>
      </a>

      <a type='submit'
        onClick={event => props.navigateTo(event, 'board')}
        style={linkStyles} href='/board'
      >
        <div style={linkDivStyles}><FaChessKnight style={{ fontSize: '40px'}} /></div>
        <span>Board</span>
      </a>

      <a type='submit'
        onClick={event => props.navigateTo(event, 'drinking')}
        style={linkStyles} href='/drinking'
      >
        <div style={linkDivStyles}><GiBeerStein style={{ fontSize: '40px'}} /></div>
        <span>Drinking</span>
      </a>

      <a type='submit'
        onClick={event => props.navigateTo(event, 'lawn')}
        style={linkStyles} href='/lawn'
      >
        <div style={linkDivStyles}><GiDart style={{ fontSize: '40px'}} /></div>
        <span>Lawn</span>
      </a>

      <a type='submit'
        onClick={event => props.navigateTo(event, 'mobile')}
        style={linkStyles} href='/mobile'
      >
        <div style={linkDivStyles}><ImMobile style={{ fontSize: '40px'}} /></div>
        <span>Mobile</span>
      </a>

      <a type='submit'
        onClick={event => props.navigateTo(event, 'sports')}
        style={linkStyles} href='/sports'
      >
        <div style={linkDivStyles}><GiConverseShoe style={{ fontSize: '40px'}} /></div>
        <span>Sports</span>
      </a>

      <a type='submit'
        onClick={event => props.navigateTo(event, 'tabletop')}
        style={linkStyles} href='/tabletop'
      >
        <div style={linkDivStyles}><FaDiceD20 style={{ fontSize: '40px'}} /></div>
        <span>Tabletop</span>
      </a>

      <a type='submit'
        onClick={event => props.navigateTo(event, 'video')}
        style={linkStyles} href='/video'
      >
        <div style={linkDivStyles}><CgGames style={{ fontSize: '40px'}} /></div>
        <span>Video</span>
      </a>
    </div>
  )
}

export default Navbar
