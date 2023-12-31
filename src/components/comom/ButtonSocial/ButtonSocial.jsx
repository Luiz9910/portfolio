import React from 'react'
import "./style.css"

const ButtonSocial = ({url = "#", img, name, colorName}) => {
  return (
    <a href={url} target='_blank' className='button-social' rel="noreferrer">
      <img src={img} alt="Icon" />
      <span style={{color: colorName}}>{name}</span>
    </a>
  )
}

export default ButtonSocial
