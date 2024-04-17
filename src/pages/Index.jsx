import { Box, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const moveCircle = () => {
    const angle = Math.random() * 360;
    const x = Math.cos(angle) * 200;
    const y = Math.sin(angle) * 200;
    setPosition({
      top: position.top + y,
      left: position.left + x,
    });
  };

  return (
    <ChakraProvider>
      <Box position="absolute" top={position.top + "px"} left={position.left + "px"} w="50px" h="50px" borderRadius="50%" bg="blue.500" onMouseOver={moveCircle} />
    </ChakraProvider>
  );
};

export default Index;
