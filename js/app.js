import { toggleDarkTheme } from "./themeSwitcher.js";
import {dates} from "./testimport.js";

/* importation avant la fonction principale */

document.addEventListener("DOMContentLoaded",()=>{

let date_f = new Date().getFullYear()
  const User = ({

    print_out : dates(date_f),
    footer : document.querySelector("footer p")

  })

  let themeButton = document.getElementById("theme-button");
  let themeLogo = document.getElementById("theme-logo");
  let theme = "light";

  themeButton.addEventListener("click", () => {
    if (theme === "light") {
      theme = "dark";
      themeLogo.name = "sunny";
    } else if (theme === "dark") {
      theme = "light";
      themeLogo.name = "moon";
    }

    toggleDarkTheme(theme);
  });
  
  
  /* copyrigth */

  User.footer.innerText += ` ${User.print_out}`

})