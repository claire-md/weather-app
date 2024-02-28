export default function DetailsBox({ icon, isIcon, info, label }) {
  return (
    <div className="col">
      {isIcon && <span>{<i className={icon}></i>}</span>}
      {!isIcon && (
        <span>
          <img src={icon} />
        </span>
      )}
      <br />
      <span className="detail-info">{info}</span>
      <br />
      <span className="detail-label">{label}</span>
    </div>
  );
}
