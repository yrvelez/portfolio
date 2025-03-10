'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Book, BookOpen, Users, ChevronRight, Home, Menu, X, Terminal, ExternalLink, ChevronDown, Search, Link2, Download, ArrowUpRight, FileText, Star, Code, Database, Eye, Send, Info, BrainCircuit, Moon, Sun } from 'lucide-react';
import ResearchChatIframe from './ResearchChatIframe';

const YamilVelezPortfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: "Hello! I'm a chatbot that relies on Yamil's articles using RAG (Retrieval-Augmented Generation). How can I help you understand his research?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedResponse, setStreamedResponse] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const messagesEndRef = useRef(null);
  const fingerprint = useRef(Date.now().toString(36) + Math.random().toString(36).substring(2, 15));
  
  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode');
  };
  
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
      icon: <Star size={18} className="text-[#B9D9EB]" />,
      color: "border-[#B9D9EB]",
      bgColor: "bg-[#B9D9EB]/10",
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
      icon: <Eye size={18} className="text-[#B9D9EB]" />,
      color: "border-[#B9D9EB]",
      bgColor: "bg-[#B9D9EB]/10",
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
          url: "https://tailoredexperiments.com/",
          relatedPaper: "Confronting Core Issues"
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
      icon: <Database size={18} className="text-[#B9D9EB]" />,
      color: "border-[#B9D9EB]",
      bgColor: "bg-[#B9D9EB]/10",
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
      icon: <Code size={18} className="text-[#B9D9EB]" />,
      color: "border-[#B9D9EB]",
      bgColor: "bg-[#B9D9EB]/10",
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
      icon: <FileText size={18} className="text-[#B9D9EB]" />,
      color: "border-[#B9D9EB]",
      bgColor: "bg-[#B9D9EB]/10",
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
      icon: <Users size={18} className="text-[#B9D9EB]" />,
      color: "border-[#B9D9EB]",
      bgColor: "bg-[#B9D9EB]/10",
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
      icon: <BookOpen size={18} className="text-[#B9D9EB]" />,
      color: "border-[#B9D9EB]",
      bgColor: "bg-[#B9D9EB]/10",
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
      icon: <BrainCircuit size={20} className="text-[#B9D9EB]" />,
      color: "bg-[#002B7F]",
      borderColor: "border-[#0046AD]"
    },
    {
      title: "Immigration Politics",
      description: "Immigration, incorporation & media influences on political engagement",
      icon: <Users size={20} className="text-[#B9D9EB]" />,
      color: "bg-[#002B7F]",
      borderColor: "border-[#0046AD]"
    },
    {
      title: "Misinformation",
      description: "Effects of misinformation and effectiveness of factual corrections",
      icon: <Eye size={20} className="text-[#B9D9EB]" />,
      color: "bg-[#002B7F]",
      borderColor: "border-[#0046AD]"
    },
    {
      title: "Survey Methodology",
      description: "Innovating measurement strategies and experimental design",
      icon: <FileText size={20} className="text-[#B9D9EB]" />,
      color: "bg-[#002B7F]",
      borderColor: "border-[#0046AD]"
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

  // Filter publications based on search query only (removed journal and topic filtering)
  const filteredCategories = researchCategories
    .map(category => ({
      ...category,
      papers: category.papers.filter(paper => {
        // Check search query
        return !searchQuery || 
          paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (paper.journal && paper.journal.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (paper.collaborators && paper.collaborators.toLowerCase().includes(searchQuery.toLowerCase()));
      })
    })).filter(category => category.papers.length > 0);
  
  // RAG-based AI chat function
  const callResearchChat = async (userQuery) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/research-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: userQuery,
          fingerprint: fingerprint.current
        })
      });
      
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        }
        throw new Error('Failed to get response from research chat');
      }
      
      // Parse the JSON response
      const data = await response.json();
      
      // Add the response to chat messages
      setChatMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      
    } catch (error) {
      // Add error message to chat
      setChatMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle chat submission
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    setChatMessages(prev => [...prev, { role: 'user', content: inputMessage }]);
    
    // Get AI response
    callResearchChat(inputMessage);
    
    // Clear input
    setInputMessage('');
  };
  
  // Render the home page
  const renderHome = () => (
    <div className="max-w-5xl mx-auto">
      {/* About Section */}
      <div className="bg-white rounded-lg shadow-md border border-[#B9D9EB] p-6 mb-6 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-xl font-bold text-[#002B7F] border-b border-[#B9D9EB] pb-2 mb-4">About</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#002B7F] to-[#0046AD] flex items-center justify-center text-3xl font-bold text-white mb-3 shadow-md transform transition-transform hover:scale-105 hover:rotate-3">
              YV
            </div>
            <h1 className="text-xl font-bold text-gray-800 text-center">{profile.name}</h1>
            <p className="text-gray-600 text-center">{profile.title}</p>
            <p className="text-gray-500 text-sm text-center mb-4">{profile.institution}</p>
            
            <div className="flex space-x-3 mt-2">
              <a 
                href="https://twitter.com/yamilrvelez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#002B7F] hover:text-[#0046AD] transition-colors transform hover:scale-110"
                title="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="https://github.com/yrvelez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#002B7F] hover:text-[#0046AD] transition-colors transform hover:scale-110"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="mailto:yrv2004@columbia.edu" 
                className="text-[#002B7F] hover:text-[#0046AD] transition-colors transform hover:scale-110"
                title="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <p className="text-gray-700 mb-4 leading-relaxed">
              {typedText}
              {cursorVisible && currentPage === 'home' && <span className="animate-pulse">|</span>}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-[#F0F7FF] p-4 rounded-lg border border-[#B9D9EB] transform transition-all hover:translate-y-[-5px] hover:shadow-md">
                <h3 className="font-semibold text-[#002B7F] mb-2 flex items-center">
                  <BrainCircuit size={18} className="mr-2 text-[#0046AD]" /> Research Focus
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  {researchAreas.map((area, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight size={16} className="text-[#0046AD] mt-0.5 mr-1 flex-shrink-0" />
                      <span>{area.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#F0F7FF] p-4 rounded-lg border border-[#B9D9EB] transform transition-all hover:translate-y-[-5px] hover:shadow-md">
                <h3 className="font-semibold text-[#002B7F] mb-2 flex items-center">
                  <Terminal size={18} className="mr-2 text-[#0046AD]" /> Current Position
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium">Assistant Professor</span><br />
                  Department of Political Science<br />
                  Columbia University<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Research Areas Section */}
      <div className="bg-white rounded-lg shadow-md border border-[#B9D9EB] p-6 mb-6 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-xl font-bold text-[#002B7F] border-b border-[#B9D9EB] pb-2 mb-4">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchAreas.map((area, index) => (
            <div 
              key={index} 
              className={`${area.color} ${area.borderColor} border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:rotate-1`}
            >
              <div className="flex items-center mb-2">
                {React.cloneElement(area.icon, { className: 'text-white mr-2' })}
                <h3 className="font-bold text-white">{area.title}</h3>
              </div>
              <p className="text-white/90 text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Research Chat Section */}
      <div className="bg-white rounded-lg shadow-md border border-[#B9D9EB] p-6 mb-6 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-xl font-bold text-[#002B7F] border-b border-[#B9D9EB] pb-2 mb-4">Research Chat</h2>
        <div className="h-96">
          <iframe
            src="https://ourlocalcommunities.com/research_search/index4.html"
            title="Research Chat"
            className="w-full h-full border-none rounded-lg"
            style={{
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>
    </div>
  );
  
  // Render the research page
  const renderResearch = () => (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-md border border-[#B9D9EB] p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1 className="text-2xl font-bold text-[#002B7F] mb-4 md:mb-0">Research Publications</h1>
          
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={14} className="text-[#B9D9EB]" />
            </div>
            <input
              type="text"
              className="pl-9 pr-4 py-2 w-full md:w-64 bg-white border border-[#B9D9EB] rounded-md text-gray-700 text-sm focus:outline-none focus:border-[#002B7F] focus:ring-1 focus:ring-[#002B7F] shadow-sm"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredCategories.map((category, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md border border-[#B9D9EB] overflow-hidden transition-all duration-300 ease-in-out">
            <div 
              className={`bg-gradient-to-r from-[#002B7F] to-[#0046AD] p-4 flex items-center text-white shadow-sm`}
            >
              <div className="mr-2">{React.cloneElement(category.icon, { className: 'text-white' })}</div>
              <h2 className="font-bold flex-1">{category.name}</h2>
              <div className="bg-white/20 rounded-full px-2 py-0.5 text-white text-xs mr-2">
                {category.papers.length}
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              {category.papers.map((paper, j) => {
                // Skip rendering the guide as a separate item
                if (paper.title === "Guide for creating tailored experiments") {
                  return null;
                }
                
                return (
                  <div 
                    key={j} 
                    className="bg-[#F0F7FF] p-4 rounded-lg border border-[#B9D9EB] hover:border-[#002B7F] transition-colors group shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row md:items-start">
                      <div className="flex-1">
                        <a 
                          href={paper.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#002B7F] font-medium hover:text-[#0046AD] transition-colors flex items-start"
                        >
                          <span>{paper.title}</span>
                          <ArrowUpRight size={14} className="ml-1 mt-1 text-[#0046AD] group-hover:text-[#002B7F] transition-colors" />
                        </a>
                        
                        <div className="mt-2 flex flex-wrap gap-2">
                          {paper.journal && (
                            <span className="px-2 py-0.5 bg-[#F0F7FF] text-[#002B7F] text-xs rounded-full border border-[#B9D9EB]">
                              {paper.journal}
                            </span>
                          )}
                          {paper.status && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full border border-green-200">
                              {paper.status}
                            </span>
                          )}
                          {paper.publisher && (
                            <span className="px-2 py-0.5 bg-[#F0F7FF] text-[#002B7F] text-xs rounded-full border border-[#B9D9EB]">
                              {paper.publisher}
                            </span>
                          )}
                          {paper.type && (
                            <span className="px-2 py-0.5 bg-[#F0F7FF] text-[#002B7F] text-xs rounded-full border border-[#B9D9EB]">
                              {paper.type}
                            </span>
                          )}
                        </div>
                        
                        {paper.collaborators && (
                          <div className="mt-2 text-gray-600 text-sm">{paper.collaborators}</div>
                        )}
                      </div>
                      
                      <div className="mt-3 md:mt-0 flex flex-col items-center md:items-end space-y-2">
                        {paper.title === "Confronting Core Issues: A Critical Assessment of Attitude Polarization using Tailored Experiments" ? (
                          <div className="flex flex-col space-y-2 w-full md:w-auto">
                            <a 
                              href={paper.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-3 py-1 rounded bg-gradient-to-r from-[#002B7F] to-[#0046AD] hover:from-[#0046AD] hover:to-[#002B7F] text-white text-xs transition-colors flex items-center shadow-sm w-full md:w-auto justify-center md:justify-start"
                            >
                              <Link2 size={12} className="mr-1" />
                              View Paper
                            </a>
                            <a 
                              href="https://tailoredexperiments.com/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-3 py-1 rounded bg-[#B9D9EB] hover:bg-[#9BBFD1] text-[#002B7F] text-xs transition-colors flex items-center shadow-sm w-full md:w-auto justify-center md:justify-start"
                            >
                              <FileText size={12} className="mr-1" />
                              Guide for Tailored Experiments
                            </a>
                            <div className="text-xs text-gray-500 italic mt-1 text-center md:text-right">
                              Featured on The Atlantic's "Good on Paper" Podcast
                            </div>
                          </div>
                        ) : (
                          <a 
                            href={paper.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded bg-gradient-to-r from-[#002B7F] to-[#0046AD] hover:from-[#0046AD] hover:to-[#002B7F] text-white text-xs transition-colors flex items-center shadow-sm w-full md:w-auto justify-center md:justify-start"
                          >
                            <Link2 size={12} className="mr-1" />
                            View Paper
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Render the teaching page
  const renderTeaching = () => (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-md border border-[#B9D9EB] p-4 mb-6">
        <h1 className="text-2xl font-bold text-[#002B7F]">Teaching Experience</h1>
      </div>
      
      <div className="space-y-6">
        {teachingExperience.map((institution, i) => (
          <div 
            key={i} 
            className="bg-white rounded-lg shadow-md border border-[#B9D9EB] overflow-hidden transition-transform hover:-translate-y-1"
          >
            <div className="bg-gradient-to-r from-[#002B7F] to-[#0046AD] p-4 flex items-center text-white shadow-sm">
              <h2 className="font-bold text-lg">{institution.institution}</h2>
              <div className="ml-auto bg-white/20 rounded-full px-3 py-0.5 text-xs text-white">
                {institution.courses.reduce((total, courseLevel) => total + courseLevel.classes.length, 0)} courses
              </div>
            </div>
            
            <div className="p-4">
              {institution.courses.map((courseLevel, j) => (
                <div key={j} className="mb-6 last:mb-0">
                  <h3 className="text-gray-700 text-sm font-bold mb-3 pb-1 border-b border-[#B9D9EB] flex items-center">
                    <span className="text-[#002B7F]">{courseLevel.level}</span>
                    <div className="ml-2 h-px flex-1 bg-gradient-to-r from-[#B9D9EB] to-transparent"></div>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courseLevel.classes.map((course, k) => (
                      <div
                        key={k}
                        className="bg-[#F0F7FF] p-4 rounded-lg border border-[#B9D9EB] hover:border-[#002B7F] transition-all group shadow-sm"
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="text-[#002B7F] font-bold group-hover:text-[#0046AD] transition-colors">
                            {course.name}
                          </h4>
                          <div className="ml-2 h-6 w-6 rounded bg-[#B9D9EB] flex items-center justify-center">
                            <span className="text-[#002B7F] text-xs font-bold">{course.terms.length}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {course.terms.map((term, l) => (
                            <span 
                              key={l} 
                              className="px-2 py-1 bg-white text-gray-700 text-xs rounded border border-[#B9D9EB] group-hover:border-[#002B7F] transition-all shadow-sm"
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
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800'} font-sans flex flex-col transition-colors duration-300`}>
      {/* Header with parallax effect */}
      <header 
        className="bg-gradient-to-r from-[#002B7F] to-[#0046AD] p-4 sticky top-0 z-20 shadow-md"
        style={{ 
          backgroundPosition: `center ${scrollY * 0.5}px`,
          transition: 'background-position 0.1s ease-out'
        }}
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#" className="text-white font-bold text-xl" onClick={() => setCurrentPage('home')}>
            Yamil R. Velez
          </a>
          
          <div className="md:hidden">
            <button 
              className="text-white hover:text-[#B9D9EB]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-[#B9D9EB]' : 'text-white hover:text-[#B9D9EB]'}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
            <button 
              className={`text-sm font-medium transition-colors ${currentPage === 'research' ? 'text-[#B9D9EB]' : 'text-white hover:text-[#B9D9EB]'}`}
              onClick={() => setCurrentPage('research')}
            >
              Research
            </button>
            <button 
              className={`text-sm font-medium transition-colors ${currentPage === 'teaching' ? 'text-[#B9D9EB]' : 'text-white hover:text-[#B9D9EB]'}`}
              onClick={() => setCurrentPage('teaching')}
            >
              Teaching
            </button>
            <a 
              href="https://www.dropbox.com/scl/fi/okseffr111mz9tzc02jzr/Curriculum_Vitae.pdf?rlkey=nvikgo5d9g7xz327n1vo96yp7&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-[#B9D9EB] transition-colors flex items-center"
            >
              CV <ExternalLink size={14} className="ml-1" />
            </a>
            <a 
              href="https://tailoredexperiments.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-[#B9D9EB] transition-colors flex items-center"
            >
              Generative AI and Political Science <ExternalLink size={14} className="ml-1" />
            </a>
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={16} className="text-white" /> : <Moon size={16} className="text-white" />}
            </button>
          </nav>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#002B7F] rounded-md shadow-lg p-4 absolute left-4 right-4 z-30">
            <nav className="flex flex-col space-y-3">
              <button 
                className={`text-sm font-medium transition-colors text-left ${currentPage === 'home' ? 'text-[#B9D9EB]' : 'text-white hover:text-[#B9D9EB]'}`}
                onClick={() => {
                  setCurrentPage('home');
                  setIsMenuOpen(false);
                }}
              >
                Home
              </button>
              <button 
                className={`text-sm font-medium transition-colors text-left ${currentPage === 'research' ? 'text-[#B9D9EB]' : 'text-white hover:text-[#B9D9EB]'}`}
                onClick={() => {
                  setCurrentPage('research');
                  setIsMenuOpen(false);
                }}
              >
                Research
              </button>
              <button 
                className={`text-sm font-medium transition-colors text-left ${currentPage === 'teaching' ? 'text-[#B9D9EB]' : 'text-white hover:text-[#B9D9EB]'}`}
                onClick={() => {
                  setCurrentPage('teaching');
                  setIsMenuOpen(false);
                }}
              >
                Teaching
              </button>
              <a 
                href="https://www.dropbox.com/scl/fi/okseffr111mz9tzc02jzr/Curriculum_Vitae.pdf?rlkey=nvikgo5d9g7xz327n1vo96yp7&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:text-[#B9D9EB] transition-colors flex items-center"
              >
                CV <ExternalLink size={14} className="ml-1" />
              </a>
              <a 
                href="https://tailoredexperiments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:text-[#B9D9EB] transition-colors flex items-center"
              >
                Generative AI and Political Science <ExternalLink size={14} className="ml-1" />
              </a>
              <button
                onClick={toggleDarkMode}
                className="flex items-center text-sm font-medium text-white hover:text-[#B9D9EB] transition-colors"
              >
                {darkMode ? <Sun size={16} className="mr-2" /> : <Moon size={16} className="mr-2" />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </nav>
          </div>
        )}
      </header>
      
      <main className="flex-grow p-4 sm:p-6 overflow-y-auto">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'research' && renderResearch()}
        {currentPage === 'teaching' && renderTeaching()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#002B7F] to-[#0046AD] p-4 mt-auto shadow-inner">
        <div className="max-w-5xl mx-auto text-center text-white text-sm">
          <p>© 2025 {profile.name} | {profile.institution}</p>
          <p className="mt-1 text-xs opacity-70">
            <span className="inline-block mx-1">Political Psychology</span>•
            <span className="inline-block mx-1">Immigration Politics</span>•
            <span className="inline-block mx-1">Misinformation</span>•
            <span className="inline-block mx-1">Survey Methodology</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default YamilVelezPortfolio;