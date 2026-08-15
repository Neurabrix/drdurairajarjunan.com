(() => {
  "use strict";

  const allowedEvents = new Set([
    "click_call",
    "click_whatsapp",
    "click_directions",
    "click_email",
    "click_appointment"
  ]);

  function recordConversion(element) {
    const eventName = element.dataset.conversion;

    if (!allowedEvents.has(eventName)) {
      return;
    }

    const parameters = {
      event_category: "appointment",
      placement: element.dataset.placement || "unspecified",
      page_path: window.location.pathname
    };

    // Keep conversion events free of names, phone numbers, symptoms, diagnoses,
    // link destinations, and other personal or medical information.
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, parameters);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...parameters });
    }

    if (typeof window.plausible === "function") {
      window.plausible(eventName, { props: parameters });
    }

    window.dispatchEvent(
      new CustomEvent("appointment-conversion", {
        detail: { event: eventName, ...parameters }
      })
    );
  }

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const conversionLink = event.target.closest("[data-conversion]");

    if (conversionLink) {
      recordConversion(conversionLink);
    }
  });
})();
