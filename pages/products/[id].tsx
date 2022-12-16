import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout';

const Item = () => {
   const router = useRouter();
   const id = router.query.id;
   
  return (
    <div>
      <>
      <Layout title={String(id)}>
         {id}
      </Layout>
      </>
    </div>
  )
}

export default Item