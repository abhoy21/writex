const templateData = [
  {
    name: "Meeting Minutes Generator",
    desc: "Transform rough meeting notes into professionally formatted minutes. This tool helps organize discussion points, action items, and decisions into a clear, structured document.",
    category: "Business",
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
  "name": "Slogan Generator",
  "desc": "Create memorable and impactful slogans for your business or brand, crafted to resonate with your target audience and strengthen your brand identity.",
  "category": "Business",
  "icon": "https://cdn-icons-png.flaticon.com/128/1973/1973805.png",
  "slug": "slogan-generator",
  "aiPrompt": "Generate a list of creative, catchy, and brand-aligned slogans based on the provided details. Consider the target audience, brand description, unique selling points, and any preferences for tone or style. Produce slogans that are memorable, impactful, and suitable for marketing and branding use.",
  "form": [
    {
      "label": "Tell Us About Your Brand or Business",
      "field": "textarea",
      "name": "brand_description",
      "required": true
    },
    {
      "label": "Unique Selling Points of Your Business/Brand",
      "field": "textarea",
      "name": "unique_selling_points",
      "required": true
    },
    {
      "label": "Target Audience (Optional)",
      "field": "input",
      "name": "target_audience",
      "required": false
    },
    {
      "label": "Slogan Preferences (Optional)",
      "field": "textarea",
      "name": "slogan_preferences",
      "required": false
    }
  ]
},
{
  "name": "Brand Strategy",
  "desc": "Your ultimate tool for crafting and refining your brand identity. Develop a powerful brand presence and stand out from the competition with clear positioning and strategic insights.",
  "category": "Business",
  "icon": "https://cdn-icons-png.flaticon.com/128/851/851441.png",
  "slug": "brand-strategy-generator",
  "aiPrompt": "Create a comprehensive brand strategy based on the provided details. Include brand positioning, identity direction, mission alignment, industry context, and strategic recommendations to strengthen brand presence and differentiation.",
  "form": [
    {
      "label": "Tell Us About Your Brand or Business",
      "field": "textarea",
      "name": "brand_description",
      "required": true
    },
    {
      "label": "What Is Your Brand's or Company's Mission?",
      "field": "textarea",
      "name": "brand_mission",
      "required": true
    },
    {
      "label": "Industry",
      "field": "input",
      "name": "industry",
      "required": true
    }
  ]
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
  name: "LinkedIn Post",
  desc: "Create short, impactful, and professional LinkedIn posts that stand out. Craft compelling content in any language—optimized for engagement, comments, and interactions while staying plagiarism-free.",
  category: "Content Creation",
  icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
  slug: "linkedin-post-generator",
  aiPrompt: "Create a high-impact, professional LinkedIn post based on the provided details. Ensure the content is engaging, concise, relevant to the target audience, and tailored to the chosen category and tone.",
  form: [
    {
      "label": "What is your post about?",
      "field": "textarea",
      "name": "post_topic",
      "required": true
    },
    {
      "label": "Target Audience",
      "field": "input",
      "name": "target_audience",
      "required": true
    },
    {
      "label": "Category",
      "field": "input",
      "name": "post_category",
      "required": true
    },
    {
      "label": "Tone",
      "field": "input",
      "name": "tone",
      "required": false
    }
  ]
},
{
  "name": "X (Formerly Twitter) Post",
  "desc": "Create short, engaging, and high-impact posts optimized for X (formerly Twitter). Craft attention-grabbing content tailored for virality, engagement, and clarity—all while staying concise and professional.",
  "category": "Content Creation",
  "icon": "https://cdn-icons-png.flaticon.com/128/733/733579.png",
  "slug": "twitter-post-generator",
  "aiPrompt": "Create a concise, engaging, and impactful X (formerly Twitter) post based on the provided details. Ensure the content is optimized for engagement, tailored to the target audience, and aligned with the selected category and tone.",
  "form": [
    {
      "label": "What is your post about?",
      "field": "textarea",
      "name": "post_topic",
      "required": true
    },
    {
      "label": "Target Audience",
      "field": "input",
      "name": "target_audience",
      "required": true
    },
    {
      "label": "Category",
      "field": "input",
      "name": "post_category",
      "required": true
    },
    {
      "label": "Tone",
      "field": "input",
      "name": "tone",
      "required": false
    }
  ]
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
    category: "Content Creation",
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
  "name": "Project Proposal",
  "desc": "This user-friendly tool streamlines the entire proposal creation process, helping you save time and increase your chances of success.",
  "category": "Academic Writing",
  "icon": "https://cdn-icons-png.flaticon.com/128/3132/3132693.png",
  "slug": "project-proposal",
  "aiPrompt": "Using the provided inputs, generate a well-structured and professional project proposal. Ensure clarity, coherence, and relevance based on the field, objectives, and any additional requested sections.",
  "form": [
    {
      "label": "What is the specific field or domain of the project proposal?",
      "field": "input",
      "name": "project_field",
      "required": true
    },
    {
      "label": "What is the main objective or purpose of the project?",
      "field": "input",
      "name": "project_objective",
      "required": true
    },
    {
      "label": "Are there specific sections or details you want included in the project proposal? (Optional)",
      "field": "textarea",
      "name": "additional_sections",
      "required": false
    }
  ]
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
    category: "Coding",
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
    category: "Coding",
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
    category: "Coding",
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
    category: "Coding",
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
    category: "Blog",
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
    category: "Youtube Tool",
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
  "name": "Youtube Title & Thumbnail Ideas",
  "desc": "A smart AI tool that generates catchy YouTube video titles and thumbnail ideas to boost your audience engagement.",
  "category": "Youtube Tool",
  "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
  "slug": "youtube-title-thumbnail-ideas",
  "aiPrompt": "Generate creative, high-engagement YouTube titles and thumbnail ideas based on the provided keywords, target audience, and region. Provide results in a clear and concise bullet format.",
  "form": [
    {
      "label": "Enter Keywords",
      "field": "input",
      "name": "keywords",
      "required": true
    },
    {
      "label": "Target Audience",
      "field": "input",
      "name": "target_audience",
      "required": true
    },
    {
      "label": "Region (Optional)",
      "field": "input",
      "name": "region",
      "required": false
    }
  ]
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
  "name": "Paraphrasing Content",
  "desc": "Effortlessly transform your text into a fresh, clear, and polished version while maintaining its original meaning and intent.",
  "category": "Rewriting Tool",
  "icon": "https://cdn-icons-png.flaticon.com/128/7991/7991825.png",
  "slug": "paraphrasing-content-tool",
  "aiPrompt": "Rewrite the provided text into a fresh, clear, and engaging version while preserving the original meaning. Adapt the tone or style based on the user’s preference, if provided.",
  "form": [
    {
      "label": "Enter the Text You Want to Rewrite",
      "field": "textarea",
      "name": "input_text",
      "required": true
    },
    {
      "label": "Preferred Tone or Style (Optional)",
      "field": "input",
      "name": "tone_preference",
      "required": false
    }
  ]
},
 {
  "name": "Kids Video Script Generator",
  "desc": "Create fun, engaging, and educational video scripts for kids with ease. This tool helps you quickly generate stories, rhymes, adventures, and learning content tailored to specific age groups.",
  "category": "Writing Assistant",
  "icon": "https://cdn-icons-png.flaticon.com/128/861/861121.png",
  "slug": "kids-video-script-generator",
  "aiPrompt": "Generate a kid-friendly video script based on the user's inputs. Consider the selected age group, theme, characters, duration, and topic. Ensure the script is engaging, educational, simple, and suitable for children's comprehension levels.",
  "form": [
    {
      "label": "Characters (Number or Names)",
      "field": "input",
      "name": "characters",
      "required": false
    },
    {
      "label": "Desired Duration",
      "field": "input",
      "name": "duration",
      "required": true
    },
    {
      "label": "Age Group",
      "field": "select",
      "name": "age_group",
      "required": true,
      "options": [
        "Toddlers (1-3 years)",
        "Preschoolers (3-5 years)",
        "Early Elementary (5-7 years)",
        "Late Elementary (7-10 years)",
        "Preteens (10-12 years)"
      ]
    },
    {
      "label": "Theme",
      "field": "select",
      "name": "theme",
      "required": true,
      "options": [
        "Learning",
        "Rhymes",
        "Storytelling",
        "Adventure",
        "Joke",
        "Friendship"
      ]
    },
    {
      "label": "Video Topic or Title",
      "field": "input",
      "name": "topic",
      "required": false
    }
  ]
},
{
  "name": "Presentation Slides Text Generator",
  "desc": "Generate clear, engaging, and well-structured text for your presentation slides. This tool helps you quickly craft slide content tailored to your topic, industry, and tone.",
  "category": "Writing Assistant",
  "icon": "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
  "slug": "presentation-slides-text-generator",
  "aiPrompt": "Generate structured and engaging presentation slide text based on the topic, tone, and industry provided. Include title slides, key points, explanations, and takeaway messages. Ensure clarity, professionalism, and alignment with the selected tone.",
  "form": [
    {
      "label": "Topic or Theme of the Presentation",
      "field": "input",
      "name": "presentation_topic",
      "required": true
    },
    {
      "label": "Tone",
      "field": "input",
      "name": "tone",
      "required": true
    },
    {
      "label": "Industry",
      "field": "input",
      "name": "industry",
      "required": true
    }
  ]
},
{
  "name": "Document Writer",
  "desc": "Craft well-organized, professional, and polished documents with ease. This tool generates clear, structured, and plagiarism-free content tailored to your specific requirements.",
  "category": "Writing Assistant",
  "icon": "https://cdn-icons-png.flaticon.com/128/2883/2883849.png",
  "slug": "document-writer",
  "aiPrompt": "Create a well-structured and professional document based on the user's inputs. Follow the specified document type, main topic, and any provided sections or guidelines. Ensure the content is clear, organized, error-free, and plagiarism-free while aligning with the user's goals and requirements.",
  "form": [
    {
      "label": "Type of Document",
      "field": "input",
      "name": "document_type",
      "required": true
    },
    {
      "label": "Main Topic or Title of the Document",
      "field": "input",
      "name": "document_title",
      "required": true
    },
    {
      "label": "Content, Sections, Guidelines, or Requirements",
      "field": "textarea",
      "name": "document_requirements",
      "required": false
    }
  ]
},
{
  "name": "Report Writer",
  "desc": "Generate clear, structured, and professional reports instantly. This tool helps you create high-quality reports tailored to your title and requirements with just one click.",
  "category": "Writing Assistant",
  "icon": "https://cdn-icons-png.flaticon.com/128/942/942748.png",
  "slug": "report-writer",
  "aiPrompt": "Create a well-structured, professional report based on the provided report type, title, and any additional instructions. Ensure the content is clear, informative, organized, and suitable for the selected report format. Maintain accuracy, coherence, and a polished writing style.",
  "form": [
    {
      "label": "Type of Report",
      "field": "input",
      "name": "report_type",
      "required": true
    },
    {
      "label": "Title of the Report",
      "field": "input",
      "name": "report_title",
      "required": true
    },
    {
      "label": "Additional Details or Requirements (Optional)",
      "field": "textarea",
      "name": "report_details",
      "required": false
    }
  ]
},
  {
    name: "Add Emojis to Text",
    desc: "Enhance your content with relevant emojis that add personality and engagement. Perfect for social media posts, messages, and informal content.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "Writing Assistant",
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
    category: "Content Creation",
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
    category: "Content Creation",
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
    category: "Content Creation",
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
    category: "Rewriting Tool",
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
    category: "Coding",
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
  "name": "Sales Email",
  "desc": "Generate high-converting sales emails tailored to your product, brand voice, and ideal customer. Perfect for reaching prospects with clarity and impact.",
  "category": "Email Marketing",
  "icon": "https://cdn-icons-png.flaticon.com/128/561/561127.png",
  "slug": "sales-email-generator",
  "aiPrompt": "Create a persuasive, engaging, and brand-aligned sales email based on the provided product name, product details, ideal customer description, and preferred word count. Highlight the key features, benefits, and value proposition while maintaining a professional and compelling tone. Ensure the email flows naturally and motivates the reader to take action.",
  "form": [
    {
      "label": "Product/Brand Name",
      "field": "input",
      "name": "product_name",
      "required": true
    },
    {
      "label": "What Are You Selling or Promoting? (Include Key Features)",
      "field": "textarea",
      "name": "product_details",
      "required": true
    },
    {
      "label": "Who Is Your Ideal Customer? (Describe Their Interests)",
      "field": "textarea",
      "name": "ideal_customer",
      "required": true
    },
    {
      "label": "Minimum Word Count",
      "field": "number",
      "name": "min_words",
      "required": true
    },
    {
      "label": "Maximum Word Count",
      "field": "number",
      "name": "max_words",
      "required": true
    }
  ]
},
{
  "name": "Customer Support Call",
  "desc": "Create professional and effective customer support call scripts to help you address customer issues confidently and provide clear solutions.",
  "category": "Support & Sales",
  "icon": "https://cdn-icons-png.flaticon.com/128/597/597177.png",
  "slug": "customer-support-call",
  "aiPrompt": "Generate a professional, empathetic, and solution-oriented customer support call script based on the provided product or service description, the issues reported by customers, and the solution offered. Make the script engaging, easy to follow, and suitable for real customer interactions. Include greeting, problem acknowledgment, step-by-step assistance, reassurance, and a clear closing.",
  "form": [
    {
      "label": "Describe Your Product, Service, or Business",
      "field": "textarea",
      "name": "product_description",
      "required": true
    },
    {
      "label": "Describe the Issues or Problems Reported by Customers",
      "field": "textarea",
      "name": "customer_issues",
      "required": true
    },
    {
      "label": "What Solution Do You Provide for These Issues?",
      "field": "textarea",
      "name": "customer_solution",
      "required": true
    }
  ]
},
{
  "name": "Call Scripts Generator",
  "desc": "Craft effective, clear, and professional call scripts tailored to your customer interactions. Perfect for support teams, sales teams, or service-based businesses.",
  "category": "Support & Sales",
  "icon": "https://cdn-icons-png.flaticon.com/128/597/597177.png",
  "slug": "call-scripts-generator",
  "aiPrompt": "Generate a professional and engaging call script based on the provided call type, product or service description, and any extra details. Structure the script with a warm introduction, purpose of the call, key talking points, guidance for handling customer responses, and a smooth closing. Ensure the tone is customer-friendly and aligned with the selected call type.",
  "form": [
    {
      "label": "Additional Information (Optional)",
      "field": "textarea",
      "name": "extra_info",
      "required": false
    },
    {
      "label": "Describe Your Product, Service, or Business",
      "field": "textarea",
      "name": "product_description",
      "required": true
    },
    {
      "label": "Select the Type of Phone Call",
      "field": "select",
      "name": "call_type",
      "required": true,
      "options": [
        "Welcome Call",
        "Informational Call",
        "Payment Reminder Call",
        "Customer Survey Call"
      ]
    }
  ]
},
{
  "name": "Transactional Emails",
  "desc": "Craft clear, professional, and effective transactional emails tailored to your specific purpose—whether it's confirmations, notifications, updates, or alerts.",
  "category": "Support & Sales",
  "icon": "https://cdn-icons-png.flaticon.com/128/561/561127.png",
  "slug": "transactional-emails",
  "aiPrompt": "Generate a clear, concise, and professional transactional email based on the purpose, context, tone, and all provided inputs. Ensure the email follows a structured format including subject line, greeting, message body, action steps, and closing. Keep the content aligned with the transactional intent and incorporate a CTA when provided.",
  "form": [
    {
      "label": "Purpose and Context of the Transactional Email",
      "field": "textarea",
      "name": "purpose_context",
      "required": true
    },
    {
      "label": "Tone",
      "field": "input",
      "name": "tone",
      "required": true
    },
    {
      "label": "Minimum Words (Optional)",
      "field": "input",
      "name": "min_words",
      "required": false
    },
    {
      "label": "Maximum Words (Optional)",
      "field": "input",
      "name": "max_words",
      "required": false
    },
    {
      "label": "Call to Action (Optional)",
      "field": "input",
      "name": "cta",
      "required": false
    }
  ]
},
{
  "name": "Develop Sales Process",
  "desc": "This tool provides personalized, strategic guidance for creating an effective sales process, tailored to your unique business needs and customer profiles, enhancing your team's ability to connect with prospects and close deals successfully.",
  "category": "Support & Sales",
  "icon": "https://cdn-icons-png.flaticon.com/128/3500/3500833.png",
  "slug": "develop-sales-process",
  "aiPrompt": "Use the provided inputs to create a tailored, step-by-step sales process. Analyze the product or service, business overview, and target audience to develop a structured approach for lead generation, qualification, nurturing, pitching, objection handling, and closing. Provide actionable strategies, scripts, and recommendations optimized for the user's specific business.",
  "form": [
    {
      "label": "Describe the product or service you want to sell",
      "field": "textarea",
      "name": "product_description",
      "required": true
    },
    {
      "label": "Provide an overview of your business",
      "field": "textarea",
      "name": "business_overview",
      "required": true
    },
    {
      "label": "Who is your target customer or audience?",
      "field": "textarea",
      "name": "target_audience",
      "required": true
    }
  ]
},
{
  "name": "FAQ Generator",
  "desc": "This tool efficiently guides you in creating tailored FAQs, ensuring your questions and answers are directly relevant and clearly structured for any specific topic and context.",
  "category": "Support & Sales",
  "icon": "https://cdn-icons-png.flaticon.com/128/471/471662.png",
  "slug": "faq-generator",
  "aiPrompt": "Using the provided inputs, generate a clear and structured FAQ list. Ensure questions and answers are relevant, helpful, and properly tailored to the topic and intended usage context.",
  "form": [
    {
      "label": "What is the main topic or subject for the FAQs?",
      "field": "input",
      "name": "faq_topic",
      "required": true
    },
    {
      "label": "Where will these FAQs be used?",
      "field": "input",
      "name": "faq_usage_location",
      "required": true
    }
  ]
},

  {
    name: "YouTube Short Description Generator",
    desc: "Create SEO-optimized, AI-undetectable video descriptions under 1000 characters. Includes relevant hashtags and tags for maximum visibility.",
    category: "Youtube Tool",
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
  "name": "YouTube Audience Analysis",
  "desc": "Analyze YouTube video titles to uncover detailed insights about your potential audience—their characteristics, interests, situations, and goals—helping you tailor your content effectively.",
  "category": "Youtube Tool",
  "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
  "slug": "youtube-audience-analysis",
  "aiPrompt": "Analyze the YouTube video topic or title provided and generate a detailed breakdown of the potential audience. Identify who they are, their demographics, interests, current situations, pain points, motivations, and goals. Provide insights that can help creators shape their content to better resonate with the intended viewers.",
  "form": [
    {
      "label": "YouTube Video Topic or Title",
      "field": "input",
      "name": "video_title",
      "required": true
    },
    {
      "label": "Category",
      "field": "input",
      "name": "video_category",
      "required": true
    }
  ]
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
    icon: "https://cdn-icons-png.flaticon.com/128/4144/4144781.png",
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
    icon: "https://cdn-icons-png.flaticon.com/128/2645/2645883.png",
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
    category: "Web Content",
    icon: "https://cdn-icons-png.flaticon.com/128/9503/9503185.png",
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
  "name": "Business Model Generator",
  "desc": "An easy tool to help you plan, refine, and improve your business strategy. Get clear insights to shape a strong and sustainable business model.",
  "category": "Business",
  "icon": "https://cdn-icons-png.flaticon.com/128/3225/3225193.png",
  "slug": "business-model-generator",
  "aiPrompt": "Generate a complete and strategic business model based on the provided details. Include value proposition, target audience, revenue streams, distribution channels, key activities, resources, and potential challenges. Ensure the output is practical and aligns with the industry context and the user's strengths or business idea.",
  "form": [
    {
      "label": "Enter Your Business Idea or Share Your Interests & Strengths",
      "field": "textarea",
      "name": "business_idea",
      "required": true
    },
    {
      "label": "Industry",
      "field": "input",
      "name": "industry",
      "required": true
    }
  ]
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
  "name": "Podcast Ad",
  "desc": "This tool helps you to create a podcast ad for your brand or product.",
  "category": "Marketing",
  "icon": "https://cdn-icons-png.flaticon.com/128/1968/1968666.png",
  "slug": "podcast-ad-generator",
  "aiPrompt": "Create a compelling and engaging podcast advertisement based on the provided details. Highlight the unique selling points, desired listener actions, offers, and target audience in a clear, persuasive tone.",
  "form": [
    {
      "label": "What are you promoting & what's unique about the product?",
      "field": "textarea",
      "name": "product_details",
      "required": true
    },
    {
      "label": "What actions do you want your listeners to take?",
      "field": "textarea",
      "name": "listener_actions",
      "required": true
    },
    {
      "label": "Is there any offer?",
      "field": "input",
      "name": "offer",
      "required": false
    },
    {
      "label": "Who are the target audience?",
      "field": "input",
      "name": "target_audience",
      "required": true
    }
  ]
},
{
  "name": "Social Media Ad",
  "desc": "Generate high-converting social media ads tailored for platforms like Facebook, Instagram, and TikTok.",
  "category": "Marketing",
  "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384005.png",
  "slug": "social-media-ad-generator",
  "aiPrompt": "Generate a high-impact social media ad based on the provided details. Highlight the key benefits, target audience, and a strong call to action.",
  "form": [
    {
      "label": "Product or Service Details",
      "field": "textarea",
      "name": "product_details",
      "required": true
    },
    {
      "label": "Target Audience",
      "field": "input",
      "name": "target_audience",
      "required": true
    },
    {
      "label": "Key Features or Benefits",
      "field": "textarea",
      "name": "key_features",
      "required": true
    },
    {
      "label": "Call to Action",
      "field": "input",
      "name": "cta",
      "required": false
    }
  ]
},
{
  "name": "Product Description",
  "desc": "Generate compelling, SEO-optimized product descriptions that increase sales and engagement.",
  "category": "Marketing",
  "icon": "https://cdn-icons-png.flaticon.com/128/1027/1027128.png",
  "slug": "product-description-generator",
  "aiPrompt": "Create an engaging, persuasive, and SEO-friendly product description using the details provided. Highlight key features, benefits, and the target customer.",
  "form": [
    {
      "label": "Product Name",
      "field": "input",
      "name": "product_name",
      "required": true
    },
    {
      "label": "Product Features",
      "field": "textarea",
      "name": "product_features",
      "required": true
    },
    {
      "label": "Target Audience",
      "field": "input",
      "name": "target_audience",
      "required": true
    },
    {
      "label": "Tone (optional)",
      "field": "input",
      "name": "tone"
    }
  ]
},
{
  "name": "Marketing Script",
  "desc": "Generate persuasive marketing scripts for promotional videos, sales pitches, and branded content.",
  "category": "Marketing",
  "icon": "https://cdn-icons-png.flaticon.com/128/3208/3208707.png",
  "slug": "marketing-script-generator",
  "aiPrompt": "Create a powerful, engaging marketing script tailored to your product, target audience, and campaign goals.",
  "form": [
    {
      "label": "Product or Service Details",
      "field": "textarea",
      "name": "product_details",
      "required": true
    },
    {
      "label": "Target Audience",
      "field": "input",
      "name": "target_audience",
      "required": true
    },
    {
      "label": "Purpose of the Script",
      "field": "input",
      "name": "script_purpose",
      "required": true
    },
    {
      "label": "Tone (optional)",
      "field": "input",
      "name": "tone"
    }
  ]
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
    icon: "https://cdn-icons-png.flaticon.com/128/4233/4233830.png",
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
  {
  "name": "Performance Appraisal Letter",
  "desc": "Generate professional and personalized performance appraisal letters that highlight employee achievements, strengths, and areas of improvement for the appraisal cycle.",
  "category": "HR",
  "icon": "https://cdn-icons-png.flaticon.com/128/4233/4233830.png",
  "slug": "performance-appraisal-letter-generator",
  "aiPrompt": "Write a formal and personalized performance appraisal letter. Use the provided details to highlight the employee’s role, key achievements, strengths, improvement areas, and overall performance during the appraisal year. Maintain a positive and professional tone suitable for HR communication.",
  "form": [
    {
      "label": "Employee Name",
      "field": "input",
      "name": "employee_name",
      "required": true
    },
    {
      "label": "Role/Designation",
      "field": "input",
      "name": "designation",
      "required": true
    },
    {
      "label": "Key Achievements",
      "field": "textarea",
      "name": "achievements",
      "required": true
    },
    {
      "label": "Areas of Improvement",
      "field": "textarea",
      "name": "improvement_areas",
      "required": true
    },
    {
      "label": "Additional Notes or Specific Sections to Include (Optional)",
      "field": "textarea",
      "name": "additional_notes",
      "required": false
    }
  ]
},
{
  "name": "Relieving Letter Generator",
  "desc": "Generate a formal relieving letter to communicate that an employee's resignation has been accepted and their separation process has been completed.",
  "category": "HR",
  "icon": "https://cdn-icons-png.flaticon.com/128/3588/3588658.png",
  "slug": "relieving-letter-generator",
  "aiPrompt": "Write a formal relieving letter using the details provided. Clearly state the acceptance of the employee’s resignation, their last working date, job title, and any additional notes. Maintain a professional and courteous HR tone while ensuring clarity in employment separation.",
  "form": [
    {
      "label": "Employee Name",
      "field": "input",
      "name": "employee_name",
      "required": true
    },
    {
      "label": "Job Title",
      "field": "input",
      "name": "job_title",
      "required": true
    },
    {
      "label": "Relieving / Last Working Date",
      "field": "input",
      "name": "last_working_date",
      "required": true
    },
    {
      "label": "Additional Notes or Specific Sections (Optional)",
      "field": "textarea",
      "name": "additional_notes",
      "required": false
    }
  ]
},
{
  "name": "Employee Recognition Letter",
  "desc": "Create a polished and professional recognition letter to appreciate and acknowledge an employee’s outstanding contributions or achievements.",
  "category": "HR",
  "icon": "https://cdn-icons-png.flaticon.com/128/3209/3209265.png",
  "slug": "employee-recognition-letter-generator",
  "aiPrompt": "Write a professional employee recognition letter based on the provided details. Clearly highlight the employee’s achievements, the reason for recognition, and the positive impact of their contributions. Maintain a warm, motivating, and formal HR tone.",
  "form": [
    {
      "label": "Employee Name",
      "field": "input",
      "name": "employee_name",
      "required": true
    },
    {
      "label": "Reason for Recognition",
      "field": "textarea",
      "name": "recognition_reason",
      "required": true
    },
    {
      "label": "Additional Notes or Sections (Optional)",
      "field": "textarea",
      "name": "additional_notes",
      "required": false
    }
  ]
},
{
  "name": "Potential Candidate Reach Out Email Generator",
  "desc": "Assists in creating personalized and professional outreach emails to connect with potential job candidates.",
  "category": "HR",
  "icon": "https://cdn-icons-png.flaticon.com/128/2989/2989928.png",
  "slug": "candidate-reach-out-email-generator",
  "aiPrompt": "Write a personalized and professional candidate outreach email using the provided details. Clearly introduce the company, the job role, how you found the candidate’s profile, and why you believe they could be a great fit. Maintain a friendly, respectful, and engaging tone suitable for talent acquisition communication.",
  "form": [
    {
      "label": "Candidate Name",
      "field": "input",
      "name": "candidate_name",
      "required": true
    },
    {
      "label": "Role (Job Title)",
      "field": "input",
      "name": "job_role",
      "required": true
    },
    {
      "label": "Company Name",
      "field": "input",
      "name": "company_name",
      "required": true
    },
    {
      "label": "Tell About Your Company",
      "field": "textarea",
      "name": "company_description",
      "required": true
    },
    {
      "label": "Roles and Responsibilities",
      "field": "textarea",
      "name": "roles_responsibilities",
      "required": true
    },
    {
      "label": "Where / How You Found the Candidate's Profile",
      "field": "input",
      "name": "profile_source",
      "required": true
    },
    {
      "label": "Tell More About the Person You’re Contacting",
      "field": "textarea",
      "name": "candidate_details",
      "required": true
    },
    {
      "label": "Additional Notes (Optional)",
      "field": "textarea",
      "name": "additional_notes",
      "required": false
    }
  ]
},
{
  "name": "Employee Performance Review",
  "desc": "Generate detailed, insightful, and constructive employee performance reviews based on achievements, strengths, improvement areas, and future goals.",
  "category": "HR",
  "icon": "https://cdn-icons-png.flaticon.com/128/942/942748.png",
  "slug": "employee-performance-review-generator",
  "aiPrompt": "Write a comprehensive employee performance review using the provided details. Highlight the employee’s role, key accomplishments, strengths, areas of improvement, and future development goals. Maintain a professional, supportive, and constructive tone appropriate for HR evaluation.",
  "form": [
    {
      "label": "Employee Name",
      "field": "input",
      "name": "employee_name",
      "required": true
    },
    {
      "label": "Role / Designation",
      "field": "input",
      "name": "designation",
      "required": true
    },
    {
      "label": "Major Accomplishments During This Period",
      "field": "textarea",
      "name": "accomplishments",
      "required": true
    },
    {
      "label": "Strengths or Outstanding Skills (Optional)",
      "field": "textarea",
      "name": "strengths",
      "required": false
    },
    {
      "label": "Areas of Improvement",
      "field": "textarea",
      "name": "improvement_areas",
      "required": true
    },
    {
      "label": "Future Goals or Challenges (Optional)",
      "field": "textarea",
      "name": "future_goals",
      "required": false
    }
  ]
},
{
  "name": "Interview Feedback",
  "desc": "Analyze interview transcripts to generate clear, structured feedback and help make informed hiring decisions. Includes an overall candidate rating out of 100.",
  "category": "HR",
  "icon": "https://cdn-icons-png.flaticon.com/128/4711/4711987.png",
  "slug": "interview-feedback-generator",
  "aiPrompt": "Analyze the interview transcript and generate a structured interview feedback summary. Evaluate the candidate’s communication, technical skills, problem-solving ability, cultural fit, strengths, and weaknesses. Provide a clear hiring recommendation and rate the candidate out of 100 based on the provided role requirements.",
  "form": [
    {
      "label": "Role (Job Title)",
      "field": "input",
      "name": "role",
      "required": true
    },
    {
      "label": "Interview Transcript",
      "field": "textarea",
      "name": "transcript",
      "required": true
    },
    {
      "label": "Additional Notes (Optional)",
      "field": "textarea",
      "name": "additional_notes",
      "required": false
    }
  ]
},
{
  "name": "Fun Friday Ideas",
  "desc": "Generate exciting, creative, and enjoyable ideas for organizing your Fun Friday event based on your preferences and time availability.",
  "category": "HR",
  "icon": "https://cdn-icons-png.flaticon.com/128/3081/3081559.png",
  "slug": "fun-friday-ideas-generator",
  "aiPrompt": "Suggest fun, engaging, and creative Fun Friday ideas based on the selected event location, preparation time, event duration, and any additional notes. Provide a mix of simple, interactive, and team-building ideas suitable for the chosen environment.",
  "form": [
    {
      "label": "Preferred Event Location",
      "field": "select",
      "name": "event_location",
      "required": true,
      "options": [
        "At the office",
        "Open space (e.g., playground)",
        "Virtually (online)",
        "Others"
      ]
    },
    {
      "label": "How Long Do You Have to Prepare?",
      "field": "input",
      "name": "prep_time",
      "required": true
    },
    {
      "label": "Event Duration",
      "field": "input",
      "name": "event_duration",
      "required": true
    },
    {
      "label": "Anything Else You Want to Note? (Optional)",
      "field": "textarea",
      "name": "additional_notes",
      "required": false
    }
  ]
},
{
  "name": "Interview Scheduling Email Generator",
  "desc": "Draft professional and clear interview scheduling emails effortlessly with MeetEase. Simplify the process of coordinating interviews with candidates.",
  "category": "HR",
  "icon": "https://cdn-icons-png.flaticon.com/128/3062/3062634.png",
  "slug": "interview-scheduling-email-generator",
  "aiPrompt": "Write a professional interview scheduling email using the provided details. Clearly mention the role, company name, interview date and time, interview mode, and address if applicable. Maintain a polite, concise, and informative tone suitable for HR communication.",
  "form": [
    {
      "label": "Candidate Name",
      "field": "input",
      "name": "candidate_name",
      "required": true
    },
    {
      "label": "Role (Job Title)",
      "field": "input",
      "name": "role",
      "required": true
    },
    {
      "label": "Company Name",
      "field": "input",
      "name": "company_name",
      "required": true
    },
    {
      "label": "Interview Date & Time",
      "field": "input",
      "name": "interview_datetime",
      "required": true
    },
    {
      "label": "Interview Mode",
      "field": "select",
      "name": "interview_mode",
      "required": true,
      "options": [
        "Offline",
        "Online"
      ]
    },
    {
      "label": "Interview Address (Optional)",
      "field": "textarea",
      "name": "interview_address",
      "required": false
    },
    {
      "label": "Additional Information (Optional)",
      "field": "textarea",
      "name": "additional_info",
      "required": false
    }
  ]
},

];

export default templateData;
