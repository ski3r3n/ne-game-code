import {
    Button,
    Heading,
    SimpleGrid,
    Text,
    FormControl,
    Input,
    FormErrorMessage,
} from "@chakra-ui/react";
import { useEffect } from "react";
import MrtGameScene from "../mrtpart/mrtgamescene.js";
import { Field, Form, Formik } from "formik";

import terroristAttackPlot from "../plots/terrorist_attack_plot.json";

const plots = {
    terroristAttackPlot,
};
export var energy = 100;
function Screen({ currentScreen, endMessage, onUpdateScreen, plotFile }) {
    useEffect(() => {
        if (currentScreen >= 0) {
            if (currentScreen === 2) {
                energy = 100;
            }
            if (currentScreen === 3) {
                energy = 50;
            }
            // change background image on component mount
            document.body.style.setProperty(
                "background-image",
                `url("${plots[plotFile][currentScreen].backgroundImgPath}")`,
                "important"
            );
            return () => {
                document.body.style.setProperty("background-image", "");
            };
        }
    }, [currentScreen, plotFile]);

    const onChoiceClicked = (choice) => {
        onUpdateScreen(choice.screenTo, choice.endMessage);
    };

    if (currentScreen === -1) {
        // failure screen
        return (
            <>
                <Heading my="5">You lost!</Heading>
                <Text my="5">{endMessage}</Text>
                <SimpleGrid my="5" w="100%" columns={1} gap="6">
                    <Button
                        whiteSpace="normal"
                        height="auto"
                        blockSize="auto"
                        py="5"
                        w="100%"
                        h="100%"
                        colorScheme="blue"
                        onClick={() => onChoiceClicked({ screenTo: 0 })}>
                        Retry
                    </Button>
                </SimpleGrid>
            </>
        );
    } else if (currentScreen === -2) {
        // victory screen
        return (
            <>
                <Heading my="5">You won!</Heading>
                <Text my="5">{endMessage}</Text>
                <SimpleGrid my="5" w="100%" columns={1} gap="6">
                    <Button
                        whiteSpace="normal"
                        height="auto"
                        blockSize="auto"
                        py="5"
                        w="100%"
                        h="100%"
                        colorScheme="blue"
                        onClick={() => onChoiceClicked({ screenTo: 0 })}>
                        Start Over
                    </Button>
                </SimpleGrid>
            </>
        );
    } else if (currentScreen === -3) {
        return (
            <>
                <MrtGameScene />
                <Button
                    whiteSpace="normal"
                    height="auto"
                    blockSize="auto"
                    py="5"
                    w="100%"
                    h="100%"
                    colorScheme="blue"
                    onClick={() => onChoiceClicked({ screenTo: 8 })}>
                    Click to skip/finish
                </Button>
            </>
        );
    }

    const { choices, heading, text, screenTo } = plots[plotFile][currentScreen];
    let { correctAnswer } = plots[plotFile][currentScreen];

    const validateName = (userAnswer) => {
        let error;
        correctAnswer = correctAnswer.map((el) => el.trim().toLowerCase());
        if (!userAnswer) {
            error = "An answer is required";
        } else if (!correctAnswer.includes(userAnswer.trim().toLowerCase())) {
            error = "Wrong answer! 😱";
        }
        return error;
    };

    return (
        <div
            style={{
                backgroundColor: "white",
                padding: "15px",
                borderRadius: "10px",
            }}>
            <Heading mb="5" dangerouslySetInnerHTML={{ __html: heading }} />
            <Text my="5" dangerouslySetInnerHTML={{ __html: text }} />
            {choices && (
                <SimpleGrid
                    mt="5"
                    w="100%"
                    columns={{ sm: 1, md: Math.min(2, choices.length) }}
                    gap="6">
                    {choices.map((choice, index) => (
                        <Button
                            key={index}
                            whiteSpace="normal"
                            height="auto"
                            blockSize="auto"
                            py="5"
                            w="100%"
                            h="100%"
                            colorScheme="blue"
                            onClick={() => onChoiceClicked(choice)}>
                            {choice.label}
                        </Button>
                    ))}
                </SimpleGrid>
            )}
            {correctAnswer && (
                <Formik
                    initialValues={{ answer: "" }}
                    onSubmit={() => onUpdateScreen(screenTo)}>
                    <Form>
                        <Field name="answer" validate={validateName}>
                            {({ field, form }) => (
                                <FormControl
                                    isInvalid={
                                        form.errors.answer &&
                                        form.touched.answer
                                    }>
                                    <Input
                                        mt="5"
                                        {...field}
                                        placeholder="Your answer"
                                    />
                                    <FormErrorMessage mt="1" color="red">
                                        {form.errors.answer}
                                    </FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            py="6"
                            mt="6"
                            colorScheme="blue"
                            type="submit"
                            w="100%">
                            Submit
                        </Button>
                    </Form>
                </Formik>
            )}
        </div>
    );
}

export default Screen;
