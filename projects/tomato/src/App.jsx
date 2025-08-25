import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {ContactIN, ContactUK, ContactUS, Home, Login, AddProduct} from './pages';

export const themeContext = createContext();

function App() {
  const reciepesList = [
    {
      id: 1,
      title: "Lemon Rice",
      description:
        "Tangy and flavorful rice dish made with lemon juice and tempered spices.",
      ingred: [
        "2 cups cooked rice",
        "2 tbsp lemon juice",
        "1 tbsp oil",
        "1/2 tsp mustard seeds",
        "1/2 tsp turmeric powder",
        "1 green chili, chopped",
        "A few curry leaves",
        "Salt to taste",
      ],
      instr:
        "Heat oil in a pan, splutter mustard seeds, add green chili, curry leaves, and turmeric. Add cooked rice, salt, and lemon juice. Mix well and serve.",
      category: "Quick Meal",
    },
    {
      id: 2,
      title: "Curd Rice",
      description:
        "Cool and creamy rice mixed with yogurt, a perfect summer dish.",
      ingred: [
        "2 cups cooked rice",
        "1 cup plain curd (yogurt)",
        "1/2 cup milk",
        "Salt to taste",
        "1/2 tsp mustard seeds",
        "1 green chili, chopped",
        "A few curry leaves",
        "1 tsp oil",
      ],
      instr:
        "Mix curd, milk, and salt into the cooked rice. Heat oil, splutter mustard seeds, add green chili and curry leaves. Pour over rice and mix well.",
      category: "Quick Meal",
    },
    {
      id: 3,
      title: "Upma",
      description:
        "Soft and savory semolina breakfast dish cooked with onions and spices.",
      ingred: [
        "1 cup rava (semolina)",
        "2 cups water",
        "1 onion, chopped",
        "1 green chili, chopped",
        "A few curry leaves",
        "1/2 tsp mustard seeds",
        "1 tbsp oil",
        "Salt to taste",
      ],
      instr:
        "Dry roast rava until light golden. Heat oil, splutter mustard seeds, add onion, chili, and curry leaves. Add water, salt, and bring to a boil. Slowly add rava while stirring to avoid lumps. Cook until soft.",
      category: "Breakfast",
    },
    {
      id: 4,
      title: "Tomato Chutney",
      description:
        "A tangy chutney made from tomatoes, perfect as a side for idli or dosa.",
      ingred: [
        "2 tomatoes, chopped",
        "2 dried red chilies",
        "1 onion, chopped",
        "1 tbsp oil",
        "Salt to taste",
        "1/2 tsp mustard seeds",
        "A few curry leaves",
      ],
      instr:
        "Heat oil, sauté onion, tomatoes, and red chilies until soft. Blend into a paste. In another pan, heat oil, splutter mustard seeds and curry leaves, pour over chutney and serve.",
      category: "Side Dish",
    },
    {
      id: 5,
      title: "Tomato Chutney",
      description:
        "A tangy chutney made from tomatoes, perfect as a side for idli or dosa.",
      ingred: [
        "2 tomatoes, chopped",
        "2 dried red chilies",
        "1 onion, chopped",
        "1 tbsp oil",
        "Salt to taste",
        "1/2 tsp mustard seeds",
        "A few curry leaves",
      ],
      instr:
        "Heat oil, sauté onion, tomatoes, and red chilies until soft. Blend into a paste. In another pan, heat oil, splutter mustard seeds and curry leaves, pour over chutney and serve.",
      category: "Side Dish",
    },
  ];
  const [reciepes, setReciepes] = useState(reciepesList);

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [show, setShow] = useState(true);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);

        setLoading(false);
      });
  }, []);

  const handleBtn = () => {
    setShow(!show);
  };
  return (
    <>
      <themeContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          reciepes,
          setReciepes,
          users,
          loading,
        }}
      >
        <NavComponent2 />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIN />} />
            <Route path="us" element={<ContactUS />} />
            <Route path="uk" element={<ContactUK />}> </Route>
          </Route>

          <Route path="/reciepes" element={<RecipesList />}></Route>
          <Route path="/reciepes/:id" element={<ReciepeView />}></Route>
          <Route path="/addreciepe" element={<AddReciepe />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/add" element={<AddProduct />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <FooterComponent />
      </themeContext.Provider>
    </>
  );
}

export default App;
