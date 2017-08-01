<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
    <script landuage="JavaScript">
      function FuelCons(){
        var Cons=prompt("Каков Ваш пробег в сотнях км?", "Пробег");
        /*функция выводит результат, запускает вторую функцию
        имеет свою переменную для передачи*/
        var ans=Calcul(Cons);
        alert("Расход горючего составил "+ ans);
        }
        //собственно расчет, здесь нужна переменная из перой ф.
      function Calcul(Cons){
        //я сразу писала var res=...
        var res;
        res=6*Cons;
        //чтобы верyть значение, мы же не исп alert
        return res;
        //Получается в первую функцию не вставляем переменную из второй
      }
    </script>
  </head>
  <!--запускаем функцию при загрузке страницы -->
  <body onLoad="FuelCons()">
    <h1>Hello Plunker!</h1>
  </body>

</html>