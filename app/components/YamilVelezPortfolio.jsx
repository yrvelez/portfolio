'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Book, BookOpen, Users, ChevronRight, Home, Menu, X, Terminal, ExternalLink, ChevronDown, Search, Link2, Download, ArrowUpRight, FileText, Star, Code, Database, Eye, Send, Info, BrainCircuit } from 'lucide-react';

const YamilVelezPortfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: "Hello! I'm a research assistant trained on Yamil's work. How can I help you understand his research?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Scroll to bottom of chat on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);
  
  // Profile information
  const profile = {
    name: "Yamil Ricardo Velez",
    title: "Assistant Professor of Political Science",
    institution: "Columbia University",
    bio: "I am an Assistant Professor of Political Science at Columbia University, specializing in political psychology with a focus on attitude and belief change. My research examines how the quality of political information influences political engagement and representation, paying particular attention to the impact of misinformation within immigrant communities. My most recent work examines the potential for generative artificial intelligence to improve our understanding of public opinion."
  };
  
  // Research categories and papers
  const researchCategories = [
    {
      name: "Current Research",
      icon: <Star size={18} className="text-yellow-400" />,
      color: "border-yellow-400",
      bgColor: "bg-yellow-400/10",
      papers: [
        {
          title: "Do Personal Issue Priorities Trump Group Policies? Exploring the Impact of Deeply-Held Issues among Latinos using Personalized Conjoint Experiments",
          status: "R&R at Journal of Politics",
          url: "https://preprints.apsanet.org/engage/apsa/article-details/6733803ef9980725cff66b99"
        },
        {
          title: "Hidden Layers of Representation: Revisiting the Second Face of Power using AI-assisted surveys of Public Opinion",
          collaborators: "with Alec Ewig",
          url: "https://www.dropbox.com/scl/fi/ou5mxjg0mmf4x43qyhcxi/Velez_Ewig_RetrievalAugmentedRepresentation.pdf?rlkey=x6ce4cxa4hcgkerjp6t2vm0le&dl=0"
        }
      ]
    },
    {
      name: "Misinformation, Generative AI, and Persuasion",
      icon: <Eye size={18} className="text-blue-400" />,
      color: "border-blue-400",
      bgColor: "bg-blue-400/10",
      papers: [
        {
          title: "Crowdsourced Adaptive Surveys",
          journal: "Political Analysis",
          status: "forthcoming",
          url: "https://www.dropbox.com/scl/fi/34yw3p0613xdhczyvpugs/CSAS.pdf?rlkey=o10ljxra83xpcj4po2kh9iin0&dl=0"
        },
        {
          title: "Improving Debriefing Practices for Participants in Social Science Experiments",
          journal: "PNAS Nexus",
          collaborators: "with Katherine Clayton, Ethan Porter, and Thomas Wood",
          url: "https://academic.oup.com/pnasnexus/article/3/12/pgae502/7913313"
        },
        {
          title: "Confronting Core Issues: A Critical Assessment of Attitude Polarization using Tailored Experiments",
          journal: "American Political Science Review",
          collaborators: "with Patrick Liu",
          url: "https://www.cambridge.org/core/journals/american-political-science-review/article/confronting-core-issues-a-critical-assessment-of-attitude-polarization-using-tailored-experiments/0753FAC7590FC8D7F99ED413B367E74B"
        },
        {
          title: "Guide for creating tailored experiments",
          note: "Featured on The Atlantic's \"Good on Paper\" Podcast",
          url: "https://tailoredexperiments.com/"
        },
        {
          title: "Latino-Targeted Misinformation and The Power of Factual Corrections",
          journal: "Journal of Politics",
          collaborators: "with Ethan Porter and Thomas Wood",
          url: "https://www.journals.uchicago.edu/doi/full/10.1086/722345"
        },
        {
          title: "Factual Corrections Eliminate False Beliefs about Covid-19 Vaccines",
          journal: "Public Opinion Quarterly",
          collaborators: "with Ethan Porter and Thomas Wood",
          url: "https://osf.io/p47bt/"
        },
        {
          title: "Placebo Selection in Survey Experiments: An Agnostic Approach",
          journal: "Political Analysis",
          collaborators: "with Ethan Porter",
          url: "https://www.dropbox.com/s/gqfp5ex6olpu485/portervelez_placebo.pdf?dl=0"
        },
        {
          title: "Correcting Covid-19 Misinformation in Ten Countries",
          journal: "Royal Society Open Science",
          collaborators: "with Ethan Porter and Thomas Wood",
          url: "https://osf.io/4stbm/"
        }
      ]
    },
    {
      name: "Latino Politics, Immigrant Incorporation, and the Politics of Immigration",
      icon: <Database size={18} className="text-green-400" />,
      color: "border-green-400",
      bgColor: "bg-green-400/10",
      papers: [
        {
          title: "Reversion to the Mean or Their Version of The Dream? Latino Voting in an Age of Populism",
          journal: "American Political Science Review",
          collaborators: "with Bernard Fraga and Emily West",
          url: "https://www.cambridge.org/core/journals/american-political-science-review/article/reversion-to-the-mean-or-their-version-of-the-dream-latino-voting-in-an-age-of-populism/D5FDF66C474541B3AABB4498BA59184C"
        },
        {
          title: "Residential Mobility Constraints and Immigration Restrictionism",
          journal: "Political Behavior",
          url: "https://link.springer.com/article/10.1007/s11109-018-9517-x"
        },
        {
          title: "The Political Consequences of Ethnically Targeted Incarceration: Evidence from Japanese-American Internment During WWII",
          journal: "Journal of Politics",
          collaborators: "with Mayya Komisarchik and Maya Sen",
          url: "https://www.mayyakomisarchik.com/_files/ugd/0fdc30_7394c6747d144d62b18588ca03a1bfa2.pdf"
        },
        {
          title: "Tuning In, Not Turning Out: Evaluating the Impact of Ethnic Television on Political Participation",
          journal: "American Journal of Political Science",
          collaborators: "with Benjamin Newman",
          url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ajps.12427"
        }
      ]
    },
    {
      name: "Experimental and Survey Methodology",
      icon: <Code size={18} className="text-purple-400" />,
      color: "border-purple-400",
      bgColor: "bg-purple-400/10",
      papers: [
        {
          title: "Language Barriers: Causal Evidence of Linguistic Item Bias in Multilingual Surveys",
          journal: "Political Behavior",
          collaborators: "with Angel Saavedra Cisneros and Jose Gomez",
          url: "https://www.dropbox.com/s/exmm16s4kmakzst/translation.pdf?dl=0"
        },
        {
          title: "Analyze the Attentive and Bypass Bias: Mock Vignette Checks in Survey Experiments",
          journal: "Political Science Research & Methods",
          collaborators: "with John V. Kane and Jason Barabas",
          url: "https://preprints.apsanet.org/engage/api-gateway/apsa/assets/orp/resource/item/5f825740efc0c2001974f0f7/original/analyze-the-attentive-bypass-bias-mock-vignette-checks-in-survey-experiments.pdf"
        },
        {
          title: "Assessing Contextual Measurement Strategies",
          journal: "Journal of Politics",
          collaborators: "with Grace Wong",
          url: "http://www.journals.uchicago.edu/doi/abs/10.1086/691281"
        }
      ]
    },
    {
      name: "Local Environments and Demographic Change",
      icon: <FileText size={18} className="text-red-400" />,
      color: "border-red-400",
      bgColor: "bg-red-400/10",
      papers: [
        {
          title: "Measuring Descriptive Representation at Scale: Methods for Predicting the Race and Ethnicity of Public Officials",
          journal: "British Journal of Political Science",
          collaborators: "with Diana Da In Lee",
          url: "https://www.dropbox.com/s/i3zc3n6mpnnmxxl/Ethnoracial_Pred.pdf?dl=0"
        },
        {
          title: "American Local Government Elections Database",
          journal: "Nature Scientific Data",
          collaborators: "with Christopher Warshaw, Justin de Benedictis-Kessner, and Diana Da In Lee",
          url: "https://scholar.harvard.edu/files/jdbk/files/localelections_data.pdf"
        },
        {
          title: "Rising Tides or Political Ripcurrents? Gentrification and Minority Representation in 166 cities",
          journal: "Urban Affairs Review",
          collaborators: "with Diana Da In Lee",
          url: "https://journals.sagepub.com/doi/abs/10.1177/10780874231210768"
        },
        {
          title: "Nothing to Fear? Anxiety, Numeracy, and Demographic Perceptions",
          journal: "Research & Politics",
          collaborators: "with students in my 2017 Political Science by the Numbers class at Wesleyan",
          url: "http://journals.sagepub.com/doi/full/10.1177/2053168018794583"
        },
        {
          title: "Racial Diversity and the Dynamics of Authoritarianism",
          journal: "Journal of Politics",
          collaborators: "with Howard Lavine",
          url: "http://www.journals.uchicago.edu/doi/abs/10.1086/688078"
        },
        {
          title: "Diversity of a Different Kind: Gentrification and Its Impact on Social Capital and Political Engagement in Black Communities",
          journal: "The Journal of Race, Ethnicity, and Politics",
          collaborators: "with Benjamin Newman and Shanna Pearson-Merkowitz",
          url: "https://www.cambridge.org/core/journals/journal-of-race-ethnicity-and-politics/article/diversity-of-a-different-kind-gentrification-and-its-impact-on-social-capital-and-political-participation-in-black-communities/1F78E87017DDFCEB74FFC0B46C472719"
        },
        {
          title: "Ethnic Change, Personality, and Polarization over Immigration in the American Public",
          journal: "Public Opinion Quarterly",
          collaborators: "with Christopher Johnston and Benjamin Newman",
          url: "https://academic.oup.com/poq/article-abstract/79/3/662/1917354"
        },
        {
          title: "Are Citizens Receiving the Treatment? Assessing a Key Link in Contextual Theories of Public Opinion and Political Behavior",
          journal: "Political Psychology",
          collaborators: "with Benjamin Newman, Todd Hartmann, and Alexa Bankert",
          url: "http://onlinelibrary.wiley.com/doi/10.1111/pops.12069/full"
        },
        {
          title: "Group Size vs. Change? Assessing Americans' Perception of Local Immigration",
          journal: "Political Research Quarterly",
          collaborators: "with Benjamin Newman",
          url: "http://journals.sagepub.com/doi/abs/10.1177/1065912913517303"
        }
      ]
    },
    {
      name: "Political Behavior",
      icon: <Users size={18} className="text-orange-400" />,
      color: "border-orange-400",
      bgColor: "bg-orange-400/10",
      papers: [
        {
          title: "Sandy the Rainmaker: The Electoral Impact of a Superstorm",
          journal: "PS: Political Science & Politics",
          collaborators: "with David Martin",
          url: "https://www.cambridge.org/core/journals/ps-political-science-and-politics/article/sandy-the-rainmaker-the-electoral-impact-of-a-super-storm/C2BF9E0BD3D0787193E1EEBD2A5DBA6F"
        },
        {
          title: "Independent Leaners: Ideals, Myths, and Reality",
          journal: "The Forum",
          collaborators: "with Helmut Norpoth",
          url: "https://www.degruyter.com/document/doi/10.1515/1540-8884.1521/html"
        }
      ]
    },
    {
      name: "Media and Other Writings",
      icon: <BookOpen size={18} className="text-pink-400" />,
      color: "border-pink-400",
      bgColor: "bg-pink-400/10",
      papers: [
        {
          title: "Preparing for Generative AI in the 2024 Election: Recommendations and Best Practices Based on Academic Research",
          type: "White Paper",
          url: "https://www.gsb.stanford.edu/faculty-research/publications/preparing-generative-ai-2024-election-recommendations-best-practices"
        },
        {
          title: "Community-Centered Outlets Empower and Inform Latinos",
          publisher: "Columbia Journalism Review",
          url: "https://www.cjr.org/tow_center/community-centered-outlets-empower-and-inform-latinos.php"
        },
        {
          title: "How will Florida's Cuban Americans vote? That's more complicated than many believe",
          publisher: "The Monkey Cage (Washington Post)",
          url: "https://www.washingtonpost.com/politics/2020/10/19/how-will-floridas-cuban-americans-vote-thats-more-complicated-than-many-believe/"
        },
        {
          title: "Will misinformation keep Latinos from voting in the midterms?",
          publisher: "The Monkey Cage (Washington Post)",
          url: "https://www.washingtonpost.com/politics/2022/09/30/latinos-voting-democrats-republicans-midterms/"
        }
      ]
    }
  ];
  
  // Teaching experience
  const teachingExperience = [
    {
      institution: "Columbia University",
      courses: [
        {
          level: "Ph.D. courses",
          classes: [
            { name: "Political Behavior Field Seminar", terms: ["Fall 2023", "Fall 2024"] },
            { name: "Racial and Ethnic Politics", terms: ["Fall 2019", "Fall 2021"] }
          ]
        },
        {
          level: "Undergraduate courses",
          classes: [
            { name: "Political Psychology", terms: ["Fall 2019", "Fall 2020", "Fall 2022", "Fall 2024"] },
            { name: "Experimental Methods", terms: ["Fall 2021", "Fall 2022", "Spring 2023"] },
            { name: "Racial and Ethnic Politics", terms: ["Spring 2020", "Spring 2023"] }
          ]
        }
      ]
    },
    {
      institution: "George Washington University",
      courses: [
        {
          level: "Undergraduate courses",
          classes: [
            { name: "Political Psychology", terms: ["Fall 2018"] },
            { name: "Scope and Methods", terms: ["Spring 2019"] }
          ]
        }
      ]
    },
    {
      institution: "Wesleyan University",
      courses: [
        {
          level: "Undergraduate courses",
          classes: [
            { name: "Political Psychology", terms: ["Fall 2016"] },
            { name: "Political Science by the Numbers", terms: ["Spring 2016", "Spring 2017", "Spring 2018"] },
            { name: "Place and Politics", terms: ["Fall 2015", "Fall 2017"] },
            { name: "Racial and Ethnic Politics", terms: ["Fall 2016", "Spring 2016", "Spring 2017", "Fall 2018"] }
          ]
        }
      ]
    },
    {
      institution: "Stony Brook University",
      courses: [
        {
          level: "Ph.D. courses",
          classes: [
            { name: "Introduction to Probability Theory", terms: ["Fall 2014"] }
          ]
        }
      ]
    }
  ];
  
  // Research areas
  const researchAreas = [
    {
      title: "Political Psychology",
      description: "Examining attitude and belief formation and change in political contexts",
      icon: <BrainCircuit size={20} className="text-blue-400" />,
      color: "bg-blue-900",
      borderColor: "border-blue-700"
    },
    {
      title: "Immigration Politics",
      description: "Immigration, incorporation & media influences on political engagement",
      icon: <Users size={20} className="text-green-400" />,
      color: "bg-green-900",
      borderColor: "border-green-700"
    },
    {
      title: "Misinformation",
      description: "Effects of misinformation and effectiveness of factual corrections",
      icon: <Eye size={20} className="text-red-400" />,
      color: "bg-red-900",
      borderColor: "border-red-700"
    },
    {
      title: "Survey Methodology",
      description: "Innovating measurement strategies and experimental design",
      icon: <FileText size={20} className="text-purple-400" />,
      color: "bg-purple-900",
      borderColor: "border-purple-700"
    }
  ];
  
  // Typing effect for profile introduction
  useEffect(() => {
    if (currentPage === 'home') {
      const text = profile.bio;
      let index = 0;
      
      const typing = setInterval(() => {
        if (index < text.length) {
          setTypedText(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typing);
        }
      }, 20);
      
      return () => clearInterval(typing);
    }
  }, [currentPage]);
  
  // Blinking cursor effect
  useEffect(() => {
    const blinkCursor = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(blinkCursor);
  }, []);
  
  // Get all unique journals from publications
  const getAllJournals = () => {
    const journals = new Set();
    researchCategories.forEach(category => {
      category.papers.forEach(paper => {
        if (paper.journal) {
          journals.add(paper.journal);
        }
      });
    });
    return Array.from(journals).sort();
  };

  // Get all category names for topic filtering
  const getTopics = () => {
    return researchCategories.map(category => category.name);
  };

  const allJournals = getAllJournals();
  const allTopics = getTopics();
  const [selectedJournal, setSelectedJournal] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  // Filter publications based on search query, selected journal, and selected topic
  const filteredCategories = researchCategories
    .filter(category => !selectedTopic || category.name === selectedTopic)
    .map(category => ({
      ...category,
      papers: category.papers.filter(paper => {
        // Check search query
        const matchesSearch = !searchQuery || 
          paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (paper.journal && paper.journal.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (paper.collaborators && paper.collaborators.toLowerCase().includes(searchQuery.toLowerCase()));
        
        // Check journal filter
        const matchesJournal = !selectedJournal || paper.journal === selectedJournal;
        
        return matchesSearch && matchesJournal;
      })
    })).filter(category => category.papers.length > 0);
  
  // Simple AI response function - in a real app, this would call an external API
  const simulateAIResponse = (userQuery) => {
    setIsLoading(true);
    
    // Pre-defined responses based on keywords
    const responses = [
      {
        keywords: ['misinformation', 'fact', 'correction', 'false'],
        response: "My research shows that factual corrections are generally effective at reducing false beliefs, including for Latino audiences. In studies published in the Journal of Politics and Public Opinion Quarterly, we found that corrections work across various contexts and demographic groups."
      },
      {
        keywords: ['latino', 'hispanic', 'ethnic', 'minority'],
        response: "My work on Latino politics examines how information quality influences political engagement among Latino communities. Recent publications in APSR explore Latino voting patterns and how deeply-held personal issues might trump group-based policy preferences."
      },
      {
        keywords: ['ai', 'artificial', 'intelligence', 'generative', 'llm'],
        response: "I'm currently exploring how generative AI can improve our understanding of public opinion. My paper with Alec Ewig examines AI-assisted surveys, and I've recently published a white paper on the implications of generative AI for the 2024 election."
      },
      {
        keywords: ['method', 'survey', 'experiment', 'design', 'conjoint'],
        response: "My methodological work focuses on survey and experimental design innovations. I've published on personalized conjoint experiments, crowdsourced adaptive surveys, and mock vignette checks in survey experiments. You can find this work in journals like Political Analysis and PSRM."
      }
    ];
    
    // Default response if no keywords match
    let responseText = "My research spans political psychology, immigration politics, misinformation, and experimental methods. Recent work examines how quality of political information influences engagement and representation, with special attention to misinformation in immigrant communities.";
    
    // Check for keyword matches
    for (const item of responses) {
      if (item.keywords.some(keyword => userQuery.toLowerCase().includes(keyword))) {
        responseText = item.response;
        break;
      }
    }
    
    // Simulate network delay
    setTimeout(() => {
      setChatMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
      setIsLoading(false);
    }, 1500);
  };
  
  // Handle chat submission
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    setChatMessages(prev => [...prev, { role: 'user', content: inputMessage }]);
    
    // Get AI response
    simulateAIResponse(inputMessage);
    
    // Clear input
    setInputMessage('');
  };
  
  // Render the home page
  const renderHome = () => (
    <div className="max-w-5xl mx-auto">
      {/* About Section */}
      <div className="bg-white rounded-lg shadow-md border border-amber-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-amber-800 border-b border-amber-200 pb-2 mb-4">About</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-3xl font-bold text-white mb-3 shadow-md">
              YV
            </div>
            <h1 className="text-xl font-bold text-gray-800 text-center">{profile.name}</h1>
            <p className="text-gray-600 text-center">{profile.title}</p>
            <p className="text-gray-500 text-sm text-center mb-4">{profile.institution}</p>
            
            <div className="flex justify-center space-x-3">
              <a href="https://twitter.com/YamilRVelez" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </a>
              <a href="https://github.com/yrvelez" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
              <a href="https://www.dropbox.com/scl/fi/okseffr111mz9tzc02jzr/Curriculum_Vitae.pdf?rlkey=nvikgo5d9g7xz327n1vo96yp7&dl=0" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors shadow-sm">
                <FileText size={16} />
              </a>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="text-gray-700 relative">
              {typedText}
              <span className={`inline-block w-2 h-4 bg-amber-500 ml-1 ${cursorVisible && typedText.length < profile.bio.length ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Research/Teaching Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div 
          className="bg-white rounded-lg shadow-md border border-amber-200 p-4 hover:border-amber-400 hover:shadow-lg transition-all cursor-pointer"
          onClick={() => setCurrentPage('research')}
        >
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg mr-3 shadow-sm">
              <Book size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-amber-800">Research</h3>
              <p className="text-gray-600 text-sm">Browse publications</p>
            </div>
            <ChevronRight size={16} className="ml-auto text-amber-500" />
          </div>
        </div>
        
        <div 
          className="bg-white rounded-lg shadow-md border border-amber-200 p-4 hover:border-amber-400 hover:shadow-lg transition-all cursor-pointer"
          onClick={() => setCurrentPage('teaching')}
        >
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg mr-3 shadow-sm">
              <Users size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-amber-800">Teaching</h3>
              <p className="text-gray-600 text-sm">View courses taught</p>
            </div>
            <ChevronRight size={16} className="ml-auto text-amber-500" />
          </div>
        </div>
      </div>
      
      {/* Research Areas */}
      <div className="bg-white rounded-lg shadow-md border border-amber-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-amber-800 border-b border-amber-200 pb-2 mb-4">Research Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {researchAreas.map((area, index) => (
            <div 
              key={index} 
              className="p-4 bg-amber-50 border border-amber-200 rounded-lg hover:shadow-md transition-all"
            >
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 mr-3 shadow-sm">
                  {React.cloneElement(area.icon, { className: 'text-white' })}
                </div>
                <div>
                  <h3 className="font-bold text-amber-800">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Generative AI Link */}
      <a 
        href="https://tailoredexperiments.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white rounded-lg shadow-md border border-amber-200 p-6 mb-6 hover:shadow-lg hover:border-amber-400 transition-all group"
      >
        <div className="flex items-center">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mr-4 shadow-sm">
            <BrainCircuit size={24} className="text-white group-hover:text-white transition-colors" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-purple-800 group-hover:text-purple-900 transition-colors">Generative AI and Political Science</h2>
            <p className="text-gray-600">Explore tailored experiments and AI applications in political research</p>
          </div>
          <ExternalLink size={18} className="ml-auto text-purple-400 group-hover:text-purple-600 transition-colors" />
        </div>
      </a>
      
      {/* Research Assistant Terminal */}
      <div className="bg-white rounded-lg shadow-md border border-amber-200 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-3 flex items-center border-b">
          <div className="flex space-x-2 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <h3 className="text-white font-mono text-sm flex-1">research-assistant@velez:~</h3>
        </div>
        
        <div className="p-4 max-h-96 overflow-y-auto">
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start">
              <Info size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-blue-700 font-bold text-sm">Research Assistant Terminal</h4>
                <p className="text-gray-600 text-sm">Ask me about Yamil's research on political psychology, immigration politics, misinformation, or experimental methods.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {chatMessages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-amber-100 border border-amber-200 text-gray-800' 
                      : 'bg-gray-100 border border-gray-200 text-gray-700'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <form onSubmit={handleChatSubmit} className="p-3 border-t border-gray-200 bg-gray-50 flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about my research..."
            className="flex-1 bg-white border border-gray-300 rounded-l-md px-3 py-2 text-gray-700 focus:outline-none focus:border-amber-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-md flex items-center transition-colors"
            disabled={isLoading}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
  
  // Render the research page
  const renderResearch = () => (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-md border border-amber-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1 className="text-2xl font-bold text-amber-800 mb-4 md:mb-0">Research Publications</h1>
          
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={14} className="text-amber-400" />
            </div>
            <input
              type="text"
              className="pl-9 pr-4 py-2 w-full md:w-64 bg-white border border-amber-300 rounded-md text-gray-700 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Topic filter */}
        <div className="flex flex-col">
          <div className="flex items-center mb-3">
            <span className="text-gray-700 text-sm mr-3 whitespace-nowrap">Filter by Topic:</span>
            <div className="flex-1 overflow-x-auto pb-2">
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 text-xs rounded-full whitespace-nowrap shadow-sm ${
                    selectedTopic === '' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  } transition-colors`}
                  onClick={() => setSelectedTopic('')}
                >
                  All Topics
                </button>
                
                {allTopics.map((topic) => (
                  <button 
                    key={topic}
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap shadow-sm ${
                      selectedTopic === topic 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    } transition-colors`}
                    onClick={() => setSelectedTopic(topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Journal filter */}
          <div className="flex items-center mb-3">
            <span className="text-gray-700 text-sm mr-3 whitespace-nowrap">Filter by Journal:</span>
            <div className="flex-1 overflow-x-auto pb-2">
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 text-xs rounded-full whitespace-nowrap shadow-sm ${
                    selectedJournal === '' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  } transition-colors`}
                  onClick={() => setSelectedJournal('')}
                >
                  All Journals
                </button>
                
                {allJournals.map((journal) => (
                  <button 
                    key={journal}
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap shadow-sm ${
                      selectedJournal === journal 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    } transition-colors`}
                    onClick={() => setSelectedJournal(journal)}
                  >
                    {journal}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Active filters and count */}
          <div className="text-xs text-gray-700 flex flex-wrap gap-2 items-center">
            <span>
              Showing {filteredCategories.reduce((sum, cat) => sum + cat.papers.length, 0)} publications
            </span>
            
            {selectedTopic && (
              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full flex items-center border border-amber-200 shadow-sm">
                Topic: {selectedTopic}
                <button 
                  className="ml-1 hover:text-amber-600"
                  onClick={() => setSelectedTopic('')}
                >
                  <X size={12} />
                </button>
              </span>
            )}
            
            {selectedJournal && (
              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full flex items-center border border-amber-200 shadow-sm">
                Journal: {selectedJournal}
                <button 
                  className="ml-1 hover:text-amber-600"
                  onClick={() => setSelectedJournal('')}
                >
                  <X size={12} />
                </button>
              </span>
            )}
            
            {(selectedTopic || selectedJournal || searchQuery) && (
              <button 
                className="px-2 py-0.5 bg-white text-gray-700 rounded-full hover:bg-gray-100 text-xs border border-gray-300 shadow-sm"
                onClick={() => {
                  setSelectedTopic('');
                  setSelectedJournal('');
                  setSearchQuery('');
                }}
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredCategories.map((category, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md border border-amber-200 overflow-hidden transition-all duration-300 ease-in-out">
            <div 
              className={`bg-gradient-to-r from-amber-500 to-amber-600 p-4 cursor-pointer flex items-center text-white shadow-sm`}
              onClick={() => setExpandedCategory(expandedCategory === i ? null : i)}
            >
              <div className="mr-2">{React.cloneElement(category.icon, { className: 'text-white' })}</div>
              <h2 className="font-bold flex-1">{category.name}</h2>
              <div className="bg-white/20 rounded-full px-2 py-0.5 text-white text-xs mr-2">
                {category.papers.length}
              </div>
              <ChevronDown
                size={16}
                className={`text-white transition-transform duration-300 ${expandedCategory === i ? 'transform rotate-180' : ''}`}
              />
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedCategory === i ? 'max-h-[5000px]' : 'max-h-0'}`}>
              <div className="p-4 space-y-4">
                {category.papers.map((paper, j) => (
                  <div 
                    key={j} 
                    className="bg-amber-50 p-4 rounded-lg border border-amber-200 hover:border-amber-400 transition-colors group shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row md:items-start">
                      <div className="flex-1">
                        <a 
                          href={paper.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-amber-900 font-medium hover:text-amber-700 transition-colors flex items-start"
                        >
                          <span>{paper.title}</span>
                          <ArrowUpRight size={14} className="ml-1 mt-1 text-amber-500 group-hover:text-amber-700 transition-colors" />
                        </a>
                        
                        <div className="mt-2 flex flex-wrap gap-2">
                          {paper.journal && (
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full border border-amber-200">
                              {paper.journal}
                            </span>
                          )}
                          {paper.status && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full border border-green-200">
                              {paper.status}
                            </span>
                          )}
                          {paper.publisher && (
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full border border-purple-200">
                              {paper.publisher}
                            </span>
                          )}
                          {paper.type && (
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full border border-amber-200">
                              {paper.type}
                            </span>
                          )}
                        </div>
                        
                        {paper.collaborators && (
                          <div className="mt-2 text-gray-600 text-sm">{paper.collaborators}</div>
                        )}
                        {paper.note && (
                          <div className="mt-2 text-gray-600 text-sm italic">{paper.note}</div>
                        )}
                      </div>
                      
                      <div className="mt-3 md:mt-0 flex items-center md:flex-col md:items-end">
                        <a 
                          href={paper.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs transition-colors flex items-center shadow-sm"
                        >
                          <Link2 size={12} className="mr-1" />
                          View Paper
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Render the teaching page
  const renderTeaching = () => (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-md border border-amber-200 p-4 mb-6">
        <h1 className="text-2xl font-bold text-amber-800">Teaching Experience</h1>
      </div>
      
      <div className="space-y-6">
        {teachingExperience.map((institution, i) => (
          <div 
            key={i} 
            className="bg-white rounded-lg shadow-md border border-amber-200 overflow-hidden transition-transform hover:-translate-y-1"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 flex items-center text-white shadow-sm">
              <h2 className="font-bold text-lg">{institution.institution}</h2>
              <div className="ml-auto bg-white/20 rounded-full px-3 py-0.5 text-xs text-white">
                {institution.courses.reduce((total, courseLevel) => total + courseLevel.classes.length, 0)} courses
              </div>
            </div>
            
            <div className="p-4">
              {institution.courses.map((courseLevel, j) => (
                <div key={j} className="mb-6 last:mb-0">
                  <h3 className="text-gray-700 text-sm font-bold mb-3 pb-1 border-b border-amber-200 flex items-center">
                    <span className="text-amber-700">{courseLevel.level}</span>
                    <div className="ml-2 h-px flex-1 bg-gradient-to-r from-amber-300 to-transparent"></div>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courseLevel.classes.map((course, k) => (
                      <div
                        key={k}
                        className="bg-amber-50 p-4 rounded-lg border border-amber-200 hover:border-amber-400 transition-all group shadow-sm"
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="text-amber-900 font-bold group-hover:text-amber-700 transition-colors">
                            {course.name}
                          </h4>
                          <div className="ml-2 h-6 w-6 rounded bg-amber-200 flex items-center justify-center">
                            <span className="text-amber-800 text-xs font-bold">{course.terms.length}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {course.terms.map((term, l) => (
                            <span 
                              key={l} 
                              className="px-2 py-1 bg-white text-gray-700 text-xs rounded border border-amber-200 group-hover:border-amber-300 transition-all shadow-sm"
                            >
                              {term}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 text-gray-800 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-700 to-orange-600 p-4 sticky top-0 z-20 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#" className="text-white font-bold text-xl" onClick={() => setCurrentPage('home')}>
            Yamil R. Velez
          </a>
          
          <div className="md:hidden">
            <button 
              className="text-white hover:text-amber-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-amber-100' : 'text-white hover:text-amber-200'}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
            <button 
              className={`text-sm font-medium transition-colors ${currentPage === 'research' ? 'text-amber-100' : 'text-white hover:text-amber-200'}`}
              onClick={() => setCurrentPage('research')}
            >
              Research
            </button>
            <button 
              className={`text-sm font-medium transition-colors ${currentPage === 'teaching' ? 'text-amber-100' : 'text-white hover:text-amber-200'}`}
              onClick={() => setCurrentPage('teaching')}
            >
              Teaching
            </button>
            <a 
              href="https://tailoredexperiments.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-amber-200 transition-colors flex items-center"
            >
              <span>Generative AI</span>
              <ExternalLink size={14} className="ml-1" />
            </a>
          </nav>
        </div>
      </header>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-800 shadow-lg fixed top-16 left-0 right-0 z-10">
          <div className="flex flex-col p-4 space-y-3">
            <button 
              className={`p-2 rounded text-left ${currentPage === 'home' ? 'bg-amber-900 text-white' : 'text-white'}`}
              onClick={() => {
                setCurrentPage('home');
                setIsMenuOpen(false);
              }}
            >
              Home
            </button>
            <button 
              className={`p-2 rounded text-left ${currentPage === 'research' ? 'bg-amber-900 text-white' : 'text-white'}`}
              onClick={() => {
                setCurrentPage('research');
                setIsMenuOpen(false);
              }}
            >
              Research
            </button>
            <button 
              className={`p-2 rounded text-left ${currentPage === 'teaching' ? 'bg-amber-900 text-white' : 'text-white'}`}
              onClick={() => {
                setCurrentPage('teaching');
                setIsMenuOpen(false);
              }}
            >
              Teaching
            </button>
            <a 
              href="https://tailoredexperiments.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded text-left text-white flex items-center"
            >
              <span>Generative AI</span>
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <main className="flex-grow p-4 sm:p-6 overflow-y-auto">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'research' && renderResearch()}
        {currentPage === 'teaching' && renderTeaching()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-700 to-orange-600 p-4 mt-auto shadow-inner">
        <div className="max-w-5xl mx-auto text-center text-white text-sm">
          <p>© 2025 {profile.name} | {profile.institution}</p>
        </div>
      </footer>
    </div>
  );
};

export default YamilVelezPortfolio;