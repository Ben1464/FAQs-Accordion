function toggleAccordion(element) {
    var content = element.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';

    var plusIcon = element.querySelector('img[src="assets/images/icon-plus.svg"]');
    var minusIcon = element.querySelector('img[src="assets/images/icon-minus.svg"]');
    plusIcon.style.display = plusIcon.style.display === 'none' ? 'inline' : 'none';
    minusIcon.style.display = minusIcon.style.display === 'none' ? 'inline' : 'none';
  }