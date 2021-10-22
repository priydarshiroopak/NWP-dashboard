window.addEventListener('load', () => {
    const root = document.getElementById("root");
    const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
    const menu = root.querySelector(".db-menu");
    const menuItems = menu.querySelectorAll(".db-menu-item");
    const menuBorder = menu.querySelector(".db-menu-border");
    let activeItem = menu.querySelector(".active");

    function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");

    if (activeItem == item) return;

    if (activeItem) {
        activeItem.classList.remove("active");
    }


    item.classList.add("active");
    root.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);


    }

    function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

    }

    offsetMenuBorder(activeItem, menuBorder);

    menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));

    })

    window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
    });

    const headingTl = gsap.timeline({
        repeat: 0
      });
      
      headingTl
        .from(".db-heading", {
          duration: 1,
          scaleX: 0,
          transformOrigin: "left",
          ease: "expo.inOut"
        })
        .from(
          ".db-heading h1",
          {
            y: "100%",
            duration: 0.8,
            ease: "expo.out"
          },
          "-=0.2"
        )
        .from(
          ".db-heading",
          {
            css: { borderBottom: "0.2rem solid black" },
            duration: 2,
            transformOrigin: "right",
            ease: "none"
          },
          "-=1"
        )
        .from(
          ".db-heading h1",
          {
            duration: 2,
            transformOrigin: "right",
            ease: "none",
            css: { color: "black" }
          },
          "-=2"
        );
});