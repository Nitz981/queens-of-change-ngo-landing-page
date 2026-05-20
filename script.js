// DARK MODE BUTTON

const darkModeBtn =
    document.getElementById("darkModeBtn");

let darkMode = false;

darkModeBtn.addEventListener("click", () => {

    darkMode = !darkMode;

    // DARK MODE//

    if (darkMode) {

        // BODY

        document.body.style.background =
            "#0F172A";

        document.body.style.color =
            "white";

        // NAVBAR

        document.querySelector("nav")
            .style.background =
            "rgba(15,23,42,0.8)";

        // CARDS

        document.querySelectorAll(
            ".card,.program-card,.testimonial-card"
        ).forEach(card => {

            card.style.background =
                "rgba(255,255,255,0.08)";

            card.style.backdropFilter =
                "blur(15px)";

            card.style.border =
                "1px solid rgba(255,255,255,0.1)";

            card.style.color =
                "white";

        });

        // PARAGRAPHS

        document.querySelectorAll("p")
            .forEach(p => {

                p.style.color =
                    "#ffffff";

            });

        // LINKS

        document.querySelectorAll("a")
            .forEach(link => {

                link.style.color =
                    "#ffffff";

            });

        // BUTTONS

        document.querySelectorAll(
            ".nav-btn,.primary-btn,.cta button"
        ).forEach(btn => {

            btn.style.background =
                "linear-gradient(135deg,#FF4D8D,#FF8A00,#FFD93D)";

            btn.style.color =
                "#111827";

        });

        // SECOND BUTTON

        document.querySelector(".secondary-btn")
            .style.background =
            "#ffffff";

        // FOOTER

        document.querySelector("footer")
            .style.background =
            "#020617";

        // STATS

        document.querySelector(".stats")
            .style.background =
            "linear-gradient(135deg,#FF4D8D,#FF8A00,#FFD93D)";

        // CTA

        document.querySelector(".cta")
            .style.background =
            "linear-gradient(135deg,#FF4D8D,#FF8A00,#FFD93D)";

        // ICON CHANGE

        darkModeBtn.innerHTML = "☀";

    }


    // LIGHT MODE//


    else {

        location.reload();

    }

});