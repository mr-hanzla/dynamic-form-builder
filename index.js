let formDataJson;
jQuery(($) => {
    // set two fields by default, username and password
    const options = {
        defaultFields: [
            {
                type: "text",
                required: false,
                label: "Username",
                className: "form-control",
                name: "text-1706878711842-0",
                access: false,
                subtype: "text"
            },
            {
                type: "text",
                required: false,
                label: "Password My",
                className: "form-control",
                name: "text-1706878711842-1",
                access: false,
                subtype: "password"
            },
        ]
      };
    let formBuilder = $('#form-builder').formBuilder(options);

    // ======================================================
    //                  HELPING METHODS
    // ======================================================
    const loadFormData = () => {
        formDataJson = localStorage.getItem('formData');
        if (formDataJson) {
            const formData = JSON.parse(formDataJson);
            formData.forEach(item => {
            formBuilder.actions.addField(item);
        });
        }
    };

    const saveFormData = () => {
        formDataJson = formBuilder.actions.getData('json');
        if (formDataJson !== '[]') {
            localStorage.setItem('formData', formDataJson);
        }
    };

    // save 
    $(window).on('beforeunload', function(){
        saveFormData();
    });

    // ======================================================
    $('#submit-btn')[0].addEventListener('click', () => {
        saveFormData();
    });

    $('#load-btn')[0].addEventListener('click', () => {
        loadFormData();
    });

    // ======================================================
    $('#getXML')[0].addEventListener('click', () => {
        alert(formBuilder.actions.getData('xml'));
    });
    $('#getJSON')[0].addEventListener('click', () => {
        alert(formBuilder.actions.getData('json', true));
    });
    $('#getJS')[0].addEventListener('click', () => {
        alert('check console');
        console.log(formBuilder.actions.getData());
    });
});
