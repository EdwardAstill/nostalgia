document.querySelectorAll('.scroll-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const content = document.querySelector('.main-content');
      const scrollAmount = 30;
      
      if(arrow.classList.contains('up')) {
        content.scrollTop -= scrollAmount;
      } else {
        content.scrollTop += scrollAmount;
      }
      
      // Update thumb position (basic implementation)
      const thumb = document.querySelector('.scroll-thumb');
      const maxScroll = content.scrollHeight - content.clientHeight;
      const thumbPosition = (content.scrollTop / maxScroll) * 
                           (content.clientHeight - thumb.offsetHeight);
      thumb.style.top = `${thumbPosition}px`;
    });
  });