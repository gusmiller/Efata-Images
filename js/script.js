/**
 * OntarioTECK VBA Developers
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Project: Efata Ministries - Images Carrousel
 */

/**
 * Main jQuery entry call. Wrapped after the page load process has been completed and document can be manipulated safely.
 * It contains all functions available. These are my public keys for Bing and Open weather
 */
$(document).ready(function () {

      $("#repairs").on("click", function () {
            $("#section-repairs").removeAttr("hidden"); // Remove attribute to selected option            
            $("#section-celebrations").attr("hidden", true); // Add hidden attribute
            $("#section-ventilation").attr("hidden", true); // Add hidden attribute
      })

      $("#celebrations").on("click", function () {
            $("#section-repairs").attr("hidden", true); // Add hidden attribute            
            $("#section-celebrations").removeAttr("hidden"); // Remove attribute to selected option
            $("#section-ventilation").attr("hidden", true); // Add hidden attribute
      })

      $("#ventilation").on("click", function () {
            $("#section-repairs").attr("hidden", true); // Add hidden attribute            
            $("#section-celebrations").attr("hidden",true); // Remove attribute to selected option
            $("#section-ventilation").removeAttr("hidden"); // Add hidden attribute
      })

      /**
       * Initialize the page time-block elements, set their color and availability based in the time. We need t
       * build the HTML from scratch using text strings. I had in mind to CLONE a template row and add it but
       * it would not add; as the next row. Leave for later.
       */
      function init() {
            $("#section-repairs").removeAttr("hidden"); // Remove attribute to selected option
            $("#section-celebrations").attr("hidden", true); // Add hidden attribute
            $("#section-ventilation").attr("hidden", true); // Add hidden attribute
      }

      init();
})