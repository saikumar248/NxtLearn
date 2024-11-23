// JavaScript to dynamically add course content with dummy links
const courseContent = [
    { name: "Core Java", link: "https://www.javatpoint.com/java-tutorial" },
    { name: "Advance Java", link: "https://www.geeksforgeeks.org/advanced-java/" },
    { name: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
    { name: "Oracle", link: " https://www.oracle.com/database/technologies/appdev.html" },
    { name: "Frontend", link: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer" },
    { name: "JSP", link: "https://www.tutorialspoint.com/jsp/index.htm" },
    { name: "Servelets", link: "Servlets/index.html" },
    { name: "JDBC", link: " https://www.geeksforgeeks.org/jdbc-in-java/" }
  ];
  
  const courseListElement = document.getElementById('course-list');
  
  courseContent.forEach(course => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = course.name;
    link.href = course.link;
    link.target = "_blank"; // Opens link in a new tab
    listItem.appendChild(link);
    courseListElement.appendChild(listItem);
  });

  
  