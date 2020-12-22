// For Clear result.

function clearme() {
  document.getElementById('ageday').innerHTML='';
}
 
//convert into age  -->   pd- present date  bm- birth monthe

function age()
{
  // Current day
var cdate=new Date();
var pd=cdate.getDate();
var pm=cdate.getMonth();
var py=cdate.getFullYear();
// currentdate=dd+'/'+mm+'/'+yy;

// Birth date 1995-01-06.
  var bdate = document.getElementById("age").value;
  var bd = bdate.slice(8,10);
  var bm = bdate.slice(5, 7);
  var by = bdate.slice(0,4);

  var d, m, y;
  var md= [31,28,31,30,31,30,31,31,30,31,30,31];
  y = py - by;
  if (pm < bm)
  {
    y--;
    m = 12 - (bm - pm);       
  }
  else
  {m = pm - bm;}
  if (pd < bd)
  {
    m--;
    d = md[pm - 1] - (bd - pd);
  }
  else
  {
    d = pd - bd;
  }
// Print result.
  document.getElementById('ageday').innerHTML= "Your age is "+y + " years " + m + " months " + d +" days.";
} 