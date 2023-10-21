import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true, //mostly recommed this thing from server side but if you want to do on client site this key must be
});

export default openai;
