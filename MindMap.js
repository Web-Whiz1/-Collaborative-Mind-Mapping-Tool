import React, { useState } from 'react';

const MindMap = () => {
  const [nodes, setNodes] = useState([]);

  const addNode = (parentId) => {
    const newNode = { id: Date.now(), text: '', parent: parentId };
    setNodes([...nodes, newNode]);
  };

  return (
    <div className="mind-map">
      {nodes.map(node => (
        <div key={node.id} className="node">
          <input
            type="text"
            value={node.text}
            onChange={(e) => {
              const updatedNodes = nodes.map(n => 
                n.id === node.id ? { ...n, text: e.target.value } : n
              );
              setNodes(updatedNodes);
            }}
          />
          <button onClick={() => addNode(node.id)}>Add Child</button>
        </div>
      ))}
      <button onClick={() => addNode(null)}>Add Root Node</button>
    </div>
  );
};

export default MindMap;
