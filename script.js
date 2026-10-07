document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.style.display === 'flex';
      mainNav.style.display = isOpen ? 'none' : 'flex';
      mainNav.style.position = 'absolute';
      mainNav.style.top = '78px';
      mainNav.style.left = '16px';
      mainNav.style.right = '16px';
      mainNav.style.flexDirection = 'column';
      mainNav.style.padding = '1rem';
      mainNav.style.background = '#fff';
      mainNav.style.border = '1px solid rgba(17, 75, 44, 0.08)';
      mainNav.style.borderRadius = '16px';
      mainNav.style.boxShadow = '0 20px 35px rgba(17, 75, 44, 0.08)';
    });
  }

  const leadForm = document.getElementById('leadForm');
  const formStatus = document.querySelector('.form-status');

  if (leadForm && formStatus) {
    leadForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(leadForm);
      const name = formData.get('name')?.toString().trim() || 'Customer';
      const email = formData.get('email')?.toString().trim() || '';
      const phone = formData.get('phone')?.toString().trim() || '';
      const equipment = formData.get('equipment')?.toString().trim() || 'equipment';
      const details = formData.get('details')?.toString().trim() || '';

      const subject = encodeURIComponent(`New CCE Equipment Inquiry - ${equipment}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEquipment Needed: ${equipment}\n\nProject Details:\n${details}`
      );

      const mailtoLink = `mailto:austin.hancock@dobbsequipment.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      formStatus.textContent = 'Your request is ready to send to Austin Hancock.';
      leadForm.reset();
    });
  }
});
  