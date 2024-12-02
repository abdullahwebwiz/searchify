import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: any, res: any) {
  try {
    let x: any = process.env.GOOGLE_API_KEY;
    const genAI = new GoogleGenerativeAI(x);

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const data = await req.json();
    const prompt = data.body;

    const result: any = await model.generateContent(prompt);
    const response = await result.response;
    const output = await response.text();

    return Response.json({ output: output });
  } catch (error) {
    console.error(error);
    return Response.json(
      { output: 'something went wrong, Kindly try again.' },
      { status: 400 },
    );
  }
}
