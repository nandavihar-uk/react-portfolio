import React, { useEffect, useCallback } from "react";

function Colorpicker() {
  const [colorType, setColorType] = React.useState("hex");
  const [color, setColor] = React.useState("#ffffff");

  // Add this constant outside your component
    const buttonStyle = {
        padding: "0.8rem 1.5rem",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#2196F3",
        color: "white",
        fontSize: "1rem",
        cursor: "pointer",
        // transition: "all 0.2s ease",
        // textTransform: "uppercase",
        fontWeight: "600",
        letterSpacing: "0.5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        ':hover': {
        transform: "translateY(-1px)",
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)"
        }
    };

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const handleRandomHexColor = useCallback(() => {
    //#fffff
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }, []);

  const handleRandomRGBColor = useCallback(() => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    console.log(`rgb(${r},${g},${b})`);
    setColor(`rgb(${r},${g},${b})`);
  }, []);

  useEffect(() => {
    if (colorType === "hex") handleRandomHexColor();
    else handleRandomRGBColor();
  }, [colorType, handleRandomHexColor, handleRandomRGBColor]);

  return (
    <div style={{ padding: "2rem" }}>
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      marginBottom: "2rem",
      flexWrap: "wrap"
    }}>
      <button 
        style={buttonStyle}
        onClick={() => setColorType("hex")}
      >
        Hex Color
      </button>
      <button 
        style={buttonStyle}
        onClick={() => setColorType("rgb")}
      >
        RGB Color
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#4CAF50" }}
        onClick={() =>
          colorType === "hex"
            ? handleRandomHexColor()
            : handleRandomRGBColor()
        }
      >
        Generate Random Color
      </button>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        width: "80%",
        maxWidth: "600px",
        minHeight: "300px",
        margin: "0 auto",
        backgroundColor: color,
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease",
        padding: "2rem",
        textAlign: "center"
      }}
    >
      <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.5rem", fontWeight: 500 }}>
        {colorType === "hex" ? "Hex Color" : "RGB Color"}
      </h3>
      <h1 style={{ 
        margin: 0,
        fontSize: "2.5rem",
        fontWeight: 700,
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        letterSpacing: "0.05em"
      }}>
        {color}
      </h1>
    </div>
  </div>
  );
}

export default Colorpicker;
