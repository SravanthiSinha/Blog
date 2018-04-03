import React from 'react'
import Gallery from './Gallery.jsx'

class Page extends React.Component {
  render () {
    const Center = {
               // position:'absolute',
      //          top : '50%',
      //          left :'50%',
      //          transform :'translate(-50%,-50%)'
      padding: '2%',
      paddingTop:'80px'
    }
    return <div className='ui' style={Center}> <Gallery /></div>
  }
}

export default Page
