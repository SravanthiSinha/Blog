import React from 'react'
import Category from './Category.jsx'

class Categories extends React.Component {
  render () {
    const Center = {
      // position:'absolute',
      //          top : '50%',
      //          left :'50%',
      //          transform :'translate(-50%,-50%)'
      padding: '2%',
      paddingTop: '80px'
    }
    const datum = [
      {
        value: 'LACMA',
        imagesrc: '14390994_1106705829415635_2055599677816095389_n.jpg'
      },
      {
        value: 'DISNEY LAND',
        imagesrc: '14568258_1123542471065304_5566350508198054889_n.jpg'
      },
      {
        value: 'ALASKA',
        imagesrc: '15094516_1156163504469867_5134522080134009684_n.jpg'
      },
      {
        value: 'UTAH',
        imagesrc: '18839377_1356021807817368_4288779844940887709_n.jpg'
      },
      {
        value: 'Los Angeles Downtown',
        imagesrc: '20228274_1402611466491735_8346949456250882495_n.jpg'
      },
      {
        value: 'Los Angeles Comicon 2017',
        imagesrc: '22852189_1495125540573660_7110521531382738438_n.jpg'
      },
      {
        value: 'MONTANA',
        imagesrc: '24293914_1525698534183027_4548286552009929323_n.jpg'
      },
      {
        value: 'COLARADO',
        imagesrc: '24899849_1534612253291655_5404631952728621492_n.jpg'
      },
      {
        value: 'NEW MEXICO',
        imagesrc: '25399126_1538619786224235_5131385391170821202_n.jpg'
      },
      {
        value: 'PARIS',
        imagesrc: 'image.png'
      },
      {
        value: 'INDIA',
        imagesrc: 'me.jpg'
      }
    ]
    return <div className='ui' style={Center}> <Category datum={datum} /></div>
  }
}

export default Categories
