import { useState } from 'react';
import { Button, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import Game from './Game';

function App() {
  const [ option, setOption ] = useState(-1);

  const name = ['A Terrorist Attack', 'Digital Defence', 'Economic Defence'];
  const plotFiles = ['terroristAttackPlot', 'digitalDefencePlot', 'economicDefencePlot'];

  if (option === -1) {
    return (
      <Container maxW='3xl' h='100%' py='50px' centerContent>
        <Heading mb='5'>NE Game</Heading>
        <Text mb='5'>Select A Story</Text>
        <SimpleGrid mt='5' w='100%' columns={{sm: 1, md: 3}} gap='6'>
          {
            [0, 1, 2].map((index) => (
              <Button
                key={index}
                whiteSpace='normal'
                height='auto'
                blockSize='auto'
                py='5'
                w='100%'
                h='100%'
                colorScheme='blue'
                onClick={() => setOption(index)}
              >{name[index]}</Button>
            ))
          }
        </SimpleGrid>
        <Heading mt='20'>Credits</Heading>
        <Text mt='5'>Storyline made by the NE Council<br />Website made by Yaw Chur Zhe</Text>
      </Container>
    );
  } else {
    return (
      <Game heading={name[option]} plotFile={plotFiles[option]} goBack={() => setOption(-1)} />
    );
  }
}

export default App;
