/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

//MAIN NAVIGATION BAR

$(document).ready(function(){
  $("#button1").click(function(){
	  if (window.getComputedStyle(button1).backgroundColor == "rgb(58, 58, 58)") {
    $(this).css({
		backgroundColor: '#3198DA'
		});
	$("#button2").css({
	  	backgroundColor: '#3A3A3A'
  		});
    $("#button3").css({
		backgroundColor: '#3A3A3A'
  		});
  	$("#sub-navigation1").slideDown("fast");
  	$("#sub-navigation2").slideUp("fast");
  	$("#sub-navigation3").slideUp("fast");
	}
  });

  $("#button2").click(function(){
	  if (window.getComputedStyle(button2).backgroundColor == "rgb(58, 58, 58)") {
    $(this).css({
		backgroundColor: '#3198DA'
		});
	$("#button1").css({
	  	backgroundColor: '#3A3A3A'
  		});
    $("#button3").css({
		backgroundColor: '#3A3A3A'
  		});
    $("#sub-navigation2").slideDown("fast");
    $("#sub-navigation1").slideUp("fast");
  	$("#sub-navigation3").slideUp("fast");
	}
  });

    $("#button3").click(function(){
  	  if (window.getComputedStyle(button3).backgroundColor == "rgb(58, 58, 58)") {
    $(this).css({
  		backgroundColor: '#3198DA'
  		});
  	$("#button1").css({
  	  	backgroundColor: '#3A3A3A'
    		});
    $("#button2").css({
  		backgroundColor: '#3A3A3A'
    		});
    $("#sub-navigation3").slideDown("fast");
    $("#sub-navigation1").slideUp("fast");
  	$("#sub-navigation2").slideUp("fast");
  	}
  });

//SUB-NAVIGATION BAR 1

    $("#subbutton0").click(function(){
  	  if (window.getComputedStyle(subbutton0).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton1").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

    $("#subbutton1").click(function(){
  	  if (window.getComputedStyle(subbutton1).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton0").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

//SUB-NAVIGATION BAR 2

    $("#subbutton2").click(function(){
  	  if (window.getComputedStyle(subbutton2).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton3").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton4").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton5").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton6").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton7").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton8").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton9").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

    $("#subbutton3").click(function(){
  	  if (window.getComputedStyle(subbutton3).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton2").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton4").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton5").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton6").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton7").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton8").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton9").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

      $("#subbutton4").click(function(){
    	  if (window.getComputedStyle(subbutton4).backgroundColor == "rgb(56, 97, 125)") {
      $(this).css({
    		backgroundColor: '#F79007'
    		});
    	$("#subbutton2").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton3").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton5").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton6").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton7").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton8").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton9").css({
    	  	backgroundColor: '#38617D'
      		});
    	}
  });

      $("#subbutton5").click(function(){
    	  if (window.getComputedStyle(subbutton5).backgroundColor == "rgb(56, 97, 125)") {
      $(this).css({
    		backgroundColor: '#F79007'
    		});
    	$("#subbutton2").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton3").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton4").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton6").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton7").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton8").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton9").css({
    	  	backgroundColor: '#38617D'
      		});
    	}
  });

      $("#subbutton6").click(function(){
    	  if (window.getComputedStyle(subbutton6).backgroundColor == "rgb(56, 97, 125)") {
      $(this).css({
    		backgroundColor: '#F79007'
    		});
    	$("#subbutton2").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton3").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton4").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton5").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton7").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton8").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton9").css({
    	  	backgroundColor: '#38617D'
      		});
    	}
  });

      $("#subbutton7").click(function(){
    	  if (window.getComputedStyle(subbutton7).backgroundColor == "rgb(56, 97, 125)") {
      $(this).css({
    		backgroundColor: '#F79007'
    		});
    	$("#subbutton2").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton3").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton4").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton5").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton6").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton8").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton9").css({
    	  	backgroundColor: '#38617D'
      		});
    	}
  });

      $("#subbutton8").click(function(){
    	  if (window.getComputedStyle(subbutton8).backgroundColor == "rgb(56, 97, 125)") {
      $(this).css({
    		backgroundColor: '#F79007'
    		});
    	$("#subbutton2").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton3").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton4").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton5").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton6").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton7").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton9").css({
    	  	backgroundColor: '#38617D'
      		});
    	}
  });

      $("#subbutton9").click(function(){
    	  if (window.getComputedStyle(subbutton9).backgroundColor == "rgb(56, 97, 125)") {
      $(this).css({
    		backgroundColor: '#F79007'
    		});
    	$("#subbutton2").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton3").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton4").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton5").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton6").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton7").css({
    	  	backgroundColor: '#38617D'
      		});
    	$("#subbutton8").css({
    	  	backgroundColor: '#38617D'
      		});
    	}
  });

//SUB-NAVIGATION BAR 3

    $("#subbutton10").click(function(){
  	  if (window.getComputedStyle(subbutton10).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton11").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton12").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton13").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton14").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton15").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

    $("#subbutton11").click(function(){
  	  if (window.getComputedStyle(subbutton11).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton10").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton12").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton13").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton14").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton15").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

    $("#subbutton12").click(function(){
  	  if (window.getComputedStyle(subbutton12).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton10").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton11").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton13").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton14").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton15").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

    $("#subbutton13").click(function(){
  	  if (window.getComputedStyle(subbutton13).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton10").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton11").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton12").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton14").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton15").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

    $("#subbutton14").click(function(){
  	  if (window.getComputedStyle(subbutton14).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton10").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton11").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton12").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton13").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton15").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

    $("#subbutton15").click(function(){
  	  if (window.getComputedStyle(subbutton15).backgroundColor == "rgb(56, 97, 125)") {
    $(this).css({
  		backgroundColor: '#F79007'
  		});
  	$("#subbutton10").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton11").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton12").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton13").css({
  	  	backgroundColor: '#38617D'
    		});
  	$("#subbutton14").css({
  	  	backgroundColor: '#38617D'
    		});
  	}
  });

});



