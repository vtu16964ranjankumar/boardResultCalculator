const sub1 = document.getElementById('hindi');
const sub2 = document.getElementById('english');
const sub3 = document.getElementById('math');
const sub4 = document.getElementById('physics');
const sub5 = document.getElementById('chemestry');
const markObtain = document.getElementById('markObtained');
const percentage = document.getElementById('percent');
const finalResult = document.getElementById('result');

function showResult(){
  const totalMark= parseInt(sub1.value) + parseInt(sub2.value) + parseInt(sub3.value) + parseInt(sub4.value) + parseInt(sub5.value);
  let totalpercentage = ((totalMark/500)*100).toFixed(2);
  markObtain.innerHTML = totalMark;
  percentage.innerHTML = totalpercentage;

  //check for the finalResult
  if(totalMark>=300){
    finalResult.innerHTML='Pass✅' + '1st division';
  }
  else if(totalMark>=225 && totalMark<300){
    finalResult.innerHTML = 'Pass✅' + ' 2nd division';
  }
  else if(totalMark>=150 && totalMark<225){
    finalResult.innerHTML = 'Pass✅' + ' 3rd division';
  }
  else{
    finalResult.style="color:red";
    finalResult.innerHTML='Fail' + ' 💀You have to reappear';
  }
}