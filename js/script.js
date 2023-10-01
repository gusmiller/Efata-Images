/**
 * OntarioTECK VBA Developers
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Project: Efata Ministries - Images Carrousel
 */

window.onload = function () { window.frameElement.height = document.body.scrollHeight + 'px' };
document.onload = function () { window.frameElement.height = document.body.scrollHeight + 'px' };

/**
 * Main jQuery entry call. Wrapped after the page load process has been completed and document can be manipulated safely.
 * It contains all functions available. These are my public keys for Bing and Open weather
 */
$(document).ready(function () {

      $("#celebrations").on("click", function(){
            $("#section-repairs").attr("hidden",true); // Add hidden attribute
            $("#section-celebrations").removeAttr("hidden"); // Remove attribute to selected option
      })

      $("#repairs").on("click", function(){
            $("#section-repairs").removeAttr("hidden"); // Remove attribute to selected option
            $("#section-celebrations").attr("hidden",true); // Add hidden attribute
      })
})