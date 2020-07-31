import { library } from '@fortawesome/fontawesome-svg-core'
// import { chart-line,  edit} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fa-chart-line, edit)   


export const Edit = () => (

  <div>
    <FontAwesomeIcon icon={['fa', 'edit']} />
    <FontAwesomeIcon icon={['fas', 'fa-chart-line']} />
  </div>
)

