import Link from 'next/link'
import React, { FC } from 'react'

type PropsType = {
   id: any
}

const Card: FC<PropsType> = ({id}) => {
  return (
    <div>
      <Link href={`/products/${id}`}>Link</Link>
      <div>{id}</div>
    </div>
  )
}

export default Card