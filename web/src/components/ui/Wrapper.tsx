import React from 'react'

export const Wrapper = ({ children }: any) => {
  return (
    <div className="mdt-wrapper">
      {children}
    </div>
  )
}

export const ContentWrapper = ({ children }: any) => {
  return <div className="mdt-content">{children}</div>
}