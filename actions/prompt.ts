export const system_prompt = `I am an expert content creator specializing in crafting engaging, SEO-optimized content across digital platforms. For YouTube descriptions, I analyze the provided topic and outline (when available) to create compelling, emoji-enriched descriptions that drive engagement while staying within platform constraints.
When working with YouTube descriptions, I:

Keep descriptions between 3-5 lines for optimal readability
Strategically place emojis to enhance engagement without overwhelming
Incorporate relevant keywords naturally
Structure content to engage viewers in the first 2-3 lines
Maintain a conversational, authentic tone

My expertise extends across digital content creation including:

Platform-specific content (YouTube, Instagram, blogs)
SEO optimization and keyword integration
Technical content and code documentation
Marketing copy and product descriptions
Social media strategy and hashtag optimization
Content rewriting and plagiarism prevention
Grammar and language improvement

For each task, I:

Consider platform-specific best practices
Maintain a warm, engaging tone
Ensure SEO optimization
Adapt to current content trends
Focus on readability and user engagement

I'll respond to your queries with creativity and expertise while maintaining natural, human-like interactions. My responses will be tailored to your specific needs while following content creation best practices.
For your current YouTube description tool, I'll format my responses based on the provided topic and optional outline, delivering SEO-optimized descriptions with appropriate emoji usage and optimal length.`;

export const createUserPrompt = ({
  topic,
  outline,
  template,
  category,
  aiPrompt,
}: {
  topic: string;
  outline: string;
  template: string;
  category: string;
  aiPrompt: string;
}): string => {
  const basePrompt = {
    context: `Create high-quality, engaging content for ${category} about ${topic}.`,
    inputContext: `
        Input Parameters:
        - Topic: ${topic} || "Not provided"
        - Outline: ${outline || "Not provided"}
        - Template: ${template}
        - Category: ${category}
        - Specific Requirements: ${aiPrompt}
      `,
    generalGuidelines: `
        Content Guidelines:
        - Understand and utilize the Specific Requirements ${aiPrompt} based on the Category ${category}
        - Ensure content is original and plagiarism-free
        - Maintain a natural, engaging tone
        - Optimize for search engines and readability
        - Follow platform-specific best practices
        - Include relevant calls-to-action where appropriate
        - Focus on value delivery and user engagement
        - Always generate complete start to end response so that if user wishes to just copy paste they can simply do that without putting in any extra effort
        - generate such highly relevant and accurate response such that it saves user time and effort exponentially
      `,
  };

  const categoryPrompts = {
    Blog: `
        Blogging Requirements:
        - Create SEO-optimized, engaging content with proper keyword density
        - Structure with clear H1-H6 hierarchy for better readability
        - Include relevant internal/external linking suggestions
        - Maintain consistent brand voice while being informative
        - Break content into scannable sections with subheadings
        - Support claims with credible data and examples
        - Add meta description and title tag suggestions
        - Include content upgrade opportunities
    `,
    "Youtube Tool": `
        YouTube Content Requirements:
        - Create attention-grabbing hooks within first 15 seconds or in the first 2to 3 lines
        - Strategic timestamp placement for better retention
        - Optimize for YouTube search with researched keywords
        - Follow platform guidelines for description length
        - Include trending and niche-specific hashtags
        - Add engagement prompts (like, comment, subscribe)
        - Incorporate end screens and card suggestions
        - Format for mobile viewing experience
      `,
    "Writing Assistant": `
        Writing Enhancement Requirements:
        - Enhance clarity while preserving original message
        - Suggest advanced vocabulary alternatives
        - Ensure proper grammar and punctuation
        - Optimize sentence structure and flow
        - Improve readability scores
        - Maintain consistent tone and style
        - Suggest transition improvements
        - Check for passive voice usage
      `,
    Coding: `
        Code Generation Requirements:
          - Follow language-specific conventions and best practices
          - Include detailed inline documentation
          - Implement proper error handling and validation
          - Follow SOLID principles where applicable
          - Consider performance optimization opportunities
          - Add comprehensive usage examples
          - Include testing suggestions
          - Consider edge cases and limitations
          - Provide setup instructions if needed
      `,
    Marketting: `
        Marketing Content Requirements:
        - Highlight unique value propositions clearly
        - Include persuasive psychological triggers
        - Maintain consistent brand voice and messaging
        - Target specific customer pain points
        - Add clear, actionable CTAs
        - Focus on benefits with supporting features
        - Include social proof elements
        - Consider conversion optimization
      `,
    instagram: `
        Instagram Content Requirements:
        - Create scroll-stopping opening lines
        - Strategic emoji placement for engagement
        - Research trending and niche hashtags
        - Optimize for Instagram's algorithm
        - Include engagement questions
        - Add relevant call-to-actions
        - Consider carousel post opportunities
        - Suggest visual content pairings
      `,
  };


  const finalPrompt = `
      ${basePrompt.context}
  
      ${basePrompt.inputContext}
  
      ${
        categoryPrompts[category as keyof typeof categoryPrompts] ||
        basePrompt.generalGuidelines
      }
  
      ${basePrompt.generalGuidelines}
  
      Output Requirements:
      1. Ensure content is highly relevant to the topic
      2. Maintain consistent tone and style
      3. Follow SEO best practices
      4. Include appropriate formatting
      5. Adapt to current trends
      6. Focus on user engagement
      7. Meet platform-specific requirements
      8. Include necessary metadata
      9. Optimize for target audience
      10. Ensure technical accuracy
      11. No intro or outro just the main content
  
      Please generate content that fulfills all these requirements while maintaining authenticity and engagement.
    `;

  return finalPrompt
    .replace(/^\s+|\s+$/gm, "")
    .replace(/\n\s*\n\s*\n/g, "\n\n");
};