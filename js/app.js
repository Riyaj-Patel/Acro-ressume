function addInternship(){
    let totalInternships = $('.experience').length
    // if internship less than 2 add a slide to the next
    if (totalInternships<2) {
        let currentSlide = parseInt($('.slick-current').attr('data-slick-index'));
        let internshipHTML = `<div class="slider-container">
                                <div class="slider-content">
                                    <h2>Internship Details</h2>
                                    <div class="Form-group">
                                        <div class="experience">
                                            <label class="label-content" for="titlefield${totalInternships+1}">Title/Position</label>
                                            <input type="text" id="titlefield${totalInternships+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="cmpnamefield${totalInternships+1}">Company Name</label>
                                            <input type="text" id="cmpnamefield${totalInternships+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="sdatefield${totalInternships+1}">Start Date</label>
                                            <input type="date" id="sdatefield${totalInternships+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="edatefield${totalInternships+1}">End Date</label>
                                            <input type="date" id="edatefield${totalInternships+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="detailfield${totalInternships+1}">Details</label>
                                            <input type="text" id="detailfield${totalInternships+1}" placeholder="Achievements/Task/Responsibility "
                                                class="input-content" />
                                            <div class="add-remove-container mt-3 mb-3">
                                            <button class="button button5 add-button"  onclick="addInternship()">Add Internship</button>
                                            <button class="button button5 remove-button"  onclick="removeInternship()">Remove Internship</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                        $('.form-content').slick('slickAdd',internshipHTML,currentSlide);        
        
        // if internship is equal to 0 remove the current slide with add internship button
        if (totalInternships==0) {
            $('.form-content').slick('slickRemove',currentSlide);
            $('.form-content').slick('refresh')
        }
        // if internship is equal to 0 move to next slide
        else {
            $('.button-next').click()
        }
    }
    // if number of internships are not less than 2 deliver an alert
    else{
        alert('You cannot enter more than 2 internships.')
    }
};

function removeInternship(){
    let totalInternships = $('.experience').length;
    let currentSlide = parseInt($('.slick-current').attr('data-slick-index'));

    // if there is only one internship add a slide with add internship btn
    if (totalInternships==1)
    {
        let internshipHTML = `<div class="slider-container">
                                <div class="slider-content">
                                    <h2>Internship</h2>
                                    <div class="Form-group add-remove-container mt-3 mb-3">
                                        <button class="button button5 add-button" onclick="addInternship()">Add Internship</button>
                                    </div>
                                </div>
                            </div>`;

        $('.form-content').slick('slickAdd',internshipHTML,currentSlide); 
    }
    // Now, remove the currentSlide
    $('.form-content').slick('slickRemove',currentSlide);
    $('.form-content').slick('refresh')
};

function addTraining(){
    let totalTrainings = $('.training').length
    // if Training less than 2 add a slide to the next
    if (totalTrainings<2) {
        let currentSlide = parseInt($('.slick-current').attr('data-slick-index'));
        let trainingHTML = `<div class="slider-container">
                                <div class="slider-content">
                                    <h2>Training Details</h2>
                                    <div class="Form-group">
                                        <div class="training">
                                            <label class="label-content" for="trn_coursefield${totalTrainings+1}">Course Name</label>
                                            <input type="text" id="trn_coursefield${totalTrainings+1}" placeholder="Enter Here"
                                            class="input-content" />
                                            <label class="label-content" for="trn_cmpnamefield${totalTrainings+1}">Company Name</label>
                                            <input type="text" id="trn_cmpnamefield${totalTrainings+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="trn_sdatefield${totalTrainings+1}">Start Date</label>
                                            <input type="date" id="trn_sdatefield${totalTrainings+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="trn_edatefield${totalTrainings+1}">End Date</label>
                                            <input type="date" id="trn_edatefield${totalTrainings+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="trn_detailfield${totalTrainings+1}">Details</label>
                                            <input type="text" id="trn_detailfield${totalTrainings+1}" placeholder="Achievements/Task/Responsibility "
                                                class="input-content" />
                                            <div class="add-remove-container mt-3 mb-3">
                                            <button class="button button5 add-button"  onclick="addTraining()">Add Training</button>
                                            <button class="button button5 remove-button"  onclick="removeTraining()">Remove Training</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                        $('.form-content').slick('slickAdd',trainingHTML,currentSlide);        
        
        // if Training is equal to 0 remove the current slide with add Training button
        if (totalTrainings==0) {
            $('.form-content').slick('slickRemove',currentSlide);
            $('.form-content').slick('refresh')
        }
        // if Training is equal to 0 move to next slide
        else {
            $('.button-next').click()
        }
    }
    // if number of Trainings are not less than 2 deliver an alert
    else{
        alert('You cannot enter more than 2 Trainings.')
    }
};

function removeTraining(){
    let totalTrainings = $('.training').length;
    let currentSlide = parseInt($('.slick-current').attr('data-slick-index'));

    // if there is only one Training add a slide with add Training btn
    if (totalTrainings==1)
    {
        let trainingHTML = `<div class="slider-container">
                                <div class="slider-content">
                                    <h2>Training</h2>
                                    <div class="Form-group add-remove-container mt-3 mb-3">
                                        <button class="button button5 add-button" onclick="addTraining()">Add Training</button>
                                    </div>
                                </div>
                            </div>`;

        $('.form-content').slick('slickAdd',trainingHTML,currentSlide); 
    }
    // Now, remove the currentSlide
    $('.form-content').slick('slickRemove',currentSlide);
    $('.form-content').slick('refresh')
};

function addProject(){
    let totalProjects = $('.project').length
    // if Project less than 2 add a slide to the next
    if (totalProjects<2) {
        let currentSlide = parseInt($('.slick-current').attr('data-slick-index'));
        let projectHTML = `<div class="slider-container">
                                <div class="slider-content">
                                    <h2>Project Details</h2>
                                    <div class="Form-group">
                                        <div class="project">
                                            <label class="label-content" for="projectfield${totalProjects+1}">Project Name</label>
                                            <input type="text" id="projectfield${totalProjects+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="pro_stdatefield${totalProjects+1}">Start Date</label>
                                            <input type="date" id="pro_stdatefield${totalProjects+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="pro_eddatefield${totalProjects+1}">End Date</label>
                                            <input type="date" id="pro_eddatefield${totalProjects+1}" placeholder="Enter Here"
                                                class="input-content" />
                                            <label class="label-content" for="pro_detailpfield${totalProjects+1}">Details</label>
                                            <input type="text" id="pro_detailpfield${totalProjects+1}"
                                                placeholder="Achievements/Task/Responsibility " class="input-content" />
                                            <div class="add-remove-container mt-3 mb-3">
                                                <button class="button button5 add-button" onclick="addProject()">Add Project</button>
                                                <button class="button button5 remove-button" onclick="removeProject()">Remove
                                                    Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                        $('.form-content').slick('slickAdd',projectHTML,currentSlide);        
        
        // if Project is equal to 0 remove the current slide with add Project button
        if (totalProjects==0) {
            $('.form-content').slick('slickRemove',currentSlide);
            $('.form-content').slick('refresh')
        }
        // if Project is equal to 0 move to next slide
        else {
            $('.button-next').click()
        }
    }
    // if number of Projects are not less than 2 deliver an alert
    else{
        alert('You cannot enter more than 2 Projects.')
    }
};

function removeProject(){
    let totalProjects = $('.project').length;
    let currentSlide = parseInt($('.slick-current').attr('data-slick-index'));

    // if there is only one Project add a slide with add Project btn
    if (totalProjects==1)
    {
        let projectHTML = `<div class="slider-container">
                                <div class="slider-content">
                                    <h2>Project</h2>
                                    <div class="Form-group add-remove-container mt-3 mb-3">
                                        <button class="button button5 add-button" onclick="addProject()">Add Project</button>
                                    </div>
                                </div>
                            </div>`;

        $('.form-content').slick('slickAdd',projectHTML,currentSlide); 
    }
    // Now, remove the currentSlide
    $('.form-content').slick('slickRemove',currentSlide);
    $('.form-content').slick('refresh')
};

function addAchievement(el) {
    let totalAchievements = $('.achievement').length;
    
    // adding achievement if no. of achievements less than 2
    if(totalAchievements<2){
        $(el).parent('.archi-container').after(`<div class="Form-group">
                        <div class="achievement">
                            <label class="label-content" for="achievefield2">Achievement 2</label>
                            <input type="text" id="achievefield2" placeholder="Enter Here"
                                                                    class="input-content" />
                        </div>
                    </div>
                    <div class="archi-container mt-3 mb-3">
                    <button class="button button5 archi-button"  onclick="removeAchievement(this)">Remove</button>
                    </div>`);
                    
        }
    else{
        alert('You cannot enter more than 2 Projects.');
    }
};

function removeAchievement(el){
    $(el).parent('.archi-container').prev('.Form-group').remove();
    $(el).parent('.archi-container').remove();
};

function generator() {

    // ---------------------------------------------------- Grabbing Values -------------------------------------------------

    $('form').submit()
    //Personal Information
    let objfield=document.getElementById("objfield").value
    let namefield=document.getElementById("namefield").value
    let fatherfield=document.getElementById("fatherfield").value
    let dobfield=document.getElementById("dobfield").value
    let gender=$('input[name=gender]:checked').val()
    let langfield=document.getElementById("langfield").value
    let motherfield=document.getElementById("motherfield").value
    let nationalityfield=document.getElementById("nationalityfield").value
    let maritalfield=document.getElementById("maritalfield").value
    let passportfield=document.getElementById("passportfield").value

    //Contact Information
    let addressfield=document.getElementById("addressfield").value
    let phonefield=document.getElementById("phonefield").value
    let emailfield=document.getElementById("emailfield").value
    let skypefield=document.getElementById("skypefield").value
    let linkedfield=document.getElementById("linkedfield").value
    let githubfield=document.getElementById("githubfield").value

    //Academic Record

    //College Details

    let clgnamefield=document.getElementById("clgnamefield").value
    let studyfield=document.getElementById("studyfield").value
    let scorefield=document.getElementById("scorefield").value
    let gradfield=document.getElementById("gradfield").value

    //12th 
    let sclnamefield_12=document.getElementById("sclnamefield_12").value
    let scorefield_12=document.getElementById("scorefield_12").value
    let gradfield_12=document.getElementById("gradfield_12").value

    //10th
    let sclnamefield_10=document.getElementById("sclnamefield_10").value
    let scorefield_10=document.getElementById("scorefield_10").value
    let gradfield_10=document.getElementById("gradfield_10").value

    //skills
    let skillfield=document.getElementById("skillfield").value

    //internship
    let titlefield1;
    let cmpnamefield1;
    let sdatefield1;
    let edatefield1;
    let detailfield1;

    try{
        titlefield1=document.getElementById("titlefield1").value
        cmpnamefield1=document.getElementById("cmpnamefield1").value
        sdatefield1=document.getElementById("sdatefield1").value
        edatefield1=document.getElementById("edatefield1").value
        detailfield1=document.getElementById("detailfield1").value
    }
    catch{
        titlefield1="";
        cmpnamefield1="";
        sdatefield1="";
        edatefield1="";
        detailfield1="";
    }

    let titlefield2;
    let cmpnamefield2;
    let sdatefield2;
    let edatefield2;
    let detailfield2;

    try{
        titlefield2=document.getElementById("titlefield2").value
        cmpnamefield2=document.getElementById("cmpnamefield2").value
        sdatefield2=document.getElementById("sdatefield2").value
        edatefield2=document.getElementById("edatefield2").value
        detailfield2=document.getElementById("detailfield2").value
    }
    catch{
        titlefield2="";
        cmpnamefield2="";
        sdatefield2="";
        edatefield2="";
        detailfield2="";
    }

    //training
    let trn_coursefield1;
    let trn_cmpnamefield1;
    let trn_sdatefield1;
    let trn_edatefield1;
    let trn_detailfield1;

    try{
        trn_coursefield1=document.getElementById("trn_coursefield1").value
        trn_cmpnamefield1=document.getElementById("trn_cmpnamefield1").value
        trn_sdatefield1=document.getElementById("trn_sdatefield1").value
        trn_edatefield1=document.getElementById("trn_edatefield1").value
        trn_detailfield1=document.getElementById("trn_detailfield1").value
    }
    catch{
        trn_coursefield1=""
        trn_cmpnamefield1="";
        trn_sdatefield1="";
        trn_edatefield1="";
        trn_detailfield1="";
    }

    let trn_coursefield2;
    let trn_cmpnamefield2;
    let trn_sdatefield2;
    let trn_edatefield2;
    let trn_detailfield2;

    try{
        trn_coursefield2=document.getElementById("trn_coursefield2").value
        trn_cmpnamefield2=document.getElementById("trn_cmpnamefield2").value
        trn_sdatefield2=document.getElementById("trn_sdatefield2").value
        trn_edatefield2=document.getElementById("trn_edatefield2").value
        trn_detailfield2=document.getElementById("trn_detailfield2").value
    }
    catch{
        trn_coursefield2=""
        trn_cmpnamefield2="";
        trn_sdatefield2="";
        trn_edatefield2="";
        trn_detailfield2="";
    }
    

    //project
    let projectname1;
    let pro_stdatefield1;
    let pro_eddatefield1;
    let pro_detailpfield1;

    try{
        projectname1=document.getElementById("projectfield1").value
        pro_stdatefield1=document.getElementById("pro_stdatefield1").value
        pro_eddatefield1=document.getElementById("pro_eddatefield1").value
        pro_detailpfield1=document.getElementById("pro_detailpfield1").value
    }
    catch{
        projectname1="";
        pro_stdatefield1="";
        pro_eddatefield1="";
        pro_detailpfield1="";
    }

    let projectname2;
    let pro_stdatefield2;
    let pro_eddatefield2;
    let pro_detailpfield2;

    try{
        projectname2=document.getElementById("projectfield2").value
        pro_stdatefield2=document.getElementById("pro_stdatefield2").value
        pro_eddatefield2=document.getElementById("pro_eddatefield2").value
        pro_detailpfield2=document.getElementById("pro_detailpfield2").value
    }
    catch{
        projectname2="";
        pro_stdatefield2="";
        pro_eddatefield2="";
        pro_detailpfield2="";
    }

    //extras
    let achievefield1=document.getElementById("achievefield1").value
    let achievefield2;
    try{
        achievefield2=document.getElementById("achievefield2").value
    }
    catch{
        achievefield2=""
    }
    let strengthfield=document.getElementById("strengthfield").value
    let aoifield=document.getElementById("aoifield").value
    let hobbyfield=document.getElementById("hobbyfield").value
    let referfield=document.getElementById("referfield").value
    //end

    // ---------------------------------- Replacing HTML form with view Resume -------------------------------------------

    let resumeFormatHTML = `<div id="page">
                                <div id="top">

                                <h2>${namefield}</h2>

                                <div>
                                    <h4><u>OBJECTIVE</u></h4>
                                    <p>${objfield}</p>
                                </div>

                            </div>

                            <div id="bottom">

                                <div id="left">

                                    <div>
                                        <h4><u>PERSONAL DETAILS</u></h4>
                                        <p><b>Date of Birth : </b>${dobfield}</p>
                                        <p><b>Gender : </b>${gender}</p>
                                        <p><b>Nationality : </b>${nationalityfield}</p>
                                        <p><b>Marital Status : </b>${maritalfield}</p>
                                        <p><b>Languages known : </b>${langfield}</p>
                                        <p><b>Mother Tongue : </b>${motherfield}</p>
                                        <p><b>Father’s Name : </b>Mr. ${fatherfield}</p>
                                        <p><b>Passport Details : </b>${passportfield}</p>
                                    </div>

                                    <div>
                                        <h4><u>CONTACT</u></h4>
                                        <p><b>Phone : </b>${phonefield}</p>
                                        <p><b>Address : </b>${addressfield}</p>
                                        <p><a href="mailto:${emailfield}"><i class="far fa-envelope" style="color: rgb(212, 70, 56);"></i>
                                        ${emailfield}</a></p>
                                        <p><a href="${linkedfield}"><i class="fab fa-linkedin" style="color: rgb(0, 119, 181);"></i>
                                        ${linkedfield}</a></p>
                                        <p><a href="/"><i class="fab fa-skype" style="color: rgb(0, 175, 240);"></i>
                                        ${skypefield}</a></p>
                                        <p><a href="https://github.com/${githubfield}/"><i class="fab fa-github" style="color: rgb(51, 3, 0);"></i>
                                                https://github.com/${githubfield}</a></p>
                                    </div>

                                    <div>
                                        <h4><u>EDUCATION</u></h4>
                                        <p><b>10th - ${sclnamefield_10} </b>(${gradfield_10})</p>
                                        <p><b>Percentage : </b>${scorefield_10} %</p>
                                        <p><b>12th - ${sclnamefield_12} </b>(${gradfield_12})</p>
                                        <p><b>Percentage : </b>${scorefield_10} %</p>
                                        <p><b>${studyfield} - ${clgnamefield} </b>(${gradfield})</p>
                                        <p><b>Percentage : </b>${scorefield} %</p>
                                    </div>

                                    <div>
                                        <h4><u>SKILLS</u></h4>
                                        <p>${skillfield}</p>
                                    </div>

                                    <div>
                                        <h4><u>HOBBIES</u></h4>
                                        <p>${hobbyfield}</p>
                                    </div>

                                </div>

                                <div id="right">`;

    // checking if any internship
    if(titlefield1!=""||titlefield2!=""){
        resumeFormatHTML+=`<div>
                                <h4><u>INTERNSHIP DETAILS</u></h4>
                                <p><b>${titlefield1} - ${cmpnamefield1}</b></p>
                                <p>${sdatefield1} - ${edatefield1}</p>
                                <p>${detailfield1}</p>
                                <p><b>${titlefield2} - ${cmpnamefield2}</b></p>
                                <p>${sdatefield2} - ${edatefield2}</p>
                                <p>${detailfield2}</p>
                            </div>`;
    }

    // checking if any training
    if(trn_coursefield1!=""||trn_coursefield2!=""){
        resumeFormatHTML+=`<div>
                                <h4><u>TRAINING DETAILS</u></h4>
                                <p><b>${trn_coursefield1} - ${trn_cmpnamefield1}</b></p>
                                <p>${trn_sdatefield1} - ${trn_edatefield1}</p>
                                <p>${trn_detailfield1}</p>
                                <p><b>${trn_coursefield2} - ${trn_cmpnamefield2}</b></p>
                                <p>${trn_sdatefield2} - ${trn_edatefield2}</p>
                                <p>${trn_detailfield2}</p>
                            </div>`;
    }
                               
    // checking if any project
    if(projectname1!=""||projectname2!=""){
        
        resumeFormatHTML+=`<div>
                            <h4><u>PROJECT DETAILS</u></h4>
                            <p><b>${projectname1}</b></p>
                            <p>${pro_stdatefield1} - ${pro_eddatefield1}</p>
                            <p>${pro_detailpfield1}</p>
                            <p><b>${projectname2}</b></p>
                            <p>${pro_stdatefield2} - ${pro_eddatefield2}</p>
                            <p>${pro_detailpfield2}</p>
                        </div>`
    }

    resumeFormatHTML+=`<div>
                            <h4><u>ACHIEVEMENTS</u></h4>
                            <ol>
                                <li>
                                    <p>${achievefield1}</p>
                                </li>`;                           

    // checking if second achievement
    if(achievefield2!=""){
        resumeFormatHTML+=`<li>
                                <p>${achievefield2}</p>
                            </li>`;
    }
    
    resumeFormatHTML+=`</ol>
                    </div>

                    <div>
                        <h4><u>STRENGTHS</u></h4>
                        <p>${strengthfield}</p>
                    </div>

                    <div>
                        <h4><u>AREA OF IMPROVEMENT</u></h4>
                        <p>${aoifield}</p>
                    </div>

                    <div>
                        <h4><u>REFERENCES</u></h4>
                        <p>${referfield}</p>
                    </div>

                    <div>
                        <h4><u>DECLARATION</u></h4>
                        <p>I hereby declare that the information furnished above is true to the best of my knowledge.</p>
                    </div>

                </div>

            </div>
        </div>
    <div class="download-edit-container">
    <button class="download-button" onclick="CreatePDFfromHTML()">Download</button>
    <button class="edit-button" onclick="editForm()">Edit</button>
    </div>`;
    
    $('.main-container').hide();

    $('.resume-container').append(resumeFormatHTML);

    // calling functions to check if overflow in layout
    resizePage();
    resizeFont();

};

function editForm() {
    $('.resume-container').empty();
    $('.main-container').show();
};