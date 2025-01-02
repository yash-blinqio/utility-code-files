In chakra components we can override the inner implementation using the sx attribute, for example consider this:
```tsx
import { MenuButton } from "@chakra-ui/react";
<MenuButton
          isDisabled={isDisabled}
          as={Button}
          sx={{
            color: isDisabled ? "black" : "black",
            "--opacity": "0",
            padding: "0",
            height: "auto",
            lineHeight: "26px",
            "&:hover": {
              "--opacity": "1",
            },
            "&[disabled]": {
              "opacity": "1",
            },
          }}
          ...
```
- here we are overwriting the state which the component takes by default when it is hovered, disacbled, etc.,
- Also to see what CSS property to override for the desired behavior just inspect the element in the console and see the properties in the Styles tab at the bottom.ter