interface Props {
  children: React.ReactNode
}

export function TodoHeader({ children }: Props) {
  return <header>{children}</header>
}
