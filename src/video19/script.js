const Input = document.getElementById("input");
const Result = document.getElementById("result");
const Submit = document.getElementById("submit");

function check(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

Submit.addEventListener("click",(e)=>{
    e.preventDefault();
  const text = Input.value;
  if(check(text)){
    Result.innerHTML = `<b>Đúng</b>`
  }
  else{
    Result.innerHTML = `<b>Sai</b>`
  }
});