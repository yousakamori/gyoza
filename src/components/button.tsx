import React from 'react'
// ______________________________________________________
//
type Tag = 'button' | 'input' | 'a'
type Element = HTMLButtonElement | HTMLInputElement | HTMLAnchorElement
// ______________________________________________________
//
type ButtonProps = { tag: 'button'; role?: never }
type InputProps = { tag: 'input'; role?: never; children?: never }
type AnchorProps = { tag: 'a'; role: 'button' }
// ______________________________________________________
//
type Props<T extends Tag> = (T extends 'button'
  ? ButtonProps
  : T extends 'a'
  ? AnchorProps
  : InputProps) &
  React.ComponentPropsWithRef<T>
// ______________________________________________________
//
// eslint-disable-next-line react/display-name
export const Button: <T extends Tag>(props: Props<T>) => JSX.Element | null = React.forwardRef<
  Element,
  Props<Tag>
>(({ tag, ...props }, ref) => React.createElement(tag, { ref, ...props }))
