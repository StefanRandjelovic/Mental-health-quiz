const NawButton = ({ promp, setCurrentQuestion }) => {
  return (
    <button onClick={() => setCurrentQuestion((prev) => prev + 1)}>
      {promp()}
    </button>
  );
};

export default NawButton;
