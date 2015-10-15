var googleForm = $(window).jqGoogleForms({"formKey": "1I3auxQpIe1rSBKsKLz_oUWxmr3Nk9E6TEqSYqhkuEHk"});

$('#register_form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
    //alert( "bad");
  } else {

    googleForm.sendFormData({

	    "entry.2087696815": $("#entry_2087696815").val(),
	    "entry.105755645": $("#entry_105755645").val(),
	    "entry.234418561": $("#entry_234418561").val(),
	    "entry.2097379919": $("#entry_2097379919").val(),
	    
  	}, "./");
  	//stop the form submitting
  	e.preventDefault();

  	//window.location.replace("./too-many-orders");
  }
});
