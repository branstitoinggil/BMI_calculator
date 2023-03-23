var weightInput = document.getElementById("weight");
var ageInput = document.getElementById("age");
var heightInput = document.getElementById("height");
var male = document.getElementById("pria");
var female = document.getElementById("wanita");
let rightContent = document.querySelector(".grid-child.right");
// Fungsi mengkalkulasi BMI
function calculateBMI(){
    var a = [ageInput.value, heightInput.value, weightInput.value];

    // Jika inputan kosong maka akan memunculkan alert
    if (ageInput.value=='' || heightInput.value=='' || weightInput.value=='' || (male.checked == false && female.checked == false)){
        window.alert("Can't empty");
    }else{
        var bmi = Number(a[2])/(Number(a[1])/100*Number(a[1])/100);
        let category;

        // Jika radio "male" diceklis
        if(male.checked == true){
            if(bmi < 20){
                category = "Kekurangan Berat Badan";
            }else if(bmi < 25){
                category = "Ideal";
            }else if(bmi < 30){
                category = "Kelebihan Berat Badan";
            }else{
                category = "Obesitas";
            }
        }else{
            if(bmi < 18){
                category = "Kekurangan Berat Badan";
            }else if(bmi < 24){
                category = "Ideal";
            }else if(bmi < 29){
                category = "Kelebihan Berat Badan";
            }else{
                category = "Obesitas";
            }
        }
        if(male.checked == true){
            if(bmi < 20){
                kriteria = "Anda memiliki berat bada yang kurang";
            }else if(bmi < 25){
                kriteria = "Anda memiliki berat bada yang Ideal";
            }else if(bmi < 30){
                kriteria = "Anda memiliki berat bada yang berlebih";
            }else{
                kriteria = "Anda masuk kriteria Obesitas";
            }
        }else{
            if(bmi < 18){
                kriteria = "Anda memiliki berat bada yang kurang";
            }else if(bmi < 24){
                kriteria = "Anda memiliki berat bada yang Ideal";
            }else if(bmi < 29){
                kriteria = "Anda memiliki berat bada yang berlebih";
            }else{
                kriteria = "Anda masuk kriteria Obesitas";
            }
        }
        if(male.checked == true){
            if(bmi < 20){
                dekripsi = "Hasil BMI kurang dari 20";
            }else if(bmi < 25){
                dekripsi = "Hasil BMI di antara 20 hingga 25";
            }else if(bmi < 30){
                dekripsi = "Hasil BMI di antara 25 hingga 30";
            }else{
                dekripsi = "Hasil BMI lebih dari 30";
            }
        }else{
            if(bmi < 18){
                dekripsi = "Hasil BMI kurang dari 18";
            }else if(bmi < 24){
                dekripsi = "Hasil BMI di antara 18 hingga 24";
            }else if(bmi < 29){
                dekripsi = "Hasil BMI di antara 24 hingga 29";
            }else{
                dekripsi = "Hasil BMI lebih dari 29";
            }
        }
        if(male.checked == true){
            if(bmi < 20){
                dekripsi2 = "Anda berada dalam kategori berat badan kurang. Cara terbaik untuk menaikkan berat badan adalah dengan menambah kalor makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
            }else if(bmi < 25){
                dekripsi2 = "Anda berada dalam kategori Ideal. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menjaga pola makan dan olahraga tetap stabil.";
            }else if(bmi < 30){
                dekripsi2 = "Anda berada dalam kategori overweigth atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
            }else{
                dekripsi2 = "Anda berada dalam kategori obesitas. Cara terbaik untuk menurunkan berat badan adalah dengan mengurangi kalor makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk diet ketat hingga batas normal.";
            }
        }else{
            if(bmi < 18){
                dekripsi2 = "Anda berada dalam kategori berat badan kurang. Cara terbaik untuk menaikkan berat badan adalah dengan menambah kalor makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
            }else if(bmi < 24){
                dekripsi2 = "Anda berada dalam kategori Ideal. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menjaga pola makan dan olahraga tetap stabil.";
            }else if(bmi < 29){
                dekripsi2 = "Anda berada dalam kategori overweigth atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
            }else{
                dekripsi2 = "Anda berada dalam kategori obesitas. Cara terbaik untuk menurunkan berat badan adalah dengan mengurangi kalor makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk diet ketat hingga batas normal.";
            }
        }

        const resultTitle = `${category}.`;
        const resultNumber = `${bmi.toFixed(2)}`;
        const resultKriteria = `${kriteria}.`;
        const resultDeskripsi = `${dekripsi}.`;
        const resultDeskripsi2 = `${dekripsi2}.`;
        rightContent.style.display = "initial"
        document.getElementById("title").innerHTML = resultTitle;
        document.getElementById("angka-bmi").innerHTML = resultNumber;
        document.getElementById("kriteria").innerHTML = resultKriteria;
        document.getElementById("deskripsi").innerHTML = resultDeskripsi;
        document.getElementById("deskripsi2").innerHTML = resultDeskripsi2;
    }

}

function resetForm(){
   document.getElementById("age").value = '';
   document.getElementById("height").value = '';
   document.getElementById("weight").value = '';
   document.getElementById("pria").checked = false;
   document.getElementById("wanita").checked = false;
   rightContent.style.display = "none"
}