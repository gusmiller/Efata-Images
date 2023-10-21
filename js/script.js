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

      /**
       * This function will remove all the carousel id's from sections. This is very tricky
       * since once it is change then next time Id would be different.
       */
      function removeAttributes(enabledObject) {

            const disableObject = ["section-celebrations", "section-ventilation", "section-baptism", "section-conference", "section-kitchen", "section-repairs"];

            // Remove attribute to selected option            
            enabledObject.removeAttr("hidden");

            // This obeject needs to be restored
            enabledObject.children("div").attr("id", "carousel");

            for (x = 0; x <= disableObject.length-1; x++) {

                  if (disableObject[x] != enabledObject[0].id) {

                        // This section will need to be hidden
                        $("#" + disableObject[x]).attr("hidden", true);

                        $("#" + disableObject[x]).children("div").each(function () {
                              $(this).attr("id", "carousel-disabled")
                        });
                  }

            }
      }

      // JQuery event listener for Repairs
      $("#repairs").on("click", function () {
            // This will remove the carousel references from ALL nodes. The array contains the elements that we want to hide
            removeAttributes($("#section-repairs"));
      })

      // JQuery event listener for Celebrations
      $("#celebrations").on("click", function () {
            // This will remove the carousel references from ALL nodes. The array contains the elements that we want to hide
            removeAttributes($("#section-celebrations"));
      })

      // JQuery event listener for Ventilation
      $("#ventilation").on("click", function () {
            // This will remove the carousel references from ALL nodes. The array contains the elements that we want to hide
            removeAttributes($("#section-ventilation"));
      })

      // JQuery event listener for baptism
      $("#baptism").on("click", function () {
            // This will remove the carousel references from ALL nodes. The array contains the elements that we want to hide
            removeAttributes($("#section-baptism"));
      })

      // JQuery event listener for baptism
      $("#conference").on("click", function () {
            // This will remove the carousel references from ALL nodes.  The array contains the elements that we want to hide
            removeAttributes($("#section-conference"));
      })

      // JQuery event listener for baptism
      $("#kitchen").on("click", function () {
            // This will remove the carousel references from ALL nodes.  The array contains the elements that we want to hide
            removeAttributes($("#section-kitchen"));
      })

      /**
       * Initialize the page time-block elements, set their color and availability based in the time. We need t
       * build the HTML from scratch using text strings. I had in mind to CLONE a template row and add it but
       * it would not add; as the next row. Leave for later.
       */
      function init() {
            // This will remove the carousel references from ALL nodes.
            removeAttributes($("#section-repairs"));
      }

      init();
})