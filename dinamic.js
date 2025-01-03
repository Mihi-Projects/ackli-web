// Fetch content from JSON
fetch('content.json')
  .then(response => response.json())
  .then(data => {
    // Set Dynamic Background Image
    document.getElementById('dynamic-image').style.backgroundImage = `url(${data.bgImage})`;

    // Set Titles
    document.getElementById('main-title').innerText = data.mainTitle;
    document.getElementById('sub-title').innerText = data.subTitle;

    // Set About Section Content
    const aboutSection = document.getElementById('about-section');
    aboutSection.innerHTML = `
      <div class="text-center mb-16">
        <h3 class="text-sky-400 text-lg uppercase tracking-widest mb-4">${data.about.welcome}</h3>
        <h2 class="text-blue-900 text-4xl md:text-5xl font-bold mb-8">${data.about.title}</h2>
        <p class="text-gray-600 text-lg max-w-4xl mx-auto mb-8">${data.about.text1}</p>
        <p class="text-gray-600 text-lg max-w-4xl mx-auto mb-8">${data.about.text2}</p>
        <div class="mt-8">
          <a href="about.html" class="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">Read More</a>
        </div>
      </div>
    `;
  });
