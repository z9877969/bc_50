import { useSelector } from "react-redux";

const Loader = ({ children }) => {
  const isLoading = useSelector((state) => state.todo.isLoading);

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#00000050",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", fontSize: "36px" }}>Loading...</h1>;
        </div>
      )}
      {children}
    </>
  );
};

export default Loader;
