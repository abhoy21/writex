const templateData = [
  {
    name: "Blog Title",
    desc: "Generate compelling blog titles based on your niche and outline. This AI tool helps create engaging, SEO-friendly titles that capture readers' attention.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "textarea",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "Transform your ideas into fully-developed blog posts. This AI writer helps you create well-structured, engaging content based on your topic and outline.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "textarea",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "Never run out of blog post ideas again. This AI tool generates relevant, trending topic suggestions based on your niche to keep your content calendar full.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "input",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "Boost your YouTube video visibility with SEO-optimized titles. This tool generates attention-grabbing, search-friendly titles that help your content rank higher.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result point wise",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "textarea",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "Create engaging, SEO-friendly YouTube video descriptions with perfect emoji placement. Optimized for visibility and viewer engagement.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog Youtube topic here",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "textarea",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "Generate highly relevant tags for your YouTube videos to improve searchability and reach. Get strategic tag suggestions based on your content and target keywords.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",
    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "textarea",
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Transform existing content into unique, plagiarism-free articles while maintaining the original message. Perfect for content repurposing and avoiding AI detection.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "Enhance your writing with advanced text improvement suggestions. This tool corrects grammar, improves readability, and suggests better word choices for more professional content.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textarea",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "Enhance your content with relevant emojis that add personality and engagement. Perfect for social media posts, messages, and informal content.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "Create engaging Instagram posts that resonate with your audience. This tool generates content optimized for Instagram's format and best practices.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "input",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "Discover trending and relevant hashtags to increase your Instagram post visibility. Generate a mix of popular and niche-specific hashtags for maximum reach.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",
    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "input",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "Get creative Instagram content ideas tailored to your niche. Stay ahead of trends with suggestions for both static posts and engaging reels.",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",
    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "input",
        required: true,
      },
    ],
  },
  {
    name: "English Grammar Check",
    desc: "Improve your writing with advanced grammar checking. This tool identifies and corrects grammatical errors while suggesting improvements for clarity and style.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",
    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammer and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "Get help writing clean, efficient code in any programming language. This AI assistant generates code based on your requirements with detailed comments and best practices.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "write-code",
    aiPrompt:
      "Write code that works with user-provided input and the mentioned programming language (default language is python) and show both the code and its expected output. Present the code in a formatted code block using markdown syntax. Include explanatory comments and example outputs demonstrating how the code behaves with different inputs.",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "Understand complex code with line-by-line explanations. Get clear, detailed breakdowns of how the code works, perfect for learning and code review.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",
    slug: "explain-code",
    aiPrompt:
      "Depends on user code Description explain code line by line and give output in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "Identify and fix code issues quickly with detailed debugging suggestions. Get solutions for error messages and potential improvements for your code.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",
    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user code Input find bug in code and give solution and give output in rich text editor format in code block",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Create memorable, impactful taglines for your brand or product. Generate options that capture your brand's essence and resonate with your target audience.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",
    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "Create compelling, SEO-optimized product descriptions that drive sales. Generate engaging content that highlights benefits and features while incorporating relevant keywords.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",
    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Landing Page Content Generator",
    desc: "Generate conversion-focused, SEO-optimized landing page content with compelling sections that engage visitors and drive action. Perfect for businesses looking to create impactful web presence.",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055666.png",
    category: "Web Content",
    slug: "landing-page-content",
    aiPrompt:
      "Based on the provided business outline, generate a comprehensive landing page content that captures the brand's essence and drives conversions. Create content for:\n\n1. Hero Section:\n- Attention-grabbing headline that encapsulates the main value proposition\n- Compelling subheadline that elaborates on the benefits\n- Strategic CTA button text\n\n2. Features Section:\n- 3 key features with benefit-focused descriptions\n- Supporting visuals suggestions\n\n3. Social Proof Section:\n- Testimonial templates\n- Key statistics and achievements presentation\n\n4. About Section:\n- Compelling brand story\n- Mission and values presentation\n\n5. Final CTA Section:\n- Persuasive closing headline\n- Action-driving button text\n\nExamine the outline carefully to understand the business type, target audience, unique selling points, and brand voice. Maintain consistent tone throughout the content. Format output in HTML with semantic structure and natural keyword placement.",
    form: [
      {
        label:
          "Primary Goal (e.g., Generate Leads, Drive Sales, Book Appointments)",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label:
          "Business Details (Include: business type, target audience, key features, brand voice, and any specific requirements)",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },

  {
    name: "Email Campaign Generator",
    desc: "Create engaging email marketing sequences that nurture leads and drive conversions. Generate professionally crafted email content for various campaign types.",
    icon: "https://cdn-icons-png.flaticon.com/128/3062/3062634.png",
    category: "Email Marketing",
    slug: "email-campaign",
    aiPrompt:
      "Based on the campaign outline provided, generate a series of email marketing content that nurtures and engages subscribers. Create:\n\n1. Welcome Email:\n- Warm greeting and brand introduction\n- Key value proposition\n- Next steps or expectations\n\n2. Nurture Sequence (3 emails):\n- Educational content structure\n- Engagement points\n- Soft call-to-actions\n\n3. Main Promotional Email:\n- Compelling subject line options\n- Preview text suggestions\n- Attention-grabbing opening\n- Benefit-focused body content\n- Strong call-to-action\n\n4. Follow-up Email:\n- Urgency elements\n- Objection handling\n- Final call-to-action\n\nAnalyze the outline to understand the product/service, target audience, key benefits, and campaign goals. Maintain consistent branding and tone throughout the sequence. Format output with appropriate email marketing best practices and engaging subject lines for each email.",
    form: [
      {
        label:
          "Campaign Type (Welcome Sequence, Product Launch, Promotional, Re-engagement)",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label:
          "Campaign Details (Include: product/service details, target audience, key benefits, campaign goals, and special offers)",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
];

export default templateData;
