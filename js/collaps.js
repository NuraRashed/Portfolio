function toggleCollapsibleSection(sectionId, btnId) {
  var section = document.getElementById(sectionId);
  var allSections = document.querySelectorAll('.collapsible-section');
  var dropdownBtn = document.getElementById(btnId);



  // Toggle the selected section
  section.classList.toggle('active');
  if (section.style.display === 'none') {
    section.style.display = 'block';
    document.getElementById(btnId).innerHTML = "Read less<i class='dropup-icon'></i>&nbsp;";

  } else {
    section.style.display = 'none';

    dropdownBtn.innerHTML = "Read more<i class='dropdown-icon'></i>&nbsp;";
  }


}
