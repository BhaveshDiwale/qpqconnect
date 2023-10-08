'use client';

const Heading = ({
  title,
  subtitle,
  center
}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div style={{ fontSize: "30px", fontWeight: "800" }}>
        {title}
      </div>
      <div style={{ fontSize: "14px", fontWeight: "400", color: "#B9B8B8", marginTop: "5px" }}>
        {subtitle}
      </div>
    </div>
  );
}

export default Heading;