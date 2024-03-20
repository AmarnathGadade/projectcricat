
    function scrollToSection(section) {
      if (section === 'mens') {
        const mensSection = document.getElementById('menSection');
        mensSection.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'womens') {
        const womensSection = document.getElementById('womensSection');
        womensSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function match(section) {
      if (section === 't20') {
        const t20Section = document.getElementById('t20Section');
        t20Section.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'odi') {
        const odiSection = document.getElementById('odiSection');
        odiSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const awardsLink = document.getElementById('awardsLink');
  awardsLink.addEventListener('click', function(event) {
    event.preventDefault();
    const awardsSection = document.getElementById('awardsSection');
    awardsSection.scrollIntoView({ behavior: 'smooth' });
  });

  const newsLink = document.getElementById('newsLink');
  newsLink.addEventListener('click', function(event) {
    event.preventDefault();
    const awardsSection = document.getElementById('newsSection');
    awardsSection.scrollIntoView({ behavior: 'smooth' });
  });

  const homeLink = document.getElementById('homeLink');
  homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    const awardsSection = document.getElementById('homeSection');
    awardsSection.scrollIntoView({ behavior: 'smooth' });
  });
  
