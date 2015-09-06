var formattedName= HTMLheaderName.replace("%data%", "Lorenzo Ferrario");
var formattedRole= HTMLheaderRole.replace("%data%", "FE Developer");
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
