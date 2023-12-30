const HorizontalLine: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          borderBottom: "1px solid #BCB8B3",
          marginTop: "100px",
          marginBottom: "125px",
        }}
      ></div>
    </div>
  );
};

export default HorizontalLine;
