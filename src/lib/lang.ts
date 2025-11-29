export const language = (lang: string) => {
  console.log("language param >>>", lang);

  const l = lang || "ae";

  if (l === "ae") return "en-US";
  else if (l === "ar-ae") return "ar-AE";
  else if (l === "en") return "en-US";

  
  return "invalid";
};
