function Aluno() {
  const notasAluno = (Math.random() * 100).toFixed(0)
  

  if (notasAluno >= 90) {
    //console.log('A')
    
    document.writeln("<h2> Você tirou A seu resultado: </h2>" + notasAluno);
    document.write("<br> EXECELENTE!!!")

  } else if (notasAluno >= 80 && 89) {
    //console.log('B')
    
    document.writeln("<h2>Você tirou B seu resultado: </h2>" + notasAluno);
    document.write("<br> PARABENS VOCÊ É BOM!!! WoooW")

  } else if (notasAluno >= 70 && 79) {
    //console.log('C')
    
    document.writeln("<h2>Você tirou C seu resultado: </h2>" + notasAluno);
    document.write("<br> Você passou mais preste mais ATENÇÃO e você chega lá!");

  } else if (notasAluno >= 60 && 69) {
    //console.log('D')
    
    document.writeln("<h2>Você tirou D seu resultado: </h2>" + notasAluno);
    document.write("<br> Esforce mais você consegue Acredito em você!!! (:");

  } else {
    //console.log('F')
  
    document.writeln("<h2>Você tirou F seu resultado: </h2>" + notasAluno);
    document.write("<br>  Ja sabe );")
  }
  
  //console.log(notasAluno)
  return Aluno
}

Aluno()
