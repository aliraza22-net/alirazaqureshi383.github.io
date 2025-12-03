// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
  try {
    if (typeof Typed !== 'undefined') {
      new Typed('.typing-text', {
      strings: [
        'Scalable Web Applications',
        'Cross-Platform Mobile Apps',
        'Cloud-Based Solutions',
        'Full-Stack Applications',
        'React Native Apps',
        'MERN Stack Projects',
        'AWS Cloud Architectures',
        'Enterprise Solutions'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
      navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }
  });

  // Portfolio projects data
  const projects = [
    {
      category: 'fullstack',
      title: 'Social Hall HQ',
      description: 'Full-stack dating platform with 2000+ daily active users. Built with Next.js, TypeScript, MongoDB, and Next-SEO for optimal search engine visibility.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676478604/socialhall_ucji2v.png',
      liveUrl: 'https://socialhallhq.com/',
      githubUrl: '',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'Next-SEO', 'AWS']
    },
    {
      category: 'web',
      title: 'Verved.in',
      description: 'Modern digital agency website with stunning animations using GSAP and Framer Motion. Built with Next.js for optimal performance.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676363070/Screenshot_2023-02-14_135311_dc0tea.png',
      liveUrl: 'https://verved.vercel.app/',
      githubUrl: '',
      technologies: ['Next.js', 'GSAP', 'Framer Motion', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'web',
      title: 'Hoome.co.uk',
      description: 'Professional digital agency website showcasing services. Built with Next.js and TypeScript for type safety and performance.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676478614/hoome_fubfvb.png',
      liveUrl: 'https://www.hoome.co.uk/',
      githubUrl: '',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React']
    },
    {
      category: 'web',
      title: 'Whatweclick.com',
      description: 'Portfolio website for architecture photography agency. Modern design with TailwindCSS, Next.js, and TypeScript.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676478604/whaweclick_vzqfc7.png',
      liveUrl: 'https://www.whatweclick.com/',
      githubUrl: '',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React']
    },
    {
      category: 'web',
      title: 'Wave NFT Collection',
      description: 'Showcase website for NFT collection with advanced animations using Framer Motion, GSAP, and Anime.js. Built with React and SCSS.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1679293338/nft_c4c1on.png',
      liveUrl: 'http://3.17.191.197/',
      githubUrl: '',
      technologies: ['React', 'SCSS', 'GSAP', 'Framer Motion', 'Anime.js']
    },
    {
      category: 'fullstack',
      title: 'Sunshine Joy E-commerce',
      description: 'Complete e-commerce platform with Canva-like design interface. Built with MERN stack allowing users to design and customize products.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676478606/sunshine_eygn01.png',
      liveUrl: 'https://sunshinejoy-live.netlify.app/',
      githubUrl: '',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack']
    },
    {
      category: 'fullstack',
      title: 'Rehoboth Transport',
      description: 'Trucking company website with automated email system using Nodemailer. Built with React, TailwindCSS, and includes Jest unit tests.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676478605/transport_breauo.png',
      liveUrl: 'https://rehobothtransport.com/',
      githubUrl: '',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Nodemailer', 'Jest']
    },
    {
      category: 'web',
      title: 'Bricknbeam.in',
      description: 'Architecture firm website built with Next.js and Tailwind CSS. Maintained since 2021 with continuous updates and improvements.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676478604/bricknbeam_pexm5w.png',
      liveUrl: 'https://www.bricknbeam.in/',
      githubUrl: '',
      technologies: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript']
    },
    {
      category: 'fullstack',
      title: 'Fantasy Bakery',
      description: 'Complete e-commerce solution for local bakery with admin panel for content management and order tracking. Built with Next.js and Express.js.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676478607/fantasybakery_nhun2p.png',
      liveUrl: 'https://fantasy-bakery-temp.vercel.app/',
      githubUrl: '',
      technologies: ['Next.js', 'Express.js', 'MongoDB', 'Node.js', 'Admin Panel']
    },
    {
      category: 'web',
      title: 'Surfeye.video',
      description: 'Surfing company platform allowing members to view their recordings. Complete frontend built with React.js and SCSS.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676478606/surfeye_g5srb5.png',
      liveUrl: 'https://www.surfeye.video/',
      githubUrl: '',
      technologies: ['React', 'SCSS', 'JavaScript']
    },
    {
      category: 'fullstack',
      title: 'Sansadhan Prabandhan',
      description: 'Resource sharing portal for institutes with Web3 functionality for enhanced security. Built for Smart India Hackathon with blockchain integration.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676479098/sansadhan_jxi6w7.jpg',
      liveUrl: '',
      githubUrl: 'https://github.com/buggydecoders/Sih2022Finale',
      technologies: ['React', 'Web3', 'Blockchain', 'Solidity', 'Node.js']
    },
    {
      category: 'fullstack',
      title: 'SmartKart E-commerce',
      description: 'E-commerce platform with blockchain-based NFT Warranty (ERC721 Token). Hybrid backend using Express, Solidity, and Hardhat with seller management panel.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676479180/flipkart_ionavn.png',
      liveUrl: '',
      githubUrl: 'https://github.com/kunals131/SmartKart-v2',
      technologies: ['Next.js', 'Express', 'Solidity', 'Hardhat', 'Web3', 'Blockchain']
    },
    {
      category: 'fullstack',
      title: 'Connect The Docs',
      description: 'Healthcare platform connecting patients and doctors with AI diagnosis, doctor recommendations, and real-time messaging using Socket.io.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676479257/171212468-530bc2b5-3cfe-4885-9acd-164a941a14c8_qixqi1.png',
      liveUrl: '',
      githubUrl: 'https://github.com/kunals131/Doctor-Appointment',
      technologies: ['React', 'Node.js', 'Socket.io', 'AI/ML', 'MongoDB']
    },
    {
      category: 'web',
      title: 'React Room',
      description: 'Audio/Video conferencing web application using Dolby\'s Voxeet SDK with Firebase real-time database. Features smart voice assistance using Web Speech APIs.',
      image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676479328/147218151-f904fea0-b6a7-4bf9-908c-16091ca8dabc_a7n37d.png',
      liveUrl: 'https://reactroom.netlify.app/',
      githubUrl: '',
      technologies: ['React', 'Firebase', 'WebRTC', 'Dolby SDK', 'Web Speech API']
    },
    {
      category: 'mobile',
      title: 'Food Delivery App',
      description: 'React Native food delivery application with advanced map integration for real-time tracking. Features include order management and delivery tracking.',
      image: 'images/foodDelevery.png',
      liveUrl: '',
      githubUrl: 'https://github.com/AliRazaQureshi383/FoodDelevery.git',
      technologies: ['React Native', 'Maps API', 'Firebase', 'JavaScript']
    },
    {
      category: 'mobile',
      title: 'CryptoMine App',
      description: 'Cryptocurrency tracking and mining application built with React Native and Firebase. Real-time price updates and portfolio management.',
      image: 'images/cryptomine.png',
      liveUrl: '',
      githubUrl: 'https://github.com/AliRazaQureshi383/CryptoMine.git',
      technologies: ['React Native', 'Firebase', 'JavaScript', 'REST APIs']
    },
    {
      category: 'mobile',
      title: 'Instagram Clone',
      description: 'Full-featured Instagram clone with authentication, posts, stories, and real-time updates. Built with React Native and Firebase backend.',
      image: 'images/instagram.png',
      liveUrl: '',
      githubUrl: 'https://github.com/Haider-Aldaimsolutions/Facebook-Clone.git',
      technologies: ['React Native', 'Firebase', 'JavaScript', 'Real-time Database']
    },
    {
      category: 'mobile',
      title: 'Translation & Voice Recognition App',
      description: 'Multi-language translation app with voice recognition capabilities. Built with React Native for cross-platform compatibility.',
      image: 'images/translation.png',
      liveUrl: '',
      githubUrl: 'https://github.com/AliRazaQureshi383/Phrasebook.git',
      technologies: ['React Native', 'Voice Recognition', 'Translation API', 'JavaScript']
    }
  ];

  // Render portfolio projects
  function renderProjects(filter = 'all') {
    const container = document.getElementById('portfolio-container');
    if (!container) {
      console.error('Portfolio container not found!');
      return;
    }

    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(p => p.category === filter);

    if (filteredProjects.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1 / -1; padding: 2rem;">No projects found in this category.</p>';
      return;
    }

    const html = filteredProjects.map(project => `
      <div class="portfolio-item" data-category="${project.category}">
        <div class="portfolio-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x250?text=Project+Image'" />
          <div class="portfolio-overlay"></div>
        </div>
        <div class="portfolio-content">
          <h3 class="portfolio-title">${project.title}</h3>
          <p class="portfolio-description">${project.description}</p>
          <div class="portfolio-tech">
            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>
          <div class="portfolio-links">
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" class="portfolio-link">
                <i class="fas fa-external-link-alt"></i>
                <span>Live Demo</span>
              </a>
            ` : ''}
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" class="portfolio-link">
                <i class="fab fa-github"></i>
                <span>GitHub</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = html;
    
    // Items are visible by default, no need for intersection observer
    // They'll appear immediately when rendered
  }

  // Portfolio filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
      });
    });
  } else {
    console.warn('Filter buttons not found!');
  }

  // Initial render - ensure it runs after DOM is ready
  // Try immediate render first, then fallback to timeout
  function initPortfolio() {
    if (document.getElementById('portfolio-container')) {
      renderProjects();
    } else {
      setTimeout(() => {
        renderProjects();
      }, 100);
    }
  }

  // Try multiple times to ensure it renders
  initPortfolio();
  
  // Also try on window load as fallback
  window.addEventListener('load', () => {
    if (!document.querySelector('.portfolio-item')) {
      initPortfolio();
    }
  });
  
  // Force render after a short delay as final fallback
  setTimeout(() => {
    if (!document.querySelector('.portfolio-item')) {
      initPortfolio();
    }
  }, 500);

  // Skill progress animation on scroll
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
  });

  // Timeline animation on scroll
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
  });

  // Education cards animation
  const educationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.education-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    educationObserver.observe(card);
  });

  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }

  // Active navigation link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  } catch (error) {
    console.error('Error in DOMContentLoaded:', error);
  }
});

// Ensure portfolio renders even if there were errors
window.addEventListener('load', function() {
  setTimeout(() => {
    const container = document.getElementById('portfolio-container');
    if (container && !container.querySelector('.portfolio-item')) {
      // Re-run portfolio initialization
      const projects = [
        {
          category: 'fullstack',
          title: 'Social Hall HQ',
          description: 'Full-stack dating platform with 2000+ daily active users. Built with Next.js, TypeScript, MongoDB, and Next-SEO for optimal search engine visibility.',
          image: 'https://res.cloudinary.com/insight-byte/image/upload/v1676478604/socialhall_ucji2v.png',
          liveUrl: 'https://socialhallhq.com/',
          githubUrl: '',
          technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'Next-SEO', 'AWS']
        }
        // Add more projects if needed - this is just a fallback
      ];
      
      if (container && projects.length > 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Portfolio loading... Please refresh the page.</p>';
      }
    }
  }, 2000);
});
