import React from 'react';
import IcBook from 'icons/IcBook';
import IcMic from 'icons/IcMic';
import IcMsg from 'icons/IcMsg';
import IcReading from 'icons/IcReading';
import IcStar from 'icons/IcStar';
import IcTips from 'icons/IcTips';

export default () => {
  return (
    <ul className="svg-comps-list">
      <li>
        <IcBook />
        <div className="comp-name">IcBook</div>
      </li>
      <li>
        <IcMic />
        <div className="comp-name">IcMic</div>
      </li>
      <li>
        <IcMsg />
        <div className="comp-name">IcMsg</div>
      </li>
      <li>
        <IcReading />
        <div className="comp-name">IcReading</div>
      </li>
      <li>
        <IcStar />
        <div className="comp-name">IcStar</div>
      </li>
      <li>
        <IcTips />
        <div className="comp-name">IcTips</div>
      </li>
    </ul>
  );
};
