function resizePage() {
    let screenHeight = $(window).height();
    let screenWidth = $(window).width();

    if((screenHeight/screenWidth) > (9.25/7))
    {
        let width = screenWidth*.9;
        let height = width * 9.25 / 7;
        $('#page').width(width);
        $('#page').height(height);
    }

    else
    {
        let height = screenHeight*.9;
        let width = height * 7 / 9.25;
        $('#page').width(width);
        $('#page').height(height);
    }
}

function resizeFont() {
    let pageHeight = $('#page').height();
    let totalleftHeight = $('#left').height() + $('#top').height();
    let totalrightHeight = $('#right').height() + $('#top').height();
    let alltextNodes = $('#page p,#page h2,#page h4');
    let allUnderlineNodes = $('#page u');

    while(pageHeight<totalleftHeight || pageHeight<totalrightHeight) {
        
        for (let i = 0; i < alltextNodes.length; i++) {
            let fontSize = parseInt($(alltextNodes[i]).css('font-size'));
            $(alltextNodes[i]).css('font-size',fontSize*.99);
        }

        for (let i = 0; i < allUnderlineNodes.length; i++) {
            let underLineSize = parseInt($(allUnderlineNodes[i]).css('text-decoration-thickness'));
            $(allUnderlineNodes[i]).css('text-decoration-thickness',underLineSize*.95);
        }

        totalleftHeight = $('#left').height() + $('#top').height();
        totalrightHeight = $('#right').height() + $('#top').height();
    }

    $('#page ol').css('font-size',$('#page ol p').css('font-size'))
}

function CreatePDFfromHTML() {
    var HTML_Width = $("#page").width();
    var HTML_Height = $("#page").height();
    var top_left_margin = 0;
    var PDF_Width = HTML_Width;
    var PDF_Height = HTML_Height;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    html2canvas($("#page")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        pdf.save("RESUME.pdf");
    });
}