'use server';
/**
 * @fileOverview Provides AI-generated guidance and best practices for specific document types.
 *
 * - aiDocumentGuidance - A function that provides tips for optimizing document submissions.
 * - AiDocumentGuidanceInput - The input type for the aiDocumentGuidance function.
 * - AiDocumentGuidanceOutput - The return type for the aiDocumentGuidance function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiDocumentGuidanceInputSchema = z.object({
  documentType: z
    .string()
    .describe('The type of document for which guidance is requested (e.g., "Resume", "Statement of Purpose").'),
});
export type AiDocumentGuidanceInput = z.infer<typeof AiDocumentGuidanceInputSchema>;

const AiDocumentGuidanceOutputSchema = z.object({
  tips: z.string().describe('AI-generated tips and best practices for the specified document type.'),
});
export type AiDocumentGuidanceOutput = z.infer<typeof AiDocumentGuidanceOutputSchema>;

export async function aiDocumentGuidance(input: AiDocumentGuidanceInput): Promise<AiDocumentGuidanceOutput> {
  return aiDocumentGuidanceFlow(input);
}

const aiDocumentGuidancePrompt = ai.definePrompt({
  name: 'aiDocumentGuidancePrompt',
  input: { schema: AiDocumentGuidanceInputSchema },
  output: { schema: AiDocumentGuidanceOutputSchema },
  prompt: `You are an expert university admissions advisor. Provide comprehensive and actionable tips and best practices for a prospective student to optimize their {{{documentType}}} for university admissions.

Focus on aspects that will increase their chances of admission, including content, structure, common mistakes to avoid, and what admissions committees typically look for. Structure your advice clearly with bullet points or numbered lists.

Document Type: {{{documentType}}}`,
});

const aiDocumentGuidanceFlow = ai.defineFlow(
  {
    name: 'aiDocumentGuidanceFlow',
    inputSchema: AiDocumentGuidanceInputSchema,
    outputSchema: AiDocumentGuidanceOutputSchema,
  },
  async (input) => {
    const { output } = await aiDocumentGuidancePrompt(input);
    return output!;
  }
);
