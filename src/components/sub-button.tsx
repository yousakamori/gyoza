import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'primary' | 'secondary'
  href?: never
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  type?: 'primary' | 'secondary'
  href: string
}

type ButtonAnchorProps = ButtonProps | (AnchorProps & { children: React.ReactNode })

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonAnchorProps>(
  ({ children, type = 'primary', href, ...rest }, ref) => {
    const buttonClasses = `px-4 py-2 text-white rounded-md bg-${type}-500 hover:bg-${type}-600 focus:outline-none focus:ring-2 focus:ring-${type}-500 focus:ring-opacity-50`

    if (href) {
      return (
        <a
          className={buttonClasses}
          href={href}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          ref={ref as React.RefObject<HTMLAnchorElement>}
        >
          {children}
        </a>
      )
    }

    return (
      <button
        className={buttonClasses}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        ref={ref as React.RefObject<HTMLButtonElement>}
      >
        {children}
      </button>
    )
  },
)
