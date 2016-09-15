import React, { Component } from 'react'

export default ({
  name, 
  item,
  updateEffect,
  updateFilter
}) => (
  <div className="pane pane__effect">
    <div className="pane__wrapper">
      <h3 className="pane__label">{item.label}</h3>
    
      {Object.keys(item.data).map((setting, i) => {
        const data = item.data[setting]
        return (
          <div key={i}>
            <h4 className="pane__slider-label">
              <span style={{fontWeight: 400}}>
                {data.label}:
              </span> 
              {' '}
              {data.value}
            </h4>
            <input
              className="pane__range"
              type="range"
              min={data.min}
              max={data.max}
              step={data.step}
              defaultValue={data.value}
              onChange={(e) => 
                updateEffect(name, setting, e.target.value)
              }
            />
          </div>
        )
      })}
    </div>
  </div>
)
