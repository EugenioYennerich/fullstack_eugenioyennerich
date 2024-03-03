sequenceDiagram
    participant browser
    participant server

    browser->>server: POST  https://studies.cs.helsinki.fi/exampleapp/notes Status=302 
    activate server
    server-->>browser: document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css Status:200
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js Status:200
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    browser->>server: https://studies.cs.helsinki.fi/exampleapp/data.json Status:200
    activate server
    server-->>browser: JSON
    deactivate server
    
    Created: https://www.mermaidchart.com/