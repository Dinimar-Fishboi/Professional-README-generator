function renderLicenseLink(data) {
    if (data.license[3] === "Apache License, Version 2.0"){
    return `# ${data.title}
  
    User chose the ${data.license[3]}; aka "Apache License, Version 2.0"
    
  
    `
    }
    else if (data.license[3] === "MIT License"){
      return `# ${data.title}
    
      User chose the ${data.license[3]}; aka "MIT License"
      
    
      `
      }
      else if (data.license[3] ===  "Mozilla Public License 2.0"){
        return `# ${data.title}
      
        User chose the ${data.license[3]}; aka  "Mozilla Public License 2.0"
        
      
        `
        }
        else if (data.license[3] === "GNU General Public License version 3"){
          return `# ${data.title}
        
          User chose the ${data.license[3]}; aka "GNU General Public License version 3"
          
        
          `
          }
  }

  module.exports = renderLicenseLink;