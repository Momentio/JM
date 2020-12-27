document.getElementById("header__sidebar-toggle").addEventListener(
    "click", toggleSidebar, true
);

document.getElementById("sidebar-header__sidebar-toggle").addEventListener(
    "click", toggleSidebar, true
);

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");

    let currentSidebarClass = sidebar.className;

    if(currentSidebarClass.includes(
        "sidebar--show"
    )){
        sidebar.className =
            currentSidebarClass.replace(
                " sidebar--show", ""
            );
        
        document.getElementById("content").removeEventListener(
            "click", toggleSidebar, true
        );

    }else {
        sidebar.className =
            `${currentSidebarClass} sidebar--show`;
        
        document.getElementById("content").addEventListener(
            "click", toggleSidebar, true
        );
    }
};