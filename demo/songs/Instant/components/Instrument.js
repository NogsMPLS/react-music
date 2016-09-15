import React, { Component } from 'react'

export default ({
  itemId, 
  item, 
  updateVolume, 
  toggleMute
}) => (
  <div className="pane pane__has-button">
    <div className="pane__wrapper">
      <h3 className="pane__label">{item.label}</h3>
      <h4 className="pane__slider-label">
        <span style={{fontWeight: 400}}>
          Gain:
        </span> 
        {' '}
        {item.gain}
      </h4>
      <input
        className="pane__range vertical"
        type="range"
        min={0}
        max={1}
        step={0.01}
        defaultValue={item.gain}
        onChange={(e) => updateVolume(itemId, e.target.value)}
      />
    </div>

    <button
      className={'pane__button' + (item.muted ? ' muted' : '')}
      onClick={() => toggleMute(itemId)}
    >
      {item.muted ? 'unmute' : 'mute'} 
      {item.hotkey && 
        <div className="pane__hotkey">
          <kbd>{item.hotkey}</kbd>
        </div>
      }
    </button>
  </div>
)