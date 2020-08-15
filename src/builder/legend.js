import React, { Children } from 'react'

import { Draggable } from './draggable.js'

// @todo: not best key practice; fix it
export const Legend = ({ children }) =>
  Children.map(children, (child, index) =>
    <Draggable key={index}>
      <div name={child.type.displayName}>
        {child.type.displayName}
      </div>
    </Draggable>
  )
