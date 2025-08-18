// App.js
import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import Body from "./components/Body";
import Forms from "./components/Forms";

function App() {
  const [recipes, setRecipies] = useState([
    {
      title: "Biryani",
      description:
        "A fragrant rice dish layered with spiced meat or vegetables, slow-cooked for rich flavor.",
      ingredients: [
        "Basmati rice",
        "Chicken or mutton",
        "Onion",
        "Tomato",
        "Yogurt",
        "Ginger-garlic paste",
        "Biryani masala",
        "Mint leaves",
        "Coriander leaves",
        "Ghee",
        "Salt",
      ],
      instructions:
        "Wash and soak rice. Marinate meat with yogurt, spices, and ginger-garlic paste. Fry onions until golden brown, then add tomatoes and marinated meat. Cook until tender. In a pot, layer cooked meat and half-cooked rice with fried onions, mint, and coriander. Drizzle ghee and steam until rice is fully cooked.",
    },
    {
      title: "Fried Rice",
      description: "A quick stir-fried rice dish with vegetables and sauces.",
      ingredients: [
        "Cooked rice",
        "Carrot",
        "Capsicum",
        "Spring onion",
        "Garlic",
        "Soy sauce",
        "Vinegar",
        "Salt",
        "Pepper",
        "Oil",
      ],
      instructions:
        "Heat oil in a wok, sauté garlic and vegetables on high flame. Add cooked rice, soy sauce, vinegar, salt, and pepper. Stir-fry until everything is mixed and heated through.",
    },
    {
      title: "Fried Rice",
      description: "A quick stir-fried rice dish with vegetables and sauces.",
      ingredients: [
        "Cooked rice",
        "Carrot",
        "Capsicum",
        "Spring onion",
        "Garlic",
        "Soy sauce",
        "Vinegar",
        "Salt",
        "Pepper",
        "Oil",
      ],
      instructions:
        "Heat oil in a wok, sauté garlic and vegetables on high flame. Add cooked rice, soy sauce, vinegar, salt, and pepper. Stir-fry until everything is mixed and heated through.",
    },
    {
      title: "Fried Rice",
      description: "A quick stir-fried rice dish with vegetables and sauces.",
      ingredients: [
        "Cooked rice",
        "Carrot",
        "Capsicum",
        "Spring onion",
        "Garlic",
        "Soy sauce",
        "Vinegar",
        "Salt",
        "Pepper",
        "Oil",
      ],
      instructions:
        "Heat oil in a wok, sauté garlic and vegetables on high flame. Add cooked rice, soy sauce, vinegar, salt, and pepper. Stir-fry until everything is mixed and heated through.",
    },
    {
      title: "Fried Rice",
      description: "A quick stir-fried rice dish with vegetables and sauces.",
      ingredients: [
        "Cooked rice",
        "Carrot",
        "Capsicum",
        "Spring onion",
        "Garlic",
        "Soy sauce",
        "Vinegar",
        "Salt",
        "Pepper",
        "Oil",
      ],
      instructions:
        "Heat oil in a wok, sauté garlic and vegetables on high flame. Add cooked rice, soy sauce, vinegar, salt, and pepper. Stir-fry until everything is mixed and heated through.",
    },
  ]);
  const addRecipie = (newRecepie) => {
    setRecipies([...recipes, newRecepie]);
  };
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>My Recipe Collection</h1>
      <button className="border rounded-lg max-w-sm px-4 bg-sky-500 hover:bg-sky-800 transition duration-900" onClick={() => setShow(!show)}>
        {show ? "Hide" : "AddRecipie"}
      </button>

      {show && <Forms onAddRecipe={addRecipie} />}
      <RecipeList recipes={recipes} />
      {/* <Body/> */}
    </div>
  );
}

export default App;
