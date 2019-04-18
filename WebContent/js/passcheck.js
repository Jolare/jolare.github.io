window.onload = function () {
    if (document.getElementById("user")) {
        new Vue({
            el: "#user",
            data: {
                type: "pass",
                hiddenPass: true,
                hiddenPass2: true,
                hiddenPass3: true
            }
        });
    }
    if (document.getElementById("login")) {
        new Vue({
            el: "#login",
            data: {
                hiddenPass: true
            }
        });
    }
};
