// NOTE: The default React Native styling doesn't support server rendering.
// Server rendered styles should not change between the first render of the HTML
// and the first render on the client. Typically, web developers will use CSS media queries
// to render different styles on the client and server, these aren't directly supported in React Native
// but can be achieved using a styling library like Nativewind.
import { useEffect, useState } from "react";

// Hook to detect the system color scheme
export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    // Ensure the hook runs only on the client
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: any) => {
        setColorScheme(e.matches ? "dark" : "light");
      };

      // Initial check
      handleChange(mediaQuery);

      // Add listener
      mediaQuery.addEventListener("change", handleChange);

      // Clean up listener on unmount
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  return colorScheme;
}
