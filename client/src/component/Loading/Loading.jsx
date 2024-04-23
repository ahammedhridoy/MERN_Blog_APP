import "./Loading.css";
const Loading = () => {
  return (
    <div
      className="loading"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
