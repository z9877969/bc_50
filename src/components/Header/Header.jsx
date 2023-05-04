import { useIsOpen, useSetIsOpen } from "../../context/IsOpenProvider";

const Header = () => {
  const isOpen = useIsOpen();
  const setIsOpen = useSetIsOpen();

  return (
    <header>
      <h3>User name: Bart</h3>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        Click - {`${isOpen}`}
      </button>
    </header>
  );
};

export default Header;

// {} {} {}
