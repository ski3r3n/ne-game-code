import { useState } from "react";
import {
    Button,
    Container,
    Heading,
    SimpleGrid,
    Text,
    background,
} from "@chakra-ui/react";

import Game from "./Game";

function App() {
    const [option, setOption] = useState(-1);

    const name = ["Civil Defence"];
    const plotFiles = ["terroristAttackPlot"];

    if (option === -1) {
        return (
            <Container maxW="3xl" h="100%" py="50px" centerContent>
                <Heading mb="5">NE Game</Heading>

                <Container maxW="3xl" h="100%" py="50px" className="container">
                    <Text mb="5">Select The Story</Text>
                    <SimpleGrid
                        mt="5"
                        w="100%"
                        columns={{ sm: 1, md: 1 }}
                        gap="6">
                        {[0].map((index) => (
                            <Button
                                key={index}
                                whiteSpace="normal"
                                height="auto"
                                blockSize="auto"
                                py="5"
                                w="100%"
                                h="100%"
                                colorScheme="blue"
                                onClick={() => setOption(index)}>
                                {name[index]}
                            </Button>
                        ))}
                    </SimpleGrid>
                </Container>
                <Heading mt="20">Credits</Heading>
                <Text mt="5">
                    Storyline made by the NE Council
                    <br />
                    Website made by Derrick, Kie Ren from EC³
                    <br />
                    Original website by Yaw Chur Zhe, formerly from EC³ and now HCIRS
                </Text>
            </Container>
        );
    } else {
        return (
            <Game
                heading={name[option]}
                plotFile={plotFiles[option]}
                goBack={() => setOption(-1)}
            />
        );
    }
}

export default App;
