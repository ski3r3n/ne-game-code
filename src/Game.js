import { useState } from "react";
import { Container, Button, Text, ScaleFade } from "@chakra-ui/react";

import Screen from "./components/Screen";

function Game({ heading, plotFile, goBack }) {
    const [currentScreen, setCurrentScreen] = useState(0);
    const [endMessage, setEndMessage] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    const updateScreen = (newScreen, endMessage = "") => {
        setIsOpen(false);
        setTimeout(() => {
            setCurrentScreen(newScreen);
            setEndMessage(endMessage);
            setIsOpen(true);
        }, 100);
    };

    return (
        <ScaleFade initialScale={0.9} in={isOpen}>
            <Container maxW="3xl" h="100%" py="50px" centerContent>
                {currentScreen === 0 ? (
                    <>
                        <Text fontSize="4xl" as="b" my="20px">
                            NE Game
                        </Text>
                        <Text fontSize="2xl" mb="50px">
                            {heading}
                        </Text>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            w="200px"
                            onClick={() => updateScreen(1)}>
                            Start
                        </Button>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            w="200px"
                            onClick={goBack}
                            mt="6">
                            Back
                        </Button>
                    </>
                ) : (
                    <Screen
                        currentScreen={currentScreen}
                        endMessage={endMessage}
                        onUpdateScreen={updateScreen}
                        plotFile={plotFile}
                    />
                )}
            </Container>
        </ScaleFade>
    );
}

export default Game;
