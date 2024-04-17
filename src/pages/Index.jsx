import { Box, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const moveCircle = () => {
    const angle = Math.random() * 360;
    const radius = 25;
    const x = Math.cos(angle) * 200;
    const y = Math.sin(angle) * 200;
    const newTop = Math.min(Math.max(position.top + y, radius), window.innerHeight - radius);
    const newLeft = Math.min(Math.max(position.left + x, radius), window.innerWidth - radius);
    setPosition({
      top: newTop,
      left: newLeft,
    });
  };

  return (
    <ChakraProvider>
      <Box position="absolute" top={position.top + "px"} left={position.left + "px"} w="50px" h="50px" borderRadius="50%" bg="blue.500" onMouseOver={moveCircle} transition="top 0.5s, left 0.5s" />
    </ChakraProvider>
  );
};

export default Index;
