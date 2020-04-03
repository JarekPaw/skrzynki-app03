exports.htmlTemplateFn = (responsible, helper, time, world, congregation) => {
  return `
    <!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatibile" content="ie=edge">
    <title>Potwierdzenie wybrania</title>
    
</head>
<body>
    <h3>Potwierdzenie wybrania datków ze skrzynek</h3>       
    <table border="1" style="margin: auto;">
    <caption>Data i godz: ${time}</caption>
   <thead>
      <tr style="text-align: center;">
         <th>Osoba odpowiedzialna</th> <th>Datki na potrzeby zboru</th> <th>Datki na ogólnośw. dział.</th>
      </tr>
   </thead>
   <tbody>
      <tr style="text-align: center;">
         <td>${responsible}</td> <td>${congregation}</td> <td>${world}</td>
      </tr>
      <tr style="text-align: center;">
         <th>Pomagał:</th> <td colspan="2">${helper}</td> <td></td>      
   </tbody>
</table>
<p>Wiadomość wygenerowana automatycznie, prosimy na nią nie odpowiadać <br> W razie pytań proszę skontaktuj się z osobą, która wybierała pieniądze ze skrzynek.</p>
</body>
</html>`;
};

/*
<style type="text/css"> td, th { border: 1px solid black; } </style>
*/
