import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { createVuetify } from "vuetify";

const securityTheme = {
  dark: false,
  colors: {
    background: "#0D47A1",
    surface: "#FFFFFF",
    primary: "#0D47A1",
    sport: "#0D47A1",
    diet: "#1B5E20",
    work: "#303234",
    habbits: "#E65100",
    stats: "#a10d5c",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "securityTheme",
      themes: {
        securityTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
