import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../utils/constants";

//const selectedCategory = "New";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={()=> setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#FFFFFF",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#FFFFFF" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
