import { Handle, Position } from 'reactflow';

/**
 * BaseNode abstraction for all node types.
 * @param {Object} props
 * @param {string} props.id - Node id
 * @param {Object} props.data - Node data
 * @param {string} props.label - Node label (e.g., 'Input', 'Output', etc.)
 * @param {Array} props.handles - Array of handle configs: { type, position, id, style }
 * @param {React.ReactNode} props.children - Custom content for the node
 * @param {Object} props.style - Custom style for the node
 */
export default function BaseNode({ id, data, label, handles = [], children, style = {} }) {
  return (
    <div style={{ width: 200, minHeight: 80, border: '1px solid black', padding: 8, borderRadius: 8, background: '#fff', ...style }}>
      {handles.map((h, idx) => (
        <Handle
          key={h.id || idx}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.style}
        />
      ))}
      <div style={{ fontWeight: 'bold', marginBottom: 6 }}>{label}</div>
      <div>{children}</div>
    </div>
  );
}
