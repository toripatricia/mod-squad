{
  const modSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }

  let HTMLRepresentation = `<h1>The Mod Squad</h1>`

  modSquad.members.forEach(member => {
      HTMLRepresentation += `<div>${member}</div>`
  })
  document.querySelector.innerHTML = HTMLRepresentation
}
