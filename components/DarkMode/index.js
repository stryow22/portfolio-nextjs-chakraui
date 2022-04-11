import { useColorMode, Switch } from "@chakra-ui/react";

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="toggleDarkMode">
      <Switch onChange={toggleColorMode}>
        Dark Mode {colorMode === "light" ? "off" : "on"}
      </Switch>
    </div>
  );
};

export default DarkMode;
