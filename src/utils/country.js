const countryselect = (country) => {
    switch (country) {
      case "TR":
        return "Türkiye";
      case "US":
        return "America Birleşik Devletleri";
      case "GB":
        return "England";
      case "DE":
        return "Germany";
      case "FR":
        return "France";
      case "ES":
        return "Spain";
      case "IT":
        return "Italy";
      case "NL":
        return "Netherlands";
      case "BE":
        return "Belgium";
      case "PT":
        return "Portugal";
      case "SE":
        return "Sweden";
      case "DK":
        return "Denmark";
      case "NO":
        return "Norway";
      case "FI":
        return "Finland";
      case "RU":
        return "Russia";
      case "UA":
        return "Ukraine";
      case "PL":
        return "Poland";
      case "CZ":
        return "Czechia";
      case "SK":
        return "Slovakia";
      case "HU":
        return "Hungary";
      case "RO":
        return "Romania";
      case "BG":
        return "Bulgaria";
      case "GR":
        return "Greece";
      case "HR":
        return "Croatia";
      case "SI":
        return "Slovenia";
      case "AT":
        return "Austria";
      case "CH":
        return "Switzerland";
      case "LI":
        return "Liechtenstein";
      case "LU":
        return "Luxembourg";
      case "IE":
        return "Ireland";
      case "IS":
        return "Iceland";
      case "AL":
        return "Albania";
      case "MK":
        return "North Macedonia";
      case "RS":
        return "Serbia";
      case "ME":
        return "Montenegro";
      case "BA":
        return "Bosnia and Herzegovina";
      case "XK":
        return "Kosovo";
      case "MT":
        return "Malta";
      case "CY":
        return "Cyprus";
      case "LT":
        return "Lithuania";
      case "LV":
        return "Latvia";
      case "EE":
        return "Estonia";
      case "MD":
        return "Moldova";
      case "AM":
        return "Armenia";
      case "AZ":
        return "Azerbaijan";
      case "GE":
        return "Georgia";
      case "BY":
        return "Belarus";
      case "AD":
        return "Andorra";
      case "MC":
        return "Monaco";
      case "SM":
        return "San Marino";
      case "VA":
        return "Vatican City";
    default:
        return "Unknown";
    }
  };

  module.exports = countryselect;