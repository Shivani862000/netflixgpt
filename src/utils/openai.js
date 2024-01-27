import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default openai;