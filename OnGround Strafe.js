var module = rise.registerModule("OnGround Strafe", "Made by x7lex");

script.handle("onUnload", function () {
    module.unregister();
});

module.handle("onStrafe", function (event) {
    if (player.isOnGround()) {
        player.strafe() // feel free to change
    }
});