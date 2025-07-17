// textNode.js


import { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => setCurrText(e.target.value);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text"
      handles={[{
        type: 'source',
        position: Position.Right,
        id: `${id}-output`,
      }]}
    >
      <label>
        Text:
        <input
          type="text"
          value={currText}
          onChange={handleTextChange}
        />
      </label>
    </BaseNode>
  );
};
