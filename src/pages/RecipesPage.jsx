import {
	Box,
	Heading,
	Center,
	Input,
	InputGroup,
	InputLeftElement,
	Link as ChakraLink,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";

import { useState } from "react";
import "./MainPage.css";
import { data } from "../utils/data.js";
import { ListItem } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { RecipeCard } from "../components/RecipeCard.jsx";

export const RecipesPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [recipes, setRecipes] = useState(data.hits);

	const handleSearch = (event) => {
		const term = event.target.value.toLowerCase();
		setSearchTerm(term);
		setRecipes(
			data.hits.filter(
				(recipe) =>
					recipe.recipe.label.toLowerCase().includes(term) ||
					recipe.recipe.ingredientLines
						.map((ingredient) => ingredient.toLowerCase())
						.includes(term)
			)
		);
	};

	return (
		<Box className="box-content">
			<Center flexDir="column">
				<Heading>Recipe Checker</Heading>
				<InputGroup maxW="lg" mt={4}>
					<InputLeftElement pointerEvents="none">
						<SearchIcon />
					</InputLeftElement>
					<Input
						type="text"
						placeholder="Search recipes..."
						value={searchTerm}
						onChange={handleSearch}
						backgroundColor="white"
					/>
				</InputGroup>
				<Wrap mt={4}>
					{recipes.map((recipe) => (
						<WrapItem key={recipe.recipe.url}>
							{/*<ChakraLink*/}
							{/*	href={`/recipe/${encodeURIComponent(recipe.recipe.label)}`}*/}
							{/*>*/}
								<RecipeCard recipe={recipe} detailedView={false}/>
							{/*</ChakraLink>*/}
						</WrapItem>
					))}
				</Wrap>
			</Center>
		</Box>
	);
};
