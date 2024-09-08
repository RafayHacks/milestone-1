function toggleSection(id) {
    var section = document.getElementById(id);



    if (section.classList.contains('show')) {




        section.classList.remove('show');


    } else {


        // isko hide krdo



        document.querySelectorAll('.section-content').forEach(function(sec) {

            sec.classList.remove('show');
        });



        // save nhi kia


        section.classList.add('show');
    }
}
function toggleSection(id) {

       var section = document.getElementById(id);
        if (section.classList.contains('show')) {

        section.classList.remove('show');


    } else {



        // isko bhi hide krdo



        document.querySelectorAll('.section-content').forEach(function(sec) {

            sec.classList.remove('show');
        });


        // is option ko show krna hai




        section.classList.add('show');
    }
}

function generatePDF() {


    // is data ko collect krlo



    const fullName = document.getElementById('full-name').value;



    const phoneNumber = document.getElementById('phone-number').value;

    const email = document.getElementById('email').value;


    const city = document.getElementById('city').value;

    const degree = document.getElementById('degree').value;
       const institution = document.getElementById('institution').value;


    const year = document.getElementById('year').value;

        const jobTitle = document.getElementById('job-title').value;




    const companyName = document.getElementById('company-name').value;


               const duration = document.getElementById('duration').value;

       const skill1 = document.getElementById('skill1').value;


       const skill2 = document.getElementById('skill2').value;

       const skill3 = document.getElementById('skill3').value;



    // html content bana raha hu




    const pdfContent = `
        <h1>Resume</h1>
        <h2>Personal Information</h2>


        <p><strong>Full Name:</strong> ${fullName}</p>


        <p><strong>Phone Number:</strong> ${phoneNumber}</p>

        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>


        <h2>Education</h2>


        <p><strong>Degree or Certification:</strong> ${degree}</p>




        <p><strong>Institution:</strong> ${institution}</p>


        <p><strong>Year of Completion:</strong> ${year}</p>


        <h2>Experience</h2>
        <p><strong>Job Title:</strong> ${jobTitle}</p>


        <p><strong>Company Name:</strong> ${companyName}</p>

        <p><strong>Duration:</strong> ${duration}</p>


        <h2>Skills</h2>

        <p>${skill1}</p>

        <p>${skill2}</p>

        <p>${skill3}</p>
    `;

    

    // pdf save karnai ke lia html ka use kia ja raha hai



    html2pdf()




        .from(pdfContent)

        .save('resume.pdf');
}