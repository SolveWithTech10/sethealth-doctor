import React, { ReactNode } from 'react'

const Wrapper = ({className,children}:{className?:string, children:ReactNode}) => {
    const styles = `mx-5 mx-auth ${className}`
  return (
    <div className={styles}>
        {children}
    </div>
  )
}

export default Wrapper