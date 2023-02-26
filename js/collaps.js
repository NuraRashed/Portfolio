function toggleCollapsibleSection(sectionId, btnId) {
  var section = document.getElementById(sectionId);
  var allSections = document.querySelectorAll('.collapsible-section');
  var dropdownBtn = document.getElementById(btnId);


  if (!section.classList.contains('active')) {

    section.style.display = 'none';

  }
  if (section.classList.contains('active')) {

    section.style.display = 'block';

  }
  
  // Toggle the selected section
  section.classList.toggle('active');
  if (section.style.display === 'none') {
    section.style.display = 'block';
    document.getElementById(btnId).innerHTML = "Read less";

  } else {
    section.style.display = 'none';

    dropdownBtn.innerHTML = 'Read more';
  }


}
