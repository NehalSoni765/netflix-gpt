import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constant";

const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true, //mostly recommed this thing from server side but if you want to do on client site this key must be
});

export default openai;
