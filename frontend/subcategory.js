const subcategory = {
  Transportation: ["flight", "train", "coach bus", "taxi", "metro/subway/city bus"],
  Food: ["breakfast", 'lunch', 'supper', 'snacks/drinks', "Others"],
  Grocery: ["grocery"],
  Tickets: ["attraction tickets", "city card"],
  Souvenir: ["food", "clothes", "accessories", "postcard"],
  Hotel: ["Apartment", "Hostel", "Double Room"],
  Others: ["others"]
  
}

function makeSubmenu(value) {
  if(value.length==0) {
    document.getElementById("sub").innerHTML = "<option></option>";
  }
  else {
      var subOptions = "";
      for(subId in subcategory[value]) {
      subOptions+="<option>"+subcategory[value][subId]+"</option>";
      }
      document.getElementById("sub").innerHTML = subOptions;
  }
  }
function displaySelected() { 
  var category = document.getElementById("category").value;
  var sub = document.getElementById("sub").value;
  alert(category+"\n"+sub);
}
function resetSelection() {
  document.getElementById("category").selectedIndex = 0;
  document.getElementById("sub").selectedIndex = 0;
}