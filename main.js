import kaplay from "kaplay";
const k = kaplay(
    {
        scale: 1,
        font: "monospace",
    }
)

k.loadBean();
k.setGravity(1000)

const Player = k.add([
    k.sprite("bean", "/examples/sprites/dino.png"),
    k.pos(k.center()),
    k.area(),
    k.body(),
    k.offscreen()
])

const JUMP_FORCE = 240;

// Player.play("idle");
// Player.onGround(() => {
//     if (!isKeyDown("left") && !isKeyDown("right")) {
//         Player.play("idle");
//     } else {
//         Player.play("run");
//     }
// });
Player.onKeyPress("space", () => {
    if (Player.isGrounded()) {
        Player.jump(JUMP_FORCE);
        Player.jump()
    }

})

Player.onExitScreen(() => {
    k.go("gameover")
})

k.scene("gameover", () => {
    k.add([k.text("Game Over!"), k.pos(k.center())])
})
k.add([
    k.rect(k.width(), 300),
    k.pos(0, 500),
    k.area(),
    k.outline(3),
    k.body({ isStatic: true })
])

let counter = 0;
const counterUi = k.add([k.text("0")])
k.loop(1, () => {
    counter++;
    counterUi.text = counter
    const speeds = [300, 500, 800]
    const currentSpeed = speeds[Math.floor(Math.random() * speeds.length)]

    k.add([
        k.rect(50, 50),
        k.pos(1200, 450),
        k.area(),
        k.body(),
        k.outline(3),
        k.move(k.vec2(-1, 0), currentSpeed)
    ])
})