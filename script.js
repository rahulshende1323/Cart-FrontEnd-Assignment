document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.box').forEach((box) => {
        const content = box.querySelector('.content');
        if (box.querySelector('input[type="radio"]').checked) {
          content.style.display = 'block'; // Expand the content
          box.style.maxHeight = '400px';  // Adjust to fit expanded content
        } else {
          content.style.display = 'none'; // Collapse the content
          box.style.maxHeight = '5rem';  // Default height when collapsed
        }
      });
    });
  });
  