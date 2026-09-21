/* ==========================================
   WHATSAPP CONFIGURATION
========================================== */

/*
   IMPORTANT:

   Enter WhatsApp number with country code.

   Example:

   const WHATSAPP_NUMBER = "919876543210";

   Do NOT use:
   +
   spaces
   -
   brackets
*/

const WHATSAPP_NUMBER = "919XXXXXXXXX";


/* ==========================================
   GET ELEMENTS
========================================== */

const workForm = document.getElementById("workForm");

const contactWhatsApp =
    document.getElementById("contactWhatsApp");

const floatingWhatsApp =
    document.getElementById("floatingWhatsApp");

const yearElement =
    document.getElementById("year");


/* ==========================================
   CURRENT YEAR
========================================== */

yearElement.textContent = new Date().getFullYear();


/* ==========================================
   CREATE BASIC WHATSAPP LINK
========================================== */

function getWhatsAppLink(message) {

    const encodedMessage =
        encodeURIComponent(message);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}


/* ==========================================
   CONTACT WHATSAPP
========================================== */

const generalMessage =
    "Hello, I would like to enquire about your tailoring services.";

const generalWhatsAppLink =
    getWhatsAppLink(generalMessage);


contactWhatsApp.href =
    generalWhatsAppLink;


floatingWhatsApp.href =
    generalWhatsAppLink;


/* ==========================================
   FORM SUBMISSION
========================================== */

workForm.addEventListener("submit", function(event) {

    event.preventDefault();


    /* -----------------------------
       GET FORM VALUES
    ----------------------------- */

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const quantity =
        document.getElementById("quantity").value;

    const date =
        document.getElementById("date").value;

    const details =
        document.getElementById("details").value.trim();


    /* -----------------------------
       VALIDATE PHONE
    ----------------------------- */

    const phonePattern =
        /^[6-9][0-9]{9}$/;


    if (!phonePattern.test(phone)) {

        alert(
            "Please enter a valid 10-digit Indian mobile number."
        );

        return;
    }


    /* -----------------------------
       FORMAT DATE
    ----------------------------- */

    let formattedDate =
        "Not specified";


    if (date) {

        const dateObject =
            new Date(date);

        formattedDate =
            dateObject.toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                }
            );
    }


    /* -----------------------------
       CREATE WHATSAPP MESSAGE
    ----------------------------- */

    const message =

`*NEW WORK ENQUIRY*

━━━━━━━━━━━━━━━━━━

*Customer Details*

Name: ${name}

Mobile: ${phone}

*Work Details*

Service: ${service}

Quantity: ${quantity}

Required By: ${formattedDate}

Additional Details:
${details || "No additional details provided."}

━━━━━━━━━━━━━━━━━━

Sent from the website.`;


    /* -----------------------------
       CREATE WHATSAPP URL
    ----------------------------- */

    const whatsappURL =
        getWhatsAppLink(message);


    /* -----------------------------
       OPEN WHATSAPP
    ----------------------------- */

    window.open(
        whatsappURL,
        "_blank"
    );

});
