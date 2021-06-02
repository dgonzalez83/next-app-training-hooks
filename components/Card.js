export default function Card({ header = null, title, body, footer = null }) {
  return (
    <div className="card text-dark bg-light w-100 mx-auto my-3">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
      {footer && (
        <div className="card-footer">
          <small className="text-muted">{footer}</small>
        </div>
      )}
    </div>
  );
}
