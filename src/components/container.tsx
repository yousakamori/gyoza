import React, { FC, HTMLProps } from 'react'

type ContainerProps = HTMLProps<HTMLDivElement> & { fluid?: boolean }

export const Container: FC<ContainerProps> = ({ fluid, className, children, ...props }) => {
  const containerClass = fluid ? 'container-fluid' : 'container'

  return (
    <div {...props} className={`${containerClass} ${className}`}>
      {children}
    </div>
  )
}

{
  /* <>
      <Container>
        <h1>Fixed-width container</h1>
      </Container>
      <Container fluid>
        <h1>Fluid-width container</h1>
      </Container>
    </> */
}
