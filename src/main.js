function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  }

  function toggleDropdownProgram() {
    var dropdownContentProgrram = document.getElementById("myDropdownProgram");
    if (dropdownContentProgrram.style.display === "block") {
      dropdownContentProgrram.style.display = "none";
    } else {
      dropdownContentProgrram.style.display = "block";
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdownprogram-btn')) {
     console.log("test");
      var dropdownPrograms = document.getElementsByClassName("dropdownprogram-content");
      for (var i = 0; i < dropdownPrograms.length; i++) {
        var openDropdownProgram = dropdownPrograms[i];
        if (openDropdownProgram.style.display === "block") {
          openDropdownProgram.style.display = "none";
        }
      }
    }
  }

