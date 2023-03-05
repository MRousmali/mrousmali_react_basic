import {
    Box,
    Heading,
    Image,
    List,
    ListItem,
    SimpleGrid,
    Text,
    Link as ChakraLink,
} from "@chakra-ui/react";

import "./RecipeCard.css";
import {RecipeDetailPage} from "./RecipeDetailPage.jsx";

export const RecipeCard = ({ recipe, detailedView }) => {
    const { label, image, cautions, dishType, dietLabels, url } = recipe.recipe;

    if (detailedView) { // check if detailedView is true
        return (
            <Box className="card-container">
                <Image
                    src={image}
                    alt={label}
                    objectFit="cover"
                    w="100%"
                    h="200px"
                />
                <Box className="card-content">
                    <Heading size="md" mb={2}>
                        {label}
                    </Heading>
                    <Text mb={4}>
                        <strong>Cautions:</strong>{" "}
                        {cautions.length ? cautions.join(", ") : "N/A"}
                    </Text>
                    <Text mb={4}>
                        <strong>Dish Type:</strong>{" "}
                        {dishType.length ? dishType.join(", ") : "N/A"}
                    </Text>
                    <Text mb={4}>
                        <strong>Diet Labels:</strong>{" "}
                        {dietLabels.length ? dietLabels.join(", ") : "N/A"}
                    </Text>
                    <Box>
                        <Heading size="sm" mb={2}>
                            Ingredients:
                        </Heading>
                        <ul>
                            {recipe.recipe.ingredientLines.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </Box>
                    <Box>
                        <Text mb={2}>
                            <strong>Source:</strong>{" "}
                            <ChakraLink href={url} target="_blank">
                                {recipe.recipe.source}
                            </ChakraLink>
                        </Text>
                    </Box>
                </Box>
            </Box>
        );
    } else { // if detailedView is false, show a simplified view
        return (

                <Box className="card-container">
                    <Image
                        src={image}
                        alt={label}
                        objectFit="cover"
                        w="100%"
                        h="200px"
                    />

                    <Box className="card-content">
                        <ChakraLink href={`/recipes/${encodeURIComponent(label)}`}>
                        <Heading size="md" mb={2} className="link">
                            {label}
                        </Heading>
                    </ChakraLink>
                        {cautions.length > 0 && (
                            <Text fontSize="sm" mb={2}>
                                <strong>Cautions:</strong>{" "}
                                {cautions.slice(0, 2).join(", ")}
                            </Text>
                        )}
                        {dishType.length > 0 && (
                            <Text fontSize="sm" mb={2}>
                                <strong>Dish Type:</strong>{" "}
                                {dishType.slice(0, 2).join(", ")}
                            </Text>
                        )}
                        {dietLabels.length > 0 && (
                            <Text fontSize="sm" mb={2}>
                                <strong>Diet Labels:</strong>{" "}
                                {dietLabels.slice(0, 2).join(", ")}
                            </Text>
                        )}
                    </Box>
                </Box>

        );
    }
};
