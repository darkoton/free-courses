import React from "react"
import style from './style.module.scss'

type PropsType = {
  children?: React.ReactNode,
  className?: string;
  onClick?: () => void;
  type?: 'yellow'
  decor?: boolean,
}

const Button: React.FC<PropsType> = ({
  children,
  className,
  onClick,
  type = 'yellow',
  decor = false
}) => {
  return <button onClick={onClick} className={`${style['type-' + type]} ${style.button} ${className}`}>
    {children}

    {decor && <img className={style.decor} src='/assets/img/UI/graphics-yellow.svg' alt='Decor' />}
  </button>
}

export default Button