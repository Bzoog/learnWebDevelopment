const turnTheme = (mode) => {
   const main = document.getElementsByTagName('main')[0];
   if (mode == 'dark') {
      main.classList.add('dark')
   } else {
      main.classList.remove('dark')
   }
}

const copy = (id, buttonToCopy) => {
   const codeText = document.getElementById(id).textContent;

   navigator.clipboard.writeText(codeText)
   .then(() => {
      buttonToCopy.textContent = "تم نسخ الكود بنجاح!";
   })
   .catch(err => {
      buttonToCopy.textContent = "حدث خطأ أثناء النسخ.";
      console.error("خطأ:", err);
   });
   setTimeout(() => {
      buttonToCopy.innerHTML = 'نسخ'
   }, 2000)
}

const turnThemeButton = document.getElementById('turn_theme');
onload = () => {
   turnThemeButton.onclick = () => {
      if(turnThemeButton.classList.contains('light')){
         turnThemeButton.classList.add('dark')
         turnThemeButton.classList.remove('light')
         turnThemeButton.textContent = 'فاتح'
         turnTheme('dark')
      }else{
         turnThemeButton.classList.add('light')
         turnThemeButton.classList.remove('dark')
         turnThemeButton.textContent = 'مظلم'
         turnTheme('light')
      }
   }
}


