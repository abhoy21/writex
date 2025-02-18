const templateData = [
  {
    name: "Meeting Minutes Generator",
    desc: "Transform rough meeting notes into professionally formatted minutes. This tool helps organize discussion points, action items, and decisions into a clear, structured document.",
    category: "Business Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/6533/6533016.png",
    slug: "meeting-minutes",
    aiPrompt:
      "Generate professional meeting minutes based on the rough notes and meeting details provided. Include sections for attendees, discussion points, decisions made, and action items. Format in rich text editor with clear headings and structure.",
    form: [
      {
        label: "Meeting Title and Date",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Meeting Notes and Discussion Points",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Technical Documentation Generator",
    desc: "Create clear, comprehensive technical documentation for software, APIs, or products. Generate user-friendly guides with proper formatting and structure.",
    category: "Technical Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/4882/4882992.png",
    slug: "technical-docs",
    aiPrompt:
      "Generate detailed technical documentation based on the provided specifications. Include overview, setup instructions, usage examples, and API reference where applicable. Format in rich text editor with proper technical writing conventions.",
    form: [
      {
        label: "Project/Product Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Technical Specifications and Details",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Podcast Script Generator",
    desc: "Create engaging podcast scripts with proper structure, transitions, and timing. Perfect for solo shows, interviews, or multi-host formats.",
    category: "Content Creation",
    icon: "https://cdn-icons-png.flaticon.com/128/2769/2769256.png",
    slug: "podcast-script",
    aiPrompt:
      "Generate a conversational podcast script based on the topic and format provided. Include intro, segment transitions, discussion points, and outro. Format for easy reading with timing indicators.",
    form: [
      {
        label: "Episode Topic and Duration",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Episode Format and Key Points",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Case Study Writer",
    desc: "Transform client success stories into compelling case studies. Generate professionally structured content that highlights challenges, solutions, and results.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/9464/9464450.png",
    slug: "case-study",
    aiPrompt:
      "Generate a detailed case study based on the client success story provided. Include sections for challenge, solution, implementation, and measurable results. Format in rich text editor with professional business writing style.",
    form: [
      {
        label: "Client/Project Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Project Details and Results",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Content Calendar",
    desc: "Generate a month's worth of social media content ideas with post types, timing, and campaign integration. Perfect for maintaining consistent social presence.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/4365/4365271.png",
    slug: "social-calendar",
    aiPrompt:
      "Create a detailed social media content calendar with post ideas, content types, and optimal posting times based on the brand niche and goals provided. Include variety of content formats and campaign integration points.",
    form: [
      {
        label: "Brand Niche and Target Audience",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Campaign Goals and Key Messages",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Research Paper Outline",
    desc: "Structure your academic research with a detailed outline generator. Create organized sections with proper academic formatting and citation placeholders.",
    category: "Academic Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/3426/3426653.png",
    slug: "research-outline",
    aiPrompt:
      "Generate a comprehensive research paper outline based on the topic and research goals provided. Include sections for introduction, literature review, methodology, results, and discussion. Format according to specified academic style.",
    form: [
      {
        label: "Research Topic and Academic Field",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Research Objectives and Key Points",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "UX Writing Assistant",
    desc: "Generate user-friendly microcopy for buttons, error messages, and UI elements. Create consistent, clear, and engaging user interface text.",
    category: "UX Design",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055683.png",
    slug: "ux-writing",
    aiPrompt:
      "Generate clear, concise UX copy for the specified interface elements. Consider user context, action clarity, and brand voice. Provide variations for testing.",
    form: [
      {
        label: "Interface Element Type",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Context and User Action Details",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Product Release Notes",
    desc: "Create clear, engaging release notes that communicate updates, improvements, and bug fixes to users. Perfect for software and app updates.",
    category: "Technical Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/2620/2620969.png",
    slug: "release-notes",
    aiPrompt:
      "Generate user-friendly release notes based on the provided update details. Include sections for new features, improvements, bug fixes, and known issues. Format in rich text editor with clear categorization.",
    form: [
      {
        label: "Version Number and Release Date",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Update Details and Changes",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "GitHub README Generator",
    desc: "Create professional README.md files for your GitHub repositories with all essential sections. Includes badges, installation instructions, usage examples, and contribution guidelines.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/11516/11516361.png",
    slug: "github-readme",
    aiPrompt:
      "Generate a comprehensive GitHub README.md file with proper markdown formatting. Include project description, installation steps, usage examples, contribution guidelines, and license information. Add appropriate badges and structured sections.",
    form: [
      {
        label: "Project Name and Type",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Project Features and Setup Requirements",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "API Documentation Generator",
    desc: "Generate detailed API documentation with endpoints, parameters, request/response examples, and authentication details. Perfect for RESTful APIs and microservices.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/8297/8297437.png",
    slug: "api-docs",
    aiPrompt:
      "Generate comprehensive API documentation based on the provided endpoints and specifications. Include authentication methods, request/response formats, error codes, and usage examples. Format in clear technical writing style with proper structure.",
    form: [
      {
        label: "API Name and Version",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "API Endpoints and Specifications",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Package Documentation Generator",
    desc: "Create detailed documentation for software packages, libraries, or modules. Includes installation, configuration, methods, and examples with proper formatting.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/2920/2920244.png",
    slug: "package-docs",
    aiPrompt:
      "Generate comprehensive package documentation including installation instructions, configuration options, API reference, and usage examples. Format with proper technical writing conventions and clear structure.",
    form: [
      {
        label: "Package Name and Language",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Package Features and Functions",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Code Style Guide Generator",
    desc: "Create customized code style guides for development teams. Generate comprehensive guidelines for code formatting, naming conventions, and best practices.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/1005/1005141.png",
    slug: "code-style-guide",
    aiPrompt:
      "Generate a detailed code style guide based on the programming language and team preferences. Include sections for formatting rules, naming conventions, documentation standards, and best practices. Provide examples for each guideline.",
    form: [
      {
        label: "Programming Language",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Team Preferences and Special Requirements",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
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

  {
    name: "YouTube Short Description Generator",
    desc: "Create SEO-optimized, AI-undetectable video descriptions under 1000 characters. Includes relevant hashtags and tags for maximum visibility.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/3938/3938026.png",
    slug: "youtube-short-desc",
    aiPrompt:
      "Generate a 1000-character YouTube video description with SEO optimization. Include 10 relevant hashtags and 35 related tags. Ensure the content is engaging and natural.",
    form: [
      {
        label: "Video Topic/Keywords",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Video Content Details",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "Create attention-grabbing email subject lines using proven copywriting techniques to improve open rates and engagement.",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/4233/4233830.png",
    slug: "email-subject-lines",
    aiPrompt:
      "Generate compelling email subject lines using copywriting principles that drive opens and engagement.",
    form: [
      {
        label: "Email Topic/Purpose",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Key Message Points",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Cold Email Generator",
    desc: "Create effective cold emails with compelling subject lines, structured content, and strong calls to action.",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2258/2258843.png",
    slug: "cold-email",
    aiPrompt:
      "Generate a professional cold email with an attention-grabbing subject line, well-structured body content, and compelling call to action.",
    form: [
      {
        label: "Recipient Industry/Role",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Purpose and Value Proposition",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Follow-up Email Generator",
    desc: "Create strategic follow-up emails that maintain engagement and drive responses with perfect timing and tone.",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/3059/3059997.png",
    slug: "follow-up-email",
    aiPrompt:
      "Generate a strategic follow-up email that references the previous interaction and provides a clear next step.",
    form: [
      {
        label: "Previous Email Context",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Follow-up Purpose",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Newsletter Generator",
    desc: "Create engaging, scannable newsletters that keep your audience informed and interested in your content.",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2665/2665632.png",
    slug: "newsletter",
    aiPrompt:
      "Generate an engaging newsletter with clear sections, compelling headlines, and easy-to-read content.",
    form: [
      {
        label: "Newsletter Topic/Theme",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Key Updates/Content",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Domain Name Generator",
    desc: "Generate creative and available domain name ideas for your website or business.",
    category: "Business Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/3659/3659998.png",
    slug: "domain-names",
    aiPrompt:
      "Generate unique and memorable domain name suggestions based on the business concept and keywords.",
    form: [
      {
        label: "Business Name/Keywords",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Business Description",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "About Us Page Generator",
    desc: "Create a compelling About Us page that tells your brand story and connects with your audience.",
    category: "Web Content",
    icon: "https://cdn-icons-png.flaticon.com/128/3273/3273632.png",
    slug: "about-us",
    aiPrompt:
      "Generate a comprehensive About Us page covering company history, mission, team, achievements, and values.",
    form: [
      {
        label: "Company Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Company Details and History",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Ad Copy Generator",
    desc: "Create compelling ad copy that drives clicks and conversions across different platforms.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1968/1968666.png",
    slug: "ad-copy",
    aiPrompt:
      "Generate attention-grabbing ad copy with clear value propositions and strong calls to action.",
    form: [
      {
        label: "Product/Service Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Key Benefits and Target Audience",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Benefit-Action-Benefit Framework",
    desc: "Structure your marketing message using the powerful Benefit-Action-Benefit framework to highlight value and drive action.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/4727/4727488.png",
    slug: "bab-framework",
    aiPrompt:
      "Generate marketing copy using the B-A-B framework to emphasize benefits and drive action.",
    form: [
      {
        label: "Product/Service Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Key Features and Benefits",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Attention-Interest-Desire-Action Framework",
    desc: "Create compelling marketing content using the AIDA framework to guide customers through the purchase journey.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/6153/6153028.png",
    slug: "aida-framework",
    aiPrompt:
      "Generate marketing content using the AIDA framework to capture attention and drive action.",
    form: [
      {
        label: "Product/Service Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Product Details and Target Audience",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Problem-Agitate-Solution Framework",
    desc: "Develop persuasive content that identifies customer pain points, amplifies the problem, and presents your solution.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/4727/4727488.png",
    slug: "pas-framework",
    aiPrompt:
      "Generate marketing content using the P-A-S framework to highlight problems and present solutions.",
    form: [
      {
        label: "Product/Service Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Customer Pain Points and Solution",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
  {
    name: "Problem-Amplify-Story-Transform-Offer-Response Framework",
    desc: "Create comprehensive marketing narratives that connect with customers through storytelling and clear value propositions.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/3662/3662317.png",
    slug: "pastor-framework",
    aiPrompt:
      "Generate marketing content using the PASTOR framework to build compelling narratives and drive response.",
    form: [
      {
        label: "Product/Service Name",
        field: "input",
        name: "input",
        required: true,
      },
      {
        label: "Problem Description and Transformation Story",
        field: "textarea",
        name: "textarea",
        required: true,
      },
    ],
  },
];

export default templateData;
