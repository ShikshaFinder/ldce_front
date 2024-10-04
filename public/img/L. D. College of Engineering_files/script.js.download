if(typeof JSEnvironment === "undefined") JSEnvironment = "dev"; else { console.log = function(){}; JSEnvironment == "prod"};

var isSubmitting = false;

$(function($){
	//validatorType = ["jQueryValidation","BootstrapValidator"]
	AjaxForm = function(element, options){

		this.onSuccess,this.onError,this.onFail,this.submit,this.submitEvent;

		this.formSubmitting = element;

		console.log(element,options);

		this.action = (typeof this.formSubmitting.attr("action") === "undefined")?"/":this.formSubmitting.attr("action");
		this.type = (typeof this.formSubmitting.attr("method") === "undefined")?"GET":this.formSubmitting.attr("method");
		this.data = new FormData(this.formSubmitting[0]);

		this.validatorType;
		//var isSubmitting = false;

		//Events
		if(typeof options !== "undefined"){
			console.log(options);
			if (typeof options.success !== "undefined")
				this.onSuccess = options.success;
			if (typeof options.error !== "undefined")
				this.onError = options.error;
			if (typeof options.fail !== "undefined")
				this.onFail = options.fail;

			this.validatorType = (typeof options.validatorType !== "undefined")?options.validatorType:'custom';
			this.isBootstrap = (typeof options.isBootstrap !== "undefined")?options.isBootstrap:true;
		}


		this.isSubmitting=false;
		//Submit Event after the used validator
		if(this.validatorType == "BootstrapValidator"){
			this.formSubmitting.on("success.form.bv", this, this.submitEvent);
		}
		else{
			//In Case of No Validator
			this.formSubmitting.on("submit", this, this.submitEvent);
		}
		console.log("submit binded for "+ element.selector);
	};

	AjaxForm.prototype.submit = function(){
		this.submitEvent({data:this});
	};

	AjaxForm.prototype.submitEvent = function(e){

		that = e.data;

		//Check if the validation is done
		if(that.validatorType == "jQueryValidation"){
			var $frm = $(that.formSubmitting);
			console.log('jQueryValidation',$frm.valid());
			if(!$frm.valid()){
				console.log("jQueryValidation Not Validated Form");
				return false;
			}
		}

		console.log("Submitting Ajax Form");
		that.data = new FormData(that.formSubmitting[0]);
		if(!that.isSubmitting){
			that.isSubmitting=true;

			if(typeof e.preventDefault !== "undefined") e.preventDefault();
			$.ajax({
				url:that.action,
				type:that.type,
				data:that.data,
				cache:false,
				contentType: false,
	            processData: false
			}).done(function (data) {
				that.isSubmitting=false;
				var jsonData = data;
				if(jsonData.status == "success"){
					//Updates a specific part of page
					//Example : jsonData.updateExtra = true, affectedElement = ".admin-table tr.active", content = new data
					if(jsonData.updateExtra){
						$(jsonData.affectedElement).html(jsonData.content);
					}

					//Redirects to the Page
					//Example : jsonData.redirect = true, redirectURL = "http://google.com"
					if(jsonData.redirect){
						//location.reload();
						if(jsonData.redirectURL == ""){
							location.reload();
						}
						else{
							window.location.href = jsonData.redirectURL;
						}
					}

					if(typeof that.onSuccess !== "undefined") that.onSuccess(jsonData);
				}
				else if(jsonData.status == "error"){
					var ele = jsonData.elements;

					if(that.validatorType == "BootstrapValidator"){
						for (var i = 0; i < ele.length; i++) {
							var err = $(that.formSubmitting.find('[data-bv-for="' + ele[i].name + '"]')[0]);
							var erricon = that.formSubmitting.find('[data-bv-icon-for="' + ele[i].name + '"]');
							err.show().parents(".form-group").removeClass("has-success").addClass("has-error");
							if(typeof erricon!=="undefined") erricon.show().removeClass("glyphicon-ok").addClass("glyphicon-remove");
							if(typeof ele[i].msg!=="undefined"){
								err.text(ele[i].msg);
							}
						}
					}
					else if(that.validatorType == "jQueryValidation"){
						var validator = $(that.formSubmitting.selector).validate();
						validator.showErrors(ele);
					}
					//
					if(typeof jsonData.message !== "undefined"){
						var alert = '<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' + jsonData.message.toString() + '</div>';
						that.formSubmitting.prepend(alert);
					}

					if(that.onError != null) that.onError(jsonData);
				}
				that.formSubmitting.find("input[type=submit], button[type=submit]").removeAttr("disabled");
			}).fail(function(e) {
				console.log("ajax fail",e);
				that.isSubmitting=false;

				var message = (JSEnvironment == "prod")?e.statusText:e.responseText;
				var alert = '<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>Error : ' + message + '</div>';

				that.formSubmitting.prepend(alert);
				that.formSubmitting.find("input[type=submit], button[type=submit]").removeAttr("disabled");
				if(that.onFail != null) that.onFail(e);
			});
		}
		return false;
	};


	$.fn.ajaxForm = function(options){
		//var selector=data.selector;
		var ajaxFrm = new AjaxForm(this, options);
		return ajaxFrm;
	};

}(window.jQuery));


$(function($){

	AjaxFile = function(element, options){
		this.url,this.postData,this.onProgress,this.onSuccess,this.onError,this.onFail;

		this.fileSubmitting = element;

		var formData = this.data = new FormData();

		// HTML file input user's choice...
		formData.append(element[0].name, element[0].files[0]);

		// JavaScript file-like object...
		//var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
		//var blob = new Blob([content], { type: "text/xml"});

		//Events
		if(typeof options !== "undefined"){
			console.log(options);
			if (typeof options.url !== "undefined")
				this.url = options.url;
			if (typeof options.postData !== "undefined"){
				var allDataNames = Object.getOwnPropertyNames(options.postData);
				for (var i = 0; i < allDataNames.length; i++) {
					var key = allDataNames[i];
					var val = options.postData[key];
					formData.append(key,val);
					console.log("here",key,val);
				}
			}
			if (typeof options.progress !== "undefined")
				this.onProgress = options.progress;
			if (typeof options.success !== "undefined")
				this.onSuccess = options.success;
			if (typeof options.error !== "undefined")
				this.onError = options.error;
			if (typeof options.fail !== "undefined")
				this.onFail = options.fail;
		}

		var that=this;
		$.ajax({
			url:that.url,
			type:"POST",
	        xhr: function() {  // Custom XMLHttpRequest
	            var myXhr = $.ajaxSettings.xhr();
	            if(myXhr.upload){ // Check if upload property exists
	                myXhr.upload.addEventListener('progress',that.onProgress, false); // For handling the progress of the upload
	            }
	            return myXhr;
	        },
			data:formData,
			cache:false,
			contentType: false,
            processData: false
		}).done(function (data) {
			console.log("ajax done");

			var jsonData = JSON.parse(data);
			console.log(jsonData);
			if(jsonData.status == "success"){
				//Example : jsonData.redirect = true, redirectURL = "http://google.com"
				if(jsonData.redirect){
					window.location.href = jsonData.redirectURL;
				}
				if(typeof that.onSuccess !== "undefined") that.onSuccess(jsonData);
			}
			else if(jsonData.status == "error"){
				if(that.onError != null) that.onError(jsonData);
			}

		}).fail(function(e) {
			console.log("ajax fail");
			if(that.onFail != null) that.onFail(e);
		});
	};

	$.fn.ajaxFileUpload = function(options){
		//var selector=data.selector;
		var ajaxUpload = new AjaxFile(this, options);
		return ajaxUpload;
	};

}(window.jQuery));

//Virtual Form
//<a id="test" href="#" data-url="/" data-post="{&quot;testing&quot;:&quot;testung12&quot;}">Press</a>
//$("#test").virtualAjaxForm({success:function(data){alert(data);},error:function(data){alert(data);},postData:{o:"t"}});
$(function($){
	VirtualAjaxForm = function(element, options){
		this.url,this.postData,this.onLoading,this.onSuccess,this.onError,this.onFail,this.method="POST",this.cache=false;
		this.completedOnce=false;
		this.element = element;
		console.log(this.url);
		this.url=$(this.element).attr("data-url");
		this.postData = new FormData();

		var dataMethod  = $(this.element).attr("data-method");
		if(typeof(dataMethod) !== "undefined"){
			this.method=dataMethod;
		}
		var dataCache  = $(this.element).attr("data-cache");
		if(typeof(dataCache) !== "undefined" && dataCache!="false"){
			this.cache=true;
		}

		// HTML file input user's choice...
		//formData.append(element[0].name, element[0].files[0]);

		// JavaScript file-like object...
		//var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
		//var blob = new Blob([content], { type: "text/xml"});
		var dataStr  = $(this.element).attr("data-post");
		if(typeof(dataStr) !== "undefined"){
			var tmpData = JSON.parse(dataStr);
			console.log(dataStr);
			var allDataNames = Object.getOwnPropertyNames(tmpData);
			for (var i = 0; i < allDataNames.length; i++) {
				var key = allDataNames[i];
				var val = tmpData[key];
				this.postData.append(key,val);
				console.log("here",key,val);
			}
		}

		//Events
		if(typeof options !== "undefined"){
			console.log(options);
			if (typeof options.postData !== "undefined"){
				var allDataNames = Object.getOwnPropertyNames(options.postData);
				for (var i = 0; i < allDataNames.length; i++) {
					var key = allDataNames[i];
					var val = options.postData[key];
					this.postData.append(key,val);
					console.log("here",key,val);
				}
				console.log("Having extra options data");
			}
			if (typeof options.loading !== "undefined")
				this.onLoading = options.loading;
			if (typeof options.success !== "undefined")
				this.onSuccess = options.success;
			if (typeof options.error !== "undefined")
				this.onError = options.error;
			if (typeof options.fail !== "undefined")
				this.onFail = options.fail;
		}

		//this.post();
		$(this.element).on("click", this, this.post);
		var that=this;


	};

	VirtualAjaxForm.prototype.post = function(e){
		console.log("reached");
		console.log(e.data);
		var that=e.data;
		if(that.cache && that.completedOnce) return;

		if(typeof that.onLoading !== "undefined") that.onLoading();

		var param=[];
		if(that.method=="POST"){
			param={
				url:that.url,
				type:that.method,
				data:that.postData,
				cache:that.cache,
				contentType: false,
	            processData: false
			};
		}
		else{
			param={
				url:that.url,
				type:that.method,
				cache:that.cache,
				contentType: false,
	            processData: false
			};
		}

		$.ajax(param).done(function (data) {
			console.log("ajax done");
			var jsonData = data;
			console.log(jsonData);
			if(jsonData.status == "success"){
				//Updates a specific part of page
				//Example : jsonData.updateExtra = true, affectedElement = ".admin-table tr.active", content = new data
				if(jsonData.updateExtra){
					$(jsonData.affectedElement).html(jsonData.content);
				}

				//Redirects to the Page
				//Example : jsonData.redirect = true, redirectURL = "http://google.com"
				console.log(jsonData.redirect);
				if(jsonData.redirect){
					//location.reload();
					window.location.href = jsonData.redirectURL;
				}
				that.completedOnce=true;
				if(typeof that.onSuccess !== "undefined") that.onSuccess(jsonData);
			}
			else if(jsonData.status == "error"){
				if(that.onError != null) that.onError(jsonData);
			}
		}).fail(function(e) {
			console.log("ajax fail");
			if(that.onFail != null) that.onFail(e);
		});
		return false;
	};

	$.fn.virtualAjaxForm = function(options){
		//var selector=data.selector;
		var virtualAjaxFrm = new VirtualAjaxForm(this, options);
		return virtualAjaxFrm;
	};

}(window.jQuery));
